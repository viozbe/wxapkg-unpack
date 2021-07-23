var __wxLibrary = {
  fileName: 'WAServiceMainContext.js',
  envType: 'Service',
  contextType: 'App:MainContext',
  execStart: Date.now()
}
try {
  var __defaultStackLimit__ = Error.stackTraceLimit;
  Error.stackTraceLimit = 40
} catch (e) {};
var __WAServiceStartTime__ = Date.now();
(function (global) {
  var __exportGlobal__ = {};;
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
        1964: (e, t, n) => {
          "use strict";

          function r(e, t, n, r, i) {
            var o = {};
            return Object.keys(r).forEach((function (e) {
              o[e] = r[e]
            })), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = n.slice().reverse().reduce((function (n, r) {
              return r(e, t, n) || n
            }), o), i && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(i) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null), o
          }
          n.r(t), n.d(t, {
            default: () => r
          })
        },
        6470: (e, t, n) => {
          "use strict";

          function r(e, t, n, r, i, o, a) {
            try {
              var s = e[o](a),
                l = s.value
            } catch (e) {
              return void n(e)
            }
            s.done ? t(l) : Promise.resolve(l).then(r, i)
          }

          function i(e) {
            return function () {
              var t = this,
                n = arguments;
              return new Promise((function (i, o) {
                var a = e.apply(t, n);

                function s(e) {
                  r(a, i, o, s, l, "next", e)
                }

                function l(e) {
                  r(a, i, o, s, l, "throw", e)
                }
                s(void 0)
              }))
            }
          }
          n.r(t), n.d(t, {
            default: () => i
          })
        },
        1217: (e, t, n) => {
          "use strict";

          function r(e, t, n, r) {
            n && Object.defineProperty(e, t, {
              enumerable: n.enumerable,
              configurable: n.configurable,
              writable: n.writable,
              value: n.initializer ? n.initializer.call(r) : void 0
            })
          }
          n.r(t), n.d(t, {
            default: () => r
          })
        },
        6647: (e, t, n) => {
          "use strict";

          function r(e, t) {
            throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.")
          }
          n.r(t), n.d(t, {
            default: () => r
          })
        },
        1466: (e, t, n) => {
          "use strict";

          function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n, e
          }

          function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              }))), n.push.apply(n, r)
            }
            return n
          }

          function o(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2 ? i(Object(n), !0).forEach((function (t) {
                r(e, t, n[t])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              }))
            }
            return e
          }
          n.r(t), n.d(t, {
            default: () => o
          })
        },
        5238: (e, t, n) => {
          "use strict";

          function r(e, t) {
            if (null == e) return {};
            var n, r, i = function (e, t) {
              if (null == e) return {};
              var n, r, i = {},
                o = Object.keys(e);
              for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
          }
          n.r(t), n.d(t, {
            default: () => r
          })
        },
        929: (e, t, n) => {
          "use strict";

          function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
          }
          n.r(t), n.d(t, {
            default: () => r
          })
        },
        5551: (e, t, n) => {
          var r = {
            "./applyDecoratedDescriptor": 1964,
            "./asyncToGenerator": 6470,
            "./initializerDefineProperty": 1217,
            "./initializerWarningHelper": 6647,
            "./objectSpread2": 1466,
            "./objectWithoutProperties": 5238,
            "./typeof": 929
          };

          function i(e) {
            var t = o(e);
            return n(t)
          }

          function o(e) {
            if (!n.o(r, e)) {
              var t = new Error("Cannot find module '" + e + "'");
              throw t.code = "MODULE_NOT_FOUND", t
            }
            return r[e]
          }
          i.keys = function () {
            return Object.keys(r)
          }, i.resolve = o, e.exports = i, i.id = 5551
        },
        5396: e => {
          var t = function (e) {
            "use strict";
            var t, n = Object.prototype,
              r = n.hasOwnProperty,
              i = "function" == typeof Symbol ? Symbol : {},
              o = i.iterator || "@@iterator",
              a = i.asyncIterator || "@@asyncIterator",
              s = i.toStringTag || "@@toStringTag";

            function l(e, t, n) {
              return Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }), e[t]
            }
            try {
              l({}, "")
            } catch (e) {
              l = function (e, t, n) {
                return e[t] = n
              }
            }

            function c(e, t, n, r) {
              var i = t && t.prototype instanceof h ? t : h,
                o = Object.create(i.prototype),
                a = new I(r || []);
              return o._invoke = function (e, t, n) {
                var r = u;
                return function (i, o) {
                  if (r === d) throw new Error("Generator is already running");
                  if (r === p) {
                    if ("throw" === i) throw o;
                    return T()
                  }
                  for (n.method = i, n.arg = o;;) {
                    var a = n.delegate;
                    if (a) {
                      var s = E(a, n);
                      if (s) {
                        if (s === g) continue;
                        return s
                      }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                      if (r === u) throw r = p, n.arg;
                      n.dispatchException(n.arg)
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    r = d;
                    var l = A(e, t, n);
                    if ("normal" === l.type) {
                      if (r = n.done ? p : f, l.arg === g) continue;
                      return {
                        value: l.arg,
                        done: n.done
                      }
                    }
                    "throw" === l.type && (r = p, n.method = "throw", n.arg = l.arg)
                  }
                }
              }(e, n, a), o
            }

            function A(e, t, n) {
              try {
                return {
                  type: "normal",
                  arg: e.call(t, n)
                }
              } catch (e) {
                return {
                  type: "throw",
                  arg: e
                }
              }
            }
            e.wrap = c;
            var u = "suspendedStart",
              f = "suspendedYield",
              d = "executing",
              p = "completed",
              g = {};

            function h() {}

            function _() {}

            function v() {}
            var b = {};
            b[o] = function () {
              return this
            };
            var m = Object.getPrototypeOf,
              w = m && m(m(k([])));
            w && w !== n && r.call(w, o) && (b = w);
            var y = v.prototype = h.prototype = Object.create(b);

            function C(e) {
              ["next", "throw", "return"].forEach((function (t) {
                l(e, t, (function (e) {
                  return this._invoke(t, e)
                }))
              }))
            }

            function x(e, t) {
              function n(i, o, a, s) {
                var l = A(e[i], e, o);
                if ("throw" !== l.type) {
                  var c = l.arg,
                    u = c.value;
                  return u && "object" == typeof u && r.call(u, "__await") ? t.resolve(u.__await).then((function (e) {
                    n("next", e, a, s)
                  }), (function (e) {
                    n("throw", e, a, s)
                  })) : t.resolve(u).then((function (e) {
                    c.value = e, a(c)
                  }), (function (e) {
                    return n("throw", e, a, s)
                  }))
                }
                s(l.arg)
              }
              var i;
              this._invoke = function (e, r) {
                function o() {
                  return new t((function (t, i) {
                    n(e, r, t, i)
                  }))
                }
                return i = i ? i.then(o, o) : o()
              }
            }

            function E(e, n) {
              var r = e.iterator[n.method];
              if (r === t) {
                if (n.delegate = null, "throw" === n.method) {
                  if (e.iterator.return && (n.method = "return", n.arg = t, E(e, n), "throw" === n.method)) return g;
                  n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return g
              }
              var i = A(r, e.iterator, n.arg);
              if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, g;
              var o = i.arg;
              return o ? o.done ? (n[e.resultName] = o.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, g) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, g)
            }

            function B(e) {
              var t = {
                tryLoc: e[0]
              };
              1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function S(e) {
              var t = e.completion || {};
              t.type = "normal", delete t.arg, e.completion = t
            }

            function I(e) {
              this.tryEntries = [{
                tryLoc: "root"
              }], e.forEach(B, this), this.reset(!0)
            }

            function k(e) {
              if (e) {
                var n = e[o];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                  var i = -1,
                    a = function n() {
                      for (; ++i < e.length;)
                        if (r.call(e, i)) return n.value = e[i], n.done = !1, n;
                      return n.value = t, n.done = !0, n
                    };
                  return a.next = a
                }
              }
              return {
                next: T
              }
            }

            function T() {
              return {
                value: t,
                done: !0
              }
            }
            return _.prototype = y.constructor = v, v.constructor = _, _.displayName = l(v, s, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return !!t && (t === _ || "GeneratorFunction" === (t.displayName || t.name))
            }, e.mark = function (e) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, l(e, s, "GeneratorFunction")), e.prototype = Object.create(y), e
            }, e.awrap = function (e) {
              return {
                __await: e
              }
            }, C(x.prototype), x.prototype[a] = function () {
              return this
            }, e.AsyncIterator = x, e.async = function (t, n, r, i, o) {
              void 0 === o && (o = Promise);
              var a = new x(c(t, n, r, i), o);
              return e.isGeneratorFunction(n) ? a : a.next().then((function (e) {
                return e.done ? e.value : a.next()
              }))
            }, C(y), l(y, s, "Generator"), y[o] = function () {
              return this
            }, y.toString = function () {
              return "[object Generator]"
            }, e.keys = function (e) {
              var t = [];
              for (var n in e) t.push(n);
              return t.reverse(),
                function n() {
                  for (; t.length;) {
                    var r = t.pop();
                    if (r in e) return n.value = r, n.done = !1, n
                  }
                  return n.done = !0, n
                }
            }, e.values = k, I.prototype = {
              constructor: I,
              reset: function (e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(S), !e)
                  for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var n = this;

                function i(r, i) {
                  return s.type = "throw", s.arg = e, n.next = r, i && (n.method = "next", n.arg = t), !!i
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var a = this.tryEntries[o],
                    s = a.completion;
                  if ("root" === a.tryLoc) return i("end");
                  if (a.tryLoc <= this.prev) {
                    var l = r.call(a, "catchLoc"),
                      c = r.call(a, "finallyLoc");
                    if (l && c) {
                      if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                    } else if (l) {
                      if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                    } else {
                      if (!c) throw new Error("try statement without catch or finally");
                      if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var i = this.tryEntries[n];
                  if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                    var o = i;
                    break
                  }
                }
                o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                var a = o ? o.completion : {};
                return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, g) : this.complete(a)
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), g
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), g
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var i = r.arg;
                      S(n)
                    }
                    return i
                  }
                }
                throw new Error("illegal catch attempt")
              },
              delegateYield: function (e, n, r) {
                return this.delegate = {
                  iterator: k(e),
                  resultName: n,
                  nextLoc: r
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
        7162: (e, t, n) => {
          n(5396)
        },
        9401: (e, t, n) => {
          "use strict";
          n.r(t);
          n(7162);
          const r = n(5551);
          r.keys().forEach((e => {
            BabelRuntimeHelpers[e.substr(2)] = r(e)
          }))
        },
        5482: (e, t, n) => {
          "use strict";
          n.r(t);
          n(634), n(6882), n(7072), n(4870), n(5735), n(3108), n(9731), n(9992), n(3430), n(7694), n(3985), n(5388), n(2994), n(3498), n(9509), n(7846), n(6635), n(5883), n(1804), n(2775), n(2586), n(3045), n(7890), n(3439), n(1515), n(7368), n(7950), n(103), n(977), n(5734), n(5940), n(8319), n(5794), n(8827), n(1715), n(1382), n(1982), n(3229), n(4074), n(4696), n(3675), n(6920), n(3161), n(723), n(6618), n(9527), n(315), n(6886), n(4962), n(6481), n(8990), n(884), n(5431), n(5704);
          ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"].forEach((e => {
            const t = globalThis[e];
            t && t.name !== e && Object.defineProperty(t, "name", {
              value: e
            })
          }))
        },
        305: (e, t, n) => {
          var r = n(816),
            i = n(3718),
            o = n(6541),
            a = n(5353),
            s = o.data,
            l = o.normalize,
            c = "USE_FUNCTION_CONSTRUCTOR",
            A = "AsyncIteratorPrototype",
            u = function (e, t) {
              if (i(e))
                for (var n = 0; n < e.length; n++) s[l(e[n])] = t
            };
          e.exports = function (e) {
            "object" == typeof e && (u(e.useNative, o.NATIVE), u(e.usePolyfill, o.POLYFILL), u(e.useFeatureDetection, null), r(e, c) && (a.USE_FUNCTION_CONSTRUCTOR = !!e.USE_FUNCTION_CONSTRUCTOR), r(e, A) && (a.USE_FUNCTION_CONSTRUCTOR = e.AsyncIteratorPrototype))
          }
        },
        3819: e => {
          e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e
          }
        },
        8505: (e, t, n) => {
          var r = n(5052);
          e.exports = function (e) {
            if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
            return e
          }
        },
        9736: (e, t, n) => {
          var r = n(95),
            i = n(2391),
            o = n(1787),
            a = r("unscopables"),
            s = Array.prototype;
          null == s[a] && o.f(s, a, {
            configurable: !0,
            value: i(null)
          }), e.exports = function (e) {
            s[a][e] = !0
          }
        },
        6637: (e, t, n) => {
          "use strict";
          var r = n(966).charAt;
          e.exports = function (e, t, n) {
            return t + (n ? r(e, t).length : 1)
          }
        },
        7728: e => {
          e.exports = function (e, t, n) {
            if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return e
          }
        },
        1176: (e, t, n) => {
          var r = n(5052);
          e.exports = function (e) {
            if (!r(e)) throw TypeError(String(e) + " is not an object");
            return e
          }
        },
        3339: e => {
          e.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
        },
        9918: (e, t, n) => {
          "use strict";
          var r, i = n(3339),
            o = n(7400),
            a = n(9859),
            s = n(5052),
            l = n(816),
            c = n(1589),
            A = n(5762),
            u = n(7487),
            f = n(1787).f,
            d = n(7567),
            p = n(6540),
            g = n(95),
            h = n(1441),
            _ = a.Int8Array,
            v = _ && _.prototype,
            b = a.Uint8ClampedArray,
            m = b && b.prototype,
            w = _ && d(_),
            y = v && d(v),
            C = Object.prototype,
            x = C.isPrototypeOf,
            E = g("toStringTag"),
            B = h("TYPED_ARRAY_TAG"),
            S = i && !!p && "Opera" !== c(a.opera),
            I = !1,
            k = {
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
            T = {
              BigInt64Array: 8,
              BigUint64Array: 8
            },
            D = function (e) {
              if (!s(e)) return !1;
              var t = c(e);
              return l(k, t) || l(T, t)
            };
          for (r in k) a[r] || (S = !1);
          if ((!S || "function" != typeof w || w === Function.prototype) && (w = function () {
              throw TypeError("Incorrect invocation")
            }, S))
            for (r in k) a[r] && p(a[r], w);
          if ((!S || !y || y === C) && (y = w.prototype, S))
            for (r in k) a[r] && p(a[r].prototype, y);
          if (S && d(m) !== y && p(m, y), o && !l(y, E))
            for (r in I = !0, f(y, E, {
                get: function () {
                  return s(this) ? this[B] : void 0
                }
              }), k) a[r] && A(a[r], B, r);
          e.exports = {
            NATIVE_ARRAY_BUFFER_VIEWS: S,
            TYPED_ARRAY_TAG: I && B,
            aTypedArray: function (e) {
              if (D(e)) return e;
              throw TypeError("Target is not a typed array")
            },
            aTypedArrayConstructor: function (e) {
              if (p) {
                if (x.call(w, e)) return e
              } else
                for (var t in k)
                  if (l(k, r)) {
                    var n = a[t];
                    if (n && (e === n || x.call(n, e))) return e
                  } throw TypeError("Target is not a typed array constructor")
            },
            exportTypedArrayMethod: function (e, t, n) {
              if (o) {
                if (n)
                  for (var r in k) {
                    var i = a[r];
                    if (i && l(i.prototype, e)) try {
                      delete i.prototype[e]
                    } catch (e) {}
                  }
                y[e] && !n || u(y, e, n ? t : S && v[e] || t)
              }
            },
            exportTypedArrayStaticMethod: function (e, t, n) {
              var r, i;
              if (o) {
                if (p) {
                  if (n)
                    for (r in k)
                      if ((i = a[r]) && l(i, e)) try {
                        delete i[e]
                      } catch (e) {}
                  if (w[e] && !n) return;
                  try {
                    return u(w, e, n ? t : S && w[e] || t)
                  } catch (e) {}
                }
                for (r in k) !(i = a[r]) || i[e] && !n || u(i, e, t)
              }
            },
            isView: function (e) {
              if (!s(e)) return !1;
              var t = c(e);
              return "DataView" === t || l(k, t) || l(T, t)
            },
            isTypedArray: D,
            TypedArray: w,
            TypedArrayPrototype: y
          }
        },
        3816: (e, t, n) => {
          "use strict";
          var r = n(9859),
            i = n(7400),
            o = n(3339),
            a = n(5762),
            s = n(8787),
            l = n(4229),
            c = n(7728),
            A = n(6051),
            u = n(4237),
            f = n(7331),
            d = n(6201),
            p = n(7567),
            g = n(6540),
            h = n(8151).f,
            _ = n(1787).f,
            v = n(7065),
            b = n(4555),
            m = n(6407),
            w = m.get,
            y = m.set,
            C = "ArrayBuffer",
            x = "DataView",
            E = "Wrong index",
            B = r.ArrayBuffer,
            S = B,
            I = r.DataView,
            k = I && I.prototype,
            T = Object.prototype,
            D = r.RangeError,
            L = d.pack,
            Q = d.unpack,
            M = function (e) {
              return [255 & e]
            },
            W = function (e) {
              return [255 & e, e >> 8 & 255]
            },
            O = function (e) {
              return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
            },
            N = function (e) {
              return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
            },
            F = function (e) {
              return L(e, 23, 4)
            },
            R = function (e) {
              return L(e, 52, 8)
            },
            P = function (e, t) {
              _(e.prototype, t, {
                get: function () {
                  return w(this)[t]
                }
              })
            },
            G = function (e, t, n, r) {
              var i = f(n),
                o = w(e);
              if (i + t > o.byteLength) throw D(E);
              var a = w(o.buffer).bytes,
                s = i + o.byteOffset,
                l = a.slice(s, s + t);
              return r ? l : l.reverse()
            },
            j = function (e, t, n, r, i, o) {
              var a = f(n),
                s = w(e);
              if (a + t > s.byteLength) throw D(E);
              for (var l = w(s.buffer).bytes, c = a + s.byteOffset, A = r(+i), u = 0; u < t; u++) l[c + u] = A[o ? u : t - u - 1]
            };
          if (o) {
            if (!l((function () {
                B(1)
              })) || !l((function () {
                new B(-1)
              })) || l((function () {
                return new B, new B(1.5), new B(NaN), B.name != C
              }))) {
              for (var V, U = (S = function (e) {
                  return c(this, S), new B(f(e))
                }).prototype = B.prototype, J = h(B), Y = 0; J.length > Y;)(V = J[Y++]) in S || a(S, V, B[V]);
              U.constructor = S
            }
            g && p(k) !== T && g(k, T);
            var Z = new I(new S(2)),
              H = k.setInt8;
            Z.setInt8(0, 2147483648), Z.setInt8(1, 2147483649), !Z.getInt8(0) && Z.getInt8(1) || s(k, {
              setInt8: function (e, t) {
                H.call(this, e, t << 24 >> 24)
              },
              setUint8: function (e, t) {
                H.call(this, e, t << 24 >> 24)
              }
            }, {
              unsafe: !0
            })
          } else S = function (e) {
            c(this, S, C);
            var t = f(e);
            y(this, {
              bytes: v.call(new Array(t), 0),
              byteLength: t
            }), i || (this.byteLength = t)
          }, I = function (e, t, n) {
            c(this, I, x), c(e, S, x);
            var r = w(e).byteLength,
              o = A(t);
            if (o < 0 || o > r) throw D("Wrong offset");
            if (o + (n = void 0 === n ? r - o : u(n)) > r) throw D("Wrong length");
            y(this, {
              buffer: e,
              byteLength: n,
              byteOffset: o
            }), i || (this.buffer = e, this.byteLength = n, this.byteOffset = o)
          }, i && (P(S, "byteLength"), P(I, "buffer"), P(I, "byteLength"), P(I, "byteOffset")), s(I.prototype, {
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
              return N(G(this, 4, e, arguments.length > 1 ? arguments[1] : void 0))
            },
            getUint32: function (e) {
              return N(G(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
            },
            getFloat32: function (e) {
              return Q(G(this, 4, e, arguments.length > 1 ? arguments[1] : void 0), 23)
            },
            getFloat64: function (e) {
              return Q(G(this, 8, e, arguments.length > 1 ? arguments[1] : void 0), 52)
            },
            setInt8: function (e, t) {
              j(this, 1, e, M, t)
            },
            setUint8: function (e, t) {
              j(this, 1, e, M, t)
            },
            setInt16: function (e, t) {
              j(this, 2, e, W, t, arguments.length > 2 ? arguments[2] : void 0)
            },
            setUint16: function (e, t) {
              j(this, 2, e, W, t, arguments.length > 2 ? arguments[2] : void 0)
            },
            setInt32: function (e, t) {
              j(this, 4, e, O, t, arguments.length > 2 ? arguments[2] : void 0)
            },
            setUint32: function (e, t) {
              j(this, 4, e, O, t, arguments.length > 2 ? arguments[2] : void 0)
            },
            setFloat32: function (e, t) {
              j(this, 4, e, F, t, arguments.length > 2 ? arguments[2] : void 0)
            },
            setFloat64: function (e, t) {
              j(this, 8, e, R, t, arguments.length > 2 ? arguments[2] : void 0)
            }
          });
          b(S, C), b(I, x), e.exports = {
            ArrayBuffer: S,
            DataView: I
          }
        },
        7065: (e, t, n) => {
          "use strict";
          var r = n(2991),
            i = n(3231),
            o = n(4237);
          e.exports = function (e) {
            for (var t = r(this), n = o(t.length), a = arguments.length, s = i(a > 1 ? arguments[1] : void 0, n), l = a > 2 ? arguments[2] : void 0, c = void 0 === l ? n : i(l, n); c > s;) t[s++] = e;
            return t
          }
        },
        9540: (e, t, n) => {
          var r = n(905),
            i = n(4237),
            o = n(3231),
            a = function (e) {
              return function (t, n, a) {
                var s, l = r(t),
                  c = i(l.length),
                  A = o(a, c);
                if (e && n != n) {
                  for (; c > A;)
                    if ((s = l[A++]) != s) return !0
                } else
                  for (; c > A; A++)
                    if ((e || A in l) && l[A] === n) return e || A || 0;
                return !e && -1
              }
            };
          e.exports = {
            includes: a(!0),
            indexOf: a(!1)
          }
        },
        9996: (e, t, n) => {
          var r = n(7636),
            i = n(9337),
            o = n(2991),
            a = n(4237),
            s = n(7501),
            l = [].push,
            c = function (e) {
              var t = 1 == e,
                n = 2 == e,
                c = 3 == e,
                A = 4 == e,
                u = 6 == e,
                f = 7 == e,
                d = 5 == e || u;
              return function (p, g, h, _) {
                for (var v, b, m = o(p), w = i(m), y = r(g, h, 3), C = a(w.length), x = 0, E = _ || s, B = t ? E(p, C) : n || f ? E(p, 0) : void 0; C > x; x++)
                  if ((d || x in w) && (b = y(v = w[x], x, m), e))
                    if (t) B[x] = b;
                    else if (b) switch (e) {
                  case 3:
                    return !0;
                  case 5:
                    return v;
                  case 6:
                    return x;
                  case 2:
                    l.call(B, v)
                } else switch (e) {
                  case 4:
                    return !1;
                  case 7:
                    l.call(B, v)
                }
                return u ? -1 : c || A ? A : B
              }
            };
          e.exports = {
            forEach: c(0),
            map: c(1),
            filter: c(2),
            some: c(3),
            every: c(4),
            find: c(5),
            findIndex: c(6),
            filterOut: c(7)
          }
        },
        6038: (e, t, n) => {
          "use strict";
          var r = n(4229);
          e.exports = function (e, t) {
            var n = [][e];
            return !!n && r((function () {
              n.call(null, t || function () {
                throw 1
              }, 1)
            }))
          }
        },
        3143: (e, t, n) => {
          var r = n(3819),
            i = n(2991),
            o = n(9337),
            a = n(4237),
            s = function (e) {
              return function (t, n, s, l) {
                r(n);
                var c = i(t),
                  A = o(c),
                  u = a(c.length),
                  f = e ? u - 1 : 0,
                  d = e ? -1 : 1;
                if (s < 2)
                  for (;;) {
                    if (f in A) {
                      l = A[f], f += d;
                      break
                    }
                    if (f += d, e ? f < 0 : u <= f) throw TypeError("Reduce of empty array with no initial value")
                  }
                for (; e ? f >= 0 : u > f; f += d) f in A && (l = n(l, A[f], f, c));
                return l
              }
            };
          e.exports = {
            left: s(!1),
            right: s(!0)
          }
        },
        3867: e => {
          var t = Math.floor,
            n = function (e, o) {
              var a = e.length,
                s = t(a / 2);
              return a < 8 ? r(e, o) : i(n(e.slice(0, s), o), n(e.slice(s), o), o)
            },
            r = function (e, t) {
              for (var n, r, i = e.length, o = 1; o < i;) {
                for (r = o, n = e[o]; r && t(e[r - 1], n) > 0;) e[r] = e[--r];
                r !== o++ && (e[r] = n)
              }
              return e
            },
            i = function (e, t, n) {
              for (var r = e.length, i = t.length, o = 0, a = 0, s = []; o < r || a < i;) o < r && a < i ? s.push(n(e[o], t[a]) <= 0 ? e[o++] : t[a++]) : s.push(o < r ? e[o++] : t[a++]);
              return s
            };
          e.exports = n
        },
        7501: (e, t, n) => {
          var r = n(5052),
            i = n(3718),
            o = n(95)("species");
          e.exports = function (e, t) {
            var n;
            return i(e) && ("function" != typeof (n = e.constructor) || n !== Array && !i(n.prototype) ? r(n) && null === (n = n[o]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
          }
        },
        4575: (e, t, n) => {
          var r = n(95)("iterator"),
            i = !1;
          try {
            var o = 0,
              a = {
                next: function () {
                  return {
                    done: !!o++
                  }
                },
                return: function () {
                  i = !0
                }
              };
            a[r] = function () {
              return this
            }, Array.from(a, (function () {
              throw 2
            }))
          } catch (e) {}
          e.exports = function (e, t) {
            if (!t && !i) return !1;
            var n = !1;
            try {
              var o = {};
              o[r] = function () {
                return {
                  next: function () {
                    return {
                      done: n = !0
                    }
                  }
                }
              }, e(o)
            } catch (e) {}
            return n
          }
        },
        7079: e => {
          var t = {}.toString;
          e.exports = function (e) {
            return t.call(e).slice(8, -1)
          }
        },
        1589: (e, t, n) => {
          var r = n(1601),
            i = n(7079),
            o = n(95)("toStringTag"),
            a = "Arguments" == i(function () {
              return arguments
            }());
          e.exports = r ? i : function (e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
              try {
                return e[t]
              } catch (e) {}
            }(t = Object(e), o)) ? n : a ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r
          }
        },
        7081: (e, t, n) => {
          var r = n(816),
            i = n(4826),
            o = n(7933),
            a = n(1787);
          e.exports = function (e, t) {
            for (var n = i(t), s = a.f, l = o.f, c = 0; c < n.length; c++) {
              var A = n[c];
              r(e, A) || s(e, A, l(t, A))
            }
          }
        },
        7528: (e, t, n) => {
          var r = n(4229);
          e.exports = !r((function () {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
          }))
        },
        3723: (e, t, n) => {
          "use strict";
          var r = n(693).IteratorPrototype,
            i = n(2391),
            o = n(5358),
            a = n(4555),
            s = n(5495),
            l = function () {
              return this
            };
          e.exports = function (e, t, n) {
            var c = t + " Iterator";
            return e.prototype = i(r, {
              next: o(1, n)
            }), a(e, c, !1, !0), s[c] = l, e
          }
        },
        5762: (e, t, n) => {
          var r = n(7400),
            i = n(1787),
            o = n(5358);
          e.exports = r ? function (e, t, n) {
            return i.f(e, t, o(1, n))
          } : function (e, t, n) {
            return e[t] = n, e
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
        2324: (e, t, n) => {
          "use strict";
          var r = n(2066),
            i = n(1787),
            o = n(5358);
          e.exports = function (e, t, n) {
            var a = r(t);
            a in e ? i.f(e, a, o(0, n)) : e[a] = n
          }
        },
        7675: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(3723),
            o = n(7567),
            a = n(6540),
            s = n(4555),
            l = n(5762),
            c = n(7487),
            A = n(95),
            u = n(4231),
            f = n(5495),
            d = n(693),
            p = d.IteratorPrototype,
            g = d.BUGGY_SAFARI_ITERATORS,
            h = A("iterator"),
            _ = "keys",
            v = "values",
            b = "entries",
            m = function () {
              return this
            };
          e.exports = function (e, t, n, A, d, w, y) {
            i(n, t, A);
            var C, x, E, B = function (e) {
                if (e === d && D) return D;
                if (!g && e in k) return k[e];
                switch (e) {
                  case _:
                  case v:
                  case b:
                    return function () {
                      return new n(this, e)
                    }
                }
                return function () {
                  return new n(this)
                }
              },
              S = t + " Iterator",
              I = !1,
              k = e.prototype,
              T = k[h] || k["@@iterator"] || d && k[d],
              D = !g && T || B(d),
              L = "Array" == t && k.entries || T;
            if (L && (C = o(L.call(new e)), p !== Object.prototype && C.next && (u || o(C) === p || (a ? a(C, p) : "function" != typeof C[h] && l(C, h, m)), s(C, S, !0, !0), u && (f[S] = m))), d == v && T && T.name !== v && (I = !0, D = function () {
                return T.call(this)
              }), u && !y || k[h] === D || l(k, h, D), f[t] = D, d)
              if (x = {
                  values: B(v),
                  keys: w ? D : B(_),
                  entries: B(b)
                }, y)
                for (E in x)(g || I || !(E in k)) && c(k, E, x[E]);
              else r({
                target: t,
                proto: !0,
                forced: g || I
              }, x);
            return x
          }
        },
        8423: (e, t, n) => {
          var r = n(9276),
            i = n(816),
            o = n(5391),
            a = n(1787).f;
          e.exports = function (e) {
            var t = r.Symbol || (r.Symbol = {});
            i(t, e) || a(t, e, {
              value: o.f(e)
            })
          }
        },
        7400: (e, t, n) => {
          var r = n(4229);
          e.exports = !r((function () {
            return 7 != Object.defineProperty({}, 1, {
              get: function () {
                return 7
              }
            })[1]
          }))
        },
        2635: (e, t, n) => {
          var r = n(9859),
            i = n(5052),
            o = r.document,
            a = i(o) && i(o.createElement);
          e.exports = function (e) {
            return a ? o.createElement(e) : {}
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
        2671: (e, t, n) => {
          var r = n(598).match(/firefox\/(\d+)/i);
          e.exports = !!r && +r[1]
        },
        8639: e => {
          e.exports = "object" == typeof window
        },
        8506: (e, t, n) => {
          var r = n(598);
          e.exports = /MSIE|Trident/.test(r)
        },
        2023: (e, t, n) => {
          var r = n(598);
          e.exports = /(?:iphone|ipod|ipad).*applewebkit/i.test(r)
        },
        8801: (e, t, n) => {
          var r = n(7079),
            i = n(9859);
          e.exports = "process" == r(i.process)
        },
        263: (e, t, n) => {
          var r = n(598);
          e.exports = /web0s(?!.*chrome)/i.test(r)
        },
        598: (e, t, n) => {
          var r = n(1333);
          e.exports = r("navigator", "userAgent") || ""
        },
        6358: (e, t, n) => {
          var r, i, o = n(9859),
            a = n(598),
            s = o.process,
            l = s && s.versions,
            c = l && l.v8;
          c ? i = (r = c.split("."))[0] < 4 ? 1 : r[0] + r[1] : a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (i = r[1]), e.exports = i && +i
        },
        9811: (e, t, n) => {
          var r = n(598).match(/AppleWebKit\/(\d+)\./);
          e.exports = !!r && +r[1]
        },
        3837: e => {
          e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        },
        3103: (e, t, n) => {
          var r = n(9859),
            i = n(7933).f,
            o = n(5762),
            a = n(7487),
            s = n(2079),
            l = n(7081),
            c = n(6541);
          e.exports = function (e, t) {
            var n, A, u, f, d, p = e.target,
              g = e.global,
              h = e.stat;
            if (n = g ? r : h ? r[p] || s(p, {}) : (r[p] || {}).prototype)
              for (A in t) {
                if (f = t[A], u = e.noTargetGet ? (d = i(n, A)) && d.value : n[A], !c(g ? A : p + (h ? "." : "#") + A, e.forced) && void 0 !== u) {
                  if (typeof f == typeof u) continue;
                  l(f, u)
                }(e.sham || u && u.sham) && o(f, "sham", !0), a(n, A, f, e)
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
        4954: (e, t, n) => {
          "use strict";
          n(7950);
          var r = n(7487),
            i = n(3466),
            o = n(4229),
            a = n(95),
            s = n(5762),
            l = a("species"),
            c = RegExp.prototype;
          e.exports = function (e, t, n, A) {
            var u = a(e),
              f = !o((function () {
                var t = {};
                return t[u] = function () {
                  return 7
                }, 7 != "" [e](t)
              })),
              d = f && !o((function () {
                var t = !1,
                  n = /a/;
                return "split" === e && ((n = {}).constructor = {}, n.constructor[l] = function () {
                  return n
                }, n.flags = "", n[u] = /./ [u]), n.exec = function () {
                  return t = !0, null
                }, n[u](""), !t
              }));
            if (!f || !d || n) {
              var p = /./ [u],
                g = t(u, "" [e], (function (e, t, n, r, o) {
                  var a = t.exec;
                  return a === i || a === c.exec ? f && !o ? {
                    done: !0,
                    value: p.call(t, n, r)
                  } : {
                    done: !0,
                    value: e.call(n, t, r)
                  } : {
                    done: !1
                  }
                }));
              r(String.prototype, e, g[0]), r(c, u, g[1])
            }
            A && s(c[u], "sham", !0)
          }
        },
        4990: (e, t, n) => {
          "use strict";
          var r = n(3718),
            i = n(4237),
            o = n(7636),
            a = function (e, t, n, s, l, c, A, u) {
              for (var f, d = l, p = 0, g = !!A && o(A, u, 3); p < s;) {
                if (p in n) {
                  if (f = g ? g(n[p], p, t) : n[p], c > 0 && r(f)) d = a(e, t, f, i(f.length), d, c - 1) - 1;
                  else {
                    if (d >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                    e[d] = f
                  }
                  d++
                }
                p++
              }
              return d
            };
          e.exports = a
        },
        7636: (e, t, n) => {
          var r = n(3819);
          e.exports = function (e, t, n) {
            if (r(e), void 0 === t) return e;
            switch (n) {
              case 0:
                return function () {
                  return e.call(t)
                };
              case 1:
                return function (n) {
                  return e.call(t, n)
                };
              case 2:
                return function (n, r) {
                  return e.call(t, n, r)
                };
              case 3:
                return function (n, r, i) {
                  return e.call(t, n, r, i)
                }
            }
            return function () {
              return e.apply(t, arguments)
            }
          }
        },
        1333: (e, t, n) => {
          var r = n(9276),
            i = n(9859),
            o = function (e) {
              return "function" == typeof e ? e : void 0
            };
          e.exports = function (e, t) {
            return arguments.length < 2 ? o(r[e]) || o(i[e]) : r[e] && r[e][t] || i[e] && i[e][t]
          }
        },
        8830: (e, t, n) => {
          var r = n(1589),
            i = n(5495),
            o = n(95)("iterator");
          e.exports = function (e) {
            if (null != e) return e[o] || e["@@iterator"] || i[r(e)]
          }
        },
        17: (e, t, n) => {
          var r = n(2991),
            i = Math.floor,
            o = "".replace,
            a = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
            s = /\$([$&'`]|\d{1,2})/g;
          e.exports = function (e, t, n, l, c, A) {
            var u = n + e.length,
              f = l.length,
              d = s;
            return void 0 !== c && (c = r(c), d = a), o.call(A, d, (function (r, o) {
              var a;
              switch (o.charAt(0)) {
                case "$":
                  return "$";
                case "&":
                  return e;
                case "`":
                  return t.slice(0, n);
                case "'":
                  return t.slice(u);
                case "<":
                  a = c[o.slice(1, -1)];
                  break;
                default:
                  var s = +o;
                  if (0 === s) return r;
                  if (s > f) {
                    var A = i(s / 10);
                    return 0 === A ? r : A <= f ? void 0 === l[A - 1] ? o.charAt(1) : l[A - 1] + o.charAt(1) : r
                  }
                  a = l[s - 1]
              }
              return void 0 === a ? "" : a
            }))
          }
        },
        9859: (e, t, n) => {
          var r = function (e) {
            return e && e.Math == Math && e
          };
          e.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof n.g && n.g) || function () {
            return this
          }() || Function("return this")()
        },
        816: (e, t, n) => {
          var r = n(2991),
            i = {}.hasOwnProperty;
          e.exports = Object.hasOwn || function (e, t) {
            return i.call(r(e), t)
          }
        },
        5977: e => {
          e.exports = {}
        },
        4665: (e, t, n) => {
          var r = n(9859);
          e.exports = function (e, t) {
            var n = r.console;
            n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
          }
        },
        3777: (e, t, n) => {
          var r = n(1333);
          e.exports = r("document", "documentElement")
        },
        4394: (e, t, n) => {
          var r = n(7400),
            i = n(4229),
            o = n(2635);
          e.exports = !r && !i((function () {
            return 7 != Object.defineProperty(o("div"), "a", {
              get: function () {
                return 7
              }
            }).a
          }))
        },
        6201: e => {
          var t = Math.abs,
            n = Math.pow,
            r = Math.floor,
            i = Math.log,
            o = Math.LN2;
          e.exports = {
            pack: function (e, a, s) {
              var l, c, A, u = new Array(s),
                f = 8 * s - a - 1,
                d = (1 << f) - 1,
                p = d >> 1,
                g = 23 === a ? n(2, -24) - n(2, -77) : 0,
                h = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0,
                _ = 0;
              for ((e = t(e)) != e || e === 1 / 0 ? (c = e != e ? 1 : 0, l = d) : (l = r(i(e) / o), e * (A = n(2, -l)) < 1 && (l--, A *= 2), (e += l + p >= 1 ? g / A : g * n(2, 1 - p)) * A >= 2 && (l++, A /= 2), l + p >= d ? (c = 0, l = d) : l + p >= 1 ? (c = (e * A - 1) * n(2, a), l += p) : (c = e * n(2, p - 1) * n(2, a), l = 0)); a >= 8; u[_++] = 255 & c, c /= 256, a -= 8);
              for (l = l << a | c, f += a; f > 0; u[_++] = 255 & l, l /= 256, f -= 8);
              return u[--_] |= 128 * h, u
            },
            unpack: function (e, t) {
              var r, i = e.length,
                o = 8 * i - t - 1,
                a = (1 << o) - 1,
                s = a >> 1,
                l = o - 7,
                c = i - 1,
                A = e[c--],
                u = 127 & A;
              for (A >>= 7; l > 0; u = 256 * u + e[c], c--, l -= 8);
              for (r = u & (1 << -l) - 1, u >>= -l, l += t; l > 0; r = 256 * r + e[c], c--, l -= 8);
              if (0 === u) u = 1 - s;
              else {
                if (u === a) return r ? NaN : A ? -1 / 0 : 1 / 0;
                r += n(2, t), u -= s
              }
              return (A ? -1 : 1) * r * n(2, u - t)
            }
          }
        },
        9337: (e, t, n) => {
          var r = n(4229),
            i = n(7079),
            o = "".split;
          e.exports = r((function () {
            return !Object("z").propertyIsEnumerable(0)
          })) ? function (e) {
            return "String" == i(e) ? o.call(e, "") : Object(e)
          } : Object
        },
        835: (e, t, n) => {
          var r = n(5052),
            i = n(6540);
          e.exports = function (e, t, n) {
            var o, a;
            return i && "function" == typeof (o = t.constructor) && o !== n && r(a = o.prototype) && a !== n.prototype && i(e, a), e
          }
        },
        8511: (e, t, n) => {
          var r = n(5353),
            i = Function.toString;
          "function" != typeof r.inspectSource && (r.inspectSource = function (e) {
            return i.call(e)
          }), e.exports = r.inspectSource
        },
        6407: (e, t, n) => {
          var r, i, o, a = n(8694),
            s = n(9859),
            l = n(5052),
            c = n(5762),
            A = n(816),
            u = n(5353),
            f = n(4399),
            d = n(5977),
            p = "Object already initialized",
            g = s.WeakMap;
          if (a || u.state) {
            var h = u.state || (u.state = new g),
              _ = h.get,
              v = h.has,
              b = h.set;
            r = function (e, t) {
              if (v.call(h, e)) throw new TypeError(p);
              return t.facade = e, b.call(h, e, t), t
            }, i = function (e) {
              return _.call(h, e) || {}
            }, o = function (e) {
              return v.call(h, e)
            }
          } else {
            var m = f("state");
            d[m] = !0, r = function (e, t) {
              if (A(e, m)) throw new TypeError(p);
              return t.facade = e, c(e, m, t), t
            }, i = function (e) {
              return A(e, m) ? e[m] : {}
            }, o = function (e) {
              return A(e, m)
            }
          }
          e.exports = {
            set: r,
            get: i,
            has: o,
            enforce: function (e) {
              return o(e) ? i(e) : r(e, {})
            },
            getterFor: function (e) {
              return function (t) {
                var n;
                if (!l(t) || (n = i(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                return n
              }
            }
          }
        },
        1943: (e, t, n) => {
          var r = n(95),
            i = n(5495),
            o = r("iterator"),
            a = Array.prototype;
          e.exports = function (e) {
            return void 0 !== e && (i.Array === e || a[o] === e)
          }
        },
        3718: (e, t, n) => {
          var r = n(7079);
          e.exports = Array.isArray || function (e) {
            return "Array" == r(e)
          }
        },
        6541: (e, t, n) => {
          var r = n(4229),
            i = /#|\.prototype\./,
            o = function (e, t) {
              var n = s[a(e)];
              return n == c || n != l && ("function" == typeof t ? r(t) : !!t)
            },
            a = o.normalize = function (e) {
              return String(e).replace(i, ".").toLowerCase()
            },
            s = o.data = {},
            l = o.NATIVE = "N",
            c = o.POLYFILL = "P";
          e.exports = o
        },
        5052: e => {
          e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
          }
        },
        4231: e => {
          e.exports = !1
        },
        8311: (e, t, n) => {
          var r = n(5052),
            i = n(7079),
            o = n(95)("match");
          e.exports = function (e) {
            var t;
            return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e))
          }
        },
        9003: (e, t, n) => {
          var r = n(1176),
            i = n(1943),
            o = n(4237),
            a = n(7636),
            s = n(8830),
            l = n(7281),
            c = function (e, t) {
              this.stopped = e, this.result = t
            };
          e.exports = function (e, t, n) {
            var A, u, f, d, p, g, h, _ = n && n.that,
              v = !(!n || !n.AS_ENTRIES),
              b = !(!n || !n.IS_ITERATOR),
              m = !(!n || !n.INTERRUPTED),
              w = a(t, _, 1 + v + m),
              y = function (e) {
                return A && l(A), new c(!0, e)
              },
              C = function (e) {
                return v ? (r(e), m ? w(e[0], e[1], y) : w(e[0], e[1])) : m ? w(e, y) : w(e)
              };
            if (b) A = e;
            else {
              if ("function" != typeof (u = s(e))) throw TypeError("Target is not iterable");
              if (i(u)) {
                for (f = 0, d = o(e.length); d > f; f++)
                  if ((p = C(e[f])) && p instanceof c) return p;
                return new c(!1)
              }
              A = u.call(e)
            }
            for (g = A.next; !(h = g.call(A)).done;) {
              try {
                p = C(h.value)
              } catch (e) {
                throw l(A), e
              }
              if ("object" == typeof p && p && p instanceof c) return p
            }
            return new c(!1)
          }
        },
        7281: (e, t, n) => {
          var r = n(1176);
          e.exports = function (e) {
            var t = e.return;
            if (void 0 !== t) return r(t.call(e)).value
          }
        },
        693: (e, t, n) => {
          "use strict";
          var r, i, o, a = n(4229),
            s = n(7567),
            l = n(5762),
            c = n(816),
            A = n(95),
            u = n(4231),
            f = A("iterator"),
            d = !1;
          [].keys && ("next" in (o = [].keys()) ? (i = s(s(o))) !== Object.prototype && (r = i) : d = !0);
          var p = null == r || a((function () {
            var e = {};
            return r[f].call(e) !== e
          }));
          p && (r = {}), u && !p || c(r, f) || l(r, f, (function () {
            return this
          })), e.exports = {
            IteratorPrototype: r,
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
        4794: (e, t, n) => {
          var r, i, o, a, s, l, c, A, u = n(9859),
            f = n(7933).f,
            d = n(5795).set,
            p = n(2023),
            g = n(263),
            h = n(8801),
            _ = u.MutationObserver || u.WebKitMutationObserver,
            v = u.document,
            b = u.process,
            m = u.Promise,
            w = f(u, "queueMicrotask"),
            y = w && w.value;
          y || (r = function () {
            var e, t;
            for (h && (e = b.domain) && e.exit(); i;) {
              t = i.fn, i = i.next;
              try {
                t()
              } catch (e) {
                throw i ? a() : o = void 0, e
              }
            }
            o = void 0, e && e.enter()
          }, p || h || g || !_ || !v ? m && m.resolve ? ((c = m.resolve(void 0)).constructor = m, A = c.then, a = function () {
            A.call(c, r)
          }) : a = h ? function () {
            b.nextTick(r)
          } : function () {
            d.call(u, r)
          } : (s = !0, l = v.createTextNode(""), new _(r).observe(l, {
            characterData: !0
          }), a = function () {
            l.data = s = !s
          })), e.exports = y || function (e) {
            var t = {
              fn: e,
              next: void 0
            };
            o && (o.next = t), i || (i = t, a()), o = t
          }
        },
        4226: (e, t, n) => {
          var r = n(9859);
          e.exports = r.Promise
        },
        3839: (e, t, n) => {
          var r = n(6358),
            i = n(4229);
          e.exports = !!Object.getOwnPropertySymbols && !i((function () {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && r && r < 41
          }))
        },
        8694: (e, t, n) => {
          var r = n(9859),
            i = n(8511),
            o = r.WeakMap;
          e.exports = "function" == typeof o && /native code/.test(i(o))
        },
        6485: (e, t, n) => {
          "use strict";
          var r = n(3819),
            i = function (e) {
              var t, n;
              this.promise = new e((function (e, r) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = r
              })), this.resolve = r(t), this.reject = r(n)
            };
          e.exports.f = function (e) {
            return new i(e)
          }
        },
        2391: (e, t, n) => {
          var r, i = n(1176),
            o = n(219),
            a = n(3837),
            s = n(5977),
            l = n(3777),
            c = n(2635),
            A = n(4399),
            u = A("IE_PROTO"),
            f = function () {},
            d = function (e) {
              return "<script>" + e + "</" + "script>"
            },
            p = function () {
              try {
                r = document.domain && new ActiveXObject("htmlfile")
              } catch (e) {}
              var e, t;
              p = r ? function (e) {
                e.write(d("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
              }(r) : ((t = c("iframe")).style.display = "none", l.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(d("document.F=Object")), e.close(), e.F);
              for (var n = a.length; n--;) delete p.prototype[a[n]];
              return p()
            };
          s[u] = !0, e.exports = Object.create || function (e, t) {
            var n;
            return null !== e ? (f.prototype = i(e), n = new f, f.prototype = null, n[u] = e) : n = p(), void 0 === t ? n : o(n, t)
          }
        },
        219: (e, t, n) => {
          var r = n(7400),
            i = n(1787),
            o = n(1176),
            a = n(5632);
          e.exports = r ? Object.defineProperties : function (e, t) {
            o(e);
            for (var n, r = a(t), s = r.length, l = 0; s > l;) i.f(e, n = r[l++], t[n]);
            return e
          }
        },
        1787: (e, t, n) => {
          var r = n(7400),
            i = n(4394),
            o = n(1176),
            a = n(2066),
            s = Object.defineProperty;
          t.f = r ? s : function (e, t, n) {
            if (o(e), t = a(t, !0), o(n), i) try {
              return s(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
            return "value" in n && (e[t] = n.value), e
          }
        },
        7933: (e, t, n) => {
          var r = n(7400),
            i = n(9195),
            o = n(5358),
            a = n(905),
            s = n(2066),
            l = n(816),
            c = n(4394),
            A = Object.getOwnPropertyDescriptor;
          t.f = r ? A : function (e, t) {
            if (e = a(e), t = s(t, !0), c) try {
              return A(e, t)
            } catch (e) {}
            if (l(e, t)) return o(!i.f.call(e, t), e[t])
          }
        },
        8151: (e, t, n) => {
          var r = n(140),
            i = n(3837).concat("length", "prototype");
          t.f = Object.getOwnPropertyNames || function (e) {
            return r(e, i)
          }
        },
        894: (e, t) => {
          t.f = Object.getOwnPropertySymbols
        },
        7567: (e, t, n) => {
          var r = n(816),
            i = n(2991),
            o = n(4399),
            a = n(7528),
            s = o("IE_PROTO"),
            l = Object.prototype;
          e.exports = a ? Object.getPrototypeOf : function (e) {
            return e = i(e), r(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? l : null
          }
        },
        140: (e, t, n) => {
          var r = n(816),
            i = n(905),
            o = n(9540).indexOf,
            a = n(5977);
          e.exports = function (e, t) {
            var n, s = i(e),
              l = 0,
              c = [];
            for (n in s) !r(a, n) && r(s, n) && c.push(n);
            for (; t.length > l;) r(s, n = t[l++]) && (~o(c, n) || c.push(n));
            return c
          }
        },
        5632: (e, t, n) => {
          var r = n(140),
            i = n(3837);
          e.exports = Object.keys || function (e) {
            return r(e, i)
          }
        },
        9195: (e, t) => {
          "use strict";
          var n = {}.propertyIsEnumerable,
            r = Object.getOwnPropertyDescriptor,
            i = r && !n.call({
              1: 2
            }, 1);
          t.f = i ? function (e) {
            var t = r(this, e);
            return !!t && t.enumerable
          } : n
        },
        5020: (e, t, n) => {
          "use strict";
          var r = n(4231),
            i = n(9859),
            o = n(4229),
            a = n(9811);
          e.exports = r || !o((function () {
            if (!(a && a < 535)) {
              var e = Math.random();
              __defineSetter__.call(null, e, (function () {})), delete i[e]
            }
          }))
        },
        6540: (e, t, n) => {
          var r = n(1176),
            i = n(8505);
          e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var e, t = !1,
              n = {};
            try {
              (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
            } catch (e) {}
            return function (n, o) {
              return r(n), i(o), t ? e.call(n, o) : n.__proto__ = o, n
            }
          }() : void 0)
        },
        7664: (e, t, n) => {
          var r = n(7400),
            i = n(5632),
            o = n(905),
            a = n(9195).f,
            s = function (e) {
              return function (t) {
                for (var n, s = o(t), l = i(s), c = l.length, A = 0, u = []; c > A;) n = l[A++], r && !a.call(s, n) || u.push(e ? [n, s[n]] : s[n]);
                return u
              }
            };
          e.exports = {
            entries: s(!0),
            values: s(!1)
          }
        },
        4826: (e, t, n) => {
          var r = n(1333),
            i = n(8151),
            o = n(894),
            a = n(1176);
          e.exports = r("Reflect", "ownKeys") || function (e) {
            var t = i.f(a(e)),
              n = o.f;
            return n ? t.concat(n(e)) : t
          }
        },
        9276: (e, t, n) => {
          var r = n(9859);
          e.exports = r
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
        7757: (e, t, n) => {
          var r = n(1176),
            i = n(5052),
            o = n(6485);
          e.exports = function (e, t) {
            if (r(e), i(t) && t.constructor === e) return t;
            var n = o.f(e);
            return (0, n.resolve)(t), n.promise
          }
        },
        8787: (e, t, n) => {
          var r = n(7487);
          e.exports = function (e, t, n) {
            for (var i in t) r(e, i, t[i], n);
            return e
          }
        },
        7487: (e, t, n) => {
          var r = n(9859),
            i = n(5762),
            o = n(816),
            a = n(2079),
            s = n(8511),
            l = n(6407),
            c = l.get,
            A = l.enforce,
            u = String(String).split("String");
          (e.exports = function (e, t, n, s) {
            var l, c = !!s && !!s.unsafe,
              f = !!s && !!s.enumerable,
              d = !!s && !!s.noTargetGet;
            "function" == typeof n && ("string" != typeof t || o(n, "name") || i(n, "name", t), (l = A(n)).source || (l.source = u.join("string" == typeof t ? t : ""))), e !== r ? (c ? !d && e[t] && (f = !0) : delete e[t], f ? e[t] = n : i(e, t, n)) : f ? e[t] = n : a(t, n)
          })(Function.prototype, "toString", (function () {
            return "function" == typeof this && c(this).source || s(this)
          }))
        },
        8115: (e, t, n) => {
          var r = n(7079),
            i = n(3466);
          e.exports = function (e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
              var o = n.call(e, t);
              if ("object" != typeof o) throw TypeError("RegExp exec method returned something other than an Object or null");
              return o
            }
            if ("RegExp" !== r(e)) throw TypeError("RegExp#exec called on incompatible receiver");
            return i.call(e, t)
          }
        },
        3466: (e, t, n) => {
          "use strict";
          var r, i, o = n(895),
            a = n(5650),
            s = n(3036),
            l = n(2391),
            c = n(6407).get,
            A = n(2926),
            u = n(461),
            f = RegExp.prototype.exec,
            d = s("native-string-replace", String.prototype.replace),
            p = f,
            g = (r = /a/, i = /b*/g, f.call(r, "a"), f.call(i, "a"), 0 !== r.lastIndex || 0 !== i.lastIndex),
            h = a.UNSUPPORTED_Y || a.BROKEN_CARET,
            _ = void 0 !== /()??/.exec("")[1];
          (g || _ || h || A || u) && (p = function (e) {
            var t, n, r, i, a, s, A, u = this,
              v = c(u),
              b = v.raw;
            if (b) return b.lastIndex = u.lastIndex, t = p.call(b, e), u.lastIndex = b.lastIndex, t;
            var m = v.groups,
              w = h && u.sticky,
              y = o.call(u),
              C = u.source,
              x = 0,
              E = e;
            if (w && (-1 === (y = y.replace("y", "")).indexOf("g") && (y += "g"), E = String(e).slice(u.lastIndex), u.lastIndex > 0 && (!u.multiline || u.multiline && "\n" !== e[u.lastIndex - 1]) && (C = "(?: " + C + ")", E = " " + E, x++), n = new RegExp("^(?:" + C + ")", y)), _ && (n = new RegExp("^" + C + "$(?!\\s)", y)), g && (r = u.lastIndex), i = f.call(w ? n : u, E), w ? i ? (i.input = i.input.slice(x), i[0] = i[0].slice(x), i.index = u.lastIndex, u.lastIndex += i[0].length) : u.lastIndex = 0 : g && i && (u.lastIndex = u.global ? i.index + i[0].length : r), _ && i && i.length > 1 && d.call(i[0], n, (function () {
                for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (i[a] = void 0)
              })), i && m)
              for (i.groups = s = l(null), a = 0; a < m.length; a++) s[(A = m[a])[0]] = i[A[1]];
            return i
          }), e.exports = p
        },
        895: (e, t, n) => {
          "use strict";
          var r = n(1176);
          e.exports = function () {
            var e = r(this),
              t = "";
            return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
          }
        },
        5650: (e, t, n) => {
          var r = n(4229),
            i = function (e, t) {
              return RegExp(e, t)
            };
          t.UNSUPPORTED_Y = r((function () {
            var e = i("a", "y");
            return e.lastIndex = 2, null != e.exec("abcd")
          })), t.BROKEN_CARET = r((function () {
            var e = i("^r", "gy");
            return e.lastIndex = 2, null != e.exec("str")
          }))
        },
        2926: (e, t, n) => {
          var r = n(4229);
          e.exports = r((function () {
            var e = RegExp(".", "string".charAt(0));
            return !(e.dotAll && e.exec("\n") && "s" === e.flags)
          }))
        },
        461: (e, t, n) => {
          var r = n(4229);
          e.exports = r((function () {
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
        2079: (e, t, n) => {
          var r = n(9859),
            i = n(5762);
          e.exports = function (e, t) {
            try {
              i(r, e, t)
            } catch (n) {
              r[e] = t
            }
            return t
          }
        },
        1832: (e, t, n) => {
          "use strict";
          var r = n(1333),
            i = n(1787),
            o = n(95),
            a = n(7400),
            s = o("species");
          e.exports = function (e) {
            var t = r(e),
              n = i.f;
            a && t && !t[s] && n(t, s, {
              configurable: !0,
              get: function () {
                return this
              }
            })
          }
        },
        4555: (e, t, n) => {
          var r = n(1787).f,
            i = n(816),
            o = n(95)("toStringTag");
          e.exports = function (e, t, n) {
            e && !i(e = n ? e : e.prototype, o) && r(e, o, {
              configurable: !0,
              value: t
            })
          }
        },
        4399: (e, t, n) => {
          var r = n(3036),
            i = n(1441),
            o = r("keys");
          e.exports = function (e) {
            return o[e] || (o[e] = i(e))
          }
        },
        5353: (e, t, n) => {
          var r = n(9859),
            i = n(2079),
            o = "__core-js_shared__",
            a = r[o] || i(o, {});
          e.exports = a
        },
        3036: (e, t, n) => {
          var r = n(4231),
            i = n(5353);
          (e.exports = function (e, t) {
            return i[e] || (i[e] = void 0 !== t ? t : {})
          })("versions", []).push({
            version: "3.15.1",
            mode: r ? "pure" : "global",
            copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
          })
        },
        7942: (e, t, n) => {
          var r = n(1176),
            i = n(3819),
            o = n(95)("species");
          e.exports = function (e, t) {
            var n, a = r(e).constructor;
            return void 0 === a || null == (n = r(a)[o]) ? t : i(n)
          }
        },
        966: (e, t, n) => {
          var r = n(6051),
            i = n(8885),
            o = function (e) {
              return function (t, n) {
                var o, a, s = String(i(t)),
                  l = r(n),
                  c = s.length;
                return l < 0 || l >= c ? e ? "" : void 0 : (o = s.charCodeAt(l)) < 55296 || o > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : o : e ? s.slice(l, l + 2) : a - 56320 + (o - 55296 << 10) + 65536
              }
            };
          e.exports = {
            codeAt: o(!1),
            charAt: o(!0)
          }
        },
        7456: (e, t, n) => {
          var r = n(598);
          e.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)
        },
        6650: (e, t, n) => {
          var r = n(4237),
            i = n(3124),
            o = n(8885),
            a = Math.ceil,
            s = function (e) {
              return function (t, n, s) {
                var l, c, A = String(o(t)),
                  u = A.length,
                  f = void 0 === s ? " " : String(s),
                  d = r(n);
                return d <= u || "" == f ? A : (l = d - u, (c = i.call(f, a(l / f.length))).length > l && (c = c.slice(0, l)), e ? A + c : c + A)
              }
            };
          e.exports = {
            start: s(!1),
            end: s(!0)
          }
        },
        3124: (e, t, n) => {
          "use strict";
          var r = n(6051),
            i = n(8885);
          e.exports = function (e) {
            var t = String(i(this)),
              n = "",
              o = r(e);
            if (o < 0 || o == 1 / 0) throw RangeError("Wrong number of repetitions");
            for (; o > 0;
              (o >>>= 1) && (t += t)) 1 & o && (n += t);
            return n
          }
        },
        9445: (e, t, n) => {
          var r = n(4229),
            i = n(1647);
          e.exports = function (e) {
            return r((function () {
              return !!i[e]() || "​᠎" != "​᠎" [e]() || i[e].name !== e
            }))
          }
        },
        1017: (e, t, n) => {
          var r = n(8885),
            i = "[" + n(1647) + "]",
            o = RegExp("^" + i + i + "*"),
            a = RegExp(i + i + "*$"),
            s = function (e) {
              return function (t) {
                var n = String(r(t));
                return 1 & e && (n = n.replace(o, "")), 2 & e && (n = n.replace(a, "")), n
              }
            };
          e.exports = {
            start: s(1),
            end: s(2),
            trim: s(3)
          }
        },
        5795: (e, t, n) => {
          var r, i, o, a = n(9859),
            s = n(4229),
            l = n(7636),
            c = n(3777),
            A = n(2635),
            u = n(2023),
            f = n(8801),
            d = a.location,
            p = a.setImmediate,
            g = a.clearImmediate,
            h = a.process,
            _ = a.MessageChannel,
            v = a.Dispatch,
            b = 0,
            m = {},
            w = "onreadystatechange",
            y = function (e) {
              if (m.hasOwnProperty(e)) {
                var t = m[e];
                delete m[e], t()
              }
            },
            C = function (e) {
              return function () {
                y(e)
              }
            },
            x = function (e) {
              y(e.data)
            },
            E = function (e) {
              a.postMessage(e + "", d.protocol + "//" + d.host)
            };
          p && g || (p = function (e) {
            for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
            return m[++b] = function () {
              ("function" == typeof e ? e : Function(e)).apply(void 0, t)
            }, r(b), b
          }, g = function (e) {
            delete m[e]
          }, f ? r = function (e) {
            h.nextTick(C(e))
          } : v && v.now ? r = function (e) {
            v.now(C(e))
          } : _ && !u ? (o = (i = new _).port2, i.port1.onmessage = x, r = l(o.postMessage, o, 1)) : a.addEventListener && "function" == typeof postMessage && !a.importScripts && d && "file:" !== d.protocol && !s(E) ? (r = E, a.addEventListener("message", x, !1)) : r = w in A("script") ? function (e) {
            c.appendChild(A("script")).onreadystatechange = function () {
              c.removeChild(this), y(e)
            }
          } : function (e) {
            setTimeout(C(e), 0)
          }), e.exports = {
            set: p,
            clear: g
          }
        },
        3231: (e, t, n) => {
          var r = n(6051),
            i = Math.max,
            o = Math.min;
          e.exports = function (e, t) {
            var n = r(e);
            return n < 0 ? i(n + t, 0) : o(n, t)
          }
        },
        7331: (e, t, n) => {
          var r = n(6051),
            i = n(4237);
          e.exports = function (e) {
            if (void 0 === e) return 0;
            var t = r(e),
              n = i(t);
            if (t !== n) throw RangeError("Wrong length or index");
            return n
          }
        },
        905: (e, t, n) => {
          var r = n(9337),
            i = n(8885);
          e.exports = function (e) {
            return r(i(e))
          }
        },
        6051: e => {
          var t = Math.ceil,
            n = Math.floor;
          e.exports = function (e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? n : t)(e)
          }
        },
        4237: (e, t, n) => {
          var r = n(6051),
            i = Math.min;
          e.exports = function (e) {
            return e > 0 ? i(r(e), 9007199254740991) : 0
          }
        },
        2991: (e, t, n) => {
          var r = n(8885);
          e.exports = function (e) {
            return Object(r(e))
          }
        },
        4262: (e, t, n) => {
          var r = n(2002);
          e.exports = function (e, t) {
            var n = r(e);
            if (n % t) throw RangeError("Wrong offset");
            return n
          }
        },
        2002: (e, t, n) => {
          var r = n(6051);
          e.exports = function (e) {
            var t = r(e);
            if (t < 0) throw RangeError("The argument can't be less than 0");
            return t
          }
        },
        2066: (e, t, n) => {
          var r = n(5052);
          e.exports = function (e, t) {
            if (!r(e)) return e;
            var n, i;
            if (t && "function" == typeof (n = e.toString) && !r(i = n.call(e))) return i;
            if ("function" == typeof (n = e.valueOf) && !r(i = n.call(e))) return i;
            if (!t && "function" == typeof (n = e.toString) && !r(i = n.call(e))) return i;
            throw TypeError("Can't convert object to primitive value")
          }
        },
        1601: (e, t, n) => {
          var r = {};
          r[n(95)("toStringTag")] = "z", e.exports = "[object z]" === String(r)
        },
        2574: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(9859),
            o = n(7400),
            a = n(8200),
            s = n(9918),
            l = n(3816),
            c = n(7728),
            A = n(5358),
            u = n(5762),
            f = n(4237),
            d = n(7331),
            p = n(4262),
            g = n(2066),
            h = n(816),
            _ = n(1589),
            v = n(5052),
            b = n(2391),
            m = n(6540),
            w = n(8151).f,
            y = n(5215),
            C = n(9996).forEach,
            x = n(1832),
            E = n(1787),
            B = n(7933),
            S = n(6407),
            I = n(835),
            k = S.get,
            T = S.set,
            D = E.f,
            L = B.f,
            Q = Math.round,
            M = i.RangeError,
            W = l.ArrayBuffer,
            O = l.DataView,
            N = s.NATIVE_ARRAY_BUFFER_VIEWS,
            F = s.TYPED_ARRAY_TAG,
            R = s.TypedArray,
            P = s.TypedArrayPrototype,
            G = s.aTypedArrayConstructor,
            j = s.isTypedArray,
            V = "BYTES_PER_ELEMENT",
            U = "Wrong length",
            J = function (e, t) {
              for (var n = 0, r = t.length, i = new(G(e))(r); r > n;) i[n] = t[n++];
              return i
            },
            Y = function (e, t) {
              D(e, t, {
                get: function () {
                  return k(this)[t]
                }
              })
            },
            Z = function (e) {
              var t;
              return e instanceof W || "ArrayBuffer" == (t = _(e)) || "SharedArrayBuffer" == t
            },
            H = function (e, t) {
              return j(e) && "symbol" != typeof t && t in e && String(+t) == String(t)
            },
            X = function (e, t) {
              return H(e, t = g(t, !0)) ? A(2, e[t]) : L(e, t)
            },
            z = function (e, t, n) {
              return !(H(e, t = g(t, !0)) && v(n) && h(n, "value")) || h(n, "get") || h(n, "set") || n.configurable || h(n, "writable") && !n.writable || h(n, "enumerable") && !n.enumerable ? D(e, t, n) : (e[t] = n.value, e)
            };
          o ? (N || (B.f = X, E.f = z, Y(P, "buffer"), Y(P, "byteOffset"), Y(P, "byteLength"), Y(P, "length")), r({
            target: "Object",
            stat: !0,
            forced: !N
          }, {
            getOwnPropertyDescriptor: X,
            defineProperty: z
          }), e.exports = function (e, t, n) {
            var o = e.match(/\d+$/)[0] / 8,
              s = e + (n ? "Clamped" : "") + "Array",
              l = "get" + e,
              A = "set" + e,
              g = i[s],
              h = g,
              _ = h && h.prototype,
              E = {},
              B = function (e, t) {
                D(e, t, {
                  get: function () {
                    return function (e, t) {
                      var n = k(e);
                      return n.view[l](t * o + n.byteOffset, !0)
                    }(this, t)
                  },
                  set: function (e) {
                    return function (e, t, r) {
                      var i = k(e);
                      n && (r = (r = Q(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), i.view[A](t * o + i.byteOffset, r, !0)
                    }(this, t, e)
                  },
                  enumerable: !0
                })
              };
            N ? a && (h = t((function (e, t, n, r) {
              return c(e, h, s), I(v(t) ? Z(t) ? void 0 !== r ? new g(t, p(n, o), r) : void 0 !== n ? new g(t, p(n, o)) : new g(t) : j(t) ? J(h, t) : y.call(h, t) : new g(d(t)), e, h)
            })), m && m(h, R), C(w(g), (function (e) {
              e in h || u(h, e, g[e])
            })), h.prototype = _) : (h = t((function (e, t, n, r) {
              c(e, h, s);
              var i, a, l, A = 0,
                u = 0;
              if (v(t)) {
                if (!Z(t)) return j(t) ? J(h, t) : y.call(h, t);
                i = t, u = p(n, o);
                var g = t.byteLength;
                if (void 0 === r) {
                  if (g % o) throw M(U);
                  if ((a = g - u) < 0) throw M(U)
                } else if ((a = f(r) * o) + u > g) throw M(U);
                l = a / o
              } else l = d(t), i = new W(a = l * o);
              for (T(e, {
                  buffer: i,
                  byteOffset: u,
                  byteLength: a,
                  length: l,
                  view: new O(i)
                }); A < l;) B(e, A++)
            })), m && m(h, R), _ = h.prototype = b(P)), _.constructor !== h && u(_, "constructor", h), F && u(_, F, s), E[s] = h, r({
              global: !0,
              forced: h != g,
              sham: !N
            }, E), V in h || u(h, V, o), V in _ || u(_, V, o), x(s)
          }) : e.exports = function () {}
        },
        8200: (e, t, n) => {
          var r = n(9859),
            i = n(4229),
            o = n(4575),
            a = n(9918).NATIVE_ARRAY_BUFFER_VIEWS,
            s = r.ArrayBuffer,
            l = r.Int8Array;
          e.exports = !a || !i((function () {
            l(1)
          })) || !i((function () {
            new l(-1)
          })) || !o((function (e) {
            new l, new l(null), new l(1.5), new l(e)
          }), !0) || i((function () {
            return 1 !== new l(new s(2), 1, void 0).length
          }))
        },
        5215: (e, t, n) => {
          var r = n(2991),
            i = n(4237),
            o = n(8830),
            a = n(1943),
            s = n(7636),
            l = n(9918).aTypedArrayConstructor;
          e.exports = function (e) {
            var t, n, c, A, u, f, d = r(e),
              p = arguments.length,
              g = p > 1 ? arguments[1] : void 0,
              h = void 0 !== g,
              _ = o(d);
            if (null != _ && !a(_))
              for (f = (u = _.call(d)).next, d = []; !(A = f.call(u)).done;) d.push(A.value);
            for (h && p > 2 && (g = s(g, arguments[2], 2)), n = i(d.length), c = new(l(this))(n), t = 0; n > t; t++) c[t] = h ? g(d[t], t) : d[t];
            return c
          }
        },
        1441: e => {
          var t = 0,
            n = Math.random();
          e.exports = function (e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++t + n).toString(36)
          }
        },
        6969: (e, t, n) => {
          var r = n(3839);
          e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
        },
        5391: (e, t, n) => {
          var r = n(95);
          t.f = r
        },
        95: (e, t, n) => {
          var r = n(9859),
            i = n(3036),
            o = n(816),
            a = n(1441),
            s = n(3839),
            l = n(6969),
            c = i("wks"),
            A = r.Symbol,
            u = l ? A : A && A.withoutSetter || a;
          e.exports = function (e) {
            return o(c, e) && (s || "string" == typeof c[e]) || (s && o(A, e) ? c[e] = A[e] : c[e] = u("Symbol." + e)), c[e]
          }
        },
        1647: e => {
          e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
        },
        5738: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(7567),
            o = n(6540),
            a = n(2391),
            s = n(5762),
            l = n(5358),
            c = n(9003),
            A = function (e, t) {
              var n = this;
              if (!(n instanceof A)) return new A(e, t);
              o && (n = o(new Error(void 0), i(n))), void 0 !== t && s(n, "message", String(t));
              var r = [];
              return c(e, r.push, {
                that: r
              }), s(n, "errors", r), n
            };
          A.prototype = a(Error.prototype, {
            constructor: l(5, A),
            message: l(5, ""),
            name: l(5, "AggregateError")
          }), r({
            global: !0
          }, {
            AggregateError: A
          })
        },
        5388: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(9859),
            o = n(3816),
            a = n(1832),
            s = "ArrayBuffer",
            l = o.ArrayBuffer;
          r({
            global: !0,
            forced: i.ArrayBuffer !== l
          }, {
            ArrayBuffer: l
          }), a(s)
        },
        2994: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(4229),
            o = n(3816),
            a = n(1176),
            s = n(3231),
            l = n(4237),
            c = n(7942),
            A = o.ArrayBuffer,
            u = o.DataView,
            f = A.prototype.slice;
          r({
            target: "ArrayBuffer",
            proto: !0,
            unsafe: !0,
            forced: i((function () {
              return !new A(2).slice(1, void 0).byteLength
            }))
          }, {
            slice: function (e, t) {
              if (void 0 !== f && void 0 === t) return f.call(a(this), e);
              for (var n = a(this).byteLength, r = s(e, n), i = s(void 0 === t ? n : t, n), o = new(c(this, A))(l(i - r)), d = new u(this), p = new u(o), g = 0; r < i;) p.setUint8(g++, d.getUint8(r++));
              return o
            }
          })
        },
        4870: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(4990),
            o = n(2991),
            a = n(4237),
            s = n(3819),
            l = n(7501);
          r({
            target: "Array",
            proto: !0
          }, {
            flatMap: function (e) {
              var t, n = o(this),
                r = a(n.length);
              return s(e), (t = l(n, 0)).length = i(t, n, n, r, 0, 1, e, arguments.length > 1 ? arguments[1] : void 0), t
            }
          })
        },
        7072: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(4990),
            o = n(2991),
            a = n(4237),
            s = n(6051),
            l = n(7501);
          r({
            target: "Array",
            proto: !0
          }, {
            flat: function () {
              var e = arguments.length ? arguments[0] : void 0,
                t = o(this),
                n = a(t.length),
                r = l(t, 0);
              return r.length = i(r, t, t, n, 0, void 0 === e ? 1 : s(e)), r
            }
          })
        },
        5735: (e, t, n) => {
          "use strict";
          var r = n(905),
            i = n(9736),
            o = n(5495),
            a = n(6407),
            s = n(7675),
            l = "Array Iterator",
            c = a.set,
            A = a.getterFor(l);
          e.exports = s(Array, "Array", (function (e, t) {
            c(this, {
              type: l,
              target: r(e),
              index: 0,
              kind: t
            })
          }), (function () {
            var e = A(this),
              t = e.target,
              n = e.kind,
              r = e.index++;
            return !t || r >= t.length ? (e.target = void 0, {
              value: void 0,
              done: !0
            }) : "keys" == n ? {
              value: r,
              done: !1
            } : "values" == n ? {
              value: t[r],
              done: !1
            } : {
              value: [r, t[r]],
              done: !1
            }
          }), "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
        },
        9731: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(3143).right,
            o = n(6038),
            a = n(6358),
            s = n(8801);
          r({
            target: "Array",
            proto: !0,
            forced: !o("reduceRight") || !s && a > 79 && a < 83
          }, {
            reduceRight: function (e) {
              return i(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
            }
          })
        },
        3108: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(3143).left,
            o = n(6038),
            a = n(6358),
            s = n(8801);
          r({
            target: "Array",
            proto: !0,
            forced: !o("reduce") || !s && a > 79 && a < 83
          }, {
            reduce: function (e) {
              return i(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
            }
          })
        },
        9992: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(3718),
            o = [].reverse,
            a = [1, 2];
          r({
            target: "Array",
            proto: !0,
            forced: String(a) === String(a.reverse())
          }, {
            reverse: function () {
              return i(this) && (this.length = this.length), o.call(this)
            }
          })
        },
        3430: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(3819),
            o = n(2991),
            a = n(4237),
            s = n(4229),
            l = n(3867),
            c = n(6038),
            A = n(2671),
            u = n(8506),
            f = n(6358),
            d = n(9811),
            p = [],
            g = p.sort,
            h = s((function () {
              p.sort(void 0)
            })),
            _ = s((function () {
              p.sort(null)
            })),
            v = c("sort"),
            b = !s((function () {
              if (f) return f < 70;
              if (!(A && A > 3)) {
                if (u) return !0;
                if (d) return d < 603;
                var e, t, n, r, i = "";
                for (e = 65; e < 76; e++) {
                  switch (t = String.fromCharCode(e), e) {
                    case 66:
                    case 69:
                    case 70:
                    case 72:
                      n = 3;
                      break;
                    case 68:
                    case 71:
                      n = 4;
                      break;
                    default:
                      n = 2
                  }
                  for (r = 0; r < 47; r++) p.push({
                    k: t + r,
                    v: n
                  })
                }
                for (p.sort((function (e, t) {
                    return t.v - e.v
                  })), r = 0; r < p.length; r++) t = p[r].k.charAt(0), i.charAt(i.length - 1) !== t && (i += t);
                return "DGBEFHACIJK" !== i
              }
            }));
          r({
            target: "Array",
            proto: !0,
            forced: h || !_ || !v || !b
          }, {
            sort: function (e) {
              void 0 !== e && i(e);
              var t = o(this);
              if (b) return void 0 === e ? g.call(t) : g.call(t, e);
              var n, r, s = [],
                c = a(t.length);
              for (r = 0; r < c; r++) r in t && s.push(t[r]);
              for (n = (s = l(s, function (e) {
                  return function (t, n) {
                    return void 0 === n ? -1 : void 0 === t ? 1 : void 0 !== e ? +e(t, n) || 0 : String(t) > String(n) ? 1 : -1
                  }
                }(e))).length, r = 0; r < n;) t[r] = s[r++];
              for (; r < c;) delete t[r++];
              return t
            }
          })
        },
        3985: (e, t, n) => {
          n(9736)("flatMap")
        },
        7694: (e, t, n) => {
          n(9736)("flat")
        },
        4173: (e, t, n) => {
          n(3103)({
            global: !0
          }, {
            globalThis: n(9859)
          })
        },
        3498: (e, t, n) => {
          var r = n(3103),
            i = n(9037),
            o = Math.acosh,
            a = Math.log,
            s = Math.sqrt,
            l = Math.LN2;
          r({
            target: "Math",
            stat: !0,
            forced: !o || 710 != Math.floor(o(Number.MAX_VALUE)) || o(1 / 0) != 1 / 0
          }, {
            acosh: function (e) {
              return (e = +e) < 1 ? NaN : e > 94906265.62425156 ? a(e) + l : i(e - 1 + s(e - 1) * s(e + 1))
            }
          })
        },
        9509: (e, t, n) => {
          var r = n(3103),
            i = Math.hypot,
            o = Math.abs,
            a = Math.sqrt;
          r({
            target: "Math",
            stat: !0,
            forced: !!i && i(1 / 0, NaN) !== 1 / 0
          }, {
            hypot: function (e, t) {
              for (var n, r, i = 0, s = 0, l = arguments.length, c = 0; s < l;) c < (n = o(arguments[s++])) ? (i = i * (r = c / n) * r + 1, c = n) : i += n > 0 ? (r = n / c) * r : n;
              return c === 1 / 0 ? 1 / 0 : c * a(i)
            }
          })
        },
        7846: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(7400),
            o = n(5020),
            a = n(2991),
            s = n(3819),
            l = n(1787);
          i && r({
            target: "Object",
            proto: !0,
            forced: o
          }, {
            __defineGetter__: function (e, t) {
              l.f(a(this), e, {
                get: s(t),
                enumerable: !0,
                configurable: !0
              })
            }
          })
        },
        6635: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(7400),
            o = n(5020),
            a = n(2991),
            s = n(3819),
            l = n(1787);
          i && r({
            target: "Object",
            proto: !0,
            forced: o
          }, {
            __defineSetter__: function (e, t) {
              l.f(a(this), e, {
                set: s(t),
                enumerable: !0,
                configurable: !0
              })
            }
          })
        },
        5883: (e, t, n) => {
          var r = n(3103),
            i = n(7664).entries;
          r({
            target: "Object",
            stat: !0
          }, {
            entries: function (e) {
              return i(e)
            }
          })
        },
        1804: (e, t, n) => {
          var r = n(3103),
            i = n(9003),
            o = n(2324);
          r({
            target: "Object",
            stat: !0
          }, {
            fromEntries: function (e) {
              var t = {};
              return i(e, (function (e, n) {
                o(t, e, n)
              }), {
                AS_ENTRIES: !0
              }), t
            }
          })
        },
        2775: (e, t, n) => {
          var r = n(3103),
            i = n(7400),
            o = n(4826),
            a = n(905),
            s = n(7933),
            l = n(2324);
          r({
            target: "Object",
            stat: !0,
            sham: !i
          }, {
            getOwnPropertyDescriptors: function (e) {
              for (var t, n, r = a(e), i = s.f, c = o(r), A = {}, u = 0; c.length > u;) void 0 !== (n = i(r, t = c[u++])) && l(A, t, n);
              return A
            }
          })
        },
        2586: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(7400),
            o = n(5020),
            a = n(2991),
            s = n(2066),
            l = n(7567),
            c = n(7933).f;
          i && r({
            target: "Object",
            proto: !0,
            forced: o
          }, {
            __lookupGetter__: function (e) {
              var t, n = a(this),
                r = s(e, !0);
              do {
                if (t = c(n, r)) return t.get
              } while (n = l(n))
            }
          })
        },
        3045: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(7400),
            o = n(5020),
            a = n(2991),
            s = n(2066),
            l = n(7567),
            c = n(7933).f;
          i && r({
            target: "Object",
            proto: !0,
            forced: o
          }, {
            __lookupSetter__: function (e) {
              var t, n = a(this),
                r = s(e, !0);
              do {
                if (t = c(n, r)) return t.set
              } while (n = l(n))
            }
          })
        },
        7890: (e, t, n) => {
          var r = n(3103),
            i = n(7664).values;
          r({
            target: "Object",
            stat: !0
          }, {
            values: function (e) {
              return i(e)
            }
          })
        },
        7919: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(3819),
            o = n(6485),
            a = n(4624),
            s = n(9003);
          r({
            target: "Promise",
            stat: !0
          }, {
            allSettled: function (e) {
              var t = this,
                n = o.f(t),
                r = n.resolve,
                l = n.reject,
                c = a((function () {
                  var n = i(t.resolve),
                    o = [],
                    a = 0,
                    l = 1;
                  s(e, (function (e) {
                    var i = a++,
                      s = !1;
                    o.push(void 0), l++, n.call(t, e).then((function (e) {
                      s || (s = !0, o[i] = {
                        status: "fulfilled",
                        value: e
                      }, --l || r(o))
                    }), (function (e) {
                      s || (s = !0, o[i] = {
                        status: "rejected",
                        reason: e
                      }, --l || r(o))
                    }))
                  })), --l || r(o)
                }));
              return c.error && l(c.value), n.promise
            }
          })
        },
        7178: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(3819),
            o = n(1333),
            a = n(6485),
            s = n(4624),
            l = n(9003),
            c = "No one promise resolved";
          r({
            target: "Promise",
            stat: !0
          }, {
            any: function (e) {
              var t = this,
                n = a.f(t),
                r = n.resolve,
                A = n.reject,
                u = s((function () {
                  var n = i(t.resolve),
                    a = [],
                    s = 0,
                    u = 1,
                    f = !1;
                  l(e, (function (e) {
                    var i = s++,
                      l = !1;
                    a.push(void 0), u++, n.call(t, e).then((function (e) {
                      l || f || (f = !0, r(e))
                    }), (function (e) {
                      l || f || (l = !0, a[i] = e, --u || A(new(o("AggregateError"))(a, c)))
                    }))
                  })), --u || A(new(o("AggregateError"))(a, c))
                }));
              return u.error && A(u.value), n.promise
            }
          })
        },
        1515: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(4231),
            o = n(4226),
            a = n(4229),
            s = n(1333),
            l = n(7942),
            c = n(7757),
            A = n(7487);
          if (r({
              target: "Promise",
              proto: !0,
              real: !0,
              forced: !!o && a((function () {
                o.prototype.finally.call({
                  then: function () {}
                }, (function () {}))
              }))
            }, {
              finally: function (e) {
                var t = l(this, s("Promise")),
                  n = "function" == typeof e;
                return this.then(n ? function (n) {
                  return c(t, e()).then((function () {
                    return n
                  }))
                } : e, n ? function (n) {
                  return c(t, e()).then((function () {
                    throw n
                  }))
                } : e)
              }
            }), !i && "function" == typeof o) {
            var u = s("Promise").prototype.finally;
            o.prototype.finally !== u && A(o.prototype, "finally", u, {
              unsafe: !0
            })
          }
        },
        3439: (e, t, n) => {
          "use strict";
          var r, i, o, a, s = n(3103),
            l = n(4231),
            c = n(9859),
            A = n(1333),
            u = n(4226),
            f = n(7487),
            d = n(8787),
            p = n(6540),
            g = n(4555),
            h = n(1832),
            _ = n(5052),
            v = n(3819),
            b = n(7728),
            m = n(8511),
            w = n(9003),
            y = n(4575),
            C = n(7942),
            x = n(5795).set,
            E = n(4794),
            B = n(7757),
            S = n(4665),
            I = n(6485),
            k = n(4624),
            T = n(6407),
            D = n(6541),
            L = n(95),
            Q = n(8639),
            M = n(8801),
            W = n(6358),
            O = L("species"),
            N = "Promise",
            F = T.get,
            R = T.set,
            P = T.getterFor(N),
            G = u && u.prototype,
            j = u,
            V = G,
            U = c.TypeError,
            J = c.document,
            Y = c.process,
            Z = I.f,
            H = Z,
            X = !!(J && J.createEvent && c.dispatchEvent),
            z = "function" == typeof PromiseRejectionEvent,
            K = "unhandledrejection",
            $ = !1,
            q = D(N, (function () {
              var e = m(j) !== String(j);
              if (!e && 66 === W) return !0;
              if (l && !V.finally) return !0;
              if (W >= 51 && /native code/.test(j)) return !1;
              var t = new j((function (e) {
                  e(1)
                })),
                n = function (e) {
                  e((function () {}), (function () {}))
                };
              return (t.constructor = {})[O] = n, !($ = t.then((function () {})) instanceof n) || !e && Q && !z
            })),
            ee = q || !y((function (e) {
              j.all(e).catch((function () {}))
            })),
            te = function (e) {
              var t;
              return !(!_(e) || "function" != typeof (t = e.then)) && t
            },
            ne = function (e, t) {
              if (!e.notified) {
                e.notified = !0;
                var n = e.reactions;
                E((function () {
                  for (var r = e.value, i = 1 == e.state, o = 0; n.length > o;) {
                    var a, s, l, c = n[o++],
                      A = i ? c.ok : c.fail,
                      u = c.resolve,
                      f = c.reject,
                      d = c.domain;
                    try {
                      A ? (i || (2 === e.rejection && ae(e), e.rejection = 1), !0 === A ? a = r : (d && d.enter(), a = A(r), d && (d.exit(), l = !0)), a === c.promise ? f(U("Promise-chain cycle")) : (s = te(a)) ? s.call(a, u, f) : u(a)) : f(r)
                    } catch (e) {
                      d && !l && d.exit(), f(e)
                    }
                  }
                  e.reactions = [], e.notified = !1, t && !e.rejection && ie(e)
                }))
              }
            },
            re = function (e, t, n) {
              var r, i;
              X ? ((r = J.createEvent("Event")).promise = t, r.reason = n, r.initEvent(e, !1, !0), c.dispatchEvent(r)) : r = {
                promise: t,
                reason: n
              }, !z && (i = c["on" + e]) ? i(r) : e === K && S("Unhandled promise rejection", n)
            },
            ie = function (e) {
              x.call(c, (function () {
                var t, n = e.facade,
                  r = e.value;
                if (oe(e) && (t = k((function () {
                    M ? Y.emit("unhandledRejection", r, n) : re(K, n, r)
                  })), e.rejection = M || oe(e) ? 2 : 1, t.error)) throw t.value
              }))
            },
            oe = function (e) {
              return 1 !== e.rejection && !e.parent
            },
            ae = function (e) {
              x.call(c, (function () {
                var t = e.facade;
                M ? Y.emit("rejectionHandled", t) : re("rejectionhandled", t, e.value)
              }))
            },
            se = function (e, t, n) {
              return function (r) {
                e(t, r, n)
              }
            },
            le = function (e, t, n) {
              e.done || (e.done = !0, n && (e = n), e.value = t, e.state = 2, ne(e, !0))
            },
            ce = function (e, t, n) {
              if (!e.done) {
                e.done = !0, n && (e = n);
                try {
                  if (e.facade === t) throw U("Promise can't be resolved itself");
                  var r = te(t);
                  r ? E((function () {
                    var n = {
                      done: !1
                    };
                    try {
                      r.call(t, se(ce, n, e), se(le, n, e))
                    } catch (t) {
                      le(n, t, e)
                    }
                  })) : (e.value = t, e.state = 1, ne(e, !1))
                } catch (t) {
                  le({
                    done: !1
                  }, t, e)
                }
              }
            };
          if (q && (V = (j = function (e) {
              b(this, j, N), v(e), r.call(this);
              var t = F(this);
              try {
                e(se(ce, t), se(le, t))
              } catch (e) {
                le(t, e)
              }
            }).prototype, (r = function (e) {
              R(this, {
                type: N,
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
                var n = P(this),
                  r = Z(C(this, j));
                return r.ok = "function" != typeof e || e, r.fail = "function" == typeof t && t, r.domain = M ? Y.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && ne(n, !1), r.promise
              },
              catch: function (e) {
                return this.then(void 0, e)
              }
            }), i = function () {
              var e = new r,
                t = F(e);
              this.promise = e, this.resolve = se(ce, t), this.reject = se(le, t)
            }, I.f = Z = function (e) {
              return e === j || e === o ? new i(e) : H(e)
            }, !l && "function" == typeof u && G !== Object.prototype)) {
            a = G.then, $ || (f(G, "then", (function (e, t) {
              var n = this;
              return new j((function (e, t) {
                a.call(n, e, t)
              })).then(e, t)
            }), {
              unsafe: !0
            }), f(G, "catch", V.catch, {
              unsafe: !0
            }));
            try {
              delete G.constructor
            } catch (e) {}
            p && p(G, V)
          }
          s({
            global: !0,
            wrap: !0,
            forced: q
          }, {
            Promise: j
          }), g(j, N, !1, !0), h(N), o = A(N), s({
            target: N,
            stat: !0,
            forced: q
          }, {
            reject: function (e) {
              var t = Z(this);
              return t.reject.call(void 0, e), t.promise
            }
          }), s({
            target: N,
            stat: !0,
            forced: l || q
          }, {
            resolve: function (e) {
              return B(l && this === o ? j : this, e)
            }
          }), s({
            target: N,
            stat: !0,
            forced: ee
          }, {
            all: function (e) {
              var t = this,
                n = Z(t),
                r = n.resolve,
                i = n.reject,
                o = k((function () {
                  var n = v(t.resolve),
                    o = [],
                    a = 0,
                    s = 1;
                  w(e, (function (e) {
                    var l = a++,
                      c = !1;
                    o.push(void 0), s++, n.call(t, e).then((function (e) {
                      c || (c = !0, o[l] = e, --s || r(o))
                    }), i)
                  })), --s || r(o)
                }));
              return o.error && i(o.value), n.promise
            },
            race: function (e) {
              var t = this,
                n = Z(t),
                r = n.reject,
                i = k((function () {
                  var i = v(t.resolve);
                  w(e, (function (e) {
                    i.call(t, e).then(n.resolve, r)
                  }))
                }));
              return i.error && r(i.value), n.promise
            }
          })
        },
        7368: (e, t, n) => {
          var r = n(7400),
            i = n(9859),
            o = n(6541),
            a = n(835),
            s = n(5762),
            l = n(1787).f,
            c = n(8151).f,
            A = n(8311),
            u = n(895),
            f = n(5650),
            d = n(7487),
            p = n(4229),
            g = n(816),
            h = n(6407).enforce,
            _ = n(1832),
            v = n(95),
            b = n(2926),
            m = n(461),
            w = v("match"),
            y = i.RegExp,
            C = y.prototype,
            x = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
            E = /a/g,
            B = /a/g,
            S = new y(E) !== E,
            I = f.UNSUPPORTED_Y,
            k = r && (!S || I || b || m || p((function () {
              return B[w] = !1, y(E) != E || y(B) == B || "/a/i" != y(E, "i")
            })));
          if (o("RegExp", k)) {
            for (var T = function (e, t) {
                var n, r, i, o, l, c, f = this instanceof T,
                  d = A(e),
                  p = void 0 === t,
                  _ = [],
                  v = e;
                if (!f && d && p && e.constructor === T) return e;
                if ((d || e instanceof T) && (e = e.source, p && (t = "flags" in v ? v.flags : u.call(v))), e = void 0 === e ? "" : String(e), t = void 0 === t ? "" : String(t), v = e, b && "dotAll" in E && (r = !!t && t.indexOf("s") > -1) && (t = t.replace(/s/g, "")), n = t, I && "sticky" in E && (i = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, "")), m && (e = (o = function (e) {
                    for (var t, n = e.length, r = 0, i = "", o = [], a = {}, s = !1, l = !1, c = 0, A = ""; r <= n; r++) {
                      if ("\\" === (t = e.charAt(r))) t += e.charAt(++r);
                      else if ("]" === t) s = !1;
                      else if (!s) switch (!0) {
                        case "[" === t:
                          s = !0;
                          break;
                        case "(" === t:
                          x.test(e.slice(r + 1)) && (r += 2, l = !0), i += t, c++;
                          continue;
                        case ">" === t && l:
                          if ("" === A || g(a, A)) throw new SyntaxError("Invalid capture group name");
                          a[A] = !0, o.push([A, c]), l = !1, A = "";
                          continue
                      }
                      l ? A += t : i += t
                    }
                    return [i, o]
                  }(e))[0], _ = o[1]), l = a(y(e, t), f ? this : C, T), (r || i || _.length) && (c = h(l), r && (c.dotAll = !0, c.raw = T(function (e) {
                    for (var t, n = e.length, r = 0, i = "", o = !1; r <= n; r++) "\\" !== (t = e.charAt(r)) ? o || "." !== t ? ("[" === t ? o = !0 : "]" === t && (o = !1), i += t) : i += "[\\s\\S]" : i += t + e.charAt(++r);
                    return i
                  }(e), n)), i && (c.sticky = !0), _.length && (c.groups = _)), e !== v) try {
                  s(l, "source", "" === v ? "(?:)" : v)
                } catch (e) {}
                return l
              }, D = function (e) {
                e in T || l(T, e, {
                  configurable: !0,
                  get: function () {
                    return y[e]
                  },
                  set: function (t) {
                    y[e] = t
                  }
                })
              }, L = c(y), Q = 0; L.length > Q;) D(L[Q++]);
            C.constructor = T, T.prototype = C, d(i, "RegExp", T)
          }
          _("RegExp")
        },
        7950: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(3466);
          r({
            target: "RegExp",
            proto: !0,
            forced: /./.exec !== i
          }, {
            exec: i
          })
        },
        103: (e, t, n) => {
          var r = n(7400),
            i = n(1787),
            o = n(895),
            a = n(4229);
          r && a((function () {
            return "sy" !== Object.getOwnPropertyDescriptor(RegExp.prototype, "flags").get.call({
              dotAll: !0,
              sticky: !0
            })
          })) && i.f(RegExp.prototype, "flags", {
            configurable: !0,
            get: o
          })
        },
        3887: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(3723),
            o = n(8885),
            a = n(4237),
            s = n(3819),
            l = n(1176),
            c = n(7079),
            A = n(8311),
            u = n(895),
            f = n(5762),
            d = n(4229),
            p = n(95),
            g = n(7942),
            h = n(6637),
            _ = n(6407),
            v = n(4231),
            b = p("matchAll"),
            m = "RegExp String",
            w = "RegExp String Iterator",
            y = _.set,
            C = _.getterFor(w),
            x = RegExp.prototype,
            E = x.exec,
            B = "".matchAll,
            S = !!B && !d((function () {
              "a".matchAll(/./)
            })),
            I = i((function (e, t, n, r) {
              y(this, {
                type: w,
                regexp: e,
                string: t,
                global: n,
                unicode: r,
                done: !1
              })
            }), m, (function () {
              var e = C(this);
              if (e.done) return {
                value: void 0,
                done: !0
              };
              var t = e.regexp,
                n = e.string,
                r = function (e, t) {
                  var n, r = e.exec;
                  if ("function" == typeof r) {
                    if ("object" != typeof (n = r.call(e, t))) throw TypeError("Incorrect exec result");
                    return n
                  }
                  return E.call(e, t)
                }(t, n);
              return null === r ? {
                value: void 0,
                done: e.done = !0
              } : e.global ? ("" == String(r[0]) && (t.lastIndex = h(n, a(t.lastIndex), e.unicode)), {
                value: r,
                done: !1
              }) : (e.done = !0, {
                value: r,
                done: !1
              })
            })),
            k = function (e) {
              var t, n, r, i, o, s, c = l(this),
                A = String(e);
              return t = g(c, RegExp), void 0 === (n = c.flags) && c instanceof RegExp && !("flags" in x) && (n = u.call(c)), r = void 0 === n ? "" : String(n), i = new t(t === RegExp ? c.source : c, r), o = !!~r.indexOf("g"), s = !!~r.indexOf("u"), i.lastIndex = a(c.lastIndex), new I(i, A, o, s)
            };
          r({
            target: "String",
            proto: !0,
            forced: S
          }, {
            matchAll: function (e) {
              var t, n, r, i = o(this);
              if (null != e) {
                if (A(e) && !~String(o("flags" in x ? e.flags : u.call(e))).indexOf("g")) throw TypeError("`.matchAll` does not allow non-global regexes");
                if (S) return B.apply(i, arguments);
                if (void 0 === (n = e[b]) && v && "RegExp" == c(e) && (n = k), null != n) return s(n).call(e, i)
              } else if (S) return B.apply(i, arguments);
              return t = String(i), r = new RegExp(e, "g"), v ? k.call(r, t) : r[b](t)
            }
          }), v || b in x || f(x, b, k)
        },
        977: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(6650).end;
          r({
            target: "String",
            proto: !0,
            forced: n(7456)
          }, {
            padEnd: function (e) {
              return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
          })
        },
        5734: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(6650).start;
          r({
            target: "String",
            proto: !0,
            forced: n(7456)
          }, {
            padStart: function (e) {
              return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
          })
        },
        1639: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(8885),
            o = n(8311),
            a = n(895),
            s = n(17),
            l = n(95),
            c = n(4231),
            A = l("replace"),
            u = RegExp.prototype,
            f = Math.max,
            d = function (e, t, n) {
              return n > e.length ? -1 : "" === t ? n : e.indexOf(t, n)
            };
          r({
            target: "String",
            proto: !0
          }, {
            replaceAll: function (e, t) {
              var n, r, l, p, g, h, _, v, b = i(this),
                m = 0,
                w = 0,
                y = "";
              if (null != e) {
                if ((n = o(e)) && !~String(i("flags" in u ? e.flags : a.call(e))).indexOf("g")) throw TypeError("`.replaceAll` does not allow non-global regexes");
                if (void 0 !== (r = e[A])) return r.call(e, b, t);
                if (c && n) return String(b).replace(e, t)
              }
              for (l = String(b), p = String(e), (g = "function" == typeof t) || (t = String(t)), h = p.length, _ = f(1, h), m = d(l, p, 0); - 1 !== m;) v = g ? String(t(p, m, l)) : s(p, l, m, [], void 0, t), y += l.slice(w, m) + v, w = m + h, m = d(l, p, m + _);
              return w < l.length && (y += l.slice(w)), y
            }
          })
        },
        5940: (e, t, n) => {
          "use strict";
          var r = n(4954),
            i = n(4229),
            o = n(1176),
            a = n(4237),
            s = n(6051),
            l = n(8885),
            c = n(6637),
            A = n(17),
            u = n(8115),
            f = n(95)("replace"),
            d = Math.max,
            p = Math.min,
            g = "$0" === "a".replace(/./, "$0"),
            h = !!/./ [f] && "" === /./ [f]("a", "$0");
          r("replace", (function (e, t, n) {
            var r = h ? "$" : "$0";
            return [function (e, n) {
              var r = l(this),
                i = null == e ? void 0 : e[f];
              return void 0 !== i ? i.call(e, r, n) : t.call(String(r), e, n)
            }, function (e, i) {
              if ("string" == typeof i && -1 === i.indexOf(r) && -1 === i.indexOf("$<")) {
                var l = n(t, this, e, i);
                if (l.done) return l.value
              }
              var f = o(this),
                g = String(e),
                h = "function" == typeof i;
              h || (i = String(i));
              var _ = f.global;
              if (_) {
                var v = f.unicode;
                f.lastIndex = 0
              }
              for (var b = [];;) {
                var m = u(f, g);
                if (null === m) break;
                if (b.push(m), !_) break;
                "" === String(m[0]) && (f.lastIndex = c(g, a(f.lastIndex), v))
              }
              for (var w, y = "", C = 0, x = 0; x < b.length; x++) {
                m = b[x];
                for (var E = String(m[0]), B = d(p(s(m.index), g.length), 0), S = [], I = 1; I < m.length; I++) S.push(void 0 === (w = m[I]) ? w : String(w));
                var k = m.groups;
                if (h) {
                  var T = [E].concat(S, B, g);
                  void 0 !== k && T.push(k);
                  var D = String(i.apply(void 0, T))
                } else D = A(E, g, B, S, k, i);
                B >= C && (y += g.slice(C, B) + D, C = B + E.length)
              }
              return y + g.slice(C)
            }]
          }), !!i((function () {
            var e = /./;
            return e.exec = function () {
              var e = [];
              return e.groups = {
                a: "7"
              }, e
            }, "7" !== "".replace(e, "$<a>")
          })) || !g || h)
        },
        8319: (e, t, n) => {
          "use strict";
          var r = n(4954),
            i = n(8311),
            o = n(1176),
            a = n(8885),
            s = n(7942),
            l = n(6637),
            c = n(4237),
            A = n(8115),
            u = n(3466),
            f = n(5650),
            d = n(4229),
            p = f.UNSUPPORTED_Y,
            g = [].push,
            h = Math.min,
            _ = 4294967295;
          r("split", (function (e, t, n) {
            var r;
            return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, n) {
              var r = String(a(this)),
                o = void 0 === n ? _ : n >>> 0;
              if (0 === o) return [];
              if (void 0 === e) return [r];
              if (!i(e)) return t.call(r, e, o);
              for (var s, l, c, A = [], f = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), d = 0, p = new RegExp(e.source, f + "g");
                (s = u.call(p, r)) && !((l = p.lastIndex) > d && (A.push(r.slice(d, s.index)), s.length > 1 && s.index < r.length && g.apply(A, s.slice(1)), c = s[0].length, d = l, A.length >= o));) p.lastIndex === s.index && p.lastIndex++;
              return d === r.length ? !c && p.test("") || A.push("") : A.push(r.slice(d)), A.length > o ? A.slice(0, o) : A
            } : "0".split(void 0, 0).length ? function (e, n) {
              return void 0 === e && 0 === n ? [] : t.call(this, e, n)
            } : t, [function (t, n) {
              var i = a(this),
                o = null == t ? void 0 : t[e];
              return void 0 !== o ? o.call(t, i, n) : r.call(String(i), t, n)
            }, function (e, i) {
              var a = n(r, this, e, i, r !== t);
              if (a.done) return a.value;
              var u = o(this),
                f = String(e),
                d = s(u, RegExp),
                g = u.unicode,
                v = (u.ignoreCase ? "i" : "") + (u.multiline ? "m" : "") + (u.unicode ? "u" : "") + (p ? "g" : "y"),
                b = new d(p ? "^(?:" + u.source + ")" : u, v),
                m = void 0 === i ? _ : i >>> 0;
              if (0 === m) return [];
              if (0 === f.length) return null === A(b, f) ? [f] : [];
              for (var w = 0, y = 0, C = []; y < f.length;) {
                b.lastIndex = p ? 0 : y;
                var x, E = A(b, p ? f.slice(y) : f);
                if (null === E || (x = h(c(b.lastIndex + (p ? y : 0)), f.length)) === w) y = l(f, y, g);
                else {
                  if (C.push(f.slice(w, y)), C.length === m) return C;
                  for (var B = 1; B <= E.length - 1; B++)
                    if (C.push(E[B]), C.length === m) return C;
                  y = w = x
                }
              }
              return C.push(f.slice(w)), C
            }]
          }), !!d((function () {
            var e = /(?:)/,
              t = e.exec;
            e.exec = function () {
              return t.apply(this, arguments)
            };
            var n = "ab".split(e);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
          })), p)
        },
        8827: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(1017).end,
            o = n(9445)("trimEnd"),
            a = o ? function () {
              return i(this)
            } : "".trimEnd;
          r({
            target: "String",
            proto: !0,
            forced: o
          }, {
            trimEnd: a,
            trimRight: a
          })
        },
        1715: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(1017).start,
            o = n(9445)("trimStart"),
            a = o ? function () {
              return i(this)
            } : "".trimStart;
          r({
            target: "String",
            proto: !0,
            forced: o
          }, {
            trimStart: a,
            trimLeft: a
          })
        },
        5794: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(1017).trim;
          r({
            target: "String",
            proto: !0,
            forced: n(9445)("trim")
          }, {
            trim: function () {
              return i(this)
            }
          })
        },
        6882: (e, t, n) => {
          n(8423)("asyncIterator")
        },
        634: (e, t, n) => {
          "use strict";
          var r = n(3103),
            i = n(7400),
            o = n(9859),
            a = n(816),
            s = n(5052),
            l = n(1787).f,
            c = n(7081),
            A = o.Symbol;
          if (i && "function" == typeof A && (!("description" in A.prototype) || void 0 !== A().description)) {
            var u = {},
              f = function () {
                var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                  t = this instanceof f ? new A(e) : void 0 === e ? A() : A(e);
                return "" === e && (u[t] = !0), t
              };
            c(f, A);
            var d = f.prototype = A.prototype;
            d.constructor = f;
            var p = d.toString,
              g = "Symbol(test)" == String(A("test")),
              h = /^Symbol\((.*)\)[^)]+$/;
            l(d, "description", {
              configurable: !0,
              get: function () {
                var e = s(this) ? this.valueOf() : this,
                  t = p.call(e);
                if (a(u, e)) return "";
                var n = g ? t.slice(7, -1) : t.replace(h, "$1");
                return "" === n ? void 0 : n
              }
            }), r({
              global: !0,
              forced: !0
            }, {
              Symbol: f
            })
          }
        },
        1382: (e, t, n) => {
          n(2574)("Float32", (function (e) {
            return function (t, n, r) {
              return e(this, t, n, r)
            }
          }))
        },
        1982: (e, t, n) => {
          n(2574)("Float64", (function (e) {
            return function (t, n, r) {
              return e(this, t, n, r)
            }
          }))
        },
        6618: (e, t, n) => {
          "use strict";
          var r = n(8200);
          (0, n(9918).exportTypedArrayStaticMethod)("from", n(5215), r)
        },
        4074: (e, t, n) => {
          n(2574)("Int16", (function (e) {
            return function (t, n, r) {
              return e(this, t, n, r)
            }
          }))
        },
        4696: (e, t, n) => {
          n(2574)("Int32", (function (e) {
            return function (t, n, r) {
              return e(this, t, n, r)
            }
          }))
        },
        3229: (e, t, n) => {
          n(2574)("Int8", (function (e) {
            return function (t, n, r) {
              return e(this, t, n, r)
            }
          }))
        },
        9527: (e, t, n) => {
          "use strict";
          var r = n(9918),
            i = n(8200),
            o = r.aTypedArrayConstructor;
          (0, r.exportTypedArrayStaticMethod)("of", (function () {
            for (var e = 0, t = arguments.length, n = new(o(this))(t); t > e;) n[e] = arguments[e++];
            return n
          }), i)
        },
        315: (e, t, n) => {
          "use strict";
          var r = n(9918),
            i = n(9859),
            o = n(4229),
            a = n(3819),
            s = n(4237),
            l = n(3867),
            c = n(2671),
            A = n(8506),
            u = n(6358),
            f = n(9811),
            d = r.aTypedArray,
            p = r.exportTypedArrayMethod,
            g = i.Uint16Array,
            h = g && g.prototype.sort,
            _ = !!h && !o((function () {
              var e = new g(2);
              e.sort(null), e.sort({})
            })),
            v = !!h && !o((function () {
              if (u) return u < 74;
              if (c) return c < 67;
              if (A) return !0;
              if (f) return f < 602;
              var e, t, n = new g(516),
                r = Array(516);
              for (e = 0; e < 516; e++) t = e % 4, n[e] = 515 - e, r[e] = e - 2 * t + 3;
              for (n.sort((function (e, t) {
                  return (e / 4 | 0) - (t / 4 | 0)
                })), e = 0; e < 516; e++)
                if (n[e] !== r[e]) return !0
            }));
          p("sort", (function (e) {
            var t = this;
            if (void 0 !== e && a(e), v) return h.call(t, e);
            d(t);
            var n, r = s(t.length),
              i = Array(r);
            for (n = 0; n < r; n++) i[n] = t[n];
            for (i = l(t, function (e) {
                return function (t, n) {
                  return void 0 !== e ? +e(t, n) || 0 : n != n ? -1 : t != t ? 1 : 0 === t && 0 === n ? 1 / t > 0 && 1 / n < 0 ? 1 : -1 : t > n
                }
              }(e)), n = 0; n < r; n++) t[n] = i[n];
            return t
          }), !v || _)
        },
        3161: (e, t, n) => {
          n(2574)("Uint16", (function (e) {
            return function (t, n, r) {
              return e(this, t, n, r)
            }
          }))
        },
        723: (e, t, n) => {
          n(2574)("Uint32", (function (e) {
            return function (t, n, r) {
              return e(this, t, n, r)
            }
          }))
        },
        3675: (e, t, n) => {
          n(2574)("Uint8", (function (e) {
            return function (t, n, r) {
              return e(this, t, n, r)
            }
          }))
        },
        6920: (e, t, n) => {
          n(2574)("Uint8", (function (e) {
            return function (t, n, r) {
              return e(this, t, n, r)
            }
          }), !0)
        },
        4962: (e, t, n) => {
          n(5738)
        },
        6481: (e, t, n) => {
          n(4173)
        },
        8990: (e, t, n) => {
          n(7919)
        },
        884: (e, t, n) => {
          n(7178)
        },
        5431: (e, t, n) => {
          n(3887)
        },
        5704: (e, t, n) => {
          n(1639)
        },
        6886: (e, t, n) => {
          var r = n(9859),
            i = n(5694),
            o = n(5735),
            a = n(5762),
            s = n(95),
            l = s("iterator"),
            c = s("toStringTag"),
            A = o.values;
          for (var u in i) {
            var f = r[u],
              d = f && f.prototype;
            if (d) {
              if (d[l] !== A) try {
                a(d, l, A)
              } catch (e) {
                d[l] = A
              }
              if (d[c] || a(d, c, u), i[u])
                for (var p in o)
                  if (d[p] !== o[p]) try {
                    a(d, p, o[p])
                  } catch (e) {
                    d[p] = o[p]
                  }
            }
          }
        }
      },
      t = {};

    function n(r) {
      var i = t[r];
      if (void 0 !== i) return i.exports;
      var o = t[r] = {
        exports: {}
      };
      return e[r](o, o.exports, n), o.exports
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
    }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    }, (() => {
      let e = !1;
      if (n.g.__wxConfig && "string" == typeof n.g.__wxConfig.platform) "ios" === n.g.__wxConfig.platform.toLowerCase() && (e = !0);
      else if ("undefined" != typeof navigator && "string" == typeof navigator.userAgent) {
        const t = navigator.userAgent.toLowerCase();
        (t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0) && (e = !0)
      }
      const t = [];
      e && (n.g.Promise = void 0, t.push("Promise")), n(305)({
        usePolyfill: t,
        useNative: ["WeakMap"]
      }), n(5482), n(9401)
    })()
  })();
  var __wxConfig, Foundation, __wxTest__ = !1,
    wxRunOnDebug = function (e) {
      e()
    };
  (() => {
    "use strict";
    var e = {
      d: (t, n) => {
        for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {
          enumerable: !0,
          get: n[r]
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
        default: () => k
      });
      class n {
        constructor() {
          this.listeners = {}
        }
        emit(e, t) {
          if (this.listeners[e] && this.listeners[e].length > 0) {
            let n = !1;
            return this.listeners[e].forEach((function (e) {
              0 !== e.count && e.cb(t), e.count > 0 && e.count--, 0 === e.count && (n = !0)
            })), n && (this.listeners[e] = this.listeners[e].filter((e => 0 !== e.count))), !0
          }
          return !1
        }
        many(e, t, n) {
          if (!t) return this;
          const r = {
            count: n,
            cb: t
          };
          return this.listeners[e] ? this.listeners[e].push(r) : this.listeners[e] = [r], this
        }
        on(e, t) {
          this.many(e, t, -1)
        }
        once(e, t) {
          this.many(e, t, 1)
        }
        off(e, t) {
          for (let n = 0; n < this.listeners[e].length; n++) {
            const r = this.listeners[e][n];
            if (r.cb === t) return void(r.count = 0)
          }
        }
      }
      const r = e.g.__wxLibrary,
        i = e.g.__wxConfig,
        o = r.envType,
        a = r.contextType,
        s = "Service" === o,
        l = "WebView" === o,
        c = "Worker" === o,
        A = "Widget" === o,
        u = l || s && 0 === a.indexOf("App:"),
        f = s && 0 === a.indexOf("Game:"),
        d = c && "function" == typeof e.g.workerInvokeJsApi,
        p = !!i.isIsolateContext,
        g = s && (p && a.indexOf("Uncertain") >= 0 || a.indexOf("MainContext") >= 0),
        h = s && a.indexOf("SubContext") >= 0,
        _ = g || h,
        v = l || g,
        b = "wxlib" === i.workerContentType,
        m = {
          platform: function () {
            let e = i.platform;
            if (!e && l) {
              const t = window.navigator.userAgent.toLowerCase();
              t.indexOf("devtools") >= 0 ? e = "devtools" : t.indexOf("miniprogramenv/windows") >= 0 ? e = "windows" : t.indexOf("miniprogramenv/mac") >= 0 ? e = "mac" : t.indexOf("miniprogramenv/mina") >= 0 ? e = "mina" : t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0 ? e = "ios" : t.indexOf("android") >= 0 && (e = "android")
            }
            return (e || "unknown").toLowerCase()
          }(),
          SDKVersion: "undefined" == typeof __libVersionInfo__ || "develop" === __libVersionInfo__.version ? "9.9.9" : __libVersionInfo__.version,
          isIsolateContext: _,
          isGame: f,
          isApp: u,
          isMainContext: g,
          isSubContext: h,
          isSafeEnv: v,
          isService: s,
          isWebView: l,
          isWorker: c,
          isWidget: A,
          isSupportWorkerAPI: d,
          typeStr: o,
          isWXLibWorker: b
        },
        w = new n,
        y = {},
        C = "configReady",
        x = "libraryReady";

      function E(e, t) {
        e in y ? t(y[e]) : I.once("lifeCycle:" + e, t)
      }

      function B(e, t) {
        return !(e in y) && (y[e] = t, I.emit("lifeCycle:" + e, t))
      }
      const S = e.g,
        I = {
          EventEmitter: n,
          on: w.on.bind(w),
          emit: w.emit.bind(w),
          once: w.once.bind(w),
          onConfigReady: E.bind(null, C),
          emitConfigReady: B.bind(null, C),
          get isConfigReady() {
            return C in y
          },
          onLibraryReady: E.bind(null, x),
          emitLibraryReady: B.bind(null, x),
          get isLibraryReady() {
            return x in y
          },
          onBridgeReady(e) {
            void 0 !== WeixinJSBridge ? e() : "object" == typeof document && document.addEventListener("WeixinJSBridgeReady", e, !1)
          },
          env: m,
          global: S
        };
      "undefined" != typeof __Function__ && (Function = function () {
        return "return this" === arguments[arguments.length - 1] ? function () {
          return S
        } : new __Function__(...arguments)
      }, Function.prototype = __Function__.prototype);
      e.g.__wxLibrary.onEnd = function () {
        I.emitLibraryReady({})
      };
      const k = I
    })(), Foundation = t.default
  })();
  var nativeTrans = function (e) {
      "use strict";
      var t = "webViewCreated",
        n = "nativeTransFail",
        r = "nativeTransReady";
      console;
      if ("object" != typeof e.ntrans) return e.__nativeTransEnabled__ = !1, {
        enabled: !1,
        EVT_WV_CREATED: t,
        EVT_NTRANS_FAIL: n
      };
      e.__nativeTransEnabled__ = !0;
      var i = e.ntrans,
        o = i.id,
        a = o === i.serviceId,
        s = {};

      function l(e) {
        a ? e(i.serviceId) : Foundation.onConfigReady((function () {
          e(i.serviceId)
        }))
      }

      function c(e, t) {
        var n = s[e] = s[e] || {
          connectedTime: 0,
          dataQueue: [],
          initTime: Date.now()
        };
        return "number" == typeof t && (n.id = t), s[e]
      }

      function A(e, t) {
        return {
          event: e,
          param: t,
          id: o,
          sendTime: Date.now()
        }
      }
      return l((function () {
        delete e.ntrans
      })), {
        enabled: !0,
        publishToTargetWithQueue: function (e, t, n) {
          var r = c(e),
            o = A(t, n);
          r.connectedTime ? i.postMessage(r.id, o) : Date.now() - r.initTime > 3e5 ? r.dataQueue = [] : r.dataQueue.push(o)
        },
        packMessage: A,
        broadcastMessage: function (e, t) {
          i.broadcastMessage(e, t)
        },
        onMessage: function (e, t) {
          t !== o && (i.setMessageListener(), o = t), i.setMessageListener(t, (function (t) {
            "function" == typeof e && e(t.event, t.param, t.id, t.sendTime)
          }))
        },
        registerTarget: function (e, t) {
          var n = c(e, t);
          n.connectedTime = Date.now(), i.postMessage(n.id, A(r)), n.dataQueue.forEach((function (e) {
            e.sendTime = Date.now(), i.postMessage(n.id, e)
          })), n.dataQueue = []
        },
        onceServiceConfirmed: l,
        revertTargets: function () {
          for (var e in s) s[e].dataQueue.forEach((function (t) {
            WeixinJSBridge.publish(t.event, t.param, [e])
          })), s[e].dataQueue = [];
          s = {}
        },
        isService: a,
        get id() {
          return o
        },
        SERVICE_TAG: "AppService",
        EVT_NTRANS_READY: r,
        EVT_WV_CREATED: t,
        EVT_NTRANS_FAIL: n,
        version: i.version,
        addGroup: i.addGroup.bind(i)
      }
    }(this),
    WeixinJSBridge = function (e) {
      "use strict";
      "function" == typeof logxx && logxx("jsbridge start");
      var t = "undefined" != typeof __devtoolssubcontext && __devtoolssubcontext;
      if (e.navigator && e.navigator.userAgent) {
        var n = e.navigator.userAgent;
        (n.indexOf("appservice") > -1 || n.indexOf("wechatdevtools") > -1) && (t = !0)
      }
      if (t && !Foundation.env.isWorker || e.useGlobalJSBridge) {
        var r = e.WeixinJSBridge;
        return delete e.WeixinJSBridge, r
      }
      if (e.OSUseGlobalJSBridge) return r = e.WeixinJSBridge;
      var i = e.__wxConfig || {},
        o = i.isWK,
        a = {},
        s = 0,
        l = {},
        c = {},
        A = "custom_event_",
        u = {},
        f = e.webkit,
        d = e.WeixinJSCore;
      "object" == typeof d && "function" != typeof d.publishHandler && (d.publishHandler = function () {}), Foundation.env.isWorker && Foundation.env.isSupportWorkerAPI && (d = {
        invokeHandler: e.workerInvokeJsApi
      }, s = 1 << 25), delete e.webkit, e.WeixinJSCore = {
        invokeHandler: function () {},
        publishHandler: function () {},
        setTimerHandler: function () {},
        clearTimerHandler: function () {}
      };
      var p = JSON.parse,
        g = JSON.stringify,
        h = function (e, t) {
          if (void 0 !== e && "function" == typeof a[t] && "" !== e && null !== e) {
            if ("string" == typeof e) try {
              e = p(e), e = WeixinNativeBuffer.unpack(e)
            } catch (t) {
              e = {}
            }
            var n = a[t];
            delete a[t], "function" == typeof n && n(e)
          }
        },
        _ = function (e, t, n, r = !1) {
          var i = t;
          r || (t = WeixinNativeBuffer.pack(t), i = g(t || {}));
          var l = ++s;
          a[l] = n,
            function (e, t, n) {
              if (d) i = d.invokeHandler(e, t, n), h(i, n);
              else {
                var r = {
                  event: e,
                  paramsString: t,
                  callbackId: n
                };
                if (o) {
                  var i = prompt("webgame_invoke", g(r));
                  h(i, n)
                } else f.messageHandlers.invokeHandler.postMessage(r)
              }
            }(e, i, l)
        },
        v = function (e, t) {
          t = WeixinNativeBuffer.unpack(t);
          var n = a[e];
          delete a[e], "function" == typeof n && n(t)
        },
        b = function (e, t) {
          l[e] = t
        },
        m = function (e, t, n) {
          ! function (e, t, n) {
            d ? d.publishHandler(e, g(t), g(n)) : f.messageHandlers.publishHandler.postMessage({
              event: e,
              paramsString: g(t),
              webviewIds: g(n)
            })
          }(A + e, t, n)
        },
        w = function (e, t) {
          u[A + e] = t
        },
        y = function (e, t, n, r) {
          var i, o;
          t = WeixinNativeBuffer.unpack(t), -1 != e.indexOf(A) ? i = u[e] : (i = l[e], o = c[e]), "function" == typeof i && i(t, n, r), o && o.forEach((e => e(t, n, r)))
        };
      return e.WeixinJSBridge = {
        get invokeCallbackHandler() {
          return v
        },
        get subscribeHandler() {
          return y
        }
      }, i && i.clientDebug && (e.WeixinJSBridge = {
        on: b,
        publish: m,
        invoke: _,
        subscribe: w,
        get invokeCallbackHandler() {
          return v
        },
        get subscribeHandler() {
          return y
        }
      }), {
        on: b,
        publish: m,
        invoke: _,
        subscribe: w,
        loadJsFiles: function (e, t) {
          _("loadJsFiles", {
            paths: e
          }, t)
        },
        addEventListener: function (e, t) {
          c[e] ? c[e].add(t) : c[e] = new Set([t])
        },
        removeEventListener: function (e, t) {
          c[e] && (t ? c[e].delete(t) : delete c[e])
        },
        get invokeCallbackHandler() {
          return v
        },
        get subscribeHandler() {
          return y
        }
      }
    }(this);
  Foundation.onBridgeReady((function () {
      var e, t = String.prototype.replace,
        n = WeixinJSBridge.publish,
        r = [];
      WeixinJSBridge.publish = function (i, o, a) {
        var s;
        Foundation.isConfigReady || nativeTrans.enabled ? (a = function (e) {
          if (Array.isArray(e)) {
            var t = e.filter((function (e) {
              return null != e
            }));
            if (0 === e.length || 0 !== t.length) return t
          }
        }(a || [])) && (s = i || "", i = t.call(s, /["'\\]/g, ""), e && e(i, o, a) || n.call(WeixinJSBridge, i, o, a)) : r.push([i, o, a])
      }, Foundation.onConfigReady((function () {
        r.forEach((function (e) {
          WeixinJSBridge.publish.apply(WeixinJSBridge, e)
        })), r = []
      })), WeixinJSBridge.setCustomPublishHandler = function (t) {
        e = t
      }
    })),
    function () {
      var e = nativeTrans.enabled;
      if (Foundation.onBridgeReady((function () {
          WeixinJSBridge.subscribe(nativeTrans.EVT_WV_CREATED, (function (t) {
            e && t.enableNTrans ? (wxNativeConsole.warn("[NTrans][Master] receive webviewCreated: " + t.id), nativeTrans.registerTarget(t.id + "", t.id)) : e && !t.enableNTrans ? (e = !1, wxNativeConsole.warn("[NTrans][Master] webView not support nTrans, revert channel."), WeixinJSBridge.setCustomPublishHandler(null), nativeTrans.revertTargets()) : !e && t.enableNTrans && (wxNativeConsole.warn("[NTrans][Master] receive webviewCreated: " + t.id + ", but service not support nTrans."), WeixinJSBridge.publish(nativeTrans.EVT_NTRANS_FAIL, {}, [t.id + ""]))
          })), global.__WeixinJSBridge = WeixinJSBridge
        })), e) {
        var t = {},
          n = ["log", "warn", "error", "info", "debug"];
        console.warn("[NTrans][Master] init " + nativeTrans.id + " " + nativeTrans.version), WeixinJSBridge.setCustomPublishHandler((function (e, r, i) {
          if (i && 0 !== i.length) i.forEach((function (i) {
            n.indexOf(e) < 0 && !t[i] && wxNativeConsole && wxNativeConsole.info("[NTrans][Master] publish event[" + e + "] dest [" + i + "]"), nativeTrans.publishToTargetWithQueue(i + "", e, r)
          }));
          else {
            var o = nativeTrans.packMessage(e, r);
            nativeTrans.broadcastMessage(nativeTrans.id, o)
          }
          return !0
        })), nativeTrans.onMessage((function (e, n, r, i) {
          e !== nativeTrans.EVT_NTRANS_READY && ("PAGE_EVENT" === e && n && "__DOMReady" === n.eventName && (t[r] = !0), WeixinJSBridge.subscribeHandler("custom_event_" + e, n, r, {
            nativeTime: i || Date.now()
          }))
        }), nativeTrans.id)
      } else __wxConfig && "android" == __wxConfig.platform && console.warn("[NTrans][Master] nTrans diasbled.")
    }(),
    function (e) {
      "use strict";
      var t = JSON.parse,
        n = JSON.stringify,
        r = Object.defineProperty,
        i = Foundation.env.isSubContext,
        o = Foundation.env.isSafeEnv,
        a = {},
        s = (Foundation.env.isWXLibWorker, ["env", "appLaunchInfo", "ext", "wxAppInfo", "debug", "entryPagePath", "envVersion", "tabBar", "pages", "page", "accountInfo", "global", "platform", "system", "appType", "networkTimeout", "navigateToMiniProgramAppIdList", "plugins", "extAppid", "host", "prerender"]);

      function l(e, t, n, i) {
        r(e, n, {
          configurable: !0,
          enumerable: !0,
          get: function () {
            if (n in t) return t[n];
            try {
              (new Error).stack, "object" == typeof Reporter && "function" == typeof Reporter.reportKeyValue && Reporter.reportKeyValue({
                key: "DeprecatedAPI",
                value: "__wxConfig." + n,
                force: !0
              })
            } catch (e) {}
            try {
              return "function" != typeof i ? i : i()
            } catch (e) {
              return
            }
          },
          set: function (e) {
            t[n] = e
          }
        })
      }

      function c(e) {
        return t(n(e))
      }
      var A = !0 === (__wxConfig = void 0 !== e.__wxConfig ? o ? Object.assign({}, e.__wxConfig) : c(e.__wxConfig) : {}).preload,
        u = !1,
        f = [],
        d = [],
        p = Foundation.env.typeStr;
      Foundation.env.isSubContext && (p = "SubContext");

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
      var h = function (e) {
          d.push(e)
        },
        _ = function (e) {
          u ? void 0 !== __wxConfig && g(e, __wxConfig) : "function" == typeof e && f.push(e)
        },
        v = function (t) {
          t.tabBar && t.tabBar.list && t.tabBar.list.forEach((function (e) {
            delete e.iconData, delete e.selectedIconData
          })), delete t.permission;
          var n = t.subPackages || t.subpackages;
          return n && n.length > 0 && (n.forEach((function (e) {
            delete e.pages
          })), t.subPackages = t.subpackages = n), u && (__libVersionInfo__.features && __libVersionInfo__.features.pruneWxConfigByPage && (i || (__wxConfig._preloadRule = __wxConfig.preloadRule || {}, __wxConfig._page = __wxConfig.page || {}, delete __wxConfig.preloadRule, delete __wxConfig.page), __wxConfig.updatePage = function (e, t) {
            __wxConfig.page = __wxConfig.page || {}, __wxConfig.page[e] = __wxConfig.page[e + ".html"] = t, a[e + ".html"] = c(t)
          }, __wxConfig.updatePreloadRule = function (e, t) {
            __wxConfig.preloadRule = __wxConfig.preloadRule || {}, __wxConfig.preloadRule[e] = t
          }), e.__wxConfig.page = e.__wxConfig.page || {}, __wxConfig.page = __wxConfig.page || {}), t
        },
        b = function (e) {
          return e.onReady = _, e.beforeReady = h, i || (e.preload = A), e.isReady = u, e.isSubContext = i, e.envTag = p, e.isSafeContext = o, e.sdkVersion = e.SDKVersion = Foundation.env.SDKVersion, e.twoPhaseInject = !0, e.platform = Foundation.env.platform, e.brand || "ios" !== e.platform || (e.brand = "iPhone"), "number" == typeof e.pixelRatio ? e.devicePixelRatio = e.pixelRatio : "number" == typeof e.devicePixelRatio && (e.pixelRatio = e.devicePixelRatio), e
        },
        m = function () {
          void 0 === e.__wxConfig || u || (u = !0, Object.assign(__wxConfig, o ? e.__wxConfig : c(e.__wxConfig)), __wxConfig = b(__wxConfig), __wxConfig = v(__wxConfig), function (e) {
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
            __wxConfig.onReadyStart = Date.now(), f.forEach((function (e) {
                g(e, __wxConfig)
              })), __wxConfig.onReadyEnd = Date.now(), f = [],
              function () {
                if (!o) {
                  var t = e.__wxConfig,
                    n = {},
                    r = {};
                  a = t.page || {}, __libVersionInfo__.features && __libVersionInfo__.features.pruneWxConfigByPage && (a = {});
                  try {
                    l(r, n, "deprecated", !0), s.forEach((function (e) {
                      if (e in t) {
                        var i = t[e];
                        switch (e) {
                          case "page":
                            l(r, n, e, a);
                            break;
                          case "env":
                            l(r, n, e, (function () {
                              return console.warn("DeprecationWarning: __wxConfig.env is deprecated, please use wx.env instead."), {
                                USER_DATA_PATH: i.USER_DATA_PATH
                              }
                            }));
                            break;
                          case "accountInfo":
                            l(r, n, e, {
                              appId: i.appId,
                              icon: i.icon,
                              nickname: i.nickname
                            });
                            break;
                          case "appLaunchInfo":
                            l(r, n, e, (function () {
                              return console.warn("DeprecationWarning: __wxConfig.appLaunchInfo is deprecated, please use wx.getLaunchOptionsSync() instead."), wx && "function" == typeof wx.getLaunchOptionsSync ? wx.getLaunchOptionsSync() : {}
                            }));
                            break;
                          case "wxAppInfo":
                            l(r, n, e, {
                              maxRequestConcurrent: i.maxRequestConcurrent,
                              maxUploadConcurrent: i.maxUploadConcurrent,
                              maxDownloadConcurrent: i.maxDownloadConcurrent,
                              maxWorkerConcurrent: i.maxWorkerConcurrent,
                              maxWebsocketConnect: i.maxWebsocketConnect
                            });
                            break;
                          default:
                            l(r, n, e, i)
                        }
                      }
                    })), e.__wxConfig = r
                  } catch (n) {
                    e.__wxConfig = t
                  }
                }
              }()
          })))
        };

      function w() {
        Foundation.emitConfigReady(__wxConfig)
      }
      __wxConfig = b(__wxConfig), __wxConfig = v(__wxConfig), Foundation.onConfigReady((function () {
        m()
      })), i ? __wxConfig.__readyHandler = w : A ? Foundation.onBridgeReady((function () {
        WeixinJSBridge.on("onWxConfigReady", w)
      })) : Foundation.onLibraryReady(w)
    }(this),
    function (e) {
      "use strict";

      function t(e) {
        Foundation.emit("unhandledRejection", e) || console.error("Uncaught (in promise)", e.reason)
      }
      var n, r, i = (n = [], r = [], {
        set: function (e, t) {
          n.push(e), r.push(t)
        },
        get: function (e) {
          var t = n.indexOf(e);
          if (-1 !== t) return r[t]
        },
        delete: function (e) {
          var t = n.indexOf(e); - 1 !== t && (n.splice(t, 1), r.splice(t, 1))
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
            var n = i.get(e.promise);
            if (n) n.event = e;
            else {
              var r = {
                event: e
              };
              setTimeout((function () {
                0 === r.event.type && t(r.event), i.delete(r.event.promise)
              }), 0), i.set(e.promise, r)
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
        n = e.getNativeBufferId,
        r = e.setNativeBuffer,
        i = e.getNativeBuffer,
        o = __wxConfig || {},
        a = !1;
      "android" === o.platform || "windows" === o.platform || "mina" === o.platform ? a = "function" == typeof n && "function" == typeof r && "function" == typeof i && o.nativeBufferEnabled : "ios" !== o.platform && "mac" !== o.platform || (a = null != t);
      var s = function (e) {
          var i = {};
          return a ? i.id = function (e) {
            var i = e.__proto__;
            e.__proto__ = ArrayBuffer.prototype;
            var o = -1;
            return t ? o = t.new(e) : "function" == typeof n && "function" == typeof r && (o = n(), r(o, e)), e.__proto__ = i, o
          }(e) : i.base64 = f(e), i
        },
        l = function (e) {
          var n;
          if (null != e) return a && void 0 !== e.id ? (n = e.id, t ? t.get(n) : "function" == typeof i ? i(n) : void 0) : void 0 !== e.base64 ? d(e.base64) : void 0
        },
        c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        A = A || function (e) {
          for (var t, n, r = String(e), i = "", o = 0, a = c; r.charAt(0 | o) || (a = "=", o % 1); i += a.charAt(63 & t >> 8 - o % 1 * 8)) {
            if ((n = r.charCodeAt(o += 3 / 4)) > 255) throw new Error('"btoa" failed');
            t = t << 8 | n
          }
          return i
        },
        u = u || function (e) {
          var t = String(e).replace(/=+$/, ""),
            n = "";
          if (t.length % 4 == 1) throw new Error('"atob" failed');
          for (var r, i, o = 0, a = 0; i = t.charAt(a++); ~i && (r = o % 4 ? 64 * r + i : i, o++ % 4) ? n += String.fromCharCode(255 & r >> (-2 * o & 6)) : 0) i = c.indexOf(i);
          return n
        },
        f = function (e) {
          for (var t = "", n = new Uint8Array(e), r = n.byteLength, i = 0; i < r; i++) t += String.fromCharCode(n[i]);
          return A(t)
        },
        d = function (e) {
          for (var t = u(e), n = t.length, r = new Uint8Array(n), i = 0; i < n; i++) r[i] = t.charCodeAt(i);
          return r.buffer
        },
        p = function (e) {
          return Object.prototype.toString.call(e).split(" ")[1].split("]")[0]
        };
      return delete e.WeixinNativeBuffer, delete e.getNativeBufferId, delete e.setNativeBuffer, delete e.getNativeBuffer, {
        new: s,
        get: l,
        useCompatibleMode: function (e) {
          t && t.useCompatibleMode(e)
        },
        pack: function (e) {
          if (null == e) return e;
          var t = [];
          for (var n in e) {
            var r = e[n];
            if (void 0 !== r && "ArrayBuffer" === p(r) && void 0 !== r.byteLength)(o = s(r)).key = n, t.push(o)
          }
          if (t.length > 0) {
            for (var i = 0; i < t.length; i++) {
              var o;
              delete e[(o = t[i]).key]
            }
            e.__nativeBuffers__ = t
          }
          return e
        },
        unpack: function (e) {
          if (null == e || null == e.__nativeBuffers__) return e;
          var t = e.__nativeBuffers__;
          delete e.__nativeBuffers__;
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            if (null != r) {
              var i = l(r);
              void 0 !== i && "ArrayBuffer" === p(i) && (e[r.key] = i)
            }
          }
          return e
        },
        packWithBase64: function (e) {
          if (null == e) return e;
          var t = [];
          for (var n in e) {
            var r = e[n];
            if (void 0 !== r && "ArrayBuffer" === p(r) && void 0 !== r.byteLength)(o = {
              base64: f(r)
            }).key = n, t.push(o)
          }
          if (t.length > 0) {
            for (var i = 0; i < t.length; i++) {
              var o;
              delete e[(o = t[i]).key]
            }
            e.__nativeBuffers__ = t
          }
          return e
        }
      }
    }(this),
    WeixinNativeBuffer = NativeBuffer;
  NativeBuffer = null;
  var wxNativeConsole, wxConsole = ["log", "info", "warn", "error", "debug", "time", "timeEnd", "group", "groupEnd"].reduce((function (e, t) {
      return e[t] = function () {}, e
    }), {}),
    wxPerfConsole = ["log", "info", "warn", "error", "time", "timeEnd", "trace", "profile", "profileSync"].reduce((function (e, t) {
      return e[t] = function () {}, e
    }), {});
  (() => {
    "use strict";
    var e = {
        n: t => {
          var n = t && t.__esModule ? () => t.default : () => t;
          return e.d(n, {
            a: n
          }), n
        },
        d: (t, n) => {
          for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: n[r]
          })
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t)
      },
      t = {};
    e.d(t, {
      default: () => f
    });
    const n = BabelRuntimeHelpers.objectSpread2;
    var r = e.n(n);
    const {
      onConfigReady: i,
      env: o
    } = Foundation;
    let a = ["log", "info", "warn", "error", "debug", "createLogger"].reduce((function (e, t) {
      return e[t] = function () {}, e
    }), {});

    function s(e, t) {
      this.num = e, this.type = t
    }
    const l = {
        ALL: new s(Number.MIN_VALUE, "ALL"),
        DEBUG: new s(5e3, "DEBUG"),
        LOG: new s(1e4, "LOG"),
        INFO: new s(2e4, "INFO"),
        WARN: new s(3e4, "WARN"),
        ERROR: new s(4e4, "ERROR"),
        OFF: new s(Number.MAX_VALUE, "OFF")
      },
      c = (e, t) => ({
        debug: e(l.DEBUG, t),
        log: e(l.LOG, t),
        info: e(l.INFO, t),
        warn: e(l.WARN, t),
        error: e(l.ERROR, t)
      });
    let A = l.INFO;
    const u = () => {
      const e = __wxConfig.platform;
      let t = [];
      const n = function (t) {
          const n = ("0" + (t.getMonth() + 1)).slice(-2),
            r = ("0" + t.getDate()).slice(-2),
            i = ("0" + t.getHours()).slice(-2),
            o = ("0" + t.getMinutes()).slice(-2),
            a = ("0" + t.getSeconds()).slice(-2),
            s = ("00" + t.getMilliseconds()).slice(-3),
            l = t.getFullYear() + "-" + n + "-" + r,
            c = i + ":" + o + ":" + a + "." + s;
          if ("ios" === e) {
            return l + " " + c + "000" + (t.getTimezoneOffset() / 6e3 * -1).toFixed(4).replace(/^0\./, "+").replace(/-0\./, "-")
          }
          return l + " " + (t.getTimezoneOffset() / 60 * -1).toFixed(1).replace(/^(\d)/, "+$1") + " " + c
        },
        o = function (e, n) {
          const r = e.type;
          return function (...i) {
            if (n && Array.prototype.unshift.call(i, "[" + n + "]"), wxConsole[r.toLowerCase()].call(wxConsole, ...i), e.num >= A.num) {
              const e = new Date,
                n = Array.prototype.slice.call(i).map((e => {
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
                type: r,
                content: n
              })
            }
          }
        };
      i((function () {
        setTimeout((function r() {
          var i;
          (setTimeout(r, 3e3), 0 !== t.length) && (i = t, "ios" === e ? WeixinJSBridge.invoke("systemLog", {
            dataArray: i.map((function (e) {
              return {
                message: "\n" + n(e.date) + " [" + e.type[0].toUpperCase() + "][wxapplib]] " + e.content
              }
            }))
          }) : "android" === e && WeixinJSBridge.invoke("systemLog", {
            message: ["\n"].concat(i.map((function (e) {
              return "[" + e.type[0].toUpperCase() + "][" + n(e.date) + "][wxapplib]] " + e.content
            }))).join("\n")
          }), t = [])
        }), 3e3)
      }));
      return r()(r()({}, c(o)), {}, {
        createLogger: function (e) {
          return c(o, "string" == typeof e ? e : "default")
        },
        __mergeSubContextLogs: e => {
          Array.isArray(e) && e.forEach((e => {
            const {
              level: t,
              logs: n,
              category: r
            } = e;
            o(t, r)(n)
          }))
        },
        __isFromMainContext: !0
      })
    };
    if (o.isWorker || o.isWidget) {
      const e = function () {
        return wxConsole
      };
      a = Object.assign({
        createLogger: e
      }, wxConsole)
    } else a = o.isSubContext && o.isIsolateContext ? (() => {
      let e = [];
      const t = (t, n) => (...r) => {
          e.push({
            level: t,
            logs: r,
            category: n
          })
        },
        n = () => {
          setTimeout((() => {
            const t = wxNativeConsole.__isFromMainContext ? wxNativeConsole.__mergeSubContextLogs : null;
            t ? (t(e), e = []) : n()
          }), 1e3)
        };
      return i(n), r()(r()({}, c(t)), {}, {
        createLogger: e => c(t, "string" == typeof e ? e : "default"),
        __isFromMainContext: !1
      })
    })() : u();
    const f = a;
    wxNativeConsole = t.default
  })();
  var JSContext, __appServiceConsole__, Protect, __errorTracer__, Reporter, __subContextEngine__, Safeway, WeixinWorker = function (e) {
    var t = ["request", "createSocketTask", "operateSocketTask", "onSocketTaskStateChange", "createRequestTask", "createRequestTaskAsync", "operateRequestTask", "onRequestTaskStateChange", "createDownloadTask", "createDownloadTaskAsync", "operateDownloadTask", "onDownloadTaskStateChange", "createUploadTask", "createUploadTaskAsync", "operateUploadTask", "onUploadTaskStateChange", "getNetworkType", "createAudioInstance", "createAudioInstanceAsync", "operateAudio", "destroyAudioInstance", "getAudioState", "setAudioState", "onAudioStateChange", "uploadFile", "downloadFile", "saveFile", "getFileInfo", "getSavedFileInfo", "getSavedFileList", "removeSavedFile", "readFile", "writeFile", "mkdir", "readdir", "rmdir", "access", "unlink", "stat", "copyFile", "rename", "fs_appendFile", "fs_appendFileSync", "fs_copyFile", "fs_copyFileSync", "fs_rename", "fs_renameSync", "getABTestConfig", "reportKeyValue", "reportIDKey"],
      n = !1;
    if (e.navigator && e.navigator.userAgent) {
      var r = e.navigator.userAgent;
      (r.indexOf("appservice") > -1 || r.indexOf("wechatdevtools") > -1) && (n = !0)
    }
    var i = e.WeAppWorker,
      o = e.WeixinWorker,
      a = [],
      s = [],
      l = [],
      c = [],
      A = [],
      u = {},
      f = function (e) {
        return u[e]
      },
      d = function (e, t) {
        u[e] = t
      },
      p = function (e) {
        e = WeixinNativeBuffer.unpack(e), s.forEach((function (t) {
          "function" == typeof t && t(e)
        }))
      },
      g = function (e, t) {
        t = WeixinNativeBuffer.unpack(t), a.forEach((function (n) {
          "function" == typeof n && n(e, t)
        }))
      },
      h = function (e, t) {
        l.forEach((function (n) {
          "function" == typeof n && n(e, t)
        }))
      },
      _ = function (e) {
        c.forEach((function (t) {
          "function" == typeof t && t(e)
        }))
      };
    Foundation.on("error", _), Foundation.on("unhandledRejection", (function (e) {
      A.forEach((function (t) {
        "function" == typeof t && t(e)
      }))
    }));
    var v = {
        get appServiceMsgHandler() {
          return p
        },
        get workerMsgHandler() {
          return g
        },
        get workerCreatedHandler() {
          return h
        },
        get errorHandler() {
          return _
        },
        get __workerId__() {
          return o.__workerId__
        }
      },
      b = {
        create: function (e, n) {
          var r, a, s = !(!(n = n || {}).useExperimentalWorker || !i);
          if (s ? (a = i, r = JSON.stringify(n)) : (a = o, r = {
              APIList: t
            }), "function" == typeof a.create) {
            var l = a.create.call(a, e, r);
            return d(l, a), {
              workerId: l,
              useWKWorker: s
            }
          }
        },
        createWXLibWorker: function (e, n) {
          var r = {
            APIList: t
          };
          n.APIList && (r.APIList = t.concat(n.APIList)), n.type && (r.type = n.type);
          var i = o;
          if ("function" == typeof i.createWXLibWorker) {
            var a = i.createWXLibWorker.call(i, e, JSON.stringify(r));
            return d(a, i), {
              workerId: a
            }
          }
        },
        terminate: function (e) {
          var t = f(e);
          if ("function" == typeof t.terminate) return function (e) {
            delete u[e]
          }(e), t.terminate.call(t, e)
        },
        postMsgToAppService: function (e, t) {
          try {
            !1 !== t && (e = "android" === __wxConfig.platform && (__wxConfig.clientVersion >= 671088640 && __wxConfig.clientVersion < 671088697 || __wxConfig.clientVersion >= 671088704 && __wxConfig.clientVersion < 41943120 || __wxConfig.clientVersion >= 671088736 && __wxConfig.clientVersion < 671088896) ? WeixinNativeBuffer.packWithBase64(e) : WeixinNativeBuffer.pack(e), e = JSON.stringify(e)), o.postMsgToAppService(e)
          } catch (e) {
            console.error(e)
          }
        },
        postMsgToWorker: function (e, t, n) {
          var r = f(e);
          try {
            !1 !== n && (t = "android" === __wxConfig.platform && (__wxConfig.clientVersion >= 671088640 && __wxConfig.clientVersion < 671088697 || __wxConfig.clientVersion >= 671088704 && __wxConfig.clientVersion < 41943120 || __wxConfig.clientVersion >= 671088736 && __wxConfig.clientVersion < 671088896) ? WeixinNativeBuffer.packWithBase64(t) : WeixinNativeBuffer.pack(t), t = JSON.stringify(t)), r.postMsgToWorker(e, t)
          } catch (e) {
            console.error(e)
          }
        },
        onWorkerMsg: function (e) {
          a.push(e)
        },
        onWorkerCreated: function (e) {
          l.push(e)
        },
        onAppServiceMsg: function (e) {
          s.push(e)
        },
        onError: function (e) {
          c.push(e)
        },
        onUnhandledRejection: function (e) {
          A.push(e)
        },
        get WebAssembly() {
          return o.WebAssembly
        }
      };
    return n && (b.appServiceMsgHandler = v.appServiceMsgHandler, b.workerMsgHandler = v.workerMsgHandler, b.errorHandler = v.errorHandler, b.__workerId__ = v.__workerId__), e.WeixinWorker = v, e.WeAppWorker = v, b
  }(this);
  (() => {
    "use strict";
    var e = {
      d: (t, n) => {
        for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {
          enumerable: !0,
          get: n[r]
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
    e.d(t, {
      default: () => P
    });
    const n = Object.prototype.toString,
      r = Object.getPrototypeOf,
      i = Object.getOwnPropertyNames,
      o = Object.getOwnPropertyDescriptor,
      a = Object.defineProperty,
      s = e => n.call(e).split(" ")[1].split("]")[0],
      l = ["constructor", "__proto__", "__defineGetter__", "__defineSetter__"],
      c = "undefined" != typeof WeakMap ? new WeakMap : {},
      A = "undefined" != typeof WeakMap ? new WeakMap : {},
      u = function (e, t = !1) {
        const n = s(e);
        return "String" === n || "Number" === n || "Boolean" === n ? e.valueOf() : "Object" === n ? new h(e) : "Array" === n ? function (e) {
          const t = [];
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            t.push(u(r))
          }
          return t
        }(e) : "Function" === n ? function (e, t = !1) {
          let n = A.get(e);
          return void 0 !== n || (n = function (...n) {
            for (let e = 0; e < n.length; e++) {
              const t = n[e];
              n[e] = u(t)
            }
            const r = t ? c.get(this) : void 0,
              i = e.call(r, ...n);
            return u(i)
          }, A.set(e, n)), n
        }(e, t) : "Undefined" !== n && "Null" === n ? null : void 0
      },
      f = function (e) {
        return function () {
          const t = c.get(this);
          if (void 0 === t) return;
          if (null === t) return null;
          const n = t[e];
          return u(n, !0)
        }
      },
      d = function (e) {
        return function (t) {
          const n = c.get(this);
          if (void 0 !== n) return null === n ? null : void(n[e] = u(t))
        }
      },
      p = e => {
        for (let t = 0; t < l.length; t++) {
          if (l[t] === e) return !0
        }
        return !1
      },
      g = function () {
        const e = (e => {
          const t = [];
          for (let n = e; n; n = r(n)) i(n).forEach((e => {
            const r = o(n, e);
            void 0 !== r && (r.name = e, t.push(r))
          }));
          return t
        })(c.get(this));
        for (let t = 0; t < e.length; t++) {
          const n = e[t],
            r = n.name;
          p(r) || (r in this || (delete n.value, delete n.writable, a(this, r, Object.assign(n, {
            get: f(r),
            set: d(r)
          }))))
        }
      };
    class h {
      constructor(e) {
        c.set(this, e), g.call(this)
      }
    }
    const _ = h,
      v = {},
      b = {},
      m = [];
    let w, y, C, x, E, B, S = 0;
    const I = [],
      k = (e, t, n) => {
        if (void 0 === t || void 0 === e || e !== w) return;
        const r = void 0 !== n ? n : ++S;
        return b[r] = t, m.push(r), I.forEach((e => {
          "function" == typeof e && e(r)
        })), r
      },
      T = (e, t, n, r) => {
        if (void 0 === e || e !== w) return;
        const i = (e => {
          const t = m.length;
          for (let n = 0; n < t; n++) {
            const t = m[n];
            if (b[t] === e) return t
          }
        })(t);
        if (void 0 === i) return;
        const o = v[n];
        "function" == typeof o && o(r, i)
      },
      D = {},
      L = (e, t, n, r = !1) => {
        if (void 0 === e || e !== w) return;
        r || (t = t.valueOf(), n = new _(n));
        const i = D[t];
        return "function" == typeof i ? i(n) : void 0
      },
      Q = {
        __init__: e => {
          void 0 === w && void 0 !== e && (w = e, w.register = k, w.subscribeHandler = T, w.syncMethodHandler = L, y = w.alloc, C = w.create, x = w.destroy, E = w.evaluateScriptFile, B = w.loadJsFiles, delete w.alloc, delete w.create, delete w.destroy, delete w.evaluateScriptFile, delete w.loadJsFiles)
        },
        publish: (e, t = {}, n) => {
          const r = s(t);
          if ("Object" !== r && "Undefined" !== r) throw new Error("params should be an object.");
          n.forEach((n => {
            const r = b[n];
            r && r.subscribeHandler(w, e, t)
          }))
        },
        subscribe: (e, t) => {
          v[e] = t
        },
        onRegister: e => {
          I.push(e)
        },
        evaluateScriptFile: (e, t, n) => E(e, t, n),
        batchLoadJsFiles: (e, t) => {
          if (void 0 === B || "function" != typeof B) return "failed: loadJsFiles not supported";
          try {
            return B(e, JSON.stringify(t)), "success"
          } catch (e) {
            return "failed: " + e
          }
        },
        alloc: (e, t) => "function" == typeof y ? y.call(w, e, t) : -9999,
        create: (e, t) => "function" == typeof C ? C.call(w, e, t) : -9999,
        destroy: (e, t) => "function" == typeof x ? x(e, t) : -9999,
        isAsync: () => w && !0 === w.async,
        supportAlloc: () => "function" == typeof y,
        registerSyncMethod: (e, t) => {
          D[e] = t
        }
      },
      M = {};
    let W;
    const O = {
      subscribeHandler: (e, t, n = {}) => {
        if (void 0 === e || e !== W) return;
        t = t.valueOf();
        const r = M[t];
        "function" == typeof r && r(n)
      }
    };
    const N = {
        __init__: (e, t) => {
          void 0 === W && void 0 !== e && (W = e, W.register(e, O, t))
        },
        publish: (e, t = {}) => {
          const n = s(t);
          if ("Object" !== n && "Undefined" !== n) throw new Error("params should be an object.");
          const r = e.valueOf(),
            i = t || {};
          W && "function" == typeof W.subscribeHandler && W.subscribeHandler(W, O, r, i)
        },
        subscribe: (e, t) => {
          M[e] = t
        },
        invokeMainContextMethodSync: (e, t = {}, n = !1) => {
          const r = s(t);
          if ("Object" !== r && "Undefined" !== r) throw new Error("params should be an object.");
          const i = e.valueOf();
          let o;
          return o = n ? t || {} : void 0 === t ? {} : t, W.syncMethodHandler(W, i, o, n)
        }
      },
      F = {
        alloc: () => -9999,
        create: () => -9999,
        destroy: () => -9999,
        publish: () => {},
        subscribe: () => {},
        supportAlloc: () => {}
      };
    let R;
    if (void 0 === e.g) throw new Error("js-context: global is undefined");
    if (void 0 !== e.g.WeixinJSContext) {
      R = Object.getPrototypeOf(e.g.WeixinJSContext) === Object.prototype ? Q : N, R.__init__(WeixinJSContext, e.g.WeixinJSContextId)
    } else R = F;
    delete R.__init__, delete e.g.WeixinJSContext, delete e.g.WeixinJSContextId;
    const P = R;
    JSContext = t.default
  })(), (() => {
    const e = ["shouldShowSplashAd", "onSplashAdShow", "onSplashAdHide", "onSplashAdClose", "onSplashAdWillLayout", "onSplashAdButtonClicked", "showSplashAd", "closeSplashAd", "showSplashAdMenu", "insertTextView", "updateTextView", "removeTextView", "insertImageView", "updateImageView", "removeImageView", "animateCoverView", "onTextViewClick", "onImageViewClick", "insertVideoPlayer", "removeVideoPlayer", "updateVideoPlayer", "operateVideoPlayer", "onVideoProgress", "onVideoTimeUpdate", "onVideoWaiting", "splashAdFirstStepViewLayoutStateChange", "splashAdAllViewLayoutStateChange", "getInstallState", "getDeviceInfo", "getOAID", "private_addContact", "launchApplication", "navigateToMiniProgram", "openADCanvas", "private_openUrl", "adOperateWXData", "operateWXData", "reportIDKey", "reportKeyValue", "adDataReport", "getSystemInfo", "accessSync", "getPermissionBytes", "readFileSync", "statSync", "reportRealtimeAction", "measureText", "openChannelsActivity", "openChannelsLive", "openChannelsUserProfile", "openChannelsRewardedVideoAd"];
    try {
      WeixinWorker.createWXLibWorker("WASplashadWorker.js", {
        APIList: e,
        type: "ad"
      })
    } catch (e) {}
  })(), (() => {
    "use strict";
    var e = {
      d: (t, n) => {
        for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {
          enumerable: !0,
          get: n[r]
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

    function n(e) {
      void 0 !== WeixinJSBridge ? e() : "undefined" != typeof document && document.addEventListener("WeixinJSBridgeReady", e, !1)
    }

    function r() {
      n((() => {
        WeixinJSBridge.publish(...arguments)
      }))
    }

    function i() {
      n((() => {
        WeixinJSBridge.subscribe(...arguments)
      }))
    }
    e.d(t, {
      default: () => I
    });
    const o = __wxConfig,
      a = (o.platform, "devtools" === o.platform),
      s = (o.platform, "ios" === o.platform);
    o.platform, o.platform, o.platform;

    function l() {
      if (o && "debug" in o && void 0 !== o.debug) return !!o.debug
    }
    const c = o.host || {},
      A = (c.env, c.env, c.env, c.forceUseNativeMap, "object" == typeof window && window && window.__wkrenderer_h5, Object.prototype.toString);

    function u(e) {
      return A.call(e).slice(8, -1)
    }
    const f = e => "Number" === u(e),
      d = e => null === e,
      p = Number.isNaN || (e => e != e),
      g = (Number.isFinite, Array.isArray || (e => "Array" === u(e))),
      h = e => ArrayBuffer.isView(e) && !(e => "DataView" === u(e))(e);

    function _(e) {
      const t = u(e);
      if ("Number" === t) {
        if (p(e)) return "NaN";
        if (f(n = e) && Math.abs(n) === 1 / 0) return "Infinity"
      } else if ("Object" === t) {
        if (d(e)) return "Null"
      } else if (t.endsWith("Array") && "Array" !== t && h(e)) return "TypedArray";
      var n;
      return t
    }
    const v = {
      String: 0,
      NaN: "<NaN>",
      Infinity: e => e > 0 ? "<Infinity>" : "<-Infinity>",
      Number: 0,
      Boolean: 0,
      Null: 0,
      Undefined: "<Undefined>",
      Function: e => "" === e.name ? "<Function>" : `<Function: ${e.name}>`,
      Date: e => `<Date: ${e.toJSON()}>`,
      RegExp: e => `<RegExp: ${e.toString()}>`,
      Error: e => `<${e.name}: ${e.message}>`,
      Symbol: e => `<Symbol: ${e.toString()}>`,
      Promise: "<Promise>",
      Map: e => `<Map: size=${e.size}>`,
      WeakMap: "<WeakMap>",
      Set: e => `<Set: size=${e.size}>`,
      WeakSet: "<WeakSet>",
      ArrayBuffer: e => `<ArrayBuffer: byteLength=${e.byteLength}>`,
      DataView: e => `<DataView: byteLength=${e.byteLength}, byteOffset=${e.byteOffset}>`,
      TypedArray: e => `<${e.constructor&&e.constructor.name?e.constructor.name:"TypedArray"}: byteLength=${e.byteLength}, length=${e.length}>`
    };

    function b(e) {
      const t = new WeakMap;
      let n = 0;
      return function e(r, i) {
        let o;
        const [a, s] = function (e) {
          const t = _(e);
          return t in v ? v[t] ? "function" != typeof v[t] ? [v[t], !0] : [v[t](e), !0] : [e, !0] : [null, !1]
        }(r);
        return s ? a : n > 3e3 ? "<Hidden>" : t.has(r) ? `<Circular: ${t.get(r)}>` : (t.set(r, i), n++, g(r) ? r.map(((t, n) => e(t, `${i}[${n}]`))) : (o = {}, Object.keys(r).forEach((t => {
          o[t] = e(r[t], `${i}.${t}`)
        })), o))
      }(e, "@")
    }

    function m(e) {
      try {
        return (e = Array.prototype.slice.call(e)).map(b)
      } catch (e) {
        return void console.warn("[console] This object can not be logged")
      }
    }
    const w = ["log", "warn", "error", "info", "debug"];
    let y, C, x;

    function E(e, t, n) {
      y = e, C = t, x = n
    }
    class B {
      constructor() {
        Object.keys(x).forEach((e => {
          "function" == typeof x[e] && (this[e] = function () {
            const t = x[e] || (() => {});
            t.apply(x, arguments)
          })
        })), w.forEach((e => {
          const t = x[e];
          this[e] = function () {
            const n = l();
            if (!1 === n) {
              if ("warn" !== e && "error" !== e && !a) return;
              return void t.apply(x, arguments)
            }
            const i = m(arguments);
            i && (C && C.length > 1024 && C.shift(), C && C.push({
              method: e,
              log: i
            }), n && y && y.length > 0 && r(e, {
              log: i
            }, y), t.apply(x, i))
          }
        })), this.group = function () {
          const e = x.group || (() => {});
          e.apply(x, arguments)
        }, this.groupEnd = function () {
          const e = x.groupEnd || (() => {});
          e.apply(x, arguments)
        }
      }
    }
    const S = !s && !!e.g.__isAppServiceRemoteDebugMode__;
    if (a || S) {
      if (a || S) {
        E([], [], console)
      }
    } else {
      const e = [],
        t = [];
      E(t, e, console), i("GenerateFuncReady", ((n, i) => {
        t.push(i), l() && r("initLogs", {
          logs: e
        }, [i])
      })), i("webviewClearLog", ((n, i) => {
        const o = t.filter((e => e !== i));
        r("serviceClearLog", {
          triggerWebViewId: i
        }, o), e.length = 0
      })), o.onReady((() => {
        l() && t.length > 0 && r("initLogs", {
          logs: e
        }, t)
      })), console = new B
    }
    const I = {
      BaseConsole: B
    };
    __appServiceConsole__ = t.default
  })(), (() => {
    var e = {
        184: (e, t, n) => {
          "use strict";
          n.r(t), n.d(t, {
            reportDeprecatedAPI: () => r
          });
          const r = e => {
            Reporter.reportKeyValue({
              key: "DeprecatedAPI",
              value: e
            })
          }
        },
        665: (e, t, n) => {
          "use strict";
          n.d(t, {
            Z: () => r
          });
          const r = __wxConfig
        },
        582: (e, t, n) => {
          "use strict";
          n.r(t), n.d(t, {
            PLATFORM: () => i,
            IS_DEVTOOLS: () => o,
            IS_ANDROID: () => a,
            IS_IOS: () => s,
            IS_WINDOWS: () => l,
            IS_MAC: () => c,
            IS_MINA: () => A,
            IS_PC: () => u,
            debugEnabled: () => f,
            HOST: () => d,
            IS_HOST_SDK: () => p,
            IS_HOST_WMPF: () => g,
            IS_HOST_WECHAT: () => h,
            IS_USE_NATIVE_MAP: () => _,
            WK_RENDERER_H5: () => v
          });
          var r = n(665);
          const i = r.Z.platform,
            o = "devtools" === r.Z.platform,
            a = "android" === r.Z.platform,
            s = "ios" === r.Z.platform,
            l = "windows" === r.Z.platform,
            c = "mac" === r.Z.platform,
            A = "mina" === r.Z.platform,
            u = l || c;

          function f() {
            if (r.Z && "debug" in r.Z && void 0 !== r.Z.debug) return !!r.Z.debug
          }
          const d = r.Z.host || {},
            p = "SDK" === d.env,
            g = "WMPF" === d.env,
            h = "WeChat" === d.env,
            _ = d.forceUseNativeMap || !1,
            v = "object" == typeof window && window && window.__wkrenderer_h5
        },
        538: (e, t, n) => {
          const {
            reportDeprecatedAPI: r
          } = n(184), {
            IS_IOS: i
          } = n(582);
          e.exports = {
            hijack: function (e = !0, t = !0) {
              if (void 0 !== n.g.Function) {
                const e = {};

                function r() {
                  if (arguments.length > 0 && "return this" === arguments[arguments.length - 1]) return function () {
                    return t ? e : {}
                  }
                }
                r.prototype = n.g.Function.prototype, n.g.Function.prototype.constructor = r, n.g.Function = r
              }
              const o = globalThis;
              if ("undefined" != typeof eval && (i && n.g.__isAppServiceRemoteDebugMode__ || (eval = void 0)), "undefined" != typeof setTimeout && e) {
                const e = setTimeout;
                setTimeout = function (t, n = 0) {
                  if ("function" != typeof t) throw new TypeError(`setTimeout expects a function as first argument but got ${typeof t}.`);
                  const r = __errorTracer__.surroundThirdByTryCatch(t, "at setTimeout callback function"),
                    i = [].slice.call(arguments, 2);
                  return e((function () {
                    r.apply(o, i)
                  }), n)
                };
                const t = setInterval;
                setInterval = function (e, n) {
                  if ("function" != typeof e) throw new TypeError(`setInterval expects a function as first argument but got ${typeof e}.`);
                  const r = __errorTracer__.surroundThirdByTryCatch(e, "at setInterval callback function"),
                    i = [].slice.call(arguments, 2);
                  return t((function () {
                    r.apply(o, i)
                  }), n)
                }
              }
            },
            hijackWasm: function () {
              if ("undefined" != typeof WebAssembly) {
                ["compile", "compileStreaming", "instantiate", "instantiateStreaming", "validate", "Module"].forEach((e => {
                  if (void 0 === WebAssembly[e]) return;
                  const t = WebAssembly[e];
                  Object.defineProperty(WebAssembly, e, {
                    get: () => (r("globalWa"), t),
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

    function n(r) {
      var i = t[r];
      if (void 0 !== i) return i.exports;
      var o = t[r] = {
        exports: {}
      };
      return e[r](o, o.exports, n), o.exports
    }
    n.d = (e, t) => {
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
    }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    };
    var r = {};
    (() => {
      "use strict";
      n.r(r), n.d(r, {
        doNotWriteGlobalObjs: () => c,
        doNotWriteObj: () => A,
        globalEsObjs: () => t,
        hijack: () => u.hijack,
        hijackWasm: () => u.hijackWasm,
        overwriteSetPrototypeOf: () => l
      });
      n(585);
      var e = n(665);
      const t = ["Array", "ArrayBuffer", "AsyncFunction", "Atomics", "Boolean", "DataView", "Date", "EvalError", "Float32Array", "Float64Array", "Function", "Generator", "GeneratorFunction", "Infinity", "Int16Array", "Int32Array", "Int8Array", "InternalError", "Intl", "Intl.Collator", "Intl.DateTimeFormat", "Intl.NumberFormat", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object", "Promise", "Proxy", "RangeError", "ReferenceError", "Reflect", "RegExp", "Set", "SharedArrayBuffer", "String", "Symbol", "SyntaxError", "TypeError", "TypedArray", "URIError", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray", "WeakMap", "WeakSet", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "eval", "isFinite", "isNaN", "null", "parseFloat", "parseInt", "undefined", "unescape", "uneval"];
      "NodeJS" !== e.Z.JSEngineName && t.push("Error");
      const i = globalThis,
        o = n.g.Object.setPrototypeOf,
        a = (e, t, n, r) => {
          if (!e || !t || -1 !== t.indexOf("constructor")) return;
          let i;
          try {
            i = e[t]
          } catch (e) {
            return
          }
          if (!i) return;
          let s = Object.getOwnPropertyDescriptor(e, t);
          if (!r && !s && "__proto__" !== t) return;
          s = s || {
            enumerable: !!r,
            configurable: !0
          };
          const l = typeof i;
          if (i && ("function" === l || "object" === l) && (s.configurable && Object.defineProperty(e, t, {
              get: () => i,
              set(s) {
                if ("object" == typeof this || "function" == typeof this) {
                  if (this !== e) return a(this, t, n, !0), void(this[t] = s);
                  if (i !== s)
                    if (r) try {
                      i = s, "__proto__" === t && o(this, s)
                    } catch (e) {} else console.error(`[non-writable] modification of global variable '${n}' is not allowed when using plugins at app.json.`), "object" == typeof Reporter && (Reporter.reportKeyValue({
                      key: "GlobalReadOnly",
                      value: n
                    }), Reporter.reportIDKey({
                      key: "global_objs_readonly"
                    }))
                }
              },
              enumerable: s.enumerable,
              configurable: !!r && s.configurable
            }), !r && "__proto__" !== t)) {
            const e = Object.getOwnPropertyNames(i);
            "object" == typeof i && a(i, "__proto__", `${n}.__proto__`, !1);
            for (let t = 0; t < e.length; ++t) {
              const r = e[t];
              a(i, r, `${n}.${r}`, !1)
            }
          }
        },
        s = t.concat(["getApp", "getCurrentPages", "define", "require", "Reporter", "Protect", "requirePlugin", "definePlugin"]),
        l = function () {
          Object.defineProperty(i.Object, "setPrototypeOf", {
            value: (e, t) => (e.__proto__ = t, e),
            configurable: !0
          })
        },
        c = function () {
          try {
            new Date;
            for (let e = 0; e < s.length; ++e) {
              const t = s[e];
              if (i[t]) {
                new Date;
                a(i, t, t, !1), new Date
              }
            }
            new Date
          } catch (e) {}
        },
        A = (e, t, n) => a(e, t, n, !1);
      var u = n(538)
    })(), Protect = r
  })(), (() => {
    "use strict";
    var e = {
        d: (t, n) => {
          for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: n[r]
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
      callSystemFunction: () => l,
      wrapSystemFunction: () => c,
      callMiniProgramOrPluginFunction: () => A,
      callThirdPartyFunction: () => u,
      wrapMiniProgramOrPluginFunction: () => f,
      wrapThirdPartyFunction: () => d,
      surroundThirdByTryCatch: () => p
    });
    const n = /[ (@]*https?:\/\/([^/]*)\/+(.*?):(\d+):(\d+)/,
      r = [];

    function i(e) {
      if (!e || e.__wxOriginalStack__) return !1;
      const t = e.stack;
      if (void 0 === t) return !1;
      let n = t,
        i = r.length - 1,
        a = 0;
      for (; a >= 0 && i >= 0;) {
        let e = n.length,
          t = 0;
        for (const r in o) {
          if (!o[r]) continue;
          const i = n.indexOf(o[r], a);
          i < 0 || e <= i || (e = i, t = o[r].length)
        }
        if (e >= n.length) break;
        const s = `at <${r[i--].description}>`;
        n = n.slice(0, e) + s + n.slice(e + t), a = e + s.length
      }
      return Object.defineProperties(e, {
        __wxOriginalStack__: {
          value: t,
          writable: !0,
          configurable: !0
        },
        stack: {
          value: n,
          writable: !0,
          enumerable: !0,
          configurable: !0
        }
      }), !0
    }
    const o = {
      wrapSystemFunction: null,
      wrapMiniProgramOrPluginFunction: null
    };

    function a(e) {
      const t = ((new Error).stack || "").match(/.+/gm);
      let r = "",
        i = 0;
      t && t.forEach((e => {
        if (n.test(e) && (i += 1, 2 === i)) {
          const t = e.match(/^(\s*)at /),
            n = t ? t[1].length : 0;
          return r = e.slice(n), !1
        }
        return !0
      })), o[e] = r
    }

    function s() {
      let e = "";
      for (let t = r.length - 1; t >= 0; t--) r[t].pluginAppId && (e = r[t].pluginAppId);
      return e
    }

    function l(e, t, n, l, A, u = !1) {
      let f;
      null === o.wrapSystemFunction && (o.wrapSystemFunction = "", c("", "", a)("wrapSystemFunction")), r.push({
        description: t
      });
      try {
        f = n.apply(l, A)
      } catch (t) {
        if (i(t)) {
          if ("AppServiceSdkKnownError" === t.type) throw r.pop(), t;
          if ("ThirdScriptError" === t.type) {
            const e = s();
            Reporter.thirdErrorReport({
              error: t,
              source: e,
              triggerErrorCallback: !u
            })
          } else Reporter.errorReport({
            key: e,
            error: t,
            triggerErrorCallback: !u
          })
        }
        if (u) throw r.pop(), t
      }
      return r.pop(), f
    }

    function c(e, t, n, r = !1) {
      return function (...i) {
        return l(e, t, n, this, i, r)
      }
    }

    function A(e, t, n, s, l, c = !1) {
      let A;
      null === o.wrapMiniProgramOrPluginFunction && (o.wrapMiniProgramOrPluginFunction = "", f("", "", a)("wrapMiniProgramOrPluginFunction")), r.push({
        description: t,
        pluginAppId: e
      });
      try {
        A = n.apply(s, l)
      } catch (t) {
        if (i(t) && Reporter.thirdErrorReport({
            error: t,
            source: e || "",
            triggerErrorCallback: !c
          }), c) throw r.pop(), t
      }
      return r.pop(), A
    }

    function u(e, t, n, r, i = !1) {
      return A(s(), e, t, n, r, i)
    }

    function f(e, t, n, r = !1) {
      return function (...i) {
        return A(e, t, n, this, i, r)
      }
    }

    function d(e, t, n = !1) {
      return function (...r) {
        return A(s(), e, t, this, r, n)
      }
    }

    function p(e, t) {
      const n = (t || "").match(/^\s*(?:at )?([\s\S]*)$/),
        r = n ? n[1] : "",
        i = e || function () {};
      return function (...e) {
        return A(s(), r, i, i, e, !1)
      }
    }
    __errorTracer__ = t
  })(), (() => {
    "use strict";
    var e = {
      d: (t, n) => {
        for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {
          enumerable: !0,
          get: n[r]
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
      const n = {
          APP: 0,
          WIDGET: 1,
          GAME: 2,
          GAME_SUBCONTEXT: 3
        },
        r = {
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
        i = {
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
        o = {
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
        l = {
          [n.APP]: "thirdScriptError",
          [n.WIDGET]: "widgetThirdScriptError",
          [n.GAME]: "gameThirdScriptError",
          [n.GAME_SUBCONTEXT]: "gameSubContextThirdScriptError"
        },
        c = __wxConfig,
        A = (c.platform, "devtools" === c.platform),
        u = (c.platform, "ios" === c.platform);
      c.platform, c.platform, c.platform;
      const f = c.host || {},
        d = (f.env, f.env, f.env, f.forceUseNativeMap, "object" == typeof window && window && window.__wkrenderer_h5, Object.prototype.toString);

      function p(e) {
        return d.call(e).slice(8, -1)
      }
      const g = e => "Number" === p(e);
      Number.isNaN, Number.isFinite, Array.isArray;
      let h = [],
        _ = [],
        v = [],
        b = 0,
        m = 0,
        w = 0,
        y = 0,
        C = 0;
      const x = {},
        E = {},
        B = {};

      function S(e) {
        void 0 !== WeixinJSBridge ? e() : "undefined" != typeof document && document.addEventListener("WeixinJSBridgeReady", e, !1)
      }

      function I(...e) {
        S((() => {
          WeixinJSBridge.invoke(...e)
        }))
      }

      function k() {
        !h || h.length <= 0 || (I("reportKeyValue", {
          dataArray: h.slice(0, 500)
        }), h = h.slice(500))
      }

      function T() {
        !_ || _.length <= 0 || (I("reportIDKey", {
          dataArray: _.slice(0, 500)
        }), _ = _.slice(500))
      }

      function D() {
        !v || v.length <= 0 || (I("systemLog", {
          dataArray: v
        }), v = [])
      }
      let L = () => {},
        Q = () => {},
        M = () => {},
        W = () => {},
        O = "",
        N = {},
        F = -1,
        R = 0,
        P = n.APP,
        G = "";
      "function" == typeof c.onReady && c.onReady((() => {
        void 0 !== c.appType && (F = c.appType), "object" == typeof c.appLaunchInfo && (R = c.appLaunchInfo.scene), setTimeout((() => {
          WeixinJSBridge.invoke("getNetworkType", {}, (e => {
            e && e.networkType && (G = e.networkType)
          }))
        }), 0), "function" == typeof WeixinJSBridge.addEventListener && WeixinJSBridge.addEventListener("onNetworkStatusChange", (e => {
          G = e.networkType
        }))
      }));
      const j = {
          surroundThirdByTryCatch: __errorTracer__.surroundThirdByTryCatch,
          slowReport: ({
            key: e,
            cost: t,
            extend: n,
            force: r
          }) => {
            const i = a[e],
              o = Date.now();
            if (!i) return;
            if (!r && o - C < 500) return;
            if (Object.keys(B).length > 50) return;
            if (B[n] || (B[n] = 0), B[n]++, B[n] > 3) return;
            C = o;
            const s = `${t},${encodeURIComponent(n)},${i},${j.getAppType()}`;
            j.reportKeyValue({
              key: "Slow",
              value: s
            })
          },
          speedReport: ({
            key: e,
            data: t,
            timeMark: n,
            force: r
          }) => {
            const i = o[e],
              a = Date.now();
            let s = 0;
            const l = n.nativeTime;
            if (!i) return;
            if (!r && a - (x[i] || 0) < 500) return;
            if (!n.startTime || !n.endTime) return;
            if ((1 === i || 2 === i) && !l) return;
            t && (s = JSON.stringify(t).length), x[i] = a;
            const c = `${i},${n.startTime},${l},${l},${n.endTime},${s},${j.getAppType()}`;
            j.reportKeyValue({
              key: "Speed",
              value: c
            })
          },
          reportQualityData(e, t, n, r = []) {
            I("reportKeyValue", {
              version: 2,
              dataArray: [{
                key: i[e],
                value: [n - t, R, t, n, ...r].join(",")
              }]
            })
          },
          reportKeyValue: ({
            key: e,
            value: t,
            immediately: n = !1,
            number: r = !1
          }) => {
            if (r || i[e]) {
              for (n ? h.unshift({
                  key: r ? e : i[e],
                  value: t
                }) : h.push({
                  key: r ? e : i[e],
                  value: t
                }); h.length > 5e3;) h.pop();
              (Date.now() - b > 5e3 || n) && (b = Date.now(), k())
            }
          },
          reportIDKey: ({
            id: e,
            key: t,
            value: n = 1
          }) => {
            if (r[t]) {
              for (_.push({
                  id: e || (u ? "356" : "358"),
                  key: r[t],
                  value: n
                }); _.length > 5e3;) _.pop();
              Date.now() - m > 5e3 && (m = Date.now(), T())
            }
          },
          reportIDKeyDirectly: ({
            id: e,
            key: t,
            immediately: n = !1
          }) => {
            if (t && "356" !== e && "358" !== e) {
              for (_.push({
                  id: e,
                  key: t,
                  value: 1
                }); _.length > 5e3;) _.pop();
              (Date.now() - m > 5e3 || n) && (m = Date.now(), T())
            }
          },
          thirdErrorReport: ({
            key: e = P,
            error: t,
            triggerErrorCallback: n = !0,
            isUnhandledRejection: r = !1,
            promise: i,
            source: o = ""
          }) => {
            j.errorReport({
              key: l[e],
              error: t,
              triggerErrorCallback: n,
              isThirdScriptError: !0,
              isUnhandledRejection: r,
              promise: i,
              source: o
            })
          },
          errorReport: ({
            key: e,
            error: t,
            isThirdScriptError: r = !1,
            triggerErrorCallback: i = !0,
            isUnhandledRejection: o = !1,
            promise: a,
            source: l = ""
          }) => {
            if (!s[e]) return;
            if (null == t) return;
            let u, f;
            "function" == typeof __wxSourceMapRetrace__ && (t = __wxSourceMapRetrace__(t)), "object" == typeof t && (t.message || t.stack) ? (u = t.message, f = t.stack) : (u = function (e) {
              try {
                return JSON.stringify(e)
              } catch (e) {
                return e.message, ""
              }
            }(t), f = p(t));
            const d = r ? "MiniProgramError" : `SystemError (${e})`,
              g = u;
            let h = "";
            t.name && 0 !== f.indexOf(t.name) && (h = "\n" + t.name + ": " + g);
            const _ = `${d}\n${g}${h}\n${f}`;
            if (A) {
              const e = new Error(`${d}\n${g}`);
              "object" == typeof t && void 0 !== t.name && Object.defineProperty(e, "name", {
                value: t.name
              }), "object" == typeof t && void 0 !== t.stack && Object.defineProperty(e, "stack", {
                value: t.stack
              }), console.error(e)
            } else o ? console.error("(in promise) " + _) : console.error(_);
            if (_.indexOf("subContext.js") >= 0) return;
            if ("undefined" != typeof window && void 0 !== window.__webviewId__ ? function (...e) {
                S((() => {
                  WeixinJSBridge.publish(...e)
                }))
              }("WEBVIEW_ERROR_MSG", {
                data: {
                  msg: _
                },
                options: {
                  timestamp: Date.now()
                }
              }) : i && (j.triggerErrorMessage(_, o, t, a), r && j.triggerThirdErrorMessage(_, o, t, a)), Object.keys(E).length > 50) return;
            if (o && "Error" !== p(t)) return;
            let v = "",
              b = "";
            P !== n.APP && P !== n.GAME || (v = O, b = function (e) {
              let t = "";
              return Object.keys(e).forEach(((n, r) => {
                0 !== r && (t += "&");
                try {
                  t += `${encodeURIComponent(n)}=${encodeURIComponent(e[n])}`
                } catch (e) {}
              })), t
            }(N));
            const m = l.match(/wx[0-9a-f]{16}/) ? function (e) {
              const t = c && c.appContactInfo && c.appContactInfo.call_plugin_info;
              if (!t || !Array.isArray(t)) return 0;
              const n = t.find((t => t.plugin_id === e));
              return n && void 0 !== n.inner_version ? n.inner_version : 0
            }(l) : 0;
            if (4 === c.appType) try {
              G = __appServiceSDK__.getGameRelatedContextsExports().game._getCurrentNetworkType()
            } catch (e) {}
            const w = [s[e], t.name, ...[g, f, "undefined" != typeof __libVersionInfo__ && __libVersionInfo__.version || "", j.getAppType(), v, b, "undefined" != typeof __libVersionInfo__ && __libVersionInfo__.updateTime || "", "", o ? 1 : 0, l, m, G].map((e => {
              let t;
              try {
                t = encodeURIComponent(e)
              } catch (n) {
                t = e
              }
              return t
            }))].join(",");
            E[w] || (E[w] = 0), E[w]++, r && E[w] > 3 || E[w] > 3 || (j.reportIDKey({
              key: e
            }), j.reportKeyValue({
              key: "Error",
              value: w
            }), T(), k(), D())
          },
          log: (e, t) => {
            e && "string" == typeof e && (!t && Date.now() - w < 50 || (w = Date.now(), v.push(e + ""), v.length >= 50 && D()))
          },
          submit: () => {
            Date.now() - y < 50 || (y = Date.now(), T(), k(), D())
          },
          registerErrorListener: e => {
            "function" == typeof e && (L = e)
          },
          registerThirdErrorListener: e => {
            "function" == typeof e && (Q = e)
          },
          registerUnhandledRejectionListener: e => {
            "function" == typeof e && (M = e)
          },
          registerThirdUnhandledRejectionListener: e => {
            "function" == typeof e && (W = e)
          },
          triggerErrorMessage: (e, t = !1, n, r) => {
            setTimeout((() => {
              try {
                t ? M(n, r) : L(e)
              } catch (e) {
                console.error(e.message, "at onError callback function")
              }
            }), 0)
          },
          triggerThirdErrorMessage: (e, t = !1, n, r) => {
            setTimeout((() => {
              try {
                t ? W(n, r) : Q(e)
              } catch (e) {
                console.error(e.message, "at onError callback function")
              }
            }), 0)
          },
          setAsWidget: () => {
            P = n.WIDGET
          },
          setAsGame: () => {
            P = n.GAME
          },
          setAsGameSubContext: () => {
            P = n.GAME_SUBCONTEXT
          },
          getAppType: () => -1 === F ? 0 : F + 1e3
        },
        V = {};

      function U(e) {
        Object.defineProperty(V, e, {
          get() {
            return t = j[e],
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
      Object.keys(j).forEach((e => {
        U(e)
      })), Object.defineProperty(V, "__route__", {
        set(e) {
          O = e
        }
      }), Object.defineProperty(V, "__method__", {
        set() {}
      }), Object.defineProperty(V, "__query__", {
        set(e) {
          N = e
        }
      }), V.RunType = n, "undefined" != typeof window && Object.defineProperty(window, "onbeforeunload", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value() {
          j.submit()
        }
      });
      const J = V
    })(), Reporter = t.default
  })(), (() => {
    var e = {
        146: (e, t, n) => {
          var r = n(61),
            i = n(76);

          function o(e) {
            e = (0, i.B)(e), (0, r.N0)() ? ("function" == typeof __wxSourceMapRetrace__ && (e = __wxSourceMapRetrace__(e)), console.error("Uncaught FrameworkError", "\n", e.message, "\n", e.stack)) : (0, r.sK)(e, "")
          }

          function a(e = {}) {
            (0, r.N0)() ? ("function" == typeof __wxSourceMapRetrace__ && (e = __wxSourceMapRetrace__(e)), console.error("Uncaught (in promise) FrameworkError", "\n", e.reason)) : (0, r.sK)(e.reason, "", e.promise || null)
          }
          void 0 !== WeixinJSBridge && (WeixinJSBridge.on("onError", o), WeixinJSBridge.on("unhandledRejection", a)), Foundation.on("error", o), Foundation.on("unhandledRejection", a)
        },
        676: (e, t, n) => {
          n.d(t, {
            OJ: () => o,
            yQ: () => r,
            YZ: () => i
          });

          function r() {
            if (n.g.PerfDog) return n.g.PerfDog
          }

          function i() {
            if (n.g.NativeGlobal && n.g.NativeGlobal.Profiler) return n.g.NativeGlobal.Profiler
          }
          const o = new class {
            constructor() {
              this.callbacks = new Map
            }
            sendPackage(e, t) {
              const n = this.callbacks.get(e);
              n && Array.isArray(n) && n.forEach((n => {
                n(e, t)
              }))
            }
            registerCallback(e, t) {
              if (this.callbacks.get(e)) {
                this.callbacks.get(e).push(t)
              } else {
                const n = [t];
                this.callbacks.set(e, n)
              }
            }
          };
          n.g.LanDebug = o
        },
        495: (e, t, n) => {
          var r = n(176);
          __wxConfig.onReady((() => {
            "undefined" != typeof __wxSourceMap && (__wxSourceMap.get = function (e) {
              if (__wxSourceMap[e]) return __wxSourceMap[e];
              const t = (0, r.M)();
              for (let n = 0; n < t.length; n++) {
                const r = t[n].contextGlobal.__wxSourceMap;
                if ("object" == typeof r && r[e]) {
                  let t;
                  try {
                    t = JSON.parse(JSON.stringify(r[e]))
                  } catch (e) {
                    console.error("[SourceMap] clone soucemap failed.")
                  }
                  return t
                }
              }
            })
          }))
        },
        647: (e, t, n) => {
          n.d(t, {
            Z: () => b
          });
          var r = n(356),
            i = n.n(r),
            o = n(61);
          const a = {},
            s = {},
            l = {},
            c = {},
            A = {},
            u = {},
            f = wxNativeConsole.createLogger("SubContext");
          let d, p = 0;
          JSContext.subscribe("subContextMessage", ((e, t) => {
            const n = l[t];
            n && n.__onMessageHandler(e)
          })), JSContext.subscribe("subContextReady", ((e, t) => {
            (0, o.G$)() || (0, o.oi)() ? l[t].__onReadyHandler(t, e): d && (d.__onReadyHandler(t, e), d = void 0)
          })), JSContext.subscribe("subContextLibVarReady", ((e, t) => {
            l[t].__onLibVarReadyHandler(e)
          }));
          const g = function (e) {
              const t = JSContext.create(e);
              return t <= 0 && setTimeout((() => {}), 0), a[this.__guid__] = t, t
            },
            h = function (e) {
              const t = (0, o.G$)() || JSContext.isAsync() ? JSContext.alloc(e) : JSContext.alloc();
              return t <= 0 && setTimeout((() => {}), 0), ((0, o.G$)() || (0, o.oi)()) && (l[t] = this), a[this.__guid__] = t, t
            },
            _ = function (e, t) {
              Object.defineProperty(this, e, {
                value: t,
                writable: !1,
                configurable: !1
              })
            },
            v = function () {
              if (void 0 !== s[this.__guid__]) {
                u[this.__guid__].forEach((e => {
                  this.postMessage(e)
                })), u[this.__guid__] = []
              }
            };
          const b = class {
            constructor({
              name: e,
              secure: t = !0,
              env: n = {},
              entry: r = [],
              injectAfterAlloc: i = !0
            }) {
              _.call(this, "__name__", e), _.call(this, "__guid__", p++), _.call(this, "__secure__", t), _.call(this, "__entry__", r), _.call(this, "__injectAfterAlloc__", i), this.contextGlobal = globalThis, this.alreadyLoadedJsFiles = new Set, this.setExportEnv(n), A[this.__guid__] = [], u[this.__guid__] = []
            }
            init() {
              var e = this;
              if (d = this, !JSContext.supportAlloc()) return g.call(this, this.__entry__);
              if (h.call(this, this.__name__), this.__injectAfterAlloc__) {
                if (((0, o.G$)() || JSContext.isAsync()) && (0, o.N0)()) return i()((function* () {
                  for (let t = 0, n = e.__entry__.length; t < n; t++) yield e.evaluateScriptFile(e.__entry__[t])
                }))();
                this.__entry__.forEach((e => this.evaluateScriptFile(e)))
              }
            }
            unShiftEntries(e) {
              f.log("unShiftEntries", e), this.__entry__.unshift(...e)
            }
            onMessage(e) {
              if (this.__onMsgCallback = e, "function" == typeof this.__onMsgCallback) {
                A[this.__guid__].forEach((e => {
                  this.__onMsgCallback(e)
                })), A[this.__guid__] = []
              }
            }
            postMessage(e) {
              const t = s[this.__guid__];
              if (void 0 !== t) JSContext.publish("mainContextMessage", e, [t]);
              else {
                u[this.__guid__].push(e)
              }
            }
            onInitReady(e) {
              this.__onInitReadyCallbacks = this.__onInitReadyCallbacks || [], this.__onInitReadyCallbacks.push(e)
            }
            setExportEnv(e) {
              e.contextName = this.__name__, e.contextSecure = this.__secure__, c[this.__guid__] = e
            }
            setEntry(e) {
              this.__entry__.splice(0, this.__entry__.length), this.__entry__.push(...e)
            }
            getEntry() {
              return this.__entry__
            }
            refreshExportEnv(e) {
              return new Promise((t => {
                if (!e) throw Error("refreshExportEnv: missing arguments.");
                this.setExportEnv(e);
                const n = c[this.__guid__],
                  r = s[this.__guid__];
                JSContext.publish("subContextEnvReady", n, [r], !0), JSContext.subscribe("subContextRefreshEnvReady", ((e, n) => {
                  r === n && t()
                }))
              }))
            }
            refreshWxConfig(e, t) {
              const n = s[this.__guid__];
              JSContext.publish("subContextRefreshWxConfig", {
                key: e,
                value: t
              }, [n])
            }
            dynamicExportGlobal(e = {
              name: "",
              value: "",
              needCondom: !0
            }, t) {
              const n = () => {
                const n = s[this.__guid__];
                JSContext.publish("exportGlobalRequire", e, [n]), t && t()
              };
              void 0 !== a[this.__guid__] ? n() : this.onInitReady(n)
            }
            evaluateScriptFile(e) {
              f.log(`evaluateScriptFile, scriptFilePath=${e}`), f.log("evaluateScriptFile, clientIds", a), f.log(`evaluateScriptFile, __guid__=${this.__guid__}`, typeof this.__guid__);
              const t = a[this.__guid__];
              if (f.log(`evaluateScriptFile, clientId=${t}, __guid__=${this.__guid__}, ${a[this.__guid__]}`, a), void 0 !== t) {
                if (((0, o.G$)() || JSContext.isAsync()) && (0, o.N0)()) return f.log("evaluateScriptFile, (isDevtools || JSContext.isAsync) && isIsolatedContext"), new Promise((n => {
                  const r = JSContext.evaluateScriptFile(t, e, (() => n(r)));
                  if (f.log(`JSContext.evaluateScriptFile ret=${r}`), 1 !== r) throw new Error(`SubContext evaluateScriptFile "${e}" failed: error code ${r}`)
                }));
                const n = JSContext.evaluateScriptFile(t, e);
                if (f.log(`JSContext.evaluateScriptFile ret=${n}`), 1 !== n) throw new Error(`SubContext evaluateScriptFile "${e}" failed: error code ${n}`);
                this.alreadyLoadedJsFiles.add(e)
              }
            }
            loadJsFiles(e) {
              e = e.map((e => "/" === e[0] ? e : "/" + e));
              const t = a && a[this.__guid__],
                n = e.filter((e => this.alreadyLoadedJsFiles.has(e)));
              if (n.length > 0 && wxNativeConsole.info("[SubContext] loadJsFiles ignored loaded: " + n.join(",")), 0 !== (e = e.filter((e => !this.alreadyLoadedJsFiles.has(e)))).length) {
                if (void 0 !== t && JSContext && JSContext.batchLoadJsFiles) try {
                  const n = Date.now();
                  wxNativeConsole.info("[SubContext] loadJsFiles: " + e.join(",")), JSContext.batchLoadJsFiles(t, e), wxNativeConsole.info("[SubContext] loadJsFiles done, cost " + (Date.now() - n)), e.forEach((e => this.alreadyLoadedJsFiles.add(e)))
                } catch (t) {
                  throw new Error(`SubContext loadJsFiles "${e}" failed: error ${t}`)
                }
              } else wxNativeConsole.info("[SubContext] loadJsFiles have no files to load, return")
            }
            destroy() {
              const e = a[this.__guid__],
                t = s[this.__guid__];
              e > 0 && (JSContext.publish("subContextDestroy", {}, [t]), JSContext.destroy(e)), delete l[t], delete a[this.__guid__], delete s[this.__guid__], delete c[this.__guid__], delete A[this.__guid__], delete u[this.__guid__], delete this.__guid__, delete this.contextGlobal
            }
            __onMessageHandler(e) {
              if ("function" == typeof this.__onMsgCallback) this.__onMsgCallback(e);
              else {
                A[this.__guid__].push(e)
              }
            }
            __onReadyHandler(e, t) {
              l[e] = this, s[this.__guid__] = e, this.contextGlobal = t.contextGlobal;
              const n = c[this.__guid__];
              n && JSContext.publish("subContextEnvReady", n, [e], !0), this.__onInitReadyCallbacks && (this.__onInitReadyCallbacks.forEach((e => {
                e(t)
              })), delete this.__onInitReadyCallbacks), delete this.__onReadyHandler, v.call(this)
            }
          }
        },
        176: (e, t, n) => {
          n.d(t, {
            z: () => i,
            M: () => o
          });
          const r = [],
            i = function (e) {
              r.push(e)
            },
            o = function () {
              return r
            }
        },
        61: (e, t, n) => {
          n.d(t, {
            xJ: () => o,
            N0: () => s,
            F: () => l,
            QT: () => c,
            sK: () => A,
            Hw: () => u,
            G$: () => f,
            gn: () => d,
            cF: () => p,
            NG: () => g,
            Qj: () => h,
            c6: () => _,
            oi: () => v
          });
          var r = n(356),
            i = n.n(r);
          const o = globalThis;

          function a(e) {
            e === o && f() || (Object.freeze(e), Object.getOwnPropertyNames(e).forEach((function (t) {
              let n;
              try {
                n = e[t]
              } catch (e) {}
              "object" != typeof n && "function" != typeof n || Object.isFrozen(n) || a(n)
            })))
          }
          const s = function () {
              return void 0 !== __wxConfig && __wxConfig.isIsolateContext
            },
            l = function () {
              const e = o;
              Protect.globalEsObjs.concat(["console"]).forEach((function (t) {
                e[t] && (a(e[t]), Object.defineProperty(e, t, {
                  value: e[t],
                  configurable: !1,
                  writable: !1
                }))
              }))
            },
            c = function () {
              var e = i()((function* (e, t) {
                Reporter.reportIDKey({
                  key: t
                });
                try {
                  yield e()
                } catch (e) {
                  Reporter.reportIDKey({
                    key: `${t}_fail`,
                    force: !0
                  });
                  const n = t.indexOf("initGame") >= 0 ? "gameSDKScriptError" : "appServiceSDKScriptError";
                  Reporter.errorReport({
                    key: n,
                    error: e,
                    extend: ""
                  })
                }
              }));
              return function (t, n) {
                return e.apply(this, arguments)
              }
            }(),
            A = function (e, t, n) {
              void 0 !== n ? Reporter.thirdErrorReport({
                error: e,
                isUnhandledRejection: !0,
                promise: n,
                extend: t
              }) : Reporter.thirdErrorReport({
                error: e,
                isUnhandledRejection: !1,
                extend: t
              })
            },
            u = function (e, t) {
              return function () {
                try {
                  return t.apply(t, arguments)
                } catch (t) {
                  Reporter.errorReport({
                    key: e,
                    error: t,
                    extend: ""
                  })
                }
              }
            },
            f = function () {
              return "devtools" === __wxConfig.platform
            },
            d = function () {
              return "ios" === __wxConfig.platform
            },
            p = e => {
              let t;
              if (WeixinJSBridge.invoke("accessSync", {
                  path: e
                }, (e => {
                  /:fail/.test(e.errMsg) && (t = e.errMsg)
                })), t) throw new Error(t)
            },
            g = e => {
              let t, n;
              if (WeixinJSBridge.invoke("readFileSync", {
                  filePath: e,
                  encoding: "utf-8"
                }, (e => {
                  /:fail/.test(e.errMsg) ? n = e.errMsg : t = e.data
                })), n) throw new Error(n);
              return t
            },
            h = (e = "", t = []) => {
              if (e && "string" == typeof e && !/^index/.test(e)) {
                const n = e.replace(/(^\/+)|(\/+$)/g, "").split("/"),
                  r = t.find((t => {
                    if (t.independent) {
                      const r = t.root || "",
                        i = t.alias || "",
                        o = r.replace(/(^\/+)|(\/+$)/g, "").split("/");
                      if (n.length >= o.length) {
                        const e = o.every(((e, t) => e === n[t]));
                        if (e) return e
                      }
                      if (i && 0 === e.indexOf(i)) return !0
                    }
                    return !1
                  }));
                if (r) return r
              }
              return !1
            },
            _ = e => {
              const t = [1001, 1011, 1007, 1008, 1074, 1088, 1044, 1010, 1096, 1014, 1043, 1107, 1155].indexOf(e) >= 0;
              return t
            },
            v = () => JSContext.isAsync()
        },
        290: (e, t, n) => {
          n.d(t, {
            E: () => C,
            F: () => x
          });
          var r = n(503),
            i = n.n(r),
            o = n(647),
            a = n(676),
            s = n(61),
            l = n(594);
          const c = "undefined" != typeof __AppServiceRemoteDebugger__,
            A = c ? __AppServiceRemoteDebugger__(__wxConfig.platform, l.M, l.O, s.NG, n.g.WeixinJSBridge) : null;
          let u = {};
          c && A && (u = (0, s.gn)() ? A.runtime.getSubContextGlobals() : {}, u.BaseConsole && A.runtime.setupConsole(console, u.BaseConsole));
          const f = "app-service.js",
            d = "appservice.app.js",
            p = "common.app.js",
            g = "appservice.js",
            h = new o.Z({
              name: "app",
              secure: !1,
              entry: [f],
              injectAfterAlloc: !1
            }),
            _ = new Set;
          __wxConfig.onReady((() => {
            "develop" !== __wxConfig.envVersion && "trial" !== __wxConfig.envVersion || (_.add("wx0354ba48aadc0ab2"), _.add("wxfa43a4a7041a84de"))
          }));
          const v = e => wxNativeConsole.info("[injectEntryFile] " + e),
            b = new Set,
            m = (e, t) => {
              if (b.has(e)) return;
              c && A && (0, s.gn)() && A.runtime.registerScript(e);
              let n = -1,
                r = -1;
              if (b.add(e), v(`isLazyLoad: ${__wxConfig.isLazyLoad}`), v(`moduleName: ${e}`), v(`separatedPlugins: ${JSON.stringify(t)}`), __wxConfig.isLazyLoad) {
                console.info("Lazy code loading is enabled. Only injecting required components.");
                const i = [];
                t.forEach((t => {
                  let n = (e + t.prefix_path + "/").replace(/\/\/$/, "/");
                  t.prefix_path || (n += `__extended__/${t.plugin_id}/`, _.add(t.plugin_id));
                  try {
                    v(`accessSync path: ${n+p}`), (0, s.cF)(n + p), i.push(n + p, n + d), t.prefix_path || ((e, t) => {
                      const n = (0, s.NG)(t);
                      if (!n) return;
                      let r;
                      try {
                        r = JSON.parse(n)
                      } catch (e) {
                        r = {}
                      }(__wxConfig.subPackages || []).forEach((t => {
                        "/" + t.root === e && t.useExtendedLib && r.allExtendedComponents && (t.allExtendedComponents = r.allExtendedComponents)
                      })), h.refreshWxConfig("subPackages", __wxConfig.subPackages)
                    })(e, n + "plugin.json")
                  } catch (e) {
                    i.push(n + g)
                  }
                })), i.push(e + p, e + d), v(`using separated plugins: ${JSON.stringify(i)}`), n = Date.now(), h.loadJsFiles(i), r = Date.now()
              } else {
                const i = t.map((t => {
                  let n = (e + t.prefix_path + "/").replace(/\/\/$/, "/");
                  return t.prefix_path || (n += `__extended__/${t.plugin_id}/`, _.add(t.plugin_id)), n + g
                }));
                i.push(e + f), v(`using separated plugins: ${JSON.stringify(i)}`), n = Date.now(), i.forEach((e => {
                  e = "/" === e[0] ? e : "/" + e, h.alreadyLoadedJsFiles.has(e) || (h.evaluateScriptFile(e), h.alreadyLoadedJsFiles.add(e))
                })), r = Date.now()
              }
              h.refreshWxConfig("extendedLibList", Array.from(_)), n > 0 && r > 0 && (v("time cost: " + (r - n)), w.send({
                type: "evaluateScript",
                moduleName: e,
                startTime: n,
                endTime: r
              }))
            },
            w = function () {
              let e;
              return {
                setReceiver(t) {
                  e = t
                },
                send(t) {
                  "function" == typeof e && e(t)
                }
              }
            }(),
            y = (0, s.Hw)("appServiceSDKScriptError", ((e, t) => {
              let n = t.moduleName;
              const r = "__APP__" === n,
                i = t.separatedPlugins || [];
              "string" != typeof n && console.error("SubContext onSubPackageReady error: moduleName is empty"), n.endsWith("/") || (n = `${n}/`), __wxConfig.onReady((() => {
                (0, s.gn)() && c ? (n = r ? "" : n, A.runtime.isInitialInject() ? (A.runtime.startBufferBridgeMessages(), A.runtime.runAfterAttached((() => {
                  m(n, i), A.runtime.dispatchBridgeMessages()
                }))) : m(n, i)) : m(r ? "" : n, i)
              }))
            })),
            C = function () {
              var e;
              let t = {};
              c && A && (t = i()({
                __isAppServiceRemoteDebugMode__: !0,
                __remoteDebug__: A.__remoteDebug__
              }, u));
              const r = new Safeway(h),
                o = (null === (e = __libVersionInfo__) || void 0 === e ? void 0 : e.version) || "9.9.9",
                s = i()(i()({
                  wxLibVersion: o,
                  __Function__: __Function__,
                  console: Object.assign({
                    group: () => {},
                    groupEnd: () => {}
                  }, console),
                  setTimeout: setTimeout,
                  clearTimeout: clearTimeout,
                  setInterval: setInterval,
                  clearInterval: clearInterval,
                  safeway: r,
                  __wxConfig: __wxConfig,
                  Reporter: Reporter,
                  BaseConsole: __appServiceConsole__.BaseConsole,
                  NativeGlobal: n.g.NativeGlobal,
                  WeixinCanvas: n.g.WeixinCanvas,
                  WeixinArrayBuffer: n.g.WeixinArrayBuffer,
                  wxNativeConsole: wxNativeConsole,
                  getWxSourceMap() {
                    if ("undefined" != typeof __wxSourceMap) return __wxSourceMap
                  },
                  Canvas: n.g.Canvas,
                  Image: n.g.Image,
                  ImageData: n.g.ImageData,
                  Path2D: n.g.Path2D,
                  SkiaCanvasExternalTexture: n.g.SkiaCanvasExternalTexture,
                  skiacanvasLoadNewFont: n.g.skiacanvasLoadNewFont,
                  SkiaCanvas: NativeGlobal.SkiaCanvas,
                  SkiaCanvasRequestAnimationFrame: NativeGlobal.SkiaCanvasRequestAnimationFrame,
                  SkiaCanvasCancelAnimationFrame: NativeGlobal.SkiaCanvasCancelAnimationFrame,
                  SkiaImageData: NativeGlobal.SkiaImageData,
                  HTMLCanvasView: NativeGlobal.HTMLCanvasView,
                  HTMLCanvasElement: NativeGlobal.HTMLCanvasElement,
                  SkiaImage: NativeGlobal.SkiaImages,
                  SkiaPath2D: NativeGlobal.SkiaPath2D,
                  SkiaCanvasLoadNewFont: NativeGlobal.SkiaCanvasLoadNewFont,
                  originConsole: console
                }, t), {}, {
                  performanceChannel: w,
                  debuggerMessager: l.O,
                  __sclEngine__: __sclEngine__,
                  LanDebug: a.OJ,
                  getPerfDog: a.yQ,
                  getProfiler: a.YZ
                });
              r.onSubpackageReady(y), h.setExportEnv(s), h.init()
            },
            x = function () {
              return h
            };
          JSContext && JSContext.registerSyncMethod && JSContext.registerSyncMethod("injectEntryFile", (e => {
            m(e.moduleName, e.separatedPlugins)
          }))
        },
        594: (e, t, n) => {
          n.d(t, {
            M: () => o,
            O: () => i
          });
          const r = [],
            i = "undefined" != typeof DebuggerConnection ? DebuggerConnection : {};
          i.registerCallback = e => {
            "function" == typeof e && r.push(e)
          }, i.onCustomMessage = (e, t) => {
            r.forEach((n => {
              try {
                n(e, t)
              } catch (e) {}
            }))
          };
          const o = "undefined" != typeof JSThread ? JSThread : null
        },
        309: (e, t, n) => {
          n.d(t, {
            M: () => A,
            e: () => u
          });
          var r = n(647),
            i = n(61),
            o = n(676),
            a = n(594);
          n.g.LanDebug = o.OJ, n.g.getPerfDog = o.yQ, n.g.__debuggerMessager__ = a.O;
          const s = new r.Z({
              name: "game",
              secure: !1,
              entry: ["game.js"]
            }),
            l = wxNativeConsole.createLogger("initGameContext");

          function c() {
            __appServiceSDK__.getABTestConfig({
              experimentId: (0, i.gn)() ? "clicfg_appbrand_ios_game_split_multi_plugincode" : "clicfg_appbrand_game_split_multi_plugincode",
              experimentType: "Expt",
              success(e) {
                l.log(`testConfig result=${e.testConfig}`), e && 1 === Number(e.testConfig) && function () {
                  const e = __wxConfig.plugins || __wxConfig.gamePlugins;
                  if (l.log("plugins", e), e) {
                    const t = Object.keys(e).filter((t => {
                      const {
                        contexts: n
                      } = e[t];
                      return l.log("contexts", n), !n || n.some((e => "gameContext" === e.type))
                    })).map((t => e[t]));
                    l.log("gameContextPlugins", t), s.unShiftEntries(t.map((e => {
                      const {
                        provider: t
                      } = e, n = `__plugin__/${t}/plugin.js`;
                      return l.log(`evaluate game plugin script file: ${n}`), n
                    })))
                  }
                }()
              },
              fail(e) {
                l.error("getABTestConfig fail", e)
              }
            })
          }
          const A = function (e) {
              return e.__wxConfig = __wxConfig, s.setExportEnv(e), l.log("__appServiceSDK__", __appServiceSDK__), (0, i.G$)() || JSContext.isAsync() || c(), s.init()
            },
            u = function () {
              return s
            }
        },
        945: (e, t, n) => {
          n.d(t, {
            J: () => s,
            r: () => l
          });
          var r = n(647),
            i = n(61);
          const o = new r.Z({
              name: "gameOpenData",
              secure: !0,
              entry: ["subContext.js"]
            }),
            a = wxNativeConsole.createLogger("initOpenDataContext");
          const s = e => (e.__wxConfig = __wxConfig, o.setExportEnv(e), (0, i.G$)() || JSContext.isAsync() || function () {
              const e = __wxConfig.plugins || __wxConfig.gamePlugins;
              if (a.log("plugins", e), e) {
                const t = Object.keys(e).filter((t => {
                  const {
                    contexts: n
                  } = e[t];
                  return a.log("contexts", n), !!n && n.some((e => "openDataContext" === e.type))
                })).map((t => e[t]));
                a.log("gameContextPlugins", t), o.unShiftEntries(t.map((e => {
                  const {
                    provider: t
                  } = e, n = `__plugin__/${t}/plugin.js`;
                  return a.log(`evaluate opendata plugin script file: ${n}`), n
                })))
              }
            }(), o.init()),
            l = function () {
              return o
            }
        },
        813: (e, t, n) => {
          n.d(t, {
            dr: () => g,
            qo: () => h,
            hS: () => v,
            K0: () => _
          });
          var r = n(356),
            i = n.n(r),
            o = n(503),
            a = n.n(o),
            s = n(647),
            l = n(176),
            c = n(61),
            A = n(309),
            u = n(945);
          const f = {},
            d = {
              isolatedContext: {},
              gameContext: {},
              gameOpenDataContext: {},
              unknown: {}
            },
            p = e => `__plugin__/${e}/plugin.js`,
            g = (e = {
              provider: "",
              secure: !0,
              env: null,
              isPreload: !1
            }) => {
              const {
                env: t,
                provider: n,
                secure: r,
                isPreload: o
              } = e;
              if (!1 === (0, c.N0)()) throw new Error("isn't isolateContext mode!");
              const A = f[n];
              let u;
              if (A) return u = A.contextGlobal.__require, !0 === A.__isCompleted || !1 === A.__isCompleted && (A.dynamicExportGlobal({
                name: "pluginEnv",
                value: t
              }), d.isolatedContext[n] = u), u;
              const g = `gamePlugin_${n}`,
                h = p(n),
                _ = new s.Z({
                  name: g,
                  secure: r,
                  entry: [h]
                }),
                v = e => (e.__wxConfig = __wxConfig, _.setExportEnv(a()(a()({}, e), {}, {
                  pluginEnv: t
                })), _.init());
              return ((0, c.G$)() || JSContext.isAsync()) && !0 === o ? i()((function* () {
                return yield(0, c.QT)(i()((function* () {
                  (0, l.z)(_), yield v(__appServiceSDK__.getIsolatedGamePluginContextEnv(e)), u = _.contextGlobal.__require, _.__isCompleted = !1, f[n] = _
                })), "initGamePluginContext"), u
              }))() : ((0, c.QT)((() => {
                (0, l.z)(_), v(__appServiceSDK__.getIsolatedGamePluginContextEnv(e)), u = _.contextGlobal.__require, _.__isCompleted = !0, f[n] = _
              }), "initGamePluginContext"), d.isolatedContext[n] = u, u)
            },
            h = (e, t, n) => {
              const r = wxNativeConsole.createLogger("injectGamePlugin"),
                {
                  __name__: o
                } = e,
                a = p(t),
                s = "game" === o ? "gameContext" : "gameOpenData" === o ? "gameOpenDataContext" : "unknown";
              return r.log(`invoke, provider=${t}, isPreload=${n}, contextName=${o}, entry=${a}, contextType=${s}`), r.log(`invoke, provider=${t}, isPreload=${n}, contextName=${o}, entry=${a}, contextType=${s}`), ((0, c.G$)() || JSContext.isAsync()) && !0 === n ? (r.log("(isDevtools || JSContext.isAsync) && isPreload"), i()((function* () {
                return yield e.evaluateScriptFile(a), d[s][t] = e.contextGlobal.__require, {
                  provider: t,
                  requireFunc: e.contextGlobal.__require,
                  contextType: s
                }
              }))()) : (r.log("will evaluateScriptFile"), e.evaluateScriptFile(a), d[s][t] = e.contextGlobal.__require, {
                provider: t,
                requireFunc: e.contextGlobal.__require,
                contextType: s
              })
            },
            _ = function () {
              var e = i()((function* () {
                const e = (() => {
                    const e = __wxConfig.gamePlugins || __wxConfig.plugins || {},
                      t = [];
                    return Object.keys(e).forEach((n => {
                      e[n].contexts ? e[n].contexts.forEach((r => {
                        t.push(a()(a()({}, e[n]), {}, {
                          context: r,
                          contexts: null
                        }))
                      })) : t.push(a()(a()({}, e[n]), {}, {
                        context: {
                          type: "gameContext"
                        },
                        contexts: null
                      }))
                    })), t
                  })(),
                  t = (e, t) => e.getEntry().unshift(t);
                return Promise.all(e.map((e => {
                  const {
                    provider: n,
                    context: r
                  } = e;
                  switch (r.type) {
                    case "isolatedContext":
                      return g(a()(a()({}, e), {}, {
                        isPreload: !0
                      }));
                    case "gameContext":
                      return t((0, A.e)(), p(n));
                    case "openDataContext":
                      return t((0, u.r)(), p(n));
                    default:
                      throw new Error(`pluginConf error: invalid context name: ${r.type}`)
                  }
                })))
              }));
              return function () {
                return e.apply(this, arguments)
              }
            }(),
            v = () => d
        },
        228: (e, t, n) => {
          var r = n(176);
          JSContext && JSContext.registerSyncMethod && JSContext.registerSyncMethod("loadJsFiles", (e => {
            const t = (0, r.M)().find((t => t.__name__ === e.contextName));
            t ? t.loadJsFiles(e.paths) : wxNativeConsole.warn(`[MainContext] context name with ${e.contextName} not found, loadJsFiles fail`)
          }))
        },
        76: (e, t, n) => {
          n.d(t, {
            B: () => r
          });
          const r = function (e) {
            if ("string" != typeof e) return e;
            try {
              return JSON.parse(e.replace(/"/g, '\\"').replace(/'/g, '"').replace(/\n/g, "\\n"))
            } catch (t) {
              return {
                message: e,
                stack: ""
              }
            }
          }
        },
        356: e => {
          e.exports = BabelRuntimeHelpers.asyncToGenerator
        },
        503: e => {
          e.exports = BabelRuntimeHelpers.objectSpread2
        }
      },
      t = {};

    function n(r) {
      var i = t[r];
      if (void 0 !== i) return i.exports;
      var o = t[r] = {
        exports: {}
      };
      return e[r](o, o.exports, n), o.exports
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
    }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    };
    var r = {};
    (() => {
      n.r(r), n.d(r, {
        initAppRelatedContexts: () => u,
        initGameRelatedContexts: () => f,
        getAppContext: () => i.F,
        getGameContext: () => o.e,
        createGameOpenDataContext: () => h,
        getGameOpenDataContext: () => a.r,
        createIsolatedGamePlugin: () => s.dr,
        injectGamePlugin: () => s.qo,
        getGamePlugins: () => s.hS,
        isIsolateContext: () => l.N0,
        initGameJS: () => p,
        initFunctionalPage: () => d,
        getPool: () => c.M,
        isValidGameIndependentSubpackagePath: () => l.Qj,
        loadJsFiles: () => _
      });
      var e = n(356),
        t = n.n(e),
        i = (n(146), n(290)),
        o = n(309),
        a = n(945),
        s = n(813),
        l = n(61),
        c = n(176);
      n(228), n(495);
      const A = Object.keys,
        u = function (e) {
          (0, l.N0)();
          const t = A(e);
          for (let n = 0; n < t.length; n++) {
            const r = t[n];
            l.xJ[r] = e[r]
          }(0, l.N0)() && (0, l.QT)((function () {
            Protect.hijack(), (0, l.F)(), (0, c.z)((0, i.F)()), (0, i.E)(e)
          }), "initAppIsolatedContext"), __wxConfig.onReady((() => {
            !(0, l.N0)() && __wxConfig.plugins && (Protect.overwriteSetPrototypeOf(), Protect.doNotWriteGlobalObjs())
          }))
        },
        f = () => {
          __wxConfig.onReady(t()((function* () {
            const e = __appServiceSDK__.getGameRelatedContextsExports();
            ((0, l.G$)() || JSContext.isAsync()) && (0, l.N0)() && (yield(0, s.K0)()), (0, l.N0)();
            const t = e.game.FunctionalPage,
              n = __wxConfig.appLaunchInfo,
              r = t.parseCompletePath(n.path);
            if (r.isFunctionalPage && t.VALID_SCENE.includes(n.scene)) d(e);
            else if ((0, l.c6)(n.scene)) {
              const t = (0, l.Qj)(n.path, __wxConfig.subPackages);
              if (t) {
                const n = (0, o.e)();
                let r = t.root;
                r.endsWith(".js") || (r.endsWith("/") || (r = `${r}/`), r = `${r}game.js`), wxNativeConsole.info("[Independent subPackagePath]", r), n.setEntry([r]), g(e, (e => {
                  e && (console.error(e), console.error("then load main package"), wxNativeConsole.error("run game independent subpackage fail", e), n.evaluateScriptFile("game.js"), Reporter.reportIDKey({
                    key: "loadGameIndependentSubPackageFail"
                  }))
                }))
              } else g(e)
            } else g(e)
          })))
        };

      function d(e) {
        (e = e || __appServiceSDK__.getGameRelatedContextsExports()).game.FunctionalPage.initFunctionalPage()
      }

      function p(e) {
        e = e || __appServiceSDK__.getGameRelatedContextsExports();
        (0, c.M)().length > 0 || g(e)
      }

      function g(e, n) {
        e = e || __appServiceSDK__.getGameRelatedContextsExports(), (0, l.N0)() && (0, l.QT)(t()((function* () {
          let t;
          (0, l.F)(), (0, c.z)((0, o.e)());
          try {
            yield(0, o.M)(e.game)
          } catch (e) {
            t = e
          }
          "function" == typeof n && n(t)
        })), "initGameIsolatedContext")
      }

      function h(e) {
        e = e || __appServiceSDK__.getGameRelatedContextsExports(), (0, l.QT)(t()((function* () {
          (0, c.z)((0, a.r)());
          try {
            yield(0, a.J)(e.gameOpenData)
          } catch (e) {}
        })), "initGameOpenDataContext")
      }
      const _ = () => {}
    })(), __subContextEngine__ = r
  })(), (() => {
    "use strict";
    var e = (e, t, n) => {
        n.d(t, {
          default: () => K
        });
        let r = null;
        const i = () => null !== r;
        let o = [];
        WeixinJSBridge.subscribe("batchGetPluginPermissionBytes", (e => {
          r = e.data.pluginPermissionBytes, o.forEach((e => e())), o = []
        }));
        const a = e => e.split("/", 1)[0];

        function s(e, t) {
          if (delete t.permissionBytes, void 0 === t.pluginId) return t;
          const n = ((e, t) => {
            e = a(e);
            let n = r && r[e] && r[e][t];
            return null == n ? n = [0, 0, 0] : "object" != typeof n && (n = [n, n, n]), n
          })(t.pluginId, e);
          return t.permissionBytes = n, t.privateData = JSON.stringify({
            pluginId: t.pluginId
          }), t
        }

        function l(e, t, n, r) {
          n = parseInt(n, 10), A(e, t, (e => {
            r(e[0] === n)
          }))
        }

        function c(e, t, n, r) {
          n = parseInt(n, 10), A(e, t, (e => {
            r(e[0] !== n)
          }))
        }

        function A(e, t, n) {
          var s;
          s = () => {
            e = a(e);
            let i = r && r[e] && r[e][t];
            null == i ? i = [0, 0, 0] : "object" != typeof i && (i = [i, i, i]), n(i)
          }, i() ? s() : o.push(s)
        }
        const u = BabelRuntimeHelpers.objectSpread2;
        var f = n.n(u);
        const d = Function.prototype.call,
          p = d.bind(String.prototype.indexOf),
          g = d.bind(String.prototype.slice),
          h = d.bind(Array.prototype.sort),
          _ = d.bind(Number.prototype.toString),
          v = d.bind(Object.prototype.toString),
          b = Object.keys,
          m = Array.isArray || function (e) {
            return "[object Array]" === v(e)
          },
          w = e => {
            if ("string" == typeof e) return e;
            if ("number" == typeof e) {
              let t = _(e, 10);
              const n = p(t, ".");
              return n > 0 && (t = g(t, 0, n + 5)), t
            }
            if ("boolean" == typeof e) return !0 === e ? "true" : "false";
            if (m(e)) {
              let t = "";
              for (let n = 0; n < e.length; n++) t += w(e[n]) + ";";
              return `[${t}]`
            }
            if ("object" == typeof e) {
              let t = "";
              const n = b(e);
              h(n);
              for (let r = 0; r < n.length; ++r) t += n[r] + ":" + w(e[n[r]]) + ";";
              return `{${t}}`
            }
            return ""
          },
          y = ({
            apiName: e,
            args: t,
            argsList: n,
            seq: r
          }) => {
            let i = e;
            for (let e = 0; e < n.length; e++) i += "|" + w(t[n[e]]);
            return i += r, i
          },
          C = JSON.parse('{"i":{"createRequestTask":["__skipDomainCheck__","url"],"installDownloadTask":["downloadId"],"downloadAppInternal":["appUrl"],"addDownloadTaskStraight":["taskName","taskUrl","fileMd5"],"getInstallState":["packageName","packageNameArray"],"setClipboardData":["data"],"getClipboardData":[],"navigateBackApplication":[]}}'),
          x = Math.floor,
          E = Math.random,
          B = function () {
            var e, t, n = Function.prototype.call.bind(String.prototype.charAt),
              r = Function.prototype.call.bind(String.prototype.indexOf),
              i = (e = Function.prototype.call.bind(String.fromCharCode), t = String, function (...n) {
                return e(t, ...n)
              });
            return function (e) {
              var t = {};

              function n(r) {
                if (t[r]) return t[r].exports;
                var i = t[r] = {
                  i: r,
                  l: !1,
                  exports: {}
                };
                return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
              }
              return n.m = e, n.c = t, n.d = function (e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, {
                  enumerable: !0,
                  get: r
                })
              }, n.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                  value: !0
                })
              }, n.t = function (e, t) {
                if (1 & t && (e = n(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var r = Object.create(null);
                if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                  }), 2 & t && "string" != typeof e)
                  for (var i in e) n.d(r, i, function (t) {
                    return e[t]
                  }.bind(null, i));
                return r
              }, n.n = function (e) {
                var t = e && e.__esModule ? function () {
                  return e.default
                } : function () {
                  return e
                };
                return n.d(t, "a", t), t
              }, n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
              }, n.p = "", n(n.s = 1)
            }([function (e, t, o) {
              o.r(t), o.d(t, "memory", (function () {
                return f
              })), o.d(t, "sha1", (function () {
                return d
              })), o.d(t, "setSalt", (function () {
                return p
              })), o.d(t, "main", (function () {
                return g
              })), o.d(t, "__wbindgen_malloc", (function () {
                return h
              })), o.d(t, "__wbindgen_realloc", (function () {
                return _
              })), o.d(t, "__wbindgen_free", (function () {
                return v
              })), o.d(t, "__wbindgen_start", (function () {
                return b
              }));
              var a = new ArrayBuffer(8),
                s = new Int32Array(a);
              new Float32Array(a), new Float64Array(a);
              var l, c = new ArrayBuffer(1114112),
                A = (l = new Uint8Array(c), function (e, t) {
                  var o, a;
                  if ("undefined" == typeof Buffer)
                    for (o = function (e) {
                        for (var t, o, a, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", l = "", c = 0; c < e.length;) t = r(s, n(e, c++)) << 18 | r(s, n(e, c++)) << 12 | (o = r(s, n(e, c++))) << 6 | (a = r(s, n(e, c++))), l += 64 === o ? i(t >> 16 & 255) : 64 === a ? i(t >> 16 & 255, t >> 8 & 255) : i(t >> 16 & 255, t >> 8 & 255, 255 & t);
                        return l
                      }(t), a = 0; a < o.length; a++) l[e + a] = o.charCodeAt(a);
                  else
                    for (o = Buffer.from(t, "base64"), a = 0; a < o.length; a++) l[e + a] = o[a]
                });
              A(1048576, "VHJpZWQgdG8gc2hyaW5rIHRvIGEgbGFyZ2VyIGNhcGFjaXR5c3JjL2xpYmFsbG9jL3Jhd192ZWMucnMAAAAQACQAAAAkABAAFwAAAF0CAAAJAAAAaW50ZXJuYWwgZXJyb3I6IGVudGVyZWQgdW5yZWFjaGFibGUgY29kZVQAEAAoAAAAJAAQABcAAAAKAgAAJwAAADAAAAAxAAAAMgAAADMAAAA0AAAANQAAADYAAAA3AAAAOAAAADkAAABhAAAAYgAAAGMAAABkAAAAZQAAAGYAAABzcmMvbGliY29yZS9zbGljZS9tb2QucnNhc3NlcnRpb24gZmFpbGVkOiBgKGxlZnQgPT0gcmlnaHQpYAogIGxlZnQ6IGBgLAogcmlnaHQ6IGBgOiDsABAALQAAABkBEAAMAAAAJQEQAAMAAABkZXN0aW5hdGlvbiBhbmQgc291cmNlIHNsaWNlcyBoYXZlIGRpZmZlcmVudCBsZW5ndGhzQAEQADQAAADUABAAGAAAAFoIAAAJAAAAY2Fubm90IGFjY2VzcyBhIFRMUyB2YWx1ZSBkdXJpbmcgb3IgYWZ0ZXIgaXQgaXMgZGVzdHJveWVkYWxyZWFkeSBib3Jyb3dlZGFscmVhZHkgbXV0YWJseSBib3Jyb3dlZAAAAAUAAAAAAAAAAQAAAAYAAAAHAAAAAAAAAAEAAAAIAAAACQAAAAAAAAABAAAACgAAACACEAAAAAAAIAIQAAAAAAAMAAAAMAAAADEAAAAyAAAAMwAAADQAAAA1AAAANgAAADcAAAA4AAAAOQAAAGEAAABiAAAAYwAAAGQAAABlAAAAZgAAAA0AAAAIAAAABAAAAA4AAAAPAAAAEAAAAAgAAAAEAAAAEQAAABIAAAAAAAAAAQAAABMAAABydXN0LWNyeXB0by9zcmMvY3J5cHRvdXRpbC5ycwAAAKgCEAAdAAAALAAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBkc3QubGVuKCkgPT0gNKgCEAAdAAAAQQAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBkc3QubGVuKCkgKiA0ID09IGlucHV0LmxlbigpAACoAhAAHQAAAFIAAAAFAAAAYXNzZXJ0aW9uIGZhaWxlZDogZHN0LmxlbigpID49IHNyYy5sZW4oKagCEAAdAAAAowAAAAkAAABOdW1lcmljIG92ZXJmbG93IG9jY3VyZWQuAAAAAAAAAHJ1c3QtY3J5cHRvL3NyYy9jcnlwdG91dGlsLnJzAAAAoAMQAB0AAABNAQAACQAAAKgCEAAdAAAAMQEAAAEAAABhc3NlcnRpb24gZmFpbGVkOiBpZHggPj0gc2VsZi5idWZmZXJfaWR4YXNzZXJ0aW9uIGZhaWxlZDogc2VsZi5idWZmZXJfaWR4ID09IDY0cnVzdC1jcnlwdG8vc3JjL3NoYTEucnMAAC8EEAAXAAAAhAAAAA4AAAB1bmtub3duIGljb3Nhcm91bmQgaW5kZXhAAAAAYXNzZXJ0aW9uIGZhaWxlZDogYChsZWZ0ID09IHJpZ2h0KWAKICBsZWZ0OiBgYCwKIHJpZ2h0OiBgYAAAdAQQAC0AAAChBBAADAAAAK0EEAABAAAALwQQABcAAABdAQAABQAAAC8EEAAXAAAAZAEAAAUAAABhc3NlcnRpb24gZmFpbGVkOiAoIXN0LmNvbXB1dGVkKRUAAAAXAAAABAAAAAQAAAAYAAAAGQAAABoAAAAbAAAAAAAAAAEAAAAcAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZXNyYy9saWJjb3JlL29wdGlvbi5yczQFEAArAAAAXwUQABUAAAB6AQAAFQAAAEFjY2Vzc0Vycm9yAB0AAAAQAAAABAAAAB4AAAAfAAAAIAAAAAwAAAAEAAAAIQAAACIAAAAEAAAABAAAACMAAAAkAAAAJQ=="), A(1050080, "L3J1c3RjLzQ1NjBlYTc4OGNiNzYwZjBhMzQxMjcxNTZjNzhlMjU1Mjk0OWY3MzQvc3JjL2xpYmNvcmUvZm10L21vZC5ycwAA4AUQAEYAAABjAQAAEwAAACYAAAAAAAAAAQAAACcAAABzcmMvbGliYWxsb2MvcmF3X3ZlYy5yc2NhcGFjaXR5IG92ZXJmbG93XwYQABEAAABIBhAAFwAAAAkDAAAFAAAAYSBmb3JtYXR0aW5nIHRyYWl0IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yQm9ycm93RXJyb3JCb3Jyb3dNdXRFcnJvciwAAAAAAAAAAQAAAC0AAABpbmRleCBvdXQgb2YgYm91bmRzOiB0aGUgbGVuIGlzICBidXQgdGhlIGluZGV4IGlzIAAA5AYQACAAAAAEBxAAEgAAAGNhbGxlZCBgT3B0aW9uOjp1bndyYXAoKWAgb24gYSBgTm9uZWAgdmFsdWVzcmMvbGliY29yZS9vcHRpb24ucnMoBxAAKwAAAFMHEAAVAAAAegEAABUAAAC7BhAAAAAAAFMHEAAVAAAApgQAAAUAAAA6IAAAuwYQAAAAAACYBxAAAgAAAHNyYy9saWJjb3JlL3Jlc3VsdC5ycwAAAKwHEAAVAAAAjQQAAAUAAABzcmMvbGliY29yZS9zbGljZS9tb2QucnNpbmRleCAgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGgg7AcQAAYAAADyBxAAIgAAANQHEAAYAAAAGQoAAAUAAABzbGljZSBpbmRleCBzdGFydHMgYXQgIGJ1dCBlbmRzIGF0IAA0CBAAFgAAAEoIEAANAAAA1AcQABgAAAAfCgAABQAAADB4MDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTl9IH0="), A(1050960, "c3JjL2xpYmNvcmUvZm10L21vZC5ycwAAUAkQABYAAABWBAAAKAAAAFAJEAAWAAAAYgQAABEAAABFcnJvcg==");
              var u = function (e, t, n) {
                  var r = new e.Int8Array(n),
                    i = (new e.Int16Array(n), new e.Int32Array(n)),
                    o = new e.Uint8Array(n),
                    a = (new e.Uint16Array(n), new e.Uint32Array(n)),
                    l = (new e.Float32Array(n), new e.Float64Array(n), e.Math.imul),
                    c = (e.Math.fround, e.Math.abs, e.Math.clz32),
                    A = (e.Math.min, e.Math.max, e.Math.floor, e.Math.ceil, e.Math.sqrt, t.abort),
                    u = (e.NaN, e.Infinity, 1048576),
                    f = 0;

                  function d(e) {
                    var t = 0,
                      n = 0,
                      r = 0,
                      o = 0,
                      s = 0,
                      l = 0,
                      A = 0,
                      u = 0,
                      f = 0,
                      d = 0,
                      p = 0,
                      g = 0;
                    e: {
                      t: {
                        n: {
                          if (e >>> 0 >= 245) {
                            if (e >>> 0 >= 4294901709) break t;
                            if (o = -8 & (e = e + 11 | 0), !(u = i[262772])) break n;
                            s = 0 - o | 0, A = 0, (e >>>= 8) && (A = 31, o >>> 0 > 16777215 || (A = 62 + ((o >>> (6 - (e = c(e)) & 31) & 1) - (e << 1) | 0) | 0));
                            r: {
                              i: {
                                if (e = i[1051356 + (A << 2) >> 2]) {
                                  for (r = o << (31 == (0 | A) ? 0 : 25 - (A >>> 1) & 31);;) {
                                    if (!((n = -8 & i[e + 4 >> 2]) >>> 0 < o >>> 0 || (n = n - o | 0) >>> 0 >= s >>> 0 || (l = e, s = n, n))) {
                                      s = 0;
                                      break i
                                    }
                                    if (n = i[e + 20 >> 2], e = i[16 + ((r >>> 29 & 4) + e | 0) >> 2], t = n && (0 | n) != (0 | e) ? n : t, r <<= 1, !e) break
                                  }
                                  if (t) {
                                    e = t;
                                    break i
                                  }
                                  if (l) break r
                                }
                                if (l = 0, !(e = u & (0 - (e = 2 << (31 & A)) | e))) break n;
                                if (!(e = i[1051356 + (ye(e & 0 - e) << 2) >> 2])) break n
                              }
                              for (; l = (t = (n = (t = -8 & i[e + 4 >> 2]) - o | 0) >>> 0 < s >>> 0 & t >>> 0 >= o >>> 0) ? e : l, s = t ? n : s, e = (t = i[e + 16 >> 2]) || i[e + 20 >> 2];);
                              if (!l) break n
                            }
                            if (s >>> 0 >= (e = i[262871]) - o >>> 0 && e >>> 0 >= o >>> 0) break n;
                            C(l);
                            r: if (s >>> 0 >= 16) {
                              if (i[l + 4 >> 2] = 3 | o, i[4 + (r = o + l | 0) >> 2] = 1 | s, i[s + r >> 2] = s, s >>> 0 >= 256) {
                                w(r, s);
                                break r
                              }
                              n = 1051092 + ((e = s >>> 3) << 3) | 0, t = i[262771], e = 1 << (31 & e), A = i[n + 8 >> 2], t & e || (i[262771] = e | t, A = n), e = A, i[n + 8 >> 2] = r, i[e + 12 >> 2] = r, i[r + 12 >> 2] = n, i[r + 8 >> 2] = e
                            } else e = o + s | 0, i[l + 4 >> 2] = 3 | e, i[4 + (e = e + l | 0) >> 2] = 1 | i[e + 4 >> 2];
                            return l + 8 | 0
                          }
                          r: {
                            i: {
                              if (!(3 & (n = (r = i[262771]) >>> (t = 31 & (e = (o = e >>> 0 < 11 ? 16 : e + 11 & -8) >>> 3))))) {
                                if (o >>> 0 <= a[262871]) break n;
                                if (n) break i;
                                if (!(e = i[262772])) break n;
                                for (t = i[1051356 + (ye(e & 0 - e) << 2) >> 2], s = (-8 & i[t + 4 >> 2]) - o | 0, r = t;;) {
                                  if (!(e = i[t + 16 >> 2]) && !(e = i[t + 20 >> 2])) break r;
                                  s = (n = (t = (-8 & i[e + 4 >> 2]) - o | 0) >>> 0 < s >>> 0) ? t : s, r = n ? e : r, t = e
                                }
                              }
                              s = (l = i[16 + (e = 1051084 + ((n = e + (1 & (-1 ^ n)) | 0) << 3) | 0) >> 2]) + 8 | 0,
                              (0 | (t = i[l + 8 >> 2])) == (0 | (e = e + 8 | 0)) ? (p = 1051084, g = Ce(-2, n) & r, i[p >> 2] = g) : (i[t + 12 >> 2] = e, i[e + 8 >> 2] = t),
                              e = n << 3,
                              i[l + 4 >> 2] = 3 | e,
                              i[4 + (e = e + l | 0) >> 2] = 1 | i[e + 4 >> 2];
                              break t
                            }
                            return l = ye(0 - (e = (0 - (e = 2 << t) | e) & n << t) & e),
                            u = i[16 + (e = 1051084 + (l << 3) | 0) >> 2],
                            (0 | (t = i[u + 8 >> 2])) == (0 | (e = e + 8 | 0)) ? (p = 1051084, g = Ce(-2, l) & r, i[p >> 2] = g) : (i[t + 12 >> 2] = e, i[e + 8 >> 2] = t),
                            i[u + 4 >> 2] = 3 | o,
                            l = (e = l << 3) - o | 0,
                            i[4 + (n = o + u | 0) >> 2] = 1 | l,
                            i[e + u >> 2] = l,
                            (e = i[262871]) && (s = i[262873], r = 1051092 + ((e >>>= 3) << 3) | 0, t = i[262771], e = 1 << (31 & e), A = i[r + 8 >> 2], t & e || (i[262771] = e | t, A = r), e = A, i[r + 8 >> 2] = s, i[e + 12 >> 2] = s, i[s + 12 >> 2] = r, i[s + 8 >> 2] = e),
                            i[262873] = n,
                            i[262871] = l,
                            u + 8 | 0
                          }
                          return C(r),
                          s >>> 0 >= 16 ? (i[r + 4 >> 2] = 3 | o, i[4 + (n = o + r | 0) >> 2] = 1 | s, i[n + s >> 2] = s, (e = i[262871]) && (u = i[262873], l = 1051092 + ((e >>>= 3) << 3) | 0, t = i[262771], e = 1 << (31 & e), A = i[l + 8 >> 2], t & e || (i[262771] = e | t, A = l), e = A, i[l + 8 >> 2] = u, i[e + 12 >> 2] = u, i[u + 12 >> 2] = l, i[u + 8 >> 2] = e), i[262873] = n, i[262871] = s) : (e = o + s | 0, i[r + 4 >> 2] = 3 | e, i[4 + (e = e + r | 0) >> 2] = 1 | i[e + 4 >> 2]),
                          r + 8 | 0
                        }
                        n: {
                          r: {
                            i: {
                              o: {
                                if ((n = i[262871]) >>> 0 < o >>> 0) {
                                  if ((e = i[262872]) >>> 0 > o >>> 0) break e;
                                  if (s = 0, -1 == (0 | (e = Ee((t = o + 65583 | 0) >>> 16)))) break t;
                                  if (!(f = e << 16)) break t;
                                  if (t = (u = -65536 & t) + i[262875] | 0, i[262875] = t, e = i[262876], i[262876] = e >>> 0 > t >>> 0 ? e : t, !(d = i[262874])) break o;
                                  for (e = 1051508;;) {
                                    if ((0 | f) == ((n = i[e >> 2]) + (t = i[e + 4 >> 2]) | 0)) break i;
                                    if (!(e = i[e + 8 >> 2])) break
                                  }
                                  break r
                                }
                                return l = i[262873],
                                (t = n - o | 0) >>> 0 <= 15 ? (i[262873] = 0, i[262871] = 0, i[l + 4 >> 2] = 3 | n, o = 4 + (e = n + l | 0) | 0, s = 1 | i[e + 4 >> 2]) : (i[262871] = t, e = o + l | 0, i[262873] = e, i[e + 4 >> 2] = 1 | t, i[n + l >> 2] = t, s = 3 | o, o = l + 4 | 0),
                                i[o >> 2] = s,
                                l + 8 | 0
                              }
                              for ((e = i[262882]) >>> 0 <= f >>> 0 && e || (i[262882] = f), i[262883] = 4095, i[262877] = f, e = 0, i[262880] = 0, i[262878] = u; t = 8 + (n = e + 1051084 | 0) | 0, i[n + 16 >> 2] = t, i[n + 20 >> 2] = t, 256 != (0 | (e = e + 8 | 0)););i[262874] = f,
                              e = u + -40 | 0,
                              i[262872] = e,
                              i[f + 4 >> 2] = 1 | e,
                              i[4 + (e + f | 0) >> 2] = 40,
                              i[262881] = 2097152;
                              break n
                            }
                            if (!(i[e + 12 >> 2] | f >>> 0 <= d >>> 0 | n >>> 0 > d >>> 0)) {
                              i[e + 4 >> 2] = t + u, n = (l = i[262874]) + 15 & -8, i[262874] = n + -8, e = 8 + ((t = u + i[262872] | 0) + (l - n | 0) | 0) | 0, i[262872] = e, i[n + -4 >> 2] = 1 | e, i[4 + (t + l | 0) >> 2] = 40, i[262881] = 2097152;
                              break n
                            }
                          }
                          e = i[262882],
                          i[262882] = e >>> 0 < f >>> 0 ? e : f,
                          r = u + f | 0,
                          e = 1051508;r: {
                            for (;;) {
                              if ((0 | r) != i[e >> 2]) {
                                if (e = i[e + 8 >> 2]) continue;
                                break r
                              }
                              break
                            }
                            if (!i[e + 12 >> 2]) {
                              i[e >> 2] = f, i[e + 4 >> 2] = u + i[e + 4 >> 2], i[f + 4 >> 2] = 3 | o, s = o + f | 0, o = (r - f | 0) - o | 0;
                              i: {
                                o: {
                                  if ((0 | r) != i[262874]) {
                                    if (i[262873] == (0 | r)) break o;
                                    if (1 == (3 & (l = i[r + 4 >> 2])) && ((n = -8 & l) >>> 0 >= 256 ? C(r) : (0 | (t = i[r + 12 >> 2])) == (0 | (e = i[r + 8 >> 2])) ? (p = 1051084, g = i[262771] & Ce(-2, l >>> 3), i[p >> 2] = g) : (i[e + 12 >> 2] = t, i[t + 8 >> 2] = e), o = n + o | 0, r = n + r | 0), i[r + 4 >> 2] = -2 & i[r + 4 >> 2], i[s + 4 >> 2] = 1 | o, i[o + s >> 2] = o, o >>> 0 >= 256) {
                                      w(s, o);
                                      break i
                                    }
                                    n = 1051092 + ((e = o >>> 3) << 3) | 0, t = i[262771], e = 1 << (31 & e), r = i[n + 8 >> 2], t & e || (i[262771] = e | t, r = n), e = r, i[n + 8 >> 2] = s, i[e + 12 >> 2] = s, i[s + 12 >> 2] = n, i[s + 8 >> 2] = e;
                                    break i
                                  }
                                  i[262874] = s,
                                  e = i[262872] + o | 0,
                                  i[262872] = e,
                                  i[s + 4 >> 2] = 1 | e;
                                  break i
                                }
                                i[262873] = s,
                                e = i[262871] + o | 0,
                                i[262871] = e,
                                i[s + 4 >> 2] = 1 | e,
                                i[e + s >> 2] = e
                              }
                              return f + 8 | 0
                            }
                          }
                          for (e = 1051508; !((t = i[e >> 2]) >>> 0 <= d >>> 0 && (r = t + i[e + 4 >> 2] | 0) >>> 0 > d >>> 0);) e = i[e + 8 >> 2];
                          for (i[262874] = f, e = u + -40 | 0, i[262872] = e, i[f + 4 >> 2] = 1 | e, i[4 + (e + f | 0) >> 2] = 40, i[262881] = 2097152, i[(A = (e = (r + -32 & -8) - 8 | 0) >>> 0 < d + 16 >>> 0 ? d : e) + 4 >> 2] = 27, l = i[262877], n = i[262878], t = i[262880], i[(e = A + 16 | 0) >> 2] = i[262879], i[e + 4 >> 2] = t, i[A + 8 >> 2] = l, i[A + 12 >> 2] = n, i[262880] = 0, i[262878] = u, i[262877] = f, i[262879] = A + 8, e = A + 28 | 0; i[e >> 2] = 7, r >>> 0 > (e = e + 4 | 0) >>> 0;);
                          (0 | A) != (0 | d) && (i[A + 4 >> 2] = -2 & i[A + 4 >> 2], e = A - d | 0, i[d + 4 >> 2] = 1 | e, i[A >> 2] = e, e >>> 0 >= 256 ? w(d, e) : (n = 1051092 + ((e >>>= 3) << 3) | 0, t = i[262771], e = 1 << (31 & e), r = i[n + 8 >> 2], t & e || (i[262771] = e | t, r = n), e = r, i[n + 8 >> 2] = d, i[e + 12 >> 2] = d, i[d + 12 >> 2] = n, i[d + 8 >> 2] = e))
                        }
                        if (!((e = i[262872]) >>> 0 <= o >>> 0)) break e
                      }
                      return s
                    }
                    return t = e - o | 0, i[262872] = t, e = (n = i[262874]) + o | 0, i[262874] = e, i[e + 4 >> 2] = 1 | t, i[n + 4 >> 2] = 3 | o, n + 8 | 0
                  }

                  function p(e, t, n) {
                    var a, s = 0,
                      l = 0,
                      c = 0,
                      f = 0,
                      d = 0,
                      p = 0,
                      g = 0;
                    u = a = u + -64 | 0, i[a + 36 >> 2] = t, s = i[n + 20 >> 2], i[a + 52 >> 2] = s, r[a + 56 | 0] = 3, l = i[n + 16 >> 2], i[a + 44 >> 2] = l + (s << 3), i[a + 8 >> 2] = 0, i[a + 12 >> 2] = 32, i[a + 32 >> 2] = e, i[a + 24 >> 2] = 0, i[a + 16 >> 2] = 0, i[a + 48 >> 2] = l, i[a + 40 >> 2] = l;
                    e: {
                      t: {
                        n: {
                          r: {
                            if (!(c = i[n + 8 >> 2])) {
                              if (d = i[n >> 2], !(c = s >>> 0 > (p = i[n + 4 >> 2]) >>> 0 ? p : s)) break r;
                              if (s = 1, xe[i[t + 12 >> 2]](e, i[d >> 2], i[d + 4 >> 2])) break e;
                              for (n = d + 12 | 0, f = 1;;) {
                                if (xe[i[l + 4 >> 2]](i[l >> 2], a + 8 | 0)) break e;
                                if (f >>> 0 >= c >>> 0) break r;
                                if (e = n + -4 | 0, t = i[n >> 2], n = n + 8 | 0, l = l + 8 | 0, f = f + 1 | 0, xe[i[i[a + 36 >> 2] + 12 >> 2]](i[a + 32 >> 2], i[e >> 2], t)) break
                              }
                              break e
                            }
                            if (d = i[n >> 2], p = i[n + 4 >> 2], g = (n = i[n + 12 >> 2]) >>> 0 > p >>> 0 ? p : n) {
                              if (s = 1, xe[i[t + 12 >> 2]](e, i[d >> 2], i[d + 4 >> 2])) break e;
                              for (n = d + 12 | 0, l = c + 16 | 0, f = 1;;) {
                                i[a + 12 >> 2] = i[l + -8 >> 2], r[a + 56 | 0] = o[l + 16 | 0], i[a + 8 >> 2] = i[l + -4 >> 2], t = 0, s = 0;
                                i: {
                                  o: switch (i[l + 8 >> 2] - 1 | 0) {
                                    default:
                                      e = i[l + 12 >> 2], s = 1;
                                      break i;
                                    case 0:
                                      if ((c = i[l + 12 >> 2]) >>> 0 < (s = i[a + 52 >> 2]) >>> 0) {
                                        if (s = 0, c = i[a + 48 >> 2] + (c << 3) | 0, 41 != i[c + 4 >> 2]) break i;
                                        e = i[i[c >> 2] >> 2], s = 1;
                                        break i
                                      }
                                      T(1051e3, c, s), A();
                                    case 1:
                                      break o;
                                    case 2:
                                      break i
                                  }(0 | (c = i[a + 40 >> 2])) != i[a + 44 >> 2] && (i[a + 40 >> 2] = c + 8, 41 == i[c + 4 >> 2] && (e = i[i[c >> 2] >> 2], s = 1))
                                }
                                i[a + 20 >> 2] = e, i[a + 16 >> 2] = s;
                                i: {
                                  o: {
                                    a: {
                                      s: {
                                        l: {
                                          c: switch (i[l >> 2] - 1 | 0) {
                                            case 1:
                                              if ((0 | (e = i[a + 40 >> 2])) != i[a + 44 >> 2]) break l;
                                              break i;
                                            case 2:
                                              break i;
                                            case 0:
                                              break c;
                                            default:
                                              break a
                                          }
                                          if ((e = i[l + 4 >> 2]) >>> 0 >= (s = i[a + 52 >> 2]) >>> 0) break s;
                                          if (e = i[a + 48 >> 2] + (e << 3) | 0, 41 != i[e + 4 >> 2]) break i;s = i[i[e >> 2] >> 2];
                                          break o
                                        }
                                        if (i[a + 40 >> 2] = e + 8, 41 != i[e + 4 >> 2]) break i;s = i[i[e >> 2] >> 2];
                                        break o
                                      }
                                      T(1051e3, e, s),
                                      A()
                                    }
                                    s = i[l + 4 >> 2]
                                  }
                                  t = 1
                                }
                                if (i[a + 28 >> 2] = s, i[a + 24 >> 2] = t, 1 == i[l + -16 >> 2]) {
                                  if ((e = i[l + -12 >> 2]) >>> 0 >= (t = i[a + 52 >> 2]) >>> 0) break t;
                                  s = i[a + 48 >> 2] + (e << 3) | 0
                                } else {
                                  if ((0 | (s = i[a + 40 >> 2])) == i[a + 44 >> 2]) break n;
                                  i[a + 40 >> 2] = s + 8
                                }
                                if (xe[i[s + 4 >> 2]](i[s >> 2], a + 8 | 0)) {
                                  s = 1;
                                  break e
                                }
                                if (f >>> 0 >= g >>> 0) break r;
                                if (e = n + -4 | 0, t = i[n >> 2], n = n + 8 | 0, l = l + 36 | 0, s = 1, f = f + 1 | 0, xe[i[i[a + 36 >> 2] + 12 >> 2]](i[a + 32 >> 2], i[e >> 2], t)) break
                              }
                              break e
                            }
                          }
                          if (p >>> 0 > f >>> 0 && (s = 1, e = (f << 3) + d | 0, xe[i[i[a + 36 >> 2] + 12 >> 2]](i[a + 32 >> 2], i[e >> 2], i[e + 4 >> 2]))) break e;s = 0;
                          break e
                        }
                        W(1050472),
                        A()
                      }
                      T(1050984, e, t),
                      A()
                    }
                    return u = a - -64 | 0, s
                  }

                  function g(e, t, n) {
                    var a = 0,
                      s = 0,
                      l = 0,
                      c = 0,
                      A = 0,
                      u = 0,
                      f = 0,
                      d = 0,
                      p = 0,
                      g = 0,
                      h = 0,
                      _ = 0;
                    a = i[e + 16 >> 2];
                    e: {
                      t: {
                        n: {
                          r: {
                            if (1 != (0 | (g = i[e + 8 >> 2]))) {
                              if (a) break r;
                              a = 0 | xe[i[i[e + 28 >> 2] + 12 >> 2]](i[e + 24 >> 2], t, n);
                              break t
                            }
                            if (!a) break n
                          }
                          r: if (n) {
                            for (A = t + n | 0, d = i[e + 20 >> 2] + 1 | 0, h = a = t;;) {
                              l = a + 1 | 0;
                              i: {
                                o: {
                                  if ((0 | (s = r[0 | a])) <= -1) {
                                    if ((0 | l) != (0 | A) ? (f = 63 & o[a + 1 | 0], a = l = a + 2 | 0) : (f = 0, a = A), u = (p = 31 & s) << 6 | f, (_ = 255 & s) >>> 0 <= 223) break o;
                                    if ((0 | a) != (0 | A) ? (u = 63 & o[0 | a], s = l = a + 1 | 0) : (u = 0, s = A), u = (f = f << 6 | u) | p << 12, _ >>> 0 < 240) break o;
                                    if ((0 | s) != (0 | A) ? (a = s + 1 | 0, s = 63 & o[0 | s]) : (a = l, s = 0), 1114112 != (0 | (s = s | p << 18 & 1835008 | f << 6))) break i;
                                    break r
                                  }
                                  u = 255 & s
                                }
                                s = u,
                                a = l
                              }
                              if (d = d + -1 | 0) {
                                if (c = (c - h | 0) + a | 0, h = a, (0 | a) != (0 | A)) continue;
                                break r
                              }
                              break
                            }
                            1114112 != (0 | s) && (s = c, l = n, !(!c | (0 | n) == (0 | c)) && (a = 0, r[t + c | 0] < -64 | c >>> 0 >= n >>> 0) || (a = t), n = a ? s : l, t = a || t)
                          } else n = 0;
                          if (!g) break e
                        }
                        if (l = 0, n)
                          for (s = n, a = t; l = (128 == (192 & o[0 | a])) + l | 0, a = a + 1 | 0, s = s + -1 | 0;);
                        if (n - l >>> 0 >= (A = i[e + 12 >> 2]) >>> 0) break e;
                        if (c = 0, l = 0, n)
                          for (s = n, a = t; l = (128 == (192 & o[0 | a])) + l | 0, a = a + 1 | 0, s = s + -1 | 0;);s = A + (l - n | 0) | 0;n: {
                          r: {
                            i: switch ((3 == (0 | (a = o[e + 48 | 0])) ? 0 : a) - 1 | 0) {
                              case 1:
                                break r;
                              case 0:
                              case 2:
                                break i;
                              default:
                                break n
                            }
                            c = s,
                            s = 0;
                            break n
                          }
                          c = s >>> 1,
                          s = s + 1 >>> 1
                        }
                        a = c + 1 | 0;n: {
                          for (;;) {
                            if (!(a = a + -1 | 0)) break n;
                            if (xe[i[i[e + 28 >> 2] + 16 >> 2]](i[e + 24 >> 2], i[e + 4 >> 2])) break
                          }
                          return 1
                        }
                        if (l = i[e + 4 >> 2], a = 1, !xe[i[i[e + 28 >> 2] + 12 >> 2]](i[e + 24 >> 2], t, n)) {
                          for (a = s + 1 | 0, t = i[e + 28 >> 2], e = i[e + 24 >> 2];;) {
                            if (!(a = a + -1 | 0)) return 0;
                            if (xe[i[t + 16 >> 2]](e, l)) break
                          }
                          return 1
                        }
                      }
                      return a
                    }
                    return 0 | xe[i[i[e + 28 >> 2] + 12 >> 2]](i[e + 24 >> 2], t, n)
                  }

                  function h(e) {
                    var t = 0,
                      n = 0,
                      r = 0,
                      o = 0,
                      a = 0,
                      s = 0,
                      l = 0;
                    n = (t = e + -8 | 0) + (e = -8 & (o = i[e + -4 >> 2])) | 0;
                    e: {
                      t: {
                        n: {
                          r: if (!(1 & o)) {
                            if (!(3 & o)) break n;
                            if (e = (o = i[t >> 2]) + e | 0, (0 | (t = t - o | 0)) == i[262873]) {
                              if (3 != (3 & i[n + 4 >> 2])) break r;
                              return i[262871] = e, i[n + 4 >> 2] = -2 & i[n + 4 >> 2], i[t + 4 >> 2] = 1 | e, void(i[e + t >> 2] = e)
                            }
                            o >>> 0 >= 256 ? C(t) : (0 | (r = i[t + 8 >> 2])) == (0 | (a = i[t + 12 >> 2])) ? (s = 1051084, l = i[262771] & Ce(-2, o >>> 3), i[s >> 2] = l) : (i[r + 12 >> 2] = a, i[a + 8 >> 2] = r)
                          }if (2 & (o = i[n + 4 >> 2])) i[n + 4 >> 2] = -2 & o,
                          i[t + 4 >> 2] = 1 | e,
                          i[e + t >> 2] = e;
                          else {
                            r: {
                              if (i[262874] != (0 | n)) {
                                if ((0 | n) != i[262873]) break r;
                                return i[262873] = t, e = i[262871] + e | 0, i[262871] = e, i[t + 4 >> 2] = 1 | e, void(i[e + t >> 2] = e)
                              }
                              if (i[262874] = t, e = i[262872] + e | 0, i[262872] = e, i[t + 4 >> 2] = 1 | e, (0 | t) == i[262873] && (i[262871] = 0, i[262873] = 0), (n = i[262881]) >>> 0 >= e >>> 0) break n;
                              if (!(e = i[262874])) break n;i: if (!((o = i[262872]) >>> 0 < 41))
                                for (t = 1051508;;) {
                                  if ((r = i[t >> 2]) + i[t + 4 >> 2] >>> 0 > e >>> 0 && r >>> 0 <= e >>> 0) break i;
                                  if (!(t = i[t + 8 >> 2])) break
                                }
                              if (r = 4095, e = i[262879]) {
                                for (t = 0; t = t + 1 | 0, e = i[e + 8 >> 2];);
                                r = t >>> 0 > 4095 ? t : 4095
                              }
                              if (i[262883] = r, o >>> 0 <= n >>> 0) break n;
                              return void(i[262881] = -1)
                            }
                            if (e = (r = -8 & o) + e | 0, r >>> 0 >= 256 ? C(n) : (0 | (r = i[n + 12 >> 2])) == (0 | (n = i[n + 8 >> 2])) ? (s = 1051084, l = i[262771] & Ce(-2, o >>> 3), i[s >> 2] = l) : (i[n + 12 >> 2] = r, i[r + 8 >> 2] = n), i[t + 4 >> 2] = 1 | e, i[e + t >> 2] = e, i[262873] == (0 | t)) {
                              i[262871] = e;
                              break n
                            }
                          }
                          if (e >>> 0 < 256) break t;
                          if (w(t, e), e = i[262883] + -1 | 0, i[262883] = e, !e) {
                            if (e = i[262879]) break e;
                            return void(i[262883] = 4095)
                          }
                        }
                        return
                      }
                      return e = 1051092 + ((n = e >>> 3) << 3) | 0,
                      o = i[262771],
                      n = 1 << (31 & n),
                      r = i[e + 8 >> 2],
                      o & n || (i[262771] = n | o, r = e),
                      n = r,
                      i[e + 8 >> 2] = t,
                      i[n + 12 >> 2] = t,
                      i[t + 12 >> 2] = e,
                      void(i[t + 8 >> 2] = n)
                    }
                    for (t = 0; t = t + 1 | 0, e = i[e + 8 >> 2];);
                    i[262883] = t >>> 0 > 4095 ? t : 4095
                  }

                  function _(e, t, n, a, s) {
                    var l, c, A = 0,
                      u = 0,
                      f = 0,
                      d = 0;
                    if (l = (A = 1 & (c = i[e >> 2])) ? 43 : 1114112, d = s + A | 0, 4 & c) {
                      if (n)
                        for (f = n, A = t; u = (128 == (192 & o[0 | A])) + u | 0, A = A + 1 | 0, f = f + -1 | 0;);
                      d = (n + d | 0) - u | 0
                    } else t = 0;
                    e: {
                      t: {
                        if (1 != i[e + 8 >> 2]) {
                          if (N(e, l, t, n)) break t;
                          break e
                        }
                        if ((A = i[e + 12 >> 2]) >>> 0 <= d >>> 0) {
                          if (N(e, l, t, n)) break t;
                          break e
                        }
                        n: {
                          if (!(8 & c)) {
                            u = A - d | 0, A = 0;
                            r: {
                              i: {
                                o: switch ((3 == (0 | (f = o[e + 48 | 0])) ? 1 : f) - 1 | 0) {
                                  case 1:
                                    break i;
                                  case 0:
                                  case 2:
                                    break o;
                                  default:
                                    break r
                                }
                                A = u,
                                u = 0;
                                break r
                              }
                              A = u >>> 1,
                              u = u + 1 >>> 1
                            }
                            for (A = A + 1 | 0;;) {
                              if (!(A = A + -1 | 0)) break n;
                              if (xe[i[i[e + 28 >> 2] + 16 >> 2]](i[e + 24 >> 2], i[e + 4 >> 2])) break
                            }
                            return 1
                          }
                          if (r[e + 48 | 0] = 1, i[e + 4 >> 2] = 48, N(e, l, t, n)) break t;u = A - d | 0,
                          A = 0;r: {
                            i: {
                              o: switch ((3 == (0 | (t = o[e + 48 | 0])) ? 1 : t) - 1 | 0) {
                                case 1:
                                  break i;
                                case 0:
                                case 2:
                                  break o;
                                default:
                                  break r
                              }
                              A = u,
                              u = 0;
                              break r
                            }
                            A = u >>> 1,
                            u = u + 1 >>> 1
                          }
                          A = A + 1 | 0;r: {
                            for (;;) {
                              if (!(A = A + -1 | 0)) break r;
                              if (xe[i[i[e + 28 >> 2] + 16 >> 2]](i[e + 24 >> 2], i[e + 4 >> 2])) break
                            }
                            return 1
                          }
                          if (t = i[e + 4 >> 2], xe[i[i[e + 28 >> 2] + 12 >> 2]](i[e + 24 >> 2], a, s)) break t;
                          for (u = u + 1 | 0, n = i[e + 28 >> 2], e = i[e + 24 >> 2];;) {
                            if (!(u = u + -1 | 0)) return 0;
                            if (xe[i[n + 16 >> 2]](e, t)) break
                          }
                          break t
                        }
                        if (A = i[e + 4 >> 2], !N(e, l, t, n) && !xe[i[i[e + 28 >> 2] + 12 >> 2]](i[e + 24 >> 2], a, s))
                          for (u = u + 1 | 0, t = i[e + 28 >> 2], e = i[e + 24 >> 2];;) {
                            if (!(u = u + -1 | 0)) return 0;
                            if (xe[i[t + 16 >> 2]](e, A)) break
                          }
                      }
                      return 1
                    }
                    return 0 | xe[i[i[e + 28 >> 2] + 12 >> 2]](i[e + 24 >> 2], a, s)
                  }

                  function v(e, t, n, r) {
                    var o, a = 0,
                      s = 0,
                      l = 0,
                      c = 0,
                      f = 0,
                      d = 0;
                    u = o = u - 32 | 0;
                    e: {
                      t: {
                        n: {
                          r: {
                            i: {
                              if ((r &= 255) >>> 0 <= 3) switch (r - 1 | 0) {
                                case 2:
                                  break t;
                                case 1:
                                  break n;
                                case 0:
                                  break r;
                                default:
                                  break i
                              }
                              $(1049688, 24, 1049672),
                              A()
                            }
                            l = Ce(a = i[t >> 2], 5),
                            s = i[t + 12 >> 2],
                            r = i[t + 8 >> 2],
                            t = i[t + 4 >> 2],
                            c = Ce(l = 1518500249 + ((l + i[n >> 2] | 0) + ((s ^ r) & t ^ s) | 0) | 0, 30),
                            i[e + 12 >> 2] = c,
                            s = 1518500249 + (((s + (r ^ a & ((t = Ce(t, 30)) ^ r)) | 0) + i[n + 4 >> 2] | 0) + Ce(l, 5) | 0) | 0,
                            f = e,
                            d = Ce(s, 30),
                            i[f + 8 >> 2] = d,
                            a = 1518500249 + (((r + i[n + 8 >> 2] | 0) + (t ^ l & ((r = Ce(a, 30)) ^ t)) | 0) + Ce(s, 5) | 0) | 0,
                            i[e + 4 >> 2] = a,
                            f = e,
                            d = 1518500249 + (((t + i[n + 12 >> 2] | 0) + (r ^ s & (r ^ c)) | 0) + Ce(a, 5) | 0) | 0,
                            i[f >> 2] = d;
                            break e
                          }
                          s = i[4 + (a = t + 8 | 0) >> 2],
                          i[(r = o + 8 | 0) >> 2] = i[a >> 2],
                          i[r + 4 >> 2] = s,
                          r = i[t + 4 >> 2],
                          i[o >> 2] = i[t >> 2],
                          i[o + 4 >> 2] = r,
                          i[o + 28 >> 2] = i[n + 12 >> 2] + 1859775393,
                          i[o + 24 >> 2] = i[n + 8 >> 2] + 1859775393,
                          i[o + 20 >> 2] = i[n + 4 >> 2] + 1859775393,
                          i[o + 16 >> 2] = i[n >> 2] + 1859775393,
                          B(e, o, o + 16 | 0);
                          break e
                        }
                        l = Ce(a = i[t >> 2], 5),
                        s = i[t + 12 >> 2],
                        r = i[t + 8 >> 2],
                        t = i[t + 4 >> 2],
                        c = Ce(l = ((l + i[n >> 2] | 0) + ((s ^ r) & t ^ r & s) | 0) - 1894007588 | 0, 30),
                        i[e + 12 >> 2] = c,
                        s = (((s + (a & ((t = Ce(t, 30)) ^ r) ^ t & r) | 0) + i[n + 4 >> 2] | 0) + Ce(l, 5) | 0) - 1894007588 | 0,
                        f = e,
                        d = Ce(s, 30),
                        i[f + 8 >> 2] = d,
                        a = (((r + i[n + 8 >> 2] | 0) + (l & ((r = Ce(a, 30)) ^ t) ^ t & r) | 0) + Ce(s, 5) | 0) - 1894007588 | 0,
                        i[e + 4 >> 2] = a,
                        f = e,
                        d = (((t + i[n + 12 >> 2] | 0) + (s & (r ^ c) ^ r & c) | 0) + Ce(a, 5) | 0) - 1894007588 | 0,
                        i[f >> 2] = d;
                        break e
                      }
                      s = i[4 + (a = t + 8 | 0) >> 2],
                      i[(r = o + 8 | 0) >> 2] = i[a >> 2],
                      i[r + 4 >> 2] = s,
                      r = i[t + 4 >> 2],
                      i[o >> 2] = i[t >> 2],
                      i[o + 4 >> 2] = r,
                      i[o + 28 >> 2] = i[n + 12 >> 2] + -899497514,
                      i[o + 24 >> 2] = i[n + 8 >> 2] + -899497514,
                      i[o + 20 >> 2] = i[n + 4 >> 2] + -899497514,
                      i[o + 16 >> 2] = i[n >> 2] + -899497514,
                      B(e, o, o + 16 | 0)
                    }
                    u = o + 32 | 0
                  }

                  function b(e, t) {
                    var n = 0,
                      r = 0,
                      o = 0,
                      a = 0,
                      s = 0,
                      l = 0;
                    n = e + t | 0;
                    e: {
                      t: {
                        n: if (!(1 & (r = i[e + 4 >> 2]))) {
                          if (!(3 & r)) break t;
                          if (t = (r = i[e >> 2]) + t | 0, (0 | (e = e - r | 0)) == i[262873]) {
                            if (3 != (3 & i[n + 4 >> 2])) break n;
                            return i[262871] = t, i[n + 4 >> 2] = -2 & i[n + 4 >> 2], i[e + 4 >> 2] = 1 | t, void(i[n >> 2] = t)
                          }
                          r >>> 0 >= 256 ? C(e) : (0 | (o = i[e + 8 >> 2])) == (0 | (a = i[e + 12 >> 2])) ? (s = 1051084, l = i[262771] & Ce(-2, r >>> 3), i[s >> 2] = l) : (i[o + 12 >> 2] = a, i[a + 8 >> 2] = o)
                        }if (2 & (r = i[n + 4 >> 2])) {
                          i[n + 4 >> 2] = -2 & r, i[e + 4 >> 2] = 1 | t, i[e + t >> 2] = t;
                          break e
                        }
                        n: {
                          if (i[262874] != (0 | n)) {
                            if ((0 | n) != i[262873]) break n;
                            return i[262873] = e, t = i[262871] + t | 0, i[262871] = t, i[e + 4 >> 2] = 1 | t, void(i[e + t >> 2] = t)
                          }
                          if (i[262874] = e, t = i[262872] + t | 0, i[262872] = t, i[e + 4 >> 2] = 1 | t, i[262873] != (0 | e)) break t;
                          return i[262871] = 0,
                          void(i[262873] = 0)
                        }
                        if (t = (o = -8 & r) + t | 0, o >>> 0 >= 256 ? C(n) : (0 | (o = i[n + 12 >> 2])) == (0 | (n = i[n + 8 >> 2])) ? (s = 1051084, l = i[262771] & Ce(-2, r >>> 3), i[s >> 2] = l) : (i[n + 12 >> 2] = o, i[o + 8 >> 2] = n), i[e + 4 >> 2] = 1 | t, i[e + t >> 2] = t, i[262873] != (0 | e)) break e;i[262871] = t
                      }
                      return
                    }
                    t >>> 0 >= 256 ? w(e, t) : (t = 1051092 + ((n = t >>> 3) << 3) | 0, r = i[262771], n = 1 << (31 & n), o = i[t + 8 >> 2], r & n || (i[262771] = n | r, o = t), n = o, i[t + 8 >> 2] = e, i[n + 12 >> 2] = e, i[e + 12 >> 2] = t, i[e + 8 >> 2] = n)
                  }

                  function m(e, t) {
                    var n = 0,
                      r = 0,
                      o = 0,
                      a = 0,
                      s = 0;
                    return -65587 - (e = e >>> 0 > 16 ? e : 16) >>> 0 <= t >>> 0 || (n = d(12 + ((o = t >>> 0 < 11 ? 16 : t + 11 & -8) + e | 0) | 0)) && (t = n + -8 | 0, (r = e + -1 | 0) & n ? (r = (-8 & (s = i[(a = n + -4 | 0) >> 2])) - (n = (e = (n = (n + r & 0 - e) - 8 | 0) - t >>> 0 > 16 ? n : e + n | 0) - t | 0) | 0, 3 & s ? (i[e + 4 >> 2] = r | 1 & i[e + 4 >> 2] | 2, i[4 + (r = e + r | 0) >> 2] = 1 | i[r + 4 >> 2], i[a >> 2] = n | 1 & i[a >> 2] | 2, i[e + 4 >> 2] = 1 | i[e + 4 >> 2], b(t, n)) : (t = i[t >> 2], i[e + 4 >> 2] = r, i[e >> 2] = t + n)) : e = t, 3 & (t = i[e + 4 >> 2]) && ((n = -8 & t) >>> 0 <= o + 16 >>> 0 || (i[e + 4 >> 2] = o | 1 & t | 2, t = e + o | 0, o = n - o | 0, i[t + 4 >> 2] = 3 | o, i[4 + (n = e + n | 0) >> 2] = 1 | i[n + 4 >> 2], b(t, o))), r = e + 8 | 0), r
                  }

                  function w(e, t) {
                    var n = 0,
                      r = 0,
                      o = 0,
                      a = 0;
                    i[e + 16 >> 2] = 0, i[e + 20 >> 2] = 0, a = e, r = 0, (n = t >>> 8) && (r = 31, t >>> 0 > 16777215 || (r = 62 + ((t >>> (6 - (n = c(n)) & 31) & 1) - (n << 1) | 0) | 0)), o = r, i[a + 28 >> 2] = o, a = 1051356 + (o << 2) | 0;
                    e: {
                      t: {
                        n: {
                          r: {
                            if ((r = 1 << (31 & o)) & (n = i[262772])) {
                              if (n = i[a >> 2], (-8 & i[n + 4 >> 2]) != (0 | t)) break r;
                              r = n;
                              break n
                            }
                            i[262772] = n | r,
                            i[a >> 2] = e,
                            i[e + 24 >> 2] = a;
                            break e
                          }
                          for (o = t << (31 == (0 | o) ? 0 : 25 - (o >>> 1) & 31);;) {
                            if (!(r = i[(a = 16 + ((o >>> 29 & 4) + n | 0) | 0) >> 2])) break t;
                            if (o <<= 1, (-8 & i[(n = r) + 4 >> 2]) == (0 | t)) break
                          }
                        }
                        return t = i[r + 8 >> 2],
                        i[t + 12 >> 2] = e,
                        i[r + 8 >> 2] = e,
                        i[e + 24 >> 2] = 0,
                        i[e + 12 >> 2] = r,
                        void(i[e + 8 >> 2] = t)
                      }
                      i[a >> 2] = e,
                      i[e + 24 >> 2] = n
                    }
                    i[e + 12 >> 2] = e, i[e + 8 >> 2] = e
                  }

                  function y(e, t, n) {
                    var a, s = 0,
                      l = 0;
                    u = a = u - 80 | 0, o[e + 96 | 0] || (i[a + 76 >> 2] = e + 8, function (e, t) {
                      var n;
                      if (u = n = u - 16 | 0, R(n + 8 | 0, e, 1), i[n + 12 >> 2]) return r[i[n + 8 >> 2]] = 128, 64 - i[e >> 2] >>> 0 < 8 && (Q(e, 64), O(n, e), E(i[t >> 2], i[n >> 2], i[n + 4 >> 2])), Q(e, 56), void(u = n + 16 | 0);
                      T(1049536, 0, 0), A()
                    }(s = e + 28 | 0, a + 76 | 0), R(a - -64 | 0, s, 4), F(i[a + 64 >> 2], i[a + 68 >> 2], i[e + 4 >> 2]), R(a + 56 | 0, s, 4), F(i[a + 56 >> 2], i[a + 60 >> 2], i[e >> 2]), l = i[a + 76 >> 2], O(a + 48 | 0, s), E(l, i[a + 48 >> 2], i[a + 52 >> 2]), r[e + 96 | 0] = 1), j(a + 40 | 0, t, n, 0, 4), F(i[a + 40 >> 2], i[a + 44 >> 2], i[e + 8 >> 2]), j(a + 32 | 0, t, n, 4, 8), F(i[a + 32 >> 2], i[a + 36 >> 2], i[e + 12 >> 2]), j(a + 24 | 0, t, n, 8, 12), F(i[a + 24 >> 2], i[a + 28 >> 2], i[e + 16 >> 2]), j(a + 16 | 0, t, n, 12, 16), F(i[a + 16 >> 2], i[a + 20 >> 2], i[e + 20 >> 2]), j(a + 8 | 0, t, n, 16, 20), F(i[a + 8 >> 2], i[a + 12 >> 2], i[e + 24 >> 2]), u = a + 80 | 0
                  }

                  function C(e) {
                    var t, n = 0,
                      r = 0,
                      o = 0,
                      a = 0,
                      s = 0,
                      l = 0;
                    t = i[e + 24 >> 2];
                    e: {
                      t: {
                        if ((0 | e) == (0 | (n = i[e + 12 >> 2]))) {
                          if (o = i[(n = e + 20 | 0) >> 2], r = i[(o ? 20 : 16) + e >> 2]) break t;
                          n = 0;
                          break e
                        }
                        r = i[e + 8 >> 2],
                        i[r + 12 >> 2] = n,
                        i[n + 8 >> 2] = r;
                        break e
                      }
                      for (o = o ? n : e + 16 | 0; a = o, (r = i[(o = (n = r) + 20 | 0) >> 2]) || (o = n + 16 | 0, r = i[n + 16 >> 2]), r;);i[a >> 2] = 0
                    }
                    e: if (t) {
                      r = 1051356 + (i[e + 28 >> 2] << 2) | 0;
                      t: {
                        if ((0 | e) == i[r >> 2]) {
                          if (i[r >> 2] = n, n) break t;
                          return s = 1051088, l = i[262772] & Ce(-2, i[e + 28 >> 2]), void(i[s >> 2] = l)
                        }
                        if (i[(i[t + 16 >> 2] == (0 | e) ? 16 : 20) + t >> 2] = n, !n) break e
                      }
                      i[n + 24 >> 2] = t, (r = i[e + 16 >> 2]) && (i[n + 16 >> 2] = r, i[r + 24 >> 2] = n), (e = i[e + 20 >> 2]) && (i[n + 20 >> 2] = e, i[e + 24 >> 2] = n)
                    }
                  }

                  function x(e, t, n, r) {
                    var o, a, s = 0,
                      l = 0,
                      c = 0;
                    u = o = u + -64 | 0, l = 1, s = i[r + 12 >> 2], c = i[r + 8 >> 2], a = i[r + 4 >> 2], r = i[r >> 2];
                    e: {
                      t: {
                        if (1 == i[262884]) {
                          if (l = i[262885] + 1 | 0, i[262885] = l, l >>> 0 > 2) break t
                        } else i[262884] = 1,
                        i[262885] = 1;
                        if (ee(o + 48 | 0, r, a, c, s), s = i[4 + (r = o + 56 | 0) >> 2], i[(c = o + 36 | 0) >> 2] = i[r >> 2], i[c + 4 >> 2] = s, i[o + 24 >> 2] = n, i[o + 20 >> 2] = 1049892, i[o + 16 >> 2] = 1, n = i[o + 52 >> 2], i[o + 28 >> 2] = i[o + 48 >> 2], i[o + 32 >> 2] = n, !((0 | (n = i[262768])) <= -1) && (n = n + 1 | 0, i[262768] = n, (r = i[262770]) && (n = i[262769], xe[i[t + 16 >> 2]](o + 8 | 0, e), s = i[o + 12 >> 2], i[o + 16 >> 2] = i[o + 8 >> 2], i[o + 20 >> 2] = s, xe[i[r + 12 >> 2]](n, o + 16 | 0), n = i[262768]), i[262768] = n + -1, l >>> 0 <= 1)) break e
                      }
                      A()
                    }
                    u = n = u - 16 | 0, i[n + 12 >> 2] = t, i[n + 8 >> 2] = e, A()
                  }

                  function E(e, t, n) {
                    var r;
                    if (u = r = u - 96 | 0, i[r + 4 >> 2] = n, 64 == (0 | n)) return K(r + 32 | 0, 64),
                      function (e, t) {
                        var n = 0,
                          r = 0;
                        for (r = 16; r;) n = o[0 | t] | o[t + 1 | 0] << 8 | o[t + 2 | 0] << 16 | o[t + 3 | 0] << 24, i[e >> 2] = n << 24 | n << 8 & 16711680 | n >>> 8 & 65280 | n >>> 24, r = r + -1 | 0, t = t + 4 | 0, e = e + 4 | 0
                      }(r + 32 | 0, t),
                      function (e, t) {
                        var n, r = 0,
                          o = 0,
                          a = 0,
                          s = 0,
                          l = 0,
                          c = 0,
                          A = 0,
                          f = 0,
                          d = 0,
                          p = 0,
                          g = 0,
                          h = 0,
                          _ = 0,
                          b = 0,
                          m = 0,
                          w = 0,
                          y = 0,
                          C = 0,
                          x = 0,
                          E = 0,
                          B = 0,
                          S = 0,
                          I = 0,
                          k = 0,
                          T = 0;
                        u = n = u + -64 | 0, d = i[t >> 2], l = i[t + 4 >> 2], c = i[t + 8 >> 2], A = i[t + 12 >> 2], _ = i[e >> 2], p = i[e + 8 >> 2], f = i[e + 4 >> 2], i[n + 44 >> 2] = i[e + 12 >> 2], i[n + 36 >> 2] = f, i[n + 40 >> 2] = p, i[n + 32 >> 2] = _, i[n + 60 >> 2] = A, i[n + 56 >> 2] = c, i[n + 52 >> 2] = l, i[n + 48 >> 2] = d + i[e + 16 >> 2], v(n, n + 32 | 0, n + 48 | 0, 0), b = i[t + 16 >> 2], g = i[t + 20 >> 2], x = i[t + 24 >> 2], m = i[t + 28 >> 2], a = i[4 + (f = n + 8 | 0) >> 2], i[(o = p = n + 40 | 0) >> 2] = i[f >> 2], i[o + 4 >> 2] = a, o = i[n + 4 >> 2], i[n + 32 >> 2] = i[n >> 2], i[n + 36 >> 2] = o, i[n + 60 >> 2] = m, i[n + 56 >> 2] = x, i[n + 52 >> 2] = g, k = n, T = Ce(_, 30) + b | 0, i[k + 48 >> 2] = T, v(n + 16 | 0, n + 32 | 0, n + 48 | 0, 0), s = i[n + 16 >> 2], _ = i[n + 20 >> 2], o = i[n + 24 >> 2], a = i[t + 32 >> 2], w = i[t + 36 >> 2], y = i[t + 40 >> 2], C = i[t + 44 >> 2], i[n + 44 >> 2] = i[n + 28 >> 2], i[n + 36 >> 2] = _, i[n + 40 >> 2] = o, i[n + 32 >> 2] = s, i[n + 60 >> 2] = C, i[n + 56 >> 2] = y, i[n + 52 >> 2] = w, k = n, T = Ce(i[n >> 2], 30) + a | 0, i[k + 48 >> 2] = T, v(n + 16 | 0, n + 32 | 0, n + 48 | 0, 0), h = i[4 + (o = _ = n + 24 | 0) >> 2], E = i[o >> 2], i[f >> 2] = E, i[f + 4 >> 2] = h, r = i[n + 20 >> 2], B = i[n + 16 >> 2], i[n >> 2] = B, i[n + 4 >> 2] = r, S = i[t + 48 >> 2], o = i[t + 52 >> 2], I = i[t + 56 >> 2], t = i[t + 60 >> 2], i[p >> 2] = E, i[p + 4 >> 2] = h, i[n + 32 >> 2] = B, i[n + 36 >> 2] = r, i[n + 60 >> 2] = t, i[n + 56 >> 2] = I, i[n + 52 >> 2] = o, k = n, T = Ce(s, 30) + S | 0, i[k + 48 >> 2] = T, v(n + 16 | 0, n + 32 | 0, n + 48 | 0, 0), h = i[n + 16 >> 2], s = i[n + 20 >> 2], r = i[n + 24 >> 2], i[n + 44 >> 2] = i[n + 28 >> 2], i[n + 36 >> 2] = s, i[n + 40 >> 2] = r, i[n + 32 >> 2] = h, r = Ce(i[n >> 2], 30), d = Ce(o ^ a ^ d ^ c, 1), i[n + 48 >> 2] = r + d, s = Ce(d ^ C ^ A ^ g, 1), i[n + 60 >> 2] = s, c = Ce(t ^ y ^ c ^ b, 1), i[n + 56 >> 2] = c, A = Ce(I ^ w ^ l ^ A, 1), i[n + 52 >> 2] = A, v(n + 16 | 0, n + 32 | 0, n + 48 | 0, 0), l = i[_ + 4 >> 2], E = i[_ >> 2], i[f >> 2] = E, i[f + 4 >> 2] = l, r = i[n + 20 >> 2], B = i[n + 16 >> 2], i[n >> 2] = B, i[n + 4 >> 2] = r, i[p >> 2] = E, i[p + 4 >> 2] = l, i[n + 32 >> 2] = B, i[n + 36 >> 2] = r, r = Ce(h, 30), b = Ce(A ^ S ^ b ^ x, 1), i[n + 48 >> 2] = r + b, x = Ce(s ^ I ^ a ^ x, 1), i[n + 56 >> 2] = x, l = Ce(b ^ t ^ m ^ w, 1), i[n + 60 >> 2] = l, g = Ce(c ^ o ^ g ^ m, 1), i[n + 52 >> 2] = g, v(n + 16 | 0, n + 32 | 0, n + 48 | 0, 1), h = i[n + 16 >> 2], m = i[n + 20 >> 2], r = i[n + 24 >> 2], i[n + 44 >> 2] = i[n + 28 >> 2], i[n + 36 >> 2] = m, i[n + 40 >> 2] = r, i[n + 32 >> 2] = h, r = Ce(i[n >> 2], 30), a = Ce(g ^ d ^ a ^ y, 1), i[n + 48 >> 2] = r + a, y = Ce(l ^ c ^ y ^ S, 1), i[n + 56 >> 2] = y, m = Ce(a ^ s ^ o ^ C, 1), i[n + 60 >> 2] = m, w = Ce(x ^ A ^ C ^ w, 1), i[n + 52 >> 2] = w, v(n + 16 | 0, n + 32 | 0, n + 48 | 0, 1), C = i[_ + 4 >> 2], E = i[_ >> 2], i[f >> 2] = E, i[f + 4 >> 2] = C, r = i[n + 20 >> 2], B = i[n + 16 >> 2], i[n >> 2] = B, i[n + 4 >> 2] = r, i[p >> 2] = E, i[p + 4 >> 2] = C, i[n + 32 >> 2] = B, i[n + 36 >> 2] = r, r = Ce(h, 30), C = Ce(w ^ b ^ I ^ S, 1), i[n + 48 >> 2] = r + C, I = Ce(m ^ x ^ d ^ I, 1), i[n + 56 >> 2] = I, S = Ce(C ^ l ^ t ^ A, 1), i[n + 60 >> 2] = S, t = Ce(y ^ g ^ t ^ o, 1), i[n + 52 >> 2] = t, v(n + 16 | 0, n + 32 | 0, n + 48 | 0, 1), h = i[n + 16 >> 2], o = i[n + 20 >> 2], r = i[n + 24 >> 2], i[n + 44 >> 2] = i[n + 28 >> 2], i[n + 36 >> 2] = o, i[n + 40 >> 2] = r, i[n + 32 >> 2] = h, r = Ce(i[n >> 2], 30), o = Ce(t ^ a ^ d ^ c, 1), i[n + 48 >> 2] = r + o, d = Ce(o ^ m ^ s ^ g, 1), i[n + 60 >> 2] = d, c = Ce(S ^ y ^ c ^ b, 1), i[n + 56 >> 2] = c, s = Ce(I ^ w ^ s ^ A, 1), i[n + 52 >> 2] = s, v(n + 16 | 0, n + 32 | 0, n + 48 | 0, 1), A = i[_ + 4 >> 2], E = i[_ >> 2], i[f >> 2] = E, i[f + 4 >> 2] = A, r = i[n + 20 >> 2], B = i[n + 16 >> 2], i[n >> 2] = B, i[n + 4 >> 2] = r, i[p >> 2] = E, i[p + 4 >> 2] = A, i[n + 32 >> 2] = B, i[n + 36 >> 2] = r, r = Ce(h, 30), A = Ce(s ^ C ^ b ^ x, 1), i[n + 48 >> 2] = r + A, b = Ce(d ^ I ^ a ^ x, 1), i[n + 56 >> 2] = b, x = Ce(A ^ S ^ l ^ w, 1), i[n + 60 >> 2] = x, l = Ce(c ^ t ^ l ^ g, 1), i[n + 52 >> 2] = l, v(n + 16 | 0, n + 32 | 0, n + 48 | 0, 1), h = i[n + 16 >> 2], g = i[n + 20 >> 2], r = i[n + 24 >> 2], i[n + 44 >> 2] = i[n + 28 >> 2], i[n + 36 >> 2] = g, i[n + 40 >> 2] = r, i[n + 32 >> 2] = h, r = Ce(i[n >> 2], 30), a = Ce(l ^ o ^ a ^ y, 1), i[n + 48 >> 2] = r + a, y = Ce(x ^ c ^ C ^ y, 1), i[n + 56 >> 2] = y, g = Ce(a ^ d ^ t ^ m, 1), i[n + 60 >> 2] = g, w = Ce(b ^ s ^ m ^ w, 1), i[n + 52 >> 2] = w, v(n + 16 | 0, n + 32 | 0, n + 48 | 0, 2), m = i[_ + 4 >> 2], E = i[_ >> 2], i[f >> 2] = E, i[f + 4 >> 2] = m, r = i[n + 20 >> 2], B = i[n + 16 >> 2], i[n >> 2] = B, i[n + 4 >> 2] = r, i[p >> 2] = E, i[p + 4 >> 2] = m, i[n + 32 >> 2] = B, i[n + 36 >> 2] = r, r = Ce(h, 30), C = Ce(w ^ A ^ I ^ C, 1), i[n + 48 >> 2] = r + C, I = Ce(g ^ b ^ o ^ I, 1), i[n + 56 >> 2] = I, m = Ce(C ^ x ^ s ^ S, 1), i[n + 60 >> 2] = m, t = Ce(y ^ l ^ t ^ S, 1), i[n + 52 >> 2] = t, v(n + 16 | 0, n + 32 | 0, n + 48 | 0, 2), h = i[n + 16 >> 2], S = i[n + 20 >> 2], r = i[n + 24 >> 2], i[n + 44 >> 2] = i[n + 28 >> 2], i[n + 36 >> 2] = S, i[n + 40 >> 2] = r, i[n + 32 >> 2] = h, r = Ce(i[n >> 2], 30), o = Ce(t ^ a ^ o ^ c, 1), i[n + 48 >> 2] = r + o, S = Ce(o ^ g ^ l ^ d, 1), i[n + 60 >> 2] = S, c = Ce(m ^ y ^ A ^ c, 1), i[n + 56 >> 2] = c, d = Ce(I ^ w ^ s ^ d, 1), i[n + 52 >> 2] = d, v(n + 16 | 0, n + 32 | 0, n + 48 | 0, 2), s = i[_ + 4 >> 2], E = i[_ >> 2], i[f >> 2] = E, i[f + 4 >> 2] = s, r = i[n + 20 >> 2], B = i[n + 16 >> 2], i[n >> 2] = B, i[n + 4 >> 2] = r, i[p >> 2] = E, i[p + 4 >> 2] = s, i[n + 32 >> 2] = B, i[n + 36 >> 2] = r, r = Ce(h, 30), s = Ce(d ^ C ^ A ^ b, 1), i[n + 48 >> 2] = r + s, A = Ce(S ^ I ^ a ^ b, 1), i[n + 56 >> 2] = A, b = Ce(s ^ m ^ x ^ w, 1), i[n + 60 >> 2] = b, x = Ce(c ^ t ^ l ^ x, 1), i[n + 52 >> 2] = x, v(n + 16 | 0, n + 32 | 0, n + 48 | 0, 2), h = i[n + 16 >> 2], l = i[n + 20 >> 2], r = i[n + 24 >> 2], i[n + 44 >> 2] = i[n + 28 >> 2], i[n + 36 >> 2] = l, i[n + 40 >> 2] = r, i[n + 32 >> 2] = h, r = Ce(i[n >> 2], 30), a = Ce(x ^ o ^ a ^ y, 1), i[n + 48 >> 2] = r + a, y = Ce(b ^ c ^ C ^ y, 1), i[n + 56 >> 2] = y, l = Ce(a ^ S ^ t ^ g, 1), i[n + 60 >> 2] = l, w = Ce(A ^ d ^ g ^ w, 1), i[n + 52 >> 2] = w, v(n + 16 | 0, n + 32 | 0, n + 48 | 0, 2), g = i[_ + 4 >> 2], E = i[_ >> 2], i[f >> 2] = E, i[f + 4 >> 2] = g, r = i[n + 20 >> 2], B = i[n + 16 >> 2], i[n >> 2] = B, i[n + 4 >> 2] = r, i[p >> 2] = E, i[p + 4 >> 2] = g, i[n + 32 >> 2] = B, i[n + 36 >> 2] = r, r = Ce(h, 30), C = Ce(w ^ s ^ I ^ C, 1), i[n + 48 >> 2] = r + C, I = Ce(l ^ A ^ o ^ I, 1), i[n + 56 >> 2] = I, g = Ce(C ^ b ^ d ^ m, 1), i[n + 60 >> 2] = g, t = Ce(y ^ x ^ t ^ m, 1), i[n + 52 >> 2] = t, v(n + 16 | 0, n + 32 | 0, n + 48 | 0, 3), m = i[n + 16 >> 2], h = i[n + 20 >> 2], r = i[n + 24 >> 2], i[n + 44 >> 2] = i[n + 28 >> 2], i[n + 36 >> 2] = h, i[n + 40 >> 2] = r, i[n + 32 >> 2] = m, r = Ce(i[n >> 2], 30), o = Ce(t ^ a ^ o ^ c, 1), i[n + 48 >> 2] = r + o, h = Ce(o ^ l ^ x ^ S, 1), i[n + 60 >> 2] = h, c = Ce(g ^ y ^ s ^ c, 1), i[n + 56 >> 2] = c, S = Ce(I ^ w ^ d ^ S, 1), i[n + 52 >> 2] = S, v(n + 16 | 0, n + 32 | 0, n + 48 | 0, 3), d = i[_ + 4 >> 2], E = i[_ >> 2], i[f >> 2] = E, i[f + 4 >> 2] = d, r = i[n + 20 >> 2], B = i[n + 16 >> 2], i[n >> 2] = B, i[n + 4 >> 2] = r, i[p >> 2] = E, i[p + 4 >> 2] = d, i[n + 32 >> 2] = B, i[n + 36 >> 2] = r, r = Ce(m, 30), d = Ce(S ^ C ^ s ^ A, 1), i[n + 48 >> 2] = r + d, s = Ce(h ^ I ^ a ^ A, 1), i[n + 56 >> 2] = s, A = Ce(d ^ g ^ b ^ w, 1), i[n + 60 >> 2] = A, b = Ce(c ^ t ^ b ^ x, 1), i[n + 52 >> 2] = b, v(n + 16 | 0, n + 32 | 0, n + 48 | 0, 3), x = i[n + 16 >> 2], m = i[n + 20 >> 2], r = i[n + 24 >> 2], i[n + 44 >> 2] = i[n + 28 >> 2], i[n + 36 >> 2] = m, i[n + 40 >> 2] = r, i[n + 32 >> 2] = x, r = Ce(i[n >> 2], 30), a = Ce(b ^ o ^ a ^ y, 1), i[n + 48 >> 2] = r + a, y = Ce(A ^ c ^ C ^ y, 1), i[n + 56 >> 2] = y, c = Ce(a ^ h ^ t ^ l, 1), i[n + 60 >> 2] = c, w = Ce(s ^ S ^ l ^ w, 1), i[n + 52 >> 2] = w, v(n + 16 | 0, n + 32 | 0, n + 48 | 0, 3), a = i[_ + 4 >> 2], _ = i[_ >> 2], i[f >> 2] = _, i[f + 4 >> 2] = a, f = i[n + 20 >> 2], l = i[n + 16 >> 2], i[n >> 2] = l, i[n + 4 >> 2] = f, i[p >> 2] = _, i[p + 4 >> 2] = a, i[n + 32 >> 2] = l, i[n + 36 >> 2] = f, p = Ce(w ^ d ^ I ^ C, 1), k = n, T = Ce(p ^ A ^ g ^ S, 1), i[k + 60 >> 2] = T, k = n, T = Ce(c ^ s ^ o ^ I, 1), i[k + 56 >> 2] = T, k = n, T = Ce(y ^ b ^ t ^ g, 1), i[k + 52 >> 2] = T, k = n, T = Ce(x, 30) + p | 0, i[k + 48 >> 2] = T, v(n + 16 | 0, n + 32 | 0, n + 48 | 0, 3), t = i[n + 28 >> 2], p = i[n + 24 >> 2], f = i[n + 20 >> 2], i[e >> 2] = i[e >> 2] + i[n + 16 >> 2], i[e + 4 >> 2] = f + i[e + 4 >> 2], i[e + 8 >> 2] = p + i[e + 8 >> 2], i[e + 12 >> 2] = t + i[e + 12 >> 2], k = e, T = i[e + 16 >> 2] + Ce(i[n >> 2], 30) | 0, i[k + 16 >> 2] = T, u = n - -64 | 0
                      }(e, r + 32 | 0), void(u = r + 96 | 0);
                    i[r + 20 >> 2] = 1, i[r + 52 >> 2] = 2, i[r + 36 >> 2] = 3, i[r + 40 >> 2] = 0, i[r + 32 >> 2] = 1049776, i[r + 12 >> 2] = 1, i[r + 24 >> 2] = r + 4, i[r + 28 >> 2] = 1049712, i[r + 48 >> 2] = r + 8, i[r + 16 >> 2] = r + 28, i[r + 8 >> 2] = r + 24,
                      function (e) {
                        var t, n, r, o;
                        u = t = u - 48 | 0, ee(t + 32 | 0, i[262450], i[262451], i[262452], i[262453]), o = i[4 + (n = t + 40 | 0) >> 2], i[(r = t + 20 | 0) >> 2] = i[n >> 2], i[r + 4 >> 2] = o, i[t + 8 >> 2] = e, i[t + 4 >> 2] = 1049892, i[t >> 2] = 1, e = i[t + 36 >> 2], i[t + 12 >> 2] = i[t + 32 >> 2], i[t + 16 >> 2] = e, k(t), A()
                      }(r + 32 | 0), A()
                  }

                  function B(e, t, n) {
                    var r, o, a = 0,
                      s = 0,
                      l = 0,
                      c = 0,
                      A = 0;
                    r = (((s = i[t + 12 >> 2]) ^ (a = i[t + 8 >> 2]) ^ (l = i[t + 4 >> 2])) + Ce(t = i[t >> 2], 5) | 0) + i[n >> 2] | 0, o = Ce(r, 30), i[e + 12 >> 2] = o, s = ((s + (a ^ (l = Ce(l, 30)) ^ t) | 0) + i[n + 4 >> 2] | 0) + Ce(r, 5) | 0, c = e, A = Ce(s, 30), i[c + 8 >> 2] = A, a = ((a = a + i[n + 8 >> 2] | 0) + ((t = Ce(t, 30)) ^ l ^ r) | 0) + Ce(s, 5) | 0, i[e + 4 >> 2] = a, c = e, A = ((l + i[n + 12 >> 2] | 0) + (s ^ t ^ o) | 0) + Ce(a, 5) | 0, i[c >> 2] = A
                  }

                  function S(e, t) {
                    var n = 0,
                      r = 0;
                    e: {
                      t: {
                        if ((n = i[e + 4 >> 2]) - (r = i[e + 8 >> 2]) >>> 0 < t >>> 0) {
                          if ((t = t + r | 0) >>> 0 < r >>> 0) break e;
                          if ((0 | (t = (r = n << 1) >>> 0 > t >>> 0 ? r : t)) < 0) break e;
                          if (!(n = n ? ie(i[e >> 2], n, 1, t) : le(t, 1))) break t;
                          i[e + 4 >> 2] = t, i[e >> 2] = n
                        }
                        return
                      }
                      de(t, 1),
                      A()
                    }
                    ge(), A()
                  }

                  function I(e, t, n, r) {
                    var o;
                    u = o = u + -64 | 0, i[o + 12 >> 2] = t, i[o + 8 >> 2] = e, i[o + 20 >> 2] = r, i[o + 16 >> 2] = n, i[o + 44 >> 2] = 2, i[o + 60 >> 2] = 43, i[o + 28 >> 2] = 2, i[o + 32 >> 2] = 0, i[o + 24 >> 2] = 1050524, i[o + 52 >> 2] = 42, i[o + 40 >> 2] = o + 48, i[o + 56 >> 2] = o + 16, i[o + 48 >> 2] = o + 8, V(o + 24 | 0, 1050564), A()
                  }

                  function k(e) {
                    var t, n, r, o, a = 0,
                      s = 0;
                    u = t = u - 48 | 0, n = ae(e + 12 | 0), r = ae(i[e + 8 >> 2]), s = i[n + 4 >> 2], i[(a = t + 8 | 0) >> 2] = i[n >> 2], i[a + 4 >> 2] = s, s = i[t + 12 >> 2], a = i[t + 8 >> 2], o = i[n + 8 >> 2], i[t + 28 >> 2] = i[n + 12 >> 2], i[t + 24 >> 2] = o, i[t + 16 >> 2] = a, i[t + 20 >> 2] = s, i[t + 36 >> 2] = 0, i[t + 32 >> 2] = r, x(t + 32 | 0, 1050008, i[e + 8 >> 2], t + 16 | 0), A()
                  }

                  function T(e, t, n) {
                    var r;
                    u = r = u - 48 | 0, i[r + 4 >> 2] = n, i[r >> 2] = t, i[r + 28 >> 2] = 2, i[r + 44 >> 2] = 40, i[r + 12 >> 2] = 2, i[r + 16 >> 2] = 0, i[r + 8 >> 2] = 1050392, i[r + 36 >> 2] = 40, i[r + 24 >> 2] = r + 32, i[r + 40 >> 2] = r, i[r + 32 >> 2] = r + 4, V(r + 8 | 0, e), A()
                  }

                  function D(e, t) {
                    var n;
                    u = n = u - 48 | 0, i[n + 4 >> 2] = t, i[n >> 2] = e, i[n + 28 >> 2] = 2, i[n + 44 >> 2] = 40, i[n + 12 >> 2] = 2, i[n + 16 >> 2] = 0, i[n + 8 >> 2] = 1050644, i[n + 36 >> 2] = 40, i[n + 24 >> 2] = n + 32, i[n + 40 >> 2] = n + 4, i[n + 32 >> 2] = n, V(n + 8 | 0, 1050660), A()
                  }

                  function L(e, t) {
                    var n;
                    u = n = u - 48 | 0, i[n + 4 >> 2] = t, i[n >> 2] = e, i[n + 28 >> 2] = 2, i[n + 44 >> 2] = 40, i[n + 12 >> 2] = 2, i[n + 16 >> 2] = 0, i[n + 8 >> 2] = 1050712, i[n + 36 >> 2] = 40, i[n + 24 >> 2] = n + 32, i[n + 40 >> 2] = n + 4, i[n + 32 >> 2] = n, V(n + 8 | 0, 1050728), A()
                  }

                  function Q(e, t) {
                    var n, r;
                    if (u = n = u - 16 | 0, (r = i[e >> 2]) >>> 0 <= t >>> 0) return j(n + 8 | 0, e + 4 | 0, 64, r, t), K(i[n + 8 >> 2], i[n + 12 >> 2]), i[e >> 2] = t, void(u = n + 16 | 0);
                    $(1049568, 40, 1049552), A()
                  }

                  function M(e) {
                    var t;
                    for (u = t = u - 32 | 0, i[t + 24 >> 2] = e; P(t + 16 | 0, t + 24 | 0), 1 & r[t + 16 | 0];);
                    ce(t + 8 | 0, i[e >> 2], i[e + 4 >> 2]), e = i[t + 12 >> 2], i[t + 24 >> 2] = i[t + 8 >> 2], i[t + 28 >> 2] = e, te(t + 24 | 0), u = t + 32 | 0
                  }

                  function W(e) {
                    var t, n, r, o, a, s;
                    u = t = u - 48 | 0, n = i[e + 8 >> 2], r = i[e + 12 >> 2], o = i[e + 16 >> 2], a = i[e + 20 >> 2], s = i[e >> 2], e = i[e + 4 >> 2], i[t + 16 >> 2] = 4, i[t + 20 >> 2] = 0, i[t + 4 >> 2] = 1, i[t + 8 >> 2] = 0, i[t + 24 >> 2] = s, i[t + 28 >> 2] = e, i[t >> 2] = t + 24, i[t + 40 >> 2] = o, i[t + 44 >> 2] = a, i[t + 32 >> 2] = n, i[t + 36 >> 2] = r, V(t, t + 32 | 0), A()
                  }

                  function O(e, t) {
                    var n;
                    if (u = n = u - 16 | 0, 64 == i[t >> 2]) return i[t >> 2] = 0, X(n + 8 | 0, t + 4 | 0, 64, 64), t = i[n + 12 >> 2], i[e >> 2] = i[n + 8 >> 2], i[e + 4 >> 2] = t, void(u = n + 16 | 0);
                    $(1049608, 39, 1049552), A()
                  }

                  function N(e, t, n, r) {
                    var o = 0;
                    if (1114112 == (0 | t) || (o = 1, !xe[i[i[e + 28 >> 2] + 16 >> 2]](i[e + 24 >> 2], t))) {
                      if (!n) return 0;
                      o = 0 | xe[i[i[e + 28 >> 2] + 12 >> 2]](i[e + 24 >> 2], n, r)
                    }
                    return o
                  }

                  function F(e, t, n) {
                    if (4 == (0 | t)) return t = n << 8 & 16711680 | n << 24 | n >>> 8 & 65280 | n >>> 24, r[0 | e] = t, r[e + 1 | 0] = t >>> 8, r[e + 2 | 0] = t >>> 16, void(r[e + 3 | 0] = t >>> 24);
                    $(1049304, 32, 1049288), A()
                  }

                  function R(e, t, n) {
                    var r, o = 0;
                    u = r = u - 16 | 0, o = (o = n) + (n = i[t >> 2]) | 0, i[t >> 2] = o, j(r + 8 | 0, t + 4 | 0, 64, n, o), t = i[r + 12 >> 2], i[e >> 2] = i[r + 8 >> 2], i[e + 4 >> 2] = t, u = r + 16 | 0
                  }

                  function P(e, t) {
                    var n = 0,
                      a = 0;
                    t = i[t >> 2], a = 0, (0 | (n = i[t + 8 >> 2])) != i[t + 12 >> 2] && (i[t + 8 >> 2] = n + 1, t = o[0 | n], a = 1), n = a, r[e + 1 | 0] = t, r[0 | e] = n
                  }

                  function G(e, t, n) {
                    var o;
                    u = o = u - 16 | 0, i[o + 8 >> 2] = 0, i[o >> 2] = 1, i[o + 4 >> 2] = 0, ue(o, n - t >>> 2),
                      function (e, t, n) {
                        var o, a = 0,
                          s = 0,
                          l = 0;
                        for (u = o = u - 16 | 0;
                          (0 | e) != (0 | t);) a = e + 4 | 0, (e = i[e >> 2]) >>> 0 >= 128 ? (i[o + 12 >> 2] = 0, s = n, l = o + 12 | 0, e >>> 0 <= 2047 ? (r[o + 13 | 0] = 63 & e | 128, r[o + 12 | 0] = e >>> 6 & 31 | 192, e = 2) : e >>> 0 <= 65535 ? (r[o + 14 | 0] = 63 & e | 128, r[o + 13 | 0] = e >>> 6 & 63 | 128, r[o + 12 | 0] = e >>> 12 & 15 | 224, e = 3) : (r[o + 15 | 0] = 63 & e | 128, r[o + 12 | 0] = e >>> 18 | 240, r[o + 14 | 0] = e >>> 6 & 63 | 128, r[o + 13 | 0] = e >>> 12 & 63 | 128, e = 4), se(s, l, e), e = a) : (i[n + 8 >> 2] == i[n + 4 >> 2] && ue(n, 1), r[i[n >> 2] + i[n + 8 >> 2] | 0] = e, i[n + 8 >> 2] = i[n + 8 >> 2] + 1, e = a);
                        u = o + 16 | 0
                      }(t, n, o), i[e + 8 >> 2] = i[o + 8 >> 2], t = i[o + 4 >> 2], i[e >> 2] = i[o >> 2], i[e + 4 >> 2] = t, u = o + 16 | 0
                  }

                  function j(e, t, n, r, o) {
                    e: {
                      if (o >>> 0 >= r >>> 0) {
                        if (n >>> 0 < o >>> 0) break e;
                        return i[e + 4 >> 2] = o - r, void(i[e >> 2] = t + r)
                      }
                      L(r, o),
                      A()
                    }
                    D(o, n),
                    A()
                  }

                  function V(e, t) {
                    var n, r, o, a, s;
                    u = n = u - 32 | 0, o = i[t >> 2], a = i[t + 4 >> 2], s = i[t + 12 >> 2], i[(r = n + 20 | 0) >> 2] = i[t + 8 >> 2], i[r + 4 >> 2] = s, i[n + 12 >> 2] = o, i[n + 16 >> 2] = a, i[n + 8 >> 2] = e, i[n + 4 >> 2] = 1050324, i[n >> 2] = 1, k(n), A()
                  }

                  function U(e) {
                    var t, n;
                    e |= 0, u = t = u - 16 | 0,
                      function (e) {
                        var t, n = 0;
                        u = t = u - 32 | 0, i[4 + (n = t + 8 | 0) >> 2] = 0, i[n >> 2] = 1, i[t + 24 >> 2] = 0, n = i[t + 12 >> 2], i[t + 16 >> 2] = i[t + 8 >> 2], i[t + 20 >> 2] = n, se(t + 16 | 0, 1049136, 0), i[e + 8 >> 2] = i[t + 24 >> 2], n = i[t + 20 >> 2], i[e >> 2] = i[t + 16 >> 2], i[e + 4 >> 2] = n, u = t + 32 | 0
                      }(t), i[e >> 2] = 0, n = i[t + 4 >> 2], i[e + 4 >> 2] = i[t >> 2], i[e + 8 >> 2] = n, i[e + 12 >> 2] = i[t + 8 >> 2], u = t + 16 | 0
                  }

                  function J(e, t, n, r, o) {
                    e: {
                      if (n >>> 0 >= t >>> 0) {
                        if (o >>> 0 >= n >>> 0) break e;
                        D(n, o), A()
                      }
                      L(t, n),
                      A()
                    }
                    i[e + 4 >> 2] = n - t,
                    i[e >> 2] = t + r
                  }

                  function Y(e, t, n) {
                    var r;
                    u = r = u - 32 | 0, re(r + 16 | 0, t, n, n), H(r + 8 | 0, r + 16 | 0), t = i[r + 12 >> 2], i[e >> 2] = i[r + 8 >> 2], i[e + 4 >> 2] = t, u = r + 32 | 0
                  }

                  function Z(e, t, n) {
                    var i = 0;
                    if (n)
                      for (i = e; r[0 | i] = o[0 | t], i = i + 1 | 0, t = t + 1 | 0, n = n + -1 | 0;);
                    return e
                  }

                  function H(e, t) {
                    var n, r;
                    u = n = u - 16 | 0, (0 | (r = i[t + 8 >> 2])) != i[t + 4 >> 2] && function (e, t) {
                        var n = 0;
                        e: {
                          t: {
                            n: {
                              if ((n = i[e + 4 >> 2]) >>> 0 >= t >>> 0) {
                                if (t) {
                                  if ((0 | t) == (0 | n)) break e;
                                  if (n = ie(i[e >> 2], n, 1, t)) break n;
                                  de(t, 1), A()
                                }
                                te(e), i[e >> 2] = 1, t = 0;
                                break t
                              }
                              W(1048636),
                              A()
                            }
                            i[e >> 2] = n
                          }
                          i[e + 4 >> 2] = t
                        }
                      }(t, r),
                      function (e, t, n) {
                        var r;
                        u = r = u - 16 | 0, i[r + 12 >> 2] = n, i[r + 8 >> 2] = t, i[e >> 2] = i[r + 8 >> 2], i[e + 4 >> 2] = i[r + 12 >> 2], u = r + 16 | 0
                      }(n + 8 | 0, i[t >> 2], i[t + 4 >> 2]), t = i[n + 12 >> 2], i[e >> 2] = i[n + 8 >> 2], i[e + 4 >> 2] = t, u = n + 16 | 0
                  }

                  function X(e, t, n, r) {
                    var o;
                    u = o = u - 16 | 0, J(o + 8 | 0, 0, r, t, n), t = i[o + 12 >> 2], i[e >> 2] = i[o + 8 >> 2], i[e + 4 >> 2] = t, u = o + 16 | 0
                  }

                  function z(e, t, n) {
                    var r;
                    return t |= 0, n |= 0, S(e = i[(e |= 0) >> 2], n), r = i[e + 8 >> 2], i[e + 8 >> 2] = r + n, Z(i[e >> 2] + r | 0, t, n), 0
                  }

                  function K(e, t) {
                    if (t)
                      for (; r[0 | e] = 0, e = e + 1 | 0, t = t + -1 | 0;);
                  }

                  function $(e, t, n) {
                    var r;
                    u = r = u - 16 | 0, i[r + 12 >> 2] = t, i[r + 8 >> 2] = e, x(r + 8 | 0, 1049204, 0, n), A()
                  }

                  function q(e, t, n, r) {
                    r >>> 0 >= t >>> 0 ? Z(n, e, t) : ($(1049416, 40, 1049400), A())
                  }

                  function ee(e, t, n, r, o) {
                    i[e + 12 >> 2] = o, i[e + 8 >> 2] = r, i[e + 4 >> 2] = n, i[e >> 2] = t
                  }

                  function te(e) {
                    i[e + 4 >> 2] && h(i[e >> 2])
                  }

                  function ne(e) {
                    i[4 + (e |= 0) >> 2] = 0, i[e + 8 >> 2] = 0, i[e >> 2] = 4, i[(e = e + 12 | 0) >> 2] = 0, i[e + 4 >> 2] = 0
                  }

                  function re(e, t, n, r) {
                    i[e + 8 >> 2] = n, i[e + 4 >> 2] = r, i[e >> 2] = t
                  }

                  function ie(e, t, n, r) {
                    return function (e, t, n, r) {
                      e: {
                        if (8 < n >>> 0) {
                          if (n = 8 < n >>> 0 ? m(n, r) : d(r)) break e;
                          return 0
                        }
                        return function (e, t) {
                          var n = 0,
                            r = 0,
                            o = 0,
                            a = 0,
                            s = 0,
                            l = 0,
                            c = 0,
                            A = 0,
                            u = 0,
                            f = 0;
                          t: if (!(t >>> 0 > 4294901708)) {
                            n = t >>> 0 < 11 ? 16 : t + 11 & -8, r = -8 & (l = i[(s = e + -4 | 0) >> 2]);
                            n: {
                              r: {
                                i: {
                                  o: {
                                    a: {
                                      s: {
                                        if (3 & l) {
                                          if (a = r + (c = e + -8 | 0) | 0, r >>> 0 >= n >>> 0) break s;
                                          if ((0 | a) == i[262874]) break a;
                                          if ((0 | a) == i[262873]) break o;
                                          if (2 & (l = i[a + 4 >> 2])) break n;
                                          if ((r = r + (A = -8 & l) | 0) >>> 0 >= n >>> 0) break i;
                                          break n
                                        }
                                        if (n >>> 0 < 256 | r >>> 0 < (4 | n) >>> 0 | r - n >>> 0 >= 131073) break n;
                                        break r
                                      }
                                      if ((t = r - n | 0) >>> 0 < 16) break r;i[s >> 2] = n | 1 & l | 2,
                                      i[4 + (o = n + c | 0) >> 2] = 3 | t,
                                      i[a + 4 >> 2] = 1 | i[a + 4 >> 2],
                                      b(o, t);
                                      break r
                                    }
                                    if ((r = r + i[262872] | 0) >>> 0 <= n >>> 0) break n;i[s >> 2] = n | 1 & l | 2,
                                    o = r - n | 0,
                                    i[4 + (t = n + c | 0) >> 2] = 1 | o,
                                    i[262872] = o,
                                    i[262874] = t;
                                    break r
                                  }
                                  if ((r = r + i[262871] | 0) >>> 0 < n >>> 0) break n;
                                  (t = r - n | 0) >>> 0 <= 15 ? (i[s >> 2] = r | 1 & l | 2, i[4 + (t = r + c | 0) >> 2] = 1 | i[t + 4 >> 2], t = 0) : (i[s >> 2] = n | 1 & l | 2, i[4 + (o = n + c | 0) >> 2] = 1 | t, i[(n = r + c | 0) >> 2] = t, i[n + 4 >> 2] = -2 & i[n + 4 >> 2]),
                                  i[262873] = o,
                                  i[262871] = t;
                                  break r
                                }
                                t = r - n | 0,
                                A >>> 0 >= 256 ? C(a) : (0 | (o = i[a + 12 >> 2])) == (0 | (a = i[a + 8 >> 2])) ? (u = 1051084, f = i[262771] & Ce(-2, l >>> 3), i[u >> 2] = f) : (i[a + 12 >> 2] = o, i[o + 8 >> 2] = a),
                                t >>> 0 >= 16 ? (i[s >> 2] = n | 1 & i[s >> 2] | 2, i[4 + (o = n + c | 0) >> 2] = 3 | t, i[4 + (n = r + c | 0) >> 2] = 1 | i[n + 4 >> 2], b(o, t)) : (i[s >> 2] = r | 1 & i[s >> 2] | 2, i[4 + (t = r + c | 0) >> 2] = 1 | i[t + 4 >> 2])
                              }
                              o = e;
                              break t
                            }
                            if (n = d(t)) return t = Z(n, e, (o = (-8 & (o = i[s >> 2])) - (3 & o ? 4 : 8) | 0) >>> 0 > t >>> 0 ? t : o), h(e), t
                          }
                          return o
                        }(e, r)
                      }
                      return t = Z(n, e, t >>> 0 > r >>> 0 ? r : t),
                      h(e),
                      t
                    }(e, t, n, r)
                  }

                  function oe(e, t) {
                    i[e + 4 >> 2] = i[t + 8 >> 2], i[e >> 2] = i[t >> 2]
                  }

                  function ae(e) {
                    return e || (W(1049972), A()), e
                  }

                  function se(e, t, n) {
                    ! function (e, t, n) {
                      var r, o;
                      u = r = u - 16 | 0, ue(e, n = n - t | 0), o = i[e + 8 >> 2], i[e + 8 >> 2] = n + o, oe(r + 8 | 0, e),
                        function (e, t, n, r) {
                          var o;
                          if (u = o = u - 112 | 0, i[o + 24 >> 2] = t, i[o + 28 >> 2] = r, (0 | t) == (0 | r)) return Z(e, n, t), void(u = o + 112 | 0);
                          i[o + 80 >> 2] = o + 24, i[o + 84 >> 2] = o + 28, i[o + 104 >> 2] = 4, i[o + 108 >> 2] = 0, i[o + 92 >> 2] = 1, i[o + 96 >> 2] = 0, i[o + 88 >> 2] = 1048948, ce(o + 16 | 0, o + 80 | 0, 1), e = i[o + 20 >> 2], t = i[o + 16 >> 2], ce(o + 8 | 0, o + 84 | 0, 1), i[o + 76 >> 2] = 2, i[o + 52 >> 2] = 3, i[o + 56 >> 2] = t, i[o + 60 >> 2] = e, i[o + 36 >> 2] = 3, i[o + 40 >> 2] = 0, i[o + 32 >> 2] = 1048872, e = i[o + 12 >> 2], i[o + 64 >> 2] = i[o + 8 >> 2], i[o + 68 >> 2] = e, i[o + 72 >> 2] = o + 88, i[o + 48 >> 2] = o + 56, V(o + 32 | 0, 1048956), A()
                        }(i[r + 8 >> 2] + o | 0, i[r + 12 >> 2] - o | 0, t, n), u = r + 16 | 0
                    }(e, t, t + n | 0)
                  }

                  function le(e, t) {
                    return 8 < t >>> 0 ? m(t, e) : d(e)
                  }

                  function ce(e, t, n) {
                    i[e + 4 >> 2] = n, i[e >> 2] = t
                  }

                  function Ae(e, t, n) {
                    E(i[i[e >> 2] >> 2], t, n)
                  }

                  function ue(e, t) {
                    ! function (e, t, n) {
                      var r;
                      u = r = u - 16 | 0,
                        function (e, t, n, r) {
                          var o, a = 0;
                          u = o = u - 48 | 0, i[t + 4 >> 2] - n >>> 0 >= r >>> 0 || (function (e, t, n, r) {
                            var o, a;
                            u = o = u - 16 | 0, a = e, (r = n + r | 0) >>> 0 < n >>> 0 ? (ce(o + 8 | 0, r, 0), n = i[o + 8 >> 2], i[e + 8 >> 2] = i[o + 12 >> 2], t = 1) : (n = (t = i[t + 4 >> 2] << 1) >>> 0 > r >>> 0 ? t : r, t = 0), i[a >> 2] = t, i[e + 4 >> 2] = n, u = o + 16 | 0
                          }(o + 32 | 0, t, n, r), a = 1, n = i[o + 36 >> 2], 1 != i[o + 32 >> 2] ? (0 | n) <= -1 ? (ce(o + 8 | 0, o, 0), t = i[o + 12 >> 2], i[e + 4 >> 2] = i[o + 8 >> 2], i[e + 8 >> 2] = t) : (r = o + 16 | 0, a = i[t + 4 >> 2], i[r >> 2] = a, i[r + 4 >> 2] = 0 != (0 | a), (r = (r = i[o + 20 >> 2]) ? ie(i[t >> 2], i[o + 16 >> 2], r, n) : le(n, 1)) || (de(n, 1), A()), i[t + 4 >> 2] = n, i[t >> 2] = r, a = 0) : (ce(o, n, i[o + 40 >> 2]), t = i[o + 4 >> 2], i[e + 4 >> 2] = i[o >> 2], i[e + 8 >> 2] = t)), i[e >> 2] = a, u = o + 48 | 0
                        }(r, e, t, n);
                      e: {
                        if (1 == i[r >> 2]) {
                          if (!i[r + 8 >> 2]) break e;
                          W(1048700), A()
                        }
                        return void(u = r + 16 | 0)
                      }
                      ge(), A()
                    }(e, i[e + 8 >> 2], t)
                  }

                  function fe(e, t) {
                    return t |= 0, 0 | function (e, t) {
                      var n, i = 0,
                        a = 0,
                        s = 0,
                        c = 0,
                        A = 0,
                        d = 0,
                        p = 0,
                        g = 0,
                        h = 0;
                      if (u = n = u - 48 | 0, a = 39, e >>> 0 < 1e4) i = e;
                      else
                        for (; i = we(e, c), h = s = f, p = (A = (n + 9 | 0) + a | 0) - 4 | 0, s = e - me(i, s) | 0, d = o[0 | (d = 1050746 + ((g = ((65535 & s) >>> 0) / 100 | 0) << 1) | 0)] | o[d + 1 | 0] << 8, r[0 | p] = d, r[p + 1 | 0] = d >>> 8, A = A + -2 | 0, s = 1050746 + ((s - l(g, 100) & 65535) << 1) | 0, s = o[0 | s] | o[s + 1 | 0] << 8, r[0 | A] = s, r[A + 1 | 0] = s >>> 8, a = a + -4 | 0, s = !c & e >>> 0 > 99999999 | c >>> 0 > 0, e = i, c = h, s;);
                      return (0 | i) > 99 && (c = (a = a + -2 | 0) + (n + 9 | 0) | 0, e = 1050746 + (((e = i) - l(i = ((65535 & e) >>> 0) / 100 | 0, 100) & 65535) << 1) | 0, e = o[0 | e] | o[e + 1 | 0] << 8, r[0 | c] = e, r[c + 1 | 0] = e >>> 8), (0 | i) >= 10 ? (e = (a = a + -2 | 0) + (n + 9 | 0) | 0, i = o[0 | (i = 1050746 + (i << 1) | 0)] | o[i + 1 | 0] << 8, r[0 | e] = i, r[e + 1 | 0] = i >>> 8) : r[(a = a + -1 | 0) + (n + 9 | 0) | 0] = i + 48, e = _(t, 1050299, 0, (n + 9 | 0) + a | 0, 39 - a | 0), u = n + 48 | 0, e
                    }(i[(e |= 0) >> 2], t)
                  }

                  function de(e, t) {
                    var n;
                    n = e, e = i[262767], xe[e || 22](n, t), A()
                  }

                  function pe(e, t, n) {
                    return g(n, e, t)
                  }

                  function ge() {
                    W(1050224), A()
                  }

                  function he(e) {
                    return f = 1468863706, -1546811115
                  }

                  function _e(e) {}

                  function ve() {}

                  function be(e, t) {
                    var n, r;
                    n = 0 | e, r = 0 | t, s[0] = n, s[1] = r
                  }

                  function me(e, t) {
                    var n, r = 0,
                      i = 0;
                    return n = l(r = e >>> 16, 0), e = 65535 & (i = (i = l(r, 1e4)) + ((r = l(65535 & e, 1e4)) >>> 16) | 0), f = ((n + l(t, 1e4) | 0) + (i >>> 16) | 0) + (e >>> 16) | 0, 65535 & r | e << 16
                  }

                  function we(e, t) {
                    var n = 0,
                      r = 0,
                      i = 0,
                      o = 0,
                      a = 0,
                      s = 0,
                      A = 0;
                    if (!t) return be((t = e) - l(e = (e >>> 0) / 1e4 | 0, 1e4) | 0, 0), f = 0, e;
                    if (i = 0 - (a = 51 - c(t) | 0) | 0, n = 31 & (r = 63 & a), 32 <= r >>> 0 ? (r = 0, o = t >>> n) : (r = t >>> n, o = ((1 << n) - 1 & t) << 32 - n | e >>> n), n = 31 & (i &= 63), 32 <= i >>> 0 ? (t = e << n, e = 0) : (t = (1 << n) - 1 & e >>> 32 - n | t << n, e <<= n), a)
                      for (; i = r << 1 | o >>> 31, o = (r = o << 1 | t >>> 31) - (n = 1e4 & (s = (o = 0 - (i + (9999 < r >>> 0) | 0) | 0) >> 31)) | 0, r = i - (r >>> 0 < n >>> 0) | 0, t = t << 1 | e >>> 31, e = A | e << 1, A = s &= 1, a = a + -1 | 0;);
                    return be(o, r), f = t << 1 | e >>> 31, s | e << 1
                  }

                  function ye(e) {
                    return e ? 31 - c(e + -1 ^ e) | 0 : 32
                  }

                  function Ce(e, t) {
                    var n = 0;
                    return (-1 >>> (n = 31 & t) & e) << n | ((n = e) & -1 << (e = 0 - t & 31)) >>> e
                  }
                  var xe = [null, function (e, t) {
                    return t |= 0, e = i[(e |= 0) >> 2], (16 & o[0 | t]) >>> 4 ? 0 | function (e, t) {
                      var n, o = 0,
                        a = 0;
                      for (u = n = u - 128 | 0, o = i[e >> 2], e = 0; a = 15 & o, r[127 + (e + n | 0) | 0] = a >>> 0 < 10 ? 48 | a : a + 87 | 0, e = e + -1 | 0, o >>>= 4;);
                      return (o = e + 128 | 0) >>> 0 >= 129 && (L(o, 128), A()), e = _(t, 1050744, 2, 128 + (e + n | 0) | 0, 0 - e | 0), u = n + 128 | 0, e
                    }(e, t) : (32 & o[0 | t]) >>> 5 ? 0 | function (e, t) {
                      var n, o = 0,
                        a = 0;
                      for (u = n = u - 128 | 0, o = i[e >> 2], e = 0; a = 15 & o, r[127 + (e + n | 0) | 0] = a >>> 0 < 10 ? 48 | a : a + 55 | 0, e = e + -1 | 0, o >>>= 4;);
                      return (o = e + 128 | 0) >>> 0 >= 129 && (L(o, 128), A()), e = _(t, 1050744, 2, 128 + (e + n | 0) | 0, 0 - e | 0), u = n + 128 | 0, e
                    }(e, t) : 0 | fe(e, t)
                  }, function (e, t) {
                    e |= 0;
                    var n, r, o = 0,
                      a = 0,
                      s = 0;
                    return u = n = u - 32 | 0, r = i[28 + (t |= 0) >> 2], t = i[t + 24 >> 2], s = i[4 + (a = e + 16 | 0) >> 2], i[(o = n + 24 | 0) >> 2] = i[a >> 2], i[o + 4 >> 2] = s, s = i[4 + (a = e + 8 | 0) >> 2], i[(o = n + 16 | 0) >> 2] = i[a >> 2], i[o + 4 >> 2] = s, o = i[e + 4 >> 2], i[n + 8 >> 2] = i[e >> 2], i[n + 12 >> 2] = o, e = p(t, r, n + 8 | 0), u = n + 32 | 0, 0 | e
                  }, function (e, t) {
                    return t |= 0, 0 | pe(i[(e |= 0) >> 2], i[e + 4 >> 2], t)
                  }, function (e, t) {
                    var n;
                    return t |= 0, u = n = u - 16 | 0, oe(n + 8 | 0, i[(e |= 0) >> 2]), e = pe(i[n + 8 >> 2], i[n + 12 >> 2], t), u = n + 16 | 0, 0 | e
                  }, _e, function (e, t) {
                    return e |= 0, u = e = u - 16 | 0,
                      function (e, t) {
                        var n;
                        n = 0 | xe[i[i[t + 28 >> 2] + 12 >> 2]](i[t + 24 >> 2], 1049996, 11), r[e + 5 | 0] = 0, r[e + 4 | 0] = n, i[e >> 2] = t
                      }(e + 8 | 0, t |= 0), t = function (e) {
                        var t = 0,
                          n = 0,
                          a = 0;
                        return t = o[e + 4 | 0], o[e + 5 | 0] && (n = 255 & t, a = e, t = 1, n || (t = i[e >> 2], n = i[i[t + 28 >> 2] + 12 >> 2], e = i[t + 24 >> 2], t = 4 & o[0 | t] ? 0 | xe[n](e, 1050946, 1) : 0 | xe[n](e, 1050947, 2)), r[a + 4 | 0] = t), 0 != (255 & t)
                      }(e + 8 | 0), u = e + 16 | 0, 0 | t
                  }, _e, function (e, t) {
                    return 0 | xe[i[i[28 + (t |= 0) >> 2] + 12 >> 2]](i[t + 24 >> 2], 1050299, 11)
                  }, _e, function (e, t) {
                    return 0 | xe[i[i[28 + (t |= 0) >> 2] + 12 >> 2]](i[t + 24 >> 2], 1050310, 14)
                  }, U, function () {
                    return 0 | (i[262757] ? 1051024 : function () {
                      var e, t, n = 0,
                        r = 0,
                        o = 0;
                      return u = e = u - 32 | 0, U(e), o = i[262759], i[(n = e + 24 | 0) >> 2] = i[262758], i[n + 4 >> 2] = o, o = i[262756], n = i[262757], r = i[e + 4 >> 2], i[262756] = i[e >> 2], i[262757] = r, t = i[4 + (r = e + 8 | 0) >> 2], i[262758] = i[r >> 2], i[262759] = t, i[e + 16 >> 2] = o, i[e + 20 >> 2] = n, i[e + 20 >> 2] && te(e + 16 | 4), u = e + 32 | 0, 1051024
                    }())
                  }, _e, function (e, t) {
                    e |= 0;
                    var n = 0,
                      r = 0,
                      o = 0;
                    n = i[(t |= 0) >> 2], i[t >> 2] = 0;
                    e: {
                      if (r = e, n) {
                        if (o = i[t + 4 >> 2], !(t = le(8, 4))) break e;
                        i[t + 4 >> 2] = o, i[t >> 2] = n, n = 1049224
                      } else t = 1,
                      n = 1049240;
                      return i[r + 4 >> 2] = n,
                      void(i[e >> 2] = t)
                    }
                    de(8, 4), A()
                  }, function (e, t) {
                    var n;
                    e |= 0, n = i[(t |= 0) >> 2], i[e + 4 >> 2] = n ? 1049224 : 1049240, i[e >> 2] = n ? t : 1
                  }, _e, function (e) {
                    return f = 286299353, 1890621284
                  }, _e, function (e) {
                    return f = 1757840133, -801715452
                  }, ne, function () {
                    return 0 | (i[262762] ? 1051048 : function () {
                      var e, t, n = 0,
                        r = 0,
                        o = 0;
                      return u = e = u - 48 | 0, ne(e), i[e + 40 >> 2] = i[262766], n = i[262765], i[(r = e + 32 | 0) >> 2] = i[262764], i[r + 4 >> 2] = n, n = i[262762], r = i[262763], o = i[e + 4 >> 2], i[262762] = i[e >> 2], i[262763] = o, t = i[4 + (o = e + 8 | 0) >> 2], i[262764] = i[o >> 2], i[262765] = t, i[262766] = i[e + 16 >> 2], i[e + 24 >> 2] = n, i[e + 28 >> 2] = r, n && i[4 + (n = e + 24 | 0) >> 2] && h(i[n >> 2]), u = e + 48 | 0, 1051048
                    }())
                  }, function (e, t) {}, _e, z, function (e, t) {
                    t |= 0;
                    var n, o = 0;
                    u = n = u - 16 | 0, o = e = i[(e |= 0) >> 2];
                    e: {
                      t: {
                        n: {
                          if (t >>> 0 >= 128) {
                            if (i[n + 12 >> 2] = 0, t >>> 0 < 2048) break n;
                            if (t >>> 0 < 65536) {
                              r[n + 14 | 0] = 63 & t | 128, r[n + 13 | 0] = t >>> 6 & 63 | 128, r[n + 12 | 0] = t >>> 12 & 15 | 224, t = 3;
                              break t
                            }
                            r[n + 15 | 0] = 63 & t | 128, r[n + 12 | 0] = t >>> 18 | 240, r[n + 14 | 0] = t >>> 6 & 63 | 128, r[n + 13 | 0] = t >>> 12 & 63 | 128, t = 4;
                            break t
                          }(0 | (o = i[e + 8 >> 2])) == i[e + 4 >> 2] && (S(e, 1), o = i[e + 8 >> 2]),
                          r[o + i[e >> 2] | 0] = t,
                          i[e + 8 >> 2] = i[e + 8 >> 2] + 1;
                          break e
                        }
                        r[n + 13 | 0] = 63 & t | 128,
                        r[n + 12 | 0] = t >>> 6 & 31 | 192,
                        t = 2
                      }
                      S(o, t),
                      o = i[e + 8 >> 2],
                      i[e + 8 >> 2] = o + t,
                      Z(o + i[e >> 2] | 0, n + 12 | 0, t)
                    }
                    return u = n + 16 | 0, 0
                  }, function (e, t) {
                    e |= 0, t |= 0;
                    var n, r = 0,
                      o = 0;
                    return u = n = u - 32 | 0, i[n + 4 >> 2] = i[e >> 2], o = i[4 + (r = t + 16 | 0) >> 2], i[(e = n + 24 | 0) >> 2] = i[r >> 2], i[e + 4 >> 2] = o, o = i[4 + (r = t + 8 | 0) >> 2], i[(e = n + 16 | 0) >> 2] = i[r >> 2], i[e + 4 >> 2] = o, e = i[t + 4 >> 2], i[n + 8 >> 2] = i[t >> 2], i[n + 12 >> 2] = e, e = p(n + 4 | 0, 1049868, n + 8 | 0), u = n + 32 | 0, 0 | e
                  }, _e, he, function (e) {
                    var t;
                    !(t = i[4 + (e |= 0) >> 2]) | !i[e + 8 >> 2] || h(t)
                  }, function (e, t) {
                    e |= 0;
                    var n, r = 0,
                      o = 0,
                      a = 0,
                      s = 0;
                    u = n = u + -64 | 0, (r = i[4 + (t |= 0) >> 2]) || (r = i[t >> 2], i[n + 32 >> 2] = 0, i[n + 24 >> 2] = 1, i[n + 28 >> 2] = 0, i[n + 36 >> 2] = n + 24, a = i[4 + (o = r + 16 | 0) >> 2], i[(s = n + 56 | 0) >> 2] = i[o >> 2], i[s + 4 >> 2] = a, a = i[4 + (o = r + 8 | 0) >> 2], i[(s = n + 48 | 0) >> 2] = i[o >> 2], i[s + 4 >> 2] = a, o = i[r + 4 >> 2], i[n + 40 >> 2] = i[r >> 2], i[n + 44 >> 2] = o, p(n + 36 | 0, 1049868, n + 40 | 0), i[(o = n + 16 | 0) >> 2] = i[n + 32 >> 2], r = i[n + 28 >> 2], i[n + 8 >> 2] = i[n + 24 >> 2], i[n + 12 >> 2] = r, !(r = i[t + 4 >> 2]) | !i[t + 8 >> 2] || h(r), a = i[n + 12 >> 2], i[(r = t + 4 | 0) >> 2] = i[n + 8 >> 2], i[r + 4 >> 2] = a, i[r + 8 >> 2] = i[o >> 2], r = i[r >> 2]), i[t + 4 >> 2] = 1, o = i[t + 12 >> 2], a = i[(t = t + 8 | 0) >> 2], i[t >> 2] = 0, i[t + 4 >> 2] = 0, (t = le(12, 4)) || (de(12, 4), A()), i[t + 8 >> 2] = o, i[t + 4 >> 2] = a, i[t >> 2] = r, i[e + 4 >> 2] = 1050028, i[e >> 2] = t, u = n - -64 | 0
                  }, function (e, t) {
                    e |= 0;
                    var n, r, o = 0,
                      a = 0,
                      s = 0,
                      l = 0;
                    u = n = u + -64 | 0, r = 4 + (t |= 0) | 0, i[t + 4 >> 2] || (a = i[t >> 2], i[n + 32 >> 2] = 0, i[n + 24 >> 2] = 1, i[n + 28 >> 2] = 0, i[n + 36 >> 2] = n + 24, l = i[4 + (o = a + 16 | 0) >> 2], i[(s = n + 56 | 0) >> 2] = i[o >> 2], i[s + 4 >> 2] = l, l = i[4 + (o = a + 8 | 0) >> 2], i[(s = n + 48 | 0) >> 2] = i[o >> 2], i[s + 4 >> 2] = l, o = i[a + 4 >> 2], i[n + 40 >> 2] = i[a >> 2], i[n + 44 >> 2] = o, p(n + 36 | 0, 1049868, n + 40 | 0), i[(a = n + 16 | 0) >> 2] = i[n + 32 >> 2], o = i[n + 28 >> 2], i[n + 8 >> 2] = i[n + 24 >> 2], i[n + 12 >> 2] = o, !(o = i[t + 4 >> 2]) | !i[t + 8 >> 2] || h(o), t = i[n + 12 >> 2], i[r >> 2] = i[n + 8 >> 2], i[r + 4 >> 2] = t, i[r + 8 >> 2] = i[a >> 2]), i[e + 4 >> 2] = 1050028, i[e >> 2] = r, u = n - -64 | 0
                  }, te, function (e) {
                    return f = -679582923, 428379921
                  }, _e, z, function (e, t) {
                    return t |= 0,
                      function (e, t) {
                        var n, o = 0;
                        u = n = u - 16 | 0, o = e;
                        e: {
                          t: {
                            n: {
                              if (t >>> 0 >= 128) {
                                if (i[n + 12 >> 2] = 0, t >>> 0 < 2048) break n;
                                if (t >>> 0 < 65536) {
                                  r[n + 14 | 0] = 63 & t | 128, r[n + 13 | 0] = t >>> 6 & 63 | 128, r[n + 12 | 0] = t >>> 12 & 15 | 224, t = 3;
                                  break t
                                }
                                r[n + 15 | 0] = 63 & t | 128, r[n + 12 | 0] = t >>> 18 | 240, r[n + 14 | 0] = t >>> 6 & 63 | 128, r[n + 13 | 0] = t >>> 12 & 63 | 128, t = 4;
                                break t
                              }(0 | (o = i[e + 8 >> 2])) == i[e + 4 >> 2] && (S(e, 1), o = i[e + 8 >> 2]),
                              r[o + i[e >> 2] | 0] = t,
                              i[e + 8 >> 2] = i[e + 8 >> 2] + 1;
                              break e
                            }
                            r[n + 13 | 0] = 63 & t | 128,
                            r[n + 12 | 0] = t >>> 6 & 31 | 192,
                            t = 2
                          }
                          S(o, t),
                          o = i[e + 8 >> 2],
                          i[e + 8 >> 2] = o + t,
                          Z(o + i[e >> 2] | 0, n + 12 | 0, t)
                        }
                        u = n + 16 | 0
                      }(i[(e |= 0) >> 2], t), 0
                  }, function (e, t) {
                    e |= 0, t |= 0;
                    var n, r = 0,
                      o = 0;
                    return u = n = u - 32 | 0, i[n + 4 >> 2] = i[e >> 2], o = i[4 + (r = t + 16 | 0) >> 2], i[(e = n + 24 | 0) >> 2] = i[r >> 2], i[e + 4 >> 2] = o, o = i[4 + (r = t + 8 | 0) >> 2], i[(e = n + 16 | 0) >> 2] = i[r >> 2], i[e + 4 >> 2] = o, e = i[t + 4 >> 2], i[n + 8 >> 2] = i[t >> 2], i[n + 12 >> 2] = e, e = p(n + 4 | 0, 1050044, n + 8 | 0), u = n + 32 | 0, 0 | e
                  }, _e, function (e, t) {
                    return 0 | xe[i[i[28 + (t |= 0) >> 2] + 12 >> 2]](i[t + 24 >> 2], 1051016, 5)
                  }, fe, fe, function (e, t) {
                    return 0 | g(t |= 0, i[(e |= 0) >> 2], i[e + 4 >> 2])
                  }, function (e, t) {
                    return t |= 0, 0 | xe[i[i[4 + (e |= 0) >> 2] + 12 >> 2]](i[e >> 2], t)
                  }, _e, he];

                  function Ee(t) {
                    t |= 0;
                    var s = 0 | n.byteLength / 65536,
                      c = s + t | 0;
                    if (s < c && c < 65536) {
                      var A = new ArrayBuffer(l(c, 65536)),
                        u = new e.Int8Array(A);
                      u.set(r), r = u, r = new e.Int8Array(A), new e.Int16Array(A), i = new e.Int32Array(A), o = new e.Uint8Array(A), new e.Uint16Array(A), a = new e.Uint32Array(A), new e.Float32Array(A), new e.Float64Array(A), n = A
                    }
                    return s
                  }
                  return {
                    memory: Object.create(Object.prototype, {
                      grow: {
                        value: Ee
                      },
                      buffer: {
                        get: function () {
                          return n
                        }
                      }
                    }),
                    sha1: function (e, t, n) {
                      var r;
                      e |= 0, u = r = u - 80 | 0, Y(r + 24 | 0, t |= 0, n |= 0),
                        function (e, t, n) {
                          var r;
                          u = r = u - 16 | 0, i[r + 12 >> 2] = n, i[r + 8 >> 2] = t,
                            function (e, t) {
                              var n;
                              u = n = u - 32 | 0,
                                function (e, t) {
                                  var n, r, a = 0;
                                  u = n = u - 176 | 0, (r = 0 | xe[i[262284]]()) ? (function (e) {
                                    var t;
                                    i[e + 8 >> 2] = 1732584193, i[e + 12 >> 2] = -271733879, i[e >> 2] = 0, i[e + 4 >> 2] = 0, i[e + 24 >> 2] = -1009589776, i[(t = e + 16 | 0) >> 2] = -1732584194, i[t + 4 >> 2] = 271733878, K(e + 28 | 0, 69)
                                  }(n + 8 | 0), (0 | (a = i[r >> 2] + 1 | 0)) <= 0 && (I(1049045, 24, n + 128 | 0, 1049088), A()), i[r >> 2] = a, i[n + 164 >> 2] = 3, i[n + 148 >> 2] = 2, i[n + 132 >> 2] = 2, i[n + 136 >> 2] = 0, i[n + 128 >> 2] = 1049120, i[n + 172 >> 2] = r, i[n + 168 >> 2] = r + 4, i[n + 160 >> 2] = t, i[n + 156 >> 2] = 4, i[n + 144 >> 2] = n + 152, i[n + 152 >> 2] = n + 168, function (e, t) {
                                    var n, r, o = 0,
                                      a = 0,
                                      s = 0,
                                      l = 0;
                                    if (u = n = u - 48 | 0, l = i[t >> 2], a = (r = i[t + 4 >> 2]) << 3)
                                      for (o = l + 4 | 0; s = i[o >> 2] + s | 0, o = o + 8 | 0, a = a + -8 | 0;);
                                    e: {
                                      t: {
                                        n: {
                                          r: {
                                            if (i[t + 20 >> 2]) {
                                              if (r || (T(1050152, 0, 0), A()), !i[l + 4 >> 2] && s >>> 0 <= 15 || !((o = s + s | 0) >>> 0 >= s >>> 0)) {
                                                a = 1, o = 0, s = n + 8 | 0;
                                                break r
                                              }
                                            } else o = s;
                                            if ((0 | o) <= -1) break n;
                                            if (s = n + 8 | 0, o) {
                                              if (!(a = le(o, 1))) break t
                                            } else a = 1,
                                            o = 0
                                          }
                                          if (i[n + 16 >> 2] = 0, i[n + 12 >> 2] = o, i[n + 8 >> 2] = a, i[n + 20 >> 2] = n + 8, a = i[4 + (o = t + 16 | 0) >> 2], i[(l = n + 40 | 0) >> 2] = i[o >> 2], i[l + 4 >> 2] = a, a = i[4 + (o = t + 8 | 0) >> 2], i[(l = n + 32 | 0) >> 2] = i[o >> 2], i[l + 4 >> 2] = a, o = i[t + 4 >> 2], i[n + 24 >> 2] = i[t >> 2], i[n + 28 >> 2] = o, p(n + 20 | 0, 1050044, n + 24 | 0)) break e;
                                          return t = i[s + 4 >> 2],
                                          i[e >> 2] = i[s >> 2],
                                          i[e + 4 >> 2] = t,
                                          i[e + 8 >> 2] = i[s + 8 >> 2],
                                          void(u = n + 48 | 0)
                                        }
                                        ge(),
                                        A()
                                      }
                                      de(o, 1),
                                      A()
                                    }
                                    I(1050248, 51, n + 24 | 0, 1050168), A()
                                  }(n + 112 | 0, n + 128 | 0), oe(n, n + 112 | 0), function (e, t, n) {
                                    var r, a, s;
                                    u = r = u - 16 | 0, o[e + 96 | 0] && ($(1049832, 32, 1049816), A()), a = e, s = function (e, t, n) {
                                        var r, o, a = 0;
                                        if (r = 1 + (a = (n >>> 29) + t | 0) | 0, o = a, !((0 | (n = (a = (n <<= 3) + e | 0) >>> 0 < n >>> 0 ? r : o)) == (0 | t) & a >>> 0 < e >>> 0 | n >>> 0 < t >>> 0)) return f = n, a;
                                        (function () {
                                          var e;
                                          u = e = u - 48 | 0, i[e + 12 >> 2] = 25, i[e + 8 >> 2] = 1049472, i[e + 36 >> 2] = 1, i[e + 20 >> 2] = 1, i[e + 24 >> 2] = 0, i[e + 16 >> 2] = 1050496, i[e + 44 >> 2] = 42, i[e + 32 >> 2] = e + 40, i[e + 40 >> 2] = e + 8, V(e + 16 | 0, 1050504), A()
                                        })(), A()
                                      }(i[e >> 2], i[e + 4 >> 2], n), i[a >> 2] = s, i[e + 4 >> 2] = f, i[r + 12 >> 2] = e + 8,
                                      function (e, t, n, r) {
                                        var o, a = 0,
                                          s = 0,
                                          l = 0;
                                        u = o = u + -64 | 0, i[o + 60 >> 2] = r;
                                        e: {
                                          if (r = i[e >> 2]) {
                                            if ((a = 64 - r | 0) >>> 0 > n >>> 0) {
                                              j(o + 32 | 0, e + 4 | 0, 64, r, n + r | 0), q(t, n, i[o + 32 >> 2], i[o + 36 >> 2]);
                                              break e
                                            }
                                            X(o + 48 | 0, t, n, a), r = i[o + 52 >> 2], s = i[o + 48 >> 2], j(o + 40 | 0, l = e + 4 | 0, 64, i[e >> 2], 64), q(s, r, i[o + 40 >> 2], i[o + 44 >> 2]), i[e >> 2] = 0, Ae(o + 60 | 0, l, 64)
                                          }
                                          for (r = n - a | 0; !(r >>> 0 <= 63);) J(o + 8 | 0, s = a, a = a - -64 | 0, t, n),
                                          Ae(o + 60 | 0, i[o + 8 >> 2], i[o + 12 >> 2]),
                                          r = r + -64 | 0;J(o + 24 | 0, a, n, t, n),
                                          t = i[o + 28 >> 2],
                                          n = i[o + 24 >> 2],
                                          j(o + 16 | 0, e + 4 | 0, 64, 0, r),
                                          q(n, t, i[o + 16 >> 2], i[o + 20 >> 2]),
                                          n = r
                                        }
                                        i[e >> 2] = i[e >> 2] + n, u = o - -64 | 0
                                      }(e + 28 | 0, t, n, r + 12 | 0), u = r + 16 | 0
                                  }(n + 8 | 0, i[n >> 2], i[n + 4 >> 2]), te(n + 112 | 0), t = i[n + 172 >> 2], i[t >> 2] = i[t >> 2] + -1, function (e, t) {
                                    var n, r, a = 0;
                                    u = n = u - 48 | 0,
                                      function (e, t) {
                                        var n;
                                        u = n = u - 16 | 0, i[n + 8 >> 2] = 0, i[n >> 2] = 1, i[n + 4 >> 2] = 0,
                                          function (e, t) {
                                            var n, r = 0;
                                            ue(e, t), n = i[e >> 2], t && (K(n + (r = i[e + 8 >> 2]) | 0, t), i[e + 8 >> 2] = t + r)
                                          }(n, t), i[e + 8 >> 2] = i[n + 8 >> 2], t = i[n + 4 >> 2], i[e >> 2] = i[n >> 2], i[e + 4 >> 2] = t, u = n + 16 | 0
                                      }(n + 16 | 0, 20), oe(n + 8 | 0, n + 16 | 0), y(t, i[n + 8 >> 2], i[n + 12 >> 2]), i[(t = n + 40 | 0) >> 2] = i[n + 24 >> 2], a = i[n + 20 >> 2], i[n + 32 >> 2] = i[n + 16 >> 2], i[n + 36 >> 2] = a, a = i[n + 36 >> 2], r = i[t >> 2], t = i[n + 32 >> 2], i[n + 44 >> 2] = r + t, i[n + 40 >> 2] = t, i[n + 36 >> 2] = a, i[n + 32 >> 2] = t,
                                      function (e, t) {
                                        var n, r = 0,
                                          a = 0,
                                          s = 0;
                                        u = n = u + -64 | 0, a = i[4 + (r = t + 8 | 0) >> 2], s = n + 8 | 0, r = i[r >> 2], i[s >> 2] = r, i[s + 4 >> 2] = a, a = i[t + 4 >> 2], i[n >> 2] = i[t >> 2], i[n + 4 >> 2] = a;
                                        e: {
                                          t: {
                                            if (i[n + 12 >> 2] != (0 | r)) {
                                              if (i[n + 8 >> 2] = r + 1, function (e, t) {
                                                  var n;
                                                  u = n = u - 16 | 0, i[n + 12 >> 2] = i[1048724 + ((15 & t) << 2) >> 2], i[n + 8 >> 2] = i[1048724 + ((240 & t) >>> 2) >> 2], G(e, n + 8 | 0, n + 16 | 0), u = n + 16 | 0
                                                }(n + 16 | 0, o[0 | r]), i[n + 16 >> 2]) break t
                                            } else i[n + 16 >> 2] = 0;
                                            if (i[e + 8 >> 2] = 0, i[e >> 2] = 1, i[e + 4 >> 2] = 0, M(n), !i[n + 16 >> 2]) break e;te(n + 16 | 0);
                                            break e
                                          }
                                          i[(t = n + 40 | 0) >> 2] = i[n + 24 >> 2],
                                          r = i[n + 20 >> 2],
                                          i[n + 32 >> 2] = i[n + 16 >> 2],
                                          i[n + 36 >> 2] = r,
                                          a = i[4 + (r = n + 8 | 0) >> 2],
                                          i[(s = n + 56 | 0) >> 2] = i[r >> 2],
                                          i[s + 4 >> 2] = a,
                                          r = i[n + 4 >> 2],
                                          i[n + 48 >> 2] = i[n >> 2],
                                          i[n + 52 >> 2] = r,
                                          function (e, t) {
                                            var n, r, a, s = 0;
                                            u = n = u - 16 | 0, a = i[4 + (r = t + 8 | 0) >> 2], i[(s = n + 8 | 0) >> 2] = i[r >> 2], i[s + 4 >> 2] = a, s = i[t + 4 >> 2], i[n >> 2] = i[t >> 2], i[n + 4 >> 2] = s,
                                              function (e, t) {
                                                var n, r, a, s = 0;
                                                for (u = n = u + -64 | 0, a = i[4 + (s = e + 8 | 0) >> 2], i[(r = n + 24 | 0) >> 2] = i[s >> 2], i[r + 4 >> 2] = a, s = i[e + 4 >> 2], i[n + 16 >> 2] = i[e >> 2], i[n + 20 >> 2] = s, e = n + 56 | 0;
                                                  (0 | (s = i[n + 24 >> 2])) != i[n + 28 >> 2];) i[n + 24 >> 2] = s + 1, s = o[0 | s], i[n + 52 >> 2] = i[1049140 + ((15 & s) << 2) >> 2], i[n + 48 >> 2] = i[1049140 + (s >>> 2 & 60) >> 2], G(n + 32 | 0, n + 48 | 0, e), i[e >> 2] = i[n + 40 >> 2], s = i[n + 36 >> 2], i[n + 48 >> 2] = i[n + 32 >> 2], i[n + 52 >> 2] = s, oe(n + 8 | 0, n + 48 | 0), se(t, i[n + 8 >> 2], i[n + 12 >> 2]), te(n + 48 | 0);
                                                M(n + 16 | 0), u = n - -64 | 0
                                              }(n, e), u = n + 16 | 0
                                          }(n + 32 | 0, n + 48 | 0),
                                          i[e + 8 >> 2] = i[t >> 2],
                                          t = i[n + 36 >> 2],
                                          i[e >> 2] = i[n + 32 >> 2],
                                          i[e + 4 >> 2] = t
                                        }
                                        u = n - -64 | 0
                                      }(e, n + 32 | 0), u = n + 48 | 0
                                  }(e, n + 8 | 0)) : i[e >> 2] = 0, u = n + 176 | 0
                                }(n + 8 | 0, t), i[n + 8 >> 2] || (I(1048972, 57, n + 24 | 0, 1049072), A()), t = i[n + 12 >> 2], i[e >> 2] = i[n + 8 >> 2], i[e + 4 >> 2] = t, i[e + 8 >> 2] = i[n + 16 >> 2], u = n + 32 | 0
                            }(e, r + 8 | 0), u = r + 16 | 0
                        }(r + 32 | 0, t = i[r + 24 >> 2], n = i[r + 28 >> 2]), n && h(t), i[(t = r + 56 | 0) >> 2] = i[r + 40 >> 2], n = i[r + 36 >> 2], i[r + 48 >> 2] = i[r + 32 >> 2], i[r + 52 >> 2] = n, oe(r + 16 | 0, r + 48 | 0), i[r + 72 >> 2] = i[t >> 2], t = i[r + 52 >> 2], i[r + 64 >> 2] = i[r + 48 >> 2], i[r + 68 >> 2] = t, H(r + 8 | 0, r - -64 | 0), t = i[r + 12 >> 2], i[e >> 2] = i[r + 8 >> 2], i[e + 4 >> 2] = t, u = r + 80 | 0
                    },
                    setSalt: function (e, t) {
                      var n;
                      u = n = u - 48 | 0, Y(n + 8 | 0, e |= 0, t |= 0), e = i[n + 12 >> 2], re(n + 16 | 0, i[n + 8 >> 2], e, e), i[n + 40 >> 2] = i[n + 24 >> 2], e = i[n + 20 >> 2], i[n + 32 >> 2] = i[n + 16 >> 2], i[n + 36 >> 2] = e,
                        function (e) {
                          var t, n;
                          u = t = u - 16 | 0, i[t + 8 >> 2] = i[e + 8 >> 2], n = i[e + 4 >> 2], i[t >> 2] = i[e >> 2], i[t + 4 >> 2] = n,
                            function (e) {
                              var t, n;
                              u = t = u - 32 | 0, i[t + 16 >> 2] = i[e + 8 >> 2], n = i[e + 4 >> 2], i[t + 8 >> 2] = i[e >> 2], i[t + 12 >> 2] = n,
                                function (e) {
                                  var t, n, r = 0,
                                    o = 0;
                                  return u = n = u - 32 | 0, (t = 0 | xe[i[262284]]()) ? (i[(r = n + 16 | 0) >> 2] = i[e + 8 >> 2], o = i[e + 4 >> 2], i[n + 8 >> 2] = i[e >> 2], i[n + 12 >> 2] = o, i[t >> 2] && (I(1049029, 16, n + 24 | 0, 1049104), A()), i[t >> 2] = -1, te(t + 4 | 0), i[t + 12 >> 2] = i[r >> 2], e = i[n + 12 >> 2], i[t + 4 >> 2] = i[n + 8 >> 2], i[t + 8 >> 2] = e, i[t >> 2] = i[t >> 2] + 1, e = 0) : (te(e), e = 1), u = n + 32 | 0, e
                                }(t + 8 | 0) && (I(1048972, 57, t + 24 | 0, 1049072), A()), u = t + 32 | 0
                            }(t), u = t + 16 | 0
                        }(n + 32 | 0), u = n + 48 | 0
                    },
                    main: ve,
                    __wbindgen_malloc: function (e) {
                      if (!((e |= 0) >>> 0 > 4294967292)) {
                        if (!e) return 4;
                        if (e = le(e, (e >>> 0 < 4294967293) << 2)) return 0 | e
                      }
                      A()
                    },
                    __wbindgen_realloc: function (e, t, n) {
                      if (e |= 0, !((t |= 0) >>> 0 > 4294967292) && (e = ie(e, t, 4, n |= 0))) return 0 | e;
                      A()
                    },
                    __wbindgen_free: function (e, t) {
                      (t |= 0) && h(e |= 0)
                    },
                    __wbindgen_start: ve
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
                }, c),
                f = u.memory,
                d = u.sha1,
                p = u.setSalt,
                g = u.main,
                h = u.__wbindgen_malloc,
                _ = u.__wbindgen_realloc,
                v = u.__wbindgen_free,
                b = u.__wbindgen_start
            }, function (e, t, n) {
              function r() {}

              function i() {}
              n.r(t), r.prototype.encode = function (e) {
                for (var t = [], n = e.length, r = 0; r < n;) {
                  var i = e.codePointAt(r),
                    o = 0,
                    a = 0;
                  for (i <= 127 ? (o = 0, a = 0) : i <= 2047 ? (o = 6, a = 192) : i <= 65535 ? (o = 12, a = 224) : i <= 2097151 && (o = 18, a = 240), t.push(a | i >> o), o -= 6; o >= 0;) t.push(128 | i >> o & 63), o -= 6;
                  r += i >= 65536 ? 2 : 1
                }
                return t
              }, i.prototype.decode = function (e) {
                if (void 0 === e) return "";
                for (var t = "", n = 0; n < e.length;) {
                  var r = e[n],
                    i = 0,
                    o = 0;
                  if (r <= 127 ? (i = 0, o = 255 & r) : r <= 223 ? (i = 1, o = 31 & r) : r <= 239 ? (i = 2, o = 15 & r) : r <= 244 && (i = 3, o = 7 & r), e.length - n - i > 0)
                    for (var a = 0; a < i;) o = o << 6 | 63 & (r = e[n + a + 1]), a += 1;
                  else o = 65533, i = e.length - n;
                  t += String.fromCodePoint(o), n += i + 1
                }
                return t
              }, n.d(t, "sha1", (function () {
                return d
              })), n.d(t, "setSalt", (function () {
                return p
              })), n.d(t, "main", (function () {
                return g
              })), n.d(t, "memory", (function () {
                return _
              }));
              var o = 0,
                a = new r("utf-8"),
                s = "function" == typeof a.encodeInto ? function (e, t) {
                  return a.encodeInto(e, t)
                } : function (e, t) {
                  var n = a.encode(e);
                  return t.set(n), {
                    read: e.length,
                    written: n.length
                  }
                },
                l = null;

              function c() {
                return null !== l && l.buffer === h.memory.buffer || (l = new Uint8Array(h.memory.buffer)), l
              }

              function A(e) {
                for (var t = e.length, n = h.__wbindgen_malloc(t), r = c(), i = 0; i < t; i++) {
                  var a = e.charCodeAt(i);
                  if (a > 127) break;
                  r[n + i] = a
                }
                if (i !== t) {
                  0 !== i && (e = e.slice(i)), n = h.__wbindgen_realloc(n, t, t = i + 3 * e.length);
                  var l = c().subarray(n + i, n + t);
                  i += s(e, l).written
                }
                return o = i, n
              }
              var u = null,
                f = new i("utf-8", {
                  ignoreBOM: !0,
                  fatal: !0
                });

              function d(e) {
                h.sha1(8, A(e), o);
                var t, n, r = (null !== u && u.buffer === h.memory.buffer || (u = new Int32Array(h.memory.buffer)), u),
                  i = (t = r[2], n = r[3], f.decode(c().subarray(t, t + n))).slice();
                return h.__wbindgen_free(r[2], 1 * r[3]), i
              }

              function p(e) {
                h.setSalt(A(e), o)
              }

              function g() {
                h.main()
              }
              f.decode();
              var h = n(0),
                _ = h.memory;
              h.__wbindgen_start()
            }])
          }();
        (() => {
          const e = (({
            bits: e,
            PRNG: t = E
          }) => {
            const n = x(e / 16);
            let r = "";
            for (let e = 0; e < n; ++e) r += "0123456789abcdef" [x(16 * t())];
            return r
          })({
            bits: 256
          });
          B.setSalt(e)
        })();
        const S = e => C.i[e];
        let I = 0;
        const k = (e, t) => {
            const n = f()({}, t);
            if (void 0 !== n.apiSignature) return n;
            if (void 0 === S(e)) return n;
            const r = y({
              apiName: e,
              args: n,
              argsList: C.i[e],
              seq: I
            });
            return n.apiSignature = B.sha1(r), n.apiSigningSeq = I, n.apiSignature, I += 1, n
          },
          T = 0,
          D = 1,
          L = 2,
          Q = 3,
          M = {
            [D]: "sign error",
            [L]: "sign seq error",
            [Q]: "sign missing"
          },
          W = new Set,
          O = Function.prototype.call,
          N = O.bind(Set.prototype.has),
          F = O.bind(Set.prototype.add);

        function R(e, t, n, r) {
          const i = `api sign failed: ${M[e]}; apiName: ${t}; args: ${JSON.stringify(n)}; signature: ${r}`;
          throw new Error(i)
        }
        const P = Object.create(null);

        function G() {
          return {
            invoke(e, t, n, r) {
              if (((e, t) => {
                  if (void 0 === S(e)) return T;
                  null !== t.apiSigningSeq && void 0 !== t.apiSigningSeq && null !== t.apiSignature && void 0 !== t.apiSignature || R(Q, e, t, "not checked"), t.apiSigningSeq = parseInt(t.apiSigningSeq, 10), N(W, t.apiSigningSeq) && R(L, e, t, "not checked"), F(W, t.apiSigningSeq);
                  const n = y({
                      apiName: e,
                      args: t,
                      argsList: C.i[e],
                      seq: t.apiSigningSeq
                    }),
                    r = B.sha1(n);
                  r !== t.apiSignature && R(D, e, t, r)
                })(e, t), void 0 === t.pluginId) return WeixinJSBridge.invoke(e, t, n, r);
              if (i()) {
                const i = s(e, t);
                return WeixinJSBridge.invoke(e, i, n, r)
              }
              return function (e, t, n) {
                delete t.permissionBytes, void 0 === t.pluginId && n(t), A(t.pluginId, e, (e => {
                  t.permissionBytes = e, t.privateData = JSON.stringify({
                    pluginId: t.pluginId
                  }), n(t)
                }))
              }(t, (t => {
                WeixinJSBridge.invoke(e, t, n, r)
              }))
            },
            on: (e, t) => P[e] instanceof Array ? (P[e].push(t), null) : (P[e] = null, WeixinJSBridge.on(e, t)),
            publish: (e, t, n) => WeixinJSBridge.publish(e, t, n),
            subscribe: (e, t) => WeixinJSBridge.subscribe(e, t)
          }
        }
        let j = !1;
        const V = [],
          U = function (e) {
            V.push(e), j || (this.bridge.on("onSubPackageReady", (e => {
              V.forEach((t => {
                "function" == typeof t && t(void 0, e)
              }))
            })), j = !0)
          };

        function J(e) {
          return Object.prototype.toString.call(e).split(" ")[1].split("]")[0]
        }
        const Y = (e, {
          stringify: t = JSON.stringify,
          parse: n = JSON.parse,
          arrayBufferProto: r = ArrayBuffer.prototype
        } = {}) => {
          if (!e) return e;
          const i = typeof e;
          if ("function" === i) throw new Error("[Safeway] not allow to pass function.");
          if ("object" !== i) return e.valueOf();
          const o = Object.keys(e),
            a = {};
          for (let t = 0; t < o.length; t++) {
            const n = o[t],
              i = e[n];
            void 0 !== i && "ArrayBuffer" === J(i) && void 0 !== i.byteLength && (Object.setPrototypeOf(i, r), a[n] = i)
          }
          let s;
          try {
            s = n(t(e))
          } catch (e) {
            throw new Error(`[Safeway] data clone error ${e.toString()}`)
          }
          const l = Object.keys(a);
          for (let e = 0; e < l.length; e++) {
            const t = l[e];
            s[t] = a[t]
          }
          return s
        };

        function Z(e, t) {
          return function (...n) {
            const r = [];
            for (let t = 0; t < n.length; t++) r[t] = Y(n[t], {
              parse: e.contextGlobal.jsonParse,
              stringify: e.contextGlobal.jsonStringify,
              arrayBufferProto: e.contextGlobal.arrayBufferProto
            });
            t.apply(this, r)
          }
        }

        function H(e, t, {
          cloneArgs: n = !0
        } = {}) {
          return function (...r) {
            const i = [];
            for (let t = 0; t < r.length; t++) "function" == typeof r[t] ? i[t] = new Z(e, r[t]) : i[t] = n ? Y(r[t], {
              parse: JSON.parse,
              stringify: JSON.stringify,
              arrayBufferProto: ArrayBuffer.prototype
            }) : r[t];
            const o = t.apply(this, i);
            return Y(o, {
              parse: e.contextGlobal.jsonParse,
              stringify: e.contextGlobal.jsonStringify,
              arrayBufferProto: e.contextGlobal.arrayBufferProto
            })
          }
        }

        function X(e, t, n, r = !0) {
          const i = Object.keys(e);
          for (let o = 0; o < i.length; o++) {
            const a = i[o],
              s = e[a];
            if ("function" != typeof s) throw new Error(`Export value of Safeway must be a function, key ${a} func ${typeof s}`);
            n && void 0 !== __subContextEngine__ && __subContextEngine__.isIsolateContext() ? t[a] = new H(n, s, {
              cloneArgs: r
            }) : t[a] = s
          }
        }

        function z(e) {
          const t = G(),
            n = {
              create: (e, t) => WeixinWorker.create(e, t),
              onWorkerMsg: e => WeixinWorker.onWorkerMsg(e),
              postMsgToWorker: (e, t, n) => WeixinWorker.postMsgToWorker(e, t, n),
              terminate: e => WeixinWorker.terminate(e)
            },
            r = {
              makeApiSign: k
            },
            i = {
              ifIs: l,
              ifIsNot: c
            };
          X(t, t, e, {
            cloneArgs: !1
          }), X(n, n, e), X(i, i, e), this.bridge = t, this.worker = n, this.apiSign = r, this.pluginPermissionBytes = i;
          X({
            onSubpackageReady: U
          }, this, e)
        }
        const K = class {
          constructor(e) {
            z.call(this, e)
          }
          static splitOnBridgeListener(e) {
            return function (e) {
              return null === P[e] ? (console.error("`splitOnBridgeListener` should be called before any listeners attached to it. Ignored."), null) : (P[e] = [], WeixinJSBridge.on(e, ((...t) => {
                const n = P[e];
                for (const e of n)
                  if (!1 === e(...t)) break
              })), t => {
                P[e].unshift(t)
              })
            }(e)
          }
        }
      },
      t = {
        n: e => {
          var n = e && e.__esModule ? () => e.default : () => e;
          return t.d(n, {
            a: n
          }), n
        },
        d: (e, n) => {
          for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: n[r]
          })
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t)
      },
      n = {};
    e(0, n, t), Safeway = n.default
  })();
  var __sclEngine__, __safeway__ = new Safeway;
  (() => {
    var e = {
        821: (e, t, n) => {
          "use strict";
          n.r(t), n.d(t, {
            exparser: () => o,
            onThemeChange: () => _,
            onViewportResize: () => v,
            timestamp: () => m,
            timestampMs: () => w,
            getEngineConfig: () => y,
            getWindowWidth: () => C,
            getWindowHeight: () => x,
            getTheme: () => E,
            getDevicePixelRatio: () => B,
            getSafeArea: () => S,
            invoke: () => I,
            subscribe: () => k,
            timeoutCallback: () => T
          });
          var r = n(995),
            i = n(404);
          r.globalOptions.publicProperties = !0, r.globalOptions.renderingMode = "full", r.globalOptions.classPrefix = "", r.globalOptions.templateEngine = i.GlassEaselTemplate;
          const o = r,
            a = WeixinJSBridge,
            s = [],
            l = [];
          let c = 0,
            A = 0,
            u = 0,
            f = null,
            d = null;
          const p = {};
          ["onViewDidResize", "onAppRouteResized", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel", "onTextViewDrag", "onImageViewLoad", "onScrollViewScroll", "onThemeChange"].forEach((e => {
            p[e] = Safeway.splitOnBridgeListener(e)
          }));
          const g = e => e ? {
              left: e.left,
              top: e.top,
              right: Math.max(c - e.right, 0),
              bottom: Math.max(A - e.bottom, 0)
            } : e,
            h = e => {
              c = e.size.framesetWidth || e.size.screenWidth, A = e.size.framesetHeight || e.size.screenHeight, a.invoke("getSystemInfo", {}, (e => {
                d = g(e.safeArea), s.forEach((t => {
                  t(e)
                }))
              }))
            };
          p.onViewDidResize(h), p.onAppRouteResized(h), p.onThemeChange((e => {
            f !== e.theme && n.g.__wxConfig.darkmode && (f = e.theme, r.triggerRender((() => {
              l.forEach((e => e({
                theme: f
              })))
            })))
          }));
          const _ = function (e) {
              l.push(e)
            },
            v = function (e) {
              s.push(e)
            },
            b = function () {
              u && c && A || a.invoke("getSystemInfo", {}, (e => {
                u = e.pixelRatio, c && A || (c = e.framesetWidth || e.screenWidth, A = e.framesetHeight || e.screenHeight), d = g(e.safeArea)
              }))
            },
            m = function () {
              return Math.floor(Date.now() / 1e3)
            },
            w = function () {
              return Date.now() % 1e3
            },
            y = function () {
              return {
                relativeToParentContent: !1
              }
            },
            C = function () {
              return b(), c
            },
            x = function () {
              return b(), A
            },
            E = function () {
              return function () {
                if (!f) {
                  const e = n.g.__wxConfig,
                    {
                      darkmode: t
                    } = e;
                  f = t ? e.theme : "light"
                }
              }(), f || "light"
            },
            B = function () {
              return u
            },
            S = function () {
              return d
            },
            I = function (e, t, n) {
              a.invoke(e, t, (e => {
                n && n.exec(e)
              }))
            },
            k = function (e, t) {
              p[e]((e => {
                if (!t) return;
                return t.exec(e)
              }))
            },
            T = function (e, t) {
              t && setTimeout((e => {
                t.exec(e)
              }), e)
            }
        },
        57: (e, t, n) => {
          "use strict";
          n.d(t, {
            W: () => r,
            J: () => i
          });
          const r = [],
            i = []
        },
        404: (e, t, n) => {
          e.exports = (() => {
            "use strict";
            var e = {
                674: (e, t, r) => {
                  r.r(t), r.d(t, {
                    GlassEaselTemplate: () => E
                  });
                  var i, o = function (e) {
                      for (var t in e)
                        if (Object.prototype.hasOwnProperty.call(e, t)) {
                          var n = e[t];
                          if (!0 === n) return !0;
                          if (!n) continue;
                          if (o(n)) return !0
                        } return !1
                    },
                    a = function (e, t, r, i, a, s, l) {
                      if ("object" == typeof e) {
                        var c = [],
                          A = function (e, t) {
                            var r = e;
                            return n(995).safeCallback("Template Function", r, null, t)
                          },
                          u = function (n) {
                            if (void 0 === c[n]) {
                              var i = (0, e.I[n])(t, r, u, A);
                              c[n] = void 0 === i ? null : i
                            }
                            return c[n]
                          },
                          f = !0 === i || e.L(i, a, u);
                        if (l || !0 === f || f && o(f)) {
                          var d = e.F(t, r, u, A),
                            p = null;
                          if (e.M) {
                            var g = e.M;
                            p = [];
                            for (var h = 0; h < g.length; h += 1) {
                              var _ = g[h];
                              if ("number" == typeof _)
                                if (0 === h) {
                                  if (!s[_]) {
                                    p = null;
                                    break
                                  }
                                  p.push.apply(p, s[_])
                                } else {
                                  var v = u(_);
                                  p.push("number" == typeof v ? v : v.toString())
                                }
                              else p.push(_)
                            }
                          }
                          return [d, f, p]
                        }
                      } else if (l) return [e, void 0, null];
                      return null
                    },
                    s = function (e, t, r, i) {
                      if ("object" == typeof e) {
                        var o = [],
                          a = function (e, t) {
                            var r = e;
                            return n(995).safeCallback("Template Function", r, null, t)
                          },
                          s = function (n) {
                            if (void 0 === o[n]) {
                              var i = (0, e.I[n])(t, r, s, a);
                              o[n] = void 0 === i ? null : i
                            }
                            return o[n]
                          },
                          l = e.F(t, r, s, a),
                          c = null;
                        if (e.M) {
                          var A = e.M;
                          c = [];
                          for (var u = 0; u < A.length; u += 1) {
                            var f = A[u];
                            if ("number" == typeof f)
                              if (0 === u) {
                                if (!i[f]) {
                                  c = null;
                                  break
                                }
                                c.push.apply(c, i[f])
                              } else {
                                var d = s(f);
                                c.push("number" == typeof d ? d : d.toString())
                              }
                            else c.push(f)
                          }
                        }
                        return [l, c]
                      }
                      return [e, null]
                    },
                    l = function (e) {
                      return null == e ? "" : e.toString()
                    };
                  ! function (e) {
                    e[e.ATTR = 0] = "ATTR"
                  }(i || (i = {}));
                  var c, A = function (e) {
                      return e.indexOf("-") <= 0 ? e : e.replace(/-[a-z]/g, (function (e) {
                        return e[1].toUpperCase()
                      }))
                    },
                    u = function (e, t, r, o, a, s, c) {
                      var u = n(995),
                        f = u.dataUtils.deepCopy(r);
                      if (e instanceof u.VirtualNode && "slot" === e.is && "name" === t) return u.Element.setSlotName(e, l(f)), !1;
                      if ("id" === t) return e.id = l(f), !1;
                      if ("slot" === t) return e.slot = l(f), !1;
                      if ("class" === t) {
                        if (s) e.hasExternalClass("class") ? e.setExternalClass("class", l(f)) : e.class = l(f);
                        else e.class = l(f);
                        return !1
                      }
                      if (s) {
                        var d = A(t);
                        if (u.Component.hasPublicProperty(e, d)) return a.scheduleReplace([d], f, null), !0;
                        if ("model:" === t.slice(0, 6)) {
                          o || console.warn('Cannot apply reverse binding to property "' + t + '" because the binding expression is not a valid lvalue');
                          var p = d.slice(6);
                          if (u.Component.hasPublicProperty(e, p)) return a.scheduleReplace([p], f, null), c.push([p, o]), !0
                        }
                      }
                      if ("style" === t) return e.setNodeStyle(l(f), i.ATTR), !1;
                      if (/^data:/.test(t)) {
                        var g = t.slice(5);
                        return e.dataset[g] = f, !1
                      }
                      if (/^data-/.test(t)) {
                        g = A(t.slice(5).toLowerCase());
                        return e.dataset[g] = f, !1
                      }
                      var h = /^(capture-)?(mut-)?(bind|catch):?(.+)$/.exec(t);
                      if (h) {
                        var _ = l(f);
                        return e.addListener(h[4], (function (t) {
                          var n, r = e.ownerShadowRoot.getHostNode();
                          if ("object" == typeof r) {
                            var i = u.Element.getMethodCaller(r) || r,
                              o = i[_];
                            "function" == typeof o && (n = o.call(i, t))
                          }
                          return n
                        })), !1
                      }
                      return /^mark:/.test(t) ? (e.setMark(t.slice(5), f), !1) : s && e.hasExternalClass(t) ? (e.setExternalClass(t, l(f)), !1) : e instanceof u.NativeNode && ("boolean" == typeof f ? !0 === f ? e.setAttribute(t, "") : e.removeAttribute(t) : e.setAttribute(t, l(f)), !1)
                    },
                    f = function (e, t, r, i, o, l, c) {
                      var A;
                      e.dataset = e.dataset || {};
                      var f = !1,
                        d = [],
                        p = n(995),
                        g = e instanceof p.Component,
                        h = g ? p.Component.getDataProxy(e) : null;
                      for (var _ in t)
                        if (Object.prototype.hasOwnProperty.call(t, _)) {
                          var v = t[_],
                            b = void 0,
                            m = null;
                          if (c) {
                            var w = a(v, r, i, l, c, o, !1);
                            if (!w) continue;
                            b = w[0], m = w[2]
                          } else b = (A = s(v, r, i, o))[0], m = A[1];
                          u(e, _, b, m, h, g, d) && (f = !0)
                        } if (f && h.doUpdates(null, !0), g)
                        for (var y = function (t) {
                            var n = d[t],
                              r = n[0],
                              i = n[1];
                            e.setPropertyChangeListener(r, (function (t) {
                              var n = e.ownerShadowRoot.getHostNode(),
                                r = p.Component.getDataProxy(n);
                              r.scheduleReplace(i, t, null), r.doUpdates(null, !1)
                            }))
                          }, C = 0; C < d.length; C += 1) y(C)
                    },
                    d = function (e, t, r, i) {
                      e.dataset = e.dataset || {};
                      var o = [],
                        a = n(995),
                        l = e instanceof a.Component,
                        c = l ? a.Component.getDataProxy(e) : null,
                        A = s(r, i, null, null),
                        f = A[0],
                        d = A[1];
                      if (u(e, t, f, d, c, l, o) && c.doUpdates(null, !0), l)
                        for (var p = function (t) {
                            var n = o[t],
                              r = n[0],
                              i = n[1];
                            e.setPropertyChangeListener(r, (function (t) {
                              var n = e.ownerShadowRoot.getHostNode(),
                                r = a.Component.getDataProxy(n);
                              r.scheduleReplace(i, t, null), r.doUpdates(null, !1)
                            }))
                          }, g = 0; g < o.length; g += 1) p(g)
                    },
                    p = function (e, t, n) {
                      for (var r = function (e) {
                          for (var t = {}, n = 0; n < e.length; n += 1) {
                            var r = e[n];
                            r ? Object.prototype.hasOwnProperty.call(t, r) ? e[n] = void 0 : t[l(r)] = n : Number.isNaN(r) && (e[n] = void 0)
                          }
                          return t
                        }(e), i = function (e) {
                          for (var t = {}, n = [], r = 0; r < e.length; r += 1) {
                            var i = e[r];
                            i ? Object.prototype.hasOwnProperty.call(t, i) ? (e[r] = void 0, n.push(r)) : t[l(i)] = r : (Number.isNaN(i) && (e[r] = void 0), n.push(r))
                          }
                          return [t, n]
                        }(t), o = i[0], a = i[1], s = [], c = new Array(e.length), A = new Array(e.length), u = [], f = [], d = 0, p = 0, g = 0; g < e.length; g += 1) {
                        var h = e[g];
                        if (h)
                          if (Object.prototype.hasOwnProperty.call(o, h)) {
                            var _ = o[l(h)];
                            s.push(t[_]), c[g] = n[_], A[g] = g !== _
                          } else u.push(g - p), p += 1, s.push(null), c[g] = null;
                        else if (d < a.length) {
                          _ = a[d];
                          s.push(t[_]), c[g] = n[_], d += 1, A[g] = g !== _
                        } else u.push(g - p), p += 1, s.push(null), c[g] = null
                      }
                      for (var v = 0, b = [], m = 0; m < t.length;) {
                        for (var w = t[m], y = s[v]; null === y;) y = s[v += 1];
                        v >= s.length ? (f.push({
                          oldIndex: r[l(w)],
                          index: m,
                          pos: -1
                        }), v += 1, m += 1) : y === w ? (b.push(v), v += 1, m += 1) : w ? (y ? o[l(y)] === m + 1 ? f.push({
                          oldIndex: r[l(w)],
                          index: m,
                          pos: v
                        }) : (y = s[v += 1]) === w ? (b.push(v), v += 1) : (v -= 1, f.push({
                          oldIndex: r[l(w)],
                          index: m,
                          pos: v
                        })) : f.push({
                          oldIndex: r[l(w)],
                          index: m,
                          pos: v
                        }), m += 1) : v += 1
                      }
                      var C = 0;
                      for (g = 0; g < f.length; g += 1) {
                        var x = f[g].pos;
                        if (-1 === x) break;
                        for (; C < b.length && x > b[C];) C += 1;
                        C >= b.length ? f[g].pos = -1 : f[g].pos = b[C]
                      }
                      return {
                        children: c,
                        indexChanged: A,
                        removes: u,
                        inserts: f
                      }
                    };
                  ! function (e) {
                    e[e.PURE = 0] = "PURE", e[e.IF = 1] = "IF", e[e.FOR = 2] = "FOR", e[e.TEMPLATE_IS = 3] = "TEMPLATE_IS", e[e.SHADOW_ROOT = 4] = "SHADOW_ROOT", e[e.SLOT = 5] = "SLOT", e[e.INCLUDE = 6] = "INCLUDE", e[e.BLOCK_SLOT = 7] = "BLOCK_SLOT"
                  }(c || (c = {}));
                  var g = function (e, t, n, r, i, o, a) {
                      if (n)
                        for (var c = 0; c < n.length; c += 1) {
                          var A = n[c];
                          if (null != A)
                            if (void 0 === A.S) {
                              var u = h(e, A, r, i, o, null, a);
                              t.appendChild(u)
                            } else {
                              var f = s(A.S, r, i, o)[0];
                              u = a.createTextNode(l(f));
                              t.appendChild(u)
                            }
                        }
                    },
                    h = function (e, t, r, i, o, a, A) {
                      var u = null;
                      if (void 0 !== t.V) {
                        var d = t;
                        if (d.V === c.IF) {
                          var p = "wx:if",
                            h = A.createVirtualNode(p);
                          h.__templateArgs = {}, (M = n(995)).Element.setInheritSlots(h);
                          for (var _ = d.B, v = 0; v < _.length; v += 1) {
                            var b = _[v];
                            if (s(b.B, r, i, o)[0]) {
                              g(e, h, b.C, r, i, o, A), h.__templateArgs.key = v;
                              break
                            }
                          }
                          return h
                        }
                        if (d.V === c.FOR) {
                          p = "wx:for";
                          var m = A.createVirtualNode(p);
                          m.__templateArgs = {}, (M = n(995)).Element.setInheritSlots(m);
                          var w = m.__templateArgs.keyList = [],
                            y = d.K,
                            C = function (t, n, a) {
                              "*this" === y ? w.push(t) : w.push(null == t ? void 0 : t[y]);
                              var s = A.createVirtualNode("wx:for-item");
                              M.Element.setInheritSlots(s), i.push(t), i.push(n), o.push(a), o.push(null), g(e, s, d.C, r, i, o, A), o.pop(), o.pop(), i.pop(), i.pop(), m.appendChild(s)
                            },
                            x = s(d.L, r, i, o),
                            E = x[0],
                            B = x[1];
                          if (E instanceof Array)
                            for (v = 0; v < E.length; v += 1) B && B.push(v), C(E[v], v, B), B && B.pop();
                          else if ("object" == typeof E)
                            for (var S in E) Object.prototype.hasOwnProperty.call(E, S) && (B && B.push(S), C(E[S], S, B), B && B.pop());
                          else if ("string" == typeof E)
                            for (v = 0; v < E.length; v += 1) B && B.push(v), C(E[v], v, B), B && B.pop();
                          else if ("number" == typeof E)
                            for (v = 0; v < E; v += 1) B && B.push(v), C(v, v, B), B && B.pop();
                          return m
                        }
                        if (d.V === c.TEMPLATE_IS) {
                          var I = A.createVirtualNode("template");
                          I.__templateArgs = {}, (M = n(995)).Element.setInheritSlots(I);
                          var k = s(d.N, r, i, o)[0],
                            T = I.__templateArgs.key = l(k),
                            D = e(T);
                          if (D) {
                            var L = s(d.D, r, i, o)[0];
                            g(e, I, D.C, L, [], [], A)
                          }
                          return I
                        }
                        if (d.V === c.INCLUDE) {
                          var Q = A.createVirtualNode("include");
                          return (M = n(995)).Element.setInheritSlots(Q), Q
                        }
                        if (d.V === c.SHADOW_ROOT) {
                          var M = n(995);
                          u = A = M.ShadowRoot.create(a)
                        } else if (d.V === c.SLOT) {
                          var W = u = A.createVirtualNode("slot"),
                            O = s(d.N, r, i, o)[0];
                          (M = n(995)).Element.setSlotName(W, l(O))
                        } else if (d.V === c.BLOCK_SLOT) {
                          W = u = A.createVirtualNode("virtual");
                          var N = s(d.N, r, i, o)[0];
                          W.slot = l(N)
                        } else if (d.V === c.PURE) {
                          W = u = A.createVirtualNode("virtual");
                          (M = n(995)).Element.setInheritSlots(W)
                        }
                      } else {
                        var F = (R = t).T;
                        u = A.tagNameUsed(F) || F.indexOf("-") >= 0 ? A.createComponent(F, void 0, R.G) : A.createNativeNode(F)
                      }
                      if (u instanceof(M = n(995)).Element) {
                        var R, P = t.SD;
                        if (void 0 !== P) {
                          u.__templateArgs || (u.__templateArgs = {});
                          var G = s(P, r, i, o)[0];
                          u.__templateArgs.scopeData = G
                        }
                        if ((R = t).EA)
                          for (var j in R.EA) u.setAttribute(j, R.EA[j]);
                        var V = R.A;
                        V && f(u, V, r, i, o);
                        var U = t.C;
                        U && g(e, u, U, r, i, o, A)
                      }
                      return u
                    },
                    _ = function (e, t, n, r, i, o, s, c, A) {
                      if (n)
                        for (var u = 0; u < n.length; u += 1) {
                          var f = n[u];
                          if (null != f)
                            if (void 0 === f.S) v(e.childNodes[u], t, f, r, i, o, s, c, A);
                            else {
                              var d = a(f.S, r, i, o, s, c, !1);
                              if (d) {
                                var p = d[0];
                                e.childNodes[u].textContent = l(p)
                              }
                            }
                        }
                    },
                    v = function (e, t, r, i, o, s, A, u, d) {
                      if (void 0 !== r.V) {
                        var b = r;
                        if (b.V === c.IF) {
                          for (var m = function (r, a) {
                              var s = d.createVirtualNode("wx:if");
                              s.__templateArgs = {}, n(995).Element.setInheritSlots(s), s.__templateArgs.key = r, a && g(t, s, a, i, o, u, d), e.parentNode.replaceChild(s, e)
                            }, w = b.B, y = 0; y < w.length; y += 1) {
                            var C = w[y];
                            if (a(C.B, i, o, s, A, u, !0)[0]) return void(e.__templateArgs.key === y ? v(e, t, C, i, o, s, A, u, d) : m(y, C.C))
                          }
                          return void(-1 !== e.__templateArgs.key && m(-1))
                        }
                        if (b.V === c.FOR) {
                          var x = e.__templateArgs.keyList,
                            E = e.__templateArgs.keyList = [],
                            B = b.K,
                            S = function (e) {
                              "*this" === B ? E.push(e) : E.push(null == e ? void 0 : e[B])
                            },
                            I = function (e, n, r, a, l, c) {
                              o.push(e), o.push(n), A.push(r), A.push(!!l || void 0), u.push(a), u.push(null);
                              var f = b.C;
                              _(c, t, f, i, o, s, A, u, d), u.pop(), u.pop(), A.pop(), A.pop(), o.pop(), o.pop()
                            },
                            k = a(b.L, i, o, s, A, u, !0),
                            T = k[0],
                            D = k[1],
                            L = k[2],
                            Q = !1,
                            M = [];
                          if (T instanceof Array)
                            for (y = 0; y < T.length; y += 1) S(T[y]), M.push({
                              item: T[y],
                              index: y
                            });
                          else if ("object" == typeof T)
                            for (var W in Q = !0, T) S(T[W]), M.push({
                              item: T[W],
                              index: W
                            });
                          else if ("string" == typeof T)
                            for (y = 0; y < T.length; y += 1) S(T[y]), M.push({
                              item: T[y],
                              index: y
                            });
                          else if ("number" == typeof T)
                            for (y = 0; y < T; y += 1) S(y), M.push({
                              item: y,
                              index: y
                            });
                          var O = p(x, E, M),
                            N = O.children,
                            F = O.indexChanged,
                            R = O.inserts,
                            P = O.removes;
                          for (y = 0; y < N.length; y += 1) {
                            var G = N[y];
                            if (G) {
                              var j = void 0;
                              !0 === D ? j = !0 : D && (j = D[G.index]), L && L.push(G.index), I(G.item, G.index, j, L, Q || F[y], e.childNodes[y]), L && L.pop()
                            }
                          }
                          return void
                          function (e, t, n, r, i, o) {
                            for (var a = n.childNodes, s = [], l = 0; l < t.length; l += 1) {
                              var c = t[l];
                              s.push({
                                node: void 0 !== c.oldIndex ? a[c.oldIndex] : null,
                                before: c.pos >= 0 ? a[c.pos] : void 0,
                                index: c.index
                              })
                            }
                            for (l = 0; l < e.length; l += 1) {
                              var A = a[d = e[l]];
                              n.removeChild(A)
                            }
                            for (l = 0; l < s.length; l += 1) {
                              var u = s[l],
                                f = u.before,
                                d = u.index;
                              if (null === (A = s[l].node)) {
                                var p = r[d],
                                  g = p.item,
                                  h = p.index;
                                i && i.push(h), A = o(g, h, i), i && i.pop()
                              }
                              n.insertBefore(A, f)
                            }
                          }(P, R, e, M, L, (function (e, r, a) {
                            var s = d.createVirtualNode("wx:for-item");
                            return n(995).Element.setInheritSlots(s), o.push(e), o.push(r), u.push(a), u.push(null), g(t, s, b.C, i, o, u, d), u.pop(), u.pop(), o.pop(), o.pop(), s
                          }))
                        }
                        if (b.V === c.TEMPLATE_IS) {
                          if ((X = a(b.N, i, o, s, A, u, !1)) && e.__templateArgs.key !== X[0]) {
                            var V = h(t, b, i, o, u, null, d);
                            e.parentNode.replaceChild(V, e)
                          } else {
                            var U = e.__templateArgs.key,
                              J = t(U),
                              Y = a(b.D, i, o, s, A, u, !0),
                              Z = Y[0],
                              H = Y[1];
                            _(e, t, J.C, Z, [], H, [], [], d)
                          }
                          return
                        }
                        if (b.V === c.SLOT) {
                          if (X = a(b.N, i, o, s, A, u, !1))(z = n(995)).Element.setSlotName(e, l(X[0]))
                        } else {
                          if (b.V === c.INCLUDE) return;
                          var X;
                          b.V === c.BLOCK_SLOT && (X = a(b.N, i, o, s, A, u, !1)) && (e.slot = l(X[0]))
                        }
                      }
                      var z = n(995);
                      if (e instanceof z.Element) {
                        var K = r.A;
                        K && f(e, K, i, o, u, s, A), (N = r.C) && _(e, t, N, i, o, s, A, u, d)
                      }
                    },
                    b = function () {
                      return {
                        P: "",
                        C: [{
                          V: c.SLOT,
                          N: "",
                          C: []
                        }]
                      }
                    },
                    m = function () {
                      function e(e, t, r, i) {
                        if (this.data = t, this.innerData = r, "string" == typeof e.template) {
                          var o = n(995);
                          this.genObjectGroup = o.precompileTemplate(e.template).content[""]
                        } else {
                          var a = e.template || {
                            content: b
                          };
                          this.genObjectGroup = a.content
                        }
                        this.updateMode = ""
                      }
                      return e.create = function (t, n, r, i) {
                        return new e(t, n, r, i)
                      }, e.prototype.createInstance = function (e, t) {
                        var r = new w;
                        r.template = this;
                        var i = r.template.genObjectGroup("");
                        r.genObject = {
                          V: c.SHADOW_ROOT,
                          C: i.C
                        }, r.bindingMap = i.BM;
                        var o = n(995);
                        r.data = o.dataUtils.deepCopy(this.data), r.idMap = Object.create(null);
                        var a = Object.create(null);
                        a[""] = null;
                        var s = y(e, r.genObject, r.data, r.idMap, a);
                        if (null === a[""] && s.childNodes.length > 0) {
                          var l = document.createElement("virtual");
                          s.appendChild(l), a[""] = l
                        }
                        return r.shadowRoot = s, r.slots = a, r.listeners = [], r
                      }, e
                    }(),
                    w = function () {
                      function e() {}
                      return e.prototype.updateValues = function (e, t, n, r, i, o) {
                        if (!this.bindingMapInstance) {
                          var a = {};
                          for (var c in this.bindingMap)
                            if (Object.prototype.hasOwnProperty.call(this.bindingMap, c)) {
                              for (var A = this.bindingMap[c], u = new Array(A.length), f = 0; f < A.length; f += 1) {
                                for (var d = A[f], p = e.shadowRoot, g = this.genObject, h = null, _ = 0; _ < d.length; _ += 1) {
                                  var v = d[_];
                                  if ("number" != typeof v) {
                                    h = v;
                                    break
                                  }
                                  p = p.childNodes[v], g = g.C[v]
                                }
                                var b = null === h ? g.S : g.A[h];
                                h && ("id" === h || h.indexOf(":") >= 0) ? u[f] = [p, "illegal-update:" + h, b] : u[f] = [p, h, b]
                              }
                              a[c] = u
                            } this.bindingMapInstance = a
                        }
                        var m = this.bindingMapInstance;
                        for (f = 0; f < n.length; f += 1) {
                          var w = m[n[f][0]];
                          if (void 0 !== w)
                            for (_ = 0; _ < w.length; _ += 1) {
                              var y = w[_],
                                C = y[0],
                                x = (h = y[1], b = y[2], s(b, t, null, null)[0]);
                              null !== h ? "boolean" == typeof x ? !0 === x ? C.setAttribute(h, "") : C.removeAttribute(h) : C.setAttribute(h, l(x)) : C.textContent = l(x)
                            }
                        }
                      }, e
                    }(),
                    y = function (e, t, r, i, o) {
                      var a, A = !1;
                      if (void 0 !== t.V) {
                        var u = t;
                        if (u.V === c.SHADOW_ROOT && (a = document.createDocumentFragment(), A = !0), u.V === c.SLOT) return o[""] = document.createElement("virtual")
                      } else {
                        var f = t,
                          d = f.T;
                        a = document.createElement(d);
                        var p = f.A,
                          g = function (t) {
                            if (!Object.prototype.hasOwnProperty.call(p, t)) return "continue";
                            var o = p[t],
                              c = s(o, r, null, null)[0];
                            if ("id" === t) i[l(c)] = a;
                            else {
                              var A = t.split(":", 2),
                                u = A[0],
                                f = A[1];
                              if (f) {
                                if ("bind" === u) {
                                  var d = l(c);
                                  n(995).addListenerToElement(a, f, (function (t) {
                                    var n;
                                    if ("object" == typeof e) {
                                      var r = e[d];
                                      "function" == typeof r && (n = r.call(e, t))
                                    }
                                    return n
                                  }))
                                }
                              } else "boolean" == typeof c ? !0 === c ? a.setAttribute(t, "") : a.removeAttribute(t) : a.setAttribute(u, l(c))
                            }
                          };
                        for (var h in p) g(h)
                      }
                      var _ = t.C;
                      if (1 === _.length && _[0].V === c.SLOT) A || (o[""] = a);
                      else
                        for (var v = 0; v < _.length; v += 1) {
                          var b = _[v];
                          if (void 0 === b.S) {
                            var m = y(e, b, r, i, o);
                            a.appendChild(m)
                          } else {
                            var w = s(b.S, r, null, null)[0];
                            m = document.createTextNode(l(w));
                            a.appendChild(m)
                          }
                        }
                      return a
                    },
                    C = function () {
                      return {
                        P: "",
                        C: [{
                          V: c.SLOT,
                          N: "",
                          C: []
                        }]
                      }
                    },
                    x = function (e, t, r) {
                      for (var i = e.childNodes, o = 0; o < i.length; o += 1) {
                        var a = i[o];
                        a instanceof n(995).Element && (a.__id && (t[a.__id] = a), void 0 !== a.__slotName && (r[a.__slotName] = a), x(a, t, r))
                      }
                    },
                    E = function () {
                      function e(e, t, r, i) {
                        if (this.data = t, this.innerData = r, "string" == typeof e.template) {
                          var o = n(995);
                          this.genObjectGroup = o.precompileTemplate(e.template).content[""], this.updateMode = ""
                        } else {
                          var a = e.template || {
                            content: C
                          };
                          this.genObjectGroup = a.content, this.updateMode = a.updateMode || ""
                        }
                      }
                      return e.create = function (t, n, r, i) {
                        return "native" === i.renderingMode ? new m(t, n, r, i) : new e(t, n, r, i)
                      }, e.prototype.createInstance = function (e, t) {
                        var r = new B;
                        r.template = this;
                        var i = r.template.genObjectGroup("");
                        r.genObject = {
                          V: c.SHADOW_ROOT,
                          C: i.C
                        }, "" !== this.updateMode && "bindingMap" !== this.updateMode || (r.bindingMap = i.BM, "bindingMap" === this.updateMode && (r.forceBindingMapUpdate = !0));
                        var o = n(995);
                        return r.data = o.dataUtils.deepCopy(this.data), r.idMap = Object.create(null), r.slots = Object.create(null), r.shadowRoot = h(r.template.genObjectGroup, r.genObject, this.innerData, [], [], e, null), x(r.shadowRoot, r.idMap, r.slots), r.listeners = [], r
                      }, e
                    }(),
                    B = function () {
                      function e() {}
                      return e.prototype.updateValues = function (e, t, n, r, i, o) {
                        if (this.forceBindingMapUpdate) this.tryBindingMapUpdate(e, t, n);
                        else if (!(n.length <= 1 && this.bindingMap && this.tryBindingMapUpdate(e, t, n))) {
                          for (var a = Object.create(null), s = 0; s < n.length; s += 1)
                            for (var l = n[s], c = a, A = 0; A < l.length; A += 1) {
                              var u = l[A];
                              if (!0 === c[u]) break;
                              if (A === l.length - 1) {
                                c[u] = !0;
                                break
                              }
                              c[u] || (c[u] = Object.create(null)), c = c[u]
                            }
                          v(this.shadowRoot, this.template.genObjectGroup, this.genObject, t, [], a, [], [], e.shadowRoot)
                        }
                      }, e.prototype.tryBindingMapUpdate = function (e, t, n) {
                        if (!this.bindingMapInstance) {
                          var r = {};
                          for (var i in this.bindingMap)
                            if (Object.prototype.hasOwnProperty.call(this.bindingMap, i)) {
                              for (var o = this.bindingMap[i], a = new Array(o.length), c = 0; c < o.length; c += 1) {
                                for (var A = o[c], u = e.shadowRoot, f = this.genObject, p = null, g = 0; g < A.length; g += 1) {
                                  var h = A[g];
                                  if ("number" != typeof h) {
                                    p = h;
                                    break
                                  }
                                  u = u.childNodes[h], f = f.C[h]
                                }
                                var _ = null === p ? f.S : f.A[p];
                                a[c] = [u, p, _]
                              }
                              r[i] = a
                            } this.bindingMapInstance = r
                        }
                        var v = this.bindingMapInstance;
                        for (c = 0; c < n.length; c += 1) {
                          if (1 !== (b = n[c]).length) return !1;
                          if (void 0 === (m = v[b[0]])) return !1
                        }
                        for (c = 0; c < n.length; c += 1) {
                          var b, m = v[(b = n[c])[0]];
                          for (g = 0; g < m.length; g += 1) {
                            var w = m[g],
                              y = w[0];
                            p = w[1], _ = w[2];
                            if (null !== p) d(y, p, _, t);
                            else {
                              var C = s(_, t, null, null)[0];
                              y.textContent = l(C)
                            }
                          }
                        }
                        return !0
                      }, e
                    }()
                }
              },
              t = {};

            function r(n) {
              if (t[n]) return t[n].exports;
              var i = t[n] = {
                exports: {}
              };
              return e[n](i, i.exports, r), i.exports
            }
            return r.d = (e, t) => {
              for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
              })
            }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
              }), Object.defineProperty(e, "__esModule", {
                value: !0
              })
            }, r(674)
          })()
        },
        995: e => {
          var t = function (e) {
            function t(r) {
              if (n[r]) return n[r].exports;
              var i = n[r] = {
                exports: {},
                id: r,
                loaded: !1
              };
              return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.p = "", t(0)
          }([function (e, n, r) {
            var i = r(1),
              o = r(3),
              a = r(5),
              s = r(6),
              l = r(7),
              c = r(8),
              A = r(9),
              u = r(15),
              f = r(12),
              d = r(17),
              p = r(18),
              g = r(19),
              h = r(16),
              _ = r(10),
              v = r(20),
              b = r(14),
              m = r(21),
              w = r(4),
              y = r(13),
              C = r(22);
            n.FreeTmpl = C, n.precompileTemplate = C.precompiler ? C.precompiler.compile : null, n.precompiler = C.precompiler ? C.precompiler : null, n.HtmlLLParser = C.htmlParser ? C.htmlParser : null, n.LLParser = i, n.dataPath = l, n.dataUtils = a, n.Event = s, n.Element = A, n.TextNode = f, n.NativeNode = d, n.VirtualNode = p, n.ShadowRoot = g, n.Behavior = c, n.Component = u, n.Observer = _, n.DataGroup = h, n.ElementIterator = v, n.FakeDomElement = b, n.registerBehavior = c.create, n.registerElement = u.register, n.createElement = u.create, n.createTextNode = f.create, n.createVirtualNode = p.create, n.appendChild = A.appendChild, n.insertBefore = A.insertBefore, n.removeChild = A.removeChild, n.replaceChild = A.replaceChild, n.addListenerToElement = s.addListenerToElement, n.removeListenerFromElement = s.removeListenerFromElement, n.triggerEvent = s.triggerEvent, n.triggerRender = m.triggerRender, n.safeCallback = o.safeCallback, n.addGlobalErrorListener = o.addGlobalErrorListener, n.removeGlobalErrorListener = o.removeGlobalErrorListener, n.addGlobalWarningListener = o.addGlobalWarningListener, n.removeGlobalWarningListener = o.removeGlobalWarningListener, n.globalOptions = w, n.globalState = y, u._setDefaultTemplateEngine(C);
            var x = n.updateDefaultComponent = function () {
              delete u._list[""], u.register({
                is: "",
                options: {
                  writeOnly: !0,
                  allowInWriteOnly: !0,
                  lazyRegistration: !1,
                  classPrefix: "",
                  addGlobalClass: !1,
                  templateEngine: null,
                  renderingMode: "full",
                  multipleSlots: !1,
                  reflectToAttributes: !1
                }
              })
            };
            x(), n.initBackend = function () {
              x()
            };
            var E = function (e) {
                var n = "";
                if (e instanceof t.Element && (e.id && (n += ' id="' + e.id + '"'), e.slot && (n += ' slot="' + e.slot + '"'), e.__slotName && (n += ' name="' + e.__slotName + '"'), e.classList && (n += ' class="' + e.class + '"'), "dom" === w.documentBackend && e.$$ && e.$$.getAttribute("style") && (n += ' style="' + e.$$.getAttribute("style") + '"')), e instanceof t.VirtualNode) return n;
                if (e instanceof t.Component) return u.listPublicProperties(e).forEach((function (t) {
                  n += " " + t + "=" + JSON.stringify(e[t])
                })), n;
                for (var r = e.attributes, i = 0; i < r.length; i++) n += " " + r[i].name + '="' + r[i].value + '"';
                return n
              },
              B = n.dumpElementToString = function (e, n, r) {
                var i = null;
                "dom" === w.documentBackend && (i = window);
                var o = 0,
                  a = "";
                for (o = r = r || 0; o; o--) a += "  ";
                var s = "";
                if (e instanceof t.Element) s += a + "<" + ("dom" === w.documentBackend && e.$$ ? e.$$.tagName.toLowerCase() + ":" : "") + e.is + E(e) + ">", s += e instanceof t.VirtualNode ? " [Exp-Virtual]" : e instanceof t.NativeNode ? " [Exp-Native]" : " [Exp-Component]", s += "\n" + B(n ? e.__wxSlotChildren : e.childNodes, n, r + 1);
                else if (e instanceof t.TextNode) s += a + e.textContent + " [Exp-Text]\n";
                else if (i && i.HTMLElement && e instanceof i.HTMLElement) s += a + "<" + e.tagName.toLowerCase() + E(e) + "> [DOM-Element]", s += "\n" + B(n && e.__wxSlotChildren || e.childNodes, n, r + 1);
                else if (i && i.Text && e instanceof i.Text) s += a + e.textContent + " [DOM-Text]\n";
                else if (void 0 !== e.length)
                  for (o = 0; o < e.length; o++) s += B(e[o], n, r);
                else s = a + "[unknown node]\n";
                return s
              };
            n.dumpElement = function (e, t) {
              console.log(B(e, t))
            }
          }, function (e, t, n) {
            var r = null,
              i = function () {},
              o = i.stats = {
                all: 0,
                copyIn: 0,
                parse: 0,
                constructOut: 0
              },
              a = function (e) {
                return r.llparser_create_descriptor(e, 1)
              },
              s = function (e, t) {
                var n = r.llparser_create_descriptor(e, 0),
                  i = !1;
                "^" === t[0] && (i = !0);
                for (var o = i ? 1 : 0; o < t.length; o++) {
                  var a = t.charCodeAt(o);
                  if ("-" === t[o + 1]) {
                    var s = t.charCodeAt(o + 2);
                    a <= s ? (r.llparser_descriptor_add_range(n, a, s), o += 2) : r.llparser_descriptor_add_char(n, a)
                  } else r.llparser_descriptor_add_char(n, a)
                }
                return i && r.llparser_descriptor_revert(n), n
              };
            i.create = function (e, t, o) {
              r || (r = n(2));
              var l = new i;
              o = o || 16384;
              var c = l._llp = r.llparser_create(o, 128, 128),
                A = {},
                u = {},
                f = "";
              for (f in A.ALL = r.llparser_create_descriptor(c, 0), r.llparser_descriptor_set_all(A.ALL), A.NULL = r.llparser_create_descriptor(c, 0), r.llparser_descriptor_set_nil(A.NULL), e) A[f] = a(c);
              for (f in e)
                for (var d = e[f], p = A[f], g = 0; g < d.length; g++) {
                  for (var h = d[g].id, _ = d[g].states, v = [], b = 0; b < _.length; b++) {
                    var m = _[b];
                    A[m] || (A[m] = s(c, m)), v.push(A[m])
                  }
                  var w = 0;
                  "_raw" === h ? w = 1 : "_jump" === h ? w = 65536 : "_blank" === h && (w = 65537);
                  var y = r.llparser_add_rule(c, w, p, v.length, v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7]);
                  0 === w && (u[y] = t[h])
                }
              return r.llparser_prepare(c), l._inputPtr = r.llparser_get_input_buffer(c), l._resultPtr = r.llparser_get_result(c), l._stateIdMap = A, l._ruleCbMap = u, l._charCountLimit = o, l
            };
            i.prototype.parse = function (e, t) {
              var n = Date.now();
              (function (e, t, n, r) {
                for (var i = r > e.length ? e.length : r, o = 0; o < i; o++) t[n + o] = e.charCodeAt(o);
                t[n + i] = 0
              })(t, new Uint16Array(r.memory.buffer), this._inputPtr >> 1, this._charCountLimit), o.copyIn = o.copyIn + Date.now() - n, n = Date.now();
              var i = r.llparser_parse(this._llp, this._stateIdMap[e]);
              if (o.parse = o.parse + Date.now() - n, n = Date.now(), i) throw new Error("Parsing failed at character position " + (i - 1) + ' near "' + t.slice(i - 20, i) + '"');
              var a = function (e, t, n, r, i) {
                for (var o = [], a = {
                    i: 0,
                    r: 0,
                    n: !1,
                    cc: -1,
                    c: []
                  }, s = a, l = i.pos, c = !1, A = !1, u = !1;;) {
                  var f = t[l],
                    d = t[l + 1];
                  if (d < 0 ? (A = !0, d = -d - 1) : A = !1, f >= 0) {
                    u = !0;
                    var p = n.slice(f, d);
                    s.c.push(p), c = A
                  } else {
                    if (-1 === f && 0 === d) break;
                    u = !1;
                    var g = -f,
                      h = d,
                      _ = {
                        i: s.c.length - (c ? 1 : 0),
                        r: g,
                        n: A,
                        cc: h,
                        c: []
                      };
                    if (c) {
                      var v = s.c.length - 1,
                        b = s.c[v];
                      _.c.push(b), s.c[v] = _
                    } else s.c.push(_);
                    o.push(s), s = _, c = !1
                  }
                  if (!u || !c)
                    for (; s.c.length === s.cc;) {
                      c = s.n;
                      var m = o.pop();
                      if (m.c[s.i] = r[s.r].call(e, s.c), s = m, c) break
                    }
                  l += 2
                }
                return a.c[0]
              }(this, new Int32Array(r.memory.buffer), t, this._ruleCbMap, {
                pos: this._resultPtr >> 2
              });
              return o.constructOut = o.constructOut + Date.now() - n, a
            }, i.prototype.destroy = function () {
              r.llparser_destroy(this._llp)
            }, e.exports = i
          }, function (e, t) {
            e.exports = function (e) {
              function t(r) {
                if (n[r]) return n[r].exports;
                var i = n[r] = {
                  i: r,
                  l: !1,
                  exports: {}
                };
                return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
              }
              var n = {};
              return t.m = e, t.c = n, t.d = function (e, n, r) {
                t.o(e, n) || Object.defineProperty(e, n, {
                  enumerable: !0,
                  get: r
                })
              }, t.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                  value: !0
                })
              }, t.t = function (e, n) {
                if (1 & n && (e = t(e)), 8 & n) return e;
                if (4 & n && "object" == typeof e && e && e.__esModule) return e;
                var r = Object.create(null);
                if (t.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                  }), 2 & n && "string" != typeof e)
                  for (var i in e) t.d(r, i, function (t) {
                    return e[t]
                  }.bind(null, i));
                return r
              }, t.n = function (e) {
                var n = e && e.__esModule ? function () {
                  return e.default
                } : function () {
                  return e
                };
                return t.d(n, "a", n), n
              }, t.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
              }, t.p = "", t(t.s = 0)
            }([function (e, t, n) {
              "use strict";

              function r(e, t, n) {
                return _.llparser_create(e, t, n)
              }

              function i(e) {
                _.llparser_destroy(e)
              }

              function o(e, t) {
                return _.llparser_create_descriptor(e, t)
              }

              function a(e) {
                _.llparser_descriptor_set_all(e)
              }

              function s(e) {
                _.llparser_descriptor_set_nil(e)
              }

              function l(e, t) {
                _.llparser_descriptor_add_char(e, t)
              }

              function c(e, t, n) {
                _.llparser_descriptor_add_range(e, t, n)
              }

              function A(e) {
                _.llparser_descriptor_revert(e)
              }

              function u(e, t, n, r, i, o, a, s, l, c, A, u) {
                return _.llparser_add_rule(e, t, n, r, i, o, a, s, l, c, A, u)
              }

              function f(e) {
                _.llparser_prepare(e)
              }

              function d(e, t) {
                return _.llparser_parse(e, t)
              }

              function p(e) {
                return _.llparser_get_input_buffer(e)
              }

              function g(e) {
                return _.llparser_get_result(e)
              }

              function h() {
                _.wasm_main()
              }
              n.r(t), n.d(t, "llparser_create", (function () {
                return r
              })), n.d(t, "llparser_destroy", (function () {
                return i
              })), n.d(t, "llparser_create_descriptor", (function () {
                return o
              })), n.d(t, "llparser_descriptor_set_all", (function () {
                return a
              })), n.d(t, "llparser_descriptor_set_nil", (function () {
                return s
              })), n.d(t, "llparser_descriptor_add_char", (function () {
                return l
              })), n.d(t, "llparser_descriptor_add_range", (function () {
                return c
              })), n.d(t, "llparser_descriptor_revert", (function () {
                return A
              })), n.d(t, "llparser_add_rule", (function () {
                return u
              })), n.d(t, "llparser_prepare", (function () {
                return f
              })), n.d(t, "llparser_parse", (function () {
                return d
              })), n.d(t, "llparser_get_input_buffer", (function () {
                return p
              })), n.d(t, "llparser_get_result", (function () {
                return g
              })), n.d(t, "wasm_main", (function () {
                return h
              })), n.d(t, "memory", (function () {
                return v
              }));
              var _ = n(1),
                v = _.memory;
              _.__wbindgen_start()
            }, function (e, t, n) {
              "use strict";
              n.r(t), n.d(t, "memory", (function () {
                return o
              })), n.d(t, "rust_calloc", (function () {
                return a
              })), n.d(t, "rust_free", (function () {
                return s
              })), n.d(t, "llparser_create", (function () {
                return l
              })), n.d(t, "llparser_destroy", (function () {
                return c
              })), n.d(t, "llparser_create_descriptor", (function () {
                return A
              })), n.d(t, "llparser_descriptor_set_all", (function () {
                return u
              })), n.d(t, "llparser_descriptor_set_nil", (function () {
                return f
              })), n.d(t, "llparser_descriptor_add_char", (function () {
                return d
              })), n.d(t, "llparser_descriptor_add_range", (function () {
                return p
              })), n.d(t, "llparser_descriptor_revert", (function () {
                return g
              })), n.d(t, "llparser_add_rule", (function () {
                return h
              })), n.d(t, "llparser_prepare", (function () {
                return _
              })), n.d(t, "llparser_parse", (function () {
                return v
              })), n.d(t, "llparser_get_input_buffer", (function () {
                return b
              })), n.d(t, "llparser_get_result", (function () {
                return m
              })), n.d(t, "wasm_main", (function () {
                return w
              })), n.d(t, "__wbindgen_start", (function () {
                return y
              }));
              var r = new ArrayBuffer(1114112),
                i = function (e, t, n) {
                  function r(e) {
                    var t = 0,
                      n = 0,
                      r = 0,
                      i = 0,
                      o = 0,
                      l = 0,
                      c = 0;
                    n = (t = e + -8 | 0) + (e = -8 & (i = p[e + -4 >> 2])) | 0;
                    e: {
                      t: {
                        n: {
                          r: {
                            i: if (!(1 & i)) {
                              if (!(3 & i)) break r;
                              if (e = (i = p[t >> 2]) + e | 0, (0 | (t = t - i | 0)) == p[262246]) {
                                if (3 != (3 & p[n + 4 >> 2])) break i;
                                return p[262244] = e, p[n + 4 >> 2] = -2 & p[n + 4 >> 2], p[t + 4 >> 2] = 1 | e, void(p[e + t >> 2] = e)
                              }
                              i >>> 0 >= 256 ? s(t) : (0 | (r = p[t + 8 >> 2])) == (0 | (o = p[t + 12 >> 2])) ? (l = 1048576, c = p[262144] & u(i >>> 3), p[l >> 2] = c) : (p[r + 12 >> 2] = o, p[o + 8 >> 2] = r)
                            }if (2 & (i = p[n + 4 >> 2])) p[n + 4 >> 2] = -2 & i,
                            p[t + 4 >> 2] = 1 | e,
                            p[e + t >> 2] = e;
                            else {
                              i: {
                                if (p[262247] != (0 | n)) {
                                  if ((0 | n) != p[262246]) break i;
                                  return p[262246] = t, e = p[262244] + e | 0, p[262244] = e, p[t + 4 >> 2] = 1 | e, void(p[e + t >> 2] = e)
                                }
                                if (p[262247] = t, e = p[262245] + e | 0, p[262245] = e, p[t + 4 >> 2] = 1 | e, (0 | t) == p[262246] && (p[262244] = 0, p[262246] = 0), (n = p[262254]) >>> 0 >= e >>> 0) break r;
                                if (!(e = p[262247])) break r;o: if (!((i = p[262245]) >>> 0 < 41))
                                  for (t = 1049e3;;) {
                                    if ((r = p[t >> 2]) + p[t + 4 >> 2] >>> 0 > e >>> 0 && r >>> 0 <= e >>> 0) break o;
                                    if (!(t = p[t + 8 >> 2])) break
                                  }
                                if (r = 4095, e = p[262252]) {
                                  for (t = 0; t = t + 1 | 0, e = p[e + 8 >> 2];);
                                  r = t >>> 0 > 4095 ? t : 4095
                                }
                                if (p[262256] = r, i >>> 0 <= n >>> 0) break r;
                                return void(p[262254] = -1)
                              }
                              if (e = (r = -8 & i) + e | 0, r >>> 0 >= 256 ? s(n) : (0 | (r = p[n + 12 >> 2])) == (0 | (n = p[n + 8 >> 2])) ? (l = 1048576, c = p[262144] & u(i >>> 3), p[l >> 2] = c) : (p[n + 12 >> 2] = r, p[r + 8 >> 2] = n), p[t + 4 >> 2] = 1 | e, p[e + t >> 2] = e, p[262246] == (0 | t)) {
                                p[262244] = e;
                                break r
                              }
                            }
                            if (e >>> 0 < 256) break n;
                            if (a(t, e), e = p[262256] + -1 | 0, p[262256] = e, !e) {
                              if (e = p[262252]) break t;
                              e = 4095;
                              break e
                            }
                          }
                          return
                        }
                        return e = 1048584 + ((n = e >>> 3) << 3) | 0,
                        i = p[262144],
                        n = 1 << (31 & n),
                        r = p[e + 8 >> 2],
                        i & n || (p[262144] = n | i, r = e),
                        n = r,
                        p[e + 8 >> 2] = t,
                        p[n + 12 >> 2] = t,
                        p[t + 12 >> 2] = e,
                        void(p[t + 8 >> 2] = n)
                      }
                      for (t = 0; t = t + 1 | 0, e = p[e + 8 >> 2];);e = t >>> 0 > 4095 ? t : 4095
                    }
                    p[262256] = e
                  }

                  function i(e, t, n, r, o) {
                    var a;
                    if (m = a = m - 48 | 0, p[a + 44 >> 2] = e, p[a + 40 >> 2] = t, p[a + 36 >> 2] = n, p[a + 32 >> 2] = r, p[a + 28 >> 2] = o, p[p[a + 40 >> 2] >> 2] != p[a + 36 >> 2])
                      for (p[p[a + 40 >> 2] >> 2] = p[a + 36 >> 2], p[a + 24 >> 2] = p[p[a + 40 >> 2] + 136 >> 2], p[a + 20 >> 2] = 1 & (0 != p[a + 28 >> 2] ^ -1 ^ -1); p[a + 24 >> 2];) {
                        for (p[a + 20 >> 2] || (p[a + 28 >> 2] = p[a + 24 >> 2]), p[a + 16 >> 2] = p[p[p[a + 24 >> 2] >> 2] + 8 >> 2], 1 == p[p[a + 16 >> 2] + 4 >> 2] && i(p[a + 44 >> 2], p[a + 16 >> 2], p[a + 36 >> 2], p[a + 32 >> 2], p[a + 28 >> 2]), p[a + 12 >> 2] = 0; !(p[a + 12 >> 2] >= 128);) g[p[a + 12 >> 2] + (p[a + 16 >> 2] + 8 | 0) | 0] && (_[p[a + 28 >> 2] >> 2] >= _[p[a + 32 >> 2] + (p[a + 12 >> 2] << 2) >> 2] && p[p[a + 32 >> 2] + (p[a + 12 >> 2] << 2) >> 2] || (p[p[a + 32 >> 2] + (p[a + 12 >> 2] << 2) >> 2] = p[p[a + 28 >> 2] >> 2])), p[a + 12 >> 2] = p[a + 12 >> 2] + 1;
                        p[a + 24 >> 2] = p[p[a + 24 >> 2] + 4 >> 2]
                      }
                    m = a + 48 | 0
                  }

                  function o(e, t, n, r) {
                    var i;
                    for (p[44 + (i = m - 48 | 0) >> 2] = e, p[i + 40 >> 2] = t, p[i + 36 >> 2] = n, p[i + 32 >> 2] = r, p[i + 28 >> 2] = p[p[i + 40 >> 2] + 136 >> 2]; p[i + 28 >> 2];) {
                      if (p[i + 24 >> 2] = p[p[p[i + 28 >> 2] >> 2] + 8 >> 2], p[i + 24 >> 2] == p[i + 40 >> 2])
                        for (p[i + 20 >> 2] = p[p[p[i + 28 >> 2] >> 2] + 12 >> 2], p[i + 16 >> 2] = 0; !(p[i + 16 >> 2] >= 128);) {
                          e: {
                            if (1 != p[p[i + 20 >> 2] + 4 >> 2]) {
                              if (!g[p[i + 16 >> 2] + (p[i + 20 >> 2] + 8 | 0) | 0]) break e
                            } else if (p[i + 12 >> 2] = p[p[i + 44 >> 2] + 32 >> 2] + ((p[i + 20 >> 2] - p[p[i + 44 >> 2] + 24 >> 2] | 0) / 140 << 9), !p[p[i + 12 >> 2] + (p[i + 16 >> 2] << 2) >> 2]) break e;_[p[i + 28 >> 2] >> 2] >= _[p[i + 32 >> 2] + (p[i + 16 >> 2] << 2) >> 2] && p[p[i + 32 >> 2] + (p[i + 16 >> 2] << 2) >> 2] || (p[p[i + 32 >> 2] + (p[i + 16 >> 2] << 2) >> 2] = p[p[i + 28 >> 2] >> 2])
                          }
                          p[i + 16 >> 2] = p[i + 16 >> 2] + 1
                        }
                      p[i + 28 >> 2] = p[p[i + 28 >> 2] + 4 >> 2]
                    }
                  }

                  function a(e, t) {
                    var n = 0,
                      r = 0,
                      i = 0,
                      o = 0;
                    p[e + 16 >> 2] = 0, p[e + 20 >> 2] = 0, i = e, n = 0, (r = t >>> 8) && (n = 31, t >>> 0 > 16777215 || (n = 62 + ((t >>> (6 - (r = b(r)) & 31) & 1) - (r << 1) | 0) | 0)), p[i + 28 >> 2] = n, i = 1048848 + (n << 2) | 0;
                    e: {
                      t: {
                        n: {
                          r: {
                            if ((o = p[262145]) & (r = 1 << (31 & n))) {
                              if (r = p[i >> 2], (-8 & p[r + 4 >> 2]) != (0 | t)) break r;
                              n = r;
                              break n
                            }
                            p[262145] = r | o,
                            p[i >> 2] = e,
                            p[e + 24 >> 2] = i;
                            break e
                          }
                          for (i = t << (31 == (0 | n) ? 0 : 25 - (n >>> 1) & 31);;) {
                            if (!(n = p[(o = 16 + ((i >>> 29 & 4) + r | 0) | 0) >> 2])) break t;
                            if (i <<= 1, r = n, (-8 & p[n + 4 >> 2]) == (0 | t)) break
                          }
                        }
                        return t = p[n + 8 >> 2],
                        p[t + 12 >> 2] = e,
                        p[n + 8 >> 2] = e,
                        p[e + 24 >> 2] = 0,
                        p[e + 12 >> 2] = n,
                        void(p[e + 8 >> 2] = t)
                      }
                      p[o >> 2] = e,
                      p[e + 24 >> 2] = r
                    }
                    p[e + 12 >> 2] = e, p[e + 8 >> 2] = e
                  }

                  function s(e) {
                    var t, n = 0,
                      r = 0,
                      i = 0,
                      o = 0,
                      a = 0,
                      s = 0;
                    t = p[e + 24 >> 2];
                    e: {
                      t: {
                        if ((0 | e) == (0 | (n = p[e + 12 >> 2]))) {
                          if (i = p[(n = e + 20 | 0) >> 2], r = p[(i ? 20 : 16) + e >> 2]) break t;
                          n = 0;
                          break e
                        }
                        r = p[e + 8 >> 2],
                        p[r + 12 >> 2] = n,
                        p[n + 8 >> 2] = r;
                        break e
                      }
                      for (i = i ? n : e + 16 | 0; o = i, (r = p[(i = (n = r) + 20 | 0) >> 2]) || (i = n + 16 | 0, r = p[n + 16 >> 2]), r;);p[o >> 2] = 0
                    }
                    e: if (t) {
                      r = 1048848 + (p[e + 28 >> 2] << 2) | 0;
                      t: {
                        if ((0 | e) == p[r >> 2]) {
                          if (p[r >> 2] = n, n) break t;
                          return a = 1048580, s = p[262145] & u(p[e + 28 >> 2]), void(p[a >> 2] = s)
                        }
                        if (p[(p[t + 16 >> 2] == (0 | e) ? 16 : 20) + t >> 2] = n, !n) break e
                      }
                      p[n + 24 >> 2] = t, (r = p[e + 16 >> 2]) && (p[n + 16 >> 2] = r, p[r + 24 >> 2] = n), (e = p[e + 20 >> 2]) && (p[n + 20 >> 2] = e, p[e + 24 >> 2] = n)
                    }
                  }

                  function l(e, t) {
                    return 0 | function (e) {
                      var t;
                      return !(t = function (e) {
                        var t = 0,
                          n = 0,
                          r = 0,
                          i = 0,
                          o = 0,
                          l = 0,
                          c = 0,
                          d = 0,
                          g = 0,
                          h = 0,
                          v = 0;
                        e: {
                          t: {
                            n: {
                              if (e >>> 0 >= 245) {
                                if (e >>> 0 >= 4294901709) break t;
                                if (i = -8 & (e = e + 11 | 0), !(d = p[262145])) break n;
                                n = 0 - i | 0, c = 0, (e >>>= 8) && (c = 31, i >>> 0 > 16777215 || (c = 62 + ((i >>> (6 - (e = b(e)) & 31) & 1) - (e << 1) | 0) | 0));
                                r: {
                                  i: {
                                    if (e = p[1048848 + (c << 2) >> 2]) {
                                      for (o = i << (31 == (0 | c) ? 0 : 25 - (c >>> 1) & 31);;) {
                                        if (!((l = -8 & p[e + 4 >> 2]) >>> 0 < i >>> 0 || (l = l - i | 0) >>> 0 >= n >>> 0 || (r = e, n = l))) {
                                          n = 0;
                                          break i
                                        }
                                        if (l = p[e + 20 >> 2], e = p[16 + ((o >>> 29 & 4) + e | 0) >> 2], t = l && (0 | l) != (0 | e) ? l : t, o <<= 1, !e) break
                                      }
                                      if (t) {
                                        e = t;
                                        break i
                                      }
                                      if (r) break r
                                    }
                                    if (r = 0, !(e = (0 - (e = 2 << (31 & c)) | e) & d)) break n;
                                    if (!(e = p[1048848 + (A(e & 0 - e) << 2) >> 2])) break n
                                  }
                                  for (; r = (l = (o = (t = -8 & p[e + 4 >> 2]) - i | 0) >>> 0 < n >>> 0 & t >>> 0 >= i >>> 0) ? e : r, n = l ? o : n, e = (t = p[e + 16 >> 2]) || p[e + 20 >> 2];);
                                  if (!r) break n
                                }
                                if (n >>> 0 >= (e = p[262244]) - i >>> 0 && e >>> 0 >= i >>> 0) break n;
                                s(r);
                                r: if (n >>> 0 >= 16) {
                                  if (p[r + 4 >> 2] = 3 | i, p[4 + (t = r + i | 0) >> 2] = 1 | n, p[t + n >> 2] = n, n >>> 0 >= 256) {
                                    a(t, n);
                                    break r
                                  }
                                  e = 1048584 + ((n >>>= 3) << 3) | 0, o = p[262144], n = 1 << (31 & n), c = p[e + 8 >> 2], o & n || (p[262144] = n | o, c = e), n = c, p[e + 8 >> 2] = t, p[n + 12 >> 2] = t, p[t + 12 >> 2] = e, p[t + 8 >> 2] = n
                                } else e = n + i | 0, p[r + 4 >> 2] = 3 | e, p[4 + (e = e + r | 0) >> 2] = 1 | p[e + 4 >> 2];
                                return r + 8 | 0
                              }
                              r: {
                                i: {
                                  if (!(3 & (e = (t = p[262144]) >>> (r = 31 & (n = (i = e >>> 0 < 11 ? 16 : e + 11 & -8) >>> 3))))) {
                                    if (i >>> 0 <= _[262244]) break n;
                                    if (e) break i;
                                    if (!(e = p[262145])) break n;
                                    for (t = p[1048848 + (A(e & 0 - e) << 2) >> 2], n = (-8 & p[t + 4 >> 2]) - i | 0, o = t;;) {
                                      if (!(e = p[t + 16 >> 2]) && !(e = p[t + 20 >> 2])) break r;
                                      n = (t = (r = (-8 & p[e + 4 >> 2]) - i | 0) >>> 0 < n >>> 0) ? r : n, o = t ? e : o, t = e
                                    }
                                  }
                                  n = (e = p[1048592 + (l = (r = n + (1 & (-1 ^ e)) | 0) << 3) >> 2]) + 8 | 0,
                                  (0 | (o = p[e + 8 >> 2])) == (0 | (l = l + 1048584 | 0)) ? (h = 1048576, v = u(r) & t, p[h >> 2] = v) : (p[o + 12 >> 2] = l, p[l + 8 >> 2] = o),
                                  t = r << 3,
                                  p[e + 4 >> 2] = 3 | t,
                                  p[4 + (e = e + t | 0) >> 2] = 1 | p[e + 4 >> 2];
                                  break t
                                }
                                return r = A(0 - (e = (n = e << r) & (0 - (e = 2 << r) | e)) & e),
                                e = p[1048592 + (o = r << 3) >> 2],
                                (0 | (n = p[e + 8 >> 2])) == (0 | (o = o + 1048584 | 0)) ? (h = 1048576, v = u(r) & t, p[h >> 2] = v) : (p[n + 12 >> 2] = o, p[o + 8 >> 2] = n),
                                o = e + 8 | 0,
                                p[e + 4 >> 2] = 3 | i,
                                n = (t = r << 3) - i | 0,
                                p[4 + (l = e + i | 0) >> 2] = 1 | n,
                                p[e + t >> 2] = n,
                                (e = p[262244]) && (e = 1048584 + ((r = e >>> 3) << 3) | 0, t = p[262246], i = p[262144], r = 1 << (31 & r), c = p[e + 8 >> 2], i & r || (p[262144] = r | i, c = e), r = c, p[e + 8 >> 2] = t, p[r + 12 >> 2] = t, p[t + 12 >> 2] = e, p[t + 8 >> 2] = r),
                                p[262246] = l,
                                p[262244] = n,
                                o
                              }
                              return s(o),
                              n >>> 0 >= 16 ? (p[o + 4 >> 2] = 3 | i, p[4 + (l = i + o | 0) >> 2] = 1 | n, p[n + l >> 2] = n, (e = p[262244]) && (e = 1048584 + ((r = e >>> 3) << 3) | 0, t = p[262246], i = p[262144], r = 1 << (31 & r), c = p[e + 8 >> 2], i & r || (p[262144] = r | i, c = e), r = c, p[e + 8 >> 2] = t, p[r + 12 >> 2] = t, p[t + 12 >> 2] = e, p[t + 8 >> 2] = r), p[262246] = l, p[262244] = n) : (e = n + i | 0, p[o + 4 >> 2] = 3 | e, p[4 + (e = e + o | 0) >> 2] = 1 | p[e + 4 >> 2]),
                              o + 8 | 0
                            }
                            n: {
                              r: {
                                i: {
                                  o: {
                                    if ((t = p[262244]) >>> 0 < i >>> 0) {
                                      if ((e = p[262245]) >>> 0 > i >>> 0) break e;
                                      if (n = 0, -1 == (0 | (t = f((e = i + 65583 | 0) >>> 16)))) break t;
                                      if (!(r = t << 16)) break t;
                                      if (e = (o = -65536 & e) + p[262248] | 0, p[262248] = e, t = p[262249], p[262249] = t >>> 0 > e >>> 0 ? t : e, !(n = p[262247])) break o;
                                      for (e = 1049e3;;) {
                                        if ((0 | r) == ((t = p[e >> 2]) + (l = p[e + 4 >> 2]) | 0)) break i;
                                        if (!(e = p[e + 8 >> 2])) break
                                      }
                                      break r
                                    }
                                    return e = p[262246],
                                    (r = t - i | 0) >>> 0 <= 15 ? (p[262246] = 0, p[262244] = 0, p[e + 4 >> 2] = 3 | t, i = 4 + (t = e + t | 0) | 0, n = 1 | p[t + 4 >> 2]) : (p[262244] = r, n = e + i | 0, p[262246] = n, p[n + 4 >> 2] = 1 | r, p[e + t >> 2] = r, n = 3 | i, i = e + 4 | 0),
                                    p[i >> 2] = n,
                                    e + 8 | 0
                                  }
                                  for ((e = p[262255]) >>> 0 <= r >>> 0 && e || (p[262255] = r), e = 0, p[262256] = 4095, p[262251] = o, p[262250] = r, p[262253] = 0; t = e + 1048584 | 0, p[e + 1048592 >> 2] = t, p[e + 1048596 >> 2] = t, 256 != (0 | (e = e + 8 | 0)););p[262247] = r,
                                  e = o + -40 | 0,
                                  p[262245] = e,
                                  p[r + 4 >> 2] = 1 | e,
                                  p[4 + (e + r | 0) >> 2] = 40,
                                  p[262254] = 2097152;
                                  break n
                                }
                                if (!(p[e + 12 >> 2] | r >>> 0 <= n >>> 0 | t >>> 0 > n >>> 0)) {
                                  p[e + 4 >> 2] = o + l, t = (e = p[262247]) + 15 & -8, p[262247] = t + -8, n = 8 + ((r = o + p[262245] | 0) + (e - t | 0) | 0) | 0, p[262245] = n, p[t + -4 >> 2] = 1 | n, p[4 + (e + r | 0) >> 2] = 40, p[262254] = 2097152;
                                  break n
                                }
                              }
                              e = p[262255],
                              p[262255] = e >>> 0 < r >>> 0 ? e : r,
                              t = r + o | 0,
                              e = 1049e3;r: {
                                for (;;) {
                                  if ((0 | t) != p[e >> 2]) {
                                    if (e = p[e + 8 >> 2]) continue;
                                    break r
                                  }
                                  break
                                }
                                if (!p[e + 12 >> 2]) {
                                  p[e >> 2] = r, p[e + 4 >> 2] = o + p[e + 4 >> 2], p[r + 4 >> 2] = 3 | i, o = r + i | 0, i = (t - r | 0) - i | 0;
                                  i: {
                                    o: {
                                      if ((0 | t) != p[262247]) {
                                        if (p[262246] == (0 | t)) break o;
                                        if (1 == (3 & (e = p[t + 4 >> 2])) && ((n = -8 & e) >>> 0 >= 256 ? s(t) : (0 | (l = p[t + 12 >> 2])) == (0 | (c = p[t + 8 >> 2])) ? (h = 1048576, v = p[262144] & u(e >>> 3), p[h >> 2] = v) : (p[c + 12 >> 2] = l, p[l + 8 >> 2] = c), i = n + i | 0, t = t + n | 0), p[t + 4 >> 2] = -2 & p[t + 4 >> 2], p[o + 4 >> 2] = 1 | i, p[i + o >> 2] = i, i >>> 0 >= 256) {
                                          a(o, i);
                                          break i
                                        }
                                        e = 1048584 + ((t = i >>> 3) << 3) | 0, n = p[262144], t = 1 << (31 & t), c = p[e + 8 >> 2], n & t || (p[262144] = t | n, c = e), n = c, p[e + 8 >> 2] = o, p[n + 12 >> 2] = o, p[o + 12 >> 2] = e, p[o + 8 >> 2] = n;
                                        break i
                                      }
                                      p[262247] = o,
                                      e = p[262245] + i | 0,
                                      p[262245] = e,
                                      p[o + 4 >> 2] = 1 | e;
                                      break i
                                    }
                                    p[262246] = o,
                                    e = p[262244] + i | 0,
                                    p[262244] = e,
                                    p[o + 4 >> 2] = 1 | e,
                                    p[e + o >> 2] = e
                                  }
                                  return r + 8 | 0
                                }
                              }
                              for (e = 1049e3; !((t = p[e >> 2]) >>> 0 <= n >>> 0 && (l = t + p[e + 4 >> 2] | 0) >>> 0 > n >>> 0);) e = p[e + 8 >> 2];
                              for (p[262247] = r, e = o + -40 | 0, p[262245] = e, p[r + 4 >> 2] = 1 | e, p[4 + (e + r | 0) >> 2] = 40, p[262254] = 2097152, p[(t = (e = (l + -32 & -8) - 8 | 0) >>> 0 < n + 16 >>> 0 ? n : e) + 4 >> 2] = 27, e = p[262250], c = p[262251], g = p[262253], p[(d = t + 16 | 0) >> 2] = p[262252], p[d + 4 >> 2] = g, p[t + 8 >> 2] = e, p[t + 12 >> 2] = c, p[262251] = o, p[262250] = r, p[262252] = t + 8, p[262253] = 0, e = t + 28 | 0; p[e >> 2] = 7, l >>> 0 > (e = e + 4 | 0) >>> 0;);
                              (0 | t) != (0 | n) && (p[t + 4 >> 2] = -2 & p[t + 4 >> 2], e = t - n | 0, p[n + 4 >> 2] = 1 | e, p[t >> 2] = e, e >>> 0 >= 256 ? a(n, e) : (e = 1048584 + ((t = e >>> 3) << 3) | 0, r = p[262144], t = 1 << (31 & t), c = p[e + 8 >> 2], r & t || (p[262144] = t | r, c = e), t = c, p[e + 8 >> 2] = n, p[t + 12 >> 2] = n, p[n + 12 >> 2] = e, p[n + 8 >> 2] = t))
                            }
                            if (n = 0, !((e = p[262245]) >>> 0 <= i >>> 0)) break e
                          }
                          return n
                        }
                        return t = e - i | 0, p[262245] = t, r = (e = p[262247]) + i | 0, p[262247] = r, p[r + 4 >> 2] = 1 | t, p[e + 4 >> 2] = 3 | i, e + 8 | 0
                      }(e)) | !(3 & g[t + -4 | 0]) || function (e, t) {
                        if (t)
                          for (; d[0 | e] = 0, e = e + 1 | 0, t = t + -1 | 0;);
                      }(t, e), t
                    }(v(e |= 0, t |= 0))
                  }

                  function c() {}

                  function A(e) {
                    return e ? 31 - b(e + -1 ^ e) | 0 : 32
                  }

                  function u(e) {
                    var t;
                    return (-1 >>> (t = 31 & e) & -2) << t | (-1 << (e = 0 - e & 31) & -2) >>> e
                  }

                  function f(t) {
                    t |= 0;
                    var r = 0 | n.byteLength / 65536,
                      i = r + t | 0;
                    if (r < i && i < 65536) {
                      var o = new ArrayBuffer(v(i, 65536)),
                        a = new e.Int8Array(o);
                      a.set(d), d = a, d = new e.Int8Array(o), new e.Int16Array(o), p = new e.Int32Array(o), g = new e.Uint8Array(o), h = new e.Uint16Array(o), _ = new e.Uint32Array(o), new e.Float32Array(o), new e.Float64Array(o), n = o
                    }
                    return r
                  }
                  var d = new e.Int8Array(n),
                    p = (new e.Int16Array(n), new e.Int32Array(n)),
                    g = new e.Uint8Array(n),
                    h = new e.Uint16Array(n),
                    _ = new e.Uint32Array(n),
                    v = (new e.Float32Array(n), new e.Float64Array(n), e.Math.imul),
                    b = (e.Math.fround, e.Math.abs, e.Math.clz32),
                    m = (e.Math.min, e.Math.max, e.Math.floor, e.Math.ceil, e.Math.sqrt, e.NaN, e.Infinity, 1048576);
                  return {
                    memory: Object.create(Object.prototype, {
                      grow: {
                        value: f
                      },
                      buffer: {
                        get: function () {
                          return n
                        }
                      }
                    }),
                    rust_calloc: l,
                    rust_free: function (e) {
                      r(e |= 0)
                    },
                    llparser_create: function (e, t, n) {
                      return 0 | function (e, t, n) {
                        var r, i, o;
                        return m = r = m - 32 | 0, p[r + 28 >> 2] = e, p[r + 24 >> 2] = t, p[r + 20 >> 2] = n, e = r, t = p[r + 28 >> 2] ? p[r + 28 >> 2] : 256, p[e + 28 >> 2] = t, e = r, t = p[r + 24 >> 2] ? p[r + 24 >> 2] : 256, p[e + 24 >> 2] = t, e = r, t = p[r + 20 >> 2] ? p[r + 20 >> 2] : 256, p[e + 20 >> 2] = t, i = r, o = l(((((((v(p[r + 24 >> 2], 140) + 52 | 0) + v(p[r + 20 >> 2], 44) | 0) + (p[r + 24 >> 2] << 9) | 0) + (p[r + 24 >> 2] << 9) | 0) + v(p[r + 20 >> 2], p[r + 24 >> 2] << 3) | 0) + (p[r + 28 >> 2] << 1) | 0) + (p[r + 28 >> 2] << 3) | 0, 1), p[i + 16 >> 2] = o, p[p[r + 16 >> 2] + 12 >> 2] = p[r + 28 >> 2], p[p[r + 16 >> 2] + 16 >> 2] = p[r + 24 >> 2], p[p[r + 16 >> 2] + 20 >> 2] = p[r + 20 >> 2], p[p[r + 16 >> 2] + 4 >> 2] = 0, p[p[r + 16 >> 2] >> 2] = 0, p[p[r + 16 >> 2] + 8 >> 2] = 0, p[r + 12 >> 2] = p[r + 16 >> 2] + 52, p[p[r + 16 >> 2] + 24 >> 2] = p[r + 12 >> 2], p[r + 12 >> 2] = p[r + 12 >> 2] + v(p[r + 24 >> 2], 140), p[p[r + 16 >> 2] + 28 >> 2] = p[r + 12 >> 2], p[r + 12 >> 2] = p[r + 12 >> 2] + v(p[r + 20 >> 2], 44), p[p[r + 16 >> 2] + 32 >> 2] = p[r + 12 >> 2], p[r + 12 >> 2] = p[r + 12 >> 2] + (p[r + 24 >> 2] << 9), p[p[r + 16 >> 2] + 36 >> 2] = p[r + 12 >> 2], p[r + 12 >> 2] = p[r + 12 >> 2] + (p[r + 24 >> 2] << 9), p[p[r + 16 >> 2] + 40 >> 2] = p[r + 12 >> 2], p[r + 12 >> 2] = p[r + 12 >> 2] + v(p[r + 20 >> 2], p[r + 24 >> 2] << 3), p[p[r + 16 >> 2] + 44 >> 2] = p[r + 12 >> 2], p[r + 12 >> 2] = p[r + 12 >> 2] + (p[r + 28 >> 2] << 1), p[p[r + 16 >> 2] + 48 >> 2] = p[r + 12 >> 2], m = r + 32 | 0, p[r + 16 >> 2]
                      }(e |= 0, t |= 0, n |= 0)
                    },
                    llparser_destroy: function (e) {
                      ! function (e) {
                        var t;
                        m = t = m - 16 | 0, p[t + 12 >> 2] = e, r(p[t + 12 >> 2]), m = t + 16 | 0
                      }(e |= 0)
                    },
                    llparser_create_descriptor: function (e, t) {
                      return 0 | function (e, t) {
                        var n, r;
                        return p[12 + (n = m - 16 | 0) >> 2] = e, p[n + 8 >> 2] = t, t = p[p[n + 12 >> 2] + 24 >> 2], r = p[n + 12 >> 2], e = p[r + 4 >> 2], p[r + 4 >> 2] = e + 1, p[n + 4 >> 2] = t + v(e, 140), p[p[n + 4 >> 2] + 4 >> 2] = p[n + 8 >> 2] ? 1 : 0, p[n + 4 >> 2]
                      }(e |= 0, t |= 0)
                    },
                    llparser_descriptor_set_all: function (e) {
                      var t;
                      e |= 0, p[12 + (t = m - 16 | 0) >> 2] = e, p[p[t + 12 >> 2] + 4 >> 2] = -1, d[p[t + 12 >> 2] + 135 | 0] = 1
                    },
                    llparser_descriptor_set_nil: function (e) {
                      var t;
                      e |= 0, p[12 + (t = m - 16 | 0) >> 2] = e, p[p[t + 12 >> 2] + 4 >> 2] = -2, d[p[t + 12 >> 2] + 8 | 0] = 1
                    },
                    llparser_descriptor_add_char: function (e, t) {
                      ! function (e, t) {
                        var n;
                        p[12 + (n = m - 16 | 0) >> 2] = e, p[n + 8 >> 2] = t, d[p[n + 8 >> 2] + (p[n + 12 >> 2] + 8 | 0) | 0] = 1
                      }(e |= 0, t |= 0)
                    },
                    llparser_descriptor_add_range: function (e, t, n) {
                      ! function (e, t, n) {
                        var r;
                        for (p[12 + (r = m - 16 | 0) >> 2] = e, p[r + 8 >> 2] = t, p[r + 4 >> 2] = n, p[r >> 2] = p[r + 8 >> 2]; !(p[r >> 2] > p[r + 4 >> 2]);) d[p[r >> 2] + (p[r + 12 >> 2] + 8 | 0) | 0] = 1, p[r >> 2] = p[r >> 2] + 1
                      }(e |= 0, t |= 0, n |= 0)
                    },
                    llparser_descriptor_revert: function (e) {
                      ! function (e) {
                        var t;
                        for (p[12 + (t = m - 16 | 0) >> 2] = e, p[t + 8 >> 2] = 1; !(p[t + 8 >> 2] >= 127);) d[p[t + 8 >> 2] + (p[t + 12 >> 2] + 8 | 0) | 0] = 1 & (0 != g[p[t + 8 >> 2] + (p[t + 12 >> 2] + 8 | 0) | 0] ^ -1), p[t + 8 >> 2] = p[t + 8 >> 2] + 1
                      }(e |= 0)
                    },
                    llparser_add_rule: function (e, t, n, r, i, o, a, s, l, c, A, u) {
                      return 0 | function (e, t, n, r, i, o, a, s, l, c, A, u) {
                        var f;
                        return m = f = m + -64 | 0, p[f + 60 >> 2] = e, p[f + 56 >> 2] = t, p[f + 52 >> 2] = n, p[f + 48 >> 2] = r, p[f + 44 >> 2] = i, p[f + 40 >> 2] = o, p[f + 36 >> 2] = a, p[f + 32 >> 2] = s, p[f + 28 >> 2] = l, p[f + 24 >> 2] = c, p[f + 20 >> 2] = A, p[f + 16 >> 2] = u, t = p[p[f + 60 >> 2] + 28 >> 2], n = p[f + 60 >> 2], e = p[n >> 2], p[n >> 2] = e + 1, p[f + 12 >> 2] = t + v(e, 44), p[p[f + 12 >> 2] >> 2] = p[f + 52 >> 2], p[p[f + 12 >> 2] + 4 >> 2] = p[f + 48 >> 2], p[f + 48 >> 2] > 0 && (p[p[f + 12 >> 2] + 8 >> 2] = p[f + 44 >> 2]), p[f + 48 >> 2] > 1 && (p[p[f + 12 >> 2] + 12 >> 2] = p[f + 40 >> 2]), p[f + 48 >> 2] > 2 && (p[p[f + 12 >> 2] + 16 >> 2] = p[f + 36 >> 2]), p[f + 48 >> 2] > 3 && (p[p[f + 12 >> 2] + 20 >> 2] = p[f + 32 >> 2]), p[f + 48 >> 2] > 4 && (p[p[f + 12 >> 2] + 24 >> 2] = p[f + 28 >> 2]), p[f + 48 >> 2] > 5 && (p[p[f + 12 >> 2] + 28 >> 2] = p[f + 24 >> 2]), p[f + 48 >> 2] > 6 && (p[p[f + 12 >> 2] + 32 >> 2] = p[f + 20 >> 2]), p[f + 48 >> 2] > 7 && (p[p[f + 12 >> 2] + 36 >> 2] = p[f + 16 >> 2]), p[p[f + 12 >> 2] + 40 >> 2] = p[f + 56 >> 2], p[f + 48 >> 2] > 0 && function (e, t, n) {
                          var r;
                          p[28 + (r = m - 32 | 0) >> 2] = e, p[r + 24 >> 2] = t, p[r + 20 >> 2] = n, p[r + 16 >> 2] = (p[r + 20 >> 2] - p[p[r + 28 >> 2] + 24 >> 2] | 0) / 140, 1 == p[p[r + 20 >> 2] + 4 >> 2] && (t = p[p[r + 28 >> 2] + 40 >> 2], n = p[r + 28 >> 2], e = p[n + 8 >> 2], p[n + 8 >> 2] = e + 1, p[r + 12 >> 2] = t + (e << 3), p[p[r + 12 >> 2] >> 2] = p[r + 24 >> 2], p[p[r + 12 >> 2] + 4 >> 2] = p[p[r + 20 >> 2] + 136 >> 2], p[p[r + 20 >> 2] + 136 >> 2] = p[r + 12 >> 2])
                        }(p[f + 60 >> 2], p[f + 12 >> 2], p[f + 52 >> 2]), m = f - -64 | 0, p[f + 12 >> 2]
                      }(e |= 0, t |= 0, n |= 0, r |= 0, i |= 0, o |= 0, a |= 0, s |= 0, l |= 0, c |= 0, A |= 0, u |= 0)
                    },
                    llparser_prepare: function (e) {
                      ! function (e) {
                        var t;
                        for (m = t = m - 32 | 0, p[t + 28 >> 2] = e, p[t + 24 >> 2] = 0; !(p[t + 24 >> 2] >= p[p[t + 28 >> 2] + 4 >> 2]);) p[t + 20 >> 2] = p[p[t + 28 >> 2] + 24 >> 2] + v(p[t + 24 >> 2], 140), 1 == p[p[t + 20 >> 2] + 4 >> 2] && i(p[t + 28 >> 2], p[t + 20 >> 2], p[t + 20 >> 2], p[p[t + 28 >> 2] + 32 >> 2] + (p[t + 24 >> 2] << 9) | 0, 0), p[t + 24 >> 2] = p[t + 24 >> 2] + 1;
                        for (p[t + 16 >> 2] = 0; !(p[t + 16 >> 2] >= p[p[t + 28 >> 2] + 4 >> 2]);) p[t + 12 >> 2] = p[p[t + 28 >> 2] + 24 >> 2] + v(p[t + 16 >> 2], 140), 1 == p[p[t + 12 >> 2] + 4 >> 2] && (p[p[t + 12 >> 2] >> 2] = 0, o(p[t + 28 >> 2], p[t + 12 >> 2], p[t + 12 >> 2], p[p[t + 28 >> 2] + 36 >> 2] + (p[t + 16 >> 2] << 9) | 0)), p[t + 16 >> 2] = p[t + 16 >> 2] + 1;
                        m = t + 32 | 0
                      }(e |= 0)
                    },
                    llparser_parse: function (e, t) {
                      return 0 | function (e, t) {
                        var n, r, i;
                        return m = n = m - 32 | 0, p[n + 24 >> 2] = e, p[n + 20 >> 2] = t, p[n + 16 >> 2] = 0, p[n + 12 >> 2] = 0, r = n, i = function e(t, n, r, i, o, a, s) {
                          var l, c = 0,
                            A = 0;
                          m = l = m - 96 | 0, p[l + 88 >> 2] = t, p[l + 84 >> 2] = n, p[l + 80 >> 2] = r, p[l + 76 >> 2] = i, p[l + 72 >> 2] = o, p[l + 68 >> 2] = a, p[l + 64 >> 2] = s, p[l + 60 >> 2] = h[p[l + 80 >> 2] + (p[p[l + 76 >> 2] >> 2] << 1) >> 1], _[l + 60 >> 2] >= 128 && (p[l + 60 >> 2] = 1);
                          e: if (p[p[l + 72 >> 2] >> 2] > (p[l + 64 >> 2] - 4 | 0)) p[l + 92 >> 2] = -1;
                            else if (1 == p[p[l + 84 >> 2] + 4 >> 2])
                            if (p[l + 56 >> 2] = p[p[l + 76 >> 2] >> 2], p[l + 52 >> 2] = p[p[l + 72 >> 2] >> 2], p[l + 48 >> 2] = 0, p[l + 44 >> 2] = 0, p[l + 40 >> 2] = p[p[l + 88 >> 2] + 32 >> 2] + ((p[l + 84 >> 2] - p[p[l + 88 >> 2] + 24 >> 2] | 0) / 140 << 9), p[l + 36 >> 2] = 0, !p[p[l + 40 >> 2] + (p[l + 60 >> 2] << 2) >> 2] | _[l + 60 >> 2] <= 0 | _[l + 60 >> 2] >= 127 ? !p[l + 60 >> 2] | !p[p[l + 40 >> 2] + 508 >> 2] ? p[p[l + 40 >> 2] >> 2] && (p[l + 36 >> 2] = p[p[l + 40 >> 2] >> 2]) : p[l + 36 >> 2] = p[p[l + 40 >> 2] + 508 >> 2] : p[l + 36 >> 2] = p[p[l + 40 >> 2] + (p[l + 60 >> 2] << 2) >> 2], p[l + 36 >> 2]) {
                              for (p[l + 68 >> 2] || p[p[l + 36 >> 2] + 40 >> 2] || (p[l + 48 >> 2] = p[p[l + 72 >> 2] >> 2], t = p[l + 72 >> 2], p[t >> 2] = p[t >> 2] + 2), p[l + 32 >> 2] = 0; p[l + 32 >> 2] < p[p[l + 36 >> 2] + 4 >> 2];) {
                                if (p[l + 28 >> 2] = p[l + 68 >> 2], p[l + 68 >> 2] || !p[p[l + 36 >> 2] + 40 >> 2] | p[p[l + 36 >> 2] + 40 >> 2] == (p[l + 32 >> 2] + 65536 | 0) || (p[l + 28 >> 2] = 1), c = l, A = e(p[l + 88 >> 2], p[(p[l + 36 >> 2] + 8 | 0) + (p[l + 32 >> 2] << 2) >> 2], p[l + 80 >> 2], p[l + 76 >> 2], p[l + 72 >> 2], p[l + 28 >> 2], p[l + 64 >> 2]), p[c + 24 >> 2] = A, p[l + 24 >> 2] < 0) {
                                  p[l + 92 >> 2] = -1;
                                  break e
                                }
                                p[l + 68 >> 2] | p[p[l + 36 >> 2] + 40 >> 2] != (p[l + 32 >> 2] + 65536 | 0) || (p[l + 44 >> 2] = p[l + 24 >> 2]), p[l + 32 >> 2] = p[l + 32 >> 2] + 1
                              }
                              for (p[l + 68 >> 2] || (p[p[l + 36 >> 2] + 40 >> 2] ? 1 == p[p[l + 36 >> 2] + 40 >> 2] && (n = p[l + 56 >> 2], r = p[p[l + 88 >> 2] + 48 >> 2], i = p[l + 72 >> 2], t = p[i >> 2], p[i >> 2] = t + 1, p[r + (t << 2) >> 2] = n, p[l + 44 >> 2] = p[p[l + 72 >> 2] >> 2], n = p[p[l + 76 >> 2] >> 2], r = p[p[l + 88 >> 2] + 48 >> 2], i = p[l + 72 >> 2], t = p[i >> 2], p[i >> 2] = t + 1, p[r + (t << 2) >> 2] = n) : (p[p[p[l + 88 >> 2] + 48 >> 2] + (p[l + 48 >> 2] << 2) >> 2] = 0 - p[l + 36 >> 2], p[p[p[l + 88 >> 2] + 48 >> 2] + (p[l + 48 >> 2] + 1 << 2) >> 2] = p[p[l + 36 >> 2] + 4 >> 2], p[l + 44 >> 2] = p[l + 48 >> 2] + 1));;) {
                                if (p[p[l + 72 >> 2] >> 2] > (p[l + 64 >> 2] - 4 | 0)) {
                                  p[l + 92 >> 2] = -1;
                                  break e
                                }
                                if (p[l + 20 >> 2] = p[p[l + 88 >> 2] + 36 >> 2] + ((p[l + 84 >> 2] - p[p[l + 88 >> 2] + 24 >> 2] | 0) / 140 << 9), p[l + 16 >> 2] = 0, p[l + 60 >> 2] = h[p[l + 80 >> 2] + (p[p[l + 76 >> 2] >> 2] << 1) >> 1], _[l + 60 >> 2] >= 128 && (p[l + 60 >> 2] = 1), !p[p[l + 20 >> 2] + (p[l + 60 >> 2] << 2) >> 2] | _[l + 60 >> 2] <= 0 | _[l + 60 >> 2] >= 127 ? !p[l + 60 >> 2] | !p[p[l + 20 >> 2] + 508 >> 2] || (p[l + 16 >> 2] = p[p[l + 20 >> 2] + 508 >> 2]) : p[l + 16 >> 2] = p[p[l + 20 >> 2] + (p[l + 60 >> 2] << 2) >> 2], !p[l + 16 >> 2]) break;
                                for (p[l + 68 >> 2] || (p[p[l + 16 >> 2] + 40 >> 2] ? 65536 != p[p[l + 16 >> 2] + 40 >> 2] && (p[p[l + 72 >> 2] >> 2] = p[l + 52 >> 2]) : (p[p[p[l + 88 >> 2] + 48 >> 2] + (p[l + 44 >> 2] << 2) >> 2] = (0 - p[p[p[l + 88 >> 2] + 48 >> 2] + (p[l + 44 >> 2] << 2) >> 2] | 0) - 1, p[l + 48 >> 2] = p[p[l + 72 >> 2] >> 2], t = p[l + 72 >> 2], p[t >> 2] = p[t >> 2] + 2)), p[l + 12 >> 2] = 1; p[l + 12 >> 2] < p[p[l + 16 >> 2] + 4 >> 2];) {
                                  if (p[l + 8 >> 2] = p[l + 68 >> 2], p[l + 68 >> 2] || !p[p[l + 16 >> 2] + 40 >> 2] | p[p[l + 16 >> 2] + 40 >> 2] == (p[l + 12 >> 2] + 65536 | 0) || (p[l + 8 >> 2] = 1), c = l, A = e(p[l + 88 >> 2], p[(p[l + 16 >> 2] + 8 | 0) + (p[l + 12 >> 2] << 2) >> 2], p[l + 80 >> 2], p[l + 76 >> 2], p[l + 72 >> 2], p[l + 8 >> 2], p[l + 64 >> 2]), p[c + 4 >> 2] = A, p[l + 4 >> 2] < 0) {
                                    p[l + 92 >> 2] = -1;
                                    break e
                                  }
                                  p[l + 68 >> 2] | p[p[l + 16 >> 2] + 40 >> 2] != (p[l + 12 >> 2] + 65536 | 0) || (p[l + 44 >> 2] = p[l + 4 >> 2]), p[l + 12 >> 2] = p[l + 12 >> 2] + 1
                                }
                                p[l + 68 >> 2] || (p[p[l + 16 >> 2] + 40 >> 2] ? 1 == p[p[l + 16 >> 2] + 40 >> 2] && (n = p[l + 56 >> 2], r = p[p[l + 88 >> 2] + 48 >> 2], i = p[l + 72 >> 2], t = p[i >> 2], p[i >> 2] = t + 1, p[r + (t << 2) >> 2] = n, p[l + 44 >> 2] = p[p[l + 72 >> 2] >> 2], n = p[p[l + 76 >> 2] >> 2], r = p[p[l + 88 >> 2] + 48 >> 2], i = p[l + 72 >> 2], t = p[i >> 2], p[i >> 2] = t + 1, p[r + (t << 2) >> 2] = n) : (p[p[p[l + 88 >> 2] + 48 >> 2] + (p[l + 48 >> 2] << 2) >> 2] = 0 - p[l + 16 >> 2], p[p[p[l + 88 >> 2] + 48 >> 2] + (p[l + 48 >> 2] + 1 << 2) >> 2] = p[p[l + 16 >> 2] + 4 >> 2], p[l + 44 >> 2] = p[l + 48 >> 2] + 1))
                              }
                              p[l + 92 >> 2] = p[l + 44 >> 2]
                            } else p[l + 92 >> 2] = -1;
                          else {
                            if (p[l + 60 >> 2] && (-1 == p[p[l + 84 >> 2] + 4 >> 2] && (t = p[l + 76 >> 2], p[t >> 2] = p[t >> 2] + 1), !p[p[l + 84 >> 2] + 4 >> 2])) {
                              if (!g[p[l + 60 >> 2] + (p[l + 84 >> 2] + 8 | 0) | 0]) {
                                p[l + 92 >> 2] = -1;
                                break e
                              }
                              t = p[l + 76 >> 2], p[t >> 2] = p[t >> 2] + 1
                            }
                            p[l + 68 >> 2] || (n = p[p[l + 76 >> 2] >> 2], r = p[p[l + 84 >> 2] + 4 >> 2], i = p[p[l + 88 >> 2] + 48 >> 2], o = p[l + 72 >> 2], t = p[o >> 2], p[o >> 2] = t + 1, p[i + (t << 2) >> 2] = n - (-2 == (0 | r) ? 0 : 1), n = p[p[l + 76 >> 2] >> 2], r = p[p[l + 88 >> 2] + 48 >> 2], i = p[l + 72 >> 2], t = p[i >> 2], p[i >> 2] = t + 1, p[r + (t << 2) >> 2] = n), p[l + 92 >> 2] = p[p[l + 72 >> 2] >> 2] - 1
                          }
                          return m = l + 96 | 0, p[l + 92 >> 2]
                        }(p[n + 24 >> 2], p[n + 20 >> 2], p[p[n + 24 >> 2] + 44 >> 2], n + 12 | 0, n + 16 | 0, 0, p[p[n + 24 >> 2] + 12 >> 2] << 1), p[r + 8 >> 2] = i, e = p[p[n + 24 >> 2] + 48 >> 2], t = p[n + 16 >> 2], p[n + 16 >> 2] = t + 1, p[e + (t << 2) >> 2] = -1, e = p[p[n + 24 >> 2] + 48 >> 2], t = p[n + 16 >> 2], p[n + 16 >> 2] = t + 1, p[e + (t << 2) >> 2] = 0, h[p[p[n + 24 >> 2] + 44 >> 2] + (p[n + 12 >> 2] << 1) >> 1] | p[n + 8 >> 2] < 0 ? p[n + 28 >> 2] = p[n + 12 >> 2] + 1 : p[n + 28 >> 2] = 0, m = n + 32 | 0, p[n + 28 >> 2]
                      }(e |= 0, t |= 0)
                    },
                    llparser_get_input_buffer: function (e) {
                      var t;
                      return e |= 0, p[12 + (t = m - 16 | 0) >> 2] = e, p[p[t + 12 >> 2] + 44 >> 2]
                    },
                    llparser_get_result: function (e) {
                      var t;
                      return e |= 0, p[12 + (t = m - 16 | 0) >> 2] = e, p[p[t + 12 >> 2] + 48 >> 2]
                    },
                    wasm_main: c,
                    __wbindgen_start: c
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
                }, 0, r),
                o = i.memory,
                a = i.rust_calloc,
                s = i.rust_free,
                l = i.llparser_create,
                c = i.llparser_destroy,
                A = i.llparser_create_descriptor,
                u = i.llparser_descriptor_set_all,
                f = i.llparser_descriptor_set_nil,
                d = i.llparser_descriptor_add_char,
                p = i.llparser_descriptor_add_range,
                g = i.llparser_descriptor_revert,
                h = i.llparser_add_rule,
                _ = i.llparser_prepare,
                v = i.llparser_parse,
                b = i.llparser_get_input_buffer,
                m = i.llparser_get_result,
                w = i.wasm_main,
                y = i.__wbindgen_start
            }])
          }, function (e, t, n) {
            var r = n(4),
              i = function (e) {
                this.empty = !0, this._type = e, this._arr = [], this._index = 0
              };
            i.create = function (e) {
              return new i(e)
            }, i.prototype.add = function (e) {
              var t = this._index++;
              return this._arr.push({
                id: t,
                func: e
              }), this.empty = !1, t
            }, i.prototype.remove = function (e) {
              var t = this._arr,
                n = 0;
              if ("function" == typeof e)
                for (n = 0; n < t.length; n++) {
                  var r = t[n].func;
                  if (r === e) return t.splice(n, 1), this.empty = !t.length, r
                } else
                  for (n = 0; n < t.length; n++)
                    if (t[n].id === e) {
                      var i = t[n].func;
                      return t.splice(n, 1), this.empty = !t.length, i
                    } return null
            }, i.prototype.call = function (e, t, n) {
              for (var r = this._arr, i = !1, o = 0; o < r.length; o++) {
                !1 === a(this._type, r[o].func, e, t, n) && (i = !0)
              }
              if (i) return !1
            };
            var o = function (e, t) {
                if (!t.type || !1 !== s.call(null, [e, t])) {
                  if (r.throwGlobalError) throw e;
                  console.error(e.stack)
                }
              },
              a = i.safeCallback = function (e, t, n, r, i) {
                try {
                  return t.apply(n, r)
                } catch (s) {
                  var a = "[Exparser] [Error] [Component] " + (e || "Error Listener") + " Error @ ";
                  n && n.is && (a += n.is), a += "#" + (t.name || "(anonymous)"), i && i.triggerLifeTime("error", [s]), o(s, {
                    message: a,
                    type: e,
                    element: n,
                    method: t,
                    args: r
                  })
                }
              },
              s = i.create();
            i.addGlobalErrorListener = function (e) {
              return s.add(e)
            }, i.removeGlobalErrorListener = function (e) {
              return s.remove(e)
            };
            var l = null;
            i.addGlobalWarningListener = function (e) {
              return (l = i.create()).add(e)
            }, i.removeGlobalWarningListener = function (e) {
              if (l) {
                var t = l.remove(e);
                return l.empty && (l = null), t
              }
              return null
            }, i.hasGlobalWarningListeners = function () {
              return !!l
            }, i.triggerWarning = function (e) {
              var t = "[Exparser] [Warning] [Component] " + e;
              l.call(null, [t], null)
            }, e.exports = i
          }, function (e, t) {
            var n = {
              lazyRegistration: !0,
              publicProperties: !1,
              availability: null,
              domain: "",
              writeOnly: !1,
              allowInWriteOnly: !1,
              classPrefix: null,
              styleScope: "",
              addGlobalClass: !1,
              templateEngine: null,
              renderingMode: "full",
              multipleSlots: !1,
              reflectToAttributes: !1,
              writeFieldsToNode: !0,
              writeIdToDOM: !1,
              separateInnerData: !0,
              innerDataExclude: null,
              listenerChangeLifeTimes: !1,
              randomizeTagName: !1,
              virtualHost: !1,
              throwGlobalError: !1,
              writeExtraInfoToAttr: !1,
              documentBackend: "undefined" != typeof window && "undefined" != typeof document ? "dom" : "none",
              hasDOMBackend: !("undefined" == typeof window || "undefined" == typeof document),
              customContext: null
            };
            e.exports = n
          }, function (e, t) {
            var n = Object.prototype.hasOwnProperty,
              r = function (e, t) {
                var i = typeof e;
                if ("object" === i && null !== e) {
                  var o = t ? t.get(e) : void 0;
                  if (void 0 !== o) return o;
                  if (e instanceof Array) {
                    o = [], t && t.set(e, o);
                    for (var a = 0; a < e.length; a++) o[a] = r(e[a], t)
                  } else
                    for (var s in o = {}, t && t.set(e, o), e) n.call(e, s) && (o[s] = r(e[s], t));
                  return o
                }
                if ("symbol" !== i) return e
              };
            t.deepCopy = function (e, t) {
              var n = t && "undefined" != typeof WeakMap ? new WeakMap : null;
              return r(e, n)
            }
          }, function (e, t, n) {
            var r = n(3),
              i = (Object.prototype.hasOwnProperty, function () {});
            i.prototype = Object.create(Object.prototype, {
              constructor: {
                value: i,
                writable: !0,
                configurable: !0
              }
            });
            var o = null;
            i._setElementSystem = function (e) {
              o = e, i._setElementSystem = null
            };
            var a = null;
            i._setComponent = function (e) {
              a = e, i._setComponent = null
            };
            var s = Date.now();
            i.setInitTimeStamp = function (e) {
              return s = void 0 === e ? Date.now() : e
            }, i.getInitTimeStamp = function (e) {
              return s
            }, i.create = function (e, t, n) {
              var r = (n = n || {}).originalEvent,
                o = n.extraFields || {},
                a = Date.now() - s,
                l = new i;
              for (var c in l.currentTarget = null, l.type = e, l.timeStamp = a, l.mark = null, l.detail = t, l.bubbles = !!n.bubbles, l.composed = !!n.composed, l.__originalEvent = r, l.__hasCapture = !!n.capturePhase, l.__stopped = !1, l.__dispatched = !1, o) l[c] = o[c];
              return l
            }, i.prototype.preventDefault = function () {
              this.__originalEvent && this.__originalEvent.preventDefault()
            }, i.prototype.stopPropagation = function () {
              this.__stopped = !0
            }, i.prototype.isStopped = function () {
              return !!this.__stopped
            }, i.prototype.markMutated = function () {
              this.__mutatedMarked = !0
            }, i.prototype.mutatedMarked = function () {
              return !!this.__mutatedMarked
            };
            var l = function (e, t, n, r) {
              for (var i = e, a = e instanceof o ? e.collectMarks() : {}, s = [], l = [], c = e; c;) {
                if (i !== c && (s.push(e), e = c, l.push(a), a = e instanceof o ? e.collectMarks() : {}), i = c.parentNode, !1 === r(c, e, a)) return;
                if (c.__wxHost) {
                  if (n) break;
                  e = s.pop() || c.__wxHost, a = l.pop() || (e instanceof o ? e.collectMarks() : {}), i = c = c.__wxHost
                } else {
                  var A = !0;
                  c instanceof o && (A = !1), c = A || n ? c.parentNode : c.__wxSlotParent
                }
              }
            };
            i.dispatchEvent = function (e, t) {
              if (!t.__dispatched) {
                t.__dispatched = !0, e.__wxElement && e.__wxHost !== e.__wxElement && ((e = e.__wxElement).shadowRoot instanceof o && (e = e.shadowRoot)), t.target = e instanceof o ? e.__methodCaller : e;
                var n = function (e, n, r) {
                    if (!(n && n.length && t.mutatedMarked())) {
                      var i = t.currentTarget = r instanceof o ? r.__methodCaller : r,
                        s = e.call(i, [t], r instanceof a ? r : void 0);
                      n && n.length && t.markMutated(), !1 === s && (t.__originalEvent && t.__originalEvent.preventDefault(), t.__stopped = !0)
                    }
                  },
                  r = t.type,
                  i = !t.composed;
                if (t.__hasCapture) {
                  var s = [];
                  l(e, 0, i, (function (e, t, n) {
                    return e.__wxCaptureEvents && e.__wxCaptureEvents[r] && s.push([e, t, n]), !0
                  }));
                  for (var c = s.length - 1; c >= 0; c--) {
                    var A = s[c],
                      u = A[0],
                      f = A[1];
                    t.target = f instanceof o ? f.__methodCaller : f, t.mark = A[2];
                    var d = u.__wxCaptureMutated && u.__wxCaptureMutated[r];
                    if (n(u.__wxCaptureEvents[r], d, u), t.__stopped) break
                  }
                }
                if (t.target = e instanceof o ? e.__methodCaller : e, !t.__stopped) {
                  var p = !t.bubbles;
                  l(e, 0, i, (function (e, i, a) {
                    t.target = i instanceof o ? i.__methodCaller : i, t.mark = a;
                    var s = e.__wxMutated && e.__wxMutated[r];
                    return e.__wxEvents && e.__wxEvents[r] && n(e.__wxEvents[r], s, e), !p && !t.__stopped
                  }))
                }
              }
            }, i.triggerEvent = function (e, t, n, r) {
              var o = i.create(t, n, r);
              i.dispatchEvent(e, o)
            }, i.addListenerToElement = function (e, t, n, i) {
              var o = i && i.mutated;
              if (o) {
                var s = n;
                n = function (e) {
                  if (!e.mutatedMarked()) {
                    var t = Array.prototype.slice.call(arguments);
                    return s.apply(this, t)
                  }
                }
              }
              var l = void 0;
              return i && (i.useCapture || i.capture) ? (e.__wxCaptureEvents || (e.__wxCaptureEvents = Object.create(null)), e.__wxCaptureEvents[t] || (e.__wxCaptureEvents[t] = r.create("Event Listener")), l = e.__wxCaptureEvents[t].add(n), o && (e.__wxCaptureMutated || (e.__wxCaptureMutated = Object.create(null)), e.__wxCaptureMutated[t] || (e.__wxCaptureMutated[t] = []), e.__wxCaptureMutated[t].push(l))) : (e.__wxEvents || (e.__wxEvents = Object.create(null)), e.__wxEvents[t] || (e.__wxEvents[t] = r.create("Event Listener")), l = e.__wxEvents[t].add(n), o && (e.__wxMutated || (e.__wxMutated = Object.create(null)), e.__wxMutated[t] || (e.__wxMutated[t] = []), e.__wxMutated[t].push(l))), e instanceof a && e.__componentOptions.listenerChangeLifeTimes && e.triggerLifeTime("listenerChanged", [!0, t, n, i]), l
            }, i.removeListenerFromElement = function (e, t, n, r) {
              var i = null;
              if (r && (r.useCapture || r.capture)) e.__wxCaptureEvents && e.__wxCaptureEvents[t] && (i = e.__wxCaptureEvents[t].remove(n)), e.__wxCaptureMutated && e.__wxCaptureMutated[t] && -1 !== (o = e.__wxCaptureMutated[t].indexOf(n)) && e.__wxCaptureMutated[t].splice(o, 1);
              else if (e.__wxEvents && e.__wxEvents[t] && (i = e.__wxEvents[t].remove(n)), e.__wxMutated && e.__wxMutated[t]) {
                var o; - 1 !== (o = e.__wxMutated[t].indexOf(n)) && e.__wxMutated[t].splice(o, 1)
              }
              i && e instanceof a && e.__componentOptions.listenerChangeLifeTimes && e.triggerLifeTime("listenerChanged", [!1, t, i, r])
            }, e.exports = i
          }, function (e, t, n) {
            var r = n(1),
              i = " \n\r\t\f",
              o = null;
            t.parseMultiPaths = function (e) {
              return o || (o = r.create({
                MULTIPLE_PATHS: [{
                  id: "arrayConcat",
                  states: ["MULTIPLE_PATHS", ",", "SINGLE_PATH"]
                }, {
                  id: "array",
                  states: ["SINGLE_PATH"]
                }],
                SINGLE_PATH: [{
                  id: "arrayConcat",
                  states: ["SINGLE_PATH", ".", "VAR_NAME"]
                }, {
                  id: "arrayConcat",
                  states: ["SINGLE_PATH", "[", "INT", "]"]
                }, {
                  id: "array",
                  states: ["VAR_NAME"]
                }, {
                  id: "_jump",
                  states: ["SINGLE_PATH", i]
                }],
                VAR_NAME: [{
                  id: "_blank",
                  states: [i, "VAR_NAME"]
                }, {
                  id: "_jump",
                  states: ["VAR_NAME", i]
                }, {
                  id: "_raw",
                  states: ["*", "*"]
                }, {
                  id: "_raw",
                  states: ["_a-zA-Z$", "VAR_NAME_AFTER"]
                }],
                VAR_NAME_AFTER: [{
                  id: "_raw",
                  states: ["_a-zA-Z0-9$", "VAR_NAME_AFTER"]
                }, {
                  id: "_raw",
                  states: ["NULL"]
                }],
                INT: [{
                  id: "_blank",
                  states: [i, "INT"]
                }, {
                  id: "_jump",
                  states: ["INT", i]
                }, {
                  id: "toNumber",
                  states: ["0-9", "INT_AFTER"]
                }],
                INT_AFTER: [{
                  id: "_raw",
                  states: ["0-9", "INT_AFTER"]
                }, {
                  id: "_raw",
                  states: ["NULL"]
                }]
              }, {
                arrayConcat: function (e) {
                  return e[0].push(e[2]), e[0]
                },
                array: function (e) {
                  return e
                },
                toNumber: function (e) {
                  return parseInt(e[0] + e[1], 10)
                }
              })), o.parse("MULTIPLE_PATHS", e)
            }, t.parseSinglePath = function (e) {
              for (var t = e.length, n = [], r = "", i = 0, o = !1, a = !1, s = 0; s < t; s++) {
                var l = e[s];
                if ("\\" === l) s + 1 < t && ("." === e[s + 1] || "[" === e[s + 1] || "]" === e[s + 1] || "\\" === e[s + 1]) ? (r += e[s + 1], s++) : r += "\\";
                else if ("." === l) r && (n.push(r), r = "");
                else if ("[" === l) {
                  if (r && (n.push(r), r = ""), 0 === n.length) throw new Error("The path string should not start with []: " + e);
                  a = !0, o = !1
                } else if ("]" === l) {
                  if (!o) throw new Error("There should be digits inside [] in the path string: " + e);
                  a = !1, n.push(i), i = 0
                } else if (a) {
                  if (l < "0" || l > "9") throw new Error("Only digits (0-9) can be put inside [] in the path string: " + e);
                  o = !0, i = 10 * i + l.charCodeAt(0) - 48
                } else r += l
              }
              if (r && n.push(r), 0 === t) throw new Error("The path string should not be empty");
              return n
            }
          }, function (e, t, n) {
            var r = n(3),
              i = n(4),
              o = n(7),
              a = ["created", "ready", "cacheAttached", "attached", "moved", "detached", "route", "saved", "restored", "error", "listenerChanged", "performanceData"],
              s = [String, Number, Boolean, Object, Array, null],
              l = function () {},
              c = o.parseMultiPaths,
              A = function () {};
            A.matchTypeWithValue = function (e, t) {
              if (e === String) {
                if ("string" != typeof t) return !1
              } else if (e === Number) {
                if (!Number.isFinite(t)) return !1
              } else if (e === Boolean) {
                if ("boolean" != typeof t) return !1
              } else if (e === Object) {
                if (null === t || t.constructor !== Object) return !1
              } else if (e === Array) {
                if (null === t || t.constructor !== Array) return !1
              } else if (void 0 === t) return !1;
              return !0
            };
            var u = function (e) {
                for (var t = [], n = 0; n < e.length; n++) t[n] = e[n];
                return t
              },
              f = function (e) {
                var t = {};
                for (var n in e) t[n] = e[n];
                return t
              },
              d = function (e, t) {
                for (var n in t) hasOwnProperty.call(e, n) ? (r.hasGlobalWarningListeners() && "_" === n.charAt(0) && r.triggerWarning('data field "' + n + '" from different behaviors is overriding or merging.'), "object" != typeof e[n] || "object" != typeof t[n] || null === t[n] || t[n] instanceof Array ? e[n] = t[n] : (e[n] instanceof Array ? e[n] = u(e[n]) : e[n] = f(e[n]), d(e[n], t[n]))) : e[n] = t[n]
              };
            A.create = function (e) {
              var t = new A;
              return t.is = e.is || "", t.using = e.using || {}, t.generics = e.generics || {}, t.template = e.template, t.externalClasses = e.externalClasses || [], t.data = "object" == typeof e.data ? {} : null, t.properties = Object.create(null), t.methods = Object.create(null), t.listeners = Object.create(null), t.relations = Object.create(null), t.ancestors = [], t.initiator = e.initiator, t.lifetimes = Object.create(null), t.pageLifetimes = Object.create(null), t.observers = [], t.options = {
                publicProperties: !!(e.options && void 0 !== e.options.publicProperties ? e.options.publicProperties : i.publicProperties)
              }, t.definitionFilter = e.definitionFilter, t._unprepared = e, (e.options && void 0 !== e.options.lazyRegistration ? e.options.lazyRegistration : i.lazyRegistration) || A.prepare(t), e.is && (A._list[e.is] = t), t
            }, A.prepare = function (e) {
              var t = e._unprepared;
              if (t) {
                e._unprepared = null;
                var n = e.ancestors,
                  i = "",
                  o = 0;
                for (o = 0; o < (t.behaviors || []).length; o++) {
                  var u = t.behaviors[o],
                    f = u;
                  for (i in "string" == typeof f && (f = A._list[u], r.hasGlobalWarningListeners() && (f instanceof A || r.triggerWarning('behavior "' + u + '" is not found (when preparing behavior "' + e.is + '").'))), f._unprepared && A.prepare(f), "object" == typeof f.data && (null === e.data ? e.data = f.data : d(e.data, f.data)), f.generics) {
                    var p = f.generics[i];
                    "object" != typeof p && (p = {}), e.generics[i] = {
                      default: p.default
                    }
                  }
                  for (i in f.properties) r.hasGlobalWarningListeners() && "_" === i.charAt(0) && void 0 !== e.properties[i] && r.triggerWarning('property "' + i + '" from different behaviors is overriding (when preparing behavior "' + e.is + '").'), e.properties[i] = f.properties[i];
                  for (i in f.relations) e.relations[i] = f.relations[i];
                  for (i in f.methods) r.hasGlobalWarningListeners() && "_" === i.charAt(0) && e.methods[i] && r.triggerWarning('method "' + i + '" from different behaviors is overriding (when preparing behavior "' + e.is + '").'), e.methods[i] = f.methods[i];
                  for (var g = 0; g < f.ancestors.length; g++) n.indexOf(f.ancestors[g]) < 0 && n.push(f.ancestors[g])
                }
                for (i in "object" == typeof t.data && (null === e.data ? e.data = t.data : d(e.data, t.data)), t.properties) {
                  r.hasGlobalWarningListeners() && "_" === i.charAt(0) && void 0 !== e.properties[i] && r.triggerWarning('property "' + i + '" from different behaviors is overriding (when preparing behavior "' + e.is + '").');
                  var h = t.properties[i];
                  s.indexOf(h) >= 0 ? h = {
                    type: h
                  } : s.indexOf(h.type) < 0 && h.optionalTypes && h.optionalTypes.length > 0 && (h.type = h.optionalTypes[0]), r.hasGlobalWarningListeners() && s.indexOf(h.type) < 0 && r.triggerWarning('the type of property "' + i + '" is illegal (when preparing behavior "' + e.is + '").'), void 0 === h.value && (h.type === String ? h.value = "" : h.type === Number ? h.value = 0 : h.type === Boolean ? h.value = !1 : h.type === Array ? h.value = [] : h.value = null), e.properties[i] = {
                    type: h.type,
                    optionalTypes: h.optionalTypes,
                    value: h.value,
                    filter: h.filter,
                    observer: h.observer,
                    public: !!(void 0 === h.public ? e.options.publicProperties : h.public),
                    availability: h.availability,
                    observeAssignments: !!h.observeAssignments
                  }
                }
                if (t.lifetimes && "object" == typeof t.lifetimes)
                  for (i in t.lifetimes) e.lifetimes[i] = t.lifetimes[i];
                for (o = 0; o < a.length; o++) void 0 === e.lifetimes[a[o]] && (e.lifetimes[a[o]] = t[a[o]]);
                for (i in t.listeners) e.listeners[i] = t.listeners[i];
                var _ = t.observers;
                if (_ instanceof Array)
                  for (o = 0; o < _.length; o++) {
                    var v = _[o];
                    e.observers.push({
                      paths: c(v.fields || "**"),
                      observer: v.observer
                    })
                  } else
                    for (i in _) e.observers.push({
                      paths: c(i),
                      observer: _[i]
                    });
                if (t.pageLifetimes && "object" == typeof t.pageLifetimes)
                  for (i in t.pageLifetimes) e.pageLifetimes[i] = t.pageLifetimes[i];
                for (i in t.relations) {
                  var b = t.relations[i];
                  e.relations[i] = {
                    target: b.target || i,
                    type: b.type,
                    linked: b.linked || l,
                    linkChanged: b.linkChanged || l,
                    unlinked: b.unlinked || l,
                    linkFailed: b.linkFailed || l
                  }
                }
                for (i in t.methods) "function" == typeof t.methods[i] && (r.hasGlobalWarningListeners() && "_" === i.charAt(0) && e.methods[i] && r.triggerWarning('method "' + i + '" from different behaviors is overriding (when preparing behavior "' + e.is + '").'), e.methods[i] = t.methods[i]);
                n.push(e)
              }
            }, A._list = Object.create(null), A.prototype.hasBehavior = function (e) {
              this._unprepared && A.prepare(this);
              for (var t = 0; t < this.ancestors.length; t++)
                if (e instanceof A) {
                  if (this.ancestors[t] === e) return !0
                } else if (this.ancestors[t] === A._list[e]) return !0;
              return !1
            }, A.prototype._getAllListeners = function () {
              for (var e = {}, t = this.ancestors, n = 0; n < t.length; n++) {
                var r = this.ancestors[n];
                for (var i in r.listeners) Object.prototype.hasOwnProperty.call(e, i) ? e[i].push(r.listeners[i]) : e[i] = [r.listeners[i]]
              }
              return e
            }, A.prototype._addObserversToDataProxy = function (e) {
              for (var t = this.ancestors, n = 0; n < t.length; n++)
                for (var r = this.ancestors[n].observers, i = 0; i < r.length; i++) {
                  var o = r[i];
                  e.addObserver(o.observer, o.paths)
                }
            }, A.prototype._getAllLifeTimeFuncs = function () {
              var e = {},
                t = this.ancestors;
              a.forEach((function (t) {
                e[t] = r.create("Lifetime Method")
              }));
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                for (var o in i.lifetimes) i.lifetimes[o] && (e[o] || (e[o] = r.create("Lifetime Method")), e[o].add(i.lifetimes[o]))
              }
              return e
            }, A.prototype._getAllPageLifeTimeFuncs = function () {
              for (var e = {}, t = this.ancestors, n = 0; n < t.length; n++) {
                var i = t[n];
                for (var o in i.pageLifetimes) i.pageLifetimes[o] && (e[o] || (e[o] = r.create("Page Lifetime Method")), e[o].add(i.pageLifetimes[o]))
              }
              return e
            }, A.callDefinitionFilter = function (e) {
              var t = e.definitionFilter,
                n = [];
              return e.behaviors instanceof Array && e.behaviors.forEach((function (t) {
                (t = "string" == typeof t ? A._list[t] : t) && t.definitionFilter && (n.push(t.definitionFilter), t.definitionFilter.call(null, e))
              })), "function" == typeof t ? function (e) {
                t(e, n)
              } : null
            }, e.exports = A
          }, function (e, t, n) {
            var r = n(3),
              i = n(6),
              o = n(10),
              a = n(11),
              s = n(12),
              l = n(14),
              c = n(4),
              A = n(13),
              u = function (e) {
                f(this, e || null)
              };
            u.prototype = Object.create(Object.prototype, {
              constructor: {
                value: u,
                writable: !0,
                configurable: !0
              },
              id: {
                get: function () {
                  return this.__id
                },
                set: function (e) {
                  var t = String(e);
                  if (this.__id !== t) {
                    if (this.__id = t, this.ownerShadowRoot) {
                      var n = this.ownerShadowRoot.__wxHost;
                      n.__idCacheDirty = !0, this.__domElement && n.__componentOptions.writeIdToDOM && ("dom" === c.documentBackend ? this.__domElement.id = t : "custom" === c.documentBackend && this.__domElement.setId(t))
                    }
                    c.writeExtraInfoToAttr && this.__domElement && "dom" === c.documentBackend && this.__domElement.setAttribute("exparser:info-attr-id", t), (this.__propObservers && !this.__propObservers.empty || this.__subtreeObserversCount) && o._callObservers(this, "__propObservers", {
                      type: "properties",
                      target: this,
                      propertyName: "id"
                    })
                  }
                },
                configurable: !0
              },
              slot: {
                get: function () {
                  return this.__slot
                },
                set: function (e) {
                  if (e = String(e), this.__slot !== e) {
                    if (this.__inheritSlots) return void(r.hasGlobalWarningListeners() && r.triggerWarning('slots-inherited nodes do not support "slot" attribute.'));
                    this.__slot = e, w(this), (this.__propObservers && !this.__propObservers.empty || this.__subtreeObserversCount) && o._callObservers(this, "__propObservers", {
                      type: "properties",
                      target: this,
                      propertyName: "slot"
                    })
                  }
                },
                configurable: !0
              },
              attributes: {
                get: function () {
                  var e = [];
                  if (!this.__attributes) return e;
                  for (var t in this.__attributes) e.push({
                    name: t,
                    value: this.__attributes[t]
                  });
                  return e
                },
                set: function () {},
                configurable: !0
              },
              class: {
                get: function () {
                  return this.classList.getClassNames()
                }, set: function (e) {
                  this.classList && this.classList.setClassNames(e), (this.__propObservers && !this.__propObservers.empty || this.__subtreeObserversCount) && o._callObservers(this, "__propObservers", {
                    type: "properties",
                    target: this,
                    propertyName: "class"
                  })
                }, configurable: !0
              },
              style: {
                get: function () {
                  return this.__domElement ? this.__domElement.style : null
                },
                set: function (e) {
                  return k.call(this, e)
                },
                configurable: !0
              }
            }), i._setElementSystem(u), a._setElementSystem(u);
            var f = u.initialize = function (e, t, n) {
              e.__id = "", e.__slot = "", e.__virtual = !1, e.__inheritSlots = !1, e.__attributes = null, e.__marks = null, e.__attached = !1, e.parentNode = null, e.childNodes = [], e.ownerShadowRoot = n, e.__wxSlotParent = null, e.__wxSlotChildren = e.childNodes, e.__subtreeObserversCount = 0, e.classList = null, e.__styleSegments = [], e.__methodCaller = e, e.__relationHandler = null, e.__backendExtracted = A.backendExtractedDefault, e.__domElement = t, e.__autoDestroy = !0, e.$$ = t, t && (t.__wxElement = e)
            };
            u._clone = function (e, t, n, r) {
              if (e.__id = t.__id, e.__slot = t.__slot, e.__virtual = t.__virtual, e.__inheritSlots = t.__inheritSlots, e.__marks = t.__marks ? {} : null, t.__marks)
                for (var i in t.__marks) e.__marks[i] = t.__marks[i];
              for (var o in e.__attributes = Object.create(null), t.__attributes) e.__attributes[o] = t.__attributes[o];
              e.__attached = !1, e.parentNode = null, e.childNodes = [], e.ownerShadowRoot = r, e.__wxSlotParent = null, e.__wxSlotChildren = e.childNodes, e.__subtreeObserversCount = 0, e.classList = null, e.__styleSegments = [], e.__methodCaller = e, e.__relationHandler = null, e.__backendExtracted = A.backendExtractedDefault, e.__domElement = n, e.$$ = n, n && (n.__wxElement = e)
            }, u.prototype.setAutoDestroy = function (e) {
              this.__autoDestroy = !!e
            }, u.prototype.destroy = function () {
              "custom" !== c.documentBackend || this.__virtual || (this.__domElement.release(), this.__domElement = null)
            };
            var d = function (e) {
                if (!e.parentNode || e.parentNode.__attached) {
                  var t = function (e) {
                    if (e instanceof u) {
                      e.__attached = !0, e.__lifeTimeFuncs && e.__lifeTimeFuncs.attached.call(e.__methodCaller, [], e), e.__relationHandler && e.__relationHandler("attached"), e.__attachedObservers && !e.__attachedObservers.empty && o._callSingleObserver(e, "__attachedObservers", {
                        type: "attachStatus",
                        target: e,
                        status: "attached"
                      }), e.shadowRoot instanceof u && t(e.shadowRoot);
                      for (var n = e.childNodes, r = 0; r < n.length; r++) t(n[r])
                    }
                  };
                  t(e)
                }
              },
              p = function (e) {
                if (e.__attached) {
                  var t = function (e) {
                    if (e instanceof u) {
                      for (var n = e.childNodes, r = 0; r < n.length; r++) t(n[r]);
                      e.shadowRoot instanceof u && t(e.shadowRoot), e.__attached = !1, e.__autoDestroy && e.destroy(), e.__lifeTimeFuncs && e.__lifeTimeFuncs.detached.call(e.__methodCaller, [], e), e.__relationHandler && e.__relationHandler("detached"), e.__attachedObservers && !e.__attachedObservers.empty && o._callSingleObserver(e, "__attachedObservers", {
                        type: "attachStatus",
                        target: e,
                        status: "detached"
                      })
                    } else e.__autoDestroy && e.destroy()
                  };
                  t(e)
                }
              },
              g = function (e) {
                if (!e.__attached) return d(e);
                var t = function (e) {
                  if (e instanceof u) {
                    for (var n = e.childNodes, r = 0; r < n.length; r++) t(n[r]);
                    e.shadowRoot instanceof u && t(e.shadowRoot), e.__lifeTimeFuncs && e.__lifeTimeFuncs.moved.call(e.__methodCaller, [], e), e.__relationHandler && e.__relationHandler("moved")
                  }
                };
                t(e)
              },
              h = function (e, t, n) {
                if (e.__childObservers && !e.__childObservers.empty || e.__subtreeObserversCount) {
                  var r, i = [n];
                  r = "add" === t ? {
                    type: "childList",
                    target: e,
                    addedNodes: i
                  } : "remove" === t ? {
                    type: "childList",
                    target: e,
                    removedNodes: i
                  } : {
                    type: "childList",
                    target: e,
                    addedNodes: i,
                    removedNodes: i
                  }, o._callObservers(e, "__childObservers", r)
                }
              },
              _ = function (e, t) {
                if (e instanceof u && (!t.__wxHost.__idCacheDirty || !t.__slotCacheDirty)) {
                  var n = function (e) {
                    e.__id && (t.__wxHost.__idCacheDirty = !0), void 0 !== e.__slotName && (t.__slotCacheDirty = !0);
                    for (var r = e.childNodes, i = 0; i < r.length; i++) {
                      var o = r[i];
                      o instanceof u && n(o)
                    }
                  };
                  n(e)
                }
              };
            u._updateIdMap = function (e) {
              var t = e.shadowRoot;
              if (e.__idCacheDirty) {
                e.__idCacheDirty = !1;
                var n = e.__idCache = Object.create(null),
                  r = function (e) {
                    e.__id && (n[e.__id] || (n[e.__id] = e));
                    for (var t = e.childNodes, i = 0; i < t.length; i++) t[i] instanceof u && r(t[i])
                  };
                r(t)
              }
            };
            var v = function (e) {
                if (e.__hostAssociated && e.__slotCacheDirty) {
                  e.__slotCacheDirty = !1;
                  var t, n = e.__wxHost,
                    i = Object.create(null);
                  t = void 0 !== n.__singleSlot ? {
                    "": n.__singleSlot
                  } : n.__slots;
                  var o = function (e) {
                    void 0 !== e.__slotName && (i[e.__slotName] ? r.hasGlobalWarningListeners() && r.triggerWarning('slot "' + e.__slotName + '" duplication is found under a single shadow root. The first one was accepted.') : i[e.__slotName] = e);
                    for (var t = e.childNodes, n = 0; n < t.length; n++) t[n] instanceof u && o(t[n])
                  };
                  o(e), void 0 !== n.__singleSlot ? n.__singleSlot !== i[""] && (i[""] && (i[""].__wxSlotChildren = n.childNodes), b(n, i, t, !0), n.__singleSlot && (n.__singleSlot.__wxSlotChildren = []), n.__singleSlot = i[""] || null) : (b(n, i, t, !1), n.__slots = i)
                }
              },
              b = function (e, t, n, r) {
                var i = e.childNodes,
                  o = 0;
                if (r) {
                  var a = t[""];
                  if (a)
                    for (; o < i.length; o++) y(a, i[o], null, !1, !1, !1, -1);
                  else if (a = n[""])
                    for (; o < i.length; o++) y(a, null, i[o], !0, !1, !1, o)
                } else {
                  var s = function (e) {
                    for (var r = 0; r < e.length; r++) {
                      var i = e[r],
                        o = i.__slot || "",
                        a = t[o];
                      a ? y(a, i, null, !1, !0, !0) : (a = n[o]) && y(a, null, i, !0, !0, !0), i.__inheritSlots && s(i.childNodes)
                    }
                  };
                  s(i)
                }
              },
              m = function (e, t, n, r) {
                for (var i = function (e, t, r) {
                    var o = e.childNodes,
                      a = 0;
                    for (t && (a = o.indexOf(t) + (r ? 0 : 1)); a < o.length; a++) {
                      var s = o[a];
                      if (s.__slot === n) return s;
                      if (s.__inheritSlots) {
                        var l = i(s, null, !1);
                        if (l) return l
                      }
                    }
                    return null
                  }; t !== e; t = t.parentNode) {
                  var o = i(t.parentNode, t, r);
                  if (o) return o;
                  r = !1
                }
                return null
              },
              w = function (e) {
                for (var t = e.parentNode; t && t.__inheritSlots;) t = t.parentNode;
                if (t && void 0 === t.__singleSlot) {
                  var n = e.__slot || "",
                    i = t.__slots[n];
                  if (i) {
                    var o = m(t, e, n, !1);
                    y(i, e, o, !1, !0, !0)
                  } else r.hasGlobalWarningListeners() && r.triggerWarning('slot "' + n + '" is not found.'), (i = e.__wxSlotParent) && y(i, null, e, !0, !0, !0)
                }
              },
              y = function (e, t, n, r, i, o, a) {
                if (r && (n.__wxSlotParent = null), i && (a = e.__wxSlotChildren.indexOf(n)), t) {
                  var s = t.__wxSlotParent;
                  if (t.__wxSlotParent = e, s && o) {
                    var l = s.__wxSlotChildren.indexOf(t);
                    s.__wxSlotChildren.splice(l, 1), s === e && l < a && a--
                  }
                }
                var A = !1;
                (t && t.__backendExtracted || n && n.__backendExtracted) && (A = !0), "dom" === c.documentBackend ? A || function (e, t, n, r, i) {
                  var o = e;
                  if (o instanceof u) {
                    for (; o.__virtual;) {
                      var a = o.__wxSlotParent;
                      if (!a) {
                        o = null;
                        break
                      }
                      if (t && !n) {
                        var s = a.__wxSlotChildren.indexOf(o);
                        n = a.__wxSlotChildren[s + 1]
                      }
                      o = a
                    }
                    o instanceof u && (o = o.__domElement)
                  }
                  if (o) {
                    var l = r,
                      c = null,
                      A = null;
                    if (t)
                      if (t.__virtual) {
                        var f = document.createDocumentFragment(),
                          d = function (e) {
                            for (var t = 0; t < e.__wxSlotChildren.length; t++) {
                              var n = e.__wxSlotChildren[t];
                              n.__virtual ? d(n) : f.appendChild(n.__domElement)
                            }
                          };
                        d(t), c = f
                      } else c = t.__domElement;
                    if (n)
                      if (n.__virtual) {
                        var p = e,
                          g = 0;
                        if (r) {
                          var h = function (e) {
                            for (var t = 0; t < e.__wxSlotChildren.length; t++) {
                              var n = e.__wxSlotChildren[t];
                              n.__virtual ? h(n) : o.removeChild(n.__domElement)
                            }
                          };
                          h(n), l = !1, g = i + 1
                        } else p = n.__wxSlotParent, g = n === t ? i : p.__wxSlotChildren.indexOf(n);
                        if (t) {
                          var _ = function (e, t) {
                            for (; t < e.__wxSlotChildren.length; t++) {
                              var n = e.__wxSlotChildren[t];
                              if (!n.__virtual) return n;
                              var r = _(n, 0);
                              if (r) return r
                            }
                          };
                          n = null;
                          for (var v = p; !(n = _(v, g)) && v.__virtual; v = v.__wxSlotParent) g = v.__wxSlotParent.__wxSlotChildren.indexOf(v) + 1;
                          n && (A = n.__domElement)
                        }
                      } else A = n.__domElement;
                    l ? c ? o.replaceChild(c, A) : o.removeChild(A) : c && (A ? o.insertBefore(c, A) : o.appendChild(c))
                  } else if (t && t.__wxSlotParent) {
                    var b = function (e) {
                      if (e.__virtual)
                        for (var t = 0; t < e.__wxSlotChildren.length; t++) b(e.__wxSlotChildren[t]);
                      else {
                        var n = e.__domElement;
                        n && n.parentNode && n.parentNode.removeChild(n)
                      }
                    };
                    b(t)
                  }
                }(e, t, n, r, a) : "custom" === c.documentBackend && function (e, t, n, r, i) {
                  var o = e;
                  if (o instanceof u) {
                    for (; o.__virtual;) {
                      var a = o.__wxSlotParent;
                      if (!a) {
                        o = null;
                        break
                      }
                      if (t && !n) {
                        var s = a.__wxSlotChildren.indexOf(o);
                        n = a.__wxSlotChildren[s + 1]
                      }
                      o = a
                    }
                    o instanceof u && (o = o.__domElement)
                  }
                  if (o)
                    if (!t || n || t.__virtual) {
                      var l = c.customContext.createElement("fragment", ""),
                        A = 0,
                        f = -1;
                      if (t) {
                        var d = function (e) {
                          if (e.__virtual)
                            for (var t = 0; t < e.__wxSlotChildren.length; t++) {
                              var n = e.__wxSlotChildren[t];
                              d(n)
                            } else l.appendChild(e.__domElement)
                        };
                        d(t)
                      }
                      if (n) {
                        var p = e,
                          g = 0,
                          h = null;
                        if (r) {
                          var _ = function (e) {
                            if (e.__virtual) {
                              for (var t = 0, n = 0; n < e.__wxSlotChildren.length; n++) t += _(e.__wxSlotChildren[n]);
                              return t
                            }
                            return h || (h = e), 1
                          };
                          A = _(n), g = i + 1
                        } else p = n.__wxSlotParent, g = n === t ? i : p.__wxSlotChildren.indexOf(n);
                        if (t && !h)
                          for (var v = function (e, t) {
                              for (; t < e.__wxSlotChildren.length; t++) {
                                var n = e.__wxSlotChildren[t];
                                if (!n.__virtual) return n;
                                var r = v(n, 0);
                                if (r) return r
                              }
                              return null
                            }, b = p; !(h = v(b, g)) && b.__virtual; b = b.__wxSlotParent) g = b.__wxSlotParent.__wxSlotChildren.indexOf(b) + 1;
                        h && (f = o.findChildPosition(h.__domElement))
                      }
                      o.splice(f, A, l), l.release()
                    } else o.appendChild(t.__domElement);
                  else if (t && t.__wxSlotParent) {
                    for (var m = t.__wxSlotParent; m.__virtual && (m = m.__wxSlotParent););
                    if (m) {
                      var w = null,
                        y = function (e) {
                          if (e.__virtual) {
                            for (var t = 0, n = 0; n < e.__wxSlotChildren.length; n++) t += y(e.__wxSlotChildren[n]);
                            return t
                          }
                          return w || (w = e), 1
                        };
                      m.__domElement.splice(m.__domElement.findChildPosition(w.__domElement), y(t), null)
                    }
                  }
                }(e, t, n, r, a), c.writeExtraInfoToAttr && "dom" === c.documentBackend && (r && n instanceof u && n.__domElement && n.__domElement.removeAttribute("exparser:info-in-slot-of"), t instanceof u && t.__domElement && (void 0 !== e.__slotName && e.ownerShadowRoot ? t.__domElement.setAttribute("exparser:info-in-slot-of", e.ownerShadowRoot.__wxHost.__componentInstanceId) : t.__domElement.removeAttribute("exparser:info-in-slot-of"))), i && (-1 === a && (a = e.__wxSlotChildren.length), t ? e.__wxSlotChildren.splice(a, r ? 1 : 0, t) : e.__wxSlotChildren.splice(a, r ? 1 : 0))
              },
              C = function (e, t) {
                for (var n = e.childNodes, r = 0; r < n.length; r++) {
                  var i = n[r];
                  t(e, i), i.__inheritSlots && C(i, t)
                }
              },
              x = u.insertChildToElement = function (e, t, n, i) {
                if (void 0 !== e.__slotName) return !1;
                var a = n >= 0 ? e.childNodes[n] : null;
                i && t === a && (i = !1);
                var s = null,
                  l = e,
                  c = e;
                if (t) {
                  s = t.parentNode, t.parentNode = e;
                  var A = e.__subtreeObserversCount;
                  if (s) {
                    var u = s.childNodes.indexOf(t);
                    s.childNodes.splice(u, 1), s === e && u < n && n--, A -= s.__subtreeObserversCount
                  }
                  A && o._updateSubtreeCaches(t, A)
                }
                for (var f = e; f && f.__inheritSlots;) f = f.parentNode;
                for (var b = !f || !f.__slots, w = !b || e.__inheritSlots, x = s; x && x.__inheritSlots;) x = x.parentNode;
                var E = !x || !x.__slots,
                  B = !E || s && s.__inheritSlots;
                if (b) void 0 !== e.__singleSlot && (l = c = e.__singleSlot, r.hasGlobalWarningListeners() && (l || r.triggerWarning("slot is not found."))), l ? y(l, t, a, i, w, B, n) : t.__wxSlotParent && y(t.__wxSlotParent, null, t, !0, B, !1), t && !E && t.__inheritSlots && C(t, (function (e, t) {
                  y(e, t, null, !1, !0, !0, -1)
                }));
                else {
                  var S = "";
                  if (t && (S = t.__slot || "", l = f.__slots[S] || null, r.hasGlobalWarningListeners() && (l || r.triggerWarning('slot "' + S + '" is not found.'))), a && (c = f.__slots[a.__slot || ""] || null), a && c && i && y(c, null, a, i, !0, !1), t)
                    if (l) {
                      var I = a ? m(f, a, S, !i) : m(f, e, S, !1);
                      y(l, t, I, !1, !0, B)
                    } else t.__wxSlotParent && y(t.__wxSlotParent, null, t, !0, B, !1);
                  a && i && a.__inheritSlots && C(a, (function (e, t) {
                    y(e, t, null, !1, !0, !0, -1)
                  })), t && t.__inheritSlots && C(t, (function (t, n) {
                    var o = n.__slot || "",
                      s = f.__slots[o] || null;
                    if (s) {
                      var l = a ? m(f, a, o, !i) : m(f, e, o, !1);
                      y(s, n, l, !1, !0, !0)
                    } else r.hasGlobalWarningListeners() && r.triggerWarning('slot "' + o + '" is not found.'), n.__wxSlotParent && y(n.__wxSlotParent, null, n, !0, !0, !1)
                  }))
                }
                return i && (e.__subtreeObserversCount && o._updateSubtreeCaches(a, -e.__subtreeObserversCount), a.parentNode = null), -1 === n && (n = e.childNodes.length), t ? e.childNodes.splice(n, i ? 1 : 0, t) : e.childNodes.splice(n, i ? 1 : 0), e.ownerShadowRoot && (i && _(a, e.ownerShadowRoot), t && _(t, e.ownerShadowRoot), v(e.ownerShadowRoot)), i && (p(a), h(e, "remove", a)), t && (s ? g(t) : d(t), s === e ? h(e, "move", t) : (s && h(s, "remove", t), h(e, "add", t))), !0
              },
              E = function (e, t, n, r) {
                if (t && e.ownerShadowRoot !== t.ownerShadowRoot) throw new Error("Cannot move the node from one shadow tree to another shadow tree.");
                var i = r ? n : t,
                  o = -1;
                return n && (o = e.childNodes.indexOf(n)) < 0 ? null : x(e, t, o, r) ? i : null
              };
            u._attachShadowRoot = function (e) {
              var t = e.__wxHost;
              t.__wxSlotChildren = [e], y(t, e, null, !1, !1, 0), e.__hostAssociated = !0, v(e)
            }, u.appendChild = function (e, t) {
              return E(e, t, null, !1)
            }, u.insertBefore = function (e, t, n) {
              return E(e, t, n, !1)
            }, u.removeChild = function (e, t) {
              return E(e, null, t, !0)
            }, u.replaceChild = function (e, t, n) {
              return E(e, t, n, !0)
            }, u.prototype.appendChild = function (e) {
              return E(this, e, null, !1)
            }, u.prototype.insertBefore = function (e, t) {
              return E(this, e, t, !1)
            }, u.prototype.removeChild = function (e) {
              return E(this, null, e, !0)
            }, u.prototype.replaceChild = function (e, t) {
              return E(this, e, t, !0)
            };
            var B = function (e) {
              var t = !0,
                n = !0;
              if (e instanceof u ? (e.__backendExtracted = !0, e.$$ = e.__domElement = null, n = !1) : e instanceof s && (e.__backendExtracted = !0, e.$$ = e.__domElement = null, t = !1, n = !1), t && e.__wxSlotChildren)
                for (var r = 0; r < e.__wxSlotChildren.length; r++) {
                  var i = e.__wxSlotChildren[r];
                  B(i)
                } else if (n && e.childNodes)
                  for (var o = 0; o < e.childNodes.length; o++) B(e.childNodes[o])
            };
            u.extractBackend = function (e) {
              if (e.__backendExtracted) return null;
              var t = e.__domElement;
              return B(e), t
            };
            var S = function (e, t) {
                if (!t) {
                  var n = l.toElement(e.__domElement);
                  return e.$$ = e.__domElement = n, n
                }
                if (e.__domElement.tagName.toUpperCase() === t.tagName) e.$$ = e.__domElement = t;
                else {
                  var r = l.toElement(e.__domElement);
                  e.$$ = e.__domElement = r, t.parentNode.replaceChild(r, t)
                }
                return null
              },
              I = function (e, t, n) {
                var r = e instanceof u && e.__virtual,
                  i = t ? t.childNodes[n] : void 0,
                  o = !0,
                  a = !0,
                  l = null;
                if (e instanceof u) e.__backendExtracted = !1, r || (l = S(e, i)), a = !1;
                else if (e instanceof s) e.__backendExtracted = !1, l = function (e, t) {
                  if (!t) {
                    var n = document.createTextNode(e.textContent);
                    return e.$$ = e.__domElement = n, n
                  }
                  if (void 0 !== t.textContent) t.textContent = e.textContent, e.$$ = e.__domElement = t;
                  else {
                    var r = document.createTextNode(e.textContent);
                    e.$$ = e.__domElement = r, t.parentNode.replaceChild(r, t)
                  }
                  return null
                }(e, i), o = !1, a = !1;
                else {
                  var c = document.createDocumentFragment();
                  if (c.__wxSlotChildren = e.__wxSlotChildren, i && i.childNodes)
                    for (; i.childNodes.length;) c.appendChild(i.childNodes[0]);
                  l = function (e, t) {
                    if (!t) return e;
                    for (; e.childNodes && t.childNodes && t.childNodes.length;) e.appendChild(t.childNodes[0]);
                    return t.parentNode.replaceChild(e, t), null
                  }(e, i), e = c
                }
                l ? (t.appendChild(l), i = l) : i = t ? t.childNodes[n] : void 0;
                var A = 0;
                if (o && e.__wxSlotChildren)
                  for (var f = 0; f < e.__wxSlotChildren.length; f++) {
                    var d = e.__wxSlotChildren[f];
                    if (r) n = I(d, t, n);
                    else if (d.asShadowRoot) {
                      for (var p = 0; p < d.asShadowRoot.childNodes.length; p++) A = I(d.asShadowRoot.childNodes[p], i, A);
                      e.shadowRoot = i, i.__wxHost = e, e.__wxSlotChildren[0] = i, i.__wxSlotParent = e, e.__singleSlot === d && (e.__singleSlot = i)
                    } else A = I(d, i, A)
                  } else if (a && e.childNodes)
                    for (var g = 0; g < e.childNodes.length; g++) A = I(e.childNodes[g], i, A);
                if (r) return n;
                for (; i.childNodes.length > A;) i.removeChild(i.childNodes[A]);
                return n + 1
              };
            u.injectBackend = function (e, t) {
              if (e.__backendExtracted) {
                var n = document.createDocumentFragment();
                n.appendChild(t), I(e, n, 0)
              }
            }, u.prototype.triggerEvent = function (e, t, n) {
              i.triggerEvent(this, e, t, n)
            }, u.prototype.dispatchEvent = function (e) {
              i.dispatchEvent(this, e)
            }, u.prototype.addListener = function (e, t, n) {
              i.addListenerToElement(this, e, t, n)
            }, u.prototype.removeListener = function (e, t, n) {
              i.removeListenerFromElement(this, e, t, n)
            }, u.setMethodCaller = function (e, t) {
              e.__methodCaller = t
            }, u.getMethodCaller = function (e) {
              return e.__methodCaller
            }, u.prototype.getAttribute = function (e) {
              if (!this.__attributes) return null;
              var t = this.__attributes[e];
              return void 0 === t ? null : t
            }, u.prototype.setAttribute = function (e, t) {
              this.__attributes || (this.__attributes = Object.create(null)), t = String(t), this.__attributes[e] !== t && (this.__attributes[e] = t, this.__domElement && this.__domElement.setAttribute && this.__domElement.setAttribute(e, t))
            }, u.prototype.setStyle = function (e) {
              this.__domElement && "custom" === c.documentBackend && this.__domElement.setStyle(e)
            }, u.prototype.removeAttribute = function (e) {
              this.__attributes && (delete this.__attributes[e], this.__domElement && "dom" === c.documentBackend && this.__domElement.removeAttribute(e))
            }, u.prototype.getBoundingClientRect = function () {
              return this.__domElement ? this.__domElement.getBoundingClientRect() : {
                left: 0,
                top: 0,
                width: 0,
                height: 0
              }
            }, u.prototype.setMark = function (e, t) {
              this.__marks || (this.__marks = {}), this.__marks[e] = t
            }, u.prototype.collectMarks = function () {
              for (var e = {}, t = this; t; t = t.parentNode)
                if (t.__marks)
                  for (var n in t.__marks) hasOwnProperty.call(e, n) || (e[n] = t.__marks[n]);
              return e
            };
            var k = u.prototype.setNodeStyle = function (e, t) {
              if (this.__styleSegments[t || 0] !== e) {
                this.__styleSegments[t || 0] = e;
                var n = this.__styleSegments.join(";");
                if (this.__domElement && this.ownerShadowRoot && this.ownerShadowRoot.__childrenPropsFilter) {
                  var r = this.ownerShadowRoot.__childrenPropsFilter.style;
                  if ("function" == typeof r) return void("dom" === c.documentBackend ? this.__domElement.setAttribute("style", r.call(this, n)) : "custom" === c.documentBackend && this.__domElement.setStyle(r.call(this, n)))
                }
                this.__domElement && ("dom" === c.documentBackend ? this.__domElement.setAttribute("style", n) : "custom" === c.documentBackend && this.__domElement.setStyle(n)), (this.__propObservers && !this.__propObservers.empty || this.__subtreeObserversCount) && o._callObservers(this, "__propObservers", {
                  type: "properties",
                  target: this,
                  propertyName: "style"
                })
              }
            };
            u.replaceDocumentElement = function (e, t, n) {
              e.__attached || ("dom" === c.documentBackend ? t.parentNode.replaceChild(e.__domElement, t) : "custom" === c.documentBackend && t.replaceChild(e.__domElement, n), d(e))
            }, u.pretendAttached = function (e) {
              e.__attached || d(e)
            }, u.pretendDetached = function (e) {
              e.__attached && p(e)
            }, u.isAttached = function (e) {
              return e.__attached
            }, u.setSlotName = function (e, t) {
              if (t = null == t ? "" : String(t), void 0 === e.__slotName) {
                if (0 !== e.childNodes.length || 0 !== e.__wxSlotChildren.length) return;
                e.__wxSlotChildren = []
              }
              e.__slotName = t, e.ownerShadowRoot && (e.ownerShadowRoot.__slotCacheDirty = !0, v(e.ownerShadowRoot))
            }, u.setInheritSlots = function (e) {
              e.__singleSlot || e.__slots || e.__wxSlotChildren.length || (e.__wxSlotChildren = [], e.__inheritSlots = !0)
            }, u.getInheritSlots = function (e) {
              return e.__inheritSlots
            };
            var T = function (e, t) {
                var n = e.match(/^(#[_a-zA-Z][-_a-zA-Z0-9:]*|)((?:\.-?[_a-zA-Z][-_a-zA-Z0-9]*)+|)$/);
                if (!n) return null;
                var r = n[1].slice(1),
                  i = n[2].split(".");
                return i.shift(), r || i.length ? {
                  id: r,
                  classes: i,
                  relation: t || ""
                } : null
              },
              D = u.parseSelector = function (e) {
                for (var t = String(e || "").split(","), n = [], r = !1, i = 0; i < t.length; i++) {
                  for (var o = t[i].split(/( |\t|>+)/g), a = [], s = "", l = 0; l < o.length; l++) {
                    var c = o[l];
                    if (c && " " !== c && "\t" !== c)
                      if (">" !== c[0]) {
                        var A = T(c, s);
                        if (s = "", !A) break;
                        a.push(A)
                      } else {
                        if ("" !== s) break;
                        s = c, ">>>" === c && (r = !0)
                      }
                  }
                  l === o.length && a.length && n.push(a)
                }
                return n.length ? {
                  crossShadow: r,
                  union: n
                } : null
              },
              L = function (e, t, n, r, i) {
                if (t === e) return !1;
                var o = n[r],
                  a = !0;
                o.id && o.id !== t.__id && (a = !1);
                for (var s = o.classes, l = 0; a && l < s.length; l++) t.classList.contains(s[l]) || (a = !1);
                if (!a && ">" === i) return !1;
                var c = t;
                if (a && 0 === r) {
                  if (null === e) return !0;
                  for (c = c.parentNode; c; c = c.parentNode)
                    if (c === e) return !0;
                  if (">>>" !== i) return !1;
                  c = t, a = !1
                }
                var A = a ? o.relation : i;
                do {
                  c.parentNode ? c = c.parentNode : ">>>" === A ? c = c.__wxHost : ">>>" === i ? (a = !1, c = c.__wxHost) : c = null, c === e && (c = null)
                } while (c && c.__virtual);
                if (!c) return !1;
                if (a) {
                  if (L(e, c, n, r - 1, A)) return !0;
                  if (">>>" !== i) return !1
                }
                return L(e, c, n, r, i)
              },
              Q = function (e, t, n) {
                if (n.__virtual) return !1;
                for (var r = e.union, i = 0; i < r.length; i++) {
                  var o = r[i];
                  if (L(t, n, o, o.length - 1, ">")) return !0
                }
                return !1
              },
              M = function (e, t, n, r, i) {
                if (Q(t, n, r) && (e.push(r), i)) return !0;
                if (r.shadowRoot && t.crossShadow && ((r.ownerShadowRoot ? r.ownerShadowRoot.__wxHost.__componentOptions.domain : c.domain) === r.__componentOptions.domain && M(e, t, n, r.shadowRoot, i) && i)) return !0;
                for (var o = r.childNodes, a = 0; a < o.length; a++)
                  if (o[a] instanceof u && M(e, t, n, o[a], i) && i) return !0;
                return !1
              };
            u.prototype.querySelector = function (e) {
              var t = "object" == typeof e ? e : D(e);
              if (!t) return null;
              var n = [];
              return M(n, t, this, this, !0), n[0] || null
            }, u.prototype.querySelectorAll = function (e) {
              var t = "object" == typeof e ? e : D(e),
                n = [];
              return t ? (M(n, t, this, this, !1), n) : []
            }, u.matchSelector = function (e, t) {
              var n = "object" == typeof e ? e : D(e);
              return !!n && Q(n, null, t)
            }, u.prototype.matchSelector = function (e, t) {
              var n = "object" == typeof e ? e : D(e);
              return !!n && Q(n, this, t)
            }, e.exports = u
          }, function (e, t, n) {
            var r = n(3),
              i = function () {};
            i.prototype = Object.create(Object.prototype, {
              constructor: {
                value: i,
                writable: !0,
                configurable: !0
              }
            }), i.create = function (e) {
              var t = new i;
              return t._cb = e, t._noSubtreeCb = function (t) {
                t.target === this && e.call(this, t)
              }, t._binded = [], t
            }, i.prototype.observe = function (e, t) {
              var n = 0,
                i = (t = t || {}).subtree ? this._cb : this._noSubtreeCb;
              t.properties && (e.__propObservers || (e.__propObservers = r.create("Observer Callback")), this._binded.push({
                funcArr: e.__propObservers,
                id: e.__propObservers.add(i),
                subtree: t.subtree ? e : null
              }), n++), t.childList && (e.__childObservers || (e.__childObservers = r.create("Observer Callback")), this._binded.push({
                funcArr: e.__childObservers,
                id: e.__childObservers.add(i),
                subtree: t.subtree ? e : null
              }), n++), t.characterData && (e.__textObservers || (e.__textObservers = r.create("Observer Callback")), this._binded.push({
                funcArr: e.__textObservers,
                id: e.__textObservers.add(i),
                subtree: t.subtree ? e : null
              }), n++), t.subtree && o(e, n), t.attachStatus && (e.__attachedObservers || (e.__attachedObservers = r.create("Observer Callback")), this._binded.push({
                funcArr: e.__attachedObservers,
                id: e.__attachedObservers.add(i),
                subtree: null
              }))
            }, i.prototype.disconnect = function () {
              for (var e = this._binded, t = 0; t < e.length; t++) {
                var n = e[t];
                n.funcArr.remove(n.id), n.subtree && o(n.subtree, -1)
              }
              this._binded = []
            };
            var o = i._updateSubtreeCaches = function (e, t) {
              e.__subtreeObserversCount += t;
              var n = e.childNodes;
              if (n)
                for (var r = 0; r < n.length; r++) o(n[r], t)
            };
            i._callObservers = function (e, t, n) {
              do {
                e[t] && e[t].call(e, [n]), e = e.parentNode
              } while (e && e.__subtreeObserversCount)
            }, i._callSingleObserver = function (e, t, n) {
              e[t] && e[t].call(e, [n])
            }, e.exports = i
          }, function (e, t, n) {
            var r = n(4),
              i = function () {},
              o = /(~|\^+)?-?[_0-9a-z][-_0-9a-z]*/gi,
              a = null;
            i._setElementSystem = function (e) {
              a = e, i._setElementSystem = null
            };
            var s = Object.prototype.hasOwnProperty;
            i.create = function (e, t) {
              var n = new i;
              for (var r in n._prefix = "", n._addOriginalClass = !1, n._alias = t, n._resolvedAlias = {}, t) n._resolvedAlias[r] = "";
              return n._rawNames = [], n._elem = e, n._owner = null, n._prevGenNames = "", n
            };
            var l = function (e) {
                var t = "",
                  n = e._rawNames,
                  r = e._prefix,
                  i = e._owner ? e._owner._resolvedAlias : null,
                  o = e._addOriginalClass;
                r && (r += "--");
                for (var a = 0; a < n.length; a++) {
                  var l = n[a];
                  if (a && (t += " "), i && s.call(i, l)) t += i[l];
                  else if ("~" === l[0]) t += l.slice(1);
                  else if ("^" === l[0]) {
                    l = l.slice(1);
                    for (var c = e._owner || null;
                      "^" === l[0];) l = l.slice(1), c = c ? c._owner : null;
                    var A = c ? c._prefix : "";
                    A && (A += "--"), t += A + l
                  } else o && (t += l + " "), t += r + l
                }
                return t
              },
              c = function (e) {
                var t = e._elem.__domElement;
                if (t) {
                  var n = l(e);
                  if ("dom" === r.documentBackend) n ? t.setAttribute("class", n) : t.removeAttribute("class");
                  else if ("custom" === r.documentBackend) {
                    if (e._prevGenNames === n) return;
                    e._prevGenNames = n, t.setClass(n)
                  }
                }
              },
              A = function (e) {
                var t = e.classList;
                t instanceof i && (t._alias && u(t), c(t));
                for (var n = e.childNodes, r = 0; r < n.length; r++) n[r] instanceof a && A(n[r])
              },
              u = function (e) {
                var t = e._owner;
                if (!t) return !1;
                var n = !1;
                for (var r in e._alias) {
                  var i = e._alias[r],
                    o = [];
                  if (i)
                    for (var l = 0; l < i.length; l++) {
                      var c = i[l];
                      if (s.call(t._alias, c)) {
                        var u = t._resolvedAlias[c];
                        o.push(u)
                      } else {
                        var f = e._prefix && c ? e._prefix + "--" + c : c;
                        o.push(f)
                      }
                    }
                  var d = o.join(" ");
                  e._resolvedAlias[r] !== d && (n = !0, e._resolvedAlias[r] = d)
                }
                n && e._elem.shadowRoot instanceof a && A(e._elem.shadowRoot)
              };
            i.prototype.toggle = function (e, t) {
              var n = this._rawNames.indexOf(e);
              void 0 === t && (t = n < 0), t ? n < 0 && (this._rawNames.push(e), c(this)) : n >= 0 && (this._rawNames.splice(n, 1), c(this))
            }, i.prototype.contains = function (e) {
              for (var t = this._rawNames, n = 0; n < t.length; n++) {
                var r = t[n];
                if ("~" === r[0]) {
                  if (r.slice(1) === e) return !0
                } else if ("^" === r[0]) {
                  for (var i = 1;
                    "^" === r[i];) i++;
                  if (r.slice(i) === e) return !0
                } else if (r === e) return !0
              }
              return !1
            }, i.prototype._setOwnerOptions = function (e, t, n) {
              var r = this._prefix;
              this._prefix = t, r !== t && (this._addOriginalClass = n, this._owner = e, this._alias && u(this), c(this))
            }, i.prototype._setAlias = function (e, t) {
              var n = this._owner,
                r = String(t).match(o);
              this._alias[e] = r;
              var i = [];
              if (r)
                for (var a = 0; a < r.length; a++) {
                  var l = r[a];
                  n && s.call(n._alias, l) ? i.push(n._resolvedAlias[l]) : i.push(this._prefix ? this._prefix + "--" + l : l)
                }
              this._resolvedAlias[e] = i.join(" "), A(this._elem.shadowRoot)
            }, i.prototype.setClassNames = function (e) {
              e = null == e ? "" : String(e), this._rawNames = e.match(o) || [], c(this)
            }, i.prototype.getClassNames = function () {
              return l(this)
            }, i.prototype.getPrefix = function () {
              return this._prefix
            }, i.prototype.getAddOriginalClass = function () {
              return this._addOriginalClass
            }, e.exports = i
          }, function (e, t, n) {
            var r = n(10),
              i = n(4),
              o = n(13),
              a = function () {};
            a.prototype = Object.create(Object.prototype, {
              constructor: {
                value: a,
                writable: !0,
                configurable: !0
              }
            });
            var s = a._advancedCreate = function (e, t) {
              var n = new a;
              n.__slot = "";
              var r = null;
              return o.backendExtractedDefault || "dom" !== i.documentBackend ? "custom" === i.documentBackend ? ((r = i.customContext.createElement("text", "")).setText(e || ""), r.textContent = e, r.__wxElement = n) : n.__textContent = e : (r = document.createTextNode(e || "")).__wxElement = n, n.$$ = n.__domElement = r, n.__backendExtracted = o.backendExtractedDefault, n.__subtreeObserversCount = 0, n.__autoDestroy = !0, n.parentNode = null, n.ownerShadowRoot = t, n
            };
            a.create = function (e) {
              return s(e, null)
            }, a.prototype.setAutoDestroy = function (e) {
              this.__autoDestroy = !!e
            }, a.prototype.destroy = function () {
              "custom" === i.documentBackend && (this.__domElement.release(), this.__domElement = null)
            }, Object.defineProperty(a.prototype, "textContent", {
              get: function () {
                return this.__domElement ? this.__domElement.textContent : this.__textContent
              },
              set: function (e) {
                if (e = String(e), this.__domElement) {
                  if (this.__domElement.textContent === e) return;
                  this.__domElement.textContent = e, "custom" === i.documentBackend && this.__domElement.setText(e)
                } else {
                  if (this.__textContent === e) return;
                  this.__textContent = e
                }(this.__textObservers && !this.__textObservers.empty || this.__subtreeObserversCount) && r._callObservers(this, "__textObservers", {
                  type: "characterData",
                  target: this
                })
              }
            }), e.exports = a
          }, function (e, t) {
            t.backendExtractedDefault = !1, t.enableBackendExtractedDefault = function () {
              t.backendExtractedDefault = !0
            }, t.disableBackendExtractedDefault = function () {
              t.backendExtractedDefault = !1
            }
          }, function (e, t) {
            var n = function (e) {
              this.tagName = e, this.id = "", this.attrs = {}
            };
            n.toElement = function (e) {
              var t = document.createElement(e.tagName);
              for (var n in e.id && (t.id = e.id), e.attrs) t.setAttribute(n, e.attrs[n]);
              return t
            }, n.fromElement = function (e) {
              var t = new n(e.tagName);
              t.id = e.id;
              for (var r = e.attributes, i = 0; i < r.length; i++) t.attrs[r[i].name] = r[i].value;
              return t
            }, n.prototype.cloneNode = function () {
              var e = new n;
              for (var t in e.id = this.id, this.attrs) e.attrs[t] = this.attrs[t];
              return e
            }, n.prototype.removeAttribute = function (e, t) {
              delete this.attrs[e]
            }, n.prototype.setAttribute = function (e, t) {
              this.attrs[e] = t
            }, n.prototype.getAttribute = function (e) {
              return this.attrs[e]
            }, e.exports = n
          }, function (e, t, n) {
            var r = n(3),
              i = n(5),
              o = n(16),
              a = n(6),
              s = n(8),
              l = n(9),
              c = n(17),
              A = n(10),
              u = n(11),
              f = n(14),
              d = n(4),
              p = n(13),
              g = n(7),
              h = a.addListenerToElement,
              _ = g.parseSinglePath,
              v = i.deepCopy,
              b = function () {};
            b.prototype = Object.create(l.prototype, {
              constructor: {
                value: b,
                writable: !0,
                configurable: !0
              },
              data: {
                get: function () {
                  return this.__dataProxy._data
                },
                set: function (e) {
                  var t = this.__dataProxy;
                  for (var n in e) t.scheduleReplace([n], e[n]);
                  t.doUpdates()
                },
                configurable: !0
              },
              $: {
                get: function () {
                  return l._updateIdMap(this), this.__idCache
                },
                set: function () {}
              }
            });
            var m = function () {};
            m.prototype = Object.create(Object.prototype), a._setComponent(b);
            var w = null;
            b._setDefaultTemplateEngine = function (e) {
              w = e, b._setDefaultTemplateEngine = null
            };
            var y = function (e, t, n) {
              if (n)
                for (var i = 0; i < n.length; i++)
                  if (s.matchTypeWithValue(n[i], e)) return e;
              return t === String ? null == e ? (r.hasGlobalWarningListeners() && r.triggerWarning("property received type-uncompatible value: expected <String> but get null value. Used empty string instead."), "") : (r.hasGlobalWarningListeners() && "object" == typeof e && r.triggerWarning("property received type-uncompatible value: expected <String> but got object-typed value. Forcely converted."), String(e)) : t === Number ? isFinite(e) ? Number(e) : (r.hasGlobalWarningListeners() && ("number" == typeof e ? r.triggerWarning("property received type-uncompatible value: expected <Number> but got NaN or Infinity. Used 0 instead.") : r.triggerWarning("property received type-uncompatible value: expected <Number> but got non-number value. Used 0 instead.")), 0) : t === Boolean ? !!e : t === Array ? e instanceof Array ? e : (r.hasGlobalWarningListeners() && r.triggerWarning("property received type-uncompatible value: expected <Array> but got non-array value. Used empty array instead."), []) : t === Object ? "object" == typeof e ? e : (r.hasGlobalWarningListeners() && r.triggerWarning("property received type-uncompatible value: expected <Object> but got non-object value. Used null instead."), null) : void 0 === e ? null : e
            };
            o.setPropUpdater((function (e, t, n, i) {
              var o = e[0],
                a = this.__propData[o];
              if (n = y(n, t.type, t.optionalTypes), !(!t.availability || function (e, t, n, i) {
                  var o = [e.ownerShadowRoot ? e.ownerShadowRoot.__wxHost.__componentOptions.domain : void 0, i ? void 0 : n];
                  return !!r.safeCallback("Availablity Controller", t, e.__methodCaller, o, e)
                }(this, t.availability, n, i))) return r.hasGlobalWarningListeners() && r.triggerWarning('the new value for property "' + o + '" in component "' + (this.is || "") + '" is currently not available. The value is not changed.'), a;
              if (t.filter) {
                var s = r.safeCallback("Property Filter", t.filter, this.__methodCaller, i ? [] : [n, a, e], this);
                void 0 !== s && (n = s)
              }
              return this.__domElement && this.__componentOptions.reflectToAttributes && this.__propPublic[o] && function (e, t, n) {
                if ("dom" === d.documentBackend) {
                  var r = t.replace(/[A-Z]/g, (function (e) {
                      return "-" + e.toLowerCase()
                    })),
                    i = typeof n;
                  "boolean" === i ? n ? e.__domElement.setAttribute(r, "") : e.__domElement.removeAttribute(r) : "object" === i ? e.__domElement.setAttribute(r, JSON.stringify(n)) : e.__domElement.setAttribute(r, n)
                }
              }(this, o, n), n
            })), o.setPropObserver((function (e, t, n, i, o, a) {
              if (i.observeAssignments || e !== t) {
                var s = n[0];
                this.__propertyChangeListeners && this.__propertyChangeListeners[s] && !a && r.safeCallback("Property Observer", this.__propertyChangeListeners[s], this.__methodCaller, [e], this), i.observer && r.safeCallback("Property Observer", i.observer, this.__methodCaller, o ? [] : [e, t, n], this), i.public && (this.__propObservers && !this.__propObservers.empty || this.__subtreeObserversCount) && A._callObservers(this, "__propObservers", {
                  type: "properties",
                  target: this,
                  propertyName: s
                })
              }
            }));
            var C = function (e, t, n) {
                t.__relationLinks || (t.__relationLinks = {});
                for (var r = t.__relationLinks[n] = [], i = 0; i < e.length; i++) r.push(null)
              },
              x = function (e, t, n, i, o) {
                for (var a = b.prototype.hasBehavior, l = "parent" === i, c = "shadowHost" === i, A = 0; A < e.length; A++) {
                  var u, f = e[A];
                  if (u = "object" != typeof f.target ? s._list[f.target] : f.target) {
                    var d = t[A],
                      p = null;
                    if (!o)
                      for (var g = c ? n.ownerShadowRoot && n.ownerShadowRoot.__wxHost : n.parentNode; g; g = c ? g.ownerShadowRoot && g.ownerShadowRoot.__wxHost : g.parentNode)
                        if (!g.__virtual) {
                          if (a.call(g, u)) {
                            var h;
                            h = l ? g.__relationMap.child : c ? g.__relationMap.shadowContent : g.__relationMap.descendant;
                            for (var _ = 0; _ < h.length; _++) {
                              var v, m = h[_];
                              if ((v = "object" != typeof m.target ? s._list[m.target] : m.target) && a.call(n, v)) {
                                p = {
                                  parent: g,
                                  relation: m
                                };
                                break
                              }
                            }
                          }
                          if (l || p) break
                        } t[A] = p, !d || p && d.parent === p.parent || (r.safeCallback("Relation Unlinked Callback", d.relation.unlinked, d.parent.__methodCaller, [n.__methodCaller], d.parent), r.safeCallback("Relation Unlinked Callback", f.unlinked, n.__methodCaller, [d.parent.__methodCaller], n)), !p || d && d.parent === p.parent || (r.safeCallback("Relation Linked Callback", p.relation.linked, p.parent.__methodCaller, [n.__methodCaller], p.parent), r.safeCallback("Relation Linked Callback", f.linked, n.__methodCaller, [p.parent.__methodCaller], n)), d && p && d.parent === p.parent && (r.safeCallback("Relation Link Changed Callback", p.relation.linkChanged, p.parent.__methodCaller, [n.__methodCaller], p.parent), r.safeCallback("Relation Link Changed Callback", f.linkChanged, n.__methodCaller, [p.parent.__methodCaller], n)), o || p || r.safeCallback("Relation Link Failed Callback", f.linkFailed, n.__methodCaller, [], n)
                  }
                }
              },
              E = function (e, t, n) {
                if (e instanceof l) {
                  var r = 0,
                    i = null;
                  if (e instanceof b) {
                    for (e.__pageLifeTimeFuncs[t] && e.__pageLifeTimeFuncs[t].call(e.__methodCaller, n || []), i = e.childNodes, r = 0; r < i.length; r++) E(i[r], t, n);
                    e = e.shadowRoot
                  }
                  for (i = e.childNodes, r = 0; r < i.length; r++) E(i[r], t, n)
                }
              };
            b._list = {}, b.register = function (e) {
              var t = e.options || {},
                n = s.create(e),
                r = void 0 !== t.classPrefix ? t.classPrefix : d.classPrefix;
              null != r || (r = n.is || "");
              var i = new m;
              return i._unprepared = n, i.is = e.is || "", i.behavior = n, i.protoFunc = null, i.props = null, i.template = null, i.innerEvents = null, i.generics = n.generics, i.initiator = n.initiator || null, i.options = {
                availability: t.availability || d.availability,
                domain: t.domain || d.domain,
                writeOnly: !!(void 0 !== t.writeOnly ? t.writeOnly : d.writeOnly),
                allowInWriteOnly: !!(void 0 !== t.allowInWriteOnly ? t.allowInWriteOnly : d.allowInWriteOnly),
                classPrefix: r,
                styleScope: t.styleScope || d.styleScope,
                addGlobalClass: !!(void 0 !== t.addGlobalClass ? t.addGlobalClass : d.addGlobalClass),
                templateEngine: t.templateEngine || d.templateEngine || w,
                renderingMode: t.renderingMode || d.renderingMode,
                multipleSlots: !!(void 0 !== t.multipleSlots ? t.multipleSlots : d.multipleSlots),
                reflectToAttributes: !!(void 0 !== t.reflectToAttributes ? t.reflectToAttributes : d.reflectToAttributes),
                writeFieldsToNode: !!(void 0 !== t.writeFieldsToNode ? t.writeFieldsToNode : d.writeFieldsToNode),
                writeIdToDOM: !!(void 0 !== t.writeIdToDOM ? t.writeIdToDOM : d.writeIdToDOM),
                separateInnerData: !!(void 0 !== t.separateInnerData ? t.separateInnerData : d.separateInnerData),
                innerDataExclude: t.innerDataExclude || d.innerDataExclude,
                listenerChangeLifeTimes: !!(void 0 !== t.listenerChangeLifeTimes ? t.listenerChangeLifeTimes : d.listenerChangeLifeTimes),
                randomizeTagName: !!(void 0 !== t.randomizeTagName ? t.randomizeTagName : d.randomizeTagName),
                virtualHost: !!(void 0 !== t.virtualHost ? t.virtualHost : d.virtualHost)
              }, n._unprepared || b.prepare(i), void 0 !== e.is && (b._list[n.is] = i), i
            }, b.isPrepared = function (e) {
              return !e._unprepared
            }, b.prepare = function (e) {
              var t = e._unprepared;
              if (t) {
                e._unprepared = null;
                var n = e.options,
                  i = {};
                t._unprepared && s.prepare(t), n.writeOnly && (i.data = {
                  value: null
                });
                var a = e.props = {};
                Object.keys(t.properties).forEach((function (e) {
                  var r = t.properties[e];
                  a[e] = {
                    type: r.type,
                    optionalTypes: r.optionalTypes,
                    value: r.value,
                    filter: "function" == typeof r.filter ? r.filter : null == r.filter ? null : t.methods[r.filter],
                    observer: "function" == typeof r.observer ? r.observer : null == r.observer ? null : t.methods[r.observer],
                    public: r.public,
                    availability: r.availability,
                    observeAssignments: r.observeAssignments
                  }, n.writeFieldsToNode && (i[e] = {
                    enumerable: !0,
                    get: function () {
                      return this.__propData[e]
                    },
                    set: function (t) {
                      var n = this.__dataProxy;
                      n.scheduleReplace([e], t), n.doUpdates()
                    }
                  })
                }));
                var l = function () {};
                e.protoFunc = l;
                var c = l.prototype = Object.create(b.prototype, i);
                if (c.is = e.is, c.__componentOptions = n, c.__using = t.using, e.dataGroupObserverTree = o._createObserverTree(a), t._addObserversToDataProxy(e.dataGroupObserverTree), c.__behavior = t, n.writeFieldsToNode)
                  for (var A in t.methods) c[A] = t.methods[A];
                c.__lifeTimeFuncs = t._getAllLifeTimeFuncs(), c.__pageLifeTimeFuncs = t._getAllPageLifeTimeFuncs();
                var u = t.relations,
                  f = c.__relationMap = {};
                for (var d in u) {
                  var p = u[d],
                    g = p.type;
                  f[g] ? f[g].push(p) : f[g] = [p]
                }
                var h = [];
                f.parent && h.push((function (e) {
                  x(this.__relationMap.parent, this.__relationLinks.parent, this, "parent", "detached" === e)
                })), f.ancestor && h.push((function (e) {
                  x(this.__relationMap.ancestor, this.__relationLinks.ancestor, this, "ancestor", "detached" === e)
                })), f.shadowHost && h.push((function (e) {
                  x(this.__relationMap.shadowHost, this.__relationLinks.shadowHost, this, "shadowHost", "detached" === e)
                })), e.relationHandler = function (e) {
                  for (var t = 0; t < h.length; t++) h[t].call(this, e)
                };
                var _ = {},
                  v = {},
                  m = t.data,
                  w = "";
                for (w in m) v[w] = m[w];
                for (w in a) {
                  var y = a[w];
                  r.hasGlobalWarningListeners() && void 0 !== v[w] && r.triggerWarning('data field "' + w + '" is overwritten by property with the same name.'), v[w] = y.value, _[w] = y.public
                }
                var C = v,
                  E = n.separateInnerData,
                  B = n.innerDataExclude;
                if (B) {
                  for (var S in C = {}, v) B.test(S) || (C[S] = v[S]);
                  E || (v = C)
                }
                var I = n.templateEngine;
                e.template = I.create(t, v, C, n), c.__propPublic = _;
                var k = t._getAllListeners(),
                  T = e.innerEvents = [];
                for (var D in k) {
                  for (var L = k[D], Q = D.indexOf("."), M = D.slice(Q + 1), W = Q < 1 ? "" : D.slice(0, Q), O = [], N = 0; N < L.length; N++) {
                    var F = L[N];
                    "function" != typeof F && (F = null == F ? null : t.methods[F]), O.push(F)
                  }
                  T.push({
                    id: W,
                    name: M,
                    funcs: O
                  })
                }
              }
            };
            var B = 1,
              S = Object.prototype.hasOwnProperty,
              I = function (e, t) {
                return function (n) {
                  return e.call(t.__methodCaller, n, t)
                }
              },
              k = b._advancedCreate = function (e, t, n, i, a) {
                var s = t;
                s._unprepared && b.prepare(s);
                var c = s.options;
                !c.availability || function (e, t, n) {
                  var i = [t ? t.__wxHost.__componentOptions.domain : void 0];
                  return !!r.safeCallback("Availablity Controller", n, e, i)
                }(s, n, c.availability) || (r.hasGlobalWarningListeners() && r.triggerWarning('the component "' + (s.is || "") + '" is currently not available. The default component is used instead.'), s = b._list[""]);
                var A = new(0, s.protoFunc),
                  g = s.generics;
                A.__generics = g ? function (e, t, n) {
                  var i = {};
                  for (var o in e) {
                    var a = e[o],
                      s = t[o];
                    "object" != typeof s && (s = b._list[s]), "object" != typeof s && null != a.default && (s = b._list[a.default]), r.hasGlobalWarningListeners() && (s || r.triggerWarning('generic "' + o + '" is not instantiated. The default component is used instead.')), s && (i[o] = s)
                  }
                  if (r.hasGlobalWarningListeners())
                    for (var l in t) void 0 === e[l] && r.triggerWarning('generic "' + l + '" is not defined. It will be ignored.');
                  return i
                }(g, i || {}) : {};
                var _ = null,
                  m = d.documentBackend;
                if (c.virtualHost) {
                  _ = null;
                  "dom" === d.documentBackend && (_ = void 0), l.initialize(A, _, n), A.__virtual = !0
                } else "dom" === m ? (_ = p.backendExtractedDefault ? new f(e) : document.createElement(e), l.initialize(A, _, n)) : "custom" === m ? (_ = d.customContext.createElement("empty", e), l.initialize(A, _, n)) : l.initialize(A, null, n);
                var w = 0,
                  y = A.__externalClassAlias = {};
                if (s.behavior.externalClasses) {
                  var x = s.behavior.externalClasses;
                  for (w = 0; w < x.length; w++) y[x[w]] = null
                }
                if (A.classList = u.create(A, y), n) {
                  var E = n.__wxHost;
                  _ && "custom" === m && E.__componentOptions.styleScope && _.setStyleScope(E.__componentOptions.styleScope), A.classList._setOwnerOptions(E.classList, E.__componentOptions.classPrefix, E.__componentOptions.addGlobalClass), d.writeExtraInfoToAttr && _ && _.setAttribute("exparser:info-class-prefix", E.__componentOptions.classPrefix && E.__componentOptions.classPrefix + "--")
                }
                "dom" === m && d.writeExtraInfoToAttr && _ && (A.__componentInstanceId = B++, _.setAttribute("exparser:info-component-id", A.__componentInstanceId));
                var S = A.__templateInstance = s.template.createInstance(A, a);
                A.__propData = S.data;
                var k = c.separateInnerData;
                A.__innerData = k ? v(A.__propData) : null;
                var T = c.innerDataExclude;
                if (k && T) {
                  var D = {};
                  for (var L in A.__innerData) T.test(L) || (D[L] = A.__innerData[L]);
                  A.__innerData = D
                }
                A.__dataProxy = o._advancedCreate(A, A.__propData, A.__innerData, T, s.dataGroupObserverTree, (function (e, t, n, r) {
                  A.__templateInstance.updateValues(A, k ? A.__innerData : A.__propData, e, t, n, r)
                })), S.beforeMergeValues && A.__dataProxy.setBeforeMergeCb((function (e, t, n) {
                  A.__templateInstance.beforeMergeValues(e, t, n)
                })), S.beforeUpdateValues && A.__dataProxy.setBeforeUpdateCb((function (e) {
                  A.__templateInstance.beforeUpdateValues(A, k ? A.__innerData : A.__propData, e)
                })), c.writeOnly && A.__dataProxy.setHidingValue(!0), A.__idCacheDirty = !1, A.__idCache = S.idMap, null === S.slots[""] && (S.slots[""] = _), s.options.multipleSlots ? A.__slots = S.slots : (A.__singleSlot = S.slots[""] || null, A.__singleSlot && (A.__singleSlot.__wxSlotChildren = A.childNodes)), S.shadowRoot instanceof l ? (A.shadowRoot = S.shadowRoot, l._attachShadowRoot(S.shadowRoot)) : _ instanceof f ? (A.shadowRoot = _, _.__wxHost = A, A.__domElement.asShadowRoot = S.shadowRoot, A.__wxSlotChildren = [_], _.__wxSlotParent = A) : (A.shadowRoot = _, _.__wxHost = A, "" !== d.documentBackend && A.__domElement.appendChild(S.shadowRoot), A.__wxSlotChildren = [_], _.__wxSlotParent = A);
                for (var Q = S.listeners, M = 0; M < Q.length; M++) {
                  var W = Q[M];
                  h(W.target, W.name, I(W.func, A))
                }
                var O = s.innerEvents;
                for (w = 0; w < O.length; w++) {
                  var N = O[w],
                    F = N.id ? "this" === N.id ? A : A.__idCache[N.id] : A.shadowRoot;
                  if (F)
                    for (var R = N.name, P = N.funcs, G = 0; G < P.length; G++) h(F, R, I(P[G], A))
                }
                var j = A.__relationMap;
                return j.parent && (C(j.parent, A, "parent"), A.__relationHandler = s.relationHandler), j.ancestor && (C(j.ancestor, A, "ancestor"), A.__relationHandler = s.relationHandler), j.shadowHost && (C(j.shadowHost, A, "shadowHost"), A.__relationHandler = s.relationHandler), A.__propertyChangeListeners = null, "custom" === m && _ && _.associateComponent(A), s.initiator && r.safeCallback("Component Initiator", s.initiator, A.__methodCaller, [], A), A.__lifeTimeFuncs.created.call(A.__methodCaller, [], A), A
              };
            b.createWithGenerics = function (e, t, n, i) {
              return "object" == typeof e ? k(e.is, e, null, n, i) : e ? e.indexOf("-") < 0 && !t ? c.create(e) : (r.hasGlobalWarningListeners() && (t || S.call(b._list, e) || "virtual" === e || r.triggerWarning('component "' + e + '" is not found. The default component is used instead.')), k(e.toLowerCase(), t || S.call(b._list, e) && b._list[e] || b._list[""], null, n, i)) : k("virtual", b._list[""], null, n, i)
            }, b.create = function (e, t, n) {
              return b.createWithGenerics(e, t, null, n)
            }, b.listProperties = function (e) {
              var t = [];
              for (var n in e.__propPublic) void 0 !== e.__propPublic[n] && t.push(n);
              return t
            }, b.listPublicProperties = function (e) {
              var t = [];
              for (var n in e.__propPublic) !0 === e.__propPublic[n] && t.push(n);
              return t
            }, b.hasProperty = function (e, t) {
              return void 0 !== e.__propPublic[t]
            }, b.hasPublicProperty = function (e, t) {
              return !0 === e.__propPublic[t]
            }, b.getMethodsFromDef = function (e) {
              return e.behavior._unprepared && s.prepare(e.behavior), e.behavior.methods
            }, b.getMethod = function (e, t) {
              return e.__behavior.methods[t]
            }, b.getComponentOptions = function (e) {
              return e.__componentOptions
            }, b.prototype.triggerLifeTime = function (e, t) {
              this.__lifeTimeFuncs[e].call(this.__methodCaller, t || [])
            }, b.prototype.triggerPageLifeTime = function (e, t) {
              E(this, e, t)
            }, b.prototype.hasBehavior = function (e) {
              return "object" != typeof e && Object.prototype.hasOwnProperty.call(this.__using, e) && (e = this.__using[e]), !!this.__behavior && this.__behavior.hasBehavior(e)
            }, b.prototype.getRootBehavior = function () {
              return this.__behavior
            }, b.prototype.getRelationNodes = function (e) {
              var t = this.__behavior.relations[e];
              if (!t) return null;
              if ("parent" === t.type || "ancestor" === t.type || "shadowHost" === t.type) {
                for (var n = this.__relationMap[t.type], r = 0; r < n.length && n[r] !== t; r++);
                return this.__relationLinks[t.type][r] ? [this.__relationLinks[t.type][r].parent] : []
              }
              return function (e, t) {
                var n = [],
                  r = t.type,
                  i = "child" === r,
                  o = "shadowContent" === r,
                  a = function (r) {
                    for (var s = r.childNodes, c = 0; c < s.length; c++) {
                      var A = s[c];
                      if (A instanceof l)
                        if (A.__virtual) a(A);
                        else {
                          var u;
                          if (A.__relationLinks)
                            if (u = i ? A.__relationLinks.parent : o ? A.__relationLinks.shadowHost : A.__relationLinks.ancestor)
                              for (var f = 0; f < u.length; f++) {
                                var d = u[f];
                                if (d && d.parent === e && d.relation === t) {
                                  n.push(A);
                                  break
                                }
                              }
                          o && A instanceof b && a(A.shadowRoot), i || a(A)
                        }
                    }
                  };
                return a(o ? e.shadowRoot : e), n
              }(this, t)
            }, b.prototype.hasExternalClass = function (e) {
              return S.call(this.__externalClassAlias, e)
            }, b.prototype.setExternalClass = function (e, t) {
              this.classList._setAlias(e, t)
            }, b.prototype.setPropertyChangeListener = function (e, t) {
              this.__propertyChangeListeners || (this.__propertyChangeListeners = {}), this.__propertyChangeListeners[e] = t
            }, b.prototype.replaceDataOnPath = function (e, t) {
              this.__dataProxy.scheduleReplace(e, t)
            }, b.prototype.isInnerDataExcluded = function (e) {
              var t = this.__componentOptions.innerDataExclude;
              return !!t && t.test(e)
            }, b.getInnerData = function (e) {
              return e.__innerData
            }, b.getDataProxy = function (e) {
              return e.__dataProxy
            }, b.replaceWholeData = function (e, t, n) {
              e.__propData = t, e.__dataProxy.replaceWholeData(t, n)
            }, b.prototype.applyDataUpdates = function () {
              this.__dataProxy.doUpdates()
            }, b.prototype.setData = function (e) {
              var t = this.__dataProxy;
              for (var n in e) t.scheduleReplace(_(n), e[n]);
              t.doUpdates()
            }, e.exports = b
          }, function (e, t, n) {
            var r = n(3),
              i = n(5),
              o = null,
              a = null,
              s = Object.prototype.hasOwnProperty,
              l = i.deepCopy,
              c = function (e, t, n, r, i, o) {
                this._data = t, this._innerData = n, this._innerDataExclude = r, this._comp = e, this._updateCb = o, this._beforeMergeCb = null, this._beforeUpdateCb = null, this._hidingValue = !1, this._changes = [], this._doingUpdates = null, this._propFields = i._propFields, this._observers = i._observers, this._observerTree = i._observerTree, this._relatedObserverTreeObj = i, this._observerStatus = []
              };
            c._advancedCreate = function (e, t, n, r, i, o) {
              return new c(e, t, n, r, i, o)
            };
            var A = function (e) {
              this._propFields = e, this._observerIdInc = 0, this._observers = [], this._observerTree = {}
            };
            c._createObserverTree = function (e) {
              return new A(e)
            }, c.create = function (e, t, n) {
              var r = new A({});
              return new c({
                __methodCaller: e
              }, t, null, null, r, n)
            }, c.setPropUpdater = function (e) {
              o = e
            }, c.setPropObserver = function (e) {
              a = e
            }, c.prototype.replaceWholeData = function (e, t) {
              this._data = e
            }, c.prototype.setHidingValue = function (e) {
              this._hidingValue = !!e
            }, c.prototype.setBeforeMergeCb = function (e) {
              this._beforeMergeCb = e
            }, c.prototype.setBeforeUpdateCb = function (e) {
              this._beforeUpdateCb = e
            };
            var u = function (e, t, n) {
                for (var i = e, o = 0; o < t.length; o++) {
                  var a = t[o];
                  if ("**" === a) return r.hasGlobalWarningListeners() && o !== t.length - 1 && r.triggerWarning('"**" can only be used at the end of a path descriptor.'), i["**"] || (i["**"] = []), void i["**"].push(n);
                  i[a] || (i[a] = {}), i = i[a]
                }
                i["~"] || (i["~"] = []), i["~"].push(n)
              },
              f = function (e, t, n) {
                for (var r = 0; r < t.length; r++) u(e, t[r], n)
              },
              d = function (e, t, n) {
                for (var r = e, i = 0, o = ""; i < t.length && "**" !== (o = t[i]); i++) {
                  if (!r) return;
                  r = r[o]
                }
                var a = "**" === o ? r["**"] : r["~"];
                if (a)
                  for (i = 0; i < a.length; i++)
                    if (a[i] === n) {
                      a.splice(i, 1);
                      break
                    }
              },
              p = function (e, t, n) {
                for (var r = 0; r < t.length; r++) d(e, t[r], n)
              };
            A.prototype.addObserver = function (e, t) {
              var n = this._observerIdInc++;
              return this._observers[n] = {
                pathObj: t,
                func: e
              }, f(this._observerTree, t, n), n
            }, A.prototype.removeObserver = function (e) {
              var t = this._observers[e];
              p(this._observerTree, t.pathObj, e), this._observers[e] = null
            }, A.prototype.moveObserver = function (e, t) {
              var n = this._observers[e];
              p(this._observerTree, n.pathObj, e), n.pathObj = t, f(this._observerTree, t, e)
            }, c.prototype.getObserverTree = function () {
              return this._relatedObserverTreeObj
            };
            var g = function (e, t, n) {
                for (var i = [], o = n.pathObj, a = 0; a < o.length; a++) {
                  for (var s = o[a], l = t, c = 0; c < s.length; c++) {
                    var A = s[c];
                    if ("**" === A) break;
                    if ("object" != typeof l) {
                      l = void 0;
                      break
                    }
                    l = l[A]
                  }
                  i[a] = l
                }
                r.safeCallback("Data Observer", n.func, e.__methodCaller, i, e)
              },
              h = function (e, t) {
                var n = null,
                  r = 0;
                for (var i in e)
                  if ("~" !== i)
                    if ("**" !== i) h(e[i], t);
                    else
                      for (n = e["**"], r = 0; r < n.length; r++) t[n[r]] = !0;
                else
                  for (n = e["~"], r = 0; r < n.length; r++) t[n[r]] = !0
              },
              _ = function (e, t, n) {
                for (var r = e, i = 0; i < n.length; i++) {
                  if (r["**"])
                    for (var o = r["**"], a = 0; a < o.length; a++) {
                      t[o[a]] = !0
                    }
                  var l = n[i];
                  if ("number" == typeof l) {
                    if (!s.call(r, l)) {
                      r = null;
                      break
                    }
                  } else if (!/^[_a-zA-Z]/.test(l) || !s.call(r, l)) {
                    r = null;
                    break
                  }
                  r = r[l]
                }
                r && h(r, t)
              },
              v = function (e, t, n, r, i) {
                for (var o = 0; o < e.length; o++) {
                  var a = e[o],
                    s = t[o];
                  s && s && (t[o] = !1, g(n, i ? void 0 : r, a))
                }
              };
            c.prototype.scheduleReplace = function (e, t, n) {
              this._changes.push([e, t, n])
            }, c.prototype.setChanges = function (e) {
              this._changes = e
            }, c.prototype.getChanges = function () {
              return this._changes
            }, c.prototype.doUpdates = function (e, t) {
              var n = this._propFields,
                r = this._comp,
                i = this._hidingValue,
                c = this._innerDataExclude,
                A = !!this._doingUpdates,
                u = this._relatedObserverTreeObj._observerIdInc,
                f = null,
                d = null,
                p = null;
              u ? (A || (this._doingUpdates = {
                changedPaths: [],
                changedValues: [],
                combinedChanges: [],
                changesTotal: 0
              }), f = this._doingUpdates.changedPaths, d = this._doingUpdates.changedValues, p = this._doingUpdates.combinedChanges) : (f = [], d = [], p = []);
              var g = this._changes;
              this._changes = [];
              var h = [];
              this._beforeMergeCb && this._beforeMergeCb(g, h, e);
              for (var b = 0; b < g.length; b++) {
                var m = g[b],
                  w = m[0],
                  y = m[1],
                  C = y,
                  x = void 0,
                  E = w[0],
                  B = !!c && c.test(E),
                  S = n[E];
                if (S && 1 === w.length) x = this._data[E], y = o.call(this._comp, w, S, y, this._hidingValue), B || (this._innerData ? (C = l(y), h[b] || (this._innerData[E] = C)) : C = y, m[1] = C), B && !this._innerData || (this._data[E] = y);
                else {
                  var I = this._data,
                    k = E,
                    T = null,
                    D = 1;
                  if (!B || this._innerData) {
                    for (; D < w.length; D++) "number" == typeof (T = w[D]) && isFinite(T) ? s.call(I, k) && I[k] instanceof Array || (I[k] = []) : (!s.call(I, k) || null === I[k] || "object" != typeof I[k] || I[k] instanceof Array) && (I[k] = {}), I = I[k], k = T;
                    I[k] = y
                  }
                  if (this._innerData && (I = this._innerData, k = E, !B)) {
                    for (D = 1; D < w.length; D++) "number" == typeof (T = w[D]) && isFinite(T) ? s.call(I, k) && I[k] instanceof Array || (I[k] = []) : (!s.call(I, k) || null === I[k] || "object" != typeof I[k] || I[k] instanceof Array) && (I[k] = {}), I = I[k], k = T;
                    C = l(y), h[b] || (I[k] = C), m[1] = C
                  }
                }
                _(this._observerTree, this._observerStatus, w), B || (f.push(w), d.push([C, x, y]), p.push(m)), u && (this._doingUpdates.changesTotal += 1)
              }
              if (!A) {
                if (this._beforeUpdateCb && this._beforeUpdateCb(e), u) {
                  var L = 0;
                  do {
                    L = this._doingUpdates.changesTotal, v(this._observers, this._observerStatus, r, this._data, i)
                  } while (L !== this._doingUpdates.changesTotal);
                  this._doingUpdates = null
                }
                this._updateCb(f, d, p, e);
                for (var Q = 0; Q < d.length; Q++) {
                  var M = d[Q];
                  if (M) {
                    var W = f[Q],
                      O = n[W[0]];
                    O && a.call(r, M[2], M[1], W, O, i, t)
                  }
                }
              }
            }, e.exports = c
          }, function (e, t, n) {
            var r = n(9),
              i = n(11),
              o = n(14),
              a = n(4),
              s = n(13),
              l = function () {};
            l.prototype = Object.create(r.prototype, {
              constructor: {
                value: l,
                writable: !0,
                configurable: !0
              }
            });
            var c = l._advancedCreate = function (e, t) {
              var n = new l;
              n.is = e.toLowerCase();
              var c = null;
              if ("dom" === a.documentBackend ? c = s.backendExtractedDefault ? new o(e) : document.createElement(e) : "custom" === a.documentBackend && (c = a.customContext.createElement("image" === e ? e : "empty", e)), r.initialize(n, c, t), n.classList = i.create(n, null), "custom" === a.documentBackend && c.associateComponent(n), t) {
                var A = t.__wxHost;
                c && "custom" === a.documentBackend && A.__componentOptions.styleScope && c.setStyleScope(A.__componentOptions.styleScope), n.classList._setOwnerOptions(A.classList, A.__componentOptions.classPrefix, A.__componentOptions.addGlobalClass), a.writeExtraInfoToAttr && c && c.setAttribute("exparser:info-class-prefix", A.__componentOptions.classPrefix && A.__componentOptions.classPrefix + "--")
              }
              return n
            };
            l.create = function (e) {
              return c(e, null)
            };
            var A = l._advancedClone = function (e, t) {
              var n = new l;
              n.is = e.is;
              var c = null;
              if (e.__domElement && ("dom" === a.documentBackend ? c = e.__domElement instanceof o ? s.backendExtractedDefault ? e.__domElement.cloneNode() : o.toElement(e.__domElement) : s.backendExtractedDefault ? o.fromElement(e.__domElement) : document.importNode ? document.importNode(e.__domElement, !1) : e.__domElement.cloneNode(!1) : "custom" === a.documentBackend && (c = e.__domElement.cloneNode())), r._clone(n, e, c, t), n.classList = i.create(n, null), "custom" === a.documentBackend && c.associateComponent(n), t) {
                var A = t.__wxHost;
                n.classList._setOwnerOptions(A.classList, A.__componentOptions.classPrefix, A.__componentOptions.addGlobalClass), a.writeExtraInfoToAttr && c && c.setAttribute("exparser:info-class-prefix", A.__componentOptions.classPrefix && A.__componentOptions.classPrefix + "--")
              }
              return n
            };
            l.cloneNode = function (e) {
              return A(e, null)
            }, e.exports = l
          }, function (e, t, n) {
            var r = n(9),
              i = n(4),
              o = function (e, t) {
                a(this, e, t)
              };
            o.prototype = Object.create(r.prototype);
            var a = o.initialize = function (e, t, n) {
              e.is = t || "";
              var o = null;
              "dom" !== i.documentBackend && "custom" !== i.documentBackend || (o = void 0), r.initialize(e, o, n), e.__virtual = !0
            };
            o._advancedCreate = function (e, t) {
              return new o(e, t)
            }, o.create = function (e) {
              return new o(e, null)
            }, e.exports = o
          }, function (e, t, n) {
            var r = n(9),
              i = n(15),
              o = n(18),
              a = n(17),
              s = n(12),
              l = Object.prototype.hasOwnProperty,
              c = function (e) {
                o.initialize(this, "shadow", this), this.__hostAssociated = !1, this.__wxHost = e, this.__childrenPropsFilter = null, this.__slotCacheDirty = !1
              };
            c.prototype = Object.create(o.prototype), c.create = function (e) {
              var t = new c(e);
              if (e.ownerShadowRoot && e.ownerShadowRoot.__childrenPropsFilter)
                if (t.__childrenPropsFilter)
                  for (var n in e.ownerShadowRoot.__childrenPropsFilter) t.__childrenPropsFilter[n] || (t.__childrenPropsFilter[n] = e.ownerShadowRoot.__childrenPropsFilter[n]);
                else t.__childrenPropsFilter = e.ownerShadowRoot.__childrenPropsFilter;
              return t
            };
            c.prototype.createTextNode = function (e) {
              return s._advancedCreate(e, this)
            }, c.prototype.createNativeNode = function (e) {
              return a._advancedCreate(e, this)
            }, c.prototype.cloneNativeNode = function (e) {
              return a._advancedClone(e, this)
            }, c.prototype.createVirtualNode = function (e) {
              return o._advancedCreate(e, this)
            }, c.prototype.createComponent = function (e, t, n, r) {
              var o = null;
              o = void 0 === t ? e : t;
              var a = this.__wxHost;
              return "object" != typeof o && (l.call(a.__using, o) ? o = a.__using[o] : l.call(a.__generics, o) && (o = a.__generics[o]), "object" != typeof o && (o = i._list[o] || i._list[""])), n && (n = function (e, t) {
                var n = {};
                for (var r in e) {
                  var o = e[r];
                  "object" != typeof o && (l.call(t.__using, o) ? o = t.__using[o] : l.call(t.__generics, o) && (o = t.__generics[o] || i._list[""]), n[r] = o)
                }
                return n
              }(n, a)), "object" == typeof e && (e = o.is), a.__componentOptions.randomizeTagName && (e = function () {
                for (var e = Date.now(), t = "exparser-", n = 0; n < 8; n++) {
                  var r = (e + Math.floor(26 * Math.random())) % 26;
                  e = Math.floor(e / 26), t += "abcdefghijklmnopqrstuvwxyz" [r]
                }
                return t
              }()), a.__componentOptions.writeOnly && !o.options.allowInWriteOnly && (o = i._list[""]), i._advancedCreate(e, o, this, n, r)
            }, c.prototype.tagNameUsed = function (e) {
              var t = this.__wxHost;
              return !!l.call(t.__using, e) || !!l.call(t.__generics, e)
            }, c.prototype.getHostNode = function () {
              return this.__wxHost
            }, c.prototype.getElementById = function (e) {
              return r._updateIdMap(this.__wxHost), this.__wxHost.__idCache[e]
            }, e.exports = c
          }, function (e, t, n) {
            var r = n(9),
              i = n(12),
              o = function () {};
            o.create = function (e, t, n) {
              var a = new o;
              if (!(e instanceof r || e instanceof i)) throw new Error("ElementIterator can only be used for exparser.Element or exparser.TextNode");
              a._elem = e, a._elemTypeLimit = n || r;
              var s = t.split("-");
              if ("shadow" === s[0]) a._composed = !1;
              else {
                if ("composed" !== s[0]) throw new Error("Unrecognized iterator type: " + t);
                a._composed = !0
              }
              if ("ancestors" === s[1]) a._relation = "ancestors", a._order = 0;
              else {
                if ("descendants" !== s[1]) throw new Error("Unrecognized iterator type: " + t);
                if (a._relation = "descendants", "root" !== s[2]) throw new Error("Unrecognized iterator type: " + t);
                if ("first" === s[3]) a._order = -1;
                else {
                  if ("last" !== s[3]) throw new Error("Unrecognized iterator type: " + t);
                  a._order = 1
                }
              }
              return a
            };
            var a = function (e, t, n, r, i) {
              if (r < 0 && e instanceof t && !1 === i(e)) return !1;
              var o = n && e.__wxSlotChildren || e.childNodes;
              if (o)
                for (var s = 0; s < o.length; s++)
                  if (!1 === a(o[s], t, n, r, i)) return !1;
              return !(r > 0 && e instanceof t && !1 === i(e))
            };
            o.prototype.forEach = function (e) {
              return "ancestors" === this._relation ? function (e, t, n, r) {
                for (; e; e = n && (e.__wxSlotParent || e.__wxHost) || e.parentNode)
                  if (e instanceof t && !1 === r(e)) return !1;
                return !0
              }(this._elem, this._elemTypeLimit, this._composed, e) : a(this._elem, this._elemTypeLimit, this._composed, this._order, e)
            }, e.exports = o
          }, function (e, t, n) {
            var r = n(4),
              i = n(3),
              o = !1,
              a = [],
              s = function (e) {
                var t = a;
                a = [], o = !0, r.customContext.render((function () {
                  o = !1, a.length && (r.hasDOMBackend && "function" == typeof requestAnimationFrame ? requestAnimationFrame(s) : setTimeout(s, 16));
                  for (var e = 0; e < t.length; e++) "function" == typeof t[e] && i.safeCallback("render", t[e], null, [])
                }))
              };
            t.triggerRender = function (e) {
              "custom" === r.documentBackend && (a.push(e || null), o || 1 !== a.length || (r.hasDOMBackend && "function" == typeof requestAnimationFrame ? requestAnimationFrame(s) : setTimeout(s, 16)))
            }
          }, function (e, t, n) {
            (function (t) {
              var r = n(4),
                i = n(3),
                o = n(9),
                a = n(17),
                s = n(12),
                l = n(19),
                c = n(15),
                A = n(24),
                u = n(25),
                f = function () {};
              f.prototype = Object.create(Object.prototype, {
                constructor: {
                  value: f,
                  writable: !0,
                  configurable: !0
                }
              });
              var d = function () {};
              d.prototype = Object.create(Object.prototype, {
                constructor: {
                  value: d,
                  writable: !0,
                  configurable: !0
                }
              });
              var p = null;
              f.precompiler = p, f.htmlParser = null;
              var g = function (e) {
                  return e.replace(/-([a-z])/g, (function (e, t) {
                    return t.toUpperCase()
                  }))
                },
                h = Object.prototype.hasOwnProperty,
                _ = function (e, t) {
                  if (null !== e && "object" == typeof e && h.call(e, t)) return e[t]
                },
                v = function (e, t, n, r) {
                  if (h.call(t, n)) {
                    var o = t[n];
                    if ("function" == typeof o) return i.safeCallback("Template Method", o, e, r)
                  }
                },
                b = {
                  t: 1,
                  n: '"slot"',
                  v: !0,
                  sn: "",
                  a: [],
                  c: [],
                  p: null
                },
                m = function (e, t, n) {
                  e.classList.toggle(t, !!n)
                },
                w = function (e, t, n) {
                  e[t] = n
                },
                y = function (e, t, n) {
                  var r = e.__dataProxy;
                  r.scheduleReplace([t], n), r.doUpdates()
                },
                C = function (e, t, n) {
                  e.class = n
                },
                x = function (e, t, n) {
                  "dom" === r.documentBackend ? e.setAttribute("style", n) : "custom" === r.documentBackend && e.setStyle(n)
                },
                E = function (e, t, n) {
                  e.setAttribute("class", n)
                },
                B = function (e, t, n) {
                  e.textContent = n
                },
                S = function (e, t, n) {
                  e.dataset || (e.dataset = {}), e.dataset[t] = n
                },
                I = {
                  $: function (e, t, n) {
                    !0 === n ? e.setAttribute(t, "") : !1 === n || null == n ? e.removeAttribute(t) : e.setAttribute(t, n)
                  },
                  ":": w,
                  c: m,
                  s: function (e, t, n) {
                    var r = e.style;
                    r && (r[t] = n)
                  },
                  d: S
                },
                k = function (e, t, n) {
                  return [{
                    t: 1,
                    n: "slot",
                    v: !0,
                    sn: "",
                    a: [],
                    c: []
                  }]
                };
              f.create = function (e, n, r, o) {
                var a = void 0 === e.template ? k : e.template,
                  s = a;
                "function" != typeof a && (void 0 !== t && void 0 !== t.versions && void 0 !== t.versions.node ? s = f.precompileAndGetCreator(a) : (i.hasGlobalWarningListeners() && i.triggerWarning("Non-precompiled template is not usable in this environment. Empty template is used instead."), s = k));
                var l = Object.create(f.prototype);
                return l._initValuesJSON = JSON.stringify(r), l._dataJSON = n !== r ? JSON.stringify(n) : null, l._tagTreeRoot = T(s, r, e.methods, o), l._renderingMode = o.renderingMode, l
              };
              var T = function (e, t, n, i) {
                  var o = "native" === i.renderingMode,
                    s = o,
                    l = !1,
                    c = Object.create(null);
                  o && !r.hasDOMBackend && (e = k);
                  var A = {},
                    f = e(_, v, n),
                    d = function (e) {
                      for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        if (3 !== i.t) {
                          var c = i.n,
                            f = !(o || "string" == typeof c && c.indexOf("-") < 0);
                          "slot" === c && "" === i.sn && (l = !0), i.n = c;
                          var p = i.st;
                          p && p.e && (p.o = x, s && (p.v = p.e(t, A, null)));
                          var h = i.cl;
                          h && h.e && (h.o = o ? E : C, s && (h.v = h.e(t, A, null)));
                          var _ = null;
                          f || (i.p = _ = o ? document.createElement(i.n) : a.create(i.n), p && void 0 !== p.v && ("dom" === r.documentBackend ? _.setAttribute("style", p.v) : "custom" === r.documentBackend && _.__domElement.setStyle(p.v)), o && h && void 0 !== h.v && _.setAttribute("class", h.v));
                          for (var v = i.a, b = 0; b < v.length; b++) {
                            var S = v[b];
                            if (S.d) o || u[S.n].register(S.n, S, i);
                            else {
                              o || ("bind" === S.n.slice(0, 4) ? (S.evCatch = !1, S.ev = g(S.n.slice(4)), ":" === S.ev[0] && (S.ev = S.ev.slice(1))) : "catch" === S.n.slice(0, 5) && (S.evCatch = !0, S.ev = g(S.n.slice(5)), ":" === S.ev[0] && (S.ev = S.ev.slice(1))));
                              var k = S.o;
                              if (f) k ? S.o = "&" === k ? I[":"] : I[k] : (S.o = I[":"], S.n = g(S.n)), S.o === w && (S.o = y), s && S.e && (S.v = S.e(t, A, null));
                              else if (!S.ev) {
                                var T = I;
                                S.o = k ? "&" === k ? T[":"] : T[k] : T.$, s ? (S.e && (S.v = S.e(t, A, null)), (S.o !== m || o) && S.o(_, S.n, S.v)) : S.e || S.o(_, S.n, S.v)
                              }
                            }
                          }
                          d(i.c), o && (1 !== i.c.length || void 0 === i.c[0].sn || i.c[0].compressed || (i.sn = i.c[0].sn, i.compressed = !0, i.c.pop()))
                        } else i.e && (i.o = B, i.c = s ? i.e(t, A, null) : "")
                      }
                    };
                  return d(f, c, !0), o && (l || f.push(b), 1 !== f.length || "" !== f[0].sn || f[0].compressed || f.pop()), f
                },
                D = function (e, t) {
                  return function (n) {
                    if (this[e](n), t) return !1
                  }
                },
                L = function (e, t, n, i, a, s, l, f) {
                  for (var d = null, p = 0, g = null, h = 0; h < e.length; h++) {
                    var _ = l,
                      v = e[h];
                    if (3 === v.t) d = v.e ? t.createTextNode(v.e(i, a, null)) : t.createTextNode(v.c), v.e && A.addBindings(s, _, v.b, d, v), o.appendChild(n, d);
                    else {
                      var b = v.cl,
                        C = v.st,
                        x = v.a,
                        E = !1;
                      for (p = 0; p < x.length; p++)
                        if ((g = x[p]).d) {
                          var B = u[g.n].create(g.n, g, v, i, a, s, _, f, t, L, n);
                          if (u[g.n].requireBlock) {
                            d = B, o.appendChild(n, d), E = !0;
                            break
                          }
                        } if (E) continue;
                      if (v.v) d = t.createVirtualNode(v.n);
                      else if (v.p) {
                        for (d = t.cloneNativeNode(v.p), p = 0; p < x.length; p++)(g = x[p]).d || (g.ev ? f(d, g.ev, g.v, g.evCatch) : g.o === w ? d.__domElement && (g.o(d.__domElement, g.n, g.e(i, a, null)), A.addBindings(s, _, g.b, d.__domElement, g)) : (g.e && g.o(d, g.n, g.e(i, a, null)), (g.e || g.o === m || g.o === S) && A.addBindings(s, _, g.b, d, g)));
                        C && C.e && ("dom" === r.documentBackend ? d.setAttribute("style", C.e(i, a, null)) : "custom" === r.documentBackend && d.__domElement.setStyle(C.e(i, a, null)), A.addBindings(s, _, C.b, d, C))
                      } else {
                        if (v.cpf) {
                          var I = {},
                            k = t.__wxHost;
                          for (var T in v.cpf) ! function (e) {
                            var t = v.cpf[e];
                            I[e] = k.__behavior.methods[t]
                          }(T);
                          t.__childrenPropsFilter = I
                        }
                        for (d = t.createComponent(v.n, void 0, v.g, void 0), p = 0; p < x.length; p++)
                          if (!(g = x[p]).d) {
                            var D = g.v;
                            g.o === y && c.hasPublicProperty(d, g.n) ? (g.e && (D = g.e(i, a, null), A.addBindings(s, _, g.b, d, g)), g.e ? y(d, g.n, D) : d.__behavior.properties[g.n].type === Boolean ? y(d, g.n, !0) : y(d, g.n, D)) : g.ev ? f(d, g.ev, D, g.evCatch) : g.o !== y && (g.e && (D = g.e(i, a, null), A.addBindings(s, _, g.b, d, g)), g.o(d, g.n, D))
                          } C && (C.e ? ("dom" === r.documentBackend ? d.__domElement.setAttribute("style", C.e(i, a, null)) : "custom" === r.documentBackend && d.__domElement.setStyle(C.e(i, a, null)), A.addBindings(s, _, C.b, d.__domElement, C)) : "dom" === r.documentBackend ? d.__domElement.setAttribute("style", C.v) : "custom" === r.documentBackend && d.__domElement.setStyle(C.v))
                      }
                      v.id && (d.id = v.id), b && (b.e ? d.class = b.e(i, a, null) : d.class = b.v, b.o && A.addBindings(s, _, b.b, d, b)), v.sl && (d.slot = v.sl), void 0 !== v.sn && o.setSlotName(d, v.sn), o.appendChild(n, d), L(v.c, t, d, i, a, s, _, f)
                    }
                  }
                },
                Q = function (e, t, n) {
                  for (var r = e.childNodes, i = 0; i < r.length; i++) {
                    var o = r[i];
                    o instanceof s || (o.__id && (t[o.__id] = o), void 0 !== o.__slotName && (n[o.__slotName] = o), Q(o, t, n))
                  }
                },
                M = function (e, t, n, r, i, o) {
                  for (var a = null, s = 0, l = null, c = 0; c < e.length; c++) {
                    var u = e[c];
                    if (void 0 === u.n) a = document.createTextNode(u.c), u.e && A.addBindings(i, o, u.b, a, u), t.appendChild(a);
                    else {
                      var f = u.cl,
                        d = u.st,
                        p = u.a;
                      for (a = u.v ? document.createElement("virtual") : document.importNode ? document.importNode(u.p, !1) : u.p.cloneNode(!1), s = 0; s < p.length; s++)(l = p[s]).e && A.addBindings(i, o, l.b, a, l);
                      t.appendChild(a), u.id && (n[u.id] = a), f && f.e && A.addBindings(i, o, f.b, a, f), d && d.e && A.addBindings(i, o, d.b, a, d), void 0 !== u.sn && (r[u.sn] = a), M(u.c, a, n, r, i, o)
                    }
                  }
                };
              f.prototype.createInstance = function (e) {
                var t = Object.create(d.prototype),
                  n = JSON.parse(this._initValuesJSON),
                  i = null === this._dataJSON ? n : JSON.parse(this._dataJSON),
                  o = Object.create(null),
                  a = Object.create(null),
                  s = [],
                  c = A.create("", null, null, null, null, [], (function (e, t) {})),
                  u = null;
                if ("native" === this._renderingMode) "dom" === r.documentBackend && (u = document.createDocumentFragment()), M(this._tagTreeRoot, u, o, a, c, {}), a[""] || (a[""] = null);
                else {
                  if (u = l.create(e), e.ownerShadowRoot && e.ownerShadowRoot.__childrenPropsFilter)
                    if (u.__childrenPropsFilter)
                      for (var f in e.ownerShadowRoot.__childrenPropsFilter) u.__childrenPropsFilter[f] || (u.__childrenPropsFilter[f] = e.ownerShadowRoot.__childrenPropsFilter[f]);
                    else u.__childrenPropsFilter = e.ownerShadowRoot.__childrenPropsFilter;
                  L(this._tagTreeRoot, u, u, n, {}, c, {}, (function (e, t, n, r) {
                    u.__wxHost ? e.addListener(t, D(n, r).bind(u.__wxHost)) : s.push({
                      target: e,
                      name: t,
                      func: D(n, r)
                    })
                  })), Q(u, o, a)
                }
                return t.data = i, t.shadowRoot = u, t.idMap = o, t.slots = a, t.listeners = s, t._topScope = c, t
              }, d.prototype.updateValues = function (e, t, n) {
                for (var r = o.getMethodCaller(e), i = 0; i < n.length; i++) {
                  var a = n[i];
                  A.updateBinding(this._topScope, a, t, {}, r)
                }
              }, e.exports = f
            }).call(t, n(23))
          }, function (e, t) {
            function n() {
              throw new Error("setTimeout has not been defined")
            }

            function r() {
              throw new Error("clearTimeout has not been defined")
            }

            function i(e) {
              if (c === setTimeout) return setTimeout(e, 0);
              if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0);
              try {
                return c(e, 0)
              } catch (t) {
                try {
                  return c.call(null, e, 0)
                } catch (t) {
                  return c.call(this, e, 0)
                }
              }
            }

            function o() {
              p && f && (p = !1, f.length ? d = f.concat(d) : g = -1, d.length && a())
            }

            function a() {
              if (!p) {
                var e = i(o);
                p = !0;
                for (var t = d.length; t;) {
                  for (f = d, d = []; ++g < t;) f && f[g].run();
                  g = -1, t = d.length
                }
                f = null, p = !1,
                  function (e) {
                    if (A === clearTimeout) return clearTimeout(e);
                    if ((A === r || !A) && clearTimeout) return A = clearTimeout, clearTimeout(e);
                    try {
                      A(e)
                    } catch (t) {
                      try {
                        return A.call(null, e)
                      } catch (t) {
                        return A.call(this, e)
                      }
                    }
                  }(e)
              }
            }

            function s(e, t) {
              this.fun = e, this.array = t
            }

            function l() {}
            var c, A, u = e.exports = {};
            ! function () {
              try {
                c = "function" == typeof setTimeout ? setTimeout : n
              } catch (e) {
                c = n
              }
              try {
                A = "function" == typeof clearTimeout ? clearTimeout : r
              } catch (e) {
                A = r
              }
            }();
            var f, d = [],
              p = !1,
              g = -1;
            u.nextTick = function (e) {
              var t = new Array(arguments.length - 1);
              if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
              d.push(new s(e, t)), 1 !== d.length || p || i(a)
            }, s.prototype.run = function () {
              this.fun.apply(null, this.array)
            }, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = l, u.addListener = l, u.once = l, u.off = l, u.removeListener = l, u.removeAllListeners = l, u.emit = l, u.prependListener = l, u.prependOnceListener = l, u.listeners = function (e) {
              return []
            }, u.binding = function (e) {
              throw new Error("process.binding is not supported")
            }, u.cwd = function () {
              return "/"
            }, u.chdir = function (e) {
              throw new Error("process.chdir is not supported")
            }, u.umask = function () {
              return 0
            }
          }, function (e, t) {
            var n = {
                create: function (e, t, n, i, o, a, s) {
                  for (var l = {
                      inc: 1,
                      name: e,
                      exp: i,
                      lp: o,
                      scopes: {},
                      targets: {},
                      children: null,
                      lu: s,
                      __scopeBinded: []
                    }, c = 0; c < a.length; c++) {
                    var A = a[c];
                    null === A[0] ? r(t, A, null, l) : r(n[A[0]], A, null, l)
                  }
                  return l
                },
                proxyTopScope: function (e) {
                  var t = {
                    inc: 1,
                    linked: e,
                    scopes: {},
                    targets: {},
                    children: null,
                    __scopeBinded: []
                  };
                  return r(e, [null], null, t), t
                },
                proxySubScopes: function (e) {
                  var t = {};
                  for (var n in e) t[n] = {
                    inc: 1,
                    linked: e[n],
                    scopes: {},
                    targets: {},
                    children: null,
                    __scopeBinded: []
                  }, r(e[n], [null], null, t[n]);
                  return t
                }
              },
              r = n.addBinding = function (e, t, n, r) {
                for (var i = e, o = 1; o < t.length; o++) {
                  var a = t[o];
                  i.children || (i.children = Object.create(null));
                  var s = i.children;
                  s[a] || (s[a] = {
                    scopes: {},
                    targets: {},
                    children: null
                  }), i = s[a]
                }
                var l = e.inc++;
                return n ? i.targets[l] = [n, r] : (i.scopes[l] = r, r.__scopeBinded.push([i, l])), l
              };
            n.addBindings = function (e, t, n, i, o) {
              for (var a = 0; a < n.length; a++) {
                var s = n[a];
                s[0] ? r(t[s[0]], s, i, o) : r(e, s, i, o)
              }
            }, n.updateLvaluePath = function (e, t) {
              e.lp = t
            }, n.removeBindingsForScope = function (e) {
              for (var t = e.__scopeBinded, n = 0; n < t.length; n++) {
                var r = t[n];
                delete r[0].scopes[r[1]]
              }
            };
            var i = function (e, t, n, r, i) {
                if (e.linked) o(e, t, n, r, i);
                else {
                  var a = r[e.name];
                  r[e.name] = e.exp(n, r, i), o(e, t, n, r, i), r[e.name] = a
                }
              },
              o = n.updateBinding = function (e, t, n, r, o) {
                for (var a = e, s = 0, l = 0; l < t.length; l++) {
                  for (s in a.scopes) i(a.scopes[s], t, n, r, o);
                  var c = t[l];
                  if (!a.children) return;
                  var A = a.children;
                  if (!A[c]) return;
                  a = A[c]
                }
                var u = function (e) {
                  for (s in e.targets) {
                    var t = e.targets[s],
                      a = t[1];
                    a.o(t[0], a.n, a.e(n, r, o))
                  }
                  for (s in e.scopes) i(e.scopes[s], [], n, r, o);
                  for (s in e.children) u(e.children[s])
                };
                u(a)
              };
            e.exports = n
          }, function (e, t, n) {
            e.exports = {
              if: n(26),
              elif: n(26),
              else: n(26),
              for: n(28),
              key: n(29),
              "for-index": n(30),
              "for-item": n(31),
              alias: n(32)
            }
          }, function (e, t, n) {
            var r = n(24),
              i = n(27).RUNTIME_NAMES;
            i.TOP_SCOPE, i.SUB_SCOPE, i.CALLER, e.exports = {
              requireBlock: !0,
              register: function (e, t, n) {},
              create: function (e, t, n, i, o, a, s, l, c, A, u) {
                var f = c.createVirtualNode("wx:" + e);
                f.__wxIfCondValue = !0, f.__wxIfNextNode = null, f.__wxIfHasTrueCond = !0;
                var d = null;
                "if" !== e && ("wx:if" !== (d = u.childNodes[u.childNodes.length - 1]).is && "wx:elif" !== d.is ? d = null : d.__wxIfNextNode = f), n.id && (f.id = n.id);
                var p = f.__wxIfUpdateNode = function () {
                    var e = f.__wxIfCondValue;
                    if (d && d.__wxIfHasTrueCond && (e = !1), e && !f.childNodes.length) {
                      var t = r.proxyTopScope(a),
                        u = r.proxySubScopes(s);
                      f.__wxTopScope = t, f.__wxSubScopes = u, A(n.c, c, f, i, o, t, u, l)
                    } else if (!e && f.childNodes.length) {
                      for (var p in r.removeBindingsForScope(f.__wxTopScope), f.__wxSubScopes) r.removeBindingsForScope(f.__wxSubScopes[p]);
                      for (; f.childNodes.length;) f.removeChild(f.childNodes[0])
                    }
                    f.__wxIfNextNode && f.__wxIfNextNode.__wxIfUpdateNode()
                  },
                  g = function (e) {
                    f.__wxIfCondValue = !!e, f.__wxIfHasTrueCond = f.__wxIfCondValue || d && d.__wxIfHasTrueCond, p()
                  };
                return "else" === e ? g(!0) : (r.addBindings(a, s, t.b, f, {
                  e: t.d,
                  o: function (e, t, n) {
                    g(n)
                  }
                }), g(t.d(i, o, null))), f
              }
            }
          }, function (e, t) {
            t.TAG_TYPES = {
              TAG_START: 1,
              TAG_END: -1,
              TEXT: 3,
              COMMENT: 8
            }, t.RUNTIME_NAMES = {
              MEMBER: "m",
              CALL: "f",
              METHODS: "e",
              CALLER: "c",
              TOP_SCOPE: "t",
              SUB_SCOPE: "s"
            };
            var n = t.STRING_UNESCAPE_MAP = {
                n: "\n",
                r: "\r",
                b: "\b",
                f: "\f",
                t: "\t",
                v: "\v",
                '"': '"',
                "'": "'",
                "\\": "\\",
                "\r": "\r",
                "\n": "\n"
              },
              r = t.STRING_ESCAPE_MAP = {},
              i = "";
            for (var o in n) r[n[o]] = o, i += n[o];
            t.STRING_ESCAPE_REGEXP = new RegExp("[" + i + "]", "g")
          }, function (e, t, n) {
            var r = (n(18), n(24)),
              i = n(27).RUNTIME_NAMES;
            i.TOP_SCOPE, i.SUB_SCOPE, i.CALLER, e.exports = {
              requireBlock: !0,
              addDefaultAttrs: [{
                n: "wx:for-index",
                v: "index"
              }, {
                n: "wx:for-item",
                v: "item"
              }],
              register: function (e, t, n) {},
              create: function (e, t, n, i, o, a, s, l, c, A) {
                var u = n._wxForIndex || "index",
                  f = n._wxForItem || "item",
                  d = n._wxKey,
                  p = c.createVirtualNode("wx:for:list");
                n.id && (p.id = n.id), r.create("", a, s, (function (e, n, r) {
                  var i = t.d(e, n, null);
                  return b(i, e, n, r), i
                }), t.l, t.b);
                var g = function (e, t, i, o, d) {
                    var g = c.createVirtualNode("wx:for:item"),
                      h = r.proxyTopScope(a),
                      _ = r.proxySubScopes(s);
                    g.__wxTopScope = h, g.__wxSubScopes = _, g.__wxForToRemove = !1, g.__wxForKeyStr = "";
                    var v = r.create(u, h, _, null, null, []),
                      b = r.create(f, h, _, null, [i], []);
                    return _[u] = v, _[f] = b, t[u] = i, t[f] = o, A(n.c, c, g, e, t, h, _, l), void 0 === d ? p.appendChild(g) : p.insertBefore(g, d), g
                  },
                  h = function (e, t, n, o, a, s) {
                    var l = e.__wxSubScopes[f];
                    r.updateLvaluePath(l, [o]), a && (s ? p.insertBefore(e, s) : p.appendChild(e));
                    var c = e.__wxSubScopes[u];
                    n[u] = o, r.updateBinding(c, [], i, n, t)
                  },
                  _ = function (e, t, n, i, o, a) {
                    i[f] = o, r.updateBinding(e.__wxSubScopes[f], t, n, i, a)
                  },
                  v = function (e) {
                    for (var t in r.removeBindingsForScope(e.__wxTopScope), p.__wxSubScopes) r.removeBindingsForScope(e.__wxSubScopes[t]);
                    p.removeChild(e)
                  },
                  b = function (e, t, n, r) {
                    var i = "",
                      o = e;
                    "object" == typeof e && null !== e || (o = []);
                    var a = {};
                    for (i in n) a[i] = n[i];
                    var s = 0;
                    if (d) {
                      var l = [],
                        c = e instanceof Array,
                        A = [];
                      if (!c) {
                        var u = o;
                        for (i in o = [], u) o.push(u[i]), A.push(i)
                      }
                      for (s = 0; s < o.length; s++) l.push(String(o[s][d]));
                      if (0 === o.length)
                        for (; p.childNodes.length;) v(p.childNodes[0]);
                      else {
                        var f = Object.create(null),
                          b = Object.create(null),
                          m = p.childNodes,
                          w = null,
                          y = "";
                        for (s = 0; s < m.length; s++) f[y = (w = m[s]).__wxForKeyStr] >= 0 ? (v(w), s--) : (f[y] = s, b[y] = w, w.__wxForToRemove = !0);
                        var C = -1,
                          x = 0,
                          E = 1,
                          B = [];
                        for ((x = f[o[0][d]]) >= 0 || (x = -1), m[x] && (m[x].__wxForToRemove = !1), s = 1; s < o.length; s++)(E = f[o[s][d]]) >= 0 && (C < x && (x < E || C > E) && (B.push(m[x]), C = x), m[x = E] && (m[x].__wxForToRemove = !1));
                        for (C < x && B.push(m[x]), s = 0; s < m.length; s++)(w = m[s]).__wxForToRemove && (v(w), s--);
                        var S = B.shift(),
                          I = 0;
                        for (s = 0; s < o.length; s++) {
                          var k = o[s],
                            T = b[k[d]];
                          if (b[k[d]] = null, T) {
                            var D = !0;
                            if (T === S) {
                              for (; m[I] !== S;) I++;
                              I++, S = B.shift(), D = !1
                            }
                            h(w = T, r, a, c ? s : A[s], D, m[I]), D && m[I] === w && I++, _(w, [], t, a, o[s], r)
                          } else w = g(t, a, c ? s : A[s], o[s], m[I]), I++, w.__wxForKeyStr = String(k[d])
                        }
                      }
                    } else {
                      for (; p.childNodes.length;) v(p.childNodes[0]);
                      if (e instanceof Array)
                        for (s = 0; s < o.length; s++) g(t, a, s, o[s]);
                      else
                        for (i in o) g(t, a, i, o[i])
                    }
                  };
                return b(t.d(i, o, null), i, o, null), p
              }
            }
          }, function (e, t) {
            e.exports = {
              attachedToBlock: !0,
              register: function (e, t, n) {
                n._wxKey = t.d
              },
              create: function () {}
            }
          }, function (e, t) {
            e.exports = {
              attachedToBlock: "for",
              register: function (e, t, n) {
                n._wxForIndex = t.d
              },
              create: function () {}
            }
          }, function (e, t) {
            e.exports = {
              attachedToBlock: "for",
              register: function (e, t, n) {
                n._wxForItem = t.d
              },
              create: function () {}
            }
          }, function (e, t, n) {
            var r = n(24),
              i = n(27).RUNTIME_NAMES;
            i.TOP_SCOPE, i.SUB_SCOPE, i.CALLER, e.exports = {
              requireBlock: !0,
              register: function (e, t, n) {},
              create: function (e, t, n, i, o, a, s, l, c, A) {
                var u = t.s[0],
                  f = r.create(u, a, s, t.d, t.l, t.b),
                  d = {},
                  p = "";
                for (p in s) d[p] = s[p];
                d[u] = f;
                var g = {};
                for (p in o) g[p] = o[p];
                g[u] = t.d(i, o, null);
                var h = c.createVirtualNode("wx:alias");
                return n.id && (h.id = n.id), A(n.c, c, h, i, g, a, d, l), h
              }
            }
          }]);
          e.exports = t
        },
        446: (e, t, n) => {
          var r = n(821);
          e.exports = function (e) {
            var t = {};

            function n(r) {
              if (t[r]) return t[r].exports;
              var i = t[r] = {
                i: r,
                l: !1,
                exports: {}
              };
              return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
            }
            return n.m = e, n.c = t, n.d = function (e, t, r) {
              n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
              })
            }, n.r = function (e) {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
              }), Object.defineProperty(e, "__esModule", {
                value: !0
              })
            }, n.t = function (e, t) {
              if (1 & t && (e = n(e)), 8 & t) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var r = Object.create(null);
              if (n.r(r), Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: e
                }), 2 & t && "string" != typeof e)
                for (var i in e) n.d(r, i, function (t) {
                  return e[t]
                }.bind(null, i));
              return r
            }, n.n = function (e) {
              var t = e && e.__esModule ? function () {
                return e.default
              } : function () {
                return e
              };
              return n.d(t, "a", t), t
            }, n.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t)
            }, n.p = "", n(n.s = 4)
          }([function (e, t, n) {
            var r = null;
            "undefined" != typeof NativeGlobal && void 0 !== NativeGlobal.WebAssembly ? r = NativeGlobal.WebAssembly : "undefined" != typeof WebAssembly && (r = WebAssembly), t.wasm_initialize = function (e, i) {
              var o = e.bin,
                a = new r.Memory({
                  initial: 16
                }),
                s = {
                  js: {
                    mem: a
                  },
                  "./exparser_scl_backend_bg.js": n(3)
                },
                l = function (e) {
                  for (var n in e.instance.exports) t[n] = e.instance.exports[n];
                  t.memory || (t.memory = a), t.wasm_initialize = null, i(t)
                },
                c = r.instantiate(o, s);
              "function" == typeof c.then ? c.then(l) : l(c)
            }
          }, function (e, t, n) {
            "use strict";

            function r() {}

            function i() {}
            n.d(t, "b", (function () {
              return r
            })), n.d(t, "a", (function () {
              return i
            })), r.prototype.encode = function (e) {
              for (var t = [], n = e.length, r = 0; r < n;) {
                var i = e.codePointAt(r),
                  o = 0,
                  a = 0;
                for (i <= 127 ? (o = 0, a = 0) : i <= 2047 ? (o = 6, a = 192) : i <= 65535 ? (o = 12, a = 224) : i <= 2097151 && (o = 18, a = 240), t.push(a | i >> o), o -= 6; o >= 0;) t.push(128 | i >> o & 63), o -= 6;
                r += i >= 65536 ? 2 : 1
              }
              return t
            }, i.prototype.decode = function (e) {
              if (void 0 === e) return "";
              for (var t = "", n = 0; n < e.length;) {
                var r = e[n],
                  i = 0,
                  o = 0;
                if (r <= 127 ? (i = 0, o = 255 & r) : r <= 223 ? (i = 1, o = 31 & r) : r <= 239 ? (i = 2, o = 15 & r) : r <= 244 && (i = 3, o = 7 & r), e.length - n - i > 0)
                  for (var a = 0; a < i;) o = o << 6 | 63 & (r = e[n + a + 1]), a += 1;
                else o = 65533, i = e.length - n;
                t += String.fromCodePoint(o), n += i + 1
              }
              return t
            }
          }, function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, "setErrorListener", (function () {
              return i
            })), n.d(t, "consoleErrorReport", (function () {
              return o
            }));
            var r = null,
              i = function (e) {
                r = e
              },
              o = function (e) {
                if (r) {
                  var t = e.split("\nStack:\n", 2)[0].trim();
                  r(new Error(t))
                } else console.error(e)
              }
          }, function (e, t, n) {
            "use strict";
            n.r(t),
              function (e) {
                n.d(t, "wasm_main", (function () {
                  return I
                })), n.d(t, "compileStyleSheetToJson", (function () {
                  return M
                })), n.d(t, "compileStyleSheetToBincode", (function () {
                  return W
                })), n.d(t, "BoundingClientRect", (function () {
                  return O
                })), n.d(t, "Callback", (function () {
                  return N
                })), n.d(t, "Context", (function () {
                  return F
                })), n.d(t, "Element", (function () {
                  return R
                })), n.d(t, "Listener", (function () {
                  return P
                })), n.d(t, "ScrollPosition", (function () {
                  return G
                })), n.d(t, "StyleSheetGroup", (function () {
                  return j
                })), n.d(t, "__wbg_instanceof_ExparserElement_74ace43f429ed53b", (function () {
                  return V
                })), n.d(t, "__wbg_invoke_e595dd16845dff2f", (function () {
                  return U
                })), n.d(t, "__wbindgen_object_drop_ref", (function () {
                  return J
                })), n.d(t, "__wbg_subscribe_76e57ecbbf87c182", (function () {
                  return Y
                })), n.d(t, "__wbg_setTimeout_73cd22a52998d9f8", (function () {
                  return Z
                })), n.d(t, "__wbg_timeoutCallback_5a0fccae410eec7e", (function () {
                  return H
                })), n.d(t, "__wbg_triggerRender_8291f7e41c9ba309", (function () {
                  return X
                })), n.d(t, "__wbg_triggerEvent_fe8e7714c046228c", (function () {
                  return z
                })), n.d(t, "__wbindgen_json_parse", (function () {
                  return K
                })), n.d(t, "__wbindgen_json_serialize", (function () {
                  return $
                })), n.d(t, "__wbg_getTheme_6ee867e661a1fe00", (function () {
                  return q
                })), n.d(t, "__wbg_getWindowWidth_5d3459d21d0fb732", (function () {
                  return ee
                })), n.d(t, "__wbg_getWindowHeight_5055bbf1cbab7ad7", (function () {
                  return te
                })), n.d(t, "__wbg_getDevicePixelRatio_bad18211fbb2a2d3", (function () {
                  return ne
                })), n.d(t, "__wbg_getSafeArea_e02a51c464e82ae4", (function () {
                  return re
                })), n.d(t, "__wbg_getEngineConfig_d071336fb0f35c81", (function () {
                  return ie
                })), n.d(t, "__wbindgen_object_clone_ref", (function () {
                  return oe
                })), n.d(t, "__wbg_new_59cb74e423758ede", (function () {
                  return ae
                })), n.d(t, "__wbg_stack_558ba5917b466edd", (function () {
                  return se
                })), n.d(t, "__wbg_error_4bb6c2a97407129a", (function () {
                  return le
                })), n.d(t, "__wbindgen_string_new", (function () {
                  return ce
                })), n.d(t, "__wbg_debug_733679f61d937b18", (function () {
                  return Ae
                })), n.d(t, "__wbg_error_c81c8d172df3cb18", (function () {
                  return ue
                })), n.d(t, "__wbg_info_23f7f04053448bbc", (function () {
                  return fe
                })), n.d(t, "__wbg_log_8485ead621ceded9", (function () {
                  return de
                })), n.d(t, "__wbg_warn_eb158fa0859088bf", (function () {
                  return pe
                })), n.d(t, "__wbindgen_debug_string", (function () {
                  return ge
                })), n.d(t, "__wbindgen_throw", (function () {
                  return he
                }));
                var i = n(1),
                  o = n(2),
                  a = n(0);

                function s(e, t) {
                  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function l(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                  }
                }

                function c(e, t, n) {
                  return t && l(e.prototype, t), n && l(e, n), e
                }

                function A(e) {
                  return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                  } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                  })(e)
                }
                var u = new Array(32).fill(void 0);

                function f(e) {
                  return u[e]
                }
                u.push(void 0, null, !0, !1);
                var d = u.length;

                function p(e) {
                  var t = f(e);
                  return function (e) {
                    e < 36 || (u[e] = d, d = e)
                  }(e), t
                }
                var g = new(void 0 === i.a ? (0, e.require)("util").TextDecoder : i.a)("utf-8", {
                  ignoreBOM: !0,
                  fatal: !0
                });
                g.decode();
                var h = null;

                function _() {
                  return null !== h && h.buffer === a.memory.buffer || (h = new Uint8Array(a.memory.buffer)), h
                }

                function v(e, t) {
                  return g.decode(_().subarray(e, e + t))
                }

                function b(e) {
                  d === u.length && u.push(u.length + 1);
                  var t = d;
                  return d = u[t], u[t] = e, t
                }
                var m = 0,
                  w = new(void 0 === i.b ? (0, e.require)("util").TextEncoder : i.b)("utf-8"),
                  y = "function" == typeof w.encodeInto ? function (e, t) {
                    return w.encodeInto(e, t)
                  } : function (e, t) {
                    var n = w.encode(e);
                    return t.set(n), {
                      read: e.length,
                      written: n.length
                    }
                  };

                function C(e, t, n) {
                  if (void 0 === n) {
                    var r = w.encode(e),
                      i = t(r.length);
                    return _().subarray(i, i + r.length).set(r), m = r.length, i
                  }
                  for (var o = e.length, a = t(o), s = _(), l = 0; l < o; l++) {
                    var c = e.charCodeAt(l);
                    if (c > 127) break;
                    s[a + l] = c
                  }
                  if (l !== o) {
                    0 !== l && (e = e.slice(l)), a = n(a, o, o = l + 3 * e.length);
                    var A = _().subarray(a + l, a + o);
                    l += y(e, A).written
                  }
                  return m = l, a
                }
                var x = null;

                function E() {
                  return null !== x && x.buffer === a.memory.buffer || (x = new Int32Array(a.memory.buffer)), x
                }

                function B(e) {
                  return function () {
                    try {
                      return e.apply(this, arguments)
                    } catch (e) {
                      a.__wbindgen_exn_store(b(e))
                    }
                  }
                }

                function S(e) {
                  return function () {
                    throw new Error("".concat(e, " is not defined"))
                  }
                }

                function I() {
                  a.wasm_main()
                }

                function k(e) {
                  return null == e
                }

                function T(e, t) {
                  var n = t(1 * e.length);
                  return _().set(e, n / 1), m = e.length, n
                }
                var D = 32;

                function L(e) {
                  if (1 == D) throw new Error("out of js stack");
                  return u[--D] = e, D
                }

                function Q(e, t) {
                  if (!(e instanceof t)) throw new Error("expected instance of ".concat(t.name));
                  return e.ptr
                }

                function M(e, t) {
                  try {
                    var n = a.__wbindgen_add_to_stack_pointer(-16),
                      r = C(e, a.__wbindgen_malloc, a.__wbindgen_realloc),
                      i = m,
                      o = C(t, a.__wbindgen_malloc, a.__wbindgen_realloc),
                      s = m;
                    a.compileStyleSheetToJson(n, r, i, o, s);
                    var l = E()[n / 4 + 0],
                      c = E()[n / 4 + 1];
                    return v(l, c)
                  } finally {
                    a.__wbindgen_add_to_stack_pointer(16), a.__wbindgen_free(l, c)
                  }
                }

                function W(e, t) {
                  try {
                    var n = a.__wbindgen_add_to_stack_pointer(-16),
                      r = C(e, a.__wbindgen_malloc, a.__wbindgen_realloc),
                      i = m,
                      o = C(t, a.__wbindgen_malloc, a.__wbindgen_realloc),
                      s = m;
                    a.compileStyleSheetToBincode(n, r, i, o, s);
                    var l = E()[n / 4 + 0],
                      c = E()[n / 4 + 1],
                      A = (u = l, f = c, _().subarray(u / 1, u / 1 + f)).slice();
                    return a.__wbindgen_free(l, 1 * c), A
                  } finally {
                    a.__wbindgen_add_to_stack_pointer(16)
                  }
                  var u, f
                }
                var O = function () {
                    function e() {
                      s(this, e)
                    }
                    return c(e, [{
                      key: "__destroy_into_raw",
                      value: function () {
                        var e = this.ptr;
                        return this.ptr = 0, e
                      }
                    }, {
                      key: "free",
                      value: function () {
                        var e = this.__destroy_into_raw();
                        a.__wbg_boundingclientrect_free(e)
                      }
                    }, {
                      key: "left",
                      get: function () {
                        return a.__wbg_get_boundingclientrect_left(this.ptr)
                      },
                      set: function (e) {
                        a.__wbg_set_boundingclientrect_left(this.ptr, e)
                      }
                    }, {
                      key: "top",
                      get: function () {
                        return a.__wbg_get_boundingclientrect_top(this.ptr)
                      },
                      set: function (e) {
                        a.__wbg_set_boundingclientrect_top(this.ptr, e)
                      }
                    }, {
                      key: "width",
                      get: function () {
                        return a.__wbg_get_boundingclientrect_width(this.ptr)
                      },
                      set: function (e) {
                        a.__wbg_set_boundingclientrect_width(this.ptr, e)
                      }
                    }, {
                      key: "height",
                      get: function () {
                        return a.__wbg_get_boundingclientrect_height(this.ptr)
                      },
                      set: function (e) {
                        a.__wbg_set_boundingclientrect_height(this.ptr, e)
                      }
                    }], [{
                      key: "__wrap",
                      value: function (t) {
                        var n = Object.create(e.prototype);
                        return n.ptr = t, n
                      }
                    }]), e
                  }(),
                  N = function () {
                    function e() {
                      s(this, e)
                    }
                    return c(e, [{
                      key: "__destroy_into_raw",
                      value: function () {
                        var e = this.ptr;
                        return this.ptr = 0, e
                      }
                    }, {
                      key: "free",
                      value: function () {
                        var e = this.__destroy_into_raw();
                        a.__wbg_callback_free(e)
                      }
                    }, {
                      key: "exec",
                      value: function (e) {
                        try {
                          var t = this.__destroy_into_raw();
                          a.callback_exec(t, L(e))
                        } finally {
                          u[D++] = void 0
                        }
                      }
                    }], [{
                      key: "__wrap",
                      value: function (t) {
                        var n = Object.create(e.prototype);
                        return n.ptr = t, n
                      }
                    }]), e
                  }(),
                  F = function () {
                    function e() {
                      s(this, e)
                    }
                    return c(e, [{
                      key: "__destroy_into_raw",
                      value: function () {
                        var e = this.ptr;
                        return this.ptr = 0, e
                      }
                    }, {
                      key: "free",
                      value: function () {
                        var e = this.__destroy_into_raw();
                        a.__wbg_context_free(e)
                      }
                    }, {
                      key: "getWindowWidth",
                      value: function () {
                        return a.context_getWindowWidth(this.ptr)
                      }
                    }, {
                      key: "getWindowHeight",
                      value: function () {
                        return a.context_getWindowHeight(this.ptr)
                      }
                    }, {
                      key: "getDevicePixelRatio",
                      value: function () {
                        return a.context_getDevicePixelRatio(this.ptr)
                      }
                    }, {
                      key: "getTheme",
                      value: function () {
                        try {
                          var e = a.__wbindgen_add_to_stack_pointer(-16);
                          a.context_getTheme(e, this.ptr);
                          var t = E()[e / 4 + 0],
                            n = E()[e / 4 + 1];
                          return v(t, n)
                        } finally {
                          a.__wbindgen_add_to_stack_pointer(16), a.__wbindgen_free(t, n)
                        }
                      }
                    }, {
                      key: "appendStyleSheet",
                      value: function (e) {
                        var t = C(e, a.__wbindgen_malloc, a.__wbindgen_realloc),
                          n = m;
                        return a.context_appendStyleSheet(this.ptr, t, n) >>> 0
                      }
                    }, {
                      key: "appendStyleSheetJson",
                      value: function (e, t) {
                        var n = C(e, a.__wbindgen_malloc, a.__wbindgen_realloc),
                          r = m,
                          i = k(t) ? 0 : C(t, a.__wbindgen_malloc, a.__wbindgen_realloc),
                          o = m;
                        return a.context_appendStyleSheetJson(this.ptr, n, r, i, o) >>> 0
                      }
                    }, {
                      key: "appendStyleSheetBincode",
                      value: function (e, t) {
                        var n = T(e, a.__wbindgen_malloc),
                          r = m,
                          i = k(t) ? 0 : C(t, a.__wbindgen_malloc, a.__wbindgen_realloc),
                          o = m;
                        return a.context_appendStyleSheetBincode(this.ptr, n, r, i, o) >>> 0
                      }
                    }, {
                      key: "replaceStyleSheet",
                      value: function (e, t) {
                        var n = C(t, a.__wbindgen_malloc, a.__wbindgen_realloc),
                          r = m;
                        a.context_replaceStyleSheet(this.ptr, e, n, r)
                      }
                    }, {
                      key: "replaceStyleSheetJson",
                      value: function (e, t, n) {
                        var r = C(t, a.__wbindgen_malloc, a.__wbindgen_realloc),
                          i = m,
                          o = k(n) ? 0 : C(n, a.__wbindgen_malloc, a.__wbindgen_realloc),
                          s = m;
                        a.context_replaceStyleSheetJson(this.ptr, e, r, i, o, s)
                      }
                    }, {
                      key: "replaceStyleSheetBincode",
                      value: function (e, t, n) {
                        var r = T(t, a.__wbindgen_malloc),
                          i = m,
                          o = k(n) ? 0 : C(n, a.__wbindgen_malloc, a.__wbindgen_realloc),
                          s = m;
                        a.context_replaceStyleSheetBincode(this.ptr, e, r, i, o, s)
                      }
                    }, {
                      key: "clearStyleSheets",
                      value: function () {
                        a.context_clearStyleSheets(this.ptr)
                      }
                    }, {
                      key: "render",
                      value: function (e) {
                        try {
                          a.context_render(this.ptr, L(e))
                        } finally {
                          u[D++] = void 0
                        }
                      }
                    }, {
                      key: "bindRootNode",
                      value: function (e) {
                        Q(e, R), a.context_bindRootNode(this.ptr, e.ptr)
                      }
                    }, {
                      key: "getRootNode",
                      value: function () {
                        var e = a.context_getRootNode(this.ptr);
                        return 0 === e ? void 0 : R.__wrap(e)
                      }
                    }, {
                      key: "createElement",
                      value: function (e, t) {
                        var n = C(e, a.__wbindgen_malloc, a.__wbindgen_realloc),
                          r = m,
                          i = C(t, a.__wbindgen_malloc, a.__wbindgen_realloc),
                          o = m,
                          s = a.context_createElement(this.ptr, n, r, i, o);
                        return R.__wrap(s)
                      }
                    }], [{
                      key: "__wrap",
                      value: function (t) {
                        var n = Object.create(e.prototype);
                        return n.ptr = t, n
                      }
                    }, {
                      key: "create",
                      value: function () {
                        var t = a.context_create();
                        return e.__wrap(t)
                      }
                    }, {
                      key: "getNodeUnderPoint",
                      value: function (e, t) {
                        var n = a.context_getNodeUnderPoint(e, t);
                        return R.__wrap(n)
                      }
                    }, {
                      key: "getExparserElementByViewId",
                      value: function (e) {
                        return p(a.context_getExparserElementByViewId(e))
                      }
                    }]), e
                  }(),
                  R = function () {
                    function e() {
                      s(this, e)
                    }
                    return c(e, [{
                      key: "__destroy_into_raw",
                      value: function () {
                        var e = this.ptr;
                        return this.ptr = 0, e
                      }
                    }, {
                      key: "free",
                      value: function () {
                        var e = this.__destroy_into_raw();
                        a.__wbg_element_free(e)
                      }
                    }, {
                      key: "release",
                      value: function () {
                        var e = this.__destroy_into_raw();
                        a.element_release(e)
                      }
                    }, {
                      key: "associateComponent",
                      value: function (e) {
                        a.element_associateComponent(this.ptr, b(e))
                      }
                    }, {
                      key: "cloneNode",
                      value: function () {
                        var t = a.element_cloneNode(this.ptr);
                        return e.__wrap(t)
                      }
                    }, {
                      key: "equal",
                      value: function (t) {
                        return Q(t, e), 0 !== a.element_equal(this.ptr, t.ptr)
                      }
                    }, {
                      key: "getParentNode",
                      value: function () {
                        var t = a.element_getParentNode(this.ptr);
                        return 0 === t ? void 0 : e.__wrap(t)
                      }
                    }, {
                      key: "getChildNode",
                      value: function (t) {
                        var n = a.element_getChildNode(this.ptr, t);
                        return 0 === n ? void 0 : e.__wrap(n)
                      }
                    }, {
                      key: "appendChild",
                      value: function (t) {
                        Q(t, e), a.element_appendChild(this.ptr, t.ptr)
                      }
                    }, {
                      key: "insertChild",
                      value: function (t, n) {
                        Q(t, e), a.element_insertChild(this.ptr, t.ptr, n)
                      }
                    }, {
                      key: "removeChild",
                      value: function (e) {
                        a.element_removeChild(this.ptr, e)
                      }
                    }, {
                      key: "replaceChild",
                      value: function (t, n) {
                        Q(t, e), a.element_replaceChild(this.ptr, t.ptr, n)
                      }
                    }, {
                      key: "splice",
                      value: function (t, n, r) {
                        Q(r, e), a.element_splice(this.ptr, t, n, r.ptr)
                      }
                    }, {
                      key: "findChildPosition",
                      value: function (t) {
                        return Q(t, e), a.element_findChildPosition(this.ptr, t.ptr)
                      }
                    }, {
                      key: "length",
                      value: function () {
                        return a.element_length(this.ptr) >>> 0
                      }
                    }, {
                      key: "getBoundingClientRect",
                      value: function () {
                        var e = a.element_getBoundingClientRect(this.ptr);
                        return 0 === e ? void 0 : O.__wrap(e)
                      }
                    }, {
                      key: "getScrollPosition",
                      value: function () {
                        var e = a.element_getScrollPosition(this.ptr);
                        return G.__wrap(e)
                      }
                    }, {
                      key: "setScrollPosition",
                      value: function (e, t, n) {
                        a.element_setScrollPosition(this.ptr, !k(e), k(e) ? 0 : e, !k(t), k(t) ? 0 : t, !k(n), k(n) ? 0 : n)
                      }
                    }, {
                      key: "setId",
                      value: function (e) {
                        var t = C(e, a.__wbindgen_malloc, a.__wbindgen_realloc),
                          n = m;
                        a.element_setId(this.ptr, t, n)
                      }
                    }, {
                      key: "setClass",
                      value: function (e) {
                        var t = C(e, a.__wbindgen_malloc, a.__wbindgen_realloc),
                          n = m;
                        a.element_setClass(this.ptr, t, n)
                      }
                    }, {
                      key: "setStyle",
                      value: function (e) {
                        var t = C(e, a.__wbindgen_malloc, a.__wbindgen_realloc),
                          n = m;
                        a.element_setStyle(this.ptr, t, n)
                      }
                    }, {
                      key: "setStyleScope",
                      value: function (e) {
                        var t = k(e) ? 0 : C(e, a.__wbindgen_malloc, a.__wbindgen_realloc),
                          n = m;
                        a.element_setStyleScope(this.ptr, t, n)
                      }
                    }, {
                      key: "setAttribute",
                      value: function (e, t) {
                        var n = C(e, a.__wbindgen_malloc, a.__wbindgen_realloc),
                          r = m,
                          i = C(t, a.__wbindgen_malloc, a.__wbindgen_realloc),
                          o = m;
                        a.element_setAttribute(this.ptr, n, r, i, o)
                      }
                    }, {
                      key: "getAttribute",
                      value: function (e) {
                        try {
                          var t = a.__wbindgen_add_to_stack_pointer(-16),
                            n = C(e, a.__wbindgen_malloc, a.__wbindgen_realloc),
                            r = m;
                          a.element_getAttribute(t, this.ptr, n, r);
                          var i = E()[t / 4 + 0],
                            o = E()[t / 4 + 1];
                          return v(i, o)
                        } finally {
                          a.__wbindgen_add_to_stack_pointer(16), a.__wbindgen_free(i, o)
                        }
                      }
                    }, {
                      key: "setText",
                      value: function (e) {
                        var t = C(e, a.__wbindgen_malloc, a.__wbindgen_realloc),
                          n = m;
                        a.element_setText(this.ptr, t, n)
                      }
                    }], [{
                      key: "__wrap",
                      value: function (t) {
                        var n = Object.create(e.prototype);
                        return n.ptr = t, n
                      }
                    }]), e
                  }(),
                  P = function () {
                    function e() {
                      s(this, e)
                    }
                    return c(e, [{
                      key: "__destroy_into_raw",
                      value: function () {
                        var e = this.ptr;
                        return this.ptr = 0, e
                      }
                    }, {
                      key: "free",
                      value: function () {
                        var e = this.__destroy_into_raw();
                        a.__wbg_listener_free(e)
                      }
                    }, {
                      key: "exec",
                      value: function (e) {
                        try {
                          return 0 !== a.listener_exec(this.ptr, L(e))
                        } finally {
                          u[D++] = void 0
                        }
                      }
                    }, {
                      key: "release",
                      value: function () {
                        var e = this.__destroy_into_raw();
                        a.__wbg_callback_free(e)
                      }
                    }], [{
                      key: "__wrap",
                      value: function (t) {
                        var n = Object.create(e.prototype);
                        return n.ptr = t, n
                      }
                    }]), e
                  }(),
                  G = function () {
                    function e() {
                      s(this, e)
                    }
                    return c(e, [{
                      key: "__destroy_into_raw",
                      value: function () {
                        var e = this.ptr;
                        return this.ptr = 0, e
                      }
                    }, {
                      key: "free",
                      value: function () {
                        var e = this.__destroy_into_raw();
                        a.__wbg_scrollposition_free(e)
                      }
                    }, {
                      key: "scrollLeft",
                      get: function () {
                        return a.__wbg_get_boundingclientrect_left(this.ptr)
                      },
                      set: function (e) {
                        a.__wbg_set_boundingclientrect_left(this.ptr, e)
                      }
                    }, {
                      key: "scrollTop",
                      get: function () {
                        return a.__wbg_get_boundingclientrect_top(this.ptr)
                      },
                      set: function (e) {
                        a.__wbg_set_boundingclientrect_top(this.ptr, e)
                      }
                    }, {
                      key: "scrollWidth",
                      get: function () {
                        return a.__wbg_get_boundingclientrect_width(this.ptr)
                      },
                      set: function (e) {
                        a.__wbg_set_boundingclientrect_width(this.ptr, e)
                      }
                    }, {
                      key: "scrollHeight",
                      get: function () {
                        return a.__wbg_get_boundingclientrect_height(this.ptr)
                      },
                      set: function (e) {
                        a.__wbg_set_boundingclientrect_height(this.ptr, e)
                      }
                    }], [{
                      key: "__wrap",
                      value: function (t) {
                        var n = Object.create(e.prototype);
                        return n.ptr = t, n
                      }
                    }]), e
                  }(),
                  j = function () {
                    function e() {
                      s(this, e)
                    }
                    return c(e, [{
                      key: "__destroy_into_raw",
                      value: function () {
                        var e = this.ptr;
                        return this.ptr = 0, e
                      }
                    }, {
                      key: "free",
                      value: function () {
                        var e = this.__destroy_into_raw();
                        a.__wbg_stylesheetgroup_free(e)
                      }
                    }]), e
                  }(),
                  V = function (e) {
                    return f(e) instanceof r.exparser.Element
                  },
                  U = B((function (e, t, n, i) {
                    r.invoke(v(e, t), p(n), 0 === i ? void 0 : N.__wrap(i))
                  })),
                  J = function (e) {
                    p(e)
                  },
                  Y = B((function (e, t, n) {
                    r.subscribe(v(e, t), 0 === n ? void 0 : P.__wrap(n))
                  })),
                  Z = function (e, t) {
                    return setTimeout(f(e), t >>> 0)
                  },
                  H = function (e, t) {
                    r.timeoutCallback(e >>> 0, N.__wrap(t))
                  },
                  X = "function" == typeof r.exparser.triggerRender ? r.exparser.triggerRender : S("__exparserSclEngine__.exparser.triggerRender"),
                  z = function (e, t, n, i, o) {
                    r.exparser.triggerEvent(f(e), v(t, n), p(i), p(o))
                  },
                  K = function (e, t) {
                    return b(JSON.parse(v(e, t)))
                  },
                  $ = function (e, t) {
                    var n = f(t),
                      r = C(JSON.stringify(void 0 === n ? null : n), a.__wbindgen_malloc, a.__wbindgen_realloc),
                      i = m;
                    E()[e / 4 + 1] = i, E()[e / 4 + 0] = r
                  },
                  q = function (e) {
                    var t = C(r.getTheme(), a.__wbindgen_malloc, a.__wbindgen_realloc),
                      n = m;
                    E()[e / 4 + 1] = n, E()[e / 4 + 0] = t
                  },
                  ee = "function" == typeof r.getWindowWidth ? r.getWindowWidth : S("__exparserSclEngine__.getWindowWidth"),
                  te = "function" == typeof r.getWindowHeight ? r.getWindowHeight : S("__exparserSclEngine__.getWindowHeight"),
                  ne = "function" == typeof r.getDevicePixelRatio ? r.getDevicePixelRatio : S("__exparserSclEngine__.getDevicePixelRatio"),
                  re = function () {
                    return b(r.getSafeArea())
                  },
                  ie = function () {
                    return b(r.getEngineConfig())
                  },
                  oe = function (e) {
                    return b(f(e))
                  },
                  ae = function () {
                    return b(new Error)
                  },
                  se = function (e, t) {
                    var n = C(f(t).stack, a.__wbindgen_malloc, a.__wbindgen_realloc),
                      r = m;
                    E()[e / 4 + 1] = r, E()[e / 4 + 0] = n
                  },
                  le = function (e, t) {
                    try {
                      Object(o.consoleErrorReport)(v(e, t))
                    } finally {
                      a.__wbindgen_free(e, t)
                    }
                  },
                  ce = function (e, t) {
                    return b(v(e, t))
                  },
                  Ae = function (e) {
                    console.debug(f(e))
                  },
                  ue = function (e) {
                    Object(o.consoleErrorReport)(f(e))
                  },
                  fe = function (e) {
                    console.info(f(e))
                  },
                  de = function (e) {
                    console.log(f(e))
                  },
                  pe = function (e) {
                    console.warn(f(e))
                  },
                  ge = function (e, t) {
                    var n = C(function e(t) {
                        var n = A(t);
                        if ("number" == n || "boolean" == n || null == t) return "".concat(t);
                        if ("string" == n) return '"'.concat(t, '"');
                        if ("symbol" == n) {
                          var r = t.description;
                          return null == r ? "Symbol" : "Symbol(".concat(r, ")")
                        }
                        if ("function" == n) {
                          var i = t.name;
                          return "string" == typeof i && i.length > 0 ? "Function(".concat(i, ")") : "Function"
                        }
                        if (Array.isArray(t)) {
                          var o = t.length,
                            a = "[";
                          o > 0 && (a += e(t[0]));
                          for (var s = 1; s < o; s++) a += ", " + e(t[s]);
                          return a + "]"
                        }
                        var l, c = /\[object ([^\]]+)\]/.exec(toString.call(t));
                        if (!(c.length > 1)) return toString.call(t);
                        if ("Object" == (l = c[1])) try {
                          return "Object(" + JSON.stringify(t) + ")"
                        } catch (e) {
                          return "Object"
                        }
                        return t instanceof Error ? "".concat(t.name, ": ").concat(t.message, "\n").concat(t.stack) : l
                      }(f(t)), a.__wbindgen_malloc, a.__wbindgen_realloc),
                      r = m;
                    E()[e / 4 + 1] = r, E()[e / 4 + 0] = n
                  },
                  he = function (e, t) {
                    throw new Error(v(e, t))
                  }
              }.call(this, n(5)(e))
          }, function (e, t, n) {
            var r = n(2),
              i = n(0);
            e.exports = n(3);
            var o = function () {
                e.exports.memory = i.memory, "function" == typeof i.__wbindgen_start ? i.__wbindgen_start() : "function" == typeof i.wasm_main && i.wasm_main()
              },
              a = null;
            e.exports.wasm_initialize = function (e, t) {
              void 0 === t && (t = e, e = void 0), i.wasm_initialize ? a ? a.push(t) : (a = [t], i.wasm_initialize(e, (function () {
                o();
                var e = a;
                a = null, e.forEach((function (e) {
                  e()
                }))
              }))) : t && setTimeout(t, 0)
            }, i.wasm_initialize || o(), e.exports.setErrorListener = r.setErrorListener
          }, function (e, t) {
            e.exports = function (e) {
              if (!e.webpackPolyfill) {
                var t = Object.create(e);
                t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                  enumerable: !0,
                  get: function () {
                    return t.l
                  }
                }), Object.defineProperty(t, "id", {
                  enumerable: !0,
                  get: function () {
                    return t.i
                  }
                }), Object.defineProperty(t, "exports", {
                  enumerable: !0
                }), t.webpackPolyfill = 1
              }
              return t
            }
          }])
        },
        668: (e, t, n) => {
          n(57).J.push("AftQA21wLWJ1YmJsZS1hY3Rpb24tc2hlZXQtLW1hc2ttcC1idWJibGUtYWN0aW9uLXNoZWV0LS1tZW51bXAtYnViYmxlLWFjdGlvbi1zaGVldC0tY2VsbG1wLWJ1YmJsZS1hY3Rpb24tc2hlZXQtLWNlbGwtaW1nLWNvbnRhaW5lcm1wLWJ1YmJsZS1hY3Rpb24tc2hlZXQtLWNlbGwtaW1nLWNvbnRhaW5lcm1wLWJ1YmJsZS1hY3Rpb24tc2hlZXQtLWNlbGxfX2hvdmVybXAtYnViYmxlLWFjdGlvbi1zaGVldC0tY2VsbC1pbWdtcC1idWJibGUtYWN0aW9uLXNoZWV0LS1jZWxsLWRlc2NtcC1idWJibGUtYWN0aW9uLXNoZWV0LS1mb290bXAtYnViYmxlLWFjdGlvbi1zaGVldC0tYnV0dG9uc2FmZS1hcmVhLWluc2V0LWJvdHRvbW1wLWJ1YmJsZS1hY3Rpb24tc2hlZXQtLWJ1dHRvbl9fYmVmb3JlbXAtYnViYmxlLWFjdGlvbi1zaGVldC0tYnV0dG9uX19jb250ZW50bXAtYnViYmxlLWFjdGlvbi1zaGVldC0tYnV0dG9uX19ob3Zlcm1wLWJ1YmJsZS1hY3Rpb24tc2hlZXQtLWNvbnRlbnRtcC1idWJibGUtYWN0aW9uLXNoZWV0LS1jb250ZW50bXAtYnViYmxlLWFjdGlvbi1zaGVldC0tbWVudW1wLWJ1YmJsZS1hY3Rpb24tc2hlZXQtLWNlbGwtaW1nLWNvbnRhaW5lcm1wLWJ1YmJsZS1hY3Rpb24tc2hlZXQtLWNlbGwtaW1nLWNvbnRhaW5lcm1wLWJ1YmJsZS1hY3Rpb24tc2hlZXQtLWNlbGxfX2hvdmVybXAtYnViYmxlLWFjdGlvbi1zaGVldC0tY2VsbC1kZXNjbXAtYnViYmxlLWFjdGlvbi1zaGVldC0tYnV0dG9ubXAtYnViYmxlLWFjdGlvbi1zaGVldC0tYnV0dG9uX19iZWZvcmVtcC1idWJibGUtYWN0aW9uLXNoZWV0LS1idXR0b25fX2NvbnRlbnRtcC1idWJibGUtYWN0aW9uLXNoZWV0LS1idXR0b25fX2hvdmVy+8ADFi4ODAEKAAAAAAMBABwAABAcBQIDAC8CAAAAAC4CAAAAAC0CAAAAADACAAAAAAAAWA4MAQocABwAAwEcHAAAEEYOJgMAIgPt7e3/AgIALwIAAAAALgIAAAAAKAIAAApDJwgAAIA/MwIAAMBBNAIAAMBBMgIAAMBBMQIAAMBBAQMACAEADQYAAAAWDgwBCjgAOAADATgcAAAQBAECAgAAAFgODAEKVABUAAMBVCoAABBGDCYDACcCAABgQigCAABgQjMCAABAQTQCAABAQTICAABAQTECAABAQSID/////0UCAABAQUYCAABAQUcCAABAQUgCAABAQQAAIxgWARR+AH4AAwF+KgEKqACoAAMBqCMAACAHASID7Ozs/wAAHw4MAQrLAMsAAwHLIAAAEA0CJwIAAABCKAIAAABCAAAoDgwBCusA6wADAeshAAAQFgQWAgAAIEETAwAAAIAYAgA3AgAAAEEAACIUEgEQ+wwBAPsMAQAFAfsMARwAABAKAgICACcIAACAPwAAKxQSARD7KAEA+ygBAAUB+ygBHgAAEBMDAgIANAkB+0YBFgAAIgP/////AABHFBIBEPtcAQD7XAEABQH7XAEmAAAQLwcCAwAvAgAAAAAtAgAAAAAuAgAAAAAoAgAAgD8iAwAAABpJAQoBAwAAgD8AAAA/AABSFBIBEPuCAQD7ggEABQH7ggEnAAAQOgsmAwAzAgAAAAA0AgAAAAAyAgAAgEExAgAAgEEYAgAWAgAAiEEXAgAAYEIeAwATAwAAAOYoAgAAYEIAAB8UEgEQ+6kBAPupAQAFAfupASUAABAHASID7Ozs/wAAHxQSARD7zgEA+84BAAUB+84BHwAAEAcBJwMAAMhCAQAfFBIBEPvtAQD77QEABQH77QEfAAAQBwEnBAAAyEIBAR8UEgEQ+wwCAPsMAgAFAfsMAhwAABAHASIDERER/wECHxQSARD7KAIA+ygCAAUB+ygCKgAAEAcBIgMfHx//AQIvJCIBIPtSAgD7UgIABQH7UgIqARD7fAIA+3wCAAUB+3wCIwAAIAcBIgM3Nzf/AQIfFBIBEPufAgD7nwIABQH7nwIhAAAQBwETA////4ABAh8UEgEQ+8ACAPvAAgAFAfvAAh4AABAHASIDHx8f/wECHxQSARD73gIA+94CAAUB+94CJgAAEAcBIgP///8NAQIfFBIBEPsEAwD7BAMABQH7BAMnAAAQBwETA////8wBAh8UEgEQ+ysDAPsrAwAFAfsrAyUAABAHASIDNzc3/wECKAMMAAAJAQcAAAQBAgEADAAACQEHAAAEAQICAAwAAAkBBwAABAEJAgA=")
        },
        574: (e, t, n) => {
          n(57).J.push("AfvjAW1wLWRpYWxvZy0tcm9vdG1wLWRpYWxvZy0tbWFza21wLWRpYWxvZy0tbWFza19faW5tcC1kaWFsb2ctLWNvbnRhaW5lcm1wLWRpYWxvZy0tY29udGVudG1wLWRpYWxvZy0tY29udGVudF9faW5tcC1kaWFsb2ctLWhlYWRtcC1kaWFsb2ctLXRpdGxlbXAtZGlhbG9nLS1ib2R5bXAtZGlhbG9nLS1mb290bXAtZGlhbG9nLS1mb290bXAtZGlhbG9nLS1mb290X19hZnRlcm1wLWRpYWxvZy0tYnV0dG9ubXAtZGlhbG9nLS1idXR0b25fX2FjdGl2ZW1wLWRpYWxvZy0tYnV0dG9uX19hZnRlcm1wLWRpYWxvZy0tYnV0dG9uX19maXJzdC1jaGlsZF9fYWZ0ZXJtcC1kaWFsb2ctLWJ1dHRvbl9fZGVmYXVsdG1wLWRpYWxvZy0tY29udGVudG1wLWRpYWxvZy0tYm9keW1wLWRpYWxvZy0tYnV0dG9ubXAtZGlhbG9nLS1idXR0b25fX2RlZmF1bHRtcC1kaWFsb2ctLWJ1dHRvbl9fYWN0aXZlbXAtZGlhbG9nLS1mb290X19hZnRlcm1wLWRpYWxvZy0tYnV0dG9uX19hZnRlcvvqAxc5DgwBCgAAAAADAQAPAAAQJwkoBAAAyEInAwAAyEIBAwAWAgAAgEEDAgAEAgAIAwAKAgAVAEB6RAAASw4MAQoPAA8AAwEPDwAAEDkLAgMALwIAAAAALgIAAAAALQIAAAAAMAIAAAAAIgMAAACZFAAAAABKAwECAEsCAchMAwEDAE0CAQAAABgODAEKHgAeAAMBHhMAABAGARQAAIA/AAA3DgwBCjEAMQADATEUAAAQJQgCAwAvAgAAAAAuAgAAAAAtAgAAAAAwAgAAAAABAwANAQAKAgAAAF0ODAEKRQBFAAMBRRIAABBLECID/////xgCAEUCAAAAQUYCAAAAQUcCAAAAQUgCAAAAQQMCAAQCAAEDAAgDACcCAACgQxQAAAAASgMBAgBLAgHITAMBAwBNAgEAAAAYDgwBClcAVwADAVcWAAAQBgEUAACAPwAAMQ4MAQptAG0AAwFtDwAAEB8FNwIAAABCNQIAAMBBOAIAAAAANgIAAMBBKAIAAMBBAAAcDgwBCnwAfAADAXwQAAAQCgIZAgAWAgAAiEEAACsODAEKjACMAAMBjA8AABAZBDECAADAQTICAADAQRYCAACIQRMDAAAAgAAAFg4MAQqbAJsAAwGbDwAAEAQBAQMAAAAoDgwBCqoAqgADAaoPAAAQFgQCAgAoAgAAYEIXAgAAYEIWAgAAiEEAAEEODAEKuQC5AAMBuRYAABAvBwIDAC0CAAAAAC8CAAAAAC4CAAAAACgCAACAPyIDAAAAGkkBCgEDAACAPwAAAD8AACcODAEKzwDPAAMBzxEAABAVBQECAA4AAIA/EwNXa5X/GQIAAgIAAAAZDgwBCuAA4AADAeAZAAAQBwEiA+zs7P8AAEEODAEK+QD5AAMB+RgAABAvBwIDAC0CAAAAAC8CAACAPycCAACAPzACAAAAACIDAAAAGkkBCgEDAAAAPwAAgD8AABwUEgEQ+xEBAPsRAQAFAfsRASUAABAEAQEBAAAAHxQSARD7NgEA+zYBAAUB+zYBGgAAEAcBEwMAAADmAAAlFBIBEPtQAQD7UAEABQH7UAESAAAQDQIiAx4eHv8TA/////8BACUUEgEQ+2IBAPtiAQAFAftiAQ8AABANAiIDHh4e/xMD////gAEAHxQSARD7cQEA+3EBAAUB+3EBEQAAEAcBEwN9kKn/AQAfFBIBEPuCAQD7ggEABQH7ggEaAAAQBwETA////5kBAB8UEgEQ+5wBAPucAQAFAfucARkAABAHASIDNzc3/wEAMCUjAhD7tQEA+7UBAAUB+7UBFgAAEPvLAQD7ywEABQH7ywEYAAAQBwEiA////w0BAA4BDAAACQEHAAAEAQkCAA==")
        },
        81: (e, t, n) => {
          n(57).J.push("Aft3Am1wLWhhbGYtc2NyZWVuLWRpYWxvZy0tY29udGVudHNhZmUtYXJlYS1pbnNldC1ib3R0b21tcC1oYWxmLXNjcmVlbi1kaWFsb2ctLWhlYWRtcC1oYWxmLXNjcmVlbi1kaWFsb2ctLXRpdGxlbXAtaGFsZi1zY3JlZW4tZGlhbG9nLS1ib2R5bXAtaGFsZi1zY3JlZW4tZGlhbG9nLS1mb290bXAtaGFsZi1zY3JlZW4tZGlhbG9nLS1idXR0b25tcC1oYWxmLXNjcmVlbi1kaWFsb2ctLWJ1dHRvbm1wLWhhbGYtc2NyZWVuLWRpYWxvZy0tYnV0dG9uX19hY3RpdmVtcC1oYWxmLXNjcmVlbi1kaWFsb2ctLWJ1dHRvbl9fcHJpbWFyeW1wLWhhbGYtc2NyZWVuLWRpYWxvZy0tYnV0dG9uX19wcmltYXJ5bXAtaGFsZi1zY3JlZW4tZGlhbG9nLS1idXR0b25fX2FjdGl2ZW1wLWhhbGYtc2NyZWVuLWRpYWxvZy0taGVhZG1wLWhhbGYtc2NyZWVuLWRpYWxvZy0tYm9keW1wLWhhbGYtc2NyZWVuLWRpYWxvZy0tYnV0dG9ubXAtaGFsZi1zY3JlZW4tZGlhbG9nLS1idXR0b25tcC1oYWxmLXNjcmVlbi1kaWFsb2ctLWJ1dHRvbl9fYWN0aXZlbXAtaGFsZi1zY3JlZW4tZGlhbG9nLS1idXR0b25fX3ByaW1hcnltcC1oYWxmLXNjcmVlbi1kaWFsb2ctLWJ1dHRvbl9fcHJpbWFyeW1wLWhhbGYtc2NyZWVuLWRpYWxvZy0tYnV0dG9uX19hY3RpdmX7dwIPOw4MAQoAAAAAAwEAHgAAECkHOAkBHhYAABgCADMCAADAQTQCAADAQTICAADAQTECAADAQScIAACAPwAAJQ4MAQo0ADQAAwE0GwAAEBMDNwIAAABBLAIAAEBCEwMAAADmAAAcDgwBCk8ATwADAU8cAAAQCgIZAgAWAgAAiEEAACsODAEKawBrAAMBaxsAABAZBDECAADAQTICAADAQRYCAACIQRMDAAAA5gAAKA4MAQqGAIYAAwGGGwAAEBYFAQMAAgIANwIAAMBBFgIAAIhBDQEAAABnDgwBCqEAoQADAaEdAAAQVRAoAgAAIEInAgAA8EIXAgAAIEJFAgAAgEBGAgAAgEBHAgAAgEBIAgAAgEAiA/Ly8v8BAgATAwauVv8ZAgACAgAfAgAAgD8YAgA1AgAAAEE2AgAAAEEAABsQDgEMvgC+AAUCvh3bJQAAIAcBIgPm5ub/AAAlFBIBEPsAAQD7AAEABQH7AAEmAAAQDQIiAwfBYP8TA/////8AACMYFgEU+yYBAPsmAQAJAvsmASb7TAElAAAgBwEiAwauVv8AAB8UEgEQ+3EBAPtxAQAFAftxARsAABAHARMD////zAEAHxQSARD7jAEA+4wBAAUB+4wBGwAAEAcBEwP////MAQAlFBIBEPunAQD7pwEABQH7pwEdAAAQDQIiA////xQTA9bW1v8BACMYFgEU+8QBAPvEAQAJAvvEAR374QElAAAgBwEiA////yABACUUEgEQ+wYCAPsGAgAFAfsGAiYAABANAiIDB8Fg/xMD/////wEAIxgWART7LAIA+ywCAAkC+ywCJvtSAiUAACAHASIDBq5WmQEADgEMAAAJAQcAAAQBCQIA")
        },
        741: (e, t, n) => {
          n(57).J.push("AfsIAW1wLWhhbGYtc2NyZWVuLXBvcHVwLS1yb290bXAtaGFsZi1zY3JlZW4tcG9wdXAtLW1hc2ttcC1oYWxmLXNjcmVlbi1wb3B1cC0tbWFza19faW5tcC1oYWxmLXNjcmVlbi1wb3B1cC0tY29udGFpbmVybXAtaGFsZi1zY3JlZW4tcG9wdXAtLWNvbnRhaW5lcl9faW5tcC1oYWxmLXNjcmVlbi1wb3B1cC0tY29udGVudG1wLWhhbGYtc2NyZWVuLXBvcHVwLS1jb250ZW50bXAtaGFsZi1zY3JlZW4tcG9wdXAtLWNvbnRlbnRtcC1oYWxmLXNjcmVlbi1wb3B1cC0tY29udGVudPu9AQkwDgwBCgAAAAADAQAaAAAQHgYoBAAAyEInAwAAyEIWAgAAgEEDAgAEAgAVAEB6RAAASw4MAQoaABoAAwEaGgAAEDkLAgMALwIAAAAALgIAAAAALQIAAAAAMAIAAAAAIgMAAACZFAAAAABKAwECAEsCAchMAwEDAE0CAQAAABgODAEKNAA0AAMBNB4AABAGARQAAIA/AABYDgwBClIAUgADAVIfAAAQRg0CAwBKAwEBAEsCAchMAwEBAE0CAQAnCAAAgD8vCAAAgD8tAgAAAAAuAgAAAABJAQwBAgIAAAAACAAAAAABAwAIAQANAQAAACIODAEKcQBxAAMBcSMAABAQAUkBDAECAgAAAAAIAACAvwAAVQ4MAQqUAJQAAwGUHQAAEEMNJgMAJwMAAMhCIgP/////EwMAAAD/RQIAAEBBRgIAAEBBRwIAAEBBSAIAAEBBAgIAOAIAAEDBNAIAAEBBAwIABAIAAAAZDgwBCrEAsQADAbEdAAAQBwEnAwAAyEIBABkODAEKzgDOAAMBzh0AABAHAScEAADIQgEBHw4MAQrrAOsAAwHrHQAAEA0CIgMZGRn/EwP/////AQIoAwwAAAkBBwAABAECAQAMAAAJAQcAAAQBAgIADAAACQEHAAAEAQkCAA==")
        },
        161: (e, t, n) => {
          n(57).J.push("AftpBG1wLWhvcml6b25hbC1idWJibGUtLXJvb3RtcC1ob3Jpem9uYWwtYnViYmxlLS1tYXNrbXAtaG9yaXpvbmFsLWJ1YmJsZS0tbWFza19faW5tcC1ob3Jpem9uYWwtYnViYmxlLS1jb250ZW50bXAtaG9yaXpvbmFsLWJ1YmJsZS0tY2xvc2UtY29udGFpbmVybXAtaG9yaXpvbmFsLWJ1YmJsZS0tY2xvc2UtY29udGFpbmVyX19pbm1wLWhvcml6b25hbC1idWJibGUtLWNsb3NlLWJ0bm1wLWhvcml6b25hbC1idWJibGUtLWNsb3NlLWJ0bi1pbWdtcC1ob3Jpem9uYWwtYnViYmxlLS1jbG9zZS1idG5fX2hvdmVybXAtaG9yaXpvbmFsLWJ1YmJsZS0tY29udGVudC1jb250YWluZXJtcC1ob3Jpem9uYWwtYnViYmxlLS1tZW51LWNvbnRhaW5lcm1wLWhvcml6b25hbC1idWJibGUtLW1lbnUtY29udGFpbmVyX19pbm1wLWhvcml6b25hbC1idWJibGUtLW1lbnVtcC1ob3Jpem9uYWwtYnViYmxlLS1tZW51LWJlZm9yZW1wLWhvcml6b25hbC1idWJibGUtLW1lbnUtaW5uZXJtcC1ob3Jpem9uYWwtYnViYmxlLS1tZW51LWFmdGVybXAtaG9yaXpvbmFsLWJ1YmJsZS0tY2VsbG1wLWhvcml6b25hbC1idWJibGUtLWNlbGwtaW1nLWNvbnRhaW5lcm1wLWhvcml6b25hbC1idWJibGUtLWNlbGwtaW1nLWNvbnRhaW5lcm1wLWhvcml6b25hbC1idWJibGUtLWNlbGxfX2hvdmVybXAtaG9yaXpvbmFsLWJ1YmJsZS0tY2VsbC1pbWdtcC1ob3Jpem9uYWwtYnViYmxlLS1jZWxsLWRlc2NtcC1ob3Jpem9uYWwtYnViYmxlLS1jZWxsLWltZy1jb250YWluZXJtcC1ob3Jpem9uYWwtYnViYmxlLS1jZWxsLWltZy1jb250YWluZXJtcC1ob3Jpem9uYWwtYnViYmxlLS1jZWxsX19ob3Zlcm1wLWhvcml6b25hbC1idWJibGUtLWNlbGwtZGVzY21wLWhvcml6b25hbC1idWJibGUtLW1lbnUtaW5uZXJtcC1ob3Jpem9uYWwtYnViYmxlLS1tZW51LWlubmVybXAtaG9yaXpvbmFsLWJ1YmJsZS0tY2xvc2UtY29udGFpbmVybXAtaG9yaXpvbmFsLWJ1YmJsZS0tbWVudS1jb250YWluZXJtcC1ob3Jpem9uYWwtYnViYmxlLS1jb250ZW50LWNvbnRhaW5lcm1wLWhvcml6b25hbC1idWJibGUtLWNsb3NlLWNvbnRhaW5lcm1wLWhvcml6b25hbC1idWJibGUtLW1lbnUtY29udGFpbmVybXAtaG9yaXpvbmFsLWJ1YmJsZS0tY29udGVudC1jb250YWluZXL7WQUeMA4MAQoAAAAAAwEAGQAAEB4GKAQAAMhCJwMAAMhCFgIAAIBBAwIABAIAFQBAekQAAEsODAEKGQAZAAMBGRkAABA5CwIDAC8CAAAAAC4CAAAAAC0CAAAAADACAAAAACIDAAAA2RQAAAAASgMBAgBLAgHITAMBAwBNAgEAAAAYDgwBCjIAMgADATIdAAAQBgEUAACAPwAAIg4MAQpPAE8AAwFPHAAAEBADAQMAKAQAAMhCJwMAAMhCAAA9DgwBCmsAawADAWskAAAQKwcCAgAoBAAAyEJKAwEBAEsCAchMAwEBAE0CAQBJAQwBAggAAIC/AgAAAAAAACIODAEKjwCPAAMBjygAABAQAUkBDAECCAAAAAACAAAAAAAAbQ4MAQq3ALcAAwG3HgAAEFsRJgMAAgMALQIAAJhCMAIAABRCKAIAAABCJwIAAABCMwIAAIBANAIAAIBAMgIAAIBAMQIAAIBARQIAAIBBRgIAAIBBRwIAAIBBSAIAAIBBAwIABAIAIgM+PD//AAAfDgwBCtUA1QADAdUiAAAQDQIoAgAAwEEnAgAAwEEAABkODAEK9wD3AAMB9yUAABAHASIDNzc3/wAAHxQSARD7HAEA+xwBAAUB+xwBJgAAEAcBKAQAAMhCAABAFBIBEPtCAQD7QgEABQH7QgEjAAAQKAYoBAAAyEJKAwEBAEsCAchMAwEBAE0CAQBJAQwBAggAAIA/AgAAAAAAACgUEgEQ+2UBAPtlAQAFAftlAScAABAQAUkBDAECCAAAAAACAAAAAAAAJRQSARD7jAEA+4wBAAUB+4wBGQAAEA0DKAgAAIA/AQMACAEAAAAeFBIBEPulAQD7pQEABQH7pQEgAAAQBgEOAACAPwAALRQSARD7xQEA+8UBAAUB+8UBHwAAEBUFDgAAAAAoCAAAgD8BAwAIAwANBAAAAB4UEgEQ++QBAPvkAQAFAfvkAR8AABAGAQ4AAEBAAAAcFBIBEPsDAgD7AwIABQH7AwIZAAAQBAECAgAAAF4UEgEQ+xwCAPscAgAFAfscAicAABBGDCYDACcCAABgQigCAABgQjMCAABAQTQCAABAQTICAABAQTECAABAQSID/////0UCAABAQUYCAABAQUcCAABAQUgCAABAQQAALyQiASD7QwIA+0MCAAUB+0MCJwEQ+2oCAPtqAgAFAftqAiAAACAHASID7Ozs/wAAJRQSARD7igIA+4oCAAUB+4oCHQAAEA0CJwIAAABCKAIAAABCAAA0FBIBEPunAgD7pwIABQH7pwIeAAAQHAUWAgAAIEETA////4AYAgA3AgAAAEEoAgAAYEEAAB8UEgEQ+8UCAPvFAgAFAfvFAicAABAHASIDHx8f/wAALyQiASD77AIA++wCAAUB++wCJwEQ+xMDAPsTAwAFAfsTAyAAACAHASIDNzc3/wAAHxQSARD7MwMA+zMDAAUB+zMDHgAAEAcBEwP///+AAAAoFBIBEPtRAwD7UQMABQH7UQMfAAAQEAMmAwAzAgAAiEI0AgAAwEEBACgUEgEQ+3ADAPtwAwAFAftwAx8AABAQAyYDADMCAAAwQjQCAADAQQEBNSUjAhD7jwMA+48DAAUB+48DJAAAEPuzAwD7swMABQH7swMjAAAQDAIOAACAPxACAAAAAAECHxQSARD71gMA+9YDAAUB+9YDJgAAEAcBJwIAAK9DAQI1JSMCEPv8AwD7/AMABQH7/AMkAAAQ+yAEAPsgBAAFAfsgBCMAABAMAicCAAAeQw4AAAAAAQMkFBIBEPtDBAD7QwQABQH7QwQmAAAQDAIOAACAPxACAAAAAAEDPQQOAAALAQkAAAYBBwAAr0MOAAALAQkAAAYBCAAAr0MOAAALAQkAAAYBBADAJkQOAAALAQkAAAYBBQDAJkQ=")
        },
        521: (e, t, n) => {
          n(57).J.push("AUhhZC1za2lwLWNhcmQtLXJvb3RhZC1za2lwLWNhcmQtLWljb25hZC1za2lwLWNhcmQtLXRpdGxlYWQtc2tpcC1jYXJkLS1zdWK1BDYODAEKAAAAAAMBABIAABAkCCgEAADIQicDAADIQgEDAAgDAAoCAA0BACIDAAAAmRUAQHpEAAAlDgwBChIAEgADARISAAAQEwMnAgCAu0MoAgAAcEM4AgAAwEEAACgODAEKJAAkAAMBJBMAABAWBBMD/////xYCAACIQTgCAAAAQRgCAAAALQ4MAQo3ADcAAwE3EQAAEBsFFM3MTD8TA/////8WAgAAYEE4AgAAwEAYAgAAAAEA")
        },
        431: (e, t, n) => {
          n(57).J.push("AftzAWF1dGhvcml6ZS0tcm9vdGF1dGhvcml6ZS0tbWFza2F1dGhvcml6ZS0tbWFzay1pbmF1dGhvcml6ZS0tY29udGFpbmVyYXV0aG9yaXplLS1jb250ZW50YXV0aG9yaXplLS1jb250ZW50LWluYXV0aG9yaXplLS1oZWFkYXV0aG9yaXplLS1pY29uYXV0aG9yaXplLS10aXRsZWF1dGhvcml6ZS0tYm9keWF1dGhvcml6ZS0tYXBwbHktaW5mb2F1dGhvcml6ZS0tYnV0dG9uc2F1dGhvcml6ZS0tYnV0dG9uYXV0aG9yaXplLS1jYW5jZWxhdXRob3JpemUtLWNvbmZpcm1hdXRob3JpemUtLWNvbnRhaW5lcmF1dGhvcml6ZS0tY29udGFpbmVyYXV0aG9yaXplLS1jb250ZW50YXV0aG9yaXplLS10aXRsZWF1dGhvcml6ZS0tYXBwbHktaW5mb2F1dGhvcml6ZS0tY2FuY2Vs++4DFTkODAEKAAAAAAMBAA8AABAnCSgEAADIQicDAADIQgEDABYCAACAQQMCAAQCAAgDAAoCABUAQHpEAAA8DgwBCg8ADwADAQ8PAAAQKggnCAAAgD8oCAAAgD8iAwAAAP8UAAAAAEoDAQIASwIByEwDAQEATQIBAAAAGA4MAQoeAB4AAwEeEgAAEAYBFM3MzD4AAD0ODAEKMAAwAAMBMBQAABArBwMCAAQCACgIAACAPwIDAC0IAAAAPzACAABAwUkBDAECCAAAAL8CAAAAAAAAfA4MAQpEAEQAAwFEEgAAEGoUAQMACAMASgMBAQBLAgHITAMBAQBNAgEAMwIAAAAANAIAAAAAMgIAAMBBMQIAAMBBJwgAAIA/KAIAAHpDRQIAAEBBRgIAAEBBRwIAAEBBSAIAAEBBIgP/////AgMALwgAAIA/LQIAAAAAAAAiDgwBClYAVgADAVYVAAAQEAFJAQwBAgIAAAAACAAAgL8AAB8ODAEKawBrAAMBaw8AABANAygCAACAQgEDAAoCAAAAHw4MAQp6AHoAAwF6DwAAEA0CJwIAAMBBKAIAAMBBAAA+DgwBCokAiQADAYkQAAAQLAg1AgAAAEEUZmZmPxMDAAAA/xYCAABwQRkCACgCAACoQRcCAACoQQ4AAIA/AAAhDgwBCpkAmQADAZkPAAAQDwMOAACAPwgDADcCAACAQAAAMw4MAQqoAKgAAwGoFQAAECEGFGZmZj8WAgAAiEETAwAAAP8ZAgAoAmZmvkEXAmZmvkEAAEAODAEKvQC9AAMBvRIAABAuCicIAACAPygCAAAgQgIDADACAACcQi0CAAAAABYCAACIQRkCAAEDAAgBAA0BAAAAWA4MAQrPAM8AAwHPEQAAEEYMJwIAAPBCKAIAACBCFwIAACBCGAIANwIAAAAAOAIAAAAANgIAAABBNQIAAABBRQIAAIBARgIAAIBARwIAAIBASAIAAIBAAAAfDgwBCuAA4AADAeARAAAQDQIiA/Ly8v8TAwfBYP8AAB8ODAEK8QDxAAMB8RIAABANAiIDBMFg/xMD/////wAAHxQSARD7AwEA+wMBAAUB+wMBFAAAEAcBJwMAAMhCAQAfFBIBEPsXAQD7FwEABQH7FwEUAAAQBwEnBAAAyEIBAR8UEgEQ+ysBAPsrAQAFAfsrARIAABAHASIDLCws/wECJBQSARD7PQEA+z0BAAUB+z0BEAAAEAwCFM3MTD8TA/////8BAiQUEgEQ+00BAPtNAQAFAftNARUAABAMAhTNzEw/EwP/////AQIlFBIBEPtiAQD7YgEABQH7YgERAAAQDQIiA////xQTA/////8BAigDDAAACQEHAAAEAQIBAAwAAAkBBwAABAECAgAMAAAJAQcAAAQBCQIA")
        },
        172: (e, t, n) => {
          n(57).J.push("AedmcmFtZXNldC0taGlkZGVuZnJhbWVzZXQtLXJvb3RmcmFtZXNldC0tdGFic2ZyYW1lc2V0LS1wYW5lbHNmcmFtZXNldC0tbGVmdC1wYW5lbGZyYW1lc2V0LS1sZWZ0LXBhZ2VmcmFtZXNldC0tcmlnaHQtcGFuZWxmcmFtZXNldC0tcmlnaHQtcGxhY2Vob2xkZXJmcmFtZXNldC0tcmlnaHQtcGFnZWZyYW1lc2V0LS1yaWdodC1wYWdlLWluZnJhbWVzZXQtLWxlZnQtcGFuZWxmcmFtZXNldC0tcmlnaHQtcGFuZWz72AEMFg4MAQoAAAAAAwEAEAAAEAQBBwIAAAAcDgwBChAAEAADARAOAAAQCgIBAwAoBAAAyEIAAB8ODAEKHgAeAAMBHg4AABANAycCAABwQgMCAAQCAAAAGw4MAQosACwAAwEsEAAAEAkCDgAAgD8BAwAAADEODAEKPAA8AAMBPBQAABAfBScCAADPQzcCAAAAADgCAAAAADYCAACAPzUCAACAPwAALg4MAQpQAFAAAwFQEwAAEBwFAgMALQIAAAAALwIAAAAAJwgAAIA/KAgAAIA/AAAYDgwBCmMAYwADAWMVAAAQBgEOAACAPwAAMQ4MAQp4AHgAAwF4GwAAEB8EAgMALQgAAAA/LwgAAAA/SQEMAQIIAAAAvwgAAAC/AABRDgwBCpMAkwADAZMUAAAQPwoCAwAtAgAAAAAvAgAAAAAnCAAAgD8oCAAAgD9JAQwBAggAAIA/AgAAAABKAwEBAEsEAfuQAUwDAQQATQIBAAAAIg4MAQqnAKcAAwGnFwAAEBABSQEMAQICAAAAAAIAAAAAAAAWDgwBCr4AvgADAb4UAAAQBAEnAQABAC4ODAEK0gDSAAMB0hUAABAcBQIDAC0CAAAAAC8CAAAAACcIAACAPygIAACAPwEAEAEOAAALAQkAAAYBBQBAJ0Q=")
        },
        78: (e, t, n) => {
          n(57).J.push("AftcAWdhbWUtcmFua2xpc3QtLXJvb3RnYW1lLXJhbmtsaXN0LS1jb250ZW50Z2FtZS1yYW5rbGlzdC0tbGluZWdhbWUtcmFua2xpc3QtLWhlYWRnYW1lLXJhbmtsaXN0LS1jbG9zZWdhbWUtcmFua2xpc3QtLXRpdGxlZ2FtZS1yYW5rbGlzdC0tYm9keWdhbWUtcmFua2xpc3QtLWl0ZW1nYW1lLXJhbmtsaXN0LS1pY29uZ2FtZS1yYW5rbGlzdC0tbmFtZWdhbWUtcmFua2xpc3QtLXNjb3JlZ2FtZS1yYW5rbGlzdC0tYnV0dG9uc2dhbWUtcmFua2xpc3QtLWJ1dHRvbmdhbWUtcmFua2xpc3QtLWJ0bi1pY29uZ2FtZS1yYW5rbGlzdC0tZGlzYWJsZWRnYW1lLXJhbmtsaXN0LS1jb250ZW50Z2FtZS1yYW5rbGlzdC0tY29udGVudPtbAxFODgwBCgAAAAADAQATAAAQPA0oBAAAyEInAwAAyEIBAwAWAgAAgEEDAgAEAgAIAwAKAgANBQAVAEB6RCcIAACAPygIAACAPyIDAAAAgAAAMQ4MAQoTABMAAwETFgAAEB8FRQIAAIBARgIAAIBARwIAAIBASAIAAIBAIgP/////AAAfDgwBCikAKQADASkTAAAQDQIoAgAAgD8iAwAAAA0AADoODAEKPAA8AAMBPBMAABAoCCgCAAA0QgEDAAoCAA0EADMCAAAAADQCAAAAADICAACgQTECAACgQQAAJA4MAQpPAE8AAwFPFAAAEBIDJwIAAIBBKAIAAIBBFAAAAD8AADcODAEKYwBjAAMBYxQAABAlBxMDAAAA5hYCAABgQRkCACgCAACgQRcCAACgQScIzcxMPxgCAAAAKw4MAQp3AHcAAwF3EwAAEBkEMwIAAAAANAIAAAAAMgIAAIBBMQIAAIBBAAAiDgwBCooAigADAYoTAAAQEAQoAgAAjEIBAwAIAQAKAgAAADcODAEKnQCdAAMBnRMAABAlBicCAAAgQigCAAAgQkUCAACAQEYCAACAQEcCAACAQEgCAACAQAAAVQ4MAQqwALAAAwGwEwAAEEMNJwgAAAA/NwIAAEBBOAIAAEBBNgIAAEBBNQIAAEBBFgIAAIhBKAIAAMBBFwIAAMBBAwIABAIAGwIAHAIAEwMAAADmAAAzDgwBCsMAwwADAcMUAAAQIQYOAACAPxYCAABgQSgCAACgQRcCAACgQRMDAAAAgBgDAAAAQw4MAQrXANcAAwHXFgAAEDEKKAIAADBCAQMACAEACgIADQUAIgP39/f/MwIAAAAANAIAAAAAMgjNzEw+MQjNzEw+AABGDgwBCu0A7QADAe0VAAAQNAonAgAAwEEoAgAAwEFFAgAAQEFGAgAAQEFHAgAAQEFIAgAAQEEBAwAKAgANAQAiA+rq6v8AACUUEgEQ+wIBAPsCAQAFAfsCARcAABANAicCAADAQCgCAABAQQAAHhQSARD7GQEA+xkBAAUB+xkBFwAAEAYBFAAAAD8AAB8UEgEQ+zABAPswAQAFAfswARYAABAHAScDAACqQgEAHxQSARD7RgEA+0YBAAUB+0YBFgAAEAcBJwQAAKpCAQEbAgwAAAkBBwAABAECAQAMAAAJAQcAAAQBAgIA")
        },
        261: (e, t, n) => {
          n(57).J.push("AZhuYXZpZ2F0ZS10by1tcC0tYm9keW5hdmlnYXRlLXRvLW1wLS1ib2R5LXBsYWNlaG9sZGVybmF2aWdhdGUtdG8tbXAtLWxvZ29uYXZpZ2F0ZS10by1tcC0tbmFtZW5hdmlnYXRlLXRvLW1wLS1kZXNjbmF2aWdhdGUtdG8tbXAtLW5hbWVuYXZpZ2F0ZS10by1tcC0tZGVzY/syAQcoDgwBCgAAAAADAQAUAAAQFgUBAwAzAgAAwEE0AgAAQEEIAwAKAgAAABkODAEKFAAUAAMBFCAAABAHATMCAACAQQAAQw4MAQo0ADQAAwE0FAAAEDEJKAIAAEBCJwIAAEBCOAIAAABBRQIAAMBBRgIAAMBBRwIAAMBBSAIAAMBBAwIABAIAAAA9DgwBCkgASAADAUgUAAAQKwgQAQABAgATAwAAAOYWAgAAiEEXAgAAsEE3AgAAAEEoAgAAsEEnCAAAgD8AADcODAEKXABcAAMBXBQAABAlBxABAAECABMDAAAATRYCAABgQRcCAACgQSgCAACgQScIAACAPwAAGQ4MAQpwAHAAAwFwFAAAEAcBEwP////mAQAZDgwBCoQAhAADAYQUAAAQBwETA////00BAA4BDAAACQEHAAAEAQkCAA==")
        },
        426: (e, t, n) => {
          n(57).J.push("AfuuAXNoYXJlLWltYWdlLS1tYXNrc2hhcmUtaW1hZ2UtLW1hc2tfX2luc2hhcmUtaW1hZ2UtLWNvbnRhaW5lcnNoYXJlLWltYWdlLS1sYW5kc2NhcGUtY29udGFpbmVyc2hhcmUtaW1hZ2UtLWNvbnRhaW5lcl9faW5zaGFyZS1pbWFnZS0tbGFuZHNjYXBlLWNvbnRhaW5lcl9faW5zaGFyZS1pbWFnZS0tY29udGFpbmVyc2FmZS1hcmVhLWluc2V0LWxlZnRzYWZlLWFyZWEtaW5zZXQtYm90dG9tc2FmZS1hcmVhLWluc2V0LXJpZ2h0c2hhcmUtaW1hZ2UtLWxhbmRzY2FwZS1jb250YWluZXJzaGFyZS1pbWFnZS0tc2Nyb2xsZXItY29udGFpbmVyc2hhcmUtaW1hZ2UtLXNjcm9sbGVyc2hhcmUtaW1hZ2UtLWltZ3NoYXJlLWltYWdlLS1pbWctd3JhcHBlcnNoYXJlLWltYWdlLS1jb250YWluZXJzaGFyZS1pbWFnZS0tc2Nyb2xsZXJzaGFyZS1pbWFnZS0taW1nLXdyYXBwZXL7zAINSw4MAQoAAAAAAwEAEQAAEDkLAgMALwIAAAAALgIAAAAALQIAAAAAMAIAAAAAIgMAAADZFAAAAABKAwECAEsCAchMAwEDAE0CAQAAABgODAEKEQARAAMBERUAABAGARQAAIA/AAA+GRcCCiYAJgADASYWAAAKPAA8AAMBPCAAABAhCBQAAAAASgMBAgBLAgHITAMBAwBNAgEAAQMACAEADQEAAAAjGRcCClwAXAADAVwaAAAKdgB2AAMBdiQAABAGARQAAIA/AAA6DgwBCpoAmgADAZoWAAAQKAcmAwACAwAvAgAAAAAtCQGwFAAAMAkBxBYAAC4JAdoVAAA0AgAAQkMAAB8ODAEK7wDvAAMB7yAAABANAicIAACAPygIAACAPwAAWBQSARD7DwEA+w8BAAUB+w8BHwAAEEAMJwgAAIA/MwIAAAAANAIAAAAAMgIAAAAAMQIAAAAANwIAAAAAOAIAAAAANgIAAAAANQIAAAAAAQMACAMADQEAAABVFBIBEPsuAQD7LgEABQH7LgEVAAAQPQonCAAAgD8sCAAAgD8zAgAAAAA0AgAAAAAyAgAAAAAxAgAAAAA3AgAAAAA4AgAAAAA2AgAAAAA1AgAAAAAAADcUEgEQ+0MBAPtDAQAFAftDARAAABAfBkUCAABAQUYCAABAQUcCAABAQUgCAABAQQMCAAQCAAAAPxQSARD7UwEA+1MBAAUB+1MBGAAAECcHJgMAMwIAADBCNAIAAABCMQIAAABCMgIAAABCJwgAAIA/DwAAAAAAACUUEgEQ+2sBAPtrAQAFAftrARYAABANAjQCAAAAADACAAAAAAEAHxQSARD7gQEA+4EBAAUB+4EBFQAAEAcBJwgAAIA/AQA6FBIBEPuWAQD7lgEABQH7lgEYAAAQIgYmAwAzAgAAwEE0AgAAwEExAgAAAAAyAgAAAAAnCAAAgD8BAA4BDAAACQEHAAAEAQICAA==")
        },
        13: (e, t, n) => {
          n(57).J.push("ATN0b2FzdC0tcm9vdHRvYXN0LS1jb250ZW50dG9hc3QtLWxvYWRpbmd0b2FzdC0tdGl0bGXLBCgODAEKAAAAAAMBAAsAABAWBScDAADIQigEAADIQgEDAAoCAA0BAAAAVQ4MAQoLAAsAAwELDgAAEEMMKAIAADBCMwIAAAAANAIAAAAAMgIAAKBBMQIAAKBBRQIAAABBRgIAAABBRwIAAABBSAIAAABBIgNMTEz/CgIAAQMAAAAlDgwBChkAGQADARkOAAAQEwMnAgAAgEEoAgAAgEE2AgAAgEAAACQODAEKJwAnAAMBJwwAABASAxRmZmY/FgIAAGBBEwP/////AAABAA==")
        },
        164: (e, t, n) => {
          n(57).J.push("AftGBHVzZXItcHJvZmlsZS0tcm9vdHVzZXItcHJvZmlsZS0taGlkZXVzZXItcHJvZmlsZS0tbWFza3VzZXItcHJvZmlsZS0tbWFzay1pbnVzZXItcHJvZmlsZS0tY29udGFpbmVydXNlci1wcm9maWxlLS1jb250ZW50dXNlci1wcm9maWxlLS1jb250ZW50LWludXNlci1wcm9maWxlLS1oZWFkdXNlci1wcm9maWxlLS1ib2R5dXNlci1wcm9maWxlLS1idXR0b25zdXNlci1wcm9maWxlLS1pY29udXNlci1wcm9maWxlLS10aXRsZXVzZXItcHJvZmlsZS0tYXBwbHktaW5mb3VzZXItcHJvZmlsZS0tc3BsaXQtbGluZXVzZXItcHJvZmlsZS0taW5mby1pdGVtLWFkZHVzZXItcHJvZmlsZS0taW5mby1pdGVtLWFkZF9fcGx1c3VzZXItcHJvZmlsZS0taW5mby1pdGVtLWFkZF9fdGV4dHVzZXItcHJvZmlsZS0taW5mby1pdGVtdXNlci1wcm9maWxlLS1pbmZvLWl0ZW1fX2xlZnR1c2VyLXByb2ZpbGUtLWluZm8taXRlbV9fYXZhdGFydXNlci1wcm9maWxlLS1pbmZvLWl0ZW1fX2Rlc2NfX3dycHVzZXItcHJvZmlsZS0taW5mby1pdGVtX19uaWNrbmFtZXVzZXItcHJvZmlsZS0taW5mby1pdGVtX19kZXNjdXNlci1wcm9maWxlLS1pbmZvLWl0ZW1fX3JpZ2h0dXNlci1wcm9maWxlLS1pY29uLWNoZWNrZWR1c2VyLXByb2ZpbGUtLWV4Y2VlZC10aXB1c2VyLXByb2ZpbGUtLXVzZS1vdGhlci1hdmF0YXJ1c2VyLXByb2ZpbGUtLWJ1dHRvbnVzZXItcHJvZmlsZS0tY2FuY2VsdXNlci1wcm9maWxlLS1jb25maXJtdXNlci1wcm9maWxlLS1leGNlZWQtdGlwdXNlci1wcm9maWxlLS1jb250YWluZXJ1c2VyLXByb2ZpbGUtLWNvbnRhaW5lcnVzZXItcHJvZmlsZS0taGVhZHVzZXItcHJvZmlsZS0tYnV0dG9uc3VzZXItcHJvZmlsZS0tY29udGVudHVzZXItcHJvZmlsZS0tdGl0bGV1c2VyLXByb2ZpbGUtLWluZm8taXRlbV9fbmlja25hbWV1c2VyLXByb2ZpbGUtLWluZm8taXRlbV9fZGVzY3VzZXItcHJvZmlsZS0taW5mby1pdGVtLWFkZF9fdGV4dHVzZXItcHJvZmlsZS0tYXBwbHktaW5mb3VzZXItcHJvZmlsZS0tdXNlLW90aGVyLWF2YXRhcnVzZXItcHJvZmlsZS0tY2FuY2VsdXNlci1wcm9maWxlLS1leGNlZWQtdGlwdXNlci1wcm9maWxlLS1zcGxpdC1saW5l+0kILTkODAEKAAAAAAMBABIAABAnCSgEAADIQicDAADIQgEDABYCAABgQQMCAAQCAAgDAAoCABUAQHpEAAAZDgwBChIAEgADARISAAAQBwEoAgAAAAAAADwODAEKJAAkAAMBJBIAABAqCCcIAACAPygIAACAPyIDAAAA/xQAAAAASgMBAgBLAgHITAMBAQBNAgEAAAAYDgwBCjYANgADATYVAAAQBgEUAAAAPwAAPQ4MAQpLAEsAAwFLFwAAECsHAwIABAIAKAgAAIA/AgMALQgAAAA/MAIAAEDBSQEMAQIIAAAAvwIAAAAAAAB/DgwBCmIAYgADAWIVAAAQbRUBAwAnCAAAgD8mAwAzAgAAAAA0AgAAAAAyAgAAwEExAgAAwEEIAwBKAwEBAEsCAchMAwEBAE0CAQA0AgAAQEFFAgAAQEFGAgAAQEFHAgAAQEFIAgAAQEEiA/////8CAwAvCAAAgD8tAgAAAAAAACIODAEKdwB3AAMBdxgAABAQAUkBDAECAgAAAAAIAACAvwAAKw4MAQqPAI8AAwGPEgAAEBkFNwIAAABCOAIAAIBBKAIAAMBBAQMACgIAAAAhDgwBCqEAoQADAaESAAAQDwMOAACAPwgDADQCAABCQwAARg4MAQqzALMAAwGzFQAAEDQLNQIAAMBBJwgAAIA/KAIAACBCAgMAMAIAAMRCLQIAAAAAFgIAAIhBGQIAAQMACAEADQEAAAA3DgwBCsgAyAADAcgSAAAQJQYnAgAAwEEoAgAAwEFFCAAAAD9GCAAAAD9HCAAAAD9ICAAAAD8AAD4ODAEK2gDaAAMB2hMAABAsCDUCAAAgQRRmZmY/EwMAAAD/FgIAAHBBGQIAKAIAAKhBFwIAAKhBDgAAgD8AAEUODAEK7QDtAAMB7RgAABAzCScIAACAPygCAABAQhRmZmY/FgIAAIhBEwMAAAD/GQIAFwJmZr5BNwIAAABBOAIAAIBBAAArFBIBEPsFAQD7BQEABQH7BQEYAAAQEwMnCAAAgD8oAgAAgD8iAwAAAA0AACUUEgEQ+x0BAPsdAQAFAfsdARsAABANAygCAACAQgEDAAoCAAAAMRQSARD7OAEA+zgBAAUB+zgBIQAAEBkEJwIAAMBBKAIAAMBBNQIAAABBNgIAAIBBAAA2FBIBEPtZAQD7WQEABQH7WQEhAAAQHgUOAACAPygCAADAQRcCAADAQRYCAACIQRMDAAAA5gAAKBQSARD7egEA+3oBAAUB+3oBFwAAEBAEKAIAAIBCAQMACgIADQQAAAAqFBIBEPuRAQD7kQEABQH7kQEdAAAQEgQoCAAAgD8BAwAKAgAOAACAPwAARhQSARD7rgEA+64BAAUB+64BHwAAEC4IAQUANgIAAABBJwIAACBCKAIAACBCRQIAAIBARgIAAIBARwIAAIBASAIAAIBAAAAtFBIBEPvNAQD7zQEABQH7zQEiAAAQFQUBAwAoCAAAgD8IAwANAQAOAACAPwAAMRQSARD77wEA++8BAAUB++8BIQAAEBkEKAIAAMBBFwIAAMBBEwMAAADmFgIAAIhBAAA8FBIBEPsQAgD7EAIABQH7EAIdAAAQJAY3AgAAAEAoAgAAoEEXAgAAoEEWAgAAYEETAwAAAP8UmpmZPgAAOhQSARD7LQIA+y0CAAUB+y0CHgAAECIIJwIAAMBBKAIAAMBBAwIABAIANgIAAABBAQMACgIADQEAAAAlFBIBEPtLAgD7SwIABQH7SwIaAAAQDQInAgAAwEEoAgAAwEEAAD0UEgEQ+2UCAPtlAgAFAftlAhgAABAlBicIAACAPygCAACgQRcCAACgQTcCAAAAQRYCAABgQRMDAAAATQAAPRQSARD7fQIA+30CAAUB+30CHgAAECUGJwgAAIA/KAIAAKBBFwIAAKBBNwIAAABBFgIAAGBBEwNZa5X/AABeFBIBEPubAgD7mwIABQH7mwIUAAAQRgwnAgAA8EIoAgAAIEIXAgAAIEIYAgA3AgAAAAA4AgAAAAA2AgAAAEE1AgAAAEFFAgAAgEBGAgAAgEBHAgAAgEBIAgAAgEAAACUUEgEQ+68CAPuvAgAFAfuvAhQAABANAiIDAAAADRMDB8Fg/wAAJRQSARD7wwIA+8MCAAUB+8MCFQAAEA0CIgMHwWD/EwP/////AAAfFBIBEPvYAgD72AIABQH72AIYAAAQBwETAwAAAE0AAB8UEgEQ+/ACAPvwAgAFAfvwAhcAABAHAScDAADIQgEAHxQSARD7BwMA+wcDAAUB+wcDFwAAEAcBJwQAAMhCAQEfFBIBEPseAwD7HgMABQH7HgMSAAAQBwE3AgAAwEEBAR8UEgEQ+zADAPswAwAFAfswAxUAABAHATACAABUQgEBHxQSARD7RQMA+0UDAAUB+0UDFQAAEAcBIgMeHh7/AQIkFBIBEPtaAwD7WgMABQH7WgMTAAAQDAIUzcxMPxMD/////wECHxQSARD7bQMA+20DAAUB+20DIQAAEAcBEwP////MAQIfFBIBEPuOAwD7jgMABQH7jgMdAAAQBwETA////00BAh8UEgEQ+6sDAPurAwAFAfurAyEAABAHARMD////zAECJBQSARD7zAMA+8wDAAUB+8wDGAAAEAwCFM3MTD8TA/////8BAh8UEgEQ++QDAPvkAwAFAfvkAx4AABAHARMDfZCp/wECJRQSARD7AgQA+wIEAAUB+wIEFAAAEA0CIgP///8UEwP/////AQIfFBIBEPsWBAD7FgQABQH7FgQYAAAQBwETA////00BAh8UEgEQ+y4EAPsuBAAFAfsuBBgAABAHASID////DQECKAMMAAAJAQcAAAQBAgEADAAACQEHAAAEAQICAAwAAAkBBwAABAEJAgA=")
        },
        300: (e, t, n) => {
          n(57).J.push("AUB2ZXJpZnktdGlwLS1yb290dmVyaWZ5LXRpcC0tY29udGVudHZlcmlmeS10aXAtLWNkdmVyaWZ5LXRpcC0tbXNnzAQfDgwBCgAAAAADAQAQAAAQDQInAwAAyEIoBAAAyEIAAEYODAEKEAAQAAMBEBMAABA0CRYCAAAwQRcCAACAQRMD/////0UCAAAgQUYCAAAgQUcCAAAgQUgCAAAgQSIDAAAAMwIDAAAAKw4MAQojACMAAwEjDgAAEBkGJwIAAKBCKAIAAKBBAQMACAEACgIADQEAAAA3DgwBCjEAMQADATEPAAAQJQYnAgAA8EIoAgAAIEIzAgAAQEA0AgAAQEAyAgAAwEAxAgAAwEAAAAEA")
        },
        605: (e, t, n) => {
          n(57).J.push("AfsMAndlcnVuLS1yb290d2VydW4tLW1hc2t3ZXJ1bi0tbWFzay1pbndlcnVuLS1jb250YWluZXJ3ZXJ1bi0tY29udGVudHdlcnVuLS1jb250ZW50LWlud2VydW4tLW5vdGUtY29udGVudHdlcnVuLS1ub3RlLWNvbnRlbnQtaW53ZXJ1bi0tbm90ZS1iYWNrd2VydW4tLW5vdGUtYmFjay13cnB3ZXJ1bi0tbm90ZS10aXRsZXdlcnVuLS1ub3RlLWRldGFpbHdlcnVuLS1ub3RlLWd1aWRld2VydW4tLW5vdGUtZ3VpZGUtd3JhcHdlcnVuLS1oZWFkd2VydW4tLXRpdGxld2VydW4tLWluZm93ZXJ1bi0taW5mby13cnB3ZXJ1bi0tYm9keXdlcnVuLS1zcG9ydC1saXN0d2VydW4tLXNwb3J0LWl0ZW13ZXJ1bi0tYnV0dG9uc3dlcnVuLS1idXR0b253ZXJ1bi0tY2FuY2Vsd2VydW4tLWNvbmZpcm13ZXJ1bi0tY29udGFpbmVyd2VydW4tLWNvbnRhaW5lcndlcnVuLS1jb250ZW50d2VydW4tLW5vdGUtY29udGVudHdlcnVuLS10aXRsZXdlcnVuLS1ub3RlLXRpdGxld2VydW4tLW5vdGUtZGV0YWlsd2VydW4tLXNwb3J0LWxpc3R3ZXJ1bi0tY2FuY2Vs+5sGIjkODAEKAAAAAAMBAAsAABAnCSgEAADIQicDAADIQgEDABYCAACAQQMCAAQCAAgDAAoCABUAQHpEAAA8DgwBCgsACwADAQsLAAAQKggnCAAAgD8oCAAAgD8iAwAAAP8UAAAAAEoDAQIASwIByEwDAQEATQIBAAAAGA4MAQoWABYAAwEWDgAAEAYBFM3MzD4AAD0ODAEKJAAkAAMBJBAAABArBwMCAAQCACgIAACAPwIDAC0IAAAAPzACAABAwUkBDAECCAAAAL8CAAAAAAAAZA4MAQo0ADQAAwE0DgAAEFIQAQMACAMASgMBAQBLAgHITAMBAQBNAgEAJwgAAIA/KAIAALNDRQIAAEBBRgIAAEBBRwIAAEBBSAIAAEBBIgP/////AgMALwgAAIA/LQIAAAAAAAAiDgwBCkIAQgADAUIRAAAQEAFJAQwBAgIAAAAACAAAgL8AAGQODAEKUwBTAAMBUxMAABBSEAIDADACAAAAAC0IAACAPycIAACAPygCAACpQyID/////0UCAABAQUYCAABAQUcCAABAQUgCAABAQQEDAAgDAEoDAQEASwIByEwDAQQATQIBAAAAIg4MAQpmAGYAAwFmFgAAEBABSQEMAQIIAACAvwIAAAAAAAAiDgwBCnwAfAADAXwQAAAQEAMBBQAnAgAAMEEoAgAAwEEAADcODAEKjACMAAMBjBQAABAlCAIDAC0CAAAAAC8CAAAAACcCAAAkQigCAACAQgEDAA0BAAoCAAAAPA4MAQqgAKAAAwGgEQAAECoIFGZmZj8WAgAAcEEnCAAAgD8oAgAAqEEXAgAAqEETAwAAAP8YAgAZAgAAAEkODAEKsQCxAAMBsRIAABA3CRYCAABgQSgCAAA4QjcCAABAQTYCAAAAADgCAACgQTUCAAAAADECAADAQTICAADAQRMDAAAA5gAAHw4MAQrDAMMAAwHDEQAAEA0CJwIAAIxDKAIAAOxCAAAlDgwBCtQA1AADAdQWAAAQEwQoAgAA7EInCAAAgD8BAwANAQAAAB8ODAEK6gDqAAMB6gsAABANAygCAACAQgEDAAoCAAAAPg4MAQr1APUAAwH1DAAAECwINQIAAMBBFGZmZj8TAwAAAP8WAgAAcEEZAgAoAgAAqEEXAgAAqEEOAACAPwAAKBQSARD7AQEA+wEBAAUB+wEBCwAAEBADAQUAJwIAAKBBKAIAAKBBAABSFBIBEPsMAQD7DAEABQH7DAEPAAAQOgsCAwAuAgAAAAAvAgAAAAAzAgAAIEE0AgAAIEEyAgAAIEExAgAAIEEnAgAAQEIoCAAAgD8BAwAKAgAAACEUEgEQ+xsBAPsbAQAFAfsbAQsAABAJAg4AAIA/CAMAAABDFBIBEPsmAQD7JgEABQH7JgERAAAQKwgBAwA3AgAAgEA2AgAAAAA4AgAAAAA1AgAAoEEIAwATAwAAAIAWAgAAYEEAACsUEgEQ+zcBAPs3AQAFAfs3AREAABATAzgCAAAAQSgCAACgQRcCAACgQQAARhQSARD7SAEA+0gBAAUB+0gBDgAAEC4KJwgAAIA/KAIAACBCAgMAMAIAAJxCLQIAAAAAFgIAAIhBGQIAAQMACAEADQEAAABeFBIBEPtWAQD7VgEABQH7VgENAAAQRgwnAgAA8EIoAgAAIEIXAgAAIEIYAgA3AgAAAAA4AgAAAAA2AgAAAEE1AgAAAEFFAgAAgEBGAgAAgEBHAgAAgEBIAgAAgEAAACUUEgEQ+2MBAPtjAQAFAftjAQ0AABANAiID8vLy/xMDB8Fg/wAAJRQSARD7cAEA+3ABAAUB+3ABDgAAEA0CIgMEwWD/EwP/////AAAfFBIBEPt+AQD7fgEABQH7fgEQAAAQBwEnAwAAyEIBAB8UEgEQ+44BAPuOAQAFAfuOARAAABAHAScEAADIQgEBHxQSARD7ngEA+54BAAUB+54BDgAAEAcBIgMsLCz/AQIfFBIBEPusAQD7rAEABQH7rAETAAAQBwEiAywsLP8BAiQUEgEQ+78BAPu/AQAFAfu/AQwAABAMAhTNzEw/EwP/////AQIkFBIBEPvLAQD7ywEABQH7ywERAAAQDAIUzcxMPxMD/////wECJBQSARD73AEA+9wBAAUB+9wBEgAAEAwCFM3MTD8TA/////8BAh8UEgEQ++4BAPvuAQAFAfvuAREAABAHARMD////gAECJRQSARD7/wEA+/8BAAUB+/8BDQAAEA0CIgP///8UEwP/////AQIoAwwAAAkBBwAABAECAQAMAAAJAQcAAAQBAgIADAAACQEHAAAEAQkCAA==")
        },
        730: (e, t, n) => {
          n(57).J.push("AYhfX3d4X3NjbF9fcm9vdF9ub2RlX193eF9zY2xfX2xheWVycm9vdHJvb3QtaW5jb250ZW50cm9vdGNvbnRlbnRjb250ZW50LWlucm9vdGNvbnRlbnRjb250ZW50LWludGl0bGVib2R5YnV0dG9uc2J1dHRvbm9rb2staG92ZXJkZW55LWhvdmVy+2MDEhkODAEKAAAAAAMBABMAABAHAScDAADIQgAAGA4MAQoTABMAAwETDwAAEAYBFQBAekQAAEUODAEKIgAiAAMBIgQAABAzCygEAADIQgEDACIDICAgvwMCAAQCABYCAACAQRTNzMw9SgMBAgBLAgHITAMBBABNAgEAAAAYDgwBCiYAJgADASYHAAAQBgEUAACAPwAAUg4MAQotAC0AAwEtBwAAEEAMIgP4+Pj/EwNERET/RQIAACBBRgIAACBBRwIAACBBSAIAACBBSgMBAQBLAgHITAMBBABNAgEANAIAACBBGAIAAAAWDgwBCjQANAADATQEAAAQBAEIBAABACgODAEKOAA4AAMBOAcAABAWAigCAACbQ0kBDAECAgAAAAACAACbQwEAIg4MAQo/AD8AAwE/CgAAEBABSQEMAQICAAAAAAIAACBBAQAWDgwBCkkASQADAUkEAAAQBAEIAgABAS4ODAEKTQBNAAMBTQcAABAcAygEAADIQicCAADNQ0kBDAECAgAAzUMCAAAAAAEBIg4MAQpUAFQAAwFUCgAAEBABSQEMAQICAAAgQQIAAAAAAQEiDgwBCl4AXgADAV4FAAAQEAMZAgAWBwAAwD8XBwAAAEAAADYODAEKYwBjAAMBYwQAABAkBg4AAIA/FgeamZk/NwIAAEhCOAIAAEhCNgIAAAAANQIAAAAAAAAoDgwBCmcAZwADAWcHAAAQFgUWB5qZmT8BAwAIAQANAQA0AgAASEIAAKMODAEKbgBuAAMBbgYAABCRGicCAADwQjMHAAAAPzQHAAAAPzIHzczMPTEHzczMPSID/////zcCAAAAADgCAAAAADYCAACgQTUCAACgQUUCAACAQEYCAACAQEcCAACAQEgCAACAQDkCAACAPzwCAACAPz8CAACAP0ICAACAPzoBAD0BAEABAEMBADsDzMzM/z4DzMzM/0EDzMzM/0QDzMzM/wAAVQ4MAQp0AHQAAwF0AgAAEEMNIgMA/9L/OQIAAIA/PAIAAIA/PwIAAIA/QgIAAIA/OgEAPQEAQAEAQwEAOwMAzKr/PgMAzKr/QQMAzKr/RAMAzKr/AAAZDgwBCnYAdgADAXYIAAAQBwEiAwDMqv8AABkODAEKfgB+AAMBfgoAABAHASIDzMzM/wAAGwIMAAAJAQcAAAQBAgEADAAACQEHAAAEAQICAA==")
        }
      },
      t = {};

    function n(r) {
      var i = t[r];
      if (void 0 !== i) return i.exports;
      var o = t[r] = {
        exports: {}
      };
      return e[r](o, o.exports, n), o.exports
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
    }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    };
    var r = {};
    (() => {
      "use strict";
      n.r(r), n.d(r, {
        exparser: () => e.exparser,
        getExparserElementByViewId: () => F,
        getMainRoot: () => M,
        initScl: () => N,
        onViewportResize: () => W,
        triggerRender: () => R
      });
      var e = n(821),
        t = (n(730), n(995));
      const i = [];
      e.onThemeChange((e => {
        i.forEach((t => t(e)))
      })), t.registerBehavior({
        is: "wx-theme",
        data: {
          theme: "light"
        },
        created() {
          this._onThemeChange({
            theme: e.getTheme()
          })
        },
        attached() {
          this.__onThemeChange = this._onThemeChange.bind(this), i.push(this.__onThemeChange)
        },
        detached() {
          i.splice(i.indexOf(this.__onThemeChange), 1)
        },
        methods: {
          _onThemeChange({
            theme: e
          }) {
            this.setData({
              theme: e
            })
          }
        }
      });
      var o = function (e) {
          return null == e ? Object.create(null) : e
        },
        a = function (e, t) {
          return !0 === e || (e ? e[t] : void 0)
        };
      n(668);
      e.exparser.registerElement({
        is: "mp-bubble-action-sheet",
        behaviors: ["wx-theme"],
        options: {
          multipleSlots: !0,
          classPrefix: "mp-bubble-action-sheet",
          writeIdToDOM: !0
        },
        template: {
          content: (s = {}, l = {
            P: "",
            C: [{
              T: "mp-half-screen-popup",
              A: {
                show: {
                  L: function (e, t, n) {
                    return e.show
                  },
                  F: function (e, t, n, r) {
                    return e.show
                  }
                },
                mask: {
                  L: function (e, t, n) {
                    return e.mask
                  },
                  F: function (e, t, n, r) {
                    return e.mask
                  }
                },
                "mask-closable": {
                  L: function (e, t, n) {
                    return e.maskClosable
                  },
                  F: function (e, t, n, r) {
                    return e.maskClosable
                  }
                },
                "bind:close": "handleClose",
                "bind:closed": "handleClosed"
              },
              C: [{
                T: "wx-view",
                A: {
                  class: "mask",
                  slot: "mask"
                },
                C: [{
                  V: 5,
                  N: "mask",
                  C: []
                }]
              }, {
                T: "wx-view",
                A: {
                  class: "content"
                },
                C: [{
                  T: "wx-view",
                  A: {
                    class: "menu"
                  },
                  C: [{
                    V: 1,
                    B: [{
                      B: {
                        L: function (e, t, n) {
                          return !!e.theme || void 0
                        },
                        F: function (e, t, n, r) {
                          return "light" === e.theme
                        }
                      },
                      C: [{
                        V: 2,
                        L: {
                          M: ["actions"],
                          L: function (e, t, n) {
                            return e.actions
                          },
                          F: function (e, t, n, r) {
                            return e.actions
                          }
                        },
                        K: "index",
                        C: [{
                          T: "wx-view",
                          A: {
                            class: "cell",
                            "hover-class": "cell__hover",
                            "data-index": {
                              L: function (e, t, n) {
                                return t[1]
                              },
                              F: function (e, t, n, r) {
                                return t[1]
                              }
                            },
                            "bind:tap": "buttonTap"
                          },
                          C: [{
                            T: "wx-view",
                            A: {
                              class: "cell-img-container"
                            },
                            C: [{
                              T: "wx-image",
                              A: {
                                class: "cell-img",
                                src: {
                                  L: function (e, t, n) {
                                    return a(t[0], "imageSrc")
                                  },
                                  F: function (e, t, n, r) {
                                    return o(t[0]).imageSrc
                                  }
                                }
                              },
                              C: []
                            }]
                          }, {
                            T: "wx-view",
                            A: {
                              class: "cell-desc"
                            },
                            C: [{
                              S: {
                                L: function (e, t, n) {
                                  return a(t[0], "text")
                                },
                                F: function (e, t, n, r) {
                                  return o(t[0]).text
                                }
                              }
                            }]
                          }]
                        }]
                      }]
                    }, {
                      B: {
                        L: function (e, t, n) {
                          return !!e.theme || void 0
                        },
                        F: function (e, t, n, r) {
                          return "dark" === e.theme
                        }
                      },
                      C: [{
                        V: 2,
                        L: {
                          M: ["actions"],
                          L: function (e, t, n) {
                            return e.actions
                          },
                          F: function (e, t, n, r) {
                            return e.actions
                          }
                        },
                        K: "index",
                        C: [{
                          T: "wx-view",
                          A: {
                            class: "cell",
                            "hover-class": "cell__hover",
                            "data-index": {
                              L: function (e, t, n) {
                                return t[1]
                              },
                              F: function (e, t, n, r) {
                                return t[1]
                              }
                            },
                            "bind:tap": "buttonTap"
                          },
                          C: [{
                            T: "wx-view",
                            A: {
                              class: "cell-img-container"
                            },
                            C: [{
                              T: "wx-image",
                              A: {
                                class: "cell-img",
                                src: {
                                  L: function (e, t, n) {
                                    return a(t[0], "imageDarkSrc")
                                  },
                                  F: function (e, t, n, r) {
                                    return o(t[0]).imageDarkSrc
                                  }
                                }
                              },
                              C: []
                            }]
                          }, {
                            T: "wx-view",
                            A: {
                              class: "cell-desc"
                            },
                            C: [{
                              S: {
                                L: function (e, t, n) {
                                  return a(t[0], "text")
                                },
                                F: function (e, t, n, r) {
                                  return o(t[0]).text
                                }
                              }
                            }]
                          }]
                        }]
                      }]
                    }]
                  }]
                }, {
                  T: "wx-view",
                  A: {
                    class: "foot"
                  },
                  C: [{
                    T: "wx-view",
                    A: {
                      class: "button",
                      "hover-class": "button__hover",
                      "bind:tap": "handleClose"
                    },
                    C: [{
                      T: "wx-view",
                      A: {
                        class: "button__before"
                      },
                      C: []
                    }, {
                      T: "wx-view",
                      A: {
                        class: "button__content"
                      },
                      C: [{
                        S: {
                          L: function (e, t, n) {
                            return e.cancelText
                          },
                          F: function (e, t, n, r) {
                            return e.cancelText
                          }
                        }
                      }]
                    }]
                  }]
                }]
              }]
            }],
            BM: {
              maskClosable: [
                [0, "mask-closable"]
              ],
              mask: [
                [0, "mask"]
              ],
              show: [
                [0, "show"]
              ],
              cancelText: [
                [0, 1, 1, 0, 1, 0]
              ]
            }
          }, s[""] = function () {
            return l
          }, function (e) {
            var t = s[e];
            return t ? t() : null
          })
        },
        properties: {
          maskClosable: {
            type: Boolean,
            value: !0
          },
          mask: {
            type: Boolean,
            value: !0
          },
          show: {
            type: Boolean,
            value: !1
          },
          cancelText: {
            type: String,
            value: "取消"
          },
          actions: {
            type: Array,
            value: []
          }
        },
        methods: {
          buttonTap(e) {
            const {
              index: t
            } = e.currentTarget.dataset;
            this.triggerEvent("buttontap", {
              index: t,
              item: this.data.actions[t]
            }, {})
          },
          handleClose() {
            this.triggerEvent("close", {}, {})
          },
          handleClosed() {
            this.triggerEvent("closed", {}, {})
          },
          stopEvent() {}
        }
      });
      var s, l;
      n(574);
      t.registerElement({
        is: "mp-dialog",
        options: {
          multipleSlots: !0,
          classPrefix: "mp-dialog",
          writeIdToDOM: !0
        },
        template: {
          content: function () {
            var e = {},
              t = {
                P: "",
                C: [{
                  T: "wx-view",
                  A: {
                    class: "root"
                  },
                  C: [{
                    V: 1,
                    B: [{
                      B: {
                        L: function (e, t, n) {
                          return e.mask
                        },
                        F: function (e, t, n, r) {
                          return e.mask
                        }
                      },
                      C: [{
                        T: "wx-view",
                        A: {
                          class: {
                            L: function (e, t, n) {
                              return !!e.show || void 0
                            }, F: function (e, t, n, r) {
                              return "mask " + (e.show ? "mask__in" : "")
                            }
                          },
                          "bind:tap": "handleClose"
                        },
                        C: []
                      }]
                    }]
                  }, {
                    T: "wx-view",
                    A: {
                      class: "container",
                      "bind:tap": "handleClose"
                    },
                    C: [{
                      T: "wx-view",
                      A: {
                        class: {
                          L: function (e, t, n) {
                            return !!e.show || void 0
                          }, F: function (e, t, n, r) {
                            return "content " + (e.show ? "content__in" : "")
                          }
                        },
                        "catch:tap": "stopEvent"
                      },
                      C: [{
                        T: "wx-view",
                        A: {
                          class: "head"
                        },
                        C: [{
                          T: "wx-view",
                          A: {
                            class: "title"
                          },
                          C: [{
                            V: 5,
                            N: "title",
                            C: []
                          }]
                        }]
                      }, {
                        T: "wx-view",
                        A: {
                          class: "body"
                        },
                        C: [{
                          V: 5,
                          N: "body",
                          C: []
                        }]
                      }, {
                        T: "wx-view",
                        A: {
                          class: "foot"
                        },
                        C: [{
                          V: 1,
                          B: [{
                            B: {
                              L: function (e, t, n) {
                                return !(!e.innerButtons && !a(e.innerButtons, "length")) || void 0
                              },
                              F: function (e, t, n, r) {
                                return e.innerButtons && o(e.innerButtons).length
                              }
                            },
                            C: [{
                              V: 2,
                              L: {
                                M: ["innerButtons"],
                                L: function (e, t, n) {
                                  return e.innerButtons
                                },
                                F: function (e, t, n, r) {
                                  return e.innerButtons
                                }
                              },
                              K: "index",
                              C: [{
                                T: "wx-view",
                                A: {
                                  class: {
                                    L: function (e, t, n) {
                                      return !!a(t[0], "className") || void 0
                                    }, F: function (e, t, n, r) {
                                      return "button " + o(t[0]).className
                                    }
                                  },
                                  "hover-class": "button__active",
                                  "data-index": {
                                    L: function (e, t, n) {
                                      return t[1]
                                    },
                                    F: function (e, t, n, r) {
                                      return t[1]
                                    }
                                  },
                                  "bind:tap": "buttonTap"
                                },
                                C: [{
                                  S: {
                                    L: function (e, t, n) {
                                      return !!a(t[0], "text") || void 0
                                    },
                                    F: function (e, t, n, r) {
                                      return "\n                  " + o(t[0]).text + "\n                  "
                                    }
                                  }
                                }, {
                                  V: 1,
                                  B: [{
                                    B: {
                                      L: function (e, t, n) {
                                        return !!t[1] || void 0
                                      },
                                      F: function (e, t, n, r) {
                                        return t[1] > 0
                                      }
                                    },
                                    C: [{
                                      T: "wx-view",
                                      A: {
                                        class: "button__after"
                                      },
                                      C: []
                                    }]
                                  }]
                                }]
                              }]
                            }]
                          }]
                        }, {
                          V: 5,
                          N: "footer",
                          C: []
                        }, {
                          T: "wx-view",
                          A: {
                            class: "foot__after"
                          },
                          C: []
                        }]
                      }]
                    }]
                  }]
                }],
                BM: {}
              };
            return e[""] = function () {
                return t
              },
              function (t) {
                var n = e[t];
                return n ? n() : null
              }
          }()
        },
        properties: {
          title: {
            type: String,
            value: ""
          },
          maskClosable: {
            type: Boolean,
            value: !0
          },
          mask: {
            type: Boolean,
            value: !0
          },
          show: {
            type: Boolean,
            value: !1
          },
          buttons: {
            type: Array,
            value: []
          }
        },
        data: {
          innerButtons: []
        },
        attached() {
          this.attached = !0
        },
        observers: {
          buttons(e) {
            const t = e.length;
            this.setData({
              innerButtons: e.map(((e, n) => {
                const r = e.type || (t >= 1 && 0 === n ? "default" : "primary");
                return {
                  className: (e.className || "") + " button__" + r,
                  text: e.text
                }
              }))
            })
          },
          show(e) {
            this.attached && (clearTimeout(this.closeTimeout), clearTimeout(this.showTimeout), e ? this.showTimeout = setTimeout((() => {
              this.triggerEvent("showed", {}, {})
            }), 200) : this.closeTimeout = setTimeout((() => {
              this.triggerEvent("closed", {}, {})
            }), 200))
          }
        },
        methods: {
          buttonTap(e) {
            const {
              index: t
            } = e.currentTarget.dataset;
            this.triggerEvent("buttontap", {
              index: t,
              item: this.data.buttons[t]
            }, {})
          },
          handleClose() {
            this.data.maskClosable && this.triggerEvent("close", {}, {})
          },
          stopEvent() {}
        }
      });
      n(81);
      t.registerElement({
        is: "mp-half-screen-dialog",
        options: {
          multipleSlots: !0,
          classPrefix: "mp-half-screen-dialog",
          writeIdToDOM: !0
        },
        template: {
          content: function () {
            var e = {},
              t = {
                P: "",
                C: [{
                  T: "mp-half-screen-popup",
                  A: {
                    show: {
                      L: function (e, t, n) {
                        return e.show
                      },
                      F: function (e, t, n, r) {
                        return e.show
                      }
                    },
                    mask: {
                      L: function (e, t, n) {
                        return e.mask
                      },
                      F: function (e, t, n, r) {
                        return e.mask
                      }
                    },
                    "mask-closable": {
                      L: function (e, t, n) {
                        return e.maskClosable
                      },
                      F: function (e, t, n, r) {
                        return e.maskClosable
                      }
                    },
                    "bind:close": "handleClose",
                    "bind:closed": "handleClosed"
                  },
                  C: [{
                    T: "wx-view",
                    A: {
                      class: "content"
                    },
                    C: [{
                      T: "wx-view",
                      A: {
                        class: "head"
                      },
                      C: [{
                        T: "wx-view",
                        A: {
                          class: "title"
                        },
                        C: [{
                          V: 5,
                          N: "title",
                          C: []
                        }]
                      }]
                    }, {
                      T: "wx-view",
                      A: {
                        class: "body"
                      },
                      C: [{
                        V: 5,
                        N: "body",
                        C: []
                      }]
                    }, {
                      T: "wx-view",
                      A: {
                        class: "foot"
                      },
                      C: [{
                        V: 1,
                        B: [{
                          B: {
                            L: function (e, t, n) {
                              return !(!e.innerButtons && !a(e.innerButtons, "length")) || void 0
                            },
                            F: function (e, t, n, r) {
                              return e.innerButtons && o(e.innerButtons).length
                            }
                          },
                          C: [{
                            V: 2,
                            L: {
                              M: ["innerButtons"],
                              L: function (e, t, n) {
                                return e.innerButtons
                              },
                              F: function (e, t, n, r) {
                                return e.innerButtons
                              }
                            },
                            K: "index",
                            C: [{
                              T: "wx-view",
                              A: {
                                class: {
                                  L: function (e, t, n) {
                                    return !!a(t[0], "className") || void 0
                                  }, F: function (e, t, n, r) {
                                    return "button " + o(t[0]).className
                                  }
                                },
                                "hover-class": "button__active",
                                "data-index": {
                                  L: function (e, t, n) {
                                    return t[1]
                                  },
                                  F: function (e, t, n, r) {
                                    return t[1]
                                  }
                                },
                                "bind:tap": "buttonTap"
                              },
                              C: [{
                                S: {
                                  L: function (e, t, n) {
                                    return !!a(t[0], "text") || void 0
                                  },
                                  F: function (e, t, n, r) {
                                    return "\n                " + o(t[0]).text + "\n              "
                                  }
                                }
                              }]
                            }]
                          }]
                        }]
                      }, {
                        V: 5,
                        N: "footer",
                        C: []
                      }]
                    }]
                  }]
                }],
                BM: {
                  maskClosable: [
                    [0, "mask-closable"]
                  ],
                  mask: [
                    [0, "mask"]
                  ],
                  show: [
                    [0, "show"]
                  ]
                }
              };
            return e[""] = function () {
                return t
              },
              function (t) {
                var n = e[t];
                return n ? n() : null
              }
          }()
        },
        properties: {
          title: {
            type: String,
            value: ""
          },
          maskClosable: {
            type: Boolean,
            value: !0
          },
          mask: {
            type: Boolean,
            value: !0
          },
          show: {
            type: Boolean,
            value: !1
          },
          buttons: {
            type: Array,
            value: []
          }
        },
        data: {
          innerShow: !1,
          innerButtons: []
        },
        observers: {
          buttons(e) {
            const t = e.length;
            this.setData({
              innerButtons: e.map(((e, n) => {
                const r = e.type || (t >= 1 && 0 === n ? "default" : "primary");
                return {
                  className: (e.className || "") + " button__" + r,
                  text: e.text
                }
              }))
            })
          }
        },
        methods: {
          buttonTap(e) {
            const {
              index: t
            } = e.currentTarget.dataset;
            this.triggerEvent("buttontap", {
              index: t,
              item: this.data.buttons[t]
            }, {})
          },
          handleClose() {
            this.triggerEvent("close", {}, {})
          },
          handleClosed() {
            this.triggerEvent("closed", {}, {})
          },
          stopEvent() {}
        }
      });
      n(741);
      t.registerElement({
        is: "mp-half-screen-popup",
        options: {
          multipleSlots: !0,
          classPrefix: "mp-half-screen-popup",
          writeIdToDOM: !0
        },
        template: {
          content: function () {
            var e = {},
              t = {
                P: "",
                C: [{
                  T: "wx-view",
                  A: {
                    class: "root"
                  },
                  C: [{
                    V: 1,
                    B: [{
                      B: {
                        L: function (e, t, n) {
                          return e.mask
                        },
                        F: function (e, t, n, r) {
                          return e.mask
                        }
                      },
                      C: [{
                        T: "wx-view",
                        A: {
                          class: {
                            L: function (e, t, n) {
                              return !!e.show || void 0
                            }, F: function (e, t, n, r) {
                              return "mask " + (e.show ? "mask__in" : "")
                            }
                          },
                          "bind:tap": "handleClose"
                        },
                        C: []
                      }]
                    }]
                  }, {
                    V: 5,
                    N: "mask",
                    C: []
                  }, {
                    T: "wx-view",
                    A: {
                      class: {
                        L: function (e, t, n) {
                          return !!e.show || void 0
                        }, F: function (e, t, n, r) {
                          return "container " + (e.show ? "container__in" : "")
                        }
                      },
                      "bind:tap": "handleClose"
                    },
                    C: [{
                      T: "wx-view",
                      A: {
                        class: "content",
                        "catch:tap": "stopEvent"
                      },
                      C: [{
                        V: 5,
                        N: "",
                        C: []
                      }]
                    }]
                  }]
                }],
                BM: {}
              };
            return e[""] = function () {
                return t
              },
              function (t) {
                var n = e[t];
                return n ? n() : null
              }
          }()
        },
        properties: {
          maskClosable: {
            type: Boolean,
            value: !0
          },
          mask: {
            type: Boolean,
            value: !0
          },
          show: {
            type: Boolean,
            value: !1
          }
        },
        attached() {
          this.attached = !0
        },
        observers: {
          show(e) {
            this.attached && (clearTimeout(this.closeTimeout), clearTimeout(this.showTimeout), e ? this.showTimeout = setTimeout((() => {
              this.triggerEvent("showed", {}, {})
            }), 200) : this.closeTimeout = setTimeout((() => {
              this.triggerEvent("closed", {}, {})
            }), 200))
          }
        },
        methods: {
          handleClose() {
            this.data.maskClosable && this.triggerEvent("close", {}, {})
          },
          stopEvent() {}
        }
      });
      n(161);
      t.registerElement({
        is: "mp-horizonal-bubble",
        options: {
          multipleSlots: !0,
          classPrefix: "mp-horizonal-bubble",
          writeIdToDOM: !0
        },
        template: {
          content: function () {
            var e = {},
              t = {
                P: "",
                C: [{
                  T: "wx-view",
                  A: {
                    class: "root"
                  },
                  C: [{
                    V: 1,
                    B: [{
                      B: {
                        L: function (e, t, n) {
                          return e.mask
                        },
                        F: function (e, t, n, r) {
                          return e.mask
                        }
                      },
                      C: [{
                        T: "wx-view",
                        A: {
                          class: {
                            L: function (e, t, n) {
                              return !!e.show || void 0
                            }, F: function (e, t, n, r) {
                              return "mask " + (e.show ? "mask__in" : "")
                            }
                          }
                        },
                        C: []
                      }]
                    }]
                  }, {
                    T: "wx-view",
                    A: {
                      class: "content"
                    },
                    C: [{
                      T: "wx-view",
                      A: {
                        class: {
                          L: function (e, t, n) {
                            return !!e.show || void 0
                          }, F: function (e, t, n, r) {
                            return "close-container " + (e.show ? "close-container__in" : "")
                          }
                        }
                      },
                      C: [{
                        T: "wx-view",
                        A: {
                          class: "close-btn",
                          "hover-class": "close-btn__hover",
                          "bind:tap": "handleClose"
                        },
                        C: [{
                          T: "wx-image",
                          A: {
                            class: "close-btn-img",
                            src: {
                              L: function (e, t, n) {
                                return e.closeBtn
                              },
                              F: function (e, t, n, r) {
                                return e.closeBtn
                              }
                            }
                          },
                          C: []
                        }]
                      }]
                    }, {
                      T: "wx-view",
                      A: {
                        class: "content-container"
                      },
                      C: [{
                        V: 5,
                        N: "content",
                        C: []
                      }]
                    }, {
                      T: "wx-view",
                      A: {
                        class: {
                          L: function (e, t, n) {
                            return !!e.show || void 0
                          }, F: function (e, t, n, r) {
                            return "menu-container " + (e.show ? "menu-container__in" : "")
                          }
                        }
                      },
                      C: [{
                        T: "wx-view",
                        A: {
                          class: "menu"
                        },
                        C: [{
                          T: "wx-view",
                          A: {
                            class: "menu-before"
                          },
                          C: []
                        }, {
                          T: "wx-view",
                          A: {
                            class: "menu-inner"
                          },
                          C: [{
                            V: 2,
                            L: {
                              M: ["actions"],
                              L: function (e, t, n) {
                                return e.actions
                              },
                              F: function (e, t, n, r) {
                                return e.actions
                              }
                            },
                            K: "index",
                            C: [{
                              T: "wx-view",
                              A: {
                                class: "cell",
                                "hover-class": "cell__hover",
                                "data-index": {
                                  L: function (e, t, n) {
                                    return t[1]
                                  },
                                  F: function (e, t, n, r) {
                                    return t[1]
                                  }
                                },
                                "bind:tap": "buttonTap"
                              },
                              C: [{
                                T: "wx-view",
                                A: {
                                  class: "cell-img-container"
                                },
                                C: [{
                                  T: "wx-image",
                                  A: {
                                    class: "cell-img",
                                    src: {
                                      L: function (e, t, n) {
                                        return a(t[0], "imageDarkSrc")
                                      },
                                      F: function (e, t, n, r) {
                                        return o(t[0]).imageDarkSrc
                                      }
                                    }
                                  },
                                  C: []
                                }]
                              }, {
                                T: "wx-view",
                                A: {
                                  class: "cell-desc"
                                },
                                C: [{
                                  S: {
                                    L: function (e, t, n) {
                                      return a(t[0], "text")
                                    },
                                    F: function (e, t, n, r) {
                                      return o(t[0]).text
                                    }
                                  }
                                }]
                              }]
                            }]
                          }]
                        }, {
                          T: "wx-view",
                          A: {
                            class: "menu-after"
                          },
                          C: []
                        }]
                      }]
                    }]
                  }]
                }],
                BM: {
                  closeBtn: [
                    [0, 1, 0, 0, 0, "src"]
                  ]
                }
              };
            return e[""] = function () {
                return t
              },
              function (t) {
                var n = e[t];
                return n ? n() : null
              }
          }()
        },
        properties: {
          maskClosable: {
            type: Boolean,
            value: !0
          },
          mask: {
            type: Boolean,
            value: !0
          },
          show: {
            type: Boolean,
            value: !1
          },
          cancelText: {
            type: String,
            value: "取消"
          },
          actions: {
            type: Array,
            value: []
          }
        },
        attached() {
          this.attached = !0, t.triggerRender((() => {
            this.setData({
              closeBtn: "https://res.wx.qq.com/op_res/hlMx1wXYJya8ib3DpW10m6aLCGf7RoluABX1QvNEAxVIyhhGuY0iI62dzv56y5rq9nBrd-H44CqoH5dM9JTr0g"
            })
          }))
        },
        observers: {
          show(e) {
            this.attached && (clearTimeout(this.closeTimeout), clearTimeout(this.showTimeout), e ? this.showTimeout = setTimeout((() => {
              this.triggerEvent("showed", {}, {})
            }), 200) : this.closeTimeout = setTimeout((() => {
              this.triggerEvent("closed", {}, {})
            }), 200))
          }
        },
        methods: {
          buttonTap(e) {
            const {
              index: t
            } = e.currentTarget.dataset;
            this.triggerEvent("buttontap", {
              index: t,
              item: this.data.actions[t]
            }, {})
          },
          handleClose() {
            this.triggerEvent("close", {}, {})
          },
          stopEvent() {}
        }
      }), t.registerElement({
        is: "wx-view",
        template: {
          content: function () {
            var e = {},
              t = {
                P: "",
                C: [{
                  V: 5,
                  N: "",
                  C: []
                }],
                BM: {}
              };
            return e[""] = function () {
                return t
              },
              function (t) {
                var n = e[t];
                return n ? n() : null
              }
          }()
        },
        properties: {
          hoverClass: String
        },
        listeners: {
          "this.touchstart": function () {
            this.hoverStart()
          },
          "this.touchend": function () {
            this.hoverEnd()
          },
          "this.canceltap": function () {
            this.hoverEnd()
          }
        },
        methods: {
          hoverStart() {
            this.data.hoverClass && (this.classList.toggle(this.data.hoverClass, !0), t.triggerRender())
          },
          hoverEnd() {
            this.data.hoverClass && (this.classList.toggle(this.data.hoverClass, !1), t.triggerRender())
          }
        }
      }), t.registerElement({
        is: "wx-image",
        template: {
          content: function () {
            var e = {},
              t = {
                P: "",
                C: [{
                  T: "image",
                  A: {
                    src: {
                      L: function (e, t, n) {
                        return e.src
                      },
                      F: function (e, t, n, r) {
                        return e.src
                      }
                    },
                    style: "width: 100%; height: 100%;"
                  },
                  C: []
                }],
                BM: {
                  src: [
                    [0, "src"]
                  ]
                }
              };
            return e[""] = function () {
                return t
              },
              function (t) {
                var n = e[t];
                return n ? n() : null
              }
          }()
        },
        properties: {
          src: {
            type: String,
            public: !0
          }
        }
      }), t.registerElement({
        is: "wx-adaptive-image",
        template: {
          content: function () {
            var e = {},
              t = {
                P: "",
                C: [{
                  T: "wx-view",
                  A: {
                    id: "wrapper",
                    style: "width: 100%; height: 100%; display: flex; flex-direction: column; flex-shrink: 0; align-items: center;"
                  },
                  C: [{
                    T: "image",
                    A: {
                      src: {
                        L: function (e, t, n) {
                          return e.src
                        },
                        F: function (e, t, n, r) {
                          return e.src
                        }
                      },
                      style: {
                        L: function (e, t, n) {
                          return !(!e.imgStyleWidth && !e.imgStyleHeight) || void 0
                        },
                        F: function (e, t, n, r) {
                          return "width: " + e.imgStyleWidth + "px; height: " + e.imgStyleHeight + "px;"
                        }
                      }
                    },
                    C: []
                  }]
                }],
                BM: {
                  src: [
                    [0, 0, "src"]
                  ],
                  imgStyleHeight: [
                    [0, 0, "style"]
                  ],
                  imgStyleWidth: [
                    [0, 0, "style"]
                  ]
                }
              };
            return e[""] = function () {
                return t
              },
              function (t) {
                var n = e[t];
                return n ? n() : null
              }
          }()
        },
        properties: {
          src: {
            type: String,
            public: !0
          },
          srcWidth: {
            type: Number,
            public: !0,
            value: 0,
            observer: "_onSrcSizeChange"
          },
          srcHeight: {
            type: Number,
            public: !0,
            value: 0,
            observer: "_onSrcSizeChange"
          }
        },
        data: {
          imgStyleWidth: 0,
          imgStyleHeight: 0
        },
        attached() {
          this.attached = !0, this._onSrcSizeChange()
        },
        detached() {
          this.attached = !1
        },
        methods: {
          _onSrcSizeChange() {
            if (!this.attached) return;
            const e = this.$$.getBoundingClientRect(),
              t = Math.min(e.width, this.data.srcWidth),
              n = t * this.data.srcHeight / this.data.srcWidth;
            this.setData({
              imgStyleWidth: t,
              imgStyleHeight: n
            })
          }
        }
      }), t.registerElement({
        is: "wx-scroll-view",
        template: {
          content: function () {
            var e = {},
              t = {
                P: "",
                C: [{
                  T: "scrollview",
                  A: {
                    "scroll-x": {
                      L: function (e, t, n) {
                        return !!e.scrollX || void 0
                      },
                      F: function (e, t, n, r) {
                        return e.scrollX ? "1" : ""
                      }
                    },
                    "scroll-y": {
                      L: function (e, t, n) {
                        return !!e.scrollY || void 0
                      },
                      F: function (e, t, n, r) {
                        return e.scrollY ? "1" : ""
                      }
                    },
                    style: "width: 100%; height: 100%"
                  },
                  C: [{
                    T: "view",
                    A: {},
                    C: [{
                      V: 5,
                      N: "",
                      C: []
                    }]
                  }]
                }],
                BM: {
                  scrollX: [
                    [0, "scroll-x"]
                  ],
                  scrollY: [
                    [0, "scroll-y"]
                  ]
                }
              };
            return e[""] = function () {
                return t
              },
              function (t) {
                var n = e[t];
                return n ? n() : null
              }
          }()
        },
        properties: {
          scrollX: {
            type: Boolean,
            public: !0,
            value: !1
          },
          scrollY: {
            type: Boolean,
            public: !0,
            value: !1
          }
        }
      }), t.registerElement({
        is: "example",
        template: {
          content: function () {
            var e = {},
              t = {
                P: "",
                C: [{
                  V: 1,
                  B: [{
                    B: {
                      L: function (e, t, n) {
                        return !!e.hidden || void 0
                      },
                      F: function (e, t, n, r) {
                        return !e.hidden
                      }
                    },
                    C: [{
                      T: "wx-view",
                      A: {
                        class: {
                          L: function (e, t, n) {
                            return !!e.contentIn || void 0
                          }, F: function (e, t, n, r) {
                            return "root " + (e.contentIn ? "root-in" : "")
                          }
                        }
                      },
                      C: [{
                        T: "wx-view",
                        A: {
                          class: {
                            L: function (e, t, n) {
                              return !!e.contentIn || void 0
                            }, F: function (e, t, n, r) {
                              return "content " + (e.contentIn ? "content-in" : "")
                            }
                          }
                        },
                        C: [{
                          T: "wx-view",
                          A: {
                            class: "title"
                          },
                          C: [{
                            S: "\n          弹框标题\n        "
                          }]
                        }, {
                          T: "wx-view",
                          A: {
                            class: "body"
                          },
                          C: [{
                            S: "\n          小程序需要访问你的用户信息\n        "
                          }]
                        }, {
                          T: "wx-view",
                          A: {
                            class: "buttons"
                          },
                          C: [{
                            T: "wx-view",
                            A: {
                              class: "button ok",
                              "hover-class": "ok-hover",
                              "bind:tap": "hide"
                            },
                            C: [{
                              S: "允许"
                            }]
                          }, {
                            T: "wx-view",
                            A: {
                              class: "button deny",
                              "hover-class": "deny-hover",
                              "bind:tap": "hide"
                            },
                            C: [{
                              S: "拒绝"
                            }]
                          }]
                        }]
                      }]
                    }]
                  }]
                }],
                BM: {}
              };
            return e[""] = function () {
                return t
              },
              function (t) {
                var n = e[t];
                return n ? n() : null
              }
          }()
        },
        attached() {
          t.triggerRender((() => {
            this.setData({
              contentIn: !0
            })
          }))
        },
        methods: {
          hide() {
            this.triggerEvent("destroy")
          }
        }
      }), t.registerElement({
        is: "drag",
        template: {
          content: function () {
            var e = {},
              t = {
                P: "",
                C: [{
                  T: "view",
                  A: {
                    id: "inner",
                    draggable: "1",
                    class: "button ok",
                    "bind:tap": "hide",
                    "bind:dragstart": "dragStart",
                    "bind:dragmove": "dragMove",
                    "bind:dragend": "dragEnd",
                    style: {
                      L: function (e, t, n) {
                        return !(!e.dx && !e.dy) || void 0
                      },
                      F: function (e, t, n, r) {
                        return "width: 200px; height: 100px; padding: 20px; -wx-engine-touch-event: none; transform: translate(" + e.dx + "px, " + e.dy + "px)"
                      }
                    }
                  },
                  C: [{
                    T: "view",
                    A: {
                      "bind:touchstart": "hoverStart",
                      "bind:touchend": "hoverEnd",
                      style: "background: yellow; width: 150px; height: 40px;"
                    },
                    C: [{
                      S: "\n        可拖动按钮\n      "
                    }]
                  }]
                }],
                BM: {
                  dx: [
                    [0, "style"]
                  ],
                  dy: [
                    [0, "style"]
                  ]
                }
              };
            return e[""] = function () {
                return t
              },
              function (t) {
                var n = e[t];
                return n ? n() : null
              }
          }()
        },
        attached() {},
        data: {
          dx: 0,
          dy: 0
        },
        methods: {
          hide() {
            this.triggerEvent("destroy")
          },
          dragStart() {
            console.warn("dragStart")
          },
          dragMove() {
            console.warn("dragMove")
          },
          dragEnd(e) {
            console.warn("dragEnd"), this.setData({
              dx: e.detail.draggedLeft - e.detail.originalLeft,
              dy: e.detail.draggedTop - e.detail.originalTop
            })
          },
          hoverStart() {
            console.warn("hoverStart"), this.$.inner.classList.toggle("ok-hover", !0), t.triggerRender()
          },
          hoverEnd() {
            console.warn("hoverEnd"), this.$.inner.classList.toggle("ok-hover", !1), t.triggerRender()
          }
        }
      }), t.registerElement({
        is: "scroll",
        template: {
          content: function () {
            var e = {},
              t = {
                P: "",
                C: [{
                  T: "scrollview",
                  A: {
                    "scroll-y": "1",
                    style: "height: 200px; width: 50%; background: yellow"
                  },
                  C: [{
                    T: "wx-view",
                    A: {},
                    C: [{
                      V: 2,
                      L: {
                        M: ["list"],
                        L: function (e, t, n) {
                          return e.list
                        },
                        F: function (e, t, n, r) {
                          return e.list
                        }
                      },
                      K: null,
                      C: [{
                        T: "wx-view",
                        A: {
                          style: "height: 40px; background: rgba(0, 255, 0, 0.1)"
                        },
                        C: [{
                          S: {
                            L: function (e, t, n) {
                              return !!t[1] || void 0
                            },
                            F: function (e, t, n, r) {
                              return "AAA " + t[1]
                            }
                          }
                        }]
                      }]
                    }]
                  }]
                }],
                BM: {}
              };
            return e[""] = function () {
                return t
              },
              function (t) {
                var n = e[t];
                return n ? n() : null
              }
          }()
        },
        data: {
          list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        attached() {},
        methods: {
          hide() {
            this.triggerEvent("destroy")
          }
        }
      });
      const c = t.registerElement({
          template: {
            content: function () {
              var e = {},
                t = {
                  P: "",
                  C: [{
                    V: 5,
                    N: "",
                    C: []
                  }],
                  BM: {}
                };
              return e[""] = function () {
                  return t
                },
                function (t) {
                  var n = e[t];
                  return n ? n() : null
                }
            }()
          },
          methods: {
            append(e, n) {
              const r = this.shadowRoot.createComponent(e);
              return r.classList.toggle("__wx_scl__layer", !0), r.addListener("destroy", (e => {
                e.target === r && this.remove(r)
              })), n && r.setData(n), this.shadowRoot.appendChild(r), t.triggerRender(), r
            },
            remove(e) {
              e.is, this.shadowRoot.removeChild(e)
            }
          }
        }),
        A = BabelRuntimeHelpers.objectSpread2;
      var u = n.n(A);
      n(605);
      const f = "http://mmbiz.qpic.cn/sz_mmbiz_png/icTdbqWNOwNTztib4GFrge85XvmH8WVOMFSnFBqI0TCnqPr9BWu0PoOWibkNvL6TVxte3E8icyiaVGJqkWEGytEVb9A/0?wx_fmt=png",
        d = "http://mmbiz.qpic.cn/sz_mmbiz_jpg/icTdbqWNOwNTztib4GFrge85XvmH8WVOMFiawcLL2BcFTKggEbIdxtwdK6pmOgfVhErWicRib2huw7Z5zadjVtJVQJQ/0?wx_fmt=jpeg",
        p = "http://mmbiz.qpic.cn/sz_mmbiz_png/icTdbqWNOwNTztib4GFrge85XvmH8WVOMFLT4OSfr939t6n2t2uLIvhprQIEsnS4F73XToyIDQYaKCmw4tAv212w/0?wx_fmt=png";
      t.registerElement({
        is: "werun",
        options: {
          classPrefix: "werun",
          writeIdToDOM: !0
        },
        template: {
          content: function () {
            var e = {},
              t = {
                P: "",
                C: [{
                  T: "wx-view",
                  A: {
                    class: "root"
                  },
                  C: [{
                    T: "wx-view",
                    A: {
                      class: {
                        L: function (e, t, n) {
                          return !!e.enter || void 0
                        }, F: function (e, t, n, r) {
                          return "mask " + (e.enter ? "mask-in" : "")
                        }
                      }
                    },
                    C: []
                  }, {
                    T: "wx-view",
                    A: {
                      class: "container"
                    },
                    C: [{
                      T: "wx-view",
                      A: {
                        class: {
                          L: function (e, t, n) {
                            return !!e.enter || void 0
                          }, F: function (e, t, n, r) {
                            return "content " + (e.enter ? "content-in" : "")
                          }
                        },
                        style: {
                          L: function (e, t, n) {
                            return !!e.contentHeight || void 0
                          },
                          F: function (e, t, n, r) {
                            return "height: " + e.contentHeight + "px"
                          }
                        }
                      },
                      C: [{
                        T: "wx-view",
                        A: {
                          class: "head"
                        },
                        C: [{
                          T: "wx-view",
                          A: {
                            class: "title"
                          },
                          C: [{
                            S: {
                              L: function (e, t, n) {
                                return e.title
                              },
                              F: function (e, t, n, r) {
                                return e.title
                              }
                            }
                          }]
                        }, {
                          T: "wx-view",
                          A: {
                            class: "info-wrp",
                            "bind:tap": "showNote"
                          },
                          C: [{
                            T: "wx-image",
                            A: {
                              class: "info",
                              src: {
                                L: function (e, t, n) {
                                  return e.iconInfo
                                },
                                F: function (e, t, n, r) {
                                  return e.iconInfo
                                }
                              }
                            },
                            C: []
                          }]
                        }]
                      }, {
                        T: "wx-view",
                        A: {
                          class: "body"
                        },
                        C: [{
                          T: "wx-view",
                          A: {
                            class: "sport-list"
                          },
                          C: [{
                            V: 2,
                            L: {
                              M: ["sport_name"],
                              L: function (e, t, n) {
                                return e.sport_name
                              },
                              F: function (e, t, n, r) {
                                return e.sport_name
                              }
                            },
                            K: null,
                            C: [{
                              T: "wx-view",
                              A: {
                                class: "sport-item"
                              },
                              C: [{
                                S: {
                                  L: function (e, t, n) {
                                    return !!t[0] || void 0
                                  },
                                  F: function (e, t, n, r) {
                                    return "・ " + t[0]
                                  }
                                }
                              }]
                            }]
                          }]
                        }]
                      }, {
                        T: "wx-view",
                        A: {
                          class: "buttons"
                        },
                        C: [{
                          T: "wx-view",
                          A: {
                            class: "button cancel",
                            "bind:tap": "handleCancel"
                          },
                          C: [{
                            S: "取消"
                          }]
                        }, {
                          T: "wx-view",
                          A: {
                            class: "button confirm",
                            "bind:tap": "handleConfirm"
                          },
                          C: [{
                            S: "确定"
                          }]
                        }]
                      }]
                    }, {
                      T: "wx-view",
                      A: {
                        class: {
                          L: function (e, t, n) {
                            return !!e.noteEnter || void 0
                          }, F: function (e, t, n, r) {
                            return "note-content " + (e.noteEnter ? "note-content-in" : "")
                          }
                        },
                        style: {
                          L: function (e, t, n) {
                            return !!e.noteContentHeight || void 0
                          },
                          F: function (e, t, n, r) {
                            return "height: " + e.noteContentHeight + "px"
                          }
                        }
                      },
                      C: [{
                        T: "wx-view",
                        A: {
                          class: "head"
                        },
                        C: [{
                          T: "wx-view",
                          A: {
                            class: "note-title"
                          },
                          C: [{
                            S: {
                              L: function (e, t, n) {
                                return e.note_title
                              },
                              F: function (e, t, n, r) {
                                return e.note_title
                              }
                            }
                          }]
                        }, {
                          T: "wx-view",
                          A: {
                            class: "note-back-wrp",
                            "bind:tap": "hideNote"
                          },
                          C: [{
                            T: "wx-image",
                            A: {
                              class: "note-back",
                              src: {
                                L: function (e, t, n) {
                                  return e.iconBack
                                },
                                F: function (e, t, n, r) {
                                  return e.iconBack
                                }
                              }
                            },
                            C: []
                          }]
                        }]
                      }, {
                        T: "wx-view",
                        A: {
                          class: "body"
                        },
                        C: [{
                          T: "wx-view",
                          A: {
                            class: "note-detail"
                          },
                          C: [{
                            S: {
                              L: function (e, t, n) {
                                return e.note_detail
                              },
                              F: function (e, t, n, r) {
                                return e.note_detail
                              }
                            }
                          }]
                        }, {
                          T: "wx-view",
                          A: {
                            class: "note-guide-wrap"
                          },
                          C: [{
                            T: "wx-image",
                            A: {
                              class: "note-guide",
                              src: {
                                L: function (e, t, n) {
                                  return e.iconGuide
                                },
                                F: function (e, t, n, r) {
                                  return e.iconGuide
                                }
                              }
                            },
                            C: []
                          }]
                        }]
                      }]
                    }]
                  }]
                }],
                BM: {
                  noteContentHeight: [
                    [0, 1, 1, "style"]
                  ],
                  title: [
                    [0, 1, 0, 0, 0, 0]
                  ],
                  noteEnter: [
                    [0, 1, 1, "class"]
                  ],
                  note_detail: [
                    [0, 1, 1, 1, 0, 0]
                  ],
                  note_title: [
                    [0, 1, 1, 0, 0, 0]
                  ],
                  enter: [
                    [0, 0, "class"],
                    [0, 1, 0, "class"]
                  ],
                  iconGuide: [
                    [0, 1, 1, 1, 1, 0, "src"]
                  ],
                  iconBack: [
                    [0, 1, 1, 0, 1, 0, "src"]
                  ],
                  iconInfo: [
                    [0, 1, 0, 0, 1, 0, "src"]
                  ],
                  contentHeight: [
                    [0, 1, 0, "style"]
                  ]
                }
              };
            return e[""] = function () {
                return t
              },
              function (t) {
                var n = e[t];
                return n ? n() : null
              }
          }()
        },
        properties: {
          title: {
            type: String,
            value: "将本次健身数据分享到微信运动"
          },
          sport_name: {
            type: Array,
            value: []
          },
          note_detail: {
            type: String,
            value: "分享后，朋友将可以在微信运动排行榜上看到你的身体情况。"
          },
          note_title: {
            type: String,
            value: "数据分享说明"
          },
          theme: {
            type: String,
            value: "light"
          },
          input: {
            type: String,
            value: ""
          }
        },
        data: {
          enter: !1,
          noteEnter: !1,
          dark: !1,
          duration: 300,
          contentHeight: 358,
          noteContentHeight: 338,
          clickMoreCount: 0,
          iconInfo: p,
          iconBack: f,
          iconGuide: d
        },
        observers: {
          dark(e) {
            const t = e ? "http://mmbiz.qpic.cn/sz_mmbiz_png/icTdbqWNOwNTztib4GFrge85XvmH8WVOMFicwaUzmY9aicOlBBB48mlqnBBZpiaApuc0A0JictujwKmRMFhznZ4icRxIQ/0?wx_fmt=png" : p,
              n = e ? "http://mmbiz.qpic.cn/sz_mmbiz_png/icTdbqWNOwNTztib4GFrge85XvmH8WVOMFGTakK9zJelrNNu9dwibzP7pibT397icnFKwvccOcicGst5z6Ja0btqpELA/0?wx_fmt=png" : f,
              r = e ? "http://mmbiz.qpic.cn/sz_mmbiz_png/icTdbqWNOwNTztib4GFrge85XvmH8WVOMFmG4UmtBrK7zrJZ2oFicwTBXY81xn0GprVhSp5rMYEicXjYJEBRV9IQMg/0?wx_fmt=png" : d;
            this.setData({
              iconInfo: t,
              iconBack: n,
              iconGuide: r
            })
          },
          theme(e) {
            this.setData({
              dark: "dark" === e
            })
          },
          input(e) {
            if (!e) return;
            const t = JSON.parse(e),
              n = 358 - 28 * (5 - t.sport_name.length),
              r = Math.max(n, 338);
            this.setData(u()(u()({}, t), {}, {
              contentHeight: n,
              noteContentHeight: r
            }))
          }
        },
        attached() {
          t.triggerRender((() => {
            this.setData({
              enter: !0
            })
          }))
        },
        methods: {
          showNote() {
            this.data.clickMoreCount++, t.triggerRender((() => {
              this.setData({
                noteEnter: !0
              })
            }))
          },
          hideNote() {
            t.triggerRender((() => {
              this.setData({
                noteEnter: !1
              })
            }))
          },
          handleCancel() {
            this.triggerEvent("cancel", {
              clickMoreCount: this.data.clickMoreCount
            }), this.destory()
          },
          handleConfirm() {
            this.triggerEvent("confirm", {
              clickMoreCount: this.data.clickMoreCount
            }), this.destory()
          },
          destory() {
            this.setData({
              enter: !1
            }), setTimeout((() => {
              this.triggerEvent("destroy")
            }), this.data.duration)
          }
        }
      });
      n(431);
      t.registerElement({
        is: "authorize",
        options: {
          classPrefix: "authorize",
          writeIdToDOM: !0
        },
        template: {
          content: function () {
            var e = {},
              t = {
                P: "",
                C: [{
                  T: "wx-view",
                  A: {
                    class: "root"
                  },
                  C: [{
                    V: 1,
                    B: [{
                      B: {
                        L: function (e, t, n) {
                          return e.overlay
                        },
                        F: function (e, t, n, r) {
                          return e.overlay
                        }
                      },
                      C: [{
                        T: "wx-view",
                        A: {
                          class: {
                            L: function (e, t, n) {
                              return !!e.enter || void 0
                            }, F: function (e, t, n, r) {
                              return "mask " + (e.enter ? "mask-in" : "")
                            }
                          }
                        },
                        C: []
                      }]
                    }]
                  }, {
                    T: "wx-view",
                    A: {
                      class: "container"
                    },
                    C: [{
                      T: "wx-view",
                      A: {
                        class: {
                          L: function (e, t, n) {
                            return !!e.enter || void 0
                          }, F: function (e, t, n, r) {
                            return "content " + (e.enter ? "content-in" : "")
                          }
                        }
                      },
                      C: [{
                        T: "wx-view",
                        A: {
                          class: "head"
                        },
                        C: [{
                          T: "wx-image",
                          A: {
                            class: "icon",
                            src: {
                              L: function (e, t, n) {
                                return e.icon
                              },
                              F: function (e, t, n, r) {
                                return e.icon
                              }
                            }
                          },
                          C: []
                        }, {
                          T: "wx-view",
                          A: {
                            class: "title"
                          },
                          C: [{
                            S: {
                              L: function (e, t, n) {
                                return !!e.nickname || void 0
                              },
                              F: function (e, t, n, r) {
                                return e.nickname + " 申请"
                              }
                            }
                          }]
                        }]
                      }, {
                        T: "wx-view",
                        A: {
                          class: "body"
                        },
                        C: [{
                          T: "wx-view",
                          A: {
                            class: "apply-info"
                          },
                          C: [{
                            S: {
                              L: function (e, t, n) {
                                return e.apply
                              },
                              F: function (e, t, n, r) {
                                return e.apply
                              }
                            }
                          }]
                        }]
                      }, {
                        T: "wx-view",
                        A: {
                          class: "buttons"
                        },
                        C: [{
                          T: "wx-view",
                          A: {
                            class: "button cancel",
                            "bind:tap": "handleCancel"
                          },
                          C: [{
                            S: "拒绝"
                          }]
                        }, {
                          T: "wx-view",
                          A: {
                            class: "button confirm",
                            "bind:tap": "handleConfirm"
                          },
                          C: [{
                            S: "允许"
                          }]
                        }]
                      }]
                    }]
                  }]
                }],
                BM: {
                  nickname: [
                    [0, 1, 0, 0, 1, 0]
                  ],
                  apply: [
                    [0, 1, 0, 1, 0, 0]
                  ],
                  icon: [
                    [0, 1, 0, 0, 0, "src"]
                  ]
                }
              };
            return e[""] = function () {
                return t
              },
              function (t) {
                var n = e[t];
                return n ? n() : null
              }
          }()
        },
        properties: {
          nickname: {
            type: String,
            value: ""
          },
          icon: {
            type: String,
            value: ""
          },
          overlay: {
            type: Boolean,
            value: !0
          },
          apply: {
            type: String,
            value: ""
          },
          input: {
            type: String,
            value: ""
          }
        },
        data: {
          enter: !1,
          duration: 300
        },
        observers: {
          input(e) {
            if (!e) return;
            const t = JSON.parse(e);
            this.setData(t)
          }
        },
        attached() {
          t.triggerRender((() => {
            this.setData({
              enter: !0
            })
          }))
        },
        methods: {
          handleCancel() {
            this.triggerEvent("cancel"), this.destory()
          },
          handleConfirm() {
            this.triggerEvent("confirm"), this.destory()
          },
          destory() {
            this.setData({
              enter: !1
            }), setTimeout((() => {
              this.triggerEvent("destroy")
            }), this.data.duration)
          }
        }
      });
      n(261);
      t.registerElement({
        is: "navigateToMp",
        options: {
          classPrefix: "navigate-to-mp",
          writeIdToDOM: !0
        },
        template: {
          content: function () {
            var e = {},
              t = {
                P: "",
                C: [{
                  V: 1,
                  B: [{
                    B: {
                      L: function (e, t, n) {
                        return !!e.type || void 0
                      },
                      F: function (e, t, n, r) {
                        return 1 === e.type
                      }
                    },
                    C: [{
                      T: "mp-dialog",
                      A: {
                        show: {
                          L: function (e, t, n) {
                            return e.show
                          },
                          F: function (e, t, n, r) {
                            return e.show
                          }
                        },
                        buttons: {
                          L: function (e, t, n) {
                            return e.buttons
                          },
                          F: function (e, t, n, r) {
                            return e.buttons
                          }
                        },
                        "bind:close": "handleClose",
                        "bind:closed": "handleClosed",
                        "bind:buttontap": "handleTapButton",
                        "mask-closable": {
                          L: function (e, t, n) {},
                          F: function (e, t, n, r) {
                            return !1
                          }
                        }
                      },
                      C: [{
                        T: "wx-view",
                        A: {
                          class: "title",
                          slot: "title"
                        },
                        C: [{
                          S: {
                            L: function (e, t, n) {
                              return e.title
                            },
                            F: function (e, t, n, r) {
                              return e.title
                            }
                          }
                        }]
                      }, {
                        V: 7,
                        N: "body",
                        C: [{
                          V: 1,
                          B: [{
                            B: {
                              L: function (e, t, n) {
                                return !(!e.logo && !e.name) || void 0
                              },
                              F: function (e, t, n, r) {
                                return e.logo || e.name
                              }
                            },
                            C: [{
                              T: "wx-view",
                              A: {
                                class: "body"
                              },
                              C: [{
                                V: 1,
                                B: [{
                                  B: {
                                    L: function (e, t, n) {
                                      return e.logo
                                    },
                                    F: function (e, t, n, r) {
                                      return e.logo
                                    }
                                  },
                                  C: [{
                                    T: "wx-image",
                                    A: {
                                      class: "logo",
                                      src: {
                                        L: function (e, t, n) {
                                          return e.logo
                                        },
                                        F: function (e, t, n, r) {
                                          return e.logo
                                        }
                                      }
                                    },
                                    C: []
                                  }]
                                }]
                              }, {
                                V: 1,
                                B: [{
                                  B: {
                                    L: function (e, t, n) {
                                      return e.name
                                    },
                                    F: function (e, t, n, r) {
                                      return e.name
                                    }
                                  },
                                  C: [{
                                    T: "wx-view",
                                    A: {
                                      class: "name"
                                    },
                                    C: [{
                                      S: {
                                        L: function (e, t, n) {
                                          return e.name
                                        },
                                        F: function (e, t, n, r) {
                                          return e.name
                                        }
                                      }
                                    }]
                                  }]
                                }]
                              }, {
                                T: "wx-view",
                                A: {
                                  class: "desc"
                                },
                                C: [{
                                  S: {
                                    L: function (e, t, n) {
                                      return e.desc
                                    },
                                    F: function (e, t, n, r) {
                                      return e.desc
                                    }
                                  }
                                }]
                              }]
                            }]
                          }, {
                            B: 1,
                            C: [{
                              T: "wx-view",
                              A: {
                                class: "body-placeholder"
                              },
                              C: []
                            }]
                          }]
                        }]
                      }]
                    }]
                  }, {
                    B: {
                      L: function (e, t, n) {
                        return !!e.type || void 0
                      },
                      F: function (e, t, n, r) {
                        return 2 === e.type
                      }
                    },
                    C: [{
                      T: "mp-half-screen-dialog",
                      A: {
                        show: {
                          L: function (e, t, n) {
                            return e.show
                          },
                          F: function (e, t, n, r) {
                            return e.show
                          }
                        },
                        buttons: {
                          L: function (e, t, n) {
                            return e.buttons
                          },
                          F: function (e, t, n, r) {
                            return e.buttons
                          }
                        },
                        "bind:close": "handleClose",
                        "bind:closed": "handleClosed",
                        "bind:buttontap": "handleTapButton",
                        "mask-closable": {
                          L: function (e, t, n) {},
                          F: function (e, t, n, r) {
                            return !1
                          }
                        }
                      },
                      C: [{
                        T: "wx-view",
                        A: {
                          class: "title",
                          slot: "title"
                        },
                        C: [{
                          S: {
                            L: function (e, t, n) {
                              return e.title
                            },
                            F: function (e, t, n, r) {
                              return e.title
                            }
                          }
                        }]
                      }, {
                        V: 7,
                        N: "body",
                        C: [{
                          V: 1,
                          B: [{
                            B: {
                              L: function (e, t, n) {
                                return !(!e.logo && !e.name) || void 0
                              },
                              F: function (e, t, n, r) {
                                return e.logo || e.name
                              }
                            },
                            C: [{
                              T: "wx-view",
                              A: {
                                class: "body"
                              },
                              C: [{
                                V: 1,
                                B: [{
                                  B: {
                                    L: function (e, t, n) {
                                      return e.logo
                                    },
                                    F: function (e, t, n, r) {
                                      return e.logo
                                    }
                                  },
                                  C: [{
                                    T: "wx-image",
                                    A: {
                                      class: "logo",
                                      src: {
                                        L: function (e, t, n) {
                                          return e.logo
                                        },
                                        F: function (e, t, n, r) {
                                          return e.logo
                                        }
                                      }
                                    },
                                    C: []
                                  }]
                                }]
                              }, {
                                V: 1,
                                B: [{
                                  B: {
                                    L: function (e, t, n) {
                                      return e.name
                                    },
                                    F: function (e, t, n, r) {
                                      return e.name
                                    }
                                  },
                                  C: [{
                                    T: "wx-view",
                                    A: {
                                      class: "name"
                                    },
                                    C: [{
                                      S: {
                                        L: function (e, t, n) {
                                          return e.name
                                        },
                                        F: function (e, t, n, r) {
                                          return e.name
                                        }
                                      }
                                    }]
                                  }]
                                }]
                              }, {
                                T: "wx-view",
                                A: {
                                  class: "desc"
                                },
                                C: [{
                                  S: {
                                    L: function (e, t, n) {
                                      return e.desc
                                    },
                                    F: function (e, t, n, r) {
                                      return e.desc
                                    }
                                  }
                                }]
                              }]
                            }]
                          }, {
                            B: 1,
                            C: [{
                              T: "wx-view",
                              A: {
                                class: "body-placeholder"
                              },
                              C: []
                            }]
                          }]
                        }]
                      }]
                    }]
                  }]
                }],
                BM: {}
              };
            return e[""] = function () {
                return t
              },
              function (t) {
                var n = e[t];
                return n ? n() : null
              }
          }()
        },
        properties: {
          type: {
            type: Number
          },
          title: {
            type: String,
            value: "即将打开以下小程序"
          },
          logo: {
            type: String,
            value: ""
          },
          name: {
            type: String,
            value: ""
          },
          desc: {
            type: String,
            value: ""
          },
          confirmText: {
            type: String,
            value: "允许"
          },
          cancelText: {
            type: String,
            value: "取消"
          },
          maskClosable: {
            type: Boolean,
            value: !1
          }
        },
        observers: {
          confirmText(e) {
            this.setData({
              buttons: this.getButtons(e, this.data.cancelText)
            })
          },
          cancelText(e) {
            this.setData({
              buttons: this.getButtons(this.data.confirmText, e)
            })
          }
        },
        data: {
          show: !1,
          buttons: []
        },
        attached() {
          t.triggerRender((() => {
            this.setData({
              buttons: this.getButtons(this.data.confirmText, this.data.cancelText),
              show: !0
            })
          }))
        },
        methods: {
          getButtons: (e, t) => [{
            type: "default",
            text: t
          }, {
            type: "primary",
            text: e
          }],
          handleTapButton(e) {
            1 === e.detail.index ? this.handleConfirm() : this.handleCancel()
          },
          handleClose() {
            this.handleCancel()
          },
          handleCancel() {
            this.triggerEvent("cancel"), this.triggerDestroy()
          },
          handleConfirm() {
            this.triggerEvent("confirm"), this.triggerDestroy()
          },
          handleClosed() {
            this.triggerEvent("destroy")
          },
          triggerDestroy() {
            this.setData({
              show: !1
            })
          }
        }
      });
      n(172);
      const g = e => e.split("?", 2)[0],
        h = e => ".html" === e.slice(-5) ? e.slice(0, -5) : e,
        _ = (e, t) => ("/" !== (e = h(e))[0] && (e = "/" + e), h(e) === h(g(t)));
      t.registerElement({
        is: "frameset",
        options: {
          classPrefix: "frameset",
          virtualHost: !0
        },
        template: {
          content: function () {
            var e = {},
              t = {
                P: "",
                C: [{
                  T: "virtuallayout",
                  A: {
                    class: "root"
                  },
                  C: [{
                    V: 1,
                    B: [{
                      B: {
                        L: function (e, t, n) {
                          return e.hasTabs
                        },
                        F: function (e, t, n, r) {
                          return e.hasTabs
                        }
                      },
                      C: [{
                        T: "tabbar",
                        A: {
                          class: "tabs",
                          direction: "vertical"
                        },
                        C: []
                      }]
                    }]
                  }, {
                    T: "virtuallayout",
                    A: {
                      class: "panels"
                    },
                    C: [{
                      T: "virtuallayout",
                      A: {
                        class: "left-panel"
                      },
                      C: [{
                        V: 2,
                        L: {
                          M: ["tabs"],
                          L: function (e, t, n) {
                            return e.tabs
                          },
                          F: function (e, t, n, r) {
                            return e.tabs
                          }
                        },
                        K: "i",
                        C: [{
                          V: 2,
                          L: {
                            M: [0, "pages"],
                            L: function (e, t, n) {
                              return a(t[0], "pages")
                            },
                            F: function (e, t, n, r) {
                              return o(t[0]).pages
                            }
                          },
                          K: "i",
                          C: [{
                            T: "frame",
                            A: {
                              class: {
                                L: function (e, t, n) {
                                  return !!a(t[0], "hidden") || void 0
                                }, F: function (e, t, n, r) {
                                  return "left-page " + (o(t[0]).hidden ? "hidden" : "")
                                }
                              },
                              "back-button": {
                                L: function (e, t, n) {
                                  return !!t[3] || void 0
                                },
                                F: function (e, t, n, r) {
                                  return t[3] > 0 ? "true" : ""
                                }
                              },
                              url: {
                                L: function (e, t, n) {
                                  return a(t[2], "url")
                                },
                                F: function (e, t, n, r) {
                                  return o(t[2]).url
                                }
                              },
                              "margin-left": "1",
                              "margin-right": "1",
                              "data-side": {
                                L: function (e, t, n) {},
                                F: function (e, t, n, r) {
                                  return "left"
                                }
                              },
                              "bind:navigateBack": "navigateBack",
                              "bind:resize": "triggerPageOnResize"
                            },
                            C: []
                          }]
                        }]
                      }]
                    }, {
                      T: "virtuallayout",
                      A: {
                        class: "right-panel"
                      },
                      C: [{
                        V: 1,
                        B: [{
                          B: {
                            L: function (e, t, n) {
                              return e.placeholderImage
                            },
                            F: function (e, t, n, r) {
                              return e.placeholderImage
                            }
                          },
                          C: [{
                            T: "image",
                            A: {
                              src: {
                                L: function (e, t, n) {
                                  return e.placeholderImage
                                },
                                F: function (e, t, n, r) {
                                  return e.placeholderImage
                                }
                              },
                              class: "right-placeholder"
                            },
                            C: []
                          }]
                        }]
                      }, {
                        V: 2,
                        L: {
                          M: ["mainPages"],
                          L: function (e, t, n) {
                            return e.mainPages
                          },
                          F: function (e, t, n, r) {
                            return e.mainPages
                          }
                        },
                        K: "i",
                        C: [{
                          T: "frame",
                          A: {
                            class: {
                              L: function (e, t, n) {
                                return !!a(t[0], "aniIn") || void 0
                              }, F: function (e, t, n, r) {
                                return "right-page " + (o(t[0]).aniIn ? "right-page-in" : "")
                              }
                            },
                            "back-button": "true",
                            url: {
                              L: function (e, t, n) {
                                return a(t[0], "url")
                              },
                              F: function (e, t, n, r) {
                                return o(t[0]).url
                              }
                            },
                            "data-side": {
                              L: function (e, t, n) {},
                              F: function (e, t, n, r) {
                                return "right"
                              }
                            },
                            "bind:navigateBack": "navigateBack",
                            "bind:resize": "triggerPageOnResize"
                          },
                          C: []
                        }]
                      }]
                    }]
                  }]
                }],
                BM: {}
              };
            return e[""] = function () {
                return t
              },
              function (t) {
                var n = e[t];
                return n ? n() : null
              }
          }()
        },
        lifetimes: {
          route({
            method: e,
            url: t,
            args: n
          }) {
            this[e](t, n)
          }
        },
        data: {
          hasTabs: !1,
          tabs: [],
          mainPages: []
        },
        created() {
          this.globalShowStatus = !0, this.shownTabDepths = [], this.shownMainPagesDepth = -1, this.pageLifeTimeCallback = () => {}
        },
        observers: {
          "hasTabs, tabs.**, mainPages.**": function () {
            this.triggerShowHideEvents()
          }
        },
        methods: {
          normalizeUrl: e => ("/" !== e[0] && (e = "/" + e), (e => {
            const t = e.indexOf("?");
            return -1 === t ? e + ".html" : e.slice(0, t) + ".html" + e.slice(t)
          })(e)),
          appLaunch(e, {
            tabBarConfig: t,
            entryPagePath: n
          }) {
            const r = t && t.list && t.list.length > 0 && !t.custom,
              i = this.normalizeUrl(e);
            let o = null;
            if (r) t.list.forEach((e => {
              _(e.pagePath, i) && (o = i)
            }));
            else {
              if (!_(n, i)) return;
              o = this.normalizeUrl(h(n))
            }
            null === o ? this.setData({
              hasTabs: r,
              tabs: [{
                i: 0,
                hidden: !1,
                pages: [{
                  i: 0,
                  url: this.normalizeUrl(h(n))
                }]
              }],
              mainPages: [{
                i: 0,
                url: i,
                aniIn: !0
              }]
            }) : this.setData({
              hasTabs: r,
              tabs: [{
                i: 0,
                hidden: !1,
                pages: [{
                  i: 0,
                  url: o
                }]
              }],
              mainPages: []
            })
          },
          reLaunch(e) {
            e = this.normalizeUrl(e), this.setData({
              tabs: [{
                i: 0,
                hidden: !1,
                pages: [{
                  i: 0,
                  url: e
                }]
              }],
              mainPages: []
            })
          },
          switchTab(e) {
            e = this.normalizeUrl(e);
            let t = !1;
            this.data.tabs.forEach((n => {
              g(n.pages[0].url) === g(e) ? (n.hidden = !1, t = !0) : n.hidden = !0
            })), t || this.data.tabs.push({
              i: this.data.tabs.length,
              hidden: !1,
              pages: [{
                i: 0,
                url: e
              }]
            }), this.setData({
              tabs: this.data.tabs,
              mainPages: []
            })
          },
          navigateBack(e) {
            let t = "right";
            e && (t = e.currentTarget.dataset.side), "left" === t ? (this.data.tabs.forEach((e => {
              !e.hidden && e.pages.length > 1 && e.pages.pop()
            })), this.setData({
              tabs: this.data.tabs
            })) : (this.aniOut(), setTimeout((() => {
              this.setData({
                mainPages: this.data.mainPages.slice(0, -1)
              })
            }), 500))
          },
          navigateTo(e) {
            e = this.normalizeUrl(e);
            const t = this.data.mainPages.length;
            this.setData({
              mainPages: this.data.mainPages.concat([{
                i: t,
                url: e
              }])
            }), this.aniIn()
          },
          redirectTo(e) {
            e = this.normalizeUrl(e);
            const t = this.data.mainPages.length - 1;
            this.setData({
              mainPages: this.data.mainPages.slice(0, -1).concat([{
                i: t,
                url: e
              }])
            }), this.aniIn()
          },
          aniIn() {
            const e = this.data.mainPages.length - 1;
            t.triggerRender((() => {
              this.setData({
                [`mainPages[${e}].aniIn`]: !0
              })
            }))
          },
          aniOut() {
            const e = this.data.mainPages.length - 1;
            this.setData({
              [`mainPages[${e}].aniIn`]: !1
            })
          },
          setPlaceholderImage(e) {
            this.setData({
              placeholderImage: e
            })
          },
          triggerShowHideEvents() {
            const e = this.data.tabs.map((({
                pages: e,
                hidden: t
              }) => t || !this.globalShowStatus ? -1 : e.length - 1)),
              t = this.globalShowStatus ? this.data.mainPages.length - 1 : -1;
            if (e.forEach(((e, t) => {
                const n = this.shownTabDepths[t] || 0;
                if (n < e && n >= 0) {
                  const e = this.$.tabList.childNodes[t].querySelector(".left-page")[n].$$.getAttribute("-view-id");
                  this.pageLifeTimeCallback(e, "Hide")
                } else if (e < n && e >= 0) {
                  const n = this.$.tabList.childNodes[t].querySelector(".left-page")[e].$$.getAttribute("-view-id");
                  this.pageLifeTimeCallback(n, "Show")
                }
              })), this.shownMainPagesDepth < t && this.shownMainPagesDepth >= 0) {
              const e = this.$.pageList.childNodes[this.shownMainPagesDepth].querySelector(".right-page").$$.getAttribute("-view-id");
              this.pageLifeTimeCallback(e, "Hide")
            } else if (t < this.shownMainPagesDepth && t >= 0) {
              const e = this.$.pageList.childNodes[t].querySelector(".right-page").$$.getAttribute("-view-id");
              this.pageLifeTimeCallback(e, "Show")
            }
            this.shownTabDepths = e, this.shownMainPagesDepth = t
          },
          setGlobalShowStatus(e) {
            this.globalShowStatus !== e && (this.globalShowStatus = e, this.triggerShowHideEvents())
          },
          triggerPageOnResize(e) {
            const {
              viewId: t,
              size: n
            } = e.detail;
            this.pageLifeTimeCallback(t, "Resize", {
              size: n
            })
          },
          setPageLifeTimeCallback(e) {
            this.pageLifeTimeCallback = e
          }
        }
      });
      n(78);
      let v = 3;
      t.registerElement({
        is: "game-ranklist",
        options: {
          classPrefix: "game-ranklist",
          writeIdToDOM: !0
        },
        template: {
          content: function () {
            var e = {},
              t = {
                P: "",
                C: [{
                  T: "wx-view",
                  A: {
                    class: "root"
                  },
                  C: [{
                    T: "wx-view",
                    A: {
                      class: "content"
                    },
                    C: [{
                      T: "wx-view",
                      A: {
                        class: "head"
                      },
                      C: [{
                        T: "wx-image",
                        A: {
                          class: "close",
                          src: "http://mmbiz.qpic.cn/mmbiz_png/icTdbqWNOwNSByZLicUmsht1JxkNuzGdYKKtQ5NiadIeFXjxMBvdzv8ib9nThJgX9M7z3Dq59jIUkGnTENr7AibOJMQ/0?wx_fmt=png",
                          "bind:tap": "close"
                        },
                        C: []
                      }, {
                        T: "wx-view",
                        A: {
                          class: "title"
                        },
                        C: [{
                          S: {
                            L: function (e, t, n) {
                              return e.title
                            },
                            F: function (e, t, n, r) {
                              return e.title
                            }
                          }
                        }]
                      }, {
                        T: "wx-view",
                        A: {
                          class: "close"
                        },
                        C: []
                      }]
                    }, {
                      T: "wx-view",
                      A: {
                        class: "line"
                      },
                      C: []
                    }, {
                      T: "wx-view",
                      A: {
                        class: "body"
                      },
                      C: [{
                        V: 2,
                        L: {
                          M: ["show"],
                          L: function (e, t, n) {
                            return e.show
                          },
                          F: function (e, t, n, r) {
                            return e.show
                          }
                        },
                        K: "index",
                        C: [{
                          T: "wx-view",
                          A: {},
                          C: [{
                            T: "wx-view",
                            A: {
                              class: "item"
                            },
                            C: [{
                              T: "wx-image",
                              A: {
                                class: "icon",
                                src: {
                                  L: function (e, t, n) {
                                    return a(t[0], "head_img_url")
                                  },
                                  F: function (e, t, n, r) {
                                    return o(t[0]).head_img_url
                                  }
                                }
                              },
                              C: []
                            }, {
                              T: "wx-view",
                              A: {
                                class: "name"
                              },
                              C: [{
                                S: {
                                  L: function (e, t, n) {
                                    return a(t[0], "user_name")
                                  },
                                  F: function (e, t, n, r) {
                                    return o(t[0]).user_name
                                  }
                                }
                              }]
                            }, {
                              T: "wx-view",
                              A: {
                                class: "score"
                              },
                              C: [{
                                S: {
                                  L: function (e, t, n) {
                                    return a(t[0], "score_desc")
                                  },
                                  F: function (e, t, n, r) {
                                    return o(t[0]).score_desc
                                  }
                                }
                              }]
                            }]
                          }, {
                            T: "wx-view",
                            A: {
                              class: "line"
                            },
                            C: []
                          }]
                        }]
                      }]
                    }, {
                      T: "wx-view",
                      A: {
                        class: "buttons"
                      },
                      C: [{
                        T: "wx-view",
                        A: {
                          class: "button",
                          "bind:tap": "left"
                        },
                        C: [{
                          T: "wx-image",
                          A: {
                            class: {
                              L: function (e, t, n) {
                                return !!e.canl || void 0
                              }, F: function (e, t, n, r) {
                                return "btn-icon " + (e.canl ? "" : "disabled")
                              }
                            },
                            src: "https://res.wx.qq.com/a/fed_upload/d71d0af9-0fb5-4fd6-aa3c-f9ff1494435e/left.png"
                          },
                          C: []
                        }]
                      }, {
                        T: "wx-view",
                        A: {
                          class: "button",
                          "bind:tap": "right"
                        },
                        C: [{
                          T: "wx-image",
                          A: {
                            class: {
                              L: function (e, t, n) {
                                return !!e.canr || void 0
                              }, F: function (e, t, n, r) {
                                return "btn-icon " + (e.canr ? "" : "disabled")
                              }
                            },
                            src: "https://res.wx.qq.com/a/fed_upload/dfbbd68d-9cfc-4ddc-a77a-3f049f3757f5/right.png"
                          },
                          C: []
                        }]
                      }]
                    }]
                  }]
                }],
                BM: {
                  canl: [
                    [0, 0, 3, 0, 0, "class"]
                  ],
                  title: [
                    [0, 0, 0, 1, 0]
                  ],
                  canr: [
                    [0, 0, 3, 1, 0, "class"]
                  ]
                }
              };
            return e[""] = function () {
                return t
              },
              function (t) {
                var n = e[t];
                return n ? n() : null
              }
          }()
        },
        properties: {
          title: {
            type: String,
            value: ""
          },
          list: {
            type: Array,
            value: []
          }
        },
        data: {
          page: 0,
          canl: !1,
          canr: !1,
          show: [],
          all: []
        },
        observers: {
          list(e) {
            v = "portrait" === n.g.__wxConfig.deviceOrientation ? 5 : 3, Array.isArray(e) && this.setData({
              page: 0,
              all: e,
              canr: e.length > v,
              show: e.slice(0, v)
            })
          }
        },
        methods: {
          left() {
            if (!this.data.canl) return;
            const e = this.data.page - 1;
            this.setData({
              page: e,
              canl: e > 0,
              canr: this.data.all.length > v * (e + 1),
              show: this.data.all.slice(v * e, v * (e + 1))
            })
          },
          right() {
            if (!this.data.canr) return;
            const e = this.data.page + 1;
            this.setData({
              page: e,
              canl: e > 0,
              canr: this.data.all.length > v * (e + 1),
              show: this.data.all.slice(v * e, v * (e + 1))
            })
          },
          close() {
            this.triggerEvent("destroy")
          }
        }
      });
      n(426);
      const b = [];
      e.onViewportResize((e => {
        b.forEach((t => t(e)))
      }));
      t.registerElement({
        is: "share-image",
        behaviors: ["wx-theme"],
        options: {
          multipleSlots: !0,
          classPrefix: "share-image",
          writeIdToDOM: !0
        },
        template: {
          content: function () {
            var e = {},
              t = {
                P: "",
                C: [{
                  V: 1,
                  B: [{
                    B: {
                      L: function (e, t, n) {
                        return !!e.orientation || void 0
                      },
                      F: function (e, t, n, r) {
                        return "portrait" === e.orientation
                      }
                    },
                    C: [{
                      T: "mp-bubble-action-sheet",
                      A: {
                        actions: {
                          L: function (e, t, n) {
                            return e.actionsArr
                          },
                          F: function (e, t, n, r) {
                            return e.actionsArr
                          }
                        },
                        show: {
                          L: function (e, t, n) {
                            return e.show
                          },
                          F: function (e, t, n, r) {
                            return e.show
                          }
                        },
                        mask: {
                          L: function (e, t, n) {},
                          F: function (e, t, n, r) {
                            return !1
                          }
                        },
                        "bind:buttontap": "onButtonTap",
                        "bind:close": "handleClose",
                        "bind:closed": "handleClosed"
                      },
                      C: [{
                        T: "wx-view",
                        A: {
                          class: {
                            L: function (e, t, n) {
                              return !!e.show || void 0
                            }, F: function (e, t, n, r) {
                              return "mask " + (e.show ? "mask__in" : "")
                            }
                          },
                          slot: "mask"
                        },
                        C: []
                      }, {
                        T: "wx-view",
                        A: {
                          class: {
                            L: function (e, t, n) {
                              return !!e.show || void 0
                            }, F: function (e, t, n, r) {
                              return "container " + (e.show ? "container__in" : "")
                            }
                          },
                          slot: "mask"
                        },
                        C: [{
                          T: "wx-view",
                          A: {
                            class: "scroller-container"
                          },
                          C: [{
                            T: "scrollview",
                            A: {
                              class: "scroller",
                              "scroll-y": "1"
                            },
                            C: [{
                              T: "wx-view",
                              A: {
                                class: "img-wrapper"
                              },
                              C: [{
                                T: "wx-adaptive-image",
                                A: {
                                  class: "img",
                                  src: {
                                    L: function (e, t, n) {
                                      return e.imgPath
                                    },
                                    F: function (e, t, n, r) {
                                      return e.imgPath
                                    }
                                  },
                                  srcHeight: {
                                    L: function (e, t, n) {
                                      return e.height
                                    },
                                    F: function (e, t, n, r) {
                                      return e.height
                                    }
                                  },
                                  srcWidth: {
                                    L: function (e, t, n) {
                                      return e.width
                                    },
                                    F: function (e, t, n, r) {
                                      return e.width
                                    }
                                  }
                                },
                                C: []
                              }]
                            }]
                          }]
                        }]
                      }]
                    }]
                  }, {
                    B: 1,
                    C: [{
                      T: "mp-horizonal-bubble",
                      A: {
                        actions: {
                          L: function (e, t, n) {
                            return e.actionsArr
                          },
                          F: function (e, t, n, r) {
                            return e.actionsArr
                          }
                        },
                        show: {
                          L: function (e, t, n) {
                            return e.show
                          },
                          F: function (e, t, n, r) {
                            return e.show
                          }
                        },
                        "bind:buttontap": "onButtonTap",
                        "bind:close": "handleClose",
                        "bind:closed": "handleClosed"
                      },
                      C: [{
                        T: "wx-view",
                        A: {
                          slot: "content"
                        },
                        C: [{
                          T: "wx-view",
                          A: {
                            class: {
                              L: function (e, t, n) {
                                return !!e.show || void 0
                              }, F: function (e, t, n, r) {
                                return "landscape-container " + (e.show ? "container__in" : "")
                              }
                            }
                          },
                          C: [{
                            T: "wx-view",
                            A: {
                              class: "scroller-container"
                            },
                            C: [{
                              T: "scrollview",
                              A: {
                                class: "scroller",
                                "scroll-y": "1"
                              },
                              C: [{
                                T: "wx-view",
                                A: {
                                  class: "img-wrapper"
                                },
                                C: [{
                                  T: "wx-adaptive-image",
                                  A: {
                                    class: "img",
                                    src: {
                                      L: function (e, t, n) {
                                        return e.imgPath
                                      },
                                      F: function (e, t, n, r) {
                                        return e.imgPath
                                      }
                                    },
                                    srcHeight: {
                                      L: function (e, t, n) {
                                        return e.height
                                      },
                                      F: function (e, t, n, r) {
                                        return e.height
                                      }
                                    },
                                    srcWidth: {
                                      L: function (e, t, n) {
                                        return e.width
                                      },
                                      F: function (e, t, n, r) {
                                        return e.width
                                      }
                                    }
                                  },
                                  C: []
                                }]
                              }]
                            }]
                          }]
                        }]
                      }]
                    }]
                  }]
                }],
                BM: {}
              };
            return e[""] = function () {
                return t
              },
              function (t) {
                var n = e[t];
                return n ? n() : null
              }
          }()
        },
        properties: {
          imgPath: {
            type: String,
            public: !0,
            value: ""
          },
          height: {
            type: Number,
            public: !0,
            value: 0
          },
          width: {
            type: Number,
            public: !0,
            value: 0
          },
          actions: {
            type: String,
            public: !0,
            value: "[]"
          }
        },
        data: {
          show: !1,
          actionsArr: [],
          imgHeight: 0,
          imgWidth: 0,
          orientation: "portrait"
        },
        observers: {
          actions() {
            this.getActions(this.data.actions)
          }
        },
        created() {
          this.onViewportResize()
        },
        attached() {
          t.triggerRender((() => {
            this.setData({
              show: !0
            })
          })), this._onViewportResize = this.onViewportResize.bind(this), b.push(this._onViewportResize);
          try {
            t.dumpElementToString(this, 1)
          } catch (e) {
            e.stack
          }
        },
        detached() {
          b.splice(b.indexOf(this._onViewportResize), 1)
        },
        methods: {
          onViewportResize() {
            const t = e.getWindowWidth(),
              n = e.getWindowHeight();
            this.updateOrientation(t, n)
          },
          updateOrientation(e, t) {
            this.setData({
              orientation: e <= t ? "portrait" : "landscape"
            })
          },
          getActions(e) {
            const t = JSON.parse(e);
            this.setData({
              actionsArr: t
            })
          },
          onButtonTap(e) {
            const {
              item: t
            } = e.detail;
            this.triggerEvent(t.action), this.triggerDestroy()
          },
          handleClose() {
            this.data.show && (this.triggerEvent("cancel"), this.triggerDestroy())
          },
          handleClosed() {
            this.triggerEvent("destroy")
          },
          triggerDestroy() {
            this.setData({
              show: !1
            })
          }
        }
      });
      n(13);
      t.registerElement({
        is: "toast",
        options: {
          classPrefix: "toast",
          writeIdToDOM: !0
        },
        template: {
          content: function () {
            var e = {},
              t = {
                P: "",
                C: [{
                  T: "wx-view",
                  A: {
                    class: "root"
                  },
                  C: [{
                    T: "wx-view",
                    A: {
                      class: "content"
                    },
                    C: [{
                      V: 1,
                      B: [{
                        B: {
                          L: function (e, t, n) {
                            return e.loading
                          },
                          F: function (e, t, n, r) {
                            return e.loading
                          }
                        },
                        C: [{
                          T: "wx-image",
                          A: {
                            src: "https://res.wx.qq.com/op_res/4gTGxmOnjTG1Pmsfj7JwUaZHfOb677UMxDEVI8p20yTosmcwujlY9-UEvMZm0ePGFGKS_PoQJNEN_S9YFfGTWA",
                            class: "loading"
                          },
                          C: []
                        }]
                      }]
                    }, {
                      T: "wx-view",
                      A: {
                        class: "title"
                      },
                      C: [{
                        S: {
                          L: function (e, t, n) {
                            return e.title
                          },
                          F: function (e, t, n, r) {
                            return e.title
                          }
                        }
                      }]
                    }]
                  }]
                }],
                BM: {
                  title: [
                    [0, 0, 1, 0]
                  ]
                }
              };
            return e[""] = function () {
                return t
              },
              function (t) {
                var n = e[t];
                return n ? n() : null
              }
          }()
        },
        properties: {
          loading: {
            type: Boolean,
            value: !1
          },
          title: {
            type: String
          }
        },
        methods: {
          close() {
            this.triggerEvent("destroy")
          }
        }
      });
      n(164);
      const m = e.exparser,
        w = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACQMUbvAAABEElEQVR4Ae3aQQqCQACF4Yp2XaQDdP8T1L6LtC4FXf8RWhLfQIzwYBw/X250tzMIECBAgAABAgQIbFzgOuzvOf3G402MwyZ2seFNAIqbAwhQCESsQYBCIGINAhQCEWsQoBCIWIMAhUDEGgQoBCLWIEAhELEGAQqBiDUIUAhErEGAQiBiDQIUAhHvI5/jb7zIOw8nO00nfAzzfT75ivOl1n4XaHzj+Y8jr98zKG77MfI5vs0HK86/+IuteDnLL+3jheVN11/RMyiMAQEKgYg1CFAIRKxBgEIgYg0CFAIRaxCgEIhYgwCFQMQaBCgEItYgQCEQsQYBCoGINQhQCESsQYBCQEyAAAECBAgQIEDgE4EXsiEOYoSfPhkAAAAASUVORK5CYII=",
        y = [];
      e.onViewportResize((e => {
        y.forEach((t => t(e)))
      }));
      m.registerElement({
        is: "user-profile",
        options: {
          classPrefix: "user-profile",
          writeIdToDOM: !0
        },
        behaviors: ["wx-theme"],
        template: {
          content: function () {
            var e = {},
              t = {
                P: "",
                C: [{
                  T: "wx-view",
                  A: {
                    class: {
                      L: function (e, t, n) {
                        return !!e.hide || void 0
                      }, F: function (e, t, n, r) {
                        return "root " + (e.hide ? "hide" : "")
                      }
                    }
                  },
                  C: [{
                    V: 1,
                    B: [{
                      B: {
                        L: function (e, t, n) {
                          return e.overlay
                        },
                        F: function (e, t, n, r) {
                          return e.overlay
                        }
                      },
                      C: [{
                        T: "wx-view",
                        A: {
                          class: {
                            L: function (e, t, n) {
                              return !!e.enter || void 0
                            }, F: function (e, t, n, r) {
                              return "mask " + (e.enter ? "mask-in" : "")
                            }
                          }
                        },
                        C: []
                      }]
                    }]
                  }, {
                    T: "wx-view",
                    A: {
                      class: "container"
                    },
                    C: [{
                      T: "wx-view",
                      A: {
                        class: {
                          L: function (e, t, n) {
                            return !!e.enter || void 0
                          }, F: function (e, t, n, r) {
                            return "content " + (e.enter ? "content-in" : "")
                          }
                        }
                      },
                      C: [{
                        T: "wx-view",
                        A: {
                          class: "head"
                        },
                        C: [{
                          T: "wx-image",
                          A: {
                            class: "icon",
                            src: {
                              L: function (e, t, n) {
                                return e.appIcon
                              },
                              F: function (e, t, n, r) {
                                return e.appIcon
                              }
                            }
                          },
                          C: []
                        }, {
                          T: "wx-view",
                          A: {
                            class: "title"
                          },
                          C: [{
                            S: {
                              L: function (e, t, n) {
                                return !!e.appName || void 0
                              },
                              F: function (e, t, n, r) {
                                return e.appName + " 申请"
                              }
                            }
                          }]
                        }]
                      }, {
                        T: "wx-view",
                        A: {
                          class: "body",
                          style: {
                            L: function (e, t, n) {
                              return !!e.paddingBottom || void 0
                            },
                            F: function (e, t, n, r) {
                              return "padding-bottom: " + e.paddingBottom + "px"
                            }
                          }
                        },
                        C: [{
                          T: "wx-view",
                          A: {
                            class: "apply-info"
                          },
                          C: [{
                            S: "使用你的头像、昵称、性别及地区，用于个人信息展示。"
                          }]
                        }, {
                          T: "wx-view",
                          A: {
                            class: "info-list"
                          },
                          C: [{
                            T: "wx-scroll-view",
                            A: {
                              "scroll-y": {
                                L: function (e, t, n) {},
                                F: function (e, t, n, r) {
                                  return !0
                                }
                              },
                              style: {
                                L: function (e, t, n) {
                                  return !!e.scrollHeight || void 0
                                },
                                F: function (e, t, n, r) {
                                  return "height: " + e.scrollHeight + "px;"
                                }
                              }
                            },
                            C: [{
                              V: 2,
                              L: {
                                M: ["infoList"],
                                L: function (e, t, n) {
                                  return e.infoList
                                },
                                F: function (e, t, n, r) {
                                  return e.infoList
                                }
                              },
                              K: "id",
                              C: [{
                                T: "wx-view",
                                A: {
                                  "bind:tap": "handleChoose",
                                  "data-id": {
                                    L: function (e, t, n) {
                                      return a(t[0], "id")
                                    },
                                    F: function (e, t, n, r) {
                                      return o(t[0]).id
                                    }
                                  },
                                  style: "flex-shrink: 0;"
                                },
                                C: [{
                                  T: "wx-view",
                                  A: {
                                    class: "split-line"
                                  },
                                  C: []
                                }, {
                                  T: "wx-view",
                                  A: {
                                    class: "info-item",
                                    id: {
                                      L: function (e, t, n) {
                                        return !!a(t[0], "id") || void 0
                                      },
                                      F: function (e, t, n, r) {
                                        return "item_" + o(t[0]).id
                                      }
                                    }
                                  },
                                  C: [{
                                    T: "wx-view",
                                    A: {
                                      class: "info-item__left"
                                    },
                                    C: [{
                                      T: "wx-image",
                                      A: {
                                        class: "info-item__avatar",
                                        src: {
                                          L: function (e, t, n) {
                                            return a(t[0], "avatar")
                                          },
                                          F: function (e, t, n, r) {
                                            return o(t[0]).avatar
                                          }
                                        }
                                      },
                                      C: []
                                    }, {
                                      T: "wx-view",
                                      A: {
                                        class: "info-item__desc__wrp"
                                      },
                                      C: [{
                                        T: "wx-view",
                                        A: {
                                          class: "info-item__nickname"
                                        },
                                        C: [{
                                          S: {
                                            L: function (e, t, n) {
                                              return a(t[0], "nickname")
                                            },
                                            F: function (e, t, n, r) {
                                              return o(t[0]).nickname
                                            }
                                          }
                                        }]
                                      }, {
                                        V: 1,
                                        B: [{
                                          B: {
                                            L: function (e, t, n) {
                                              return a(t[0], "desc")
                                            },
                                            F: function (e, t, n, r) {
                                              return o(t[0]).desc
                                            }
                                          },
                                          C: [{
                                            T: "wx-view",
                                            A: {
                                              class: "info-item__desc"
                                            },
                                            C: [{
                                              S: {
                                                L: function (e, t, n) {
                                                  return a(t[0], "desc")
                                                },
                                                F: function (e, t, n, r) {
                                                  return o(t[0]).desc
                                                }
                                              }
                                            }]
                                          }]
                                        }]
                                      }]
                                    }]
                                  }, {
                                    V: 1,
                                    B: [{
                                      B: {
                                        L: function (e, t, n) {
                                          return !(!e.selected && !a(t[0], "id")) || void 0
                                        },
                                        F: function (e, t, n, r) {
                                          return e.selected === o(t[0]).id
                                        }
                                      },
                                      C: [{
                                        T: "wx-view",
                                        A: {
                                          class: "info-item__right"
                                        },
                                        C: [{
                                          T: "wx-image",
                                          A: {
                                            class: "icon-checked",
                                            src: {
                                              L: function (e, t, n) {
                                                return e.iconChecked
                                              },
                                              F: function (e, t, n, r) {
                                                return e.iconChecked
                                              }
                                            }
                                          },
                                          C: []
                                        }]
                                      }]
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              T: "wx-view",
                              A: {
                                class: "split-line"
                              },
                              C: []
                            }]
                          }, {
                            V: 1,
                            B: [{
                              B: {
                                L: function (e, t, n) {
                                  return !!(e.showType || e.exceed || e.isBanModifyAvatar) || void 0
                                },
                                F: function (e, t, n, r) {
                                  return 1 === e.showType && !e.exceed && !e.isBanModifyAvatar
                                }
                              },
                              C: [{
                                T: "wx-view",
                                A: {
                                  class: "use-other-avatar",
                                  "bind:tap": "handleCreate"
                                },
                                C: [{
                                  S: "使用其它头像和昵称"
                                }]
                              }]
                            }]
                          }, {
                            V: 1,
                            B: [{
                              B: {
                                L: function (e, t, n) {
                                  return !!(e.showType || e.exceed || e.isBanModifyAvatar) || void 0
                                },
                                F: function (e, t, n, r) {
                                  return 2 === e.showType && !e.exceed && !e.isBanModifyAvatar
                                }
                              },
                              C: [{
                                T: "wx-view",
                                A: {
                                  class: "info-item-add",
                                  "bind:tap": "handleCreate"
                                },
                                C: [{
                                  T: "wx-image",
                                  A: {
                                    class: "info-item-add__plus",
                                    src: {
                                      L: function (e, t, n) {
                                        return e.iconPlus
                                      },
                                      F: function (e, t, n, r) {
                                        return e.iconPlus
                                      }
                                    }
                                  },
                                  C: []
                                }, {
                                  T: "wx-view",
                                  A: {
                                    class: "info-item-add__text"
                                  },
                                  C: [{
                                    S: "使用其它头像和昵称"
                                  }]
                                }]
                              }, {
                                T: "wx-view",
                                A: {
                                  class: "split-line"
                                },
                                C: []
                              }]
                            }]
                          }, {
                            V: 1,
                            B: [{
                              B: {
                                L: function (e, t, n) {
                                  return e.exceed
                                },
                                F: function (e, t, n, r) {
                                  return e.exceed
                                }
                              },
                              C: [{
                                T: "wx-view",
                                A: {
                                  class: "exceed-tip"
                                },
                                C: [{
                                  S: "数量已达上限，无法新增"
                                }]
                              }]
                            }]
                          }]
                        }]
                      }, {
                        T: "wx-view",
                        A: {
                          class: "buttons"
                        },
                        C: [{
                          T: "wx-view",
                          A: {
                            class: "button cancel",
                            "bind:tap": "handleCancel",
                            "hover-class": "hand-over"
                          },
                          C: [{
                            S: "取消"
                          }]
                        }, {
                          T: "wx-view",
                          A: {
                            class: "button confirm",
                            "bind:tap": "handleConfirm",
                            "hover-class": "hand-over"
                          },
                          C: [{
                            S: "允许"
                          }]
                        }]
                      }]
                    }]
                  }]
                }],
                BM: {
                  scrollHeight: [
                    [0, 1, 0, 1, 1, 0, "style"]
                  ],
                  appName: [
                    [0, 1, 0, 0, 1, 0]
                  ],
                  appIcon: [
                    [0, 1, 0, 0, 0, "src"]
                  ],
                  hide: [
                    [0, "class"]
                  ],
                  paddingBottom: [
                    [0, 1, 0, 1, "style"]
                  ]
                }
              };
            return e[""] = function () {
                return t
              },
              function (t) {
                var n = e[t];
                return n ? n() : null
              }
          }()
        },
        data: {
          overlay: !0,
          enter: !1,
          hide: !1,
          duration: 200,
          appName: "",
          appIcon: "",
          infoList: [],
          input: "",
          iconChecked: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACQMUbvAAACT0lEQVR4Ae3asUoDMRgH8ORaqgh26CYOujk4uUlBBRFXVxcXfQJfQOqDWHyBIiI4SEEEKW4OPoduWqtt4n3IQSntXa6XpEn6D7TXHl+OfD+SI5cLYygQgAAEIAABCEAAAhCAAAQgAAEIQAACPgs0ZCPK036eJ9j32OXn040fIVqlcunkq371qpJPLk2VC7oaQzi/QjwyyTZFX7SXOmdbKm2dix6U4EjJVhIUzvlHVI4OsnpS8D1oHA4hxVhVOZDrCdikY9BAk3AY4/2I8+PuTvNmEkxyPtghlomz22wlCGnHIIF04RBccEA6cYID0o0TFJAJnGCATOEEAWQSx3sg0zheA9nA8RbIFo6XQDZxvAOyjeMV0CxwlIGqnbPaT1/cSckve3vNB6pos8wKh3LMfBYjnN6vaMcrKLQC981YdGQTaZY4mUAjOBRPxRrSrHEo2dQFswEbrHLO1ihwqCwyJm4Xnk4Ph85p/+kCDiWVCvRZv36jdVtavx0RMIrkCg7lnHkPoiB6A0BvAqSUNfo/VLQPN5dwKE8lIAq0geQaTi4g00gu4uQGMoXkKs5UQLqRXMaZGkgXkus4hYCKIvmAUxhoWiRfcLQA5UXyCUcbkCqSbzhagTKReHTOmbgY3oJCdeK56v9GAsV35f917H0rz6RVm5Qy4x5zCbdxqMHageiiakju4xgDykbyA8co0GQkf3Aoh9T1IAooUmj/X6Uit+ORfB+P5ff488JLcr/r6A25SK6oCwEIQAACEIAABCAAAQhAAAIQgAAEIACBuRD4AzKlWWPvanSJAAAAAElFTkSuQmCC",
          iconPlus: w,
          scrollHeight: 66,
          screenHeight: 812,
          screenWidth: 375,
          showType: 1,
          selected: 0,
          limit: 4,
          exceed: !1,
          isBanModifyAvatar: !1,
          paddingBottom: 194
        },
        observers: {
          input(e) {
            if (!e) return;
            const t = JSON.parse(e);
            this.setData(t)
          },
          infoList(e = []) {
            console.log("[user-profile]: infoListChanged");
            const t = e.length,
              n = this.data.limit;
            this.setData({
              exceed: t >= n
            }), this.didChangeScrollHeight()
          }
        },
        created() {
          console.log("[user-profile]: created"), this.onViewportResize()
        },
        attached() {
          console.log("[user-profile]: attached"), m.triggerRender((() => {
            this.setData({
              enter: !0
            })
          })), this._onViewportResize = this.onViewportResize.bind(this), y.push(this._onViewportResize)
        },
        detached() {
          y.splice(y.indexOf(this._onViewportResize), 1)
        },
        methods: {
          _onThemeChange({
            theme: e
          }) {
            console.log("[user-profile] _onThemeChange: ", e), "dark" === e ? this.setData({
              iconPlus: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACQMUbvAAABT0lEQVR4Ae3aMQ6CQBRFUcdYuAxKF+XyXBSly7BDTMaQ3EzyJiLQXBt4fJjBkw/NcDr5U0ABBRRQQAEFFFCgIVAaxw45NE3TY574VicfSyn3Q24Ek56RjRAQCCCMAlEEWSCAMApEEWSBAMIoEEWQBQIIo0AUQRYIIIwCUQRZIIAwCkQRZIEAwigQRZAFAgijQBRBFgggjAJRBFkggDAKRBFkgQDCKBBFkAUCCGPXwmFd1OO1/87DPOC1Dvqat8+6v9mmZ3Hy0jn7d8Wz8/TVp32g9p6zedM+Yk2W5WBvB43LJZvtDfPIuz5iPf+k6x3UM9Dac/x4Ya3gQdf7DgrwAgkUBELZDhIoCISyHSRQEAhlO0igIBDKdpBAQSCU7SCBgkAo20ECBYFQtoMECgKhbAcJFARC2Q4SKAiEsh0kUBCwrIACCiiggAIKKKDALwJvdcMTni08WagAAAAASUVORK5CYII="
            }) : this.setData({
              iconPlus: w
            })
          },
          didChangeScrollHeight() {
            const {
              screenHeight: e,
              screenWidth: t
            } = this.data;
            let n = 65 * this.data.infoList.length + 1;
            const r = e > t,
              i = r ? .75 * e : .9 * e,
              o = r ? 194 : 118,
              a = r ? 361 : 277;
            a + n > i && (n = i - a), console.log("[user-profile]: screenHeight", e, "scrollHeight: ", n), this.setData({
              scrollHeight: n,
              paddingBottom: o
            })
          },
          onViewportResize() {
            console.log("[user-profile]: onViewportResize");
            const t = e.getWindowHeight(),
              n = e.getWindowWidth();
            this.setData({
              screenHeight: t,
              screenWidth: n
            }), this.didChangeScrollHeight()
          },
          handleCancel() {
            this.triggerEvent("cancel"), this.destory()
          },
          handleConfirm() {
            const e = this.data.selected;
            this.triggerEvent("confirm", {
              selected: e
            }), this.destory()
          },
          handleCreate() {
            this.data.exceed || (this.setData({
              hide: !0
            }), this.triggerEvent("create"))
          },
          handleChoose(e) {
            const t = e.currentTarget.dataset.id;
            t !== this.data.selected && this.setData({
              selected: t
            })
          },
          destory() {
            this.setData({
              enter: !1
            }), setTimeout((() => {
              this.triggerEvent("destroy")
            }), this.data.duration)
          }
        }
      });
      n(300);
      const C = e => e < 10 ? `0${e}` : `${e}`;
      const x = n(821).exparser;
      let E = !1,
        B = null;
      x.registerElement({
        is: "verify-tip",
        options: {
          classPrefix: "verify-tip",
          writeIdToDOM: !0,
          virtualHost: !0
        },
        template: {
          content: function () {
            var e = {},
              t = {
                P: "",
                C: [{
                  T: "virtuallayout",
                  A: {
                    class: "root"
                  },
                  C: [{
                    T: "wx-view",
                    A: {
                      class: "content",
                      style: {
                        L: function (e, t, n) {
                          return !(!e.top && !e.right) || void 0
                        },
                        F: function (e, t, n, r) {
                          return "top:" + e.top + "px;right:" + e.right + "px"
                        }
                      },
                      "bind:tap": "tap"
                    },
                    C: [{
                      V: 1,
                      B: [{
                        B: {
                          L: function (e, t, n) {
                            return e.showSeconds
                          },
                          F: function (e, t, n, r) {
                            return e.showSeconds
                          }
                        },
                        C: [{
                          T: "wx-view",
                          A: {
                            class: "cd"
                          },
                          C: [{
                            T: "wx-view",
                            A: {
                              style: "margin-right:4px"
                            },
                            C: [{
                              S: {
                                L: function (e, t, n) {
                                  return a(e.urlInfo, "name")
                                },
                                F: function (e, t, n, r) {
                                  return o(e.urlInfo).name
                                }
                              }
                            }]
                          }, {
                            T: "wx-view",
                            A: {
                              style: {
                                L: function (e, t, n) {
                                  return !!e.remainSeconds || void 0
                                },
                                F: function (e, t, n, r) {
                                  return "overflow-wrap:normal;color:" + (e.remainSeconds < 300 ? "#fa5151" : "#fff")
                                }
                              }
                            },
                            C: [{
                              S: {
                                L: function (e, t, n) {
                                  return e.remainStr
                                },
                                F: function (e, t, n, r) {
                                  return e.remainStr
                                }
                              }
                            }]
                          }]
                        }]
                      }, {
                        B: 1,
                        C: [{
                          T: "wx-view",
                          A: {
                            class: "msg"
                          },
                          C: [{
                            S: {
                              L: function (e, t, n) {
                                return !(!e.miniAlertLongMsg && !a(e.urlInfo, "name")) || void 0
                              },
                              F: function (e, t, n, r) {
                                return "\n        " + e.miniAlertLongMsg + o(e.urlInfo).name + "›\n      "
                              }
                            }
                          }]
                        }]
                      }]
                    }, {
                      T: "wx-view",
                      A: {},
                      C: []
                    }]
                  }]
                }],
                BM: {
                  right: [
                    [0, 0, "style"]
                  ],
                  top: [
                    [0, 0, "style"]
                  ]
                }
              };
            return e[""] = function () {
                return t
              },
              function (t) {
                var n = e[t];
                return n ? n() : null
              }
          }()
        },
        properties: {
          top: {
            type: Number,
            value: 20
          },
          right: {
            type: Number,
            value: 100
          },
          info: {
            type: String,
            value: "{}"
          }
        },
        data: {
          showSeconds: E,
          miniAlertLongMsg: "尚未实名认证",
          remainStr: "00:00",
          remainSeconds: -1,
          urlInfo: {
            name: "去实名"
          }
        },
        observers: {
          info(e) {
            this.setData(JSON.parse(e))
          },
          remainSeconds(e) {
            e < 0 && (e = 0);
            const t = e % 60,
              n = Math.floor(e / 60);
            this.setData({
              remainStr: C(n) + ":" + C(t)
            })
          }
        },
        attached() {
          this.setData({
            showSeconds: E
          }), E || setTimeout((() => {
            E = !0, this.setData({
              showSeconds: !0
            })
          }), 1e4), B = setInterval((() => {
            let {
              remainSeconds: e
            } = this.data;
            e && (e--, this.setData({
              remainSeconds: e
            }), e || this.triggerEvent("stop"))
          }), 1e3)
        },
        methods: {
          tap() {
            this.triggerEvent("click")
          },
          destroy() {
            clearInterval(B), this.triggerEvent("destroy")
          }
        }
      });
      n(521);
      t.registerElement({
        is: "ad-skip-card",
        options: {
          classPrefix: "ad-skip-card",
          writeIdToDOM: !0
        },
        template: {
          content: function () {
            var e = {},
              t = {
                P: "",
                C: [{
                  T: "wx-view",
                  A: {
                    class: "root",
                    "bind:tap": "close"
                  },
                  C: [{
                    T: "wx-image",
                    A: {
                      class: "icon",
                      src: "https://res.wx.qq.com/t/fed_upload/d3b06ed8-7ff2-4477-ae39-c37621d06f20/Frame%20348.png"
                    },
                    C: []
                  }, {
                    T: "wx-view",
                    A: {
                      class: "title"
                    },
                    C: [{
                      S: {
                        L: function (e, t, n) {
                          return !!e.amount || void 0
                        },
                        F: function (e, t, n, r) {
                          return "恭喜获得 广告跳过卡x" + e.amount
                        }
                      }
                    }]
                  }, {
                    T: "wx-view",
                    A: {
                      class: "sub"
                    },
                    C: [{
                      S: "在小游戏中使用可跳过对应视频广告"
                    }]
                  }, {
                    T: "wx-view",
                    A: {
                      class: "sub"
                    },
                    C: [{
                      S: "点击任意处关闭"
                    }]
                  }]
                }],
                BM: {
                  amount: [
                    [0, 1, 0]
                  ]
                }
              };
            return e[""] = function () {
                return t
              },
              function (t) {
                var n = e[t];
                return n ? n() : null
              }
          }()
        },
        properties: {
          amount: {
            type: Number,
            value: 1
          }
        },
        methods: {
          close() {
            this.triggerEvent("destroy")
          }
        }
      });
      var S = n(57);
      const I = n(446);
      let k = null,
        T = null,
        D = [],
        L = !1;
      const Q = e => {
          D ? (D.push(e), 1 === D.length && (I.setErrorListener((e => {
            Reporter.errorReport({
              key: "exparserScriptError",
              error: e
            })
          })), WeixinJSBridge.invoke("loadWAFile", {
            filename: "WASclBackend.wasm"
          }, (e => {
            let t = e.arrayBuffer;
            L && (t = e.arrayBuffer[__wxConfig.minaVmToken] || t), I.wasm_initialize({
              bin: t
            }, (() => {
              const e = D;
              D = null, e.forEach((e => e()))
            }))
          })))) : e()
        },
        M = () => T,
        W = t => {
          e.onViewportResize(t)
        },
        O = globalThis.atob || function (e) {
          const t = String(e).replace(/[=]+$/, "");
          let n = "";
          if (t.length % 4 == 1) throw new Error('"atob" failed');
          for (let e, r, i = 0, o = 0; r = t.charAt(o++); ~r && (e = i % 4 ? 64 * e + r : r, i++ % 4) ? n += String.fromCharCode(255 & e >> (-2 * i & 6)) : 0) r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);
          return n
        },
        N = e => {
          const t = () => {
            e({
              mainRoot: T
            })
          };
          if (k) return void setTimeout(t, 0);
          Q((() => {
            try {
              W((() => {
                n(995).triggerRender()
              }));
              const r = I.Context.create();
              k = r.createElement("empty", "virtuallayout"), r.bindRootNode(k), k.setClass("__wx_scl__root_node");
              var e = n(995);
              e.globalOptions.documentBackend = "custom", e.globalOptions.customContext = r, e.initBackend(), S.W.length && r.appendStyleSheet(S.W.join("")), S.J.length && S.J.forEach((e => r.appendStyleSheetBincode((e => {
                const t = O(e),
                  n = t.length,
                  r = new Uint8Array(n);
                for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
                return r
              })(e))));
              const i = r.createElement("empty", "virtuallayout");
              k.appendChild(i), i.release(), T = e.createElement("virtuallayout", c), T.classList.toggle("__wx_scl__main_root", !0), e.Element.replaceDocumentElement(T, k, 0), setTimeout(t, 0)
            } catch (e) {
              e.stack
            }
          }))
        },
        F = e => n(995).globalOptions.customContext.constructor.getExparserElementByViewId(e),
        R = () => {
          n(995).triggerRender()
        };
      void 0 !== __wxConfig && "ios" !== __wxConfig.platform && "function" == typeof __wxConfig.onReady ? (L = "mina" === __wxConfig.platform, __wxConfig.onReady((() => {
        setTimeout((() => {
          __wxConfig.platform, Q((() => {}))
        }), 3e3)
      }))) : __wxConfig.platform
    })(), __sclEngine__ = r
  })();
  var __waServiceInit__ = function () {
    if (__exportGlobal__.definePlugin = __wxModule__.definePlugin, __exportGlobal__.requirePlugin = __wxModule__.requirePlugin, "function" == typeof __passWAServiceGlobal__) {
      var e = {};
      e.__appServiceEngine__ = __appServiceEngine__, e.__appServiceSDK__ = __appServiceSDK__, e.__virtualDOM__ = __virtualDOM__, e.__subContextEngine__ = __subContextEngine__, e.__sclEngine__ = __sclEngine__, e.Reporter = Reporter, e.exparser = exparser, e.WeixinJSBridge = WeixinJSBridge, e.Protect = Protect, __passWAServiceGlobal__(e)
    }
  };

  function __doWAServiceInit__() {
    var e;
    "undefined" != typeof wx && wx.version && (e = wx.version), __waServiceInit__(), e && "undefined" != typeof __exportGlobal__ && __exportGlobal__.wx && (__exportGlobal__.wx.version = e)
  }
  __subContextEngine__.isIsolateContext(), __subContextEngine__.isIsolateContext() || __doWAServiceInit__();;
  __subContextEngine__.initAppRelatedContexts(__exportGlobal__);
})(this);
var __WAServiceEndTime__ = Date.now();
try {
  Error.stackTraceLimit = __defaultStackLimit__;
  __defaultStackLimit__ = undefined
} catch (e) {}
typeof __wxLibrary.onEnd === 'function' && __wxLibrary.onEnd();
__wxLibrary = undefined;

//# sourceURL=WAServiceMainContext.js