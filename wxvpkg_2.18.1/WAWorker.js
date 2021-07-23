var __wxLibrary = {
  fileName: 'WAWorker.js',
  envType: 'Worker',
  contextType: 'others',
  execStart: Date.now()
};
(function (global) {
  ;
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

          function o(e, t, n, o, r) {
            var a = {};
            return Object.keys(o).forEach((function (e) {
              a[e] = o[e]
            })), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce((function (n, o) {
              return o(e, t, n) || n
            }), a), r && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(r) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
          }
          n.r(t), n.d(t, {
            default: () => o
          })
        },
        6470: (e, t, n) => {
          "use strict";

          function o(e, t, n, o, r, a, i) {
            try {
              var s = e[a](i),
                c = s.value
            } catch (e) {
              return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(o, r)
          }

          function r(e) {
            return function () {
              var t = this,
                n = arguments;
              return new Promise((function (r, a) {
                var i = e.apply(t, n);

                function s(e) {
                  o(i, r, a, s, c, "next", e)
                }

                function c(e) {
                  o(i, r, a, s, c, "throw", e)
                }
                s(void 0)
              }))
            }
          }
          n.r(t), n.d(t, {
            default: () => r
          })
        },
        1217: (e, t, n) => {
          "use strict";

          function o(e, t, n, o) {
            n && Object.defineProperty(e, t, {
              enumerable: n.enumerable,
              configurable: n.configurable,
              writable: n.writable,
              value: n.initializer ? n.initializer.call(o) : void 0
            })
          }
          n.r(t), n.d(t, {
            default: () => o
          })
        },
        6647: (e, t, n) => {
          "use strict";

          function o(e, t) {
            throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.")
          }
          n.r(t), n.d(t, {
            default: () => o
          })
        },
        1466: (e, t, n) => {
          "use strict";

          function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n, e
          }

          function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              t && (o = o.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              }))), n.push.apply(n, o)
            }
            return n
          }

          function a(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2 ? r(Object(n), !0).forEach((function (t) {
                o(e, t, n[t])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              }))
            }
            return e
          }
          n.r(t), n.d(t, {
            default: () => a
          })
        },
        5238: (e, t, n) => {
          "use strict";

          function o(e, t) {
            if (null == e) return {};
            var n, o, r = function (e, t) {
              if (null == e) return {};
              var n, o, r = {},
                a = Object.keys(e);
              for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
              return r
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
            }
            return r
          }
          n.r(t), n.d(t, {
            default: () => o
          })
        },
        929: (e, t, n) => {
          "use strict";

          function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
          }
          n.r(t), n.d(t, {
            default: () => o
          })
        },
        5551: (e, t, n) => {
          var o = {
            "./applyDecoratedDescriptor": 1964,
            "./asyncToGenerator": 6470,
            "./initializerDefineProperty": 1217,
            "./initializerWarningHelper": 6647,
            "./objectSpread2": 1466,
            "./objectWithoutProperties": 5238,
            "./typeof": 929
          };

          function r(e) {
            var t = a(e);
            return n(t)
          }

          function a(e) {
            if (!n.o(o, e)) {
              var t = new Error("Cannot find module '" + e + "'");
              throw t.code = "MODULE_NOT_FOUND", t
            }
            return o[e]
          }
          r.keys = function () {
            return Object.keys(o)
          }, r.resolve = a, e.exports = r, r.id = 5551
        },
        5396: e => {
          var t = function (e) {
            "use strict";
            var t, n = Object.prototype,
              o = n.hasOwnProperty,
              r = "function" == typeof Symbol ? Symbol : {},
              a = r.iterator || "@@iterator",
              i = r.asyncIterator || "@@asyncIterator",
              s = r.toStringTag || "@@toStringTag";

            function c(e, t, n) {
              return Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }), e[t]
            }
            try {
              c({}, "")
            } catch (e) {
              c = function (e, t, n) {
                return e[t] = n
              }
            }

            function l(e, t, n, o) {
              var r = t && t.prototype instanceof y ? t : y,
                a = Object.create(r.prototype),
                i = new T(o || []);
              return a._invoke = function (e, t, n) {
                var o = d;
                return function (r, a) {
                  if (o === f) throw new Error("Generator is already running");
                  if (o === h) {
                    if ("throw" === r) throw a;
                    return M()
                  }
                  for (n.method = r, n.arg = a;;) {
                    var i = n.delegate;
                    if (i) {
                      var s = k(i, n);
                      if (s) {
                        if (s === g) continue;
                        return s
                      }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                      if (o === d) throw o = h, n.arg;
                      n.dispatchException(n.arg)
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    o = f;
                    var c = u(e, t, n);
                    if ("normal" === c.type) {
                      if (o = n.done ? h : p, c.arg === g) continue;
                      return {
                        value: c.arg,
                        done: n.done
                      }
                    }
                    "throw" === c.type && (o = h, n.method = "throw", n.arg = c.arg)
                  }
                }
              }(e, n, i), a
            }

            function u(e, t, n) {
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
            e.wrap = l;
            var d = "suspendedStart",
              p = "suspendedYield",
              f = "executing",
              h = "completed",
              g = {};

            function y() {}

            function v() {}

            function m() {}
            var b = {};
            b[a] = function () {
              return this
            };
            var _ = Object.getPrototypeOf,
              w = _ && _(_(x([])));
            w && w !== n && o.call(w, a) && (b = w);
            var I = m.prototype = y.prototype = Object.create(b);

            function S(e) {
              ["next", "throw", "return"].forEach((function (t) {
                c(e, t, (function (e) {
                  return this._invoke(t, e)
                }))
              }))
            }

            function A(e, t) {
              function n(r, a, i, s) {
                var c = u(e[r], e, a);
                if ("throw" !== c.type) {
                  var l = c.arg,
                    d = l.value;
                  return d && "object" == typeof d && o.call(d, "__await") ? t.resolve(d.__await).then((function (e) {
                    n("next", e, i, s)
                  }), (function (e) {
                    n("throw", e, i, s)
                  })) : t.resolve(d).then((function (e) {
                    l.value = e, i(l)
                  }), (function (e) {
                    return n("throw", e, i, s)
                  }))
                }
                s(c.arg)
              }
              var r;
              this._invoke = function (e, o) {
                function a() {
                  return new t((function (t, r) {
                    n(e, o, t, r)
                  }))
                }
                return r = r ? r.then(a, a) : a()
              }
            }

            function k(e, n) {
              var o = e.iterator[n.method];
              if (o === t) {
                if (n.delegate = null, "throw" === n.method) {
                  if (e.iterator.return && (n.method = "return", n.arg = t, k(e, n), "throw" === n.method)) return g;
                  n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return g
              }
              var r = u(o, e.iterator, n.arg);
              if ("throw" === r.type) return n.method = "throw", n.arg = r.arg, n.delegate = null, g;
              var a = r.arg;
              return a ? a.done ? (n[e.resultName] = a.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, g) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, g)
            }

            function C(e) {
              var t = {
                tryLoc: e[0]
              };
              1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function P(e) {
              var t = e.completion || {};
              t.type = "normal", delete t.arg, e.completion = t
            }

            function T(e) {
              this.tryEntries = [{
                tryLoc: "root"
              }], e.forEach(C, this), this.reset(!0)
            }

            function x(e) {
              if (e) {
                var n = e[a];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                  var r = -1,
                    i = function n() {
                      for (; ++r < e.length;)
                        if (o.call(e, r)) return n.value = e[r], n.done = !1, n;
                      return n.value = t, n.done = !0, n
                    };
                  return i.next = i
                }
              }
              return {
                next: M
              }
            }

            function M() {
              return {
                value: t,
                done: !0
              }
            }
            return v.prototype = I.constructor = m, m.constructor = v, v.displayName = c(m, s, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
            }, e.mark = function (e) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, c(e, s, "GeneratorFunction")), e.prototype = Object.create(I), e
            }, e.awrap = function (e) {
              return {
                __await: e
              }
            }, S(A.prototype), A.prototype[i] = function () {
              return this
            }, e.AsyncIterator = A, e.async = function (t, n, o, r, a) {
              void 0 === a && (a = Promise);
              var i = new A(l(t, n, o, r), a);
              return e.isGeneratorFunction(n) ? i : i.next().then((function (e) {
                return e.done ? e.value : i.next()
              }))
            }, S(I), c(I, s, "Generator"), I[a] = function () {
              return this
            }, I.toString = function () {
              return "[object Generator]"
            }, e.keys = function (e) {
              var t = [];
              for (var n in e) t.push(n);
              return t.reverse(),
                function n() {
                  for (; t.length;) {
                    var o = t.pop();
                    if (o in e) return n.value = o, n.done = !1, n
                  }
                  return n.done = !0, n
                }
            }, e.values = x, T.prototype = {
              constructor: T,
              reset: function (e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(P), !e)
                  for (var n in this) "t" === n.charAt(0) && o.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
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

                function r(o, r) {
                  return s.type = "throw", s.arg = e, n.next = o, r && (n.method = "next", n.arg = t), !!r
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                  var i = this.tryEntries[a],
                    s = i.completion;
                  if ("root" === i.tryLoc) return r("end");
                  if (i.tryLoc <= this.prev) {
                    var c = o.call(i, "catchLoc"),
                      l = o.call(i, "finallyLoc");
                    if (c && l) {
                      if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                    } else if (c) {
                      if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                    } else {
                      if (!l) throw new Error("try statement without catch or finally");
                      if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var r = this.tryEntries[n];
                  if (r.tryLoc <= this.prev && o.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                    var a = r;
                    break
                  }
                }
                a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                var i = a ? a.completion : {};
                return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, g) : this.complete(i)
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), g
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), P(n), g
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var o = n.completion;
                    if ("throw" === o.type) {
                      var r = o.arg;
                      P(n)
                    }
                    return r
                  }
                }
                throw new Error("illegal catch attempt")
              },
              delegateYield: function (e, n, o) {
                return this.delegate = {
                  iterator: x(e),
                  resultName: n,
                  nextLoc: o
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
          const o = n(5551);
          o.keys().forEach((e => {
            BabelRuntimeHelpers[e.substr(2)] = o(e)
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
          var o = n(816),
            r = n(3718),
            a = n(6541),
            i = n(5353),
            s = a.data,
            c = a.normalize,
            l = "USE_FUNCTION_CONSTRUCTOR",
            u = "AsyncIteratorPrototype",
            d = function (e, t) {
              if (r(e))
                for (var n = 0; n < e.length; n++) s[c(e[n])] = t
            };
          e.exports = function (e) {
            "object" == typeof e && (d(e.useNative, a.NATIVE), d(e.usePolyfill, a.POLYFILL), d(e.useFeatureDetection, null), o(e, l) && (i.USE_FUNCTION_CONSTRUCTOR = !!e.USE_FUNCTION_CONSTRUCTOR), o(e, u) && (i.USE_FUNCTION_CONSTRUCTOR = e.AsyncIteratorPrototype))
          }
        },
        3819: e => {
          e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e
          }
        },
        8505: (e, t, n) => {
          var o = n(5052);
          e.exports = function (e) {
            if (!o(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
            return e
          }
        },
        9736: (e, t, n) => {
          var o = n(95),
            r = n(2391),
            a = n(1787),
            i = o("unscopables"),
            s = Array.prototype;
          null == s[i] && a.f(s, i, {
            configurable: !0,
            value: r(null)
          }), e.exports = function (e) {
            s[i][e] = !0
          }
        },
        6637: (e, t, n) => {
          "use strict";
          var o = n(966).charAt;
          e.exports = function (e, t, n) {
            return t + (n ? o(e, t).length : 1)
          }
        },
        7728: e => {
          e.exports = function (e, t, n) {
            if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return e
          }
        },
        1176: (e, t, n) => {
          var o = n(5052);
          e.exports = function (e) {
            if (!o(e)) throw TypeError(String(e) + " is not an object");
            return e
          }
        },
        3339: e => {
          e.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
        },
        9918: (e, t, n) => {
          "use strict";
          var o, r = n(3339),
            a = n(7400),
            i = n(9859),
            s = n(5052),
            c = n(816),
            l = n(1589),
            u = n(5762),
            d = n(7487),
            p = n(1787).f,
            f = n(7567),
            h = n(6540),
            g = n(95),
            y = n(1441),
            v = i.Int8Array,
            m = v && v.prototype,
            b = i.Uint8ClampedArray,
            _ = b && b.prototype,
            w = v && f(v),
            I = m && f(m),
            S = Object.prototype,
            A = S.isPrototypeOf,
            k = g("toStringTag"),
            C = y("TYPED_ARRAY_TAG"),
            P = r && !!h && "Opera" !== l(i.opera),
            T = !1,
            x = {
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
            M = {
              BigInt64Array: 8,
              BigUint64Array: 8
            },
            E = function (e) {
              if (!s(e)) return !1;
              var t = l(e);
              return c(x, t) || c(M, t)
            };
          for (o in x) i[o] || (P = !1);
          if ((!P || "function" != typeof w || w === Function.prototype) && (w = function () {
              throw TypeError("Incorrect invocation")
            }, P))
            for (o in x) i[o] && h(i[o], w);
          if ((!P || !I || I === S) && (I = w.prototype, P))
            for (o in x) i[o] && h(i[o].prototype, I);
          if (P && f(_) !== I && h(_, I), a && !c(I, k))
            for (o in T = !0, p(I, k, {
                get: function () {
                  return s(this) ? this[C] : void 0
                }
              }), x) i[o] && u(i[o], C, o);
          e.exports = {
            NATIVE_ARRAY_BUFFER_VIEWS: P,
            TYPED_ARRAY_TAG: T && C,
            aTypedArray: function (e) {
              if (E(e)) return e;
              throw TypeError("Target is not a typed array")
            },
            aTypedArrayConstructor: function (e) {
              if (h) {
                if (A.call(w, e)) return e
              } else
                for (var t in x)
                  if (c(x, o)) {
                    var n = i[t];
                    if (n && (e === n || A.call(n, e))) return e
                  } throw TypeError("Target is not a typed array constructor")
            },
            exportTypedArrayMethod: function (e, t, n) {
              if (a) {
                if (n)
                  for (var o in x) {
                    var r = i[o];
                    if (r && c(r.prototype, e)) try {
                      delete r.prototype[e]
                    } catch (e) {}
                  }
                I[e] && !n || d(I, e, n ? t : P && m[e] || t)
              }
            },
            exportTypedArrayStaticMethod: function (e, t, n) {
              var o, r;
              if (a) {
                if (h) {
                  if (n)
                    for (o in x)
                      if ((r = i[o]) && c(r, e)) try {
                        delete r[e]
                      } catch (e) {}
                  if (w[e] && !n) return;
                  try {
                    return d(w, e, n ? t : P && w[e] || t)
                  } catch (e) {}
                }
                for (o in x) !(r = i[o]) || r[e] && !n || d(r, e, t)
              }
            },
            isView: function (e) {
              if (!s(e)) return !1;
              var t = l(e);
              return "DataView" === t || c(x, t) || c(M, t)
            },
            isTypedArray: E,
            TypedArray: w,
            TypedArrayPrototype: I
          }
        },
        3816: (e, t, n) => {
          "use strict";
          var o = n(9859),
            r = n(7400),
            a = n(3339),
            i = n(5762),
            s = n(8787),
            c = n(4229),
            l = n(7728),
            u = n(6051),
            d = n(4237),
            p = n(7331),
            f = n(6201),
            h = n(7567),
            g = n(6540),
            y = n(8151).f,
            v = n(1787).f,
            m = n(7065),
            b = n(4555),
            _ = n(6407),
            w = _.get,
            I = _.set,
            S = "ArrayBuffer",
            A = "DataView",
            k = "Wrong index",
            C = o.ArrayBuffer,
            P = C,
            T = o.DataView,
            x = T && T.prototype,
            M = Object.prototype,
            E = o.RangeError,
            O = f.pack,
            L = f.unpack,
            D = function (e) {
              return [255 & e]
            },
            B = function (e) {
              return [255 & e, e >> 8 & 255]
            },
            R = function (e) {
              return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
            },
            N = function (e) {
              return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
            },
            F = function (e) {
              return O(e, 23, 4)
            },
            W = function (e) {
              return O(e, 52, 8)
            },
            j = function (e, t) {
              v(e.prototype, t, {
                get: function () {
                  return w(this)[t]
                }
              })
            },
            $ = function (e, t, n, o) {
              var r = p(n),
                a = w(e);
              if (r + t > a.byteLength) throw E(k);
              var i = w(a.buffer).bytes,
                s = r + a.byteOffset,
                c = i.slice(s, s + t);
              return o ? c : c.reverse()
            },
            V = function (e, t, n, o, r, a) {
              var i = p(n),
                s = w(e);
              if (i + t > s.byteLength) throw E(k);
              for (var c = w(s.buffer).bytes, l = i + s.byteOffset, u = o(+r), d = 0; d < t; d++) c[l + d] = u[a ? d : t - d - 1]
            };
          if (a) {
            if (!c((function () {
                C(1)
              })) || !c((function () {
                new C(-1)
              })) || c((function () {
                return new C, new C(1.5), new C(NaN), C.name != S
              }))) {
              for (var Z, U = (P = function (e) {
                  return l(this, P), new C(p(e))
                }).prototype = C.prototype, G = y(C), q = 0; G.length > q;)(Z = G[q++]) in P || i(P, Z, C[Z]);
              U.constructor = P
            }
            g && h(x) !== M && g(x, M);
            var H = new T(new P(2)),
              Q = x.setInt8;
            H.setInt8(0, 2147483648), H.setInt8(1, 2147483649), !H.getInt8(0) && H.getInt8(1) || s(x, {
              setInt8: function (e, t) {
                Q.call(this, e, t << 24 >> 24)
              },
              setUint8: function (e, t) {
                Q.call(this, e, t << 24 >> 24)
              }
            }, {
              unsafe: !0
            })
          } else P = function (e) {
            l(this, P, S);
            var t = p(e);
            I(this, {
              bytes: m.call(new Array(t), 0),
              byteLength: t
            }), r || (this.byteLength = t)
          }, T = function (e, t, n) {
            l(this, T, A), l(e, P, A);
            var o = w(e).byteLength,
              a = u(t);
            if (a < 0 || a > o) throw E("Wrong offset");
            if (a + (n = void 0 === n ? o - a : d(n)) > o) throw E("Wrong length");
            I(this, {
              buffer: e,
              byteLength: n,
              byteOffset: a
            }), r || (this.buffer = e, this.byteLength = n, this.byteOffset = a)
          }, r && (j(P, "byteLength"), j(T, "buffer"), j(T, "byteLength"), j(T, "byteOffset")), s(T.prototype, {
            getInt8: function (e) {
              return $(this, 1, e)[0] << 24 >> 24
            },
            getUint8: function (e) {
              return $(this, 1, e)[0]
            },
            getInt16: function (e) {
              var t = $(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
              return (t[1] << 8 | t[0]) << 16 >> 16
            },
            getUint16: function (e) {
              var t = $(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
              return t[1] << 8 | t[0]
            },
            getInt32: function (e) {
              return N($(this, 4, e, arguments.length > 1 ? arguments[1] : void 0))
            },
            getUint32: function (e) {
              return N($(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
            },
            getFloat32: function (e) {
              return L($(this, 4, e, arguments.length > 1 ? arguments[1] : void 0), 23)
            },
            getFloat64: function (e) {
              return L($(this, 8, e, arguments.length > 1 ? arguments[1] : void 0), 52)
            },
            setInt8: function (e, t) {
              V(this, 1, e, D, t)
            },
            setUint8: function (e, t) {
              V(this, 1, e, D, t)
            },
            setInt16: function (e, t) {
              V(this, 2, e, B, t, arguments.length > 2 ? arguments[2] : void 0)
            },
            setUint16: function (e, t) {
              V(this, 2, e, B, t, arguments.length > 2 ? arguments[2] : void 0)
            },
            setInt32: function (e, t) {
              V(this, 4, e, R, t, arguments.length > 2 ? arguments[2] : void 0)
            },
            setUint32: function (e, t) {
              V(this, 4, e, R, t, arguments.length > 2 ? arguments[2] : void 0)
            },
            setFloat32: function (e, t) {
              V(this, 4, e, F, t, arguments.length > 2 ? arguments[2] : void 0)
            },
            setFloat64: function (e, t) {
              V(this, 8, e, W, t, arguments.length > 2 ? arguments[2] : void 0)
            }
          });
          b(P, S), b(T, A), e.exports = {
            ArrayBuffer: P,
            DataView: T
          }
        },
        7065: (e, t, n) => {
          "use strict";
          var o = n(2991),
            r = n(3231),
            a = n(4237);
          e.exports = function (e) {
            for (var t = o(this), n = a(t.length), i = arguments.length, s = r(i > 1 ? arguments[1] : void 0, n), c = i > 2 ? arguments[2] : void 0, l = void 0 === c ? n : r(c, n); l > s;) t[s++] = e;
            return t
          }
        },
        9540: (e, t, n) => {
          var o = n(905),
            r = n(4237),
            a = n(3231),
            i = function (e) {
              return function (t, n, i) {
                var s, c = o(t),
                  l = r(c.length),
                  u = a(i, l);
                if (e && n != n) {
                  for (; l > u;)
                    if ((s = c[u++]) != s) return !0
                } else
                  for (; l > u; u++)
                    if ((e || u in c) && c[u] === n) return e || u || 0;
                return !e && -1
              }
            };
          e.exports = {
            includes: i(!0),
            indexOf: i(!1)
          }
        },
        9996: (e, t, n) => {
          var o = n(7636),
            r = n(9337),
            a = n(2991),
            i = n(4237),
            s = n(7501),
            c = [].push,
            l = function (e) {
              var t = 1 == e,
                n = 2 == e,
                l = 3 == e,
                u = 4 == e,
                d = 6 == e,
                p = 7 == e,
                f = 5 == e || d;
              return function (h, g, y, v) {
                for (var m, b, _ = a(h), w = r(_), I = o(g, y, 3), S = i(w.length), A = 0, k = v || s, C = t ? k(h, S) : n || p ? k(h, 0) : void 0; S > A; A++)
                  if ((f || A in w) && (b = I(m = w[A], A, _), e))
                    if (t) C[A] = b;
                    else if (b) switch (e) {
                  case 3:
                    return !0;
                  case 5:
                    return m;
                  case 6:
                    return A;
                  case 2:
                    c.call(C, m)
                } else switch (e) {
                  case 4:
                    return !1;
                  case 7:
                    c.call(C, m)
                }
                return d ? -1 : l || u ? u : C
              }
            };
          e.exports = {
            forEach: l(0),
            map: l(1),
            filter: l(2),
            some: l(3),
            every: l(4),
            find: l(5),
            findIndex: l(6),
            filterOut: l(7)
          }
        },
        6038: (e, t, n) => {
          "use strict";
          var o = n(4229);
          e.exports = function (e, t) {
            var n = [][e];
            return !!n && o((function () {
              n.call(null, t || function () {
                throw 1
              }, 1)
            }))
          }
        },
        3143: (e, t, n) => {
          var o = n(3819),
            r = n(2991),
            a = n(9337),
            i = n(4237),
            s = function (e) {
              return function (t, n, s, c) {
                o(n);
                var l = r(t),
                  u = a(l),
                  d = i(l.length),
                  p = e ? d - 1 : 0,
                  f = e ? -1 : 1;
                if (s < 2)
                  for (;;) {
                    if (p in u) {
                      c = u[p], p += f;
                      break
                    }
                    if (p += f, e ? p < 0 : d <= p) throw TypeError("Reduce of empty array with no initial value")
                  }
                for (; e ? p >= 0 : d > p; p += f) p in u && (c = n(c, u[p], p, l));
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
            n = function (e, a) {
              var i = e.length,
                s = t(i / 2);
              return i < 8 ? o(e, a) : r(n(e.slice(0, s), a), n(e.slice(s), a), a)
            },
            o = function (e, t) {
              for (var n, o, r = e.length, a = 1; a < r;) {
                for (o = a, n = e[a]; o && t(e[o - 1], n) > 0;) e[o] = e[--o];
                o !== a++ && (e[o] = n)
              }
              return e
            },
            r = function (e, t, n) {
              for (var o = e.length, r = t.length, a = 0, i = 0, s = []; a < o || i < r;) a < o && i < r ? s.push(n(e[a], t[i]) <= 0 ? e[a++] : t[i++]) : s.push(a < o ? e[a++] : t[i++]);
              return s
            };
          e.exports = n
        },
        7501: (e, t, n) => {
          var o = n(5052),
            r = n(3718),
            a = n(95)("species");
          e.exports = function (e, t) {
            var n;
            return r(e) && ("function" != typeof (n = e.constructor) || n !== Array && !r(n.prototype) ? o(n) && null === (n = n[a]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
          }
        },
        4575: (e, t, n) => {
          var o = n(95)("iterator"),
            r = !1;
          try {
            var a = 0,
              i = {
                next: function () {
                  return {
                    done: !!a++
                  }
                },
                return: function () {
                  r = !0
                }
              };
            i[o] = function () {
              return this
            }, Array.from(i, (function () {
              throw 2
            }))
          } catch (e) {}
          e.exports = function (e, t) {
            if (!t && !r) return !1;
            var n = !1;
            try {
              var a = {};
              a[o] = function () {
                return {
                  next: function () {
                    return {
                      done: n = !0
                    }
                  }
                }
              }, e(a)
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
          var o = n(1601),
            r = n(7079),
            a = n(95)("toStringTag"),
            i = "Arguments" == r(function () {
              return arguments
            }());
          e.exports = o ? r : function (e) {
            var t, n, o;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
              try {
                return e[t]
              } catch (e) {}
            }(t = Object(e), a)) ? n : i ? r(t) : "Object" == (o = r(t)) && "function" == typeof t.callee ? "Arguments" : o
          }
        },
        7081: (e, t, n) => {
          var o = n(816),
            r = n(4826),
            a = n(7933),
            i = n(1787);
          e.exports = function (e, t) {
            for (var n = r(t), s = i.f, c = a.f, l = 0; l < n.length; l++) {
              var u = n[l];
              o(e, u) || s(e, u, c(t, u))
            }
          }
        },
        7528: (e, t, n) => {
          var o = n(4229);
          e.exports = !o((function () {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
          }))
        },
        3723: (e, t, n) => {
          "use strict";
          var o = n(693).IteratorPrototype,
            r = n(2391),
            a = n(5358),
            i = n(4555),
            s = n(5495),
            c = function () {
              return this
            };
          e.exports = function (e, t, n) {
            var l = t + " Iterator";
            return e.prototype = r(o, {
              next: a(1, n)
            }), i(e, l, !1, !0), s[l] = c, e
          }
        },
        5762: (e, t, n) => {
          var o = n(7400),
            r = n(1787),
            a = n(5358);
          e.exports = o ? function (e, t, n) {
            return r.f(e, t, a(1, n))
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
          var o = n(2066),
            r = n(1787),
            a = n(5358);
          e.exports = function (e, t, n) {
            var i = o(t);
            i in e ? r.f(e, i, a(0, n)) : e[i] = n
          }
        },
        7675: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(3723),
            a = n(7567),
            i = n(6540),
            s = n(4555),
            c = n(5762),
            l = n(7487),
            u = n(95),
            d = n(4231),
            p = n(5495),
            f = n(693),
            h = f.IteratorPrototype,
            g = f.BUGGY_SAFARI_ITERATORS,
            y = u("iterator"),
            v = "keys",
            m = "values",
            b = "entries",
            _ = function () {
              return this
            };
          e.exports = function (e, t, n, u, f, w, I) {
            r(n, t, u);
            var S, A, k, C = function (e) {
                if (e === f && E) return E;
                if (!g && e in x) return x[e];
                switch (e) {
                  case v:
                  case m:
                  case b:
                    return function () {
                      return new n(this, e)
                    }
                }
                return function () {
                  return new n(this)
                }
              },
              P = t + " Iterator",
              T = !1,
              x = e.prototype,
              M = x[y] || x["@@iterator"] || f && x[f],
              E = !g && M || C(f),
              O = "Array" == t && x.entries || M;
            if (O && (S = a(O.call(new e)), h !== Object.prototype && S.next && (d || a(S) === h || (i ? i(S, h) : "function" != typeof S[y] && c(S, y, _)), s(S, P, !0, !0), d && (p[P] = _))), f == m && M && M.name !== m && (T = !0, E = function () {
                return M.call(this)
              }), d && !I || x[y] === E || c(x, y, E), p[t] = E, f)
              if (A = {
                  values: C(m),
                  keys: w ? E : C(v),
                  entries: C(b)
                }, I)
                for (k in A)(g || T || !(k in x)) && l(x, k, A[k]);
              else o({
                target: t,
                proto: !0,
                forced: g || T
              }, A);
            return A
          }
        },
        8423: (e, t, n) => {
          var o = n(9276),
            r = n(816),
            a = n(5391),
            i = n(1787).f;
          e.exports = function (e) {
            var t = o.Symbol || (o.Symbol = {});
            r(t, e) || i(t, e, {
              value: a.f(e)
            })
          }
        },
        7400: (e, t, n) => {
          var o = n(4229);
          e.exports = !o((function () {
            return 7 != Object.defineProperty({}, 1, {
              get: function () {
                return 7
              }
            })[1]
          }))
        },
        2635: (e, t, n) => {
          var o = n(9859),
            r = n(5052),
            a = o.document,
            i = r(a) && r(a.createElement);
          e.exports = function (e) {
            return i ? a.createElement(e) : {}
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
          var o = n(598).match(/firefox\/(\d+)/i);
          e.exports = !!o && +o[1]
        },
        8639: e => {
          e.exports = "object" == typeof window
        },
        8506: (e, t, n) => {
          var o = n(598);
          e.exports = /MSIE|Trident/.test(o)
        },
        2023: (e, t, n) => {
          var o = n(598);
          e.exports = /(?:iphone|ipod|ipad).*applewebkit/i.test(o)
        },
        8801: (e, t, n) => {
          var o = n(7079),
            r = n(9859);
          e.exports = "process" == o(r.process)
        },
        263: (e, t, n) => {
          var o = n(598);
          e.exports = /web0s(?!.*chrome)/i.test(o)
        },
        598: (e, t, n) => {
          var o = n(1333);
          e.exports = o("navigator", "userAgent") || ""
        },
        6358: (e, t, n) => {
          var o, r, a = n(9859),
            i = n(598),
            s = a.process,
            c = s && s.versions,
            l = c && c.v8;
          l ? r = (o = l.split("."))[0] < 4 ? 1 : o[0] + o[1] : i && (!(o = i.match(/Edge\/(\d+)/)) || o[1] >= 74) && (o = i.match(/Chrome\/(\d+)/)) && (r = o[1]), e.exports = r && +r
        },
        9811: (e, t, n) => {
          var o = n(598).match(/AppleWebKit\/(\d+)\./);
          e.exports = !!o && +o[1]
        },
        3837: e => {
          e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        },
        3103: (e, t, n) => {
          var o = n(9859),
            r = n(7933).f,
            a = n(5762),
            i = n(7487),
            s = n(2079),
            c = n(7081),
            l = n(6541);
          e.exports = function (e, t) {
            var n, u, d, p, f, h = e.target,
              g = e.global,
              y = e.stat;
            if (n = g ? o : y ? o[h] || s(h, {}) : (o[h] || {}).prototype)
              for (u in t) {
                if (p = t[u], d = e.noTargetGet ? (f = r(n, u)) && f.value : n[u], !l(g ? u : h + (y ? "." : "#") + u, e.forced) && void 0 !== d) {
                  if (typeof p == typeof d) continue;
                  c(p, d)
                }(e.sham || d && d.sham) && a(p, "sham", !0), i(n, u, p, e)
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
          var o = n(7487),
            r = n(3466),
            a = n(4229),
            i = n(95),
            s = n(5762),
            c = i("species"),
            l = RegExp.prototype;
          e.exports = function (e, t, n, u) {
            var d = i(e),
              p = !a((function () {
                var t = {};
                return t[d] = function () {
                  return 7
                }, 7 != "" [e](t)
              })),
              f = p && !a((function () {
                var t = !1,
                  n = /a/;
                return "split" === e && ((n = {}).constructor = {}, n.constructor[c] = function () {
                  return n
                }, n.flags = "", n[d] = /./ [d]), n.exec = function () {
                  return t = !0, null
                }, n[d](""), !t
              }));
            if (!p || !f || n) {
              var h = /./ [d],
                g = t(d, "" [e], (function (e, t, n, o, a) {
                  var i = t.exec;
                  return i === r || i === l.exec ? p && !a ? {
                    done: !0,
                    value: h.call(t, n, o)
                  } : {
                    done: !0,
                    value: e.call(n, t, o)
                  } : {
                    done: !1
                  }
                }));
              o(String.prototype, e, g[0]), o(l, d, g[1])
            }
            u && s(l[d], "sham", !0)
          }
        },
        4990: (e, t, n) => {
          "use strict";
          var o = n(3718),
            r = n(4237),
            a = n(7636),
            i = function (e, t, n, s, c, l, u, d) {
              for (var p, f = c, h = 0, g = !!u && a(u, d, 3); h < s;) {
                if (h in n) {
                  if (p = g ? g(n[h], h, t) : n[h], l > 0 && o(p)) f = i(e, t, p, r(p.length), f, l - 1) - 1;
                  else {
                    if (f >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                    e[f] = p
                  }
                  f++
                }
                h++
              }
              return f
            };
          e.exports = i
        },
        7636: (e, t, n) => {
          var o = n(3819);
          e.exports = function (e, t, n) {
            if (o(e), void 0 === t) return e;
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
                return function (n, o) {
                  return e.call(t, n, o)
                };
              case 3:
                return function (n, o, r) {
                  return e.call(t, n, o, r)
                }
            }
            return function () {
              return e.apply(t, arguments)
            }
          }
        },
        1333: (e, t, n) => {
          var o = n(9276),
            r = n(9859),
            a = function (e) {
              return "function" == typeof e ? e : void 0
            };
          e.exports = function (e, t) {
            return arguments.length < 2 ? a(o[e]) || a(r[e]) : o[e] && o[e][t] || r[e] && r[e][t]
          }
        },
        8830: (e, t, n) => {
          var o = n(1589),
            r = n(5495),
            a = n(95)("iterator");
          e.exports = function (e) {
            if (null != e) return e[a] || e["@@iterator"] || r[o(e)]
          }
        },
        17: (e, t, n) => {
          var o = n(2991),
            r = Math.floor,
            a = "".replace,
            i = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
            s = /\$([$&'`]|\d{1,2})/g;
          e.exports = function (e, t, n, c, l, u) {
            var d = n + e.length,
              p = c.length,
              f = s;
            return void 0 !== l && (l = o(l), f = i), a.call(u, f, (function (o, a) {
              var i;
              switch (a.charAt(0)) {
                case "$":
                  return "$";
                case "&":
                  return e;
                case "`":
                  return t.slice(0, n);
                case "'":
                  return t.slice(d);
                case "<":
                  i = l[a.slice(1, -1)];
                  break;
                default:
                  var s = +a;
                  if (0 === s) return o;
                  if (s > p) {
                    var u = r(s / 10);
                    return 0 === u ? o : u <= p ? void 0 === c[u - 1] ? a.charAt(1) : c[u - 1] + a.charAt(1) : o
                  }
                  i = c[s - 1]
              }
              return void 0 === i ? "" : i
            }))
          }
        },
        9859: (e, t, n) => {
          var o = function (e) {
            return e && e.Math == Math && e
          };
          e.exports = o("object" == typeof globalThis && globalThis) || o("object" == typeof window && window) || o("object" == typeof self && self) || o("object" == typeof n.g && n.g) || function () {
            return this
          }() || Function("return this")()
        },
        816: (e, t, n) => {
          var o = n(2991),
            r = {}.hasOwnProperty;
          e.exports = Object.hasOwn || function (e, t) {
            return r.call(o(e), t)
          }
        },
        5977: e => {
          e.exports = {}
        },
        4665: (e, t, n) => {
          var o = n(9859);
          e.exports = function (e, t) {
            var n = o.console;
            n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
          }
        },
        3777: (e, t, n) => {
          var o = n(1333);
          e.exports = o("document", "documentElement")
        },
        4394: (e, t, n) => {
          var o = n(7400),
            r = n(4229),
            a = n(2635);
          e.exports = !o && !r((function () {
            return 7 != Object.defineProperty(a("div"), "a", {
              get: function () {
                return 7
              }
            }).a
          }))
        },
        6201: e => {
          var t = Math.abs,
            n = Math.pow,
            o = Math.floor,
            r = Math.log,
            a = Math.LN2;
          e.exports = {
            pack: function (e, i, s) {
              var c, l, u, d = new Array(s),
                p = 8 * s - i - 1,
                f = (1 << p) - 1,
                h = f >> 1,
                g = 23 === i ? n(2, -24) - n(2, -77) : 0,
                y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0,
                v = 0;
              for ((e = t(e)) != e || e === 1 / 0 ? (l = e != e ? 1 : 0, c = f) : (c = o(r(e) / a), e * (u = n(2, -c)) < 1 && (c--, u *= 2), (e += c + h >= 1 ? g / u : g * n(2, 1 - h)) * u >= 2 && (c++, u /= 2), c + h >= f ? (l = 0, c = f) : c + h >= 1 ? (l = (e * u - 1) * n(2, i), c += h) : (l = e * n(2, h - 1) * n(2, i), c = 0)); i >= 8; d[v++] = 255 & l, l /= 256, i -= 8);
              for (c = c << i | l, p += i; p > 0; d[v++] = 255 & c, c /= 256, p -= 8);
              return d[--v] |= 128 * y, d
            },
            unpack: function (e, t) {
              var o, r = e.length,
                a = 8 * r - t - 1,
                i = (1 << a) - 1,
                s = i >> 1,
                c = a - 7,
                l = r - 1,
                u = e[l--],
                d = 127 & u;
              for (u >>= 7; c > 0; d = 256 * d + e[l], l--, c -= 8);
              for (o = d & (1 << -c) - 1, d >>= -c, c += t; c > 0; o = 256 * o + e[l], l--, c -= 8);
              if (0 === d) d = 1 - s;
              else {
                if (d === i) return o ? NaN : u ? -1 / 0 : 1 / 0;
                o += n(2, t), d -= s
              }
              return (u ? -1 : 1) * o * n(2, d - t)
            }
          }
        },
        9337: (e, t, n) => {
          var o = n(4229),
            r = n(7079),
            a = "".split;
          e.exports = o((function () {
            return !Object("z").propertyIsEnumerable(0)
          })) ? function (e) {
            return "String" == r(e) ? a.call(e, "") : Object(e)
          } : Object
        },
        835: (e, t, n) => {
          var o = n(5052),
            r = n(6540);
          e.exports = function (e, t, n) {
            var a, i;
            return r && "function" == typeof (a = t.constructor) && a !== n && o(i = a.prototype) && i !== n.prototype && r(e, i), e
          }
        },
        8511: (e, t, n) => {
          var o = n(5353),
            r = Function.toString;
          "function" != typeof o.inspectSource && (o.inspectSource = function (e) {
            return r.call(e)
          }), e.exports = o.inspectSource
        },
        6407: (e, t, n) => {
          var o, r, a, i = n(8694),
            s = n(9859),
            c = n(5052),
            l = n(5762),
            u = n(816),
            d = n(5353),
            p = n(4399),
            f = n(5977),
            h = "Object already initialized",
            g = s.WeakMap;
          if (i || d.state) {
            var y = d.state || (d.state = new g),
              v = y.get,
              m = y.has,
              b = y.set;
            o = function (e, t) {
              if (m.call(y, e)) throw new TypeError(h);
              return t.facade = e, b.call(y, e, t), t
            }, r = function (e) {
              return v.call(y, e) || {}
            }, a = function (e) {
              return m.call(y, e)
            }
          } else {
            var _ = p("state");
            f[_] = !0, o = function (e, t) {
              if (u(e, _)) throw new TypeError(h);
              return t.facade = e, l(e, _, t), t
            }, r = function (e) {
              return u(e, _) ? e[_] : {}
            }, a = function (e) {
              return u(e, _)
            }
          }
          e.exports = {
            set: o,
            get: r,
            has: a,
            enforce: function (e) {
              return a(e) ? r(e) : o(e, {})
            },
            getterFor: function (e) {
              return function (t) {
                var n;
                if (!c(t) || (n = r(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                return n
              }
            }
          }
        },
        1943: (e, t, n) => {
          var o = n(95),
            r = n(5495),
            a = o("iterator"),
            i = Array.prototype;
          e.exports = function (e) {
            return void 0 !== e && (r.Array === e || i[a] === e)
          }
        },
        3718: (e, t, n) => {
          var o = n(7079);
          e.exports = Array.isArray || function (e) {
            return "Array" == o(e)
          }
        },
        6541: (e, t, n) => {
          var o = n(4229),
            r = /#|\.prototype\./,
            a = function (e, t) {
              var n = s[i(e)];
              return n == l || n != c && ("function" == typeof t ? o(t) : !!t)
            },
            i = a.normalize = function (e) {
              return String(e).replace(r, ".").toLowerCase()
            },
            s = a.data = {},
            c = a.NATIVE = "N",
            l = a.POLYFILL = "P";
          e.exports = a
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
          var o = n(5052),
            r = n(7079),
            a = n(95)("match");
          e.exports = function (e) {
            var t;
            return o(e) && (void 0 !== (t = e[a]) ? !!t : "RegExp" == r(e))
          }
        },
        9003: (e, t, n) => {
          var o = n(1176),
            r = n(1943),
            a = n(4237),
            i = n(7636),
            s = n(8830),
            c = n(7281),
            l = function (e, t) {
              this.stopped = e, this.result = t
            };
          e.exports = function (e, t, n) {
            var u, d, p, f, h, g, y, v = n && n.that,
              m = !(!n || !n.AS_ENTRIES),
              b = !(!n || !n.IS_ITERATOR),
              _ = !(!n || !n.INTERRUPTED),
              w = i(t, v, 1 + m + _),
              I = function (e) {
                return u && c(u), new l(!0, e)
              },
              S = function (e) {
                return m ? (o(e), _ ? w(e[0], e[1], I) : w(e[0], e[1])) : _ ? w(e, I) : w(e)
              };
            if (b) u = e;
            else {
              if ("function" != typeof (d = s(e))) throw TypeError("Target is not iterable");
              if (r(d)) {
                for (p = 0, f = a(e.length); f > p; p++)
                  if ((h = S(e[p])) && h instanceof l) return h;
                return new l(!1)
              }
              u = d.call(e)
            }
            for (g = u.next; !(y = g.call(u)).done;) {
              try {
                h = S(y.value)
              } catch (e) {
                throw c(u), e
              }
              if ("object" == typeof h && h && h instanceof l) return h
            }
            return new l(!1)
          }
        },
        7281: (e, t, n) => {
          var o = n(1176);
          e.exports = function (e) {
            var t = e.return;
            if (void 0 !== t) return o(t.call(e)).value
          }
        },
        693: (e, t, n) => {
          "use strict";
          var o, r, a, i = n(4229),
            s = n(7567),
            c = n(5762),
            l = n(816),
            u = n(95),
            d = n(4231),
            p = u("iterator"),
            f = !1;
          [].keys && ("next" in (a = [].keys()) ? (r = s(s(a))) !== Object.prototype && (o = r) : f = !0);
          var h = null == o || i((function () {
            var e = {};
            return o[p].call(e) !== e
          }));
          h && (o = {}), d && !h || l(o, p) || c(o, p, (function () {
            return this
          })), e.exports = {
            IteratorPrototype: o,
            BUGGY_SAFARI_ITERATORS: f
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
          var o, r, a, i, s, c, l, u, d = n(9859),
            p = n(7933).f,
            f = n(5795).set,
            h = n(2023),
            g = n(263),
            y = n(8801),
            v = d.MutationObserver || d.WebKitMutationObserver,
            m = d.document,
            b = d.process,
            _ = d.Promise,
            w = p(d, "queueMicrotask"),
            I = w && w.value;
          I || (o = function () {
            var e, t;
            for (y && (e = b.domain) && e.exit(); r;) {
              t = r.fn, r = r.next;
              try {
                t()
              } catch (e) {
                throw r ? i() : a = void 0, e
              }
            }
            a = void 0, e && e.enter()
          }, h || y || g || !v || !m ? _ && _.resolve ? ((l = _.resolve(void 0)).constructor = _, u = l.then, i = function () {
            u.call(l, o)
          }) : i = y ? function () {
            b.nextTick(o)
          } : function () {
            f.call(d, o)
          } : (s = !0, c = m.createTextNode(""), new v(o).observe(c, {
            characterData: !0
          }), i = function () {
            c.data = s = !s
          })), e.exports = I || function (e) {
            var t = {
              fn: e,
              next: void 0
            };
            a && (a.next = t), r || (r = t, i()), a = t
          }
        },
        4226: (e, t, n) => {
          var o = n(9859);
          e.exports = o.Promise
        },
        3839: (e, t, n) => {
          var o = n(6358),
            r = n(4229);
          e.exports = !!Object.getOwnPropertySymbols && !r((function () {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && o && o < 41
          }))
        },
        8694: (e, t, n) => {
          var o = n(9859),
            r = n(8511),
            a = o.WeakMap;
          e.exports = "function" == typeof a && /native code/.test(r(a))
        },
        6485: (e, t, n) => {
          "use strict";
          var o = n(3819),
            r = function (e) {
              var t, n;
              this.promise = new e((function (e, o) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = o
              })), this.resolve = o(t), this.reject = o(n)
            };
          e.exports.f = function (e) {
            return new r(e)
          }
        },
        2391: (e, t, n) => {
          var o, r = n(1176),
            a = n(219),
            i = n(3837),
            s = n(5977),
            c = n(3777),
            l = n(2635),
            u = n(4399),
            d = u("IE_PROTO"),
            p = function () {},
            f = function (e) {
              return "<script>" + e + "</" + "script>"
            },
            h = function () {
              try {
                o = document.domain && new ActiveXObject("htmlfile")
              } catch (e) {}
              var e, t;
              h = o ? function (e) {
                e.write(f("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
              }(o) : ((t = l("iframe")).style.display = "none", c.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(f("document.F=Object")), e.close(), e.F);
              for (var n = i.length; n--;) delete h.prototype[i[n]];
              return h()
            };
          s[d] = !0, e.exports = Object.create || function (e, t) {
            var n;
            return null !== e ? (p.prototype = r(e), n = new p, p.prototype = null, n[d] = e) : n = h(), void 0 === t ? n : a(n, t)
          }
        },
        219: (e, t, n) => {
          var o = n(7400),
            r = n(1787),
            a = n(1176),
            i = n(5632);
          e.exports = o ? Object.defineProperties : function (e, t) {
            a(e);
            for (var n, o = i(t), s = o.length, c = 0; s > c;) r.f(e, n = o[c++], t[n]);
            return e
          }
        },
        1787: (e, t, n) => {
          var o = n(7400),
            r = n(4394),
            a = n(1176),
            i = n(2066),
            s = Object.defineProperty;
          t.f = o ? s : function (e, t, n) {
            if (a(e), t = i(t, !0), a(n), r) try {
              return s(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
            return "value" in n && (e[t] = n.value), e
          }
        },
        7933: (e, t, n) => {
          var o = n(7400),
            r = n(9195),
            a = n(5358),
            i = n(905),
            s = n(2066),
            c = n(816),
            l = n(4394),
            u = Object.getOwnPropertyDescriptor;
          t.f = o ? u : function (e, t) {
            if (e = i(e), t = s(t, !0), l) try {
              return u(e, t)
            } catch (e) {}
            if (c(e, t)) return a(!r.f.call(e, t), e[t])
          }
        },
        8151: (e, t, n) => {
          var o = n(140),
            r = n(3837).concat("length", "prototype");
          t.f = Object.getOwnPropertyNames || function (e) {
            return o(e, r)
          }
        },
        894: (e, t) => {
          t.f = Object.getOwnPropertySymbols
        },
        7567: (e, t, n) => {
          var o = n(816),
            r = n(2991),
            a = n(4399),
            i = n(7528),
            s = a("IE_PROTO"),
            c = Object.prototype;
          e.exports = i ? Object.getPrototypeOf : function (e) {
            return e = r(e), o(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? c : null
          }
        },
        140: (e, t, n) => {
          var o = n(816),
            r = n(905),
            a = n(9540).indexOf,
            i = n(5977);
          e.exports = function (e, t) {
            var n, s = r(e),
              c = 0,
              l = [];
            for (n in s) !o(i, n) && o(s, n) && l.push(n);
            for (; t.length > c;) o(s, n = t[c++]) && (~a(l, n) || l.push(n));
            return l
          }
        },
        5632: (e, t, n) => {
          var o = n(140),
            r = n(3837);
          e.exports = Object.keys || function (e) {
            return o(e, r)
          }
        },
        9195: (e, t) => {
          "use strict";
          var n = {}.propertyIsEnumerable,
            o = Object.getOwnPropertyDescriptor,
            r = o && !n.call({
              1: 2
            }, 1);
          t.f = r ? function (e) {
            var t = o(this, e);
            return !!t && t.enumerable
          } : n
        },
        5020: (e, t, n) => {
          "use strict";
          var o = n(4231),
            r = n(9859),
            a = n(4229),
            i = n(9811);
          e.exports = o || !a((function () {
            if (!(i && i < 535)) {
              var e = Math.random();
              __defineSetter__.call(null, e, (function () {})), delete r[e]
            }
          }))
        },
        6540: (e, t, n) => {
          var o = n(1176),
            r = n(8505);
          e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var e, t = !1,
              n = {};
            try {
              (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
            } catch (e) {}
            return function (n, a) {
              return o(n), r(a), t ? e.call(n, a) : n.__proto__ = a, n
            }
          }() : void 0)
        },
        7664: (e, t, n) => {
          var o = n(7400),
            r = n(5632),
            a = n(905),
            i = n(9195).f,
            s = function (e) {
              return function (t) {
                for (var n, s = a(t), c = r(s), l = c.length, u = 0, d = []; l > u;) n = c[u++], o && !i.call(s, n) || d.push(e ? [n, s[n]] : s[n]);
                return d
              }
            };
          e.exports = {
            entries: s(!0),
            values: s(!1)
          }
        },
        4826: (e, t, n) => {
          var o = n(1333),
            r = n(8151),
            a = n(894),
            i = n(1176);
          e.exports = o("Reflect", "ownKeys") || function (e) {
            var t = r.f(i(e)),
              n = a.f;
            return n ? t.concat(n(e)) : t
          }
        },
        9276: (e, t, n) => {
          var o = n(9859);
          e.exports = o
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
          var o = n(1176),
            r = n(5052),
            a = n(6485);
          e.exports = function (e, t) {
            if (o(e), r(t) && t.constructor === e) return t;
            var n = a.f(e);
            return (0, n.resolve)(t), n.promise
          }
        },
        8787: (e, t, n) => {
          var o = n(7487);
          e.exports = function (e, t, n) {
            for (var r in t) o(e, r, t[r], n);
            return e
          }
        },
        7487: (e, t, n) => {
          var o = n(9859),
            r = n(5762),
            a = n(816),
            i = n(2079),
            s = n(8511),
            c = n(6407),
            l = c.get,
            u = c.enforce,
            d = String(String).split("String");
          (e.exports = function (e, t, n, s) {
            var c, l = !!s && !!s.unsafe,
              p = !!s && !!s.enumerable,
              f = !!s && !!s.noTargetGet;
            "function" == typeof n && ("string" != typeof t || a(n, "name") || r(n, "name", t), (c = u(n)).source || (c.source = d.join("string" == typeof t ? t : ""))), e !== o ? (l ? !f && e[t] && (p = !0) : delete e[t], p ? e[t] = n : r(e, t, n)) : p ? e[t] = n : i(t, n)
          })(Function.prototype, "toString", (function () {
            return "function" == typeof this && l(this).source || s(this)
          }))
        },
        8115: (e, t, n) => {
          var o = n(7079),
            r = n(3466);
          e.exports = function (e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
              var a = n.call(e, t);
              if ("object" != typeof a) throw TypeError("RegExp exec method returned something other than an Object or null");
              return a
            }
            if ("RegExp" !== o(e)) throw TypeError("RegExp#exec called on incompatible receiver");
            return r.call(e, t)
          }
        },
        3466: (e, t, n) => {
          "use strict";
          var o, r, a = n(895),
            i = n(5650),
            s = n(3036),
            c = n(2391),
            l = n(6407).get,
            u = n(2926),
            d = n(461),
            p = RegExp.prototype.exec,
            f = s("native-string-replace", String.prototype.replace),
            h = p,
            g = (o = /a/, r = /b*/g, p.call(o, "a"), p.call(r, "a"), 0 !== o.lastIndex || 0 !== r.lastIndex),
            y = i.UNSUPPORTED_Y || i.BROKEN_CARET,
            v = void 0 !== /()??/.exec("")[1];
          (g || v || y || u || d) && (h = function (e) {
            var t, n, o, r, i, s, u, d = this,
              m = l(d),
              b = m.raw;
            if (b) return b.lastIndex = d.lastIndex, t = h.call(b, e), d.lastIndex = b.lastIndex, t;
            var _ = m.groups,
              w = y && d.sticky,
              I = a.call(d),
              S = d.source,
              A = 0,
              k = e;
            if (w && (-1 === (I = I.replace("y", "")).indexOf("g") && (I += "g"), k = String(e).slice(d.lastIndex), d.lastIndex > 0 && (!d.multiline || d.multiline && "\n" !== e[d.lastIndex - 1]) && (S = "(?: " + S + ")", k = " " + k, A++), n = new RegExp("^(?:" + S + ")", I)), v && (n = new RegExp("^" + S + "$(?!\\s)", I)), g && (o = d.lastIndex), r = p.call(w ? n : d, k), w ? r ? (r.input = r.input.slice(A), r[0] = r[0].slice(A), r.index = d.lastIndex, d.lastIndex += r[0].length) : d.lastIndex = 0 : g && r && (d.lastIndex = d.global ? r.index + r[0].length : o), v && r && r.length > 1 && f.call(r[0], n, (function () {
                for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0)
              })), r && _)
              for (r.groups = s = c(null), i = 0; i < _.length; i++) s[(u = _[i])[0]] = r[u[1]];
            return r
          }), e.exports = h
        },
        895: (e, t, n) => {
          "use strict";
          var o = n(1176);
          e.exports = function () {
            var e = o(this),
              t = "";
            return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
          }
        },
        5650: (e, t, n) => {
          var o = n(4229),
            r = function (e, t) {
              return RegExp(e, t)
            };
          t.UNSUPPORTED_Y = o((function () {
            var e = r("a", "y");
            return e.lastIndex = 2, null != e.exec("abcd")
          })), t.BROKEN_CARET = o((function () {
            var e = r("^r", "gy");
            return e.lastIndex = 2, null != e.exec("str")
          }))
        },
        2926: (e, t, n) => {
          var o = n(4229);
          e.exports = o((function () {
            var e = RegExp(".", "string".charAt(0));
            return !(e.dotAll && e.exec("\n") && "s" === e.flags)
          }))
        },
        461: (e, t, n) => {
          var o = n(4229);
          e.exports = o((function () {
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
          var o = n(9859),
            r = n(5762);
          e.exports = function (e, t) {
            try {
              r(o, e, t)
            } catch (n) {
              o[e] = t
            }
            return t
          }
        },
        1832: (e, t, n) => {
          "use strict";
          var o = n(1333),
            r = n(1787),
            a = n(95),
            i = n(7400),
            s = a("species");
          e.exports = function (e) {
            var t = o(e),
              n = r.f;
            i && t && !t[s] && n(t, s, {
              configurable: !0,
              get: function () {
                return this
              }
            })
          }
        },
        4555: (e, t, n) => {
          var o = n(1787).f,
            r = n(816),
            a = n(95)("toStringTag");
          e.exports = function (e, t, n) {
            e && !r(e = n ? e : e.prototype, a) && o(e, a, {
              configurable: !0,
              value: t
            })
          }
        },
        4399: (e, t, n) => {
          var o = n(3036),
            r = n(1441),
            a = o("keys");
          e.exports = function (e) {
            return a[e] || (a[e] = r(e))
          }
        },
        5353: (e, t, n) => {
          var o = n(9859),
            r = n(2079),
            a = "__core-js_shared__",
            i = o[a] || r(a, {});
          e.exports = i
        },
        3036: (e, t, n) => {
          var o = n(4231),
            r = n(5353);
          (e.exports = function (e, t) {
            return r[e] || (r[e] = void 0 !== t ? t : {})
          })("versions", []).push({
            version: "3.15.1",
            mode: o ? "pure" : "global",
            copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
          })
        },
        7942: (e, t, n) => {
          var o = n(1176),
            r = n(3819),
            a = n(95)("species");
          e.exports = function (e, t) {
            var n, i = o(e).constructor;
            return void 0 === i || null == (n = o(i)[a]) ? t : r(n)
          }
        },
        966: (e, t, n) => {
          var o = n(6051),
            r = n(8885),
            a = function (e) {
              return function (t, n) {
                var a, i, s = String(r(t)),
                  c = o(n),
                  l = s.length;
                return c < 0 || c >= l ? e ? "" : void 0 : (a = s.charCodeAt(c)) < 55296 || a > 56319 || c + 1 === l || (i = s.charCodeAt(c + 1)) < 56320 || i > 57343 ? e ? s.charAt(c) : a : e ? s.slice(c, c + 2) : i - 56320 + (a - 55296 << 10) + 65536
              }
            };
          e.exports = {
            codeAt: a(!1),
            charAt: a(!0)
          }
        },
        7456: (e, t, n) => {
          var o = n(598);
          e.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(o)
        },
        6650: (e, t, n) => {
          var o = n(4237),
            r = n(3124),
            a = n(8885),
            i = Math.ceil,
            s = function (e) {
              return function (t, n, s) {
                var c, l, u = String(a(t)),
                  d = u.length,
                  p = void 0 === s ? " " : String(s),
                  f = o(n);
                return f <= d || "" == p ? u : (c = f - d, (l = r.call(p, i(c / p.length))).length > c && (l = l.slice(0, c)), e ? u + l : l + u)
              }
            };
          e.exports = {
            start: s(!1),
            end: s(!0)
          }
        },
        3124: (e, t, n) => {
          "use strict";
          var o = n(6051),
            r = n(8885);
          e.exports = function (e) {
            var t = String(r(this)),
              n = "",
              a = o(e);
            if (a < 0 || a == 1 / 0) throw RangeError("Wrong number of repetitions");
            for (; a > 0;
              (a >>>= 1) && (t += t)) 1 & a && (n += t);
            return n
          }
        },
        9445: (e, t, n) => {
          var o = n(4229),
            r = n(1647);
          e.exports = function (e) {
            return o((function () {
              return !!r[e]() || "​᠎" != "​᠎" [e]() || r[e].name !== e
            }))
          }
        },
        1017: (e, t, n) => {
          var o = n(8885),
            r = "[" + n(1647) + "]",
            a = RegExp("^" + r + r + "*"),
            i = RegExp(r + r + "*$"),
            s = function (e) {
              return function (t) {
                var n = String(o(t));
                return 1 & e && (n = n.replace(a, "")), 2 & e && (n = n.replace(i, "")), n
              }
            };
          e.exports = {
            start: s(1),
            end: s(2),
            trim: s(3)
          }
        },
        5795: (e, t, n) => {
          var o, r, a, i = n(9859),
            s = n(4229),
            c = n(7636),
            l = n(3777),
            u = n(2635),
            d = n(2023),
            p = n(8801),
            f = i.location,
            h = i.setImmediate,
            g = i.clearImmediate,
            y = i.process,
            v = i.MessageChannel,
            m = i.Dispatch,
            b = 0,
            _ = {},
            w = "onreadystatechange",
            I = function (e) {
              if (_.hasOwnProperty(e)) {
                var t = _[e];
                delete _[e], t()
              }
            },
            S = function (e) {
              return function () {
                I(e)
              }
            },
            A = function (e) {
              I(e.data)
            },
            k = function (e) {
              i.postMessage(e + "", f.protocol + "//" + f.host)
            };
          h && g || (h = function (e) {
            for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
            return _[++b] = function () {
              ("function" == typeof e ? e : Function(e)).apply(void 0, t)
            }, o(b), b
          }, g = function (e) {
            delete _[e]
          }, p ? o = function (e) {
            y.nextTick(S(e))
          } : m && m.now ? o = function (e) {
            m.now(S(e))
          } : v && !d ? (a = (r = new v).port2, r.port1.onmessage = A, o = c(a.postMessage, a, 1)) : i.addEventListener && "function" == typeof postMessage && !i.importScripts && f && "file:" !== f.protocol && !s(k) ? (o = k, i.addEventListener("message", A, !1)) : o = w in u("script") ? function (e) {
            l.appendChild(u("script")).onreadystatechange = function () {
              l.removeChild(this), I(e)
            }
          } : function (e) {
            setTimeout(S(e), 0)
          }), e.exports = {
            set: h,
            clear: g
          }
        },
        3231: (e, t, n) => {
          var o = n(6051),
            r = Math.max,
            a = Math.min;
          e.exports = function (e, t) {
            var n = o(e);
            return n < 0 ? r(n + t, 0) : a(n, t)
          }
        },
        7331: (e, t, n) => {
          var o = n(6051),
            r = n(4237);
          e.exports = function (e) {
            if (void 0 === e) return 0;
            var t = o(e),
              n = r(t);
            if (t !== n) throw RangeError("Wrong length or index");
            return n
          }
        },
        905: (e, t, n) => {
          var o = n(9337),
            r = n(8885);
          e.exports = function (e) {
            return o(r(e))
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
          var o = n(6051),
            r = Math.min;
          e.exports = function (e) {
            return e > 0 ? r(o(e), 9007199254740991) : 0
          }
        },
        2991: (e, t, n) => {
          var o = n(8885);
          e.exports = function (e) {
            return Object(o(e))
          }
        },
        4262: (e, t, n) => {
          var o = n(2002);
          e.exports = function (e, t) {
            var n = o(e);
            if (n % t) throw RangeError("Wrong offset");
            return n
          }
        },
        2002: (e, t, n) => {
          var o = n(6051);
          e.exports = function (e) {
            var t = o(e);
            if (t < 0) throw RangeError("The argument can't be less than 0");
            return t
          }
        },
        2066: (e, t, n) => {
          var o = n(5052);
          e.exports = function (e, t) {
            if (!o(e)) return e;
            var n, r;
            if (t && "function" == typeof (n = e.toString) && !o(r = n.call(e))) return r;
            if ("function" == typeof (n = e.valueOf) && !o(r = n.call(e))) return r;
            if (!t && "function" == typeof (n = e.toString) && !o(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
          }
        },
        1601: (e, t, n) => {
          var o = {};
          o[n(95)("toStringTag")] = "z", e.exports = "[object z]" === String(o)
        },
        2574: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(9859),
            a = n(7400),
            i = n(8200),
            s = n(9918),
            c = n(3816),
            l = n(7728),
            u = n(5358),
            d = n(5762),
            p = n(4237),
            f = n(7331),
            h = n(4262),
            g = n(2066),
            y = n(816),
            v = n(1589),
            m = n(5052),
            b = n(2391),
            _ = n(6540),
            w = n(8151).f,
            I = n(5215),
            S = n(9996).forEach,
            A = n(1832),
            k = n(1787),
            C = n(7933),
            P = n(6407),
            T = n(835),
            x = P.get,
            M = P.set,
            E = k.f,
            O = C.f,
            L = Math.round,
            D = r.RangeError,
            B = c.ArrayBuffer,
            R = c.DataView,
            N = s.NATIVE_ARRAY_BUFFER_VIEWS,
            F = s.TYPED_ARRAY_TAG,
            W = s.TypedArray,
            j = s.TypedArrayPrototype,
            $ = s.aTypedArrayConstructor,
            V = s.isTypedArray,
            Z = "BYTES_PER_ELEMENT",
            U = "Wrong length",
            G = function (e, t) {
              for (var n = 0, o = t.length, r = new($(e))(o); o > n;) r[n] = t[n++];
              return r
            },
            q = function (e, t) {
              E(e, t, {
                get: function () {
                  return x(this)[t]
                }
              })
            },
            H = function (e) {
              var t;
              return e instanceof B || "ArrayBuffer" == (t = v(e)) || "SharedArrayBuffer" == t
            },
            Q = function (e, t) {
              return V(e) && "symbol" != typeof t && t in e && String(+t) == String(t)
            },
            Y = function (e, t) {
              return Q(e, t = g(t, !0)) ? u(2, e[t]) : O(e, t)
            },
            J = function (e, t, n) {
              return !(Q(e, t = g(t, !0)) && m(n) && y(n, "value")) || y(n, "get") || y(n, "set") || n.configurable || y(n, "writable") && !n.writable || y(n, "enumerable") && !n.enumerable ? E(e, t, n) : (e[t] = n.value, e)
            };
          a ? (N || (C.f = Y, k.f = J, q(j, "buffer"), q(j, "byteOffset"), q(j, "byteLength"), q(j, "length")), o({
            target: "Object",
            stat: !0,
            forced: !N
          }, {
            getOwnPropertyDescriptor: Y,
            defineProperty: J
          }), e.exports = function (e, t, n) {
            var a = e.match(/\d+$/)[0] / 8,
              s = e + (n ? "Clamped" : "") + "Array",
              c = "get" + e,
              u = "set" + e,
              g = r[s],
              y = g,
              v = y && y.prototype,
              k = {},
              C = function (e, t) {
                E(e, t, {
                  get: function () {
                    return function (e, t) {
                      var n = x(e);
                      return n.view[c](t * a + n.byteOffset, !0)
                    }(this, t)
                  },
                  set: function (e) {
                    return function (e, t, o) {
                      var r = x(e);
                      n && (o = (o = L(o)) < 0 ? 0 : o > 255 ? 255 : 255 & o), r.view[u](t * a + r.byteOffset, o, !0)
                    }(this, t, e)
                  },
                  enumerable: !0
                })
              };
            N ? i && (y = t((function (e, t, n, o) {
              return l(e, y, s), T(m(t) ? H(t) ? void 0 !== o ? new g(t, h(n, a), o) : void 0 !== n ? new g(t, h(n, a)) : new g(t) : V(t) ? G(y, t) : I.call(y, t) : new g(f(t)), e, y)
            })), _ && _(y, W), S(w(g), (function (e) {
              e in y || d(y, e, g[e])
            })), y.prototype = v) : (y = t((function (e, t, n, o) {
              l(e, y, s);
              var r, i, c, u = 0,
                d = 0;
              if (m(t)) {
                if (!H(t)) return V(t) ? G(y, t) : I.call(y, t);
                r = t, d = h(n, a);
                var g = t.byteLength;
                if (void 0 === o) {
                  if (g % a) throw D(U);
                  if ((i = g - d) < 0) throw D(U)
                } else if ((i = p(o) * a) + d > g) throw D(U);
                c = i / a
              } else c = f(t), r = new B(i = c * a);
              for (M(e, {
                  buffer: r,
                  byteOffset: d,
                  byteLength: i,
                  length: c,
                  view: new R(r)
                }); u < c;) C(e, u++)
            })), _ && _(y, W), v = y.prototype = b(j)), v.constructor !== y && d(v, "constructor", y), F && d(v, F, s), k[s] = y, o({
              global: !0,
              forced: y != g,
              sham: !N
            }, k), Z in y || d(y, Z, a), Z in v || d(v, Z, a), A(s)
          }) : e.exports = function () {}
        },
        8200: (e, t, n) => {
          var o = n(9859),
            r = n(4229),
            a = n(4575),
            i = n(9918).NATIVE_ARRAY_BUFFER_VIEWS,
            s = o.ArrayBuffer,
            c = o.Int8Array;
          e.exports = !i || !r((function () {
            c(1)
          })) || !r((function () {
            new c(-1)
          })) || !a((function (e) {
            new c, new c(null), new c(1.5), new c(e)
          }), !0) || r((function () {
            return 1 !== new c(new s(2), 1, void 0).length
          }))
        },
        5215: (e, t, n) => {
          var o = n(2991),
            r = n(4237),
            a = n(8830),
            i = n(1943),
            s = n(7636),
            c = n(9918).aTypedArrayConstructor;
          e.exports = function (e) {
            var t, n, l, u, d, p, f = o(e),
              h = arguments.length,
              g = h > 1 ? arguments[1] : void 0,
              y = void 0 !== g,
              v = a(f);
            if (null != v && !i(v))
              for (p = (d = v.call(f)).next, f = []; !(u = p.call(d)).done;) f.push(u.value);
            for (y && h > 2 && (g = s(g, arguments[2], 2)), n = r(f.length), l = new(c(this))(n), t = 0; n > t; t++) l[t] = y ? g(f[t], t) : f[t];
            return l
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
          var o = n(3839);
          e.exports = o && !Symbol.sham && "symbol" == typeof Symbol.iterator
        },
        5391: (e, t, n) => {
          var o = n(95);
          t.f = o
        },
        95: (e, t, n) => {
          var o = n(9859),
            r = n(3036),
            a = n(816),
            i = n(1441),
            s = n(3839),
            c = n(6969),
            l = r("wks"),
            u = o.Symbol,
            d = c ? u : u && u.withoutSetter || i;
          e.exports = function (e) {
            return a(l, e) && (s || "string" == typeof l[e]) || (s && a(u, e) ? l[e] = u[e] : l[e] = d("Symbol." + e)), l[e]
          }
        },
        1647: e => {
          e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
        },
        5738: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(7567),
            a = n(6540),
            i = n(2391),
            s = n(5762),
            c = n(5358),
            l = n(9003),
            u = function (e, t) {
              var n = this;
              if (!(n instanceof u)) return new u(e, t);
              a && (n = a(new Error(void 0), r(n))), void 0 !== t && s(n, "message", String(t));
              var o = [];
              return l(e, o.push, {
                that: o
              }), s(n, "errors", o), n
            };
          u.prototype = i(Error.prototype, {
            constructor: c(5, u),
            message: c(5, ""),
            name: c(5, "AggregateError")
          }), o({
            global: !0
          }, {
            AggregateError: u
          })
        },
        5388: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(9859),
            a = n(3816),
            i = n(1832),
            s = "ArrayBuffer",
            c = a.ArrayBuffer;
          o({
            global: !0,
            forced: r.ArrayBuffer !== c
          }, {
            ArrayBuffer: c
          }), i(s)
        },
        2994: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(4229),
            a = n(3816),
            i = n(1176),
            s = n(3231),
            c = n(4237),
            l = n(7942),
            u = a.ArrayBuffer,
            d = a.DataView,
            p = u.prototype.slice;
          o({
            target: "ArrayBuffer",
            proto: !0,
            unsafe: !0,
            forced: r((function () {
              return !new u(2).slice(1, void 0).byteLength
            }))
          }, {
            slice: function (e, t) {
              if (void 0 !== p && void 0 === t) return p.call(i(this), e);
              for (var n = i(this).byteLength, o = s(e, n), r = s(void 0 === t ? n : t, n), a = new(l(this, u))(c(r - o)), f = new d(this), h = new d(a), g = 0; o < r;) h.setUint8(g++, f.getUint8(o++));
              return a
            }
          })
        },
        4870: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(4990),
            a = n(2991),
            i = n(4237),
            s = n(3819),
            c = n(7501);
          o({
            target: "Array",
            proto: !0
          }, {
            flatMap: function (e) {
              var t, n = a(this),
                o = i(n.length);
              return s(e), (t = c(n, 0)).length = r(t, n, n, o, 0, 1, e, arguments.length > 1 ? arguments[1] : void 0), t
            }
          })
        },
        7072: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(4990),
            a = n(2991),
            i = n(4237),
            s = n(6051),
            c = n(7501);
          o({
            target: "Array",
            proto: !0
          }, {
            flat: function () {
              var e = arguments.length ? arguments[0] : void 0,
                t = a(this),
                n = i(t.length),
                o = c(t, 0);
              return o.length = r(o, t, t, n, 0, void 0 === e ? 1 : s(e)), o
            }
          })
        },
        5735: (e, t, n) => {
          "use strict";
          var o = n(905),
            r = n(9736),
            a = n(5495),
            i = n(6407),
            s = n(7675),
            c = "Array Iterator",
            l = i.set,
            u = i.getterFor(c);
          e.exports = s(Array, "Array", (function (e, t) {
            l(this, {
              type: c,
              target: o(e),
              index: 0,
              kind: t
            })
          }), (function () {
            var e = u(this),
              t = e.target,
              n = e.kind,
              o = e.index++;
            return !t || o >= t.length ? (e.target = void 0, {
              value: void 0,
              done: !0
            }) : "keys" == n ? {
              value: o,
              done: !1
            } : "values" == n ? {
              value: t[o],
              done: !1
            } : {
              value: [o, t[o]],
              done: !1
            }
          }), "values"), a.Arguments = a.Array, r("keys"), r("values"), r("entries")
        },
        9731: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(3143).right,
            a = n(6038),
            i = n(6358),
            s = n(8801);
          o({
            target: "Array",
            proto: !0,
            forced: !a("reduceRight") || !s && i > 79 && i < 83
          }, {
            reduceRight: function (e) {
              return r(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
            }
          })
        },
        3108: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(3143).left,
            a = n(6038),
            i = n(6358),
            s = n(8801);
          o({
            target: "Array",
            proto: !0,
            forced: !a("reduce") || !s && i > 79 && i < 83
          }, {
            reduce: function (e) {
              return r(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
            }
          })
        },
        9992: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(3718),
            a = [].reverse,
            i = [1, 2];
          o({
            target: "Array",
            proto: !0,
            forced: String(i) === String(i.reverse())
          }, {
            reverse: function () {
              return r(this) && (this.length = this.length), a.call(this)
            }
          })
        },
        3430: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(3819),
            a = n(2991),
            i = n(4237),
            s = n(4229),
            c = n(3867),
            l = n(6038),
            u = n(2671),
            d = n(8506),
            p = n(6358),
            f = n(9811),
            h = [],
            g = h.sort,
            y = s((function () {
              h.sort(void 0)
            })),
            v = s((function () {
              h.sort(null)
            })),
            m = l("sort"),
            b = !s((function () {
              if (p) return p < 70;
              if (!(u && u > 3)) {
                if (d) return !0;
                if (f) return f < 603;
                var e, t, n, o, r = "";
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
                  for (o = 0; o < 47; o++) h.push({
                    k: t + o,
                    v: n
                  })
                }
                for (h.sort((function (e, t) {
                    return t.v - e.v
                  })), o = 0; o < h.length; o++) t = h[o].k.charAt(0), r.charAt(r.length - 1) !== t && (r += t);
                return "DGBEFHACIJK" !== r
              }
            }));
          o({
            target: "Array",
            proto: !0,
            forced: y || !v || !m || !b
          }, {
            sort: function (e) {
              void 0 !== e && r(e);
              var t = a(this);
              if (b) return void 0 === e ? g.call(t) : g.call(t, e);
              var n, o, s = [],
                l = i(t.length);
              for (o = 0; o < l; o++) o in t && s.push(t[o]);
              for (n = (s = c(s, function (e) {
                  return function (t, n) {
                    return void 0 === n ? -1 : void 0 === t ? 1 : void 0 !== e ? +e(t, n) || 0 : String(t) > String(n) ? 1 : -1
                  }
                }(e))).length, o = 0; o < n;) t[o] = s[o++];
              for (; o < l;) delete t[o++];
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
          var o = n(3103),
            r = n(9037),
            a = Math.acosh,
            i = Math.log,
            s = Math.sqrt,
            c = Math.LN2;
          o({
            target: "Math",
            stat: !0,
            forced: !a || 710 != Math.floor(a(Number.MAX_VALUE)) || a(1 / 0) != 1 / 0
          }, {
            acosh: function (e) {
              return (e = +e) < 1 ? NaN : e > 94906265.62425156 ? i(e) + c : r(e - 1 + s(e - 1) * s(e + 1))
            }
          })
        },
        9509: (e, t, n) => {
          var o = n(3103),
            r = Math.hypot,
            a = Math.abs,
            i = Math.sqrt;
          o({
            target: "Math",
            stat: !0,
            forced: !!r && r(1 / 0, NaN) !== 1 / 0
          }, {
            hypot: function (e, t) {
              for (var n, o, r = 0, s = 0, c = arguments.length, l = 0; s < c;) l < (n = a(arguments[s++])) ? (r = r * (o = l / n) * o + 1, l = n) : r += n > 0 ? (o = n / l) * o : n;
              return l === 1 / 0 ? 1 / 0 : l * i(r)
            }
          })
        },
        7846: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(7400),
            a = n(5020),
            i = n(2991),
            s = n(3819),
            c = n(1787);
          r && o({
            target: "Object",
            proto: !0,
            forced: a
          }, {
            __defineGetter__: function (e, t) {
              c.f(i(this), e, {
                get: s(t),
                enumerable: !0,
                configurable: !0
              })
            }
          })
        },
        6635: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(7400),
            a = n(5020),
            i = n(2991),
            s = n(3819),
            c = n(1787);
          r && o({
            target: "Object",
            proto: !0,
            forced: a
          }, {
            __defineSetter__: function (e, t) {
              c.f(i(this), e, {
                set: s(t),
                enumerable: !0,
                configurable: !0
              })
            }
          })
        },
        5883: (e, t, n) => {
          var o = n(3103),
            r = n(7664).entries;
          o({
            target: "Object",
            stat: !0
          }, {
            entries: function (e) {
              return r(e)
            }
          })
        },
        1804: (e, t, n) => {
          var o = n(3103),
            r = n(9003),
            a = n(2324);
          o({
            target: "Object",
            stat: !0
          }, {
            fromEntries: function (e) {
              var t = {};
              return r(e, (function (e, n) {
                a(t, e, n)
              }), {
                AS_ENTRIES: !0
              }), t
            }
          })
        },
        2775: (e, t, n) => {
          var o = n(3103),
            r = n(7400),
            a = n(4826),
            i = n(905),
            s = n(7933),
            c = n(2324);
          o({
            target: "Object",
            stat: !0,
            sham: !r
          }, {
            getOwnPropertyDescriptors: function (e) {
              for (var t, n, o = i(e), r = s.f, l = a(o), u = {}, d = 0; l.length > d;) void 0 !== (n = r(o, t = l[d++])) && c(u, t, n);
              return u
            }
          })
        },
        2586: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(7400),
            a = n(5020),
            i = n(2991),
            s = n(2066),
            c = n(7567),
            l = n(7933).f;
          r && o({
            target: "Object",
            proto: !0,
            forced: a
          }, {
            __lookupGetter__: function (e) {
              var t, n = i(this),
                o = s(e, !0);
              do {
                if (t = l(n, o)) return t.get
              } while (n = c(n))
            }
          })
        },
        3045: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(7400),
            a = n(5020),
            i = n(2991),
            s = n(2066),
            c = n(7567),
            l = n(7933).f;
          r && o({
            target: "Object",
            proto: !0,
            forced: a
          }, {
            __lookupSetter__: function (e) {
              var t, n = i(this),
                o = s(e, !0);
              do {
                if (t = l(n, o)) return t.set
              } while (n = c(n))
            }
          })
        },
        7890: (e, t, n) => {
          var o = n(3103),
            r = n(7664).values;
          o({
            target: "Object",
            stat: !0
          }, {
            values: function (e) {
              return r(e)
            }
          })
        },
        7919: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(3819),
            a = n(6485),
            i = n(4624),
            s = n(9003);
          o({
            target: "Promise",
            stat: !0
          }, {
            allSettled: function (e) {
              var t = this,
                n = a.f(t),
                o = n.resolve,
                c = n.reject,
                l = i((function () {
                  var n = r(t.resolve),
                    a = [],
                    i = 0,
                    c = 1;
                  s(e, (function (e) {
                    var r = i++,
                      s = !1;
                    a.push(void 0), c++, n.call(t, e).then((function (e) {
                      s || (s = !0, a[r] = {
                        status: "fulfilled",
                        value: e
                      }, --c || o(a))
                    }), (function (e) {
                      s || (s = !0, a[r] = {
                        status: "rejected",
                        reason: e
                      }, --c || o(a))
                    }))
                  })), --c || o(a)
                }));
              return l.error && c(l.value), n.promise
            }
          })
        },
        7178: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(3819),
            a = n(1333),
            i = n(6485),
            s = n(4624),
            c = n(9003),
            l = "No one promise resolved";
          o({
            target: "Promise",
            stat: !0
          }, {
            any: function (e) {
              var t = this,
                n = i.f(t),
                o = n.resolve,
                u = n.reject,
                d = s((function () {
                  var n = r(t.resolve),
                    i = [],
                    s = 0,
                    d = 1,
                    p = !1;
                  c(e, (function (e) {
                    var r = s++,
                      c = !1;
                    i.push(void 0), d++, n.call(t, e).then((function (e) {
                      c || p || (p = !0, o(e))
                    }), (function (e) {
                      c || p || (c = !0, i[r] = e, --d || u(new(a("AggregateError"))(i, l)))
                    }))
                  })), --d || u(new(a("AggregateError"))(i, l))
                }));
              return d.error && u(d.value), n.promise
            }
          })
        },
        1515: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(4231),
            a = n(4226),
            i = n(4229),
            s = n(1333),
            c = n(7942),
            l = n(7757),
            u = n(7487);
          if (o({
              target: "Promise",
              proto: !0,
              real: !0,
              forced: !!a && i((function () {
                a.prototype.finally.call({
                  then: function () {}
                }, (function () {}))
              }))
            }, {
              finally: function (e) {
                var t = c(this, s("Promise")),
                  n = "function" == typeof e;
                return this.then(n ? function (n) {
                  return l(t, e()).then((function () {
                    return n
                  }))
                } : e, n ? function (n) {
                  return l(t, e()).then((function () {
                    throw n
                  }))
                } : e)
              }
            }), !r && "function" == typeof a) {
            var d = s("Promise").prototype.finally;
            a.prototype.finally !== d && u(a.prototype, "finally", d, {
              unsafe: !0
            })
          }
        },
        3439: (e, t, n) => {
          "use strict";
          var o, r, a, i, s = n(3103),
            c = n(4231),
            l = n(9859),
            u = n(1333),
            d = n(4226),
            p = n(7487),
            f = n(8787),
            h = n(6540),
            g = n(4555),
            y = n(1832),
            v = n(5052),
            m = n(3819),
            b = n(7728),
            _ = n(8511),
            w = n(9003),
            I = n(4575),
            S = n(7942),
            A = n(5795).set,
            k = n(4794),
            C = n(7757),
            P = n(4665),
            T = n(6485),
            x = n(4624),
            M = n(6407),
            E = n(6541),
            O = n(95),
            L = n(8639),
            D = n(8801),
            B = n(6358),
            R = O("species"),
            N = "Promise",
            F = M.get,
            W = M.set,
            j = M.getterFor(N),
            $ = d && d.prototype,
            V = d,
            Z = $,
            U = l.TypeError,
            G = l.document,
            q = l.process,
            H = T.f,
            Q = H,
            Y = !!(G && G.createEvent && l.dispatchEvent),
            J = "function" == typeof PromiseRejectionEvent,
            z = "unhandledrejection",
            K = !1,
            X = E(N, (function () {
              var e = _(V) !== String(V);
              if (!e && 66 === B) return !0;
              if (c && !Z.finally) return !0;
              if (B >= 51 && /native code/.test(V)) return !1;
              var t = new V((function (e) {
                  e(1)
                })),
                n = function (e) {
                  e((function () {}), (function () {}))
                };
              return (t.constructor = {})[R] = n, !(K = t.then((function () {})) instanceof n) || !e && L && !J
            })),
            ee = X || !I((function (e) {
              V.all(e).catch((function () {}))
            })),
            te = function (e) {
              var t;
              return !(!v(e) || "function" != typeof (t = e.then)) && t
            },
            ne = function (e, t) {
              if (!e.notified) {
                e.notified = !0;
                var n = e.reactions;
                k((function () {
                  for (var o = e.value, r = 1 == e.state, a = 0; n.length > a;) {
                    var i, s, c, l = n[a++],
                      u = r ? l.ok : l.fail,
                      d = l.resolve,
                      p = l.reject,
                      f = l.domain;
                    try {
                      u ? (r || (2 === e.rejection && ie(e), e.rejection = 1), !0 === u ? i = o : (f && f.enter(), i = u(o), f && (f.exit(), c = !0)), i === l.promise ? p(U("Promise-chain cycle")) : (s = te(i)) ? s.call(i, d, p) : d(i)) : p(o)
                    } catch (e) {
                      f && !c && f.exit(), p(e)
                    }
                  }
                  e.reactions = [], e.notified = !1, t && !e.rejection && re(e)
                }))
              }
            },
            oe = function (e, t, n) {
              var o, r;
              Y ? ((o = G.createEvent("Event")).promise = t, o.reason = n, o.initEvent(e, !1, !0), l.dispatchEvent(o)) : o = {
                promise: t,
                reason: n
              }, !J && (r = l["on" + e]) ? r(o) : e === z && P("Unhandled promise rejection", n)
            },
            re = function (e) {
              A.call(l, (function () {
                var t, n = e.facade,
                  o = e.value;
                if (ae(e) && (t = x((function () {
                    D ? q.emit("unhandledRejection", o, n) : oe(z, n, o)
                  })), e.rejection = D || ae(e) ? 2 : 1, t.error)) throw t.value
              }))
            },
            ae = function (e) {
              return 1 !== e.rejection && !e.parent
            },
            ie = function (e) {
              A.call(l, (function () {
                var t = e.facade;
                D ? q.emit("rejectionHandled", t) : oe("rejectionhandled", t, e.value)
              }))
            },
            se = function (e, t, n) {
              return function (o) {
                e(t, o, n)
              }
            },
            ce = function (e, t, n) {
              e.done || (e.done = !0, n && (e = n), e.value = t, e.state = 2, ne(e, !0))
            },
            le = function (e, t, n) {
              if (!e.done) {
                e.done = !0, n && (e = n);
                try {
                  if (e.facade === t) throw U("Promise can't be resolved itself");
                  var o = te(t);
                  o ? k((function () {
                    var n = {
                      done: !1
                    };
                    try {
                      o.call(t, se(le, n, e), se(ce, n, e))
                    } catch (t) {
                      ce(n, t, e)
                    }
                  })) : (e.value = t, e.state = 1, ne(e, !1))
                } catch (t) {
                  ce({
                    done: !1
                  }, t, e)
                }
              }
            };
          if (X && (Z = (V = function (e) {
              b(this, V, N), m(e), o.call(this);
              var t = F(this);
              try {
                e(se(le, t), se(ce, t))
              } catch (e) {
                ce(t, e)
              }
            }).prototype, (o = function (e) {
              W(this, {
                type: N,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: [],
                rejection: !1,
                state: 0,
                value: void 0
              })
            }).prototype = f(Z, {
              then: function (e, t) {
                var n = j(this),
                  o = H(S(this, V));
                return o.ok = "function" != typeof e || e, o.fail = "function" == typeof t && t, o.domain = D ? q.domain : void 0, n.parent = !0, n.reactions.push(o), 0 != n.state && ne(n, !1), o.promise
              },
              catch: function (e) {
                return this.then(void 0, e)
              }
            }), r = function () {
              var e = new o,
                t = F(e);
              this.promise = e, this.resolve = se(le, t), this.reject = se(ce, t)
            }, T.f = H = function (e) {
              return e === V || e === a ? new r(e) : Q(e)
            }, !c && "function" == typeof d && $ !== Object.prototype)) {
            i = $.then, K || (p($, "then", (function (e, t) {
              var n = this;
              return new V((function (e, t) {
                i.call(n, e, t)
              })).then(e, t)
            }), {
              unsafe: !0
            }), p($, "catch", Z.catch, {
              unsafe: !0
            }));
            try {
              delete $.constructor
            } catch (e) {}
            h && h($, Z)
          }
          s({
            global: !0,
            wrap: !0,
            forced: X
          }, {
            Promise: V
          }), g(V, N, !1, !0), y(N), a = u(N), s({
            target: N,
            stat: !0,
            forced: X
          }, {
            reject: function (e) {
              var t = H(this);
              return t.reject.call(void 0, e), t.promise
            }
          }), s({
            target: N,
            stat: !0,
            forced: c || X
          }, {
            resolve: function (e) {
              return C(c && this === a ? V : this, e)
            }
          }), s({
            target: N,
            stat: !0,
            forced: ee
          }, {
            all: function (e) {
              var t = this,
                n = H(t),
                o = n.resolve,
                r = n.reject,
                a = x((function () {
                  var n = m(t.resolve),
                    a = [],
                    i = 0,
                    s = 1;
                  w(e, (function (e) {
                    var c = i++,
                      l = !1;
                    a.push(void 0), s++, n.call(t, e).then((function (e) {
                      l || (l = !0, a[c] = e, --s || o(a))
                    }), r)
                  })), --s || o(a)
                }));
              return a.error && r(a.value), n.promise
            },
            race: function (e) {
              var t = this,
                n = H(t),
                o = n.reject,
                r = x((function () {
                  var r = m(t.resolve);
                  w(e, (function (e) {
                    r.call(t, e).then(n.resolve, o)
                  }))
                }));
              return r.error && o(r.value), n.promise
            }
          })
        },
        7368: (e, t, n) => {
          var o = n(7400),
            r = n(9859),
            a = n(6541),
            i = n(835),
            s = n(5762),
            c = n(1787).f,
            l = n(8151).f,
            u = n(8311),
            d = n(895),
            p = n(5650),
            f = n(7487),
            h = n(4229),
            g = n(816),
            y = n(6407).enforce,
            v = n(1832),
            m = n(95),
            b = n(2926),
            _ = n(461),
            w = m("match"),
            I = r.RegExp,
            S = I.prototype,
            A = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
            k = /a/g,
            C = /a/g,
            P = new I(k) !== k,
            T = p.UNSUPPORTED_Y,
            x = o && (!P || T || b || _ || h((function () {
              return C[w] = !1, I(k) != k || I(C) == C || "/a/i" != I(k, "i")
            })));
          if (a("RegExp", x)) {
            for (var M = function (e, t) {
                var n, o, r, a, c, l, p = this instanceof M,
                  f = u(e),
                  h = void 0 === t,
                  v = [],
                  m = e;
                if (!p && f && h && e.constructor === M) return e;
                if ((f || e instanceof M) && (e = e.source, h && (t = "flags" in m ? m.flags : d.call(m))), e = void 0 === e ? "" : String(e), t = void 0 === t ? "" : String(t), m = e, b && "dotAll" in k && (o = !!t && t.indexOf("s") > -1) && (t = t.replace(/s/g, "")), n = t, T && "sticky" in k && (r = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, "")), _ && (e = (a = function (e) {
                    for (var t, n = e.length, o = 0, r = "", a = [], i = {}, s = !1, c = !1, l = 0, u = ""; o <= n; o++) {
                      if ("\\" === (t = e.charAt(o))) t += e.charAt(++o);
                      else if ("]" === t) s = !1;
                      else if (!s) switch (!0) {
                        case "[" === t:
                          s = !0;
                          break;
                        case "(" === t:
                          A.test(e.slice(o + 1)) && (o += 2, c = !0), r += t, l++;
                          continue;
                        case ">" === t && c:
                          if ("" === u || g(i, u)) throw new SyntaxError("Invalid capture group name");
                          i[u] = !0, a.push([u, l]), c = !1, u = "";
                          continue
                      }
                      c ? u += t : r += t
                    }
                    return [r, a]
                  }(e))[0], v = a[1]), c = i(I(e, t), p ? this : S, M), (o || r || v.length) && (l = y(c), o && (l.dotAll = !0, l.raw = M(function (e) {
                    for (var t, n = e.length, o = 0, r = "", a = !1; o <= n; o++) "\\" !== (t = e.charAt(o)) ? a || "." !== t ? ("[" === t ? a = !0 : "]" === t && (a = !1), r += t) : r += "[\\s\\S]" : r += t + e.charAt(++o);
                    return r
                  }(e), n)), r && (l.sticky = !0), v.length && (l.groups = v)), e !== m) try {
                  s(c, "source", "" === m ? "(?:)" : m)
                } catch (e) {}
                return c
              }, E = function (e) {
                e in M || c(M, e, {
                  configurable: !0,
                  get: function () {
                    return I[e]
                  },
                  set: function (t) {
                    I[e] = t
                  }
                })
              }, O = l(I), L = 0; O.length > L;) E(O[L++]);
            S.constructor = M, M.prototype = S, f(r, "RegExp", M)
          }
          v("RegExp")
        },
        7950: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(3466);
          o({
            target: "RegExp",
            proto: !0,
            forced: /./.exec !== r
          }, {
            exec: r
          })
        },
        103: (e, t, n) => {
          var o = n(7400),
            r = n(1787),
            a = n(895),
            i = n(4229);
          o && i((function () {
            return "sy" !== Object.getOwnPropertyDescriptor(RegExp.prototype, "flags").get.call({
              dotAll: !0,
              sticky: !0
            })
          })) && r.f(RegExp.prototype, "flags", {
            configurable: !0,
            get: a
          })
        },
        3887: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(3723),
            a = n(8885),
            i = n(4237),
            s = n(3819),
            c = n(1176),
            l = n(7079),
            u = n(8311),
            d = n(895),
            p = n(5762),
            f = n(4229),
            h = n(95),
            g = n(7942),
            y = n(6637),
            v = n(6407),
            m = n(4231),
            b = h("matchAll"),
            _ = "RegExp String",
            w = "RegExp String Iterator",
            I = v.set,
            S = v.getterFor(w),
            A = RegExp.prototype,
            k = A.exec,
            C = "".matchAll,
            P = !!C && !f((function () {
              "a".matchAll(/./)
            })),
            T = r((function (e, t, n, o) {
              I(this, {
                type: w,
                regexp: e,
                string: t,
                global: n,
                unicode: o,
                done: !1
              })
            }), _, (function () {
              var e = S(this);
              if (e.done) return {
                value: void 0,
                done: !0
              };
              var t = e.regexp,
                n = e.string,
                o = function (e, t) {
                  var n, o = e.exec;
                  if ("function" == typeof o) {
                    if ("object" != typeof (n = o.call(e, t))) throw TypeError("Incorrect exec result");
                    return n
                  }
                  return k.call(e, t)
                }(t, n);
              return null === o ? {
                value: void 0,
                done: e.done = !0
              } : e.global ? ("" == String(o[0]) && (t.lastIndex = y(n, i(t.lastIndex), e.unicode)), {
                value: o,
                done: !1
              }) : (e.done = !0, {
                value: o,
                done: !1
              })
            })),
            x = function (e) {
              var t, n, o, r, a, s, l = c(this),
                u = String(e);
              return t = g(l, RegExp), void 0 === (n = l.flags) && l instanceof RegExp && !("flags" in A) && (n = d.call(l)), o = void 0 === n ? "" : String(n), r = new t(t === RegExp ? l.source : l, o), a = !!~o.indexOf("g"), s = !!~o.indexOf("u"), r.lastIndex = i(l.lastIndex), new T(r, u, a, s)
            };
          o({
            target: "String",
            proto: !0,
            forced: P
          }, {
            matchAll: function (e) {
              var t, n, o, r = a(this);
              if (null != e) {
                if (u(e) && !~String(a("flags" in A ? e.flags : d.call(e))).indexOf("g")) throw TypeError("`.matchAll` does not allow non-global regexes");
                if (P) return C.apply(r, arguments);
                if (void 0 === (n = e[b]) && m && "RegExp" == l(e) && (n = x), null != n) return s(n).call(e, r)
              } else if (P) return C.apply(r, arguments);
              return t = String(r), o = new RegExp(e, "g"), m ? x.call(o, t) : o[b](t)
            }
          }), m || b in A || p(A, b, x)
        },
        977: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(6650).end;
          o({
            target: "String",
            proto: !0,
            forced: n(7456)
          }, {
            padEnd: function (e) {
              return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
          })
        },
        5734: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(6650).start;
          o({
            target: "String",
            proto: !0,
            forced: n(7456)
          }, {
            padStart: function (e) {
              return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
          })
        },
        1639: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(8885),
            a = n(8311),
            i = n(895),
            s = n(17),
            c = n(95),
            l = n(4231),
            u = c("replace"),
            d = RegExp.prototype,
            p = Math.max,
            f = function (e, t, n) {
              return n > e.length ? -1 : "" === t ? n : e.indexOf(t, n)
            };
          o({
            target: "String",
            proto: !0
          }, {
            replaceAll: function (e, t) {
              var n, o, c, h, g, y, v, m, b = r(this),
                _ = 0,
                w = 0,
                I = "";
              if (null != e) {
                if ((n = a(e)) && !~String(r("flags" in d ? e.flags : i.call(e))).indexOf("g")) throw TypeError("`.replaceAll` does not allow non-global regexes");
                if (void 0 !== (o = e[u])) return o.call(e, b, t);
                if (l && n) return String(b).replace(e, t)
              }
              for (c = String(b), h = String(e), (g = "function" == typeof t) || (t = String(t)), y = h.length, v = p(1, y), _ = f(c, h, 0); - 1 !== _;) m = g ? String(t(h, _, c)) : s(h, c, _, [], void 0, t), I += c.slice(w, _) + m, w = _ + y, _ = f(c, h, _ + v);
              return w < c.length && (I += c.slice(w)), I
            }
          })
        },
        5940: (e, t, n) => {
          "use strict";
          var o = n(4954),
            r = n(4229),
            a = n(1176),
            i = n(4237),
            s = n(6051),
            c = n(8885),
            l = n(6637),
            u = n(17),
            d = n(8115),
            p = n(95)("replace"),
            f = Math.max,
            h = Math.min,
            g = "$0" === "a".replace(/./, "$0"),
            y = !!/./ [p] && "" === /./ [p]("a", "$0");
          o("replace", (function (e, t, n) {
            var o = y ? "$" : "$0";
            return [function (e, n) {
              var o = c(this),
                r = null == e ? void 0 : e[p];
              return void 0 !== r ? r.call(e, o, n) : t.call(String(o), e, n)
            }, function (e, r) {
              if ("string" == typeof r && -1 === r.indexOf(o) && -1 === r.indexOf("$<")) {
                var c = n(t, this, e, r);
                if (c.done) return c.value
              }
              var p = a(this),
                g = String(e),
                y = "function" == typeof r;
              y || (r = String(r));
              var v = p.global;
              if (v) {
                var m = p.unicode;
                p.lastIndex = 0
              }
              for (var b = [];;) {
                var _ = d(p, g);
                if (null === _) break;
                if (b.push(_), !v) break;
                "" === String(_[0]) && (p.lastIndex = l(g, i(p.lastIndex), m))
              }
              for (var w, I = "", S = 0, A = 0; A < b.length; A++) {
                _ = b[A];
                for (var k = String(_[0]), C = f(h(s(_.index), g.length), 0), P = [], T = 1; T < _.length; T++) P.push(void 0 === (w = _[T]) ? w : String(w));
                var x = _.groups;
                if (y) {
                  var M = [k].concat(P, C, g);
                  void 0 !== x && M.push(x);
                  var E = String(r.apply(void 0, M))
                } else E = u(k, g, C, P, x, r);
                C >= S && (I += g.slice(S, C) + E, S = C + k.length)
              }
              return I + g.slice(S)
            }]
          }), !!r((function () {
            var e = /./;
            return e.exec = function () {
              var e = [];
              return e.groups = {
                a: "7"
              }, e
            }, "7" !== "".replace(e, "$<a>")
          })) || !g || y)
        },
        8319: (e, t, n) => {
          "use strict";
          var o = n(4954),
            r = n(8311),
            a = n(1176),
            i = n(8885),
            s = n(7942),
            c = n(6637),
            l = n(4237),
            u = n(8115),
            d = n(3466),
            p = n(5650),
            f = n(4229),
            h = p.UNSUPPORTED_Y,
            g = [].push,
            y = Math.min,
            v = 4294967295;
          o("split", (function (e, t, n) {
            var o;
            return o = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, n) {
              var o = String(i(this)),
                a = void 0 === n ? v : n >>> 0;
              if (0 === a) return [];
              if (void 0 === e) return [o];
              if (!r(e)) return t.call(o, e, a);
              for (var s, c, l, u = [], p = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), f = 0, h = new RegExp(e.source, p + "g");
                (s = d.call(h, o)) && !((c = h.lastIndex) > f && (u.push(o.slice(f, s.index)), s.length > 1 && s.index < o.length && g.apply(u, s.slice(1)), l = s[0].length, f = c, u.length >= a));) h.lastIndex === s.index && h.lastIndex++;
              return f === o.length ? !l && h.test("") || u.push("") : u.push(o.slice(f)), u.length > a ? u.slice(0, a) : u
            } : "0".split(void 0, 0).length ? function (e, n) {
              return void 0 === e && 0 === n ? [] : t.call(this, e, n)
            } : t, [function (t, n) {
              var r = i(this),
                a = null == t ? void 0 : t[e];
              return void 0 !== a ? a.call(t, r, n) : o.call(String(r), t, n)
            }, function (e, r) {
              var i = n(o, this, e, r, o !== t);
              if (i.done) return i.value;
              var d = a(this),
                p = String(e),
                f = s(d, RegExp),
                g = d.unicode,
                m = (d.ignoreCase ? "i" : "") + (d.multiline ? "m" : "") + (d.unicode ? "u" : "") + (h ? "g" : "y"),
                b = new f(h ? "^(?:" + d.source + ")" : d, m),
                _ = void 0 === r ? v : r >>> 0;
              if (0 === _) return [];
              if (0 === p.length) return null === u(b, p) ? [p] : [];
              for (var w = 0, I = 0, S = []; I < p.length;) {
                b.lastIndex = h ? 0 : I;
                var A, k = u(b, h ? p.slice(I) : p);
                if (null === k || (A = y(l(b.lastIndex + (h ? I : 0)), p.length)) === w) I = c(p, I, g);
                else {
                  if (S.push(p.slice(w, I)), S.length === _) return S;
                  for (var C = 1; C <= k.length - 1; C++)
                    if (S.push(k[C]), S.length === _) return S;
                  I = w = A
                }
              }
              return S.push(p.slice(w)), S
            }]
          }), !!f((function () {
            var e = /(?:)/,
              t = e.exec;
            e.exec = function () {
              return t.apply(this, arguments)
            };
            var n = "ab".split(e);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
          })), h)
        },
        8827: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(1017).end,
            a = n(9445)("trimEnd"),
            i = a ? function () {
              return r(this)
            } : "".trimEnd;
          o({
            target: "String",
            proto: !0,
            forced: a
          }, {
            trimEnd: i,
            trimRight: i
          })
        },
        1715: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(1017).start,
            a = n(9445)("trimStart"),
            i = a ? function () {
              return r(this)
            } : "".trimStart;
          o({
            target: "String",
            proto: !0,
            forced: a
          }, {
            trimStart: i,
            trimLeft: i
          })
        },
        5794: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(1017).trim;
          o({
            target: "String",
            proto: !0,
            forced: n(9445)("trim")
          }, {
            trim: function () {
              return r(this)
            }
          })
        },
        6882: (e, t, n) => {
          n(8423)("asyncIterator")
        },
        634: (e, t, n) => {
          "use strict";
          var o = n(3103),
            r = n(7400),
            a = n(9859),
            i = n(816),
            s = n(5052),
            c = n(1787).f,
            l = n(7081),
            u = a.Symbol;
          if (r && "function" == typeof u && (!("description" in u.prototype) || void 0 !== u().description)) {
            var d = {},
              p = function () {
                var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                  t = this instanceof p ? new u(e) : void 0 === e ? u() : u(e);
                return "" === e && (d[t] = !0), t
              };
            l(p, u);
            var f = p.prototype = u.prototype;
            f.constructor = p;
            var h = f.toString,
              g = "Symbol(test)" == String(u("test")),
              y = /^Symbol\((.*)\)[^)]+$/;
            c(f, "description", {
              configurable: !0,
              get: function () {
                var e = s(this) ? this.valueOf() : this,
                  t = h.call(e);
                if (i(d, e)) return "";
                var n = g ? t.slice(7, -1) : t.replace(y, "$1");
                return "" === n ? void 0 : n
              }
            }), o({
              global: !0,
              forced: !0
            }, {
              Symbol: p
            })
          }
        },
        1382: (e, t, n) => {
          n(2574)("Float32", (function (e) {
            return function (t, n, o) {
              return e(this, t, n, o)
            }
          }))
        },
        1982: (e, t, n) => {
          n(2574)("Float64", (function (e) {
            return function (t, n, o) {
              return e(this, t, n, o)
            }
          }))
        },
        6618: (e, t, n) => {
          "use strict";
          var o = n(8200);
          (0, n(9918).exportTypedArrayStaticMethod)("from", n(5215), o)
        },
        4074: (e, t, n) => {
          n(2574)("Int16", (function (e) {
            return function (t, n, o) {
              return e(this, t, n, o)
            }
          }))
        },
        4696: (e, t, n) => {
          n(2574)("Int32", (function (e) {
            return function (t, n, o) {
              return e(this, t, n, o)
            }
          }))
        },
        3229: (e, t, n) => {
          n(2574)("Int8", (function (e) {
            return function (t, n, o) {
              return e(this, t, n, o)
            }
          }))
        },
        9527: (e, t, n) => {
          "use strict";
          var o = n(9918),
            r = n(8200),
            a = o.aTypedArrayConstructor;
          (0, o.exportTypedArrayStaticMethod)("of", (function () {
            for (var e = 0, t = arguments.length, n = new(a(this))(t); t > e;) n[e] = arguments[e++];
            return n
          }), r)
        },
        315: (e, t, n) => {
          "use strict";
          var o = n(9918),
            r = n(9859),
            a = n(4229),
            i = n(3819),
            s = n(4237),
            c = n(3867),
            l = n(2671),
            u = n(8506),
            d = n(6358),
            p = n(9811),
            f = o.aTypedArray,
            h = o.exportTypedArrayMethod,
            g = r.Uint16Array,
            y = g && g.prototype.sort,
            v = !!y && !a((function () {
              var e = new g(2);
              e.sort(null), e.sort({})
            })),
            m = !!y && !a((function () {
              if (d) return d < 74;
              if (l) return l < 67;
              if (u) return !0;
              if (p) return p < 602;
              var e, t, n = new g(516),
                o = Array(516);
              for (e = 0; e < 516; e++) t = e % 4, n[e] = 515 - e, o[e] = e - 2 * t + 3;
              for (n.sort((function (e, t) {
                  return (e / 4 | 0) - (t / 4 | 0)
                })), e = 0; e < 516; e++)
                if (n[e] !== o[e]) return !0
            }));
          h("sort", (function (e) {
            var t = this;
            if (void 0 !== e && i(e), m) return y.call(t, e);
            f(t);
            var n, o = s(t.length),
              r = Array(o);
            for (n = 0; n < o; n++) r[n] = t[n];
            for (r = c(t, function (e) {
                return function (t, n) {
                  return void 0 !== e ? +e(t, n) || 0 : n != n ? -1 : t != t ? 1 : 0 === t && 0 === n ? 1 / t > 0 && 1 / n < 0 ? 1 : -1 : t > n
                }
              }(e)), n = 0; n < o; n++) t[n] = r[n];
            return t
          }), !m || v)
        },
        3161: (e, t, n) => {
          n(2574)("Uint16", (function (e) {
            return function (t, n, o) {
              return e(this, t, n, o)
            }
          }))
        },
        723: (e, t, n) => {
          n(2574)("Uint32", (function (e) {
            return function (t, n, o) {
              return e(this, t, n, o)
            }
          }))
        },
        3675: (e, t, n) => {
          n(2574)("Uint8", (function (e) {
            return function (t, n, o) {
              return e(this, t, n, o)
            }
          }))
        },
        6920: (e, t, n) => {
          n(2574)("Uint8", (function (e) {
            return function (t, n, o) {
              return e(this, t, n, o)
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
          var o = n(9859),
            r = n(5694),
            a = n(5735),
            i = n(5762),
            s = n(95),
            c = s("iterator"),
            l = s("toStringTag"),
            u = a.values;
          for (var d in r) {
            var p = o[d],
              f = p && p.prototype;
            if (f) {
              if (f[c] !== u) try {
                i(f, c, u)
              } catch (e) {
                f[c] = u
              }
              if (f[l] || i(f, l, d), r[d])
                for (var h in a)
                  if (f[h] !== a[h]) try {
                    i(f, h, a[h])
                  } catch (e) {
                    f[h] = a[h]
                  }
            }
          }
        }
      },
      t = {};

    function n(o) {
      var r = t[o];
      if (void 0 !== r) return r.exports;
      var a = t[o] = {
        exports: {}
      };
      return e[o](a, a.exports, n), a.exports
    }
    n.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, {
        a: t
      }), t
    }, n.d = (e, t) => {
      for (var o in t) n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {
        enumerable: !0,
        get: t[o]
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
        for (var o in n) e.o(n, o) && !e.o(t, o) && Object.defineProperty(t, o, {
          enumerable: !0,
          get: n[o]
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
        default: () => x
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
          const o = {
            count: n,
            cb: t
          };
          return this.listeners[e] ? this.listeners[e].push(o) : this.listeners[e] = [o], this
        }
        on(e, t) {
          this.many(e, t, -1)
        }
        once(e, t) {
          this.many(e, t, 1)
        }
        off(e, t) {
          for (let n = 0; n < this.listeners[e].length; n++) {
            const o = this.listeners[e][n];
            if (o.cb === t) return void(o.count = 0)
          }
        }
      }
      const o = e.g.__wxLibrary,
        r = e.g.__wxConfig,
        a = o.envType,
        i = o.contextType,
        s = "Service" === a,
        c = "WebView" === a,
        l = "Worker" === a,
        u = "Widget" === a,
        d = c || s && 0 === i.indexOf("App:"),
        p = s && 0 === i.indexOf("Game:"),
        f = l && "function" == typeof e.g.workerInvokeJsApi,
        h = !!r.isIsolateContext,
        g = s && (h && i.indexOf("Uncertain") >= 0 || i.indexOf("MainContext") >= 0),
        y = s && i.indexOf("SubContext") >= 0,
        v = g || y,
        m = c || g,
        b = "wxlib" === r.workerContentType,
        _ = {
          platform: function () {
            let e = r.platform;
            if (!e && c) {
              const t = window.navigator.userAgent.toLowerCase();
              t.indexOf("devtools") >= 0 ? e = "devtools" : t.indexOf("miniprogramenv/windows") >= 0 ? e = "windows" : t.indexOf("miniprogramenv/mac") >= 0 ? e = "mac" : t.indexOf("miniprogramenv/mina") >= 0 ? e = "mina" : t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0 ? e = "ios" : t.indexOf("android") >= 0 && (e = "android")
            }
            return (e || "unknown").toLowerCase()
          }(),
          SDKVersion: "undefined" == typeof __libVersionInfo__ || "develop" === __libVersionInfo__.version ? "9.9.9" : __libVersionInfo__.version,
          isIsolateContext: v,
          isGame: p,
          isApp: d,
          isMainContext: g,
          isSubContext: y,
          isSafeEnv: m,
          isService: s,
          isWebView: c,
          isWorker: l,
          isWidget: u,
          isSupportWorkerAPI: f,
          typeStr: a,
          isWXLibWorker: b
        },
        w = new n,
        I = {},
        S = "configReady",
        A = "libraryReady";

      function k(e, t) {
        e in I ? t(I[e]) : T.once("lifeCycle:" + e, t)
      }

      function C(e, t) {
        return !(e in I) && (I[e] = t, T.emit("lifeCycle:" + e, t))
      }
      const P = e.g,
        T = {
          EventEmitter: n,
          on: w.on.bind(w),
          emit: w.emit.bind(w),
          once: w.once.bind(w),
          onConfigReady: k.bind(null, S),
          emitConfigReady: C.bind(null, S),
          get isConfigReady() {
            return S in I
          },
          onLibraryReady: k.bind(null, A),
          emitLibraryReady: C.bind(null, A),
          get isLibraryReady() {
            return A in I
          },
          onBridgeReady(e) {
            void 0 !== WeixinJSBridge ? e() : "object" == typeof document && document.addEventListener("WeixinJSBridgeReady", e, !1)
          },
          env: _,
          global: P
        };
      "undefined" != typeof __Function__ && (Function = function () {
        return "return this" === arguments[arguments.length - 1] ? function () {
          return P
        } : new __Function__(...arguments)
      }, Function.prototype = __Function__.prototype);
      e.g.__wxLibrary.onEnd = function () {
        T.emitLibraryReady({})
      };
      const x = T
    })(), Foundation = t.default
  })();
  var nativeTrans = function (e) {
      "use strict";
      var t = "webViewCreated",
        n = "nativeTransFail",
        o = "nativeTransReady";
      console;
      if ("object" != typeof e.ntrans) return e.__nativeTransEnabled__ = !1, {
        enabled: !1,
        EVT_WV_CREATED: t,
        EVT_NTRANS_FAIL: n
      };
      e.__nativeTransEnabled__ = !0;
      var r = e.ntrans,
        a = r.id,
        i = a === r.serviceId,
        s = {};

      function c(e) {
        i ? e(r.serviceId) : Foundation.onConfigReady((function () {
          e(r.serviceId)
        }))
      }

      function l(e, t) {
        var n = s[e] = s[e] || {
          connectedTime: 0,
          dataQueue: [],
          initTime: Date.now()
        };
        return "number" == typeof t && (n.id = t), s[e]
      }

      function u(e, t) {
        return {
          event: e,
          param: t,
          id: a,
          sendTime: Date.now()
        }
      }
      return c((function () {
        delete e.ntrans
      })), {
        enabled: !0,
        publishToTargetWithQueue: function (e, t, n) {
          var o = l(e),
            a = u(t, n);
          o.connectedTime ? r.postMessage(o.id, a) : Date.now() - o.initTime > 3e5 ? o.dataQueue = [] : o.dataQueue.push(a)
        },
        packMessage: u,
        broadcastMessage: function (e, t) {
          r.broadcastMessage(e, t)
        },
        onMessage: function (e, t) {
          t !== a && (r.setMessageListener(), a = t), r.setMessageListener(t, (function (t) {
            "function" == typeof e && e(t.event, t.param, t.id, t.sendTime)
          }))
        },
        registerTarget: function (e, t) {
          var n = l(e, t);
          n.connectedTime = Date.now(), r.postMessage(n.id, u(o)), n.dataQueue.forEach((function (e) {
            e.sendTime = Date.now(), r.postMessage(n.id, e)
          })), n.dataQueue = []
        },
        onceServiceConfirmed: c,
        revertTargets: function () {
          for (var e in s) s[e].dataQueue.forEach((function (t) {
            WeixinJSBridge.publish(t.event, t.param, [e])
          })), s[e].dataQueue = [];
          s = {}
        },
        isService: i,
        get id() {
          return a
        },
        SERVICE_TAG: "AppService",
        EVT_NTRANS_READY: o,
        EVT_WV_CREATED: t,
        EVT_NTRANS_FAIL: n,
        version: r.version,
        addGroup: r.addGroup.bind(r)
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
        var o = e.WeixinJSBridge;
        return delete e.WeixinJSBridge, o
      }
      if (e.OSUseGlobalJSBridge) return o = e.WeixinJSBridge;
      var r = e.__wxConfig || {},
        a = r.isWK,
        i = {},
        s = 0,
        c = {},
        l = {},
        u = "custom_event_",
        d = {},
        p = e.webkit,
        f = e.WeixinJSCore;
      "object" == typeof f && "function" != typeof f.publishHandler && (f.publishHandler = function () {}), Foundation.env.isWorker && Foundation.env.isSupportWorkerAPI && (f = {
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
          if (void 0 !== e && "function" == typeof i[t] && "" !== e && null !== e) {
            if ("string" == typeof e) try {
              e = h(e), e = WeixinNativeBuffer.unpack(e)
            } catch (t) {
              e = {}
            }
            var n = i[t];
            delete i[t], "function" == typeof n && n(e)
          }
        },
        v = function (e, t, n, o = !1) {
          var r = t;
          o || (t = WeixinNativeBuffer.pack(t), r = g(t || {}));
          var c = ++s;
          i[c] = n,
            function (e, t, n) {
              if (f) r = f.invokeHandler(e, t, n), y(r, n);
              else {
                var o = {
                  event: e,
                  paramsString: t,
                  callbackId: n
                };
                if (a) {
                  var r = prompt("webgame_invoke", g(o));
                  y(r, n)
                } else p.messageHandlers.invokeHandler.postMessage(o)
              }
            }(e, r, c)
        },
        m = function (e, t) {
          t = WeixinNativeBuffer.unpack(t);
          var n = i[e];
          delete i[e], "function" == typeof n && n(t)
        },
        b = function (e, t) {
          c[e] = t
        },
        _ = function (e, t, n) {
          ! function (e, t, n) {
            f ? f.publishHandler(e, g(t), g(n)) : p.messageHandlers.publishHandler.postMessage({
              event: e,
              paramsString: g(t),
              webviewIds: g(n)
            })
          }(u + e, t, n)
        },
        w = function (e, t) {
          d[u + e] = t
        },
        I = function (e, t, n, o) {
          var r, a;
          t = WeixinNativeBuffer.unpack(t), -1 != e.indexOf(u) ? r = d[e] : (r = c[e], a = l[e]), "function" == typeof r && r(t, n, o), a && a.forEach((e => e(t, n, o)))
        };
      return e.WeixinJSBridge = {
        get invokeCallbackHandler() {
          return m
        },
        get subscribeHandler() {
          return I
        }
      }, r && r.clientDebug && (e.WeixinJSBridge = {
        on: b,
        publish: _,
        invoke: v,
        subscribe: w,
        get invokeCallbackHandler() {
          return m
        },
        get subscribeHandler() {
          return I
        }
      }), {
        on: b,
        publish: _,
        invoke: v,
        subscribe: w,
        loadJsFiles: function (e, t) {
          v("loadJsFiles", {
            paths: e
          }, t)
        },
        addEventListener: function (e, t) {
          l[e] ? l[e].add(t) : l[e] = new Set([t])
        },
        removeEventListener: function (e, t) {
          l[e] && (t ? l[e].delete(t) : delete l[e])
        },
        get invokeCallbackHandler() {
          return m
        },
        get subscribeHandler() {
          return I
        }
      }
    }(this);
  Foundation.onBridgeReady((function () {
      var e, t = String.prototype.replace,
        n = WeixinJSBridge.publish,
        o = [];
      WeixinJSBridge.publish = function (r, a, i) {
        var s;
        Foundation.isConfigReady || nativeTrans.enabled ? (i = function (e) {
          if (Array.isArray(e)) {
            var t = e.filter((function (e) {
              return null != e
            }));
            if (0 === e.length || 0 !== t.length) return t
          }
        }(i || [])) && (s = r || "", r = t.call(s, /["'\\]/g, ""), e && e(r, a, i) || n.call(WeixinJSBridge, r, a, i)) : o.push([r, a, i])
      }, Foundation.onConfigReady((function () {
        o.forEach((function (e) {
          WeixinJSBridge.publish.apply(WeixinJSBridge, e)
        })), o = []
      })), WeixinJSBridge.setCustomPublishHandler = function (t) {
        e = t
      }
    })),
    function (e) {
      "use strict";
      var t = JSON.parse,
        n = JSON.stringify,
        o = Object.defineProperty,
        r = Foundation.env.isSubContext,
        a = Foundation.env.isSafeEnv,
        i = {},
        s = (Foundation.env.isWXLibWorker, ["env", "appLaunchInfo", "ext", "wxAppInfo", "debug", "entryPagePath", "envVersion", "tabBar", "pages", "page", "accountInfo", "global", "platform", "system", "appType", "networkTimeout", "navigateToMiniProgramAppIdList", "plugins", "extAppid", "host", "prerender"]);

      function c(e, t, n, r) {
        o(e, n, {
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
              return "function" != typeof r ? r : r()
            } catch (e) {
              return
            }
          },
          set: function (e) {
            t[n] = e
          }
        })
      }

      function l(e) {
        return t(n(e))
      }
      var u = !0 === (__wxConfig = void 0 !== e.__wxConfig ? a ? Object.assign({}, e.__wxConfig) : l(e.__wxConfig) : {}).preload,
        d = !1,
        p = [],
        f = [],
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
          f.push(e)
        },
        v = function (e) {
          d ? void 0 !== __wxConfig && g(e, __wxConfig) : "function" == typeof e && p.push(e)
        },
        m = function (t) {
          t.tabBar && t.tabBar.list && t.tabBar.list.forEach((function (e) {
            delete e.iconData, delete e.selectedIconData
          })), delete t.permission;
          var n = t.subPackages || t.subpackages;
          return n && n.length > 0 && (n.forEach((function (e) {
            delete e.pages
          })), t.subPackages = t.subpackages = n), d && (__libVersionInfo__.features && __libVersionInfo__.features.pruneWxConfigByPage && (r || (__wxConfig._preloadRule = __wxConfig.preloadRule || {}, __wxConfig._page = __wxConfig.page || {}, delete __wxConfig.preloadRule, delete __wxConfig.page), __wxConfig.updatePage = function (e, t) {
            __wxConfig.page = __wxConfig.page || {}, __wxConfig.page[e] = __wxConfig.page[e + ".html"] = t, i[e + ".html"] = l(t)
          }, __wxConfig.updatePreloadRule = function (e, t) {
            __wxConfig.preloadRule = __wxConfig.preloadRule || {}, __wxConfig.preloadRule[e] = t
          }), e.__wxConfig.page = e.__wxConfig.page || {}, __wxConfig.page = __wxConfig.page || {}), t
        },
        b = function (e) {
          return e.onReady = v, e.beforeReady = y, r || (e.preload = u), e.isReady = d, e.isSubContext = r, e.envTag = h, e.isSafeContext = a, e.sdkVersion = e.SDKVersion = Foundation.env.SDKVersion, e.twoPhaseInject = !0, e.platform = Foundation.env.platform, e.brand || "ios" !== e.platform || (e.brand = "iPhone"), "number" == typeof e.pixelRatio ? e.devicePixelRatio = e.pixelRatio : "number" == typeof e.devicePixelRatio && (e.pixelRatio = e.devicePixelRatio), e
        },
        _ = function () {
          void 0 === e.__wxConfig || d || (d = !0, Object.assign(__wxConfig, a ? e.__wxConfig : l(e.__wxConfig)), __wxConfig = b(__wxConfig), __wxConfig = m(__wxConfig), function (e) {
            if (!f.length) return e();
            var t = !1;
            setTimeout((function () {
              t || (console.warn("beforeReady timeout"), t = !0, e())
            }), 3e3), Promise.all(f).catch((function (e) {
              console.warn("beforeReady error", e)
            })).then((function () {
              t || (t = !0, e())
            })), f = []
          }((function () {
            __wxConfig.onReadyStart = Date.now(), p.forEach((function (e) {
                g(e, __wxConfig)
              })), __wxConfig.onReadyEnd = Date.now(), p = [],
              function () {
                if (!a) {
                  var t = e.__wxConfig,
                    n = {},
                    o = {};
                  i = t.page || {}, __libVersionInfo__.features && __libVersionInfo__.features.pruneWxConfigByPage && (i = {});
                  try {
                    c(o, n, "deprecated", !0), s.forEach((function (e) {
                      if (e in t) {
                        var r = t[e];
                        switch (e) {
                          case "page":
                            c(o, n, e, i);
                            break;
                          case "env":
                            c(o, n, e, (function () {
                              return console.warn("DeprecationWarning: __wxConfig.env is deprecated, please use wx.env instead."), {
                                USER_DATA_PATH: r.USER_DATA_PATH
                              }
                            }));
                            break;
                          case "accountInfo":
                            c(o, n, e, {
                              appId: r.appId,
                              icon: r.icon,
                              nickname: r.nickname
                            });
                            break;
                          case "appLaunchInfo":
                            c(o, n, e, (function () {
                              return console.warn("DeprecationWarning: __wxConfig.appLaunchInfo is deprecated, please use wx.getLaunchOptionsSync() instead."), wx && "function" == typeof wx.getLaunchOptionsSync ? wx.getLaunchOptionsSync() : {}
                            }));
                            break;
                          case "wxAppInfo":
                            c(o, n, e, {
                              maxRequestConcurrent: r.maxRequestConcurrent,
                              maxUploadConcurrent: r.maxUploadConcurrent,
                              maxDownloadConcurrent: r.maxDownloadConcurrent,
                              maxWorkerConcurrent: r.maxWorkerConcurrent,
                              maxWebsocketConnect: r.maxWebsocketConnect
                            });
                            break;
                          default:
                            c(o, n, e, r)
                        }
                      }
                    })), e.__wxConfig = o
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
      __wxConfig = b(__wxConfig), __wxConfig = m(__wxConfig), Foundation.onConfigReady((function () {
        _()
      })), r ? __wxConfig.__readyHandler = w : u ? Foundation.onBridgeReady((function () {
        WeixinJSBridge.on("onWxConfigReady", w)
      })) : Foundation.onLibraryReady(w)
    }(this),
    function (e) {
      "use strict";

      function t(e) {
        Foundation.emit("unhandledRejection", e) || console.error("Uncaught (in promise)", e.reason)
      }
      var n, o, r = (n = [], o = [], {
        set: function (e, t) {
          n.push(e), o.push(t)
        },
        get: function (e) {
          var t = n.indexOf(e);
          if (-1 !== t) return o[t]
        },
        delete: function (e) {
          var t = n.indexOf(e); - 1 !== t && (n.splice(t, 1), o.splice(t, 1))
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
            var n = r.get(e.promise);
            if (n) n.event = e;
            else {
              var o = {
                event: e
              };
              setTimeout((function () {
                0 === o.event.type && t(o.event), r.delete(o.event.promise)
              }), 0), r.set(e.promise, o)
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
          for (var o in n) e.o(n, o) && !e.o(t, o) && Object.defineProperty(t, o, {
            enumerable: !0,
            get: n[o]
          })
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t)
      },
      t = {};
    e.d(t, {
      default: () => p
    });
    const n = BabelRuntimeHelpers.objectSpread2;
    var o = e.n(n);
    const {
      onConfigReady: r,
      env: a
    } = Foundation;
    let i = ["log", "info", "warn", "error", "debug", "createLogger"].reduce((function (e, t) {
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
      l = (e, t) => ({
        debug: e(c.DEBUG, t),
        log: e(c.LOG, t),
        info: e(c.INFO, t),
        warn: e(c.WARN, t),
        error: e(c.ERROR, t)
      });
    let u = c.INFO;
    const d = () => {
      const e = __wxConfig.platform;
      let t = [];
      const n = function (t) {
          const n = ("0" + (t.getMonth() + 1)).slice(-2),
            o = ("0" + t.getDate()).slice(-2),
            r = ("0" + t.getHours()).slice(-2),
            a = ("0" + t.getMinutes()).slice(-2),
            i = ("0" + t.getSeconds()).slice(-2),
            s = ("00" + t.getMilliseconds()).slice(-3),
            c = t.getFullYear() + "-" + n + "-" + o,
            l = r + ":" + a + ":" + i + "." + s;
          if ("ios" === e) {
            return c + " " + l + "000" + (t.getTimezoneOffset() / 6e3 * -1).toFixed(4).replace(/^0\./, "+").replace(/-0\./, "-")
          }
          return c + " " + (t.getTimezoneOffset() / 60 * -1).toFixed(1).replace(/^(\d)/, "+$1") + " " + l
        },
        a = function (e, n) {
          const o = e.type;
          return function (...r) {
            if (n && Array.prototype.unshift.call(r, "[" + n + "]"), wxConsole[o.toLowerCase()].call(wxConsole, ...r), e.num >= u.num) {
              const e = new Date,
                n = Array.prototype.slice.call(r).map((e => {
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
                type: o,
                content: n
              })
            }
          }
        };
      r((function () {
        setTimeout((function o() {
          var r;
          (setTimeout(o, 3e3), 0 !== t.length) && (r = t, "ios" === e ? WeixinJSBridge.invoke("systemLog", {
            dataArray: r.map((function (e) {
              return {
                message: "\n" + n(e.date) + " [" + e.type[0].toUpperCase() + "][wxapplib]] " + e.content
              }
            }))
          }) : "android" === e && WeixinJSBridge.invoke("systemLog", {
            message: ["\n"].concat(r.map((function (e) {
              return "[" + e.type[0].toUpperCase() + "][" + n(e.date) + "][wxapplib]] " + e.content
            }))).join("\n")
          }), t = [])
        }), 3e3)
      }));
      return o()(o()({}, l(a)), {}, {
        createLogger: function (e) {
          return l(a, "string" == typeof e ? e : "default")
        },
        __mergeSubContextLogs: e => {
          Array.isArray(e) && e.forEach((e => {
            const {
              level: t,
              logs: n,
              category: o
            } = e;
            a(t, o)(n)
          }))
        },
        __isFromMainContext: !0
      })
    };
    if (a.isWorker || a.isWidget) {
      const e = function () {
        return wxConsole
      };
      i = Object.assign({
        createLogger: e
      }, wxConsole)
    } else i = a.isSubContext && a.isIsolateContext ? (() => {
      let e = [];
      const t = (t, n) => (...o) => {
          e.push({
            level: t,
            logs: o,
            category: n
          })
        },
        n = () => {
          setTimeout((() => {
            const t = wxNativeConsole.__isFromMainContext ? wxNativeConsole.__mergeSubContextLogs : null;
            t ? (t(e), e = []) : n()
          }), 1e3)
        };
      return r(n), o()(o()({}, l(t)), {}, {
        createLogger: e => l(t, "string" == typeof e ? e : "default"),
        __isFromMainContext: !1
      })
    })() : d();
    const p = i;
    wxNativeConsole = t.default
  })();
  var NativeBuffer = function (e) {
      var t = e.WeixinNativeBuffer,
        n = e.getNativeBufferId,
        o = e.setNativeBuffer,
        r = e.getNativeBuffer,
        a = __wxConfig || {},
        i = !1;
      "android" === a.platform || "windows" === a.platform || "mina" === a.platform ? i = "function" == typeof n && "function" == typeof o && "function" == typeof r && a.nativeBufferEnabled : "ios" !== a.platform && "mac" !== a.platform || (i = null != t);
      var s = function (e) {
          var r = {};
          return i ? r.id = function (e) {
            var r = e.__proto__;
            e.__proto__ = ArrayBuffer.prototype;
            var a = -1;
            return t ? a = t.new(e) : "function" == typeof n && "function" == typeof o && (a = n(), o(a, e)), e.__proto__ = r, a
          }(e) : r.base64 = p(e), r
        },
        c = function (e) {
          var n;
          if (null != e) return i && void 0 !== e.id ? (n = e.id, t ? t.get(n) : "function" == typeof r ? r(n) : void 0) : void 0 !== e.base64 ? f(e.base64) : void 0
        },
        l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        u = u || function (e) {
          for (var t, n, o = String(e), r = "", a = 0, i = l; o.charAt(0 | a) || (i = "=", a % 1); r += i.charAt(63 & t >> 8 - a % 1 * 8)) {
            if ((n = o.charCodeAt(a += 3 / 4)) > 255) throw new Error('"btoa" failed');
            t = t << 8 | n
          }
          return r
        },
        d = d || function (e) {
          var t = String(e).replace(/=+$/, ""),
            n = "";
          if (t.length % 4 == 1) throw new Error('"atob" failed');
          for (var o, r, a = 0, i = 0; r = t.charAt(i++); ~r && (o = a % 4 ? 64 * o + r : r, a++ % 4) ? n += String.fromCharCode(255 & o >> (-2 * a & 6)) : 0) r = l.indexOf(r);
          return n
        },
        p = function (e) {
          for (var t = "", n = new Uint8Array(e), o = n.byteLength, r = 0; r < o; r++) t += String.fromCharCode(n[r]);
          return u(t)
        },
        f = function (e) {
          for (var t = d(e), n = t.length, o = new Uint8Array(n), r = 0; r < n; r++) o[r] = t.charCodeAt(r);
          return o.buffer
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
          for (var n in e) {
            var o = e[n];
            if (void 0 !== o && "ArrayBuffer" === h(o) && void 0 !== o.byteLength)(a = s(o)).key = n, t.push(a)
          }
          if (t.length > 0) {
            for (var r = 0; r < t.length; r++) {
              var a;
              delete e[(a = t[r]).key]
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
            var o = t[n];
            if (null != o) {
              var r = c(o);
              void 0 !== r && "ArrayBuffer" === h(r) && (e[o.key] = r)
            }
          }
          return e
        },
        packWithBase64: function (e) {
          if (null == e) return e;
          var t = [];
          for (var n in e) {
            var o = e[n];
            if (void 0 !== o && "ArrayBuffer" === h(o) && void 0 !== o.byteLength)(a = {
              base64: p(o)
            }).key = n, t.push(a)
          }
          if (t.length > 0) {
            for (var r = 0; r < t.length; r++) {
              var a;
              delete e[(a = t[r]).key]
            }
            e.__nativeBuffers__ = t
          }
          return e
        }
      }
    }(this),
    WeixinNativeBuffer = NativeBuffer;
  NativeBuffer = null;
  var Protect, Safeway, WeixinWorker = function (e) {
    var t = ["request", "createSocketTask", "operateSocketTask", "onSocketTaskStateChange", "createRequestTask", "createRequestTaskAsync", "operateRequestTask", "onRequestTaskStateChange", "createDownloadTask", "createDownloadTaskAsync", "operateDownloadTask", "onDownloadTaskStateChange", "createUploadTask", "createUploadTaskAsync", "operateUploadTask", "onUploadTaskStateChange", "getNetworkType", "createAudioInstance", "createAudioInstanceAsync", "operateAudio", "destroyAudioInstance", "getAudioState", "setAudioState", "onAudioStateChange", "uploadFile", "downloadFile", "saveFile", "getFileInfo", "getSavedFileInfo", "getSavedFileList", "removeSavedFile", "readFile", "writeFile", "mkdir", "readdir", "rmdir", "access", "unlink", "stat", "copyFile", "rename", "fs_appendFile", "fs_appendFileSync", "fs_copyFile", "fs_copyFileSync", "fs_rename", "fs_renameSync", "getABTestConfig", "reportKeyValue", "reportIDKey"],
      n = !1;
    if (e.navigator && e.navigator.userAgent) {
      var o = e.navigator.userAgent;
      (o.indexOf("appservice") > -1 || o.indexOf("wechatdevtools") > -1) && (n = !0)
    }
    var r = e.WeAppWorker,
      a = e.WeixinWorker,
      i = [],
      s = [],
      c = [],
      l = [],
      u = [],
      d = {},
      p = function (e) {
        return d[e]
      },
      f = function (e, t) {
        d[e] = t
      },
      h = function (e) {
        e = WeixinNativeBuffer.unpack(e), s.forEach((function (t) {
          "function" == typeof t && t(e)
        }))
      },
      g = function (e, t) {
        t = WeixinNativeBuffer.unpack(t), i.forEach((function (n) {
          "function" == typeof n && n(e, t)
        }))
      },
      y = function (e, t) {
        c.forEach((function (n) {
          "function" == typeof n && n(e, t)
        }))
      },
      v = function (e) {
        l.forEach((function (t) {
          "function" == typeof t && t(e)
        }))
      };
    Foundation.on("error", v), Foundation.on("unhandledRejection", (function (e) {
      u.forEach((function (t) {
        "function" == typeof t && t(e)
      }))
    }));
    var m = {
        get appServiceMsgHandler() {
          return h
        },
        get workerMsgHandler() {
          return g
        },
        get workerCreatedHandler() {
          return y
        },
        get errorHandler() {
          return v
        },
        get __workerId__() {
          return a.__workerId__
        }
      },
      b = {
        create: function (e, n) {
          var o, i, s = !(!(n = n || {}).useExperimentalWorker || !r);
          if (s ? (i = r, o = JSON.stringify(n)) : (i = a, o = {
              APIList: t
            }), "function" == typeof i.create) {
            var c = i.create.call(i, e, o);
            return f(c, i), {
              workerId: c,
              useWKWorker: s
            }
          }
        },
        createWXLibWorker: function (e, n) {
          var o = {
            APIList: t
          };
          n.APIList && (o.APIList = t.concat(n.APIList)), n.type && (o.type = n.type);
          var r = a;
          if ("function" == typeof r.createWXLibWorker) {
            var i = r.createWXLibWorker.call(r, e, JSON.stringify(o));
            return f(i, r), {
              workerId: i
            }
          }
        },
        terminate: function (e) {
          var t = p(e);
          if ("function" == typeof t.terminate) return function (e) {
            delete d[e]
          }(e), t.terminate.call(t, e)
        },
        postMsgToAppService: function (e, t) {
          try {
            !1 !== t && (e = "android" === __wxConfig.platform && (__wxConfig.clientVersion >= 671088640 && __wxConfig.clientVersion < 671088697 || __wxConfig.clientVersion >= 671088704 && __wxConfig.clientVersion < 41943120 || __wxConfig.clientVersion >= 671088736 && __wxConfig.clientVersion < 671088896) ? WeixinNativeBuffer.packWithBase64(e) : WeixinNativeBuffer.pack(e), e = JSON.stringify(e)), a.postMsgToAppService(e)
          } catch (e) {
            console.error(e)
          }
        },
        postMsgToWorker: function (e, t, n) {
          var o = p(e);
          try {
            !1 !== n && (t = "android" === __wxConfig.platform && (__wxConfig.clientVersion >= 671088640 && __wxConfig.clientVersion < 671088697 || __wxConfig.clientVersion >= 671088704 && __wxConfig.clientVersion < 41943120 || __wxConfig.clientVersion >= 671088736 && __wxConfig.clientVersion < 671088896) ? WeixinNativeBuffer.packWithBase64(t) : WeixinNativeBuffer.pack(t), t = JSON.stringify(t)), o.postMsgToWorker(e, t)
          } catch (e) {
            console.error(e)
          }
        },
        onWorkerMsg: function (e) {
          i.push(e)
        },
        onWorkerCreated: function (e) {
          c.push(e)
        },
        onAppServiceMsg: function (e) {
          s.push(e)
        },
        onError: function (e) {
          l.push(e)
        },
        onUnhandledRejection: function (e) {
          u.push(e)
        },
        get WebAssembly() {
          return a.WebAssembly
        }
      };
    return n && (b.appServiceMsgHandler = m.appServiceMsgHandler, b.workerMsgHandler = m.workerMsgHandler, b.errorHandler = m.errorHandler, b.__workerId__ = m.__workerId__), e.WeixinWorker = m, e.WeAppWorker = m, b
  }(this);
  (() => {
    var e = {
        184: (e, t, n) => {
          "use strict";
          n.r(t), n.d(t, {
            reportDeprecatedAPI: () => o
          });
          const o = e => {
            Reporter.reportKeyValue({
              key: "DeprecatedAPI",
              value: e
            })
          }
        },
        665: (e, t, n) => {
          "use strict";
          n.d(t, {
            Z: () => o
          });
          const o = __wxConfig
        },
        582: (e, t, n) => {
          "use strict";
          n.r(t), n.d(t, {
            PLATFORM: () => r,
            IS_DEVTOOLS: () => a,
            IS_ANDROID: () => i,
            IS_IOS: () => s,
            IS_WINDOWS: () => c,
            IS_MAC: () => l,
            IS_MINA: () => u,
            IS_PC: () => d,
            debugEnabled: () => p,
            HOST: () => f,
            IS_HOST_SDK: () => h,
            IS_HOST_WMPF: () => g,
            IS_HOST_WECHAT: () => y,
            IS_USE_NATIVE_MAP: () => v,
            WK_RENDERER_H5: () => m
          });
          var o = n(665);
          const r = o.Z.platform,
            a = "devtools" === o.Z.platform,
            i = "android" === o.Z.platform,
            s = "ios" === o.Z.platform,
            c = "windows" === o.Z.platform,
            l = "mac" === o.Z.platform,
            u = "mina" === o.Z.platform,
            d = c || l;

          function p() {
            if (o.Z && "debug" in o.Z && void 0 !== o.Z.debug) return !!o.Z.debug
          }
          const f = o.Z.host || {},
            h = "SDK" === f.env,
            g = "WMPF" === f.env,
            y = "WeChat" === f.env,
            v = f.forceUseNativeMap || !1,
            m = "object" == typeof window && window && window.__wkrenderer_h5
        },
        538: (e, t, n) => {
          const {
            reportDeprecatedAPI: o
          } = n(184), {
            IS_IOS: r
          } = n(582);
          e.exports = {
            hijack: function (e = !0, t = !0) {
              if (void 0 !== n.g.Function) {
                const e = {};

                function o() {
                  if (arguments.length > 0 && "return this" === arguments[arguments.length - 1]) return function () {
                    return t ? e : {}
                  }
                }
                o.prototype = n.g.Function.prototype, n.g.Function.prototype.constructor = o, n.g.Function = o
              }
              const a = globalThis;
              if ("undefined" != typeof eval && (r && n.g.__isAppServiceRemoteDebugMode__ || (eval = void 0)), "undefined" != typeof setTimeout && e) {
                const e = setTimeout;
                setTimeout = function (t, n = 0) {
                  if ("function" != typeof t) throw new TypeError(`setTimeout expects a function as first argument but got ${typeof t}.`);
                  const o = __errorTracer__.surroundThirdByTryCatch(t, "at setTimeout callback function"),
                    r = [].slice.call(arguments, 2);
                  return e((function () {
                    o.apply(a, r)
                  }), n)
                };
                const t = setInterval;
                setInterval = function (e, n) {
                  if ("function" != typeof e) throw new TypeError(`setInterval expects a function as first argument but got ${typeof e}.`);
                  const o = __errorTracer__.surroundThirdByTryCatch(e, "at setInterval callback function"),
                    r = [].slice.call(arguments, 2);
                  return t((function () {
                    o.apply(a, r)
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
                    get: () => (o("globalWa"), t),
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

    function n(o) {
      var r = t[o];
      if (void 0 !== r) return r.exports;
      var a = t[o] = {
        exports: {}
      };
      return e[o](a, a.exports, n), a.exports
    }
    n.d = (e, t) => {
      for (var o in t) n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {
        enumerable: !0,
        get: t[o]
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
    var o = {};
    (() => {
      "use strict";
      n.r(o), n.d(o, {
        doNotWriteGlobalObjs: () => l,
        doNotWriteObj: () => u,
        globalEsObjs: () => t,
        hijack: () => d.hijack,
        hijackWasm: () => d.hijackWasm,
        overwriteSetPrototypeOf: () => c
      });
      n(585);
      var e = n(665);
      const t = ["Array", "ArrayBuffer", "AsyncFunction", "Atomics", "Boolean", "DataView", "Date", "EvalError", "Float32Array", "Float64Array", "Function", "Generator", "GeneratorFunction", "Infinity", "Int16Array", "Int32Array", "Int8Array", "InternalError", "Intl", "Intl.Collator", "Intl.DateTimeFormat", "Intl.NumberFormat", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object", "Promise", "Proxy", "RangeError", "ReferenceError", "Reflect", "RegExp", "Set", "SharedArrayBuffer", "String", "Symbol", "SyntaxError", "TypeError", "TypedArray", "URIError", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray", "WeakMap", "WeakSet", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "eval", "isFinite", "isNaN", "null", "parseFloat", "parseInt", "undefined", "unescape", "uneval"];
      "NodeJS" !== e.Z.JSEngineName && t.push("Error");
      const r = globalThis,
        a = n.g.Object.setPrototypeOf,
        i = (e, t, n, o) => {
          if (!e || !t || -1 !== t.indexOf("constructor")) return;
          let r;
          try {
            r = e[t]
          } catch (e) {
            return
          }
          if (!r) return;
          let s = Object.getOwnPropertyDescriptor(e, t);
          if (!o && !s && "__proto__" !== t) return;
          s = s || {
            enumerable: !!o,
            configurable: !0
          };
          const c = typeof r;
          if (r && ("function" === c || "object" === c) && (s.configurable && Object.defineProperty(e, t, {
              get: () => r,
              set(s) {
                if ("object" == typeof this || "function" == typeof this) {
                  if (this !== e) return i(this, t, n, !0), void(this[t] = s);
                  if (r !== s)
                    if (o) try {
                      r = s, "__proto__" === t && a(this, s)
                    } catch (e) {} else console.error(`[non-writable] modification of global variable '${n}' is not allowed when using plugins at app.json.`), "object" == typeof Reporter && (Reporter.reportKeyValue({
                      key: "GlobalReadOnly",
                      value: n
                    }), Reporter.reportIDKey({
                      key: "global_objs_readonly"
                    }))
                }
              },
              enumerable: s.enumerable,
              configurable: !!o && s.configurable
            }), !o && "__proto__" !== t)) {
            const e = Object.getOwnPropertyNames(r);
            "object" == typeof r && i(r, "__proto__", `${n}.__proto__`, !1);
            for (let t = 0; t < e.length; ++t) {
              const o = e[t];
              i(r, o, `${n}.${o}`, !1)
            }
          }
        },
        s = t.concat(["getApp", "getCurrentPages", "define", "require", "Reporter", "Protect", "requirePlugin", "definePlugin"]),
        c = function () {
          Object.defineProperty(r.Object, "setPrototypeOf", {
            value: (e, t) => (e.__proto__ = t, e),
            configurable: !0
          })
        },
        l = function () {
          try {
            new Date;
            for (let e = 0; e < s.length; ++e) {
              const t = s[e];
              if (r[t]) {
                new Date;
                i(r, t, t, !1), new Date
              }
            }
            new Date
          } catch (e) {}
        },
        u = (e, t, n) => i(e, t, n, !1);
      var d = n(538)
    })(), Protect = o
  })(), (() => {
    "use strict";
    var e = (e, t, n) => {
        n.d(t, {
          default: () => z
        });
        let o = null;
        const r = () => null !== o;
        let a = [];
        WeixinJSBridge.subscribe("batchGetPluginPermissionBytes", (e => {
          o = e.data.pluginPermissionBytes, a.forEach((e => e())), a = []
        }));
        const i = e => e.split("/", 1)[0];

        function s(e, t) {
          if (delete t.permissionBytes, void 0 === t.pluginId) return t;
          const n = ((e, t) => {
            e = i(e);
            let n = o && o[e] && o[e][t];
            return null == n ? n = [0, 0, 0] : "object" != typeof n && (n = [n, n, n]), n
          })(t.pluginId, e);
          return t.permissionBytes = n, t.privateData = JSON.stringify({
            pluginId: t.pluginId
          }), t
        }

        function c(e, t, n, o) {
          n = parseInt(n, 10), u(e, t, (e => {
            o(e[0] === n)
          }))
        }

        function l(e, t, n, o) {
          n = parseInt(n, 10), u(e, t, (e => {
            o(e[0] !== n)
          }))
        }

        function u(e, t, n) {
          var s;
          s = () => {
            e = i(e);
            let r = o && o[e] && o[e][t];
            null == r ? r = [0, 0, 0] : "object" != typeof r && (r = [r, r, r]), n(r)
          }, r() ? s() : a.push(s)
        }
        const d = BabelRuntimeHelpers.objectSpread2;
        var p = n.n(d);
        const f = Function.prototype.call,
          h = f.bind(String.prototype.indexOf),
          g = f.bind(String.prototype.slice),
          y = f.bind(Array.prototype.sort),
          v = f.bind(Number.prototype.toString),
          m = f.bind(Object.prototype.toString),
          b = Object.keys,
          _ = Array.isArray || function (e) {
            return "[object Array]" === m(e)
          },
          w = e => {
            if ("string" == typeof e) return e;
            if ("number" == typeof e) {
              let t = v(e, 10);
              const n = h(t, ".");
              return n > 0 && (t = g(t, 0, n + 5)), t
            }
            if ("boolean" == typeof e) return !0 === e ? "true" : "false";
            if (_(e)) {
              let t = "";
              for (let n = 0; n < e.length; n++) t += w(e[n]) + ";";
              return `[${t}]`
            }
            if ("object" == typeof e) {
              let t = "";
              const n = b(e);
              y(n);
              for (let o = 0; o < n.length; ++o) t += n[o] + ":" + w(e[n[o]]) + ";";
              return `{${t}}`
            }
            return ""
          },
          I = ({
            apiName: e,
            args: t,
            argsList: n,
            seq: o
          }) => {
            let r = e;
            for (let e = 0; e < n.length; e++) r += "|" + w(t[n[e]]);
            return r += o, r
          },
          S = JSON.parse('{"i":{"createRequestTask":["__skipDomainCheck__","url"],"installDownloadTask":["downloadId"],"downloadAppInternal":["appUrl"],"addDownloadTaskStraight":["taskName","taskUrl","fileMd5"],"getInstallState":["packageName","packageNameArray"],"setClipboardData":["data"],"getClipboardData":[],"navigateBackApplication":[]}}'),
          A = Math.floor,
          k = Math.random,
          C = function () {
            var e, t, n = Function.prototype.call.bind(String.prototype.charAt),
              o = Function.prototype.call.bind(String.prototype.indexOf),
              r = (e = Function.prototype.call.bind(String.fromCharCode), t = String, function (...n) {
                return e(t, ...n)
              });
            return function (e) {
              var t = {};

              function n(o) {
                if (t[o]) return t[o].exports;
                var r = t[o] = {
                  i: o,
                  l: !1,
                  exports: {}
                };
                return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
              }
              return n.m = e, n.c = t, n.d = function (e, t, o) {
                n.o(e, t) || Object.defineProperty(e, t, {
                  enumerable: !0,
                  get: o
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
                var o = Object.create(null);
                if (n.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                  }), 2 & t && "string" != typeof e)
                  for (var r in e) n.d(o, r, function (t) {
                    return e[t]
                  }.bind(null, r));
                return o
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
            }([function (e, t, a) {
              a.r(t), a.d(t, "memory", (function () {
                return p
              })), a.d(t, "sha1", (function () {
                return f
              })), a.d(t, "setSalt", (function () {
                return h
              })), a.d(t, "main", (function () {
                return g
              })), a.d(t, "__wbindgen_malloc", (function () {
                return y
              })), a.d(t, "__wbindgen_realloc", (function () {
                return v
              })), a.d(t, "__wbindgen_free", (function () {
                return m
              })), a.d(t, "__wbindgen_start", (function () {
                return b
              }));
              var i = new ArrayBuffer(8),
                s = new Int32Array(i);
              new Float32Array(i), new Float64Array(i);
              var c, l = new ArrayBuffer(1114112),
                u = (c = new Uint8Array(l), function (e, t) {
                  var a, i;
                  if ("undefined" == typeof Buffer)
                    for (a = function (e) {
                        for (var t, a, i, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", c = "", l = 0; l < e.length;) t = o(s, n(e, l++)) << 18 | o(s, n(e, l++)) << 12 | (a = o(s, n(e, l++))) << 6 | (i = o(s, n(e, l++))), c += 64 === a ? r(t >> 16 & 255) : 64 === i ? r(t >> 16 & 255, t >> 8 & 255) : r(t >> 16 & 255, t >> 8 & 255, 255 & t);
                        return c
                      }(t), i = 0; i < a.length; i++) c[e + i] = a.charCodeAt(i);
                  else
                    for (a = Buffer.from(t, "base64"), i = 0; i < a.length; i++) c[e + i] = a[i]
                });
              u(1048576, "VHJpZWQgdG8gc2hyaW5rIHRvIGEgbGFyZ2VyIGNhcGFjaXR5c3JjL2xpYmFsbG9jL3Jhd192ZWMucnMAAAAQACQAAAAkABAAFwAAAF0CAAAJAAAAaW50ZXJuYWwgZXJyb3I6IGVudGVyZWQgdW5yZWFjaGFibGUgY29kZVQAEAAoAAAAJAAQABcAAAAKAgAAJwAAADAAAAAxAAAAMgAAADMAAAA0AAAANQAAADYAAAA3AAAAOAAAADkAAABhAAAAYgAAAGMAAABkAAAAZQAAAGYAAABzcmMvbGliY29yZS9zbGljZS9tb2QucnNhc3NlcnRpb24gZmFpbGVkOiBgKGxlZnQgPT0gcmlnaHQpYAogIGxlZnQ6IGBgLAogcmlnaHQ6IGBgOiDsABAALQAAABkBEAAMAAAAJQEQAAMAAABkZXN0aW5hdGlvbiBhbmQgc291cmNlIHNsaWNlcyBoYXZlIGRpZmZlcmVudCBsZW5ndGhzQAEQADQAAADUABAAGAAAAFoIAAAJAAAAY2Fubm90IGFjY2VzcyBhIFRMUyB2YWx1ZSBkdXJpbmcgb3IgYWZ0ZXIgaXQgaXMgZGVzdHJveWVkYWxyZWFkeSBib3Jyb3dlZGFscmVhZHkgbXV0YWJseSBib3Jyb3dlZAAAAAUAAAAAAAAAAQAAAAYAAAAHAAAAAAAAAAEAAAAIAAAACQAAAAAAAAABAAAACgAAACACEAAAAAAAIAIQAAAAAAAMAAAAMAAAADEAAAAyAAAAMwAAADQAAAA1AAAANgAAADcAAAA4AAAAOQAAAGEAAABiAAAAYwAAAGQAAABlAAAAZgAAAA0AAAAIAAAABAAAAA4AAAAPAAAAEAAAAAgAAAAEAAAAEQAAABIAAAAAAAAAAQAAABMAAABydXN0LWNyeXB0by9zcmMvY3J5cHRvdXRpbC5ycwAAAKgCEAAdAAAALAAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBkc3QubGVuKCkgPT0gNKgCEAAdAAAAQQAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBkc3QubGVuKCkgKiA0ID09IGlucHV0LmxlbigpAACoAhAAHQAAAFIAAAAFAAAAYXNzZXJ0aW9uIGZhaWxlZDogZHN0LmxlbigpID49IHNyYy5sZW4oKagCEAAdAAAAowAAAAkAAABOdW1lcmljIG92ZXJmbG93IG9jY3VyZWQuAAAAAAAAAHJ1c3QtY3J5cHRvL3NyYy9jcnlwdG91dGlsLnJzAAAAoAMQAB0AAABNAQAACQAAAKgCEAAdAAAAMQEAAAEAAABhc3NlcnRpb24gZmFpbGVkOiBpZHggPj0gc2VsZi5idWZmZXJfaWR4YXNzZXJ0aW9uIGZhaWxlZDogc2VsZi5idWZmZXJfaWR4ID09IDY0cnVzdC1jcnlwdG8vc3JjL3NoYTEucnMAAC8EEAAXAAAAhAAAAA4AAAB1bmtub3duIGljb3Nhcm91bmQgaW5kZXhAAAAAYXNzZXJ0aW9uIGZhaWxlZDogYChsZWZ0ID09IHJpZ2h0KWAKICBsZWZ0OiBgYCwKIHJpZ2h0OiBgYAAAdAQQAC0AAAChBBAADAAAAK0EEAABAAAALwQQABcAAABdAQAABQAAAC8EEAAXAAAAZAEAAAUAAABhc3NlcnRpb24gZmFpbGVkOiAoIXN0LmNvbXB1dGVkKRUAAAAXAAAABAAAAAQAAAAYAAAAGQAAABoAAAAbAAAAAAAAAAEAAAAcAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZXNyYy9saWJjb3JlL29wdGlvbi5yczQFEAArAAAAXwUQABUAAAB6AQAAFQAAAEFjY2Vzc0Vycm9yAB0AAAAQAAAABAAAAB4AAAAfAAAAIAAAAAwAAAAEAAAAIQAAACIAAAAEAAAABAAAACMAAAAkAAAAJQ=="), u(1050080, "L3J1c3RjLzQ1NjBlYTc4OGNiNzYwZjBhMzQxMjcxNTZjNzhlMjU1Mjk0OWY3MzQvc3JjL2xpYmNvcmUvZm10L21vZC5ycwAA4AUQAEYAAABjAQAAEwAAACYAAAAAAAAAAQAAACcAAABzcmMvbGliYWxsb2MvcmF3X3ZlYy5yc2NhcGFjaXR5IG92ZXJmbG93XwYQABEAAABIBhAAFwAAAAkDAAAFAAAAYSBmb3JtYXR0aW5nIHRyYWl0IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yQm9ycm93RXJyb3JCb3Jyb3dNdXRFcnJvciwAAAAAAAAAAQAAAC0AAABpbmRleCBvdXQgb2YgYm91bmRzOiB0aGUgbGVuIGlzICBidXQgdGhlIGluZGV4IGlzIAAA5AYQACAAAAAEBxAAEgAAAGNhbGxlZCBgT3B0aW9uOjp1bndyYXAoKWAgb24gYSBgTm9uZWAgdmFsdWVzcmMvbGliY29yZS9vcHRpb24ucnMoBxAAKwAAAFMHEAAVAAAAegEAABUAAAC7BhAAAAAAAFMHEAAVAAAApgQAAAUAAAA6IAAAuwYQAAAAAACYBxAAAgAAAHNyYy9saWJjb3JlL3Jlc3VsdC5ycwAAAKwHEAAVAAAAjQQAAAUAAABzcmMvbGliY29yZS9zbGljZS9tb2QucnNpbmRleCAgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGgg7AcQAAYAAADyBxAAIgAAANQHEAAYAAAAGQoAAAUAAABzbGljZSBpbmRleCBzdGFydHMgYXQgIGJ1dCBlbmRzIGF0IAA0CBAAFgAAAEoIEAANAAAA1AcQABgAAAAfCgAABQAAADB4MDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTl9IH0="), u(1050960, "c3JjL2xpYmNvcmUvZm10L21vZC5ycwAAUAkQABYAAABWBAAAKAAAAFAJEAAWAAAAYgQAABEAAABFcnJvcg==");
              var d = function (e, t, n) {
                  var o = new e.Int8Array(n),
                    r = (new e.Int16Array(n), new e.Int32Array(n)),
                    a = new e.Uint8Array(n),
                    i = (new e.Uint16Array(n), new e.Uint32Array(n)),
                    c = (new e.Float32Array(n), new e.Float64Array(n), e.Math.imul),
                    l = (e.Math.fround, e.Math.abs, e.Math.clz32),
                    u = (e.Math.min, e.Math.max, e.Math.floor, e.Math.ceil, e.Math.sqrt, t.abort),
                    d = (e.NaN, e.Infinity, 1048576),
                    p = 0;

                  function f(e) {
                    var t = 0,
                      n = 0,
                      o = 0,
                      a = 0,
                      s = 0,
                      c = 0,
                      u = 0,
                      d = 0,
                      p = 0,
                      f = 0,
                      h = 0,
                      g = 0;
                    e: {
                      t: {
                        n: {
                          if (e >>> 0 >= 245) {
                            if (e >>> 0 >= 4294901709) break t;
                            if (a = -8 & (e = e + 11 | 0), !(d = r[262772])) break n;
                            s = 0 - a | 0, u = 0, (e >>>= 8) && (u = 31, a >>> 0 > 16777215 || (u = 62 + ((a >>> (6 - (e = l(e)) & 31) & 1) - (e << 1) | 0) | 0));
                            o: {
                              r: {
                                if (e = r[1051356 + (u << 2) >> 2]) {
                                  for (o = a << (31 == (0 | u) ? 0 : 25 - (u >>> 1) & 31);;) {
                                    if (!((n = -8 & r[e + 4 >> 2]) >>> 0 < a >>> 0 || (n = n - a | 0) >>> 0 >= s >>> 0 || (c = e, s = n, n))) {
                                      s = 0;
                                      break r
                                    }
                                    if (n = r[e + 20 >> 2], e = r[16 + ((o >>> 29 & 4) + e | 0) >> 2], t = n && (0 | n) != (0 | e) ? n : t, o <<= 1, !e) break
                                  }
                                  if (t) {
                                    e = t;
                                    break r
                                  }
                                  if (c) break o
                                }
                                if (c = 0, !(e = d & (0 - (e = 2 << (31 & u)) | e))) break n;
                                if (!(e = r[1051356 + (Ie(e & 0 - e) << 2) >> 2])) break n
                              }
                              for (; c = (t = (n = (t = -8 & r[e + 4 >> 2]) - a | 0) >>> 0 < s >>> 0 & t >>> 0 >= a >>> 0) ? e : c, s = t ? n : s, e = (t = r[e + 16 >> 2]) || r[e + 20 >> 2];);
                              if (!c) break n
                            }
                            if (s >>> 0 >= (e = r[262871]) - a >>> 0 && e >>> 0 >= a >>> 0) break n;
                            S(c);
                            o: if (s >>> 0 >= 16) {
                              if (r[c + 4 >> 2] = 3 | a, r[4 + (o = a + c | 0) >> 2] = 1 | s, r[s + o >> 2] = s, s >>> 0 >= 256) {
                                w(o, s);
                                break o
                              }
                              n = 1051092 + ((e = s >>> 3) << 3) | 0, t = r[262771], e = 1 << (31 & e), u = r[n + 8 >> 2], t & e || (r[262771] = e | t, u = n), e = u, r[n + 8 >> 2] = o, r[e + 12 >> 2] = o, r[o + 12 >> 2] = n, r[o + 8 >> 2] = e
                            } else e = a + s | 0, r[c + 4 >> 2] = 3 | e, r[4 + (e = e + c | 0) >> 2] = 1 | r[e + 4 >> 2];
                            return c + 8 | 0
                          }
                          o: {
                            r: {
                              if (!(3 & (n = (o = r[262771]) >>> (t = 31 & (e = (a = e >>> 0 < 11 ? 16 : e + 11 & -8) >>> 3))))) {
                                if (a >>> 0 <= i[262871]) break n;
                                if (n) break r;
                                if (!(e = r[262772])) break n;
                                for (t = r[1051356 + (Ie(e & 0 - e) << 2) >> 2], s = (-8 & r[t + 4 >> 2]) - a | 0, o = t;;) {
                                  if (!(e = r[t + 16 >> 2]) && !(e = r[t + 20 >> 2])) break o;
                                  s = (n = (t = (-8 & r[e + 4 >> 2]) - a | 0) >>> 0 < s >>> 0) ? t : s, o = n ? e : o, t = e
                                }
                              }
                              s = (c = r[16 + (e = 1051084 + ((n = e + (1 & (-1 ^ n)) | 0) << 3) | 0) >> 2]) + 8 | 0,
                              (0 | (t = r[c + 8 >> 2])) == (0 | (e = e + 8 | 0)) ? (h = 1051084, g = Se(-2, n) & o, r[h >> 2] = g) : (r[t + 12 >> 2] = e, r[e + 8 >> 2] = t),
                              e = n << 3,
                              r[c + 4 >> 2] = 3 | e,
                              r[4 + (e = e + c | 0) >> 2] = 1 | r[e + 4 >> 2];
                              break t
                            }
                            return c = Ie(0 - (e = (0 - (e = 2 << t) | e) & n << t) & e),
                            d = r[16 + (e = 1051084 + (c << 3) | 0) >> 2],
                            (0 | (t = r[d + 8 >> 2])) == (0 | (e = e + 8 | 0)) ? (h = 1051084, g = Se(-2, c) & o, r[h >> 2] = g) : (r[t + 12 >> 2] = e, r[e + 8 >> 2] = t),
                            r[d + 4 >> 2] = 3 | a,
                            c = (e = c << 3) - a | 0,
                            r[4 + (n = a + d | 0) >> 2] = 1 | c,
                            r[e + d >> 2] = c,
                            (e = r[262871]) && (s = r[262873], o = 1051092 + ((e >>>= 3) << 3) | 0, t = r[262771], e = 1 << (31 & e), u = r[o + 8 >> 2], t & e || (r[262771] = e | t, u = o), e = u, r[o + 8 >> 2] = s, r[e + 12 >> 2] = s, r[s + 12 >> 2] = o, r[s + 8 >> 2] = e),
                            r[262873] = n,
                            r[262871] = c,
                            d + 8 | 0
                          }
                          return S(o),
                          s >>> 0 >= 16 ? (r[o + 4 >> 2] = 3 | a, r[4 + (n = a + o | 0) >> 2] = 1 | s, r[n + s >> 2] = s, (e = r[262871]) && (d = r[262873], c = 1051092 + ((e >>>= 3) << 3) | 0, t = r[262771], e = 1 << (31 & e), u = r[c + 8 >> 2], t & e || (r[262771] = e | t, u = c), e = u, r[c + 8 >> 2] = d, r[e + 12 >> 2] = d, r[d + 12 >> 2] = c, r[d + 8 >> 2] = e), r[262873] = n, r[262871] = s) : (e = a + s | 0, r[o + 4 >> 2] = 3 | e, r[4 + (e = e + o | 0) >> 2] = 1 | r[e + 4 >> 2]),
                          o + 8 | 0
                        }
                        n: {
                          o: {
                            r: {
                              a: {
                                if ((n = r[262871]) >>> 0 < a >>> 0) {
                                  if ((e = r[262872]) >>> 0 > a >>> 0) break e;
                                  if (s = 0, -1 == (0 | (e = ke((t = a + 65583 | 0) >>> 16)))) break t;
                                  if (!(p = e << 16)) break t;
                                  if (t = (d = -65536 & t) + r[262875] | 0, r[262875] = t, e = r[262876], r[262876] = e >>> 0 > t >>> 0 ? e : t, !(f = r[262874])) break a;
                                  for (e = 1051508;;) {
                                    if ((0 | p) == ((n = r[e >> 2]) + (t = r[e + 4 >> 2]) | 0)) break r;
                                    if (!(e = r[e + 8 >> 2])) break
                                  }
                                  break o
                                }
                                return c = r[262873],
                                (t = n - a | 0) >>> 0 <= 15 ? (r[262873] = 0, r[262871] = 0, r[c + 4 >> 2] = 3 | n, a = 4 + (e = n + c | 0) | 0, s = 1 | r[e + 4 >> 2]) : (r[262871] = t, e = a + c | 0, r[262873] = e, r[e + 4 >> 2] = 1 | t, r[n + c >> 2] = t, s = 3 | a, a = c + 4 | 0),
                                r[a >> 2] = s,
                                c + 8 | 0
                              }
                              for ((e = r[262882]) >>> 0 <= p >>> 0 && e || (r[262882] = p), r[262883] = 4095, r[262877] = p, e = 0, r[262880] = 0, r[262878] = d; t = 8 + (n = e + 1051084 | 0) | 0, r[n + 16 >> 2] = t, r[n + 20 >> 2] = t, 256 != (0 | (e = e + 8 | 0)););r[262874] = p,
                              e = d + -40 | 0,
                              r[262872] = e,
                              r[p + 4 >> 2] = 1 | e,
                              r[4 + (e + p | 0) >> 2] = 40,
                              r[262881] = 2097152;
                              break n
                            }
                            if (!(r[e + 12 >> 2] | p >>> 0 <= f >>> 0 | n >>> 0 > f >>> 0)) {
                              r[e + 4 >> 2] = t + d, n = (c = r[262874]) + 15 & -8, r[262874] = n + -8, e = 8 + ((t = d + r[262872] | 0) + (c - n | 0) | 0) | 0, r[262872] = e, r[n + -4 >> 2] = 1 | e, r[4 + (t + c | 0) >> 2] = 40, r[262881] = 2097152;
                              break n
                            }
                          }
                          e = r[262882],
                          r[262882] = e >>> 0 < p >>> 0 ? e : p,
                          o = d + p | 0,
                          e = 1051508;o: {
                            for (;;) {
                              if ((0 | o) != r[e >> 2]) {
                                if (e = r[e + 8 >> 2]) continue;
                                break o
                              }
                              break
                            }
                            if (!r[e + 12 >> 2]) {
                              r[e >> 2] = p, r[e + 4 >> 2] = d + r[e + 4 >> 2], r[p + 4 >> 2] = 3 | a, s = a + p | 0, a = (o - p | 0) - a | 0;
                              r: {
                                a: {
                                  if ((0 | o) != r[262874]) {
                                    if (r[262873] == (0 | o)) break a;
                                    if (1 == (3 & (c = r[o + 4 >> 2])) && ((n = -8 & c) >>> 0 >= 256 ? S(o) : (0 | (t = r[o + 12 >> 2])) == (0 | (e = r[o + 8 >> 2])) ? (h = 1051084, g = r[262771] & Se(-2, c >>> 3), r[h >> 2] = g) : (r[e + 12 >> 2] = t, r[t + 8 >> 2] = e), a = n + a | 0, o = n + o | 0), r[o + 4 >> 2] = -2 & r[o + 4 >> 2], r[s + 4 >> 2] = 1 | a, r[a + s >> 2] = a, a >>> 0 >= 256) {
                                      w(s, a);
                                      break r
                                    }
                                    n = 1051092 + ((e = a >>> 3) << 3) | 0, t = r[262771], e = 1 << (31 & e), o = r[n + 8 >> 2], t & e || (r[262771] = e | t, o = n), e = o, r[n + 8 >> 2] = s, r[e + 12 >> 2] = s, r[s + 12 >> 2] = n, r[s + 8 >> 2] = e;
                                    break r
                                  }
                                  r[262874] = s,
                                  e = r[262872] + a | 0,
                                  r[262872] = e,
                                  r[s + 4 >> 2] = 1 | e;
                                  break r
                                }
                                r[262873] = s,
                                e = r[262871] + a | 0,
                                r[262871] = e,
                                r[s + 4 >> 2] = 1 | e,
                                r[e + s >> 2] = e
                              }
                              return p + 8 | 0
                            }
                          }
                          for (e = 1051508; !((t = r[e >> 2]) >>> 0 <= f >>> 0 && (o = t + r[e + 4 >> 2] | 0) >>> 0 > f >>> 0);) e = r[e + 8 >> 2];
                          for (r[262874] = p, e = d + -40 | 0, r[262872] = e, r[p + 4 >> 2] = 1 | e, r[4 + (e + p | 0) >> 2] = 40, r[262881] = 2097152, r[(u = (e = (o + -32 & -8) - 8 | 0) >>> 0 < f + 16 >>> 0 ? f : e) + 4 >> 2] = 27, c = r[262877], n = r[262878], t = r[262880], r[(e = u + 16 | 0) >> 2] = r[262879], r[e + 4 >> 2] = t, r[u + 8 >> 2] = c, r[u + 12 >> 2] = n, r[262880] = 0, r[262878] = d, r[262877] = p, r[262879] = u + 8, e = u + 28 | 0; r[e >> 2] = 7, o >>> 0 > (e = e + 4 | 0) >>> 0;);
                          (0 | u) != (0 | f) && (r[u + 4 >> 2] = -2 & r[u + 4 >> 2], e = u - f | 0, r[f + 4 >> 2] = 1 | e, r[u >> 2] = e, e >>> 0 >= 256 ? w(f, e) : (n = 1051092 + ((e >>>= 3) << 3) | 0, t = r[262771], e = 1 << (31 & e), o = r[n + 8 >> 2], t & e || (r[262771] = e | t, o = n), e = o, r[n + 8 >> 2] = f, r[e + 12 >> 2] = f, r[f + 12 >> 2] = n, r[f + 8 >> 2] = e))
                        }
                        if (!((e = r[262872]) >>> 0 <= a >>> 0)) break e
                      }
                      return s
                    }
                    return t = e - a | 0, r[262872] = t, e = (n = r[262874]) + a | 0, r[262874] = e, r[e + 4 >> 2] = 1 | t, r[n + 4 >> 2] = 3 | a, n + 8 | 0
                  }

                  function h(e, t, n) {
                    var i, s = 0,
                      c = 0,
                      l = 0,
                      p = 0,
                      f = 0,
                      h = 0,
                      g = 0;
                    d = i = d + -64 | 0, r[i + 36 >> 2] = t, s = r[n + 20 >> 2], r[i + 52 >> 2] = s, o[i + 56 | 0] = 3, c = r[n + 16 >> 2], r[i + 44 >> 2] = c + (s << 3), r[i + 8 >> 2] = 0, r[i + 12 >> 2] = 32, r[i + 32 >> 2] = e, r[i + 24 >> 2] = 0, r[i + 16 >> 2] = 0, r[i + 48 >> 2] = c, r[i + 40 >> 2] = c;
                    e: {
                      t: {
                        n: {
                          o: {
                            if (!(l = r[n + 8 >> 2])) {
                              if (f = r[n >> 2], !(l = s >>> 0 > (h = r[n + 4 >> 2]) >>> 0 ? h : s)) break o;
                              if (s = 1, Ae[r[t + 12 >> 2]](e, r[f >> 2], r[f + 4 >> 2])) break e;
                              for (n = f + 12 | 0, p = 1;;) {
                                if (Ae[r[c + 4 >> 2]](r[c >> 2], i + 8 | 0)) break e;
                                if (p >>> 0 >= l >>> 0) break o;
                                if (e = n + -4 | 0, t = r[n >> 2], n = n + 8 | 0, c = c + 8 | 0, p = p + 1 | 0, Ae[r[r[i + 36 >> 2] + 12 >> 2]](r[i + 32 >> 2], r[e >> 2], t)) break
                              }
                              break e
                            }
                            if (f = r[n >> 2], h = r[n + 4 >> 2], g = (n = r[n + 12 >> 2]) >>> 0 > h >>> 0 ? h : n) {
                              if (s = 1, Ae[r[t + 12 >> 2]](e, r[f >> 2], r[f + 4 >> 2])) break e;
                              for (n = f + 12 | 0, c = l + 16 | 0, p = 1;;) {
                                r[i + 12 >> 2] = r[c + -8 >> 2], o[i + 56 | 0] = a[c + 16 | 0], r[i + 8 >> 2] = r[c + -4 >> 2], t = 0, s = 0;
                                r: {
                                  a: switch (r[c + 8 >> 2] - 1 | 0) {
                                    default:
                                      e = r[c + 12 >> 2], s = 1;
                                      break r;
                                    case 0:
                                      if ((l = r[c + 12 >> 2]) >>> 0 < (s = r[i + 52 >> 2]) >>> 0) {
                                        if (s = 0, l = r[i + 48 >> 2] + (l << 3) | 0, 41 != r[l + 4 >> 2]) break r;
                                        e = r[r[l >> 2] >> 2], s = 1;
                                        break r
                                      }
                                      M(1051e3, l, s), u();
                                    case 1:
                                      break a;
                                    case 2:
                                      break r
                                  }(0 | (l = r[i + 40 >> 2])) != r[i + 44 >> 2] && (r[i + 40 >> 2] = l + 8, 41 == r[l + 4 >> 2] && (e = r[r[l >> 2] >> 2], s = 1))
                                }
                                r[i + 20 >> 2] = e, r[i + 16 >> 2] = s;
                                r: {
                                  a: {
                                    i: {
                                      s: {
                                        c: {
                                          l: switch (r[c >> 2] - 1 | 0) {
                                            case 1:
                                              if ((0 | (e = r[i + 40 >> 2])) != r[i + 44 >> 2]) break c;
                                              break r;
                                            case 2:
                                              break r;
                                            case 0:
                                              break l;
                                            default:
                                              break i
                                          }
                                          if ((e = r[c + 4 >> 2]) >>> 0 >= (s = r[i + 52 >> 2]) >>> 0) break s;
                                          if (e = r[i + 48 >> 2] + (e << 3) | 0, 41 != r[e + 4 >> 2]) break r;s = r[r[e >> 2] >> 2];
                                          break a
                                        }
                                        if (r[i + 40 >> 2] = e + 8, 41 != r[e + 4 >> 2]) break r;s = r[r[e >> 2] >> 2];
                                        break a
                                      }
                                      M(1051e3, e, s),
                                      u()
                                    }
                                    s = r[c + 4 >> 2]
                                  }
                                  t = 1
                                }
                                if (r[i + 28 >> 2] = s, r[i + 24 >> 2] = t, 1 == r[c + -16 >> 2]) {
                                  if ((e = r[c + -12 >> 2]) >>> 0 >= (t = r[i + 52 >> 2]) >>> 0) break t;
                                  s = r[i + 48 >> 2] + (e << 3) | 0
                                } else {
                                  if ((0 | (s = r[i + 40 >> 2])) == r[i + 44 >> 2]) break n;
                                  r[i + 40 >> 2] = s + 8
                                }
                                if (Ae[r[s + 4 >> 2]](r[s >> 2], i + 8 | 0)) {
                                  s = 1;
                                  break e
                                }
                                if (p >>> 0 >= g >>> 0) break o;
                                if (e = n + -4 | 0, t = r[n >> 2], n = n + 8 | 0, c = c + 36 | 0, s = 1, p = p + 1 | 0, Ae[r[r[i + 36 >> 2] + 12 >> 2]](r[i + 32 >> 2], r[e >> 2], t)) break
                              }
                              break e
                            }
                          }
                          if (h >>> 0 > p >>> 0 && (s = 1, e = (p << 3) + f | 0, Ae[r[r[i + 36 >> 2] + 12 >> 2]](r[i + 32 >> 2], r[e >> 2], r[e + 4 >> 2]))) break e;s = 0;
                          break e
                        }
                        B(1050472),
                        u()
                      }
                      M(1050984, e, t),
                      u()
                    }
                    return d = i - -64 | 0, s
                  }

                  function g(e, t, n) {
                    var i = 0,
                      s = 0,
                      c = 0,
                      l = 0,
                      u = 0,
                      d = 0,
                      p = 0,
                      f = 0,
                      h = 0,
                      g = 0,
                      y = 0,
                      v = 0;
                    i = r[e + 16 >> 2];
                    e: {
                      t: {
                        n: {
                          o: {
                            if (1 != (0 | (g = r[e + 8 >> 2]))) {
                              if (i) break o;
                              i = 0 | Ae[r[r[e + 28 >> 2] + 12 >> 2]](r[e + 24 >> 2], t, n);
                              break t
                            }
                            if (!i) break n
                          }
                          o: if (n) {
                            for (u = t + n | 0, f = r[e + 20 >> 2] + 1 | 0, y = i = t;;) {
                              c = i + 1 | 0;
                              r: {
                                a: {
                                  if ((0 | (s = o[0 | i])) <= -1) {
                                    if ((0 | c) != (0 | u) ? (p = 63 & a[i + 1 | 0], i = c = i + 2 | 0) : (p = 0, i = u), d = (h = 31 & s) << 6 | p, (v = 255 & s) >>> 0 <= 223) break a;
                                    if ((0 | i) != (0 | u) ? (d = 63 & a[0 | i], s = c = i + 1 | 0) : (d = 0, s = u), d = (p = p << 6 | d) | h << 12, v >>> 0 < 240) break a;
                                    if ((0 | s) != (0 | u) ? (i = s + 1 | 0, s = 63 & a[0 | s]) : (i = c, s = 0), 1114112 != (0 | (s = s | h << 18 & 1835008 | p << 6))) break r;
                                    break o
                                  }
                                  d = 255 & s
                                }
                                s = d,
                                i = c
                              }
                              if (f = f + -1 | 0) {
                                if (l = (l - y | 0) + i | 0, y = i, (0 | i) != (0 | u)) continue;
                                break o
                              }
                              break
                            }
                            1114112 != (0 | s) && (s = l, c = n, !(!l | (0 | n) == (0 | l)) && (i = 0, o[t + l | 0] < -64 | l >>> 0 >= n >>> 0) || (i = t), n = i ? s : c, t = i || t)
                          } else n = 0;
                          if (!g) break e
                        }
                        if (c = 0, n)
                          for (s = n, i = t; c = (128 == (192 & a[0 | i])) + c | 0, i = i + 1 | 0, s = s + -1 | 0;);
                        if (n - c >>> 0 >= (u = r[e + 12 >> 2]) >>> 0) break e;
                        if (l = 0, c = 0, n)
                          for (s = n, i = t; c = (128 == (192 & a[0 | i])) + c | 0, i = i + 1 | 0, s = s + -1 | 0;);s = u + (c - n | 0) | 0;n: {
                          o: {
                            r: switch ((3 == (0 | (i = a[e + 48 | 0])) ? 0 : i) - 1 | 0) {
                              case 1:
                                break o;
                              case 0:
                              case 2:
                                break r;
                              default:
                                break n
                            }
                            l = s,
                            s = 0;
                            break n
                          }
                          l = s >>> 1,
                          s = s + 1 >>> 1
                        }
                        i = l + 1 | 0;n: {
                          for (;;) {
                            if (!(i = i + -1 | 0)) break n;
                            if (Ae[r[r[e + 28 >> 2] + 16 >> 2]](r[e + 24 >> 2], r[e + 4 >> 2])) break
                          }
                          return 1
                        }
                        if (c = r[e + 4 >> 2], i = 1, !Ae[r[r[e + 28 >> 2] + 12 >> 2]](r[e + 24 >> 2], t, n)) {
                          for (i = s + 1 | 0, t = r[e + 28 >> 2], e = r[e + 24 >> 2];;) {
                            if (!(i = i + -1 | 0)) return 0;
                            if (Ae[r[t + 16 >> 2]](e, c)) break
                          }
                          return 1
                        }
                      }
                      return i
                    }
                    return 0 | Ae[r[r[e + 28 >> 2] + 12 >> 2]](r[e + 24 >> 2], t, n)
                  }

                  function y(e) {
                    var t = 0,
                      n = 0,
                      o = 0,
                      a = 0,
                      i = 0,
                      s = 0,
                      c = 0;
                    n = (t = e + -8 | 0) + (e = -8 & (a = r[e + -4 >> 2])) | 0;
                    e: {
                      t: {
                        n: {
                          o: if (!(1 & a)) {
                            if (!(3 & a)) break n;
                            if (e = (a = r[t >> 2]) + e | 0, (0 | (t = t - a | 0)) == r[262873]) {
                              if (3 != (3 & r[n + 4 >> 2])) break o;
                              return r[262871] = e, r[n + 4 >> 2] = -2 & r[n + 4 >> 2], r[t + 4 >> 2] = 1 | e, void(r[e + t >> 2] = e)
                            }
                            a >>> 0 >= 256 ? S(t) : (0 | (o = r[t + 8 >> 2])) == (0 | (i = r[t + 12 >> 2])) ? (s = 1051084, c = r[262771] & Se(-2, a >>> 3), r[s >> 2] = c) : (r[o + 12 >> 2] = i, r[i + 8 >> 2] = o)
                          }if (2 & (a = r[n + 4 >> 2])) r[n + 4 >> 2] = -2 & a,
                          r[t + 4 >> 2] = 1 | e,
                          r[e + t >> 2] = e;
                          else {
                            o: {
                              if (r[262874] != (0 | n)) {
                                if ((0 | n) != r[262873]) break o;
                                return r[262873] = t, e = r[262871] + e | 0, r[262871] = e, r[t + 4 >> 2] = 1 | e, void(r[e + t >> 2] = e)
                              }
                              if (r[262874] = t, e = r[262872] + e | 0, r[262872] = e, r[t + 4 >> 2] = 1 | e, (0 | t) == r[262873] && (r[262871] = 0, r[262873] = 0), (n = r[262881]) >>> 0 >= e >>> 0) break n;
                              if (!(e = r[262874])) break n;r: if (!((a = r[262872]) >>> 0 < 41))
                                for (t = 1051508;;) {
                                  if ((o = r[t >> 2]) + r[t + 4 >> 2] >>> 0 > e >>> 0 && o >>> 0 <= e >>> 0) break r;
                                  if (!(t = r[t + 8 >> 2])) break
                                }
                              if (o = 4095, e = r[262879]) {
                                for (t = 0; t = t + 1 | 0, e = r[e + 8 >> 2];);
                                o = t >>> 0 > 4095 ? t : 4095
                              }
                              if (r[262883] = o, a >>> 0 <= n >>> 0) break n;
                              return void(r[262881] = -1)
                            }
                            if (e = (o = -8 & a) + e | 0, o >>> 0 >= 256 ? S(n) : (0 | (o = r[n + 12 >> 2])) == (0 | (n = r[n + 8 >> 2])) ? (s = 1051084, c = r[262771] & Se(-2, a >>> 3), r[s >> 2] = c) : (r[n + 12 >> 2] = o, r[o + 8 >> 2] = n), r[t + 4 >> 2] = 1 | e, r[e + t >> 2] = e, r[262873] == (0 | t)) {
                              r[262871] = e;
                              break n
                            }
                          }
                          if (e >>> 0 < 256) break t;
                          if (w(t, e), e = r[262883] + -1 | 0, r[262883] = e, !e) {
                            if (e = r[262879]) break e;
                            return void(r[262883] = 4095)
                          }
                        }
                        return
                      }
                      return e = 1051092 + ((n = e >>> 3) << 3) | 0,
                      a = r[262771],
                      n = 1 << (31 & n),
                      o = r[e + 8 >> 2],
                      a & n || (r[262771] = n | a, o = e),
                      n = o,
                      r[e + 8 >> 2] = t,
                      r[n + 12 >> 2] = t,
                      r[t + 12 >> 2] = e,
                      void(r[t + 8 >> 2] = n)
                    }
                    for (t = 0; t = t + 1 | 0, e = r[e + 8 >> 2];);
                    r[262883] = t >>> 0 > 4095 ? t : 4095
                  }

                  function v(e, t, n, i, s) {
                    var c, l, u = 0,
                      d = 0,
                      p = 0,
                      f = 0;
                    if (c = (u = 1 & (l = r[e >> 2])) ? 43 : 1114112, f = s + u | 0, 4 & l) {
                      if (n)
                        for (p = n, u = t; d = (128 == (192 & a[0 | u])) + d | 0, u = u + 1 | 0, p = p + -1 | 0;);
                      f = (n + f | 0) - d | 0
                    } else t = 0;
                    e: {
                      t: {
                        if (1 != r[e + 8 >> 2]) {
                          if (N(e, c, t, n)) break t;
                          break e
                        }
                        if ((u = r[e + 12 >> 2]) >>> 0 <= f >>> 0) {
                          if (N(e, c, t, n)) break t;
                          break e
                        }
                        n: {
                          if (!(8 & l)) {
                            d = u - f | 0, u = 0;
                            o: {
                              r: {
                                a: switch ((3 == (0 | (p = a[e + 48 | 0])) ? 1 : p) - 1 | 0) {
                                  case 1:
                                    break r;
                                  case 0:
                                  case 2:
                                    break a;
                                  default:
                                    break o
                                }
                                u = d,
                                d = 0;
                                break o
                              }
                              u = d >>> 1,
                              d = d + 1 >>> 1
                            }
                            for (u = u + 1 | 0;;) {
                              if (!(u = u + -1 | 0)) break n;
                              if (Ae[r[r[e + 28 >> 2] + 16 >> 2]](r[e + 24 >> 2], r[e + 4 >> 2])) break
                            }
                            return 1
                          }
                          if (o[e + 48 | 0] = 1, r[e + 4 >> 2] = 48, N(e, c, t, n)) break t;d = u - f | 0,
                          u = 0;o: {
                            r: {
                              a: switch ((3 == (0 | (t = a[e + 48 | 0])) ? 1 : t) - 1 | 0) {
                                case 1:
                                  break r;
                                case 0:
                                case 2:
                                  break a;
                                default:
                                  break o
                              }
                              u = d,
                              d = 0;
                              break o
                            }
                            u = d >>> 1,
                            d = d + 1 >>> 1
                          }
                          u = u + 1 | 0;o: {
                            for (;;) {
                              if (!(u = u + -1 | 0)) break o;
                              if (Ae[r[r[e + 28 >> 2] + 16 >> 2]](r[e + 24 >> 2], r[e + 4 >> 2])) break
                            }
                            return 1
                          }
                          if (t = r[e + 4 >> 2], Ae[r[r[e + 28 >> 2] + 12 >> 2]](r[e + 24 >> 2], i, s)) break t;
                          for (d = d + 1 | 0, n = r[e + 28 >> 2], e = r[e + 24 >> 2];;) {
                            if (!(d = d + -1 | 0)) return 0;
                            if (Ae[r[n + 16 >> 2]](e, t)) break
                          }
                          break t
                        }
                        if (u = r[e + 4 >> 2], !N(e, c, t, n) && !Ae[r[r[e + 28 >> 2] + 12 >> 2]](r[e + 24 >> 2], i, s))
                          for (d = d + 1 | 0, t = r[e + 28 >> 2], e = r[e + 24 >> 2];;) {
                            if (!(d = d + -1 | 0)) return 0;
                            if (Ae[r[t + 16 >> 2]](e, u)) break
                          }
                      }
                      return 1
                    }
                    return 0 | Ae[r[r[e + 28 >> 2] + 12 >> 2]](r[e + 24 >> 2], i, s)
                  }

                  function m(e, t, n, o) {
                    var a, i = 0,
                      s = 0,
                      c = 0,
                      l = 0,
                      p = 0,
                      f = 0;
                    d = a = d - 32 | 0;
                    e: {
                      t: {
                        n: {
                          o: {
                            r: {
                              if ((o &= 255) >>> 0 <= 3) switch (o - 1 | 0) {
                                case 2:
                                  break t;
                                case 1:
                                  break n;
                                case 0:
                                  break o;
                                default:
                                  break r
                              }
                              K(1049688, 24, 1049672),
                              u()
                            }
                            c = Se(i = r[t >> 2], 5),
                            s = r[t + 12 >> 2],
                            o = r[t + 8 >> 2],
                            t = r[t + 4 >> 2],
                            l = Se(c = 1518500249 + ((c + r[n >> 2] | 0) + ((s ^ o) & t ^ s) | 0) | 0, 30),
                            r[e + 12 >> 2] = l,
                            s = 1518500249 + (((s + (o ^ i & ((t = Se(t, 30)) ^ o)) | 0) + r[n + 4 >> 2] | 0) + Se(c, 5) | 0) | 0,
                            p = e,
                            f = Se(s, 30),
                            r[p + 8 >> 2] = f,
                            i = 1518500249 + (((o + r[n + 8 >> 2] | 0) + (t ^ c & ((o = Se(i, 30)) ^ t)) | 0) + Se(s, 5) | 0) | 0,
                            r[e + 4 >> 2] = i,
                            p = e,
                            f = 1518500249 + (((t + r[n + 12 >> 2] | 0) + (o ^ s & (o ^ l)) | 0) + Se(i, 5) | 0) | 0,
                            r[p >> 2] = f;
                            break e
                          }
                          s = r[4 + (i = t + 8 | 0) >> 2],
                          r[(o = a + 8 | 0) >> 2] = r[i >> 2],
                          r[o + 4 >> 2] = s,
                          o = r[t + 4 >> 2],
                          r[a >> 2] = r[t >> 2],
                          r[a + 4 >> 2] = o,
                          r[a + 28 >> 2] = r[n + 12 >> 2] + 1859775393,
                          r[a + 24 >> 2] = r[n + 8 >> 2] + 1859775393,
                          r[a + 20 >> 2] = r[n + 4 >> 2] + 1859775393,
                          r[a + 16 >> 2] = r[n >> 2] + 1859775393,
                          C(e, a, a + 16 | 0);
                          break e
                        }
                        c = Se(i = r[t >> 2], 5),
                        s = r[t + 12 >> 2],
                        o = r[t + 8 >> 2],
                        t = r[t + 4 >> 2],
                        l = Se(c = ((c + r[n >> 2] | 0) + ((s ^ o) & t ^ o & s) | 0) - 1894007588 | 0, 30),
                        r[e + 12 >> 2] = l,
                        s = (((s + (i & ((t = Se(t, 30)) ^ o) ^ t & o) | 0) + r[n + 4 >> 2] | 0) + Se(c, 5) | 0) - 1894007588 | 0,
                        p = e,
                        f = Se(s, 30),
                        r[p + 8 >> 2] = f,
                        i = (((o + r[n + 8 >> 2] | 0) + (c & ((o = Se(i, 30)) ^ t) ^ t & o) | 0) + Se(s, 5) | 0) - 1894007588 | 0,
                        r[e + 4 >> 2] = i,
                        p = e,
                        f = (((t + r[n + 12 >> 2] | 0) + (s & (o ^ l) ^ o & l) | 0) + Se(i, 5) | 0) - 1894007588 | 0,
                        r[p >> 2] = f;
                        break e
                      }
                      s = r[4 + (i = t + 8 | 0) >> 2],
                      r[(o = a + 8 | 0) >> 2] = r[i >> 2],
                      r[o + 4 >> 2] = s,
                      o = r[t + 4 >> 2],
                      r[a >> 2] = r[t >> 2],
                      r[a + 4 >> 2] = o,
                      r[a + 28 >> 2] = r[n + 12 >> 2] + -899497514,
                      r[a + 24 >> 2] = r[n + 8 >> 2] + -899497514,
                      r[a + 20 >> 2] = r[n + 4 >> 2] + -899497514,
                      r[a + 16 >> 2] = r[n >> 2] + -899497514,
                      C(e, a, a + 16 | 0)
                    }
                    d = a + 32 | 0
                  }

                  function b(e, t) {
                    var n = 0,
                      o = 0,
                      a = 0,
                      i = 0,
                      s = 0,
                      c = 0;
                    n = e + t | 0;
                    e: {
                      t: {
                        n: if (!(1 & (o = r[e + 4 >> 2]))) {
                          if (!(3 & o)) break t;
                          if (t = (o = r[e >> 2]) + t | 0, (0 | (e = e - o | 0)) == r[262873]) {
                            if (3 != (3 & r[n + 4 >> 2])) break n;
                            return r[262871] = t, r[n + 4 >> 2] = -2 & r[n + 4 >> 2], r[e + 4 >> 2] = 1 | t, void(r[n >> 2] = t)
                          }
                          o >>> 0 >= 256 ? S(e) : (0 | (a = r[e + 8 >> 2])) == (0 | (i = r[e + 12 >> 2])) ? (s = 1051084, c = r[262771] & Se(-2, o >>> 3), r[s >> 2] = c) : (r[a + 12 >> 2] = i, r[i + 8 >> 2] = a)
                        }if (2 & (o = r[n + 4 >> 2])) {
                          r[n + 4 >> 2] = -2 & o, r[e + 4 >> 2] = 1 | t, r[e + t >> 2] = t;
                          break e
                        }
                        n: {
                          if (r[262874] != (0 | n)) {
                            if ((0 | n) != r[262873]) break n;
                            return r[262873] = e, t = r[262871] + t | 0, r[262871] = t, r[e + 4 >> 2] = 1 | t, void(r[e + t >> 2] = t)
                          }
                          if (r[262874] = e, t = r[262872] + t | 0, r[262872] = t, r[e + 4 >> 2] = 1 | t, r[262873] != (0 | e)) break t;
                          return r[262871] = 0,
                          void(r[262873] = 0)
                        }
                        if (t = (a = -8 & o) + t | 0, a >>> 0 >= 256 ? S(n) : (0 | (a = r[n + 12 >> 2])) == (0 | (n = r[n + 8 >> 2])) ? (s = 1051084, c = r[262771] & Se(-2, o >>> 3), r[s >> 2] = c) : (r[n + 12 >> 2] = a, r[a + 8 >> 2] = n), r[e + 4 >> 2] = 1 | t, r[e + t >> 2] = t, r[262873] != (0 | e)) break e;r[262871] = t
                      }
                      return
                    }
                    t >>> 0 >= 256 ? w(e, t) : (t = 1051092 + ((n = t >>> 3) << 3) | 0, o = r[262771], n = 1 << (31 & n), a = r[t + 8 >> 2], o & n || (r[262771] = n | o, a = t), n = a, r[t + 8 >> 2] = e, r[n + 12 >> 2] = e, r[e + 12 >> 2] = t, r[e + 8 >> 2] = n)
                  }

                  function _(e, t) {
                    var n = 0,
                      o = 0,
                      a = 0,
                      i = 0,
                      s = 0;
                    return -65587 - (e = e >>> 0 > 16 ? e : 16) >>> 0 <= t >>> 0 || (n = f(12 + ((a = t >>> 0 < 11 ? 16 : t + 11 & -8) + e | 0) | 0)) && (t = n + -8 | 0, (o = e + -1 | 0) & n ? (o = (-8 & (s = r[(i = n + -4 | 0) >> 2])) - (n = (e = (n = (n + o & 0 - e) - 8 | 0) - t >>> 0 > 16 ? n : e + n | 0) - t | 0) | 0, 3 & s ? (r[e + 4 >> 2] = o | 1 & r[e + 4 >> 2] | 2, r[4 + (o = e + o | 0) >> 2] = 1 | r[o + 4 >> 2], r[i >> 2] = n | 1 & r[i >> 2] | 2, r[e + 4 >> 2] = 1 | r[e + 4 >> 2], b(t, n)) : (t = r[t >> 2], r[e + 4 >> 2] = o, r[e >> 2] = t + n)) : e = t, 3 & (t = r[e + 4 >> 2]) && ((n = -8 & t) >>> 0 <= a + 16 >>> 0 || (r[e + 4 >> 2] = a | 1 & t | 2, t = e + a | 0, a = n - a | 0, r[t + 4 >> 2] = 3 | a, r[4 + (n = e + n | 0) >> 2] = 1 | r[n + 4 >> 2], b(t, a))), o = e + 8 | 0), o
                  }

                  function w(e, t) {
                    var n = 0,
                      o = 0,
                      a = 0,
                      i = 0;
                    r[e + 16 >> 2] = 0, r[e + 20 >> 2] = 0, i = e, o = 0, (n = t >>> 8) && (o = 31, t >>> 0 > 16777215 || (o = 62 + ((t >>> (6 - (n = l(n)) & 31) & 1) - (n << 1) | 0) | 0)), a = o, r[i + 28 >> 2] = a, i = 1051356 + (a << 2) | 0;
                    e: {
                      t: {
                        n: {
                          o: {
                            if ((o = 1 << (31 & a)) & (n = r[262772])) {
                              if (n = r[i >> 2], (-8 & r[n + 4 >> 2]) != (0 | t)) break o;
                              o = n;
                              break n
                            }
                            r[262772] = n | o,
                            r[i >> 2] = e,
                            r[e + 24 >> 2] = i;
                            break e
                          }
                          for (a = t << (31 == (0 | a) ? 0 : 25 - (a >>> 1) & 31);;) {
                            if (!(o = r[(i = 16 + ((a >>> 29 & 4) + n | 0) | 0) >> 2])) break t;
                            if (a <<= 1, (-8 & r[(n = o) + 4 >> 2]) == (0 | t)) break
                          }
                        }
                        return t = r[o + 8 >> 2],
                        r[t + 12 >> 2] = e,
                        r[o + 8 >> 2] = e,
                        r[e + 24 >> 2] = 0,
                        r[e + 12 >> 2] = o,
                        void(r[e + 8 >> 2] = t)
                      }
                      r[i >> 2] = e,
                      r[e + 24 >> 2] = n
                    }
                    r[e + 12 >> 2] = e, r[e + 8 >> 2] = e
                  }

                  function I(e, t, n) {
                    var i, s = 0,
                      c = 0;
                    d = i = d - 80 | 0, a[e + 96 | 0] || (r[i + 76 >> 2] = e + 8, function (e, t) {
                      var n;
                      if (d = n = d - 16 | 0, W(n + 8 | 0, e, 1), r[n + 12 >> 2]) return o[r[n + 8 >> 2]] = 128, 64 - r[e >> 2] >>> 0 < 8 && (L(e, 64), R(n, e), k(r[t >> 2], r[n >> 2], r[n + 4 >> 2])), L(e, 56), void(d = n + 16 | 0);
                      M(1049536, 0, 0), u()
                    }(s = e + 28 | 0, i + 76 | 0), W(i - -64 | 0, s, 4), F(r[i + 64 >> 2], r[i + 68 >> 2], r[e + 4 >> 2]), W(i + 56 | 0, s, 4), F(r[i + 56 >> 2], r[i + 60 >> 2], r[e >> 2]), c = r[i + 76 >> 2], R(i + 48 | 0, s), k(c, r[i + 48 >> 2], r[i + 52 >> 2]), o[e + 96 | 0] = 1), V(i + 40 | 0, t, n, 0, 4), F(r[i + 40 >> 2], r[i + 44 >> 2], r[e + 8 >> 2]), V(i + 32 | 0, t, n, 4, 8), F(r[i + 32 >> 2], r[i + 36 >> 2], r[e + 12 >> 2]), V(i + 24 | 0, t, n, 8, 12), F(r[i + 24 >> 2], r[i + 28 >> 2], r[e + 16 >> 2]), V(i + 16 | 0, t, n, 12, 16), F(r[i + 16 >> 2], r[i + 20 >> 2], r[e + 20 >> 2]), V(i + 8 | 0, t, n, 16, 20), F(r[i + 8 >> 2], r[i + 12 >> 2], r[e + 24 >> 2]), d = i + 80 | 0
                  }

                  function S(e) {
                    var t, n = 0,
                      o = 0,
                      a = 0,
                      i = 0,
                      s = 0,
                      c = 0;
                    t = r[e + 24 >> 2];
                    e: {
                      t: {
                        if ((0 | e) == (0 | (n = r[e + 12 >> 2]))) {
                          if (a = r[(n = e + 20 | 0) >> 2], o = r[(a ? 20 : 16) + e >> 2]) break t;
                          n = 0;
                          break e
                        }
                        o = r[e + 8 >> 2],
                        r[o + 12 >> 2] = n,
                        r[n + 8 >> 2] = o;
                        break e
                      }
                      for (a = a ? n : e + 16 | 0; i = a, (o = r[(a = (n = o) + 20 | 0) >> 2]) || (a = n + 16 | 0, o = r[n + 16 >> 2]), o;);r[i >> 2] = 0
                    }
                    e: if (t) {
                      o = 1051356 + (r[e + 28 >> 2] << 2) | 0;
                      t: {
                        if ((0 | e) == r[o >> 2]) {
                          if (r[o >> 2] = n, n) break t;
                          return s = 1051088, c = r[262772] & Se(-2, r[e + 28 >> 2]), void(r[s >> 2] = c)
                        }
                        if (r[(r[t + 16 >> 2] == (0 | e) ? 16 : 20) + t >> 2] = n, !n) break e
                      }
                      r[n + 24 >> 2] = t, (o = r[e + 16 >> 2]) && (r[n + 16 >> 2] = o, r[o + 24 >> 2] = n), (e = r[e + 20 >> 2]) && (r[n + 20 >> 2] = e, r[e + 24 >> 2] = n)
                    }
                  }

                  function A(e, t, n, o) {
                    var a, i, s = 0,
                      c = 0,
                      l = 0;
                    d = a = d + -64 | 0, c = 1, s = r[o + 12 >> 2], l = r[o + 8 >> 2], i = r[o + 4 >> 2], o = r[o >> 2];
                    e: {
                      t: {
                        if (1 == r[262884]) {
                          if (c = r[262885] + 1 | 0, r[262885] = c, c >>> 0 > 2) break t
                        } else r[262884] = 1,
                        r[262885] = 1;
                        if (ee(a + 48 | 0, o, i, l, s), s = r[4 + (o = a + 56 | 0) >> 2], r[(l = a + 36 | 0) >> 2] = r[o >> 2], r[l + 4 >> 2] = s, r[a + 24 >> 2] = n, r[a + 20 >> 2] = 1049892, r[a + 16 >> 2] = 1, n = r[a + 52 >> 2], r[a + 28 >> 2] = r[a + 48 >> 2], r[a + 32 >> 2] = n, !((0 | (n = r[262768])) <= -1) && (n = n + 1 | 0, r[262768] = n, (o = r[262770]) && (n = r[262769], Ae[r[t + 16 >> 2]](a + 8 | 0, e), s = r[a + 12 >> 2], r[a + 16 >> 2] = r[a + 8 >> 2], r[a + 20 >> 2] = s, Ae[r[o + 12 >> 2]](n, a + 16 | 0), n = r[262768]), r[262768] = n + -1, c >>> 0 <= 1)) break e
                      }
                      u()
                    }
                    d = n = d - 16 | 0, r[n + 12 >> 2] = t, r[n + 8 >> 2] = e, u()
                  }

                  function k(e, t, n) {
                    var o;
                    if (d = o = d - 96 | 0, r[o + 4 >> 2] = n, 64 == (0 | n)) return z(o + 32 | 0, 64),
                      function (e, t) {
                        var n = 0,
                          o = 0;
                        for (o = 16; o;) n = a[0 | t] | a[t + 1 | 0] << 8 | a[t + 2 | 0] << 16 | a[t + 3 | 0] << 24, r[e >> 2] = n << 24 | n << 8 & 16711680 | n >>> 8 & 65280 | n >>> 24, o = o + -1 | 0, t = t + 4 | 0, e = e + 4 | 0
                      }(o + 32 | 0, t),
                      function (e, t) {
                        var n, o = 0,
                          a = 0,
                          i = 0,
                          s = 0,
                          c = 0,
                          l = 0,
                          u = 0,
                          p = 0,
                          f = 0,
                          h = 0,
                          g = 0,
                          y = 0,
                          v = 0,
                          b = 0,
                          _ = 0,
                          w = 0,
                          I = 0,
                          S = 0,
                          A = 0,
                          k = 0,
                          C = 0,
                          P = 0,
                          T = 0,
                          x = 0,
                          M = 0;
                        d = n = d + -64 | 0, f = r[t >> 2], c = r[t + 4 >> 2], l = r[t + 8 >> 2], u = r[t + 12 >> 2], v = r[e >> 2], h = r[e + 8 >> 2], p = r[e + 4 >> 2], r[n + 44 >> 2] = r[e + 12 >> 2], r[n + 36 >> 2] = p, r[n + 40 >> 2] = h, r[n + 32 >> 2] = v, r[n + 60 >> 2] = u, r[n + 56 >> 2] = l, r[n + 52 >> 2] = c, r[n + 48 >> 2] = f + r[e + 16 >> 2], m(n, n + 32 | 0, n + 48 | 0, 0), b = r[t + 16 >> 2], g = r[t + 20 >> 2], A = r[t + 24 >> 2], _ = r[t + 28 >> 2], i = r[4 + (p = n + 8 | 0) >> 2], r[(a = h = n + 40 | 0) >> 2] = r[p >> 2], r[a + 4 >> 2] = i, a = r[n + 4 >> 2], r[n + 32 >> 2] = r[n >> 2], r[n + 36 >> 2] = a, r[n + 60 >> 2] = _, r[n + 56 >> 2] = A, r[n + 52 >> 2] = g, x = n, M = Se(v, 30) + b | 0, r[x + 48 >> 2] = M, m(n + 16 | 0, n + 32 | 0, n + 48 | 0, 0), s = r[n + 16 >> 2], v = r[n + 20 >> 2], a = r[n + 24 >> 2], i = r[t + 32 >> 2], w = r[t + 36 >> 2], I = r[t + 40 >> 2], S = r[t + 44 >> 2], r[n + 44 >> 2] = r[n + 28 >> 2], r[n + 36 >> 2] = v, r[n + 40 >> 2] = a, r[n + 32 >> 2] = s, r[n + 60 >> 2] = S, r[n + 56 >> 2] = I, r[n + 52 >> 2] = w, x = n, M = Se(r[n >> 2], 30) + i | 0, r[x + 48 >> 2] = M, m(n + 16 | 0, n + 32 | 0, n + 48 | 0, 0), y = r[4 + (a = v = n + 24 | 0) >> 2], k = r[a >> 2], r[p >> 2] = k, r[p + 4 >> 2] = y, o = r[n + 20 >> 2], C = r[n + 16 >> 2], r[n >> 2] = C, r[n + 4 >> 2] = o, P = r[t + 48 >> 2], a = r[t + 52 >> 2], T = r[t + 56 >> 2], t = r[t + 60 >> 2], r[h >> 2] = k, r[h + 4 >> 2] = y, r[n + 32 >> 2] = C, r[n + 36 >> 2] = o, r[n + 60 >> 2] = t, r[n + 56 >> 2] = T, r[n + 52 >> 2] = a, x = n, M = Se(s, 30) + P | 0, r[x + 48 >> 2] = M, m(n + 16 | 0, n + 32 | 0, n + 48 | 0, 0), y = r[n + 16 >> 2], s = r[n + 20 >> 2], o = r[n + 24 >> 2], r[n + 44 >> 2] = r[n + 28 >> 2], r[n + 36 >> 2] = s, r[n + 40 >> 2] = o, r[n + 32 >> 2] = y, o = Se(r[n >> 2], 30), f = Se(a ^ i ^ f ^ l, 1), r[n + 48 >> 2] = o + f, s = Se(f ^ S ^ u ^ g, 1), r[n + 60 >> 2] = s, l = Se(t ^ I ^ l ^ b, 1), r[n + 56 >> 2] = l, u = Se(T ^ w ^ c ^ u, 1), r[n + 52 >> 2] = u, m(n + 16 | 0, n + 32 | 0, n + 48 | 0, 0), c = r[v + 4 >> 2], k = r[v >> 2], r[p >> 2] = k, r[p + 4 >> 2] = c, o = r[n + 20 >> 2], C = r[n + 16 >> 2], r[n >> 2] = C, r[n + 4 >> 2] = o, r[h >> 2] = k, r[h + 4 >> 2] = c, r[n + 32 >> 2] = C, r[n + 36 >> 2] = o, o = Se(y, 30), b = Se(u ^ P ^ b ^ A, 1), r[n + 48 >> 2] = o + b, A = Se(s ^ T ^ i ^ A, 1), r[n + 56 >> 2] = A, c = Se(b ^ t ^ _ ^ w, 1), r[n + 60 >> 2] = c, g = Se(l ^ a ^ g ^ _, 1), r[n + 52 >> 2] = g, m(n + 16 | 0, n + 32 | 0, n + 48 | 0, 1), y = r[n + 16 >> 2], _ = r[n + 20 >> 2], o = r[n + 24 >> 2], r[n + 44 >> 2] = r[n + 28 >> 2], r[n + 36 >> 2] = _, r[n + 40 >> 2] = o, r[n + 32 >> 2] = y, o = Se(r[n >> 2], 30), i = Se(g ^ f ^ i ^ I, 1), r[n + 48 >> 2] = o + i, I = Se(c ^ l ^ I ^ P, 1), r[n + 56 >> 2] = I, _ = Se(i ^ s ^ a ^ S, 1), r[n + 60 >> 2] = _, w = Se(A ^ u ^ S ^ w, 1), r[n + 52 >> 2] = w, m(n + 16 | 0, n + 32 | 0, n + 48 | 0, 1), S = r[v + 4 >> 2], k = r[v >> 2], r[p >> 2] = k, r[p + 4 >> 2] = S, o = r[n + 20 >> 2], C = r[n + 16 >> 2], r[n >> 2] = C, r[n + 4 >> 2] = o, r[h >> 2] = k, r[h + 4 >> 2] = S, r[n + 32 >> 2] = C, r[n + 36 >> 2] = o, o = Se(y, 30), S = Se(w ^ b ^ T ^ P, 1), r[n + 48 >> 2] = o + S, T = Se(_ ^ A ^ f ^ T, 1), r[n + 56 >> 2] = T, P = Se(S ^ c ^ t ^ u, 1), r[n + 60 >> 2] = P, t = Se(I ^ g ^ t ^ a, 1), r[n + 52 >> 2] = t, m(n + 16 | 0, n + 32 | 0, n + 48 | 0, 1), y = r[n + 16 >> 2], a = r[n + 20 >> 2], o = r[n + 24 >> 2], r[n + 44 >> 2] = r[n + 28 >> 2], r[n + 36 >> 2] = a, r[n + 40 >> 2] = o, r[n + 32 >> 2] = y, o = Se(r[n >> 2], 30), a = Se(t ^ i ^ f ^ l, 1), r[n + 48 >> 2] = o + a, f = Se(a ^ _ ^ s ^ g, 1), r[n + 60 >> 2] = f, l = Se(P ^ I ^ l ^ b, 1), r[n + 56 >> 2] = l, s = Se(T ^ w ^ s ^ u, 1), r[n + 52 >> 2] = s, m(n + 16 | 0, n + 32 | 0, n + 48 | 0, 1), u = r[v + 4 >> 2], k = r[v >> 2], r[p >> 2] = k, r[p + 4 >> 2] = u, o = r[n + 20 >> 2], C = r[n + 16 >> 2], r[n >> 2] = C, r[n + 4 >> 2] = o, r[h >> 2] = k, r[h + 4 >> 2] = u, r[n + 32 >> 2] = C, r[n + 36 >> 2] = o, o = Se(y, 30), u = Se(s ^ S ^ b ^ A, 1), r[n + 48 >> 2] = o + u, b = Se(f ^ T ^ i ^ A, 1), r[n + 56 >> 2] = b, A = Se(u ^ P ^ c ^ w, 1), r[n + 60 >> 2] = A, c = Se(l ^ t ^ c ^ g, 1), r[n + 52 >> 2] = c, m(n + 16 | 0, n + 32 | 0, n + 48 | 0, 1), y = r[n + 16 >> 2], g = r[n + 20 >> 2], o = r[n + 24 >> 2], r[n + 44 >> 2] = r[n + 28 >> 2], r[n + 36 >> 2] = g, r[n + 40 >> 2] = o, r[n + 32 >> 2] = y, o = Se(r[n >> 2], 30), i = Se(c ^ a ^ i ^ I, 1), r[n + 48 >> 2] = o + i, I = Se(A ^ l ^ S ^ I, 1), r[n + 56 >> 2] = I, g = Se(i ^ f ^ t ^ _, 1), r[n + 60 >> 2] = g, w = Se(b ^ s ^ _ ^ w, 1), r[n + 52 >> 2] = w, m(n + 16 | 0, n + 32 | 0, n + 48 | 0, 2), _ = r[v + 4 >> 2], k = r[v >> 2], r[p >> 2] = k, r[p + 4 >> 2] = _, o = r[n + 20 >> 2], C = r[n + 16 >> 2], r[n >> 2] = C, r[n + 4 >> 2] = o, r[h >> 2] = k, r[h + 4 >> 2] = _, r[n + 32 >> 2] = C, r[n + 36 >> 2] = o, o = Se(y, 30), S = Se(w ^ u ^ T ^ S, 1), r[n + 48 >> 2] = o + S, T = Se(g ^ b ^ a ^ T, 1), r[n + 56 >> 2] = T, _ = Se(S ^ A ^ s ^ P, 1), r[n + 60 >> 2] = _, t = Se(I ^ c ^ t ^ P, 1), r[n + 52 >> 2] = t, m(n + 16 | 0, n + 32 | 0, n + 48 | 0, 2), y = r[n + 16 >> 2], P = r[n + 20 >> 2], o = r[n + 24 >> 2], r[n + 44 >> 2] = r[n + 28 >> 2], r[n + 36 >> 2] = P, r[n + 40 >> 2] = o, r[n + 32 >> 2] = y, o = Se(r[n >> 2], 30), a = Se(t ^ i ^ a ^ l, 1), r[n + 48 >> 2] = o + a, P = Se(a ^ g ^ c ^ f, 1), r[n + 60 >> 2] = P, l = Se(_ ^ I ^ u ^ l, 1), r[n + 56 >> 2] = l, f = Se(T ^ w ^ s ^ f, 1), r[n + 52 >> 2] = f, m(n + 16 | 0, n + 32 | 0, n + 48 | 0, 2), s = r[v + 4 >> 2], k = r[v >> 2], r[p >> 2] = k, r[p + 4 >> 2] = s, o = r[n + 20 >> 2], C = r[n + 16 >> 2], r[n >> 2] = C, r[n + 4 >> 2] = o, r[h >> 2] = k, r[h + 4 >> 2] = s, r[n + 32 >> 2] = C, r[n + 36 >> 2] = o, o = Se(y, 30), s = Se(f ^ S ^ u ^ b, 1), r[n + 48 >> 2] = o + s, u = Se(P ^ T ^ i ^ b, 1), r[n + 56 >> 2] = u, b = Se(s ^ _ ^ A ^ w, 1), r[n + 60 >> 2] = b, A = Se(l ^ t ^ c ^ A, 1), r[n + 52 >> 2] = A, m(n + 16 | 0, n + 32 | 0, n + 48 | 0, 2), y = r[n + 16 >> 2], c = r[n + 20 >> 2], o = r[n + 24 >> 2], r[n + 44 >> 2] = r[n + 28 >> 2], r[n + 36 >> 2] = c, r[n + 40 >> 2] = o, r[n + 32 >> 2] = y, o = Se(r[n >> 2], 30), i = Se(A ^ a ^ i ^ I, 1), r[n + 48 >> 2] = o + i, I = Se(b ^ l ^ S ^ I, 1), r[n + 56 >> 2] = I, c = Se(i ^ P ^ t ^ g, 1), r[n + 60 >> 2] = c, w = Se(u ^ f ^ g ^ w, 1), r[n + 52 >> 2] = w, m(n + 16 | 0, n + 32 | 0, n + 48 | 0, 2), g = r[v + 4 >> 2], k = r[v >> 2], r[p >> 2] = k, r[p + 4 >> 2] = g, o = r[n + 20 >> 2], C = r[n + 16 >> 2], r[n >> 2] = C, r[n + 4 >> 2] = o, r[h >> 2] = k, r[h + 4 >> 2] = g, r[n + 32 >> 2] = C, r[n + 36 >> 2] = o, o = Se(y, 30), S = Se(w ^ s ^ T ^ S, 1), r[n + 48 >> 2] = o + S, T = Se(c ^ u ^ a ^ T, 1), r[n + 56 >> 2] = T, g = Se(S ^ b ^ f ^ _, 1), r[n + 60 >> 2] = g, t = Se(I ^ A ^ t ^ _, 1), r[n + 52 >> 2] = t, m(n + 16 | 0, n + 32 | 0, n + 48 | 0, 3), _ = r[n + 16 >> 2], y = r[n + 20 >> 2], o = r[n + 24 >> 2], r[n + 44 >> 2] = r[n + 28 >> 2], r[n + 36 >> 2] = y, r[n + 40 >> 2] = o, r[n + 32 >> 2] = _, o = Se(r[n >> 2], 30), a = Se(t ^ i ^ a ^ l, 1), r[n + 48 >> 2] = o + a, y = Se(a ^ c ^ A ^ P, 1), r[n + 60 >> 2] = y, l = Se(g ^ I ^ s ^ l, 1), r[n + 56 >> 2] = l, P = Se(T ^ w ^ f ^ P, 1), r[n + 52 >> 2] = P, m(n + 16 | 0, n + 32 | 0, n + 48 | 0, 3), f = r[v + 4 >> 2], k = r[v >> 2], r[p >> 2] = k, r[p + 4 >> 2] = f, o = r[n + 20 >> 2], C = r[n + 16 >> 2], r[n >> 2] = C, r[n + 4 >> 2] = o, r[h >> 2] = k, r[h + 4 >> 2] = f, r[n + 32 >> 2] = C, r[n + 36 >> 2] = o, o = Se(_, 30), f = Se(P ^ S ^ s ^ u, 1), r[n + 48 >> 2] = o + f, s = Se(y ^ T ^ i ^ u, 1), r[n + 56 >> 2] = s, u = Se(f ^ g ^ b ^ w, 1), r[n + 60 >> 2] = u, b = Se(l ^ t ^ b ^ A, 1), r[n + 52 >> 2] = b, m(n + 16 | 0, n + 32 | 0, n + 48 | 0, 3), A = r[n + 16 >> 2], _ = r[n + 20 >> 2], o = r[n + 24 >> 2], r[n + 44 >> 2] = r[n + 28 >> 2], r[n + 36 >> 2] = _, r[n + 40 >> 2] = o, r[n + 32 >> 2] = A, o = Se(r[n >> 2], 30), i = Se(b ^ a ^ i ^ I, 1), r[n + 48 >> 2] = o + i, I = Se(u ^ l ^ S ^ I, 1), r[n + 56 >> 2] = I, l = Se(i ^ y ^ t ^ c, 1), r[n + 60 >> 2] = l, w = Se(s ^ P ^ c ^ w, 1), r[n + 52 >> 2] = w, m(n + 16 | 0, n + 32 | 0, n + 48 | 0, 3), i = r[v + 4 >> 2], v = r[v >> 2], r[p >> 2] = v, r[p + 4 >> 2] = i, p = r[n + 20 >> 2], c = r[n + 16 >> 2], r[n >> 2] = c, r[n + 4 >> 2] = p, r[h >> 2] = v, r[h + 4 >> 2] = i, r[n + 32 >> 2] = c, r[n + 36 >> 2] = p, h = Se(w ^ f ^ T ^ S, 1), x = n, M = Se(h ^ u ^ g ^ P, 1), r[x + 60 >> 2] = M, x = n, M = Se(l ^ s ^ a ^ T, 1), r[x + 56 >> 2] = M, x = n, M = Se(I ^ b ^ t ^ g, 1), r[x + 52 >> 2] = M, x = n, M = Se(A, 30) + h | 0, r[x + 48 >> 2] = M, m(n + 16 | 0, n + 32 | 0, n + 48 | 0, 3), t = r[n + 28 >> 2], h = r[n + 24 >> 2], p = r[n + 20 >> 2], r[e >> 2] = r[e >> 2] + r[n + 16 >> 2], r[e + 4 >> 2] = p + r[e + 4 >> 2], r[e + 8 >> 2] = h + r[e + 8 >> 2], r[e + 12 >> 2] = t + r[e + 12 >> 2], x = e, M = r[e + 16 >> 2] + Se(r[n >> 2], 30) | 0, r[x + 16 >> 2] = M, d = n - -64 | 0
                      }(e, o + 32 | 0), void(d = o + 96 | 0);
                    r[o + 20 >> 2] = 1, r[o + 52 >> 2] = 2, r[o + 36 >> 2] = 3, r[o + 40 >> 2] = 0, r[o + 32 >> 2] = 1049776, r[o + 12 >> 2] = 1, r[o + 24 >> 2] = o + 4, r[o + 28 >> 2] = 1049712, r[o + 48 >> 2] = o + 8, r[o + 16 >> 2] = o + 28, r[o + 8 >> 2] = o + 24,
                      function (e) {
                        var t, n, o, a;
                        d = t = d - 48 | 0, ee(t + 32 | 0, r[262450], r[262451], r[262452], r[262453]), a = r[4 + (n = t + 40 | 0) >> 2], r[(o = t + 20 | 0) >> 2] = r[n >> 2], r[o + 4 >> 2] = a, r[t + 8 >> 2] = e, r[t + 4 >> 2] = 1049892, r[t >> 2] = 1, e = r[t + 36 >> 2], r[t + 12 >> 2] = r[t + 32 >> 2], r[t + 16 >> 2] = e, x(t), u()
                      }(o + 32 | 0), u()
                  }

                  function C(e, t, n) {
                    var o, a, i = 0,
                      s = 0,
                      c = 0,
                      l = 0,
                      u = 0;
                    o = (((s = r[t + 12 >> 2]) ^ (i = r[t + 8 >> 2]) ^ (c = r[t + 4 >> 2])) + Se(t = r[t >> 2], 5) | 0) + r[n >> 2] | 0, a = Se(o, 30), r[e + 12 >> 2] = a, s = ((s + (i ^ (c = Se(c, 30)) ^ t) | 0) + r[n + 4 >> 2] | 0) + Se(o, 5) | 0, l = e, u = Se(s, 30), r[l + 8 >> 2] = u, i = ((i = i + r[n + 8 >> 2] | 0) + ((t = Se(t, 30)) ^ c ^ o) | 0) + Se(s, 5) | 0, r[e + 4 >> 2] = i, l = e, u = ((c + r[n + 12 >> 2] | 0) + (s ^ t ^ a) | 0) + Se(i, 5) | 0, r[l >> 2] = u
                  }

                  function P(e, t) {
                    var n = 0,
                      o = 0;
                    e: {
                      t: {
                        if ((n = r[e + 4 >> 2]) - (o = r[e + 8 >> 2]) >>> 0 < t >>> 0) {
                          if ((t = t + o | 0) >>> 0 < o >>> 0) break e;
                          if ((0 | (t = (o = n << 1) >>> 0 > t >>> 0 ? o : t)) < 0) break e;
                          if (!(n = n ? re(r[e >> 2], n, 1, t) : ce(t, 1))) break t;
                          r[e + 4 >> 2] = t, r[e >> 2] = n
                        }
                        return
                      }
                      fe(t, 1),
                      u()
                    }
                    ge(), u()
                  }

                  function T(e, t, n, o) {
                    var a;
                    d = a = d + -64 | 0, r[a + 12 >> 2] = t, r[a + 8 >> 2] = e, r[a + 20 >> 2] = o, r[a + 16 >> 2] = n, r[a + 44 >> 2] = 2, r[a + 60 >> 2] = 43, r[a + 28 >> 2] = 2, r[a + 32 >> 2] = 0, r[a + 24 >> 2] = 1050524, r[a + 52 >> 2] = 42, r[a + 40 >> 2] = a + 48, r[a + 56 >> 2] = a + 16, r[a + 48 >> 2] = a + 8, Z(a + 24 | 0, 1050564), u()
                  }

                  function x(e) {
                    var t, n, o, a, i = 0,
                      s = 0;
                    d = t = d - 48 | 0, n = ie(e + 12 | 0), o = ie(r[e + 8 >> 2]), s = r[n + 4 >> 2], r[(i = t + 8 | 0) >> 2] = r[n >> 2], r[i + 4 >> 2] = s, s = r[t + 12 >> 2], i = r[t + 8 >> 2], a = r[n + 8 >> 2], r[t + 28 >> 2] = r[n + 12 >> 2], r[t + 24 >> 2] = a, r[t + 16 >> 2] = i, r[t + 20 >> 2] = s, r[t + 36 >> 2] = 0, r[t + 32 >> 2] = o, A(t + 32 | 0, 1050008, r[e + 8 >> 2], t + 16 | 0), u()
                  }

                  function M(e, t, n) {
                    var o;
                    d = o = d - 48 | 0, r[o + 4 >> 2] = n, r[o >> 2] = t, r[o + 28 >> 2] = 2, r[o + 44 >> 2] = 40, r[o + 12 >> 2] = 2, r[o + 16 >> 2] = 0, r[o + 8 >> 2] = 1050392, r[o + 36 >> 2] = 40, r[o + 24 >> 2] = o + 32, r[o + 40 >> 2] = o, r[o + 32 >> 2] = o + 4, Z(o + 8 | 0, e), u()
                  }

                  function E(e, t) {
                    var n;
                    d = n = d - 48 | 0, r[n + 4 >> 2] = t, r[n >> 2] = e, r[n + 28 >> 2] = 2, r[n + 44 >> 2] = 40, r[n + 12 >> 2] = 2, r[n + 16 >> 2] = 0, r[n + 8 >> 2] = 1050644, r[n + 36 >> 2] = 40, r[n + 24 >> 2] = n + 32, r[n + 40 >> 2] = n + 4, r[n + 32 >> 2] = n, Z(n + 8 | 0, 1050660), u()
                  }

                  function O(e, t) {
                    var n;
                    d = n = d - 48 | 0, r[n + 4 >> 2] = t, r[n >> 2] = e, r[n + 28 >> 2] = 2, r[n + 44 >> 2] = 40, r[n + 12 >> 2] = 2, r[n + 16 >> 2] = 0, r[n + 8 >> 2] = 1050712, r[n + 36 >> 2] = 40, r[n + 24 >> 2] = n + 32, r[n + 40 >> 2] = n + 4, r[n + 32 >> 2] = n, Z(n + 8 | 0, 1050728), u()
                  }

                  function L(e, t) {
                    var n, o;
                    if (d = n = d - 16 | 0, (o = r[e >> 2]) >>> 0 <= t >>> 0) return V(n + 8 | 0, e + 4 | 0, 64, o, t), z(r[n + 8 >> 2], r[n + 12 >> 2]), r[e >> 2] = t, void(d = n + 16 | 0);
                    K(1049568, 40, 1049552), u()
                  }

                  function D(e) {
                    var t;
                    for (d = t = d - 32 | 0, r[t + 24 >> 2] = e; j(t + 16 | 0, t + 24 | 0), 1 & o[t + 16 | 0];);
                    le(t + 8 | 0, r[e >> 2], r[e + 4 >> 2]), e = r[t + 12 >> 2], r[t + 24 >> 2] = r[t + 8 >> 2], r[t + 28 >> 2] = e, te(t + 24 | 0), d = t + 32 | 0
                  }

                  function B(e) {
                    var t, n, o, a, i, s;
                    d = t = d - 48 | 0, n = r[e + 8 >> 2], o = r[e + 12 >> 2], a = r[e + 16 >> 2], i = r[e + 20 >> 2], s = r[e >> 2], e = r[e + 4 >> 2], r[t + 16 >> 2] = 4, r[t + 20 >> 2] = 0, r[t + 4 >> 2] = 1, r[t + 8 >> 2] = 0, r[t + 24 >> 2] = s, r[t + 28 >> 2] = e, r[t >> 2] = t + 24, r[t + 40 >> 2] = a, r[t + 44 >> 2] = i, r[t + 32 >> 2] = n, r[t + 36 >> 2] = o, Z(t, t + 32 | 0), u()
                  }

                  function R(e, t) {
                    var n;
                    if (d = n = d - 16 | 0, 64 == r[t >> 2]) return r[t >> 2] = 0, Y(n + 8 | 0, t + 4 | 0, 64, 64), t = r[n + 12 >> 2], r[e >> 2] = r[n + 8 >> 2], r[e + 4 >> 2] = t, void(d = n + 16 | 0);
                    K(1049608, 39, 1049552), u()
                  }

                  function N(e, t, n, o) {
                    var a = 0;
                    if (1114112 == (0 | t) || (a = 1, !Ae[r[r[e + 28 >> 2] + 16 >> 2]](r[e + 24 >> 2], t))) {
                      if (!n) return 0;
                      a = 0 | Ae[r[r[e + 28 >> 2] + 12 >> 2]](r[e + 24 >> 2], n, o)
                    }
                    return a
                  }

                  function F(e, t, n) {
                    if (4 == (0 | t)) return t = n << 8 & 16711680 | n << 24 | n >>> 8 & 65280 | n >>> 24, o[0 | e] = t, o[e + 1 | 0] = t >>> 8, o[e + 2 | 0] = t >>> 16, void(o[e + 3 | 0] = t >>> 24);
                    K(1049304, 32, 1049288), u()
                  }

                  function W(e, t, n) {
                    var o, a = 0;
                    d = o = d - 16 | 0, a = (a = n) + (n = r[t >> 2]) | 0, r[t >> 2] = a, V(o + 8 | 0, t + 4 | 0, 64, n, a), t = r[o + 12 >> 2], r[e >> 2] = r[o + 8 >> 2], r[e + 4 >> 2] = t, d = o + 16 | 0
                  }

                  function j(e, t) {
                    var n = 0,
                      i = 0;
                    t = r[t >> 2], i = 0, (0 | (n = r[t + 8 >> 2])) != r[t + 12 >> 2] && (r[t + 8 >> 2] = n + 1, t = a[0 | n], i = 1), n = i, o[e + 1 | 0] = t, o[0 | e] = n
                  }

                  function $(e, t, n) {
                    var a;
                    d = a = d - 16 | 0, r[a + 8 >> 2] = 0, r[a >> 2] = 1, r[a + 4 >> 2] = 0, de(a, n - t >>> 2),
                      function (e, t, n) {
                        var a, i = 0,
                          s = 0,
                          c = 0;
                        for (d = a = d - 16 | 0;
                          (0 | e) != (0 | t);) i = e + 4 | 0, (e = r[e >> 2]) >>> 0 >= 128 ? (r[a + 12 >> 2] = 0, s = n, c = a + 12 | 0, e >>> 0 <= 2047 ? (o[a + 13 | 0] = 63 & e | 128, o[a + 12 | 0] = e >>> 6 & 31 | 192, e = 2) : e >>> 0 <= 65535 ? (o[a + 14 | 0] = 63 & e | 128, o[a + 13 | 0] = e >>> 6 & 63 | 128, o[a + 12 | 0] = e >>> 12 & 15 | 224, e = 3) : (o[a + 15 | 0] = 63 & e | 128, o[a + 12 | 0] = e >>> 18 | 240, o[a + 14 | 0] = e >>> 6 & 63 | 128, o[a + 13 | 0] = e >>> 12 & 63 | 128, e = 4), se(s, c, e), e = i) : (r[n + 8 >> 2] == r[n + 4 >> 2] && de(n, 1), o[r[n >> 2] + r[n + 8 >> 2] | 0] = e, r[n + 8 >> 2] = r[n + 8 >> 2] + 1, e = i);
                        d = a + 16 | 0
                      }(t, n, a), r[e + 8 >> 2] = r[a + 8 >> 2], t = r[a + 4 >> 2], r[e >> 2] = r[a >> 2], r[e + 4 >> 2] = t, d = a + 16 | 0
                  }

                  function V(e, t, n, o, a) {
                    e: {
                      if (a >>> 0 >= o >>> 0) {
                        if (n >>> 0 < a >>> 0) break e;
                        return r[e + 4 >> 2] = a - o, void(r[e >> 2] = t + o)
                      }
                      O(o, a),
                      u()
                    }
                    E(a, n),
                    u()
                  }

                  function Z(e, t) {
                    var n, o, a, i, s;
                    d = n = d - 32 | 0, a = r[t >> 2], i = r[t + 4 >> 2], s = r[t + 12 >> 2], r[(o = n + 20 | 0) >> 2] = r[t + 8 >> 2], r[o + 4 >> 2] = s, r[n + 12 >> 2] = a, r[n + 16 >> 2] = i, r[n + 8 >> 2] = e, r[n + 4 >> 2] = 1050324, r[n >> 2] = 1, x(n), u()
                  }

                  function U(e) {
                    var t, n;
                    e |= 0, d = t = d - 16 | 0,
                      function (e) {
                        var t, n = 0;
                        d = t = d - 32 | 0, r[4 + (n = t + 8 | 0) >> 2] = 0, r[n >> 2] = 1, r[t + 24 >> 2] = 0, n = r[t + 12 >> 2], r[t + 16 >> 2] = r[t + 8 >> 2], r[t + 20 >> 2] = n, se(t + 16 | 0, 1049136, 0), r[e + 8 >> 2] = r[t + 24 >> 2], n = r[t + 20 >> 2], r[e >> 2] = r[t + 16 >> 2], r[e + 4 >> 2] = n, d = t + 32 | 0
                      }(t), r[e >> 2] = 0, n = r[t + 4 >> 2], r[e + 4 >> 2] = r[t >> 2], r[e + 8 >> 2] = n, r[e + 12 >> 2] = r[t + 8 >> 2], d = t + 16 | 0
                  }

                  function G(e, t, n, o, a) {
                    e: {
                      if (n >>> 0 >= t >>> 0) {
                        if (a >>> 0 >= n >>> 0) break e;
                        E(n, a), u()
                      }
                      O(t, n),
                      u()
                    }
                    r[e + 4 >> 2] = n - t,
                    r[e >> 2] = t + o
                  }

                  function q(e, t, n) {
                    var o;
                    d = o = d - 32 | 0, oe(o + 16 | 0, t, n, n), Q(o + 8 | 0, o + 16 | 0), t = r[o + 12 >> 2], r[e >> 2] = r[o + 8 >> 2], r[e + 4 >> 2] = t, d = o + 32 | 0
                  }

                  function H(e, t, n) {
                    var r = 0;
                    if (n)
                      for (r = e; o[0 | r] = a[0 | t], r = r + 1 | 0, t = t + 1 | 0, n = n + -1 | 0;);
                    return e
                  }

                  function Q(e, t) {
                    var n, o;
                    d = n = d - 16 | 0, (0 | (o = r[t + 8 >> 2])) != r[t + 4 >> 2] && function (e, t) {
                        var n = 0;
                        e: {
                          t: {
                            n: {
                              if ((n = r[e + 4 >> 2]) >>> 0 >= t >>> 0) {
                                if (t) {
                                  if ((0 | t) == (0 | n)) break e;
                                  if (n = re(r[e >> 2], n, 1, t)) break n;
                                  fe(t, 1), u()
                                }
                                te(e), r[e >> 2] = 1, t = 0;
                                break t
                              }
                              B(1048636),
                              u()
                            }
                            r[e >> 2] = n
                          }
                          r[e + 4 >> 2] = t
                        }
                      }(t, o),
                      function (e, t, n) {
                        var o;
                        d = o = d - 16 | 0, r[o + 12 >> 2] = n, r[o + 8 >> 2] = t, r[e >> 2] = r[o + 8 >> 2], r[e + 4 >> 2] = r[o + 12 >> 2], d = o + 16 | 0
                      }(n + 8 | 0, r[t >> 2], r[t + 4 >> 2]), t = r[n + 12 >> 2], r[e >> 2] = r[n + 8 >> 2], r[e + 4 >> 2] = t, d = n + 16 | 0
                  }

                  function Y(e, t, n, o) {
                    var a;
                    d = a = d - 16 | 0, G(a + 8 | 0, 0, o, t, n), t = r[a + 12 >> 2], r[e >> 2] = r[a + 8 >> 2], r[e + 4 >> 2] = t, d = a + 16 | 0
                  }

                  function J(e, t, n) {
                    var o;
                    return t |= 0, n |= 0, P(e = r[(e |= 0) >> 2], n), o = r[e + 8 >> 2], r[e + 8 >> 2] = o + n, H(r[e >> 2] + o | 0, t, n), 0
                  }

                  function z(e, t) {
                    if (t)
                      for (; o[0 | e] = 0, e = e + 1 | 0, t = t + -1 | 0;);
                  }

                  function K(e, t, n) {
                    var o;
                    d = o = d - 16 | 0, r[o + 12 >> 2] = t, r[o + 8 >> 2] = e, A(o + 8 | 0, 1049204, 0, n), u()
                  }

                  function X(e, t, n, o) {
                    o >>> 0 >= t >>> 0 ? H(n, e, t) : (K(1049416, 40, 1049400), u())
                  }

                  function ee(e, t, n, o, a) {
                    r[e + 12 >> 2] = a, r[e + 8 >> 2] = o, r[e + 4 >> 2] = n, r[e >> 2] = t
                  }

                  function te(e) {
                    r[e + 4 >> 2] && y(r[e >> 2])
                  }

                  function ne(e) {
                    r[4 + (e |= 0) >> 2] = 0, r[e + 8 >> 2] = 0, r[e >> 2] = 4, r[(e = e + 12 | 0) >> 2] = 0, r[e + 4 >> 2] = 0
                  }

                  function oe(e, t, n, o) {
                    r[e + 8 >> 2] = n, r[e + 4 >> 2] = o, r[e >> 2] = t
                  }

                  function re(e, t, n, o) {
                    return function (e, t, n, o) {
                      e: {
                        if (8 < n >>> 0) {
                          if (n = 8 < n >>> 0 ? _(n, o) : f(o)) break e;
                          return 0
                        }
                        return function (e, t) {
                          var n = 0,
                            o = 0,
                            a = 0,
                            i = 0,
                            s = 0,
                            c = 0,
                            l = 0,
                            u = 0,
                            d = 0,
                            p = 0;
                          t: if (!(t >>> 0 > 4294901708)) {
                            n = t >>> 0 < 11 ? 16 : t + 11 & -8, o = -8 & (c = r[(s = e + -4 | 0) >> 2]);
                            n: {
                              o: {
                                r: {
                                  a: {
                                    i: {
                                      s: {
                                        if (3 & c) {
                                          if (i = o + (l = e + -8 | 0) | 0, o >>> 0 >= n >>> 0) break s;
                                          if ((0 | i) == r[262874]) break i;
                                          if ((0 | i) == r[262873]) break a;
                                          if (2 & (c = r[i + 4 >> 2])) break n;
                                          if ((o = o + (u = -8 & c) | 0) >>> 0 >= n >>> 0) break r;
                                          break n
                                        }
                                        if (n >>> 0 < 256 | o >>> 0 < (4 | n) >>> 0 | o - n >>> 0 >= 131073) break n;
                                        break o
                                      }
                                      if ((t = o - n | 0) >>> 0 < 16) break o;r[s >> 2] = n | 1 & c | 2,
                                      r[4 + (a = n + l | 0) >> 2] = 3 | t,
                                      r[i + 4 >> 2] = 1 | r[i + 4 >> 2],
                                      b(a, t);
                                      break o
                                    }
                                    if ((o = o + r[262872] | 0) >>> 0 <= n >>> 0) break n;r[s >> 2] = n | 1 & c | 2,
                                    a = o - n | 0,
                                    r[4 + (t = n + l | 0) >> 2] = 1 | a,
                                    r[262872] = a,
                                    r[262874] = t;
                                    break o
                                  }
                                  if ((o = o + r[262871] | 0) >>> 0 < n >>> 0) break n;
                                  (t = o - n | 0) >>> 0 <= 15 ? (r[s >> 2] = o | 1 & c | 2, r[4 + (t = o + l | 0) >> 2] = 1 | r[t + 4 >> 2], t = 0) : (r[s >> 2] = n | 1 & c | 2, r[4 + (a = n + l | 0) >> 2] = 1 | t, r[(n = o + l | 0) >> 2] = t, r[n + 4 >> 2] = -2 & r[n + 4 >> 2]),
                                  r[262873] = a,
                                  r[262871] = t;
                                  break o
                                }
                                t = o - n | 0,
                                u >>> 0 >= 256 ? S(i) : (0 | (a = r[i + 12 >> 2])) == (0 | (i = r[i + 8 >> 2])) ? (d = 1051084, p = r[262771] & Se(-2, c >>> 3), r[d >> 2] = p) : (r[i + 12 >> 2] = a, r[a + 8 >> 2] = i),
                                t >>> 0 >= 16 ? (r[s >> 2] = n | 1 & r[s >> 2] | 2, r[4 + (a = n + l | 0) >> 2] = 3 | t, r[4 + (n = o + l | 0) >> 2] = 1 | r[n + 4 >> 2], b(a, t)) : (r[s >> 2] = o | 1 & r[s >> 2] | 2, r[4 + (t = o + l | 0) >> 2] = 1 | r[t + 4 >> 2])
                              }
                              a = e;
                              break t
                            }
                            if (n = f(t)) return t = H(n, e, (a = (-8 & (a = r[s >> 2])) - (3 & a ? 4 : 8) | 0) >>> 0 > t >>> 0 ? t : a), y(e), t
                          }
                          return a
                        }(e, o)
                      }
                      return t = H(n, e, t >>> 0 > o >>> 0 ? o : t),
                      y(e),
                      t
                    }(e, t, n, o)
                  }

                  function ae(e, t) {
                    r[e + 4 >> 2] = r[t + 8 >> 2], r[e >> 2] = r[t >> 2]
                  }

                  function ie(e) {
                    return e || (B(1049972), u()), e
                  }

                  function se(e, t, n) {
                    ! function (e, t, n) {
                      var o, a;
                      d = o = d - 16 | 0, de(e, n = n - t | 0), a = r[e + 8 >> 2], r[e + 8 >> 2] = n + a, ae(o + 8 | 0, e),
                        function (e, t, n, o) {
                          var a;
                          if (d = a = d - 112 | 0, r[a + 24 >> 2] = t, r[a + 28 >> 2] = o, (0 | t) == (0 | o)) return H(e, n, t), void(d = a + 112 | 0);
                          r[a + 80 >> 2] = a + 24, r[a + 84 >> 2] = a + 28, r[a + 104 >> 2] = 4, r[a + 108 >> 2] = 0, r[a + 92 >> 2] = 1, r[a + 96 >> 2] = 0, r[a + 88 >> 2] = 1048948, le(a + 16 | 0, a + 80 | 0, 1), e = r[a + 20 >> 2], t = r[a + 16 >> 2], le(a + 8 | 0, a + 84 | 0, 1), r[a + 76 >> 2] = 2, r[a + 52 >> 2] = 3, r[a + 56 >> 2] = t, r[a + 60 >> 2] = e, r[a + 36 >> 2] = 3, r[a + 40 >> 2] = 0, r[a + 32 >> 2] = 1048872, e = r[a + 12 >> 2], r[a + 64 >> 2] = r[a + 8 >> 2], r[a + 68 >> 2] = e, r[a + 72 >> 2] = a + 88, r[a + 48 >> 2] = a + 56, Z(a + 32 | 0, 1048956), u()
                        }(r[o + 8 >> 2] + a | 0, r[o + 12 >> 2] - a | 0, t, n), d = o + 16 | 0
                    }(e, t, t + n | 0)
                  }

                  function ce(e, t) {
                    return 8 < t >>> 0 ? _(t, e) : f(e)
                  }

                  function le(e, t, n) {
                    r[e + 4 >> 2] = n, r[e >> 2] = t
                  }

                  function ue(e, t, n) {
                    k(r[r[e >> 2] >> 2], t, n)
                  }

                  function de(e, t) {
                    ! function (e, t, n) {
                      var o;
                      d = o = d - 16 | 0,
                        function (e, t, n, o) {
                          var a, i = 0;
                          d = a = d - 48 | 0, r[t + 4 >> 2] - n >>> 0 >= o >>> 0 || (function (e, t, n, o) {
                            var a, i;
                            d = a = d - 16 | 0, i = e, (o = n + o | 0) >>> 0 < n >>> 0 ? (le(a + 8 | 0, o, 0), n = r[a + 8 >> 2], r[e + 8 >> 2] = r[a + 12 >> 2], t = 1) : (n = (t = r[t + 4 >> 2] << 1) >>> 0 > o >>> 0 ? t : o, t = 0), r[i >> 2] = t, r[e + 4 >> 2] = n, d = a + 16 | 0
                          }(a + 32 | 0, t, n, o), i = 1, n = r[a + 36 >> 2], 1 != r[a + 32 >> 2] ? (0 | n) <= -1 ? (le(a + 8 | 0, a, 0), t = r[a + 12 >> 2], r[e + 4 >> 2] = r[a + 8 >> 2], r[e + 8 >> 2] = t) : (o = a + 16 | 0, i = r[t + 4 >> 2], r[o >> 2] = i, r[o + 4 >> 2] = 0 != (0 | i), (o = (o = r[a + 20 >> 2]) ? re(r[t >> 2], r[a + 16 >> 2], o, n) : ce(n, 1)) || (fe(n, 1), u()), r[t + 4 >> 2] = n, r[t >> 2] = o, i = 0) : (le(a, n, r[a + 40 >> 2]), t = r[a + 4 >> 2], r[e + 4 >> 2] = r[a >> 2], r[e + 8 >> 2] = t)), r[e >> 2] = i, d = a + 48 | 0
                        }(o, e, t, n);
                      e: {
                        if (1 == r[o >> 2]) {
                          if (!r[o + 8 >> 2]) break e;
                          B(1048700), u()
                        }
                        return void(d = o + 16 | 0)
                      }
                      ge(), u()
                    }(e, r[e + 8 >> 2], t)
                  }

                  function pe(e, t) {
                    return t |= 0, 0 | function (e, t) {
                      var n, r = 0,
                        i = 0,
                        s = 0,
                        l = 0,
                        u = 0,
                        f = 0,
                        h = 0,
                        g = 0,
                        y = 0;
                      if (d = n = d - 48 | 0, i = 39, e >>> 0 < 1e4) r = e;
                      else
                        for (; r = we(e, l), y = s = p, h = (u = (n + 9 | 0) + i | 0) - 4 | 0, s = e - _e(r, s) | 0, f = a[0 | (f = 1050746 + ((g = ((65535 & s) >>> 0) / 100 | 0) << 1) | 0)] | a[f + 1 | 0] << 8, o[0 | h] = f, o[h + 1 | 0] = f >>> 8, u = u + -2 | 0, s = 1050746 + ((s - c(g, 100) & 65535) << 1) | 0, s = a[0 | s] | a[s + 1 | 0] << 8, o[0 | u] = s, o[u + 1 | 0] = s >>> 8, i = i + -4 | 0, s = !l & e >>> 0 > 99999999 | l >>> 0 > 0, e = r, l = y, s;);
                      return (0 | r) > 99 && (l = (i = i + -2 | 0) + (n + 9 | 0) | 0, e = 1050746 + (((e = r) - c(r = ((65535 & e) >>> 0) / 100 | 0, 100) & 65535) << 1) | 0, e = a[0 | e] | a[e + 1 | 0] << 8, o[0 | l] = e, o[l + 1 | 0] = e >>> 8), (0 | r) >= 10 ? (e = (i = i + -2 | 0) + (n + 9 | 0) | 0, r = a[0 | (r = 1050746 + (r << 1) | 0)] | a[r + 1 | 0] << 8, o[0 | e] = r, o[e + 1 | 0] = r >>> 8) : o[(i = i + -1 | 0) + (n + 9 | 0) | 0] = r + 48, e = v(t, 1050299, 0, (n + 9 | 0) + i | 0, 39 - i | 0), d = n + 48 | 0, e
                    }(r[(e |= 0) >> 2], t)
                  }

                  function fe(e, t) {
                    var n;
                    n = e, e = r[262767], Ae[e || 22](n, t), u()
                  }

                  function he(e, t, n) {
                    return g(n, e, t)
                  }

                  function ge() {
                    B(1050224), u()
                  }

                  function ye(e) {
                    return p = 1468863706, -1546811115
                  }

                  function ve(e) {}

                  function me() {}

                  function be(e, t) {
                    var n, o;
                    n = 0 | e, o = 0 | t, s[0] = n, s[1] = o
                  }

                  function _e(e, t) {
                    var n, o = 0,
                      r = 0;
                    return n = c(o = e >>> 16, 0), e = 65535 & (r = (r = c(o, 1e4)) + ((o = c(65535 & e, 1e4)) >>> 16) | 0), p = ((n + c(t, 1e4) | 0) + (r >>> 16) | 0) + (e >>> 16) | 0, 65535 & o | e << 16
                  }

                  function we(e, t) {
                    var n = 0,
                      o = 0,
                      r = 0,
                      a = 0,
                      i = 0,
                      s = 0,
                      u = 0;
                    if (!t) return be((t = e) - c(e = (e >>> 0) / 1e4 | 0, 1e4) | 0, 0), p = 0, e;
                    if (r = 0 - (i = 51 - l(t) | 0) | 0, n = 31 & (o = 63 & i), 32 <= o >>> 0 ? (o = 0, a = t >>> n) : (o = t >>> n, a = ((1 << n) - 1 & t) << 32 - n | e >>> n), n = 31 & (r &= 63), 32 <= r >>> 0 ? (t = e << n, e = 0) : (t = (1 << n) - 1 & e >>> 32 - n | t << n, e <<= n), i)
                      for (; r = o << 1 | a >>> 31, a = (o = a << 1 | t >>> 31) - (n = 1e4 & (s = (a = 0 - (r + (9999 < o >>> 0) | 0) | 0) >> 31)) | 0, o = r - (o >>> 0 < n >>> 0) | 0, t = t << 1 | e >>> 31, e = u | e << 1, u = s &= 1, i = i + -1 | 0;);
                    return be(a, o), p = t << 1 | e >>> 31, s | e << 1
                  }

                  function Ie(e) {
                    return e ? 31 - l(e + -1 ^ e) | 0 : 32
                  }

                  function Se(e, t) {
                    var n = 0;
                    return (-1 >>> (n = 31 & t) & e) << n | ((n = e) & -1 << (e = 0 - t & 31)) >>> e
                  }
                  var Ae = [null, function (e, t) {
                    return t |= 0, e = r[(e |= 0) >> 2], (16 & a[0 | t]) >>> 4 ? 0 | function (e, t) {
                      var n, a = 0,
                        i = 0;
                      for (d = n = d - 128 | 0, a = r[e >> 2], e = 0; i = 15 & a, o[127 + (e + n | 0) | 0] = i >>> 0 < 10 ? 48 | i : i + 87 | 0, e = e + -1 | 0, a >>>= 4;);
                      return (a = e + 128 | 0) >>> 0 >= 129 && (O(a, 128), u()), e = v(t, 1050744, 2, 128 + (e + n | 0) | 0, 0 - e | 0), d = n + 128 | 0, e
                    }(e, t) : (32 & a[0 | t]) >>> 5 ? 0 | function (e, t) {
                      var n, a = 0,
                        i = 0;
                      for (d = n = d - 128 | 0, a = r[e >> 2], e = 0; i = 15 & a, o[127 + (e + n | 0) | 0] = i >>> 0 < 10 ? 48 | i : i + 55 | 0, e = e + -1 | 0, a >>>= 4;);
                      return (a = e + 128 | 0) >>> 0 >= 129 && (O(a, 128), u()), e = v(t, 1050744, 2, 128 + (e + n | 0) | 0, 0 - e | 0), d = n + 128 | 0, e
                    }(e, t) : 0 | pe(e, t)
                  }, function (e, t) {
                    e |= 0;
                    var n, o, a = 0,
                      i = 0,
                      s = 0;
                    return d = n = d - 32 | 0, o = r[28 + (t |= 0) >> 2], t = r[t + 24 >> 2], s = r[4 + (i = e + 16 | 0) >> 2], r[(a = n + 24 | 0) >> 2] = r[i >> 2], r[a + 4 >> 2] = s, s = r[4 + (i = e + 8 | 0) >> 2], r[(a = n + 16 | 0) >> 2] = r[i >> 2], r[a + 4 >> 2] = s, a = r[e + 4 >> 2], r[n + 8 >> 2] = r[e >> 2], r[n + 12 >> 2] = a, e = h(t, o, n + 8 | 0), d = n + 32 | 0, 0 | e
                  }, function (e, t) {
                    return t |= 0, 0 | he(r[(e |= 0) >> 2], r[e + 4 >> 2], t)
                  }, function (e, t) {
                    var n;
                    return t |= 0, d = n = d - 16 | 0, ae(n + 8 | 0, r[(e |= 0) >> 2]), e = he(r[n + 8 >> 2], r[n + 12 >> 2], t), d = n + 16 | 0, 0 | e
                  }, ve, function (e, t) {
                    return e |= 0, d = e = d - 16 | 0,
                      function (e, t) {
                        var n;
                        n = 0 | Ae[r[r[t + 28 >> 2] + 12 >> 2]](r[t + 24 >> 2], 1049996, 11), o[e + 5 | 0] = 0, o[e + 4 | 0] = n, r[e >> 2] = t
                      }(e + 8 | 0, t |= 0), t = function (e) {
                        var t = 0,
                          n = 0,
                          i = 0;
                        return t = a[e + 4 | 0], a[e + 5 | 0] && (n = 255 & t, i = e, t = 1, n || (t = r[e >> 2], n = r[r[t + 28 >> 2] + 12 >> 2], e = r[t + 24 >> 2], t = 4 & a[0 | t] ? 0 | Ae[n](e, 1050946, 1) : 0 | Ae[n](e, 1050947, 2)), o[i + 4 | 0] = t), 0 != (255 & t)
                      }(e + 8 | 0), d = e + 16 | 0, 0 | t
                  }, ve, function (e, t) {
                    return 0 | Ae[r[r[28 + (t |= 0) >> 2] + 12 >> 2]](r[t + 24 >> 2], 1050299, 11)
                  }, ve, function (e, t) {
                    return 0 | Ae[r[r[28 + (t |= 0) >> 2] + 12 >> 2]](r[t + 24 >> 2], 1050310, 14)
                  }, U, function () {
                    return 0 | (r[262757] ? 1051024 : function () {
                      var e, t, n = 0,
                        o = 0,
                        a = 0;
                      return d = e = d - 32 | 0, U(e), a = r[262759], r[(n = e + 24 | 0) >> 2] = r[262758], r[n + 4 >> 2] = a, a = r[262756], n = r[262757], o = r[e + 4 >> 2], r[262756] = r[e >> 2], r[262757] = o, t = r[4 + (o = e + 8 | 0) >> 2], r[262758] = r[o >> 2], r[262759] = t, r[e + 16 >> 2] = a, r[e + 20 >> 2] = n, r[e + 20 >> 2] && te(e + 16 | 4), d = e + 32 | 0, 1051024
                    }())
                  }, ve, function (e, t) {
                    e |= 0;
                    var n = 0,
                      o = 0,
                      a = 0;
                    n = r[(t |= 0) >> 2], r[t >> 2] = 0;
                    e: {
                      if (o = e, n) {
                        if (a = r[t + 4 >> 2], !(t = ce(8, 4))) break e;
                        r[t + 4 >> 2] = a, r[t >> 2] = n, n = 1049224
                      } else t = 1,
                      n = 1049240;
                      return r[o + 4 >> 2] = n,
                      void(r[e >> 2] = t)
                    }
                    fe(8, 4), u()
                  }, function (e, t) {
                    var n;
                    e |= 0, n = r[(t |= 0) >> 2], r[e + 4 >> 2] = n ? 1049224 : 1049240, r[e >> 2] = n ? t : 1
                  }, ve, function (e) {
                    return p = 286299353, 1890621284
                  }, ve, function (e) {
                    return p = 1757840133, -801715452
                  }, ne, function () {
                    return 0 | (r[262762] ? 1051048 : function () {
                      var e, t, n = 0,
                        o = 0,
                        a = 0;
                      return d = e = d - 48 | 0, ne(e), r[e + 40 >> 2] = r[262766], n = r[262765], r[(o = e + 32 | 0) >> 2] = r[262764], r[o + 4 >> 2] = n, n = r[262762], o = r[262763], a = r[e + 4 >> 2], r[262762] = r[e >> 2], r[262763] = a, t = r[4 + (a = e + 8 | 0) >> 2], r[262764] = r[a >> 2], r[262765] = t, r[262766] = r[e + 16 >> 2], r[e + 24 >> 2] = n, r[e + 28 >> 2] = o, n && r[4 + (n = e + 24 | 0) >> 2] && y(r[n >> 2]), d = e + 48 | 0, 1051048
                    }())
                  }, function (e, t) {}, ve, J, function (e, t) {
                    t |= 0;
                    var n, a = 0;
                    d = n = d - 16 | 0, a = e = r[(e |= 0) >> 2];
                    e: {
                      t: {
                        n: {
                          if (t >>> 0 >= 128) {
                            if (r[n + 12 >> 2] = 0, t >>> 0 < 2048) break n;
                            if (t >>> 0 < 65536) {
                              o[n + 14 | 0] = 63 & t | 128, o[n + 13 | 0] = t >>> 6 & 63 | 128, o[n + 12 | 0] = t >>> 12 & 15 | 224, t = 3;
                              break t
                            }
                            o[n + 15 | 0] = 63 & t | 128, o[n + 12 | 0] = t >>> 18 | 240, o[n + 14 | 0] = t >>> 6 & 63 | 128, o[n + 13 | 0] = t >>> 12 & 63 | 128, t = 4;
                            break t
                          }(0 | (a = r[e + 8 >> 2])) == r[e + 4 >> 2] && (P(e, 1), a = r[e + 8 >> 2]),
                          o[a + r[e >> 2] | 0] = t,
                          r[e + 8 >> 2] = r[e + 8 >> 2] + 1;
                          break e
                        }
                        o[n + 13 | 0] = 63 & t | 128,
                        o[n + 12 | 0] = t >>> 6 & 31 | 192,
                        t = 2
                      }
                      P(a, t),
                      a = r[e + 8 >> 2],
                      r[e + 8 >> 2] = a + t,
                      H(a + r[e >> 2] | 0, n + 12 | 0, t)
                    }
                    return d = n + 16 | 0, 0
                  }, function (e, t) {
                    e |= 0, t |= 0;
                    var n, o = 0,
                      a = 0;
                    return d = n = d - 32 | 0, r[n + 4 >> 2] = r[e >> 2], a = r[4 + (o = t + 16 | 0) >> 2], r[(e = n + 24 | 0) >> 2] = r[o >> 2], r[e + 4 >> 2] = a, a = r[4 + (o = t + 8 | 0) >> 2], r[(e = n + 16 | 0) >> 2] = r[o >> 2], r[e + 4 >> 2] = a, e = r[t + 4 >> 2], r[n + 8 >> 2] = r[t >> 2], r[n + 12 >> 2] = e, e = h(n + 4 | 0, 1049868, n + 8 | 0), d = n + 32 | 0, 0 | e
                  }, ve, ye, function (e) {
                    var t;
                    !(t = r[4 + (e |= 0) >> 2]) | !r[e + 8 >> 2] || y(t)
                  }, function (e, t) {
                    e |= 0;
                    var n, o = 0,
                      a = 0,
                      i = 0,
                      s = 0;
                    d = n = d + -64 | 0, (o = r[4 + (t |= 0) >> 2]) || (o = r[t >> 2], r[n + 32 >> 2] = 0, r[n + 24 >> 2] = 1, r[n + 28 >> 2] = 0, r[n + 36 >> 2] = n + 24, i = r[4 + (a = o + 16 | 0) >> 2], r[(s = n + 56 | 0) >> 2] = r[a >> 2], r[s + 4 >> 2] = i, i = r[4 + (a = o + 8 | 0) >> 2], r[(s = n + 48 | 0) >> 2] = r[a >> 2], r[s + 4 >> 2] = i, a = r[o + 4 >> 2], r[n + 40 >> 2] = r[o >> 2], r[n + 44 >> 2] = a, h(n + 36 | 0, 1049868, n + 40 | 0), r[(a = n + 16 | 0) >> 2] = r[n + 32 >> 2], o = r[n + 28 >> 2], r[n + 8 >> 2] = r[n + 24 >> 2], r[n + 12 >> 2] = o, !(o = r[t + 4 >> 2]) | !r[t + 8 >> 2] || y(o), i = r[n + 12 >> 2], r[(o = t + 4 | 0) >> 2] = r[n + 8 >> 2], r[o + 4 >> 2] = i, r[o + 8 >> 2] = r[a >> 2], o = r[o >> 2]), r[t + 4 >> 2] = 1, a = r[t + 12 >> 2], i = r[(t = t + 8 | 0) >> 2], r[t >> 2] = 0, r[t + 4 >> 2] = 0, (t = ce(12, 4)) || (fe(12, 4), u()), r[t + 8 >> 2] = a, r[t + 4 >> 2] = i, r[t >> 2] = o, r[e + 4 >> 2] = 1050028, r[e >> 2] = t, d = n - -64 | 0
                  }, function (e, t) {
                    e |= 0;
                    var n, o, a = 0,
                      i = 0,
                      s = 0,
                      c = 0;
                    d = n = d + -64 | 0, o = 4 + (t |= 0) | 0, r[t + 4 >> 2] || (i = r[t >> 2], r[n + 32 >> 2] = 0, r[n + 24 >> 2] = 1, r[n + 28 >> 2] = 0, r[n + 36 >> 2] = n + 24, c = r[4 + (a = i + 16 | 0) >> 2], r[(s = n + 56 | 0) >> 2] = r[a >> 2], r[s + 4 >> 2] = c, c = r[4 + (a = i + 8 | 0) >> 2], r[(s = n + 48 | 0) >> 2] = r[a >> 2], r[s + 4 >> 2] = c, a = r[i + 4 >> 2], r[n + 40 >> 2] = r[i >> 2], r[n + 44 >> 2] = a, h(n + 36 | 0, 1049868, n + 40 | 0), r[(i = n + 16 | 0) >> 2] = r[n + 32 >> 2], a = r[n + 28 >> 2], r[n + 8 >> 2] = r[n + 24 >> 2], r[n + 12 >> 2] = a, !(a = r[t + 4 >> 2]) | !r[t + 8 >> 2] || y(a), t = r[n + 12 >> 2], r[o >> 2] = r[n + 8 >> 2], r[o + 4 >> 2] = t, r[o + 8 >> 2] = r[i >> 2]), r[e + 4 >> 2] = 1050028, r[e >> 2] = o, d = n - -64 | 0
                  }, te, function (e) {
                    return p = -679582923, 428379921
                  }, ve, J, function (e, t) {
                    return t |= 0,
                      function (e, t) {
                        var n, a = 0;
                        d = n = d - 16 | 0, a = e;
                        e: {
                          t: {
                            n: {
                              if (t >>> 0 >= 128) {
                                if (r[n + 12 >> 2] = 0, t >>> 0 < 2048) break n;
                                if (t >>> 0 < 65536) {
                                  o[n + 14 | 0] = 63 & t | 128, o[n + 13 | 0] = t >>> 6 & 63 | 128, o[n + 12 | 0] = t >>> 12 & 15 | 224, t = 3;
                                  break t
                                }
                                o[n + 15 | 0] = 63 & t | 128, o[n + 12 | 0] = t >>> 18 | 240, o[n + 14 | 0] = t >>> 6 & 63 | 128, o[n + 13 | 0] = t >>> 12 & 63 | 128, t = 4;
                                break t
                              }(0 | (a = r[e + 8 >> 2])) == r[e + 4 >> 2] && (P(e, 1), a = r[e + 8 >> 2]),
                              o[a + r[e >> 2] | 0] = t,
                              r[e + 8 >> 2] = r[e + 8 >> 2] + 1;
                              break e
                            }
                            o[n + 13 | 0] = 63 & t | 128,
                            o[n + 12 | 0] = t >>> 6 & 31 | 192,
                            t = 2
                          }
                          P(a, t),
                          a = r[e + 8 >> 2],
                          r[e + 8 >> 2] = a + t,
                          H(a + r[e >> 2] | 0, n + 12 | 0, t)
                        }
                        d = n + 16 | 0
                      }(r[(e |= 0) >> 2], t), 0
                  }, function (e, t) {
                    e |= 0, t |= 0;
                    var n, o = 0,
                      a = 0;
                    return d = n = d - 32 | 0, r[n + 4 >> 2] = r[e >> 2], a = r[4 + (o = t + 16 | 0) >> 2], r[(e = n + 24 | 0) >> 2] = r[o >> 2], r[e + 4 >> 2] = a, a = r[4 + (o = t + 8 | 0) >> 2], r[(e = n + 16 | 0) >> 2] = r[o >> 2], r[e + 4 >> 2] = a, e = r[t + 4 >> 2], r[n + 8 >> 2] = r[t >> 2], r[n + 12 >> 2] = e, e = h(n + 4 | 0, 1050044, n + 8 | 0), d = n + 32 | 0, 0 | e
                  }, ve, function (e, t) {
                    return 0 | Ae[r[r[28 + (t |= 0) >> 2] + 12 >> 2]](r[t + 24 >> 2], 1051016, 5)
                  }, pe, pe, function (e, t) {
                    return 0 | g(t |= 0, r[(e |= 0) >> 2], r[e + 4 >> 2])
                  }, function (e, t) {
                    return t |= 0, 0 | Ae[r[r[4 + (e |= 0) >> 2] + 12 >> 2]](r[e >> 2], t)
                  }, ve, ye];

                  function ke(t) {
                    t |= 0;
                    var s = 0 | n.byteLength / 65536,
                      l = s + t | 0;
                    if (s < l && l < 65536) {
                      var u = new ArrayBuffer(c(l, 65536)),
                        d = new e.Int8Array(u);
                      d.set(o), o = d, o = new e.Int8Array(u), new e.Int16Array(u), r = new e.Int32Array(u), a = new e.Uint8Array(u), new e.Uint16Array(u), i = new e.Uint32Array(u), new e.Float32Array(u), new e.Float64Array(u), n = u
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
                          return n
                        }
                      }
                    }),
                    sha1: function (e, t, n) {
                      var o;
                      e |= 0, d = o = d - 80 | 0, q(o + 24 | 0, t |= 0, n |= 0),
                        function (e, t, n) {
                          var o;
                          d = o = d - 16 | 0, r[o + 12 >> 2] = n, r[o + 8 >> 2] = t,
                            function (e, t) {
                              var n;
                              d = n = d - 32 | 0,
                                function (e, t) {
                                  var n, o, i = 0;
                                  d = n = d - 176 | 0, (o = 0 | Ae[r[262284]]()) ? (function (e) {
                                    var t;
                                    r[e + 8 >> 2] = 1732584193, r[e + 12 >> 2] = -271733879, r[e >> 2] = 0, r[e + 4 >> 2] = 0, r[e + 24 >> 2] = -1009589776, r[(t = e + 16 | 0) >> 2] = -1732584194, r[t + 4 >> 2] = 271733878, z(e + 28 | 0, 69)
                                  }(n + 8 | 0), (0 | (i = r[o >> 2] + 1 | 0)) <= 0 && (T(1049045, 24, n + 128 | 0, 1049088), u()), r[o >> 2] = i, r[n + 164 >> 2] = 3, r[n + 148 >> 2] = 2, r[n + 132 >> 2] = 2, r[n + 136 >> 2] = 0, r[n + 128 >> 2] = 1049120, r[n + 172 >> 2] = o, r[n + 168 >> 2] = o + 4, r[n + 160 >> 2] = t, r[n + 156 >> 2] = 4, r[n + 144 >> 2] = n + 152, r[n + 152 >> 2] = n + 168, function (e, t) {
                                    var n, o, a = 0,
                                      i = 0,
                                      s = 0,
                                      c = 0;
                                    if (d = n = d - 48 | 0, c = r[t >> 2], i = (o = r[t + 4 >> 2]) << 3)
                                      for (a = c + 4 | 0; s = r[a >> 2] + s | 0, a = a + 8 | 0, i = i + -8 | 0;);
                                    e: {
                                      t: {
                                        n: {
                                          o: {
                                            if (r[t + 20 >> 2]) {
                                              if (o || (M(1050152, 0, 0), u()), !r[c + 4 >> 2] && s >>> 0 <= 15 || !((a = s + s | 0) >>> 0 >= s >>> 0)) {
                                                i = 1, a = 0, s = n + 8 | 0;
                                                break o
                                              }
                                            } else a = s;
                                            if ((0 | a) <= -1) break n;
                                            if (s = n + 8 | 0, a) {
                                              if (!(i = ce(a, 1))) break t
                                            } else i = 1,
                                            a = 0
                                          }
                                          if (r[n + 16 >> 2] = 0, r[n + 12 >> 2] = a, r[n + 8 >> 2] = i, r[n + 20 >> 2] = n + 8, i = r[4 + (a = t + 16 | 0) >> 2], r[(c = n + 40 | 0) >> 2] = r[a >> 2], r[c + 4 >> 2] = i, i = r[4 + (a = t + 8 | 0) >> 2], r[(c = n + 32 | 0) >> 2] = r[a >> 2], r[c + 4 >> 2] = i, a = r[t + 4 >> 2], r[n + 24 >> 2] = r[t >> 2], r[n + 28 >> 2] = a, h(n + 20 | 0, 1050044, n + 24 | 0)) break e;
                                          return t = r[s + 4 >> 2],
                                          r[e >> 2] = r[s >> 2],
                                          r[e + 4 >> 2] = t,
                                          r[e + 8 >> 2] = r[s + 8 >> 2],
                                          void(d = n + 48 | 0)
                                        }
                                        ge(),
                                        u()
                                      }
                                      fe(a, 1),
                                      u()
                                    }
                                    T(1050248, 51, n + 24 | 0, 1050168), u()
                                  }(n + 112 | 0, n + 128 | 0), ae(n, n + 112 | 0), function (e, t, n) {
                                    var o, i, s;
                                    d = o = d - 16 | 0, a[e + 96 | 0] && (K(1049832, 32, 1049816), u()), i = e, s = function (e, t, n) {
                                        var o, a, i = 0;
                                        if (o = 1 + (i = (n >>> 29) + t | 0) | 0, a = i, !((0 | (n = (i = (n <<= 3) + e | 0) >>> 0 < n >>> 0 ? o : a)) == (0 | t) & i >>> 0 < e >>> 0 | n >>> 0 < t >>> 0)) return p = n, i;
                                        (function () {
                                          var e;
                                          d = e = d - 48 | 0, r[e + 12 >> 2] = 25, r[e + 8 >> 2] = 1049472, r[e + 36 >> 2] = 1, r[e + 20 >> 2] = 1, r[e + 24 >> 2] = 0, r[e + 16 >> 2] = 1050496, r[e + 44 >> 2] = 42, r[e + 32 >> 2] = e + 40, r[e + 40 >> 2] = e + 8, Z(e + 16 | 0, 1050504), u()
                                        })(), u()
                                      }(r[e >> 2], r[e + 4 >> 2], n), r[i >> 2] = s, r[e + 4 >> 2] = p, r[o + 12 >> 2] = e + 8,
                                      function (e, t, n, o) {
                                        var a, i = 0,
                                          s = 0,
                                          c = 0;
                                        d = a = d + -64 | 0, r[a + 60 >> 2] = o;
                                        e: {
                                          if (o = r[e >> 2]) {
                                            if ((i = 64 - o | 0) >>> 0 > n >>> 0) {
                                              V(a + 32 | 0, e + 4 | 0, 64, o, n + o | 0), X(t, n, r[a + 32 >> 2], r[a + 36 >> 2]);
                                              break e
                                            }
                                            Y(a + 48 | 0, t, n, i), o = r[a + 52 >> 2], s = r[a + 48 >> 2], V(a + 40 | 0, c = e + 4 | 0, 64, r[e >> 2], 64), X(s, o, r[a + 40 >> 2], r[a + 44 >> 2]), r[e >> 2] = 0, ue(a + 60 | 0, c, 64)
                                          }
                                          for (o = n - i | 0; !(o >>> 0 <= 63);) G(a + 8 | 0, s = i, i = i - -64 | 0, t, n),
                                          ue(a + 60 | 0, r[a + 8 >> 2], r[a + 12 >> 2]),
                                          o = o + -64 | 0;G(a + 24 | 0, i, n, t, n),
                                          t = r[a + 28 >> 2],
                                          n = r[a + 24 >> 2],
                                          V(a + 16 | 0, e + 4 | 0, 64, 0, o),
                                          X(n, t, r[a + 16 >> 2], r[a + 20 >> 2]),
                                          n = o
                                        }
                                        r[e >> 2] = r[e >> 2] + n, d = a - -64 | 0
                                      }(e + 28 | 0, t, n, o + 12 | 0), d = o + 16 | 0
                                  }(n + 8 | 0, r[n >> 2], r[n + 4 >> 2]), te(n + 112 | 0), t = r[n + 172 >> 2], r[t >> 2] = r[t >> 2] + -1, function (e, t) {
                                    var n, o, i = 0;
                                    d = n = d - 48 | 0,
                                      function (e, t) {
                                        var n;
                                        d = n = d - 16 | 0, r[n + 8 >> 2] = 0, r[n >> 2] = 1, r[n + 4 >> 2] = 0,
                                          function (e, t) {
                                            var n, o = 0;
                                            de(e, t), n = r[e >> 2], t && (z(n + (o = r[e + 8 >> 2]) | 0, t), r[e + 8 >> 2] = t + o)
                                          }(n, t), r[e + 8 >> 2] = r[n + 8 >> 2], t = r[n + 4 >> 2], r[e >> 2] = r[n >> 2], r[e + 4 >> 2] = t, d = n + 16 | 0
                                      }(n + 16 | 0, 20), ae(n + 8 | 0, n + 16 | 0), I(t, r[n + 8 >> 2], r[n + 12 >> 2]), r[(t = n + 40 | 0) >> 2] = r[n + 24 >> 2], i = r[n + 20 >> 2], r[n + 32 >> 2] = r[n + 16 >> 2], r[n + 36 >> 2] = i, i = r[n + 36 >> 2], o = r[t >> 2], t = r[n + 32 >> 2], r[n + 44 >> 2] = o + t, r[n + 40 >> 2] = t, r[n + 36 >> 2] = i, r[n + 32 >> 2] = t,
                                      function (e, t) {
                                        var n, o = 0,
                                          i = 0,
                                          s = 0;
                                        d = n = d + -64 | 0, i = r[4 + (o = t + 8 | 0) >> 2], s = n + 8 | 0, o = r[o >> 2], r[s >> 2] = o, r[s + 4 >> 2] = i, i = r[t + 4 >> 2], r[n >> 2] = r[t >> 2], r[n + 4 >> 2] = i;
                                        e: {
                                          t: {
                                            if (r[n + 12 >> 2] != (0 | o)) {
                                              if (r[n + 8 >> 2] = o + 1, function (e, t) {
                                                  var n;
                                                  d = n = d - 16 | 0, r[n + 12 >> 2] = r[1048724 + ((15 & t) << 2) >> 2], r[n + 8 >> 2] = r[1048724 + ((240 & t) >>> 2) >> 2], $(e, n + 8 | 0, n + 16 | 0), d = n + 16 | 0
                                                }(n + 16 | 0, a[0 | o]), r[n + 16 >> 2]) break t
                                            } else r[n + 16 >> 2] = 0;
                                            if (r[e + 8 >> 2] = 0, r[e >> 2] = 1, r[e + 4 >> 2] = 0, D(n), !r[n + 16 >> 2]) break e;te(n + 16 | 0);
                                            break e
                                          }
                                          r[(t = n + 40 | 0) >> 2] = r[n + 24 >> 2],
                                          o = r[n + 20 >> 2],
                                          r[n + 32 >> 2] = r[n + 16 >> 2],
                                          r[n + 36 >> 2] = o,
                                          i = r[4 + (o = n + 8 | 0) >> 2],
                                          r[(s = n + 56 | 0) >> 2] = r[o >> 2],
                                          r[s + 4 >> 2] = i,
                                          o = r[n + 4 >> 2],
                                          r[n + 48 >> 2] = r[n >> 2],
                                          r[n + 52 >> 2] = o,
                                          function (e, t) {
                                            var n, o, i, s = 0;
                                            d = n = d - 16 | 0, i = r[4 + (o = t + 8 | 0) >> 2], r[(s = n + 8 | 0) >> 2] = r[o >> 2], r[s + 4 >> 2] = i, s = r[t + 4 >> 2], r[n >> 2] = r[t >> 2], r[n + 4 >> 2] = s,
                                              function (e, t) {
                                                var n, o, i, s = 0;
                                                for (d = n = d + -64 | 0, i = r[4 + (s = e + 8 | 0) >> 2], r[(o = n + 24 | 0) >> 2] = r[s >> 2], r[o + 4 >> 2] = i, s = r[e + 4 >> 2], r[n + 16 >> 2] = r[e >> 2], r[n + 20 >> 2] = s, e = n + 56 | 0;
                                                  (0 | (s = r[n + 24 >> 2])) != r[n + 28 >> 2];) r[n + 24 >> 2] = s + 1, s = a[0 | s], r[n + 52 >> 2] = r[1049140 + ((15 & s) << 2) >> 2], r[n + 48 >> 2] = r[1049140 + (s >>> 2 & 60) >> 2], $(n + 32 | 0, n + 48 | 0, e), r[e >> 2] = r[n + 40 >> 2], s = r[n + 36 >> 2], r[n + 48 >> 2] = r[n + 32 >> 2], r[n + 52 >> 2] = s, ae(n + 8 | 0, n + 48 | 0), se(t, r[n + 8 >> 2], r[n + 12 >> 2]), te(n + 48 | 0);
                                                D(n + 16 | 0), d = n - -64 | 0
                                              }(n, e), d = n + 16 | 0
                                          }(n + 32 | 0, n + 48 | 0),
                                          r[e + 8 >> 2] = r[t >> 2],
                                          t = r[n + 36 >> 2],
                                          r[e >> 2] = r[n + 32 >> 2],
                                          r[e + 4 >> 2] = t
                                        }
                                        d = n - -64 | 0
                                      }(e, n + 32 | 0), d = n + 48 | 0
                                  }(e, n + 8 | 0)) : r[e >> 2] = 0, d = n + 176 | 0
                                }(n + 8 | 0, t), r[n + 8 >> 2] || (T(1048972, 57, n + 24 | 0, 1049072), u()), t = r[n + 12 >> 2], r[e >> 2] = r[n + 8 >> 2], r[e + 4 >> 2] = t, r[e + 8 >> 2] = r[n + 16 >> 2], d = n + 32 | 0
                            }(e, o + 8 | 0), d = o + 16 | 0
                        }(o + 32 | 0, t = r[o + 24 >> 2], n = r[o + 28 >> 2]), n && y(t), r[(t = o + 56 | 0) >> 2] = r[o + 40 >> 2], n = r[o + 36 >> 2], r[o + 48 >> 2] = r[o + 32 >> 2], r[o + 52 >> 2] = n, ae(o + 16 | 0, o + 48 | 0), r[o + 72 >> 2] = r[t >> 2], t = r[o + 52 >> 2], r[o + 64 >> 2] = r[o + 48 >> 2], r[o + 68 >> 2] = t, Q(o + 8 | 0, o - -64 | 0), t = r[o + 12 >> 2], r[e >> 2] = r[o + 8 >> 2], r[e + 4 >> 2] = t, d = o + 80 | 0
                    },
                    setSalt: function (e, t) {
                      var n;
                      d = n = d - 48 | 0, q(n + 8 | 0, e |= 0, t |= 0), e = r[n + 12 >> 2], oe(n + 16 | 0, r[n + 8 >> 2], e, e), r[n + 40 >> 2] = r[n + 24 >> 2], e = r[n + 20 >> 2], r[n + 32 >> 2] = r[n + 16 >> 2], r[n + 36 >> 2] = e,
                        function (e) {
                          var t, n;
                          d = t = d - 16 | 0, r[t + 8 >> 2] = r[e + 8 >> 2], n = r[e + 4 >> 2], r[t >> 2] = r[e >> 2], r[t + 4 >> 2] = n,
                            function (e) {
                              var t, n;
                              d = t = d - 32 | 0, r[t + 16 >> 2] = r[e + 8 >> 2], n = r[e + 4 >> 2], r[t + 8 >> 2] = r[e >> 2], r[t + 12 >> 2] = n,
                                function (e) {
                                  var t, n, o = 0,
                                    a = 0;
                                  return d = n = d - 32 | 0, (t = 0 | Ae[r[262284]]()) ? (r[(o = n + 16 | 0) >> 2] = r[e + 8 >> 2], a = r[e + 4 >> 2], r[n + 8 >> 2] = r[e >> 2], r[n + 12 >> 2] = a, r[t >> 2] && (T(1049029, 16, n + 24 | 0, 1049104), u()), r[t >> 2] = -1, te(t + 4 | 0), r[t + 12 >> 2] = r[o >> 2], e = r[n + 12 >> 2], r[t + 4 >> 2] = r[n + 8 >> 2], r[t + 8 >> 2] = e, r[t >> 2] = r[t >> 2] + 1, e = 0) : (te(e), e = 1), d = n + 32 | 0, e
                                }(t + 8 | 0) && (T(1048972, 57, t + 24 | 0, 1049072), u()), d = t + 32 | 0
                            }(t), d = t + 16 | 0
                        }(n + 32 | 0), d = n + 48 | 0
                    },
                    main: me,
                    __wbindgen_malloc: function (e) {
                      if (!((e |= 0) >>> 0 > 4294967292)) {
                        if (!e) return 4;
                        if (e = ce(e, (e >>> 0 < 4294967293) << 2)) return 0 | e
                      }
                      u()
                    },
                    __wbindgen_realloc: function (e, t, n) {
                      if (e |= 0, !((t |= 0) >>> 0 > 4294967292) && (e = re(e, t, 4, n |= 0))) return 0 | e;
                      u()
                    },
                    __wbindgen_free: function (e, t) {
                      (t |= 0) && y(e |= 0)
                    },
                    __wbindgen_start: me
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
                }, l),
                p = d.memory,
                f = d.sha1,
                h = d.setSalt,
                g = d.main,
                y = d.__wbindgen_malloc,
                v = d.__wbindgen_realloc,
                m = d.__wbindgen_free,
                b = d.__wbindgen_start
            }, function (e, t, n) {
              function o() {}

              function r() {}
              n.r(t), o.prototype.encode = function (e) {
                for (var t = [], n = e.length, o = 0; o < n;) {
                  var r = e.codePointAt(o),
                    a = 0,
                    i = 0;
                  for (r <= 127 ? (a = 0, i = 0) : r <= 2047 ? (a = 6, i = 192) : r <= 65535 ? (a = 12, i = 224) : r <= 2097151 && (a = 18, i = 240), t.push(i | r >> a), a -= 6; a >= 0;) t.push(128 | r >> a & 63), a -= 6;
                  o += r >= 65536 ? 2 : 1
                }
                return t
              }, r.prototype.decode = function (e) {
                if (void 0 === e) return "";
                for (var t = "", n = 0; n < e.length;) {
                  var o = e[n],
                    r = 0,
                    a = 0;
                  if (o <= 127 ? (r = 0, a = 255 & o) : o <= 223 ? (r = 1, a = 31 & o) : o <= 239 ? (r = 2, a = 15 & o) : o <= 244 && (r = 3, a = 7 & o), e.length - n - r > 0)
                    for (var i = 0; i < r;) a = a << 6 | 63 & (o = e[n + i + 1]), i += 1;
                  else a = 65533, r = e.length - n;
                  t += String.fromCodePoint(a), n += r + 1
                }
                return t
              }, n.d(t, "sha1", (function () {
                return f
              })), n.d(t, "setSalt", (function () {
                return h
              })), n.d(t, "main", (function () {
                return g
              })), n.d(t, "memory", (function () {
                return v
              }));
              var a = 0,
                i = new o("utf-8"),
                s = "function" == typeof i.encodeInto ? function (e, t) {
                  return i.encodeInto(e, t)
                } : function (e, t) {
                  var n = i.encode(e);
                  return t.set(n), {
                    read: e.length,
                    written: n.length
                  }
                },
                c = null;

              function l() {
                return null !== c && c.buffer === y.memory.buffer || (c = new Uint8Array(y.memory.buffer)), c
              }

              function u(e) {
                for (var t = e.length, n = y.__wbindgen_malloc(t), o = l(), r = 0; r < t; r++) {
                  var i = e.charCodeAt(r);
                  if (i > 127) break;
                  o[n + r] = i
                }
                if (r !== t) {
                  0 !== r && (e = e.slice(r)), n = y.__wbindgen_realloc(n, t, t = r + 3 * e.length);
                  var c = l().subarray(n + r, n + t);
                  r += s(e, c).written
                }
                return a = r, n
              }
              var d = null,
                p = new r("utf-8", {
                  ignoreBOM: !0,
                  fatal: !0
                });

              function f(e) {
                y.sha1(8, u(e), a);
                var t, n, o = (null !== d && d.buffer === y.memory.buffer || (d = new Int32Array(y.memory.buffer)), d),
                  r = (t = o[2], n = o[3], p.decode(l().subarray(t, t + n))).slice();
                return y.__wbindgen_free(o[2], 1 * o[3]), r
              }

              function h(e) {
                y.setSalt(u(e), a)
              }

              function g() {
                y.main()
              }
              p.decode();
              var y = n(0),
                v = y.memory;
              y.__wbindgen_start()
            }])
          }();
        (() => {
          const e = (({
            bits: e,
            PRNG: t = k
          }) => {
            const n = A(e / 16);
            let o = "";
            for (let e = 0; e < n; ++e) o += "0123456789abcdef" [A(16 * t())];
            return o
          })({
            bits: 256
          });
          C.setSalt(e)
        })();
        const P = e => S.i[e];
        let T = 0;
        const x = (e, t) => {
            const n = p()({}, t);
            if (void 0 !== n.apiSignature) return n;
            if (void 0 === P(e)) return n;
            const o = I({
              apiName: e,
              args: n,
              argsList: S.i[e],
              seq: T
            });
            return n.apiSignature = C.sha1(o), n.apiSigningSeq = T, n.apiSignature, T += 1, n
          },
          M = 0,
          E = 1,
          O = 2,
          L = 3,
          D = {
            [E]: "sign error",
            [O]: "sign seq error",
            [L]: "sign missing"
          },
          B = new Set,
          R = Function.prototype.call,
          N = R.bind(Set.prototype.has),
          F = R.bind(Set.prototype.add);

        function W(e, t, n, o) {
          const r = `api sign failed: ${D[e]}; apiName: ${t}; args: ${JSON.stringify(n)}; signature: ${o}`;
          throw new Error(r)
        }
        const j = Object.create(null);

        function $() {
          return {
            invoke(e, t, n, o) {
              if (((e, t) => {
                  if (void 0 === P(e)) return M;
                  null !== t.apiSigningSeq && void 0 !== t.apiSigningSeq && null !== t.apiSignature && void 0 !== t.apiSignature || W(L, e, t, "not checked"), t.apiSigningSeq = parseInt(t.apiSigningSeq, 10), N(B, t.apiSigningSeq) && W(O, e, t, "not checked"), F(B, t.apiSigningSeq);
                  const n = I({
                      apiName: e,
                      args: t,
                      argsList: S.i[e],
                      seq: t.apiSigningSeq
                    }),
                    o = C.sha1(n);
                  o !== t.apiSignature && W(E, e, t, o)
                })(e, t), void 0 === t.pluginId) return WeixinJSBridge.invoke(e, t, n, o);
              if (r()) {
                const r = s(e, t);
                return WeixinJSBridge.invoke(e, r, n, o)
              }
              return function (e, t, n) {
                delete t.permissionBytes, void 0 === t.pluginId && n(t), u(t.pluginId, e, (e => {
                  t.permissionBytes = e, t.privateData = JSON.stringify({
                    pluginId: t.pluginId
                  }), n(t)
                }))
              }(t, (t => {
                WeixinJSBridge.invoke(e, t, n, o)
              }))
            },
            on: (e, t) => j[e] instanceof Array ? (j[e].push(t), null) : (j[e] = null, WeixinJSBridge.on(e, t)),
            publish: (e, t, n) => WeixinJSBridge.publish(e, t, n),
            subscribe: (e, t) => WeixinJSBridge.subscribe(e, t)
          }
        }
        let V = !1;
        const Z = [],
          U = function (e) {
            Z.push(e), V || (this.bridge.on("onSubPackageReady", (e => {
              Z.forEach((t => {
                "function" == typeof t && t(void 0, e)
              }))
            })), V = !0)
          };

        function G(e) {
          return Object.prototype.toString.call(e).split(" ")[1].split("]")[0]
        }
        const q = (e, {
          stringify: t = JSON.stringify,
          parse: n = JSON.parse,
          arrayBufferProto: o = ArrayBuffer.prototype
        } = {}) => {
          if (!e) return e;
          const r = typeof e;
          if ("function" === r) throw new Error("[Safeway] not allow to pass function.");
          if ("object" !== r) return e.valueOf();
          const a = Object.keys(e),
            i = {};
          for (let t = 0; t < a.length; t++) {
            const n = a[t],
              r = e[n];
            void 0 !== r && "ArrayBuffer" === G(r) && void 0 !== r.byteLength && (Object.setPrototypeOf(r, o), i[n] = r)
          }
          let s;
          try {
            s = n(t(e))
          } catch (e) {
            throw new Error(`[Safeway] data clone error ${e.toString()}`)
          }
          const c = Object.keys(i);
          for (let e = 0; e < c.length; e++) {
            const t = c[e];
            s[t] = i[t]
          }
          return s
        };

        function H(e, t) {
          return function (...n) {
            const o = [];
            for (let t = 0; t < n.length; t++) o[t] = q(n[t], {
              parse: e.contextGlobal.jsonParse,
              stringify: e.contextGlobal.jsonStringify,
              arrayBufferProto: e.contextGlobal.arrayBufferProto
            });
            t.apply(this, o)
          }
        }

        function Q(e, t, {
          cloneArgs: n = !0
        } = {}) {
          return function (...o) {
            const r = [];
            for (let t = 0; t < o.length; t++) "function" == typeof o[t] ? r[t] = new H(e, o[t]) : r[t] = n ? q(o[t], {
              parse: JSON.parse,
              stringify: JSON.stringify,
              arrayBufferProto: ArrayBuffer.prototype
            }) : o[t];
            const a = t.apply(this, r);
            return q(a, {
              parse: e.contextGlobal.jsonParse,
              stringify: e.contextGlobal.jsonStringify,
              arrayBufferProto: e.contextGlobal.arrayBufferProto
            })
          }
        }

        function Y(e, t, n, o = !0) {
          const r = Object.keys(e);
          for (let a = 0; a < r.length; a++) {
            const i = r[a],
              s = e[i];
            if ("function" != typeof s) throw new Error(`Export value of Safeway must be a function, key ${i} func ${typeof s}`);
            n && "undefined" != typeof __subContextEngine__ && __subContextEngine__.isIsolateContext() ? t[i] = new Q(n, s, {
              cloneArgs: o
            }) : t[i] = s
          }
        }

        function J(e) {
          const t = $(),
            n = {
              create: (e, t) => WeixinWorker.create(e, t),
              onWorkerMsg: e => WeixinWorker.onWorkerMsg(e),
              postMsgToWorker: (e, t, n) => WeixinWorker.postMsgToWorker(e, t, n),
              terminate: e => WeixinWorker.terminate(e)
            },
            o = {
              makeApiSign: x
            },
            r = {
              ifIs: c,
              ifIsNot: l
            };
          Y(t, t, e, {
            cloneArgs: !1
          }), Y(n, n, e), Y(r, r, e), this.bridge = t, this.worker = n, this.apiSign = o, this.pluginPermissionBytes = r;
          Y({
            onSubpackageReady: U
          }, this, e)
        }
        const z = class {
          constructor(e) {
            J.call(this, e)
          }
          static splitOnBridgeListener(e) {
            return function (e) {
              return null === j[e] ? (console.error("`splitOnBridgeListener` should be called before any listeners attached to it. Ignored."), null) : (j[e] = [], WeixinJSBridge.on(e, ((...t) => {
                const n = j[e];
                for (const e of n)
                  if (!1 === e(...t)) break
              })), t => {
                j[e].unshift(t)
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
          for (var o in n) t.o(n, o) && !t.o(e, o) && Object.defineProperty(e, o, {
            enumerable: !0,
            get: n[o]
          })
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t)
      },
      n = {};
    e(0, n, t), Safeway = n.default
  })();
  var __errorTracer__, Reporter, worker, __safeway__ = new Safeway;
  (() => {
    "use strict";
    var e = {
        d: (t, n) => {
          for (var o in n) e.o(n, o) && !e.o(t, o) && Object.defineProperty(t, o, {
            enumerable: !0,
            get: n[o]
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
      wrapSystemFunction: () => l,
      callMiniProgramOrPluginFunction: () => u,
      callThirdPartyFunction: () => d,
      wrapMiniProgramOrPluginFunction: () => p,
      wrapThirdPartyFunction: () => f,
      surroundThirdByTryCatch: () => h
    });
    const n = /[ (@]*https?:\/\/([^/]*)\/+(.*?):(\d+):(\d+)/,
      o = [];

    function r(e) {
      if (!e || e.__wxOriginalStack__) return !1;
      const t = e.stack;
      if (void 0 === t) return !1;
      let n = t,
        r = o.length - 1,
        i = 0;
      for (; i >= 0 && r >= 0;) {
        let e = n.length,
          t = 0;
        for (const o in a) {
          if (!a[o]) continue;
          const r = n.indexOf(a[o], i);
          r < 0 || e <= r || (e = r, t = a[o].length)
        }
        if (e >= n.length) break;
        const s = `at <${o[r--].description}>`;
        n = n.slice(0, e) + s + n.slice(e + t), i = e + s.length
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
    const a = {
      wrapSystemFunction: null,
      wrapMiniProgramOrPluginFunction: null
    };

    function i(e) {
      const t = ((new Error).stack || "").match(/.+/gm);
      let o = "",
        r = 0;
      t && t.forEach((e => {
        if (n.test(e) && (r += 1, 2 === r)) {
          const t = e.match(/^(\s*)at /),
            n = t ? t[1].length : 0;
          return o = e.slice(n), !1
        }
        return !0
      })), a[e] = o
    }

    function s() {
      let e = "";
      for (let t = o.length - 1; t >= 0; t--) o[t].pluginAppId && (e = o[t].pluginAppId);
      return e
    }

    function c(e, t, n, c, u, d = !1) {
      let p;
      null === a.wrapSystemFunction && (a.wrapSystemFunction = "", l("", "", i)("wrapSystemFunction")), o.push({
        description: t
      });
      try {
        p = n.apply(c, u)
      } catch (t) {
        if (r(t)) {
          if ("AppServiceSdkKnownError" === t.type) throw o.pop(), t;
          if ("ThirdScriptError" === t.type) {
            const e = s();
            Reporter.thirdErrorReport({
              error: t,
              source: e,
              triggerErrorCallback: !d
            })
          } else Reporter.errorReport({
            key: e,
            error: t,
            triggerErrorCallback: !d
          })
        }
        if (d) throw o.pop(), t
      }
      return o.pop(), p
    }

    function l(e, t, n, o = !1) {
      return function (...r) {
        return c(e, t, n, this, r, o)
      }
    }

    function u(e, t, n, s, c, l = !1) {
      let u;
      null === a.wrapMiniProgramOrPluginFunction && (a.wrapMiniProgramOrPluginFunction = "", p("", "", i)("wrapMiniProgramOrPluginFunction")), o.push({
        description: t,
        pluginAppId: e
      });
      try {
        u = n.apply(s, c)
      } catch (t) {
        if (r(t) && Reporter.thirdErrorReport({
            error: t,
            source: e || "",
            triggerErrorCallback: !l
          }), l) throw o.pop(), t
      }
      return o.pop(), u
    }

    function d(e, t, n, o, r = !1) {
      return u(s(), e, t, n, o, r)
    }

    function p(e, t, n, o = !1) {
      return function (...r) {
        return u(e, t, n, this, r, o)
      }
    }

    function f(e, t, n = !1) {
      return function (...o) {
        return u(s(), e, t, this, o, n)
      }
    }

    function h(e, t) {
      const n = (t || "").match(/^\s*(?:at )?([\s\S]*)$/),
        o = n ? n[1] : "",
        r = e || function () {};
      return function (...e) {
        return u(s(), o, r, r, e, !1)
      }
    }
    __errorTracer__ = t
  })(), (() => {
    "use strict";
    var e = {
      d: (t, n) => {
        for (var o in n) e.o(n, o) && !e.o(t, o) && Object.defineProperty(t, o, {
          enumerable: !0,
          get: n[o]
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
        default: () => G
      });
      const n = {
          APP: 0,
          WIDGET: 1,
          GAME: 2,
          GAME_SUBCONTEXT: 3
        },
        o = {
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
        r = {
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
        a = {
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
        i = {
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
          [n.APP]: "thirdScriptError",
          [n.WIDGET]: "widgetThirdScriptError",
          [n.GAME]: "gameThirdScriptError",
          [n.GAME_SUBCONTEXT]: "gameSubContextThirdScriptError"
        },
        l = __wxConfig,
        u = (l.platform, "devtools" === l.platform),
        d = (l.platform, "ios" === l.platform);
      l.platform, l.platform, l.platform;
      const p = l.host || {},
        f = (p.env, p.env, p.env, p.forceUseNativeMap, "object" == typeof window && window && window.__wkrenderer_h5, Object.prototype.toString);

      function h(e) {
        return f.call(e).slice(8, -1)
      }
      const g = e => "Number" === h(e);
      Number.isNaN, Number.isFinite, Array.isArray;
      let y = [],
        v = [],
        m = [],
        b = 0,
        _ = 0,
        w = 0,
        I = 0,
        S = 0;
      const A = {},
        k = {},
        C = {};

      function P(e) {
        void 0 !== WeixinJSBridge ? e() : "undefined" != typeof document && document.addEventListener("WeixinJSBridgeReady", e, !1)
      }

      function T(...e) {
        P((() => {
          WeixinJSBridge.invoke(...e)
        }))
      }

      function x() {
        !y || y.length <= 0 || (T("reportKeyValue", {
          dataArray: y.slice(0, 500)
        }), y = y.slice(500))
      }

      function M() {
        !v || v.length <= 0 || (T("reportIDKey", {
          dataArray: v.slice(0, 500)
        }), v = v.slice(500))
      }

      function E() {
        !m || m.length <= 0 || (T("systemLog", {
          dataArray: m
        }), m = [])
      }
      let O = () => {},
        L = () => {},
        D = () => {},
        B = () => {},
        R = "",
        N = {},
        F = -1,
        W = 0,
        j = n.APP,
        $ = "";
      "function" == typeof l.onReady && l.onReady((() => {
        void 0 !== l.appType && (F = l.appType), "object" == typeof l.appLaunchInfo && (W = l.appLaunchInfo.scene), setTimeout((() => {
          WeixinJSBridge.invoke("getNetworkType", {}, (e => {
            e && e.networkType && ($ = e.networkType)
          }))
        }), 0), "function" == typeof WeixinJSBridge.addEventListener && WeixinJSBridge.addEventListener("onNetworkStatusChange", (e => {
          $ = e.networkType
        }))
      }));
      const V = {
          surroundThirdByTryCatch: __errorTracer__.surroundThirdByTryCatch,
          slowReport: ({
            key: e,
            cost: t,
            extend: n,
            force: o
          }) => {
            const r = i[e],
              a = Date.now();
            if (!r) return;
            if (!o && a - S < 500) return;
            if (Object.keys(C).length > 50) return;
            if (C[n] || (C[n] = 0), C[n]++, C[n] > 3) return;
            S = a;
            const s = `${t},${encodeURIComponent(n)},${r},${V.getAppType()}`;
            V.reportKeyValue({
              key: "Slow",
              value: s
            })
          },
          speedReport: ({
            key: e,
            data: t,
            timeMark: n,
            force: o
          }) => {
            const r = a[e],
              i = Date.now();
            let s = 0;
            const c = n.nativeTime;
            if (!r) return;
            if (!o && i - (A[r] || 0) < 500) return;
            if (!n.startTime || !n.endTime) return;
            if ((1 === r || 2 === r) && !c) return;
            t && (s = JSON.stringify(t).length), A[r] = i;
            const l = `${r},${n.startTime},${c},${c},${n.endTime},${s},${V.getAppType()}`;
            V.reportKeyValue({
              key: "Speed",
              value: l
            })
          },
          reportQualityData(e, t, n, o = []) {
            T("reportKeyValue", {
              version: 2,
              dataArray: [{
                key: r[e],
                value: [n - t, W, t, n, ...o].join(",")
              }]
            })
          },
          reportKeyValue: ({
            key: e,
            value: t,
            immediately: n = !1,
            number: o = !1
          }) => {
            if (o || r[e]) {
              for (n ? y.unshift({
                  key: o ? e : r[e],
                  value: t
                }) : y.push({
                  key: o ? e : r[e],
                  value: t
                }); y.length > 5e3;) y.pop();
              (Date.now() - b > 5e3 || n) && (b = Date.now(), x())
            }
          },
          reportIDKey: ({
            id: e,
            key: t,
            value: n = 1
          }) => {
            if (o[t]) {
              for (v.push({
                  id: e || (d ? "356" : "358"),
                  key: o[t],
                  value: n
                }); v.length > 5e3;) v.pop();
              Date.now() - _ > 5e3 && (_ = Date.now(), M())
            }
          },
          reportIDKeyDirectly: ({
            id: e,
            key: t,
            immediately: n = !1
          }) => {
            if (t && "356" !== e && "358" !== e) {
              for (v.push({
                  id: e,
                  key: t,
                  value: 1
                }); v.length > 5e3;) v.pop();
              (Date.now() - _ > 5e3 || n) && (_ = Date.now(), M())
            }
          },
          thirdErrorReport: ({
            key: e = j,
            error: t,
            triggerErrorCallback: n = !0,
            isUnhandledRejection: o = !1,
            promise: r,
            source: a = ""
          }) => {
            V.errorReport({
              key: c[e],
              error: t,
              triggerErrorCallback: n,
              isThirdScriptError: !0,
              isUnhandledRejection: o,
              promise: r,
              source: a
            })
          },
          errorReport: ({
            key: e,
            error: t,
            isThirdScriptError: o = !1,
            triggerErrorCallback: r = !0,
            isUnhandledRejection: a = !1,
            promise: i,
            source: c = ""
          }) => {
            if (!s[e]) return;
            if (null == t) return;
            let d, p;
            "function" == typeof __wxSourceMapRetrace__ && (t = __wxSourceMapRetrace__(t)), "object" == typeof t && (t.message || t.stack) ? (d = t.message, p = t.stack) : (d = function (e) {
              try {
                return JSON.stringify(e)
              } catch (e) {
                return e.message, ""
              }
            }(t), p = h(t));
            const f = o ? "MiniProgramError" : `SystemError (${e})`,
              g = d;
            let y = "";
            t.name && 0 !== p.indexOf(t.name) && (y = "\n" + t.name + ": " + g);
            const v = `${f}\n${g}${y}\n${p}`;
            if (u) {
              const e = new Error(`${f}\n${g}`);
              "object" == typeof t && void 0 !== t.name && Object.defineProperty(e, "name", {
                value: t.name
              }), "object" == typeof t && void 0 !== t.stack && Object.defineProperty(e, "stack", {
                value: t.stack
              }), console.error(e)
            } else a ? console.error("(in promise) " + v) : console.error(v);
            if (v.indexOf("subContext.js") >= 0) return;
            if ("undefined" != typeof window && void 0 !== window.__webviewId__ ? function (...e) {
                P((() => {
                  WeixinJSBridge.publish(...e)
                }))
              }("WEBVIEW_ERROR_MSG", {
                data: {
                  msg: v
                },
                options: {
                  timestamp: Date.now()
                }
              }) : r && (V.triggerErrorMessage(v, a, t, i), o && V.triggerThirdErrorMessage(v, a, t, i)), Object.keys(k).length > 50) return;
            if (a && "Error" !== h(t)) return;
            let m = "",
              b = "";
            j !== n.APP && j !== n.GAME || (m = R, b = function (e) {
              let t = "";
              return Object.keys(e).forEach(((n, o) => {
                0 !== o && (t += "&");
                try {
                  t += `${encodeURIComponent(n)}=${encodeURIComponent(e[n])}`
                } catch (e) {}
              })), t
            }(N));
            const _ = c.match(/wx[0-9a-f]{16}/) ? function (e) {
              const t = l && l.appContactInfo && l.appContactInfo.call_plugin_info;
              if (!t || !Array.isArray(t)) return 0;
              const n = t.find((t => t.plugin_id === e));
              return n && void 0 !== n.inner_version ? n.inner_version : 0
            }(c) : 0;
            if (4 === l.appType) try {
              $ = __appServiceSDK__.getGameRelatedContextsExports().game._getCurrentNetworkType()
            } catch (e) {}
            const w = [s[e], t.name, ...[g, p, "undefined" != typeof __libVersionInfo__ && __libVersionInfo__.version || "", V.getAppType(), m, b, "undefined" != typeof __libVersionInfo__ && __libVersionInfo__.updateTime || "", "", a ? 1 : 0, c, _, $].map((e => {
              let t;
              try {
                t = encodeURIComponent(e)
              } catch (n) {
                t = e
              }
              return t
            }))].join(",");
            k[w] || (k[w] = 0), k[w]++, o && k[w] > 3 || k[w] > 3 || (V.reportIDKey({
              key: e
            }), V.reportKeyValue({
              key: "Error",
              value: w
            }), M(), x(), E())
          },
          log: (e, t) => {
            e && "string" == typeof e && (!t && Date.now() - w < 50 || (w = Date.now(), m.push(e + ""), m.length >= 50 && E()))
          },
          submit: () => {
            Date.now() - I < 50 || (I = Date.now(), M(), x(), E())
          },
          registerErrorListener: e => {
            "function" == typeof e && (O = e)
          },
          registerThirdErrorListener: e => {
            "function" == typeof e && (L = e)
          },
          registerUnhandledRejectionListener: e => {
            "function" == typeof e && (D = e)
          },
          registerThirdUnhandledRejectionListener: e => {
            "function" == typeof e && (B = e)
          },
          triggerErrorMessage: (e, t = !1, n, o) => {
            setTimeout((() => {
              try {
                t ? D(n, o) : O(e)
              } catch (e) {
                console.error(e.message, "at onError callback function")
              }
            }), 0)
          },
          triggerThirdErrorMessage: (e, t = !1, n, o) => {
            setTimeout((() => {
              try {
                t ? B(n, o) : L(e)
              } catch (e) {
                console.error(e.message, "at onError callback function")
              }
            }), 0)
          },
          setAsWidget: () => {
            j = n.WIDGET
          },
          setAsGame: () => {
            j = n.GAME
          },
          setAsGameSubContext: () => {
            j = n.GAME_SUBCONTEXT
          },
          getAppType: () => -1 === F ? 0 : F + 1e3
        },
        Z = {};

      function U(e) {
        Object.defineProperty(Z, e, {
          get() {
            return t = V[e],
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
      Object.keys(V).forEach((e => {
        U(e)
      })), Object.defineProperty(Z, "__route__", {
        set(e) {
          R = e
        }
      }), Object.defineProperty(Z, "__method__", {
        set() {}
      }), Object.defineProperty(Z, "__query__", {
        set(e) {
          N = e
        }
      }), Z.RunType = n, "undefined" != typeof window && Object.defineProperty(window, "onbeforeunload", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value() {
          V.submit()
        }
      });
      const G = Z
    })(), Reporter = t.default
  })(), (() => {
    var e = {
        2288: (e, t, n) => {
          "use strict";
          n.d(t, {
            b: () => r
          });
          n(665);
          var o = n(1106);
          const r = (e = {}) => (0, o.IN)("getABTestConfig", e)
        },
        3525: (e, t, n) => {
          "use strict";
          n.d(t, {
            FE: () => l.FE,
            YG: () => l.YG,
            Fv: () => u,
            IN: () => l.IN,
            bb: () => l.bb,
            jQ: () => l.jQ,
            Ld: () => l.Ld,
            g9: () => g
          });
          n(5260);
          var o = n(2582),
            r = n(9973);
          const a = {
              sample: {
                invokeWebviewMethod: null,
                drawCanvas: null,
                createContext: null,
                createCanvasContext: null,
                canvasToTempFilePath: null,
                canvasGetImageData: null,
                canvasPutImageData: null,
                getShareInfo: null,
                pageScrollTo: null,
                chooseInvoiceTitle: null,
                ShareInfoStorage: null,
                arrayBufferToBase64: null,
                base64ToArrayBuffer: null,
                openSetting: null,
                getExtConfig: null,
                chooseMedia: null,
                chooseWeChatContact: null,
                uploadEncryptedFileToCDN: null,
                onUploadEncryptedFileToCDNProgress: null,
                getExtConfigSync: null,
                showShareMenu: null,
                hideShareMenu: null,
                updateShareMenu: null,
                openUrl: null,
                setNavigationBarColor: null,
                setNavigationBarAlpha: null,
                _getRealRoute: null,
                vibrateShort: null,
                vibrateLong: null,
                getSetting: null,
                checkIsSupportFacialRecognition: null,
                startFacialRecognitionVerify: null,
                startFacialRecognitionVerifyAndUploadVideo: null,
                sendBizRedPacket: null,
                sendGoldenRedPacket: null,
                openGoldenRedPacketDetail: null,
                showRedPackage: null,
                addPhoneContact: null,
                setScreenBrightness: null,
                getScreenBrightness: null,
                shareToWeRun: null,
                getWeRunData: null,
                uploadWeRunData: null,
                canIUse: null,
                setPageStyle: null,
                triggerGettingWidgetData: null,
                navigateToMiniProgram: null,
                navigateToDevMiniProgram: null,
                navigateBackMiniProgram: null,
                exitMiniProgram: null,
                setNavigationBarRightButton: null,
                onTapNavigationBarRightButton: null,
                setTopBarText: null,
                setTabBarBadge: null,
                removeTabBarBadge: null,
                showTabBarRedDot: null,
                hideTabBarRedDot: null,
                showTabBar: null,
                hideTabBar: null,
                setTabBarStyle: null,
                setTabBarItem: null,
                setEnableDebug: null,
                captureScreen: null,
                onUserCaptureScreen: null,
                setKeepScreenOn: null,
                checkIsSupportSoterAuthentication: null,
                startSoterAuthentication: null,
                checkIsSoterEnrolledInDevice: null,
                openDeliveryList: null,
                reportIDKey: null,
                reportKeyValue: null,
                setNavigationBarTitle: null,
                showNavigationBarLoading: null,
                hideNavigationBarLoading: null,
                startPullDownRefresh: null,
                stopPullDownRefresh: null,
                operateWXData: null,
                getOpenDeviceId: null,
                makeBluetoothPair: null,
                openBluetoothAdapter: null,
                closeBluetoothAdapter: null,
                getBluetoothAdapterState: null,
                startBluetoothDevicesDiscovery: null,
                stopBluetoothDevicesDiscovery: null,
                getBluetoothDevices: null,
                getConnectedBluetoothDevices: null,
                createBLEConnection: null,
                setBLEMTU: null,
                closeBLEConnection: null,
                getBLEDeviceServices: null,
                getBLEDeviceCharacteristics: null,
                notifyBLECharacteristicValueChanged: null,
                notifyBLECharacteristicValueChange: null,
                readBLECharacteristicValue: null,
                writeBLECharacteristicValue: null,
                onBluetoothDeviceFound: null,
                onBLEConnectionStateChanged: null,
                onBLEConnectionStateChange: null,
                onBLECharacteristicValueChange: null,
                onBluetoothAdapterStateChange: null,
                offBluetoothAdapterStateChange: null,
                offBluetoothDeviceFound: null,
                offBLEConnectionStateChanged: null,
                offBLEConnectionStateChange: null,
                offBLECharacteristicValueChange: null,
                createBLEPeripheralServer: null,
                onBLEPeripheralConnectionStateChanged: null,
                offBLEPeripheralConnectionStateChanged: null,
                startBeaconDiscovery: null,
                stopBeaconDiscovery: null,
                getBeacons: null,
                onBeaconUpdate: null,
                onBeaconServiceChange: null,
                startWifi: null,
                stopWifi: null,
                getWifiList: null,
                getConnectedWifi: null,
                connectWifi: null,
                presetWifiList: null,
                setWifiList: null,
                onGetWifiList: null,
                onWifiConnected: null,
                offGetWifiList: null,
                offWifiConnected: null,
                onEvaluateWifi: null,
                getHCEState: null,
                startHCE: null,
                stopHCE: null,
                sendHCEMessage: null,
                onHCEMessage: null,
                startLocalServiceDiscovery: null,
                stopLocalServiceDiscovery: null,
                onLocalServiceFound: null,
                offLocalServiceFound: null,
                onLocalServiceLost: null,
                offLocalServiceLost: null,
                onLocalServiceDiscoveryStop: null,
                offLocalServiceDiscoveryStop: null,
                onLocalServiceResolveFail: null,
                offLocalServiceResolveFail: null,
                redirectTo: null,
                reLaunch: null,
                navigateTo: null,
                switchTab: null,
                navigateBack: null,
                _triggerBeforeUnloadPage: null,
                _triggerBeforeShareAppMessage: null,
                navigateBackApplication: null,
                navigateBackNative: null,
                launchApplication: null,
                getStorage: null,
                getStorageSync: null,
                setStorage: null,
                setStorageSync: null,
                removeStorage: null,
                removeStorageSync: null,
                clearStorage: null,
                clearStorageSync: null,
                getStorageInfo: null,
                getStorageInfoSync: null,
                getBackgroundFetchData: null,
                onBackgroundFetchData: null,
                request: null,
                connectSocket: null,
                closeSocket: null,
                sendSocketMessage: null,
                onSocketOpen: null,
                onSocketClose: null,
                onSocketMessage: null,
                onSocketError: null,
                uploadFile: null,
                downloadFile: null,
                addNativeDownloadTask: null,
                chooseImage: null,
                previewImage: null,
                previewMedia: null,
                getImageInfo: null,
                saveImageToPhotosAlbum: null,
                startRecord: null,
                stopRecord: null,
                playVoice: null,
                pauseVoice: null,
                stopVoice: null,
                onVoicePlayEnd: null,
                chooseVideo: null,
                saveVideoToPhotosAlbum: null,
                getVideoInfo: null,
                compressVideo: null,
                getLocation: null,
                openLocation: null,
                chooseLocation: null,
                choosePoi: null,
                onLocationChange: null,
                offLocationChange: null,
                onLocationChangeError: null,
                offLocationChangeError: null,
                startLocationUpdateBackground: null,
                startLocationUpdate: null,
                stopLocationUpdate: null,
                getNetworkType: null,
                onNetworkStatusChange: null,
                getSystemInfo: null,
                getSystemInfoSync: null,
                getBatteryInfo: null,
                getBatteryInfoSync: null,
                startAccelerometer: null,
                stopAccelerometer: null,
                onAccelerometerChange: null,
                startCompass: null,
                stopCompass: null,
                onCompassChange: null,
                reportAction: null,
                getBackgroundAudioManager: null,
                getRecorderManager: null,
                getBackgroundAudioPlayerState: null,
                playBackgroundAudio: null,
                pauseBackgroundAudio: null,
                seekBackgroundAudio: null,
                stopBackgroundAudio: null,
                onBackgroundAudioPlay: null,
                onBackgroundAudioPause: null,
                onBackgroundAudioStop: null,
                join1v1Chat: null,
                setEnable1v1Chat: null,
                joinVoIPChat: null,
                exitVoIPChat: null,
                updateVoIPChatMuteConfig: null,
                onVoIPChatMembersChanged: null,
                onVoIPChatSpeakersChanged: null,
                onVoIPChatInterrupted: null,
                offVoIPChatMembersChanged: null,
                offVoIPChatSpeakersChanged: null,
                offVoIPChatInterrupted: null,
                onVoIPVideoMembersChanged: null,
                offVoIPVideoMembersChanged: null,
                onVoIPChatStateChanged: null,
                offVoIPChatStateChanged: null,
                subscribeVoIPVideoMembers: null,
                login: null,
                checkSession: null,
                authorize: null,
                getUserInfo: null,
                getUserProfile: null,
                requestFacetoFacePayment: null,
                requestPayment: null,
                requestPersonalPay: null,
                requestJointPayment: null,
                getWCPayOverseaPrepayRequest: null,
                requestH5Transaction: null,
                openWCPayOverseaPaymentReceive: null,
                handleWCPayOverseaWalletBuffer: null,
                requestVerifyUserIdentity: null,
                verifyPaymentPassword: null,
                bindPaymentCard: null,
                requestPaymentToBank: null,
                requestVirtualPayment: null,
                openOfflinePayView: null,
                openWCPayCardList: null,
                requestMallPayment: null,
                requestOrderPayment: null,
                addCard: null,
                openCard: null,
                scanCode: null,
                openQRCode: null,
                scanItem: null,
                chooseAddress: null,
                saveFile: null,
                openDocument: null,
                getSavedFileList: null,
                getSavedFileInfo: null,
                getFileInfo: null,
                removeSavedFile: null,
                getFileSystemManager: null,
                chooseContact: null,
                removeUserCloudStorage: null,
                setUserCloudStorage: null,
                makePhoneCall: null,
                makeVoIPCall: null,
                onAppRoute: null,
                onAppRouteDone: null,
                onAppEnterBackground: null,
                onAppEnterForeground: null,
                onAppUnhang: null,
                onPageReload: null,
                onPageNotFound: null,
                offPageNotFound: null,
                onThemeChange: null,
                offThemeChange: null,
                onAppShow: null,
                offAppShow: null,
                onAppHide: null,
                offAppHide: null,
                onError: null,
                offError: null,
                onUnhandledRejection: null,
                offUnhandledRejection: null,
                getLaunchOptionsSync: null,
                getEnterOptionsSync: null,
                createAnimation: null,
                createInnerAudioContext: null,
                createAudioContext: null,
                createVideoContext: null,
                createMapContext: null,
                createCameraContext: null,
                createLivePlayerContext: null,
                createLivePusherContext: null,
                onWebviewEvent: null,
                onNativeEvent: null,
                hideKeyboard: null,
                onKeyboardHeightChange: null,
                offKeyboardHeightChange: null,
                getPublicLibVersion: null,
                showModal: null,
                showToast: null,
                hideToast: null,
                showLoading: null,
                hideLoading: null,
                showActionSheet: null,
                reportAnalytics: null,
                getClipboardData: null,
                setClipboardData: null,
                createSelectorQuery: null,
                createIntersectionObserver: null,
                updatePerfData: null,
                traceEvent: null,
                onMemoryWarning: null,
                offMemoryWarning: null,
                getUpdateManager: null,
                createWorker: null,
                voiceSplitJoint: null,
                uploadSilkVoice: null,
                downloadSilkVoice: null,
                getResPath: null,
                setResPath: null,
                env: null,
                appStatus: null,
                hanged: null,
                getLogManager: null,
                getRealtimeLogManager: null,
                onWindowResize: null,
                offWindowResize: null,
                setPageOrientation: null,
                loadFontFace: null,
                setInnerAudioOption: null,
                addWeRunData: null,
                setBackgroundColor: null,
                setBackgroundTextStyle: null,
                getMenuButtonBoundingClientRect: null,
                calRqt: null,
                getAvailableAudioSources: null,
                reportMonitor: null,
                faceVerifyForPay: null,
                chooseInvoice: null,
                startDeviceMotionListening: null,
                stopDeviceMotionListening: null,
                onDeviceMotionChange: null,
                startGyroscope: null,
                stopGyroscope: null,
                onGyroscopeChange: null,
                secureTunnel: null,
                startCustomFacialRecognitionVerify: null,
                startCustomFacialRecognitionVerifyAndUploadVideo: null,
                getAccountInfoSync: null,
                setCookies: null,
                getCookies: null,
                nextTick: null,
                chooseMultiMedia: null,
                chooseMessageFile: null,
                getLabInfo: null,
                setLabInfo: null,
                compressImage: null,
                shareAppMessageForFakeNative: null,
                downloadApp: null,
                installDownloadApp: null,
                getAppInstallState: null,
                queryDownloadAppTask: null,
                cancelDownloadAppTask: null,
                resumeDownloadAppTask: null,
                pauseDownloadAppTask: null,
                onDownloadAppStateChange: null,
                downloadAppForIOS: null,
                offGyroscopeChange: null,
                offDeviceMotionChange: null,
                offCompassChange: null,
                offAccelerometerChange: null,
                offUserCaptureScreen: null,
                offNetworkStatusChange: null,
                offHCEMessage: null,
                offBeaconUpdate: null,
                offBeaconServiceChange: null,
                requestSubscribeMessage: null,
                hideHomeButton: null,
                getBLEDeviceRSSI: null,
                checkIsOpenAccessibility: null,
                addPhoneCalendar: null,
                addPhoneRepeatCalendar: null,
                updateWeChatApp: null,
                getRandomValues: null,
                shareFileMessage: null,
                shareVideoMessage: null,
                addFileToFavorites: null,
                addVideoToFavorites: null,
                showShareImageMenu: null,
                searchContacts: null,
                publishWeChatState: null
              },
              ui: {
                invokeWebviewMethod: 0,
                drawCanvas: 20,
                createContext: 20,
                createCanvasContext: 20,
                canvasToTempFilePath: 20,
                canvasGetImageData: 20,
                canvasPutImageData: 20,
                getShareInfo: 30,
                pageScrollTo: 30,
                chooseInvoiceTitle: 10,
                ShareInfoStorage: 10,
                arrayBufferToBase64: 10,
                base64ToArrayBuffer: 10,
                openSetting: 20,
                openSettingForPlugin: 30,
                getExtConfig: 0,
                chooseMedia: 20,
                chooseWeChatContact: 20,
                uploadEncryptedFileToCDN: 10,
                onUploadEncryptedFileToCDNProgress: 10,
                getExtConfigSync: 0,
                showShareMenu: 30,
                hideShareMenu: 30,
                updateShareMenu: 30,
                openUrl: 20,
                setNavigationBarColor: 30,
                setNavigationBarAlpha: 30,
                hideHomeButton: 30,
                _getRealRoute: 20,
                vibrateShort: 10,
                vibrateLong: 10,
                getSetting: 10,
                checkIsSupportFacialRecognition: 10,
                startFacialRecognitionVerify: 20,
                startFacialRecognitionVerifyAndUploadVideo: 20,
                sendBizRedPacket: 10,
                sendGoldenRedPacket: 10,
                openGoldenRedPacketDetail: 10,
                showRedPackage: 10,
                addPhoneContact: 10,
                setScreenBrightness: 20,
                getScreenBrightness: 20,
                shareToWeRun: 20,
                getWeRunData: 10,
                uploadWeRunData: 10,
                addWeRunData: 10,
                canIUse: 0,
                setPageStyle: 30,
                triggerGettingWidgetData: 10,
                navigateToMiniProgram: 30,
                navigateToDevMiniProgram: 30,
                navigateBackMiniProgram: 30,
                exitMiniProgram: 30,
                setNavigationBarRightButton: 20,
                onTapNavigationBarRightButton: 20,
                setTopBarText: 30,
                setTabBarBadge: 30,
                removeTabBarBadge: 30,
                showTabBarRedDot: 30,
                hideTabBarRedDot: 30,
                showTabBar: 30,
                hideTabBar: 30,
                setTabBarStyle: 30,
                setTabBarItem: 30,
                setEnableDebug: 30,
                captureScreen: 30,
                onUserCaptureScreen: 30,
                offUserCaptureScreen: 30,
                setKeepScreenOn: 10,
                checkIsSupportSoterAuthentication: 10,
                startSoterAuthentication: 10,
                checkIsSoterEnrolledInDevice: 10,
                openDeliveryList: 20,
                reportIDKey: 0,
                reportKeyValue: 0,
                setNavigationBarTitle: 30,
                showNavigationBarLoading: 30,
                hideNavigationBarLoading: 30,
                startPullDownRefresh: 30,
                stopPullDownRefresh: 30,
                operateWXData: 10,
                getOpenDeviceId: 10,
                makeBluetoothPair: 10,
                openBluetoothAdapter: 10,
                closeBluetoothAdapter: 10,
                getBluetoothAdapterState: 10,
                startBluetoothDevicesDiscovery: 10,
                stopBluetoothDevicesDiscovery: 10,
                getBluetoothDevices: 10,
                getConnectedBluetoothDevices: 10,
                createBLEConnection: 10,
                setBLEMTU: 10,
                closeBLEConnection: 10,
                getBLEDeviceServices: 10,
                getBLEDeviceRSSI: 10,
                getBLEDeviceCharacteristics: 10,
                notifyBLECharacteristicValueChanged: 10,
                notifyBLECharacteristicValueChange: 10,
                readBLECharacteristicValue: 10,
                writeBLECharacteristicValue: 10,
                onBluetoothAdapterStateChange: 10,
                onBluetoothDeviceFound: 10,
                onBLEConnectionStateChanged: 10,
                onBLEConnectionStateChange: 10,
                onBLECharacteristicValueChange: 10,
                offBluetoothAdapterStateChange: 10,
                offBluetoothDeviceFound: 10,
                offBLEConnectionStateChanged: 10,
                offBLEConnectionStateChange: 10,
                offBLECharacteristicValueChange: 10,
                createBLEPeripheralServer: 10,
                onBLEPeripheralConnectionStateChanged: 10,
                offBLEPeripheralConnectionStateChanged: 10,
                startBeaconDiscovery: 10,
                stopBeaconDiscovery: 10,
                getBeacons: 10,
                onBeaconUpdate: 10,
                offBeaconUpdate: 10,
                onBeaconServiceChange: 10,
                offBeaconServiceChange: 10,
                startWifi: 10,
                stopWifi: 10,
                getWifiList: 10,
                getConnectedWifi: 10,
                connectWifi: 10,
                presetWifiList: 10,
                setWifiList: 10,
                onGetWifiList: 10,
                onWifiConnected: 10,
                offGetWifiList: 10,
                offWifiConnected: 10,
                onEvaluateWifi: 10,
                getHCEState: 10,
                startHCE: 10,
                stopHCE: 10,
                sendHCEMessage: 10,
                onHCEMessage: 10,
                offHCEMessage: 10,
                startLocalServiceDiscovery: 10,
                stopLocalServiceDiscovery: 10,
                onLocalServiceFound: 10,
                offLocalServiceFound: 10,
                onLocalServiceLost: 10,
                offLocalServiceLost: 10,
                onLocalServiceDiscoveryStop: 10,
                offLocalServiceDiscoveryStop: 10,
                onLocalServiceResolveFail: 10,
                offLocalServiceResolveFail: 10,
                redirectTo: 30,
                reLaunch: 30,
                navigateTo: 30,
                switchTab: 30,
                navigateBack: 30,
                _triggerBeforeUnloadPage: 30,
                _triggerBeforeShareAppMessage: 30,
                navigateBackApplication: 30,
                navigateBackNative: 0,
                launchApplication: 30,
                getStorage: 10,
                getStorageSync: 10,
                setStorage: 10,
                setStorageSync: 10,
                removeStorage: 10,
                removeStorageSync: 10,
                clearStorage: 10,
                clearStorageSync: 10,
                getStorageInfo: 10,
                getStorageInfoSync: 10,
                getBackgroundFetchData: 10,
                onBackgroundFetchData: 10,
                request: 10,
                connectSocket: 10,
                closeSocket: 10,
                sendSocketMessage: 10,
                onSocketOpen: 10,
                onSocketClose: 10,
                onSocketMessage: 10,
                onSocketError: 10,
                uploadFile: 10,
                downloadFile: 10,
                addNativeDownloadTask: 10,
                chooseImage: 20,
                previewImage: 20,
                previewMedia: 20,
                getImageInfo: 10,
                saveImageToPhotosAlbum: 10,
                startRecord: 20,
                stopRecord: 20,
                playVoice: 20,
                pauseVoice: 20,
                stopVoice: 20,
                onVoicePlayEnd: 20,
                chooseVideo: 20,
                saveVideoToPhotosAlbum: 10,
                getVideoInfo: 10,
                compressVideo: 10,
                getLocation: 20,
                openLocation: 20,
                chooseLocation: 20,
                choosePoi: 20,
                onLocationChange: 20,
                offLocationChange: 20,
                onLocationChangeError: 20,
                offLocationChangeError: 20,
                startLocationUpdateBackground: 20,
                startLocationUpdate: 20,
                stopLocationUpdate: 20,
                getNetworkType: 0,
                onAppRoute: 30,
                onAppRouteDone: 30,
                onAppEnterBackground: 30,
                onAppEnterForeground: 30,
                onAppUnhang: 30,
                onPageReload: 30,
                onPageNotFound: 30,
                offPageNotFound: 30,
                onThemeChange: 10,
                offThemeChange: 10,
                onAppShow: 30,
                offAppShow: 30,
                onAppHide: 30,
                offAppHide: 30,
                onError: 30,
                offError: 30,
                onUnhandledRejection: 10,
                offUnhandledRejection: 10,
                getLaunchOptionsSync: 0,
                getEnterOptionsSync: 0,
                createAnimation: 0,
                createInnerAudioContext: 20,
                createAudioContext: 20,
                createVideoContext: 20,
                createMapContext: 20,
                createCameraContext: 20,
                createLivePlayerContext: 20,
                createLivePusherContext: 20,
                onWebviewEvent: 20,
                onNativeEvent: 20,
                hideKeyboard: 20,
                onKeyboardHeightChange: 20,
                offKeyboardHeightChange: 20,
                getPublicLibVersion: 0,
                showModal: 20,
                showToast: 20,
                hideToast: 20,
                showLoading: 20,
                hideLoading: 20,
                showActionSheet: 20,
                reportAnalytics: 10,
                getClipboardData: 20,
                setClipboardData: 20,
                createSelectorQuery: 0,
                createIntersectionObserver: 0,
                updatePerfData: 10,
                traceEvent: 10,
                onMemoryWarning: 10,
                offMemoryWarning: 10,
                getUpdateManager: 10,
                createWorker: 10,
                voiceSplitJoint: 10,
                uploadSilkVoice: 10,
                downloadSilkVoice: 10,
                getResPath: 0,
                setResPath: 0,
                env: 0,
                appStatus: 0,
                hanged: 0,
                getLogManager: 0,
                getRealtimeLogManager: 0,
                onWindowResize: 20,
                offWindowResize: 20,
                setPageOrientation: 30,
                loadFontFace: 20,
                setInnerAudioOption: 0,
                setBackgroundColor: 30,
                setBackgroundTextStyle: 30,
                getMenuButtonBoundingClientRect: 20,
                calRqt: 10,
                onNetworkStatusChange: 10,
                offNetworkStatusChange: 10,
                getSystemInfo: 10,
                getSystemInfoSync: 10,
                getBatteryInfo: 10,
                getBatteryInfoSync: 10,
                startAccelerometer: 10,
                stopAccelerometer: 10,
                onAccelerometerChange: 10,
                offAccelerometerChange: 10,
                startCompass: 10,
                stopCompass: 10,
                onCompassChange: 10,
                offCompassChange: 10,
                reportAction: 10,
                getBackgroundAudioManager: 10,
                getRecorderManager: 10,
                getBackgroundAudioPlayerState: 10,
                playBackgroundAudio: 10,
                pauseBackgroundAudio: 10,
                seekBackgroundAudio: 10,
                stopBackgroundAudio: 10,
                onBackgroundAudioPlay: 10,
                onBackgroundAudioPause: 10,
                onBackgroundAudioStop: 10,
                join1v1Chat: 10,
                setEnable1v1Chat: 10,
                joinVoIPChat: 10,
                exitVoIPChat: 10,
                updateVoIPChatMuteConfig: 10,
                onVoIPChatMembersChanged: 10,
                onVoIPChatSpeakersChanged: 10,
                onVoIPChatInterrupted: 10,
                offVoIPChatMembersChanged: 10,
                offVoIPChatSpeakersChanged: 10,
                offVoIPChatInterrupted: 10,
                onVoIPVideoMembersChanged: 10,
                offVoIPVideoMembersChanged: 10,
                onVoIPChatStateChanged: 10,
                offVoIPChatStateChanged: 10,
                subscribeVoIPVideoMembers: 10,
                login: 10,
                checkSession: 10,
                authorize: 20,
                getUserInfo: 20,
                getUserProfile: 20,
                requestFacetoFacePayment: 20,
                requestPayment: 20,
                verifyPaymentPassword: 20,
                bindPaymentCard: 20,
                requestPersonalPay: 20,
                requestPaymentToBank: 20,
                requestJointPayment: 20,
                getWCPayOverseaPrepayRequest: 20,
                requestH5Transaction: 20,
                openWCPayOverseaPaymentReceive: 20,
                handleWCPayOverseaWalletBuffer: 20,
                requestVerifyUserIdentity: 20,
                requestVirtualPayment: 20,
                openOfflinePayView: 20,
                openWCPayCardList: 20,
                requestMallPayment: 20,
                requestOrderPayment: 20,
                addCard: 20,
                openCard: 20,
                scanCode: 20,
                openQRCode: 20,
                scanItem: 20,
                chooseAddress: 20,
                saveFile: 10,
                openDocument: 20,
                getSavedFileList: 10,
                getSavedFileInfo: 10,
                getFileInfo: 10,
                removeSavedFile: 10,
                getFileSystemManager: 10,
                chooseContact: 20,
                removeUserCloudStorage: 10,
                setUserCloudStorage: 10,
                makePhoneCall: 20,
                makeVoIPCall: 20,
                getAvailableAudioSources: 10,
                reportMonitor: 10,
                faceVerifyForPay: 30,
                chooseInvoice: 20,
                startDeviceMotionListening: 10,
                stopDeviceMotionListening: 10,
                onDeviceMotionChange: 10,
                offDeviceMotionChange: 10,
                startGyroscope: 10,
                stopGyroscope: 10,
                onGyroscopeChange: 10,
                offGyroscopeChange: 10,
                secureTunnel: 10,
                startCustomFacialRecognitionVerify: 10,
                startCustomFacialRecognitionVerifyAndUploadVideo: 10,
                getAccountInfoSync: 0,
                setCookies: 10,
                getCookies: 10,
                nextTick: 0,
                chooseMultiMedia: 20,
                chooseMessageFile: 20,
                getLabInfo: 10,
                setLabInfo: 10,
                compressImage: 0,
                enterContact: 20,
                shareAppMessageForFakeNative: 20,
                checkIsOpenAccessibility: 10,
                addPhoneCalendar: 20,
                addPhoneRepeatCalendar: 20,
                updateWeChatApp: 10,
                getRandomValues: 0,
                shareFileMessage: 20,
                shareVideoMessage: 20,
                addFileToFavorites: 20,
                addVideoToFavorites: 20,
                showShareImageMenu: 20,
                searchContacts: 10,
                publishWeChatState: 20
              },
              log: {
                invokeWebviewMethod: 0,
                drawCanvas: 0,
                createContext: 0,
                createCanvasContext: 2,
                canvasToTempFilePath: 2,
                canvasGetImageData: 2,
                canvasPutImageData: 2,
                getShareInfo: 1,
                pageScrollTo: 1,
                chooseInvoiceTitle: 1,
                ShareInfoStorage: 0,
                arrayBufferToBase64: 0,
                base64ToArrayBuffer: 0,
                openSetting: 1,
                requestSubscribeMessage: 1,
                getExtConfig: 1,
                chooseMedia: 0,
                chooseWeChatContact: 0,
                uploadEncryptedFileToCDN: 0,
                onUploadEncryptedFileToCDNProgress: 0,
                getExtConfigSync: 2,
                showShareMenu: 1,
                hideShareMenu: 1,
                updateShareMenu: 1,
                openUrl: 0,
                setNavigationBarColor: 1,
                setNavigationBarAlpha: 0,
                hideHomeButton: 1,
                _getRealRoute: 0,
                vibrateShort: 1,
                vibrateLong: 1,
                getSetting: 1,
                checkIsSupportFacialRecognition: 0,
                startFacialRecognitionVerify: 0,
                startFacialRecognitionVerifyAndUploadVideo: 0,
                sendBizRedPacket: 0,
                sendGoldenRedPacket: 0,
                openGoldenRedPacketDetail: 0,
                showRedPackage: 1,
                addPhoneContact: 1,
                setScreenBrightness: 1,
                getScreenBrightness: 1,
                shareToWeRun: 1,
                getWeRunData: 1,
                canIUse: 1,
                setPageStyle: 0,
                triggerGettingWidgetData: 0,
                navigateToMiniProgram: 1,
                navigateToDevMiniProgram: 0,
                navigateBackMiniProgram: 1,
                exitMiniProgram: 1,
                setNavigationBarRightButton: 0,
                onTapNavigationBarRightButton: 0,
                setTopBarText: 1,
                setTabBarBadge: 1,
                removeTabBarBadge: 1,
                showTabBarRedDot: 1,
                hideTabBarRedDot: 1,
                showTabBar: 1,
                hideTabBar: 1,
                setTabBarStyle: 1,
                setTabBarItem: 1,
                setEnableDebug: 1,
                captureScreen: 0,
                onUserCaptureScreen: 3,
                setKeepScreenOn: 1,
                checkIsSupportSoterAuthentication: 1,
                startSoterAuthentication: 1,
                checkIsSoterEnrolledInDevice: 1,
                openDeliveryList: 0,
                reportIDKey: 0,
                reportKeyValue: 0,
                setNavigationBarTitle: 1,
                showNavigationBarLoading: 1,
                hideNavigationBarLoading: 1,
                startPullDownRefresh: 1,
                stopPullDownRefresh: 1,
                operateWXData: 0,
                getOpenDeviceId: 0,
                makeBluetoothPair: 1,
                openBluetoothAdapter: 1,
                closeBluetoothAdapter: 1,
                getBluetoothAdapterState: 1,
                startBluetoothDevicesDiscovery: 1,
                stopBluetoothDevicesDiscovery: 1,
                getBluetoothDevices: 1,
                getConnectedBluetoothDevices: 1,
                createBLEConnection: 1,
                setBLEMTU: 1,
                closeBLEConnection: 1,
                getBLEDeviceServices: 1,
                getBLEDeviceRSSI: 1,
                getBLEDeviceCharacteristics: 1,
                notifyBLECharacteristicValueChanged: 1,
                notifyBLECharacteristicValueChange: 1,
                readBLECharacteristicValue: 1,
                writeBLECharacteristicValue: 1,
                onBluetoothAdapterStateChange: 3,
                onBluetoothDeviceFound: 3,
                onBLEConnectionStateChanged: 3,
                onBLEConnectionStateChange: 3,
                onBLECharacteristicValueChange: 3,
                offBluetoothAdapterStateChange: 3,
                offBluetoothDeviceFound: 3,
                offBLEConnectionStateChanged: 3,
                offBLEConnectionStateChange: 3,
                offBLECharacteristicValueChange: 3,
                createBLEPeripheralServer: 2,
                onBLEPeripheralConnectionStateChanged: 3,
                offBLEPeripheralConnectionStateChanged: 3,
                startBeaconDiscovery: 1,
                stopBeaconDiscovery: 1,
                getBeacons: 1,
                onBeaconUpdate: 1,
                onBeaconServiceChange: 1,
                startWifi: 1,
                stopWifi: 1,
                getWifiList: 1,
                getConnectedWifi: 1,
                connectWifi: 1,
                presetWifiList: 1,
                setWifiList: 1,
                onGetWifiList: 3,
                onWifiConnected: 3,
                offGetWifiList: 3,
                offWifiConnected: 3,
                onEvaluateWifi: 3,
                getHCEState: 1,
                startHCE: 1,
                stopHCE: 1,
                sendHCEMessage: 1,
                onHCEMessage: 3,
                startLocalServiceDiscovery: 1,
                stopLocalServiceDiscovery: 1,
                onLocalServiceFound: 3,
                offLocalServiceFound: 3,
                onLocalServiceLost: 3,
                offLocalServiceLost: 3,
                onLocalServiceDiscoveryStop: 3,
                offLocalServiceDiscoveryStop: 3,
                onLocalServiceResolveFail: 3,
                offLocalServiceResolveFail: 3,
                redirectTo: 1,
                reLaunch: 1,
                navigateTo: 1,
                switchTab: 1,
                navigateBack: 1,
                _triggerBeforeUnloadPage: 0,
                _triggerBeforeShareAppMessage: 0,
                navigateBackApplication: 0,
                navigateBackNative: 0,
                launchApplication: 0,
                getStorage: 1,
                getStorageSync: 2,
                setStorage: 1,
                setStorageSync: 2,
                removeStorage: 1,
                removeStorageSync: 2,
                clearStorage: 1,
                clearStorageSync: 2,
                getStorageInfo: 1,
                getStorageInfoSync: 2,
                getBackgroundFetchData: 1,
                onBackgroundFetchData: 3,
                request: 1,
                connectSocket: 1,
                closeSocket: 1,
                sendSocketMessage: 1,
                onSocketOpen: 3,
                onSocketClose: 3,
                onSocketMessage: 3,
                onSocketError: 3,
                uploadFile: 1,
                downloadFile: 1,
                addNativeDownloadTask: 0,
                chooseImage: 1,
                previewImage: 1,
                previewMedia: 1,
                getImageInfo: 1,
                saveImageToPhotosAlbum: 1,
                startRecord: 1,
                stopRecord: 1,
                playVoice: 1,
                pauseVoice: 1,
                stopVoice: 1,
                onVoicePlayEnd: 1,
                chooseVideo: 1,
                saveVideoToPhotosAlbum: 1,
                getVideoInfo: 1,
                compressVideo: 1,
                getLocation: 1,
                openLocation: 1,
                chooseLocation: 1,
                choosePoi: 1,
                onLocationChange: 0,
                offLocationChange: 0,
                onLocationChangeError: 0,
                offLocationChangeError: 0,
                startLocationUpdateBackground: 0,
                startLocationUpdate: 0,
                stopLocationUpdate: 0,
                getNetworkType: 1,
                onNetworkStatusChange: 3,
                getSystemInfo: 1,
                getSystemInfoSync: 2,
                getBatteryInfo: 1,
                getBatteryInfoSync: 2,
                startAccelerometer: 1,
                stopAccelerometer: 1,
                onAccelerometerChange: 3,
                startCompass: 1,
                stopCompass: 1,
                onCompassChange: 3,
                reportAction: 0,
                getBackgroundAudioManager: 2,
                getRecorderManager: 2,
                getBackgroundAudioPlayerState: 1,
                playBackgroundAudio: 1,
                pauseBackgroundAudio: 1,
                seekBackgroundAudio: 1,
                stopBackgroundAudio: 1,
                onBackgroundAudioPlay: 3,
                onBackgroundAudioPause: 3,
                onBackgroundAudioStop: 3,
                join1v1Chat: 1,
                setEnable1v1Chat: 1,
                joinVoIPChat: 1,
                exitVoIPChat: 1,
                updateVoIPChatMuteConfig: 1,
                onVoIPChatMembersChanged: 3,
                onVoIPChatSpeakersChanged: 3,
                onVoIPChatInterrupted: 3,
                offVoIPChatMembersChanged: 3,
                offVoIPChatSpeakersChanged: 3,
                offVoIPChatInterrupted: 3,
                onVoIPVideoMembersChanged: 3,
                offVoIPVideoMembersChanged: 3,
                onVoIPChatStateChanged: 3,
                offVoIPChatStateChanged: 3,
                subscribeVoIPVideoMembers: 1,
                login: 1,
                checkSession: 1,
                authorize: 1,
                getUserInfo: 1,
                getUserProfile: 1,
                requestPayment: 1,
                requestPersonalPay: 1,
                requestFacetoFacePayment: 1,
                requestJointPayment: 0,
                getWCPayOverseaPrepayRequest: 0,
                requestH5Transaction: 0,
                openWCPayOverseaPaymentReceive: 0,
                handleWCPayOverseaWalletBuffer: 0,
                requestVerifyUserIdentity: 0,
                verifyPaymentPassword: 0,
                bindPaymentCard: 0,
                requestPaymentToBank: 0,
                requestVirtualPayment: 0,
                openOfflinePayView: 0,
                openWCPayCardList: 0,
                requestMallPayment: 0,
                requestOrderPayment: 1,
                addCard: 1,
                openCard: 1,
                scanCode: 1,
                openQRCode: 1,
                scanItem: 1,
                chooseAddress: 1,
                saveFile: 1,
                openDocument: 1,
                getSavedFileList: 1,
                getSavedFileInfo: 1,
                getFileInfo: 1,
                removeSavedFile: 1,
                getFileSystemManager: 0,
                chooseContact: 0,
                removeUserCloudStorage: 0,
                setUserCloudStorage: 0,
                makePhoneCall: 1,
                makeVoIPCall: 0,
                onAppRoute: 0,
                onAppRouteDone: 0,
                onAppEnterBackground: 0,
                onAppEnterForeground: 0,
                onAppUnhang: 0,
                onPageReload: 0,
                onPageNotFound: 0,
                onThemeChange: 1,
                offThemeChange: 1,
                createAnimation: 2,
                createInnerAudioContext: 2,
                createAudioContext: 0,
                createVideoContext: 2,
                createMapContext: 2,
                createCameraContext: 2,
                createLivePlayerContext: 2,
                createLivePusherContext: 2,
                onWebviewEvent: 0,
                onNativeEvent: 0,
                hideKeyboard: 0,
                onKeyboardHeightChange: 0,
                offKeyboardHeightChange: 0,
                getPublicLibVersion: 0,
                showModal: 1,
                showToast: 1,
                hideToast: 1,
                showLoading: 1,
                hideLoading: 1,
                showActionSheet: 1,
                reportAnalytics: 0,
                getClipboardData: 1,
                setClipboardData: 1,
                createSelectorQuery: 1,
                createIntersectionObserver: 1,
                updatePerfData: 0,
                traceEvent: 0,
                onMemoryWarning: 0,
                offMemoryWarning: 0,
                getUpdateManager: 2,
                createWorker: 2,
                voiceSplitJoint: 0,
                uploadSilkVoice: 0,
                downloadSilkVoice: 0,
                getResPath: 0,
                setResPath: 0,
                env: 0,
                appStatus: 0,
                hanged: 0,
                getLogManager: 0,
                getRealtimeLogManager: 0,
                onWindowResize: 3,
                offWindowResize: 3,
                setPageOrientation: 1,
                loadFontFace: 1,
                uploadWeRunData: 0,
                addWeRunData: 0,
                setBackgroundColor: 1,
                setBackgroundTextStyle: 1,
                getMenuButtonBoundingClientRect: 1,
                onAppShow: 3,
                offAppShow: 3,
                onAppHide: 3,
                offAppHide: 3,
                onError: 3,
                offError: 3,
                onUnhandledRejection: 3,
                offUnhandledRejection: 3,
                getLaunchOptionsSync: 2,
                getEnterOptionsSync: 2,
                calRqt: 0,
                offPageNotFound: 0,
                getAvailableAudioSources: 1,
                reportMonitor: 1,
                faceVerifyForPay: 1,
                chooseInvoice: 1,
                startDeviceMotionLisstening: 1,
                stopDeviceMotionListening: 1,
                onDeviceMotionChange: 3,
                startGyroscope: 1,
                stopGyroscope: 1,
                onGyroscopeChange: 3,
                setInnerAudioOption: 1,
                secureTunnel: 1,
                startCustomFacialRecognitionVerify: 1,
                startCustomFacialRecognitionVerifyAndUploadVideo: 1,
                getAccountInfoSync: 0,
                setCookies: 1,
                getCookies: 1,
                nextTick: 0,
                chooseMultiMedia: 1,
                chooseMessageFile: 1,
                getLabInfo: 1,
                setLabInfo: 1,
                compressImage: 1,
                enterContact: 1,
                shareAppMessageForFakeNative: 0,
                downloadApp: 0,
                installDownloadApp: 0,
                getAppInstallState: 0,
                queryDownloadAppTask: 0,
                cancelDownloadAppTask: 0,
                resumeDownloadAppTask: 0,
                pauseDownloadAppTask: 0,
                onDownloadAppStateChange: 3,
                downloadAppForIOS: 0,
                offGyroscopeChange: 3,
                offDeviceMotionChange: 3,
                offCompassChange: 3,
                offAccelerometerChange: 3,
                offUserCaptureScreen: 3,
                offNetworkStatusChange: 3,
                offHCEMessage: 3,
                offBeaconUpdate: 3,
                offBeaconServiceChange: 3,
                checkIsOpenAccessibility: 1,
                addPhoneCalendar: 1,
                addPhoneRepeatCalendar: 1,
                updateWeChatApp: 1,
                getRandomValues: 1,
                shareFileMessage: 1,
                shareVideoMessage: 1,
                addFileToFavorites: 1,
                addVideoToFavorites: 1,
                showShareImageMenu: 1,
                searchContacts: 1,
                publishWeChatState: 1
              },
              tap: {
                invokeWebviewMethod: 0,
                drawCanvas: 0,
                createContext: 0,
                createCanvasContext: 0,
                canvasToTempFilePath: 0,
                canvasGetImageData: 0,
                canvasPutImageData: 0,
                getShareInfo: 0,
                pageScrollTo: 0,
                chooseInvoiceTitle: 0,
                ShareInfoStorage: 0,
                arrayBufferToBase64: 0,
                base64ToArrayBuffer: 0,
                openSetting: 10,
                openSettingForPlugin: 10,
                getExtConfig: 0,
                chooseMedia: 0,
                chooseWeChatContact: 0,
                uploadEncryptedFileToCDN: 0,
                onUploadEncryptedFileToCDNProgress: 0,
                getExtConfigSync: 0,
                showShareMenu: 0,
                hideShareMenu: 0,
                updateShareMenu: 0,
                openUrl: 0,
                setNavigationBarColor: 0,
                setNavigationBarAlpha: 0,
                _getRealRoute: 0,
                vibrateShort: 0,
                vibrateLong: 0,
                getSetting: 20,
                checkIsSupportFacialRecognition: 0,
                startFacialRecognitionVerify: 0,
                startFacialRecognitionVerifyAndUploadVideo: 0,
                sendBizRedPacket: 0,
                sendGoldenRedPacket: 0,
                openGoldenRedPacketDetail: 0,
                showRedPackage: 0,
                addPhoneContact: 0,
                setScreenBrightness: 0,
                getScreenBrightness: 0,
                shareToWeRun: 0,
                getWeRunData: 0,
                uploadWeRunData: 0,
                canIUse: 0,
                setPageStyle: 0,
                triggerGettingWidgetData: 0,
                navigateToMiniProgram: 0,
                navigateToDevMiniProgram: 0,
                navigateBackMiniProgram: 0,
                navigateBackNative: 0,
                exitMiniProgram: 40,
                setNavigationBarRightButton: 0,
                onTapNavigationBarRightButton: 0,
                setTopBarText: 0,
                setTabBarBadge: 0,
                removeTabBarBadge: 0,
                showTabBarRedDot: 0,
                hideTabBarRedDot: 0,
                showTabBar: 0,
                hideTabBar: 0,
                setTabBarStyle: 0,
                setTabBarItem: 0,
                setEnableDebug: 0,
                captureScreen: 0,
                onUserCaptureScreen: 0,
                setKeepScreenOn: 0,
                checkIsSupportSoterAuthentication: 0,
                startSoterAuthentication: 0,
                checkIsSoterEnrolledInDevice: 0,
                openDeliveryList: 0,
                reportIDKey: 0,
                reportKeyValue: 0,
                setNavigationBarTitle: 0,
                showNavigationBarLoading: 0,
                hideNavigationBarLoading: 0,
                startPullDownRefresh: 0,
                stopPullDownRefresh: 0,
                operateWXData: 0,
                getOpenDeviceId: 0,
                makeBluetoothPair: 0,
                openBluetoothAdapter: 0,
                closeBluetoothAdapter: 0,
                getBluetoothAdapterState: 0,
                startBluetoothDevicesDiscovery: 0,
                stopBluetoothDevicesDiscovery: 0,
                getBluetoothDevices: 0,
                getConnectedBluetoothDevices: 0,
                createBLEConnection: 0,
                setBLEMTU: 0,
                closeBLEConnection: 0,
                getBLEDeviceServices: 0,
                getBLEDeviceRSSI: 0,
                getBLEDeviceCharacteristics: 0,
                notifyBLECharacteristicValueChanged: 0,
                notifyBLECharacteristicValueChange: 0,
                readBLECharacteristicValue: 0,
                writeBLECharacteristicValue: 0,
                onBluetoothAdapterStateChange: 0,
                onBluetoothDeviceFound: 0,
                onBLEConnectionStateChanged: 0,
                onBLEConnectionStateChange: 0,
                onBLECharacteristicValueChange: 0,
                offBluetoothAdapterStateChange: 0,
                offBluetoothDeviceFound: 0,
                offBLEConnectionStateChanged: 0,
                offBLEConnectionStateChange: 0,
                offBLECharacteristicValueChange: 0,
                createBLEPeripheralServer: 0,
                onBLEPeripheralConnectionStateChanged: 0,
                offBLEPeripheralConnectionStateChanged: 0,
                onLocalServiceFound: 0,
                offLocalServiceFound: 0,
                onLocalServiceLost: 0,
                offLocalServiceLost: 0,
                onLocalServiceDiscoveryStop: 0,
                offLocalServiceDiscoveryStop: 0,
                onLocalServiceResolveFail: 0,
                offLocalServiceResolveFail: 0,
                startBeaconDiscovery: 0,
                stopBeaconDiscovery: 0,
                getBeacons: 0,
                onBeaconUpdate: 0,
                onBeaconServiceChange: 0,
                startWifi: 0,
                stopWifi: 0,
                getWifiList: 0,
                getConnectedWifi: 0,
                connectWifi: 0,
                presetWifiList: 0,
                setWifiList: 0,
                onGetWifiList: 0,
                onWifiConnected: 0,
                offGetWifiList: 0,
                offWifiConnected: 0,
                onEvaluateWifi: 0,
                getHCEState: 0,
                startHCE: 0,
                stopHCE: 0,
                sendHCEMessage: 0,
                onHCEMessage: 0,
                redirectTo: 0,
                reLaunch: 0,
                navigateTo: 0,
                switchTab: 0,
                navigateBack: 0,
                _triggerBeforeUnloadPage: 0,
                _triggerBeforeShareAppMessage: 0,
                navigateBackApplication: 0,
                launchApplication: 0,
                getStorage: 0,
                getStorageSync: 0,
                setStorage: 0,
                setStorageSync: 0,
                removeStorage: 0,
                removeStorageSync: 0,
                clearStorage: 0,
                clearStorageSync: 0,
                getStorageInfo: 0,
                getStorageInfoSync: 0,
                request: 20,
                connectSocket: 0,
                closeSocket: 0,
                sendSocketMessage: 0,
                onSocketOpen: 0,
                onSocketClose: 0,
                onSocketMessage: 0,
                onSocketError: 0,
                uploadFile: 0,
                downloadFile: 20,
                addNativeDownloadTask: 0,
                chooseImage: 0,
                previewImage: 0,
                previewMedia: 0,
                getImageInfo: 0,
                saveImageToPhotosAlbum: 0,
                startRecord: 0,
                stopRecord: 0,
                playVoice: 0,
                pauseVoice: 0,
                stopVoice: 0,
                onVoicePlayEnd: 0,
                chooseVideo: 0,
                saveVideoToPhotosAlbum: 0,
                getVideoInfo: 0,
                compressVideo: 0,
                getLocation: 0,
                openLocation: 0,
                chooseLocation: 0,
                choosePoi: 0,
                onLocationChange: 0,
                offLocationChange: 0,
                onLocationChangeError: 0,
                offLocationChangeError: 0,
                startLocationUpdateBackground: 0,
                startLocationUpdate: 0,
                stopLocationUpdate: 0,
                getNetworkType: 0,
                onNetworkStatusChange: 0,
                getSystemInfo: 0,
                getSystemInfoSync: 0,
                getBatteryInfo: 0,
                getBatteryInfoSync: 0,
                startAccelerometer: 0,
                stopAccelerometer: 0,
                onAccelerometerChange: 0,
                startCompass: 0,
                stopCompass: 0,
                onCompassChange: 0,
                reportAction: 0,
                getBackgroundAudioManager: 0,
                getRecorderManager: 0,
                getBackgroundAudioPlayerState: 0,
                playBackgroundAudio: 0,
                pauseBackgroundAudio: 0,
                seekBackgroundAudio: 0,
                stopBackgroundAudio: 0,
                onBackgroundAudioPlay: 0,
                onBackgroundAudioPause: 0,
                onBackgroundAudioStop: 0,
                login: 0,
                checkSession: 0,
                authorize: 0,
                getUserInfo: 0,
                requestFacetoFacePayment: 0,
                requestPayment: 30,
                requestPersonalPay: 0,
                verifyPaymentPassword: 0,
                bindPaymentCard: 0,
                requestPaymentToBank: 0,
                requestJointPayment: 0,
                getWCPayOverseaPrepayRequest: 0,
                requestH5Transaction: 0,
                openWCPayOverseaPaymentReceive: 0,
                handleWCPayOverseaWalletBuffer: 0,
                requestVerifyUserIdentity: 0,
                requestVirtualPayment: 0,
                openOfflinePayView: 0,
                openWCPayCardList: 0,
                requestMallPayment: 0,
                requestOrderPayment: 30,
                addCard: 0,
                openCard: 0,
                scanCode: 0,
                openQRCode: 0,
                scanItem: 0,
                chooseAddress: 0,
                saveFile: 0,
                openDocument: 0,
                getSavedFileList: 0,
                getSavedFileInfo: 0,
                getFileInfo: 0,
                removeSavedFile: 0,
                getFileSystemManager: 0,
                chooseContact: 0,
                removeUserCloudStorage: 0,
                setUserCloudStorage: 0,
                makePhoneCall: 0,
                makeVoIPCall: 0,
                onAppRoute: 0,
                onAppRouteDone: 0,
                onAppEnterBackground: 0,
                onAppEnterForeground: 0,
                onAppUnhang: 0,
                onPageReload: 0,
                onPageNotFound: 0,
                offPageNotFound: 0,
                onThemeChange: 0,
                offThemeChange: 0,
                onAppShow: 0,
                offAppShow: 0,
                onAppHide: 0,
                offAppHide: 0,
                onError: 0,
                offError: 0,
                onUnhandledRejection: 0,
                offUnhandledRejection: 0,
                getLaunchOptionsSync: 0,
                getEnterOptionsSync: 0,
                createAnimation: 0,
                createInnerAudioContext: 0,
                createAudioContext: 0,
                createVideoContext: 0,
                createMapContext: 0,
                createCameraContext: 0,
                createLivePlayerContext: 0,
                createLivePusherContext: 0,
                onWebviewEvent: 0,
                onNativeEvent: 0,
                hideKeyboard: 0,
                onKeyboardHeightChange: 0,
                offKeyboardHeightChange: 0,
                getPublicLibVersion: 0,
                showModal: 30,
                showToast: 0,
                hideToast: 0,
                showLoading: 0,
                hideLoading: 0,
                showActionSheet: 30,
                reportAnalytics: 0,
                getClipboardData: 0,
                setClipboardData: 0,
                createSelectorQuery: 0,
                createIntersectionObserver: 0,
                updatePerfData: 0,
                traceEvent: 0,
                onMemoryWarning: 0,
                offMemoryWarning: 0,
                getUpdateManager: 0,
                createWorker: 0,
                voiceSplitJoint: 0,
                uploadSilkVoice: 0,
                downloadSilkVoice: 0,
                getResPath: 0,
                setResPath: 0,
                env: 0,
                appStatus: 0,
                hanged: 0,
                getLogManager: 0,
                getRealtimeLogManager: 0,
                onWindowResize: 0,
                offWindowResize: 0,
                setPageOrientation: 0,
                loadFontFace: 0,
                setInnerAudioOption: 0,
                addWeRunData: 0,
                setBackgroundColor: 0,
                setBackgroundTextStyle: 0,
                getMenuButtonBoundingClientRect: 0,
                calRqt: 0,
                getAvailableAudioSources: 0,
                reportMonitor: 0,
                faceVerifyForPay: 0,
                chooseInvoice: 0,
                startDeviceMotionListening: 0,
                stopDeviceMotionListening: 0,
                onDeviceMotionChange: 0,
                startGyroscope: 0,
                stopGyroscope: 0,
                onGyroscopeChange: 0,
                secureTunnel: 0,
                startCustomFacialRecognitionVerify: 0,
                startCustomFacialRecognitionVerifyAndUploadVideo: 0,
                getAccountInfo: 0,
                nextTick: 0,
                setCookies: 0,
                getCookies: 0,
                getAccountInfoSync: 0,
                chooseMultiMedia: 0,
                join1v1Chat: 0,
                setEnable1v1Chat: 0,
                joinVoIPChat: 0,
                exitVoIPChat: 0,
                updateVoIPChatMuteConfig: 0,
                onVoIPChatMembersChanged: 0,
                onVoIPChatSpeakersChanged: 0,
                onVoIPChatInterrupted: 0,
                offVoIPChatMembersChanged: 0,
                offVoIPChatSpeakersChanged: 0,
                offVoIPChatInterrupted: 0,
                onVoIPVideoMembersChanged: 0,
                offVoIPVideoMembersChanged: 0,
                onVoIPChatStateChanged: 0,
                offVoIPChatStateChanged: 0,
                subscribeVoIPVideoMembers: 0,
                getBackgroundFetchData: 0,
                onBackgroundFetchData: 0,
                chooseMessageFile: 0,
                getLabInfo: 0,
                setLabInfo: 0,
                compressImage: 0,
                startLocalServiceDiscovery: 0,
                stopLocalServiceDiscovery: 0,
                enterContact: 0,
                shareAppMessageForFakeNative: 0,
                downloadApp: 0,
                installDownloadApp: 0,
                getAppInstallState: 0,
                queryDownloadAppTask: 0,
                cancelDownloadAppTask: 0,
                resumeDownloadAppTask: 0,
                pauseDownloadAppTask: 0,
                onDownloadAppStateChange: 0,
                downloadAppForIOS: 0,
                offGyroscopeChange: 0,
                offDeviceMotionChange: 0,
                offCompassChange: 0,
                offAccelerometerChange: 0,
                offUserCaptureScreen: 0,
                offNetworkStatusChange: 0,
                offHCEMessage: 0,
                offBeaconUpdate: 0,
                offBeaconServiceChange: 0,
                requestSubscribeMessage: 40,
                hideHomeButton: 0,
                checkIsOpenAccessibility: 0,
                updateWeChatApp: 0,
                openChannelsLive: 40,
                openChannelsActivity: 40,
                openChannelsUserProfile: 40,
                addPhoneCalendar: 40,
                addPhoneRepeatCalendar: 40,
                getRandomValues: 0,
                showShareImageMenu: 0,
                shareFileMessage: 40,
                shareVideoMessage: 40,
                addFileToFavorites: 40,
                addVideoToFavorites: 40,
                getUserProfile: 40,
                searchContacts: 40,
                publishWeChatState: 40,
                openCustomerServiceChat: 40
              },
              singlePage: {
                invokeWebviewMethod: 0,
                drawCanvas: 10,
                createContext: 10,
                createCanvasContext: 10,
                canvasToTempFilePath: 10,
                canvasGetImageData: 10,
                canvasPutImageData: 10,
                getShareInfo: 0,
                pageScrollTo: 10,
                chooseInvoiceTitle: 1,
                ShareInfoStorage: 0,
                arrayBufferToBase64: 0,
                base64ToArrayBuffer: 0,
                openSetting: 1,
                openSettingForPlugin: 1,
                getExtConfig: 10,
                chooseMedia: 1,
                chooseWeChatContact: 1,
                uploadEncryptedFileToCDN: 0,
                onUploadEncryptedFileToCDNProgress: 0,
                getExtConfigSync: 10,
                showShareMenu: 0,
                hideShareMenu: 0,
                updateShareMenu: 0,
                openUrl: 0,
                setNavigationBarColor: 0,
                setNavigationBarAlpha: 0,
                hideHomeButton: 0,
                _getRealRoute: 0,
                vibrateShort: 10,
                vibrateLong: 10,
                getSetting: 0,
                checkIsSupportFacialRecognition: 0,
                startFacialRecognitionVerify: 0,
                startFacialRecognitionVerifyAndUploadVideo: 0,
                sendBizRedPacket: 0,
                sendGoldenRedPacket: 0,
                openGoldenRedPacketDetail: 0,
                showRedPackage: 0,
                addPhoneContact: 1,
                setScreenBrightness: 10,
                getScreenBrightness: 10,
                getWeRunData: 0,
                uploadWeRunData: 0,
                addWeRunData: 0,
                canIUse: 10,
                setPageStyle: 0,
                triggerGettingWidgetData: 0,
                navigateToMiniProgram: 1,
                navigateToDevMiniProgram: 0,
                navigateBackMiniProgram: 1,
                exitMiniProgram: 1,
                setNavigationBarRightButton: 0,
                onTapNavigationBarRightButton: 0,
                setTopBarText: 0,
                setTabBarBadge: 0,
                removeTabBarBadge: 0,
                showTabBarRedDot: 0,
                hideTabBarRedDot: 0,
                showTabBar: 0,
                hideTabBar: 0,
                setTabBarStyle: 0,
                setTabBarItem: 0,
                setEnableDebug: 10,
                captureScreen: 0,
                onUserCaptureScreen: 10,
                offUserCaptureScreen: 10,
                setKeepScreenOn: 10,
                checkIsSupportSoterAuthentication: 0,
                startSoterAuthentication: 1,
                checkIsSoterEnrolledInDevice: 0,
                openDeliveryList: 0,
                reportIDKey: 0,
                reportKeyValue: 0,
                setNavigationBarTitle: 0,
                showNavigationBarLoading: 0,
                hideNavigationBarLoading: 0,
                startPullDownRefresh: 10,
                stopPullDownRefresh: 10,
                operateWXData: 10,
                getOpenDeviceId: 0,
                openBluetoothAdapter: 0,
                closeBluetoothAdapter: 0,
                getBluetoothAdapterState: 0,
                startBluetoothDevicesDiscovery: 0,
                stopBluetoothDevicesDiscovery: 0,
                getBluetoothDevices: 0,
                getConnectedBluetoothDevices: 0,
                createBLEConnection: 0,
                setBLEMTU: 0,
                closeBLEConnection: 0,
                getBLEDeviceServices: 0,
                getBLEDeviceCharacteristics: 0,
                notifyBLECharacteristicValueChanged: 0,
                notifyBLECharacteristicValueChange: 0,
                readBLECharacteristicValue: 0,
                writeBLECharacteristicValue: 0,
                onBluetoothAdapterStateChange: 0,
                onBluetoothDeviceFound: 0,
                onBLEConnectionStateChanged: 0,
                onBLEConnectionStateChange: 0,
                onBLECharacteristicValueChange: 0,
                offBluetoothAdapterStateChange: 0,
                offBluetoothDeviceFound: 0,
                offBLEConnectionStateChanged: 0,
                offBLEConnectionStateChange: 0,
                offBLECharacteristicValueChange: 0,
                createBLEPeripheralServer: 0,
                onBLEPeripheralConnectionStateChanged: 0,
                offBLEPeripheralConnectionStateChanged: 0,
                startBeaconDiscovery: 0,
                stopBeaconDiscovery: 0,
                getBeacons: 0,
                onBeaconUpdate: 0,
                offBeaconUpdate: 0,
                onBeaconServiceChange: 0,
                offBeaconServiceChange: 0,
                startWifi: 0,
                stopWifi: 0,
                getWifiList: 0,
                getConnectedWifi: 0,
                connectWifi: 0,
                presetWifiList: 0,
                setWifiList: 0,
                onGetWifiList: 0,
                onWifiConnected: 0,
                offGetWifiList: 0,
                offWifiConnected: 0,
                onEvaluateWifi: 0,
                getHCEState: 0,
                startHCE: 0,
                stopHCE: 0,
                sendHCEMessage: 0,
                onHCEMessage: 0,
                offHCEMessage: 0,
                startLocalServiceDiscovery: 0,
                stopLocalServiceDiscovery: 0,
                onLocalServiceFound: 0,
                offLocalServiceFound: 0,
                onLocalServiceLost: 0,
                offLocalServiceLost: 0,
                onLocalServiceDiscoveryStop: 0,
                offLocalServiceDiscoveryStop: 0,
                onLocalServiceResolveFail: 0,
                offLocalServiceResolveFail: 0,
                redirectTo: 1,
                reLaunch: 1,
                navigateTo: 1,
                switchTab: 1,
                navigateBack: 1,
                _triggerBeforeUnloadPage: 0,
                _triggerBeforeShareAppMessage: 0,
                navigateBackApplication: 1,
                navigateBackNative: 1,
                launchApplication: 1,
                getStorage: 10,
                getStorageSync: 10,
                setStorage: 10,
                setStorageSync: 10,
                removeStorage: 10,
                removeStorageSync: 10,
                clearStorage: 10,
                clearStorageSync: 10,
                getStorageInfo: 10,
                getStorageInfoSync: 10,
                getBackgroundFetchData: 0,
                onBackgroundFetchData: 0,
                request: 10,
                connectSocket: 10,
                closeSocket: 10,
                sendSocketMessage: 10,
                onSocketOpen: 10,
                onSocketClose: 10,
                onSocketMessage: 10,
                onSocketError: 10,
                uploadFile: 10,
                downloadFile: 10,
                addNativeDownloadTask: 0,
                chooseImage: 1,
                previewImage: 10,
                getImageInfo: 10,
                saveImageToPhotosAlbum: 1,
                startRecord: 0,
                stopRecord: 0,
                playVoice: 0,
                pauseVoice: 0,
                stopVoice: 0,
                onVoicePlayEnd: 0,
                chooseVideo: 1,
                saveVideoToPhotosAlbum: 1,
                getVideoInfo: 0,
                compressVideo: 0,
                getLocation: 10,
                openLocation: 1,
                chooseLocation: 1,
                choosePoi: 1,
                enableLocationUpdateBackground: 0,
                enableLocationUpdate: 0,
                disableLocationUpdate: 0,
                onLocationChange: 0,
                offLocationChange: 0,
                onLocationChangeError: 0,
                offLocationChangeError: 0,
                startLocationUpdateBackground: 0,
                startLocationUpdate: 0,
                stopLocationUpdate: 0,
                getNetworkType: 10,
                onAppRoute: 0,
                onAppRouteDone: 0,
                onAppEnterBackground: 0,
                onAppEnterForeground: 0,
                onAppUnhang: 0,
                onPageReload: 0,
                onPageNotFound: 10,
                offPageNotFound: 10,
                onAudioInterruptionBegin: 10,
                offAudioInterruptionBegin: 10,
                onAudioInterruptionEnd: 10,
                offAudioInterruptionEnd: 10,
                onThemeChange: 10,
                offThemeChange: 10,
                onAppShow: 10,
                offAppShow: 10,
                onAppHide: 10,
                offAppHide: 10,
                onError: 10,
                offError: 10,
                onUnhandledRejection: 10,
                offUnhandledRejection: 10,
                getLaunchOptionsSync: 10,
                getEnterOptionsSync: 10,
                createAnimation: 10,
                createInnerAudioContext: 10,
                createAudioContext: 0,
                createVideoContext: 10,
                createMapContext: 10,
                createCameraContext: 0,
                createLivePlayerContext: 10,
                createLivePusherContext: 0,
                onWebviewEvent: 10,
                onNativeEvent: 10,
                hideKeyboard: 0,
                onKeyboardHeightChange: 10,
                offKeyboardHeightChange: 10,
                getPublicLibVersion: 0,
                showModal: 10,
                showToast: 10,
                hideToast: 10,
                showLoading: 10,
                hideLoading: 10,
                showActionSheet: 10,
                reportAnalytics: 10,
                getClipboardData: 0,
                setClipboardData: 0,
                createSelectorQuery: 10,
                createIntersectionObserver: 10,
                updatePerfData: 0,
                traceEvent: 0,
                onMemoryWarning: 10,
                offMemoryWarning: 10,
                getUpdateManager: 0,
                createWorker: 10,
                voiceSplitJoint: 0,
                uploadSilkVoice: 0,
                downloadSilkVoice: 0,
                getResPath: 0,
                setResPath: 0,
                env: 10,
                appStatus: 0,
                hanged: 0,
                getLogManager: 10,
                getRealtimeLogManager: 10,
                onWindowResize: 10,
                offWindowResize: 10,
                loadFontFace: 10,
                setInnerAudioOption: 10,
                setBackgroundColor: 10,
                setBackgroundTextStyle: 10,
                getMenuButtonBoundingClientRect: 10,
                calRqt: 0,
                onNetworkStatusChange: 10,
                offNetworkStatusChange: 10,
                getSystemInfo: 10,
                getSystemInfoSync: 10,
                getBatteryInfo: 10,
                getBatteryInfoSync: 10,
                startAccelerometer: 10,
                stopAccelerometer: 10,
                onAccelerometerChange: 10,
                offAccelerometerChange: 10,
                startCompass: 10,
                stopCompass: 10,
                onCompassChange: 10,
                offCompassChange: 10,
                reportAction: 0,
                getBackgroundAudioManager: 10,
                getRecorderManager: 10,
                getBackgroundAudioPlayerState: 10,
                playBackgroundAudio: 0,
                pauseBackgroundAudio: 0,
                seekBackgroundAudio: 0,
                stopBackgroundAudio: 0,
                onBackgroundAudioPlay: 0,
                onBackgroundAudioPause: 0,
                onBackgroundAudioStop: 0,
                joinVoIPChat: 0,
                exitVoIPChat: 0,
                updateVoIPChatMuteConfig: 0,
                onVoIPChatMembersChanged: 0,
                onVoIPChatSpeakersChanged: 0,
                onVoIPChatInterrupted: 0,
                offVoIPChatMembersChanged: 0,
                offVoIPChatSpeakersChanged: 0,
                offVoIPChatInterrupted: 0,
                login: 0,
                checkSession: 0,
                authorize: 1,
                getUserInfo: 1,
                getUserProfile: 1,
                requestPayment: 0,
                requestPersonalPay: 0,
                verifyPaymentPassword: 0,
                bindPaymentCard: 0,
                requestPaymentToBank: 0,
                requestJointPayment: 0,
                getWCPayOverseaPrepayRequest: 0,
                requestH5Transaction: 0,
                openWCPayOverseaPaymentReceive: 0,
                handleWCPayOverseaWalletBuffer: 0,
                requestVerifyUserIdentity: 0,
                requestVirtualPayment: 0,
                openOfflinePayView: 0,
                openWCPayCardList: 0,
                requestMallPayment: 0,
                requestMidasPayment: 0,
                requestOrderPayment: 0,
                addCard: 1,
                openCard: 1,
                scanCode: 1,
                openQRCode: 0,
                scanItem: 1,
                chooseAddress: 1,
                saveFile: 10,
                openDocument: 1,
                getSavedFileList: 10,
                getSavedFileInfo: 10,
                getFileInfo: 10,
                removeSavedFile: 10,
                getFileSystemManager: 10,
                chooseContact: 0,
                removeUserCloudStorage: 0,
                setUserCloudStorage: 0,
                makePhoneCall: 1,
                makeVoIPCall: 0,
                getAvailableAudioSources: 10,
                reportMonitor: 10,
                getAccountInfoSync: 10,
                faceVerifyForPay: 0,
                chooseInvoice: 1,
                startDeviceMotionListening: 10,
                stopDeviceMotionListening: 10,
                onDeviceMotionChange: 10,
                offDeviceMotionChange: 10,
                startGyroscope: 10,
                stopGyroscope: 10,
                onGyroscopeChange: 10,
                offGyroscopeChange: 10,
                secureTunnel: 0,
                startCustomFacialRecognitionVerify: 0,
                startCustomFacialRecognitionVerifyAndUploadVideo: 0,
                loadSubpackage: 0,
                getABTestConfig: 0,
                openChattingUI: 0,
                delRemindMsg: 0,
                searchContacts: 0,
                invoke: 0,
                on: 0,
                chooseMessageFile: 1,
                nextTick: 10,
                setCookies: 0,
                getCookies: 0,
                compressImage: 0,
                chooseMultiMedia: 0,
                getLabInfo: 0,
                setLabInfo: 0,
                enterContact: 0,
                shareAppMessageForFakeNative: 0,
                downloadApp: 0,
                installDownloadApp: 0,
                getAppInstallState: 0,
                queryDownloadAppTask: 0,
                cancelDownloadAppTask: 0,
                resumeDownloadAppTask: 0,
                pauseDownloadAppTask: 0,
                onDownloadAppStateChange: 0,
                downloadAppForIOS: 0,
                getDownloadWidgetTaskInfos: 0,
                jumpDownloaderWidget: 0,
                createOffscreenCanvas: 10,
                getSelectedTextRange: 10,
                version: 10,
                cloud: 10,
                createInterstitialAd: 0,
                createRewardedVideoAd: 0,
                error: 10,
                serviceMarket: 10,
                getNativeUserInfo: 10,
                getPerformance: 10,
                reportPerformance: 10,
                createUDPSocket: 0,
                createBufferURL: 10,
                revokeBufferURL: 10
              },
              thirdApp: {
                invokeWebviewMethod: 10,
                drawCanvas: 10,
                createContext: 10,
                createCanvasContext: 10,
                canvasToTempFilePath: 10,
                canvasGetImageData: 10,
                canvasPutImageData: 10,
                getShareInfo: 10,
                pageScrollTo: 10,
                chooseInvoiceTitle: 10,
                ShareInfoStorage: 10,
                arrayBufferToBase64: 10,
                base64ToArrayBuffer: 10,
                openSetting: 10,
                openSettingForPlugin: 10,
                getExtConfig: 10,
                chooseMedia: 10,
                chooseWeChatContact: 1,
                uploadEncryptedFileToCDN: 0,
                onUploadEncryptedFileToCDNProgress: 0,
                getExtConfigSync: 10,
                showShareMenu: 10,
                hideShareMenu: 10,
                updateShareMenu: 10,
                openUrl: 0,
                setNavigationBarColor: 10,
                setNavigationBarAlpha: 10,
                hideHomeButton: 10,
                _getRealRoute: 10,
                vibrateShort: 10,
                vibrateLong: 10,
                getSetting: 10,
                checkIsSupportFacialRecognition: 0,
                startFacialRecognitionVerify: 0,
                startFacialRecognitionVerifyAndUploadVideo: 0,
                sendBizRedPacket: 0,
                sendGoldenRedPacket: 0,
                openGoldenRedPacketDetail: 0,
                showRedPackage: 0,
                addPhoneContact: 10,
                setScreenBrightness: 10,
                getScreenBrightness: 10,
                getWeRunData: 10,
                uploadWeRunData: 10,
                addWeRunData: 10,
                canIUse: 10,
                setPageStyle: 10,
                triggerGettingWidgetData: 0,
                navigateToMiniProgram: 10,
                navigateToDevMiniProgram: 10,
                navigateBackMiniProgram: 10,
                exitMiniProgram: 10,
                setNavigationBarRightButton: 0,
                onTapNavigationBarRightButton: 0,
                setTopBarText: 0,
                setTabBarBadge: 10,
                removeTabBarBadge: 10,
                showTabBarRedDot: 10,
                hideTabBarRedDot: 10,
                showTabBar: 10,
                hideTabBar: 10,
                setTabBarStyle: 10,
                setTabBarItem: 10,
                setEnableDebug: 10,
                captureScreen: 0,
                onUserCaptureScreen: 10,
                offUserCaptureScreen: 10,
                setKeepScreenOn: 10,
                checkIsSupportSoterAuthentication: 1,
                startSoterAuthentication: 1,
                checkIsSoterEnrolledInDevice: 1,
                openDeliveryList: 0,
                reportIDKey: 10,
                reportKeyValue: 10,
                setNavigationBarTitle: 10,
                showNavigationBarLoading: 10,
                hideNavigationBarLoading: 10,
                startPullDownRefresh: 10,
                stopPullDownRefresh: 10,
                operateWXData: 10,
                getOpenDeviceId: 0,
                openBluetoothAdapter: 10,
                closeBluetoothAdapter: 10,
                getBluetoothAdapterState: 10,
                startBluetoothDevicesDiscovery: 10,
                stopBluetoothDevicesDiscovery: 10,
                getBluetoothDevices: 10,
                getConnectedBluetoothDevices: 10,
                createBLEConnection: 10,
                setBLEMTU: 10,
                closeBLEConnection: 10,
                getBLEDeviceServices: 10,
                getBLEDeviceCharacteristics: 10,
                notifyBLECharacteristicValueChanged: 10,
                notifyBLECharacteristicValueChange: 10,
                readBLECharacteristicValue: 10,
                writeBLECharacteristicValue: 10,
                onBluetoothAdapterStateChange: 10,
                onBluetoothDeviceFound: 10,
                onBLEConnectionStateChanged: 10,
                onBLEConnectionStateChange: 10,
                onBLECharacteristicValueChange: 10,
                offBluetoothAdapterStateChange: 10,
                offBluetoothDeviceFound: 10,
                offBLEConnectionStateChanged: 10,
                offBLEConnectionStateChange: 10,
                offBLECharacteristicValueChange: 10,
                createBLEPeripheralServer: 10,
                onBLEPeripheralConnectionStateChanged: 10,
                offBLEPeripheralConnectionStateChanged: 10,
                startBeaconDiscovery: 10,
                stopBeaconDiscovery: 10,
                getBeacons: 10,
                onBeaconUpdate: 10,
                offBeaconUpdate: 10,
                onBeaconServiceChange: 10,
                offBeaconServiceChange: 10,
                startWifi: 10,
                stopWifi: 10,
                getWifiList: 10,
                getConnectedWifi: 10,
                connectWifi: 10,
                presetWifiList: 10,
                setWifiList: 10,
                onGetWifiList: 10,
                onWifiConnected: 10,
                offGetWifiList: 10,
                offWifiConnected: 10,
                onEvaluateWifi: 10,
                getHCEState: 10,
                startHCE: 10,
                stopHCE: 10,
                sendHCEMessage: 10,
                onHCEMessage: 10,
                offHCEMessage: 10,
                startLocalServiceDiscovery: 10,
                stopLocalServiceDiscovery: 10,
                onLocalServiceFound: 10,
                offLocalServiceFound: 10,
                onLocalServiceLost: 10,
                offLocalServiceLost: 10,
                onLocalServiceDiscoveryStop: 10,
                offLocalServiceDiscoveryStop: 10,
                onLocalServiceResolveFail: 10,
                offLocalServiceResolveFail: 10,
                redirectTo: 10,
                reLaunch: 10,
                navigateTo: 10,
                switchTab: 10,
                navigateBack: 10,
                _triggerBeforeUnloadPage: 0,
                _triggerBeforeShareAppMessage: 0,
                navigateBackApplication: 1,
                navigateBackNative: 1,
                launchApplication: 1,
                getStorage: 10,
                getStorageSync: 10,
                setStorage: 10,
                setStorageSync: 10,
                removeStorage: 10,
                removeStorageSync: 10,
                clearStorage: 10,
                clearStorageSync: 10,
                getStorageInfo: 10,
                getStorageInfoSync: 10,
                getBackgroundFetchData: 10,
                onBackgroundFetchData: 10,
                request: 10,
                connectSocket: 10,
                closeSocket: 10,
                sendSocketMessage: 10,
                onSocketOpen: 10,
                onSocketClose: 10,
                onSocketMessage: 10,
                onSocketError: 10,
                uploadFile: 10,
                downloadFile: 10,
                addNativeDownloadTask: 0,
                chooseImage: 10,
                previewImage: 10,
                getImageInfo: 10,
                saveImageToPhotosAlbum: 10,
                startRecord: 10,
                stopRecord: 10,
                playVoice: 10,
                pauseVoice: 10,
                stopVoice: 10,
                onVoicePlayEnd: 10,
                chooseVideo: 10,
                saveVideoToPhotosAlbum: 10,
                getVideoInfo: 10,
                compressVideo: 10,
                getLocation: 10,
                openLocation: 10,
                chooseLocation: 10,
                choosePoi: 10,
                enableLocationUpdateBackground: 10,
                enableLocationUpdate: 10,
                disableLocationUpdate: 10,
                onLocationChange: 10,
                offLocationChange: 10,
                onLocationChangeError: 10,
                offLocationChangeError: 10,
                startLocationUpdateBackground: 10,
                startLocationUpdate: 10,
                stopLocationUpdate: 10,
                getNetworkType: 10,
                onAppRoute: 10,
                onAppRouteDone: 10,
                onAppEnterBackground: 10,
                onAppEnterForeground: 10,
                onAppUnhang: 10,
                onPageReload: 10,
                onPageNotFound: 10,
                offPageNotFound: 10,
                onAudioInterruptionBegin: 10,
                offAudioInterruptionBegin: 10,
                onAudioInterruptionEnd: 10,
                offAudioInterruptionEnd: 10,
                onThemeChange: 10,
                offThemeChange: 10,
                onAppShow: 10,
                offAppShow: 10,
                onAppHide: 10,
                offAppHide: 10,
                onError: 10,
                offError: 10,
                onUnhandledRejection: 10,
                offUnhandledRejection: 10,
                getLaunchOptionsSync: 10,
                getEnterOptionsSync: 10,
                createAnimation: 10,
                createInnerAudioContext: 10,
                createAudioContext: 10,
                createVideoContext: 10,
                createMapContext: 10,
                createCameraContext: 10,
                createLivePlayerContext: 10,
                createLivePusherContext: 10,
                onWebviewEvent: 10,
                onNativeEvent: 10,
                hideKeyboard: 10,
                onKeyboardHeightChange: 10,
                offKeyboardHeightChange: 10,
                getPublicLibVersion: 10,
                showModal: 10,
                showToast: 10,
                hideToast: 10,
                showLoading: 10,
                hideLoading: 10,
                showActionSheet: 10,
                reportAnalytics: 10,
                getClipboardData: 10,
                setClipboardData: 10,
                createSelectorQuery: 10,
                createIntersectionObserver: 10,
                updatePerfData: 10,
                traceEvent: 10,
                onMemoryWarning: 10,
                offMemoryWarning: 10,
                getUpdateManager: 10,
                createWorker: 10,
                voiceSplitJoint: 0,
                uploadSilkVoice: 0,
                downloadSilkVoice: 0,
                getResPath: 0,
                setResPath: 0,
                env: 10,
                appStatus: 10,
                hanged: 10,
                getLogManager: 10,
                getRealtimeLogManager: 10,
                onWindowResize: 10,
                offWindowResize: 10,
                loadFontFace: 10,
                setInnerAudioOption: 10,
                setBackgroundColor: 10,
                setBackgroundTextStyle: 10,
                getMenuButtonBoundingClientRect: 10,
                calRqt: 0,
                onNetworkStatusChange: 10,
                offNetworkStatusChange: 10,
                getSystemInfo: 10,
                getSystemInfoSync: 10,
                getBatteryInfo: 10,
                getBatteryInfoSync: 10,
                startAccelerometer: 10,
                stopAccelerometer: 10,
                onAccelerometerChange: 10,
                offAccelerometerChange: 10,
                startCompass: 10,
                stopCompass: 10,
                onCompassChange: 10,
                offCompassChange: 10,
                reportAction: 10,
                getBackgroundAudioManager: 10,
                getRecorderManager: 10,
                getBackgroundAudioPlayerState: 10,
                playBackgroundAudio: 10,
                pauseBackgroundAudio: 10,
                seekBackgroundAudio: 10,
                stopBackgroundAudio: 10,
                onBackgroundAudioPlay: 10,
                onBackgroundAudioPause: 10,
                onBackgroundAudioStop: 10,
                joinVoIPChat: 1,
                exitVoIPChat: 1,
                updateVoIPChatMuteConfig: 1,
                onVoIPChatMembersChanged: 0,
                onVoIPChatSpeakersChanged: 0,
                onVoIPChatInterrupted: 0,
                offVoIPChatMembersChanged: 0,
                offVoIPChatSpeakersChanged: 0,
                offVoIPChatInterrupted: 0,
                login: 10,
                checkSession: 10,
                authorize: 10,
                getUserInfo: 10,
                getUserProfile: 10,
                requestPayment: 10,
                verifyPaymentPassword: 0,
                bindPaymentCard: 0,
                requestPersonalPay: 0,
                requestPaymentToBank: 0,
                requestJointPayment: 0,
                getWCPayOverseaPrepayRequest: 0,
                requestH5Transaction: 0,
                openWCPayOverseaPaymentReceive: 0,
                handleWCPayOverseaWalletBuffer: 0,
                requestVerifyUserIdentity: 0,
                requestVirtualPayment: 0,
                openOfflinePayView: 0,
                openWCPayCardList: 0,
                requestMallPayment: 0,
                requestOrderPayment: 10,
                addCard: 10,
                openCard: 10,
                scanCode: 10,
                openQRCode: 0,
                chooseAddress: 10,
                saveFile: 10,
                openDocument: 10,
                getSavedFileList: 10,
                getSavedFileInfo: 10,
                getFileInfo: 10,
                removeSavedFile: 10,
                getFileSystemManager: 10,
                chooseContact: 0,
                removeUserCloudStorage: 0,
                setUserCloudStorage: 0,
                makePhoneCall: 10,
                makeVoIPCall: 0,
                getAvailableAudioSources: 10,
                reportMonitor: 10,
                getAccountInfoSync: 10,
                faceVerifyForPay: 0,
                chooseInvoice: 10,
                startDeviceMotionListening: 10,
                stopDeviceMotionListening: 10,
                onDeviceMotionChange: 10,
                offDeviceMotionChange: 10,
                startGyroscope: 10,
                stopGyroscope: 10,
                onGyroscopeChange: 10,
                offGyroscopeChange: 10,
                secureTunnel: 0,
                startCustomFacialRecognitionVerify: 0,
                startCustomFacialRecognitionVerifyAndUploadVideo: 0,
                loadSubpackage: 10,
                getABTestConfig: 10,
                openChattingUI: 0,
                delRemindMsg: 0,
                searchContacts: 0,
                invoke: 0,
                on: 0,
                chooseMessageFile: 1,
                nextTick: 10,
                setCookies: 0,
                getCookies: 0,
                compressImage: 10,
                chooseMultiMedia: 10,
                getLabInfo: 0,
                setLabInfo: 0,
                enterContact: 10,
                shareAppMessageForFakeNative: 0,
                downloadApp: 0,
                installDownloadApp: 0,
                getAppInstallState: 0,
                queryDownloadAppTask: 0,
                cancelDownloadAppTask: 0,
                resumeDownloadAppTask: 0,
                pauseDownloadAppTask: 0,
                onDownloadAppStateChange: 0,
                downloadAppForIOS: 0,
                getDownloadWidgetTaskInfos: 0,
                jumpDownloaderWidget: 0,
                createOffscreenCanvas: 10,
                getSelectedTextRange: 10,
                version: 10,
                cloud: 10,
                createInterstitialAd: 10,
                createRewardedVideoAd: 10,
                error: 10,
                serviceMarket: 10,
                openBusinessView: 10,
                requestMidasPayment: 10,
                modifyFriendInteractiveStorage: 0,
                getUserInteractiveStorage: 0,
                getUserCloudStorage: 0,
                getPotentialFriendList: 0,
                getGroupInfo: 0,
                getGroupCloudStorage: 0,
                getFriendCloudStorage: 0,
                createGridAd: 10,
                createBannerAd: 10
              }
            },
            i = (e, t) => a[t][e];
          var s = n(665),
            c = n(1095),
            l = n(1106);

          function u(e) {
            const t = i(e, "thirdApp");
            return 0 !== t && 1 !== t || !(0, c.isIn3rdApp)() || 1 === t && h() && (0, l.IN)("showToast", {
              icon: "",
              title: "暂不支持当前功能",
              duration: 2500
            }), !0
          }
          let d = !1;

          function p() {
            setTimeout((() => {
              d = !1
            }), 0)
          }

          function f(e) {
            return (...t) => {
              if (4 === s.Z.appType) return d = "tap" === "tap", e.apply(this, t), void p();
              __virtualDOM__.wrapTapMark((() => {
                e.apply(this, t)
              }))
            }
          }

          function h() {
            return 4 === s.Z.appType ? d : d || __virtualDOM__.checkTapMark()
          }

          function g(e, t) {
            return function (n, ...a) {
              const u = i(e, "tap"),
                d = h();
              let g = n;
              if (10 === u && !d && ((0, r.Y)({
                  name: e,
                  scene: 0,
                  strategy: 1
                }), o.IS_DEVTOOLS || !(0, c.checkAPIAvailable)(e))) return void(n && (n.fail || n.complete) && setTimeout((() => {
                (0, l.YG)(e, n, "can only be invoked by user TAP gesture.")
              }), 0));
              if ((20 === u && d || 30 === u) && ("function" == typeof n ? g = f.call(this, n) : "object" == typeof n && (g = Object.assign({}, n), ["success", "fail", "complete"].forEach((e => {
                  "function" == typeof g[e] && (g[e] = f.call(this, g[e]))
                })))), 40 === u && 4 !== s.Z.appType && !d) return void(n && (n.fail || n.complete) && setTimeout((() => {
                (0, l.YG)(e, n, "can only be invoked by user TAP gesture.")
              }), 0));
              const y = t.apply(this, [g].concat(a));
              return 4 === s.Z.appType && [10, 30, 40].includes(u) && p(), y
            }
          }
        },
        4532: (e, t, n) => {
          "use strict";
          n.d(t, {
            w$: () => o
          });
          const o = {
            FORE_GROUND: 0,
            BACK_GROUND: 1,
            LOCK: 2
          }
        },
        2851: (e, t, n) => {
          "use strict";
          n.d(t, {
            Z: () => o
          });
          const o = {
            lastRoute: "",
            lastOpenType: "",
            query: {},
            runningStatus: "active",
            navigatorLock: !1,
            openUrlLock: !1,
            possessingBackgroundAudioPlayer: !1,
            webviewEventCallback: null,
            hanged: !1,
            appStatus: n(4532).w$.FORE_GROUND,
            navigationBarTitleMap: {},
            currentNetworkType: ""
          }
        },
        5260: (e, t, n) => {
          "use strict";
          n.d(t, {
            Em: () => r.Em,
            sd: () => c,
            S0: () => l,
            p9: () => u,
            HR: () => d,
            cE: () => p,
            mQ: () => f,
            f0: () => h,
            Z8: () => g,
            l0: () => y,
            iZ: () => v,
            l7: () => m,
            Nf: () => _,
            M8: () => w,
            AK: () => I,
            El: () => S,
            Ky: () => A
          });
          var o = n(665),
            r = n(7452),
            a = (n(2582), n(1661));
          const i = /^[-+a-zA-Z0-9]+:\/\//,
            s = /^__[-+a-zA-Z0-9]+__\//;

          function c(e, t, n = !0) {
            if (n && (t = function (e) {
                if ("string" != typeof e) return e; {
                  let t = e.split("?")[0];
                  const n = e.split("?")[1];
                  return t += ".html", void 0 !== n ? `${t}?${n}` : t
                }
              }(t)), 0 === t.indexOf("/")) return t.substr(1);
            if (0 === t.indexOf("./")) return c(e, t.substr(2), !1); {
              const n = t.split("/");
              let o, r;
              for (o = 0, r = n.length; o < r && ".." === n[o]; o++);
              n.splice(0, o);
              const a = e.length > 0 ? e.split("/") : [];
              a.splice(a.length - o - 1, o + 1);
              const i = a.concat(n).join("/");
              return i
            }
          }

          function l(e) {
            const t = e.match(i);
            if (!t) return e;
            const n = t[0];
            if ("plugin://" === n) {
              const t = n.length,
                r = e.indexOf("/", t);
              if (r >= 0) {
                const n = e.slice(t, r),
                  a = o.Z.plugins && o.Z.plugins[n] ? o.Z.plugins[n].provider : n;
                e = e.slice(0, t) + a + e.slice(r)
              }
              let a = e.indexOf("?");
              a < 0 && (a = e.length);
              const i = e.slice(0, a),
                s = exparser.Component._list[i];
              if (!s) throw new y(`Page "${i}" is not found`);
              e = s.is + e.slice(a)
            } else if ("plugin-private://" === n) {
              let t = e.indexOf("?");
              t < 0 && (t = e.length);
              const n = e.slice(0, t);
              e = "/" + __appServiceEngine__.convertComponentAliasToRoute(n) + e.slice(t)
            } else {
              if ("wx://" !== n) throw new y(`Unknown URL protocol "${n}"`);
              e = "/__wx__/" + e.slice(5)
            }
            return e
          }

          function u(e) {
            const t = e.match(i),
              n = e.match(s);
            let r = "";
            if (t) {
              const n = t[0];
              if ("plugin://" === n) {
                const t = n.length,
                  a = e.indexOf("/", t);
                if (a >= 0) {
                  const n = e.slice(t, a);
                  r = o.Z.plugins && o.Z.plugins[n] ? o.Z.plugins[n].provider : n
                }
              } else if ("plugin-private://" === n) {
                const t = n.length,
                  o = e.indexOf("/", t);
                if (o >= 0) {
                  r = e.slice(t, o)
                }
              } else "wx://" === n && (r = "//")
            }
            if (n) {
              const t = n[0];
              if ("__plugin__/" === t) {
                const n = t.length,
                  o = e.indexOf("/", n);
                if (o >= 0) {
                  r = e.slice(n, o)
                }
              } else "__wx__/" === t && (r = "//")
            }
            return r
          }

          function d(e, t = !1) {
            if ("object" != typeof e) return e;
            const n = [];
            for (const o in e)
              if ((0, a.n)(e, o))
                if (t) try {
                  n.push(`${encodeURIComponent(o)}=${encodeURIComponent(e[o])}`)
                } catch (t) {
                  n.push(`${o}=${e[o]}`)
                } else n.push(`${o}=${e[o]}`);
            return n.join("&")
          }

          function p(e, t) {
            if ("string" == typeof e && "object" == typeof t && null !== t && Object.keys(t).length > 0) {
              const n = e.split("?");
              return n[0] + "?" + d(h((n[1] || "").split("&").reduce(((e, t) => {
                if ("string" == typeof t && t.length > 0) {
                  const n = t.split("="),
                    o = n[0],
                    r = n[1];
                  e[o] = r
                }
                return e
              }), {}), Object.keys(t).reduce(((e, n) => ("object" == typeof t[n] ? e[encodeURIComponent(n)] = encodeURIComponent(JSON.stringify(t[n])) : e[encodeURIComponent(n)] = encodeURIComponent(t[n]), e)), {})))
            }
            return e
          }

          function f(e, t = "http") {
            return "http" === t ? /^(http|https):\/\/.*/i.test(e) : "websocket" === t ? /^(ws|wss):\/\/.*/i.test(e) : void 0
          }

          function h(...e) {
            return e.reduce(((e, t) => {
              for (const n in t) e[n] = t[n];
              return e
            }), {})
          }

          function g(e) {
            return "string" == typeof e ? -1 !== e.indexOf("?") ? e.replace(/\.html\?/, "?") : e.replace(/\.html$/, "") : e
          }
          class y extends Error {
            constructor(e) {
              super(`APP-SERVICE-SDK:${e}`), this.type = "AppServiceSdkKnownError"
            }
          }
          class v extends Error {
            constructor(e) {
              super(`${e}`), this.type = "ThirdScriptError"
            }
          }

          function m(e, t) {
            for (const n in t) e[n] = t[n];
            return e
          }
          const b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          globalThis.btoa, globalThis.atob;

          function _(e) {
            return Object.keys(e).reduce(((t, n) => ("string" == typeof e[n] ? t[n] = e[n] : "number" == typeof e[n] ? t[n] = e[n] + "" : t[n] = Object.prototype.toString.apply(e[n]), t)), {})
          }

          function w() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (e) {
              const t = 16 * Math.random() | 0;
              return ("x" === e ? t : 3 & t | 8).toString(16)
            }))
          }
          o.Z.clientVersion;

          function I(e = {}, t) {
            "function" == typeof e.success && e.success(t), "function" == typeof e.complete && e.complete(t)
          }

          function S(e = {}, t) {
            const n = t ? {
              errMsg: t
            } : void 0;
            "function" == typeof e.success && e.success(n), "function" == typeof e.complete && e.complete(n)
          }

          function A(e = {}, t) {
            const n = t ? {
              errMsg: t
            } : void 0;
            "function" == typeof e.fail && e.fail(n), "function" == typeof e.complete && e.complete(n)
          }
        },
        4915: (e, t, n) => {
          "use strict";
          n.d(t, {
            e4: () => r,
            WZ: () => i,
            R0: () => s,
            LY: () => c
          });
          var o = n(1106);
          const r = ["startPullDownRefresh"];
          let a = [];
          const i = {
              appRoute: !1,
              appRouteDone: !1
            },
            s = () => {
              a.forEach((e => {
                const {
                  name: t,
                  args: n,
                  option: r
                } = e;
                (0, o.oQ)(t, n, r)
              })), a = []
            },
            c = (e, t, n) => {
              const {
                appRoute: r,
                appRouteDone: s
              } = i;
              !r && s ? (0, o.oQ)(e, t, n) : a.push({
                name: e,
                args: t,
                option: n
              })
            }
        },
        8142: (e, t, n) => {
          "use strict";
          n.r(t), n.d(t, {
            createAudioContext: () => Ka,
            createCameraContext: () => Do,
            createInnerAudioContext: () => Ha,
            createLivePlayerContext: () => er,
            createLivePusherContext: () => br,
            createMapContext: () => j,
            createSQEditorContext: () => ii,
            createSQLivePlayerContext: () => tr,
            createSQMapContext: () => $,
            createSQVideoContext: () => ho,
            createVideoContext: () => fo
          });
          var o = n(2851),
            r = n(5260),
            a = n(1106);
          let i = null;
          (0, a.Ld)("onInputComponentData", (e => {
            i = e, c.forEach((e => {
              s(e, e.webviewId)
            })), c = []
          }));
          const s = (e, t = 0) => {
            const n = i.data;
            if (n && "function" == typeof o.Z.webviewEventCallback) {
              const a = JSON.parse(n);
              if (a.bindkeyboardheightchange) try {
                o.Z.webviewEventCallback({
                  data: {
                    type: "keyboardheightchange",
                    target: a.target,
                    currentTarget: a.target,
                    timeStamp: Date.now(),
                    touches: [],
                    detail: {
                      duration: e.duration || 0,
                      height: e.height || 0
                    }
                  },
                  eventName: a.bindkeyboardheightchange,
                  webviewId: t || o.Z.currentWebviewId,
                  nodeId: a.nodeId
                })
              } catch (e) {
                throw new r.l0("bind key input error")
              }
            }
          };
          (0, a.Ld)("removeInputComponent", (e => {
            i && i.inputId === e.inputId && (i = null)
          }));
          let c = [];
          (0, a.jQ)("onKeyboardHeightChange", ((e, t = 0) => {
            i ? s(e, t) : c.push({
              inputId: e.inputId,
              height: e.height,
              duration: e.duration,
              webviewId: t
            })
          })), (0, a.jQ)("onKeyboardValueChange", ((e, t = 0) => {
            const n = e.value,
              i = e.cursor;
            if ((0, a.nY)("setKeyboardValue", {
                value: n,
                cursor: i,
                inputId: e.inputId
              }, [t]), e.data) {
              const i = JSON.parse(e.data);
              if (i.modelValueName && __virtualDOM__.setModelValueData(e.value, i.modelValueName, t, i.nodeId), "function" == typeof o.Z.webviewEventCallback && i.bindinput) {
                let s;
                try {
                  s = o.Z.webviewEventCallback({
                    data: {
                      type: "input",
                      target: i.target,
                      currentTarget: i.target,
                      timeStamp: Date.now(),
                      touches: [],
                      detail: {
                        value: e.value,
                        cursor: e.cursor,
                        keyCode: e.keyCode
                      }
                    },
                    eventName: i.bindinput,
                    webviewId: t,
                    nodeId: i.nodeId
                  })
                } catch (e) {
                  throw new r.l0("bind key input error")
                }
                if (i.setKeyboardValue)
                  if (null == s || !1 === s);
                  else if ("Object" === (0, r.Em)(s)) {
                  const t = {
                    inputId: e.inputId
                  };
                  n !== s.value && (t.value = s.value + ""), Number.isNaN(parseInt(s.cursor, 10)) || (t.cursor = parseInt(s.cursor, 10), void 0 === t.value && (t.value = n), t.cursor > t.value.length && (t.cursor = -1)), (0, a.IN)("setKeyboardValue", t)
                } else n !== s && (0, a.IN)("setKeyboardValue", {
                  value: s + "",
                  cursor: -1,
                  inputId: e.inputId
                })
              }
            }
          }));
          var l = n(8159),
            u = n(2999),
            d = n(1503),
            p = n.n(d),
            f = n(2102),
            h = n.n(f),
            g = n(5062);
          const y = new l.Z;
          (0, a.jQ)("onPageReload", ((e = {}, t = 0) => {
            e.webviewId = t, y.emit("onPageReload", e)
          }));
          const v = function (e, t) {
            y.once(`onBeforeUnloadPage_${e}`, (e => {
              "function" == typeof t && t(e)
            }))
          };
          var m = n(2582);
          const b = (e, t = !0) => (0, r.sd)(o.Z.lastRoute, e, t);
          const _ = function (e, t, n = {}, o = {}, r = (() => {}), i = (() => {})) {
            return (s = {}) => {
              n = r(s), (0, a.gM)(Object.assign({}, s, {
                data: Object.assign({
                  api_name: t
                }, o, n ? {
                  data: n
                } : void 0),
                requestInQueue: !s.hasOwnProperty("requestInQueue") || Boolean(s.requestInQueue)
              }), {
                beforeAll(t) {
                  t.errMsg = t.errMsg.replace("operateWXData", e)
                },
                beforeSuccess(e) {
                  if (m.IS_ANDROID && "string" == typeof e.data && (e.data = JSON.parse(e.data)), e.data.data) {
                    e.rawData = e.data.data;
                    const t = JSON.parse(e.data.data);
                    e = Object.assign(e, t)
                  }
                  e.data.signature && (e.signature = e.data.signature), e.data.encryptedData && (e.encryptedData = e.data.encryptedData, e.iv = e.data.iv, e.data.cloud_id && (e.cloudID = e.data.cloud_id)), delete e.data, e = i(e)
                }
              })
            }
          }("getCloudFileUrl", "qbase_commapi", {}, {}, (function (e) {
            const t = e.data;
            return {
              qbase_api_name: "tcbapi_component_gettempfileurl",
              qbase_req: JSON.stringify({
                fileid_list: t.fileid_list.slice(),
                type: t.type
              }),
              cli_req_id: `${+new Date}_${Math.random()}`
            }
          }), (function (e) {
            return e
          }));
          const w = function (e, t, n) {
              S({
                fileIds: e,
                type: t,
                success: n
              })
            },
            I = new Map,
            S = function (e) {
              const {
                fileIds: t,
                type: n,
                success: o
              } = e, r = new Map, a = [];
              let i = !1;
              if (t.forEach((e => {
                  const t = I.get(e);
                  if (t) {
                    if (Date.now() < t.expireTime) return void(r.has(e) || (r.set(e, t.data), i || (i = !0)));
                    I.delete(e)
                  }
                  /^(cloud):\/\//.test(e) && a.push(e)
                })), 0 === a.length) return void(i ? A(t, r, 0, o) : "function" == typeof o && o({
                data: t.map((e => ({
                  url: e
                })))
              }));
              let s = 0;
              const c = function (e, t) {
                const n = [],
                  o = Math.ceil(e.length / t);
                for (let r = 0; r < o; r++) n.push(e.slice(r * t, (r + 1) * t));
                return n
              }(t, 50);
              Promise.all(c.map((e => new Promise((t => {
                _({
                  data: {
                    fileid_list: e,
                    type: n
                  },
                  requestInQueue: !1,
                  success(n) {
                    const o = JSON.parse(n.rawData);
                    if (o.baseresponse && 0 === o.baseresponse.errcode ? o.download_list.forEach((e => {
                        r.set(e.fileid, e), !I.has(e.fileid) && e.max_age && I.set(e.fileid, {
                          data: e,
                          expireTime: Date.now() + 1e3 * e.max_age
                        })
                      })) : o.baseresponse ? e.forEach((e => {
                        r.set(e, {
                          download_url: e,
                          service_errcode: o.baseresponse.errcode,
                          errmsg: "system error baseresponse.errcode " + o.baseresponse.errcode
                        }), I.has(e) && I.delete(e)
                      })) : e.forEach((e => {
                        r.set(e, {
                          download_url: e,
                          service_errcode: -1,
                          errmsg: "system error baseresponse empty"
                        }), I.has(e) && I.delete(e)
                      })), o.baseresponse && o.baseresponse.stat && o.baseresponse.stat.qbase_cost_time) {
                      const e = o.baseresponse.stat.qbase_cost_time;
                      e > s && (s = e)
                    }
                    t()
                  },
                  fail() {
                    t()
                  },
                  complete(e) {}
                })
              }))))).then((() => {
                A(t, r, s, o)
              })).catch((e => {
                "function" == typeof o && o({
                  data: t.map((t => ({
                    url: t,
                    service_errcode: -1,
                    errmsg: e + ""
                  })))
                })
              }))
            };

          function A(e, t, n, o) {
            const r = [];
            e.forEach((e => {
              if (/^(cloud):\/\//.test(e)) {
                const n = t.get(e);
                n ? 0 === n.service_errcode ? r.push({
                  url: n.download_url
                }) : r.push({
                  url: e,
                  code: n.service_errcode,
                  msg: n.errmsg
                }) : r.push({
                  url: e,
                  code: -1,
                  msg: "NO_RESULT"
                })
              } else r.push({
                url: e
              })
            })), "function" == typeof o && o({
              data: r,
              cost: n
            })
          }
          var k, C = n(7452);
          const P = !m.IS_USE_NATIVE_MAP && m.IS_HOST_SDK,
            T = {},
            x = {},
            M = new l.y,
            E = {},
            O = {},
            L = {},
            D = ["getCenterLocation", "getRegion", "getScale", "includePoints", "moveToLocation", "translateMarker", "setIndoorFloor", "getIndoorFloor", "setIndoorMaskColor", "getRotate", "getSkew", "eraseLines", "setCenterOffset", "addCustomLayer", "removeCustomLayer", "moveAlong", "initMarkerCluster", "addMarkers", "removeMarkers", "on", "off", "once", "toScreenLocation", "fromScreenLocation", "addGroundOverlay", "updateGroundOverlay", "removeGroundOverlay", "openMapApp", "setLocMarkerIcon"];
          let B = 0;
          (0, a.Ld)("mapInsert", ((e, t) => {
            const {
              nodeId: n,
              domId: o,
              mapId: r,
              pluginId: a
            } = e;
            let i = `${t}_${a}_${o}_`;
            n && n !== __virtualDOM__.getRootNodeId(t) && (i += n), T[i] = r, x[`${t}_${r}`] = e, M.emit("mapInsert"),
              function (e) {
                E[e] || (E[e] = !0, v(e, (e => {
                  delete E[e], Object.keys(T).forEach((t => {
                    new RegExp("^" + e).test(t) && (delete x[`${e}_${T[t]}`], delete T[t])
                  })), Object.keys(O).forEach((t => {
                    new RegExp("^api_" + e).test(t) && (delete x[`${e}_${T[t.substr(4)]}`], delete O[t])
                  })), Object.keys(O).forEach((t => {
                    new RegExp("^SQ_" + e).test(t) && (delete x[t.substr(3)], delete O[t])
                  }))
                })))
              }(t)
          })), (0, a.Ld)("mapRemove", (({
            domId: e,
            mapId: t,
            pluginId: n,
            nodeId: o
          }, r) => {
            let a = `${r}_${n}_${e}_`;
            o && o !== __virtualDOM__.getRootNodeId(r) && (a += o), delete T[a], delete x[`${r}_${t}`];
            let i = `api_${r}_${n}_${e}_`;
            o && o !== __virtualDOM__.getRootNodeId(r) && (i += o);
            const s = `SQ_${r}_${t}`;
            delete O[i], delete O[s]
          }));
          class R {}(0, a.Ld)("operateMapCallback", (e => {
            const t = e.callbackId;
            t && "function" == typeof L[t] && (L[t](e), delete L[t])
          }));
          let N = (k = class {
            constructor() {
              const e = this.exportContext = new R;
              D.forEach((t => e[t] = this[t].bind(this))), this._lastMarkerPos = {}, this._lastMarkerDeg = {}, this._translating = {}, this._delayTranslate = {}, this._isGetMarkerPos = {}
            }
            on(e, t) {
              this._listenerHandler("on", e, t)
            }
            off(e, t) {
              this._listenerHandler("off", e, t)
            }
            once(e, t) {
              this._listenerHandler("once", e, t)
            }
            _invoke(e, t) {
              if (m.IS_PC || m.IS_DEVTOOLS || P || m.IS_MINA || ["includeMapPoints", "getMapMarker"].indexOf(e) >= 0) {
                t.method = e;
                const n = `callback${this.webviewId}_${t.mapId}_${B++}`;
                L[n] = function (e) {
                  delete e.callbackId, delete e.mapId, delete e.method, e.errMsg && (e.errMsg.indexOf(":ok") > -1 ? "function" == typeof t.success && t.success(e) : e.errMsg.indexOf(":fail") > -1 && "function" == typeof t.fail && t.fail(e)), "function" == typeof t.complete && t.complete(e)
                }, t.callbackId = n, (0, a.nY)("operateMap", t, [this.webviewId])
              } else(0, a.IN)(e, t)
            }
            toScreenLocation(e = {}) {
              this._invokeMethod("toScreenLocation", e)
            }
            fromScreenLocation(e = {}) {
              this._invokeMethod("fromScreenLocation", e)
            }
            getCenterLocation(e = {}) {
              this._invokeMethod("getMapCenterLocation", e)
            }
            setLocMarkerIcon(e = {}) {
              if (!(0, a.r3)("setLocMarkerIcon", e, {
                  iconPath: ""
                })) return;
              const t = Object.assign({}, e);
              /^(wxfile|https?)/.test(t.iconPath) || (t.iconPath = b(t.iconPath, !1)), this._invokeMethod("setMapLocMarkerIcon", t)
            }
            getScale(e = {}) {
              this._invokeMethod("getMapScale", e, {
                beforeSuccess(e) {
                  e.scale = +Number.parseFloat(e.scale).toFixed(2)
                }
              })
            }
            getRegion(e = {}) {
              this._invokeMethod("getMapRegion", e)
            }
            moveToLocation(e = {}) {
              this._invokeMethod("moveToMapLocation", e)
            }
            addGroundOverlay(e = {}) {
              if (!(0, a.r3)("addGroundOverlay", e, {
                  id: 0,
                  src: "",
                  bounds: {}
                })) return;
              const t = Object.assign({
                visible: !0,
                zIndex: 1,
                opacity: 1
              }, e);
              /^(wxfile|https?)/.test(t.src) || (t.src = b(t.src, !1)), this._invokeMethod("addMapGroundOverlay", t)
            }
            openMapApp(e = {}) {
              (0, a.r3)("openMapApp", e, {
                longitude: 0,
                latitude: 0,
                destination: ""
              }) && this._invokeMethod("openMapApp", e)
            }
            removeGroundOverlay(e = {}) {
              (0, a.r3)("removeGroundOverlay", e, {
                id: 0
              }) && this._invokeMethod("removeMapGroundOverlay", e)
            }
            updateGroundOverlay(e = {}) {
              if (!(0, a.r3)("updateGroundOverlay", e, {
                  id: 0,
                  src: "",
                  bounds: {}
                })) return;
              const t = Object.assign({
                visible: !0,
                zIndex: 1,
                opacity: 1
              }, e);
              this._invokeMethod("updateMapGroundOverlay", t)
            }
            moveAlong(e = {}) {
              if (!(0, a.r3)("moveAlong", e, {
                  duration: 0,
                  markerId: 0,
                  path: []
                })) return;
              const t = {
                autoRotate: !0
              };
              Object.assign(t, e), this._invokeMethod("moveMapMarkerAlong", t)
            }
            addMarkers(e = {}) {
              if (!(0, a.r3)("addMarkers", e, {
                  markers: []
                })) return;
              const t = e.markers.map(((e = {}) => {
                  C.hj(e.id) || console.warn("marker id must be a number");
                  const t = Object.assign({}, e);
                  t.anchor = C.Kn(t.anchor) ? t.anchor : {
                    x: .5,
                    y: 1
                  }, t.alpha = C.hj(t.alpha) ? t.alpha : 1, t.rotate = C.hj(t.rotate) ? t.rotate : 0;
                  const n = t.iconPath;
                  return C.HD(n) && !/^(wxfile|https?)/.test(n) && (t.iconPath = b(n, !1)), C.Kn(t.label) && (t.label = Object.assign({
                    content: "",
                    color: "#000000",
                    fontSize: 12,
                    borderRadius: 0,
                    borderWidth: 0,
                    borderColor: "#000000",
                    bgColor: "#00000000",
                    padding: 0,
                    anchorX: 0,
                    anchorY: 0,
                    textAlign: "right"
                  }, t.label)), C.Kn(t.callout) ? (t.callout = Object.assign({
                    content: "",
                    color: "#000000",
                    fontSize: 12,
                    display: "BYCLICK",
                    borderRadius: 0,
                    borderWidth: 0,
                    borderColor: "#00000000",
                    bgColor: "#ffffff",
                    padding: 0,
                    anchorX: 0,
                    anchorY: 0,
                    textAlign: "center"
                  }, t.callout), t.callout.display = "ALWAYS" === t.callout.display ? 1 : 0) : C.HD(t.title) && (t.callout = {
                    content: t.title,
                    bgColor: "#FFFFFF",
                    padding: 10,
                    display: 0,
                    textAlign: "center"
                  }), delete t.title, t.data = JSON.stringify({
                    markerId: t.id
                  }), t
                })),
                n = {};
              t.forEach(((e, t) => {
                const o = e.iconPath;
                C.HD(o) && /^cloud:/.test(o) && (n[o] || (n[o] = []), n[o].push(t))
              }));
              const o = Object.keys(n);
              w(o, "image", (r => {
                [...r.data.map((e => e.url))].forEach(((e, r) => {
                  n[o[r]].forEach((n => {
                    t[n].iconPath = e
                  }))
                }));
                const a = Object.assign({
                  clear: !1
                }, e, {
                  markers: t
                });
                this._invokeMethod("addMapMarkers", a)
              }))
            }
            removeMarkers(e = {}) {
              if (!(0, a.r3)("removeMarkers", e, {
                  markerIds: []
                })) return;
              const t = Object.assign({}, {
                markers: e.markerIds
              }, e);
              this._invokeMethod("removeMapMarkers", t)
            }
            initMarkerCluster(e = {}) {
              const t = Object.assign({
                enableDefaultStyle: !0,
                zoomOnClick: !0,
                gridSize: 60
              }, e);
              this._invokeMethod("initMapMarkerCluster", t)
            }
            translateMarker(e = {}) {
              const t = e.markerId;
              if (void 0 === t) return void console.warn("MapContext.translateMarker: require markerId");
              if (!e.destination) return void console.warn("MapContext.translateMarker: require destination");
              if (this._translating[t]) return void(this._delayTranslate[t] ? this._delayTranslate[t].push(e) : this._delayTranslate[t] = [e]);
              if (!this._isGetMarkerPos[t]) return this._translating[t] = !0, this._invokeMethod("getMapMarker", {
                markerId: t,
                success: e => {
                  this._lastMarkerPos[t] = e.pos
                },
                complete: () => {
                  this._isGetMarkerPos[t] = !0, this._translating[t] = !1;
                  const e = this._delayTranslate[t];
                  e && e.length && this.translateMarker(e.shift())
                }
              }), void(this._delayTranslate[t] ? this._delayTranslate[t].push(e) : this._delayTranslate[t] = [e]);
              0 === e.duration && (e.duration = 1);
              const n = {
                markerId: t,
                keyFrames: [],
                success: t => {
                  "function" == typeof e.success && e.success.call(this, t), "function" == typeof e.animationEnd && e.animationEnd.call(this)
                },
                fail: n => {
                  this._delayTranslate[t] = [], "function" == typeof e.fail && e.fail.call(this, n)
                },
                complete: n => {
                  "function" == typeof e.complete && e.complete.call(this, n), this._translating[t] = !1;
                  const o = this._delayTranslate[t];
                  o && o.length && this.translateMarker(o.shift())
                }
              };
              let o = 0;
              const r = this._lastMarkerPos[t],
                a = e.destination,
                i = !(r && r.latitude === a.latitude && r.longitude === a.longitude);
              if (e.autoRotate || "number" != typeof e.rotate) {
                let n, s;
                if (r) {
                  const e = a.latitude - r.latitude,
                    t = a.longitude - r.longitude,
                    o = e / t || 0;
                  n = Math.abs((t < 0 ? 180 : 0) - Math.abs(180 * Math.atan(o) / Math.PI)) * (e > 0 ? -1 : 1)
                }
                "number" == typeof this._lastMarkerDeg[t] && (s = n - this._lastMarkerDeg[t], Math.abs(s) > 180 && (s = s > 0 ? s - 360 : s + 360), Math.abs(s) > 3 && e.autoRotate && i && (o = s)), (Math.abs(s) > 3 && e.autoRotate || void 0 === this._lastMarkerDeg[t]) && (this._lastMarkerDeg[t] = n)
              } else {
                let n = e.rotate - (this._lastMarkerDeg[t] || 0);
                Math.abs(n) > 3 && (Math.abs(n) > 180 && (n = n > 0 ? n - 360 : n + 360), o = n, this._lastMarkerDeg[t] = e.rotate)
              }
              const s = "number" == typeof e.duration ? e.duration : 1e3;
              e.moveWithRotate ? n.keyFrames.push(p()({
                rotate: o,
                duration: s
              }, e.destination)) : (i && n.keyFrames.push(p()({
                duration: s
              }, e.destination)), 0 !== o && n.keyFrames.unshift({
                rotate: o,
                duration: Math.abs(o) < 10 ? 100 : 500
              })), n.keyFrames.length > 0 ? (this._translating[t] = !0, this._invokeMethod("translateMapMarker", n)) : setTimeout((function () {
                n.success(), n.complete()
              })), this._lastMarkerPos[t] = e.destination
            }
            includePoints(e = {}) {
              if (!(e.points && e.points instanceof Array)) return;
              e.points.forEach((e => {
                e.latitude = Number(e.latitude), e.longitude = Number(e.longitude)
              }));
              const t = e.padding;
              e.padding = [0, 0, 0, 0], t && (e.padding[0] = Number(t[0]) || 0, e.padding[1] = Number(t[1]) || 0, e.padding[2] = Number(t[2]) || 0, e.padding[3] = Number(t[3]) || 0), this._invokeMethod("includeMapPoints", e)
            }
            setIndoorFloor(e = {}) {
              e.buildingId ? e.floorName ? this._invokeMethod("setMapIndoorFloor", e) : console.warn("MapContext.setIndoorFloor: require floorName") : console.warn("MapContext.setIndoorFloor: require buildingId")
            }
            getIndoorFloor(e = {}) {
              this._invokeMethod("getMapIndoorFloor", e)
            }
            getRotate(e = {}) {
              this._invokeMethod("getMapRotate", e)
            }
            getSkew(e = {}) {
              this._invokeMethod("getMapSkew", e)
            }
            setIndoorMaskColor(e = {}) {
              this._invokeMethod("setMapIndoorMaskColor", e)
            }
            eraseLines(e = {}) {
              e.lines && e.lines instanceof Array ? this._invokeMethod("eraseMapLines", e) : console.warn("MapContext.eraseLines: require lines")
            }
            setCenterOffset(e = {}) {
              const t = Object.assign({
                offset: [.5, .5],
                animated: !1
              }, e);
              this._invokeMethod("setMapCenterOffset", t)
            }
            addCustomLayer(e = {}) {
              (0, a.r3)("addCustomLayer", e, {
                layerId: ""
              }) && this._invokeMethod("addMapCustomLayer", e)
            }
            removeCustomLayer(e = {}) {
              (0, a.r3)("removeCustomLayer", e, {
                layerId: ""
              }) && this._invokeMethod("removeMapCustomLayer", e)
            }
          }, h()(k.prototype, "toScreenLocation", [g.Qu], Object.getOwnPropertyDescriptor(k.prototype, "toScreenLocation"), k.prototype), h()(k.prototype, "fromScreenLocation", [g.Qu], Object.getOwnPropertyDescriptor(k.prototype, "fromScreenLocation"), k.prototype), h()(k.prototype, "getCenterLocation", [g.Qu], Object.getOwnPropertyDescriptor(k.prototype, "getCenterLocation"), k.prototype), h()(k.prototype, "setLocMarkerIcon", [g.Qu], Object.getOwnPropertyDescriptor(k.prototype, "setLocMarkerIcon"), k.prototype), h()(k.prototype, "getScale", [g.Qu], Object.getOwnPropertyDescriptor(k.prototype, "getScale"), k.prototype), h()(k.prototype, "getRegion", [g.Qu], Object.getOwnPropertyDescriptor(k.prototype, "getRegion"), k.prototype), h()(k.prototype, "moveToLocation", [g.Qu], Object.getOwnPropertyDescriptor(k.prototype, "moveToLocation"), k.prototype), h()(k.prototype, "addGroundOverlay", [g.Qu], Object.getOwnPropertyDescriptor(k.prototype, "addGroundOverlay"), k.prototype), h()(k.prototype, "openMapApp", [g.Qu], Object.getOwnPropertyDescriptor(k.prototype, "openMapApp"), k.prototype), h()(k.prototype, "removeGroundOverlay", [g.Qu], Object.getOwnPropertyDescriptor(k.prototype, "removeGroundOverlay"), k.prototype), h()(k.prototype, "updateGroundOverlay", [g.Qu], Object.getOwnPropertyDescriptor(k.prototype, "updateGroundOverlay"), k.prototype), h()(k.prototype, "moveAlong", [g.Qu], Object.getOwnPropertyDescriptor(k.prototype, "moveAlong"), k.prototype), h()(k.prototype, "addMarkers", [g.Qu], Object.getOwnPropertyDescriptor(k.prototype, "addMarkers"), k.prototype), h()(k.prototype, "removeMarkers", [g.Qu], Object.getOwnPropertyDescriptor(k.prototype, "removeMarkers"), k.prototype), h()(k.prototype, "initMarkerCluster", [g.Qu], Object.getOwnPropertyDescriptor(k.prototype, "initMarkerCluster"), k.prototype), h()(k.prototype, "translateMarker", [g.Qu], Object.getOwnPropertyDescriptor(k.prototype, "translateMarker"), k.prototype), h()(k.prototype, "includePoints", [g.Qu], Object.getOwnPropertyDescriptor(k.prototype, "includePoints"), k.prototype), h()(k.prototype, "setIndoorFloor", [g.Qu], Object.getOwnPropertyDescriptor(k.prototype, "setIndoorFloor"), k.prototype), h()(k.prototype, "getIndoorFloor", [g.Qu], Object.getOwnPropertyDescriptor(k.prototype, "getIndoorFloor"), k.prototype), h()(k.prototype, "getRotate", [g.Qu], Object.getOwnPropertyDescriptor(k.prototype, "getRotate"), k.prototype), h()(k.prototype, "getSkew", [g.Qu], Object.getOwnPropertyDescriptor(k.prototype, "getSkew"), k.prototype), h()(k.prototype, "setIndoorMaskColor", [g.Qu], Object.getOwnPropertyDescriptor(k.prototype, "setIndoorMaskColor"), k.prototype), h()(k.prototype, "eraseLines", [g.Qu], Object.getOwnPropertyDescriptor(k.prototype, "eraseLines"), k.prototype), h()(k.prototype, "setCenterOffset", [g.Qu], Object.getOwnPropertyDescriptor(k.prototype, "setCenterOffset"), k.prototype), h()(k.prototype, "addCustomLayer", [g.Qu], Object.getOwnPropertyDescriptor(k.prototype, "addCustomLayer"), k.prototype), h()(k.prototype, "removeCustomLayer", [g.Qu], Object.getOwnPropertyDescriptor(k.prototype, "removeCustomLayer"), k.prototype), k);
          class F extends N {
            constructor(e, t, n, o) {
              if (super(), "string" != typeof e) throw new r.iZ("Parameter 1 should be a string");
              this.domId = e, this.pluginId = o, this.webviewId = t, this.nodeId = n
            }
            _invokeMethod(e, t, n = {}) {
              const o = `${this.webviewId}_${this.pluginId}_${this.domId}_${this.nodeId}`;
              "number" == typeof T[o] || T[o] ? (t.mapId = T[o], this._invoke(e, t, n)) : M.on("mapInsert", (() => {
                t.mapId = T[o], this._invoke(e, t, n)
              }))
            }
            _listenerHandler(e, t, n) {
              if (!["on", "off", "once"].includes(e)) return;
              const o = `${this.webviewId}_${this.pluginId}_${this.domId}_${this.nodeId}`,
                r = this.webviewId;
              let a;
              "number" == typeof T[o] || T[o] ? (a = T[o], Ft[e](`${t}_${r}_${a}`, n)) : M.on("mapInsert", (() => {
                a = T[o], Ft[e](`${t}_${r}_${a}`, n)
              }))
            }
          }
          class W extends N {
            constructor(e, t) {
              super(), this.mapId = e, this.webviewId = t
            }
            _invokeMethod(e, t, n = {}) {
              t.mapId = this.mapId, this._invoke(e, t, n)
            }
            _listenerHandler(e, t, n) {
              if (!["on", "off", "once"].includes(e)) return;
              const o = this.webviewId,
                r = this.mapId;
              Ft[e](`${t}_${o}_${r}`, n)
            }
          }
          const j = (e, t, n = "", o = "") => {
              let r = `api_${t}_${o}_${e}_`;
              if (n && n !== __virtualDOM__.getRootNodeId(t) && (r += n), O[r]) return O[r].exportContext;
              const a = new F(e, t, n, o);
              return O[r] = a, a.exportContext
            },
            $ = (e, t) => {
              const n = `SQ_${t}_${e}`;
              if (O[n]) return O[n].exportContext;
              const o = new W(e, t);
              return O[n] = o, o.exportContext
            },
            V = BabelRuntimeHelpers.asyncToGenerator;
          var Z = n.n(V),
            U = n(3525),
            G = n(2046);
          const q = (0, G.s)("AppEnterBackground"),
            H = q.internalOnMethod;
          (0, u.n)("onAppEnterBackground", ((e = {}) => {
            q.emit(e), (0, a.nY)("onAppEnterBackground", e)
          }));
          n(9973);
          var Q = n(665),
            Y = n(7646),
            J = n(1095),
            z = n(5014);
          const K = __wxConfig.platform;
          let X = [];
          const ee = e => {
              const t = ("0" + (e.getMonth() + 1)).slice(-2),
                n = ("0" + e.getDate()).slice(-2),
                o = ("0" + e.getHours()).slice(-2),
                r = ("0" + e.getMinutes()).slice(-2),
                a = ("0" + e.getSeconds()).slice(-2),
                i = ("00" + e.getMilliseconds()).slice(-3),
                s = `${e.getFullYear()}-${t}-${n}`,
                c = `${o}:${r}:${a}.${i}`;
              if ("ios" === K) {
                return `${s} ${c}000${(e.getTimezoneOffset()/6e3*-1).toFixed(4).replace(/^0\./,"+").replace(/-0\./,"-")}`
              }
              return `${s} ${(e.getTimezoneOffset()/60*-1).toFixed(1).replace(/^(\d)/,"+$1")} ${c}`
            },
            te = e => function (...t) {
              const n = t.map((e => {
                switch (e) {
                  case null:
                    return "null";
                  case void 0:
                    return "undefined";
                  default:
                    return e.toString()
                }
              })).join(" ");
              X.push({
                date: new Date,
                type: e,
                content: n
              })
            };
          __wxConfig.onReady((() => {
            setTimeout((function e() {
              var t;
              (setTimeout(e, 2e3), 0 !== X.length) && (t = X.slice(), "ios" === K && "function" == typeof systemLog ? systemLog({
                dataArray: t.map((e => `\n${ee(e.date)} [${e.type[0].toUpperCase()}][weapplib] ${e.content}`))
              }) : "ios" === K || "windows" === K ? (0, a.IN)("systemLog", {
                dataArray: t.map((e => ({
                  message: `\n${ee(e.date)} [${e.type[0].toUpperCase()}][weapplib] ${e.content}`
                })))
              }) : "android" === K && (0, a.IN)("systemLog", {
                message: ["\n"].concat(t.map((e => `[${e.type[0].toUpperCase()}][${ee(e.date)}][weapplib] ${e.content}`))).join("\n")
              }), X = [])
            }), 2e3)
          }));
          const ne = {
            log: te("log"),
            debug: te("debug"),
            info: te("info"),
            warn: te("warn"),
            error: te("error")
          };
          var oe = n(2288);
          const re = (0, G.s)("navigateBackIntercept"),
            ae = {
              SlideBack: 1,
              BottomBackButton: 2,
              NavigationBarBack: 3,
              NavigateBackCall: 4
            },
            ie = [ae.SlideBack, ae.BottomBackButton, ae.NavigationBarBack, ae.NavigateBackCall],
            se = [];
          let ce = 0;
          (0, a.jQ)("onNavigateBackIntercept", ((e = {}) => {
            const {
              id: t
            } = se[se.length - 1] || {};
            re.emit(p()(p()({}, e), {}, {
              id: t
            })), (0, a.nY)("onNavigateBackIntercept", p()(p()({}, e), {}, {
              id: t
            }))
          }));
          const le = ({
              scopes: e
            } = {}) => {
              const t = new Set(e || []),
                n = {
                  scopes: ie.map((e => ({
                    type: e,
                    interception: t.has(e)
                  })))
                };
              return (0, a.bb)("setNavigateBackInterception", n)
            },
            ue = function () {
              var e = Z()((function* (e = {}) {
                var t;
                e = p()(p()({}, e), {}, {
                  scopes: null !== (t = e.scopes) && void 0 !== t ? t : ie
                }), yield le(e);
                const n = ++ce;
                return se.push({
                  id: n,
                  options: e
                }), {
                  id: n
                }
              }));
              return function () {
                return e.apply(this, arguments)
              }
            }(),
            de = ((0, g.NX)("setNavigateBackInterception", ue), function () {
              var e = Z()((function* ({
                id: e
              } = {}) {
                const t = se.findIndex((t => t.id === e));
                if (!(t < 0)) {
                  if (t === se.length - 1) {
                    let e;
                    e = se.length > 1 ? se[se.length - 2].options : {
                      scope: []
                    }, yield le(e)
                  }
                  se.splice(t, 1)
                }
              }));
              return function () {
                return e.apply(this, arguments)
              }
            }()),
            pe = ((0, g.NX)("stopNavigateBackInterception", de), re.internalOnMethod),
            fe = re.internalOffMethod,
            he = function () {
              var e = Z()((function* (e, t = ie) {
                const {
                  id: n
                } = yield ue({
                  scopes: t
                }), o = t => {
                  t.id === n && e(t)
                };
                return pe(o), {
                  id: n,
                  handler: o
                }
              }));
              return function (t) {
                return e.apply(this, arguments)
              }
            }(),
            ge = function () {
              var e = Z()((function* (e) {
                const {
                  id: t,
                  handler: n
                } = (yield e) || {};
                yield de({
                  id: t
                }), fe(n)
              }));
              return function (t) {
                return e.apply(this, arguments)
              }
            }(),
            ye = e => (t = {}) => {
              if (!0 !== o.Z.openUrlLock)
                if (t.url = t.url || "", (0, r.mQ)(t.url)) o.Z.openUrlLock = !0, (0, a.IN)(e, t, {
                  afterAll() {
                    o.Z.openUrlLock = !1
                  }
                });
                else {
                  console.error("invalid url", t.url);
                  const n = {
                    errMsg: `${e}: invalid url "${t.url}"`
                  };
                  "function" == typeof t.fail && t.fail(n), "function" == typeof t.complete && t.complete(n)
                }
            },
            ve = (ye("openUrl"), ye("private_openUrl"));
          var me = n(6998);
          const be = {},
            _e = {
              appLaunchInfo: null,
              appLaunchShareInfo: null,
              sceneHistory: [],
              appId: "",
              ShareInfoStorage: {
                lastShareTicket: null,
                get: e => be[e],
                set(e, t) {
                  const n = (0, r.M8)();
                  return be[n] = {
                    shareKey: e,
                    shareName: t
                  }, n
                }
              },
              emitter: new l.Z
            },
            we = (() => {
              let e = !1;
              return (m.IS_IOS || m.IS_ANDROID && Q.Z.clientVersion >= 637865520) && (e = !0), () => e
            })();
          (() => {
            let e = !1;
            m.IS_IOS && Q.Z.clientVersion >= 385877248 && (e = !0)
          })(), (() => {
            let e = !1;
            m.IS_IOS && Q.Z.clientVersion >= 385878314 && (e = !0)
          })(), (() => {
            let e = !1;
            m.IS_IOS && Q.Z.clientVersion >= 402655232 && Q.Z.clientVersion <= 402655487 && (e = !0)
          })();

          function Ie(e = {}, t) {
            if (e.scene = e.scene ? parseInt(e.scene, 10) : e.scene, e.query = (t ? e.query : o.Z.query) || {}, e.path = t ? (0, r.Z8)(e.path) : (0, r.Z8)(o.Z.lastRoute), e.referrerInfo = e.referrerInfo || {}, e.isLaunch = t, t || (1044 === e.scene ? o.Z.lastShareInfo = {
                shareInfo: e.shareInfo,
                path: e.path,
                query: e.query
              } : o.Z.lastShareInfo = void 0), _e.sceneHistory.push(e.scene), !e.referrerInfo.appId || 1036 !== e.scene && 1069 !== e.scene || (_e.appId = e.referrerInfo.appId), "object" == typeof e.shareInfo && null !== e.shareInfo) {
              const {
                shareInfo: t
              } = e;
              t.shareKey && t.shareName && ((0, a.IN)("showUpdatableMessageSubscribeButton", {
                shareKey: t.shareKey
              }), e.shareTicket = _e.ShareInfoStorage.set(t.shareKey, t.shareName), _e.ShareInfoStorage.lastShareTicket = e.shareTicket), delete e.shareInfo
            }
            return e
          }
          let Se;

          function Ae(e = {}, t) {
            0 === (e = Object.assign({}, e)).scene ? e.scene = Se : Se = e.scene;
            let n = e.scene;
            1103 === n ? n = 1001 : 1104 === n ? n = 1089 : 1131 === n || 1158 !== n && 1159 !== n && 1160 !== n || !(0, z.J)("getGroupToolbarInfo") && (n = 1008), [1106, 1005, 1006, 1027, 1042].indexOf(n) > -1 && (e.referrerInfo.appId = null);
            const o = e.referrerInfo.appId ? {
              appId: e.referrerInfo.appId,
              extraData: e.referrerInfo.extraData
            } : {};
            if (e.referrerInfo.privateExtraData && e.referrerInfo.privateExtraData.__pluginAppId) {
              e.referrerInfo.appId && (o.pluginAppId = e.referrerInfo.privateExtraData.__pluginAppId), delete e.referrerInfo.privateExtraData.__pluginAppId;
              0 === Object.keys(e.referrerInfo.privateExtraData).length && delete e.referrerInfo.privateExtraData
            }
            const r = {
              path: e.path,
              query: e.query,
              scene: n,
              shareTicket: e.shareTicket,
              referrerInfo: o
            };
            e.chatroomUsername && 1156 === n && (r.chatroomUsername = e.chatroomUsername), e.chatType && (r.chatType = e.chatType);
            const a = e.nativeExtraData || {};
            return a.location && (r.locationInfo = a.location), 7 !== Q.Z.appType && 10 !== Q.Z.appType || (e.nativeExtraData && (r.nativeExtraData = e.nativeExtraData), r.sessionId = e.sessionid || e.sessionId, r.isLaunch = e.isLaunch, e.isLaunch && (r.prerender = !!Q.Z.prerender), r.clickTimestamp = e.clickTimestamp, r.preloadType = t), e.mode && (r.mode = e.mode), 1173 === n && (a.mimeType ? r.forwardMaterials = [{
              type: a.mimeType,
              path: a.materialPath,
              name: a.materialName,
              size: a.materialSize
            }] : Array.isArray(a.materials) && (r.forwardMaterials = a.materials)), r
          }

          function ke(e, t = "") {
            if ((0, r.p9)(e.path || "") !== t) {
              const t = {
                path: e.path,
                query: {},
                scene: e.scene,
                shareTicket: e.shareTicket,
                referrerInfo: {}
              };
              return e.mode && (t.mode = e.mode), 10 === Q.Z.appType && (e.nativeExtraData && (t.nativeExtraData = e.nativeExtraData), t.sessionId = e.sessionId, t.isLaunch = e.isLaunch, e.isLaunch && (t.prerender = e.prerender), t.clickTimestamp = e.clickTimestamp, t.preloadType = e.preloadType), t
            }
            return e
          }
          n(883);
          new l.Z, new WeakMap;
          let Ce = null,
            Pe = {};

          function Te(e) {
            Ce = e
          }

          function xe(e) {
            Pe = e
          }(0, a.Ld)("getEnterAppInfo", (({
            callbackId: e
          }, t) => {
            (0, a.nY)("appEnterInfoGot", {
              res: Pe,
              callbackId: e
            }, [t])
          })), Q.Z.onReady((() => {
            o.Z.scene = Q.Z.appLaunchInfo.scene
          }));
          const Me = (0, G.s)("AppEnterForeground"),
            Ee = Me.internalOnMethod;

          function Oe(e) {
            if (!(0, J.isGame)()) {
              xe(e = Ie(e, !1));
              const t = Ae(e);
              e.__public = ke(t, ""), Te(t), Me.emit(e), o.Z.scene = e.scene
            }
          }(0, u.n)("onAppEnterForeground", ((e = {}) => {
            const t = e.debugLaunchInfo || {};
            Object.assign(e, t), delete e.debugLaunchInfo, !we() || 1 !== e.reLaunch && !0 !== e.reLaunch ? Oe(e) : _e.emitter.once("onAppRoute", (() => {
              Oe(e)
            })), (0, a.nY)("onAppEnterForeground", e)
          }));
          const Le = (() => {
              let e;
              const t = t => {
                e = "halfPage" === t.mode
              };
              return Ee((e => t(e))), Q.Z.onReady((() => t(Q.Z.appLaunchInfo || {}))), () => e
            })(),
            De = ((() => {
              const e = [1175, 1177];
              let t;
              const n = n => {
                t = e.includes(n.scene)
              };
              Ee((e => n(e))), Q.Z.onReady((() => n(Q.Z.appLaunchInfo || {})))
            })(), "undefined" == typeof __libVersionInfo__ || "develop" === __libVersionInfo__.version ? "9.9.9" : __libVersionInfo__.version);
          const Be = [];
          (0, a.Ld)("callbackWebviewMethod", (({
            res: e,
            callbackId: t
          }) => {
            const n = Be[t];
            delete Be[t], n && n(e)
          }));
          let Re = null;
          const Ne = e => {
              let t = m.PLATFORM;
              m.IS_IOS && (e.brand = "iPhone"), m.IS_DEVTOOLS && "devtools" !== e.brand && (t = "iPhone" === e.brand ? "ios" : "android"), e.platform = t, e.SDKVersion = De, e.enableDebug = Boolean(Q.Z.debug), Q.Z.devicePixelRatio && (e.devicePixelRatio = Q.Z.devicePixelRatio), Q.Z.theme && (e.theme = Q.Z.theme), Q.Z.host && (e.host = Q.Z.host), m.IS_ANDROID && /^\d+\.\d+$/.test(e.version) && (e.version += ".0"), Re = Object.assign({}, e), delete Re.errMsg, (0, J.isSinglePageMode)() && 4 !== Q.Z.appType && (e.safeArea = Object.assign({}, e.safeArea), e.safeArea.top = 0, e.safeArea.bottom = e.screenHeight, e.safeArea.height = e.safeArea.bottom - e.safeArea.top), m.WK_RENDERER_H5 && (e.renderer = "h5")
            },
            Fe = () => {
              Q.Z.isReady || (new Error).stack
            },
            We = () => {
              let e = {};
              var t;
              return t = {
                success(t) {
                  delete t.errMsg, e = t, Re = Object.assign({}, e)
                }
              }, Fe(), (0, a.IN)("getSystemInfo", t, {
                beforeSuccess: Ne
              }), e
            },
            je = () => Re || We();
          let $e = null,
            Ve = 0,
            Ze = 0;
          const Ue = ["brand", "model", "pixelRatio", "language", "version", "system", "platform", "SDKVersion"];
          Q.Z.onReady((() => {
            $e = {};
            for (let e = 0; e < Ue.length; e++) {
              if (!(Ue[e] in Q.Z)) {
                $e = je();
                break
              }
              $e[Ue[e]] = Q.Z[Ue[e]]
            }
            if (Q.Z.screenHeight && Q.Z.screenWidth) Ve = Q.Z.screenWidth, Ze = Q.Z.screenHeight;
            else {
              const e = je();
              Ve = e.screenWidth, Ze = e.screenHeight
            }
          }));
          let Ge = !1;
          const qe = new Set;
          (0, u.n)("onAppRouteDone", (() => {
            Ge = !0, qe.forEach((e => e())), qe.clear()
          }));
          new Set, (() => {
            let e
          })();
          const He = new l.Z({
            maxListeners: 2e5
          });
          let Qe = "portrait",
            Ye = "";
          Q.Z.onReady((() => {
            Qe = Q.Z.deviceOrientation || Qe, Ye = (Q.Z.isReady ? Object.assign({}, $e) : ((new Error).stack, {})).model || ""
          }));
          const Je = (e, t) => -1 !== ["click", "touchstart", "touchmove", "touchend", "touchcancel", "ready", "prop-change"].indexOf(e) ? `element-${t}-${e}` : -1 !== ["layout"].indexOf(e) ? e : void 0;
          const ze = e => {
            const {
              id: t
            } = JSON.parse(e.data);
            He.emit(Je("click", t))
          };
          (0, u.n)("onTextViewClick", ze), (0, u.n)("onImageViewClick", ze), ["onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"].forEach((e => {
            const t = e.replace(/^on/, "").toLowerCase();
            (0, u.n)(e, (e => {
              try {
                const {
                  id: n
                } = JSON.parse(e.data);
                He.emit(Je(t, n), e.touch || e.touches)
              } catch (e) {}
            }))
          }));
          const Ke = new Map;
          new WeakMap, new WeakMap, new WeakMap;

          function Xe({
            htmlId: e
          }) {
            const t = Ke.get(e);
            t && t.onload && setTimeout(t.onload)
          }

          function et({
            name: e,
            arg: t,
            htmlId: n
          }) {
            "postMessage" === e && Ke.forEach((({
              onmessage: e
            }, o) => {
              n && n !== o || e && setTimeout((() => e(t)))
            }))
          }
          Q.Z.onReady((() => {
            4 === Q.Z.appType && ((0, u.n)("onWebviewFinishLoad", Xe), (0, u.n)("onWebInvokeAppService", et), (0, u.n)("WEB_INVOKE_APPSERVICE", et))
          }));
          new Map;
          var tt = n(6814);
          const nt = Object.hasOwnProperty,
            ot = (0, G.s)("AppRouteNotFound"),
            rt = (ot.onMethod, ot.offMethod, ot.emit),
            at = (e, t) => {
              ne.info(`[rewriteRoute] (webviewId=${t}) ${e}`)
            };
          let it = {};
          const st = (e, {
              needHtmlSuffix: t
            }) => {
              const n = e.replace(/\.html(\?|$)/i, (e => e.slice(5)));
              let o = (0, r.S0)(n);
              if ("/" === o[0] && (o = o.slice(1)), !t) return o;
              let a = o.indexOf("?");
              a < 0 && (a = o.length);
              return o.slice(0, a) + ".html" + o.slice(a)
            },
            ct = (e, t = 0) => {
              if (["dismissPip", "navigateBack"].includes(e.openType)) return !1;
              if ("rewriteRoute" === e.openType && (e = ((e, t) => {
                  let n = 0;
                  if (nt.call(e, "originalWebviewId")) n = e.originalWebviewId, at(`Found originalWebviewId=${n}`, t);
                  else {
                    if (1 !== Object.keys(it).length) return at(`No originalWebviewId found and we have ${Object.keys(it).length} backup data, guess failed, cleaning backups and giving up`, t), it = {}, e;
                    n = Object.keys(it)[0], at(`No originalWebviewId found and guess it=${n}`, t)
                  }
                  const o = it[n];
                  return delete it[n], ["openType", "wxMaterial", "location", "prerender"].forEach((t => {
                    e[t] = o[t]
                  })), e
                })(e, t)), !e.notFound) return !1;
              let n = !1,
                o = e.rawPath;
              for (;
                /^[-_+a-z]+:\/\//i.test(o);) {
                at(`${o} has protocol, try rewriting`, t);
                try {
                  o = st(o, {
                    needHtmlSuffix: !0
                  }), n = !0
                } catch (e) {
                  return "AppServiceSdkKnownError" === e.type && console.error(e.message), (0, tt.IN)("pageNotFoundCallback", {
                    hasHandler: !1,
                    webviewId: t
                  }), !1
                }
              }
              return n ? (it[t] = e, at(`rewriteRoute from "${e.rawPath}" to "${o}"`, t), (0, tt.IN)("rewriteRoute", {
                url: o,
                webviewId: t
              }), !0) : (rt(e, t), !1)
            };
          var lt = n(4915);
          const ut = (0, G.s)("AppRoute"),
            dt = ut.internalOnMethod,
            pt = ut.internalOffMethod,
            ft = new Set;
          (0, u.n)("onAppRoute", ((e, t = 0) => {
            ne.log("received onAppRoute, res=", JSON.stringify(e)), lt.WZ.appRoute = !0, lt.WZ.appRouteDone = !1;
            if (!ct(e, t)) {
              if (e.path = (0, r.Z8)(e.path), e.webviewId = void 0 !== e.webviewId ? e.webviewId : t, "dismissPip" !== e.openType && (o.Z.lastRoute = e.path || "", o.Z.lastRawQuery = JSON.parse(JSON.stringify(e.query || {}))), o.Z.lastOpenType = e.openType, ["appLaunch", "autoReLaunch"].includes(e.openType) && ft.add(t), !ft.has(t))
                for (const t in e.query) try {
                  e.query[t] = decodeURIComponent(e.query[t])
                } catch (e) {}
              if ("dismissPip" !== e.openType && (o.Z.query = e.query, o.Z.currentWebviewId = e.webviewId), "undefined" != typeof __libVersionInfo__ && __libVersionInfo__.features && __libVersionInfo__.features.pruneWxConfigByPage) {
                const t = e.preloadRule || Q.Z._preloadRule && Q.Z._preloadRule[e.path],
                  n = e.page || Q.Z._page && Q.Z._page[e.path + ".html"];
                if (t && (Q.Z.updatePreloadRule(e.path, t), e.preloadRule, Q.Z.preloadRule), n) {
                  const t = Q.Z.global && Q.Z.global.window || {};
                  n.window = Object.assign({}, t, n.window), Q.Z.updatePage(e.path, n), e.page, Q.Z.page
                }
              }(0, a.nY)("onAppRoute", e, []), we() && _e.emitter.emit("onAppRoute"), ut.emit(e)
            }
          }));
          const ht = (0, G.s)("XWebTextareaSupportedEvent");
          let gt = !1;
          (0, a.Ld)("xWebTextareaSupported", (({
            canInsert2XWeb: e
          }) => {
            gt = e, ht.emit({
              canInsert2XWeb: e
            })
          })), (m.IS_DEVTOOLS || m.IS_WINDOWS || m.IS_MAC || m.IS_ANDROID || m.IS_MINA) && (0, a.Ld)("SPECIAL_PAGE_EVENT", (({
            data: e,
            eventName: t,
            ext: n,
            nodeId: i,
            instanceId: s
          }, c = 0) => {
            if ((!m.IS_ANDROID || gt) && (e && "input" === e.type && n && n.modelValueName && __virtualDOM__.setModelValueData(e.detail.value, n.modelValueName, c, i), e && "input" === e.type && "function" == typeof o.Z.webviewEventCallback)) {
              const l = o.Z.webviewEventCallback({
                  data: e,
                  eventName: t,
                  webviewId: c,
                  nodeId: i
                }),
                u = e.detail.value;
              if (n && n.setKeyboardValue)
                if (void 0 === l);
                else if ("Object" === (0, r.Em)(l)) {
                const e = {};
                s && (e.instanceId = s), u !== l.value && (e.value = l.value + ""), Number.isNaN(parseInt(l.cursor, 10)) || (e.cursor = parseInt(l.cursor, 10)), (0, a.nY)("setKeyboardValue", e, [c])
              } else u !== l && (0, a.nY)("setKeyboardValue", {
                value: l + "",
                cursor: -1,
                instanceId: s
              }, [c])
            }
          }));
          const yt = (0, G.s)("DomReady"),
            vt = yt.internalOnMethod;
          const mt = {},
            bt = {};
          dt((e => {
            bt[e.webviewId] = []
          })), vt((e => {
            setTimeout((() => {
              const t = e.webviewId,
                n = bt[t] || [];
              mt[t] = !0, n.length > 0 && (wt = !1, It = !1, n.forEach((e => {
                const {
                  res: t,
                  args: n
                } = e, o = /hideLoading/.test(t.errMsg) ? {
                  beforeAll: e => {
                    e.errMsg = e.errMsg.replace("hideToast", "hideLoading")
                  }
                } : {};
                (0, a.IN)("hideToast", n, o)
              }))), delete bt[t]
            }), 100)
          }));
          let _t = 1,
            wt = !1;
          let It = !1;
          const St = (0, g.Vl)(Y.JM),
            At = (e, t, n, o) => {
              const r = [e, t, Q.Z.appType + 1e3, n + 1e3, o].join(",");
              Reporter.reportKeyValue({
                key: "NavigateToMiniProgramAlert",
                value: r
              })
            },
            kt = (() => {
              let e;
              return () => (e || (e = new Promise((e => {
                __sclEngine__.initScl((t => e(t.mainRoot)))
              }))), e)
            })(),
            Ct = function () {
              var e = Z()((function* (e) {
                const t = yield kt();
                let n;
                switch (Tt) {
                  case Pt.HALF_SCREEN_DIALOG_WITHOUT_LOGO:
                    n = t.append("navigateToMp", {
                      title: e.oldWording,
                      logo: "",
                      name: "",
                      type: Pt.HALF_SCREEN_DIALOG
                    });
                    break;
                  case Pt.HALF_SCREEN_DIALOG_WITH_FRIENDS_USED:
                    n = t.append("navigateToMp", {
                      title: e.title,
                      logo: e.icon_url,
                      name: e.desc,
                      type: Pt.HALF_SCREEN_DIALOG
                    }), e.expensiveWording && e.expensiveWording.then((({
                      used_friend_cnt_sub_desc: e
                    }) => {
                      n.setData({
                        desc: e || ""
                      })
                    }));
                    break;
                  case Pt.HALF_SCREEN_DIALOG_WITH_SCORE:
                    n = t.append("navigateToMp", {
                      title: e.title,
                      logo: e.icon_url,
                      name: e.desc,
                      type: Pt.HALF_SCREEN_DIALOG
                    }), e.expensiveWording && e.expensiveWording.then((({
                      score_sub_desc: e
                    }) => {
                      n.setData({
                        desc: e || ""
                      })
                    }));
                    break;
                  default:
                    n = t.append("navigateToMp", {
                      title: e.title,
                      logo: e.icon_url,
                      name: e.desc,
                      type: Tt
                    })
                }
                const o = he((e => {
                    [ae.BottomBackButton, ae.NavigationBackInterceptionType, ae.NavigateBackCall].includes(e.type) && n.handleCancel()
                  })),
                  r = yield new Promise((e => {
                    n.addListener("confirm", (() => {
                      e({
                        confirm: !0
                      })
                    })), n.addListener("cancel", (() => {
                      e({
                        confirm: !1
                      })
                    }))
                  }));
                return ge(o), r
              }));
              return function (t) {
                return e.apply(this, arguments)
              }
            }(),
            Pt = {
              DEFAULT: 0,
              DIALOG: 1,
              HALF_SCREEN_DIALOG: 2,
              HALF_SCREEN_DIALOG_WITHOUT_LOGO: 3,
              HALF_SCREEN_DIALOG_WITH_SCORE: 4,
              HALF_SCREEN_DIALOG_WITH_FRIENDS_USED: 5
            };
          let Tt = Pt.DEFAULT;
          Q.Z.onReady((() => {
            (0, oe.b)({
              experimentId: "clicfg_navigation_use_scl_alert_v5",
              experimentType: "Expt",
              success: e => {
                JSON.stringify(e), e && void 0 !== e.testConfig && (Tt = Number(e.testConfig) || Pt.DEFAULT, Object.values(Pt).includes(Tt) || (Tt = Pt.DEFAULT))
              }
            })
          }));
          const xt = function () {
              var e = Z()((function* (e, t, n, o, r, a) {
                if (1 === t) return;
                const i = Tt !== Pt.DEFAULT && "undefined" != typeof __sclEngine__ && (m.IS_DEVTOOLS || m.IS_IOS || m.IS_ANDROID) && r,
                  s = i ? Tt : Pt.DEFAULT;
                let c;
                try {
                  c = i ? yield Ct(p()(p()({}, r), {}, {
                    oldWording: e,
                    expensiveWording: a
                  })): yield(0, U.bb)("showModal", {
                    title: e,
                    content: "",
                    confirmText: "允许",
                    cancelText: "取消",
                    showCancel: !0,
                    confirmColor: "#576B95",
                    confirmColorDark: "#7D90A9",
                    cancelColor: "#000000",
                    cancelColorDark: "#AAAAAA"
                  })
                } catch (e) {
                  throw At(3, n, o, s), e
                }
                const {
                  confirm: l
                } = c;
                if (!l) throw At(2, n, o, s), new Error("cancel");
                At(1, n, o, s)
              }));
              return function (t, n, o, r, a, i) {
                return e.apply(this, arguments)
              }
            }(),
            Mt = 1,
            Et = 2,
            Ot = function () {
              var e = Z()((function* (e) {
                const t = [];
                switch (Tt) {
                  case Pt.HALF_SCREEN_DIALOG_WITH_FRIENDS_USED:
                    t.push(Et);
                    break;
                  case Pt.HALF_SCREEN_DIALOG_WITH_SCORE:
                    t.push(Mt)
                }
                if (!t.length) return {};
                e.appId, ne.log(`[_getNavigateWxAppDescInfo] appId=${e.appId}`);
                try {
                  const {
                    respData: n
                  } = yield St({
                    apiName: "webapi_getnavigatewxaappdesc",
                    reqData: {
                      target_appid: e.appId,
                      desc_type_list: t
                    }
                  });
                  n.data;
                  return JSON.parse(n.data)
                } catch (e) {
                  return e.message, {}
                }
              }));
              return function (t) {
                return e.apply(this, arguments)
              }
            }(),
            Lt = (() => {
              let e = [];
              return Q.Z.onReady((() => {
                Array.isArray(Q.Z.navigateToMiniProgramAppIdList) && (e = Q.Z.navigateToMiniProgramAppIdList, (0, z.J)("openWxappLimit5") && e.splice(5))
              })), (t, n) => new Promise(((o, r) => {
                const a = (0, J.checkAPIAvailable)("navigateToMiniProgramConfig");
                if (!1 === a || m.IS_DEVTOOLS)
                  if (n) o();
                  else if (e.indexOf(t) > -1) o({
                  sourcetype: 4
                });
                else {
                  r({
                    errMsg: `appId "${t}" is not in navigateToMiniProgramAppIdList`
                  })
                } else !0 === a ? o() : "unknown" === a && o({
                  sourcetype: 4
                })
              }))
            })(),
            Dt = function () {
              var e = Z()((function* ({
                appId: e,
                path: t,
                shortLink: n
              }) {
                let i;
                ne.log(`[_checkBeforeNavigateToMiniProgram] appId=${e} path=${t} shortLink=${n}`);
                const s = new Promise((e => {
                  i = e
                }));
                e && !n && i(e);
                const c = s.then((e => Ot({
                  appId: e
                })));
                let l;
                Tt !== Pt.DEFAULT && kt();
                try {
                  l = yield(u = {
                    appId: e,
                    shortLink: n
                  }, new Promise(((e, t) => {
                    u.appId, u.shortLink, ne.log(`[_getNavigateWxAppInfo] appId=${u.appId} shortLink=${u.shortLink}`);
                    const n = 0,
                      o = 1;
                    (0, Y.JM)({
                      apiName: "webapi_getnavigatewxaappinfo",
                      reqData: {
                        req_type: u.shortLink ? o : n,
                        target_appid: u.appId,
                        target_short_link: u.shortLink
                      },
                      success(t) {
                        const n = JSON.parse(t.respData.data),
                          o = n.action_code,
                          r = n.skip_local_check,
                          a = Boolean(n.runtime_sdk_whitelist),
                          i = n.target_short_link_info;
                        e({
                          actionCode: o,
                          skipLocalCheck: r,
                          reason: n.reason,
                          wording: n.wording,
                          appType: n.apptype,
                          newWording: n.new_wording,
                          popupInfo: n.pop_up_info,
                          needTransferToWeChat: a,
                          shortLinkInfo: i
                        }), t.respData.data
                      },
                      fail(e) {
                        t(e), e.errMsg
                      }
                    })
                  })))
                } catch (n) {
                  return n.errMsg || n.message, {
                    appId: e,
                    path: t
                  }
                }
                var u;
                const {
                  actionCode: d,
                  skipLocalCheck: f,
                  reason: h,
                  wording: g,
                  appType: y,
                  newWording: v,
                  popupInfo: m,
                  needTransferToWeChat: b,
                  shortLinkInfo: _
                } = l;
                let w = 1 === d;
                if (_ && (e = _.wxa_appid, t = (_.wxa_path || "").replace(/\.html(\?|$)/, "$1"), i(e)), ne.log(`[_getNavigateWxAppInfo][resolve] appId=${e} path=${t} actionCode=${d}, skipLocalCheck=${f}, reason=${h}, wording=${g}, appType=${y}, needTransferToWeChat=${b}`), 1 !== d && 2 !== d) throw m ? (Reporter.reportKeyValue({
                  key: "WeAppNavBan",
                  value: [Q.Z.appType + 1e3, Q.Z.appLaunchInfo.scene, 33, 3302, 0, 1, h, "跳转跳出", (0, me.PL)()].join(",")
                }), (0, U.IN)("showModal", {
                  showCancel: !0,
                  content: m.desc,
                  confirmText: m.confirm_wording,
                  cancelText: m.cancel_wording,
                  success({
                    confirm: e
                  }) {
                    const t = m.confirm_url;
                    e && ve({
                      url: t
                    }), Reporter.reportKeyValue({
                      key: "WeAppNavBan",
                      value: [Q.Z.appType + 1e3, Q.Z.appLaunchInfo.scene, 33, 3302, e ? 1 : 2, 2, h, "跳转跳出", (0, me.PL)()].join(",")
                    })
                  }
                })) : g && (0, U.IN)("showModal", {
                  content: g,
                  showCancel: !1
                }), new Error(h);
                if (1 !== d && Le()) {
                  if (7 !== y) throw ((e = {}) => {
                    let t = {
                      duration: 1500,
                      title: "",
                      icon: "success",
                      mask: !1
                    };
                    if (t = (0, r.l7)(t, e), e.image && (t.image = (0, r.sd)(o.Z.lastRoute, e.image, !1)), ["success", "loading", "none", "error"].indexOf(t.icon) < 0 && (t.icon = "success"), "none" === t.icon && (t.icon = ""), !(0, a.r3)("showToast", t, {
                        duration: 1,
                        title: "",
                        icon: ""
                      })) return;
                    const n = bt[o.Z.currentWebviewId] || [];
                    n.length > 0 && (wt = !1, It = !1, n.forEach((e => {
                      const {
                        res: t,
                        args: n
                      } = e;
                      "function" == typeof n.success && n.success(t), "function" == typeof n.complete && n.complete(t)
                    })), delete bt[o.Z.currentWebviewId]), wt = _t++, setTimeout((function () {
                      wt = !1
                    }), t.duration), t.maskAll = !1, (0, a.IN)("showToast", t)
                  })({
                    icon: "none",
                    title: "暂不支持当前功能"
                  }), new Error("not supported");
                  w = !0
                }
                try {
                  const n = yield Lt(e, f);
                  return w || (yield xt(g, d, e, y, v, c)), p()(p()({}, n), {}, {
                    appId: e,
                    path: t,
                    needTransferToWeChat: b
                  })
                } catch (e) {
                  const t = e.errMsg || e.message;
                  throw new Error(t)
                }
              }));
              return function (t) {
                return e.apply(this, arguments)
              }
            }();
          (0, g.NX)("_checkBeforeNavigateToMiniProgram", Dt);
          let Bt = !1,
            Rt = 0;
          (0, U.Ld)("tapAnyWhere", (function (e) {
            Rt = e.timeStamp, Bt = !0
          })), H((() => {
            Rt = 0, Bt = !1
          }));
          const Nt = () => {
              Rt = Date.now(), Bt = !0
            },
            Ft = new l.Z({
              maxListeners: 2e5
            }),
            Wt = {
              onMapMarkerClusterCreate: "markerClusterCreate",
              onMapMarkerClusterClick: "markerClusterClick"
            };
          Object.keys(Wt).forEach((e => {
            (0, u.n)(e, ((t = {}, n = 0) => {
              const o = t.mapId,
                r = Wt[e];
              delete t.mapId, Ft.emit(`${r}_${n}_${o}`, t)
            }))
          })), (0, a.jQ)("onMapMarkerClick", ((e = {}, t = 0) => {
            Nt();
            const n = x[`${t}_${e.mapId}`];
            if (n && n.bindmarkertap && "function" == typeof o.Z.webviewEventCallback) {
              const r = JSON.parse(e.data);
              o.Z.webviewEventCallback({
                data: {
                  type: "markertap",
                  target: n.target,
                  currentTarget: n.target,
                  timeStamp: Date.now(),
                  touches: [],
                  detail: {
                    markerId: r.markerId
                  },
                  markerId: r.markerId,
                  _userTap: !0
                },
                eventName: n.bindmarkertap,
                webviewId: t,
                nodeId: n.nodeId
              })
            }
          })), (0, a.jQ)("onMapCalloutClick", ((e = {}, t = 0) => {
            Nt();
            const n = x[`${t}_${e.mapId}`];
            if (n && n.bindcallouttap && "function" == typeof o.Z.webviewEventCallback) {
              const r = JSON.parse(e.data);
              o.Z.webviewEventCallback({
                data: {
                  type: "callouttap",
                  target: n.target,
                  currentTarget: n.target,
                  timeStamp: Date.now(),
                  touches: [],
                  detail: {
                    markerId: r.markerId
                  },
                  markerId: r.markerId,
                  _userTap: !0
                },
                eventName: n.bindcallouttap,
                webviewId: t,
                nodeId: n.nodeId
              })
            }
          })), (0, a.jQ)("onMapLabelClick", ((e = {}, t = 0) => {
            Nt();
            const n = x[`${t}_${e.mapId}`];
            if (n && n.bindlabeltap && "function" == typeof o.Z.webviewEventCallback) {
              const r = JSON.parse(e.data);
              o.Z.webviewEventCallback({
                data: {
                  type: "labeltap",
                  target: n.target,
                  currentTarget: n.target,
                  timeStamp: Date.now(),
                  touches: [],
                  detail: {
                    markerId: r.markerId
                  },
                  markerId: r.markerId,
                  _userTap: !0
                },
                eventName: n.bindlabeltap,
                webviewId: t,
                nodeId: n.nodeId
              })
            }
          })), (0, a.jQ)("onMapControlClick", ((e = {}, t = 0) => {
            if (Nt(), e.data && "function" == typeof o.Z.webviewEventCallback) {
              const n = JSON.parse(e.data);
              n.bindcontroltap && o.Z.webviewEventCallback({
                data: {
                  type: "controltap",
                  target: n.target,
                  currentTarget: n.target,
                  timeStamp: Date.now(),
                  touches: [],
                  detail: {
                    controlId: n.controlId
                  },
                  controlId: n.controlId,
                  _userTap: !0
                },
                eventName: n.bindcontroltap,
                webviewId: t,
                nodeId: n.nodeId
              })
            }
          })), (0, a.Ld)("onMapControlTap", (({
            data: e
          }, t) => {
            if (Nt(), e && "function" == typeof o.Z.webviewEventCallback) {
              const n = JSON.parse(e);
              n.bindcontroltap && o.Z.webviewEventCallback({
                data: {
                  type: "controltap",
                  target: n.target,
                  currentTarget: n.target,
                  timeStamp: Date.now(),
                  touches: [],
                  detail: {
                    controlId: n.controlId
                  },
                  controlId: n.controlId,
                  _userTap: !0
                },
                eventName: n.bindcontroltap,
                webviewId: t,
                nodeId: n.nodeId
              })
            }
          })), (0, a.jQ)("onMapRegionChange", ((e = {}, t = 0) => {
            const n = x[`${t}_${e.mapId}`];
            if (n && n.bindregionchange && "function" == typeof o.Z.webviewEventCallback) {
              const r = {
                  type: e.type,
                  rotate: e.rotate,
                  skew: e.skew,
                  gesture: e.gesture,
                  scale: +Number.parseFloat(e.scale).toFixed(2),
                  centerLocation: e.centerLocation,
                  region: e.region
                },
                a = {
                  target: n.target,
                  currentTarget: n.target,
                  timeStamp: Date.now(),
                  touches: [],
                  detail: {
                    type: e.type
                  },
                  type: e.type,
                  causedBy: e.causedBy
                };
              "end" === e.type && (a.detail = r), o.Z.webviewEventCallback({
                data: a,
                eventName: n.bindregionchange,
                webviewId: t,
                nodeId: n.nodeId
              })
            }
          })), (0, a.jQ)("onMapClick", ((e = {}, t = 0) => {
            Nt();
            const n = x[`${t}_${e.mapId}`];
            n && n.bindtap && "function" == typeof o.Z.webviewEventCallback && o.Z.webviewEventCallback({
              data: {
                type: "tap",
                target: n.target,
                currentTarget: n.target,
                timeStamp: Date.now(),
                touches: [],
                detail: {
                  longitude: e.longitude,
                  latitude: e.latitude
                },
                _userTap: !0
              },
              eventName: n.bindtap,
              webviewId: t,
              nodeId: n.nodeId
            })
          })), (0, a.jQ)("onMapPoiClick", ((e = {}, t = 0) => {
            Nt();
            const n = x[`${t}_${e.mapId}`];
            if (n && n.bindpoitap && "function" == typeof o.Z.webviewEventCallback) {
              const r = {
                name: e.name,
                longitude: e.longitude,
                latitude: e.latitude
              };
              e.buildingId && (r.buildingId = e.buildingId), e.floorName && (r.floorName = e.floorName), o.Z.webviewEventCallback({
                data: {
                  type: "poitap",
                  target: n.target,
                  currentTarget: n.target,
                  timeStamp: Date.now(),
                  touches: [],
                  detail: r,
                  _userTap: !0
                },
                eventName: n.bindpoitap,
                webviewId: t,
                nodeId: n.nodeId
              })
            }
          })), (0, a.jQ)("onMapIndoorChange", ((e = {}, t = 0) => {
            const n = x[`${t}_${e.mapId}`];
            n && n.bindindoorchange && "function" == typeof o.Z.webviewEventCallback && o.Z.webviewEventCallback({
              data: {
                target: n.target,
                currentTarget: n.target,
                timeStamp: Date.now(),
                touches: [],
                detail: {},
                info: {
                  buildingId: e.buildingId,
                  buildingName: e.buildingName,
                  floorIndex: e.floorIndex,
                  floorList: e.floorList
                }
              },
              eventName: n.bindindoorchange,
              webviewId: t,
              nodeId: n.nodeId
            })
          })), (0, a.jQ)("onMapAnchorPointClick", ((e = {}, t = 0) => {
            Nt();
            const n = x[`${t}_${e.mapId}`];
            n && n.bindanchorpointtap && "function" == typeof o.Z.webviewEventCallback && o.Z.webviewEventCallback({
              data: {
                type: "anchorpointtap",
                target: n.target,
                currentTarget: n.target,
                timeStamp: Date.now(),
                touches: [],
                detail: {
                  longitude: e.longitude,
                  latitude: e.latitude
                },
                _userTap: !0
              },
              eventName: n.bindanchorpointtap,
              webviewId: t,
              nodeId: n.nodeId
            })
          }));
          const jt = (e, t, n) => {
              e = e || [];
              const o = [],
                r = [];
              if ("onTouchStart" === t) {
                for (let t = 0; t < e.length; ++t) o.push(e[t]);
                const t = {
                  x: n.touch.x,
                  y: n.touch.y,
                  identifier: n.touch.id
                };
                r.push(t), o.push(t)
              } else if ("onTouchMove" === t)
                for (let t = 0; t < e.length; ++t) {
                  const a = e[t];
                  let i = !1;
                  for (let e = 0; e < n.touches.length; ++e) {
                    const t = {
                      x: n.touches[e].x,
                      y: n.touches[e].y,
                      identifier: n.touches[e].id
                    };
                    if (t.identifier === a.identifier && (a.x !== t.x || a.y !== t.y)) {
                      o.push(t), r.push(t), i = !0;
                      break
                    }
                  }
                  i || o.push(a)
                } else if ("onTouchEnd" === t) {
                  const t = {
                    x: n.touch.x,
                    y: n.touch.y,
                    identifier: n.touch.id
                  };
                  for (let n = 0; n < e.length; ++n) {
                    const a = e[n];
                    a.identifier === t.identifier ? r.push(t) : o.push(a)
                  }
                } else if ("onTouchCancel" === t)
                for (let e = 0; e < n.touches.length; ++e) {
                  const t = {
                    x: n.touches[e].x,
                    y: n.touches[e].y,
                    identifier: n.touches[e].id
                  };
                  r.push(t)
                } else if ("onLongPress" === t) {
                  const t = {
                    x: n.touch.x,
                    y: n.touch.y,
                    identifier: n.touch.id
                  };
                  for (let n = 0; n < e.length; ++n) e[n].identifier === t.identifier ? o.push(t) : o.push(e[n]);
                  r.push(t)
                } return {
                touches: o,
                changedTouches: r
              }
            },
            $t = {
              onTouchStart: "touchstart",
              onTouchMove: "touchmove",
              onTouchEnd: "touchend",
              onTouchCancel: "touchcancel",
              onLongPress: "longtap"
            };
          var Vt = n(1661);
          const Zt = {
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
          };
          void 0 !== globalThis.ImageData && globalThis.ImageData;

          function Ut(e, t, n = "", o = "") {
            let r = `canvas_${e}_${t}_${n}_`;
            return o && o !== __virtualDOM__.getRootNodeId(e) && (r += o), r
          }

          function Gt(e) {
            const t = [];
            let n = 1;
            return (0, a.Ld)(e, (e => {
                let n = -1;
                for (let o = 0; o < t.length; o++) {
                  const r = t[o],
                    a = r[0],
                    i = r[1];
                  if (a.cid === e.cid && a.canvasId === e.canvasId) {
                    n = o, i(e);
                    break
                  }
                }
                n >= 0 && t.splice(n, 1)
              })),
              function (e, o) {
                e.cid = n++, t.push([e, o])
              }
          }
          const qt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            Ht = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
          "undefined" != typeof window && window.atob;

          function Qt(e) {
            return e && e.length > 0 && e.forEach((e => {
              e.clientX = e.x, e.clientY = e.y, e.pageX = e.x, e.pageY = e.y
            })), e
          }
          let Yt = !1;
          Q.Z.onReady((() => {
            (0, a.IN)("getPermissionBytes", {
              indexes: [977],
              success: e => {
                e.permissionBytes && 1 === e.permissionBytes[0] && (Yt = !0)
              }
            })
          }));
          const Jt = {},
            zt = {};

          function Kt(e) {
            return "number" == typeof e
          }

          function Xt(e) {
            let t = null;
            if (null != (t = /^#([0-9|A-F|a-f]{6})$/.exec(e))) {
              return [parseInt(t[1].slice(0, 2), 16), parseInt(t[1].slice(2, 4), 16), parseInt(t[1].slice(4), 16), 255]
            }
            if (null != (t = /^#([0-9|A-F|a-f]{3})$/.exec(e))) {
              let e = t[1].slice(0, 1),
                n = t[1].slice(1, 2),
                o = t[1].slice(2, 3);
              return e = parseInt(e + e, 16), n = parseInt(n + n, 16), o = parseInt(o + o, 16), [e, n, o, 255]
            }
            if (null != (t = /^rgb\((.+)\)$/.exec(e))) return t[1].split(",").map((function (e) {
              return Math.min(255, parseInt(e.trim(), 10))
            })).concat(255);
            if (null != (t = /^rgba\((.+)\)$/.exec(e))) return t[1].split(",").map((function (e, t) {
              return 3 === t ? Math.floor(255 * parseFloat(e.trim())) : Math.min(255, parseInt(e.trim(), 10))
            }));
            const n = e.toLowerCase();
            if ((0, Vt.n)(Zt, n)) {
              t = /^#([0-9|A-F|a-f]{6,8})$/.exec(Zt[n]);
              const e = parseInt(t[1].slice(0, 2), 16),
                o = parseInt(t[1].slice(2, 4), 16),
                r = parseInt(t[1].slice(4, 6), 16);
              let a = parseInt(t[1].slice(6, 8), 16);
              return a = a >= 0 ? a : 255, [e, o, r, a]
            }
            return console.group("非法颜色: " + e), console.error("不支持颜色：" + e), console.groupEnd(), [0, 0, 0, 255]
          }

          function en(e) {
            if (Array.isArray(e)) {
              const t = [];
              return e.forEach((function (e) {
                t.push(en(e))
              })), t
            }
            if ("object" == typeof e) {
              const t = {};
              for (const n in e) t[n] = en(e[n]);
              return t
            }
            return e
          }

          function tn(e, t) {
            if (!(m.IS_DEVTOOLS || m.IS_PC || m.IS_MINA || /wxfile:\/\//.test(t)))
              if (e.pluginId || e.nodeId) {
                const n = e.pluginId.split("/")[0],
                  o = __virtualDOM__.getNodeById(e.nodeId, e.webviewId),
                  a = o && o.is || "";
                t = n ? 0 === t.indexOf("/") ? __virtualDOM__.getPluginRoutePrefix(n) + (0, r.sd)(a, t, !1).replace(/\.html$/, "") : (0, r.sd)(__virtualDOM__.convertComponentAliasToRoute(a), t, !1).replace(/\.html$/, "") : (0, r.sd)(a, t, !1).replace(/\.html$/, "")
              } else t = (0, r.sd)(o.Z.lastRoute, t, !1).replace(/.html$/, "");
            return t
          }
          class nn {
            constructor(e, t) {
              this.type = e, this.data = t, this.colorStop = []
            }
            addColorStop(e, t) {
              gn ? this.colorStop.push([e, t]) : this.colorStop.push([e, Xt(t)])
            }
          }
          class on {
            constructor(e) {
              this.width = e
            }
          }
          class rn {
            constructor(e, t) {
              this.image = e, this.repetition = t
            }
          }
          class an {
            constructor(e, t, n, o) {
              if (this.actions = [], this.path = [], this.subpath = [], this.webviewId = e, this.canvasId = t, this.pluginId = o, this.useHardwareAccelerate = !0, this.nodeId = n, this._id = Ut(e, t, o, n), this.drawingState = Jt[this._id] = Jt[this._id] || [], this.state = zt[this._id] = zt[this._id] || {
                  lineDash: [0, 0],
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  shadowBlur: 0,
                  shadowColor: gn ? "#000000" : m.IS_IOS ? [] : [0, 0, 0, 0],
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
                }, m.IS_DEVTOOLS || m.IS_PC) {
                const e = document.createElement("canvas");
                this._context = e.getContext("2d")
              }
            }
            getActions() {
              const e = en(this.actions);
              return this.actions = [], this.path = [], this.subpath = [], e
            }
            clearActions() {
              this.actions = [], this.path = [], this.subpath = []
            }
            draw(e = !1, t) {
              const n = this.canvasId,
                o = en(this.actions),
                r = this.useHardwareAccelerate;
              this.actions = [], this.path = [], this.useHardwareAccelerate = !0, this.isWidgetCanvas ? Pn({
                isWidgetCanvas: !0,
                actions: o,
                reserve: e
              }) : Pn({
                canvasId: n,
                actions: o,
                reserve: e,
                useHardwareAccelerate: r,
                complete: t
              }, this.webviewId, this.pluginId, this.nodeId)
            }
            createLinearGradient(e, t, n, o) {
              return new nn("linear", [e, t, n, o])
            }
            createCircularGradient(e, t, n) {
              return new nn("radial", [e, t, n])
            }
            createPattern(e, t) {
              if (void 0 !== t) {
                if (-1 !== ["repeat", "repeat-x", "repeat-y", "no-repeat"].indexOf(t)) return e = e._src ? e._src : tn(this, e), new rn(e, t);
                console.error(`Failed to execute 'createPattern' on 'CanvasContext': The provided type ('${t}') is not one of 'repeat', 'no-repeat', 'repeat-x', or 'repeat-y'.`)
              } else console.error("Failed to execute 'createPattern' on 'CanvasContext': 2 arguments required, but only 1 present.")
            }
            measureText(e) {
              let t;
              return m.IS_DEVTOOLS || m.IS_PC ? (this._context.font = this.state.font, t = this._context.measureText(e)) : (0, a.IN)("measureText", {
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
              }), new on(t.width || 0)
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
              }), this.state = zt[this._id] = this.drawingState.pop() || {
                lineDash: [0, 0],
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 0,
                shadowColor: gn ? "#000000" : m.IS_IOS ? [] : [0, 0, 0, 0],
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
              this.path = [], this.subpath = [], (m.IS_DEVTOOLS || gn) && this.path.push({
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
            quadraticCurveTo(e, t, n, o) {
              this.path.push({
                method: "quadraticCurveTo",
                data: [e, t, n, o]
              }), this.subpath.push([n, o])
            }
            bezierCurveTo(e, t, n, o, r, a) {
              this.path.push({
                method: "bezierCurveTo",
                data: [e, t, n, o, r, a]
              }), this.subpath.push([r, a])
            }
            arc(e, t, n, o, r, a = !1) {
              if (!m.IS_ANDROID || gn) return this.path.push({
                method: "arc",
                data: [e, t, n, o, r, a]
              }), void this.subpath.push([e, t]);
              const i = e + Math.cos(o) * n,
                s = t + Math.sin(o) * n;
              if (this.subpath.push([i, s]), a && o - r >= 2 * Math.PI || !a && r - o >= 2 * Math.PI) this.subpath.push([i, s]);
              else {
                const o = e + Math.cos(r) * n,
                  a = t + Math.sin(r) * n;
                this.subpath.push([o, a])
              }
              this.path.push({
                method: "arc",
                data: [e, t, n, o, r, a]
              })
            }
            rect(e, t, n, o) {
              this.path.push({
                method: "rect",
                data: [e, t, n, o]
              }), this.subpath = [
                [e, t]
              ], m.IS_ANDROID && !gn && this.path.push({
                method: "closePath",
                data: []
              })
            }
            arcTo(e, t, n, o, r, a) {
              if ((!m.IS_ANDROID || gn) && !a) return this.path.push({
                method: "arcTo",
                data: [e, t, n, o, r]
              }), void this.subpath.push([n, o]);
              const i = this.subpath[this.subpath.length - 1],
                s = i[0],
                c = i[1];
              if (s === e && c === t || e === n && t === o || 0 === r) return this.actions.push({
                method: "lineTo",
                data: [e, t]
              }), void this.subpath.push([e, t]);
              if (s === e && s === n || c === t && c === o) return this.actions.push({
                method: "lineTo",
                data: [e, t]
              }), void this.subpath.push([e, t]);
              const {
                sqrt: l,
                acos: u,
                sin: d,
                tan: p,
                atan: f,
                PI: h
              } = Math, g = function (e) {
                return e ** 2
              }, y = s - e, v = c - t, b = n - e, _ = o - t, w = u((y * b + v * _) / (l(g(y) + g(v)) * l(g(b) + g(_)))) / 2, I = Math.round(r / d(w) * 1e6) / 1e6, S = Math.round(r / p(w) * 1e6) / 1e6;
              let A, k, C, P, T, x;
              if (s - e == 0) A = e, k = c - t > 0 ? t + S : t - S;
              else if (c - t == 0) A = s - e > 0 ? e + S : e - S, k = t;
              else {
                const n = (c - t) / (s - e),
                  o = c - n * s;
                A = (l(g(y) + g(v)) * S + y * e + v * t - o * v) / (y + n * v), k = n * A + o
              }
              if (n - e == 0) C = e, P = o - t > 0 ? t + S : t - S;
              else if (o - t == 0) C = n - e > 0 ? e + S : e - S, P = t;
              else {
                const r = (o - t) / (n - e),
                  a = o - r * n;
                C = (l(g(b) + g(b)) * S + b * e + _ * t - a * _) / (b + r * _), P = r * C + a
              }
              const M = (A + C) / 2 - e,
                E = (k + P) / 2 - t;
              if (0 === E) T = e, x = E > 0 ? t + I : t - I;
              else {
                const n = E / M,
                  o = t - n * e;
                T = (l(g(M) + g(E)) * I + e * M + t * E - o * E) / (M + n * E), x = n * T + o
              }
              T = Math.round(1e6 * T) / 1e6, x = Math.round(1e6 * x) / 1e6;
              const O = k - x,
                L = A - T,
                D = h - 2 * w;
              let B = f(O / L);
              0 === O && L < 0 && (B = Math.PI);
              const R = (A - T) * (P - x) - (k - x) * (C - T);
              this.path.push({
                method: "arc",
                data: [T, x, r, B, R > 0 ? B + D : B - D, R < 0]
              }), this.subpath.push([C, P])
            }
            getTransform() {
              return this._transform
            }
            clip() {
              this.actions.push({
                method: "clip",
                data: en(this.path)
              })
            }
            set lineDashOffset(e) {
              if (m.IS_DEVTOOLS || m.IS_PC || m.IS_MINA) this.actions.push({
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
              m.IS_DEVTOOLS || m.IS_PC || m.IS_MINA ? this.actions.push({
                method: "setShadowBlur",
                data: [e]
              }) : (this.actions.push({
                method: "setShadow",
                data: [this.state.shadowOffsetX, this.state.shadowOffsetY, e, this.state.shadowColor]
              }), this.state.shadowBlur = e)
            }
            set shadowColor(e) {
              if (m.IS_DEVTOOLS || m.IS_PC || m.IS_MINA) return void this.actions.push({
                method: "setShadowColor",
                data: [e]
              });
              let t;
              t = gn ? e : m.IS_IOS && 0 === this.state.shadowBlur ? [] : Xt(e), this.actions.push({
                method: "setShadow",
                data: [this.state.shadowOffsetX, this.state.shadowOffsetY, this.state.shadowBlur, t]
              }), this.state.shadowColor = t
            }
            set shadowOffsetX(e) {
              m.IS_DEVTOOLS || m.IS_PC || m.IS_MINA ? this.actions.push({
                method: "setShadowOffsetX",
                data: [e]
              }) : (this.actions.push({
                method: "setShadow",
                data: [e, this.state.shadowOffsetY, this.state.shadowBlur, this.state.shadowColor]
              }), this.state.shadowOffsetX = e)
            }
            set shadowOffsetY(e) {
              m.IS_DEVTOOLS || m.IS_PC || m.IS_MINA ? this.actions.push({
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
              const n = t[1].trim().split(/\s/),
                o = parseFloat(t[3]),
                r = t[7],
                a = [];
              let i = "";
              const s = this;

              function c() {
                a.push({
                  method: "setFontWeight",
                  data: ["normal"]
                }), s.state.fontWeight = "normal"
              }
              if (n.forEach(((e, t) => {
                  ["italic", "oblique", "normal"].indexOf(e) > -1 ? (a.push({
                    method: "setFontStyle",
                    data: [e]
                  }), this.state.fontStyle = e) : ["bold", "normal"].indexOf(e) > -1 ? (a.push({
                    method: "setFontWeight",
                    data: [e]
                  }), this.state.fontWeight = e) : 0 === t ? (a.push({
                    method: "setFontStyle",
                    data: ["normal"]
                  }), s.state.fontStyle = "normal") : 1 === t && c()
                })), 1 === n.length && c(), i = a.map((e => e.data[0])).join(" "), this.state.fontSize = o, this.state.fontFamily = r, m.IS_DEVTOOLS || m.IS_PC || m.IS_MINA) return i = `${i} ${o}px ${r}`, void this.actions.push({
                method: "setFont",
                data: [i]
              });
              this.actions.push.apply(this.actions, a), this.actions.push({
                method: "setFontSize",
                data: [o]
              }, {
                method: "setFontFamily",
                data: [r]
              })
            }
            get font() {
              return this.state.font
            }
            set fillStyle(e) {
              sn(this, "setFillStyle", e)
            }
            set strokeStyle(e) {
              sn(this, "setStrokeStyle", e)
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

          function sn(e, t, n) {
            "string" == typeof n ? gn ? e.actions.push({
              method: t,
              data: ["normal", n]
            }) : e.actions.push({
              method: t,
              data: ["normal", Xt(n)]
            }) : "object" == typeof n && n instanceof nn ? e.actions.push({
              method: t,
              data: [n.type, n.data, n.colorStop]
            }) : n instanceof rn && e.actions.push({
              method: t,
              data: ["pattern", n.image, n.repetition]
            })
          } [].concat(["scale", "rotate", "translate", "setTransform", "transform"], ["drawImage", "fillText", "fill", "stroke", "fillRect", "strokeRect", "clearRect", "strokeText"]).forEach((function (e) {
            an.prototype[e] = "fill" === e || "stroke" === e ? function () {
              this.actions.push({
                method: e + "Path",
                data: en(this.path)
              })
            } : "fillRect" === e ? function (e, t, n, o) {
              this.actions.push({
                method: "fillPath",
                data: [{
                  method: "rect",
                  data: [e, t, n, o]
                }]
              })
            } : "strokeRect" === e ? function (e, t, n, o) {
              this.actions.push({
                method: "strokePath",
                data: [{
                  method: "rect",
                  data: [e, t, n, o]
                }]
              })
            } : "fillText" === e || "strokeText" === e ? function (t, n, o, r) {
              const a = [t.toString(), n, o];
              "number" == typeof r && a.push(r), this.actions.push({
                method: e,
                data: a
              })
            } : "drawImage" === e ? function (t, n, o, r, a, i, s, c, l) {
              let u;
              t = t._src ? t._src : tn(this, t), void 0 === l && (i = n, s = o, c = r, l = a, n = void 0, o = void 0, r = void 0, a = void 0), u = Kt(n) && Kt(o) && Kt(r) && Kt(a) ? [t, i, s, c, l, n, o, r, a] : Kt(c) && Kt(l) ? [t, i, s, c, l] : [t, i, s], this.actions.push({
                method: e,
                data: u
              })
            } : "clearRect" === e ? function () {
              this.useHardwareAccelerate = !1, this.actions.push({
                method: e,
                data: [].slice.apply(arguments)
              })
            } : "transform" === e || "setTransform" === e ? function (t, n, o, r, a, i) {
              this._transform = {
                a: t,
                b: n,
                c: o,
                d: r,
                e: a,
                f: i
              }, this.actions.push({
                method: e,
                data: [t, n, o, r, a, i]
              })
            } : function () {
              this._ignoreScale && "scale" === e ? this._ignoreScale = !1 : this.actions.push({
                method: e,
                data: [].slice.apply(arguments)
              })
            }
          })), ["setFillStyle", "setTextAlign", "setStrokeStyle", "setGlobalAlpha", "setShadow", "setFontSize", "setLineCap", "setLineJoin", "setLineWidth", "setMiterLimit", "setTextBaseline", "setLineDash"].forEach((function (e) {
            "setFillStyle" === e || "setStrokeStyle" === e ? an.prototype[e] = function () {
              const t = arguments[0];
              sn(this, e, t)
            } : "setGlobalAlpha" === e ? an.prototype[e] = function () {
              const t = [].slice.apply(arguments, [0, 1]);
              t[0] = Math.floor(255 * parseFloat(t[0])), this.actions.push({
                method: e,
                data: t
              })
            } : "setShadow" === e ? an.prototype[e] = function () {
              const t = [].slice.apply(arguments, [0, 4]);
              gn || (t[3] = m.IS_IOS && 0 === t[2] ? [] : Xt(t[3])), this.actions.push({
                method: e,
                data: t
              }), this.state.shadowBlur = t[2], this.state.shadowColor = t[3], this.state.shadowOffsetX = t[0], this.state.shadowOffsetY = t[1]
            } : "setLineDash" === e ? an.prototype[e] = function () {
              const t = [].slice.apply(arguments, [0, 2]);
              t[0] = t[0] && t[0].length ? t[0] : [0, 0], t[1] = t[1] || 0, this.actions.push({
                method: e,
                data: t
              }), this.state.lineDash = t[0]
            } : "setFontSize" === e ? an.prototype.setFontSize = function (e) {
              this.state.font = this.state.font.replace(/\d+\.?\d*px/, e + "px"), this.state.fontSize = e, this.actions.push({
                method: "setFontSize",
                data: [e]
              })
            } : an.prototype[e] = function () {
              this.actions.push({
                method: e,
                data: [].slice.apply(arguments, [0, 1])
              })
            }
          }));
          const cn = {},
            ln = {};

          function un(e) {
            return cn[e] ? cn[e] : dn(e)
          }

          function dn(e) {
            const t = new pn(e);
            return cn[e] = t, t
          }
          m.IS_ANDROID && (0, a.jQ)("onXWebCanvasSurfaceChange", ((e = {}) => {
            const t = ln[e.viewId];
            t && "function" == typeof t.swapSurface && t.swapSurface()
          })), (0, a.Ld)("skiaCanvasSizeChanged", (({
            canvasId: e,
            pluginId: t,
            nodeId: n,
            position: o
          }, r) => {
            const a = Ut(r, e, t, n),
              i = cn[a];
            0 === o.width && 0 === o.height || !i || i.width === o.width && i.height === o.height || (i.width = o.width, i.height = o.height, i.canvas && i.context && (i.canvas.width = o.width, i.canvas.height = o.height, i.needsReplay() && i.replayActions()))
          }));
          class pn {
            constructor(e) {
              this.id = e, this.width = 0, this.height = 0, this.context = null, this._actionsDefer = [], this._actionsWaiting = !1, this._images = [], this._actionsQueue = [], this._contextPromise = new Promise((e => {
                this._resolveContext = e
              }))
            }
            init(e, t, o, r) {
              this.width = t, this.height = o, m.IS_IOS && (this.canvas = new n.g.Canvas(e), this.context = this.canvas.getContext("2d")), m.IS_ANDROID && (this.canvasView = HTMLCanvasView.createView(r), ln[r] = this.canvasView, this.canvas = HTMLCanvasElement.createElement(this.canvasView), this.context = this.canvas.getContext("2d")), this._resolveContext && this._resolveContext(this.context)
            }
            preloadImage(e) {
              e.forEach((e => {
                let t = "";
                const o = e.method,
                  r = e.data;
                "drawImage" === o ? t = r[0] : "setFillStyle" === o && "pattern" === r[0] && (t = r[1]), t && !this._images[t] && (m.IS_IOS ? (this._images[t] = new n.g.Image, this._images[t].onload = () => {
                  this._images[t].ready = !0
                }) : m.IS_ANDROID && (this._images[t] = new SkiaImage, this._images[t].onload = () => {
                  this._images[t].ready = !0
                }), this._images[t].setSrc(t))
              }))
            }
            checkImageLoaded(e, t, n) {
              const o = this._images[e];
              return o.ready ? (n(o), !0) : (this._actionsDefer.unshift([t, !0]), this._actionsWaiting = !0, o.onload = () => {
                o.ready = !0, n(o), this._actionsWaiting = !1;
                const e = this._actionsDefer.slice(0);
                this._actionsDefer = [];
                let t = e.shift();
                for (; t;) this.draw(t[0], t[1], t[2], this._webviewId, this._nodeId, this._pluginId), t = e.shift()
              }, !1)
            }
            draw(e, t, n, o, r, a) {
              this._webviewId = o, this._nodeId = r, this._pluginId = a, this.context ? this._draw(e, t, n, o, r, a) : this._contextPromise.then((() => (this._draw(e, t, n, o, r, a), null))).catch((() => {}))
            }
            _draw(e, t, n, o, r, a) {
              const i = this.context;
              if (e)
                if (t || this._flushQueue(), this._enqueue({
                    actions: e,
                    reserve: t
                  }), this._actionsWaiting) this._actionsDefer.push([e, t, n]);
                else {
                  t || (i.fillStyle = "#000000", i.strokeStyle = "#000000", i.shadowColor = "#000000", i.shadowBlur = 0, i.shadowOffsetX = 0, i.shadowOffsetY = 0, i.setTransform(1, 0, 0, 1, 0, 0), i.clearRect(0, 0, this.width, this.height)), this.preloadImage(e, o, r, a), i.save();
                  for (let t = 0; t < e.length; t++) {
                    const n = e[t];
                    let o = n.method;
                    const r = n.data;
                    if (/^set/.test(o) && "setTransform" !== o) {
                      const n = o[3].toLowerCase() + o.slice(4);
                      let a;
                      if ("fillStyle" === n || "strokeStyle" === n) {
                        if ("normal" === r[0]) a = r[1];
                        else if ("linear" === r[0]) a = i.createLinearGradient(...r[1]), r[2].forEach((function (e) {
                          const t = e[0],
                            n = e[1];
                          a.addColorStop(t, n)
                        }));
                        else if ("radial" === r[0]) {
                          const e = r[1][0],
                            t = r[1][1],
                            n = [e, t, 0, e, t, r[1][2]];
                          a = i.createRadialGradient(...n), r[2].forEach((function (e) {
                            const t = e[0],
                              n = e[1];
                            a.addColorStop(t, n)
                          }))
                        } else if ("pattern" === r[0]) {
                          if (!this.checkImageLoaded(r[1], e.slice(t + 1), (e => {
                              e && (i[n] = i.createPattern(e, r[2]))
                            }))) break;
                          continue
                        }
                        i[n] = a
                      } else if ("globalAlpha" === n) i[n] = r[0] / 255;
                      else if ("shadow" === n) {
                        const e = ["shadowOffsetX", "shadowOffsetY", "shadowBlur", "shadowColor"];
                        r.forEach((function (t, n) {
                          e[n], i[e[n]] = t
                        }))
                      } else "fontSize" === n ? i.font = i.font.replace(/\d+\.?\d*px/, r[0] + "px") : "lineDash" === n ? (i.setLineDash(r[0]), i.lineDashOffset = r[1] || 0) : "textBaseline" === n ? ("normal" === r[0] && (r[0] = "alphabetic"), i[n] = r[0]) : i[n] = r[0]
                    } else if ("fillPath" === o || "strokePath" === o) o = o.replace(/Path/, ""), i.beginPath(), r.forEach((function (e) {
                      i[e.method](...e.data)
                    })), i[o]();
                    else if ("fillText" === o) {
                      let [e, ...t] = r;
                      t && t.map && (t = t.map((e => "string" == typeof e ? parseFloat(e) : e))), i.fillText(e, ...t)
                    } else if ("drawImage" === o) {
                      let [n, ...o] = r;
                      this._images = this._images || {}, o && o.map && (o = o.map((e => "string" == typeof e ? parseFloat(e) : e)));
                      if (!this.checkImageLoaded(n, e.slice(t + 1), (e => {
                          e && i.drawImage.apply(i, [e, ...o.slice(4, 8), ...o.slice(0, 4)])
                        }))) break
                    } else if ("clip" === o) r.forEach((function (e) {
                      i[e.method](...e.data)
                    })), i.clip();
                    else if ("arcTo" === o || "rotate" === o) {
                      let e = r;
                      r && r.map && (e = r.map((e => "string" == typeof e ? parseFloat(e) : e))), i[o](...e)
                    } else if ("strokeText" === o) {
                      let [e, ...t] = r;
                      t && t.map && (t = t.map((e => "string" == typeof e ? parseFloat(e) : e))), i[o](e, ...t)
                    } else i[o](...r)
                  }
                  i.restore(), m.IS_ANDROID && this.canvasView.present(), this._actionsWaiting || "function" == typeof n && n()
                }
            }
            getImageData(e = {}) {
              this.context ? this._getImageData(e) : this._contextPromise.then((() => (this._getImageData(e), null))).catch((() => {}))
            }
            _getImageData(e = {}) {
              let t;
              try {
                const {
                  x: n,
                  y: o,
                  width: r,
                  height: a
                } = e || {};
                t = this.context.getImageData(n, o, r, a)
              } catch (t) {
                return void(0, r.Ky)(e, t)
              }
              if (!t) return void(0, r.Ky)("canvasGetImageData:fail");
              const n = {
                width: t.width,
                height: t.height,
                data: t.data
              };
              (0, r.AK)(e, n)
            }
            putImageData(e = {}) {
              this.context ? this._putImageData(e) : this._contextPromise.then((() => (this._putImageData(e), null))).catch((() => {}))
            }
            _putImageData(e = {}) {
              try {
                const {
                  x: t,
                  y: o,
                  width: r,
                  height: a,
                  data: i
                } = e || {};
                let s;
                m.IS_IOS ? s = new n.g.ImageData(i, r, a) : m.IS_ANDROID && (s = new SkiaImageData(i, r, a)), m.IS_ANDROID && this.canvasView.prepareDraw(), this.context.putImageData(s, t, o), m.IS_ANDROID && this.canvasView.present()
              } catch (t) {
                return void(0, r.Ky)(e, t)
              }(0, r.El)(e, "canvasPutImageData:ok")
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
          const fn = m.IS_ANDROID && Q.Z.useXWebCanvas,
            hn = m.IS_IOS && Q.Z.useSkiaCanvas,
            gn = (m.IS_ANDROID && Q.Z.useNewXWebCanvasToTFP, fn || hn),
            yn = {},
            vn = {},
            mn = {},
            bn = {};
          let _n = 0,
            wn = 0,
            In = 4500;
          const Sn = Date.now,
            An = (Gt("onCanvasMethodCallback"), Gt("onDrawCanvas"));

          function kn({
            canvasId: e,
            pluginId: t,
            nodeId: n,
            viewId: o,
            webviewId: r
          }) {
            const a = Ut(r, e, t, n);
            mn[a] && delete mn[a], gn && function ({
              canvasId: e,
              pluginId: t,
              nodeId: n,
              viewId: o,
              webviewId: r
            }) {
              const a = Ut(r, e, t, n);
              delete cn[a], delete ln[o]
            }({
              webviewId: r,
              canvasId: e,
              pluginId: t,
              nodeId: n,
              viewId: o
            })
          }

          function Cn(e, t, n = !1, o, r, i, s) {
            if (m.IS_DEVTOOLS || m.IS_WINDOWS || m.IS_MAC || m.IS_MINA) {
              const o = {
                actions: t,
                reserve: n,
                canvasId: e
              };
              An(o, (function (e) {
                "function" == typeof s && s({
                  errMsg: e.errMsg
                })
              })), (0, a.nY)("canvasActionsChanged", o)
            } else(0, a.IN)("drawCanvas", {
              canvasId: e,
              reserve: n,
              useHardwareAccelerate: o,
              actions: t,
              success: r,
              fail: i,
              complete: s
            })
          }

          function Pn({
            isWidgetCanvas: e,
            canvasId: t,
            actions: n,
            reserve: r,
            useHardwareAccelerate: i,
            success: s,
            fail: c,
            complete: l
          }, u = o.Z.currentWebviewId, d = "", p = "") {
            const f = Sn();
            if (!Array.isArray(n)) return;
            if (e) {
              if (f - _n < In) {
                const e = {
                  errMsg: "drawCanvas:fail 调用 draw 过于频繁。"
                };
                return wn += 1, wn > 500 && (wn = 0, console.warn(e.errMsg)), void("function" == typeof c && c(e))
              }
              return _n = f, void(0, a.IN)("drawCanvas", {
                canvasId: void 0,
                reserve: r,
                actions: n,
                success: s,
                fail: c,
                complete: l
              })
            }
            const h = Ut(u, t, d, p);
            if (gn) {
              un(h).draw(n, r, l, u, p, d)
            } else if ("number" == typeof mn[h]) {
              Cn(mn[h], n, r, i, s, c, l)
            } else bn[h] = bn[h] || [], bn[h] = bn[h].concat({
              actions: n,
              reserve: r,
              useHardwareAccelerate: i,
              success: s,
              fail: c,
              complete: l
            })
          }
          "undefined" != typeof __widgetConfig__ && (In = "number" == typeof __widgetConfig__.drawMinInterval ? __widgetConfig__.drawMinInterval : 25), (0, a.Ld)("canvasInsert", (({
            canvasId: e,
            viewId: t,
            canvasNumber: n,
            pluginId: o,
            data: r,
            position: a,
            nodeId: i,
            compPath: s
          }, c) => {
            gn && function ({
              canvasId: e,
              viewId: t,
              canvasNumber: n,
              pluginId: o,
              position: r,
              nodeId: a
            }, i) {
              const s = Ut(i, e, o, a);
              let c = un(s);
              c.context && (c = dn(s)), c.context || c.init(n, r.width, r.height, t, i)
            }({
              canvasId: e,
              viewId: t,
              canvasNumber: n,
              pluginId: o,
              position: a,
              nodeId: i
            }, c);
            const l = Ut(c, e, o, i);
            yn[n] = {
              lastTouches: [],
              data: r,
              compPath: s
            }, mn[l] = n, vn[n] = a, Array.isArray(bn[l]) && (bn[l].forEach((function (e) {
              Cn(n, e.actions, e.reserve, e.useHardwareAccelerate, e.success, e.fail, e.complete)
            })), delete bn[l]), v(c, (() => {
              kn({
                canvasId: e,
                pluginId: o,
                nodeId: i,
                viewId: t,
                webviewId: c
              })
            }))
          })), (0, a.Ld)("canvasUpdate", (({
            canvasNumber: e,
            position: t
          }) => {
            (0, Vt.n)(vn, e) && (vn[e] = t)
          })), (0, a.Ld)("canvasRemove", (({
            canvasId: e,
            pluginId: t,
            nodeId: n,
            viewId: o
          }, r) => {
            kn({
              canvasId: e,
              pluginId: t,
              nodeId: n,
              viewId: o,
              webviewId: r
            })
          }));
          n(7618);
          let Tn, xn;
          (0, a.Ld)("getLaunchAppInfo", (({
            callbackId: e
          }, t) => {
            (0, a.nY)("appLaunchInfoGot", {
              res: {
                sceneHistory: _e.sceneHistory,
                appId: _e.appId
              },
              callbackId: e
            }, [t])
          })), Q.Z.onReady((() => {
            if (!(0, J.isGame)()) {
              const e = Q.Z.appLaunchInfo || {};
              Object.assign(e, Q.Z.debugLaunchInfo || {}), _e.appLaunchInfo = e, _e.appLaunchShareInfo = e.shareInfo, xe(e), xn = Ie(e, !0), Tn = Ae(xn, Q.Z.preloadType), xn.__public = ke(Tn, ""), Te(Tn)
            }
          }));
          const Mn = (0, G.s)("AppShow"),
            En = (Mn.onMethod, Mn.offMethod, Mn.internalOnMethod);
          Ee((e => {
            Mn.emitInternal(e)
          })), dt((function e(t) {
            if ("appLaunch" === t.openType) {
              const t = function () {
                if (!xn) throw new Error("getLaunchOptionsSync:fail get launch options");
                return xn || {}
              }();
              Mn.emitInternal(t), pt(e)
            }
          }));
          const On = (0, G.s)("AppHide"),
            Ln = (On.onMethod, On.offMethod, On.internalOnMethod);
          H((e => {
            On.emitInternal(e)
          }));
          const Dn = (0, G.s)("AppUnhang"),
            Bn = (Dn.internalOnMethod, Dn.onMethod);
          (0, a.jQ)("onAppUnhang", ((e = {}) => {
            Dn.emit(e)
          }));
          var Rn = n(4532);
          o.Z.appStatus = Rn.w$.FORE_GROUND, o.Z.hanged = !1, En((e => {
            Date.now()
          })), Ln((e => {
            Date.now()
          })), Ee((() => {
            o.Z.appStatus = Rn.w$.FORE_GROUND
          })), H((e => {
            "hide" === e.mode ? o.Z.appStatus = Rn.w$.LOCK : o.Z.appStatus = Rn.w$.BACK_GROUND, "close" === e.mode ? o.Z.hanged = !1 : "hang" === e.mode && (o.Z.hanged = !0)
          })), Bn((() => {
            o.Z.hanged = !1
          }));
          let Nn = 0,
            Fn = {};
          Q.Z.onReady((() => {
            Nn = Q.Z.appType, Fn = Q.Z.appLaunchInfo
          }));
          const Wn = (e, t) => {
            const n = [];
            return t.forEach((t => {
              let o = e[t];
              "boolean" == typeof o && (o = o ? 1 : 0), n.push(`${t}:${o}`)
            })), n.join("|")
          };
          let jn = {};
          Ln((() => {
            let e = !1;
            Object.keys(jn).forEach((t => {
              const n = jn[t];
              n.cameraFrame && n.webgl && (e = !0)
            })), e && (({
              name: e,
              data: t
            }) => {
              const n = "undefined" != typeof __appServiceEngine__ ? __appServiceEngine__.getCurrentPagesByDomain("") : [],
                o = n.length > 0 && n[n.length - 1].__route__ || "",
                r = (0, me.PL)(),
                a = wx && wx.version && wx.version.version || "";
              let i = "";
              switch (e) {
                case "loadFontFace":
                  i = Wn(t, ["family", "source", "global", "scopes"]);
                  break;
                case "requestSubscribeMessage":
                  i = Wn(t, ["templateCount", "templateType", "operationType"]);
                  break;
                case "openCustomerServiceChat":
                  i = Wn(t, ["extInfo", "corpId"])
              }
              const s = [Math.round(Date.now() / 1e3), Fn.scene, Fn.sessionid || Fn.sessionId, o, r, a, e, i, Nn, 1, ""].join(",");
              Reporter.reportKeyValue({
                key: "APIUse",
                value: s,
                immediately: !0
              })
            })({
              name: "suspectAR",
              data: {}
            }), jn = {}
          }));
          n(2614);
          const $n = new Map;
          (0, a.Ld)("loadedFontFace", (e => {
            const {
              callbackId: t,
              errMsg: n = ""
            } = e;
            if (!$n.has(t)) return;
            const o = $n.get(t);
            $n.delete(t);
            const {
              success: r,
              fail: a,
              complete: i
            } = o, s = 0 === n.indexOf("loadFontFace:ok"), c = {
              status: s ? "loaded" : "error",
              errMsg: n
            };
            s ? "function" == typeof r && r(c) : "function" == typeof a && a(c), "function" == typeof i && i(c)
          }));
          (0, G.s)("skiaCanvasLoadFontFace");
          new WeakMap;
          const Vn = {};
          (0, G.s)("skiaCanvasLoadFontFace");
          const Zn = {};
          new WeakMap;

          function Un(e, t, n, r) {
            if ("onLongPress" === e) return;
            const a = function (e, t) {
                const n = Ut(e, t);
                return Zn[n]
              }(r, t.canvasNumber),
              {
                touches: i,
                changedTouches: s
              } = jt(a.lastTouches, e, n);
            a.lastTouches = i, a[e] && "function" == typeof o.Z.webviewEventCallback && o.Z.webviewEventCallback({
              data: {
                type: $t[e],
                timeStamp: new Date - a.startTime,
                target: a.target,
                touches: Qt(i),
                changedTouches: Qt(s)
              },
              eventName: a[e],
              webviewId: r,
              nodeId: a.nodeId
            })
          }
          Q.Z.onReady((() => {
            ["onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel", "onLongPress"].forEach((e => {
              (0, u.n)(e, ((t, n = 0) => {
                const r = JSON.parse(t.data || "{}"),
                  {
                    canvasNumber: a,
                    skia: i,
                    type: s
                  } = r;
                if ("TextView" === s || "ImageView" === s) return;
                if ("android-webgl" === s) return void Un(e, r, t, n);
                if (i) {
                  if (!(0, Vt.n)(Vn, a)) return
                } else if (!(0, Vt.n)(yn, a)) return;
                let c;
                c = i ? Vn[a].data : yn[a].data;
                const {
                  touches: l,
                  changedTouches: u
                } = jt(c.lastTouches, e, t);
                c.lastTouches = l, c[e] && "function" == typeof o.Z.webviewEventCallback && ("onTouchMove" === e && 0 === u.length || o.Z.webviewEventCallback({
                  data: {
                    type: $t[e],
                    timeStamp: new Date - c.startTime,
                    target: c.target,
                    touches: l,
                    changedTouches: u
                  },
                  eventName: c[e],
                  webviewId: n,
                  nodeId: r.nodeId
                }))
              }))
            }))
          }));
          const Gn = m.IS_DEVTOOLS || m.IS_WINDOWS || m.IS_MAC || m.IS_MINA,
            qn = {},
            Hn = {},
            Qn = {},
            Yn = new l.y,
            Jn = {},
            zn = new WeakMap,
            Kn = {},
            Xn = {},
            eo = ["play", "pause", "stop", "seek", "sendDanmu", "playbackRate", "requestFullScreen", "exitFullScreen", "showStatusBar", "hideStatusBar", "exitPictureInPicture", "requestBackgroundPlayback", "exitBackgroundPlayback", "hidePoster"],
            to = {},
            no = {};
          let oo = Q.Z.useXWebVideo,
            ro = !0;
          const ao = Object.keys;

          function io(e) {
            Jn[e] || (Jn[e] = !0, v(e, (e => {
              delete Jn[e], ao(qn).concat(ao(Hn)).forEach((t => {
                new RegExp("^" + e).test(t) && delete qn[t]
              })), ao(Kn).forEach((t => {
                (new RegExp("^api_" + e).test(t) || new RegExp("^SQ_" + e).test(t)) && delete Kn[t]
              })), m.IS_MINA && (0, a.IN)("setKeepScreenOn", {
                keepScreenOn: !1
              }, {})
            })))
          }(0, a.Ld)("updateVideoPictureInPicture", ((e = {}, t) => {
            Qn.webviewId = t, Qn.playerId = e.playerId
          })), (0, a.Ld)("videoAdPlay", (({
            videoPlayerId: e,
            type: t
          }, n) => {
            Xn[`${n}_${e}`] = t
          })), (0, a.Ld)("videoPlayerInsert", (({
            domId: e,
            videoPlayerId: t,
            pluginId: n,
            nodeId: o,
            nodeInfo: r,
            data: a
          }, i) => {
            let s = `${i}_${n}_${e}_`;
            o && o !== __virtualDOM__.getRootNodeId(i) && (s += o), qn[s] = t,
              function (e, t, n) {
                if (!m.IS_DEVTOOLS) return;
                const o = document.createElement("video");
                e.elem = o, Hn[`${n}_${t}`] = e, o.controls = !1, o.preload = "auto", o.muted = !0, o.autoplay = e.autoplay, o.style.width = e.width + "px", o.style.height = e.height + "px"
              }(r, t, i), Yn.emit("videoPlayerInsert"), io(i), no[`${i}_${t}`] = a || {}
          })), (0, a.Ld)("xWebVideoInserted", (({
            domId: e,
            viewId: t,
            pluginId: n,
            nodeId: o,
            data: r
          }, a) => {
            let i = `${a}_${n}_${e}_`;
            o && o !== __virtualDOM__.getRootNodeId(a) && (i += o), qn[i] = t, no[`${a}_${t}`] = r || {}, Yn.emit("videoPlayerInsert"), io(a)
          })), (0, a.Ld)("videoPlayerUpdated", (({
            action: e,
            value: t,
            videoPlayerId: n
          }, o) => {
            po({
              _videoId: n,
              _webviewId: o
            }, e, t)
          })), (0, a.Ld)("videoPlayerRemoved", (({
            domId: e,
            videoPlayerId: t,
            pluginId: n,
            nodeId: o
          }, r) => {
            let a = `${r}_${n}_${e}_`;
            o && o !== __virtualDOM__.getRootNodeId(r) && (a += o), delete qn[a],
              function (e, t) {
                delete Hn[`${t}_${e}`]
              }(t, r);
            let i = `api_${r}_${n}_${e}_`;
            o && o !== __virtualDOM__.getRootNodeId(r) && (i += o);
            const s = `SQ_${r}_${t}`;
            delete Kn[i], delete Kn[s], delete no[`${r}_${t}`]
          })), (0, a.Ld)("xWebVideoRemoved", (({
            domId: e,
            pluginId: t,
            nodeId: n
          }, o) => {
            let r = `${o}_${t}_${e}_`;
            n && n !== __virtualDOM__.getRootNodeId(o) && (r += n);
            const a = qn[r];
            delete qn[r], delete no[`${o}_${a}`]
          })), (0, a.Ld)("xWebVideoSupported", (({
            isXWebSupported: e
          }) => {
            oo = oo && e
          })), (0, a.Ld)("insertVideoToWebLayerStateChanged", (({
            viewId: e,
            inserted: t
          }, n) => {
            to[`${n}_${e}`] = t
          })), Q.Z.onReady((() => {
            Q.Z.global && Q.Z.global.window && "seperated" === Q.Z.global.window.renderingMode && (ro = !1, oo = !1)
          }));
          class so {}
          class co {
            constructor(e, t) {
              const n = this.exportContext = new so;
              eo.forEach((e => {
                n[e] = this[e].bind(this)
              })), n._videoId = e, n._webviewId = t
            }
            play() {
              const e = this._getAppStatus();
              e === Rn.w$.BACK_GROUND || e === Rn.w$.LOCK || this._invokeMethod("play")
            }
            pause() {
              this._invokeMethod("pause")
            }
            stop() {
              this._invokeMethod("stop")
            }
            seek(e, t = "accurate") {
              if ("accurate" !== t && "inaccurate" !== t) throw new r.iZ("Parameter 2 must either be `accurate` or be `inaccurate`");
              this._invokeMethod("seek", [e, t])
            }
            sendDanmu({
              text: e,
              color: t
            }) {
              this._invokeMethod("sendDanmu", [e, t])
            }
            playbackRate(e) {
              .5 !== (e = parseFloat(e.toFixed(2))) && .8 !== e && 1 !== e && 1.25 !== e && 1.5 !== e && 2 !== e || this._invokeMethod("playbackRate", [e])
            }
            requestFullScreen(e = {}) {
              const t = e.direction;
              [0, 90, -90].indexOf(t) > -1 ? this._invokeMethod("requestFullScreen", [t]) : this._invokeMethod("requestFullScreen"), zn.set(this, !0)
            }
            exitFullScreen() {
              this._invokeMethod("exitFullScreen"), this.showStatusBar(), zn.set(this, !1)
            }
            showStatusBar(e = {}) {
              (0, a.IN)("showStatusBar", e)
            }
            hideStatusBar(e = {}) {
              if (m.IS_ANDROID) {
                const t = "hideStatusBar:ok";
                return "function" == typeof e.success && e.success({
                  errMsg: t
                }), void("function" == typeof e.complete && e.complete({
                  errMsg: t
                }))
              }
              if (!zn.get(this)) {
                const t = "hideStatusBar:fail cannot be invoked but in fullscreen.";
                return "function" == typeof e.fail && e.fail({
                  errMsg: t
                }), void("function" == typeof e.complete && e.complete({
                  errMsg: t
                }))
              }(0, a.IN)("hideStatusBar", e)
            }
            exitPictureInPicture(e = {}) {
              if (!Qn) return;
              const t = Qn.playerId;
              m.IS_IOS ? (0, a.IN)("operateVideoPlayer", p()(p()({}, e), {}, {
                videoPlayerId: t,
                type: "exitPictureInPicture"
              }), {
                beforeAll(e) {
                  e.errMsg = e.errMsg.replace("operateVideoPlayer", "exitPictureInPicture")
                }
              }) : m.IS_ANDROID && (0, a.IN)("operateXWebVideo", p()(p()({}, e), {}, {
                viewId: t,
                type: "exitPictureInPicture"
              }), {
                beforeAll(e) {
                  e.errMsg = e.errMsg.replace("operateXWebVideo", "exitPictureInPicture")
                }
              })
            }
            requestBackgroundPlayback() {
              this._invokeMethod("requestBackgroundPlayback", [])
            }
            exitBackgroundPlayback() {
              this._invokeMethod("exitBackgroundPlayback", [])
            }
            hidePoster() {
              this._invokeMethod("hidePoster")
            }
            _invokeMethodWithId(e, t, n) {
              "number" == typeof e ? function () {
                if ("begin" === Xn[`${this.webviewId}_${e}`]) return void console.error(`${t}:fail cannot operate video while ad playing.`);
                if (ro && (m.IS_ANDROID && oo || m.IS_IOS && to[`${this.webviewId}_${e}`]) && ["requestFullScreen", "exitFullScreen", "sendDanmu", "seek", "stop", "play"].indexOf(t) > -1) return void(0, a.nY)(`video_${this.webviewId}_${e}_actionChanged`, {
                  method: t,
                  data: n
                }, [this.webviewId]);
                const o = this._getAppStatus();
                if (!Gn && o === Rn.w$.BACK_GROUND && "stop" === t) {
                  let n = "operateVideoPlayerBackground";
                  return m.IS_ANDROID && oo && (n = "operateXWebVideoBackground"), void(0, a.IN)(n, {
                    viewId: e,
                    videoPlayerId: e,
                    type: t
                  })
                }
                Gn ? (this._sendAction(e, {
                  method: t,
                  data: n
                }), ["play", "pause", "stop", "seek", "playbackRate"].indexOf(t) > -1 && po(this.exportContext, t, n && n[0])) : m.IS_ANDROID && oo ? (0, a.IN)("operateXWebVideo", {
                  viewId: e,
                  type: t,
                  data: n
                }) : (0, a.IN)("operateVideoPlayer", {
                  data: n,
                  videoPlayerId: e,
                  type: t
                })
              }.apply(this) : Yn.once("videoPlayerInsert", (() => {
                this._invokeMethod(t, n)
              }))
            }
            _sendActionWithEvnetName(e, t) {
              (0, a.nY)(e, t, [this.webviewId])
            }
            _getAppStatus() {
              return o.Z.appStatus
            }
            _getHanged() {
              return o.Z.hanged
            }
          }
          class lo extends co {
            constructor(e, t, n, o) {
              if (super(), "string" != typeof e) throw new r.iZ("Parameter 1 should be a string");
              this.domId = e, this.webviewId = t, this.pluginId = o, this.nodeId = n
            }
            _invokeMethod(e, t) {
              const n = `${this.webviewId}_${this.pluginId}_${this.domId}_${this.nodeId}`,
                o = qn[n];
              this._invokeMethodWithId(o, e, t)
            }
            _sendAction(e, t) {
              this._sendActionWithEvnetName(`video_${this.webviewId}_${e}_actionChanged`, t)
            }
          }
          class uo extends co {
            constructor(e, t) {
              super(e, t), this.videoPlayerId = e, this.webviewId = t
            }
            _invokeMethod(e, t) {
              const n = this.videoPlayerId;
              this._invokeMethodWithId(n, e, t)
            }
            _sendAction(e, t) {
              this._sendActionWithEvnetName(`video_${this.webviewId}_${e}_actionChanged`, t)
            }
          }

          function po(e, t, n) {
            if (!m.IS_DEVTOOLS) return;
            if (void 0 === e._webviewId) return;
            const o = Hn[`${e._webviewId}_${e._videoId}`].elem;
            switch (t) {
              case "setSrc":
                o.src = n;
                break;
              case "play":
                o.play();
                break;
              case "pause":
              case "stop":
                o.pause();
                break;
              case "seek":
                0 === o.readyState || 1 === o.readyState ? o.oncanplay = () => {
                  o.currentTime = n, o.oncanplay = null
                } : o.currentTime = n;
                break;
              case "playbackRate":
                o.playbackRate = n
            }
          }

          function fo(e, t, n = "", o = "") {
            let r = `api_${t}_${o}_${e}_`;
            if (n && n !== __virtualDOM__.getRootNodeId(t) && (r += n), Kn[r]) return Kn[r].exportContext;
            const a = new lo(e, t, n, o);
            return Kn[r] = a, a.exportContext
          }

          function ho(e, t) {
            const n = `SQ_${t}_${e}`;
            if (Kn[n]) return Kn[n].exportContext;
            const o = new uo(e, t);
            return Kn[n] = o, o.exportContext
          }
          let go = ["onVideoPlay", "onVideoPause", "onVideoTimeUpdate", "onVideoClickFullScreenBtn", "onVideoClickDanmuBtn", "onVideoFullScreenChange", "onVideoWaiting", "onVideoError", "onVideoLoadedMetaData", "onVideoProgress", "onVideoBackgroundPlaybackChange"];
          Q.Z.onReady((() => {
            m.IS_ANDROID && Q.Z.useXWebVideo && (go = go.map((e => e.replace("on", "onXWeb"))).concat(go)), go.forEach((e => {
              (0, u.n)(e, ((t = {}, n) => {
                const r = `bind${e.replace("XWeb","").substring(7).toLowerCase()}`,
                  {
                    handlers: a,
                    event: i,
                    createdTimestamp: s,
                    nodeId: c
                  } = JSON.parse(t.data);
                if (!a) return;
                const l = JSON.parse(t.data);
                if (t.videoPlayerId = t.videoPlayerId || l && l.videoPlayerId || "-1000", a[r] && "function" == typeof o.Z.webviewEventCallback) {
                  const e = {
                    type: r.substring(4),
                    target: i.target,
                    currentTarget: i.currentTarget,
                    timeStamp: (t.timeStamp || Date.now()) - s,
                    detail: {}
                  };
                  if ("bindtimeupdate" === r && (e.detail = {
                      currentTime: t.position,
                      duration: t.duration
                    }), "bindfullscreenchange" === r) {
                    let n = t.direction;
                    n = 0 === n || 180 === n || "vertical" === n ? "vertical" : "horizontal", e.detail = {
                      fullScreen: t.fullScreen,
                      fullscreen: t.fullScreen,
                      direction: n
                    }
                  }
                  "binderror" === r ? e.detail = {
                    errMsg: t.errMsg
                  } : "bindprogress" === r ? e.detail = {
                    buffered: t.buffered
                  } : "bindloadedmetadata" === r ? e.detail = {
                    duration: t.duration,
                    width: t.width,
                    height: t.height
                  } : "bindbackgroundplaybackchange" === r && (e.detail = {
                    playInBackground: t.playInBackground
                  }), o.Z.webviewEventCallback({
                    data: e,
                    eventName: a[r],
                    webviewId: n,
                    nodeId: c
                  })
                }
              }))
            }))
          })), (0, a.jQ)("onEnterVideoPictureInPicture", ((e = {}) => {
            const t = Qn.webviewId,
              n = no[`${t}_${e.videoPlayerId}`];
            n && n.handlers.bindenterpictureinpicture && "function" == typeof o.Z.webviewEventCallback && o.Z.webviewEventCallback({
              data: {
                type: "enterpictureinpicture",
                target: n.event.target,
                currentTarget: n.event.target,
                timeStamp: Date.now() - n.createdTimeStamp,
                touches: [],
                detail: {}
              },
              eventName: n.handlers.bindenterpictureinpicture,
              webviewId: t,
              nodeId: n.nodeId
            })
          })), (0, a.jQ)("onLeaveVideoPictureInPicture", ((e = {}) => {
            const t = Qn.webviewId,
              n = no[`${t}_${e.videoPlayerId}`];
            n && n.handlers.bindleavepictureinpicture && "function" == typeof o.Z.webviewEventCallback && o.Z.webviewEventCallback({
              data: {
                type: "leavepictureinpicture",
                target: n.event.target,
                currentTarget: n.event.target,
                timeStamp: Date.now() - n.createdTimeStamp,
                touches: [],
                detail: {}
              },
              eventName: n.handlers.bindleavepictureinpicture,
              webviewId: t,
              nodeId: n.nodeId
            })
          }));
          let yo = !1;
          const vo = {};
          (0, a.Ld)("enableCoverViewScrollEventTransfer", (({
            nodeId: e
          }) => {
            vo[e] = !0
          })), (0, a.Ld)("disableCoverViewScrollEventTransfer", (({
            nodeId: e
          }) => {
            vo[e] = !1
          })), (0, a.jQ)("onScrollViewScroll", ((e = {}, t = 0) => {
            if (yo || (setTimeout((function () {
                yo = !1
              }), 500), (0, a.IN)("hideKeyboard", {}), yo = !0), !e.data || "function" != typeof o.Z.webviewEventCallback) return;
            const n = JSON.parse(e.data);
            n.bindscroll && o.Z.webviewEventCallback({
              data: {
                type: "scroll",
                target: n.target,
                currentTarget: n.target,
                detail: {
                  scrollHeight: e.scrollHeight,
                  scrollWidth: e.scrollWidth,
                  scrollLeft: e.scrollLeft,
                  scrollTop: e.scrollTop
                },
                timeStamp: Date.now() - n.timeStamp
              },
              eventName: n.bindscroll,
              webviewId: t,
              nodeId: n.nodeId
            }), vo[n.nodeId] && (0, a.nY)("coverViewScrollEvent", {
              nodeId: n.nodeId,
              scrollHeight: e.scrollHeight,
              scrollWidth: e.scrollWidth,
              scrollLeft: e.scrollLeft,
              scrollTop: e.scrollTop
            })
          }));
          var mo = n(5542);
          const bo = (0, G.s)("AppRouteDone"),
            _o = bo.internalOnMethod;
          bo.internalOffMethod;
          (0, u.n)("onAppRouteDone", ((e, t = 0) => {
            lt.WZ.appRoute = !1, lt.WZ.appRouteDone = !0, (0, lt.R0)();
            let n = "";
            o.Z.navigatorLock = !1, e.path && (n = e.path, e.path = e.path.substring(0, e.path.length - 5)), e.webviewId = void 0 !== e.webviewId ? e.webviewId : t, "dismissPip" !== o.Z.lastOpenType && (o.Z.lastRoute = e.path || ""), bo.emit(e), (0, a.nY)("onAppRouteDone", {
                frameset: e.frameset
              }, [t]), e.path,
              function (e, t) {
                if (0 === Q.Z.appType && e && t && !o.Z.navigationBarTitleMap[e]) {
                  let n = "";
                  Q.Z.page[t] && Q.Z.page[t].window && (0, C.HD)(Q.Z.page[t].window.navigationBarTitleText) ? n = Q.Z.page[t].window.navigationBarTitleText : Q.Z.global && Q.Z.global.window && (0, C.HD)(Q.Z.global.window.navigationBarTitleText) && (n = Q.Z.global.window.navigationBarTitleText), o.Z.navigationBarTitleMap[e] = n
                }
              }(e.path, n)
          }));
          const wo = ({
            innerContext: e = {},
            args: t = {}
          } = {}) => {
            (0, a.r3)("authorize", t, {
              scope: ""
            }) && ("scope.userInfo" !== t.scope || (0, J.checkAPIAvailable)("getUserInfo") || (0, J.checkAPIAvailable)("authorize") ? (0, a.IN)("authorize", (0, r.f0)(t, {
              scope: [t.scope],
              requestInQueue: !e.hasOwnProperty("requestInQueue") || Boolean(e.requestInQueue)
            }), {
              beforeAll(e) {
                delete e.body, void 0 !== e.err_code && (e.errCode = e.err_code, delete e.err_code)
              }
            }) : (0, a.YG)("authorize", t, "scope unauthorized"))
          };
          var Io;
          const So = {},
            Ao = {},
            ko = {},
            Co = [],
            Po = {},
            To = new l.y,
            xo = new WeakMap;
          const Mo = function (e) {
              let t = [],
                n = 1;
              return (0, a.Ld)(e, (e => {
                  t.forEach((t => {
                    const n = t[0],
                      o = t[1];
                    n.cid === e.cid && n.cameraId === e.cameraId && o(e)
                  })), t = []
                })),
                function (e, o) {
                  e.cid = n++, t.push([e, o])
                }
            }("onOperateCameraCallback"),
            Eo = {};

          function Oo({
            cameraId: e,
            pluginId: t
          }, n) {
            To.emit("cameraRemoved"), delete So[`${n}_${t}`], delete Ao[`${n}_${e}`], delete ko[`${n}_${e}`], delete Eo[n]
          }(0, u.n)("onCameraInitDone", (() => {
            Eo[o.Z.currentWebviewId] = !0, To.emit("cameraInitialized")
          })), (0, a.Ld)("cameraInserted", (({
            cameraId: e,
            pluginId: t,
            bindings: n
          }, o) => {
            So[`${o}_${t}`] = e, Ao[`${o}_${e}`] = n, To.emit("cameraInsert"), v(o, (() => {
              Oo({
                cameraId: e,
                pluginId: t
              }, o)
            }))
          })), (0, a.Ld)("cameraUpdated", (({
            cameraId: e,
            hidden: t
          }, n) => {
            ko[`${n}_${e}`] = t
          })), (0, a.Ld)("cameraRemoved", (({
            cameraId: e,
            pluginId: t
          }, n) => {
            Oo({
              cameraId: e,
              pluginId: t
            }, n)
          })), _o((() => {
            if ("undefined" != typeof __appServiceEngine__ && "function" === __appServiceEngine__.getCurrentPagesByDomain) {
              const e = __appServiceEngine__.getCurrentPagesByDomain("").map((e => e.__wxWebviewId__));
              Object.keys(So).forEach((t => {
                const n = t.split("_").shift(); - 1 === e.indexOf(Number(n)) && (delete Ao[`${n}_${So[t]}`], delete ko[`${n}_${So[t]}`], delete So[t], Po[n] && (Po[n].forEach((e => {
                  clearTimeout(e)
                })), delete Po[n]))
              }))
            }
          })), (0, a.jQ)("onCameraVideoTaken", ((e = {}, t = 0) => {
            Co.forEach((n => {
              n(e, t)
            }))
          }));
          let Lo = (Io = class {
            constructor(e, t) {
              this.webviewId = e, this.pluginId = t
            }
            onCameraFrame(e) {
              if (m.IS_DEVTOOLS || m.IS_WINDOWS) return function (e, t, n) {
                let o = null,
                  r = null,
                  a = null;
                const i = (0, g.mh)("start", Z()((function* () {
                    let c = 480,
                      l = 640;
                    const u = `${t}_${n}`;
                    if (!e || "function" != typeof e) throw new Error("callback is not a function");
                    if ("number" != typeof So[u] && !So[u]) return yield new Promise((e => To.once("cameraInsert", e))), i(); {
                      const e = Ao[`${t}_${So[u]}`],
                        {
                          frameSize: n
                        } = e || {};
                      "small" === n ? (c = 288, l = 352) : "medium" === n ? (c = 480, l = 640) : "large" === n && (c = 720, l = 1280)
                    }
                    a = () => {
                      s()
                    }, To.once("cameraRemoved", a);
                    const d = window.createObjectURL || window.URL && window.URL.createObjectURL || window.webkitURL.createObjectURL,
                      p = document.createElement("video"),
                      f = document.createElement("canvas"),
                      h = f.getContext("2d");
                    let g;
                    f.width = c, f.height = l, p.style.width = c + "px", p.style.height = l + "px";
                    try {
                      g = yield new Promise(((e, t) => {
                        navigator.getUserMedia({
                          video: {
                            width: c,
                            height: l
                          },
                          audio: !1
                        }, e, t)
                      }))
                    } catch (e) {
                      throw new Error("camera is not found")
                    }
                    "srcObject" in p ? p.srcObject = g : p.src = d(g), p.play(), o = g.getTracks()[0];
                    const y = () => {
                      h.drawImage(p, 0, 0), e({
                        width: c,
                        height: l,
                        data: h.getImageData(0, 0, c, l).data.buffer
                      }), r = window.requestAnimationFrame(y)
                    };
                    r = window.requestAnimationFrame(y)
                  }))),
                  s = (0, g.mh)("stop", Z()((function* () {
                    window.cancelAnimationFrame(r), To.off("cameraRemoved", a), o && o.stop()
                  })));
                return {
                  start: i,
                  stop: s
                }
              }(e, this.webviewId, this.pluginId);
              const t = this.webviewId,
                n = (0, g.Vl)(this._invokeMethod.bind(this, "listenFrameChange")),
                r = (0, g.Vl)(this._invokeMethod.bind(this, "closeFrameChange"));
              let a = !1,
                i = null,
                s = null,
                c = null;
              const l = (0, g.mh)("start", Z()((function* () {
                  if (a) return;
                  if (a = !0, !e || "function" != typeof e) throw new Error("callback is not a function");
                  if (m.IS_ANDROID && !Eo[t] && (yield new Promise((e => To.once("cameraInitialized", e)))), !a) throw new Error("listener has been stopped");
                  let r;
                  m.IS_IOS && (i = () => {
                    if (a && s) {
                      const t = {
                        width: s.width,
                        height: s.height,
                        data: s.data
                      };
                      e(t)
                    }
                  }, (0, u.n)("onCameraFrame", i));
                  try {
                    r = yield n({})
                  } catch (e) {
                    throw m.IS_IOS && (0, u.r)("onCameraFrame", i), e
                  }
                  if (!a) throw new Error("listener has been stopped");
                  if (!mo.Z) throw new Error("onCameraFrame is not supported on your device");
                  const l = mo.Z.get(r.bufferId);
                  if (!l) throw new Error("onCameraFrame fails to allocate ArrayBuffer");
                  l.__proto__ = ArrayBuffer.prototype;
                  const p = {
                    width: r.width,
                    height: r.height,
                    data: l
                  };
                  m.IS_IOS ? s = {
                      width: r.width,
                      height: r.height,
                      data: l
                    } : (i = () => {
                      a && e(p)
                    }, (0, u.n)("onCameraFrame", i)), c = () => {
                      d()
                    }, To.once("cameraRemoved", c),
                    function (e) {
                      const t = o.Z.currentWebviewId;
                      jn[t] = jn[t] || {}, jn[t][e] = !0
                    }("cameraFrame")
                }))),
                d = (0, g.mh)("stop", Z()((function* () {
                  a && (a = !1, c && (To.off("cameraRemoved", c), c = null), i && ((0, u.r)("onCameraFrame", i), i = null), yield r({}))
                })));
              return {
                start: l,
                stop: d
              }
            }
            _invoke(e, t) {
              t.type = e, m.IS_DEVTOOLS || m.IS_WINDOWS || m.IS_MINA ? (Mo(t, (function ({
                imageData: n,
                videoData: o
              }) {
                function r(t, o) {
                  (0, a.IN)("base64ToTempFilePath", Object.assign({
                    fileType: "jpg",
                    base64Data: n
                  }, t), {
                    beforeAll: n => {
                      "takePhoto" === t.type ? n.tempImagePath = n.tempFilePath : n.tempFilePath && (n.tempThumbPath = n.tempFilePath), o && (n.tempVideoPath = o), n.errMsg = n.errMsg.replace("base64ToTempFilePath", e), delete n.tempFilePath
                    }
                  })
                }
                o ? (0, a.IN)("base64ToTempFilePath", {
                  fileType: "webm",
                  base64Data: o,
                  complete(e) {
                    r(t, e.tempFilePath)
                  }
                }) : "startRecord" === e ? ("function" == typeof t.success && t.success({
                  errMsg: "startRecord:ok"
                }), "function" == typeof t.complete && t.complete({
                  errMsg: "startRecord:ok"
                })) : r(t)
              })), (0, a.nY)("operateCamera", t, [this.webviewId])) : (0, a.IN)("operateCamera", t)
            }
            _invokeMethod(e, t) {
              const n = `${this.webviewId}_${this.pluginId}`;
              if ("number" == typeof So[n] || So[n]) {
                const o = Ao[`${this.webviewId}_${So[n]}`];
                if (o.isCancelAuth) return "function" == typeof t.fail && t.fail({
                  errMsg: "user cancel auth"
                }), void("function" == typeof t.complete && t.complete({
                  errMsg: "user cancel auth"
                }));
                if ("scanCode" === o.mode && ("takePhoto" === e || "startRecord" === e)) return "function" == typeof t.fail && t.fail({
                  errMsg: "Not allow to invoke takePhoto in 'scanCode' mode."
                }), void("function" == typeof t.complete && t.complete({
                  errMsg: "Not allow to invoke takePhoto in 'scanCode' mode."
                }));
                t.cameraId = So[n], this._invoke(e, t)
              } else To.once("cameraInsert", (() => {
                this._invokeMethod(e, t)
              }))
            }
            takePhoto(e = {}) {
              const t = `${this.webviewId}_${this.pluginId}`;
              if (ko[`${this.webviewId}_${So[t]}`]) return "function" == typeof e.fail && e.fail({
                errMsg: "Not allow to invoke takePhoto if camera is hidden."
              }), void("function" == typeof e.complete && e.complete({
                errMsg: "Not allow to invoke takePhoto if camera is hidden."
              }));
              this._invokeMethod("takePhoto", e)
            }
            setZoom(e = {}) {
              (0, a.r3)("CameraContext.setZoom", e, {
                zoom: 1
              }) && (e.zoom < 1 && (e.zoom = 1), this._invokeMethod("setZoom", e))
            }
            startRecord(e = {}) {
              ((e = {}) => {
                wo({
                  args: e
                })
              })({
                scope: "scope.record",
                success: () => {
                  xo.set(this, !0), this._startRecord(e)
                },
                fail: () => {
                  "function" == typeof e.fail && e.fail({
                    errMsg: "Failed to invoke 'startRecord' on 'CameraContext': not allowed to use microphone."
                  }), "function" == typeof e.complete && e.complete({
                    errMsg: "Failed to invoke 'startRecord' on 'CameraContext': not allowed to use microphone."
                  })
                }
              })
            }
            _startRecord(e = {}) {
              if (!xo.get(this)) return;
              const t = `${this.webviewId}_${this.pluginId}`;
              if (ko[`${this.webviewId}_${So[t]}`]) return "function" == typeof e.fail && e.fail({
                errMsg: "Not allow to invoke takePhoto if camera is hidden."
              }), void("function" == typeof e.complete && e.complete({
                errMsg: "Not allow to invoke takePhoto if camera is hidden."
              }));
              const n = e.timeoutCallback,
                o = e.fail;
              if (e.fail = e => {
                  this._isRecording = !1, clearTimeout(a), "function" == typeof o && o(e)
                }, this._invokeMethod("startRecord", e), this._isRecording) return;
              this._isRecording = !0;
              const r = "number" == typeof e.timeout ? Math.max(0, e.timeout) : 30,
                a = this._timer = setTimeout((() => {
                  this._isRecording && (this.stopRecord({
                    complete: n || function () {}
                  }), this._isRecording = !1)
                }), 1e3 * r);
              0 === r ? clearTimeout(a) : Po[this.webviewId] ? Po[this.webviewId].push(a) : Po[this.webviewId] = [a];
              const i = this._videoTaken = (e, t) => {
                const o = `${t}_${this.pluginId}`;
                if (e.cameraId !== So[o]) return;
                const r = Co.indexOf(i);
                r > -1 && Co.splice(r, 1), this._isRecording && (delete e.cameraId, "function" == typeof n && n(e), this._isRecording = !1, clearTimeout(a))
              };
              Co.push(i)
            }
            stopRecord(e = {}) {
              const t = Co.indexOf(this._videoTaken);
              t > -1 && (Co.splice(t, 1), this._videoTaken = null), this._invokeMethod("stopRecord", e), this._isRecording = !1, clearTimeout(this._timer)
            }
          }, h()(Io.prototype, "takePhoto", [g.Qu], Object.getOwnPropertyDescriptor(Io.prototype, "takePhoto"), Io.prototype), h()(Io.prototype, "setZoom", [g.Qu], Object.getOwnPropertyDescriptor(Io.prototype, "setZoom"), Io.prototype), h()(Io.prototype, "startRecord", [g.Qu], Object.getOwnPropertyDescriptor(Io.prototype, "startRecord"), Io.prototype), h()(Io.prototype, "stopRecord", [g.Qu], Object.getOwnPropertyDescriptor(Io.prototype, "stopRecord"), Io.prototype), Io);

          function Do(e, t, n, o = "") {
            return new Lo(t, o)
          }(0, u.n)("onCameraNeedAuthCancel", ((e = {}, t = 0) => {
            const n = Ao[`${t}_${e.cameraId}`];
            n && n.binderror && "function" == typeof o.Z.webviewEventCallback && o.Z.webviewEventCallback({
              data: {
                type: "error",
                target: n.target,
                currentTarget: n.target,
                timeStamp: Date.now() - n.createdTimeStamp,
                detail: {
                  msg: "user cancel auth"
                }
              },
              eventName: n.binderror,
              webviewId: t,
              nodeId: n.nodeId
            }), n && (n.isCancelAuth = !0)
          })), (0, u.n)("onCameraStop", ((e = {}, t = 0) => {
            const n = Ao[`${t}_${e.cameraId}`];
            n && n.bindstop && "function" == typeof o.Z.webviewEventCallback && o.Z.webviewEventCallback({
              data: {
                type: "stop",
                target: n.target,
                currentTarget: n.target,
                timeStamp: Date.now() - n.createdTimeStamp,
                detail: {}
              },
              eventName: n.bindstop,
              webviewId: t,
              nodeId: n.nodeId
            })
          })), (0, u.n)("onCameraInitDone", ((e = {}, t = 0) => {
            const n = Ao[`${t}_${e.cameraId}`];
            n && n.bindinitdone && "function" == typeof o.Z.webviewEventCallback ? o.Z.webviewEventCallback({
              data: {
                type: "initdone",
                target: n.target,
                currentTarget: n.target,
                timeStamp: Date.now() - n.createdTimeStamp,
                detail: {
                  maxZoom: e.maxZoom
                }
              },
              eventName: n.bindinitdone,
              webviewId: t,
              nodeId: n.nodeId
            }) : To.once("cameraInsert", (() => {
              const n = Ao[`${t}_${e.cameraId}`];
              n && n.bindinitdone && "function" == typeof o.Z.webviewEventCallback && o.Z.webviewEventCallback({
                data: {
                  type: "initdone",
                  target: n.target,
                  currentTarget: n.target,
                  timeStamp: Date.now() - n.createdTimeStamp,
                  detail: {
                    maxZoom: e.maxZoom
                  }
                },
                eventName: n.bindinitdone,
                webviewId: t,
                nodeId: n.nodeId
              })
            }))
          })), (0, u.n)("onCameraScanCode", ((e = {}, t = 0) => {
            const n = Ao[`${t}_${e.cameraId}`];
            if (!n || !n.bindscancode || "function" != typeof o.Z.webviewEventCallback) return;
            const r = {
              data: {
                type: "scancode",
                target: n.target,
                currentTarget: n.target,
                timeStamp: Date.now() - n.createdTimeStamp,
                detail: {
                  type: e.type,
                  result: e.result,
                  rawData: e.rawData,
                  charSet: e.charSet,
                  scanArea: e.scanArea
                }
              },
              eventName: n.bindscancode,
              webviewId: t,
              nodeId: n.nodeId
            };
            "barcode" === e.type && (delete r.data.detail.rawData, delete r.data.detail.charSet), o.Z.webviewEventCallback(r)
          }));
          const Bo = (e = {}) => {
            (0, a.r3)("setKeepScreenOn", e, {
              keepScreenOn: !0
            }) && (0, a.IN)("setKeepScreenOn", e, {})
          };
          var Ro;
          const No = m.IS_DEVTOOLS,
            Fo = {},
            Wo = {},
            jo = {},
            $o = new l.y,
            Vo = {},
            Zo = new WeakMap,
            Uo = {},
            Go = ["play", "stop", "mute", "pause", "resume", "requestFullScreen", "exitFullScreen", "snapshot", "requestPictureInPicture", "exitPictureInPicture", "requestBackgroundPlayback", "exitBackgroundPlayback"],
            qo = Object.assign,
            Ho = {};

          function Qo(e, t) {
            return `${e}_${t}`
          }

          function Yo(e) {
            Vo[e] || (Vo[e] = !0, v(e, (e => {
              delete Vo[e], Object.keys(Fo).forEach((t => {
                  new RegExp("^" + e).test(t) && (delete Wo[`${e}_${Fo[t]}`], delete Fo[t])
                })), Object.keys(Uo).forEach((t => {
                  new RegExp("^api_" + e).test(t) ? (delete Wo[`${e}_${Fo[t.substr(4)]}`], delete Uo[t]) : new RegExp("^SQ_" + e).test(t) && (delete Wo[t.substr(3)], delete Uo[t])
                })),
                function (e) {
                  delete rr[e]
                }(e), Bo({
                  keepScreenOn: !1
                })
            })))
          }(0, a.Ld)("xWebLivePlayerSupported", (({
            insert2XWebEnabled: e,
            viewId: t
          }, n) => {
            Ho[Qo(n, t)] = e, or(Ho)
          })), (0, a.Ld)("updateLivePlayerPictureInPicture", ((e = {}, t) => {
            jo.webviewId = t, jo.playerId = e.playerId
          })), ["xWebLivePlayerInsert", "livePlayerInsert"].forEach((e => {
            (0, a.Ld)(e, (({
              viewId: e,
              domId: t,
              playerId: n,
              pluginId: o,
              data: r,
              nodeId: a
            }, i) => {
              const s = Ho[Qo(i, e)] ? e : n;
              let c = `${i}_${o}_${t}_`;
              a && a !== __virtualDOM__.getRootNodeId(i) && (c += a), Fo[c] = s, Wo[`${i}_${s}`] = r || {}, $o.emit("livePlayerInsert"), Yo(i),
                function (e) {
                  const t = rr[e];
                  if (rr[e] = [], !t) return;
                  for (let e = 0; e < t.length; e++) {
                    const n = t[e];
                    sr(n[0], n[1], n[2])
                  }
                }(i)
            }))
          })), ["xWebLivePlayerRemoved", "livePlayerRemoved"].forEach((e => {
            (0, a.Ld)(e, (({
              viewId: e,
              domId: t,
              playerId: n,
              pluginId: o,
              nodeId: r
            }, a) => {
              const i = Ho[Qo(a, e)] ? e : n;
              let s = `${a}_${o}_${t}_`;
              r && r !== __virtualDOM__.getRootNodeId(a) && (s += r), delete Fo[s], delete Wo[`${a}_${i}`];
              let c = `api_${a}_${o}_${t}_`;
              r && r !== __virtualDOM__.getRootNodeId(a) && (c += r);
              const l = `SQ_${a}_${i}`;
              delete Uo[c], delete Uo[l], Bo({
                keepScreenOn: !1
              })
            }))
          }));
          class Jo {}
          let zo = (Ro = class {
            constructor() {
              const e = this.exportContext = new Jo;
              Go.forEach((t => e[t] = this[t].bind(this)))
            }
            play(e = {}) {
              const t = this._getAppStatus();
              t === Rn.w$.BACK_GROUND || t === Rn.w$.LOCK || (this._invokeMethod("play", [], e), Bo({
                keepScreenOn: !0
              }))
            }
            stop(e = {}) {
              this._invokeMethod("stop", [], e), Bo({
                keepScreenOn: !1
              })
            }
            mute(e = {}) {
              this._invokeMethod("mute", [], e)
            }
            pause(e = {}) {
              this._invokeMethod("pause", [], e), Bo({
                keepScreenOn: !1
              })
            }
            resume(e = {}) {
              this._invokeMethod("resume", [], e), Bo({
                keepScreenOn: !0
              })
            }
            requestFullScreen(e = {}) {
              const t = this._getPlayerId(),
                n = this._getWebviewId();
              if (Ho[Qo(n, t)]) return void this._invokeWebviewMethod("xWebLivePlayerRequestFullScreen", {
                direction: e.direction
              }, e);
              const o = e.direction;
              [0, 90, -90].indexOf(o) > -1 ? this._invokeMethod("requestFullScreen", [o], e) : this._invokeMethod("requestFullScreen", [], e), Zo.set(this, !0)
            }
            exitFullScreen(e = {}) {
              const t = this._getPlayerId(),
                n = this._getWebviewId();
              Ho[Qo(n, t)] ? this._invokeWebviewMethod("xWebLivePlayerExitFullScreen", [], e) : (this._invokeMethod("exitFullScreen", [], e), this.showStatusBar(), Zo.set(this, !1))
            }
            exitPictureInPicture(e = {}) {
              if (!jo) return;
              const t = (0, a.qu)(this.pluginId);
              m.IS_IOS ? t("operateLivePlayer", p()(p()({}, e), {}, {
                type: "exitPictureInPicture",
                livePlayerId: jo.playerId
              }), {
                beforeAll(e) {
                  e.errMsg = e.errMsg.replace("operateLivePlayer", "exitPictureInPicture")
                }
              }) : m.IS_ANDROID && t("operateXWebLivePlayer", p()(p()({}, e), {}, {
                type: "exitPictureInPicture",
                viewId: jo.playerId
              }), {
                beforeAll(e) {
                  e.errMsg = e.errMsg.replace("operateXWebLivePlayer", "exitPictureInPicture")
                }
              })
            }
            showStatusBar(e = {}) {
              (0, a.IN)("showStatusBar", e)
            }
            hideStatusBar(e = {}) {
              if (!Zo.get(this)) {
                const t = "hideStatusBar:fail cannot be invoked but in fullscreen.";
                return "function" == typeof e.fail && e.fail({
                  errMsg: t
                }), void("function" == typeof e.complete && e.complete({
                  errMsg: t
                }))
              }(0, a.IN)("hideStatusBar", e)
            }
            snapshot(e = {}) {
              if (No) return console.warn("开发者工具暂不支持 LivePlayerContext.snapshot 接口，请到客户端调试。"), void("function" != typeof e.fail && "function" != typeof e.complete || (e.fail || e.complete)({
                errMsg: "operateLivePlayer:fail not support in devtools"
              }));
              this._invokeMethod("snapshot", [], qo({
                quality: "raw"
              }, e))
            }
            requestBackgroundPlayback(e = {}) {
              this._invokeMethod("requestBackgroundPlayback", [], e)
            }
            exitBackgroundPlayback(e = {}) {
              this._invokeMethod("exitBackgroundPlayback", [], e)
            }
            requestPictureInPicture(e = {}) {
              const t = this._getPlayerId();
              if ("number" != typeof t) return void(0, a.YG)("requestPictureInPicture", e, "playerId not exists");
              (0, a.qu)(this.pluginId)("requestLivePlayerPictureInPicture", p()(p()({}, e), {}, {
                viewId: t,
                livePlayerId: t,
                beforeAll(e) {
                  e.errMsg = e.errMsg.replace("requestLivePlayerPictureInPicture", "requestPictureInPicture")
                }
              }))
            }
            _invokeMethodWithId(e, t, n, o) {
              const r = this._getPlayerId(),
                i = this._getWebviewId(),
                s = Ho[Qo(i, r)];
              let c = s ? "operateXWebLivePlayer" : "operateLivePlayer";
              "number" == typeof e ? (No && (o.type = t, o.playerId = e, (0, a.nY)("operateLivePlayer", o, [this.webviewId])), function () {
                const r = s ? {
                    viewId: e
                  } : {
                    livePlayerId: e
                  },
                  i = (0, a.qu)(this.pluginId);
                this._getAppStatus() === Rn.w$.BACK_GROUND && "stop" === t && (c = `${c}Background`), i(c, qo({}, o, p()({
                  data: n,
                  type: t
                }, r)))
              }.apply(this)) : $o.once("livePlayerInsert", (() => {
                this._invokeMethod(t, n, o)
              }))
            }
            _getAppStatus() {
              return o.Z.appStatus
            }
            _getHanged() {
              return o.Z.hanged
            }
            _getPlayerId() {}
            _getWebviewId() {}
          }, h()(Ro.prototype, "play", [g.Qu], Object.getOwnPropertyDescriptor(Ro.prototype, "play"), Ro.prototype), h()(Ro.prototype, "stop", [g.Qu], Object.getOwnPropertyDescriptor(Ro.prototype, "stop"), Ro.prototype), h()(Ro.prototype, "mute", [g.Qu], Object.getOwnPropertyDescriptor(Ro.prototype, "mute"), Ro.prototype), h()(Ro.prototype, "pause", [g.Qu], Object.getOwnPropertyDescriptor(Ro.prototype, "pause"), Ro.prototype), h()(Ro.prototype, "resume", [g.Qu], Object.getOwnPropertyDescriptor(Ro.prototype, "resume"), Ro.prototype), h()(Ro.prototype, "requestFullScreen", [g.Qu], Object.getOwnPropertyDescriptor(Ro.prototype, "requestFullScreen"), Ro.prototype), h()(Ro.prototype, "exitFullScreen", [g.Qu], Object.getOwnPropertyDescriptor(Ro.prototype, "exitFullScreen"), Ro.prototype), h()(Ro.prototype, "exitPictureInPicture", [g.Qu], Object.getOwnPropertyDescriptor(Ro.prototype, "exitPictureInPicture"), Ro.prototype), h()(Ro.prototype, "snapshot", [g.Qu], Object.getOwnPropertyDescriptor(Ro.prototype, "snapshot"), Ro.prototype), h()(Ro.prototype, "requestBackgroundPlayback", [g.Qu], Object.getOwnPropertyDescriptor(Ro.prototype, "requestBackgroundPlayback"), Ro.prototype), h()(Ro.prototype, "exitBackgroundPlayback", [g.Qu], Object.getOwnPropertyDescriptor(Ro.prototype, "exitBackgroundPlayback"), Ro.prototype), h()(Ro.prototype, "requestPictureInPicture", [g.Qu], Object.getOwnPropertyDescriptor(Ro.prototype, "requestPictureInPicture"), Ro.prototype), Ro);
          class Ko extends zo {
            constructor(e, t, n, o) {
              if (super(), "string" != typeof e) throw new r.iZ("Parameter 1 should be a string");
              this.domId = e, this.webviewId = t, this.nodeId = n, this.pluginId = o
            }
            _invokeMethod(e, t, n) {
              const o = `${this.webviewId}_${this.pluginId}_${this.domId}_${this.nodeId}`,
                r = Fo[o];
              this._invokeMethodWithId(r, e, t, n)
            }
            _getPlayerId() {
              const e = `${this.webviewId}_${this.pluginId}_${this.domId}_${this.nodeId}`;
              return Fo[e]
            }
            _getWebviewId() {
              return this.webviewId
            }
            _invokeWebviewMethod(e, t, n) {
              const o = `${this.webviewId}_${this.pluginId}_${this.domId}_${this.nodeId}`,
                r = Fo[o];
              "function" == typeof n.success && setTimeout((() => {
                n.success({
                  errMsg: "operateLivePlayer:ok"
                })
              }), 0), "function" == typeof n.complete && setTimeout((() => {
                n.complete({
                  errMsg: "operateLivePlayer:ok"
                })
              }), 0), (0, a.nY)(e, p()({
                viewId: r
              }, t), [this.webviewId])
            }
          }
          class Xo extends zo {
            constructor(e, t, n) {
              super(), this.playerId = e, this.webviewId = t, this.pluginId = n
            }
            _invokeMethod(e, t, n) {
              const o = this.playerId;
              this._invokeMethodWithId(o, e, t, n)
            }
            _getPlayerId() {
              return this.playerId
            }
            _getWebviewId() {
              return this.webviewId
            }
            _invokeWebviewMethod(e, t, n) {
              "function" == typeof n.success && setTimeout((() => {
                n.success({
                  errMsg: "operateLivePlayer:ok"
                })
              }), 0), "function" == typeof n.complete && setTimeout((() => {
                n.complete({
                  errMsg: "operateLivePlayer:ok"
                })
              }), 0), (0, a.nY)(e, p()({
                viewId: this.playerId
              }, t), [this.webviewId])
            }
          }

          function er(e, t, n = "", o = "") {
            let r = `api_${t}_${o}_${e}_`;
            if (n && n !== __virtualDOM__.getRootNodeId(t) && (r += n), Uo[r]) return Uo[r].exportContext;
            const a = new Ko(e, t, n, o);
            return Uo[r] = a, a.exportContext
          }

          function tr(e, t, n = "") {
            const o = `SQ_${t}_${e}`;
            if (Uo[o]) return Uo[o].exportContext;
            const r = new Xo(e, t, n);
            return Uo[o] = r, r.exportContext
          }
          let nr = {};
          const or = e => {
              nr = e
            },
            rr = {},
            ar = {
              onLivePlayerEvent: "bindstatechange",
              onLivePlayerNetStatus: "bindnetstatus",
              onLivePlayerAudioVolume: "bindaudiovolumenotify",
              onLivePlayerBackgroundPlaybackChange: "bindbackgroundplaybackchange"
            },
            ir = {
              onXWebLivePlayerEvent: "bindstatechange",
              onXWebLivePlayerNetStatus: "bindnetstatus",
              onXWebLivePlayerAudioVolume: "bindaudiovolumenotify",
              onXWebLivePlayerBackgroundPlaybackChange: "bindbackgroundplaybackchange"
            };

          function sr(e, t, n) {
            if (!t) return;
            2004 === t.errCode && Bo({
              keepScreenOn: !0
            });
            const r = nr[Qo(n, t.viewId)],
              i = r ? t.viewId : t.livePlayerId,
              s = Wo[`${n}_${i}`],
              c = r ? ir[e] : ar[e],
              l = {};
            switch (e) {
              case "onLivePlayerEvent":
              case "onXWebLivePlayerEvent":
                l.code = t.errCode, l.message = t.errMsg, (0, a.nY)("onLivePlayerStateChange" + t.livePlayerId, {
                  code: t.errCode
                }, [n]);
                break;
              case "onLivePlayerNetStatus":
              case "onXWebLivePlayerNetStatus":
                t.info = t.info || {}, l.info = {
                  videoBitrate: t.info.VIDEO_BITRATE,
                  audioBitrate: t.info.AUDIO_BITRATE,
                  videoFPS: t.info.VIDEO_FPS,
                  videoGOP: t.info.VIDEO_GOP,
                  netSpeed: t.info.NET_SPEED,
                  netQualityLevel: t.info.NET_QUALITY_LEVEL,
                  netJitter: t.info.NET_JITTER,
                  videoWidth: t.info.VIDEO_WIDTH,
                  videoHeight: t.info.VIDEO_HEIGHT,
                  videoCache: t.info.VIDEO_CACHE,
                  audioCache: t.info.AUDIO_CACHE,
                  vDecCacheSize: t.info.V_DEC_CACHE_SIZE,
                  vSumCacheSize: t.info.V_SUM_CACHE_SIZE,
                  avPlayInterval: t.info.AV_PLAY_INTERVAL,
                  avRecvInterval: t.info.AV_RECV_INTERVAL,
                  audioCacheThreshold: t.info.AUDIO_CACHE_THRESHOLD
                }, (0, a.nY)("onLivePlayerNetStatusChange" + t.livePlayerId, {
                  info: l.info
                }, [n]);
                break;
              case "onLivePlayerAudioVolume":
              case "onXWebLivePlayerAudioVolume":
                l.volume = t.volume;
                break;
              case "onLivePlayerBackgroundPlaybackChange":
              case "onXWebLivePlayerBackgroundPlaybackChange":
                l.playInBackground = t.playInBackground
            }
            if (!s) return rr[n] = rr[n] || [], void rr[n].push([e, t, n]);
            if (r && ("onXWebLivePlayerEvent" === e || "onXWebLivePlayerNetStatus" === e)) {
              let o = p()({}, t.info);
              "onXWebLivePlayerEvent" === e && (o = {
                code: t.errCode,
                message: t.errMsg
              }), (0, a.nY)("xWebLivePlayerStateChange", {
                type: e,
                detail: {
                  info: o
                },
                viewId: t.viewId
              }, [n])
            }
            s.handlers[c] && "function" == typeof o.Z.webviewEventCallback && (r && "onXWebLivePlayerEvent" === e && t && -9999999 === t.errCode || o.Z.webviewEventCallback({
              data: {
                type: c.replace("bind", ""),
                target: s.target,
                currentTarget: s.target,
                timeStamp: Date.now() - s.createdTimeStamp,
                touches: [],
                detail: l
              },
              eventName: s.handlers[c],
              webviewId: n,
              nodeId: s.nodeId
            }))
          }
          var cr;
          ["onLivePlayerEvent", "onLivePlayerNetStatus", "onLivePlayerAudioVolume", "onLivePlayerBackgroundPlaybackChange"].concat(["onXWebLivePlayerEvent", "onXWebLivePlayerNetStatus", "onXWebLivePlayerAudioVolume", "onXWebLivePlayerBackgroundPlaybackChange"]).forEach((e => {
            (0, u.n)(e, ((t = {}, n) => {
              sr(e, t, n)
            }))
          })), (0, a.Ld)("xWebLivePlayerFullScreenEvent", (({
            viewId: e,
            data: t
          }, n) => {
            const r = Wo[`${n}_${e}`];
            r && r.handlers.bindfullscreenchange && "function" == typeof o.Z.webviewEventCallback && o.Z.webviewEventCallback({
              data: {
                type: "fullscreenchange",
                target: r.target,
                currentTarget: r.target,
                timeStamp: Date.now() - r.createdTimeStamp,
                touches: [],
                detail: {
                  fullScreen: t.fullScreen,
                  direction: 0 === t.direction || 180 === t.direction || "vertical" === t.direction ? "vertical" : "horizontal"
                }
              },
              eventName: r.handlers.bindfullscreenchange,
              webviewId: n,
              nodeId: r.nodeId
            })
          })), (0, u.n)("onLivePlayerFullScreenChange", ((e = {}, t) => {
            (0, a.nY)("videoFullScreenChange", e, [t]), (0, a.nY)("videoFullScreenChange" + e.livePlayerId, {
              fullScreen: e.fullScreen
            }, [t]);
            const n = Wo[`${t}_${e.livePlayerId}`];
            n && n.handlers.bindfullscreenchange && "function" == typeof o.Z.webviewEventCallback && o.Z.webviewEventCallback({
              data: {
                type: "fullscreenchange",
                target: n.target,
                currentTarget: n.target,
                timeStamp: Date.now() - n.createdTimeStamp,
                touches: [],
                detail: {
                  fullScreen: e.fullScreen,
                  direction: 0 === e.direction || 180 === e.direction || "vertical" === e.direction ? "vertical" : "horizontal"
                }
              },
              eventName: n.handlers.bindfullscreenchange,
              webviewId: t,
              nodeId: n.nodeId
            })
          })), (0, u.n)("onEnterLivePlayerPictureInPicture", ((e = {}) => {
            const t = jo.webviewId,
              n = Wo[`${t}_${e.livePlayerId}`];
            n && n.handlers.bindenterpictureinpicture && "function" == typeof o.Z.webviewEventCallback && o.Z.webviewEventCallback({
              data: {
                type: "enterpictureinpicture",
                target: n.target,
                currentTarget: n.target,
                timeStamp: Date.now() - n.createdTimeStamp,
                touches: [],
                detail: {}
              },
              eventName: n.handlers.bindenterpictureinpicture,
              webviewId: t,
              nodeId: n.nodeId
            })
          })), (0, u.n)("onLeaveLivePlayerPictureInPicture", ((e = {}) => {
            const t = jo.webviewId,
              n = Wo[`${t}_${e.livePlayerId}`];
            n && n.handlers.bindleavepictureinpicture && "function" == typeof o.Z.webviewEventCallback && o.Z.webviewEventCallback({
              data: {
                type: "leavepictureinpicture",
                target: n.target,
                currentTarget: n.target,
                timeStamp: Date.now() - n.createdTimeStamp,
                touches: [],
                detail: {}
              },
              eventName: n.handlers.bindleavepictureinpicture,
              webviewId: t,
              nodeId: n.nodeId
            })
          }));
          const lr = Q.Z.useXWebLive;
          let ur = m.IS_ANDROID && lr;
          (0, a.Ld)("xWebLivePusherSupported", (({
            enforcedXWebLive: e,
            canInsert2XWeb: t
          }) => {
            ur = e || t, Ir({
              enforcedXWebLive: e,
              canInsert2XWeb: t
            })
          }));
          const dr = {},
            pr = {},
            fr = new l.y,
            hr = {},
            gr = Object.assign;

          function yr(e) {
            hr[e] || (hr[e] = !0, v(e, (e => {
              delete hr[e], Object.keys(dr).forEach((t => {
                  new RegExp("^" + e).test(t) && (delete pr[`${e}_${dr[t]}`], delete dr[t])
                })),
                function (e) {
                  delete kr[e]
                }(e)
            })))
          }

          function vr(e, t) {
            const n = `${this.webviewId}_${this.pluginId}`;
            "number" == typeof dr[n] ? (ur ? t.viewId = dr[n] : t.livePusherId = dr[n], t.type = e, function (e, t, n) {
              if (m.IS_DEVTOOLS) console.warn(`开发者工具暂不支持调用 LivePusherContext.${e} 方法`);
              else {
                (0, a.qu)(n)(ur ? "operateXWebLivePusher" : "operateLivePusher", t)
              }
            }(e, t, this.pluginId)) : fr.once("livePusherInserted", (() => {
              vr.call(this, e, t)
            }))
          } ["xWebLivePusherInserted", "livePusherInserted"].forEach((e => {
            (0, a.Ld)(e, (({
              viewId: e,
              pusherId: t,
              pluginId: n,
              data: o
            }, r) => {
              const a = ur ? e : t,
                i = `${r}_${n}`;
              dr[i] = a, pr[`${r}_${a}`] = o, fr.emit("livePusherInserted"), yr(r),
                function (e) {
                  const t = kr[e];
                  if (kr[e] = [], !t) return;
                  for (let e = 0; e < t.length; e++) {
                    const n = t[e];
                    Cr(n[0], n[1], n[2])
                  }
                }(r)
            }))
          })), ["xWebLivePusherRemoved", "livePusherRemoved"].forEach((e => {
            (0, a.Ld)(e, (({
              viewId: e,
              pusherId: t,
              pluginId: n
            }, o) => {
              const r = ur ? e : t;
              delete dr[`${o}_${n}`], delete pr[`${o}_${r}`]
            }))
          }));
          let mr = (cr = class {
            constructor(e, t) {
              this.webviewId = e, this.pluginId = t
            }
            start(e = {}) {
              vr.call(this, "start", e)
            }
            stop(e = {}) {
              vr.call(this, "stop", e)
            }
            pause(e = {}) {
              vr.call(this, "pause", e)
            }
            resume(e = {}) {
              vr.call(this, "resume", e)
            }
            switchCamera(e = {}) {
              vr.call(this, "switchCamera", e)
            }
            snapshot(e = {}) {
              vr.call(this, "snapshot", gr({
                quality: "raw"
              }, e))
            }
            toggleTorch(e = {}) {
              vr.call(this, "toggleTorch", e)
            }
            playBGM(e = {}) {
              (0, a.r3)("LivePusherContext.playBGM", e, {
                url: ""
              }) && vr.call(this, "playBGM", e)
            }
            stopBGM(e = {}) {
              vr.call(this, "stopBGM", e)
            }
            pauseBGM(e = {}) {
              vr.call(this, "pauseBGM", e)
            }
            resumeBGM(e = {}) {
              vr.call(this, "resumeBGM", e)
            }
            setBGMVolume(e = {}) {
              (0, a.r3)("LivePusherContext.setBGMVolume", e, {
                volume: 0
              }) && vr.call(this, "setBGMVolume", e)
            }
            setMICVolume(e = {}) {
              (0, a.r3)("LivePusherContext.setMICVolume", e, {
                volume: 0
              }) && vr.call(this, "setMICVolume", e)
            }
            startPreview(e = {}) {
              vr.call(this, "startPreview", e)
            }
            stopPreview(e = {}) {
              vr.call(this, "stopPreview", e)
            }
            sendMessage(e = {}) {
              vr.call(this, "sendMessage", e)
            }
          }, h()(cr.prototype, "start", [g.Qu], Object.getOwnPropertyDescriptor(cr.prototype, "start"), cr.prototype), h()(cr.prototype, "stop", [g.Qu], Object.getOwnPropertyDescriptor(cr.prototype, "stop"), cr.prototype), h()(cr.prototype, "pause", [g.Qu], Object.getOwnPropertyDescriptor(cr.prototype, "pause"), cr.prototype), h()(cr.prototype, "resume", [g.Qu], Object.getOwnPropertyDescriptor(cr.prototype, "resume"), cr.prototype), h()(cr.prototype, "switchCamera", [g.Qu], Object.getOwnPropertyDescriptor(cr.prototype, "switchCamera"), cr.prototype), h()(cr.prototype, "snapshot", [g.Qu], Object.getOwnPropertyDescriptor(cr.prototype, "snapshot"), cr.prototype), h()(cr.prototype, "toggleTorch", [g.Qu], Object.getOwnPropertyDescriptor(cr.prototype, "toggleTorch"), cr.prototype), h()(cr.prototype, "playBGM", [g.Qu], Object.getOwnPropertyDescriptor(cr.prototype, "playBGM"), cr.prototype), h()(cr.prototype, "stopBGM", [g.Qu], Object.getOwnPropertyDescriptor(cr.prototype, "stopBGM"), cr.prototype), h()(cr.prototype, "pauseBGM", [g.Qu], Object.getOwnPropertyDescriptor(cr.prototype, "pauseBGM"), cr.prototype), h()(cr.prototype, "resumeBGM", [g.Qu], Object.getOwnPropertyDescriptor(cr.prototype, "resumeBGM"), cr.prototype), h()(cr.prototype, "setBGMVolume", [g.Qu], Object.getOwnPropertyDescriptor(cr.prototype, "setBGMVolume"), cr.prototype), h()(cr.prototype, "setMICVolume", [g.Qu], Object.getOwnPropertyDescriptor(cr.prototype, "setMICVolume"), cr.prototype), h()(cr.prototype, "startPreview", [g.Qu], Object.getOwnPropertyDescriptor(cr.prototype, "startPreview"), cr.prototype), h()(cr.prototype, "stopPreview", [g.Qu], Object.getOwnPropertyDescriptor(cr.prototype, "stopPreview"), cr.prototype), h()(cr.prototype, "sendMessage", [g.Qu], Object.getOwnPropertyDescriptor(cr.prototype, "sendMessage"), cr.prototype), cr);

          function br(e, t, n, o = "") {
            return new mr(t, o)
          }
          const _r = Q.Z.useXWebLive;
          let wr = m.IS_ANDROID && _r;
          const Ir = ({
              enforcedXWebLive: e,
              canInsert2XWeb: t
            }) => {
              wr = e || t
            },
            Sr = {
              onLivePusherEvent: "bindstatechange",
              onLivePusherNetStatus: "bindnetstatus",
              onLivePusherBGMStart: "bindbgmstart",
              onLivePusherBGMProgress: "bindbgmprogress",
              onLivePusherBGMComplete: "bindbgmcomplete",
              onLivePusherError: "binderror",
              onLivePusherAudioVolume: "bindaudiovolumenotify"
            },
            Ar = {
              onXWebLivePusherEvent: "bindstatechange",
              onXWebLivePusherNetStatus: "bindnetstatus",
              onXWebLivePusherBGMStart: "bindbgmstart",
              onXWebLivePusherBGMProgress: "bindbgmprogress",
              onXWebLivePusherBGMComplete: "bindbgmcomplete",
              onXWebLivePusherError: "binderror",
              onXWebLivePusherAudioVolume: "bindaudiovolumenotify"
            },
            kr = {};

          function Cr(e, t, n) {
            const r = wr ? t.viewId : t.livePusherId,
              i = pr[`${n}_${r}`],
              s = wr ? Ar[e] : Sr[e],
              c = {};
            switch (e) {
              case "onLivePusherEvent":
              case "onXWebLivePusherEvent":
                c.code = t.errCode, c.message = t.errMsg, (0, a.nY)("onLivePusherStateChange" + t.livePusherId, {
                  code: t.errCode
                }, [n]);
                break;
              case "onLivePusherNetStatus":
              case "onXWebLivePusherNetStatus":
                t.info = t.info || {}, c.info = {
                  videoBitrate: t.info.VIDEO_BITRATE,
                  audioBitrate: t.info.AUDIO_BITRATE,
                  videoFPS: t.info.VIDEO_FPS,
                  videoGOP: t.info.VIDEO_GOP,
                  netSpeed: t.info.NET_SPEED,
                  netQualityLevel: t.info.NET_QUALITY_LEVEL,
                  netJitter: t.info.NET_JITTER,
                  videoWidth: t.info.VIDEO_WIDTH,
                  videoHeight: t.info.VIDEO_HEIGHT,
                  videoCache: t.info.VIDEO_CACHE,
                  audioCache: t.info.AUDIO_CACHE
                }, (0, a.nY)("onLivePusherNetStatusChagne" + t.livePusherId, {
                  info: c.info
                }, [n]);
                break;
              case "onLivePusherBGMProgress":
              case "onXWebLivePusherBGMProgress":
                c.progress = t.progress, c.duration = t.duration;
                break;
              case "onLivePusherBGMComplete":
              case "onXWebLivePusherBGMComplete":
                c.errCode = t.errCode;
                break;
              case "onLivePusherError":
              case "onXWebLivePusherError":
                c.errCode = t.errCode, c.errMsg = t.errMsg, c.data = t.data, (0, a.nY)("onLivePusherError" + t.livePusherId, {
                  errcode: t.errcode
                }, [n]);
                break;
              case "onLivePusherAudioVolume":
              case "onXWebLivePusherAudioVolume":
                c.volume = t.volume
            }
            if (!i) return kr[n] = kr[n] || [], void kr[n].push([e, t, n]);
            if (wr && ("onXWebLivePusherEvent" === e || "onXWebLivePusherNetStatus" === e)) {
              let o = p()({}, t.info);
              "onXWebLivePusherEvent" === e && (o = {
                code: t.errCode,
                message: t.errMsg
              }), (0, a.nY)("xWebLivePusherStateChange", {
                type: e,
                detail: {
                  info: o
                },
                viewId: t.viewId
              }, [n])
            }
            i.handlers[s] && "function" == typeof o.Z.webviewEventCallback && (wr && "onXWebLivePusherEvent" === e && t && -9999999 === t.errCode || o.Z.webviewEventCallback({
              data: {
                type: s.replace("bind", ""),
                target: i.target,
                currentTarget: i.target,
                timeStamp: Date.now() - i.createdTimeStamp,
                touches: [],
                detail: c
              },
              eventName: i.handlers[s],
              webviewId: n,
              nodeId: i.nodeId
            }))
          } ["onLivePusherEvent", "onLivePusherNetStatus", "onLivePusherBGMStart", "onLivePusherBGMProgress", "onLivePusherBGMComplete", "onLivePusherError", "onLivePusherAudioVolume"].concat(["onXWebLivePusherEvent", "onXWebLivePusherNetStatus", "onXWebLivePusherBGMStart", "onXWebLivePusherBGMProgress", "onXWebLivePusherBGMComplete", "onXWebLivePusherError", "onXWebLivePusherAudioVolume"]).forEach((e => {
            (0, u.n)(e, ((t = {}, n = 0) => {
              Cr(e, t, n)
            }))
          }));
          var Pr = n(6947);
          let Tr = null;
          Pr.Z && Pr.Z.WXAUDIO ? Tr = Pr.Z.WXAUDIO : Pr.Z && Pr.Z.AudioContext ? Tr = Pr.Z.AudioContext : "undefined" != typeof AudioContext ? Tr = AudioContext : "undefined" != typeof webkitAudioContext && (Tr = webkitAudioContext);
          const xr = Tr;
          var Mr = n(5166),
            Er = n(7255);
          let Or;
          const Lr = new WeakMap,
            Dr = new WeakMap,
            Br = new WeakMap,
            Rr = new WeakMap,
            Nr = new WeakMap,
            Fr = new WeakMap,
            Wr = new WeakMap,
            jr = new WeakMap,
            $r = new WeakMap,
            Vr = new WeakMap,
            Zr = new WeakMap,
            Ur = {},
            Gr = (0, J.promisify)(Mr.a),
            qr = (0, J.promisify)(Er.p),
            Hr = e => qr({
              filePath: e
            }).then((e => e.data)),
            Qr = e => Gr({
              url: e,
              responseType: "arraybuffer",
              enableHttp2: !0,
              enableCache: !0
            }).then((e => e.data)),
            Yr = e => new Promise((t => {
              w([e], "audio", (e => {
                t(Qr(e.data[0].url))
              }))
            })),
            Jr = function (e) {
              Lr.set(this, Object.assign(Lr.get(this), e))
            },
            zr = function (e) {
              return Lr.get(this)[e]
            },
            Kr = function () {
              return Lr.get(this)
            },
            Xr = function () {
              this.stop(!0), Jr.call(this, {
                _source: null
              });
              const e = Br.get(this);
              e && e()
            },
            ea = function (e) {
              const t = Or.createBufferSource(),
                {
                  currentPlayBackTime: n,
                  state: o
                } = ta.call(this, e),
                {
                  loop: r,
                  playbackRate: a,
                  _buffer: i,
                  _gainNode: s
                } = o,
                c = Xr.bind(this);
              t.onended = c, t.buffer = i, t.loop = r, t.playbackRate.value = a, s && t.connect(s), t.start(0, n), Or.resume(), Jr.call(this, {
                _isPlaying: !0,
                paused: !1,
                _source: t,
                _played: !0,
                _playbackTime: 0,
                _lastCurrentTime: n,
                _startedAt: Or.currentTime,
                _endedHandler: c
              })
            },
            ta = function (e) {
              e = e || Kr.call(this);
              const {
                _startedAt: t,
                _playbackTime: n,
                _isPlaying: o,
                playbackRate: r,
                _lastCurrentTime: a,
                duration: i
              } = e;
              let s;
              return s = o ? a + (Or.currentTime - t) * r : n, s > i && (s %= i), {
                currentPlayBackTime: s,
                state: e
              }
            },
            na = function () {
              this.stop(!0);
              const {
                _gainNode: e
              } = Kr.call(this);
              e && e.disconnect(), Jr.call(this, {
                _buffer: null,
                _source: null,
                _loadPromise: null,
                _gainNode: null,
                _audioLoadPromiseResolve: null
              }), Dr.delete(this), Br.delete(this), Rr.delete(this), Nr.delete(this), Wr.delete(this), Fr.delete(this), jr.delete(this), $r.delete(this), Zr.delete(this), clearInterval(Vr.get(this)), Vr.delete(this)
            },
            oa = function () {
              this.stop(!0), Jr.call(this, {
                _buffer: null,
                _source: null,
                _loadPromise: null,
                _audioLoadPromiseResolve: null
              })
            },
            ra = function (e) {
              let t;
              oa.call(this);
              const n = new Promise((e => {
                t = e
              }));
              Jr.call(this, {
                src: e,
                _ready: !1,
                _played: !1,
                _loadPromise: n,
                _audioLoadPromiseResolve: t
              })
            };
          class aa {
            constructor() {
              Or || (Or = new xr, "function" == typeof Or.create && Or.create());
              const e = Or.createGain();
              e.connect(Or.destination);
              const t = {},
                n = new Promise((e => {
                  t._audioLoadPromiseResolve = e
                }));
              Lr.set(this, Object.assign(t, {
                startTime: 0,
                autoplay: !1,
                loop: !1,
                volume: 1,
                playbackRate: 1,
                paused: !1,
                duration: NaN,
                _loadPromise: n,
                _gainNode: e,
                _played: !1,
                _playbackTime: 0,
                _ready: !1,
                _isPlaying: !1,
                src: ""
              }))
            }
            get src() {
              return zr.call(this, "src")
            }
            set src(e) {
              const {
                src: t
              } = Kr.call(this);
              "string" == typeof e && e.length > 0 && t !== e && (t && ra.call(this, e), Jr.call(this, {
                src: e
              }), (e => {
                const t = Ur[e];
                if (t && t.audioBuffer) return Promise.resolve(t.audioBuffer);
                if (t && t.loadPromise) return t.loadPromise;
                let n;
                n = /^(http|https):\/\//.test(e) ? Qr(e) : /^(cloud):\/\//.test(e) ? Yr(e) : Hr(e);
                const o = n.then((t => new Promise(((n, o) => {
                  Or.decodeAudioData(t, (t => {
                    const o = Ur[e];
                    o.audioBuffer || (o.audioBuffer = t), n(o.audioBuffer)
                  }), o)
                }))));
                return Ur[e] = {
                  loadPromise: o
                }, o
              })(e).then((e => {
                const t = Kr.call(this),
                  n = Dr.get(this),
                  {
                    _isPlaying: o,
                    autoplay: r,
                    _audioLoadPromiseResolve: a
                  } = t;
                return Jr.call(this, {
                  _ready: !0,
                  _buffer: e,
                  duration: e.duration
                }), n && n(), r && !o && this.play(), a(), null
              })).catch((t => {
                const n = Rr.get(this);
                n && n({
                  type: "error",
                  errMsg: `set audio src ${e} fail: ${t.message}`
                })
              })))
            }
            get startTime() {
              return zr.call(this, "startTime")
            }
            set startTime(e) {
              const {
                _played: t,
                startTime: n
              } = Kr.call(this);
              e !== n && "number" == typeof e && e >= 0 && (Jr.call(this, {
                startTime: e
              }), t || this.seek(e))
            }
            get autoplay() {
              return zr.call(this, "autoplay")
            }
            set autoplay(e) {
              const {
                autoplay: t
              } = Kr.call(this);
              if (!!e !== t && (Jr.call(this, {
                  autoplay: !!e
                }), e)) {
                const {
                  _loadPromise: e
                } = Kr.call(this);
                e.then((() => {
                  const e = Kr.call(this),
                    {
                      _isPlaying: t,
                      autoplay: n,
                      _source: o
                    } = e;
                  return o && !t && n && this.play(), null
                }))
              }
            }
            get loop() {
              return zr.call(this, "loop")
            }
            set loop(e) {
              const t = zr.call(this, "_source");
              Jr.call(this, {
                loop: e = !!e
              }), t && (t.loop = e)
            }
            get volume() {
              return zr.call(this, "volume")
            }
            set volume(e) {
              const {
                volume: t,
                _gainNode: n
              } = Kr.call(this);
              "number" == typeof e && e >= 0 && e <= 1 && e !== t && (Jr.call(this, {
                volume: e
              }), n && n.gain && (n.gain.value = e))
            }
            get playbackRate() {
              return zr.call(this, "playbackRate")
            }
            set playbackRate(e) {
              const {
                playbackRate: t,
                _source: n
              } = Kr.call(this);
              "number" == typeof e && t !== e && e >= .5 && e <= 2 && (Jr.call(this, {
                playbackRate: e,
                _lastCurrentTime: this.currentTime,
                _startedAt: Or.currentTime
              }), n && (n.playbackRate.value = e))
            }
            get duration() {
              return zr.call(this, "duration")
            }
            get currentTime() {
              const {
                currentPlayBackTime: e
              } = ta.call(this);
              return e
            }
            get paused() {
              return zr.call(this, "paused")
            }
            get buffered() {
              const {
                duration: e
              } = Kr.call(this);
              return e > 0 ? e : 0
            }
            play(e = !1) {
              const t = Kr.call(this),
                {
                  _isPlaying: n,
                  _ready: o,
                  _loadPromise: r
                } = t;
              if (n) return;
              const a = () => e ? null : Nr.get(this);
              if (o) {
                ea.call(this, t);
                const e = a();
                e && e()
              } else r.then((() => {
                ea.call(this);
                const e = a();
                return e && e(), null
              }))
            }
            pause() {
              const e = Kr.call(this),
                {
                  _isPlaying: t,
                  _source: n
                } = e;
              if (n && t) {
                const e = Fr.get(this);
                n.stop(0), n.disconnect(), n.onended = null, Jr.call(this, {
                  _isPlaying: !1,
                  _playbackTime: this.currentTime,
                  paused: !0,
                  _endedHandler: null
                }), e && e()
              }
            }
            stop(e = !1) {
              const {
                _source: t
              } = Kr.call(this);
              if (t) {
                const n = Wr.get(this);
                t.stop(0), t.disconnect(), t.onended = null, Jr.call(this, {
                  _isPlaying: !1,
                  _playbackTime: 0,
                  paused: !0,
                  _endedHandler: null
                }), !e && n && n()
              }
            }
            seek(e) {
              if ("number" == typeof e && e >= 0) {
                const {
                  _isPlaying: t
                } = Kr.call(this), n = jr.get(this), o = $r.get(this), r = Dr.get(this);
                o && o(), t ? (this.stop(!0), Jr.call(this, {
                  _playbackTime: e
                }), this.play(!0)) : Jr.call(this, {
                  _playbackTime: e
                }), n && n(), r && r()
              }
            }
            destroy() {
              na.call(this)
            }
            set oncanplay(e) {
              "function" == typeof e ? Dr.set(this, e) : Dr.delete(this)
            }
            set onended(e) {
              "function" == typeof e ? Br.set(this, e) : Br.delete(this)
            }
            set onerror(e) {
              "function" == typeof e ? Rr.set(this, e) : Rr.delete(this)
            }
            set onplay(e) {
              "function" == typeof e ? Nr.set(this, e) : Nr.delete(this)
            }
            set onpause(e) {
              "function" == typeof e ? Fr.set(this, e) : Fr.delete(this)
            }
            set onstop(e) {
              "function" == typeof e ? Wr.set(this, e) : Wr.delete(this)
            }
            set onseeked(e) {
              "function" == typeof e ? jr.set(this, e) : jr.delete(this)
            }
            set onseeking(e) {
              "function" == typeof e ? $r.set(this, e) : $r.delete(this)
            }
            set ontimeupdate(e) {
              if ("function" == typeof e) {
                const t = Vr.get(this);
                clearInterval(t);
                const n = setInterval((() => {
                  const {
                    _isPlaying: t
                  } = Kr.call(this);
                  t && e()
                }), 350);
                Vr.set(this, n)
              } else Vr.delete(this)
            }
            set onwaiting(e) {
              "function" == typeof e ? Zr.set(this, e) : Zr.delete(this)
            }
          }
          const ia = ["src", "startTime", "autoplay", "loop", "obeyMuteSwitch", "volume", "playbackRate", "duration", "currentTime", "paused", "buffered", "referrerPolicy"],
            sa = ["startTime", "duration", "currentTime"],
            ca = ["Canplay", "Ended", "Error", "Pause", "Play", "Seeked", "Seeking", "Stop", "TimeUpdate", "Waiting"],
            la = new Set,
            ua = new WeakMap,
            da = new WeakMap,
            pa = new WeakMap,
            fa = new WeakMap;
          class ha {
            constructor(e, t = 1e3) {
              const n = new l.Z;
              ua.set(this, e), la.add(this), fa.set(this, {
                conversion: t
              }), ia.forEach((n => Object.defineProperty(this, n, {
                get: () => sa.includes(n) ? e[n] / t : e[n],
                set(o) {
                  sa.includes(n) ? e[n] = t * o : e[n] = o
                }
              }))), ca.forEach((t => {
                this["on" + t] = e => {
                  const o = __errorTracer__.surroundThirdByTryCatch(e, `at audioContext.on${t} callback function`);
                  da.set(e, o), pa.set(o, e), n.on(t, o)
                }, this["off" + t] = e => {
                  if ((0, C.mf)(e)) {
                    const o = da.get(e);
                    (0, C.mf)(o) && (n.off(t, o), da.delete(e), pa.delete(o))
                  } else n.listeners(t).forEach((e => {
                    const t = pa.get(e);
                    da.delete(t), pa.delete(e)
                  })), n.removeAllListeners(t)
                }, e["on" + t.toLowerCase()] = (e, o) => {
                  e ? n.emit(t, {
                    errCode: e,
                    errMsg: o
                  }) : n.emit(t)
                }
              }))
            }
            play() {
              ua.get(this).play()
            }
            stop() {
              ua.get(this).stop()
            }
            pause() {
              ua.get(this).pause()
            }
            seek(e) {
              const {
                conversion: t
              } = fa.get(this);
              ua.get(this).seek(t * e)
            }
            destroy() {
              const e = ua.get(this);
              e.destroy && e.destroy(), ca.forEach((e => {
                this["off" + e]()
              })), la.delete(this), ua.delete(this)
            }
            static pauseAllAudio() {
              la.forEach((e => {
                const t = ua.get(e);
                t && t.pause()
              }))
            }
          }
          class ga extends ha {
            constructor() {
              super(new Pr.Z.Audio, 1e3)
            }
          }
          class ya extends ha {
            constructor() {
              super(new aa, 1)
            }
          }
          const va = (0, G.s)("AudioInterruptionBegin"),
            ma = (va.onMethod, va.offMethod, va.internalOnMethod, va.internalOffMethod, (0, G.s)("AudioInterruptionEnd"));
          ma.onMethod, ma.offMethod, ma.internalOnMethod, ma.internalOffMethod;
          let ba = !1,
            _a = !1;
          (0, a.jQ)("onAudioInterruptionBegin", (e => {
            wxNativeConsole.info("onAudioInterruptionBegin"), ba = !0, !1 === _a && va.emit(e)
          })), (0, a.jQ)("onAudioInterruptionEnd", (e => {
            wxNativeConsole.info("onAudioInterruptionEnd"), ba = !1, !1 === _a && ma.emit(e)
          }));
          const wa = () => _a;
          var Ia = n(946);
          const Sa = new WeakMap,
            Aa = new WeakMap,
            ka = new WeakMap,
            Ca = new WeakMap,
            Pa = new WeakMap,
            Ta = new WeakMap,
            xa = new WeakMap,
            Ma = new Map,
            Ea = new Map;
          Pr.Z.EventHandler && (Pr.Z.EventHandler.onbindingobjectdestruct = e => {
            const t = Ea[e];
            t && (0, a.IN)("getAudioState", {
              audioId: t,
              success(e) {
                !0 === e.paused ? (Ma.delete(t), (0, a.IN)("destroyAudioInstance", {
                  audioId: t
                })) : Ma.get(t) && !1 === Ma.get(t).loop && Na.once(`${t}_onAudioStateChange_ended`, (() => {
                  Ma.delete(t), (0, a.IN)("destroyAudioInstance", {
                    audioId: t
                  })
                }))
              }
            })
          });
          const Oa = function (e, t) {
              Aa.set(this, Object.assign(Aa.get(this), {
                [e]: t
              })), "src" === e && Aa.set(this, Object.assign(Aa.get(this), {
                paused: !0
              })), Ca.get(this) && (setTimeout((() => {
                const n = Object.assign({}, Aa.get(this), Pa.get(this), {
                  timestamp: Date.now(),
                  audioId: Sa.get(this),
                  success: () => {
                    Aa.set(this, Object.assign(Aa.get(this), {
                      [e]: t
                    }))
                  },
                  fail: () => {
                    Da.call(this)
                  }
                });
                wa() && (n.autoplay = !1), (0, a.IN)("setAudioState", n), Ca.set(this, !0)
              }), 0), Ca.set(this, !1)), Pa.set(this, Object.assign(Pa.get(this), {
                [e]: t
              }))
            },
            La = function (e, t) {
              xa.get(this).then((() => {
                Oa.call(this, e, t)
              }))
            },
            Da = function (e, t) {
              let n = Aa.get(this)[e];
              return (0, a.IN)("getAudioState", {
                audioId: Sa.get(this),
                success: o => {
                  delete o.errMsg, Aa.set(this, Object.assign(Aa.get(this), o)), n = o[e], "function" == typeof t && t(n)
                }
              }), n
            },
            Ba = function (e) {
              const t = Sa.get(this);
              (0, a.IN)("operateAudio", Object.assign({
                timestamp: Date.now(),
                audioId: t,
                fail({
                  errMsg: e
                }) {
                  Va("error", {
                    errMsg: e,
                    errCode: -1
                  })
                }
              }, e))
            },
            Ra = function (e) {
              xa.get(this).then((() => {
                setTimeout((() => {
                  Ba.call(this, e)
                }), 0)
              }))
            },
            Na = new l.Z;
          (0, a.jQ)("onAudioStateChange", ((e = {}) => {
            e.state = e.state.toLowerCase();
            const {
              state: t,
              audioId: n
            } = e;
            delete e.audioId, delete e.state;
            const o = "play" !== t,
              r = Ma.get(n);
            r && (r.paused = o), (0, a.IN)("getAudioState", {
              audioId: n,
              success() {
                t
              }
            }), Na.emit(`${n}_onAudioStateChange_${t}`, e)
          }));
          const Fa = function (e, t) {
              const n = `${Sa.get(this)}_onAudioStateChange_${e}`,
                o = n => {
                  __errorTracer__.surroundThirdByTryCatch(t, `at audioContext.on${e} callback function`)(n)
                };
              Ta.set(t, o), Na.on(n, o)
            },
            Wa = function (e, t) {
              xa.get(this).then((() => {
                Fa.call(this, e, t)
              }))
            },
            ja = function (e, t) {
              const n = `${Sa.get(this)}_onAudioStateChange_${e}`;
              if ((0, C.mf)(t)) {
                const e = Ta.get(t);
                (0, C.mf)(e) && Na.off(n, e)
              } else Na.removeAllListeners(n)
            },
            $a = function (e, t) {
              xa.get(this).then((() => {
                ja.call(this, e, t)
              }))
            },
            Va = function (e, t) {
              Na.emit(`${Sa.get(this)}_onAudioStateChange_${e}`, t)
            };
          let Za = 0,
            Ua = !1;
          const Ga = class {
              constructor({
                async: e = !0
              } = {}) {
                let t, n;
                Aa.set(this, {}), Pa.set(this, {}), ka.set(this, void 0), Ca.set(this, !0), xa.set(this, new Ia.Q(((e, o) => {
                  t = e, n = o
                }))), (0, a.IN)(m.IS_ANDROID && (0, J.isGame)() && Q.Z.clientVersion >= 654315008 && e || m.WK_RENDERER_H5 ? "createAudioInstanceAsync" : "createAudioInstance", {
                  timestamp: Date.now(),
                  success: e => {
                    const n = {
                      src: "",
                      startTime: 0,
                      paused: !0,
                      currentTime: 0,
                      duration: 0,
                      obeyMuteSwitch: !0,
                      volume: 1,
                      autoplay: !1,
                      loop: !1,
                      buffered: 0,
                      referrerPolicy: ""
                    };
                    if (Ma.set(e.audioId, n), Sa.set(this, e.audioId), Aa.set(this, n), Pr.Z.BindingObject) {
                      const t = new Pr.Z.BindingObject;
                      this.__bindingObject = t, Ea[t.__id] = e.audioId
                    }
                    Za += 1, ++Za >= 1024 && !Ua && m.IS_IOS && (Ua = !0, Reporter.reportIDKey({
                      id: 356,
                      key: "audioInstancesCountReach1024"
                    })), setTimeout(t, 0)
                  },
                  fail: e => {
                    n(e.errMsg)
                  }
                }), ["Play", "Pause", "Stop", "Canplay", "Error", "Ended", "Waiting", "Seeking", "Seeked"].forEach((e => {
                  this[`on${e}`] = t => {
                    Wa.call(this, e.toLowerCase(), t)
                  }, this[`off${e}`] = t => {
                    $a.call(this, e.toLowerCase(), t)
                  }
                }))
              }
              get src() {
                return this.cloudId ? this.cloudId : Da.call(this, "src")
              }
              set src(e) {
                "string" == typeof e && 0 !== e.length ? w([e], "audio", (t => {
                  /^(cloud):\/\//.test(e) ? this.cloudId = e : this.cloudId = "", e = t.data[0].url, La.call(this, "src", e)
                })) : Va.call(this, "error", {
                  errMsg: `Failed to set src, the src ${e} is invalid.`
                })
              }
              get startTime() {
                return Da.call(this, "startTime") / 1e3
              }
              set startTime(e) {
                "number" == typeof e ? La.call(this, "startTime", 1e3 * e) : Va("error", {
                  errMsg: `Failed to set startTime, the startTime ${e} is invalid.`
                })
              }
              set autoplay(e) {
                "boolean" == typeof e && La.call(this, "autoplay", e)
              }
              get autoplay() {
                return Da.call(this, "autoplay")
              }
              set loop(e) {
                "boolean" == typeof e && La.call(this, "loop", e)
              }
              get loop() {
                return Da.call(this, "loop")
              }
              set obeyMuteSwitch(e) {
                "boolean" == typeof e && La.call(this, "obeyMuteSwitch", e)
              }
              get obeyMuteSwitch() {
                return Da.call(this, "obeyMuteSwitch")
              }
              set volume(e) {
                "number" != typeof e || e < 0 || e > 1 || La.call(this, "volume", e)
              }
              get volume() {
                return Da.call(this, "volume")
              }
              set playbackRate(e) {
                "number" != typeof e || e < 0 || La.call(this, "playbackRate", e)
              }
              get playbackRate() {
                return Da.call(this, "playbackRate")
              }
              set referrerPolicy(e) {
                "string" == typeof e && La.call(this, "referrerPolicy", e)
              }
              get referrerPolicy() {
                return Da.call(this, "referrerPolicy")
              }
              get paused() {
                return Da.call(this, "paused")
              }
              get duration() {
                return Da.call(this, "duration") / 1e3
              }
              get currentTime() {
                return Da.call(this, "currentTime") / 1e3
              }
              get buffered() {
                return Da.call(this, "buffered") / 1e3
              }
              play() {
                !1 === wa() && Ra.call(this, {
                  operationType: "play"
                })
              }
              pause() {
                Ra.call(this, {
                  operationType: "pause"
                })
              }
              stop() {
                Ra.call(this, {
                  operationType: "stop"
                })
              }
              seek(e) {
                "number" != typeof e || e < 0 ? Va("error", {
                  errMsg: `Failed to seek, the currentTime ${e} is invalid.`
                }) : Ra.call(this, {
                  operationType: "seek",
                  currentTime: 1e3 * e
                })
              }
              destroy() {
                xa.get(this).then((() => {
                  const e = Sa.get(this);
                  Ma.has(e) && (["play", "pause", "stop", "canplay", "error", "ended", "waiting", "seeking", "seeked"].forEach((t => {
                    const n = `${e}_onAudioStateChange_${t}`;
                    Na.removeAllListeners(n)
                  })), Ma.delete(e), Za -= 1, (0, a.IN)("destroyAudioInstance", {
                    audioId: e
                  }))
                }))
              }
              onTimeUpdate(e) {
                xa.get(this).then((() => {
                  const t = `${Sa.get(this)}_onAudioStateChange_timeupdate`;
                  void 0 === ka.get(this) && ka.set(this, setInterval((() => {
                    if ("active" !== o.Z.runningStatus || !0 === Aa.get(this).paused || 1 === Aa.get(this).paused) return;
                    const e = Aa.get(this).currentTime;
                    Da.call(this, "currentTime", (n => {
                      n !== e && Na.emit(t)
                    }))
                  }), 250)), Na.removeAllListeners(t);
                  const n = t => {
                    __errorTracer__.surroundThirdByTryCatch(e, "at audioContext.onTimeUpdate callback function")(t)
                  };
                  Ta.set(e, n), Na.on(t, n)
                }))
              }
              offTimeUpdate(e) {
                xa.get(this).then((() => {
                  $a.call(this, "timeupdate", e)
                }))
              }
              static pauseAllAudio() {
                Ma.forEach(((e, t) => {
                  (0, a.IN)("operateAudio", {
                    timestamp: Date.now(),
                    audioId: t,
                    operationType: "pause"
                  })
                }))
              }
            },
            qa = wxNativeConsole.createLogger("InnerAudioContext"),
            Ha = e => {
              let t;
              t = "object" == typeof e && e ? e : {
                async: e
              };
              const n = t.useWebAudioImplement;
              return (m.IS_PC || m.IS_MINA) && Pr.Z.Audio ? (qa.info("using NativeAudio"), new ga) : n && xr ? (qa.info("using WebAudio"), new ya) : (qa.info("using AudioJsApi"), new Ga(t))
            },
            Qa = {},
            Ya = new l.y,
            Ja = {};
          (0, a.Ld)("audioInsert", (({
            audioId: e,
            pluginId: t,
            nodeId: n
          }, o) => {
            let r = `${o}_${t}_${e}_`;
            n && n !== __virtualDOM__.getRootNodeId(o) && (r += n), Qa[r] = !0, Ya.emit(`audioInsert_${r}`),
              function (e) {
                Ja[e] || (Ja[e] = !0, v(e, (e => {
                  delete Ja[e], Object.keys(Qa).forEach((t => {
                    new RegExp("^" + e).test(t) && delete Qa[t]
                  }))
                })))
              }(o)
          })), (0, a.Ld)("audioRemove", (({
            audioId: e,
            pluginId: t,
            nodeId: n
          }, o) => {
            let r = `${o}_${t}_${e}_`;
            n && n !== __virtualDOM__.getRootNodeId(o) && (r += n), delete Qa[r]
          }));
          class za {
            constructor(e, t, n, o) {
              if ("string" != typeof e) throw new r.iZ("Parameter 1 should be a string");
              this.audioId = e, this.webviewId = t, this.pluginId = o, this.nodeId = n
            }
            setSrc(e) {
              this._sendAction({
                method: "setSrc",
                data: e
              })
            }
            play() {
              this._getAppStatus() === Rn.w$.BACK_GROUND || this._sendAction({
                method: "play"
              })
            }
            pause() {
              this._sendAction({
                method: "pause"
              })
            }
            seek(e) {
              this._sendAction({
                method: "setCurrentTime",
                data: e
              })
            }
            _ready(e) {
              const t = `${this.webviewId}_${this.pluginId}_${this.audioId}_${this.nodeId}`;
              Qa[t] ? e() : Ya.on(`audioInsert_${t}`, (() => {
                e()
              }))
            }
            _sendAction(e) {
              this._ready((() => {
                (0, a.nY)(`audio_${this.pluginId}_${this.audioId}_${this.nodeId}_actionChanged`, e, [this.webviewId])
              }))
            }
          }

          function Ka(e, t, n = "", r = "") {
            const a = new za(e, t, n, r);
            return a._getAppStatus = () => o.Z.appStatus, a._getHanged = () => o.Z.hanged, H.call(this, (() => {
              a.pause()
            })), a
          }
          const Xa = {},
            ei = {},
            ti = {},
            ni = {};
          let oi = 1;
          (0, a.Ld)("editorInsert", (({
            domId: e,
            editorId: t,
            pluginId: n,
            nodeId: o
          }, r) => {
            let a = `${r}_${n}_${e}_`;
            o && o !== __virtualDOM__.getRootNodeId(r) && (a += o), Xa[a] = t,
              function (e) {
                ti[e] || (ti[e] = !0, v(e, (e => {
                  delete ti[e], Object.keys(Xa).forEach((t => {
                    new RegExp("^" + e).test(t) && delete Xa[t]
                  })), Object.keys(ei).forEach((t => {
                    new RegExp("^api_" + e).test(t) && delete ei[t]
                  })), Object.keys(ei).forEach((t => {
                    new RegExp("^SQ_" + e).test(t) && delete ei[t]
                  }))
                })))
              }(r)
          })), (0, a.Ld)("editorRemoved", (({
            domId: e,
            editorId: t,
            pluginId: n,
            nodeId: o
          }, r) => {
            let a = `${r}_${n}_${e}_`;
            o && o !== __virtualDOM__.getRootNodeId(r) && (a += o), delete Xa[a];
            const i = `SQ_${r}_${t}`;
            delete ei[`api_${r}_${n}_${e}_${o}`], delete ei[i]
          })), (0, a.Ld)("doEditorActionCallback", (e => {
            const t = e.callbackId;
            if (t && void 0 !== ni[t]) {
              delete e.callbackId;
              const n = ni[t];
              e.errMsg && (e.errMsg.indexOf("ok") > -1 ? "function" == typeof n.success && n.success(e) : e.errMsg.indexOf("fail") > -1 && "function" == typeof n.fail && n.fail(e)), "function" == typeof n.complete && n.complete(e), delete ni[t]
            }
          }));
          class ri {
            format(e, t = !1) {
              this._execCommand("format", {
                name: e,
                value: t,
                needCallBack: !1
              })
            }
            scrollIntoView() {
              this._execCommand("scrollIntoView", {
                needCallBack: !1
              })
            }
            _execCommandWithId(e, t, n) {
              if (n.needCallBack) {
                const t = {};
                Object.keys(n).forEach((e => {
                  "function" == typeof n[e] && (t[e] = n[e], delete n[e])
                }));
                const o = `callback${this.webviewId}_${e}_${oi++}`;
                ni[o] = t, n.callbackId = o
              }
              delete n.needCallBack, this.action = {
                method: t,
                args: n
              }, (0, a.nY)(`editor_${this.webviewId}_${e}_actionChanged`, this.action, [this.webviewId])
            }
          } ["insertDivider", "insertImage", "insertText", "setContents", "getContents", "clear", "removeFormat", "undo", "redo", "blur", "getSelectionText"].forEach((e => {
            ri.prototype[e] = (0, g.gA)((function (t) {
              this._execCommand(e, p()(p()({}, t), {}, {
                needCallBack: !0
              }))
            }))
          }));
          class ai extends ri {
            constructor(e, t) {
              super(), this.editorId = e, this.webviewId = t
            }
            _execCommand(e, t) {
              this._execCommandWithId(this.editorId, e, t)
            }
          }

          function ii(e, t) {
            const n = `SQ_${t}_${e}`;
            if (ei[n]) return ei[n];
            const o = new ai(e, t);
            return ei[n] = o, o
          }
        },
        6998: (e, t, n) => {
          "use strict";
          n.d(t, {
            PQ: () => l,
            PL: () => u
          });
          var o = n(1106),
            r = n(2046),
            a = n(665),
            i = n(2851);
          let s = "";
          const c = (0, r.s)("networkstatusChange"),
            l = c.onMethod,
            u = (c.offMethod, () => s);
          (0, o.jQ)("onNetworkStatusChange", ((e = {}) => {
            s = e.networkType, i.Z.currentNetworkType = s, c.emit(e), (0, o.nY)("onNetworkStatusChange", e)
          })), a.Z.onReady((() => {
            var e;
            e = {
              success(e) {
                s = e.networkType, i.Z.currentNetworkType = s
              }
            }, (0, o.IN)("getNetworkType", e)
          }))
        },
        2142: (e, t, n) => {
          "use strict";
          n.d(t, {
            l: () => r
          });
          var o = n(6257);
          const r = () => o.ZP.app
        },
        2614: (e, t, n) => {
          "use strict";
          n.d(t, {
            o: () => x,
            S: () => M
          });
          var o = n(1106),
            r = n(6947),
            a = n(2582),
            i = n(665),
            s = n(2288),
            c = n(5014),
            l = n(9929);
          (0, l.b)("Download", {
            maxTaskCount: 10,
            functionName: "downloadFile"
          }), i.Z.onReady((() => {
            try {
              "number" == typeof i.Z.wxAppInfo.maxDownloadConcurrent && (0, l.b)("Download", {
                maxTaskCount: i.Z.wxAppInfo.maxDownloadConcurrent
              })
            } catch (e) {}
          }));
          class u extends l.o {
            constructor(e) {
              super(e, {
                taskType: "Download",
                beforeSend: t => (t.filePath = e.filePath, t),
                beforeSuccess: e => (delete e.timeInterval, e)
              })
            }
          }
          const d = u;
          var p = n(8159),
            f = n(1095),
            h = n(9271);
          const g = r.Z.Download,
            y = new WeakMap,
            v = new WeakMap,
            m = new WeakMap,
            b = [];
          let _ = 0,
            w = 10;

          function I(e = !1) {
            for (e && (y.delete(e), v.delete(e), m.delete(e), _--); b.length > 0 && _ < w;) {
              const e = b.shift(),
                t = y.get(e),
                n = v.get(e);
              t && n && (t.start(n), _++)
            }
          }
          i.Z.onReady((() => {
            i.Z.wxAppInfo && i.Z.wxAppInfo.maxDownloadConcurrent && (w = i.Z.wxAppInfo.maxDownloadConcurrent)
          }));
          class S {
            constructor(e) {
              const t = new g,
                n = new p.Z;
              y.set(this, t), m.set(this, n), v.set(this, (0, f.filterObject)(e, ["url", "header", "filePath", "enableProfile"])), t.onfail = t => {
                (0, o.YG)("downloadFile", e, t), I(!0)
              }, t.onsuccess = t => {
                (0, o.FE)({
                  name: "downloadFile",
                  args: e,
                  res: t
                }), I(!0)
              }, t.onheader = e => n.emit("header", {
                header: e
              }), t.onprogress = (e, t, o) => n.emit("progress", {
                progress: e,
                totalBytesWritten: t,
                totalBytesExpectedToWrite: o
              }), (0, h.k)({
                api: "downloadFile",
                url: e.url
              }).then((t => {
                e.__skipDomainCheck__ || t.isInDomainList || t.isInLAN && !t.isLocalHost ? (b.push(this), I()) : (0, o.YG)("downloadFile", e, "invalid url")
              })).catch((() => {
                (0, o.YG)("downloadFile", e, "url validate error")
              }))
            }
            abort() {
              const e = y.get(this);
              e && e.abort()
            }
            onHeadersReceived(e) {
              const t = m.get(this);
              t && t.on("header", e)
            }
            onProgressUpdate(e) {
              const t = m.get(this);
              t && t.on("progress", e)
            }
            offHeadersReceived(e) {
              const t = m.get(this);
              t && t.off("header", e)
            }
            offProgressUpdate(e) {
              const t = m.get(this);
              t && t.off("progress", e)
            }
          }
          let A = !1;

          function k(e) {
            return A ? new S(e) : new d(e)
          }
          n.g.__isAppServiceRemoteDebugMode__ || r.Z.Download && i.Z.onReady((() => {
            let e = !1;
            const t = a.IS_IOS ? "clicfg_appbrand_ios_native_download" : "clicfg_appbrand_native_download";
            (0, s.b)({
              experimentId: t,
              experimentType: "Expt",
              success: t => {
                t && 1 === Number(t.testConfig) && (e = !0)
              },
              fail(e) {}
            });
            const n = (0, c.J)("bindingDownload");
            A = e || n
          }));
          var C = n(6257);
          const P = (e = {}) => (e = Object.assign({
              __skipDomainCheck__: !1
            }, e), (t = {}) => {
              if ((0, o.r3)("downloadFile", t, {
                  url: ""
                })) {
                t.__skipDomainCheck__ = e.__skipDomainCheck__;
                try {
                  return new k(t)
                } catch (e) {
                  return void(0, o.YG)("downloadFile", t, e.message)
                }
              }
            }),
            T = P(),
            x = P({
              __skipDomainCheck__: !0
            }),
            M = (e = {}) => {
              if ("string" != typeof e.filePath || !e.filePath.startsWith((0, C.WZ)())) return T(e);
              (0, o.YG)("downloadFile", e, "permission denied")
            }
        },
        2953: (e, t, n) => {
          "use strict";
          n.r(t), n.d(t, {
            CDN: () => o,
            _downloadFileSkipCheckDomain: () => d.o,
            _requestSkipCheckDomain: () => u.a,
            _socketSkipCheckDomainFactory: () => re,
            _uploadFileSkipCheckDomain: () => b,
            addNativeDownloadTask: () => le,
            calRqt: () => Ce,
            cancelDownloadAppTask: () => _e,
            downloadApp: () => ve,
            downloadAppForIOS: () => ke,
            downloadFile: () => d.S,
            getAppInstallState: () => me,
            installDownloadApp: () => we,
            onDownloadAppStateChange: () => Ae,
            pauseDownloadAppTask: () => Ie,
            queryDownloadAppTask: () => be,
            request: () => u.W,
            resumeDownloadAppTask: () => Se,
            secureTunnel: () => Pe,
            socket: () => oe,
            uploadFile: () => m
          });
          var o = {};
          n.r(o), n.d(o, {
            onUploadEncryptedFileToCDNProgress: () => ie,
            private_uploadToCommonCDN: () => ce,
            uploadEncryptedFileToCDN: () => ae,
            uploadToCommonCDN: () => se
          });
          var r = n(665),
            a = n(2288),
            i = n(1095),
            s = n(2582),
            c = n(6077);
          const l = [{
            APINames: [/^connectSocket/],
            ios: {
              app: 1,
              game: 1
            },
            android: {
              app: 1,
              game: 1
            },
            version: 1
          }, {
            APINames: [/^request/, /^downloadFile/],
            ios: {
              app: "clicfg_wegame_ios_use_cronet_request",
              game: "clicfg_wegame_ios_use_cronet_request"
            },
            android: {
              app: 1,
              game: 1
            },
            version: 1
          }, {
            APINames: [/^downloadFile/],
            ios: {
              app: "clicfg_appbrand_ios_native_download",
              game: "clicfg_appbrand_ios_native_download"
            },
            android: {
              app: 0,
              game: 0
            },
            version: 2
          }, {
            APINames: [/^connectSocket/],
            ios: {
              app: "clicfg_appbrand_ios_native_socket_wcwss",
              game: "clicfg_appbrand_ios_native_socket_wcwss"
            },
            android: {
              app: 2,
              game: 2
            },
            version: 2
          }];
          r.Z.onReady((() => {
            if (!(0, i.isGame)() && !(0, i.isApp)()) return;
            const e = (0, i.isGame)() ? "game" : "app";
            l.forEach((t => {
              const {
                APINames: n,
                version: o
              } = t, r = t[s.PLATFORM];
              r && r[e] && function (e, t, n) {
                JSON.stringify(t), "string" == typeof e ? (0, a.b)({
                  experimentId: e,
                  experimentType: "Expt",
                  success({
                    testConfig: e
                  }) {
                    JSON.stringify(t), 1 === Number(e) && t.forEach((e => {
                      (0, c.T)(e, n)
                    }))
                  }
                }) : "number" == typeof e && t.forEach((t => {
                  (0, c.T)(t, e)
                }))
              }(r[e], n, o)
            }))
          }));
          var u = n(5166),
            d = n(2614),
            p = n(1106),
            f = n(5260),
            h = n(9929);
          (0, h.b)("Upload", {
            maxTaskCount: 10,
            functionName: "uploadFile"
          }), r.Z.onReady((() => {
            try {
              "number" == typeof r.Z.wxAppInfo.maxUploadConcurrent && (0, h.b)("Upload", {
                maxTaskCount: r.Z.wxAppInfo.maxUploadConcurrent
              })
            } catch (e) {}
          }));
          class g extends h.o {
            constructor(e) {
              super(e, {
                taskType: "Upload",
                beforeSend: t => (t.filePath = e.filePath, t.name = e.name, t.formData = e.formData, t),
                beforeSuccess: e => e
              })
            }
          }
          const y = g,
            v = (e = {}) => (e = Object.assign({
              __skipDomainCheck__: !1
            }, e), (t = {}) => {
              if (!(0, p.r3)("uploadFile", t, {
                  url: "",
                  filePath: "",
                  name: ""
                })) return;
              "object" != typeof t.header && void 0 !== t.header && (console.warn("uploadFile: header must be an object"), delete t.header), "object" != typeof t.formData && void 0 !== t.formData && (console.warn("uploadFile: formData must be an object"), delete t.formData);
              let n = {},
                o = {};
              t.header && (n = (0, f.Nf)(t.header)), t.formData && (o = (0, f.Nf)(t.formData));
              try {
                return new y(Object.assign({}, t, {
                  header: n,
                  formData: o,
                  __skipDomainCheck__: e.__skipDomainCheck__
                }))
              } catch (e) {
                return void(0, p.YG)("uploadFile", t, e.message)
              }
            }),
            m = v(),
            b = v({
              __skipDomainCheck__: !0
            });
          var _, w = n(2102),
            I = n.n(w),
            S = n(2184),
            A = n(1013),
            k = n(7452),
            C = n(5062);
          let P = 0;
          const T = new WeakMap,
            x = new WeakMap,
            M = new WeakMap,
            E = new WeakMap,
            O = {},
            L = new S.Q;
          (0, p.jQ)("onSocketTaskStateChange", ((e = {}) => {
            const {
              state: t,
              socketTaskId: n
            } = e, o = O[n];
            if (!o) return;
            const r = T.get(o);
            if (delete e.state, delete e.socketTaskId, o) {
              if ("open" === t) {
                o.readyState = o.OPEN;
                const t = M.get(o).url,
                  n = 1,
                  r = Date.now() - E.get(o),
                  a = "",
                  i = e.statusCode,
                  s = M.get(o).__skipDomainCheck__,
                  c = 0,
                  l = e.profile;
                (0, A.P)("connectSocket", t, n, r, a, i, s, c, 0, l)
              } else "close" !== t && "error" !== t || (o.readyState = o.CLOSED);
              L.emit(`${r}${t}`, e), L.emit(`onSocket${t[0].toUpperCase()+t.substr(1)}`, e, o), "close" === t && (delete O[n], L.removeAllListeners(`${r}open`), L.removeAllListeners(`${r}close`), L.removeAllListeners(`${r}error`), L.removeAllListeners(`${r}message`))
            }
          }));
          const D = function (e, t) {
            L.on(`${T.get(this)}${e}`, __errorTracer__.surroundThirdByTryCatch(t, `at socketTask.on${e} callback function`))
          };
          let B = (_ = class {
            constructor(e, t) {
              this.CONNECTING = 0, this.OPEN = 1, this.CLOSING = 2, this.CLOSED = 3, this.readyState = this.CONNECTING;
              const n = P++;
              let o;
              T.set(this, n), M.set(this, t), Object.defineProperty(this, "__socketInstance__", {
                value: e,
                writable: !1,
                configurable: !1,
                enumerable: !1
              }), ["success", "fail", "complete"].forEach((e => {
                "function" == typeof t[e] && (t[e] = __errorTracer__.surroundThirdByTryCatch(t[e], `at api connectSocket ${e} callback function`))
              })), E.set(this, Date.now()), (0, k.hj)(t.timeout) || (t.timeout = 0);
              const r = () => {
                (0, p.IN)("createSocketTask", t, {
                  beforeAll(e) {
                    e.errMsg = e.errMsg.replace("createSocketTask", "connectSocket")
                  },
                  beforeSuccess: e => {
                    x.set(this, e.socketTaskId), O[e.socketTaskId] = this
                  },
                  beforeFail: e => {
                    const n = t.url,
                      r = Date.now() - E.get(this),
                      a = t.__skipDomainCheck__;
                    o = e.errMsg, (0, A.P)("connectSocket", n, 2, r, o, "", a, 0)
                  }
                }), o && (this.readyState = this.CLOSED, setTimeout((() => {
                  L.emit(`${n}error`, {
                    errMsg: o
                  })
                }), 0))
              };
              (0, k.mf)(t.customCheck) ? t.customCheck(t, (e => {
                e ? ((0, p.YG)("connectSocket", t, e), this.readyState = this.CLOSED, setTimeout((() => {
                  L.emit(`${n}error`, {
                    errMsg: e
                  })
                }), 0)) : r()
              })): r()
            }
            send(e) {
              if (this.readyState === this.OPEN) {
                const t = Date.now();
                (0, p.IN)("operateSocketTask", Object.assign({}, e, {
                  operationType: "send",
                  socketTaskId: x.get(this)
                }), {
                  beforeAll: n => {
                    if (n.errMsg = n.errMsg.replace("operateSocketTask", "sendSocketMessage"), Math.random() > .99) {
                      const o = M.get(this).url,
                        r = n.errMsg.indexOf("ok") > -1 ? 1 : 2,
                        a = Date.now() - t,
                        s = n.errMsg,
                        c = "",
                        l = M.get(this).__skipDomainCheck__,
                        u = (0, i.getDataLength)(e.data);
                      (0, A.P)("sendSocketMessage", o, r, a, s, c, l, u)
                    }
                  }
                })
              } else(0, p.YG)("SocketTask.send", e, "SocketTask.readyState is not OPEN")
            }
            close(e = {}) {
              (0, p.IN)("operateSocketTask", Object.assign({
                code: 1e3
              }, e, {
                operationType: "close",
                socketTaskId: x.get(this)
              }), {
                beforeAll(e) {
                  e.errMsg = e.errMsg.replace("operateSocketTask", "closeSocket")
                }
              })
            }
            onOpen(e) {
              D.call(this, "open", e)
            }
            onClose(e) {
              D.call(this, "close", e)
            }
            onMessage(e) {
              D.call(this, "message", e)
            }
            onError(e) {
              D.call(this, "error", e)
            }
          }, I()(_.prototype, "send", [C.Qu], Object.getOwnPropertyDescriptor(_.prototype, "send"), _.prototype), I()(_.prototype, "close", [C.Qu], Object.getOwnPropertyDescriptor(_.prototype, "close"), _.prototype), _);
          var R = n(6947),
            N = n(9271);
          let F = 5;
          r.Z.onReady((() => {
            r.Z.wxAppInfo && r.Z.wxAppInfo.maxWebsocketConnect && (F = r.Z.wxAppInfo.maxWebsocketConnect)
          }));
          const W = R.Z.WSS,
            j = new WeakMap,
            $ = new WeakMap,
            V = new WeakMap,
            Z = {},
            U = new S.Q;
          let G = 0,
            q = 0;

          function H(e, t, n) {
            t.errMsg = t.errMsg || "ok";
            const o = "ok" === t.errMsg;
            (0, p.FE)({
              name: e,
              args: n,
              success: o,
              errMsg: t.errMsg
            })
          }
          class Q {
            constructor(e, t) {
              this.CONNECTING = 0, this.OPEN = 1, this.CLOSING = 2, this.CLOSED = 3, this.readyState = this.CONNECTING, Object.defineProperty(this, "__socketInstance__", {
                value: e,
                writable: !1,
                configurable: !1,
                enumerable: !1
              });
              const n = G++,
                o = new W;
              j.set(this, t), $.set(this, o), V.set(this, n);
              const r = Date.now();
              o.onopen = (e, o) => {
                this.readyState !== this.CLOSED && (q++, this.readyState = this.OPEN, U.emit(`${n}open`, {
                  header: e,
                  profile: o
                }), U.emit("onSocketOpen", {
                  header: e,
                  profile: o
                }, this), (0, A.P)("connectSocket", t.url, 1, Date.now() - r, "", "", t.__skipDomainCheck__, 0, 0, o))
              }, o.onclose = (e, t) => {
                q--, this.readyState = this.CLOSED, U.emit(`${n}close`, {
                  code: e,
                  reason: t
                }), U.emit("onSocketClose", {
                  code: e,
                  reason: t
                }, this)
              }, o.onmessage = e => {
                this.readyState !== this.CLOSED && ((0, k.eP)(e) && (e.__proto__ = ArrayBuffer.prototype), U.emit(`${n}message`, {
                  data: e
                }), U.emit("onSocketMessage", {
                  data: e
                }, this))
              }, o.onerror = (e, t) => {
                q--, this.readyState = this.CLOSED, setTimeout((() => {
                  U.emit(`${n}error`, {
                    errCode: e,
                    errMsg: t
                  }), U.emit("onSocketError", {
                    errCode: e,
                    errMsg: t
                  }, this)
                }), 0)
              };
              const a = () => {
                const e = {
                  errMsg: ""
                };
                q >= F ? (this.readyState = this.CLOSED, e.errMsg = `fail reach max websocket connect count ${F}`) : (e.errMsg = o.connect((0, i.filterObject)(t, ["url", "header", "timeout", "protocols", "tcpNoDelay", "perMessageDeflate", "enableProfile"])), "string" == typeof e.errMsg && "" !== e.errMsg || (e.errMsg = "ok")), e.errMsg, "ok" === e.errMsg && (Z[n] = this), H("connectSocket", e, t)
              };
              (0, k.mf)(t.customCheck) ? t.customCheck(t, (e => {
                e ? H("connectSocket", {
                  errMsg: e
                }, t) : a()
              })): (a(), (0, N.k)({
                api: "websocket",
                url: t.url
              }).then((e => {
                if (t.url, !(t.__skipDomainCheck__ || e.isInDomainList || e.isInLAN && !e.isLocalHost)) throw new Error("fail:url not in domain list")
              })).catch((e => {
                this.readyState = this.CLOSED;
                const t = e.message || e.errMsg;
                U.emit(`${n}error`, {
                  errMsg: t
                }), U.emit("onSocketError", {
                  errMsg: t
                }, this)
              })))
            }
            send(e = {}) {
              const t = {
                errMsg: $.get(this).send(e.data)
              };
              (e.success || e.fail || e.complete) && H("sendSocketMessage", t, e)
            }
            close(e = {}) {
              this.readyState;
              H("closeSocket", {
                errMsg: $.get(this).close((0, k.hj)(e.code) ? e.code : 1e3, e.reason)
              }, e)
            }
            onOpen(e) {
              U.on(`${V.get(this)}open`, __errorTracer__.surroundThirdByTryCatch(e, "at socketTask.onOpen callback function"))
            }
            onClose(e) {
              U.on(`${V.get(this)}close`, __errorTracer__.surroundThirdByTryCatch(e, "at socketTask.onClose callback function"))
            }
            onMessage(e) {
              U.on(`${V.get(this)}message`, __errorTracer__.surroundThirdByTryCatch(e, "at socketTask.onMessage callback function"))
            }
            onError(e) {
              U.on(`${V.get(this)}error`, __errorTracer__.surroundThirdByTryCatch(e, "at socketTask.onError callback function"))
            }
          }
          var Y = n(5014);
          let J = B,
            z = O;
          n.g.__isAppServiceRemoteDebugMode__ || R.Z.WSS && r.Z.onReady((() => {
            let e = !1;
            const t = s.IS_IOS ? "clicfg_appbrand_ios_native_socket_wcwss" : 1;
            1 === t ? e = !0 : (0, a.b)({
              experimentId: t,
              experimentType: "Expt",
              success: t => {
                t && 1 === Number(t.testConfig) && (e = !0)
              }
            });
            const n = (0, Y.J)("bindingWebSocket");
            (e || n) && (J = Q, z = Z)
          }));
          const K = new WeakMap,
            X = {};

          function ee(e, t) {
            return X[t] || (X[t] = new WeakMap, L.on(`onSocket${t}`, te(t)), U.on(`onSocket${t}`, te(t))),
              function (n) {
                (0, p.r3)(`onSocket${t}`, n, C.ZT) && X[t].set(e, n)
              }
          }

          function te(e) {
            return function (t, n) {
              const o = n.__socketInstance__,
                r = X[e].get(o),
                a = K.get(o);
              r && n === a && __errorTracer__.surroundThirdByTryCatch(r, `at onSocket${e} callback function`)(t)
            }
          }
          const ne = (e = {}) => {
              e = Object.assign({
                __skipDomainCheck__: !1
              }, e);
              const t = {};
              return {
                connectSocket(n) {
                  if (!(0, p.r3)("connectSocket", n, {
                      url: ""
                    })) return;
                  if (!1 === (0, f.mQ)(n.url, "websocket")) return void(0, p.YG)("request", n, `invalid url "${n.url}"`);
                  "object" != typeof n.header && void 0 !== n.header && delete n.header;
                  let o = {};
                  n.header && (o = (0, f.Nf)(n.header)), n.__skipDomainCheck__ = e.__skipDomainCheck__;
                  try {
                    const e = K.get(t),
                      r = new J(t, Object.assign({}, n, {
                        header: o
                      }));
                    return e && e.readyState !== e.CLOSED ? e.readyState : K.set(t, r), r
                  } catch (e) {
                    return e.message, void(0, p.YG)("connectSocket", n, e.message)
                  }
                },
                closeSocket(e) {
                  const n = K.get(t);
                  n && n.readyState !== n.CLOSED ? (n.readyState = n.CLOSED, n.close(e)) : (0, p.YG)("closeSocket", e, "WebSocket is not connected");
                  for (const e in z) {
                    const o = z[e];
                    o.__socketInstance__ === t && (o.readyState = o.CLOSED, o !== n && o.close())
                  }
                },
                sendSocketMessage(e) {
                  const n = K.get(t);
                  n && n.readyState === n.OPEN ? n.send(e) : (0, p.YG)("sendSocketMessage", e, "WebSocket is not connected")
                },
                onSocketOpen: ee(t, "Open"),
                onSocketClose: ee(t, "Close"),
                onSocketMessage: ee(t, "Message"),
                onSocketError: ee(t, "Error")
              }
            },
            oe = ne(),
            re = () => ne({
              __skipDomainCheck__: !0
            }),
            ae = (e = {}) => {
              (0, p.IN)("uploadEncryptedFileToCDN", e, {})
            },
            ie = e => {
              (0, p.jQ)("onUploadEncryptedFileToCDNProgress", e)
            },
            se = (e = {}) => {
              (0, p.IN)("uploadToCommonCDN", e, {})
            },
            ce = (e = {}) => {
              if ((0, Y.J)("uploadToCommonCDN"))(0, p.IN)("uploadToCommonCDN", e, {});
              else {
                const t = "uploadToCommonCDN:fail no permission";
                "function" == typeof e.fail && e.fail({
                  errMsg: t
                }), "function" == typeof e.complete && e.complete({
                  errMsg: t
                })
              }
            },
            le = (e = {}) => {
              s.IS_IOS ? (0, p.YG)("addNativeDownloadTask", e, "iOS not supported") : (0, p.IN)("addNativeDownloadTask", e, {})
            };
          var ue = n(8159);
          const de = new WeakMap,
            pe = new WeakMap,
            fe = new ue.Z;

          function he(e) {
            const {
              success: t,
              fail: n,
              complete: o
            } = e;
            (0, p.IN)("addDownloadTaskForNative", Object.assign(e, {
              success: e => {
                delete e.errMsg, this.taskId = e.downloadId, fe.on(`${this.taskId}:success`, (e => {
                  e.errMsg = "downloadApp:ok", "function" == typeof t && t(e), "function" == typeof o && o(e)
                })), fe.on(`${this.taskId}:fail`, (e => {
                  e.errMsg = `downloadFile:fail ${e.errMsg}`, "function" == typeof n && n(e), "function" == typeof o && o(e)
                }));
                const r = pe.get(this) || [];
                de.set(this, "ready"), r.forEach((e => {
                  ge.call(this, e[0], ...e[1])
                })), fe.emit(`${this.taskId}:created`, e)
              },
              fail: e => {
                "function" == typeof n && n(e), "function" == typeof o && o(e)
              },
              complete: () => {
                pe.set(this, [])
              }
            }), {
              beforeAll(e) {
                e.errMsg = e.errMsg.replace("addDownloadTaskForNative", "downloadApp")
              }
            })
          }

          function ge(e, ...t) {
            if ("ready" !== de.get(this)) {
              const n = pe.get(this) || [];
              return n.push([e, t]), void pe.set(this, n)
            }
            switch (e) {
              case "cancel":
                (0, p.IN)("cancelDownloadTaskForNative", {
                  downloadIdArray: [this.taskId]
                });
                break;
              case "onProgressUpdate":
                fe.on(`${this.taskId}:progressUpdate`, (e => {
                  "function" == typeof t[0] && __errorTracer__.surroundThirdByTryCatch(t[0], "at DownloadAppTask.onProgressUpdate callback function")(e)
                }));
                break;
              case "onCreated":
                fe.on(`${this.taskId}:created`, (e => {
                  "function" == typeof t[0] && __errorTracer__.surroundThirdByTryCatch(t[0], "at DownloadAppTask.onCreated callback function")(e)
                }));
                break;
              default:
                (0, p.IN)(`${e}DownloadTaskForNative`, {
                  downloadId: this.taskId
                })
            }
          }(0, p.jQ)("onDownloadAppStateChangeForNative", (e => {
            const {
              state: t,
              downloadId: n
            } = e;
            switch (delete e.state, delete e.downloadId, delete e.appId, t) {
              case "download_succ":
                fe.emit(`${n}:progressUpdate`, e), fe.emit(`${n}:success`, e);
                break;
              case "download_failed":
                fe.emit(`${n}:fail`, e);
                break;
              case "download_progress_changed":
                fe.emit(`${n}:progressUpdate`, e)
            }
            "download_succ" !== t && "download_failed" !== t || (fe.removeAllListeners(`${n}:success`), fe.removeAllListeners(`${n}:fail`), fe.removeAllListeners(`${n}:progressUpdate`))
          }));
          const ye = class {
              constructor(e) {
                this.taskId = null, ["success", "fail", "complete"].forEach((t => {
                  "function" == typeof e[t] && (e[t] = __errorTracer__.surroundThirdByTryCatch(e[t], `at api downloadApp ${t} callback function`))
                })), he.call(this, e)
              }
              pause() {
                ge.call(this, "pause")
              }
              resume() {
                ge.call(this, "resume")
              }
              cancel() {
                ge.call(this, "cancel")
              }
              install() {
                ge.call(this, "install")
              }
              onCreated(e) {
                ge.call(this, "onCreated", e)
              }
              onProgressUpdate(e) {
                ge.call(this, "onProgressUpdate", e)
              }
            },
            ve = (e = {}) => {
              if (s.IS_IOS)(0, p.YG)("downloadApp", e, "iOS not supported");
              else {
                if (!(0, p.r3)("downloadApp", e, {
                    taskName: "",
                    taskUrl: "",
                    fileMd5: ""
                  })) return null;
                e.fileType = e.fileType || 1;
                try {
                  return new ye(e)
                } catch (t) {
                  return (0, p.YG)("downloadApp", e, t.message), null
                }
              }
            },
            me = (e = {}) => {
              s.IS_IOS ? (0, p.YG)("getAppInstallState", e, "iOS not supported") : e.packageName || e.packageNameArray ? (0, p.IN)("getInstallStateForNative", e, {
                beforeAll(e) {
                  e.errMsg = e.errMsg.replace("getInstallStateForNative", "getAppInstallState")
                }
              }) : (0, p.YG)("getAppInstallState", e, "parameter error: require packageName or packageNameArray")
            },
            be = (e = {}) => {
              s.IS_IOS ? (0, p.YG)("queryDownloadAppTask", e, "iOS not supported") : e.downloadId || e.downloadIdArray || e.appIdArray ? (0, p.IN)("queryDownloadTaskForNative", e, {
                beforeAll(e) {
                  e.errMsg = e.errMsg.replace("queryDownloadTaskForNative", "queryDownloadAppTask"), "download_succ" === e.state && (e.progress = 100), (e.result || []).forEach((e => {
                    "download_succ" === e.state && (e.progress = 100)
                  }))
                }
              }) : (0, p.YG)("queryDownloadAppTask", e, "parameter error: require downloadId or downloadIdArray or appIdArray")
            },
            _e = (e = {}) => {
              s.IS_IOS ? (0, p.YG)("cancelDownloadAppTask", e, "iOS not supported") : (0, p.r3)("cancelDownloadAppTask", e, {
                downloadIdArray: []
              }) && (0, p.IN)("cancelDownloadTaskForNative", e, {
                beforeAll(e) {
                  e.errMsg = e.errMsg.replace("cancelDownloadTaskForNative", "cancelDownloadAppTask")
                }
              })
            },
            we = (e = {}) => {
              s.IS_IOS ? (0, p.YG)("installDownloadApp", e, "iOS not supported") : (0, p.r3)("installDownloadApp", e, {
                downloadId: ""
              }) && (0, p.IN)("installDownloadTaskForNative", e, {
                beforeAll(e) {
                  e.errMsg = e.errMsg.replace("installDownloadTaskForNative", "installDownloadApp")
                }
              })
            },
            Ie = (e = {}) => {
              s.IS_IOS ? (0, p.YG)("pauseDownloadAppTask", e, "iOS not supported") : (0, p.r3)("pauseDownloadAppTask", e, {
                downloadId: ""
              }) && (0, p.IN)("pauseDownloadTaskForNative", e, {
                beforeAll(e) {
                  e.errMsg = e.errMsg.replace("pauseDownloadTaskForNative", "pauseDownloadAppTask")
                }
              })
            },
            Se = (e = {}) => {
              s.IS_IOS ? (0, p.YG)("resumeDownloadAppTask", e, "iOS not supported") : (0, p.r3)("resumeDownloadAppTask", e, {
                downloadId: ""
              }) && (0, p.IN)("resumeDownloadTaskForNative", e, {
                beforeAll(e) {
                  e.errMsg = e.errMsg.replace("resumeDownloadTaskForNative", "resumeDownloadAppTask")
                }
              })
            },
            Ae = e => {
              (0, p.jQ)("onDownloadAppStateChangeForNative", ((t = {}) => {
                __errorTracer__.surroundThirdByTryCatch(e, "at onDownloadAppStateChange callback function")(t)
              }))
            },
            ke = (e = {}) => {
              if (!s.IS_ANDROID) return (0, p.r3)("downloadAppForIOS", e, {
                appUrl: ""
              }) ? ((0, p.IN)("downloadAppInternalForNative", e, {
                beforeAll(e) {
                  e.errMsg = e.errMsg.replace("downloadAppInternalForNative", "downloadAppForIOS")
                }
              }), null) : null;
              (0, p.YG)("downloadAppForIOS", e, "android not supported")
            },
            Ce = (e = {}) => {
              (0, p.r3)("calRqt", e, {
                rqt: ""
              }) && (0, p.IN)("calRqt", e)
            },
            Pe = e => {
              (0, p.IN)("secureTunnel", e)
            }
        },
        5166: (e, t, n) => {
          "use strict";
          n.d(t, {
            a: () => B,
            W: () => D
          });
          var o = n(1106),
            r = n(5260),
            a = n(665),
            i = n(9929),
            s = n(7452),
            c = n(2851);
          let l = "undefined" != typeof __libVersionInfo__ && __libVersionInfo__ ? __libVersionInfo__.version : "unknown",
            u = "undefined" != typeof __libVersionInfo__ && __libVersionInfo__ ? __libVersionInfo__.updateTime : "unknown";

          function d({
            isSuccess: e,
            invokeTime: t,
            costTime: n,
            wxdataQueueTimestamp: o,
            wxdataDequeueTimestamp: r,
            beginCGITimestamp: i,
            CGICallbackTimestamp: d,
            wxlibCallbackTimestamp: p,
            requestingCount: f,
            cost1: h,
            cost2: g,
            cost3: y,
            cost4: v,
            cost5: m,
            cost6: b,
            JSApiType: _
          }) {
            Math.random() < .002 && setTimeout((() => {
              const w = c.Z.currentNetworkType,
                I = a.Z.appType + 1e3,
                S = a.Z.appLaunchInfo && void 0 !== a.Z.appLaunchInfo.scene ? a.Z.appLaunchInfo.scene : 0,
                A = ["", "", e ? 1 : 0, t, n, w, "", I, S, l, u, "", 0, 0, h, g, y, v, m, b, 0, 0, f, t, o, r, i, d, 0, 0, p, _].map((k = 1024, e => (0, s.HD)(e) && e.length > k ? e.substr(0, k) : e)).join(",");
              var k;
              Reporter.reportKeyValue({
                key: "WeAppOperateWXData",
                value: A
              })
            }), 0)
          }(0, s.HD)(l) && (l = l.replace(" ", "")), (0, s.HD)(u) && (u = u.replace(" ", "-"));
          var p = n(7646),
            f = n(1095),
            h = n(6998);
          const g = (0, f.promisify)((0, p.Ce)(!1, "getDNSInfo"));
          let y = {},
            v = {},
            m = {};
          (0, h.PQ)((() => {
            y = {}, v = {}, m = {}
          }));
          let b = 0;
          (0, i.b)("Request", {
            maxTaskCount: 10,
            functionName: "request"
          }), a.Z.onReady((() => {
            try {
              "number" == typeof a.Z.wxAppInfo.maxRequestConcurrent && (0, i.b)("Request", {
                maxTaskCount: a.Z.wxAppInfo.maxRequestConcurrent
              })
            } catch (e) {}
          }));
          class _ extends i.o {
            constructor(e) {
              const t = {
                JSApiType: 1,
                invokeTime: Date.now(),
                requestingCount: ++b
              };
              super(e, {
                taskType: "Request",
                beforeSend: t => (t.responseType = e.responseType, t.apiSigningSeq = e.apiSigningSeq, t.apiSignature = e.apiSignature, t),
                beforeSuccess: n => {
                  var o, r;
                  return e.host && e.ip && (o = e.host, r = e.ip, v[o] = r), t.isSuccess = !0,
                    function (e) {
                      "string" == typeof e.data && 65279 === e.data.charCodeAt(0) && (e.data = e.data.substr(1))
                    }(n),
                    function (e) {
                      e.statusCode = parseInt(e.statusCode, 10)
                    }(n),
                    function (e) {
                      "object" == typeof e.header && (e.header = Object.keys(e.header).reduce(((t, n) => (Array.isArray(e.header[n]) ? t[n] = e.header[n].join(",") : "string" == typeof e.header[n] && (t[n] = e.header[n]), t)), {}))
                    }(n), "json" === e.dataType && function (e) {
                      try {
                        e.data = JSON.parse(e.data)
                      } catch (e) {}
                    }(n), w(n, t, e), n
                },
                beforeFail: n => (t.isSuccess = !1, w(n, t, e), n)
              })
            }
          }

          function w(e, t, n) {
            const o = Date.now();
            if (b--, t.costTime = o - t.invokeTime, e.clientInfo && "object" == typeof e.clientInfo) {
              const r = e.clientInfo;
              t.wxdataQueueTimestamp = r.invokeTime, t.wxdataDequeueTimestamp = r.invokeTime, t.beginCGITimestamp = r.beginCGITimestamp, t.CGICallbackTimestamp = r.CGICallbackTimestamp, t.wxlibCallbackTimestamp = r.wxlibCallbackTimestamp, t.cost1 = t.wxdataQueueTimestamp - t.invokeTime, t.cost2 = t.wxdataDequeueTimestamp - t.wxdataQueueTimestamp, t.cost3 = t.beginCGITimestamp - t.wxdataDequeueTimestamp, t.cost4 = t.CGICallbackTimestamp - t.beginCGITimestamp, t.cost5 = t.wxlibCallbackTimestamp - t.CGICallbackTimestamp, t.cost6 = o - t.wxlibCallbackTimestamp, n && n.__wxUseProfile__ && (e.__requestProfileInfo = t), delete e.clientInfo, d(t)
            }
          }
          const I = _,
            S = new WeakMap;
          class A {
            constructor() {
              let e;
              const t = new Promise((t => {
                e = t
              }));
              S.set(this, {
                promise: t,
                resolve: e
              })
            }
            abort() {
              const {
                promise: e
              } = S.get(this);
              e.then((e => {
                e.abort()
              }))
            }
            onHeadersReceived(e) {
              const {
                promise: t
              } = S.get(this);
              t.then((t => {
                t.onHeadersReceived(e)
              }))
            }
            offHeadersReceived(e) {
              const {
                promise: t
              } = S.get(this);
              t.then((t => {
                t.offHeadersReceived(e)
              }))
            }
          }

          function k({
            args: e
          }) {
            const t = (0, r.Em)(e.header);
            e.header = e.header || {}, e.header = (0, r.Nf)(e.header), "Undefined" !== t && "Object" !== t && (console.warn("wx.request: header must be an object"), e.header = {}), e.header = Object.keys(e.header).reduce(((t, n) => ("content-type" === n.toLowerCase() ? t[n.toLowerCase()] = e.header[n] : t[n] = e.header[n], t)), {});
            let n = "text";
            e.responseType && (n = e.responseType.toLowerCase());
            const o = e.header || {};
            let a, i = "GET";
            return "string" == typeof e.method && (i = e.method.toUpperCase()), e.dataType = e.dataType || "json", o["content-type"] = o["content-type"] || "application/json", a = void 0 === e.data ? "" : "string" != typeof e.data && "ArrayBuffer" !== (0, r.Em)(e.data) ? o["content-type"].indexOf("application/x-www-form-urlencoded") > -1 ? (0, r.HR)(e.data, !0) : o["content-type"].indexOf("application/json") > -1 || "object" == typeof e.data ? JSON.stringify(e.data) : a.toString() : e.data, "GET" === i && (e.url = (0, r.cE)(e.url, e.data)), {
              header: o,
              method: i,
              responseType: n,
              dataStr: a,
              args: e
            }
          }

          function C({
            args: e,
            host: t
          }) {
            let n;
            if (!0 === e.enableHttpDNS) {
              const e = (e => {
                const t = y[e];
                return t ? {
                  expired: Date.now() > t.expireTime,
                  ip: t.ip
                } : null
              })(t);
              return e && !1 === e.expired ? (n = e.ip, {
                host: t,
                ip: n
              }) : (e => (m[e] || (m[e] = g({
                apiName: "webapi_wxahttpdns_gethostip",
                reqData: {
                  domain: e
                }
              }).then((t => {
                delete m[e], t = JSON.parse(t.rawData);
                const {
                  wxa_state: n,
                  ip: o,
                  ttl: r
                } = t;
                if (0 === n) return y[e] = {
                  ip: o,
                  expireTime: 1e3 * r + Date.now()
                }, y[e];
                throw new Error(n)
              })).catch((t => {
                throw delete m[e], t
              }))), m[e]))(t).then((e => (n = e.ip, {
                host: t,
                ip: n
              })))
            }
            return {}
          }

          function P({
            host: e,
            ip: t
          }) {
            return {
              forbidReuse: ((e, t) => {
                const n = v[e];
                return t ? !(n && n === t || (delete v[e], 0)) : (delete v[e], !1)
              })(e, t)
            }
          }
          var T = n(6012);

          function x({
            args: e
          }) {
            const {
              host: t,
              protocol: n
            } = (0, T.e)(e.url);
            return {
              host: t,
              protocol: n
            }
          }

          function M({
            protocol: e
          }) {
            let t;
            return t = "http" === e ? 80 : "https" === e ? 443 : 0, {
              port: t
            }
          }
          const E = __safeway__.apiSign.makeApiSign;
          class O {
            constructor(e) {
              this.innerParams = e, this.asyncTasks = []
            }
            use(e) {
              const t = e(this.innerParams, this.asyncTasks);
              if (t instanceof Promise) {
                const e = t.then((e => {
                  Object.assign(this.innerParams, e)
                }));
                this.asyncTasks.push(e)
              } else Object.assign(this.innerParams, t);
              return this
            }
            useAfterAsyncTasks(e) {
              return this.asyncTasks.length > 0 ? Promise.all(this.asyncTasks).then((() => {
                this.use(e)
              })).catch((e => e)) : this.use(e), this
            } catch (e) {
              return this.catchFn = e, this
            }
            execute() {
              if (this.asyncTasks.length > 0) {
                const e = new A;
                return Promise.all(this.asyncTasks).then((() => {
                  const t = this.createRequestTask();
                  ((e, t) => {
                    const {
                      resolve: n
                    } = S.get(e);
                    n(t)
                  })(e, t)
                })).catch((e => {
                  this.catchFn && this.catchFn(e), delete this.catchFn
                })), e
              }
              return this.createRequestTask()
            }
            createRequestTask() {
              const {
                args: e,
                host: t,
                ip: n,
                header: o,
                method: r,
                port: a,
                responseType: i,
                dataStr: s,
                options: c,
                forbidReuse: l
              } = this.innerParams;
              try {
                return new I(Object.assign({}, e, {
                  header: o,
                  method: r,
                  responseType: i,
                  data: s,
                  ip: n,
                  host: t,
                  port: a,
                  forbidReuse: l
                }, E("createRequestTask", {
                  url: e.url,
                  __skipDomainCheck__: c.__skipDomainCheck__
                })))
              } catch (e) {
                return this.catchFn && this.catchFn(e), void delete this.catchFn
              }
            }
          }
          const L = (e = {}) => (e = Object.assign({
              __skipDomainCheck__: !1
            }, e), function (t = {}) {
              if (!(0, o.r3)("request", t, {
                  url: ""
                })) return;
              if (!1 === (0, r.mQ)(t.url)) return void(0, o.YG)("request", t, `invalid url "${t.url}"`);
              try {
                JSON.stringify(t.data)
              } catch (e) {
                return void(0, o.YG)("request", t, "fail to stringify data")
              }
              if ("function" == typeof t.data) return void(0, o.YG)("request", t, "data should not be Function");
              const n = new O({
                args: t,
                options: e
              });
              return n.catch((e => {
                (0, o.YG)("request", t, e.message || e.errMsg)
              })).use(k).use(x).use(M).use(C).useAfterAsyncTasks(P), n.execute()
            }),
            D = L(),
            B = L({
              __skipDomainCheck__: !0
            })
        },
        9929: (e, t, n) => {
          "use strict";
          n.d(t, {
            o: () => oe,
            b: () => pe
          });
          var o = n(3525),
            r = n(1013),
            a = n(2184),
            i = n(1095),
            s = n(7452),
            c = n(6257);
          n(2159);
          const {
            saveFile: l,
            saveFileSync: u,
            getSavedFileList: d,
            getSavedFileInfo: p,
            removeSavedFile: f,
            getFileInfo: h,
            readFile: g,
            readFileSync: y,
            writeFile: v,
            writeFileSync: m,
            mkdir: b,
            mkdirSync: _,
            rmdir: w,
            rmdirSync: I,
            readdir: S,
            readdirSync: A,
            access: k,
            accessSync: C,
            unlink: P,
            unlinkSync: T,
            stat: x,
            statSync: M,
            unzip: E,
            copyFile: O,
            copyFileSync: L,
            rename: D,
            renameSync: B,
            appendFile: R,
            appendFileSync: N
          } = c.ZP.app;
          var F = n(6012),
            W = n(2582),
            j = n(946),
            $ = n(665);
          const V = (0, i.promisify)(x);
          let Z = 0;
          const U = new WeakMap,
            G = new WeakMap,
            q = new WeakMap,
            H = new WeakMap,
            Q = new WeakMap,
            Y = new WeakMap,
            J = new WeakMap,
            z = new WeakMap,
            K = new WeakMap,
            X = new WeakMap,
            ee = {},
            te = new a.Q("Network", !0),
            ne = wxNativeConsole.createLogger("NetworkTask");
          class oe {
            constructor(e, {
              taskType: t,
              beforeSend: n,
              beforeSuccess: o,
              beforeFail: r
            }) {
              const a = Z++;
              U.set(this, a), q.set(this, "waiting"), H.set(this, e), Q.set(this, t), J.set(this, n), z.set(this, o), (0, s.mf)(r) && K.set(this, r);
              let i = !1;
              W.WK_RENDERER_H5 && (i = !0), W.IS_ANDROID && $.Z.clientVersion >= 654315008 && ("Download" !== t && "Request" !== t || Object.keys($.Z.gamePlugins || $.Z.plugins || {}).forEach((e => {
                const t = ($.Z.gamePlugins || $.Z.plugins)[e];
                !t || "wx20afc706a711eefc" !== t.provider && "wx4d5893418b75cb20" !== t.provider || (i = !0)
              }))), X.set(this, i), this.promise = new j.Q(((e, t) => {
                this.resolve = e, this.reject = t
              }));
              const c = () => {
                ue.call(this) ? ee[t].taskQueue.push({
                  id: a,
                  item: this
                }) : ae.call(this)
              };
              (0, s.mf)(e.customCheck) ? e.customCheck(e, (n => {
                n ? re(t, e, n) : c()
              })): c()
            }
            abort() {
              if (ne.info(`[${Q.get(this)}][${U.get(this)}]abort()`), "waiting" === q.get(this)) {
                ne.info(`[${Q.get(this)}][${U.get(this)}] waiting=true`);
                const e = ee[Q.get(this)].taskQueue.findIndex((e => e.id === U.get(this)));
                e > -1 && (ee[Q.get(this)].taskQueue.splice(e, 1), (0, o.YG)(ee[Q.get(this)].functionName, H.get(this), "abort")), q.set(this, "done")
              } else this.promise.then((() => {
                (0, o.IN)(`operate${Q.get(this)}Task`, {
                  [`${Q.get(this).toLowerCase()}TaskId`]: G.get(this),
                  operationType: "abort"
                })
              }))
            }
            onProgressUpdate(e) {
              this.promise.then((() => {
                te.on(`${Q.get(this)}${G.get(this)}progressUpdate`, e)
              }))
            }
            offProgressUpdate(e) {
              this.promise.then((() => {
                te.off(`${Q.get(this)}${G.get(this)}progressUpdate`, e)
              }))
            }
            onHeadersReceived(e) {
              this.promise.then((() => {
                te.on(`${Q.get(this)}${G.get(this)}headersReceived`, e)
              }))
            }
            offHeadersReceived(e) {
              this.promise.then((() => {
                te.off(`${Q.get(this)}${G.get(this)}headersReceived`, e)
              }))
            }
          }

          function re(e, t, n) {
            (0, o.FE)({
              name: ee[e].functionName,
              args: {
                success: t.success,
                fail: t.fail,
                complete: t.complete
              },
              success: !1,
              errMsg: n
            })
          }

          function ae() {
            const e = H.get(this),
              t = Q.get(this),
              n = X.get(this);
            q.set(this, "sending"), Y.set(this, Date.now());
            const o = ie.call(this);
            n ? this.promise.then((() => {
              se.call(this)
            })).catch((n => {
              re(t, e, n)
            })) : o ? re(t, e, o) : se.call(this)
          }

          function ie() {
            const e = Q.get(this),
              t = H.get(this);
            let n;
            ee[e].currentTaskCount++;
            const r = {
                data: t.data,
                url: t.url,
                header: t.header,
                method: t.method,
                timeout: (0, s.hj)(t.timeout) ? t.timeout : 0,
                enableHttp2: !!(0, s.jn)(t.enableHttp2) && t.enableHttp2,
                enableQuic: !!(0, s.jn)(t.enableQuic) && t.enableQuic,
                enableCache: !!(0, s.jn)(t.enableCache) && t.enableCache,
                enableProfile: !(0, s.jn)(t.enableProfile) || t.enableProfile,
                ip: t.ip,
                port: t.port,
                forbidReuse: !!(0, s.jn)(t.forbidReuse) && t.forbidReuse,
                host: t.host,
                __skipDomainCheck__: t.__skipDomainCheck__,
                success: t => {
                  const n = t[`${e.toLowerCase()}TaskId`];
                  G.set(this, n), ee[e].taskIdMap[n] = this, this.resolve()
                },
                fail: o => {
                  ee[e].currentTaskCount--;
                  const r = o[`${e.toLowerCase()}TaskId`];
                  n = o.errMsg, ce.call(this, {
                    taskType: e,
                    options: t,
                    errMsg: n,
                    success: !1
                  }), this.reject(n), ne.error(`[${e}][createTask][Fail] taskId=${r}`)
                },
                complete: () => {
                  q.set(this, "done")
                }
              },
              a = X.get(this),
              i = `create${e}Task${a?"Async":""}`;
            return (0, o.IN)(i, J.get(this)(r)), n
          }

          function se() {
            const e = G.get(this),
              t = H.get(this),
              n = Q.get(this),
              r = ee[n].functionName;
            te.on(`${n}${e}success`, (e => {
              z.get(this).call(this, e), (0, o.FE)({
                name: r,
                args: {
                  success: t.success,
                  fail: t.fail,
                  complete: t.complete
                },
                res: e
              })
            })), te.on(`${n}${e}fail`, (e => {
              const n = K.get(this);
              n && n.call(this, e), (0, o.FE)({
                name: r,
                args: {
                  success: t.success,
                  fail: t.fail,
                  complete: t.complete
                },
                success: !1,
                errMsg: e.errMsg
              })
            }))
          }

          function ce({
            taskType: e,
            options: t,
            errMsg: n,
            success: o = !0,
            dataLength: a = 0,
            statusCode: i = "",
            responseDataLength: s = 0,
            profile: c = {}
          }) {
            const l = t.url,
              u = o ? 1 : 2,
              d = Date.now() - Y.get(this),
              p = t.__skipDomainCheck__;
            d >= 6e4 && ne.error(`reportTask costTime too long: ${d}ms, taskId=${G.get(this)}`), (0, r.P)(ee[e].functionName, l, u, d, n, i, p, a, s, c)
          }

          function le(e, t) {
            const n = `${t.toLowerCase()}TaskId`,
              o = e[n],
              {
                state: r,
                header: a
              } = e;
            if (delete e.state, delete e[n], e.cookies = a ? (0, F.$)(a["Set-Cookie"] || a["set-cookie"]) : [], te.emit(`${t}${o}${r}`, e), "success" === r || "fail" === r) {
              const n = ee[t].taskIdMap[o],
                a = H.get(n);
              if (!n) return;
              ee[t].currentTaskCount -= 1, ee[t].taskQueue.length > 0 && ae.call(ee[t].taskQueue.shift().item);
              let s = Promise.resolve((0, i.getDataLength)(a.data));
              if ("Upload" === t) {
                let e = 0;
                "object" == typeof a.formData && null !== a.formData && (e = JSON.stringify(a.formData).length), s = V({
                  path: a.filePath
                }).then((t => e + t.stats.size)).catch((() => e))
              }
              let c = Promise.resolve((0, i.getDataLength)(e.data));
              if ("Download" === t) {
                const t = e.dataLength;
                c = "number" == typeof t ? Promise.resolve(t) : V({
                  path: e.filePath || e.tempFilePath || ""
                }).then((e => e.stats.size)).catch((() => 0))
              }
              Promise.all([s, c]).then((([o, i]) => {
                ce.call(n, {
                  taskType: t,
                  options: a,
                  errMsg: e.errMsg,
                  statusCode: e.statusCode,
                  success: "success" === r,
                  dataLength: o,
                  responseDataLength: i,
                  profile: e.profile
                })
              })), de.call(n)
            }
          }

          function ue() {
            const e = Q.get(this);
            return ee[e].currentTaskCount >= ee[e].maxTaskCount
          }

          function de() {
            const e = Q.get(this),
              t = G.get(this);
            delete ee[e].taskIdMap[t], te.removeAllListeners(`${e}${t}success`), te.removeAllListeners(`${e}${t}fail`), te.removeAllListeners(`${e}${t}complete`)
          }

          function pe(e, t) {
            const n = ee[e] ? ee[e] : {
              currentTaskCount: 0,
              maxTaskCount: 10,
              taskQueue: [],
              functionName: "",
              taskIdMap: {}
            };
            (0, o.jQ)(`on${e}TaskStateChange`, (t => {
              le.call(this, t, e)
            })), ee[e] = Object.assign(n, t)
          }
        },
        6012: (e, t, n) => {
          "use strict";

          function o(e) {
            if (!e) return [];
            if (Array.isArray(e)) return e;
            return e.split(",").reduce(((e, t) => (/^\s*\S+=/.test(t) ? e.push(t) : e.length && (e[e.length - 1] += t), e)), []).map((e => e.trim()))
          }

          function r(e) {
            const t = {
              protocol: /^(.+)\:\/\//,
              host: /\:\/\/(.+?)[\?\#\s\/]/,
              path: /\w(\/.*?)[\?\#\s]/,
              query: /\?(.+?)[\#\/\s]/,
              hash: /\#(\w+)\s$/
            };
            return e += " ", Object.keys(t).forEach((n => {
              const o = t[n];
              t[n] = "query" === n ? o.exec(e) && o.exec(e)[1].split("&").reduce(((e, t) => {
                const n = t.split("=");
                return e[n[0]] = n[1], e
              }), {}) : o.exec(e) && o.exec(e)[1]
            })), t
          }
          n.d(t, {
            $: () => o,
            e: () => r
          })
        },
        7646: (e, t, n) => {
          "use strict";
          n.d(t, {
            JM: () => i,
            Ce: () => a
          });
          var o = n(1106),
            r = n(2582);
          const a = (e = !0, t, n = !1, a = !1) => (i = {}) => {
              if (!(0, o.r3)("operateWXData", i, {
                  apiName: ""
                })) return;
              if ("operateWXData" === t) {}
              const s = {
                api_name: i.apiName,
                data: i.reqData || {},
                operate_directly: e
              };
              n && (s.plugin_appid = i.pluginId);
              const c = {
                data: s,
                isImportant: !0 === a,
                requestInQueue: !i.hasOwnProperty("requestInQueue") || Boolean(i.requestInQueue)
              };
              (0, o.gM)(Object.assign({}, c, i), {
                beforeAll(e) {
                  void 0 !== t && (e.errMsg = e.errMsg.replace("operateWXData", t))
                },
                beforeSuccess(e) {
                  r.IS_ANDROID && "string" == typeof e.data && (e.data = JSON.parse(e.data)), void 0 !== e.data.data && (e.rawData = e.data.data), e.data.encryptedData && (e.encryptedData = e.data.encryptedData, e.iv = e.data.iv, e.data.cloud_id && (e.cloudID = e.data.cloud_id)), e.respData = e.data, delete e.data
                }
              })
            },
            i = (a(!0), a(!1));
          a(!0, void 0, !0)
        },
        1013: (e, t, n) => {
          "use strict";
          n.d(t, {
            P: () => d
          });
          var o = n(6998),
            r = n(1106),
            a = n(1095);
          const i = {};
          let s = 0,
            c = [];
          const l = () => {
              const e = JSON.stringify({
                business: "mmbizwxaservicequality",
                dataArray: c,
                appType: Reporter.getAppType()
              }, null, 2);
              (0, r.IN)("reportRealtimeAction", {
                actionData: e
              }), c = []
            },
            u = e => {
              let t = "";
              return Object.keys(e).forEach(((n, o) => {
                try {
                  const r = `${encodeURIComponent(n)}=${encodeURIComponent(e[n])}`;
                  0 !== o && (t += "&"), t += r
                } catch (e) {}
              })), t
            },
            d = (e, t, n, r, d, p, f, h = 0, g = 0, y = {}) => {
              let v = "",
                m = "";
              if ((0, a.isGame)() && (m = u(i)), "undefined" != typeof __appServiceEngine__) {
                const e = __appServiceEngine__.getCurrentPages();
                if (e && e.length > 0) {
                  const t = e[e.length - 1];
                  t && (v = t.route, m = t.__displayReporter && t.__displayReporter.showOptions && t.__displayReporter.showOptions.query)
                }
              }
              const b = [e, t, n, r, d, Reporter.getAppType(), p, h, (0, o.PL)(), v, m, g, u(y)].map(encodeURIComponent).join(",");
              Reporter.reportKeyValue({
                key: "NetworkAPI",
                value: b
              }), Reporter.reportIDKey({
                key: `${e}_${1===n?"ok":"fail"}`
              }), c.push([e, t, n, p || "", r, d, (0, o.PL)(), f ? "1" : "0", Reporter.getAppType(), h].map((e => {
                let t;
                try {
                  t = encodeURIComponent(e)
                } catch (n) {
                  t = e
                }
                return t
              })).join(",")), Date.now() - s >= 6e4 && (s = Date.now(), setTimeout(l, 6e4))
            }
        },
        9973: (e, t, n) => {
          "use strict";
          n.d(t, {
            Y: () => r
          });
          var o = n(2851);
          const r = ({
            name: e,
            scene: t,
            strategy: n,
            timeDiffToLastTap: r = 0
          }) => {
            let a;
            "undefined" != typeof __appServiceEngine__ && (a = __appServiceEngine__.getCurrentPagesByDomain("").find((e => e.__wxWebviewId__ === o.Z.currentWebviewId)) || {});
            const i = [e, t, Reporter.getAppType(), a ? a.route : "", n || 0, r].map(encodeURIComponent).join(",");
            Reporter.reportKeyValue({
              key: "RecycledAPI",
              value: i
            })
          }
        },
        6947: (e, t, n) => {
          "use strict";
          n.d(t, {
            Z: () => o
          });
          const o = "undefined" != typeof NativeGlobal ? NativeGlobal : {}
        },
        891: (e, t, n) => {
          "use strict";
          n.r(t), n.d(t, {
            wxSAB: () => p,
            createSharedArrayBuffer: () => h,
            getSharedArrayBuffer: () => g,
            SharedArrayBuffer: () => f,
            unpackSharedArrayBuffer: () => y
          });
          var o = n(7452),
            r = n(5260);
          const a = "function" == typeof wxNativeConsole ? wxNativeConsole.createLogger("SharedArrayBuffer") : wxConsole,
            i = 0,
            s = 1,
            c = 2,
            l = new WeakMap,
            u = new Map;
          let d = ArrayBuffer;
          const p = "undefined" == typeof WeixinSharedBuffer ? {} : WeixinSharedBuffer;
          "undefined" == typeof WeixinSharedBuffer && ("undefined" != typeof __global ? d = __global.SharedArrayBuffer : n.g.SharedArrayBuffer && (d = n.g.SharedArrayBuffer));
          class f {
            constructor(e, t) {
              if (a.log(`constructor length=${e}, sabId=${t}`), !(0, o.hj)(e) || e < 0) throw new r.iZ(`Invalid array buffer length ${e}`);
              if ((0, o.hj)(t)) {
                let e;
                a.info(`get buffer with sabId: ${t}`);
                try {
                  e = p.get(t)
                } catch (e) {
                  throw a.error(`WeixinSharedBuffer.get${t} fail: ${e.message}`), new Error(`WeixinSharedBuffer.get${t} fail: ${e.message}`)
                }
                Object.defineProperty(this, "buffer", {
                  value: e,
                  writable: !1,
                  enumerable: !0
                }), Object.defineProperty(this, "_sabId", {
                  value: t,
                  enumerable: !0,
                  writable: !1
                })
              } else {
                a.info(`new ArrayBuffer with length: ${e}`), Object.defineProperty(this, "buffer", {
                  value: new d(e),
                  writable: !1,
                  enumerable: !0
                });
                const t = p.new(this.buffer);
                a.info(`sabId: ${t}`), Object.defineProperty(this, "_sabId", {
                  value: t,
                  enumerable: !0,
                  writable: !1
                })
              }
              const n = {
                writeStatus: i,
                readStatus: i,
                writeLockCallbacks: [],
                readLockCallbacks: [],
                writeLockId: void 0,
                readLockId: void 0,
                destroyed: !1
              };
              l.set(this, n), u.set(this._sabId, this), a.log(`[${this._sabId}] created:`, this.buffer)
            }
            destroy() {
              a.warn(`[${this._sabId}][destroy()]`);
              const e = l.get(this);
              e.writeLockCallbacks = [], e.readLockCallbacks = [], u.delete(this._sabId), l.get(this).destroyed = !0, this.unlock(), p.destroy(this._sabId)
            }
            lock(e, t = !1) {
              const n = l.get(this),
                {
                  destroyed: a,
                  writeStatus: i,
                  readStatus: u,
                  writeLockCallbacks: d,
                  readLockCallbacks: f
                } = n;
              if (a) throw new r.iZ("SharedArrayBuffer has been destroyed");
              if (!(0, o.mf)(e)) throw new r.iZ("callback must be a function");
              i !== c ? (d.push(e), i === s || (n.writeStatus = s, n.writeLockId = p.Lock(this._sabId, (() => {
                d.forEach((e => e())), f.forEach((e => e())), n.writeStatus = c, n.writeLockCallbacks = [], n.readLockCallbacks = []
              })))) : e()
            }
            unlock() {
              const e = l.get(this),
                {
                  writeLockId: t,
                  readLockId: n,
                  writeStatus: o,
                  readStatus: r,
                  destroyed: a
                } = e;
              a ? console.warn("unlock: SharedArrayBuffer has been destroyed") : (o !== s && o !== c || (p.Unlock(this._sabId, t), e.writeStatus = i, e.writeLockId = void 0, e.writeLockCallbacks = []), r !== s && r !== c || (p.Unlock(this._sabId, n), e.readStatus = i, e.readLockId = void 0, e.readLockCallbacks = []))
            }
          }
          const h = e => new f(e),
            g = e => (a.info(`[getSharedArrayBuffer] sabId=${e}`), u.has(e) ? (a.info("[getSharedArrayBuffer] return existed object"), u.get(e)) : (a.info("[getSharedArrayBuffer] return new object"), new f(0, e))),
            y = e => (a.log("[unpackSharedArrayBuffer]", e), (0, o.Kn)(e) ? (a.log("[unpackSharedArrayBuffer] isObject"), (0, o.hj)(e._sabId) ? (a.info("[unpackSharedArrayBuffer] sabId is number"), g(e._sabId)) : Object.keys(e).reduce(((t, n) => {
              const o = e[n];
              return t[n] = y(o), t
            }), {})) : (0, o.kJ)(e) ? e.map(y) : e)
        },
        665: (e, t, n) => {
          "use strict";
          n.d(t, {
            Z: () => o
          });
          const o = __wxConfig
        },
        5542: (e, t, n) => {
          "use strict";
          n.d(t, {
            Z: () => r
          });
          const o = n.g.WeixinArrayBuffer;
          delete n.g.WeixinArrayBuffer;
          const r = o
        },
        6077: (e, t, n) => {
          "use strict";
          n.d(t, {
            T: () => d
          });
          var o = n(665),
            r = n(2999),
            a = (n(6998), n(7452));
          let i = 0,
            s = "",
            c = "undefined" != typeof __libVersionInfo__ && __libVersionInfo__ ? __libVersionInfo__.version : "unknown",
            l = "undefined" != typeof __libVersionInfo__ && __libVersionInfo__ ? __libVersionInfo__.updateTime : "unknown";
          (0, a.HD)(c) && (c = c.replace(" ", "")), (0, a.HD)(l) && (l = l.replace(" ", "-")), o.Z.onReady((() => {
            i = o.Z.appLaunchInfo.scene, s = o.Z.appLaunchInfo.sessionid || o.Z.appLaunchInfo.sessionId, (0, r.n)("onAppEnterForeground", (e => {
              e && e.scene && (i = e.scene), e && (e.sessionid || e.sessionId) && (s = e.sessionid || e.sessionId)
            }))
          }));
          new WeakSet;
          const u = [];
          Map, Math.random;

          function d(e, t) {
            u.push({
              match: e,
              version: t
            })
          }
        },
        5014: (e, t, n) => {
          "use strict";
          n.d(t, {
            J: () => c
          });
          var o = n(1106),
            r = n(7452),
            a = n(665);
          const i = {
              requestVirtualPayment: 285,
              setCookies: 502,
              getCookies: 503,
              UDP: 606,
              launchApplicationDirectly: 620,
              screenCanvasReadPixels: 631,
              navigateToMiniProgramDirectly: 632,
              openDataContextExtension: 638,
              batchGetContactDirectly: 676,
              launchApp: 692,
              sendBizRedPacketForOpen: 694,
              openWxappLimit5: 720,
              shareCallback: 740,
              WeAppWorker: 775,
              listenFrameChangeInWorker: 776,
              requestSubscribeWhatsNew: 782,
              getGroupToolbarInfo: 803,
              requestMidasFriendPayment: 804,
              createWebView: 805,
              authShareRelationship: 852,
              uploadToCommonCDN: 878,
              quicklyAddBrandContact: 879,
              engineOpenData: 894,
              preloadMiniProgramEnvDirectly: 900,
              predownloadMiniProgramPackageDirectly: 901,
              addPhoneCalendar: 912,
              addPhoneRepeatCalendar: 913,
              privateScanItem: 917,
              shareDataToWeRun: 926,
              handoff: 931,
              bindingDownload: 972,
              bindingReadFile: 973,
              bindingWebSocket: 974,
              openH5GameClub: 975,
              showShareImageMenu: 978,
              plugin_launchApplicationDirectly_operateDirectly: 1009,
              privateSearchContacts: 1024,
              private_setNavigateBackInterception: 1020,
              private_stopNavigateBackInterception: 1021,
              TCP: 1025,
              TCPServer: 1026,
              inputTypeSafePassword: 1027,
              startGameLiveDirectly: 1045,
              getUserRecentGameLiveInfo: 1049,
              private_getWebviewDebugInfo: 1051,
              showRedPackage: 1052
            },
            s = {};
          a.Z.onReady((() => {
            const e = Object.keys(i).map((e => i[e]));
            (0, o.IN)("getPermissionBytes", {
              indexes: e,
              success(t) {
                if (t.permissionBytes)
                  for (let n = 0; n < t.permissionBytes.length; n++) {
                    const o = e[n];
                    s[o] = 1 === t.permissionBytes[n]
                  }
              },
              fail(e) {}
            })
          }));
          const c = e => {
            const t = i[e];
            if ("number" != typeof t) return !1;
            if (!(0, r.o8)(s[t])) return s[t];
            let n = !1;
            return (0, o.IN)("getPermissionBytes", {
              indexes: [t],
              success(e) {
                e.permissionBytes && (n = 1 === e.permissionBytes[0], s[t] = n)
              }
            }), n
          }
        },
        2184: (e, t, n) => {
          "use strict";
          n.d(t, {
            Q: () => r
          });
          var o = n(7452);
          class r {
            constructor(e = "", t = !1) {
              this.type = "", this.surround = !1, this.eventMap = new Map, this.callbackMap = new WeakMap, this.originalCallbackMap = new WeakMap, this.type = e, this.surround = t
            }
            on(e, t) {
              if (!(0, o.mf)(t)) return void console.error("emitter.on fail: callback must be a function");
              let n = t;
              var r, a;
              this.surround && (r = t, a = `at ${this.type}${e} callback function`, n = void 0 !== __errorTracer__ ? __errorTracer__.surroundThirdByTryCatch(r, a) : "undefined" != typeof __subContextEngine__ ? __subContextEngine__.surroundThirdByTryCatch(r, a) : (...e) => {
                try {
                  return r(...e)
                } catch (e) {
                  return void console.error(`thirdScriptError\n${e.message};${a}\n`, e)
                }
              }, this.callbackMap.set(t, n), this.originalCallbackMap.set(n, t)), this.eventMap.has(e) ? this.eventMap.get(e).add(n) : this.eventMap.set(e, new Set([n]))
            }
            off(e, t) {
              const n = this.eventMap.get(e);
              if (n)
                if ("function" != typeof t) n.forEach((e => {
                  const t = this.originalCallbackMap.get(e);
                  this.callbackMap.delete(t), this.originalCallbackMap.delete(e)
                })), n.clear();
                else if (this.surround) {
                const e = this.callbackMap.get(t);
                n.delete(e), this.callbackMap.delete(t), this.originalCallbackMap.delete(e)
              } else n.delete(t)
            }
            emit(e, ...t) {
              if (this.eventMap.has(e)) {
                new Set(this.eventMap.get(e)).forEach((e => e(...t)))
              }
            }
            removeAllListeners(e) {
              this.off(e)
            }
            getListenersLength(e) {
              const t = this.eventMap.get(e);
              return t ? t.size : 0
            }
          }
        },
        2582: (e, t, n) => {
          "use strict";
          n.r(t), n.d(t, {
            PLATFORM: () => r,
            IS_DEVTOOLS: () => a,
            IS_ANDROID: () => i,
            IS_IOS: () => s,
            IS_WINDOWS: () => c,
            IS_MAC: () => l,
            IS_MINA: () => u,
            IS_PC: () => d,
            debugEnabled: () => p,
            HOST: () => f,
            IS_HOST_SDK: () => h,
            IS_HOST_WMPF: () => g,
            IS_HOST_WECHAT: () => y,
            IS_USE_NATIVE_MAP: () => v,
            WK_RENDERER_H5: () => m
          });
          var o = n(665);
          const r = o.Z.platform,
            a = "devtools" === o.Z.platform,
            i = "android" === o.Z.platform,
            s = "ios" === o.Z.platform,
            c = "windows" === o.Z.platform,
            l = "mac" === o.Z.platform,
            u = "mina" === o.Z.platform,
            d = c || l;

          function p() {
            if (o.Z && "debug" in o.Z && void 0 !== o.Z.debug) return !!o.Z.debug
          }
          const f = o.Z.host || {},
            h = "SDK" === f.env,
            g = "WMPF" === f.env,
            y = "WeChat" === f.env,
            v = f.forceUseNativeMap || !1,
            m = "object" == typeof window && window && window.__wkrenderer_h5
        },
        2046: (e, t, n) => {
          "use strict";
          n.d(t, {
            s: () => s
          });
          var o = n(8159);
          const r = new o.Z({
              maxListeners: 20,
              newListener: !1
            }),
            a = new o.Z({
              maxListeners: 20,
              newListener: !1
            });
          const i = {};

          function s(e) {
            if (e = e[0].toUpperCase() + e.slice(1), !i[e]) {
              let t = new WeakMap;
              i[e] = {
                getGlobalListeners: () => r.listeners(e),
                getInternalListeners: () => a.listeners(e),
                emit: (...t) => {
                  a.emit(e, ...t), r.emit(e, ...t)
                },
                emitGlobal: (...t) => {
                  r.emit(e, ...t)
                },
                emitInternal: (...t) => {
                  a.emit(e, ...t)
                },
                internalOnMethod: (t, n = {}) => {
                  "function" == typeof t && (n.prepend ? n.once ? a.prependOnceListener(e, t) : a.prependListener(e, t) : n.once ? a.once(e, t) : a.on(e, t))
                },
                internalOffMethod: t => {
                  "function" == typeof t && a.off(e, t)
                },
                onMethod: n => {
                  const o = function (e, t) {
                    return "function" != typeof t ? (console.error(`on${e} should accept a function instead of ${typeof t}`), null) : __errorTracer__.surroundThirdByTryCatch(t, `at api on${e} callback function`)
                  }(e, n);
                  o && (t.set(n, o), r.on(e, o))
                },
                offMethod: n => {
                  if (function (e, t) {
                      return !t || "function" == typeof t || (console.error(`off${e} should accept a function instead of ${typeof t}`), !1)
                    }(e, n))
                    if (n) {
                      if (t.has(n)) {
                        const o = t.get(n);
                        t.delete(n), r.off(e, o)
                      }
                    } else t = new WeakMap, r.removeAllListeners(e)
                }
              }
            }
            return i[e]
          }
        },
        8159: (e, t, n) => {
          "use strict";
          n.d(t, {
            Z: () => c,
            y: () => s
          });
          var o = Array.isArray ? Array.isArray : function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
          };

          function r() {
            this._events = {}, this._conf && a.call(this, this._conf)
          }

          function a(e) {
            e ? (this._conf = e, e.delimiter && (this.delimiter = e.delimiter), this._maxListeners = void 0 !== e.maxListeners ? e.maxListeners : 20, e.newListener && (this._newListener = e.newListener), e.removeListener && (this._removeListener = e.removeListener)) : this._maxListeners = 20
          }

          function i(e, t) {
            console.warn(`[Event] ${e} listeners of event ${t} have been added, possibly causing memory leak.`)
          }

          function s(e) {
            this._events = {}, this._newListener = !1, this._removeListener = !1, a.call(this, e)
          }
          s.prototype.delimiter = ".", s.prototype.setMaxListeners = function (e) {
            void 0 !== e && (this._maxListeners = e, this._conf || (this._conf = {}), this._conf.maxListeners = e)
          }, s.prototype.event = "", s.prototype.once = function (e, t) {
            return this._once(e, t, !1)
          }, s.prototype.prependOnceListener = function (e, t) {
            return this._once(e, t, !0)
          }, s.prototype._once = function (e, t, n) {
            return this._many(e, 1, t, n), this
          }, s.prototype.many = function (e, t, n) {
            return this._many(e, t, n, !1)
          }, s.prototype.prependMany = function (e, t, n) {
            return this._many(e, t, n, !0)
          }, s.prototype._many = function (e, t, n, o) {
            var r = this;
            if ("function" != typeof n) throw new Error("many only accepts instances of Function");

            function a() {
              return 0 == --t && r.off(e, a), n.apply(this, arguments)
            }
            return a._origin = n, this._on(e, a, o), r
          }, s.prototype.emit = function () {
            this._events || r.call(this);
            var e = arguments[0];
            if ("newListener" === e && !this._newListener && !this._events.newListener) return !1;
            var t, n, o, a, i, s = arguments.length;
            if (this._all && this._all.length) {
              if (i = this._all.slice(), s > 3)
                for (t = new Array(s), a = 0; a < s; a++) t[a] = arguments[a];
              for (o = 0, n = i.length; o < n; o++) switch (this.event = e, s) {
                case 1:
                  i[o].call(this, e);
                  break;
                case 2:
                  i[o].call(this, e, arguments[1]);
                  break;
                case 3:
                  i[o].call(this, e, arguments[1], arguments[2]);
                  break;
                default:
                  i[o].apply(this, t)
              }
            }
            if ("function" == typeof (i = this._events[e])) {
              switch (this.event = e, s) {
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
                  for (t = new Array(s - 1), a = 1; a < s; a++) t[a - 1] = arguments[a];
                  i.apply(this, t)
              }
              return !0
            }
            if (i && (i = i.slice()), i && i.length) {
              if (s > 3)
                for (t = new Array(s - 1), a = 1; a < s; a++) t[a - 1] = arguments[a];
              for (o = 0, n = i.length; o < n; o++) switch (this.event = e, s) {
                case 1:
                  i[o].call(this);
                  break;
                case 2:
                  i[o].call(this, arguments[1]);
                  break;
                case 3:
                  i[o].call(this, arguments[1], arguments[2]);
                  break;
                default:
                  i[o].apply(this, t)
              }
              return !0
            }
            if (!this._all && "error" === e) throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
            return !!this._all
          }, s.prototype.emitAsync = function () {
            this._events || r.call(this);
            var e = arguments[0];
            if ("newListener" === e && !this._newListener && !this._events.newListener) return Promise.resolve([!1]);
            var t, n, o, a, i, s = [],
              c = arguments.length;
            if (this._all) {
              if (c > 3)
                for (t = new Array(c), a = 1; a < c; a++) t[a] = arguments[a];
              for (o = 0, n = this._all.length; o < n; o++) switch (this.event = e, c) {
                case 1:
                  s.push(this._all[o].call(this, e));
                  break;
                case 2:
                  s.push(this._all[o].call(this, e, arguments[1]));
                  break;
                case 3:
                  s.push(this._all[o].call(this, e, arguments[1], arguments[2]));
                  break;
                default:
                  s.push(this._all[o].apply(this, t))
              }
            }
            if ("function" == typeof (i = this._events[e])) switch (this.event = e, c) {
              case 1:
                s.push(i.call(this));
                break;
              case 2:
                s.push(i.call(this, arguments[1]));
                break;
              case 3:
                s.push(i.call(this, arguments[1], arguments[2]));
                break;
              default:
                for (t = new Array(c - 1), a = 1; a < c; a++) t[a - 1] = arguments[a];
                s.push(i.apply(this, t))
            } else if (i && i.length) {
              if (i = i.slice(), c > 3)
                for (t = new Array(c - 1), a = 1; a < c; a++) t[a - 1] = arguments[a];
              for (o = 0, n = i.length; o < n; o++) switch (this.event = e, c) {
                case 1:
                  s.push(i[o].call(this));
                  break;
                case 2:
                  s.push(i[o].call(this, arguments[1]));
                  break;
                case 3:
                  s.push(i[o].call(this, arguments[1], arguments[2]));
                  break;
                default:
                  s.push(i[o].apply(this, t))
              }
            } else if (!this._all && "error" === e) return arguments[1] instanceof Error ? Promise.reject(arguments[1]) : Promise.reject("Uncaught, unspecified 'error' event.");
            return Promise.all(s)
          }, s.prototype.on = function (e, t) {
            return this._on(e, t, !1)
          }, s.prototype.prependListener = function (e, t) {
            return this._on(e, t, !0)
          }, s.prototype.onAny = function (e) {
            return this._onAny(e, !1)
          }, s.prototype.prependAny = function (e) {
            return this._onAny(e, !0)
          }, s.prototype.addListener = s.prototype.on, s.prototype._onAny = function (e, t) {
            if ("function" != typeof e) throw new Error("onAny only accepts instances of Function");
            return this._all || (this._all = []), t ? this._all.unshift(e) : this._all.push(e), this
          }, s.prototype._on = function (e, t, n) {
            if ("function" == typeof e) return this._onAny(e, t), this;
            if ("function" != typeof t) throw new Error("on only accepts instances of Function");
            return this._events || r.call(this), this._newListener && this.emit("newListener", e, t), this._events[e] ? ("function" == typeof this._events[e] && (this._events[e] = [this._events[e]]), n ? this._events[e].unshift(t) : this._events[e].push(t), !this._events[e].warned && this._maxListeners > 0 && this._events[e].length > this._maxListeners && (this._events[e].warned = !0, i.call(this, this._events[e].length, e))) : this._events[e] = t, this
          }, s.prototype.off = function (e, t) {
            if ("function" != typeof t) throw new Error("removeListener only takes instances of Function");
            var n, r = [];
            if (!this._events[e]) return this;
            n = this._events[e], r.push({
              _listeners: n
            });
            for (var a = 0; a < r.length; a++) {
              if (n = r[a]._listeners, o(n)) {
                for (var i = -1, s = 0, c = n.length; s < c; s++)
                  if (n[s] === t || n[s].listener && n[s].listener === t || n[s]._origin && n[s]._origin === t) {
                    i = s;
                    break
                  } if (i < 0) continue;
                return this._events[e].splice(i, 1), 0 === n.length && delete this._events[e], this._removeListener && this.emit("removeListener", e, t), this
              }(n === t || n.listener && n.listener === t || n._origin && n._origin === t) && (delete this._events[e], this._removeListener && this.emit("removeListener", e, t))
            }
            return function e(t) {
              if (void 0 !== t) {
                var n = Object.keys(t);
                for (var o in n) {
                  var r = n[o],
                    a = t[r];
                  a instanceof Function || "object" != typeof a || null === a || (Object.keys(a).length > 0 && e(t[r]), 0 === Object.keys(a).length && delete t[r])
                }
              }
            }(this.listenerTree), this
          }, s.prototype.offAny = function (e) {
            var t, n = 0,
              o = 0;
            if (e && this._all && this._all.length > 0) {
              for (n = 0, o = (t = this._all).length; n < o; n++)
                if (e === t[n]) return t.splice(n, 1), this._removeListener && this.emit("removeListenerAny", e), this
            } else {
              if (t = this._all, this._removeListener)
                for (n = 0, o = t.length; n < o; n++) this.emit("removeListenerAny", t[n]);
              this._all = []
            }
            return this
          }, s.prototype.removeListener = s.prototype.off, s.prototype.removeAllListeners = function (e) {
            return void 0 === e ? (!this._events || r.call(this), this) : (this._events && (this._events[e] = null), this)
          }, s.prototype.listeners = function (e) {
            return this._events || r.call(this), this._events[e] || (this._events[e] = []), o(this._events[e]) || (this._events[e] = [this._events[e]]), this._events[e]
          }, s.prototype.eventNames = function () {
            return Object.keys(this._events)
          }, s.prototype.listenerCount = function (e) {
            return this.listeners(e).length
          }, s.prototype.listenersAny = function () {
            return this._all ? this._all : []
          };
          const c = s
        },
        1661: (e, t, n) => {
          "use strict";

          function o(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
          }
          n.d(t, {
            n: () => o
          })
        },
        946: (e, t, n) => {
          "use strict";
          n.d(t, {
            Q: () => o
          });
          class o {
            constructor(e) {
              if (this._status = "pending", this._return = void 0, this._processors = [], "function" != typeof e) throw new TypeError("Promise resolver is not a function");
              try {
                e((e => {
                  "pending" === this._status && (this._status = "then", this._return = e, this._consume())
                }), (e => {
                  "pending" === this._status && (this._status = "catch", this._return = e, this._consume())
                }))
              } catch (e) {
                this._status = "catch", this._return = e, this._consume()
              }
            }
            _consume() {
              if ("pending" === this._status) return;
              let e;
              do {
                e = this._processors.shift()
              } while (e && e.type !== this._status);
              if (e) try {
                this._return = e.func(this._return), this._status = "then"
              } catch (e) {
                this._return = e, this._status = "catch"
              } finally {
                this._consume()
              }
            }
            then(e) {
              return this._processors.push({
                func: e,
                type: "then"
              }), this._consume(), this
            } catch (e) {
              return this._processors.push({
                func: e,
                type: "catch"
              }), this._consume(), this
            }
            static resolve(e) {
              return new o((t => t(e)))
            }
            static reject(e) {
              return new o((() => {
                throw e
              }))
            }
          }
        },
        7452: (e, t, n) => {
          "use strict";
          n.d(t, {
            Em: () => r,
            HD: () => a,
            hj: () => i,
            jn: () => s,
            o8: () => c,
            Ft: () => l,
            i2: () => u,
            AT: () => d,
            Kn: () => p,
            kJ: () => f,
            mf: () => h,
            eP: () => g,
            fU: () => y,
            x7: () => v
          });
          const o = Object.prototype.toString;

          function r(e) {
            return o.call(e).slice(8, -1)
          }
          const a = e => "String" === r(e),
            i = e => "Number" === r(e),
            s = e => !0 === e || !1 === e || "Boolean" === r(e),
            c = e => void 0 === e,
            l = e => null === e,
            u = Number.isNaN || (e => e != e),
            d = (Number.isFinite, e => i(e) && Math.abs(e) === 1 / 0),
            p = e => "Object" === r(e),
            f = Array.isArray || (e => "Array" === r(e)),
            h = e => "function" == typeof e,
            g = e => "ArrayBuffer" === r(e),
            y = e => ArrayBuffer.isView(e) && !(e => "DataView" === r(e))(e);

          function v(e, t, n = "parameter") {
            const o = r(t),
              a = r(e);
            if (a !== o) return `${n} should be ${o} instead of ${a};`;
            let i = "";
            switch (o) {
              case "Object":
                Object.keys(t).forEach((o => {
                  i += v(e[o], t[o], `${n}.${o}`)
                }));
                break;
              case "Array":
                if (e.length < t.length) return `${n} should have at least ${t.length} item;`;
                for (let o = 0; o < t.length; ++o) i += v(e[o], t[o], `${n}[${o}]`)
            }
            return i
          }
        },
        5062: (e, t, n) => {
          "use strict";
          n.d(t, {
            NX: () => b,
            mh: () => _,
            M8: () => p,
            Vl: () => m,
            ZT: () => h,
            Qu: () => y,
            gA: () => g,
            Hw: () => f
          });
          const o = BabelRuntimeHelpers.objectWithoutProperties;
          var r = n.n(o),
            a = n(1503),
            i = n.n(a),
            s = n(7452),
            c = n(1106);
          const l = ["errMsg"],
            u = ["errMsg"],
            d = ["success", "fail", "complete"];

          function p() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (e) {
              const t = 16 * Math.random() | 0;
              return ("x" === e ? t : 3 & t | 8).toString(16)
            }))
          }

          function f(e, t) {
            return function (...n) {
              try {
                return e(...n)
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

          function h() {}
          f((function (e) {
            const t = (0, s.Em)(e);
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
          f((function (e, t) {
            return "String" === t ? e : e = "Array" === t || "Object" === t ? JSON.parse(e) : "Number" === t ? parseFloat(e) : "Boolean" === t ? "true" === e : "Date" === t ? new Date(parseInt(e, 10)) : "Undefined" === t ? void 0 : "Null" === t ? null : ""
          }), "stringToAnyType");

          function g(e) {
            return function (t = {}, ...n) {
              t = t || {};
              const {
                success: o,
                fail: r,
                complete: a
              } = t;
              return o || r || a ? e.apply(this, [t, ...n]) : new Promise(((o, r) => {
                const a = Object.assign({
                  success: o,
                  fail: r
                }, t);
                e.apply(this, [a, ...n])
              }))
            }
          }

          function y(e, t, n) {
            const o = g(n.value);
            return n.value = function () {
              return o.apply(this, arguments)
            }, n
          }
          const v = Symbol("ErrorInfosSymbol");
          Error;
          const m = e => (t = {}, ...n) => new Promise(((o, a) => e(i()(i()({}, t), {}, {
              success: o,
              fail: e => {
                const {
                  errMsg: t
                } = e, n = r()(e, l), o = new Error(t.replace(/^\w+:fail ?/, ""));
                Object.assign(o, n), o[v] = n, a(o)
              },
              complete: (e = {}) => {
                const {
                  errMsg: t
                } = e, n = r()(e, u);
                if (t && !/^\w+:(ok|fail)/.test(t)) {
                  const t = new Error(e.errMsg.replace(/^\w+:/, ""));
                  Object.assign(t, n), t[v] = n, t._complete_hook = !0, a(t)
                }
              }
            }), ...n))),
            b = (e, t) => (n = {}, ...o) => {
              let {
                success: a,
                fail: i,
                complete: s
              } = n, l = r()(n, d);
              const u = {
                success: a,
                fail: i,
                complete: s
              };
              t(l, ...o).then((t => (0, c.FE)({
                name: e,
                args: u,
                success: !0,
                res: t
              })), (t => {
                t._complete_hook ? (0, c.S3)({
                  name: e,
                  args: u,
                  errMsg: t.message,
                  res: t[v] || {}
                }) : (0, c.FE)({
                  name: e,
                  args: u,
                  success: !1,
                  errMsg: t.message,
                  res: t[v] || {}
                })
              }))
            },
            _ = (e, t) => g(b(e, t))
        },
        6814: (e, t, n) => {
          "use strict";
          n.d(t, {
            be: () => U,
            IN: () => j,
            bb: () => $,
            qu: () => V,
            oQ: () => W
          });
          var o = n(2999),
            r = n(665),
            a = n(2815),
            i = n(6602);
          let s = "";
          const c = (e = {}) => {
            try {
              s = e.transitExtraData.adUxInfo
            } catch (e) {
              s = ""
            }
          };
          void 0 !== __safeway__ && (r.Z.onReady((() => {
            c(r.Z.appLaunchInfo)
          })), (0, o.n)("onAppEnterForeground", (e => {
            c(e)
          })), (0, o.n)("onAppEnterBackground", ((e = {}) => {
            "back" !== e.mode && "close" !== e.mode || (s = "")
          })), (0, i.L)("getAdUxInfo", ((e, t) => {
            (0, a.n)("adUxInfoGot", {
              adUxInfo: s,
              callbackId: e.callbackId
            }, [t])
          })));

          function l(e, t, n, o) {
            "navigateToMiniProgram" !== e && "openUrl" !== e && "private_openUrl" !== e || (t.adUxInfo = t.adUxInfo || s), __safeway__.bridge.invoke(e, t, n, o)
          }
          var u = n(1106);
          let d = {},
            p = {},
            f = {},
            h = 0;
          const g = (e, t) => Object.keys(t).map((n => Object.keys(t[n]).map((o => ({
              func: n,
              result: e,
              errMsg: o,
              count: t[n][o]
            }))))),
            y = () => {
              const e = g(1, d),
                t = g(2, p),
                n = g(3, f),
                o = [].concat(e, t, n);
              0 !== o.length && (0, u.IN)("reportRealtimeAction", {
                actionData: JSON.stringify({
                  business: "mmbizwxajsapi",
                  dataType: 1,
                  dataArray: o,
                  appType: Reporter.getAppType()
                })
              }), d = {}, p = {}, f = {}
            };
          var v = n(5062),
            m = n(7452),
            b = n(2851),
            _ = n(7646),
            w = n(2582);
          const I = 0,
            S = 1,
            A = 2,
            k = 1,
            C = 2,
            P = 3,
            T = 4,
            x = wxNativeConsole.createLogger("BanForPage");
          let M = !1,
            E = new Set(["shareAppMessage", "shareAppMessageDirectly", "requestPayment", "setClipboardData", "getClipboardData", "getLocation", "getPhoneNumber", "navigateToMiniProgram", "navigateBackMiniProgram"]),
            O = [];

          function L(e, t, n) {
            x.log(`[checkAPIAvailableForPage] APIName=${e}, path=${t}, title=${n}`);
            const o = function (e, t, n) {
              let o = -1;
              for (let e = 0; e < O.length; e++) {
                const r = O[e];
                if ((!(0, m.HD)(r.path_rule) || !r.path_rule || new RegExp(r.path_rule).test(t)) && (!(0, m.HD)(r.title_rule) || !r.title_rule || new RegExp(r.title_rule).test(n))) {
                  o = e;
                  break
                }
              }
              return x.log(`[getBanRuleIndexForPage] banRuleIndex=${o}`), o
            }(0, t, n);
            if (-1 === o) return D(e, k, T, e), !0;
            const r = O[o];
            return x.log("[checkAPIAvailableForPage], found rule:", r),
              function (e, t) {
                const n = e.ban_jsapi_list.find((e => e.jsapi_name === t));
                if (!n) return x.log("[checkAPIAvailableForPageByRule], no APIItem found"), !0;
                let o, r;
                if (x.log("[checkAPIAvailableForPageByRule], found APIItem:", n), n.state === I) o = !1;
                else if (n.state === S) o = !0;
                else if (n.state === A && (o = !0, 1 === e.is_valid)) {
                  const e = n.toast_wording || "该功能暂时无法使用";
                  (0, u.be)("showToast", {
                    title: e,
                    icon: "none"
                  })
                }
                return r = o ? e.is_valid ? C : P : k, D(t, r, T, t), 1 !== e.is_valid || !o
              }(r, e)
          }

          function D(e, t, n, o = "", a = "") {
            if (x.log(`[reportAPIBanForPage] APIName=${e}, blockType=${t}, checkScene=${n}, extraInfo=${o}, needReport=${M}`), !M) return;
            const {
              appLaunchInfo: i
            } = r.Z, s = Object.keys(b.Z.query).map((e => `${e}=${b.Z.query[e]}`)).join("&"), c = {
              session_id: i.sessionid || i.sessionId,
              cur_path: b.Z.lastRoute + (s ? `?${s}` : ""),
              title: b.Z.navigationBarTitleMap[b.Z.lastRoute],
              check_scene: n,
              block_status: t,
              extra_info: o,
              launch_scene: i.scene,
              launch_path: i.path,
              target_path: a
            };
            x.log("[reportAPIBanForPage], reqData:", c), (0, _.JM)({
              reqData: c,
              apiName: "webapi_reportnvgcheckinfo",
              complete(e) {
                x.log(`[reportAPIBanForPage], res.errMsg=${e.errMsg}`)
              }
            })
          }
          r.Z.onReady((() => {
            if (!w.IS_DEVTOOLS) try {
              const {
                do_report: e,
                navigate_ban_rule_list: t
              } = r.Z.appContactInfo.operationInfo.jsonInfo.navigate_ban_info;
              O = t, M = 1 === e, E = new Set(t.reduce(((e, t) => [...e, ...t.ban_jsapi_list]), E)), x.log(`[BanForPage][init] needReport=${M}`), x.log("[BanForPage][init] ruleList:", O), x.log("[BanForPage][init] banAPISet:", E)
            } catch (e) {
              x.error(`[BanForPage][init] fail, errMsg=${e.message}`)
            }
          }));
          var B = n(4915);
          const R = ["open", "openSync", "close", "closeSync", "fstat", "fstatSync", "write", "writeSync", "read", "readSync", "truncate", "truncateSync", "ftruncate", "ftruncateSync"];

          function N(e, t, n, o) {
            e.errMsg = e.errMsg || `${t}:ok`;
            const r = 0 === e.errMsg.indexOf(`${t}:ok`),
              a = new RegExp(`${t}:(fail |fail:)?cancel`).test(e.errMsg),
              i = 0 === e.errMsg.indexOf(`${t}:fail`);
            "function" == typeof o.beforeAll && o.beforeAll(e), r ? function (e, t, n) {
              const o = function () {
                "function" == typeof e.success && e.success(t), "function" == typeof n.afterSuccess && n.afterSuccess(t)
              };
              "function" == typeof n.beforeSuccess ? 2 === n.beforeSuccess._argumentsLength ? n.beforeSuccess(t, o) : (n.beforeSuccess(t), o()) : o()
            }(n, e, o) : a ? function (e, t, n, o) {
              const r = new RegExp(`${t}:(fail |fail:)?cancel`);
              e.errMsg = e.errMsg.replace(r, `${t}:fail cancel`), "function" == typeof n.fail && n.fail(e), "function" == typeof o.beforeCancel && o.beforeCancel(e), "function" == typeof n.cancel && n.cancel(e), "function" == typeof o.afterCancel && o.afterCancel(e)
            }(e, t, n, o) : i && function (e, t, n, o) {
              "function" == typeof e.beforeFail && e.beforeFail(n), "function" == typeof o.fail && o.fail(n), "function" == typeof e.afterFail && e.afterFail(n), (0, m.mf)(e.checkNeedReportFail) && !1 === e.checkNeedReportFail(n) || Reporter.reportIDKey({
                key: `${t}_fail`
              })
            }(o, t, e, n), "function" == typeof n.complete && n.complete(e), "function" == typeof o.afterAll && o.afterAll(e), ((e, t, n, o, r) => {
              let a;
              a = t ? d : n ? p : f, a[e] = a[e] || {}, a[e][r] = (a[e][r] || 0) + 1, Date.now() - h >= 6e4 && (h = Date.now(), setTimeout(y, 6e4))
            })(t, r, i, 0, e.errMsg)
          }

          function F(e) {
            return (t, n = {}, o = {}, a = "/") => {
              (0, m.Kn)(n) || (n = {}), "operateWXData" === t && n._isFromBaseOperateWXData;
              const i = function (e, t) {
                return Object.keys(e).reduce(((n, o) => ("function" == typeof e[o] && (n[o] = __errorTracer__.surroundThirdByTryCatch(e[o], `at api ${t} ${o} callback function`), delete e[o]), n)), {})
              }(n, t);
              if (n = Object.assign({}, n), o = function (e, t) {
                  return Object.keys(e).reduce(((n, o) => ("function" == typeof e[o] && (n[o] = (0, v.Hw)(e[o], `at api ${t} ${o} callback function`), n[o]._argumentsLength = e[o].length), n)), {})
                }(o, t), Reporter.reportIDKey({
                  key: t
                }), !e) {
                if (0 === r.Z.appType && E.has(t) && ! function (e) {
                    const t = Object.keys(b.Z.query).reduce(((e, t) => [...e, `${t}=${b.Z.query[t]}`]), []).join("&"),
                      n = b.Z.lastRoute + (t ? `?${t}` : ""),
                      o = b.Z.navigationBarTitleMap[b.Z.lastRoute] || "";
                    return x.log(`[checkAPIAvailableForCurrentPage] APIName=${e}, path=${n}, title=${o}`), L(e, n, o)
                  }(t)) return void N({
                  errMsg: `${t}:fail API has been banned`
                }, t, i, o);
                delete n.pluginId, delete n.permissionBytes, "/" !== a && (n.pluginId = a)
              }
              const s = (c = t, w.WK_RENDERER_H5 || w.IS_ANDROID && R.includes(c));
              var c;
              l(t, n, (e => {
                N(e, t, i, o)
              }), s)
            }
          }
          const W = F(!1),
            j = (e, t, n) => {
              B.e4.indexOf(e) < 0 ? W(e, t, n) : (0, B.LY)(e, t, n)
            },
            $ = (e, t, n) => (0, v.Vl)((t => j(e, t, n)))(t),
            V = e => e ? (t, n, o) => {
              W(t, n, o, e)
            } : j,
            Z = F(!0),
            U = (e, t, n) => {
              Z(e, t, n)
            }
        },
        2833: (e, t, n) => {
          "use strict";
          n.d(t, {
            j: () => r
          });
          var o = n(5062);

          function r(e, t) {
            ! function (e, t) {
              __safeway__.bridge.on(e, t)
            }(e, (0, o.Hw)(t, `at api ${e} callback function`))
          }
        },
        2815: (e, t, n) => {
          "use strict";

          function o(e, t, n) {
            ! function (e, t, n) {
              __safeway__.bridge.publish(e, t, n)
            }(e, {
              data: t,
              options: {
                timestamp: Date.now()
              }
            }, n)
          }
          n.d(t, {
            n: () => o
          })
        },
        6602: (e, t, n) => {
          "use strict";

          function o(e, t) {
            ! function (e, t) {
              __safeway__.bridge.subscribe(e, t)
            }(e, (({
              data: e,
              options: n
            }, o, r = {}) => {
              const a = n && n.timestamp || 0,
                i = Date.now();
              Reporter.speedReport({
                key: "webview2AppService",
                data: e || {},
                timeMark: {
                  startTime: a,
                  endTime: i,
                  nativeTime: r.nativeTime || 0
                }
              }), "function" == typeof t && t(e, o)
            }))
          }
          n.d(t, {
            L: () => o
          })
        },
        1106: (e, t, n) => {
          "use strict";
          n.d(t, {
            be: () => a.be,
            gM: () => k,
            r3: () => l,
            FE: () => p,
            S3: () => d,
            YG: () => u,
            IN: () => a.IN,
            bb: () => a.bb,
            qu: () => a.qu,
            oQ: () => a.oQ,
            jQ: () => i.j,
            nY: () => o.n,
            Ld: () => r.L
          });
          var o = n(2815),
            r = n(6602),
            a = n(6814),
            i = n(2833),
            s = n(5062),
            c = n(7452);

          function l(e, t, n) {
            const o = (0, c.x7)(t, n);
            return !o || (u(e, t, `parameter error: ${o}`), !1)
          }

          function u(e, t = {}, n = "", o) {
            p({
              name: e,
              args: t,
              errMsg: n,
              errCode: o,
              success: !1
            })
          }

          function d({
            name: e,
            args: t = {},
            errMsg: n = "",
            res: o = {}
          }) {
            t = t || {};
            const r = `${e}:${n}`,
              a = __errorTracer__.surroundThirdByTryCatch(t.complete || s.ZT, `at api ${e} complete callback function`);
            o.errMsg = r, a(o)
          }

          function p({
            name: e,
            args: t = {},
            success: n = !0,
            errMsg: o = "",
            errCode: r,
            res: a = {}
          }) {
            t = t || {};
            const i = n ? `${e}:ok` : `${e}:fail ${o}`,
              l = __errorTracer__.surroundThirdByTryCatch((n ? t.success : t.fail) || s.ZT, `at api ${e} ${n?"success":"fail"} callback function`),
              u = __errorTracer__.surroundThirdByTryCatch(t.complete || s.ZT, `at api ${e} complete callback function`);
            a.errMsg = i, (0, c.hj)(r) && (a.errCode = r), l(a), u(a)
          }
          var f = n(665),
            h = n(2851);
          let g = "undefined" != typeof __libVersionInfo__ && __libVersionInfo__ ? __libVersionInfo__.version : "unknown",
            y = "undefined" != typeof __libVersionInfo__ && __libVersionInfo__ ? __libVersionInfo__.updateTime : "unknown";

          function v(e) {
            return t => (0, c.HD)(t) && t.length > e ? t.substr(0, e) : t
          }

          function m(e, t = !0) {
            const n = (0, c.Em)(e);
            switch (n) {
              case "Number":
              case "Boolean":
                return e;
              case "String":
                return v(512)(e).replace(/\|/g, "||").replace(/,/g, "|.");
              case "Error":
                return `[Error:${m(e.message)}|${m(e.stack)}]`;
              case "Object":
                return t ? Object.keys(e).map((t => `${m(t)}=${m(e[t],!1)}`)).sort(((e, t) => e.length - t.length)).join("&") || "{}" : `[${n}]`;
              default:
                return `[${n}]`
            }
          }

          function b({
            WXDataApiName: e,
            argument: t,
            isSuccess: n,
            invokeTime: o,
            costTime: r,
            result: a,
            errMsg: i,
            isConfirm: s,
            queueLength: c,
            wxdataQueueTimestamp: l,
            wxdataDequeueTimestamp: u,
            beginCGITimestamp: d,
            CGICallbackTimestamp: p,
            beginCGITimestampAfterConfirm: b,
            CGICallbackTimestampAfterConfirm: _,
            wxlibCallbackTimestamp: w,
            requestInQueue: I,
            requestingCount: S,
            cost1: A,
            cost2: k,
            cost3: C,
            cost4: P,
            cost5: T,
            cost6: x
          }) {
            Math.random() < .05 && setTimeout((() => {
              const M = h.Z.currentNetworkType,
                E = f.Z.appType + 1e3,
                O = f.Z.appLaunchInfo && void 0 !== f.Z.appLaunchInfo.scene ? f.Z.appLaunchInfo.scene : 0,
                L = [e, m(JSON.stringify(t)), n ? 1 : 0, o, r, M, m(a), E, O, g, y, i && m(i) || "", s ? 1 : 0, c, A, k, C, P, T, x, 0, I ? 1 : 0, S, o, l, u, d, p, b, _, w].map(v(1024)).join(",");
              Reporter.reportKeyValue({
                key: "WeAppOperateWXData",
                value: L
              })
            }), 0)
          }(0, c.HD)(g) && (g = g.replace(" ", "")), (0, c.HD)(y) && (y = y.replace(" ", "-"));
          let _ = 0;
          const w = wxNativeConsole.createLogger("baseOperateWXData"),
            I = ["webapi_getuserinfo", "webapi_getwerunstep_history", "subscribemsg"],
            S = ["webapi_getuserinfo", "webapi_getuserallappauth", "webapi_getadvert", "webapi_getshareinfo"],
            A = ["qbase_commapi", "webapi_botdemo"];

          function k(e = {}, t = {}, ...n) {
            const o = Object.assign({}, e);
            o._isFromBaseOperateWXData = !0;
            const r = t.beforeAll,
              i = t.beforeSuccess,
              s = t.beforeFail,
              c = o.data && o.data.api_name;
            I.includes(c) ? o.requestInQueue = !0 : o.requestInQueue = !1, S.includes(c) ? o.isImportant = !0 : o.isImportant = !1, A.includes(o.data && o.data.api_name) && (o.keepAlive = !0);
            const l = {
              isSuccess: void 0,
              WXDataApiName: c,
              argument: o,
              invokeTime: Date.now(),
              requestInQueue: o.requestInQueue,
              requestingCount: ++_
            };
            w.info(`${o.data.api_name} _options.requestInQueue`, o.requestInQueue), (0, a.IN)("operateWXData", o, {
              beforeAll(e) {
                const n = Date.now();
                _--, l.costTime = n - l.invokeTime;
                try {
                  if (e && e.data && e.data.data ? l.result = JSON.stringify(e.data) : l.result = e.data, e.clientInfo && "object" == typeof e.clientInfo) {
                    const t = e.clientInfo;
                    Object.keys(t).forEach((e => {
                      l[e] = t[e]
                    })), l.cost1 = t.wxdataQueueTimestamp - l.invokeTime, l.cost2 = t.wxdataDequeueTimestamp - t.wxdataQueueTimestamp, l.cost3 = t.beginCGITimestamp - t.wxdataDequeueTimestamp, l.cost4 = t.CGICallbackTimestamp - t.beginCGITimestamp, l.cost5 = t.wxlibCallbackTimestamp - t.CGICallbackTimestamp, l.cost6 = n - t.wxlibCallbackTimestamp
                  }
                } catch (e) {
                  w.error(e)
                }
                "function" == typeof r && r.call(t, e)
              },
              beforeSuccess(e) {
                l.isSuccess = !0, o.data.data && o.data.data.__wxdataUseProfile__ && (e.__wxdataProfileInfo = l), "function" == typeof i && i.call(t, e), b(l)
              },
              beforeFail(e) {
                l.isSuccess = !1, l.errMsg = e.errMsg, o.data.data && o.data.data.__wxdataUseProfile__ && (e.__wxdataProfileInfo = l), "function" == typeof s && s.call(t, e), b(l)
              }
            }, ...n)
          }
        },
        2999: (e, t, n) => {
          "use strict";
          n.d(t, {
            n: () => i,
            r: () => s
          });
          var o = n(2833),
            r = n(2046);
          const a = {},
            i = (e, t) => {
              const n = (0, r.s)(`WeixinJSBridge-${e}`);
              a[e] || ((0, o.j)(e, ((...e) => {
                n.emit(...e)
              })), a[e] = !0), n.internalOnMethod(t)
            },
            s = (e, t) => {
              (0, r.s)(`WeixinJSBridge-${e}`).internalOffMethod(t)
            }
        },
        2159: (e, t, n) => {
          "use strict";
          n.d(t, {
            yH: () => r,
            Do: () => a,
            rW: () => i,
            vL: () => s,
            bh: () => c
          });
          var o = n(1106);
          const r = e => {
              (0, o.r3)("saveFile", e, {
                tempFilePath: ""
              }) && (0, o.IN)("saveFile", e)
            },
            a = (e, t) => {
              if (!e || "string" != typeof e) throw new Error("tempFilePath must be a string");
              if (void 0 !== t && "string" != typeof t) throw new Error("filePath must be a string");
              let n, r;
              if ((0, o.IN)("saveFileSync", {
                  tempFilePath: e,
                  filePath: t,
                  success(e) {
                    r = e.savedFilePath
                  },
                  fail(e) {
                    n = e.errMsg
                  }
                }), n) throw new Error(n);
              return r
            },
            i = (e = {}) => {
              (0, o.IN)("getSavedFileList", e)
            },
            s = (e = {}) => {
              (0, o.r3)("getSavedFileInfo", e, {
                filePath: ""
              }) && (0, o.IN)("getSavedFileInfo", e)
            },
            c = (e = {}) => {
              (0, o.r3)("removeSavedFile", e, {
                filePath: ""
              }) && (0, o.IN)("removeSavedFile", e)
            }
        },
        6257: (e, t, n) => {
          "use strict";
          n.d(t, {
            ZP: () => E,
            WZ: () => O
          });
          var o = n(2159),
            r = n(1106),
            a = n(7452);
          var i = n(7255);
          const s = ["ascii", "base64", "binary", "hex", "ucs2", "ucs-2", "utf16le", "utf-16le", "utf8", "utf-8", "latin1"];
          var c = n(7618),
            l = n(665),
            u = n(2582);
          const d = u.IS_DEVTOOLS ? "http://" : "wxfile://";
          let p, f = [],
            h = !1;
          u.IS_IOS ? p = new RegExp(`^${d}tmp_`) : u.IS_ANDROID && (p = new RegExp("^tmp_")), l.Z.onReady((() => {
            u.IS_ANDROID || u.IS_IOS ? (0, r.IN)("readdir", {
              dirPath: d,
              success(e) {
                const t = e.files || [];
                f = t.filter((e => p.test(e))), h = !0
              }
            }) : h = !0
          }));
          const g = (e, t) => {
            if (!/^wxfile:\/\/(tmp\/?)?$/.test(t)) return;
            const n = c.L.get();
            e.files = e.files.filter((e => (new RegExp(`^${t}`).test(e) || (e = `${t}${e}`), -1 === n.indexOf(e)))).filter((e => h ? -1 === f.indexOf(e) : !p.test(e)))
          };
          class y {
            constructor({
              mode: e,
              size: t,
              lastAccessedTime: n,
              lastModifiedTime: o
            }) {
              this.mode = e, this.size = t, this.lastAccessedTime = n, this.lastModifiedTime = o
            }
            _checkModeProperty(e) {
              return (61440 & this.mode) === e
            }
            isDirectory() {
              return this._checkModeProperty(16384)
            }
            isFile() {
              return this._checkModeProperty(32768)
            }
          }
          const v = (e, t) => {
              let n = !0;
              if (["mode", "size", "lastAccessedTime", "lastModifiedTime"].forEach((t => {
                  n = n && void 0 !== e[t]
                })), n) e.stats = new y(e), delete e.mode, delete e.size, delete e.lastAccessedTime, delete e.lastModifiedTime;
              else if (e.stats && 1 === Object.keys(e.stats).length && e.stats[""]) e.stats = new y(e.stats[""]);
              else {
                const n = [];
                let o = e.stats;
                u.IS_ANDROID && (o = e, n.push({
                  path: "/",
                  stats: m(t)
                })), Object.keys(o).forEach((e => {
                  if ("errMsg" === e) return;
                  const t = o[e];
                  "" === e && (e = "/"), n.push({
                    path: e,
                    stats: new y(t)
                  }), delete o[e]
                })), e.stats = n
              }
            },
            m = (e, t = !1) => {
              if (!e || "string" != typeof e) throw new Error("path must be a string");
              let n, o;
              if ((0, r.IN)("statSync", {
                  path: e,
                  recursive: t,
                  success(t) {
                    v(t, e), n = t.stats
                  },
                  fail(e) {
                    o = e.errMsg
                  }
                }), o) throw new Error(o);
              return n
            },
            b = "readZipEntry",
            _ = ["a", "ax", "a+", "ax+", "as", "as+", "r", "r+", "w", "wx", "w+", "wx+"];
          var w = n(5260);
          var I = n(1503),
            S = n.n(I),
            A = n(5542);
          var k = n(1095);
          const C = {
            saveFile: o.yH,
            saveFileSync: o.Do,
            getSavedFileList: o.rW,
            getSavedFileInfo: o.vL,
            removeSavedFile: o.bh,
            getFileInfo: (e = {}) => {
              if ((0, r.r3)("getFileInfo", e, {
                  filePath: ""
                })) {
                if (void 0 !== e.digestAlgorithm) {
                  const t = (0, a.x7)(e, {
                    digestAlgorithm: ""
                  });
                  if (t) return void(0, r.YG)("getFileInfo", e, `parameter error: ${t}`);
                  if (-1 === ["md5", "sha1"].indexOf(e.digestAlgorithm)) return void(0, r.YG)("getFileInfo", e, `parameter error: invalid digestAlgorithm "${e.digestAlgorithm}"`)
                }(0, r.IN)("getFileInfo", e, {})
              }
            },
            readFile: i.p,
            readFileSync: i.N,
            writeFile: (e = {}) => {
              (0, r.r3)("writeFile", e, {
                filePath: ""
              }) && (e.encoding && -1 === s.indexOf(e.encoding) ? (0, r.YG)("writeFile", e, `invalid encoding "${e.encoding}"`) : (0, r.IN)("writeFile", e, {}))
            },
            writeFileSync: (e, t, n) => {
              if (!e || "string" != typeof e) throw new Error("path must be a string");
              if (n && -1 === s.indexOf(n)) throw new Error(`invalid encoding "${n}"`);
              let o;
              if ((0, r.IN)("writeFileSync", {
                  filePath: e,
                  data: t,
                  encoding: n,
                  fail(e) {
                    o = e.errMsg
                  }
                }), o) throw new Error(o)
            },
            mkdir: (e = {}) => {
              (0, r.r3)("mkdir", e, {
                dirPath: ""
              }) && (0, r.IN)("mkdir", e)
            },
            mkdirSync: (e, t = !1) => {
              if (!e || "string" != typeof e) throw new TypeError("dirPath must be a string");
              let n;
              if ((0, r.IN)("mkdirSync", {
                  dirPath: e,
                  recursive: t,
                  fail(e) {
                    n = e.errMsg
                  }
                }), n) throw new Error(n)
            },
            rmdir: (e = {}) => {
              (0, r.r3)("rmdir", e, {
                dirPath: ""
              }) && (0, r.IN)("rmdir", e)
            },
            rmdirSync: (e, t = !1) => {
              if (!e || "string" != typeof e) throw new Error("dirPath must be a string");
              let n;
              if ((0, r.IN)("rmdirSync", {
                  dirPath: e,
                  recursive: t,
                  fail(e) {
                    n = e.errMsg
                  }
                }), n) throw new Error(n)
            },
            readdir: (e = {}) => {
              (0, r.r3)("readdir", e, {
                dirPath: ""
              }) && (0, r.IN)("readdir", e, {
                beforeSuccess(t) {
                  g(t, e.dirPath)
                }
              })
            },
            readdirSync: e => {
              if (!e || "string" != typeof e) throw new TypeError("dirPath must be a string");
              let t, n;
              if ((0, r.IN)("readdirSync", {
                  dirPath: e,
                  success(e) {
                    t = e.files
                  },
                  fail(e) {
                    n = e.errMsg
                  }
                }, {
                  beforeSuccess(t) {
                    g(t, e)
                  }
                }), n) throw new Error(n);
              return t
            },
            access: (e = {}) => {
              (0, r.r3)("access", e, {
                path: ""
              }) && (0, r.IN)("access", e)
            },
            accessSync: e => {
              if (!e || "string" != typeof e) throw new TypeError("path must be a string");
              let t;
              if ((0, r.IN)("accessSync", {
                  path: e,
                  fail(e) {
                    t = e.errMsg
                  }
                }), t) throw new Error(t)
            },
            unlink: (e = {}) => {
              (0, r.r3)("unlink", e, {
                filePath: ""
              }) && (0, r.IN)("unlink", e)
            },
            unlinkSync: e => {
              if (!e || "string" != typeof e) throw new Error("filePath must be a string");
              let t;
              if ((0, r.IN)("unlinkSync", {
                  filePath: e,
                  fail(e) {
                    t = e.errMsg
                  }
                }), t) throw new Error(t)
            },
            stat: (e = {}) => {
              (0, r.r3)("stat", e, {
                path: ""
              }) && (0, r.IN)("stat", e, {
                beforeSuccess: t => {
                  v(t, e.path)
                }
              })
            },
            statSync: m,
            unzip: (e = {}) => {
              (0, r.r3)("unzip", e, {
                zipFilePath: ""
              }) && (0, r.IN)("unzip", Object.assign({}, e, {
                targetDirectory: e.targetPath
              }))
            },
            copyFile: (e = {}) => {
              (0, r.r3)("copyFile", e, {
                srcPath: "",
                destPath: ""
              }) && (0, r.IN)("fs_copyFile", e, {
                beforeAll(e) {
                  e.errMsg = e.errMsg.replace("fs_copyFile:", "copyFile:")
                }
              })
            },
            copyFileSync: (e, t) => {
              if (!e || "string" != typeof e) throw new Error("srcPath must be a string");
              if (!t || "string" != typeof t) throw new Error("destPath must be a string");
              let n;
              if ((0, r.IN)("fs_copyFileSync", {
                  srcPath: e,
                  destPath: t,
                  fail(e) {
                    n = e.errMsg.replace("fs_copyFileSync:", "copyFileSync:")
                  }
                }), n) throw new Error(n)
            },
            rename: (e = {}) => {
              (0, r.r3)("rename", e, {
                oldPath: "",
                newPath: ""
              }) && (0, r.IN)("fs_rename", e, {
                beforeAll(e) {
                  e.errMsg = e.errMsg.replace(/^fs_/, "")
                }
              })
            },
            renameSync: (e, t) => {
              if (!e || "string" != typeof e) throw new Error("oldPath must be a string");
              if (!t || "string" != typeof t) throw new Error("newPath must be a string");
              let n;
              if ((0, r.IN)("fs_renameSync", {
                  oldPath: e,
                  newPath: t,
                  fail(e) {
                    n = e.errMsg.replace(/^fs_/, "")
                  }
                }), n) throw new Error(n)
            },
            appendFile: (e = {}) => {
              (0, r.r3)("appendFile", e, {
                filePath: ""
              }) && (e.encoding && -1 === s.indexOf(e.encoding) ? (0, r.YG)("appendFile", e, `invalid encoding "${e.encoding}"`) : (0, r.IN)("fs_appendFile", e, {}))
            },
            appendFileSync: (e, t, n) => {
              if (!e || "string" != typeof e) throw new Error("path must be a string");
              if (n && -1 === s.indexOf(n)) throw new Error(`invalid encoding "${n}"`);
              let o;
              if ((0, r.IN)("fs_appendFileSync", {
                  filePath: e,
                  data: t,
                  encoding: n,
                  fail(e) {
                    o = e.errMsg
                  }
                }), o) throw new Error(o)
            },
            readZipEntry: (e = {}) => {
              (0, r.r3)(b, e, {
                filePath: ""
              }) && ((0, a.o8)(e.encoding) || -1 !== s.indexOf(e.encoding) ? "all" === e.entries || Array.isArray(e.entries) ? (0, r.IN)(b, e, {
                beforeSuccess: e => (e.entries && Object.keys(e.entries).forEach((t => {
                  if (e[t] && (e.entries[t].data = e[t], delete e[t]), "ok" === e.entries[t].errMsg ? e.entries[t].errMsg = "readZipEntry:ok" : e.entries[t].errMsg = `readZipEntry:fail ${e.entries[t].errMsg}`, 0 === t.indexOf("file:")) {
                    const n = t.replace("file:", "");
                    e.entries[n] = e.entries[t], delete e.entries[t]
                  }
                })), e)
              }) : (0, r.YG)(b, e, "invalid entries") : (0, r.YG)(b, e, `invalid encoding "${e.encoding}"`))
            },
            open: (e = {}) => {
              const t = Object.assign({}, e);
              (0, r.r3)("open", e, {
                filePath: ""
              }) && (void 0 === e.flag || _.includes(e.flag) ? (void 0 === e.flag && (t.flag = "r"), (0, r.IN)("open", t)) : (0, r.YG)("open", e, `invalid flag "${e.flag}"`))
            },
            openSync: (e = {}) => {
              const {
                filePath: t
              } = e;
              let n, o, {
                flag: a
              } = e;
              if (!t || "string" != typeof t) throw new TypeError("filePath must be a string");
              if (void 0 !== a && !_.includes(a)) throw new w.iZ(`invalid flag: ${a}`);
              if (void 0 === a && (a = "r"), (0, r.IN)("openSync", {
                  filePath: t,
                  flag: a,
                  fail(e) {
                    o = e.errMsg
                  },
                  success(e) {
                    n = e.fd
                  }
                }), o) throw new Error(o);
              return n
            },
            close: (e = {}) => {
              (0, r.r3)("close", e, {
                fd: ""
              }) && (0, r.IN)("close", e)
            },
            closeSync: ({
              fd: e
            } = {}) => {
              if (!e || "string" != typeof e) throw new TypeError("fd must be a string");
              let t;
              if ((0, r.IN)("closeSync", {
                  fd: e,
                  fail(e) {
                    t = e.errMsg
                  }
                }), t) throw new Error(t)
            },
            fstat: (e = {}) => {
              (0, r.r3)("fstat", e, {
                fd: ""
              }) && (0, r.IN)("fstat", e, {
                beforeSuccess(e) {
                  const {
                    mode: t,
                    size: n
                  } = e;
                  let {
                    lastAccessedTime: o,
                    lastModifiedTime: r
                  } = e;
                  o > 1617e9 && (o = Math.floor(o / 1e3)), r > 1617e9 && (r = Math.floor(r / 1e3)), e.stats = new y({
                    mode: t,
                    size: n,
                    lastAccessedTime: o,
                    lastModifiedTime: r
                  }), delete e.mode, delete e.size, delete e.lastAccessedTime, delete e.lastModifiedTime
                }
              })
            },
            fstatSync: ({
              fd: e
            } = {}) => {
              if (!e || "string" != typeof e) throw new TypeError("fd must be a string");
              let t, n;
              if ((0, r.IN)("fstatSync", {
                  fd: e,
                  fail(e) {
                    n = e.errMsg
                  },
                  success(e) {
                    const {
                      mode: n,
                      size: o
                    } = e;
                    let {
                      lastAccessedTime: r,
                      lastModifiedTime: a
                    } = e;
                    r > 1617e9 && (r = Math.floor(r / 1e3)), a > 1617e9 && (a = Math.floor(a / 1e3)), t = new y({
                      mode: n,
                      size: o,
                      lastAccessedTime: r,
                      lastModifiedTime: a
                    })
                  }
                }), n) throw new Error(n);
              return t
            },
            write: (e = {}) => {
              const t = Object.assign({}, e);
              if ((0, r.r3)("write", t, {
                  fd: ""
                }))
                if (t.encoding && -1 === s.indexOf(t.encoding))(0, r.YG)("write", t, `invalid encoding "${t.encoding}"`);
                else {
                  if ((0, a.eP)(t.data)) {
                    if (t.data.byteLength > 10485760) return void(0, r.YG)("write", t, "ArrayBuffer exceed size limit (10M)");
                    ("number" != typeof t.offset || t.offset < 0) && (t.offset = 0), ("number" != typeof t.length || t.length < 0) && (t.length = t.data.byteLength - t.offset)
                  } else if (!(0, a.HD)(t.data)) return void(0, r.YG)("write", t, "data must be a string or ArrayBuffer");
                  "number" != typeof t.position && (t.position = void 0), (0, r.IN)("write", t)
                }
            },
            writeSync: ({
              fd: e,
              data: t,
              offset: n,
              length: o,
              encoding: i,
              position: c
            } = {}) => {
              if (!e || "string" != typeof e) throw new TypeError("fd must be a string");
              if (i && -1 === s.indexOf(i)) throw new w.iZ(`invalid encoding "${i}"`);
              if ((0, a.eP)(t)) {
                if (t.byteLength > 10485760) throw new w.iZ("ArrayBuffer exceed size limit (10M)");
                ("number" != typeof n || n < 0) && (n = 0), ("number" != typeof o || o < 0) && (o = t.byteLength - n)
              } else if (!(0, a.HD)(t)) throw new TypeError("data must be a string or ArrayBuffer");
              let l, u;
              if ("number" != typeof c && (c = void 0), (0, r.IN)("writeSync", {
                  fd: e,
                  data: t,
                  offset: n,
                  length: o,
                  encoding: i,
                  position: c,
                  fail(e) {
                    l = e.errMsg
                  },
                  success(e) {
                    u = {
                      bytesWritten: e.bytesWritten
                    }
                  }
                }), l) throw new Error(l);
              return u
            },
            read: (e = {}) => {
              if (!(0, r.r3)("read", e, {
                  fd: ""
                })) return;
              if (!(0, a.eP)(e.arrayBuffer)) return void(0, r.YG)("FileSystemManager.read", e, "arrayBuffer must be an ArrayBuffer");
              const t = Object.assign({}, e);
              u.IS_IOS && A.Z && A.Z.trace && (t.arrayBufferId = A.Z.trace(t.arrayBuffer, "rw"), delete t.arrayBuffer), (0, a.hj)(t.position) && t.position < 0 ? t.position = 0 : (0, a.o8)(t.position) || (0, a.Ft)(t.position) ? t.position = null : (0, a.hj)(t.position) || (t.position = 0);
              const n = Number(t.length);
              Number.isNaN(n) ? t.length = 0 : t.length = n;
              const o = Number(t.offset);
              Number.isNaN(o) ? t.offset = 0 : t.offset = o, (0, r.IN)("read", t, {
                beforeSuccess(t) {
                  t.arrayBuffer = e.arrayBuffer
                },
                afterAll() {
                  u.IS_IOS && A.Z && A.Z.untrace && A.Z.untrace(t.arrayBufferId)
                }
              })
            },
            readSync: (e = {}) => {
              const {
                fd: t,
                arrayBuffer: n
              } = e;
              if (!t || "string" != typeof t) throw new TypeError("fd must be a string");
              if (!(0, a.eP)(n)) throw new TypeError("arrayBuffer must be an ArrayBuffer");
              const o = Object.assign({}, e);
              u.IS_IOS && A.Z && A.Z.trace && (o.arrayBufferId = A.Z.trace(o.arrayBuffer, "rw"), delete o.arrayBuffer), (0, a.hj)(o.position) && o.position < 0 ? o.position = 0 : (0, a.o8)(o.position) || (0, a.Ft)(o.position) ? o.position = null : (0, a.hj)(o.position) || (o.position = 0);
              const i = Number(o.length);
              Number.isNaN(i) ? o.length = 0 : o.length = i;
              const s = Number(o.offset);
              let c, l;
              if (Number.isNaN(s) ? o.offset = 0 : o.offset = s, (0, r.IN)("readSync", S()(S()({}, o), {}, {
                  fail(e) {
                    l = e.errMsg
                  },
                  success(e) {
                    c = {
                      bytesRead: e.bytesRead,
                      arrayBuffer: n
                    }
                  }
                })), u.IS_IOS && A.Z && A.Z.untrace && A.Z.untrace(o.arrayBufferId), l) throw new Error(l);
              return c
            },
            truncate: (e = {}) => {
              (0, r.r3)("truncate", e, {
                filePath: ""
              }) && ("number" != typeof (e = Object.assign({}, e)).length && (e.length = 0), e.length = Math.floor(e.length), e.length < 0 && (e.length = 0), (0, r.IN)("truncate", e, {}))
            },
            truncateSync: ({
              filePath: e,
              length: t
            } = {}) => {
              if (!e || "string" != typeof e) throw new Error("filePath must be a string");
              let n;
              if ("number" != typeof t && (t = 0), (t = Math.floor(t)) < 0 && (t = 0), (0, r.IN)("truncateSync", {
                  filePath: e,
                  length: t,
                  fail(e) {
                    n = e.errMsg
                  }
                }), n) throw new Error(n)
            },
            ftruncate: (e = {}) => {
              (0, r.r3)("ftruncate", e, {
                fd: ""
              }) && ("number" != typeof (e = Object.assign({}, e)).length && (e.length = 0), e.length = Math.floor(e.length), e.length < 0 && (e.length = 0), (0, r.IN)("ftruncate", e))
            },
            ftruncateSync: ({
              fd: e,
              length: t
            } = {}) => {
              if (!e || "string" != typeof e) throw new Error("fd must be a string");
              let n;
              if ("number" != typeof t && (t = 0), (t = Math.floor(t)) < 0 && (t = 0), (0, r.IN)("ftruncateSync", {
                  fd: e,
                  length: t,
                  fail(e) {
                    n = e.errMsg
                  }
                }), n) throw new Error(n)
            }
          };
          let P = "",
            T = "";
          l.Z.onReady((() => {
            try {
              P = l.Z.env.USER_DATA_PATH, T = l.Z.env.OPEN_DATA_PATH, delete l.Z.env.OPEN_DATA_PATH
            } catch (e) {}
          }));
          const x = {
              saveFile: ["filePath"],
              saveFileSync: [1],
              readFile: ["filePath"],
              readFileSync: [0],
              writeFile: ["filePath"],
              writeFileSync: [0],
              mkdir: ["dirPath"],
              mkdirSync: [0],
              rmdir: ["dirPath"],
              rmdirSync: [0],
              readdir: ["dirPath"],
              readdirSync: [0],
              access: ["path"],
              accessSync: [0],
              unlink: ["filePath"],
              unlinkSync: [0],
              stat: ["path"],
              statSync: [0],
              unzip: ["zipFilePath", "targetPath"],
              copyFile: ["srcPath", "destPath"],
              copyFileSync: [0, 1],
              rename: ["oldPath", "newPath"],
              renameSync: [0, 1],
              appendFile: ["filePath"],
              appendFileSync: [0]
            },
            M = e => {
              const t = {};
              return Object.keys(C).forEach((n => {
                const o = C[n];
                t[n] = (...t) => {
                  if (!x[n]) return o(...t);
                  if (x[n].every((o => ((e, t) => "string" != typeof e || !e.startsWith("wxfile://ad") && (!(0, k.isSinglePageMode)() || !e.startsWith("wxfile://usr") && !e.startsWith("http://usr")) && !e.startsWith("opendata" === t ? P : T))((n.endsWith("Sync") ? t : t[0])[o], e)))) return o(...t);
                  if (n.endsWith("Sync")) throw new Error(`${n}:fail permission denied`);
                  t = t[0] || {}, (0, r.YG)(n, t, "permission denied")
                }
              })), t
            },
            E = {
              app: M("app"),
              game: M("game"),
              opendata: M("opendata")
            };

          function O() {
            return T
          }
        },
        7255: (e, t, n) => {
          "use strict";
          n.d(t, {
            p: () => h,
            N: () => g
          });
          var o = n(1106),
            r = n(5014),
            a = n(6947),
            i = n(2582),
            s = n(665),
            c = n(2288),
            l = n(6077),
            u = n(7452),
            d = n(5260);
          const p = a.Z.fs;
          let f = !1;
          p && p.FileReader && s.Z.onReady((() => {
            let e = !1;
            const t = i.IS_IOS ? "clicfg_appbrand_ios_native_readfile" : "clicfg_appbrand_native_readfile";
            (0, c.b)({
              experimentId: t,
              experimentType: "Expt",
              success: t => {
                t && 1 === Number(t.testConfig) && ((0, l.T)(/readFile(?:Sync)?$/, 1), e = !0)
              },
              fail(e) {}
            });
            const n = (0, r.J)("bindingReadFile");
            f = e || n
          }));
          const h = (e = {}) => {
              if ((0, o.r3)("readFile", e, {
                  filePath: ""
                }))
                if ((0, u.o8)(e.encoding) || (0, u.HD)(e.encoding))
                  if ((0, u.o8)(e.position) || (0, u.hj)(e.position))
                    if ((0, u.o8)(e.length) || (0, u.hj)(e.length))
                      if (f) {
                        const t = new p.FileReader;
                        t.onerror = t => (0, o.YG)("readFile", e, t), t.onread = t => (0, o.FE)({
                          name: "readFile",
                          args: e,
                          res: {
                            data: t
                          }
                        }), t.read(e.filePath, e.encoding)
                      } else(0, o.IN)("readFile", e);
              else(0, o.YG)("readFile", e, `invalid length: ${e.length}`);
              else(0, o.YG)("readFile", e, `invalid position: ${e.position}`);
              else(0, o.YG)("readFile", e, `invalid encoding: ${e.encoding}`)
            },
            g = (e, t, n, r) => {
              if (!e || !(0, u.HD)(e)) throw new d.iZ(`invalid filePath: ${e}`);
              if (!(0, u.o8)(t) && !(0, u.HD)(t)) throw new d.iZ(`invalid encoding: ${t}`);
              if (!(0, u.o8)(n) && !(0, u.hj)(n)) throw new d.iZ(`invalid position: ${n}`);
              if (!(0, u.o8)(r) && !(0, u.hj)(r)) throw new d.iZ(`invalid length: ${r}`);
              if (f) try {
                return p.readFileSync(e, t)
              } catch (i) {
                throw new Error(i)
              }
              let a, i;
              if ((0, o.IN)("readFileSync", {
                  filePath: e,
                  encoding: t,
                  position: n,
                  length: r,
                  success(e) {
                    a = e.data
                  },
                  fail(e) {
                    i = e.errMsg
                  }
                }), i) throw new Error(i);
              return a
            }
        },
        9271: (e, t, n) => {
          "use strict";
          n.d(t, {
            k: () => a
          });
          var o = n(1106),
            r = n(1095);
          const a = ({
            api: e,
            url: t
          }) => (0, r.skipURLCheck)() ? Promise.resolve({
            isInDomainList: !0,
            isLocalHost: !1,
            isInLAN: !0
          }) : new Promise(((n, r) => {
            (0, o.IN)("checkNetworkAPIURL", {
              api: e,
              url: t,
              success: n,
              fail: r
            })
          }))
        },
        5189: (e, t, n) => {
          "use strict";
          n.d(t, {
            l: () => r
          });
          var o = n(6257);
          const r = () => o.ZP.game
        },
        7618: (e, t, n) => {
          "use strict";
          n.d(t, {
            L: () => a
          });
          var o = n(8159),
            r = n(5062);
          new o.Z;
          const a = {
            map: {},
            set(e) {
              const t = (0, r.M8)();
              return this.map[t] = e, t
            },
            get(e) {
              return e ? this.map[e] : Object.keys(this.map).map((e => this.map[e]))
            }
          }
        },
        1095: (e, t, n) => {
          "use strict";
          n.r(t), n.d(t, {
            surroundByTryCatchFactory: () => c,
            surroundWXByTryCatch: () => u,
            timeout: () => d,
            deepFreeze: () => p,
            EventEmitter: () => f,
            getDataLength: () => h,
            checkAPIAvailable: () => g,
            isGame: () => y,
            isApp: () => v,
            promisify: () => m,
            transformToCamelCaseVar: () => b,
            transformToUnderScoreCaseVar: () => _,
            capitalizeFirstLetter: () => w,
            skipURLCheck: () => I,
            versionCompare: () => S,
            executeOnlyOnce: () => A,
            filterObject: () => k,
            hideInnerRequest: () => C,
            isSinglePageMode: () => P,
            needHighlightTitleInSinglePage: () => T,
            canHideLaunchAppButtonInSinglePage: () => x,
            isIn3rdApp: () => M,
            isIsolateContext: () => E,
            compareClientVersion: () => O
          });
          var o = n(8159),
            r = n(665),
            a = n(3525),
            i = n(2582),
            s = n(7452);

          function c(e, t, n) {
            return function () {
              try {
                return e.apply(e, arguments)
              } catch (e) {
                if ("[object Error]" === Object.prototype.toString.apply(e)) {
                  if ("AppServiceSdkKnownError" === e.type) throw e;
                  "ThirdScriptError" === e.type ? Reporter.thirdErrorReport({
                    error: e,
                    extend: t
                  }) : Reporter.errorReport({
                    key: n,
                    error: e,
                    extend: t
                  })
                }
              }
            }
          }

          function l(e, t, n, o) {
            Object.defineProperty(e, n, {
              get() {
                const e = this;
                return "function" == typeof t[n] ? c((function () {
                  return (0, a.Fv)(n), (0, a.g9)(n, t[n]).apply(e, arguments)
                }), `wx.${n}`, o) : t[n]
              },
              enumerable: !0,
              configurable: !0
            })
          }
          const u = (e, t) => {
              const n = {};
              for (const o in e) l(n, e, o, t);
              return n
            },
            d = (e, t) => {
              const n = t.timeout;
              if ("number" != typeof n) return void e(t);
              let o = !1;
              const r = setTimeout((function () {
                  const e = {
                    errMsg: "request timeout"
                  };
                  o = !0, "function" == typeof t.fail && t.fail(e), "function" == typeof t.complete && t.complete(e)
                }), n),
                a = ["success", "fail", "complete"].reduce(((e, n) => (e[n] = e => {
                  o || (clearTimeout(r), "function" == typeof t[n] && t[n](e))
                }, e)), {});
              e(Object.assign({}, t, a))
            };

          function p(e) {
            return Object.freeze(e), Object.getOwnPropertyNames(e).forEach((function (t) {
              let n;
              try {
                n = e[t]
              } catch (e) {}
              "object" != typeof n && "function" != typeof n || Object.isFrozen(n) || p(n)
            })), e
          }
          class f {
            constructor(e = {
              maxListeners: 2e3
            }) {
              this.emitter = new o.Z(e), this.callbackMap = "undefined" != typeof WeakMap ? new WeakMap : {}, this.originalCallbackMap = new WeakMap
            }
            emit(e, t) {
              this.emitter.emit(e, t)
            }
            on(e, t) {
              if (t && "function" == typeof t) {
                const n = __errorTracer__.surroundThirdByTryCatch(t, `at ${e} callback function`);
                this.callbackMap.set(t, n), this.originalCallbackMap.set(n, t), this.emitter.on(e, n)
              }
            }
            off(e, t) {
              if (t && "function" == typeof t) {
                const n = this.callbackMap.get(t);
                this.emitter.off(e, n), this.callbackMap.delete(t), this.originalCallbackMap.delete(n)
              } else this.emitter.listeners(e).forEach((e => {
                const t = this.originalCallbackMap.get(e);
                this.callbackMap.delete(t), this.originalCallbackMap.delete(e)
              })), this.emitter.removeAllListeners(e)
            }
            listeners(e) {
              return this.emitter.listeners(e)
            }
          }

          function h(e) {
            return "string" == typeof e ? e.length : "object" == typeof e && null !== e && "number" == typeof e.byteLength ? e.byteLength : 0
          }

          function g(e) {
            let t = "unknown";
            if (r.Z.appContactInfo && r.Z.appContactInfo.operationInfo && r.Z.appContactInfo.operationInfo.jsonInfo && r.Z.appContactInfo.operationInfo.jsonInfo.apiAvailable) {
              const {
                apiAvailable: n
              } = r.Z.appContactInfo.operationInfo.jsonInfo;
              "number" == typeof n[e] && (t = 1 === n[e])
            }
            return t
          }

          function y() {
            return 4 === r.Z.appType
          }

          function v() {
            return 0 === r.Z.appType
          }

          function m(e) {
            return (t = {}) => new Promise(((n, o) => {
              e(Object.assign(t, {
                success: n,
                fail: o
              }))
            }))
          }

          function b(e) {
            return e.replace(/_+(\w)/g, (function () {
              return arguments[2] ? arguments[1].toUpperCase() : arguments[0]
            }))
          }

          function _(e) {
            return e.split(/(?=[A-Z])/).join("_").toLowerCase()
          }

          function w(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
          }

          function I() {
            return i.IS_DEVTOOLS ? !r.Z.urlCheck : !0 === r.Z.debug
          }

          function S(e, t) {
            const n = String(e).split(".").map((function (e) {
                return parseInt(e, 10)
              })),
              o = String(t).split(".").map((function (e) {
                return parseInt(e, 10)
              })),
              r = Math.max(n.length, o.length);
            let a;
            if (null != e && null != t) {
              if (0 === e.length && 0 === t.length) return 0;
              if (0 === e.length) return -1;
              if (0 === t.length) return 1;
              for (let e = 0; e < r && (a = i(n[e], o[e]), 0 === a); e++);
              return a
            }

            function i(e, t) {
              return "number" != typeof e && (e = 0), "number" != typeof t && (t = 0), e > t ? 1 : e < t ? -1 : 0
            }
            console.error("versionCompare()参数格式错误")
          }

          function A(e) {
            let t = !1;
            return function (...n) {
              if (!t) return t = !0, e(...n)
            }
          }

          function k(e, t) {
            return t.reduce(((t, n) => ((0, s.o8)(e[n]) || (t[n] = e[n]), t)), {})
          }

          function C(e) {
            if (!i.IS_DEVTOOLS || "string" != typeof e) return e;
            if (/^https?:\/\//.test(e)) {
              const t = e.split("?"),
                n = t[1] || "",
                o = n.length > 0 ? "&" : "";
              e = `${t[0]}?${n}${o}devtools_ignore=true`
            }
            return e
          }

          function P() {
            return r.Z.appLaunchInfo && "singlePage" === r.Z.appLaunchInfo.mode
          }

          function T() {
            var e;
            return 1 == (1 & ((null === (e = r.Z.appLaunchInfo) || void 0 === e ? void 0 : e.secFlagForSinglePageMode) || 0))
          }

          function x() {
            var e;
            const t = (null === (e = r.Z.appLaunchInfo) || void 0 === e ? void 0 : e.secFlagForSinglePageMode) || 0;
            return 1 == (1 & t) && !(2 == (2 & t))
          }

          function M() {
            const e = r.Z.host;
            return e && "WeChat" !== e.env && "WMPF" !== e.env
          }
          const E = function () {
            return r.Z.isIsolateContext
          };

          function O(e, t) {
            const n = function (e) {
              if ("string" == typeof e) {
                const t = e.split(".").map((e => parseInt(e, 10)));
                for (; t.length < 4;) t.push(0);
                return function (e) {
                  const t = e.length;
                  let n = 0;
                  for (let o = 0; o < t; ++o) n = n << 8 | e[o];
                  return n
                }(t.slice(0, 4))
              }
              return "number" == typeof e ? 268435455 & e : e
            };
            return (e = n(e)) > (t = n(t)) ? 1 : e < t ? -1 : 0
          }
        },
        43: (e, t, n) => {
          "use strict";
          n.r(t), n.d(t, {
            onMessage: () => a
          });
          var o = n(5389);
          const r = [],
            a = e => {
              r.push(e)
            };
          o.U.on("appServiceMessage", (e => {
            r.forEach((t => {
              "function" == typeof t && t(e)
            }))
          }))
        },
        8322: (e, t, n) => {
          "use strict";
          n.r(t), n.d(t, {
            _postMessage: () => o,
            postMessage: () => r
          });
          const o = e => {
              WeixinWorker.postMsgToAppService(e)
            },
            r = e => {
              o(e)
            }
        },
        4763: (e, t, n) => {
          "use strict";
          n.r(t);
          var o = n(5389);
          let r = null;
          r = WeixinWorker.WebAssembly;
          const a = n(6947).Z,
            i = n(7255).p,
            {
              IS_IOS: s,
              IS_ANDROID: c
            } = n(2582);
          WeixinWorker.WebAssembly ? r = WeixinWorker.WebAssembly : a.WebAssembly ? r = a.WebAssembly : "undefined" != typeof WebAssembly && (r = WebAssembly), r && (globalThis.WXWebAssembly = {
            Table: r.Table,
            Memory: r.Memory,
            Global: r.Global,
            Instance: r.Instance,
            instantiate(e, t) {
              const n = o.q.pluginId;
              return n && "string" == typeof e && (0 === e.indexOf(`__plugin__/${n}/`) || (e = `__plugin__/${n}/${e=e.replace(/^\//,"")}`)), "string" != typeof e ? Promise.reject(new Error("path must be a string")) : /^(wxfile|https?):/.test(e) ? Promise.reject(new Error("invalid file path")) : new Promise(((n, o) => {
                s || c ? n(r.instantiate(e, t)) : i({
                  filePath: e,
                  success(e) {
                    const o = r.instantiate(e.data, t);
                    n(Promise.resolve(o).then((e => e)))
                  },
                  fail(e) {
                    o({
                      errMsg: e.errMsg.replace("readFile", "WXWebAssembly.instantiate")
                    })
                  }
                })
              }))
            }
          })
        },
        6718: (e, t, n) => {
          "use strict";
          n.r(t);
          var o = n(8322),
            r = n(7452);
          const a = {
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

          function i(e) {
            const t = function (e) {
              const t = (0, r.Em)(e);
              if ("Number" === t) {
                if ((0, r.i2)(e)) return "NaN";
                if ((0, r.AT)(e)) return "Infinity"
              } else if ("Object" === t) {
                if ((0, r.Ft)(e)) return "Null"
              } else if (t.endsWith("Array") && "Array" !== t && (0, r.fU)(e)) return "TypedArray";
              return t
            }(e);
            return t in a ? a[t] ? (0, r.mf)(a[t]) ? [a[t](e), !0] : [a[t], !0] : [e, !0] : [null, !1]
          }

          function s(e) {
            const t = new WeakMap;
            let n = 0;
            return function e(o, a) {
              let s;
              const [c, l] = i(o);
              return l ? c : n > 3e3 ? "<Hidden>" : t.has(o) ? `<Circular: ${t.get(o)}>` : (t.set(o, a), n++, (0, r.kJ)(o) ? o.map(((t, n) => e(t, `${a}[${n}]`))) : (s = {}, Object.keys(o).forEach((t => {
                s[t] = e(o[t], `${a}.${t}`)
              })), s))
            }(e, "@")
          }

          function c(e) {
            try {
              return (e = Array.prototype.slice.call(e)).map(s)
            } catch (e) {
              return void console.warn("[console] This object can not be logged")
            }
          }
          const l = "log",
            u = "info",
            d = "warn",
            p = "error",
            f = "debug",
            h = "time",
            g = "timeEnd";
          var y = n(665);
          let v = () => {};
          v = function (e, t) {
            const n = function (e, t, n = !0) {
              if (!n && e !== d && e !== p) return;
              const o = c(t);
              return void 0 !== o ? {
                level: e,
                logs: o,
                __log__: !0
              } : void 0
            }(e, t, "devtools" === y.Z.platform || y.Z.debug);
            n && (0, o._postMessage)(n)
          }, globalThis.console = {
            log() {
              v(l, arguments)
            },
            info() {
              v(u, arguments)
            },
            warn() {
              v(d, arguments)
            },
            error() {
              v(p, arguments)
            },
            debug() {
              v(f, arguments)
            },
            time() {
              v(h, arguments)
            },
            timeEnd() {
              v(g, arguments)
            },
            group() {},
            groupEnd() {}
          }
        },
        9830: (e, t, n) => {
          "use strict";
          n.r(t);
          var o = n(5389);
          let r;
          const a = globalThis,
            i = function (e) {
              e && (void 0 === r && (r = a.require), e.startsWith("/") && (e = e.substring(1)), r(e))
            };
          var s = n(891);
          let c = 0;
          const l = {},
            u = {};
          if (!s.wxSAB.new) {
            let e = 0,
              t = 0;
            Object.assign(s.wxSAB, {
              new(t) {
                const n = ++e + c;
                return l[n] = t, WeixinWorker.postMsgToAppService({
                  __cmd__: "setSharedBuffer",
                  __buffer__: t,
                  __id__: n
                }, !1), n
              },
              get: e => l[e],
              destroy(e) {
                delete l[e]
              },
              Lock(e, n) {
                const o = ++t + c;
                return u[o] = n, WeixinWorker.postMsgToAppService({
                  __cmd__: "lockSharedBuffer",
                  __sid__: e,
                  __lid__: o
                }), o
              },
              Unlock(e, t) {
                WeixinWorker.postMsgToAppService({
                  __cmd__: "unlockSharedBuffer",
                  __sid__: e,
                  __lid__: t
                })
              }
            })
          }
          WeixinWorker.onAppServiceMsg((e => {
            e = WeixinNativeBuffer.unpack(e), (e = (0, s.unpackSharedArrayBuffer)(e)) && e.__cmd__ ? "requireScript" === e.__cmd__ ? (o.q.pluginId = e.__options__ && e.__options__.pluginId, c = Number(`.${e.__id__}`), i(e.__script__)) : "setSharedBuffer" === e.__cmd__ ? l[e.__id__] = e.__buffer__ : "lockSharedBuffer" === e.__cmd__ && "function" == typeof u[e.__lid__] && (u[e.__lid__](), delete u[e.__lid__]) : o.U.emit("appServiceMessage", e)
          })), WeixinWorker.onError((e => {
            "function" == typeof __wxSourceMapRetrace__ && (e = __wxSourceMapRetrace__(e)), console.error("thirdScriptError", "\n", "worker uncaught third Error", "\n", e.message, "\n", e.stack)
          })), WeixinWorker.onUnhandledRejection((e => {
            "function" == typeof __wxSourceMapRetrace__ && (e.reason = __wxSourceMapRetrace__(e.reason)), console.error("thirdScriptError", "\n", "worker uncaught third Error (in promise)", "\n", e.reason.message, "\n", e.reason.stack)
          }))
        },
        5389: (e, t, n) => {
          "use strict";
          n.d(t, {
            U: () => o,
            q: () => r
          });
          const o = new(n(8159).Z),
            r = {
              pluginId: ""
            }
        },
        2808: e => {
          "use strict";

          function t(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
          }
          e.exports = function (e, n, o, r) {
            n = n || "&", o = o || "=";
            var a = {};
            if ("string" != typeof e || 0 === e.length) return a;
            var i = /\+/g;
            e = e.split(n);
            var s = 1e3;
            r && "number" == typeof r.maxKeys && (s = r.maxKeys);
            var c = e.length;
            s > 0 && c > s && (c = s);
            for (var l = 0; l < c; ++l) {
              var u, d, p, f, h = e[l].replace(i, "%20"),
                g = h.indexOf(o);
              g >= 0 ? (u = h.substr(0, g), d = h.substr(g + 1)) : (u = h, d = ""), p = decodeURIComponent(u), f = decodeURIComponent(d), t(a, p) ? Array.isArray(a[p]) ? a[p].push(f) : a[p] = [a[p], f] : a[p] = f
            }
            return a
          }
        },
        1368: e => {
          "use strict";
          var t = function (e) {
            switch (typeof e) {
              case "string":
                return e;
              case "boolean":
                return e ? "true" : "false";
              case "number":
                return isFinite(e) ? e : "";
              default:
                return ""
            }
          };
          e.exports = function (e, n, o, r) {
            return n = n || "&", o = o || "=", null === e && (e = void 0), "object" == typeof e ? Object.keys(e).map((function (r) {
              var a = encodeURIComponent(t(r)) + o;
              return Array.isArray(e[r]) ? e[r].map((function (e) {
                return a + encodeURIComponent(t(e))
              })).join(n) : a + encodeURIComponent(t(e[r]))
            })).join(n) : r ? encodeURIComponent(t(r)) + o + encodeURIComponent(t(e)) : ""
          }
        },
        6642: (e, t, n) => {
          "use strict";
          t.decode = t.parse = n(2808), t.encode = t.stringify = n(1368)
        },
        9639: function (e, t, n) {
          var o;
          e = n.nmd(e),
            function (r) {
              t && t.nodeType, e && e.nodeType;
              var a = "object" == typeof n.g && n.g;
              a.global !== a && a.window !== a && a.self;
              var i, s = 2147483647,
                c = 36,
                l = /^xn--/,
                u = /[^\x20-\x7E]/,
                d = /[\x2E\u3002\uFF0E\uFF61]/g,
                p = {
                  overflow: "Overflow: input needs wider integers to process",
                  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                  "invalid-input": "Invalid input"
                },
                f = Math.floor,
                h = String.fromCharCode;

              function g(e) {
                throw RangeError(p[e])
              }

              function y(e, t) {
                for (var n = e.length, o = []; n--;) o[n] = t(e[n]);
                return o
              }

              function v(e, t) {
                var n = e.split("@"),
                  o = "";
                return n.length > 1 && (o = n[0] + "@", e = n[1]), o + y((e = e.replace(d, ".")).split("."), t).join(".")
              }

              function m(e) {
                for (var t, n, o = [], r = 0, a = e.length; r < a;)(t = e.charCodeAt(r++)) >= 55296 && t <= 56319 && r < a ? 56320 == (64512 & (n = e.charCodeAt(r++))) ? o.push(((1023 & t) << 10) + (1023 & n) + 65536) : (o.push(t), r--) : o.push(t);
                return o
              }

              function b(e) {
                return y(e, (function (e) {
                  var t = "";
                  return e > 65535 && (t += h((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += h(e)
                })).join("")
              }

              function _(e, t) {
                return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
              }

              function w(e, t, n) {
                var o = 0;
                for (e = n ? f(e / 700) : e >> 1, e += f(e / t); e > 455; o += c) e = f(e / 35);
                return f(o + 36 * e / (e + 38))
              }

              function I(e) {
                var t, n, o, r, a, i, l, u, d, p, h, y = [],
                  v = e.length,
                  m = 0,
                  _ = 128,
                  I = 72;
                for ((n = e.lastIndexOf("-")) < 0 && (n = 0), o = 0; o < n; ++o) e.charCodeAt(o) >= 128 && g("not-basic"), y.push(e.charCodeAt(o));
                for (r = n > 0 ? n + 1 : 0; r < v;) {
                  for (a = m, i = 1, l = c; r >= v && g("invalid-input"), ((u = (h = e.charCodeAt(r++)) - 48 < 10 ? h - 22 : h - 65 < 26 ? h - 65 : h - 97 < 26 ? h - 97 : c) >= c || u > f((s - m) / i)) && g("overflow"), m += u * i, !(u < (d = l <= I ? 1 : l >= I + 26 ? 26 : l - I)); l += c) i > f(s / (p = c - d)) && g("overflow"), i *= p;
                  I = w(m - a, t = y.length + 1, 0 == a), f(m / t) > s - _ && g("overflow"), _ += f(m / t), m %= t, y.splice(m++, 0, _)
                }
                return b(y)
              }

              function S(e) {
                var t, n, o, r, a, i, l, u, d, p, y, v, b, I, S, A = [];
                for (v = (e = m(e)).length, t = 128, n = 0, a = 72, i = 0; i < v; ++i)(y = e[i]) < 128 && A.push(h(y));
                for (o = r = A.length, r && A.push("-"); o < v;) {
                  for (l = s, i = 0; i < v; ++i)(y = e[i]) >= t && y < l && (l = y);
                  for (l - t > f((s - n) / (b = o + 1)) && g("overflow"), n += (l - t) * b, t = l, i = 0; i < v; ++i)
                    if ((y = e[i]) < t && ++n > s && g("overflow"), y == t) {
                      for (u = n, d = c; !(u < (p = d <= a ? 1 : d >= a + 26 ? 26 : d - a)); d += c) S = u - p, I = c - p, A.push(h(_(p + S % I, 0))), u = f(S / I);
                      A.push(h(_(u, 0))), a = w(n, b, o == r), n = 0, ++o
                    }++ n, ++t
                }
                return A.join("")
              }
              i = {
                version: "1.3.2",
                ucs2: {
                  decode: m,
                  encode: b
                },
                decode: I,
                encode: S,
                toASCII: function (e) {
                  return v(e, (function (e) {
                    return u.test(e) ? "xn--" + S(e) : e
                  }))
                },
                toUnicode: function (e) {
                  return v(e, (function (e) {
                    return l.test(e) ? I(e.slice(4).toLowerCase()) : e
                  }))
                }
              }, void 0 === (o = function () {
                return i
              }.call(t, n, t, e)) || (e.exports = o)
            }()
        },
        883: (e, t, n) => {
          "use strict";
          var o = n(9639),
            r = n(5225);

          function a() {
            this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
          }
          var i = /^([a-z0-9.+-]+:)/i,
            s = /:[0-9]*$/,
            c = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
            l = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
            u = ["'"].concat(l),
            d = ["%", "/", "?", ";", "#"].concat(u),
            p = ["/", "?", "#"],
            f = /^[+a-z0-9A-Z_-]{0,63}$/,
            h = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
            g = {
              javascript: !0,
              "javascript:": !0
            },
            y = {
              javascript: !0,
              "javascript:": !0
            },
            v = {
              http: !0,
              https: !0,
              ftp: !0,
              gopher: !0,
              file: !0,
              "http:": !0,
              "https:": !0,
              "ftp:": !0,
              "gopher:": !0,
              "file:": !0
            },
            m = n(6642);

          function b(e, t, n) {
            if (e && r.isObject(e) && e instanceof a) return e;
            var o = new a;
            return o.parse(e, t, n), o
          }
          a.prototype.parse = function (e, t, n) {
            if (!r.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
            var a = e.indexOf("?"),
              s = -1 !== a && a < e.indexOf("#") ? "?" : "#",
              l = e.split(s);
            l[0] = l[0].replace(/\\/g, "/");
            var b = e = l.join(s);
            if (b = b.trim(), !n && 1 === e.split("#").length) {
              var _ = c.exec(b);
              if (_) return this.path = b, this.href = b, this.pathname = _[1], _[2] ? (this.search = _[2], this.query = t ? m.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
            }
            var w = i.exec(b);
            if (w) {
              var I = (w = w[0]).toLowerCase();
              this.protocol = I, b = b.substr(w.length)
            }
            if (n || w || b.match(/^\/\/[^@\/]+@[^@\/]+/)) {
              var S = "//" === b.substr(0, 2);
              !S || w && y[w] || (b = b.substr(2), this.slashes = !0)
            }
            if (!y[w] && (S || w && !v[w])) {
              for (var A, k, C = -1, P = 0; P < p.length; P++) {
                -1 !== (T = b.indexOf(p[P])) && (-1 === C || T < C) && (C = T)
              } - 1 !== (k = -1 === C ? b.lastIndexOf("@") : b.lastIndexOf("@", C)) && (A = b.slice(0, k), b = b.slice(k + 1), this.auth = decodeURIComponent(A)), C = -1;
              for (P = 0; P < d.length; P++) {
                var T; - 1 !== (T = b.indexOf(d[P])) && (-1 === C || T < C) && (C = T)
              } - 1 === C && (C = b.length), this.host = b.slice(0, C), b = b.slice(C), this.parseHost(), this.hostname = this.hostname || "";
              var x = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
              if (!x)
                for (var M = this.hostname.split(/\./), E = (P = 0, M.length); P < E; P++) {
                  var O = M[P];
                  if (O && !O.match(f)) {
                    for (var L = "", D = 0, B = O.length; D < B; D++) O.charCodeAt(D) > 127 ? L += "x" : L += O[D];
                    if (!L.match(f)) {
                      var R = M.slice(0, P),
                        N = M.slice(P + 1),
                        F = O.match(h);
                      F && (R.push(F[1]), N.unshift(F[2])), N.length && (b = "/" + N.join(".") + b), this.hostname = R.join(".");
                      break
                    }
                  }
                }
              this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), x || (this.hostname = o.toASCII(this.hostname));
              var W = this.port ? ":" + this.port : "",
                j = this.hostname || "";
              this.host = j + W, this.href += this.host, x && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== b[0] && (b = "/" + b))
            }
            if (!g[I])
              for (P = 0, E = u.length; P < E; P++) {
                var $ = u[P];
                if (-1 !== b.indexOf($)) {
                  var V = encodeURIComponent($);
                  V === $ && (V = escape($)), b = b.split($).join(V)
                }
              }
            var Z = b.indexOf("#"); - 1 !== Z && (this.hash = b.substr(Z), b = b.slice(0, Z));
            var U = b.indexOf("?");
            if (-1 !== U ? (this.search = b.substr(U), this.query = b.substr(U + 1), t && (this.query = m.parse(this.query)), b = b.slice(0, U)) : t && (this.search = "", this.query = {}), b && (this.pathname = b), v[I] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
              W = this.pathname || "";
              var G = this.search || "";
              this.path = W + G
            }
            return this.href = this.format(), this
          }, a.prototype.format = function () {
            var e = this.auth || "";
            e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
            var t = this.protocol || "",
              n = this.pathname || "",
              o = this.hash || "",
              a = !1,
              i = "";
            this.host ? a = e + this.host : this.hostname && (a = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (a += ":" + this.port)), this.query && r.isObject(this.query) && Object.keys(this.query).length && (i = m.stringify(this.query));
            var s = this.search || i && "?" + i || "";
            return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || v[t]) && !1 !== a ? (a = "//" + (a || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : a || (a = ""), o && "#" !== o.charAt(0) && (o = "#" + o), s && "?" !== s.charAt(0) && (s = "?" + s), t + a + (n = n.replace(/[?#]/g, (function (e) {
              return encodeURIComponent(e)
            }))) + (s = s.replace("#", "%23")) + o
          }, a.prototype.resolve = function (e) {
            return this.resolveObject(b(e, !1, !0)).format()
          }, a.prototype.resolveObject = function (e) {
            if (r.isString(e)) {
              var t = new a;
              t.parse(e, !1, !0), e = t
            }
            for (var n = new a, o = Object.keys(this), i = 0; i < o.length; i++) {
              var s = o[i];
              n[s] = this[s]
            }
            if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
            if (e.slashes && !e.protocol) {
              for (var c = Object.keys(e), l = 0; l < c.length; l++) {
                var u = c[l];
                "protocol" !== u && (n[u] = e[u])
              }
              return v[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n
            }
            if (e.protocol && e.protocol !== n.protocol) {
              if (!v[e.protocol]) {
                for (var d = Object.keys(e), p = 0; p < d.length; p++) {
                  var f = d[p];
                  n[f] = e[f]
                }
                return n.href = n.format(), n
              }
              if (n.protocol = e.protocol, e.host || y[e.protocol]) n.pathname = e.pathname;
              else {
                for (var h = (e.pathname || "").split("/"); h.length && !(e.host = h.shift()););
                e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== h[0] && h.unshift(""), h.length < 2 && h.unshift(""), n.pathname = h.join("/")
              }
              if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
                var g = n.pathname || "",
                  m = n.search || "";
                n.path = g + m
              }
              return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
            }
            var b = n.pathname && "/" === n.pathname.charAt(0),
              _ = e.host || e.pathname && "/" === e.pathname.charAt(0),
              w = _ || b || n.host && e.pathname,
              I = w,
              S = n.pathname && n.pathname.split("/") || [],
              A = (h = e.pathname && e.pathname.split("/") || [], n.protocol && !v[n.protocol]);
            if (A && (n.hostname = "", n.port = null, n.host && ("" === S[0] ? S[0] = n.host : S.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === h[0] ? h[0] = e.host : h.unshift(e.host)), e.host = null), w = w && ("" === h[0] || "" === S[0])), _) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, S = h;
            else if (h.length) S || (S = []), S.pop(), S = S.concat(h), n.search = e.search, n.query = e.query;
            else if (!r.isNullOrUndefined(e.search)) {
              if (A) n.hostname = n.host = S.shift(), (x = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = x.shift(), n.host = n.hostname = x.shift());
              return n.search = e.search, n.query = e.query, r.isNull(n.pathname) && r.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
            }
            if (!S.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
            for (var k = S.slice(-1)[0], C = (n.host || e.host || S.length > 1) && ("." === k || ".." === k) || "" === k, P = 0, T = S.length; T >= 0; T--) "." === (k = S[T]) ? S.splice(T, 1) : ".." === k ? (S.splice(T, 1), P++) : P && (S.splice(T, 1), P--);
            if (!w && !I)
              for (; P--; P) S.unshift("..");
            !w || "" === S[0] || S[0] && "/" === S[0].charAt(0) || S.unshift(""), C && "/" !== S.join("/").substr(-1) && S.push("");
            var x, M = "" === S[0] || S[0] && "/" === S[0].charAt(0);
            A && (n.hostname = n.host = M ? "" : S.length ? S.shift() : "", (x = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = x.shift(), n.host = n.hostname = x.shift()));
            return (w = w || n.host && S.length) && !M && S.unshift(""), S.length ? n.pathname = S.join("/") : (n.pathname = null, n.path = null), r.isNull(n.pathname) && r.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n
          }, a.prototype.parseHost = function () {
            var e = this.host,
              t = s.exec(e);
            t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
          }
        },
        5225: e => {
          "use strict";
          e.exports = {
            isString: function (e) {
              return "string" == typeof e
            },
            isObject: function (e) {
              return "object" == typeof e && null !== e
            },
            isNull: function (e) {
              return null === e
            },
            isNullOrUndefined: function (e) {
              return null == e
            }
          }
        },
        2102: e => {
          "use strict";
          e.exports = BabelRuntimeHelpers.applyDecoratedDescriptor
        },
        1503: e => {
          "use strict";
          e.exports = BabelRuntimeHelpers.objectSpread2
        }
      },
      t = {};

    function n(o) {
      var r = t[o];
      if (void 0 !== r) return r.exports;
      var a = t[o] = {
        id: o,
        loaded: !1,
        exports: {}
      };
      return e[o].call(a.exports, a, a.exports, n), a.loaded = !0, a.exports
    }
    n.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, {
        a: t
      }), t
    }, n.d = (e, t) => {
      for (var o in t) n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {
        enumerable: !0,
        get: t[o]
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
    }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e);
    var o = {};
    (() => {
      var e = o;
      n(6718), n(9830), n(4763);
      const {
        onMessage: t
      } = n(43), {
        postMessage: r
      } = n(8322), {
        createSharedArrayBuffer: a
      } = n(891);
      if (!0 === Foundation.env.isSupportWorkerAPI) {
        const t = n(5189).l,
          o = n(2142).l,
          {
            request: r,
            downloadFile: a,
            uploadFile: i,
            socket: s
          } = n(2953),
          {
            isGame: c
          } = n(1095),
          l = n(665).Z,
          {
            createInnerAudioContext: u
          } = n(8142),
          {
            connectSocket: d
          } = s;
        e.connectSocket = d, e.request = r, e.downloadFile = a, e.uploadFile = i, e.createInnerAudioContext = u, l.onReady((() => {
          c() ? e.getFileSystemManager = t : e.getFileSystemManager = o
        }))
      }
      if (!0 === Foundation.env.isWXLibWorker) {
        const e = n(665).Z;
        n.g.__safeway__ = __safeway__, n.g.wxNativeConsole = wxNativeConsole, n.g.Reporter = Reporter, n.g.__errorTracer__ = __errorTracer__, n.g.WXConfig = e, n.g.wxConsole = wxConsole
      }
      Protect.hijack(), e.onMessage = t, e.postMessage = r, e.createSharedArrayBuffer = a
    })(), worker = o
  })(),
  function (e) {
    var t = {},
      n = {};
    define = function (e, n) {
      if (t[e] && t[e].factory) {
        var o = t[e],
          r = n.toString();
        o.factoryString || (o.factoryString = o.factory.toString()), r !== o.factoryString && (t[e] = {
          status: 1,
          factory: n,
          factoryString: r
        })
      } else t[e] = {
        status: 1,
        factory: n
      }
    };
    var o = function (e) {
        if (e && __wxConfig.subPackages)
          for (var t = 0, n = __wxConfig.subPackages.length; t < n; t++)
            if (0 === e.indexOf(__wxConfig.subPackages[t].root)) return __wxConfig.subPackages[t]
      },
      r = function (e) {
        for (var t = [], n = e.split("/"), o = 0, r = n.length; o < r; ++o) {
          var a = n[o];
          if ("" != a && "." != a)
            if (".." == a) {
              if (0 == t.length) {
                t = null;
                break
              }
              t.pop()
            } else o + 1 < r && ".." == n[o + 1] ? o++ : t.push(a)
        }
        return t
      },
      a = function (e) {
        var n = r(e + "/index.js").join("/");
        return t[n] ? n : (n = r(e).join("/"), /\.js$/.test(n) || (n += ".js"), t[n] ? n : "")
      },
      i = ["wx0354ba48aadc0ab2", "wxfa43a4a7041a84de"];
    var s = function (e) {
      var n = function (e) {
          var t = e.match(/(.*)\/([^/]+)?$/);
          return t && t[1] ? t[1] : "./"
        }(e),
        i = function (i, s) {
          if ("string" != typeof i) throw new Error("require args must be a string");
          var c = r(n + "/" + i);
          if ("/__wx__/private-api" === i && (c = r(i)), !c) throw new Error("can not find module : " + i);
          try {
            var l = c.join("/");
            l = function (e, n, o) {
              var i = e;
              if (/\.js$/.test(i) || (i += ".js"), "string" == typeof i && t[i]) return i;
              var s = r(n);
              if (!s) throw new Error("can not find module : " + o);
              for (var c, l = e.substring(s.join("/").length); s.length;) {
                var u = s.join("/") + "/miniprogram_npm" + l;
                if (c = a(u)) break;
                s.pop()
              }
              return c || (l = "/" === l[0] ? l : "/" + l, c = a(u = "miniprogram_npm" + l)), c || e
            }(l, n, i);
            var u = function (e) {
              return "functional-pages" === r(e)[0]
            };
            if (u(l) !== u(e) && Reporter.thirdErrorReport({
                error: new Error('should not require across "functional-pages" folder'),
                extend: 'at require("' + i + '") in ' + e
              }), "devtools" === __wxConfig.platform && __wxConfig.subPackages && void 0 === s) {
              var d = o(l),
                p = o(e);
              if (d && d !== p) throw new Error("should not require " + i + " in " + e + " without a callback, because they are in diffrent subPackages")
            }
            return require(l, void 0, s)
          } catch (e) {
            throw e
          }
        };
      return i.async = function (e) {
        return new Promise((function (t, n) {
          try {
            i(e, (function (e) {
              t(e)
            }))
          } catch (e) {
            n(e)
          }
        }))
      }, i
    };
    require = function (o, r, a) {
      if (void 0 === r && (r = !0), "string" != typeof o) throw new Error("require args must be a string");
      var c = t[o];
      if (!c) {
        var l = -1 === o.indexOf("/") ? o + "/index.js" : o;
        /\.js$/.test(l = "miniprogram_npm/" + l) || (l += ".js"), c = t[l]
      }
      if (o.endsWith(".js") || (o += ".js"), !c && "devtools" !== __wxConfig.platform && "undefined" != typeof __subContextEngine__) {
        var u = "/" + o.substr(0, o.length - 3) + ".appservice.js",
          d = {
            __wxRoute: e.__wxRoute,
            __wxAppCurrentFile__: e.__wxAppCurrentFile__,
            __wxRouteBegin: e.__wxRouteBegin
          };
        __subContextEngine__.loadJsFiles([u]),
          function (t) {
            e.__wxRoute = t.__wxRoute, e.__wxAppCurrentFile__ = t.__wxAppCurrentFile__, e.__wxRouteBegin = t.__wxRouteBegin
          }(d), c = t[o]
      }
      if ("function" != typeof a) {
        if (!c) throw new Error('module "' + o + '" is not defined');
        var p = {
            exports: {}
          },
          f = c.factory;
        if (!r || n[o]) return delete c.exports, c.status = 1, n[o] = !0, f && f(s(o), p, p.exports), p.exports;
        if (1 === c.status) {
          c.exports = p.exports, c.status = 2;
          var h = void 0;
          try {
            f && (h = f(s(o), p, p.exports))
          } catch (e) {
            throw c.status = 1, e
          }
          c.exports = void 0 !== p.exports ? p.exports : h
        }
        return c.exports
      }
      c ? setTimeout((function () {
        a(require(o))
      })) : function (e, t) {
        var n = "__APP__" === e;
        "/" !== e.slice(-1) && (e += "/"), "devtools" === __wxConfig.platform ? (wxNativeConsole.info("[WebNode] injectSubPackages: " + e), WeixinJSBridge.invoke("injectSubPackages", {
          subPackages: [e]
        }, t)) : (wxNativeConsole.info("[WebNode] loadSubpackage: " + e), __appServiceSDK__.loadSubpackage({
          name: e,
          success: function () {
            var o = __wxConfig.subPackages.find((function (t) {
                return t.root === e
              })),
              r = Object.keys(o.plugins || {}).map((function (e) {
                var t = o.plugins[e].provider,
                  n = "__plugin__/" + t;
                return {
                  plugin_id: t,
                  prefix_path: i.includes(t) ? null : n
                }
              }));
            __subContextEngine__.injectEntryFile(n ? "" : e, r), t()
          }
        }))
      }(function (e) {
        var t = __wxConfig && __wxConfig.subPackages;
        t || (t = []);
        for (var n = 0; n < t.length; ++n) {
          var o = t[n].root || "";
          if (o && "/" !== o.slice(-1) && (o += "/"), e.slice(0, o.length) === o) return o
        }
        return "__APP__"
      }(o), (function () {
        a(require(o))
      }))
    }, requireOnce = function (e) {
      return require(e, !1)
    }, e.__modules__ = t
  }(this);
  var requireMiniProgramFile = require,
    defineMiniProgramFile = define;;
  if (__wxConfig.platform !== "devtools") {
    var r = {};
    Object.keys(regeneratorRuntime).forEach((function (e) {
      Object.defineProperty(r, e, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return regeneratorRuntime[e]
        },
        set: function (t) {
          return delete r[e], r[e] = t
        }
      })
    })), global.regeneratorRuntime = r;
  };;
  global.worker = worker;
})(this);
typeof __wxLibrary.onEnd === 'function' && __wxLibrary.onEnd();
__wxLibrary = undefined;