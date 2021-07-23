var __wxLibrary = {
  fileName: 'WAGameSubContext.js',
  envType: 'Service',
  contextType: 'Game:SubContext',
  execStart: Date.now()
};
var __WASubContextStartTime__ = Date.now();
(function (global) {
  var __clientsubcontext = true;;
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
  var Reporter = Reporter;
  var regeneratorRuntime, BabelRuntimeHelpers = {};
  (() => {
    var e = {
        1964: (e, t, n) => {
          "use strict";

          function r(e, t, n, r, o) {
            var i = {};
            return Object.keys(r).forEach((function (e) {
              i[e] = r[e]
            })), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = n.slice().reverse().reduce((function (n, r) {
              return r(e, t, n) || n
            }), i), o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
          }
          n.r(t), n.d(t, {
            default: () => r
          })
        },
        6470: (e, t, n) => {
          "use strict";

          function r(e, t, n, r, o, i, a) {
            try {
              var s = e[i](a),
                c = s.value
            } catch (e) {
              return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, o)
          }

          function o(e) {
            return function () {
              var t = this,
                n = arguments;
              return new Promise((function (o, i) {
                var a = e.apply(t, n);

                function s(e) {
                  r(a, o, i, s, c, "next", e)
                }

                function c(e) {
                  r(a, o, i, s, c, "throw", e)
                }
                s(void 0)
              }))
            }
          }
          n.r(t), n.d(t, {
            default: () => o
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

          function i(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2 ? o(Object(n), !0).forEach((function (t) {
                r(e, t, n[t])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              }))
            }
            return e
          }
          n.r(t), n.d(t, {
            default: () => i
          })
        },
        5238: (e, t, n) => {
          "use strict";

          function r(e, t) {
            if (null == e) return {};
            var n, r, o = function (e, t) {
              if (null == e) return {};
              var n, r, o = {},
                i = Object.keys(e);
              for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
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

          function o(e) {
            var t = i(e);
            return n(t)
          }

          function i(e) {
            if (!n.o(r, e)) {
              var t = new Error("Cannot find module '" + e + "'");
              throw t.code = "MODULE_NOT_FOUND", t
            }
            return r[e]
          }
          o.keys = function () {
            return Object.keys(r)
          }, o.resolve = i, e.exports = o, o.id = 5551
        },
        5396: e => {
          var t = function (e) {
            "use strict";
            var t, n = Object.prototype,
              r = n.hasOwnProperty,
              o = "function" == typeof Symbol ? Symbol : {},
              i = o.iterator || "@@iterator",
              a = o.asyncIterator || "@@asyncIterator",
              s = o.toStringTag || "@@toStringTag";

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

            function u(e, t, n, r) {
              var o = t && t.prototype instanceof y ? t : y,
                i = Object.create(o.prototype),
                a = new T(r || []);
              return i._invoke = function (e, t, n) {
                var r = f;
                return function (o, i) {
                  if (r === d) throw new Error("Generator is already running");
                  if (r === g) {
                    if ("throw" === o) throw i;
                    return P()
                  }
                  for (n.method = o, n.arg = i;;) {
                    var a = n.delegate;
                    if (a) {
                      var s = C(a, n);
                      if (s) {
                        if (s === h) continue;
                        return s
                      }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                      if (r === f) throw r = g, n.arg;
                      n.dispatchException(n.arg)
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    r = d;
                    var c = l(e, t, n);
                    if ("normal" === c.type) {
                      if (r = n.done ? g : p, c.arg === h) continue;
                      return {
                        value: c.arg,
                        done: n.done
                      }
                    }
                    "throw" === c.type && (r = g, n.method = "throw", n.arg = c.arg)
                  }
                }
              }(e, n, a), i
            }

            function l(e, t, n) {
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
            e.wrap = u;
            var f = "suspendedStart",
              p = "suspendedYield",
              d = "executing",
              g = "completed",
              h = {};

            function y() {}

            function v() {}

            function _() {}
            var b = {};
            b[i] = function () {
              return this
            };
            var m = Object.getPrototypeOf,
              w = m && m(m(k([])));
            w && w !== n && r.call(w, i) && (b = w);
            var x = _.prototype = y.prototype = Object.create(b);

            function S(e) {
              ["next", "throw", "return"].forEach((function (t) {
                c(e, t, (function (e) {
                  return this._invoke(t, e)
                }))
              }))
            }

            function O(e, t) {
              function n(o, i, a, s) {
                var c = l(e[o], e, i);
                if ("throw" !== c.type) {
                  var u = c.arg,
                    f = u.value;
                  return f && "object" == typeof f && r.call(f, "__await") ? t.resolve(f.__await).then((function (e) {
                    n("next", e, a, s)
                  }), (function (e) {
                    n("throw", e, a, s)
                  })) : t.resolve(f).then((function (e) {
                    u.value = e, a(u)
                  }), (function (e) {
                    return n("throw", e, a, s)
                  }))
                }
                s(c.arg)
              }
              var o;
              this._invoke = function (e, r) {
                function i() {
                  return new t((function (t, o) {
                    n(e, r, t, o)
                  }))
                }
                return o = o ? o.then(i, i) : i()
              }
            }

            function C(e, n) {
              var r = e.iterator[n.method];
              if (r === t) {
                if (n.delegate = null, "throw" === n.method) {
                  if (e.iterator.return && (n.method = "return", n.arg = t, C(e, n), "throw" === n.method)) return h;
                  n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return h
              }
              var o = l(r, e.iterator, n.arg);
              if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, h;
              var i = o.arg;
              return i ? i.done ? (n[e.resultName] = i.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, h) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, h)
            }

            function A(e) {
              var t = {
                tryLoc: e[0]
              };
              1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function E(e) {
              var t = e.completion || {};
              t.type = "normal", delete t.arg, e.completion = t
            }

            function T(e) {
              this.tryEntries = [{
                tryLoc: "root"
              }], e.forEach(A, this), this.reset(!0)
            }

            function k(e) {
              if (e) {
                var n = e[i];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                  var o = -1,
                    a = function n() {
                      for (; ++o < e.length;)
                        if (r.call(e, o)) return n.value = e[o], n.done = !1, n;
                      return n.value = t, n.done = !0, n
                    };
                  return a.next = a
                }
              }
              return {
                next: P
              }
            }

            function P() {
              return {
                value: t,
                done: !0
              }
            }
            return v.prototype = x.constructor = _, _.constructor = v, v.displayName = c(_, s, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
            }, e.mark = function (e) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(e, _) : (e.__proto__ = _, c(e, s, "GeneratorFunction")), e.prototype = Object.create(x), e
            }, e.awrap = function (e) {
              return {
                __await: e
              }
            }, S(O.prototype), O.prototype[a] = function () {
              return this
            }, e.AsyncIterator = O, e.async = function (t, n, r, o, i) {
              void 0 === i && (i = Promise);
              var a = new O(u(t, n, r, o), i);
              return e.isGeneratorFunction(n) ? a : a.next().then((function (e) {
                return e.done ? e.value : a.next()
              }))
            }, S(x), c(x, s, "Generator"), x[i] = function () {
              return this
            }, x.toString = function () {
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
            }, e.values = k, T.prototype = {
              constructor: T,
              reset: function (e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(E), !e)
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

                function o(r, o) {
                  return s.type = "throw", s.arg = e, n.next = r, o && (n.method = "next", n.arg = t), !!o
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    s = a.completion;
                  if ("root" === a.tryLoc) return o("end");
                  if (a.tryLoc <= this.prev) {
                    var c = r.call(a, "catchLoc"),
                      u = r.call(a, "finallyLoc");
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
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var o = this.tryEntries[n];
                  if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break
                  }
                }
                i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, h) : this.complete(a)
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), E(n), h
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var o = r.arg;
                      E(n)
                    }
                    return o
                  }
                }
                throw new Error("illegal catch attempt")
              },
              delegateYield: function (e, n, r) {
                return this.delegate = {
                  iterator: k(e),
                  resultName: n,
                  nextLoc: r
                }, "next" === this.method && (this.arg = t), h
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
            o = n(3718),
            i = n(6541),
            a = n(5353),
            s = i.data,
            c = i.normalize,
            u = "USE_FUNCTION_CONSTRUCTOR",
            l = "AsyncIteratorPrototype",
            f = function (e, t) {
              if (o(e))
                for (var n = 0; n < e.length; n++) s[c(e[n])] = t
            };
          e.exports = function (e) {
            "object" == typeof e && (f(e.useNative, i.NATIVE), f(e.usePolyfill, i.POLYFILL), f(e.useFeatureDetection, null), r(e, u) && (a.USE_FUNCTION_CONSTRUCTOR = !!e.USE_FUNCTION_CONSTRUCTOR), r(e, l) && (a.USE_FUNCTION_CONSTRUCTOR = e.AsyncIteratorPrototype))
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
            o = n(2391),
            i = n(1787),
            a = r("unscopables"),
            s = Array.prototype;
          null == s[a] && i.f(s, a, {
            configurable: !0,
            value: o(null)
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
          var r, o = n(3339),
            i = n(7400),
            a = n(9859),
            s = n(5052),
            c = n(816),
            u = n(1589),
            l = n(5762),
            f = n(7487),
            p = n(1787).f,
            d = n(7567),
            g = n(6540),
            h = n(95),
            y = n(1441),
            v = a.Int8Array,
            _ = v && v.prototype,
            b = a.Uint8ClampedArray,
            m = b && b.prototype,
            w = v && d(v),
            x = _ && d(_),
            S = Object.prototype,
            O = S.isPrototypeOf,
            C = h("toStringTag"),
            A = y("TYPED_ARRAY_TAG"),
            E = o && !!g && "Opera" !== u(a.opera),
            T = !1,
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
            P = {
              BigInt64Array: 8,
              BigUint64Array: 8
            },
            j = function (e) {
              if (!s(e)) return !1;
              var t = u(e);
              return c(k, t) || c(P, t)
            };
          for (r in k) a[r] || (E = !1);
          if ((!E || "function" != typeof w || w === Function.prototype) && (w = function () {
              throw TypeError("Incorrect invocation")
            }, E))
            for (r in k) a[r] && g(a[r], w);
          if ((!E || !x || x === S) && (x = w.prototype, E))
            for (r in k) a[r] && g(a[r].prototype, x);
          if (E && d(m) !== x && g(m, x), i && !c(x, C))
            for (r in T = !0, p(x, C, {
                get: function () {
                  return s(this) ? this[A] : void 0
                }
              }), k) a[r] && l(a[r], A, r);
          e.exports = {
            NATIVE_ARRAY_BUFFER_VIEWS: E,
            TYPED_ARRAY_TAG: T && A,
            aTypedArray: function (e) {
              if (j(e)) return e;
              throw TypeError("Target is not a typed array")
            },
            aTypedArrayConstructor: function (e) {
              if (g) {
                if (O.call(w, e)) return e
              } else
                for (var t in k)
                  if (c(k, r)) {
                    var n = a[t];
                    if (n && (e === n || O.call(n, e))) return e
                  } throw TypeError("Target is not a typed array constructor")
            },
            exportTypedArrayMethod: function (e, t, n) {
              if (i) {
                if (n)
                  for (var r in k) {
                    var o = a[r];
                    if (o && c(o.prototype, e)) try {
                      delete o.prototype[e]
                    } catch (e) {}
                  }
                x[e] && !n || f(x, e, n ? t : E && _[e] || t)
              }
            },
            exportTypedArrayStaticMethod: function (e, t, n) {
              var r, o;
              if (i) {
                if (g) {
                  if (n)
                    for (r in k)
                      if ((o = a[r]) && c(o, e)) try {
                        delete o[e]
                      } catch (e) {}
                  if (w[e] && !n) return;
                  try {
                    return f(w, e, n ? t : E && w[e] || t)
                  } catch (e) {}
                }
                for (r in k) !(o = a[r]) || o[e] && !n || f(o, e, t)
              }
            },
            isView: function (e) {
              if (!s(e)) return !1;
              var t = u(e);
              return "DataView" === t || c(k, t) || c(P, t)
            },
            isTypedArray: j,
            TypedArray: w,
            TypedArrayPrototype: x
          }
        },
        3816: (e, t, n) => {
          "use strict";
          var r = n(9859),
            o = n(7400),
            i = n(3339),
            a = n(5762),
            s = n(8787),
            c = n(4229),
            u = n(7728),
            l = n(6051),
            f = n(4237),
            p = n(7331),
            d = n(6201),
            g = n(7567),
            h = n(6540),
            y = n(8151).f,
            v = n(1787).f,
            _ = n(7065),
            b = n(4555),
            m = n(6407),
            w = m.get,
            x = m.set,
            S = "ArrayBuffer",
            O = "DataView",
            C = "Wrong index",
            A = r.ArrayBuffer,
            E = A,
            T = r.DataView,
            k = T && T.prototype,
            P = Object.prototype,
            j = r.RangeError,
            I = d.pack,
            R = d.unpack,
            M = function (e) {
              return [255 & e]
            },
            L = function (e) {
              return [255 & e, e >> 8 & 255]
            },
            F = function (e) {
              return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
            },
            D = function (e) {
              return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
            },
            N = function (e) {
              return I(e, 23, 4)
            },
            W = function (e) {
              return I(e, 52, 8)
            },
            $ = function (e, t) {
              v(e.prototype, t, {
                get: function () {
                  return w(this)[t]
                }
              })
            },
            U = function (e, t, n, r) {
              var o = p(n),
                i = w(e);
              if (o + t > i.byteLength) throw j(C);
              var a = w(i.buffer).bytes,
                s = o + i.byteOffset,
                c = a.slice(s, s + t);
              return r ? c : c.reverse()
            },
            B = function (e, t, n, r, o, i) {
              var a = p(n),
                s = w(e);
              if (a + t > s.byteLength) throw j(C);
              for (var c = w(s.buffer).bytes, u = a + s.byteOffset, l = r(+o), f = 0; f < t; f++) c[u + f] = l[i ? f : t - f - 1]
            };
          if (i) {
            if (!c((function () {
                A(1)
              })) || !c((function () {
                new A(-1)
              })) || c((function () {
                return new A, new A(1.5), new A(NaN), A.name != S
              }))) {
              for (var G, Z = (E = function (e) {
                  return u(this, E), new A(p(e))
                }).prototype = A.prototype, J = y(A), V = 0; J.length > V;)(G = J[V++]) in E || a(E, G, A[G]);
              Z.constructor = E
            }
            h && g(k) !== P && h(k, P);
            var q = new T(new E(2)),
              H = k.setInt8;
            q.setInt8(0, 2147483648), q.setInt8(1, 2147483649), !q.getInt8(0) && q.getInt8(1) || s(k, {
              setInt8: function (e, t) {
                H.call(this, e, t << 24 >> 24)
              },
              setUint8: function (e, t) {
                H.call(this, e, t << 24 >> 24)
              }
            }, {
              unsafe: !0
            })
          } else E = function (e) {
            u(this, E, S);
            var t = p(e);
            x(this, {
              bytes: _.call(new Array(t), 0),
              byteLength: t
            }), o || (this.byteLength = t)
          }, T = function (e, t, n) {
            u(this, T, O), u(e, E, O);
            var r = w(e).byteLength,
              i = l(t);
            if (i < 0 || i > r) throw j("Wrong offset");
            if (i + (n = void 0 === n ? r - i : f(n)) > r) throw j("Wrong length");
            x(this, {
              buffer: e,
              byteLength: n,
              byteOffset: i
            }), o || (this.buffer = e, this.byteLength = n, this.byteOffset = i)
          }, o && ($(E, "byteLength"), $(T, "buffer"), $(T, "byteLength"), $(T, "byteOffset")), s(T.prototype, {
            getInt8: function (e) {
              return U(this, 1, e)[0] << 24 >> 24
            },
            getUint8: function (e) {
              return U(this, 1, e)[0]
            },
            getInt16: function (e) {
              var t = U(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
              return (t[1] << 8 | t[0]) << 16 >> 16
            },
            getUint16: function (e) {
              var t = U(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
              return t[1] << 8 | t[0]
            },
            getInt32: function (e) {
              return D(U(this, 4, e, arguments.length > 1 ? arguments[1] : void 0))
            },
            getUint32: function (e) {
              return D(U(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
            },
            getFloat32: function (e) {
              return R(U(this, 4, e, arguments.length > 1 ? arguments[1] : void 0), 23)
            },
            getFloat64: function (e) {
              return R(U(this, 8, e, arguments.length > 1 ? arguments[1] : void 0), 52)
            },
            setInt8: function (e, t) {
              B(this, 1, e, M, t)
            },
            setUint8: function (e, t) {
              B(this, 1, e, M, t)
            },
            setInt16: function (e, t) {
              B(this, 2, e, L, t, arguments.length > 2 ? arguments[2] : void 0)
            },
            setUint16: function (e, t) {
              B(this, 2, e, L, t, arguments.length > 2 ? arguments[2] : void 0)
            },
            setInt32: function (e, t) {
              B(this, 4, e, F, t, arguments.length > 2 ? arguments[2] : void 0)
            },
            setUint32: function (e, t) {
              B(this, 4, e, F, t, arguments.length > 2 ? arguments[2] : void 0)
            },
            setFloat32: function (e, t) {
              B(this, 4, e, N, t, arguments.length > 2 ? arguments[2] : void 0)
            },
            setFloat64: function (e, t) {
              B(this, 8, e, W, t, arguments.length > 2 ? arguments[2] : void 0)
            }
          });
          b(E, S), b(T, O), e.exports = {
            ArrayBuffer: E,
            DataView: T
          }
        },
        7065: (e, t, n) => {
          "use strict";
          var r = n(2991),
            o = n(3231),
            i = n(4237);
          e.exports = function (e) {
            for (var t = r(this), n = i(t.length), a = arguments.length, s = o(a > 1 ? arguments[1] : void 0, n), c = a > 2 ? arguments[2] : void 0, u = void 0 === c ? n : o(c, n); u > s;) t[s++] = e;
            return t
          }
        },
        9540: (e, t, n) => {
          var r = n(905),
            o = n(4237),
            i = n(3231),
            a = function (e) {
              return function (t, n, a) {
                var s, c = r(t),
                  u = o(c.length),
                  l = i(a, u);
                if (e && n != n) {
                  for (; u > l;)
                    if ((s = c[l++]) != s) return !0
                } else
                  for (; u > l; l++)
                    if ((e || l in c) && c[l] === n) return e || l || 0;
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
            o = n(9337),
            i = n(2991),
            a = n(4237),
            s = n(7501),
            c = [].push,
            u = function (e) {
              var t = 1 == e,
                n = 2 == e,
                u = 3 == e,
                l = 4 == e,
                f = 6 == e,
                p = 7 == e,
                d = 5 == e || f;
              return function (g, h, y, v) {
                for (var _, b, m = i(g), w = o(m), x = r(h, y, 3), S = a(w.length), O = 0, C = v || s, A = t ? C(g, S) : n || p ? C(g, 0) : void 0; S > O; O++)
                  if ((d || O in w) && (b = x(_ = w[O], O, m), e))
                    if (t) A[O] = b;
                    else if (b) switch (e) {
                  case 3:
                    return !0;
                  case 5:
                    return _;
                  case 6:
                    return O;
                  case 2:
                    c.call(A, _)
                } else switch (e) {
                  case 4:
                    return !1;
                  case 7:
                    c.call(A, _)
                }
                return f ? -1 : u || l ? l : A
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
            o = n(2991),
            i = n(9337),
            a = n(4237),
            s = function (e) {
              return function (t, n, s, c) {
                r(n);
                var u = o(t),
                  l = i(u),
                  f = a(u.length),
                  p = e ? f - 1 : 0,
                  d = e ? -1 : 1;
                if (s < 2)
                  for (;;) {
                    if (p in l) {
                      c = l[p], p += d;
                      break
                    }
                    if (p += d, e ? p < 0 : f <= p) throw TypeError("Reduce of empty array with no initial value")
                  }
                for (; e ? p >= 0 : f > p; p += d) p in l && (c = n(c, l[p], p, u));
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
            n = function (e, i) {
              var a = e.length,
                s = t(a / 2);
              return a < 8 ? r(e, i) : o(n(e.slice(0, s), i), n(e.slice(s), i), i)
            },
            r = function (e, t) {
              for (var n, r, o = e.length, i = 1; i < o;) {
                for (r = i, n = e[i]; r && t(e[r - 1], n) > 0;) e[r] = e[--r];
                r !== i++ && (e[r] = n)
              }
              return e
            },
            o = function (e, t, n) {
              for (var r = e.length, o = t.length, i = 0, a = 0, s = []; i < r || a < o;) i < r && a < o ? s.push(n(e[i], t[a]) <= 0 ? e[i++] : t[a++]) : s.push(i < r ? e[i++] : t[a++]);
              return s
            };
          e.exports = n
        },
        7501: (e, t, n) => {
          var r = n(5052),
            o = n(3718),
            i = n(95)("species");
          e.exports = function (e, t) {
            var n;
            return o(e) && ("function" != typeof (n = e.constructor) || n !== Array && !o(n.prototype) ? r(n) && null === (n = n[i]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
          }
        },
        4575: (e, t, n) => {
          var r = n(95)("iterator"),
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
            a[r] = function () {
              return this
            }, Array.from(a, (function () {
              throw 2
            }))
          } catch (e) {}
          e.exports = function (e, t) {
            if (!t && !o) return !1;
            var n = !1;
            try {
              var i = {};
              i[r] = function () {
                return {
                  next: function () {
                    return {
                      done: n = !0
                    }
                  }
                }
              }, e(i)
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
            o = n(7079),
            i = n(95)("toStringTag"),
            a = "Arguments" == o(function () {
              return arguments
            }());
          e.exports = r ? o : function (e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
              try {
                return e[t]
              } catch (e) {}
            }(t = Object(e), i)) ? n : a ? o(t) : "Object" == (r = o(t)) && "function" == typeof t.callee ? "Arguments" : r
          }
        },
        7081: (e, t, n) => {
          var r = n(816),
            o = n(4826),
            i = n(7933),
            a = n(1787);
          e.exports = function (e, t) {
            for (var n = o(t), s = a.f, c = i.f, u = 0; u < n.length; u++) {
              var l = n[u];
              r(e, l) || s(e, l, c(t, l))
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
            o = n(2391),
            i = n(5358),
            a = n(4555),
            s = n(5495),
            c = function () {
              return this
            };
          e.exports = function (e, t, n) {
            var u = t + " Iterator";
            return e.prototype = o(r, {
              next: i(1, n)
            }), a(e, u, !1, !0), s[u] = c, e
          }
        },
        5762: (e, t, n) => {
          var r = n(7400),
            o = n(1787),
            i = n(5358);
          e.exports = r ? function (e, t, n) {
            return o.f(e, t, i(1, n))
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
            o = n(1787),
            i = n(5358);
          e.exports = function (e, t, n) {
            var a = r(t);
            a in e ? o.f(e, a, i(0, n)) : e[a] = n
          }
        },
        7675: (e, t, n) => {
          "use strict";
          var r = n(3103),
            o = n(3723),
            i = n(7567),
            a = n(6540),
            s = n(4555),
            c = n(5762),
            u = n(7487),
            l = n(95),
            f = n(4231),
            p = n(5495),
            d = n(693),
            g = d.IteratorPrototype,
            h = d.BUGGY_SAFARI_ITERATORS,
            y = l("iterator"),
            v = "keys",
            _ = "values",
            b = "entries",
            m = function () {
              return this
            };
          e.exports = function (e, t, n, l, d, w, x) {
            o(n, t, l);
            var S, O, C, A = function (e) {
                if (e === d && j) return j;
                if (!h && e in k) return k[e];
                switch (e) {
                  case v:
                  case _:
                  case b:
                    return function () {
                      return new n(this, e)
                    }
                }
                return function () {
                  return new n(this)
                }
              },
              E = t + " Iterator",
              T = !1,
              k = e.prototype,
              P = k[y] || k["@@iterator"] || d && k[d],
              j = !h && P || A(d),
              I = "Array" == t && k.entries || P;
            if (I && (S = i(I.call(new e)), g !== Object.prototype && S.next && (f || i(S) === g || (a ? a(S, g) : "function" != typeof S[y] && c(S, y, m)), s(S, E, !0, !0), f && (p[E] = m))), d == _ && P && P.name !== _ && (T = !0, j = function () {
                return P.call(this)
              }), f && !x || k[y] === j || c(k, y, j), p[t] = j, d)
              if (O = {
                  values: A(_),
                  keys: w ? j : A(v),
                  entries: A(b)
                }, x)
                for (C in O)(h || T || !(C in k)) && u(k, C, O[C]);
              else r({
                target: t,
                proto: !0,
                forced: h || T
              }, O);
            return O
          }
        },
        8423: (e, t, n) => {
          var r = n(9276),
            o = n(816),
            i = n(5391),
            a = n(1787).f;
          e.exports = function (e) {
            var t = r.Symbol || (r.Symbol = {});
            o(t, e) || a(t, e, {
              value: i.f(e)
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
            o = n(5052),
            i = r.document,
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
            o = n(9859);
          e.exports = "process" == r(o.process)
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
          var r, o, i = n(9859),
            a = n(598),
            s = i.process,
            c = s && s.versions,
            u = c && c.v8;
          u ? o = (r = u.split("."))[0] < 4 ? 1 : r[0] + r[1] : a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (o = r[1]), e.exports = o && +o
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
            o = n(7933).f,
            i = n(5762),
            a = n(7487),
            s = n(2079),
            c = n(7081),
            u = n(6541);
          e.exports = function (e, t) {
            var n, l, f, p, d, g = e.target,
              h = e.global,
              y = e.stat;
            if (n = h ? r : y ? r[g] || s(g, {}) : (r[g] || {}).prototype)
              for (l in t) {
                if (p = t[l], f = e.noTargetGet ? (d = o(n, l)) && d.value : n[l], !u(h ? l : g + (y ? "." : "#") + l, e.forced) && void 0 !== f) {
                  if (typeof p == typeof f) continue;
                  c(p, f)
                }(e.sham || f && f.sham) && i(p, "sham", !0), a(n, l, p, e)
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
            o = n(3466),
            i = n(4229),
            a = n(95),
            s = n(5762),
            c = a("species"),
            u = RegExp.prototype;
          e.exports = function (e, t, n, l) {
            var f = a(e),
              p = !i((function () {
                var t = {};
                return t[f] = function () {
                  return 7
                }, 7 != "" [e](t)
              })),
              d = p && !i((function () {
                var t = !1,
                  n = /a/;
                return "split" === e && ((n = {}).constructor = {}, n.constructor[c] = function () {
                  return n
                }, n.flags = "", n[f] = /./ [f]), n.exec = function () {
                  return t = !0, null
                }, n[f](""), !t
              }));
            if (!p || !d || n) {
              var g = /./ [f],
                h = t(f, "" [e], (function (e, t, n, r, i) {
                  var a = t.exec;
                  return a === o || a === u.exec ? p && !i ? {
                    done: !0,
                    value: g.call(t, n, r)
                  } : {
                    done: !0,
                    value: e.call(n, t, r)
                  } : {
                    done: !1
                  }
                }));
              r(String.prototype, e, h[0]), r(u, f, h[1])
            }
            l && s(u[f], "sham", !0)
          }
        },
        4990: (e, t, n) => {
          "use strict";
          var r = n(3718),
            o = n(4237),
            i = n(7636),
            a = function (e, t, n, s, c, u, l, f) {
              for (var p, d = c, g = 0, h = !!l && i(l, f, 3); g < s;) {
                if (g in n) {
                  if (p = h ? h(n[g], g, t) : n[g], u > 0 && r(p)) d = a(e, t, p, o(p.length), d, u - 1) - 1;
                  else {
                    if (d >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                    e[d] = p
                  }
                  d++
                }
                g++
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
                return function (n, r, o) {
                  return e.call(t, n, r, o)
                }
            }
            return function () {
              return e.apply(t, arguments)
            }
          }
        },
        1333: (e, t, n) => {
          var r = n(9276),
            o = n(9859),
            i = function (e) {
              return "function" == typeof e ? e : void 0
            };
          e.exports = function (e, t) {
            return arguments.length < 2 ? i(r[e]) || i(o[e]) : r[e] && r[e][t] || o[e] && o[e][t]
          }
        },
        8830: (e, t, n) => {
          var r = n(1589),
            o = n(5495),
            i = n(95)("iterator");
          e.exports = function (e) {
            if (null != e) return e[i] || e["@@iterator"] || o[r(e)]
          }
        },
        17: (e, t, n) => {
          var r = n(2991),
            o = Math.floor,
            i = "".replace,
            a = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
            s = /\$([$&'`]|\d{1,2})/g;
          e.exports = function (e, t, n, c, u, l) {
            var f = n + e.length,
              p = c.length,
              d = s;
            return void 0 !== u && (u = r(u), d = a), i.call(l, d, (function (r, i) {
              var a;
              switch (i.charAt(0)) {
                case "$":
                  return "$";
                case "&":
                  return e;
                case "`":
                  return t.slice(0, n);
                case "'":
                  return t.slice(f);
                case "<":
                  a = u[i.slice(1, -1)];
                  break;
                default:
                  var s = +i;
                  if (0 === s) return r;
                  if (s > p) {
                    var l = o(s / 10);
                    return 0 === l ? r : l <= p ? void 0 === c[l - 1] ? i.charAt(1) : c[l - 1] + i.charAt(1) : r
                  }
                  a = c[s - 1]
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
            o = {}.hasOwnProperty;
          e.exports = Object.hasOwn || function (e, t) {
            return o.call(r(e), t)
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
            o = n(4229),
            i = n(2635);
          e.exports = !r && !o((function () {
            return 7 != Object.defineProperty(i("div"), "a", {
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
            o = Math.log,
            i = Math.LN2;
          e.exports = {
            pack: function (e, a, s) {
              var c, u, l, f = new Array(s),
                p = 8 * s - a - 1,
                d = (1 << p) - 1,
                g = d >> 1,
                h = 23 === a ? n(2, -24) - n(2, -77) : 0,
                y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0,
                v = 0;
              for ((e = t(e)) != e || e === 1 / 0 ? (u = e != e ? 1 : 0, c = d) : (c = r(o(e) / i), e * (l = n(2, -c)) < 1 && (c--, l *= 2), (e += c + g >= 1 ? h / l : h * n(2, 1 - g)) * l >= 2 && (c++, l /= 2), c + g >= d ? (u = 0, c = d) : c + g >= 1 ? (u = (e * l - 1) * n(2, a), c += g) : (u = e * n(2, g - 1) * n(2, a), c = 0)); a >= 8; f[v++] = 255 & u, u /= 256, a -= 8);
              for (c = c << a | u, p += a; p > 0; f[v++] = 255 & c, c /= 256, p -= 8);
              return f[--v] |= 128 * y, f
            },
            unpack: function (e, t) {
              var r, o = e.length,
                i = 8 * o - t - 1,
                a = (1 << i) - 1,
                s = a >> 1,
                c = i - 7,
                u = o - 1,
                l = e[u--],
                f = 127 & l;
              for (l >>= 7; c > 0; f = 256 * f + e[u], u--, c -= 8);
              for (r = f & (1 << -c) - 1, f >>= -c, c += t; c > 0; r = 256 * r + e[u], u--, c -= 8);
              if (0 === f) f = 1 - s;
              else {
                if (f === a) return r ? NaN : l ? -1 / 0 : 1 / 0;
                r += n(2, t), f -= s
              }
              return (l ? -1 : 1) * r * n(2, f - t)
            }
          }
        },
        9337: (e, t, n) => {
          var r = n(4229),
            o = n(7079),
            i = "".split;
          e.exports = r((function () {
            return !Object("z").propertyIsEnumerable(0)
          })) ? function (e) {
            return "String" == o(e) ? i.call(e, "") : Object(e)
          } : Object
        },
        835: (e, t, n) => {
          var r = n(5052),
            o = n(6540);
          e.exports = function (e, t, n) {
            var i, a;
            return o && "function" == typeof (i = t.constructor) && i !== n && r(a = i.prototype) && a !== n.prototype && o(e, a), e
          }
        },
        8511: (e, t, n) => {
          var r = n(5353),
            o = Function.toString;
          "function" != typeof r.inspectSource && (r.inspectSource = function (e) {
            return o.call(e)
          }), e.exports = r.inspectSource
        },
        6407: (e, t, n) => {
          var r, o, i, a = n(8694),
            s = n(9859),
            c = n(5052),
            u = n(5762),
            l = n(816),
            f = n(5353),
            p = n(4399),
            d = n(5977),
            g = "Object already initialized",
            h = s.WeakMap;
          if (a || f.state) {
            var y = f.state || (f.state = new h),
              v = y.get,
              _ = y.has,
              b = y.set;
            r = function (e, t) {
              if (_.call(y, e)) throw new TypeError(g);
              return t.facade = e, b.call(y, e, t), t
            }, o = function (e) {
              return v.call(y, e) || {}
            }, i = function (e) {
              return _.call(y, e)
            }
          } else {
            var m = p("state");
            d[m] = !0, r = function (e, t) {
              if (l(e, m)) throw new TypeError(g);
              return t.facade = e, u(e, m, t), t
            }, o = function (e) {
              return l(e, m) ? e[m] : {}
            }, i = function (e) {
              return l(e, m)
            }
          }
          e.exports = {
            set: r,
            get: o,
            has: i,
            enforce: function (e) {
              return i(e) ? o(e) : r(e, {})
            },
            getterFor: function (e) {
              return function (t) {
                var n;
                if (!c(t) || (n = o(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                return n
              }
            }
          }
        },
        1943: (e, t, n) => {
          var r = n(95),
            o = n(5495),
            i = r("iterator"),
            a = Array.prototype;
          e.exports = function (e) {
            return void 0 !== e && (o.Array === e || a[i] === e)
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
            o = /#|\.prototype\./,
            i = function (e, t) {
              var n = s[a(e)];
              return n == u || n != c && ("function" == typeof t ? r(t) : !!t)
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
        8311: (e, t, n) => {
          var r = n(5052),
            o = n(7079),
            i = n(95)("match");
          e.exports = function (e) {
            var t;
            return r(e) && (void 0 !== (t = e[i]) ? !!t : "RegExp" == o(e))
          }
        },
        9003: (e, t, n) => {
          var r = n(1176),
            o = n(1943),
            i = n(4237),
            a = n(7636),
            s = n(8830),
            c = n(7281),
            u = function (e, t) {
              this.stopped = e, this.result = t
            };
          e.exports = function (e, t, n) {
            var l, f, p, d, g, h, y, v = n && n.that,
              _ = !(!n || !n.AS_ENTRIES),
              b = !(!n || !n.IS_ITERATOR),
              m = !(!n || !n.INTERRUPTED),
              w = a(t, v, 1 + _ + m),
              x = function (e) {
                return l && c(l), new u(!0, e)
              },
              S = function (e) {
                return _ ? (r(e), m ? w(e[0], e[1], x) : w(e[0], e[1])) : m ? w(e, x) : w(e)
              };
            if (b) l = e;
            else {
              if ("function" != typeof (f = s(e))) throw TypeError("Target is not iterable");
              if (o(f)) {
                for (p = 0, d = i(e.length); d > p; p++)
                  if ((g = S(e[p])) && g instanceof u) return g;
                return new u(!1)
              }
              l = f.call(e)
            }
            for (h = l.next; !(y = h.call(l)).done;) {
              try {
                g = S(y.value)
              } catch (e) {
                throw c(l), e
              }
              if ("object" == typeof g && g && g instanceof u) return g
            }
            return new u(!1)
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
          var r, o, i, a = n(4229),
            s = n(7567),
            c = n(5762),
            u = n(816),
            l = n(95),
            f = n(4231),
            p = l("iterator"),
            d = !1;
          [].keys && ("next" in (i = [].keys()) ? (o = s(s(i))) !== Object.prototype && (r = o) : d = !0);
          var g = null == r || a((function () {
            var e = {};
            return r[p].call(e) !== e
          }));
          g && (r = {}), f && !g || u(r, p) || c(r, p, (function () {
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
          var r, o, i, a, s, c, u, l, f = n(9859),
            p = n(7933).f,
            d = n(5795).set,
            g = n(2023),
            h = n(263),
            y = n(8801),
            v = f.MutationObserver || f.WebKitMutationObserver,
            _ = f.document,
            b = f.process,
            m = f.Promise,
            w = p(f, "queueMicrotask"),
            x = w && w.value;
          x || (r = function () {
            var e, t;
            for (y && (e = b.domain) && e.exit(); o;) {
              t = o.fn, o = o.next;
              try {
                t()
              } catch (e) {
                throw o ? a() : i = void 0, e
              }
            }
            i = void 0, e && e.enter()
          }, g || y || h || !v || !_ ? m && m.resolve ? ((u = m.resolve(void 0)).constructor = m, l = u.then, a = function () {
            l.call(u, r)
          }) : a = y ? function () {
            b.nextTick(r)
          } : function () {
            d.call(f, r)
          } : (s = !0, c = _.createTextNode(""), new v(r).observe(c, {
            characterData: !0
          }), a = function () {
            c.data = s = !s
          })), e.exports = x || function (e) {
            var t = {
              fn: e,
              next: void 0
            };
            i && (i.next = t), o || (o = t, a()), i = t
          }
        },
        4226: (e, t, n) => {
          var r = n(9859);
          e.exports = r.Promise
        },
        3839: (e, t, n) => {
          var r = n(6358),
            o = n(4229);
          e.exports = !!Object.getOwnPropertySymbols && !o((function () {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && r && r < 41
          }))
        },
        8694: (e, t, n) => {
          var r = n(9859),
            o = n(8511),
            i = r.WeakMap;
          e.exports = "function" == typeof i && /native code/.test(o(i))
        },
        6485: (e, t, n) => {
          "use strict";
          var r = n(3819),
            o = function (e) {
              var t, n;
              this.promise = new e((function (e, r) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = r
              })), this.resolve = r(t), this.reject = r(n)
            };
          e.exports.f = function (e) {
            return new o(e)
          }
        },
        2391: (e, t, n) => {
          var r, o = n(1176),
            i = n(219),
            a = n(3837),
            s = n(5977),
            c = n(3777),
            u = n(2635),
            l = n(4399),
            f = l("IE_PROTO"),
            p = function () {},
            d = function (e) {
              return "<script>" + e + "</" + "script>"
            },
            g = function () {
              try {
                r = document.domain && new ActiveXObject("htmlfile")
              } catch (e) {}
              var e, t;
              g = r ? function (e) {
                e.write(d("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
              }(r) : ((t = u("iframe")).style.display = "none", c.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(d("document.F=Object")), e.close(), e.F);
              for (var n = a.length; n--;) delete g.prototype[a[n]];
              return g()
            };
          s[f] = !0, e.exports = Object.create || function (e, t) {
            var n;
            return null !== e ? (p.prototype = o(e), n = new p, p.prototype = null, n[f] = e) : n = g(), void 0 === t ? n : i(n, t)
          }
        },
        219: (e, t, n) => {
          var r = n(7400),
            o = n(1787),
            i = n(1176),
            a = n(5632);
          e.exports = r ? Object.defineProperties : function (e, t) {
            i(e);
            for (var n, r = a(t), s = r.length, c = 0; s > c;) o.f(e, n = r[c++], t[n]);
            return e
          }
        },
        1787: (e, t, n) => {
          var r = n(7400),
            o = n(4394),
            i = n(1176),
            a = n(2066),
            s = Object.defineProperty;
          t.f = r ? s : function (e, t, n) {
            if (i(e), t = a(t, !0), i(n), o) try {
              return s(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
            return "value" in n && (e[t] = n.value), e
          }
        },
        7933: (e, t, n) => {
          var r = n(7400),
            o = n(9195),
            i = n(5358),
            a = n(905),
            s = n(2066),
            c = n(816),
            u = n(4394),
            l = Object.getOwnPropertyDescriptor;
          t.f = r ? l : function (e, t) {
            if (e = a(e), t = s(t, !0), u) try {
              return l(e, t)
            } catch (e) {}
            if (c(e, t)) return i(!o.f.call(e, t), e[t])
          }
        },
        8151: (e, t, n) => {
          var r = n(140),
            o = n(3837).concat("length", "prototype");
          t.f = Object.getOwnPropertyNames || function (e) {
            return r(e, o)
          }
        },
        894: (e, t) => {
          t.f = Object.getOwnPropertySymbols
        },
        7567: (e, t, n) => {
          var r = n(816),
            o = n(2991),
            i = n(4399),
            a = n(7528),
            s = i("IE_PROTO"),
            c = Object.prototype;
          e.exports = a ? Object.getPrototypeOf : function (e) {
            return e = o(e), r(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? c : null
          }
        },
        140: (e, t, n) => {
          var r = n(816),
            o = n(905),
            i = n(9540).indexOf,
            a = n(5977);
          e.exports = function (e, t) {
            var n, s = o(e),
              c = 0,
              u = [];
            for (n in s) !r(a, n) && r(s, n) && u.push(n);
            for (; t.length > c;) r(s, n = t[c++]) && (~i(u, n) || u.push(n));
            return u
          }
        },
        5632: (e, t, n) => {
          var r = n(140),
            o = n(3837);
          e.exports = Object.keys || function (e) {
            return r(e, o)
          }
        },
        9195: (e, t) => {
          "use strict";
          var n = {}.propertyIsEnumerable,
            r = Object.getOwnPropertyDescriptor,
            o = r && !n.call({
              1: 2
            }, 1);
          t.f = o ? function (e) {
            var t = r(this, e);
            return !!t && t.enumerable
          } : n
        },
        5020: (e, t, n) => {
          "use strict";
          var r = n(4231),
            o = n(9859),
            i = n(4229),
            a = n(9811);
          e.exports = r || !i((function () {
            if (!(a && a < 535)) {
              var e = Math.random();
              __defineSetter__.call(null, e, (function () {})), delete o[e]
            }
          }))
        },
        6540: (e, t, n) => {
          var r = n(1176),
            o = n(8505);
          e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var e, t = !1,
              n = {};
            try {
              (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
            } catch (e) {}
            return function (n, i) {
              return r(n), o(i), t ? e.call(n, i) : n.__proto__ = i, n
            }
          }() : void 0)
        },
        7664: (e, t, n) => {
          var r = n(7400),
            o = n(5632),
            i = n(905),
            a = n(9195).f,
            s = function (e) {
              return function (t) {
                for (var n, s = i(t), c = o(s), u = c.length, l = 0, f = []; u > l;) n = c[l++], r && !a.call(s, n) || f.push(e ? [n, s[n]] : s[n]);
                return f
              }
            };
          e.exports = {
            entries: s(!0),
            values: s(!1)
          }
        },
        4826: (e, t, n) => {
          var r = n(1333),
            o = n(8151),
            i = n(894),
            a = n(1176);
          e.exports = r("Reflect", "ownKeys") || function (e) {
            var t = o.f(a(e)),
              n = i.f;
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
            o = n(5052),
            i = n(6485);
          e.exports = function (e, t) {
            if (r(e), o(t) && t.constructor === e) return t;
            var n = i.f(e);
            return (0, n.resolve)(t), n.promise
          }
        },
        8787: (e, t, n) => {
          var r = n(7487);
          e.exports = function (e, t, n) {
            for (var o in t) r(e, o, t[o], n);
            return e
          }
        },
        7487: (e, t, n) => {
          var r = n(9859),
            o = n(5762),
            i = n(816),
            a = n(2079),
            s = n(8511),
            c = n(6407),
            u = c.get,
            l = c.enforce,
            f = String(String).split("String");
          (e.exports = function (e, t, n, s) {
            var c, u = !!s && !!s.unsafe,
              p = !!s && !!s.enumerable,
              d = !!s && !!s.noTargetGet;
            "function" == typeof n && ("string" != typeof t || i(n, "name") || o(n, "name", t), (c = l(n)).source || (c.source = f.join("string" == typeof t ? t : ""))), e !== r ? (u ? !d && e[t] && (p = !0) : delete e[t], p ? e[t] = n : o(e, t, n)) : p ? e[t] = n : a(t, n)
          })(Function.prototype, "toString", (function () {
            return "function" == typeof this && u(this).source || s(this)
          }))
        },
        8115: (e, t, n) => {
          var r = n(7079),
            o = n(3466);
          e.exports = function (e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
              var i = n.call(e, t);
              if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
              return i
            }
            if ("RegExp" !== r(e)) throw TypeError("RegExp#exec called on incompatible receiver");
            return o.call(e, t)
          }
        },
        3466: (e, t, n) => {
          "use strict";
          var r, o, i = n(895),
            a = n(5650),
            s = n(3036),
            c = n(2391),
            u = n(6407).get,
            l = n(2926),
            f = n(461),
            p = RegExp.prototype.exec,
            d = s("native-string-replace", String.prototype.replace),
            g = p,
            h = (r = /a/, o = /b*/g, p.call(r, "a"), p.call(o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
            y = a.UNSUPPORTED_Y || a.BROKEN_CARET,
            v = void 0 !== /()??/.exec("")[1];
          (h || v || y || l || f) && (g = function (e) {
            var t, n, r, o, a, s, l, f = this,
              _ = u(f),
              b = _.raw;
            if (b) return b.lastIndex = f.lastIndex, t = g.call(b, e), f.lastIndex = b.lastIndex, t;
            var m = _.groups,
              w = y && f.sticky,
              x = i.call(f),
              S = f.source,
              O = 0,
              C = e;
            if (w && (-1 === (x = x.replace("y", "")).indexOf("g") && (x += "g"), C = String(e).slice(f.lastIndex), f.lastIndex > 0 && (!f.multiline || f.multiline && "\n" !== e[f.lastIndex - 1]) && (S = "(?: " + S + ")", C = " " + C, O++), n = new RegExp("^(?:" + S + ")", x)), v && (n = new RegExp("^" + S + "$(?!\\s)", x)), h && (r = f.lastIndex), o = p.call(w ? n : f, C), w ? o ? (o.input = o.input.slice(O), o[0] = o[0].slice(O), o.index = f.lastIndex, f.lastIndex += o[0].length) : f.lastIndex = 0 : h && o && (f.lastIndex = f.global ? o.index + o[0].length : r), v && o && o.length > 1 && d.call(o[0], n, (function () {
                for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (o[a] = void 0)
              })), o && m)
              for (o.groups = s = c(null), a = 0; a < m.length; a++) s[(l = m[a])[0]] = o[l[1]];
            return o
          }), e.exports = g
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
            o = function (e, t) {
              return RegExp(e, t)
            };
          t.UNSUPPORTED_Y = r((function () {
            var e = o("a", "y");
            return e.lastIndex = 2, null != e.exec("abcd")
          })), t.BROKEN_CARET = r((function () {
            var e = o("^r", "gy");
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
            o = n(5762);
          e.exports = function (e, t) {
            try {
              o(r, e, t)
            } catch (n) {
              r[e] = t
            }
            return t
          }
        },
        1832: (e, t, n) => {
          "use strict";
          var r = n(1333),
            o = n(1787),
            i = n(95),
            a = n(7400),
            s = i("species");
          e.exports = function (e) {
            var t = r(e),
              n = o.f;
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
            o = n(816),
            i = n(95)("toStringTag");
          e.exports = function (e, t, n) {
            e && !o(e = n ? e : e.prototype, i) && r(e, i, {
              configurable: !0,
              value: t
            })
          }
        },
        4399: (e, t, n) => {
          var r = n(3036),
            o = n(1441),
            i = r("keys");
          e.exports = function (e) {
            return i[e] || (i[e] = o(e))
          }
        },
        5353: (e, t, n) => {
          var r = n(9859),
            o = n(2079),
            i = "__core-js_shared__",
            a = r[i] || o(i, {});
          e.exports = a
        },
        3036: (e, t, n) => {
          var r = n(4231),
            o = n(5353);
          (e.exports = function (e, t) {
            return o[e] || (o[e] = void 0 !== t ? t : {})
          })("versions", []).push({
            version: "3.15.1",
            mode: r ? "pure" : "global",
            copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
          })
        },
        7942: (e, t, n) => {
          var r = n(1176),
            o = n(3819),
            i = n(95)("species");
          e.exports = function (e, t) {
            var n, a = r(e).constructor;
            return void 0 === a || null == (n = r(a)[i]) ? t : o(n)
          }
        },
        966: (e, t, n) => {
          var r = n(6051),
            o = n(8885),
            i = function (e) {
              return function (t, n) {
                var i, a, s = String(o(t)),
                  c = r(n),
                  u = s.length;
                return c < 0 || c >= u ? e ? "" : void 0 : (i = s.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? e ? s.charAt(c) : i : e ? s.slice(c, c + 2) : a - 56320 + (i - 55296 << 10) + 65536
              }
            };
          e.exports = {
            codeAt: i(!1),
            charAt: i(!0)
          }
        },
        7456: (e, t, n) => {
          var r = n(598);
          e.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)
        },
        6650: (e, t, n) => {
          var r = n(4237),
            o = n(3124),
            i = n(8885),
            a = Math.ceil,
            s = function (e) {
              return function (t, n, s) {
                var c, u, l = String(i(t)),
                  f = l.length,
                  p = void 0 === s ? " " : String(s),
                  d = r(n);
                return d <= f || "" == p ? l : (c = d - f, (u = o.call(p, a(c / p.length))).length > c && (u = u.slice(0, c)), e ? l + u : u + l)
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
            o = n(8885);
          e.exports = function (e) {
            var t = String(o(this)),
              n = "",
              i = r(e);
            if (i < 0 || i == 1 / 0) throw RangeError("Wrong number of repetitions");
            for (; i > 0;
              (i >>>= 1) && (t += t)) 1 & i && (n += t);
            return n
          }
        },
        9445: (e, t, n) => {
          var r = n(4229),
            o = n(1647);
          e.exports = function (e) {
            return r((function () {
              return !!o[e]() || "​᠎" != "​᠎" [e]() || o[e].name !== e
            }))
          }
        },
        1017: (e, t, n) => {
          var r = n(8885),
            o = "[" + n(1647) + "]",
            i = RegExp("^" + o + o + "*"),
            a = RegExp(o + o + "*$"),
            s = function (e) {
              return function (t) {
                var n = String(r(t));
                return 1 & e && (n = n.replace(i, "")), 2 & e && (n = n.replace(a, "")), n
              }
            };
          e.exports = {
            start: s(1),
            end: s(2),
            trim: s(3)
          }
        },
        5795: (e, t, n) => {
          var r, o, i, a = n(9859),
            s = n(4229),
            c = n(7636),
            u = n(3777),
            l = n(2635),
            f = n(2023),
            p = n(8801),
            d = a.location,
            g = a.setImmediate,
            h = a.clearImmediate,
            y = a.process,
            v = a.MessageChannel,
            _ = a.Dispatch,
            b = 0,
            m = {},
            w = "onreadystatechange",
            x = function (e) {
              if (m.hasOwnProperty(e)) {
                var t = m[e];
                delete m[e], t()
              }
            },
            S = function (e) {
              return function () {
                x(e)
              }
            },
            O = function (e) {
              x(e.data)
            },
            C = function (e) {
              a.postMessage(e + "", d.protocol + "//" + d.host)
            };
          g && h || (g = function (e) {
            for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
            return m[++b] = function () {
              ("function" == typeof e ? e : Function(e)).apply(void 0, t)
            }, r(b), b
          }, h = function (e) {
            delete m[e]
          }, p ? r = function (e) {
            y.nextTick(S(e))
          } : _ && _.now ? r = function (e) {
            _.now(S(e))
          } : v && !f ? (i = (o = new v).port2, o.port1.onmessage = O, r = c(i.postMessage, i, 1)) : a.addEventListener && "function" == typeof postMessage && !a.importScripts && d && "file:" !== d.protocol && !s(C) ? (r = C, a.addEventListener("message", O, !1)) : r = w in l("script") ? function (e) {
            u.appendChild(l("script")).onreadystatechange = function () {
              u.removeChild(this), x(e)
            }
          } : function (e) {
            setTimeout(S(e), 0)
          }), e.exports = {
            set: g,
            clear: h
          }
        },
        3231: (e, t, n) => {
          var r = n(6051),
            o = Math.max,
            i = Math.min;
          e.exports = function (e, t) {
            var n = r(e);
            return n < 0 ? o(n + t, 0) : i(n, t)
          }
        },
        7331: (e, t, n) => {
          var r = n(6051),
            o = n(4237);
          e.exports = function (e) {
            if (void 0 === e) return 0;
            var t = r(e),
              n = o(t);
            if (t !== n) throw RangeError("Wrong length or index");
            return n
          }
        },
        905: (e, t, n) => {
          var r = n(9337),
            o = n(8885);
          e.exports = function (e) {
            return r(o(e))
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
            o = Math.min;
          e.exports = function (e) {
            return e > 0 ? o(r(e), 9007199254740991) : 0
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
            var n, o;
            if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
            if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e))) return o;
            if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
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
            o = n(9859),
            i = n(7400),
            a = n(8200),
            s = n(9918),
            c = n(3816),
            u = n(7728),
            l = n(5358),
            f = n(5762),
            p = n(4237),
            d = n(7331),
            g = n(4262),
            h = n(2066),
            y = n(816),
            v = n(1589),
            _ = n(5052),
            b = n(2391),
            m = n(6540),
            w = n(8151).f,
            x = n(5215),
            S = n(9996).forEach,
            O = n(1832),
            C = n(1787),
            A = n(7933),
            E = n(6407),
            T = n(835),
            k = E.get,
            P = E.set,
            j = C.f,
            I = A.f,
            R = Math.round,
            M = o.RangeError,
            L = c.ArrayBuffer,
            F = c.DataView,
            D = s.NATIVE_ARRAY_BUFFER_VIEWS,
            N = s.TYPED_ARRAY_TAG,
            W = s.TypedArray,
            $ = s.TypedArrayPrototype,
            U = s.aTypedArrayConstructor,
            B = s.isTypedArray,
            G = "BYTES_PER_ELEMENT",
            Z = "Wrong length",
            J = function (e, t) {
              for (var n = 0, r = t.length, o = new(U(e))(r); r > n;) o[n] = t[n++];
              return o
            },
            V = function (e, t) {
              j(e, t, {
                get: function () {
                  return k(this)[t]
                }
              })
            },
            q = function (e) {
              var t;
              return e instanceof L || "ArrayBuffer" == (t = v(e)) || "SharedArrayBuffer" == t
            },
            H = function (e, t) {
              return B(e) && "symbol" != typeof t && t in e && String(+t) == String(t)
            },
            K = function (e, t) {
              return H(e, t = h(t, !0)) ? l(2, e[t]) : I(e, t)
            },
            X = function (e, t, n) {
              return !(H(e, t = h(t, !0)) && _(n) && y(n, "value")) || y(n, "get") || y(n, "set") || n.configurable || y(n, "writable") && !n.writable || y(n, "enumerable") && !n.enumerable ? j(e, t, n) : (e[t] = n.value, e)
            };
          i ? (D || (A.f = K, C.f = X, V($, "buffer"), V($, "byteOffset"), V($, "byteLength"), V($, "length")), r({
            target: "Object",
            stat: !0,
            forced: !D
          }, {
            getOwnPropertyDescriptor: K,
            defineProperty: X
          }), e.exports = function (e, t, n) {
            var i = e.match(/\d+$/)[0] / 8,
              s = e + (n ? "Clamped" : "") + "Array",
              c = "get" + e,
              l = "set" + e,
              h = o[s],
              y = h,
              v = y && y.prototype,
              C = {},
              A = function (e, t) {
                j(e, t, {
                  get: function () {
                    return function (e, t) {
                      var n = k(e);
                      return n.view[c](t * i + n.byteOffset, !0)
                    }(this, t)
                  },
                  set: function (e) {
                    return function (e, t, r) {
                      var o = k(e);
                      n && (r = (r = R(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), o.view[l](t * i + o.byteOffset, r, !0)
                    }(this, t, e)
                  },
                  enumerable: !0
                })
              };
            D ? a && (y = t((function (e, t, n, r) {
              return u(e, y, s), T(_(t) ? q(t) ? void 0 !== r ? new h(t, g(n, i), r) : void 0 !== n ? new h(t, g(n, i)) : new h(t) : B(t) ? J(y, t) : x.call(y, t) : new h(d(t)), e, y)
            })), m && m(y, W), S(w(h), (function (e) {
              e in y || f(y, e, h[e])
            })), y.prototype = v) : (y = t((function (e, t, n, r) {
              u(e, y, s);
              var o, a, c, l = 0,
                f = 0;
              if (_(t)) {
                if (!q(t)) return B(t) ? J(y, t) : x.call(y, t);
                o = t, f = g(n, i);
                var h = t.byteLength;
                if (void 0 === r) {
                  if (h % i) throw M(Z);
                  if ((a = h - f) < 0) throw M(Z)
                } else if ((a = p(r) * i) + f > h) throw M(Z);
                c = a / i
              } else c = d(t), o = new L(a = c * i);
              for (P(e, {
                  buffer: o,
                  byteOffset: f,
                  byteLength: a,
                  length: c,
                  view: new F(o)
                }); l < c;) A(e, l++)
            })), m && m(y, W), v = y.prototype = b($)), v.constructor !== y && f(v, "constructor", y), N && f(v, N, s), C[s] = y, r({
              global: !0,
              forced: y != h,
              sham: !D
            }, C), G in y || f(y, G, i), G in v || f(v, G, i), O(s)
          }) : e.exports = function () {}
        },
        8200: (e, t, n) => {
          var r = n(9859),
            o = n(4229),
            i = n(4575),
            a = n(9918).NATIVE_ARRAY_BUFFER_VIEWS,
            s = r.ArrayBuffer,
            c = r.Int8Array;
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
        5215: (e, t, n) => {
          var r = n(2991),
            o = n(4237),
            i = n(8830),
            a = n(1943),
            s = n(7636),
            c = n(9918).aTypedArrayConstructor;
          e.exports = function (e) {
            var t, n, u, l, f, p, d = r(e),
              g = arguments.length,
              h = g > 1 ? arguments[1] : void 0,
              y = void 0 !== h,
              v = i(d);
            if (null != v && !a(v))
              for (p = (f = v.call(d)).next, d = []; !(l = p.call(f)).done;) d.push(l.value);
            for (y && g > 2 && (h = s(h, arguments[2], 2)), n = o(d.length), u = new(c(this))(n), t = 0; n > t; t++) u[t] = y ? h(d[t], t) : d[t];
            return u
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
            o = n(3036),
            i = n(816),
            a = n(1441),
            s = n(3839),
            c = n(6969),
            u = o("wks"),
            l = r.Symbol,
            f = c ? l : l && l.withoutSetter || a;
          e.exports = function (e) {
            return i(u, e) && (s || "string" == typeof u[e]) || (s && i(l, e) ? u[e] = l[e] : u[e] = f("Symbol." + e)), u[e]
          }
        },
        1647: e => {
          e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
        },
        5738: (e, t, n) => {
          "use strict";
          var r = n(3103),
            o = n(7567),
            i = n(6540),
            a = n(2391),
            s = n(5762),
            c = n(5358),
            u = n(9003),
            l = function (e, t) {
              var n = this;
              if (!(n instanceof l)) return new l(e, t);
              i && (n = i(new Error(void 0), o(n))), void 0 !== t && s(n, "message", String(t));
              var r = [];
              return u(e, r.push, {
                that: r
              }), s(n, "errors", r), n
            };
          l.prototype = a(Error.prototype, {
            constructor: c(5, l),
            message: c(5, ""),
            name: c(5, "AggregateError")
          }), r({
            global: !0
          }, {
            AggregateError: l
          })
        },
        5388: (e, t, n) => {
          "use strict";
          var r = n(3103),
            o = n(9859),
            i = n(3816),
            a = n(1832),
            s = "ArrayBuffer",
            c = i.ArrayBuffer;
          r({
            global: !0,
            forced: o.ArrayBuffer !== c
          }, {
            ArrayBuffer: c
          }), a(s)
        },
        2994: (e, t, n) => {
          "use strict";
          var r = n(3103),
            o = n(4229),
            i = n(3816),
            a = n(1176),
            s = n(3231),
            c = n(4237),
            u = n(7942),
            l = i.ArrayBuffer,
            f = i.DataView,
            p = l.prototype.slice;
          r({
            target: "ArrayBuffer",
            proto: !0,
            unsafe: !0,
            forced: o((function () {
              return !new l(2).slice(1, void 0).byteLength
            }))
          }, {
            slice: function (e, t) {
              if (void 0 !== p && void 0 === t) return p.call(a(this), e);
              for (var n = a(this).byteLength, r = s(e, n), o = s(void 0 === t ? n : t, n), i = new(u(this, l))(c(o - r)), d = new f(this), g = new f(i), h = 0; r < o;) g.setUint8(h++, d.getUint8(r++));
              return i
            }
          })
        },
        4870: (e, t, n) => {
          "use strict";
          var r = n(3103),
            o = n(4990),
            i = n(2991),
            a = n(4237),
            s = n(3819),
            c = n(7501);
          r({
            target: "Array",
            proto: !0
          }, {
            flatMap: function (e) {
              var t, n = i(this),
                r = a(n.length);
              return s(e), (t = c(n, 0)).length = o(t, n, n, r, 0, 1, e, arguments.length > 1 ? arguments[1] : void 0), t
            }
          })
        },
        7072: (e, t, n) => {
          "use strict";
          var r = n(3103),
            o = n(4990),
            i = n(2991),
            a = n(4237),
            s = n(6051),
            c = n(7501);
          r({
            target: "Array",
            proto: !0
          }, {
            flat: function () {
              var e = arguments.length ? arguments[0] : void 0,
                t = i(this),
                n = a(t.length),
                r = c(t, 0);
              return r.length = o(r, t, t, n, 0, void 0 === e ? 1 : s(e)), r
            }
          })
        },
        5735: (e, t, n) => {
          "use strict";
          var r = n(905),
            o = n(9736),
            i = n(5495),
            a = n(6407),
            s = n(7675),
            c = "Array Iterator",
            u = a.set,
            l = a.getterFor(c);
          e.exports = s(Array, "Array", (function (e, t) {
            u(this, {
              type: c,
              target: r(e),
              index: 0,
              kind: t
            })
          }), (function () {
            var e = l(this),
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
          }), "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
        },
        9731: (e, t, n) => {
          "use strict";
          var r = n(3103),
            o = n(3143).right,
            i = n(6038),
            a = n(6358),
            s = n(8801);
          r({
            target: "Array",
            proto: !0,
            forced: !i("reduceRight") || !s && a > 79 && a < 83
          }, {
            reduceRight: function (e) {
              return o(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
            }
          })
        },
        3108: (e, t, n) => {
          "use strict";
          var r = n(3103),
            o = n(3143).left,
            i = n(6038),
            a = n(6358),
            s = n(8801);
          r({
            target: "Array",
            proto: !0,
            forced: !i("reduce") || !s && a > 79 && a < 83
          }, {
            reduce: function (e) {
              return o(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
            }
          })
        },
        9992: (e, t, n) => {
          "use strict";
          var r = n(3103),
            o = n(3718),
            i = [].reverse,
            a = [1, 2];
          r({
            target: "Array",
            proto: !0,
            forced: String(a) === String(a.reverse())
          }, {
            reverse: function () {
              return o(this) && (this.length = this.length), i.call(this)
            }
          })
        },
        3430: (e, t, n) => {
          "use strict";
          var r = n(3103),
            o = n(3819),
            i = n(2991),
            a = n(4237),
            s = n(4229),
            c = n(3867),
            u = n(6038),
            l = n(2671),
            f = n(8506),
            p = n(6358),
            d = n(9811),
            g = [],
            h = g.sort,
            y = s((function () {
              g.sort(void 0)
            })),
            v = s((function () {
              g.sort(null)
            })),
            _ = u("sort"),
            b = !s((function () {
              if (p) return p < 70;
              if (!(l && l > 3)) {
                if (f) return !0;
                if (d) return d < 603;
                var e, t, n, r, o = "";
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
                  for (r = 0; r < 47; r++) g.push({
                    k: t + r,
                    v: n
                  })
                }
                for (g.sort((function (e, t) {
                    return t.v - e.v
                  })), r = 0; r < g.length; r++) t = g[r].k.charAt(0), o.charAt(o.length - 1) !== t && (o += t);
                return "DGBEFHACIJK" !== o
              }
            }));
          r({
            target: "Array",
            proto: !0,
            forced: y || !v || !_ || !b
          }, {
            sort: function (e) {
              void 0 !== e && o(e);
              var t = i(this);
              if (b) return void 0 === e ? h.call(t) : h.call(t, e);
              var n, r, s = [],
                u = a(t.length);
              for (r = 0; r < u; r++) r in t && s.push(t[r]);
              for (n = (s = c(s, function (e) {
                  return function (t, n) {
                    return void 0 === n ? -1 : void 0 === t ? 1 : void 0 !== e ? +e(t, n) || 0 : String(t) > String(n) ? 1 : -1
                  }
                }(e))).length, r = 0; r < n;) t[r] = s[r++];
              for (; r < u;) delete t[r++];
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
            o = n(9037),
            i = Math.acosh,
            a = Math.log,
            s = Math.sqrt,
            c = Math.LN2;
          r({
            target: "Math",
            stat: !0,
            forced: !i || 710 != Math.floor(i(Number.MAX_VALUE)) || i(1 / 0) != 1 / 0
          }, {
            acosh: function (e) {
              return (e = +e) < 1 ? NaN : e > 94906265.62425156 ? a(e) + c : o(e - 1 + s(e - 1) * s(e + 1))
            }
          })
        },
        9509: (e, t, n) => {
          var r = n(3103),
            o = Math.hypot,
            i = Math.abs,
            a = Math.sqrt;
          r({
            target: "Math",
            stat: !0,
            forced: !!o && o(1 / 0, NaN) !== 1 / 0
          }, {
            hypot: function (e, t) {
              for (var n, r, o = 0, s = 0, c = arguments.length, u = 0; s < c;) u < (n = i(arguments[s++])) ? (o = o * (r = u / n) * r + 1, u = n) : o += n > 0 ? (r = n / u) * r : n;
              return u === 1 / 0 ? 1 / 0 : u * a(o)
            }
          })
        },
        7846: (e, t, n) => {
          "use strict";
          var r = n(3103),
            o = n(7400),
            i = n(5020),
            a = n(2991),
            s = n(3819),
            c = n(1787);
          o && r({
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
        6635: (e, t, n) => {
          "use strict";
          var r = n(3103),
            o = n(7400),
            i = n(5020),
            a = n(2991),
            s = n(3819),
            c = n(1787);
          o && r({
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
        5883: (e, t, n) => {
          var r = n(3103),
            o = n(7664).entries;
          r({
            target: "Object",
            stat: !0
          }, {
            entries: function (e) {
              return o(e)
            }
          })
        },
        1804: (e, t, n) => {
          var r = n(3103),
            o = n(9003),
            i = n(2324);
          r({
            target: "Object",
            stat: !0
          }, {
            fromEntries: function (e) {
              var t = {};
              return o(e, (function (e, n) {
                i(t, e, n)
              }), {
                AS_ENTRIES: !0
              }), t
            }
          })
        },
        2775: (e, t, n) => {
          var r = n(3103),
            o = n(7400),
            i = n(4826),
            a = n(905),
            s = n(7933),
            c = n(2324);
          r({
            target: "Object",
            stat: !0,
            sham: !o
          }, {
            getOwnPropertyDescriptors: function (e) {
              for (var t, n, r = a(e), o = s.f, u = i(r), l = {}, f = 0; u.length > f;) void 0 !== (n = o(r, t = u[f++])) && c(l, t, n);
              return l
            }
          })
        },
        2586: (e, t, n) => {
          "use strict";
          var r = n(3103),
            o = n(7400),
            i = n(5020),
            a = n(2991),
            s = n(2066),
            c = n(7567),
            u = n(7933).f;
          o && r({
            target: "Object",
            proto: !0,
            forced: i
          }, {
            __lookupGetter__: function (e) {
              var t, n = a(this),
                r = s(e, !0);
              do {
                if (t = u(n, r)) return t.get
              } while (n = c(n))
            }
          })
        },
        3045: (e, t, n) => {
          "use strict";
          var r = n(3103),
            o = n(7400),
            i = n(5020),
            a = n(2991),
            s = n(2066),
            c = n(7567),
            u = n(7933).f;
          o && r({
            target: "Object",
            proto: !0,
            forced: i
          }, {
            __lookupSetter__: function (e) {
              var t, n = a(this),
                r = s(e, !0);
              do {
                if (t = u(n, r)) return t.set
              } while (n = c(n))
            }
          })
        },
        7890: (e, t, n) => {
          var r = n(3103),
            o = n(7664).values;
          r({
            target: "Object",
            stat: !0
          }, {
            values: function (e) {
              return o(e)
            }
          })
        },
        7919: (e, t, n) => {
          "use strict";
          var r = n(3103),
            o = n(3819),
            i = n(6485),
            a = n(4624),
            s = n(9003);
          r({
            target: "Promise",
            stat: !0
          }, {
            allSettled: function (e) {
              var t = this,
                n = i.f(t),
                r = n.resolve,
                c = n.reject,
                u = a((function () {
                  var n = o(t.resolve),
                    i = [],
                    a = 0,
                    c = 1;
                  s(e, (function (e) {
                    var o = a++,
                      s = !1;
                    i.push(void 0), c++, n.call(t, e).then((function (e) {
                      s || (s = !0, i[o] = {
                        status: "fulfilled",
                        value: e
                      }, --c || r(i))
                    }), (function (e) {
                      s || (s = !0, i[o] = {
                        status: "rejected",
                        reason: e
                      }, --c || r(i))
                    }))
                  })), --c || r(i)
                }));
              return u.error && c(u.value), n.promise
            }
          })
        },
        7178: (e, t, n) => {
          "use strict";
          var r = n(3103),
            o = n(3819),
            i = n(1333),
            a = n(6485),
            s = n(4624),
            c = n(9003),
            u = "No one promise resolved";
          r({
            target: "Promise",
            stat: !0
          }, {
            any: function (e) {
              var t = this,
                n = a.f(t),
                r = n.resolve,
                l = n.reject,
                f = s((function () {
                  var n = o(t.resolve),
                    a = [],
                    s = 0,
                    f = 1,
                    p = !1;
                  c(e, (function (e) {
                    var o = s++,
                      c = !1;
                    a.push(void 0), f++, n.call(t, e).then((function (e) {
                      c || p || (p = !0, r(e))
                    }), (function (e) {
                      c || p || (c = !0, a[o] = e, --f || l(new(i("AggregateError"))(a, u)))
                    }))
                  })), --f || l(new(i("AggregateError"))(a, u))
                }));
              return f.error && l(f.value), n.promise
            }
          })
        },
        1515: (e, t, n) => {
          "use strict";
          var r = n(3103),
            o = n(4231),
            i = n(4226),
            a = n(4229),
            s = n(1333),
            c = n(7942),
            u = n(7757),
            l = n(7487);
          if (r({
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
                  n = "function" == typeof e;
                return this.then(n ? function (n) {
                  return u(t, e()).then((function () {
                    return n
                  }))
                } : e, n ? function (n) {
                  return u(t, e()).then((function () {
                    throw n
                  }))
                } : e)
              }
            }), !o && "function" == typeof i) {
            var f = s("Promise").prototype.finally;
            i.prototype.finally !== f && l(i.prototype, "finally", f, {
              unsafe: !0
            })
          }
        },
        3439: (e, t, n) => {
          "use strict";
          var r, o, i, a, s = n(3103),
            c = n(4231),
            u = n(9859),
            l = n(1333),
            f = n(4226),
            p = n(7487),
            d = n(8787),
            g = n(6540),
            h = n(4555),
            y = n(1832),
            v = n(5052),
            _ = n(3819),
            b = n(7728),
            m = n(8511),
            w = n(9003),
            x = n(4575),
            S = n(7942),
            O = n(5795).set,
            C = n(4794),
            A = n(7757),
            E = n(4665),
            T = n(6485),
            k = n(4624),
            P = n(6407),
            j = n(6541),
            I = n(95),
            R = n(8639),
            M = n(8801),
            L = n(6358),
            F = I("species"),
            D = "Promise",
            N = P.get,
            W = P.set,
            $ = P.getterFor(D),
            U = f && f.prototype,
            B = f,
            G = U,
            Z = u.TypeError,
            J = u.document,
            V = u.process,
            q = T.f,
            H = q,
            K = !!(J && J.createEvent && u.dispatchEvent),
            X = "function" == typeof PromiseRejectionEvent,
            z = "unhandledrejection",
            Y = !1,
            Q = j(D, (function () {
              var e = m(B) !== String(B);
              if (!e && 66 === L) return !0;
              if (c && !G.finally) return !0;
              if (L >= 51 && /native code/.test(B)) return !1;
              var t = new B((function (e) {
                  e(1)
                })),
                n = function (e) {
                  e((function () {}), (function () {}))
                };
              return (t.constructor = {})[F] = n, !(Y = t.then((function () {})) instanceof n) || !e && R && !X
            })),
            ee = Q || !x((function (e) {
              B.all(e).catch((function () {}))
            })),
            te = function (e) {
              var t;
              return !(!v(e) || "function" != typeof (t = e.then)) && t
            },
            ne = function (e, t) {
              if (!e.notified) {
                e.notified = !0;
                var n = e.reactions;
                C((function () {
                  for (var r = e.value, o = 1 == e.state, i = 0; n.length > i;) {
                    var a, s, c, u = n[i++],
                      l = o ? u.ok : u.fail,
                      f = u.resolve,
                      p = u.reject,
                      d = u.domain;
                    try {
                      l ? (o || (2 === e.rejection && ae(e), e.rejection = 1), !0 === l ? a = r : (d && d.enter(), a = l(r), d && (d.exit(), c = !0)), a === u.promise ? p(Z("Promise-chain cycle")) : (s = te(a)) ? s.call(a, f, p) : f(a)) : p(r)
                    } catch (e) {
                      d && !c && d.exit(), p(e)
                    }
                  }
                  e.reactions = [], e.notified = !1, t && !e.rejection && oe(e)
                }))
              }
            },
            re = function (e, t, n) {
              var r, o;
              K ? ((r = J.createEvent("Event")).promise = t, r.reason = n, r.initEvent(e, !1, !0), u.dispatchEvent(r)) : r = {
                promise: t,
                reason: n
              }, !X && (o = u["on" + e]) ? o(r) : e === z && E("Unhandled promise rejection", n)
            },
            oe = function (e) {
              O.call(u, (function () {
                var t, n = e.facade,
                  r = e.value;
                if (ie(e) && (t = k((function () {
                    M ? V.emit("unhandledRejection", r, n) : re(z, n, r)
                  })), e.rejection = M || ie(e) ? 2 : 1, t.error)) throw t.value
              }))
            },
            ie = function (e) {
              return 1 !== e.rejection && !e.parent
            },
            ae = function (e) {
              O.call(u, (function () {
                var t = e.facade;
                M ? V.emit("rejectionHandled", t) : re("rejectionhandled", t, e.value)
              }))
            },
            se = function (e, t, n) {
              return function (r) {
                e(t, r, n)
              }
            },
            ce = function (e, t, n) {
              e.done || (e.done = !0, n && (e = n), e.value = t, e.state = 2, ne(e, !0))
            },
            ue = function (e, t, n) {
              if (!e.done) {
                e.done = !0, n && (e = n);
                try {
                  if (e.facade === t) throw Z("Promise can't be resolved itself");
                  var r = te(t);
                  r ? C((function () {
                    var n = {
                      done: !1
                    };
                    try {
                      r.call(t, se(ue, n, e), se(ce, n, e))
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
          if (Q && (G = (B = function (e) {
              b(this, B, D), _(e), r.call(this);
              var t = N(this);
              try {
                e(se(ue, t), se(ce, t))
              } catch (e) {
                ce(t, e)
              }
            }).prototype, (r = function (e) {
              W(this, {
                type: D,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: [],
                rejection: !1,
                state: 0,
                value: void 0
              })
            }).prototype = d(G, {
              then: function (e, t) {
                var n = $(this),
                  r = q(S(this, B));
                return r.ok = "function" != typeof e || e, r.fail = "function" == typeof t && t, r.domain = M ? V.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && ne(n, !1), r.promise
              },
              catch: function (e) {
                return this.then(void 0, e)
              }
            }), o = function () {
              var e = new r,
                t = N(e);
              this.promise = e, this.resolve = se(ue, t), this.reject = se(ce, t)
            }, T.f = q = function (e) {
              return e === B || e === i ? new o(e) : H(e)
            }, !c && "function" == typeof f && U !== Object.prototype)) {
            a = U.then, Y || (p(U, "then", (function (e, t) {
              var n = this;
              return new B((function (e, t) {
                a.call(n, e, t)
              })).then(e, t)
            }), {
              unsafe: !0
            }), p(U, "catch", G.catch, {
              unsafe: !0
            }));
            try {
              delete U.constructor
            } catch (e) {}
            g && g(U, G)
          }
          s({
            global: !0,
            wrap: !0,
            forced: Q
          }, {
            Promise: B
          }), h(B, D, !1, !0), y(D), i = l(D), s({
            target: D,
            stat: !0,
            forced: Q
          }, {
            reject: function (e) {
              var t = q(this);
              return t.reject.call(void 0, e), t.promise
            }
          }), s({
            target: D,
            stat: !0,
            forced: c || Q
          }, {
            resolve: function (e) {
              return A(c && this === i ? B : this, e)
            }
          }), s({
            target: D,
            stat: !0,
            forced: ee
          }, {
            all: function (e) {
              var t = this,
                n = q(t),
                r = n.resolve,
                o = n.reject,
                i = k((function () {
                  var n = _(t.resolve),
                    i = [],
                    a = 0,
                    s = 1;
                  w(e, (function (e) {
                    var c = a++,
                      u = !1;
                    i.push(void 0), s++, n.call(t, e).then((function (e) {
                      u || (u = !0, i[c] = e, --s || r(i))
                    }), o)
                  })), --s || r(i)
                }));
              return i.error && o(i.value), n.promise
            },
            race: function (e) {
              var t = this,
                n = q(t),
                r = n.reject,
                o = k((function () {
                  var o = _(t.resolve);
                  w(e, (function (e) {
                    o.call(t, e).then(n.resolve, r)
                  }))
                }));
              return o.error && r(o.value), n.promise
            }
          })
        },
        7368: (e, t, n) => {
          var r = n(7400),
            o = n(9859),
            i = n(6541),
            a = n(835),
            s = n(5762),
            c = n(1787).f,
            u = n(8151).f,
            l = n(8311),
            f = n(895),
            p = n(5650),
            d = n(7487),
            g = n(4229),
            h = n(816),
            y = n(6407).enforce,
            v = n(1832),
            _ = n(95),
            b = n(2926),
            m = n(461),
            w = _("match"),
            x = o.RegExp,
            S = x.prototype,
            O = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
            C = /a/g,
            A = /a/g,
            E = new x(C) !== C,
            T = p.UNSUPPORTED_Y,
            k = r && (!E || T || b || m || g((function () {
              return A[w] = !1, x(C) != C || x(A) == A || "/a/i" != x(C, "i")
            })));
          if (i("RegExp", k)) {
            for (var P = function (e, t) {
                var n, r, o, i, c, u, p = this instanceof P,
                  d = l(e),
                  g = void 0 === t,
                  v = [],
                  _ = e;
                if (!p && d && g && e.constructor === P) return e;
                if ((d || e instanceof P) && (e = e.source, g && (t = "flags" in _ ? _.flags : f.call(_))), e = void 0 === e ? "" : String(e), t = void 0 === t ? "" : String(t), _ = e, b && "dotAll" in C && (r = !!t && t.indexOf("s") > -1) && (t = t.replace(/s/g, "")), n = t, T && "sticky" in C && (o = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, "")), m && (e = (i = function (e) {
                    for (var t, n = e.length, r = 0, o = "", i = [], a = {}, s = !1, c = !1, u = 0, l = ""; r <= n; r++) {
                      if ("\\" === (t = e.charAt(r))) t += e.charAt(++r);
                      else if ("]" === t) s = !1;
                      else if (!s) switch (!0) {
                        case "[" === t:
                          s = !0;
                          break;
                        case "(" === t:
                          O.test(e.slice(r + 1)) && (r += 2, c = !0), o += t, u++;
                          continue;
                        case ">" === t && c:
                          if ("" === l || h(a, l)) throw new SyntaxError("Invalid capture group name");
                          a[l] = !0, i.push([l, u]), c = !1, l = "";
                          continue
                      }
                      c ? l += t : o += t
                    }
                    return [o, i]
                  }(e))[0], v = i[1]), c = a(x(e, t), p ? this : S, P), (r || o || v.length) && (u = y(c), r && (u.dotAll = !0, u.raw = P(function (e) {
                    for (var t, n = e.length, r = 0, o = "", i = !1; r <= n; r++) "\\" !== (t = e.charAt(r)) ? i || "." !== t ? ("[" === t ? i = !0 : "]" === t && (i = !1), o += t) : o += "[\\s\\S]" : o += t + e.charAt(++r);
                    return o
                  }(e), n)), o && (u.sticky = !0), v.length && (u.groups = v)), e !== _) try {
                  s(c, "source", "" === _ ? "(?:)" : _)
                } catch (e) {}
                return c
              }, j = function (e) {
                e in P || c(P, e, {
                  configurable: !0,
                  get: function () {
                    return x[e]
                  },
                  set: function (t) {
                    x[e] = t
                  }
                })
              }, I = u(x), R = 0; I.length > R;) j(I[R++]);
            S.constructor = P, P.prototype = S, d(o, "RegExp", P)
          }
          v("RegExp")
        },
        7950: (e, t, n) => {
          "use strict";
          var r = n(3103),
            o = n(3466);
          r({
            target: "RegExp",
            proto: !0,
            forced: /./.exec !== o
          }, {
            exec: o
          })
        },
        103: (e, t, n) => {
          var r = n(7400),
            o = n(1787),
            i = n(895),
            a = n(4229);
          r && a((function () {
            return "sy" !== Object.getOwnPropertyDescriptor(RegExp.prototype, "flags").get.call({
              dotAll: !0,
              sticky: !0
            })
          })) && o.f(RegExp.prototype, "flags", {
            configurable: !0,
            get: i
          })
        },
        3887: (e, t, n) => {
          "use strict";
          var r = n(3103),
            o = n(3723),
            i = n(8885),
            a = n(4237),
            s = n(3819),
            c = n(1176),
            u = n(7079),
            l = n(8311),
            f = n(895),
            p = n(5762),
            d = n(4229),
            g = n(95),
            h = n(7942),
            y = n(6637),
            v = n(6407),
            _ = n(4231),
            b = g("matchAll"),
            m = "RegExp String",
            w = "RegExp String Iterator",
            x = v.set,
            S = v.getterFor(w),
            O = RegExp.prototype,
            C = O.exec,
            A = "".matchAll,
            E = !!A && !d((function () {
              "a".matchAll(/./)
            })),
            T = o((function (e, t, n, r) {
              x(this, {
                type: w,
                regexp: e,
                string: t,
                global: n,
                unicode: r,
                done: !1
              })
            }), m, (function () {
              var e = S(this);
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
                  return C.call(e, t)
                }(t, n);
              return null === r ? {
                value: void 0,
                done: e.done = !0
              } : e.global ? ("" == String(r[0]) && (t.lastIndex = y(n, a(t.lastIndex), e.unicode)), {
                value: r,
                done: !1
              }) : (e.done = !0, {
                value: r,
                done: !1
              })
            })),
            k = function (e) {
              var t, n, r, o, i, s, u = c(this),
                l = String(e);
              return t = h(u, RegExp), void 0 === (n = u.flags) && u instanceof RegExp && !("flags" in O) && (n = f.call(u)), r = void 0 === n ? "" : String(n), o = new t(t === RegExp ? u.source : u, r), i = !!~r.indexOf("g"), s = !!~r.indexOf("u"), o.lastIndex = a(u.lastIndex), new T(o, l, i, s)
            };
          r({
            target: "String",
            proto: !0,
            forced: E
          }, {
            matchAll: function (e) {
              var t, n, r, o = i(this);
              if (null != e) {
                if (l(e) && !~String(i("flags" in O ? e.flags : f.call(e))).indexOf("g")) throw TypeError("`.matchAll` does not allow non-global regexes");
                if (E) return A.apply(o, arguments);
                if (void 0 === (n = e[b]) && _ && "RegExp" == u(e) && (n = k), null != n) return s(n).call(e, o)
              } else if (E) return A.apply(o, arguments);
              return t = String(o), r = new RegExp(e, "g"), _ ? k.call(r, t) : r[b](t)
            }
          }), _ || b in O || p(O, b, k)
        },
        977: (e, t, n) => {
          "use strict";
          var r = n(3103),
            o = n(6650).end;
          r({
            target: "String",
            proto: !0,
            forced: n(7456)
          }, {
            padEnd: function (e) {
              return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
          })
        },
        5734: (e, t, n) => {
          "use strict";
          var r = n(3103),
            o = n(6650).start;
          r({
            target: "String",
            proto: !0,
            forced: n(7456)
          }, {
            padStart: function (e) {
              return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
          })
        },
        1639: (e, t, n) => {
          "use strict";
          var r = n(3103),
            o = n(8885),
            i = n(8311),
            a = n(895),
            s = n(17),
            c = n(95),
            u = n(4231),
            l = c("replace"),
            f = RegExp.prototype,
            p = Math.max,
            d = function (e, t, n) {
              return n > e.length ? -1 : "" === t ? n : e.indexOf(t, n)
            };
          r({
            target: "String",
            proto: !0
          }, {
            replaceAll: function (e, t) {
              var n, r, c, g, h, y, v, _, b = o(this),
                m = 0,
                w = 0,
                x = "";
              if (null != e) {
                if ((n = i(e)) && !~String(o("flags" in f ? e.flags : a.call(e))).indexOf("g")) throw TypeError("`.replaceAll` does not allow non-global regexes");
                if (void 0 !== (r = e[l])) return r.call(e, b, t);
                if (u && n) return String(b).replace(e, t)
              }
              for (c = String(b), g = String(e), (h = "function" == typeof t) || (t = String(t)), y = g.length, v = p(1, y), m = d(c, g, 0); - 1 !== m;) _ = h ? String(t(g, m, c)) : s(g, c, m, [], void 0, t), x += c.slice(w, m) + _, w = m + y, m = d(c, g, m + v);
              return w < c.length && (x += c.slice(w)), x
            }
          })
        },
        5940: (e, t, n) => {
          "use strict";
          var r = n(4954),
            o = n(4229),
            i = n(1176),
            a = n(4237),
            s = n(6051),
            c = n(8885),
            u = n(6637),
            l = n(17),
            f = n(8115),
            p = n(95)("replace"),
            d = Math.max,
            g = Math.min,
            h = "$0" === "a".replace(/./, "$0"),
            y = !!/./ [p] && "" === /./ [p]("a", "$0");
          r("replace", (function (e, t, n) {
            var r = y ? "$" : "$0";
            return [function (e, n) {
              var r = c(this),
                o = null == e ? void 0 : e[p];
              return void 0 !== o ? o.call(e, r, n) : t.call(String(r), e, n)
            }, function (e, o) {
              if ("string" == typeof o && -1 === o.indexOf(r) && -1 === o.indexOf("$<")) {
                var c = n(t, this, e, o);
                if (c.done) return c.value
              }
              var p = i(this),
                h = String(e),
                y = "function" == typeof o;
              y || (o = String(o));
              var v = p.global;
              if (v) {
                var _ = p.unicode;
                p.lastIndex = 0
              }
              for (var b = [];;) {
                var m = f(p, h);
                if (null === m) break;
                if (b.push(m), !v) break;
                "" === String(m[0]) && (p.lastIndex = u(h, a(p.lastIndex), _))
              }
              for (var w, x = "", S = 0, O = 0; O < b.length; O++) {
                m = b[O];
                for (var C = String(m[0]), A = d(g(s(m.index), h.length), 0), E = [], T = 1; T < m.length; T++) E.push(void 0 === (w = m[T]) ? w : String(w));
                var k = m.groups;
                if (y) {
                  var P = [C].concat(E, A, h);
                  void 0 !== k && P.push(k);
                  var j = String(o.apply(void 0, P))
                } else j = l(C, h, A, E, k, o);
                A >= S && (x += h.slice(S, A) + j, S = A + C.length)
              }
              return x + h.slice(S)
            }]
          }), !!o((function () {
            var e = /./;
            return e.exec = function () {
              var e = [];
              return e.groups = {
                a: "7"
              }, e
            }, "7" !== "".replace(e, "$<a>")
          })) || !h || y)
        },
        8319: (e, t, n) => {
          "use strict";
          var r = n(4954),
            o = n(8311),
            i = n(1176),
            a = n(8885),
            s = n(7942),
            c = n(6637),
            u = n(4237),
            l = n(8115),
            f = n(3466),
            p = n(5650),
            d = n(4229),
            g = p.UNSUPPORTED_Y,
            h = [].push,
            y = Math.min,
            v = 4294967295;
          r("split", (function (e, t, n) {
            var r;
            return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, n) {
              var r = String(a(this)),
                i = void 0 === n ? v : n >>> 0;
              if (0 === i) return [];
              if (void 0 === e) return [r];
              if (!o(e)) return t.call(r, e, i);
              for (var s, c, u, l = [], p = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), d = 0, g = new RegExp(e.source, p + "g");
                (s = f.call(g, r)) && !((c = g.lastIndex) > d && (l.push(r.slice(d, s.index)), s.length > 1 && s.index < r.length && h.apply(l, s.slice(1)), u = s[0].length, d = c, l.length >= i));) g.lastIndex === s.index && g.lastIndex++;
              return d === r.length ? !u && g.test("") || l.push("") : l.push(r.slice(d)), l.length > i ? l.slice(0, i) : l
            } : "0".split(void 0, 0).length ? function (e, n) {
              return void 0 === e && 0 === n ? [] : t.call(this, e, n)
            } : t, [function (t, n) {
              var o = a(this),
                i = null == t ? void 0 : t[e];
              return void 0 !== i ? i.call(t, o, n) : r.call(String(o), t, n)
            }, function (e, o) {
              var a = n(r, this, e, o, r !== t);
              if (a.done) return a.value;
              var f = i(this),
                p = String(e),
                d = s(f, RegExp),
                h = f.unicode,
                _ = (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.unicode ? "u" : "") + (g ? "g" : "y"),
                b = new d(g ? "^(?:" + f.source + ")" : f, _),
                m = void 0 === o ? v : o >>> 0;
              if (0 === m) return [];
              if (0 === p.length) return null === l(b, p) ? [p] : [];
              for (var w = 0, x = 0, S = []; x < p.length;) {
                b.lastIndex = g ? 0 : x;
                var O, C = l(b, g ? p.slice(x) : p);
                if (null === C || (O = y(u(b.lastIndex + (g ? x : 0)), p.length)) === w) x = c(p, x, h);
                else {
                  if (S.push(p.slice(w, x)), S.length === m) return S;
                  for (var A = 1; A <= C.length - 1; A++)
                    if (S.push(C[A]), S.length === m) return S;
                  x = w = O
                }
              }
              return S.push(p.slice(w)), S
            }]
          }), !!d((function () {
            var e = /(?:)/,
              t = e.exec;
            e.exec = function () {
              return t.apply(this, arguments)
            };
            var n = "ab".split(e);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
          })), g)
        },
        8827: (e, t, n) => {
          "use strict";
          var r = n(3103),
            o = n(1017).end,
            i = n(9445)("trimEnd"),
            a = i ? function () {
              return o(this)
            } : "".trimEnd;
          r({
            target: "String",
            proto: !0,
            forced: i
          }, {
            trimEnd: a,
            trimRight: a
          })
        },
        1715: (e, t, n) => {
          "use strict";
          var r = n(3103),
            o = n(1017).start,
            i = n(9445)("trimStart"),
            a = i ? function () {
              return o(this)
            } : "".trimStart;
          r({
            target: "String",
            proto: !0,
            forced: i
          }, {
            trimStart: a,
            trimLeft: a
          })
        },
        5794: (e, t, n) => {
          "use strict";
          var r = n(3103),
            o = n(1017).trim;
          r({
            target: "String",
            proto: !0,
            forced: n(9445)("trim")
          }, {
            trim: function () {
              return o(this)
            }
          })
        },
        6882: (e, t, n) => {
          n(8423)("asyncIterator")
        },
        634: (e, t, n) => {
          "use strict";
          var r = n(3103),
            o = n(7400),
            i = n(9859),
            a = n(816),
            s = n(5052),
            c = n(1787).f,
            u = n(7081),
            l = i.Symbol;
          if (o && "function" == typeof l && (!("description" in l.prototype) || void 0 !== l().description)) {
            var f = {},
              p = function () {
                var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                  t = this instanceof p ? new l(e) : void 0 === e ? l() : l(e);
                return "" === e && (f[t] = !0), t
              };
            u(p, l);
            var d = p.prototype = l.prototype;
            d.constructor = p;
            var g = d.toString,
              h = "Symbol(test)" == String(l("test")),
              y = /^Symbol\((.*)\)[^)]+$/;
            c(d, "description", {
              configurable: !0,
              get: function () {
                var e = s(this) ? this.valueOf() : this,
                  t = g.call(e);
                if (a(f, e)) return "";
                var n = h ? t.slice(7, -1) : t.replace(y, "$1");
                return "" === n ? void 0 : n
              }
            }), r({
              global: !0,
              forced: !0
            }, {
              Symbol: p
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
            o = n(8200),
            i = r.aTypedArrayConstructor;
          (0, r.exportTypedArrayStaticMethod)("of", (function () {
            for (var e = 0, t = arguments.length, n = new(i(this))(t); t > e;) n[e] = arguments[e++];
            return n
          }), o)
        },
        315: (e, t, n) => {
          "use strict";
          var r = n(9918),
            o = n(9859),
            i = n(4229),
            a = n(3819),
            s = n(4237),
            c = n(3867),
            u = n(2671),
            l = n(8506),
            f = n(6358),
            p = n(9811),
            d = r.aTypedArray,
            g = r.exportTypedArrayMethod,
            h = o.Uint16Array,
            y = h && h.prototype.sort,
            v = !!y && !i((function () {
              var e = new h(2);
              e.sort(null), e.sort({})
            })),
            _ = !!y && !i((function () {
              if (f) return f < 74;
              if (u) return u < 67;
              if (l) return !0;
              if (p) return p < 602;
              var e, t, n = new h(516),
                r = Array(516);
              for (e = 0; e < 516; e++) t = e % 4, n[e] = 515 - e, r[e] = e - 2 * t + 3;
              for (n.sort((function (e, t) {
                  return (e / 4 | 0) - (t / 4 | 0)
                })), e = 0; e < 516; e++)
                if (n[e] !== r[e]) return !0
            }));
          g("sort", (function (e) {
            var t = this;
            if (void 0 !== e && a(e), _) return y.call(t, e);
            d(t);
            var n, r = s(t.length),
              o = Array(r);
            for (n = 0; n < r; n++) o[n] = t[n];
            for (o = c(t, function (e) {
                return function (t, n) {
                  return void 0 !== e ? +e(t, n) || 0 : n != n ? -1 : t != t ? 1 : 0 === t && 0 === n ? 1 / t > 0 && 1 / n < 0 ? 1 : -1 : t > n
                }
              }(e)), n = 0; n < r; n++) t[n] = o[n];
            return t
          }), !_ || v)
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
            o = n(5694),
            i = n(5735),
            a = n(5762),
            s = n(95),
            c = s("iterator"),
            u = s("toStringTag"),
            l = i.values;
          for (var f in o) {
            var p = r[f],
              d = p && p.prototype;
            if (d) {
              if (d[c] !== l) try {
                a(d, c, l)
              } catch (e) {
                d[c] = l
              }
              if (d[u] || a(d, u, f), o[f])
                for (var g in i)
                  if (d[g] !== i[g]) try {
                    a(d, g, i[g])
                  } catch (e) {
                    d[g] = i[g]
                  }
            }
          }
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
        o = e.g.__wxConfig,
        i = r.envType,
        a = r.contextType,
        s = "Service" === i,
        c = "WebView" === i,
        u = "Worker" === i,
        l = "Widget" === i,
        f = c || s && 0 === a.indexOf("App:"),
        p = s && 0 === a.indexOf("Game:"),
        d = u && "function" == typeof e.g.workerInvokeJsApi,
        g = !!o.isIsolateContext,
        h = s && (g && a.indexOf("Uncertain") >= 0 || a.indexOf("MainContext") >= 0),
        y = s && a.indexOf("SubContext") >= 0,
        v = h || y,
        _ = c || h,
        b = "wxlib" === o.workerContentType,
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
          isApp: f,
          isMainContext: h,
          isSubContext: y,
          isSafeEnv: _,
          isService: s,
          isWebView: c,
          isWorker: u,
          isWidget: l,
          isSupportWorkerAPI: d,
          typeStr: i,
          isWXLibWorker: b
        },
        w = new n,
        x = {},
        S = "configReady",
        O = "libraryReady";

      function C(e, t) {
        e in x ? t(x[e]) : T.once("lifeCycle:" + e, t)
      }

      function A(e, t) {
        return !(e in x) && (x[e] = t, T.emit("lifeCycle:" + e, t))
      }
      const E = e.g,
        T = {
          EventEmitter: n,
          on: w.on.bind(w),
          emit: w.emit.bind(w),
          once: w.once.bind(w),
          onConfigReady: C.bind(null, S),
          emitConfigReady: A.bind(null, S),
          get isConfigReady() {
            return S in x
          },
          onLibraryReady: C.bind(null, O),
          emitLibraryReady: A.bind(null, O),
          get isLibraryReady() {
            return O in x
          },
          onBridgeReady(e) {
            "undefined" != typeof WeixinJSBridge ? e() : "object" == typeof document && document.addEventListener("WeixinJSBridgeReady", e, !1)
          },
          env: m,
          global: E
        };
      "undefined" != typeof __Function__ && (Function = function () {
        return "return this" === arguments[arguments.length - 1] ? function () {
          return E
        } : new __Function__(...arguments)
      }, Function.prototype = __Function__.prototype);
      e.g.__wxLibrary.onEnd = function () {
        T.emitLibraryReady({})
      };
      const k = T
    })(), Foundation = t.default
  })(),
  function (e) {
    "use strict";
    var t = JSON.parse,
      n = JSON.stringify,
      r = Object.defineProperty,
      o = Foundation.env.isSubContext,
      i = Foundation.env.isSafeEnv,
      a = {},
      s = (Foundation.env.isWXLibWorker, ["env", "appLaunchInfo", "ext", "wxAppInfo", "debug", "entryPagePath", "envVersion", "tabBar", "pages", "page", "accountInfo", "global", "platform", "system", "appType", "networkTimeout", "navigateToMiniProgramAppIdList", "plugins", "extAppid", "host", "prerender"]);

    function c(e, t, n, o) {
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
            return "function" != typeof o ? o : o()
          } catch (e) {
            return
          }
        },
        set: function (e) {
          t[n] = e
        }
      })
    }

    function u(e) {
      return t(n(e))
    }
    var l = !0 === (__wxConfig = void 0 !== e.__wxConfig ? i ? Object.assign({}, e.__wxConfig) : u(e.__wxConfig) : {}).preload,
      f = !1,
      p = [],
      d = [],
      g = Foundation.env.typeStr;
    Foundation.env.isSubContext && (g = "SubContext");

    function h(e, t) {
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
        f ? void 0 !== __wxConfig && h(e, __wxConfig) : "function" == typeof e && p.push(e)
      },
      _ = function (t) {
        t.tabBar && t.tabBar.list && t.tabBar.list.forEach((function (e) {
          delete e.iconData, delete e.selectedIconData
        })), delete t.permission;
        var n = t.subPackages || t.subpackages;
        return n && n.length > 0 && (n.forEach((function (e) {
          delete e.pages
        })), t.subPackages = t.subpackages = n), f && (__libVersionInfo__.features && __libVersionInfo__.features.pruneWxConfigByPage && (o || (__wxConfig._preloadRule = __wxConfig.preloadRule || {}, __wxConfig._page = __wxConfig.page || {}, delete __wxConfig.preloadRule, delete __wxConfig.page), __wxConfig.updatePage = function (e, t) {
          __wxConfig.page = __wxConfig.page || {}, __wxConfig.page[e] = __wxConfig.page[e + ".html"] = t, a[e + ".html"] = u(t)
        }, __wxConfig.updatePreloadRule = function (e, t) {
          __wxConfig.preloadRule = __wxConfig.preloadRule || {}, __wxConfig.preloadRule[e] = t
        }), e.__wxConfig.page = e.__wxConfig.page || {}, __wxConfig.page = __wxConfig.page || {}), t
      },
      b = function (e) {
        return e.onReady = v, e.beforeReady = y, o || (e.preload = l), e.isReady = f, e.isSubContext = o, e.envTag = g, e.isSafeContext = i, e.sdkVersion = e.SDKVersion = Foundation.env.SDKVersion, e.twoPhaseInject = !0, e.platform = Foundation.env.platform, e.brand || "ios" !== e.platform || (e.brand = "iPhone"), "number" == typeof e.pixelRatio ? e.devicePixelRatio = e.pixelRatio : "number" == typeof e.devicePixelRatio && (e.pixelRatio = e.devicePixelRatio), e
      },
      m = function () {
        void 0 === e.__wxConfig || f || (f = !0, Object.assign(__wxConfig, i ? e.__wxConfig : u(e.__wxConfig)), __wxConfig = b(__wxConfig), __wxConfig = _(__wxConfig), function (e) {
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
              h(e, __wxConfig)
            })), __wxConfig.onReadyEnd = Date.now(), p = [],
            function () {
              if (!i) {
                var t = e.__wxConfig,
                  n = {},
                  r = {};
                a = t.page || {}, __libVersionInfo__.features && __libVersionInfo__.features.pruneWxConfigByPage && (a = {});
                try {
                  c(r, n, "deprecated", !0), s.forEach((function (e) {
                    if (e in t) {
                      var o = t[e];
                      switch (e) {
                        case "page":
                          c(r, n, e, a);
                          break;
                        case "env":
                          c(r, n, e, (function () {
                            return console.warn("DeprecationWarning: __wxConfig.env is deprecated, please use wx.env instead."), {
                              USER_DATA_PATH: o.USER_DATA_PATH
                            }
                          }));
                          break;
                        case "accountInfo":
                          c(r, n, e, {
                            appId: o.appId,
                            icon: o.icon,
                            nickname: o.nickname
                          });
                          break;
                        case "appLaunchInfo":
                          c(r, n, e, (function () {
                            return console.warn("DeprecationWarning: __wxConfig.appLaunchInfo is deprecated, please use wx.getLaunchOptionsSync() instead."), wx && "function" == typeof wx.getLaunchOptionsSync ? wx.getLaunchOptionsSync() : {}
                          }));
                          break;
                        case "wxAppInfo":
                          c(r, n, e, {
                            maxRequestConcurrent: o.maxRequestConcurrent,
                            maxUploadConcurrent: o.maxUploadConcurrent,
                            maxDownloadConcurrent: o.maxDownloadConcurrent,
                            maxWorkerConcurrent: o.maxWorkerConcurrent,
                            maxWebsocketConnect: o.maxWebsocketConnect
                          });
                          break;
                        default:
                          c(r, n, e, o)
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
    __wxConfig = b(__wxConfig), __wxConfig = _(__wxConfig), Foundation.onConfigReady((function () {
      m()
    })), o ? __wxConfig.__readyHandler = w : l ? Foundation.onBridgeReady((function () {
      WeixinJSBridge.on("onWxConfigReady", w)
    })) : Foundation.onLibraryReady(w)
  }(this),
  function (e) {
    "use strict";

    function t(e) {
      Foundation.emit("unhandledRejection", e) || console.error("Uncaught (in promise)", e.reason)
    }
    var n, r, o = (n = [], r = [], {
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
          var n = o.get(e.promise);
          if (n) n.event = e;
          else {
            var r = {
              event: e
            };
            setTimeout((function () {
              0 === r.event.type && t(r.event), o.delete(r.event.promise)
            }), 0), o.set(e.promise, r)
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
          for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: n[r]
          })
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t)
      },
      t = {};
    e.d(t, {
      default: () => p
    });
    const n = BabelRuntimeHelpers.objectSpread2;
    var r = e.n(n);
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
    let l = c.INFO;
    const f = () => {
      const e = __wxConfig.platform;
      let t = [];
      const n = function (t) {
          const n = ("0" + (t.getMonth() + 1)).slice(-2),
            r = ("0" + t.getDate()).slice(-2),
            o = ("0" + t.getHours()).slice(-2),
            i = ("0" + t.getMinutes()).slice(-2),
            a = ("0" + t.getSeconds()).slice(-2),
            s = ("00" + t.getMilliseconds()).slice(-3),
            c = t.getFullYear() + "-" + n + "-" + r,
            u = o + ":" + i + ":" + a + "." + s;
          if ("ios" === e) {
            return c + " " + u + "000" + (t.getTimezoneOffset() / 6e3 * -1).toFixed(4).replace(/^0\./, "+").replace(/-0\./, "-")
          }
          return c + " " + (t.getTimezoneOffset() / 60 * -1).toFixed(1).replace(/^(\d)/, "+$1") + " " + u
        },
        i = function (e, n) {
          const r = e.type;
          return function (...o) {
            if (n && Array.prototype.unshift.call(o, "[" + n + "]"), wxConsole[r.toLowerCase()].call(wxConsole, ...o), e.num >= l.num) {
              const e = new Date,
                n = Array.prototype.slice.call(o).map((e => {
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
      o((function () {
        setTimeout((function r() {
          var o;
          (setTimeout(r, 3e3), 0 !== t.length) && (o = t, "ios" === e ? WeixinJSBridge.invoke("systemLog", {
            dataArray: o.map((function (e) {
              return {
                message: "\n" + n(e.date) + " [" + e.type[0].toUpperCase() + "][wxapplib]] " + e.content
              }
            }))
          }) : "android" === e && WeixinJSBridge.invoke("systemLog", {
            message: ["\n"].concat(o.map((function (e) {
              return "[" + e.type[0].toUpperCase() + "][" + n(e.date) + "][wxapplib]] " + e.content
            }))).join("\n")
          }), t = [])
        }), 3e3)
      }));
      return r()(r()({}, u(i)), {}, {
        createLogger: function (e) {
          return u(i, "string" == typeof e ? e : "default")
        },
        __mergeSubContextLogs: e => {
          Array.isArray(e) && e.forEach((e => {
            const {
              level: t,
              logs: n,
              category: r
            } = e;
            i(t, r)(n)
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
      return o(n), r()(r()({}, u(t)), {}, {
        createLogger: e => u(t, "string" == typeof e ? e : "default"),
        __isFromMainContext: !1
      })
    })() : f();
    const p = a;
    wxNativeConsole = t.default
  })(),
  function (e) {
    var t = {},
      n = {};
    define = function (e, n) {
      if (t[e] && t[e].factory) {
        var r = t[e],
          o = n.toString();
        r.factoryString || (r.factoryString = r.factory.toString()), o !== r.factoryString && (t[e] = {
          status: 1,
          factory: n,
          factoryString: o
        })
      } else t[e] = {
        status: 1,
        factory: n
      }
    };
    var r = function (e) {
        if (e && __wxConfig.subPackages)
          for (var t = 0, n = __wxConfig.subPackages.length; t < n; t++)
            if (0 === e.indexOf(__wxConfig.subPackages[t].root)) return __wxConfig.subPackages[t]
      },
      o = function (e) {
        for (var t = [], n = e.split("/"), r = 0, o = n.length; r < o; ++r) {
          var i = n[r];
          if ("" != i && "." != i)
            if (".." == i) {
              if (0 == t.length) {
                t = null;
                break
              }
              t.pop()
            } else r + 1 < o && ".." == n[r + 1] ? r++ : t.push(i)
        }
        return t
      },
      i = function (e) {
        var n = o(e + "/index.js").join("/");
        return t[n] ? n : (n = o(e).join("/"), /\.js$/.test(n) || (n += ".js"), t[n] ? n : "")
      },
      a = ["wx0354ba48aadc0ab2", "wxfa43a4a7041a84de"];
    var s = function (e) {
      var n = function (e) {
          var t = e.match(/(.*)\/([^/]+)?$/);
          return t && t[1] ? t[1] : "./"
        }(e),
        a = function (a, s) {
          if ("string" != typeof a) throw new Error("require args must be a string");
          var c = o(n + "/" + a);
          if ("/__wx__/private-api" === a && (c = o(a)), !c) throw new Error("can not find module : " + a);
          try {
            var u = c.join("/");
            u = function (e, n, r) {
              var a = e;
              if (/\.js$/.test(a) || (a += ".js"), "string" == typeof a && t[a]) return a;
              var s = o(n);
              if (!s) throw new Error("can not find module : " + r);
              for (var c, u = e.substring(s.join("/").length); s.length;) {
                var l = s.join("/") + "/miniprogram_npm" + u;
                if (c = i(l)) break;
                s.pop()
              }
              return c || (u = "/" === u[0] ? u : "/" + u, c = i(l = "miniprogram_npm" + u)), c || e
            }(u, n, a);
            var l = function (e) {
              return "functional-pages" === o(e)[0]
            };
            if (l(u) !== l(e) && Reporter.thirdErrorReport({
                error: new Error('should not require across "functional-pages" folder'),
                extend: 'at require("' + a + '") in ' + e
              }), "devtools" === __wxConfig.platform && __wxConfig.subPackages && void 0 === s) {
              var f = r(u),
                p = r(e);
              if (f && f !== p) throw new Error("should not require " + a + " in " + e + " without a callback, because they are in diffrent subPackages")
            }
            return require(u, void 0, s)
          } catch (e) {
            throw e
          }
        };
      return a.async = function (e) {
        return new Promise((function (t, n) {
          try {
            a(e, (function (e) {
              t(e)
            }))
          } catch (e) {
            n(e)
          }
        }))
      }, a
    };
    require = function (r, o, i) {
      if (void 0 === o && (o = !0), "string" != typeof r) throw new Error("require args must be a string");
      var c = t[r];
      if (!c) {
        var u = -1 === r.indexOf("/") ? r + "/index.js" : r;
        /\.js$/.test(u = "miniprogram_npm/" + u) || (u += ".js"), c = t[u]
      }
      if (r.endsWith(".js") || (r += ".js"), !c && "devtools" !== __wxConfig.platform && void 0 !== __subContextEngine__) {
        var l = "/" + r.substr(0, r.length - 3) + ".appservice.js",
          f = {
            __wxRoute: e.__wxRoute,
            __wxAppCurrentFile__: e.__wxAppCurrentFile__,
            __wxRouteBegin: e.__wxRouteBegin
          };
        __subContextEngine__.loadJsFiles([l]),
          function (t) {
            e.__wxRoute = t.__wxRoute, e.__wxAppCurrentFile__ = t.__wxAppCurrentFile__, e.__wxRouteBegin = t.__wxRouteBegin
          }(f), c = t[r]
      }
      if ("function" != typeof i) {
        if (!c) throw new Error('module "' + r + '" is not defined');
        var p = {
            exports: {}
          },
          d = c.factory;
        if (!o || n[r]) return delete c.exports, c.status = 1, n[r] = !0, d && d(s(r), p, p.exports), p.exports;
        if (1 === c.status) {
          c.exports = p.exports, c.status = 2;
          var g = void 0;
          try {
            d && (g = d(s(r), p, p.exports))
          } catch (e) {
            throw c.status = 1, e
          }
          c.exports = void 0 !== p.exports ? p.exports : g
        }
        return c.exports
      }
      c ? setTimeout((function () {
        i(require(r))
      })) : function (e, t) {
        var n = "__APP__" === e;
        "/" !== e.slice(-1) && (e += "/"), "devtools" === __wxConfig.platform ? (wxNativeConsole.info("[WebNode] injectSubPackages: " + e), WeixinJSBridge.invoke("injectSubPackages", {
          subPackages: [e]
        }, t)) : (wxNativeConsole.info("[WebNode] loadSubpackage: " + e), __appServiceSDK__.loadSubpackage({
          name: e,
          success: function () {
            var r = __wxConfig.subPackages.find((function (t) {
                return t.root === e
              })),
              o = Object.keys(r.plugins || {}).map((function (e) {
                var t = r.plugins[e].provider,
                  n = "__plugin__/" + t;
                return {
                  plugin_id: t,
                  prefix_path: a.includes(t) ? null : n
                }
              }));
            __subContextEngine__.injectEntryFile(n ? "" : e, o), t()
          }
        }))
      }(function (e) {
        var t = __wxConfig && __wxConfig.subPackages;
        t || (t = []);
        for (var n = 0; n < t.length; ++n) {
          var r = t[n].root || "";
          if (r && "/" !== r.slice(-1) && (r += "/"), e.slice(0, r.length) === r) return r
        }
        return "__APP__"
      }(r), (function () {
        i(require(r))
      }))
    }, requireOnce = function (e) {
      return require(e, !1)
    }, e.__modules__ = t
  }(this);
  var JSContext, Protect, __errorTracer__, __gameOpenDataSDK__, __subContextEngine__, requireMiniProgramFile = require,
    defineMiniProgramFile = define;
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
      default: () => $
    });
    const n = Object.prototype.toString,
      r = Object.getPrototypeOf,
      o = Object.getOwnPropertyNames,
      i = Object.getOwnPropertyDescriptor,
      a = Object.defineProperty,
      s = e => n.call(e).split(" ")[1].split("]")[0],
      c = ["constructor", "__proto__", "__defineGetter__", "__defineSetter__"],
      u = "undefined" != typeof WeakMap ? new WeakMap : {},
      l = "undefined" != typeof WeakMap ? new WeakMap : {},
      f = function (e, t = !1) {
        const n = s(e);
        return "String" === n || "Number" === n || "Boolean" === n ? e.valueOf() : "Object" === n ? new y(e) : "Array" === n ? function (e) {
          const t = [];
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            t.push(f(r))
          }
          return t
        }(e) : "Function" === n ? function (e, t = !1) {
          let n = l.get(e);
          return void 0 !== n || (n = function (...n) {
            for (let e = 0; e < n.length; e++) {
              const t = n[e];
              n[e] = f(t)
            }
            const r = t ? u.get(this) : void 0,
              o = e.call(r, ...n);
            return f(o)
          }, l.set(e, n)), n
        }(e, t) : "Undefined" !== n && "Null" === n ? null : void 0
      },
      p = function (e) {
        return function () {
          const t = u.get(this);
          if (void 0 === t) return;
          if (null === t) return null;
          const n = t[e];
          return f(n, !0)
        }
      },
      d = function (e) {
        return function (t) {
          const n = u.get(this);
          if (void 0 !== n) return null === n ? null : void(n[e] = f(t))
        }
      },
      g = e => {
        for (let t = 0; t < c.length; t++) {
          if (c[t] === e) return !0
        }
        return !1
      },
      h = function () {
        const e = (e => {
          const t = [];
          for (let n = e; n; n = r(n)) o(n).forEach((e => {
            const r = i(n, e);
            void 0 !== r && (r.name = e, t.push(r))
          }));
          return t
        })(u.get(this));
        for (let t = 0; t < e.length; t++) {
          const n = e[t],
            r = n.name;
          g(r) || (r in this || (delete n.value, delete n.writable, a(this, r, Object.assign(n, {
            get: p(r),
            set: d(r)
          }))))
        }
      };
    class y {
      constructor(e) {
        u.set(this, e), h.call(this)
      }
    }
    const v = y,
      _ = {},
      b = {},
      m = [];
    let w, x, S, O, C, A, E = 0;
    const T = [],
      k = (e, t, n) => {
        if (void 0 === t || void 0 === e || e !== w) return;
        const r = void 0 !== n ? n : ++E;
        return b[r] = t, m.push(r), T.forEach((e => {
          "function" == typeof e && e(r)
        })), r
      },
      P = (e, t, n, r) => {
        if (void 0 === e || e !== w) return;
        const o = (e => {
          const t = m.length;
          for (let n = 0; n < t; n++) {
            const t = m[n];
            if (b[t] === e) return t
          }
        })(t);
        if (void 0 === o) return;
        const i = _[n];
        "function" == typeof i && i(r, o)
      },
      j = {},
      I = (e, t, n, r = !1) => {
        if (void 0 === e || e !== w) return;
        r || (t = t.valueOf(), n = new v(n));
        const o = j[t];
        return "function" == typeof o ? o(n) : void 0
      },
      R = {
        __init__: e => {
          void 0 === w && void 0 !== e && (w = e, w.register = k, w.subscribeHandler = P, w.syncMethodHandler = I, x = w.alloc, S = w.create, O = w.destroy, C = w.evaluateScriptFile, A = w.loadJsFiles, delete w.alloc, delete w.create, delete w.destroy, delete w.evaluateScriptFile, delete w.loadJsFiles)
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
          _[e] = t
        },
        onRegister: e => {
          T.push(e)
        },
        evaluateScriptFile: (e, t, n) => C(e, t, n),
        batchLoadJsFiles: (e, t) => {
          if (void 0 === A || "function" != typeof A) return "failed: loadJsFiles not supported";
          try {
            return A(e, JSON.stringify(t)), "success"
          } catch (e) {
            return "failed: " + e
          }
        },
        alloc: (e, t) => "function" == typeof x ? x.call(w, e, t) : -9999,
        create: (e, t) => "function" == typeof S ? S.call(w, e, t) : -9999,
        destroy: (e, t) => "function" == typeof O ? O(e, t) : -9999,
        isAsync: () => w && !0 === w.async,
        supportAlloc: () => "function" == typeof x,
        registerSyncMethod: (e, t) => {
          j[e] = t
        }
      },
      M = {};
    let L;
    const F = {
      subscribeHandler: (e, t, n = {}) => {
        if (void 0 === e || e !== L) return;
        t = t.valueOf();
        const r = M[t];
        "function" == typeof r && r(n)
      }
    };
    const D = {
        __init__: (e, t) => {
          void 0 === L && void 0 !== e && (L = e, L.register(e, F, t))
        },
        publish: (e, t = {}) => {
          const n = s(t);
          if ("Object" !== n && "Undefined" !== n) throw new Error("params should be an object.");
          const r = e.valueOf(),
            o = t || {};
          L && "function" == typeof L.subscribeHandler && L.subscribeHandler(L, F, r, o)
        },
        subscribe: (e, t) => {
          M[e] = t
        },
        invokeMainContextMethodSync: (e, t = {}, n = !1) => {
          const r = s(t);
          if ("Object" !== r && "Undefined" !== r) throw new Error("params should be an object.");
          const o = e.valueOf();
          let i;
          return i = n ? t || {} : void 0 === t ? {} : t, L.syncMethodHandler(L, o, i, n)
        }
      },
      N = {
        alloc: () => -9999,
        create: () => -9999,
        destroy: () => -9999,
        publish: () => {},
        subscribe: () => {},
        supportAlloc: () => {}
      };
    let W;
    if (void 0 === e.g) throw new Error("js-context: global is undefined");
    if (void 0 !== e.g.WeixinJSContext) {
      W = Object.getPrototypeOf(e.g.WeixinJSContext) === Object.prototype ? R : D, W.__init__(WeixinJSContext, e.g.WeixinJSContextId)
    } else W = N;
    delete W.__init__, delete e.g.WeixinJSContext, delete e.g.WeixinJSContextId;
    const $ = W;
    JSContext = t.default
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
            PLATFORM: () => o,
            IS_DEVTOOLS: () => i,
            IS_ANDROID: () => a,
            IS_IOS: () => s,
            IS_WINDOWS: () => c,
            IS_MAC: () => u,
            IS_MINA: () => l,
            IS_PC: () => f,
            debugEnabled: () => p,
            HOST: () => d,
            IS_HOST_SDK: () => g,
            IS_HOST_WMPF: () => h,
            IS_HOST_WECHAT: () => y,
            IS_USE_NATIVE_MAP: () => v,
            WK_RENDERER_H5: () => _
          });
          var r = n(665);
          const o = r.Z.platform,
            i = "devtools" === r.Z.platform,
            a = "android" === r.Z.platform,
            s = "ios" === r.Z.platform,
            c = "windows" === r.Z.platform,
            u = "mac" === r.Z.platform,
            l = "mina" === r.Z.platform,
            f = c || u;

          function p() {
            if (r.Z && "debug" in r.Z && void 0 !== r.Z.debug) return !!r.Z.debug
          }
          const d = r.Z.host || {},
            g = "SDK" === d.env,
            h = "WMPF" === d.env,
            y = "WeChat" === d.env,
            v = d.forceUseNativeMap || !1,
            _ = "object" == typeof window && window && window.__wkrenderer_h5
        },
        538: (e, t, n) => {
          const {
            reportDeprecatedAPI: r
          } = n(184), {
            IS_IOS: o
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
              const i = globalThis;
              if ("undefined" != typeof eval && (o && n.g.__isAppServiceRemoteDebugMode__ || (eval = void 0)), "undefined" != typeof setTimeout && e) {
                const e = setTimeout;
                setTimeout = function (t, n = 0) {
                  if ("function" != typeof t) throw new TypeError(`setTimeout expects a function as first argument but got ${typeof t}.`);
                  const r = __errorTracer__.surroundThirdByTryCatch(t, "at setTimeout callback function"),
                    o = [].slice.call(arguments, 2);
                  return e((function () {
                    r.apply(i, o)
                  }), n)
                };
                const t = setInterval;
                setInterval = function (e, n) {
                  if ("function" != typeof e) throw new TypeError(`setInterval expects a function as first argument but got ${typeof e}.`);
                  const r = __errorTracer__.surroundThirdByTryCatch(e, "at setInterval callback function"),
                    o = [].slice.call(arguments, 2);
                  return t((function () {
                    r.apply(i, o)
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
      var o = t[r];
      if (void 0 !== o) return o.exports;
      var i = t[r] = {
        exports: {}
      };
      return e[r](i, i.exports, n), i.exports
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
        doNotWriteGlobalObjs: () => u,
        doNotWriteObj: () => l,
        globalEsObjs: () => t,
        hijack: () => f.hijack,
        hijackWasm: () => f.hijackWasm,
        overwriteSetPrototypeOf: () => c
      });
      n(585);
      var e = n(665);
      const t = ["Array", "ArrayBuffer", "AsyncFunction", "Atomics", "Boolean", "DataView", "Date", "EvalError", "Float32Array", "Float64Array", "Function", "Generator", "GeneratorFunction", "Infinity", "Int16Array", "Int32Array", "Int8Array", "InternalError", "Intl", "Intl.Collator", "Intl.DateTimeFormat", "Intl.NumberFormat", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object", "Promise", "Proxy", "RangeError", "ReferenceError", "Reflect", "RegExp", "Set", "SharedArrayBuffer", "String", "Symbol", "SyntaxError", "TypeError", "TypedArray", "URIError", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray", "WeakMap", "WeakSet", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "eval", "isFinite", "isNaN", "null", "parseFloat", "parseInt", "undefined", "unescape", "uneval"];
      "NodeJS" !== e.Z.JSEngineName && t.push("Error");
      const o = globalThis,
        i = n.g.Object.setPrototypeOf,
        a = (e, t, n, r) => {
          if (!e || !t || -1 !== t.indexOf("constructor")) return;
          let o;
          try {
            o = e[t]
          } catch (e) {
            return
          }
          if (!o) return;
          let s = Object.getOwnPropertyDescriptor(e, t);
          if (!r && !s && "__proto__" !== t) return;
          s = s || {
            enumerable: !!r,
            configurable: !0
          };
          const c = typeof o;
          if (o && ("function" === c || "object" === c) && (s.configurable && Object.defineProperty(e, t, {
              get: () => o,
              set(s) {
                if ("object" == typeof this || "function" == typeof this) {
                  if (this !== e) return a(this, t, n, !0), void(this[t] = s);
                  if (o !== s)
                    if (r) try {
                      o = s, "__proto__" === t && i(this, s)
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
            const e = Object.getOwnPropertyNames(o);
            "object" == typeof o && a(o, "__proto__", `${n}.__proto__`, !1);
            for (let t = 0; t < e.length; ++t) {
              const r = e[t];
              a(o, r, `${n}.${r}`, !1)
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
        l = (e, t, n) => a(e, t, n, !1);
      var f = n(538)
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
      callSystemFunction: () => c,
      wrapSystemFunction: () => u,
      callMiniProgramOrPluginFunction: () => l,
      callThirdPartyFunction: () => f,
      wrapMiniProgramOrPluginFunction: () => p,
      wrapThirdPartyFunction: () => d,
      surroundThirdByTryCatch: () => g
    });
    const n = /[ (@]*https?:\/\/([^/]*)\/+(.*?):(\d+):(\d+)/,
      r = [];

    function o(e) {
      if (!e || e.__wxOriginalStack__) return !1;
      const t = e.stack;
      if (void 0 === t) return !1;
      let n = t,
        o = r.length - 1,
        a = 0;
      for (; a >= 0 && o >= 0;) {
        let e = n.length,
          t = 0;
        for (const r in i) {
          if (!i[r]) continue;
          const o = n.indexOf(i[r], a);
          o < 0 || e <= o || (e = o, t = i[r].length)
        }
        if (e >= n.length) break;
        const s = `at <${r[o--].description}>`;
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
    const i = {
      wrapSystemFunction: null,
      wrapMiniProgramOrPluginFunction: null
    };

    function a(e) {
      const t = ((new Error).stack || "").match(/.+/gm);
      let r = "",
        o = 0;
      t && t.forEach((e => {
        if (n.test(e) && (o += 1, 2 === o)) {
          const t = e.match(/^(\s*)at /),
            n = t ? t[1].length : 0;
          return r = e.slice(n), !1
        }
        return !0
      })), i[e] = r
    }

    function s() {
      let e = "";
      for (let t = r.length - 1; t >= 0; t--) r[t].pluginAppId && (e = r[t].pluginAppId);
      return e
    }

    function c(e, t, n, c, l, f = !1) {
      let p;
      null === i.wrapSystemFunction && (i.wrapSystemFunction = "", u("", "", a)("wrapSystemFunction")), r.push({
        description: t
      });
      try {
        p = n.apply(c, l)
      } catch (t) {
        if (o(t)) {
          if ("AppServiceSdkKnownError" === t.type) throw r.pop(), t;
          if ("ThirdScriptError" === t.type) {
            const e = s();
            Reporter.thirdErrorReport({
              error: t,
              source: e,
              triggerErrorCallback: !f
            })
          } else Reporter.errorReport({
            key: e,
            error: t,
            triggerErrorCallback: !f
          })
        }
        if (f) throw r.pop(), t
      }
      return r.pop(), p
    }

    function u(e, t, n, r = !1) {
      return function (...o) {
        return c(e, t, n, this, o, r)
      }
    }

    function l(e, t, n, s, c, u = !1) {
      let l;
      null === i.wrapMiniProgramOrPluginFunction && (i.wrapMiniProgramOrPluginFunction = "", p("", "", a)("wrapMiniProgramOrPluginFunction")), r.push({
        description: t,
        pluginAppId: e
      });
      try {
        l = n.apply(s, c)
      } catch (t) {
        if (o(t) && Reporter.thirdErrorReport({
            error: t,
            source: e || "",
            triggerErrorCallback: !u
          }), u) throw r.pop(), t
      }
      return r.pop(), l
    }

    function f(e, t, n, r, o = !1) {
      return l(s(), e, t, n, r, o)
    }

    function p(e, t, n, r = !1) {
      return function (...o) {
        return l(e, t, n, this, o, r)
      }
    }

    function d(e, t, n = !1) {
      return function (...r) {
        return l(s(), e, t, this, r, n)
      }
    }

    function g(e, t) {
      const n = (t || "").match(/^\s*(?:at )?([\s\S]*)$/),
        r = n ? n[1] : "",
        o = e || function () {};
      return function (...e) {
        return l(s(), r, o, o, e, !1)
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
    }(), e.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e.r = e => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    };
    var t = {};
    e.r(t), e.d(t, {
      init: () => Bn
    });
    const n = Object.prototype.toString;

    function r(e) {
      return n.call(e).slice(8, -1)
    }
    const o = e => "String" === r(e),
      i = e => "Number" === r(e),
      a = e => null === e,
      s = Number.isNaN || (e => e != e),
      c = (Number.isFinite, e => "Object" === r(e)),
      u = Array.isArray || (e => "Array" === r(e)),
      l = e => "function" == typeof e,
      f = e => ArrayBuffer.isView(e) && !(e => "DataView" === r(e))(e);

    function p(e, t, n = "parameter") {
      const o = r(t),
        i = r(e);
      if (i !== o) return `${n} should be ${o} instead of ${i};`;
      let a = "";
      switch (o) {
        case "Object":
          Object.keys(t).forEach((r => {
            a += p(e[r], t[r], `${n}.${r}`)
          }));
          break;
        case "Array":
          if (e.length < t.length) return `${n} should have at least ${t.length} item;`;
          for (let r = 0; r < t.length; ++r) a += p(e[r], t[r], `${n}[${r}]`)
      }
      return a
    }

    function d(e) {
      const t = r(e);
      if ("Number" === t) {
        if (s(e)) return "NaN";
        if (i(n = e) && Math.abs(n) === 1 / 0) return "Infinity"
      } else if ("Object" === t) {
        if (a(e)) return "Null"
      } else if (t.endsWith("Array") && "Array" !== t && f(e)) return "TypedArray";
      var n;
      return t
    }
    const g = {
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

    function h(e) {
      const t = new WeakMap;
      let n = 0;
      return function e(r, o) {
        let i;
        const [a, s] = function (e) {
          const t = d(e);
          return t in g ? g[t] ? l(g[t]) ? [g[t](e), !0] : [g[t], !0] : [e, !0] : [null, !1]
        }(r);
        return s ? a : n > 3e3 ? "<Hidden>" : t.has(r) ? `<Circular: ${t.get(r)}>` : (t.set(r, o), n++, u(r) ? r.map(((t, n) => e(t, `${o}[${n}]`))) : (i = {}, Object.keys(r).forEach((t => {
          i[t] = e(r[t], `${o}.${t}`)
        })), i))
      }(e, "@")
    }

    function y(e) {
      try {
        return (e = Array.prototype.slice.call(e)).map(h)
      } catch (e) {
        return void console.warn("[console] This object can not be logged")
      }
    }
    const v = 0,
      _ = 1,
      b = 2,
      m = 3,
      w = 4,
      x = 5,
      S = 5;
    const O = {};
    let C = [];
    O.ready = !1, O.onReady = e => {
      "function" == typeof e && (O.ready ? e() : C.push(e))
    }, O.update = e => {
      for (const t in e) void 0 === O[t] && (O[t] = e[t]);
      O.ready = !0, C.forEach((e => {
        "function" == typeof e && e()
      })), C = []
    };
    const A = O,
      E = (e, t) => {
        const n = function (n, r) {
          const o = function (e, t, n = !0) {
            if (n || e === b || e === m) try {
              const r = y(t);
              if (void 0 === r) return;
              const o = JSON.stringify({
                level: e,
                logs: r
              });
              return o.length > 1048576 && !n || o.length > 2097152 && n ? JSON.stringify({
                level: e,
                logs: ["<LOG_EXCEED_MAX_LENGTH>"]
              }) : o
            } catch (e) {
              return void console.warn("[console] This object can not be logged")
            }
          }(n, r, t);
          o && e(o)
        };
        console = {
          log() {
            n(v, arguments)
          },
          info() {
            n(_, arguments)
          },
          warn() {
            n(b, arguments)
          },
          error() {
            n(m, arguments)
          },
          debug() {
            n(w, arguments)
          },
          time() {
            n(x, arguments)
          },
          timeEnd() {
            n(S, arguments)
          },
          group() {},
          groupEnd() {}
        }
      };
    A.onReady((() => {
      A.log && "devtools" !== A.WXConfig.platform && E(A.log, A.WXConfig.debug)
    }));
    const T = {
      imageMap: new WeakMap,
      canvasMap: new WeakMap,
      contextMap: new WeakMap
    };
    var k = Array.isArray ? Array.isArray : function (e) {
      return "[object Array]" === Object.prototype.toString.call(e)
    };

    function P() {
      this._events = {}, this._conf && j.call(this, this._conf)
    }

    function j(e) {
      e ? (this._conf = e, e.delimiter && (this.delimiter = e.delimiter), this._maxListeners = void 0 !== e.maxListeners ? e.maxListeners : 20, e.newListener && (this._newListener = e.newListener), e.removeListener && (this._removeListener = e.removeListener)) : this._maxListeners = 20
    }

    function I(e, t) {
      console.warn(`[Event] ${e} listeners of event ${t} have been added, possibly causing memory leak.`)
    }

    function R(e) {
      this._events = {}, this._newListener = !1, this._removeListener = !1, j.call(this, e)
    }
    R.prototype.delimiter = ".", R.prototype.setMaxListeners = function (e) {
      void 0 !== e && (this._maxListeners = e, this._conf || (this._conf = {}), this._conf.maxListeners = e)
    }, R.prototype.event = "", R.prototype.once = function (e, t) {
      return this._once(e, t, !1)
    }, R.prototype.prependOnceListener = function (e, t) {
      return this._once(e, t, !0)
    }, R.prototype._once = function (e, t, n) {
      return this._many(e, 1, t, n), this
    }, R.prototype.many = function (e, t, n) {
      return this._many(e, t, n, !1)
    }, R.prototype.prependMany = function (e, t, n) {
      return this._many(e, t, n, !0)
    }, R.prototype._many = function (e, t, n, r) {
      var o = this;
      if ("function" != typeof n) throw new Error("many only accepts instances of Function");

      function i() {
        return 0 == --t && o.off(e, i), n.apply(this, arguments)
      }
      return i._origin = n, this._on(e, i, r), o
    }, R.prototype.emit = function () {
      this._events || P.call(this);
      var e = arguments[0];
      if ("newListener" === e && !this._newListener && !this._events.newListener) return !1;
      var t, n, r, o, i, a = arguments.length;
      if (this._all && this._all.length) {
        if (i = this._all.slice(), a > 3)
          for (t = new Array(a), o = 0; o < a; o++) t[o] = arguments[o];
        for (r = 0, n = i.length; r < n; r++) switch (this.event = e, a) {
          case 1:
            i[r].call(this, e);
            break;
          case 2:
            i[r].call(this, e, arguments[1]);
            break;
          case 3:
            i[r].call(this, e, arguments[1], arguments[2]);
            break;
          default:
            i[r].apply(this, t)
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
        for (r = 0, n = i.length; r < n; r++) switch (this.event = e, a) {
          case 1:
            i[r].call(this);
            break;
          case 2:
            i[r].call(this, arguments[1]);
            break;
          case 3:
            i[r].call(this, arguments[1], arguments[2]);
            break;
          default:
            i[r].apply(this, t)
        }
        return !0
      }
      if (!this._all && "error" === e) throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
      return !!this._all
    }, R.prototype.emitAsync = function () {
      this._events || P.call(this);
      var e = arguments[0];
      if ("newListener" === e && !this._newListener && !this._events.newListener) return Promise.resolve([!1]);
      var t, n, r, o, i, a = [],
        s = arguments.length;
      if (this._all) {
        if (s > 3)
          for (t = new Array(s), o = 1; o < s; o++) t[o] = arguments[o];
        for (r = 0, n = this._all.length; r < n; r++) switch (this.event = e, s) {
          case 1:
            a.push(this._all[r].call(this, e));
            break;
          case 2:
            a.push(this._all[r].call(this, e, arguments[1]));
            break;
          case 3:
            a.push(this._all[r].call(this, e, arguments[1], arguments[2]));
            break;
          default:
            a.push(this._all[r].apply(this, t))
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
        for (r = 0, n = i.length; r < n; r++) switch (this.event = e, s) {
          case 1:
            a.push(i[r].call(this));
            break;
          case 2:
            a.push(i[r].call(this, arguments[1]));
            break;
          case 3:
            a.push(i[r].call(this, arguments[1], arguments[2]));
            break;
          default:
            a.push(i[r].apply(this, t))
        }
      } else if (!this._all && "error" === e) return arguments[1] instanceof Error ? Promise.reject(arguments[1]) : Promise.reject("Uncaught, unspecified 'error' event.");
      return Promise.all(a)
    }, R.prototype.on = function (e, t) {
      return this._on(e, t, !1)
    }, R.prototype.prependListener = function (e, t) {
      return this._on(e, t, !0)
    }, R.prototype.onAny = function (e) {
      return this._onAny(e, !1)
    }, R.prototype.prependAny = function (e) {
      return this._onAny(e, !0)
    }, R.prototype.addListener = R.prototype.on, R.prototype._onAny = function (e, t) {
      if ("function" != typeof e) throw new Error("onAny only accepts instances of Function");
      return this._all || (this._all = []), t ? this._all.unshift(e) : this._all.push(e), this
    }, R.prototype._on = function (e, t, n) {
      if ("function" == typeof e) return this._onAny(e, t), this;
      if ("function" != typeof t) throw new Error("on only accepts instances of Function");
      return this._events || P.call(this), this._newListener && this.emit("newListener", e, t), this._events[e] ? ("function" == typeof this._events[e] && (this._events[e] = [this._events[e]]), n ? this._events[e].unshift(t) : this._events[e].push(t), !this._events[e].warned && this._maxListeners > 0 && this._events[e].length > this._maxListeners && (this._events[e].warned = !0, I.call(this, this._events[e].length, e))) : this._events[e] = t, this
    }, R.prototype.off = function (e, t) {
      if ("function" != typeof t) throw new Error("removeListener only takes instances of Function");
      var n, r = [];
      if (!this._events[e]) return this;
      n = this._events[e], r.push({
        _listeners: n
      });
      for (var o = 0; o < r.length; o++) {
        if (n = r[o]._listeners, k(n)) {
          for (var i = -1, a = 0, s = n.length; a < s; a++)
            if (n[a] === t || n[a].listener && n[a].listener === t || n[a]._origin && n[a]._origin === t) {
              i = a;
              break
            } if (i < 0) continue;
          return this._events[e].splice(i, 1), 0 === n.length && delete this._events[e], this._removeListener && this.emit("removeListener", e, t), this
        }(n === t || n.listener && n.listener === t || n._origin && n._origin === t) && (delete this._events[e], this._removeListener && this.emit("removeListener", e, t))
      }
      return function e(t) {
        if (void 0 !== t) {
          var n = Object.keys(t);
          for (var r in n) {
            var o = n[r],
              i = t[o];
            i instanceof Function || "object" != typeof i || null === i || (Object.keys(i).length > 0 && e(t[o]), 0 === Object.keys(i).length && delete t[o])
          }
        }
      }(this.listenerTree), this
    }, R.prototype.offAny = function (e) {
      var t, n = 0,
        r = 0;
      if (e && this._all && this._all.length > 0) {
        for (n = 0, r = (t = this._all).length; n < r; n++)
          if (e === t[n]) return t.splice(n, 1), this._removeListener && this.emit("removeListenerAny", e), this
      } else {
        if (t = this._all, this._removeListener)
          for (n = 0, r = t.length; n < r; n++) this.emit("removeListenerAny", t[n]);
        this._all = []
      }
      return this
    }, R.prototype.removeListener = R.prototype.off, R.prototype.removeAllListeners = function (e) {
      return void 0 === e ? (!this._events || P.call(this), this) : (this._events && (this._events[e] = null), this)
    }, R.prototype.listeners = function (e) {
      return this._events || P.call(this), this._events[e] || (this._events[e] = []), k(this._events[e]) || (this._events[e] = [this._events[e]]), this._events[e]
    }, R.prototype.eventNames = function () {
      return Object.keys(this._events)
    }, R.prototype.listenerCount = function (e) {
      return this.listeners(e).length
    }, R.prototype.listenersAny = function () {
      return this._all ? this._all : []
    };
    const M = R;
    let L = !1;
    A.onReady((() => {
      L = "devtools" === A.WXConfig.platform.toLowerCase()
    }));
    const F = () => L,
      D = Object.defineProperty,
      N = Object.prototype.__defineGetter__,
      W = Object.prototype.__defineSetter__,
      $ = (e, t, n) => {
        N.call(e, t, n)
      },
      U = (e, t, n) => {
        W.call(e, t, n)
      },
      B = (e, t) => __subContextEngine__.surroundThirdByTryCatch(e, t),
      G = function (e, t = {}, ...n) {
        if (A.APIs && "function" == typeof A.APIs[e]) {
          for (const n in t) "function" == typeof t[n] && (t[n] = B(t[n], `at api ${e} ${n} callback function`));
          return A.APIs[e](t, ...n)
        }
      },
      Z = __wxConfig;
    let J = [];
    const V = JSON.parse,
      q = new M({
        maxListeners: 2e3
      }),
      H = "mainContextMessage";
    JSContext.subscribe(H, (({
      data: e
    }) => {
      e = V(e), 0 !== q.listeners(H).length ? q.emit(H, e) : J.push(e)
    }));
    const {
      canvasMap: K
    } = T, X = new WeakMap, z = function () {
      ["width", "height", "offsetTop", "offsetLeft", "offsetWidth", "offsetHeight"].forEach((e => {
        $(this, e, (function () {
          return K.get(this)[e]
        })), U(this, e, (function (t) {
          if (X.get(this).readOnly) return void console.warn("[GameOpenDataContext] Cannot assign to read only canvas.");
          K.get(this)[e] = t
        }))
      })), this.tagName = "CANVAS", this.nodeName = "CANVAS"
    };
    class Y {
      constructor(e, t = !0) {
        K.set(this, e), X.set(this, {
          readOnly: t
        }), this.__canvas__ = !0, z.call(this)
      }
    }
    const {
      contextMap: Q
    } = T, ee = function (e) {
      this.canvas = e, ["globalCompositeOperation", "lineCap", "lineJoin", "textAlign", "textBaseline", "fillStyle", "strokeStyle", "globalAlpha", "lineWidth", "miterLimit", "font", "imageSmoothingEnabled"].forEach((e => {
        $(this, e, (function () {
          return Q.get(this)[e]
        })), U(this, e, (function (t) {
          Q.get(this)[e] = t
        }))
      }))
    };
    class te {
      constructor(e, t) {
        Q.set(this, e), ee.call(this, t)
      }
    }
    const ne = {
        Canvas: {
          getContext: "CanvasRenderingContext2D"
        },
        CanvasRenderingContext2D: {
          rect: void 0,
          lineTo: void 0,
          rotate: void 0,
          quadraticCurveTo: void 0,
          strokeText: void 0,
          clip: void 0,
          createRadialGradient: "CanvasGradient",
          clearRect: void 0,
          restore: void 0,
          drawImage: void 0,
          arcTo: void 0,
          fillText: void 0,
          resetClip: void 0,
          strokeRect: void 0,
          arc: void 0,
          isPointInPath: void 0,
          moveTo: void 0,
          createImageData: "ImageData",
          translate: void 0,
          scale: void 0,
          closePath: void 0,
          putImageData: void 0,
          bezierCurveTo: void 0,
          transform: void 0,
          measureText: void 0,
          fillRect: void 0,
          stroke: void 0,
          save: void 0,
          createLinearGradient: "CanvasGradient",
          beginPath: void 0,
          setTransform: void 0,
          createPattern: "CanvasPattern",
          getImageData: "ImageData",
          fill: void 0
        },
        CanvasGradient: {
          addColorStop: void 0
        },
        CanvasPattern: {
          setTransform: void 0
        },
        ImageData: {},
        TextMetrics: {},
        Image: {
          __uid: void 0,
          addEventListener: void 0,
          removeEventListener: void 0
        }
      },
      re = {},
      oe = Object.keys,
      ie = Object.defineProperty,
      ae = Object.getOwnPropertyDescriptor,
      se = Object.prototype.hasOwnProperty,
      ce = ["globalAlpha", "globalCompositeOperation", "filter", "imageSmoothingEnabled", "imageSmoothingQuality", "strokeStyle", "fillStyle", "shadowOffsetX", "shadowOffsetY", "shadowBlur", "shadowColor", "lineWidth", "lineCap", "lineJoin", "miterLimit", "lineDashOffset", "font", "textAlign", "textBaseline", "direction"],
      ue = (e, t) => F() ? t : ("CanvasRenderingContext2D" === e && ce.forEach((e => {
        if (se.call(t, e)) return;
        const n = ae(t.__proto__, e);
        n && (n.get || n.set) && ie(t, e, n)
      })), re[e] ? (t.__proto__ = re[e], t) : void 0),
      le = function (e, t) {
        return function () {
          const n = e.apply(this, arguments);
          return t && n ? ue(t, n) : n
        }
      };
    A.onReady((function () {
      ! function () {
        const e = oe(T.originalProto);
        for (const t of e) {
          const e = T.originalProto[t],
            n = ne[t];
          if (void 0 === e || void 0 === n) continue;
          const r = {},
            o = oe(n);
          for (const t of o) {
            const o = n[t],
              i = e[t];
            i && (r[t] = le(i, o))
          }
          re[t] = r
        }
        delete T.originalProto
      }()
    }));
    const fe = (e, t) => function () {
        const n = new t;
        return F() ? n : re[e] ? (n.__proto__ = re[e], n) : void 0
      },
      pe = e => re[e],
      {
        imageMap: de,
        canvasMap: ge,
        contextMap: he
      } = T,
      ye = Object.assign,
      ve = Object.keys;
    let _e, be, me, we, xe, Se;
    A.onReady((() => {
      _e = fe("Canvas", A.Canvas)
    }));
    const Oe = function (e) {
        return e && e.__image__ ? de.get(e) : e && e.__canvas__ ? ge.get(e) : e
      },
      Ce = function () {
        return arguments[0] && (arguments[0] = Oe(arguments[0])), me.apply(this, arguments)
      },
      Ae = function () {
        return arguments[0] && (arguments[0] = Oe(arguments[0])), we.apply(this, arguments)
      },
      Ee = function () {
        return {
          width: 0,
          height: 0,
          data: new Uint8ClampedArray(0)
        }
      },
      Te = function (e) {
        if ("2d" !== e.toLowerCase()) return void console.error("[GameOpenDataContext] 子域只支持使用 2D 渲染模式 ");
        let t = ge.get(this),
          n = be.call(t, "2d");
        const r = new te(n, this);
        return r.__proto__ = function () {
          if (Se) return Se;
          const e = pe("CanvasRenderingContext2D");
          return Se = ye({}, e), ve(Se).forEach((e => {
            const t = Se[e];
            Se[e] = function () {
              const e = he.get(this);
              return t.apply(e, arguments)
            }
          })), Se
        }(), t = void 0, n = void 0, void 0 === me && (me = r.__proto__.drawImage, r.__proto__.drawImage = Ce, r.__proto__.getImageData = Ee), void 0 === we && (we = r.__proto__.createPattern, r.__proto__.createPattern = Ae), r
      },
      ke = (e, t = !0) => {
        const n = new Y(e, t);
        return n.__proto__ = pe("Canvas"), void 0 === be && (be = n.__proto__.getContext, n.__proto__.getContext = Te), n
      },
      Pe = () => xe,
      je = new WeakMap,
      Ie = function () {
        ["type", "timestamp"].forEach((e => {
          $(this, e, (function () {
            return je.get(this)[e]
          })), U(this, e, (function (t) {
            je.get(this)[e] = t
          }))
        }))
      };
    class Re {
      constructor(e, t) {
        je.set(this, t), Ie.call(this), this.target = e, this.currentTarget = e
      }
      preventDefault() {
        je.get(this).preventDefault(...arguments)
      }
      stopPropagation() {
        je.get(this).stopPropagation(...arguments)
      }
    }
    const {
      imageMap: Me
    } = T, Le = new WeakMap, Fe = function (e, t) {
      return function (n) {
        n = new Re(e, n), "function" == typeof t && t(n)
      }
    }, De = function () {
      ["height", "width", "complete"].forEach((e => {
        $(this, e, (function () {
          return Me.get(this)[e]
        })), U(this, e, (function (t) {
          Me.get(this)[e] = t
        }))
      })), ["onload", "onerror"].forEach((e => {
        $(this, e, (function () {
          return this[`__original__${e}`]
        })), U(this, e, (function (t) {
          const n = Me.get(this),
            r = B(t, `at image.${e} callback function`);
          n[e] = Fe(this, r), D(this, `__original__${e}`, {
            value: t,
            writable: !0,
            configurable: !0,
            enumerable: !1
          })
        }))
      })), this.tagName = "IMG", this.nodeName = "IMG"
    };
    class Ne {
      constructor(e) {
        Me.set(this, e), this.__image__ = !0, De.call(this)
      }
      addEventListener() {
        if ("function" == typeof arguments[1]) {
          const e = arguments[1],
            t = Fe(this, e);
          Le.set(e, t), arguments[1] = t
        }
        Me.get(this).addEventListener(...arguments)
      }
      removeEventListener() {
        if ("function" == typeof arguments[1]) {
          const e = arguments[1],
            t = Le.get(e);
          Le.delete(e), arguments[1] = t
        }
        Me.get(this).removeEventListener(...arguments)
      }
    }
    const We = String.prototype.startsWith,
      $e = String.prototype.replace,
      Ue = String.prototype.indexOf,
      {
        imageMap: Be
      } = T;
    let Ge, Ze = !1,
      Je = ["https://wx.qlogo.cn/"];
    A.onReady((() => {
      Ge = fe("Image", A.Image), "object" == typeof WXConfig.wxAppInfo && WXConfig.wxAppInfo.subContextImgDomain && (Je = WXConfig.wxAppInfo.subContextImgDomain)
    }));
    const Ve = function (e) {
        var t;
        if (t = e, e = $e.call(t, /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), !Je || 0 === Je.length) return !1;
        for (let t = 0; t < Je.length; t++) {
          const n = Je[t];
          if (n.length > 0 && We.call(e, n)) return !0
        }
        return !1
      },
      qe = function (e) {
        let t;
        const n = "[OpenDataContext] invalid image src.";
        if ("string" == typeof e)
          if (Ue.call(e, "@") >= 0) console.error(n);
          else if (We.call(e, "http") || We.call(e, "https") ? Ve(e) && (t = e) : t = e, t) {
          const t = Be.get(this);
          G("getCloudFileUrl", [e], "image", (n => {
            /^(cloud):\/\//.test(e) ? this._cloudId = e : this._cloudId = "", t.src = n.data[0].url
          }))
        } else console.error(`[OpenDataContext] src "${e}" 不在后台可信域名中`);
        else console.error(n)
      };
    class He {
      get src() {
        return this.__src__ || ""
      }
      set src(e) {
        this.__src__ = e
      }
      get startTime() {
        return this.__startTime__ || 0
      }
      set startTime(e) {
        this.__startTime__ = e
      }
      set autoplay(e) {}
      set loop(e) {}
      set obeyMuteSwitch(e) {}
      get paused() {
        return !0
      }
      get duration() {
        return 0
      }
      get currentTime() {
        return 0
      }
      get buffered() {
        return !1
      }
      play() {}
      pause() {}
      stop() {}
      seek() {}
      destroy() {}
      onPlay() {}
      onPause() {}
      onTimeUpdate() {}
      onStop() {}
      onCanplay() {}
      onError() {}
      onEnded() {}
      onWaiting() {}
      onSeeking() {}
      onSeeked() {}
    }
    Z.platform;
    const Ke = "devtools" === Z.platform,
      Xe = "android" === Z.platform;
    Z.platform, Z.platform, Z.platform, Z.platform;
    const ze = Z.host || {},
      Ye = (ze.env, ze.env, ze.env, ze.forceUseNativeMap, "object" == typeof window && window && window.__wkrenderer_h5);
    Error;
    Error;
    const Qe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    globalThis.btoa, globalThis.atob;
    Z.clientVersion;
    const et = {
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
    };
    BabelRuntimeHelpers.objectWithoutProperties, BabelRuntimeHelpers.objectSpread2;

    function tt(e, t) {
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

    function nt() {}
    tt((function (e) {
      const t = r(e);
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
    tt((function (e, t) {
      return "String" === t ? e : e = "Array" === t || "Object" === t ? JSON.parse(e) : "Number" === t ? parseFloat(e) : "Boolean" === t ? "true" === e : "Date" === t ? new Date(parseInt(e, 10)) : "Undefined" === t ? void 0 : "Null" === t ? null : ""
    }), "stringToAnyType");
    Symbol("ErrorInfosSymbol");
    Error;

    function rt(e, t) {
      ! function (e, t) {
        __safeway__.bridge.on(e, t)
      }(e, tt(t, `at api ${e} callback function`))
    }
    const ot = new M({
        maxListeners: 20,
        newListener: !1
      }),
      it = new M({
        maxListeners: 20,
        newListener: !1
      });
    const at = {};

    function st(e) {
      if (e = e[0].toUpperCase() + e.slice(1), !at[e]) {
        let t = new WeakMap;
        at[e] = {
          getGlobalListeners: () => ot.listeners(e),
          getInternalListeners: () => it.listeners(e),
          emit: (...t) => {
            it.emit(e, ...t), ot.emit(e, ...t)
          },
          emitGlobal: (...t) => {
            ot.emit(e, ...t)
          },
          emitInternal: (...t) => {
            it.emit(e, ...t)
          },
          internalOnMethod: (t, n = {}) => {
            "function" == typeof t && (n.prepend ? n.once ? it.prependOnceListener(e, t) : it.prependListener(e, t) : n.once ? it.once(e, t) : it.on(e, t))
          },
          internalOffMethod: t => {
            "function" == typeof t && it.off(e, t)
          },
          onMethod: n => {
            const r = function (e, t) {
              return "function" != typeof t ? (console.error(`on${e} should accept a function instead of ${typeof t}`), null) : __errorTracer__.surroundThirdByTryCatch(t, `at api on${e} callback function`)
            }(e, n);
            r && (t.set(n, r), ot.on(e, r))
          },
          offMethod: n => {
            if (function (e, t) {
                return !t || "function" == typeof t || (console.error(`off${e} should accept a function instead of ${typeof t}`), !1)
              }(e, n))
              if (n) {
                if (t.has(n)) {
                  const r = t.get(n);
                  t.delete(n), ot.off(e, r)
                }
              } else t = new WeakMap, ot.removeAllListeners(e)
          }
        }
      }
      return at[e]
    }
    const ct = {},
      ut = (e, t) => {
        const n = st(`WeixinJSBridge-${e}`);
        ct[e] || (rt(e, ((...e) => {
          n.emit(...e)
        })), ct[e] = !0), n.internalOnMethod(t)
      };

    function lt(e, t, n) {
      ! function (e, t, n) {
        __safeway__.bridge.publish(e, t, n)
      }(e, {
        data: t,
        options: {
          timestamp: Date.now()
        }
      }, n)
    }
    let ft = "";
    const pt = (e = {}) => {
      try {
        ft = e.transitExtraData.adUxInfo
      } catch (e) {
        ft = ""
      }
    };
    var dt;
    "undefined" != typeof __safeway__ && (Z.onReady((() => {
      pt(Z.appLaunchInfo)
    })), ut("onAppEnterForeground", (e => {
      pt(e)
    })), ut("onAppEnterBackground", ((e = {}) => {
      "back" !== e.mode && "close" !== e.mode || (ft = "")
    })), dt = (e, t) => {
      lt("adUxInfoGot", {
        adUxInfo: ft,
        callbackId: e.callbackId
      }, [t])
    }, function (e, t) {
      __safeway__.bridge.subscribe(e, t)
    }("getAdUxInfo", (({
      data: e,
      options: t
    }, n, r = {}) => {
      const o = t && t.timestamp || 0,
        i = Date.now();
      Reporter.speedReport({
        key: "webview2AppService",
        data: e || {},
        timeMark: {
          startTime: o,
          endTime: i,
          nativeTime: r.nativeTime || 0
        }
      }), "function" == typeof dt && dt(e, n)
    })));

    function gt(e, t, n, r) {
      "navigateToMiniProgram" !== e && "openUrl" !== e && "private_openUrl" !== e || (t.adUxInfo = t.adUxInfo || ft), __safeway__.bridge.invoke(e, t, n, r)
    }
    let ht = {},
      yt = {},
      vt = {},
      _t = 0;
    const bt = (e, t) => Object.keys(t).map((n => Object.keys(t[n]).map((r => ({
        func: n,
        result: e,
        errMsg: r,
        count: t[n][r]
      }))))),
      mt = () => {
        const e = bt(1, ht),
          t = bt(2, yt),
          n = bt(3, vt),
          r = [].concat(e, t, n);
        0 !== r.length && Gt("reportRealtimeAction", {
          actionData: JSON.stringify({
            business: "mmbizwxajsapi",
            dataType: 1,
            dataArray: r,
            appType: Reporter.getAppType()
          })
        }), ht = {}, yt = {}, vt = {}
      },
      wt = (e = !0, t, n = !1, r = !1) => (o = {}) => {
        if (! function (e, t, n) {
            const r = p(t, n);
            if (r) return function (e, t = {}, n = "", r) {
              ! function ({
                name: e,
                args: t = {},
                success: n = !0,
                errMsg: r = "",
                errCode: o,
                res: a = {}
              }) {
                t = t || {};
                const s = n ? `${e}:ok` : `${e}:fail ${r}`,
                  c = __errorTracer__.surroundThirdByTryCatch((n ? t.success : t.fail) || nt, `at api ${e} ${n?"success":"fail"} callback function`),
                  u = __errorTracer__.surroundThirdByTryCatch(t.complete || nt, `at api ${e} complete callback function`);
                a.errMsg = s, i(o) && (a.errCode = o);
                c(a), u(a)
              }({
                name: e,
                args: t,
                errMsg: n,
                errCode: r,
                success: !1
              })
            }(e, t, `parameter error: ${r}`), !1;
            return !0
          }("operateWXData", o, {
            apiName: ""
          })) return;
        if ("operateWXData" === t) {}
        const a = {
          api_name: o.apiName,
          data: o.reqData || {},
          operate_directly: e
        };
        n && (a.plugin_appid = o.pluginId);
        const s = {
          data: a,
          isImportant: !0 === r,
          requestInQueue: !o.hasOwnProperty("requestInQueue") || Boolean(o.requestInQueue)
        };
        ! function (e = {}, t = {}, ...n) {
          const r = Object.assign({}, e);
          r._isFromBaseOperateWXData = !0;
          const o = t.beforeAll,
            i = t.beforeSuccess,
            a = t.beforeFail,
            s = r.data && r.data.api_name;
          Qt.includes(s) ? r.requestInQueue = !0 : r.requestInQueue = !1;
          en.includes(s) ? r.isImportant = !0 : r.isImportant = !1;
          tn.includes(r.data && r.data.api_name) && (r.keepAlive = !0);
          const c = {
            isSuccess: void 0,
            WXDataApiName: s,
            argument: r,
            invokeTime: Date.now(),
            requestInQueue: r.requestInQueue,
            requestingCount: ++zt
          };
          Yt.info(`${r.data.api_name} _options.requestInQueue`, r.requestInQueue), Gt("operateWXData", r, {
            beforeAll(e) {
              const n = Date.now();
              zt--, c.costTime = n - c.invokeTime;
              try {
                if (e && e.data && e.data.data ? c.result = JSON.stringify(e.data) : c.result = e.data, e.clientInfo && "object" == typeof e.clientInfo) {
                  const t = e.clientInfo;
                  Object.keys(t).forEach((e => {
                    c[e] = t[e]
                  })), c.cost1 = t.wxdataQueueTimestamp - c.invokeTime, c.cost2 = t.wxdataDequeueTimestamp - t.wxdataQueueTimestamp, c.cost3 = t.beginCGITimestamp - t.wxdataDequeueTimestamp, c.cost4 = t.CGICallbackTimestamp - t.beginCGITimestamp, c.cost5 = t.wxlibCallbackTimestamp - t.CGICallbackTimestamp, c.cost6 = n - t.wxlibCallbackTimestamp
                }
              } catch (e) {
                Yt.error(e)
              }
              "function" == typeof o && o.call(t, e)
            },
            beforeSuccess(e) {
              c.isSuccess = !0, r.data.data && r.data.data.__wxdataUseProfile__ && (e.__wxdataProfileInfo = c), "function" == typeof i && i.call(t, e), Xt(c)
            },
            beforeFail(e) {
              c.isSuccess = !1, c.errMsg = e.errMsg, r.data.data && r.data.data.__wxdataUseProfile__ && (e.__wxdataProfileInfo = c), "function" == typeof a && a.call(t, e), Xt(c)
            }
          }, ...n)
        }(Object.assign({}, s, o), {
          beforeAll(e) {
            void 0 !== t && (e.errMsg = e.errMsg.replace("operateWXData", t))
          },
          beforeSuccess(e) {
            Xe && "string" == typeof e.data && (e.data = JSON.parse(e.data)), void 0 !== e.data.data && (e.rawData = e.data.data), e.data.encryptedData && (e.encryptedData = e.data.encryptedData, e.iv = e.data.iv, e.data.cloud_id && (e.cloudID = e.data.cloud_id)), e.respData = e.data, delete e.data
          }
        })
      },
      xt = (wt(!0), wt(!1)),
      St = (wt(!0, void 0, !0), 0),
      Ot = 1,
      Ct = 2,
      At = 1,
      Et = 2,
      Tt = 3,
      kt = 4,
      Pt = wxNativeConsole.createLogger("BanForPage");
    let jt = !1,
      It = new Set(["shareAppMessage", "shareAppMessageDirectly", "requestPayment", "setClipboardData", "getClipboardData", "getLocation", "getPhoneNumber", "navigateToMiniProgram", "navigateBackMiniProgram"]),
      Rt = [];

    function Mt(e, t, n) {
      Pt.log(`[checkAPIAvailableForPage] APIName=${e}, path=${t}, title=${n}`);
      const r = function (e, t, n) {
        let r = -1;
        for (let e = 0; e < Rt.length; e++) {
          const i = Rt[e];
          if ((!o(i.path_rule) || !i.path_rule || new RegExp(i.path_rule).test(t)) && (!o(i.title_rule) || !i.title_rule || new RegExp(i.title_rule).test(n))) {
            r = e;
            break
          }
        }
        return Pt.log(`[getBanRuleIndexForPage] banRuleIndex=${r}`), r
      }(0, t, n);
      if (-1 === r) return Lt(e, At, kt, e), !0;
      const i = Rt[r];
      return Pt.log("[checkAPIAvailableForPage], found rule:", i),
        function (e, t) {
          const n = e.ban_jsapi_list.find((e => e.jsapi_name === t));
          if (!n) return Pt.log("[checkAPIAvailableForPageByRule], no APIItem found"), !0;
          let r, o;
          if (Pt.log("[checkAPIAvailableForPageByRule], found APIItem:", n), n.state === St) r = !1;
          else if (n.state === Ot) r = !0;
          else if (n.state === Ct && (r = !0, 1 === e.is_valid)) {
            const e = n.toast_wording || "该功能暂时无法使用";
            Jt("showToast", {
              title: e,
              icon: "none"
            })
          }
          return o = r ? e.is_valid ? Et : Tt : At, Lt(t, o, kt, t), 1 !== e.is_valid || !r
        }(i, e)
    }

    function Lt(e, t, n, r = "", o = "") {
      if (Pt.log(`[reportAPIBanForPage] APIName=${e}, blockType=${t}, checkScene=${n}, extraInfo=${r}, needReport=${jt}`), !jt) return;
      const {
        appLaunchInfo: i
      } = Z, a = Object.keys(et.query).map((e => `${e}=${et.query[e]}`)).join("&"), s = {
        session_id: i.sessionid || i.sessionId,
        cur_path: et.lastRoute + (a ? `?${a}` : ""),
        title: et.navigationBarTitleMap[et.lastRoute],
        check_scene: n,
        block_status: t,
        extra_info: r,
        launch_scene: i.scene,
        launch_path: i.path,
        target_path: o
      };
      Pt.log("[reportAPIBanForPage], reqData:", s), xt({
        reqData: s,
        apiName: "webapi_reportnvgcheckinfo",
        complete(e) {
          Pt.log(`[reportAPIBanForPage], res.errMsg=${e.errMsg}`)
        }
      })
    }
    Z.onReady((() => {
      if (!Ke) try {
        const {
          do_report: e,
          navigate_ban_rule_list: t
        } = Z.appContactInfo.operationInfo.jsonInfo.navigate_ban_info;
        Rt = t, jt = 1 === e, It = new Set(t.reduce(((e, t) => [...e, ...t.ban_jsapi_list]), It)), Pt.log(`[BanForPage][init] needReport=${jt}`), Pt.log("[BanForPage][init] ruleList:", Rt), Pt.log("[BanForPage][init] banAPISet:", It)
      } catch (e) {
        Pt.error(`[BanForPage][init] fail, errMsg=${e.message}`)
      }
    }));
    const Ft = ["startPullDownRefresh"];
    let Dt = [];
    const Nt = {
        appRoute: !1,
        appRouteDone: !1
      },
      Wt = ["open", "openSync", "close", "closeSync", "fstat", "fstatSync", "write", "writeSync", "read", "readSync", "truncate", "truncateSync", "ftruncate", "ftruncateSync"];

    function $t(e, t, n, r) {
      e.errMsg = e.errMsg || `${t}:ok`;
      const o = 0 === e.errMsg.indexOf(`${t}:ok`),
        i = new RegExp(`${t}:(fail |fail:)?cancel`).test(e.errMsg),
        a = 0 === e.errMsg.indexOf(`${t}:fail`);
      "function" == typeof r.beforeAll && r.beforeAll(e), o ? function (e, t, n) {
        const r = function () {
          "function" == typeof e.success && e.success(t), "function" == typeof n.afterSuccess && n.afterSuccess(t)
        };
        "function" == typeof n.beforeSuccess ? 2 === n.beforeSuccess._argumentsLength ? n.beforeSuccess(t, r) : (n.beforeSuccess(t), r()) : r()
      }(n, e, r) : i ? function (e, t, n, r) {
        const o = new RegExp(`${t}:(fail |fail:)?cancel`);
        e.errMsg = e.errMsg.replace(o, `${t}:fail cancel`), "function" == typeof n.fail && n.fail(e), "function" == typeof r.beforeCancel && r.beforeCancel(e), "function" == typeof n.cancel && n.cancel(e), "function" == typeof r.afterCancel && r.afterCancel(e)
      }(e, t, n, r) : a && function (e, t, n, r) {
        "function" == typeof e.beforeFail && e.beforeFail(n), "function" == typeof r.fail && r.fail(n), "function" == typeof e.afterFail && e.afterFail(n), l(e.checkNeedReportFail) && !1 === e.checkNeedReportFail(n) || Reporter.reportIDKey({
          key: `${t}_fail`
        })
      }(r, t, e, n), "function" == typeof n.complete && n.complete(e), "function" == typeof r.afterAll && r.afterAll(e), ((e, t, n, r, o) => {
        let i;
        i = t ? ht : n ? yt : vt, i[e] = i[e] || {}, i[e][o] = (i[e][o] || 0) + 1, Date.now() - _t >= 6e4 && (_t = Date.now(), setTimeout(mt, 6e4))
      })(t, o, a, 0, e.errMsg)
    }

    function Ut(e) {
      return (t, n = {}, r = {}, o = "/") => {
        c(n) || (n = {}), "operateWXData" === t && n._isFromBaseOperateWXData;
        const i = function (e, t) {
          return Object.keys(e).reduce(((n, r) => ("function" == typeof e[r] && (n[r] = __errorTracer__.surroundThirdByTryCatch(e[r], `at api ${t} ${r} callback function`), delete e[r]), n)), {})
        }(n, t);
        if (n = Object.assign({}, n), r = function (e, t) {
            return Object.keys(e).reduce(((n, r) => ("function" == typeof e[r] && (n[r] = tt(e[r], `at api ${t} ${r} callback function`), n[r]._argumentsLength = e[r].length), n)), {})
          }(r, t), Reporter.reportIDKey({
            key: t
          }), !e) {
          if (0 === Z.appType && It.has(t) && ! function (e) {
              const t = Object.keys(et.query).reduce(((e, t) => [...e, `${t}=${et.query[t]}`]), []).join("&"),
                n = et.lastRoute + (t ? `?${t}` : ""),
                r = et.navigationBarTitleMap[et.lastRoute] || "";
              return Pt.log(`[checkAPIAvailableForCurrentPage] APIName=${e}, path=${n}, title=${r}`), Mt(e, n, r)
            }(t)) return void $t({
            errMsg: `${t}:fail API has been banned`
          }, t, i, r);
          delete n.pluginId, delete n.permissionBytes, "/" !== o && (n.pluginId = o)
        }
        const a = (s = t, Ye || Xe && Wt.includes(s));
        var s;
        gt(t, n, (e => {
          $t(e, t, i, r)
        }), a)
      }
    }
    const Bt = Ut(!1),
      Gt = (e, t, n) => {
        Ft.indexOf(e) < 0 ? Bt(e, t, n) : ((e, t, n) => {
          const {
            appRoute: r,
            appRouteDone: o
          } = Nt;
          !r && o ? Bt(e, t, n) : Dt.push({
            name: e,
            args: t,
            option: n
          })
        })(e, t, n)
      },
      Zt = Ut(!0),
      Jt = (e, t, n) => {
        Zt(e, t, n)
      };
    let Vt = "undefined" != typeof __libVersionInfo__ && __libVersionInfo__ ? __libVersionInfo__.version : "unknown",
      qt = "undefined" != typeof __libVersionInfo__ && __libVersionInfo__ ? __libVersionInfo__.updateTime : "unknown";

    function Ht(e) {
      return t => o(t) && t.length > e ? t.substr(0, e) : t
    }

    function Kt(e, t = !0) {
      const n = r(e);
      switch (n) {
        case "Number":
        case "Boolean":
          return e;
        case "String":
          return Ht(512)(e).replace(/\|/g, "||").replace(/,/g, "|.");
        case "Error":
          return `[Error:${Kt(e.message)}|${Kt(e.stack)}]`;
        case "Object":
          return t ? Object.keys(e).map((t => `${Kt(t)}=${Kt(e[t],!1)}`)).sort(((e, t) => e.length - t.length)).join("&") || "{}" : `[${n}]`;
        default:
          return `[${n}]`
      }
    }

    function Xt({
      WXDataApiName: e,
      argument: t,
      isSuccess: n,
      invokeTime: r,
      costTime: o,
      result: i,
      errMsg: a,
      isConfirm: s,
      queueLength: c,
      wxdataQueueTimestamp: u,
      wxdataDequeueTimestamp: l,
      beginCGITimestamp: f,
      CGICallbackTimestamp: p,
      beginCGITimestampAfterConfirm: d,
      CGICallbackTimestampAfterConfirm: g,
      wxlibCallbackTimestamp: h,
      requestInQueue: y,
      requestingCount: v,
      cost1: _,
      cost2: b,
      cost3: m,
      cost4: w,
      cost5: x,
      cost6: S
    }) {
      Math.random() < .05 && setTimeout((() => {
        const O = et.currentNetworkType,
          C = Z.appType + 1e3,
          A = Z.appLaunchInfo && void 0 !== Z.appLaunchInfo.scene ? Z.appLaunchInfo.scene : 0,
          E = [e, Kt(JSON.stringify(t)), n ? 1 : 0, r, o, O, Kt(i), C, A, Vt, qt, a && Kt(a) || "", s ? 1 : 0, c, _, b, m, w, x, S, 0, y ? 1 : 0, v, r, u, l, f, p, d, g, h].map(Ht(1024)).join(",");
        Reporter.reportKeyValue({
          key: "WeAppOperateWXData",
          value: E
        })
      }), 0)
    }
    o(Vt) && (Vt = Vt.replace(" ", "")), o(qt) && (qt = qt.replace(" ", "-"));
    let zt = 0;
    const Yt = wxNativeConsole.createLogger("baseOperateWXData"),
      Qt = ["webapi_getuserinfo", "webapi_getwerunstep_history", "subscribemsg"],
      en = ["webapi_getuserinfo", "webapi_getuserallappauth", "webapi_getadvert", "webapi_getshareinfo"],
      tn = ["qbase_commapi", "webapi_botdemo"];
    const nn = (e, t) => {
      const n = t.timeout;
      if ("number" != typeof n) return void e(t);
      let r = !1;
      const o = setTimeout((function () {
          const e = {
            errMsg: "request timeout"
          };
          r = !0, "function" == typeof t.fail && t.fail(e), "function" == typeof t.complete && t.complete(e)
        }), n),
        i = ["success", "fail", "complete"].reduce(((e, n) => (e[n] = e => {
          r || (clearTimeout(o), "function" == typeof t[n] && t[n](e))
        }, e)), {});
      e(Object.assign({}, t, i))
    };
    const rn = ["Start", "Move", "End", "Cancel"],
      on = new class {
        constructor(e = "", t = !1) {
          this.type = "", this.surround = !1, this.eventMap = new Map, this.callbackMap = new WeakMap, this.originalCallbackMap = new WeakMap, this.type = e, this.surround = t
        }
        on(e, t) {
          if (!l(t)) return void console.error("emitter.on fail: callback must be a function");
          let n = t;
          var r, o;
          this.surround && (r = t, o = `at ${this.type}${e} callback function`, n = void 0 !== __errorTracer__ ? __errorTracer__.surroundThirdByTryCatch(r, o) : void 0 !== __subContextEngine__ ? __subContextEngine__.surroundThirdByTryCatch(r, o) : (...e) => {
            try {
              return r(...e)
            } catch (e) {
              return void console.error(`thirdScriptError\n${e.message};${o}\n`, e)
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
      }("touch", !0),
      an = new Map;

    function sn(e) {
      if (Array.isArray(e)) return e.map(sn);
      if (e && "object" == typeof e) {
        if (!an.has(e)) {
          const t = {};
          an.set(e, t), Object.keys(e).forEach((n => {
            t[n] = sn(e[n])
          }))
        }
        return an.get(e)
      }
      return e
    }
    A.onReady((() => {
      rn.forEach((e => {
        A.Touch.on(e.toLowerCase(), (function (t) {
          on.getListenersLength(e) > 0 && on.emit(e, function (e) {
            an.clear();
            const t = sn(e);
            return an.clear(), t
          }(t))
        }))
      }))
    }));
    const cn = {};
    rn.forEach((e => {
      const t = `offTouch${e}`;
      cn[`onTouch${e}`] = t => {
        on.on(e, t)
      }, cn[t] = t => {
        on.off(e, t)
      }
    }));
    const un = cn,
      ln = Object.getOwnPropertyDescriptor,
      fn = Object.defineProperty,
      pn = Object.getPrototypeOf,
      dn = (e, t) => {
        const n = {};
        return Object.keys(e).forEach((r => {
          const o = ln(e, r);
          if ("function" != typeof o.value) o.get || o.set ? fn(n, r, {
            get() {
              if (o.get) return o.get.call(this)
            },
            set(e) {
              o.set && o.set.call(this, e)
            },
            configurable: !0,
            enumerable: !0
          }) : fn(n, r, o);
          else {
            const o = e[r];
            n[r] = function () {
              return o.apply(t || this, arguments)
            }
          }
        })), n
      },
      gn = () => {
        const e = new A.NativeGlobal.Canvas;
        return e.width = 1, e.height = 1, e
      },
      hn = function () {
        const e = {
          "2d": null,
          webgl: null
        };
        return t => {
          if (e[t]) return e[t];
          const n = gn().getContext(t),
            r = pn(n);
          return e[t] = dn(r), e[t]
        }
      }(),
      {
        imageMap: yn,
        canvasMap: vn
      } = T,
      _n = function (e) {
        return e && e.__image__ ? yn.get(e) : e && e.__canvas__ ? vn.get(e) : e
      },
      bn = e => {
        const t = (e => {
            const t = gn(),
              n = pn(t);
            return dn(n, e)
          })(e),
          n = t.getContext;
        return t.getContext = function (e, t) {
          if ("2d" !== e && "webgl" !== e) return null;
          const r = vn.get(this),
            o = n.call(r, e, t);
          return o.__proto__ = mn(e), fn(o, "canvas", {
            value: r,
            configurable: !1,
            writable: !1
          }), o
        }, t
      },
      mn = function () {
        const e = {
          "2d": null,
          webgl: null
        };
        return t => {
          if (e[t]) return e[t];
          const n = hn(t);
          if ("2d" === t) {
            const e = n.drawImage;
            n.drawImage = function () {
              const t = _n(arguments[0]);
              arguments[0] && t && (arguments[0] = t), e.apply(this, arguments)
            };
            const t = n.createPattern;
            n.createPattern = function () {
              const e = _n(arguments[0]);
              arguments[0] && e && (arguments[0] = e), t.apply(this, arguments)
            }
          } else "webgl" === t && ["texImage2D", "texSubImage2D"].forEach((e => {
            const t = n[e];
            n[e] = function () {
              const e = arguments[arguments.length - 1],
                n = _n(e);
              e && n && (arguments[arguments.length - 1] = n), t.apply(this, arguments)
            }
          }));
          return e[t] = n, e[t]
        }
      }();
    let wn = null,
      xn = 0;
    const Sn = (e = !1) => {
        const t = e ? A.sharedCanvas : new A.NativeGlobal.Canvas,
          n = "devtools" === Z.platform ? t : t.__id || xn++;
        try {
          delete t.__id
        } catch (e) {}
        const r = new Y(t, e);
        return r.__proto__ = bn(t), r.toTempFilePath = (e = {}) => ((e, t = {}, n = {}) => {
          Gt("canvasToTempFilePath", Object.assign(t, {
            canvasId: e
          }), n)
        })(n, e), r.toTempFilePathSync = (e = {}) => ((e, t = {}, n = {}) => {
          let r, o;
          if (Gt("canvasToTempFilePathSync", Object.assign(t, {
              canvasId: e
            }, {
              success: e => {
                r = e.tempFilePath
              },
              fail: e => {
                o = e.errMsg
              }
            }), n), o) throw new Error(o);
          return r
        })(n, e), r
      },
      On = () => Sn(),
      Cn = () => (wn || (wn = Sn(!0)), wn),
      An = new WeakMap,
      En = ["startTime", "autoplay", "loop", "obeyMuteSwitch", "volume", "duration", "currentTime", "paused", "buffered"],
      Tn = ["Canplay", "Ended", "Error", "Pause", "Play", "Seeked", "Seeking", "Stop", "TimeUpdate", "Waiting"];
    class kn {
      constructor() {
        const e = A.Audio();
        An.set(this, e), En.forEach((t => Object.defineProperty(this, t, {
          get: () => e[t],
          set(n) {
            e[t] = n
          }
        }))), Tn.forEach((t => {
          this["on" + t] = (...n) => {
            e["on" + t](...n)
          }
        }))
      }
      get src() {
        return An.get(this).src
      }
      set src(e) {
        /^https?:\/\//.test(e) ? console.error("[OpenDataContext] src 不可为网络路径") : G("getCloudFileUrl", [e], "audio", (t => {
          /^cloud:\/\//.test(e) ? this._cloudId = e : this._cloudId = "", An.get(this).src = t.data[0].url
        }))
      }
      play() {
        An.get(this).play()
      }
      pause() {
        An.get(this).pause()
      }
      stop() {
        An.get(this).stop()
      }
      seek(e) {
        An.get(this).seek(e)
      }
      destroy() {
        An.get(this).destroy(), An.delete(this)
      }
    }
    const Pn = () => new kn,
      jn = ["request", "downloadFile", "uploadFile", "connectSocket", "closeSocket", "sendSocketMessage", "onSocketError", "onSocketMessage", "onSocketClose", "onSocketOpen", "createUDPSocket", "cloud"];
    const In = un.onTouchStart,
      Rn = un.offTouchStart,
      Mn = un.onTouchMove,
      Ln = un.offTouchMove,
      Fn = un.onTouchEnd,
      Dn = un.offTouchEnd,
      Nn = {
        getSystemInfo: e => {
          G("getSystemInfo", e)
        },
        getSystemInfoSync: () => {
          const e = G("getSystemInfoSync");
          return JSON.parse(JSON.stringify(e))
        },
        createCanvas: () => {
          const e = new _e;
          return ke(e, !1)
        },
        createImage: () => {
          const e = new Ge,
            t = new Ne(e);
          return Ze || (t.__proto__.__defineGetter__("src", (function () {
            if (this._cloudId) return this._cloudId;
            return Be.get(this).src
          })), t.__proto__.__defineSetter__("src", qe), Ze = !0), t
        },
        createInnerAudioContext: () => (console.warn("wx.createInnerAudioContext is not supported in SubContext."), new He),
        onTouchStart: In,
        onTouchMove: Mn,
        onTouchEnd: Fn,
        onTouchCancel: un.onTouchCancel,
        offTouchStart: Rn,
        offTouchMove: Ln,
        offTouchEnd: Dn,
        offTouchCancel: un.offTouchCancel,
        onMessage: e => {
          if ("function" != typeof e) return;
          const t = B((function () {
            const t = Date.now(),
              n = e.apply(null, arguments),
              r = Date.now() - t;
            return r >= 10 && Reporter.reportKeyValue({
              key: "MiniGameOpenDataMonitor",
              value: [1, r].join(",")
            }), n
          }), "at onMessage callback function");
          J.forEach((e => {
            t(e)
          })), setTimeout((() => {
            J = []
          })), q.on(H, t)
        },
        routeJSServer: e => {
          G("routeJSServer", e)
        },
        checkHandoffEnabled: e => {
          G("checkHandoffEnabled", e)
        },
        startHandoff: e => {
          G("startHandoff", e)
        },
        getGroupUserGameData: function (e) {
          nn((function (e) {
            G("getGroupUserGameData", e)
          }), e)
        },
        getFriendUserGameData: function (e) {
          nn((function (e) {
            G("getFriendUserGameData", e)
          }), e)
        },
        getUserInfo: function (e) {
          nn((function (e) {
            G("getUserInfo", e)
          }), e)
        },
        getFriendCloudStorage: function (e) {
          nn((function (e) {
            G("getFriendCloudStorage", e)
          }), e)
        },
        getGroupInfo: function (e) {
          nn((function (e) {
            G("getGroupInfo", e)
          }), e)
        },
        getGroupCloudStorage: function (e) {
          nn((function (e) {
            G("getGroupCloudStorage", e)
          }), e)
        },
        getUserCloudStorage: function (e) {
          nn((function (e) {
            G("getUserCloudStorage", e)
          }), e)
        },
        setUserCloudStorage: function (e) {
          nn((function (e) {
            G("setUserCloudStorage", e)
          }), e)
        },
        getUserCloudStorageKeys: function (e) {
          nn((function (e) {
            G("getUserCloudStorageKeys", e)
          }), e)
        },
        removeUserCloudStorage: function (e) {
          nn((function (e) {
            G("removeUserCloudStorage", e)
          }), e)
        },
        modifyFriendInteractiveStorage: e => {
          G("modifyFriendInteractiveStorage", e)
        },
        shareMessageToFriend: e => {
          G("shareMessageToFriend", e)
        },
        getPotentialFriendList: e => {
          G("getPotentialFriendList", e)
        },
        getGameServerManager: () => G("getGameServerManager"),
        getSharedCanvas: Pe
      },
      Wn = {},
      $n = {},
      Un = globalThis,
      Bn = function (e) {
        T.originalProto = e.originalProto, Un.__isAdapterInjected = !1, Un.__isSubContext = !0, Un.WXConfig = JSON.parse(JSON.stringify(e.WXConfig)), Un.wx = Wn, Un.requirePlugin = t => e.requirePlugin(t, {}, !0);
        const {
          platform: t
        } = Un.WXConfig;
        var n;
        "devtools" === t && (Un.console = e.console), wxNativeConsole = e.wxNativeConsole, Object.defineProperty(Un, "__wxSourceMap", {
            get: e.getWxSourceMap
          }), A.update(e), n = e.sharedCanvas, xe = ke(n, !0), Un.sharedCanvas = Pe(), Un.GameGlobal = Un, "windows" !== t && "macos" !== t && "mina" !== t || Object.defineProperties(Un, {
            Uint8Array: {
              value: Uint8Array
            },
            Uint16Array: {
              value: Uint16Array
            },
            Uint32Array: {
              value: Uint32Array
            },
            Float32Array: {
              value: Float32Array
            }
          }), Reporter = e.Reporter,
          function (e, t, n, r) {
            if (n.WXConfig.openDataContextExtension) {
              if (!r.checkPermissionSync("openDataContextExtension")) return console.warn("没有权限开启 openDataContextExtension"), !1;
              e.createCanvas = On, e.getSharedCanvas = Cn, e.createInnerAudioContext = Pn, n.sharedCanvas = Cn(), e.cloud = {
                init: t.cloud.init,
                downloadFile: t.cloud.downloadFile
              };
              for (const n in t) n in e || jn.includes(n) || ("function" == typeof t[n] ? e[n] = (...e) => t[n](...e) : e[n] = t[n])
            }
          }(Nn, e.wx, Un, e), e.apiReport(Nn, 1);
        for (const e in Nn) Wn.__defineGetter__(e, (function () {
          return "function" == typeof Nn[e] ? ($n[e] || ($n[e] = (t = Nn[e], n = `wx.${e}`, __subContextEngine__.surroundByTryCatch(t, n))), $n[e]) : Nn[e];
          var t, n
        }))
      };
    __gameOpenDataSDK__ = t
  })(), (() => {
    var e = {
        61: (e, t, n) => {
          n.d(t, {
            G$: () => r
          });
          n(356);
          globalThis;
          const r = function () {
            return "devtools" === __wxConfig.platform
          }
        },
        415: (e, t, n) => {
          n.d(t, {
            Z: () => o
          });
          const r = {
              name: void 0,
              secure: !0,
              runningType: "app",
              init: function (e) {
                this.name = e.contextName, this.secure = e.contextSecure, this.name.startsWith("game") ? this.runningType = "game" : this.name.startsWith("app") && (this.runningType = "app"), this.remoteObjectProto = e.__proto__
              }
            },
            o = r
        },
        1: (e, t, n) => {
          var r = n(917),
            o = n(76);

          function i(e) {
            e = (0, o.B)(e), (0, r.sK)(e, "")
          }

          function a(e) {
            (0, r.sK)(e.reason, "", e.promise || null)
          }
          "undefined" == typeof WeixinJSBridge && (WeixinJSBridge = {}, WeixinJSBridge.subscribeHandler = function (e, t) {
            "onError" === e ? i(t) : "unhandledRejection" === e && a(t)
          }, WeixinJSBridge.invokeCallbackHandler = function () {}), Foundation.on("error", i), Foundation.on("unhandledRejection", a)
        },
        342: (e, t, n) => {
          n.d(t, {
            Z: () => i
          });
          const r = {},
            o = Object.keys;
          r.init = e => {
            const t = o(e);
            for (let n = 0; n < t.length; n++) {
              const o = t[n];
              void 0 === r[o] && (r[o] = e[o])
            }
          };
          const i = r
        },
        527: (e, t, n) => {
          n.d(t, {
            Z: () => w
          });
          var r = n(917);
          const o = Object.getPrototypeOf,
            i = Object.getOwnPropertyNames,
            a = Object.getOwnPropertyDescriptor,
            s = Object.defineProperty,
            c = ["constructor", "__proto__", "__defineGetter__", "__defineSetter__"],
            u = new WeakMap,
            l = new WeakMap,
            f = new WeakMap,
            p = new WeakMap,
            d = new WeakMap,
            g = new WeakMap,
            h = e => {
              for (let t = 0; t < c.length; t++) {
                if (c[t] === e) return !0
              }
              return !1
            },
            y = function (e) {
              const t = d.has(e) ? d.get(e) : {},
                n = (e => {
                  const t = [];
                  for (let n = e; n; n = o(n)) {
                    const e = i(n);
                    for (let r = 0; r < e.length; r++) {
                      const o = e[r],
                        i = a(n, o);
                      void 0 !== i && (i.name = o, t.push(i))
                    }
                  }
                  return t
                })(e);
              for (let e = 0; e < n.length; e++) {
                const r = n[e],
                  o = r.name;
                h(o) || (o in t || (delete r.value, delete r.writable, s(t, o, Object.assign(r, {
                  get: v(o).bind(t),
                  set: _(o).bind(t)
                }))))
              }
              return d.set(e, t), u.set(t, e), t
            },
            v = function (e) {
              return function () {
                const t = u.get(this);
                if (void 0 !== t) return null === t ? null : m(t[e])
              }
            },
            _ = function (e) {
              return function (t) {
                const n = u.get(this);
                if (null != n) {
                  if (null != t) {
                    const r = b(t);
                    if (r) return void(n[e] = r)
                  }
                  n[e] = m(t)
                }
              }
            },
            b = function (e) {
              if (("function" == typeof e || "object" == typeof e) && null != e) return u.get(e) || l.get(e) || f.get(e)
            },
            m = function (e) {
              const t = (0, r.Em)(e);
              return "String" === t || "Number" === t || "Boolean" === t ? e.valueOf() : "Array" === t ? function (e) {
                if (g.has(e)) return g.get(e);
                const t = [];
                for (let n = 0; n < e.length; n++) {
                  const r = e[n];
                  t.push(m(r))
                }
                return g.set(e, t), f.set(t, e), t
              }(e) : "Function" === t ? function (e) {
                if (p.has(e)) return p.get(e);
                const t = function () {
                  "use strict";
                  const t = [];
                  for (let e = 0; e < arguments.length; e++) t[e] = m(arguments[e]);
                  const n = b(this) || this,
                    r = e.apply(n, t);
                  return m(r)
                };
                return p.set(e, t), l.set(t, e), t
              }(e) : "Object" === t ? y(e) : "ArrayBuffer" === t ? (e !== ArrayBuffer.prototype && (e.__proto__ = ArrayBuffer.prototype), e) : "Undefined" === t ? void 0 : "Null" === t ? null : e
            },
            w = m
        },
        976: (e, t, n) => {
          n.d(t, {
            k: () => o
          });
          var r = n(864);
          const o = e => {
            e.onReady((e => {
              const t = JSON.parse(JSON.stringify(e)),
                n = __wxConfig.__readyHandler;
              r.Z.__wxConfig = t, "function" == typeof n && n()
            }))
          }
        },
        409: (e, t, n) => {
          n.d(t, {
            E: () => i
          });
          var r = n(864),
            o = n(527);
          const i = function (e) {
            var t;
            e.__isAppServiceRemoteDebugMode__ && "ios" !== e.__wxConfig.platform ? r.Z.console = e.originConsole : r.Z.console = new e.BaseConsole, e.wxLibVersion !== ((null === (t = __libVersionInfo__) || void 0 === t ? void 0 : t.version) || "9.9.9") && Reporter.reportIDKey({
              key: "subContextLibVersionNotMatch"
            }), __Function__ = e.__Function__, __safeway__ = e.safeway, Reporter = e.Reporter, NativeGlobal = e.NativeGlobal, WeixinCanvas = e.WeixinCanvas, WeixinArrayBuffer = e.WeixinArrayBuffer, wxNativeConsole = e.wxNativeConsole, Canvas = e.Canvas, Image = e.Image, ImageData = e.ImageData, Path2D = e.Path2D, SkiaCanvasExternalTexture = e.SkiaCanvasExternalTexture, skiacanvasLoadNewFont = e.skiacanvasLoadNewFont, SkiaCanvas = e.SkiaCanvas, HTMLCanvasView = e.HTMLCanvasView, HTMLCanvasElement = e.HTMLCanvasElement, SkiaImage = e.SkiaImage, SkiaImageData = e.SkiaImageData, SkiaPath2D = e.SkiaPath2D, SkiaCanvasLoadNewFont = e.SkiaCanvasLoadNewFont, SkiaCanvasRequestAnimationFrame = e.SkiaCanvasRequestAnimationFrame, SkiaCanvasCancelAnimationFrame = e.SkiaCanvasCancelAnimationFrame, BaseConsole = e.BaseConsole, $dbg = e.$dbg, __isAppServiceRemoteDebugMode__ = !!e.__isAppServiceRemoteDebugMode__, __remoteDebug__ = e.__remoteDebug__, __debuggerMessager__ = e.debuggerMessager, performanceChannel = e.performanceChannel, __sclEngine__ = e.__sclEngine__, Object.defineProperty(r.Z, "__wxSourceMap", {
              get: (0, o.Z)(e.getWxSourceMap)
            }), LanDebug = e.LanDebug, getPerfDog = e.getPerfDog, getProfiler = e.getProfiler
          }
        },
        526: (e, t, n) => {
          n.d(t, {
            M: () => i
          });
          var r = n(527),
            o = n(864);
          const i = function (e) {
            o.Z.__isAdapterInjected = !1, o.Z.console = e.console, o.Z.sharedCanvas = e.sharedCanvas;
            const t = ["cloud", "getBox2D", "protobuf"];
            __wxConfig.onReady((() => {
              !0 !== __wxConfig.useHighPerformanceMode ? o.Z.wx = Object.keys(e.wx).reduce(((n, o) => (t.includes(o) ? n[o] = e.wx[o] : n[o] = new r.Z(e.wx[o]), n)), {}) : o.Z.wx = e.wx
            })), o.Z.requirePlugin = e.requirePlugin, o.Z.WXWebAssembly = e.WXWebAssembly, delete o.Z.WebAssembly, o.Z.GameGlobal = o.Z, o.Z.setGlobalAttribute = e.setGlobalAttribute, wxNativeConsole = e.wxNativeConsole, Object.defineProperty(o.Z, "__wxSourceMap", {
              get: (0, r.Z)(e.getWxSourceMap)
            })
          }
        },
        928: (e, t, n) => {
          n.d(t, {
            o: () => o
          });
          var r = n(527);
          const o = function (e) {
            e.getWxSourceMap && (e.getWxSourceMap = (0, r.Z)(e.getWxSourceMap)), __gameOpenDataSDK__.init(e)
          }
        },
        749: (e, t, n) => {
          n.d(t, {
            m: () => o
          });
          var r = n(864);
          const o = function (e) {
            r.Z.console = e.console, r.Z.WXWebAssembly = e.WXWebAssembly, r.Z.env = {}, e.pluginEnv && (r.Z.pluginEnv = e.pluginEnv), e.wx && (r.Z.wx = e.wx)
          }
        },
        864: (e, t, n) => {
          n.d(t, {
            Z: () => r
          });
          const r = function () {
            return this
          }()
        },
        658: (e, t, n) => {
          n.d(t, {
            z: () => i,
            W: () => a
          });
          var r = n(415),
            o = n(527);
          const i = e => JSContext && JSContext.invokeMainContextMethodSync ? JSContext.invokeMainContextMethodSync("loadJsFiles", (0, o.Z)({
              paths: e,
              contextName: r.Z.name
            }), !0) : "failed",
            a = (e, t) => JSContext && JSContext.invokeMainContextMethodSync ? JSContext.invokeMainContextMethodSync("injectEntryFile", (0, o.Z)({
              moduleName: e,
              separatedPlugins: t
            }), !0) : "failed"
        },
        521: (e, t, n) => {
          n.d(t, {
            v: () => s
          });
          var r = n(864),
            o = n(415),
            i = n(917);
          const a = function (e, t) {
              return function () {
                return "function" == typeof arguments[0] && (arguments[0] = (0, i.M2)(arguments[0], t)), e(...arguments)
              }
            },
            s = e => {
              r.Z.setTimeout = a(e.setTimeout, "at setTimeout callback function"), r.Z.clearTimeout = a(e.clearTimeout), r.Z.setInterval = a(e.setInterval, "at setInterval callback function"), r.Z.clearInterval = a(e.clearInterval), "game" === o.Z.runningType && (r.Z.requestAnimationFrame = a(e.requestAnimationFrame, "at requestAnimationFrame callback function"), r.Z.cancelAnimationFrame = a(e.cancelAnimationFrame))
            }
        },
        917: (e, t, n) => {
          n.d(t, {
            sK: () => i,
            M2: () => a,
            Ue: () => c,
            Em: () => u
          });
          var r = n(415),
            o = n(342);
          const i = function (e, t, n) {
            try {
              let i;
              if ("game" === r.Z.name) i = o.Z.RunType.GAME;
              else if ("gameOpenData" === r.Z.name) i = o.Z.RunType.GAME_SUBCONTEXT;
              else if ("app" === r.Z.name) i = o.Z.RunType.APP;
              else {
                if (!r.Z.name.startsWith("gamePlugin_")) throw new Error("unknown context");
                i = o.Z.RunType.GAME_SUBCONTEXT
              }
              void 0 !== n ? o.Z.thirdErrorReport({
                key: i,
                error: e,
                extend: t,
                triggerErrorCallback: !r.Z.secure,
                isUnhandledRejection: !0,
                promise: n
              }) : o.Z.thirdErrorReport({
                key: i,
                error: e,
                extend: t,
                triggerErrorCallback: !r.Z.secure,
                isUnhandledRejection: !1
              })
            } catch (e) {
              console.error("[ErrorHandler] error in Report.thirdErrorReport: ", e.message)
            }
          };

          function a(e, t) {
            return function () {
              let n;
              try {
                "function" == typeof e && (n = e.apply(e, arguments))
              } catch (e) {
                i(e, t)
              }
              return n
            }
          }

          function s(e, t) {
            let n = "";
            if ("app" === r.Z.runningType ? n = "appSubContextSDKScriptError" : "game" === r.Z.runningType && (n = "gameSubContextSDKScriptError"), "function" == typeof o.Z.thirdErrorReport) try {
              o.Z.errorReport({
                key: n,
                error: e,
                extend: t,
                triggerErrorCallback: !r.Z.secure
              })
            } catch (e) {
              console.error("[ErrorHandler] error in Report.thirdErrorReport: ", e.message)
            } else {
              const r = `${n}\n${t?`${e.message};${t}`:e.message}\n${e.stack}`;
              "undefined" != typeof console && console.error(r)
            }
          }

          function c(e, t) {
            return function () {
              try {
                return e.apply(e, arguments)
              } catch (e) {
                if ("[object Error]" === Object.prototype.toString.apply(e)) {
                  if ("AppServiceSdkKnownError" === e.type) throw e;
                  s(e, t)
                }
                return
              }
            }
          }

          function u(e) {
            return Object.prototype.toString.call(e).split(" ")[1].split("]")[0]
          }
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
    }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    };
    var r = {};
    (() => {
      n.r(r), n.d(r, {
        surroundByTryCatch: () => p.Ue,
        surroundThirdByTryCatch: () => p.M2,
        onInitReady: () => _,
        loadJsFiles: () => d.z,
        injectEntryFile: () => d.W,
        initSubContext: () => m
      });
      n(1);
      var e = n(864),
        t = n(342),
        o = n(415),
        i = n(527),
        a = n(521),
        s = n(976),
        c = n(526),
        u = n(928),
        l = n(409),
        f = n(749),
        p = n(917),
        d = n(658),
        g = n(61);
      delete e.Z.WeixinJSCore, delete e.Z.WeixinNativeBuffer, delete e.Z.WeixinWorker;
      let h = [],
        y = !1;
      const v = function () {
          h.forEach((e => {
            e()
          })), h = []
        },
        _ = function (e) {
          y ? v() : h.push(e)
        };
      JSContext.subscribe("subContextEnvReady", (0, p.Ue)((e => {
        if (o.Z.init(e), (0, a.v)(e), t.Z.init(e.Reporter), "game" === o.Z.name)(0, c.M)(e);
        else if ("gameOpenData" === o.Z.name)(0, u.o)(e);
        else if ("app" === o.Z.name)(0, l.E)(e);
        else {
          if (!o.Z.name.startsWith("gamePlugin_")) throw new Error("subContextEnvReady: missing context name.");
          (0, f.m)(e)
        }(0, s.k)(e.__wxConfig)
      }))), JSContext.subscribe("subContextRefreshEnv", (0, p.Ue)((e => {
        if ("game" === o.Z.name)(0, c.M)(e);
        else if ("gameOpenData" === o.Z.name)(0, u.o)(e);
        else if ("app" === o.Z.name)(0, l.E)(e);
        else {
          if (!o.Z.name.startsWith("gamePlugin_")) throw new Error("subContextRefreshEnv: missing context name.");
          (0, f.m)(e)
        }
        JSContext.publish("subContextRefreshEnvReady", null, !0)
      }))), JSContext.subscribe("subContextRefreshWxConfig", (0, p.Ue)((e => {
        const {
          key: t,
          value: n
        } = e;
        "string" == typeof t && n && (__wxConfig[t] = n)
      }))), JSContext.subscribe("exportGlobalRequire", (0, p.Ue)((t => {
        const n = /^[A-Za-z]+(\.[A-Za-z]+)*$/,
          r = t => {
            const {
              name: r,
              value: o,
              needCondom: a
            } = t;
            if ("string" != typeof r || !n.test(r)) throw new Error("exportGlobalRequire: illegal variable name.");
            r.split(".").reduce(((e, t, n, s) => {
              if (n === s.length - 1) {
                if (t in e) throw new Error(`exportGlobalRequire: Variable ${r} exists.`);
                e[t] = a ? (0, i.Z)(o) : o
              }
              if ("Array" !== (0, p.Em)(e[t]) && "Function" !== (0, p.Em)(e[t]) && "Object" !== (0, p.Em)(e[t])) {
                const e = s.slice(0, n + 1).join(".");
                throw new Error(`exportGlobalRequire: ${e} is not an Object.`)
              }
              return e[t]
            }), e.Z)
          };
        return "[object Array]" === Object.prototype.toString.call(t) ? t.forEach(r) : r(t)
      }))), JSContext.subscribe("subContextDestroy", (() => {})), JSContext.publish("subContextReady", {
        contextGlobal: {
          get __wxSourceMap() {
            return e.Z.__wxSourceMap
          },
          get __require() {
            return "game" === o.Z.name || o.Z.name.startsWith("gamePlugin_") ? e.Z.require : (0, i.Z)(e.Z.require)
          },
          jsonParse: JSON.parse,
          jsonStringify: JSON.stringify,
          arrayBufferProto: ArrayBuffer.prototype
        }
      }, !0);
      const b = function () {
          Protect.overwriteSetPrototypeOf(), Protect.doNotWriteGlobalObjs()
        },
        m = function () {
          Protect.hijack(!1);
          let e = !1;
          o.Z.secure && __wxConfig && __wxConfig.isIsolateContext && (b(), e = !0), __wxConfig.onReady((() => {
            e || __wxConfig.plugins && !(0, g.G$)() && b()
          })), y = !0, v()
        }
    })(), __subContextEngine__ = r
  })();;
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
  };
  __subContextEngine__.initSubContext();
})(this);
var __WASubContextEndTime__ = Date.now();
typeof __wxLibrary.onEnd === 'function' && __wxLibrary.onEnd();
__wxLibrary = undefined;