this.__isAppServiceRemoteDebugMode__ = true;
var __WeixinJSCore__ = this.WeixinJSCore;
var __AppServiceRemoteDebugger__;
! function () {
  var e = {
      566: function (e) {
        e.exports = function (e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e
        }, e.exports.default = e.exports, e.exports.__esModule = !0
      },
      29: function (e, t, n) {
        var r = n(566);

        function s(e, t) {
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
            t % 2 ? s(Object(n), !0).forEach((function (t) {
              r(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
          }
          return e
        }, e.exports.default = e.exports, e.exports.__esModule = !0
      },
      707: function (e, t, n) {
        var r, s, i;
        ! function (o, a) {
          "use strict";
          s = [n(439)], void 0 === (i = "function" == typeof (r = function (e) {
            var t = /(^|@)\S+:\d+/,
              n = /^\s*at .*(\S+:\d+|\(native\))/m,
              r = /^(eval@)?(\[native code])?$/;
            return {
              parse: function (e) {
                if (void 0 !== e.stacktrace || void 0 !== e["opera#sourceloc"]) return this.parseOpera(e);
                if (e.stack && e.stack.match(n)) return this.parseV8OrIE(e);
                if (e.stack) return this.parseFFOrSafari(e);
                throw new Error("Cannot parse given Error object")
              },
              extractLocation: function (e) {
                if (-1 === e.indexOf(":")) return [e];
                var t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ""));
                return [t[1], t[2] || void 0, t[3] || void 0]
              },
              parseV8OrIE: function (t) {
                return t.stack.split("\n").filter((function (e) {
                  return !!e.match(n)
                }), this).map((function (t) {
                  t.indexOf("(eval ") > -1 && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
                  var n = t.replace(/^\s+/, "").replace(/\(eval code/g, "("),
                    r = n.match(/ (\((.+):(\d+):(\d+)\)$)/),
                    s = (n = r ? n.replace(r[0], "") : n).split(/\s+/).slice(1),
                    i = this.extractLocation(r ? r[1] : s.pop()),
                    o = s.join(" ") || void 0,
                    a = ["eval", "<anonymous>"].indexOf(i[0]) > -1 ? void 0 : i[0];
                  return new e({
                    functionName: o,
                    fileName: a,
                    lineNumber: i[1],
                    columnNumber: i[2],
                    source: t
                  })
                }), this)
              },
              parseFFOrSafari: function (t) {
                return t.stack.split("\n").filter((function (e) {
                  return !e.match(r)
                }), this).map((function (t) {
                  if (t.indexOf(" > eval") > -1 && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === t.indexOf("@") && -1 === t.indexOf(":")) return new e({
                    functionName: t
                  });
                  var n = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                    r = t.match(n),
                    s = r && r[1] ? r[1] : void 0,
                    i = this.extractLocation(t.replace(n, ""));
                  return new e({
                    functionName: s,
                    fileName: i[0],
                    lineNumber: i[1],
                    columnNumber: i[2],
                    source: t
                  })
                }), this)
              },
              parseOpera: function (e) {
                return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
              },
              parseOpera9: function (t) {
                for (var n = /Line (\d+).*script (?:in )?(\S+)/i, r = t.message.split("\n"), s = [], i = 2, o = r.length; i < o; i += 2) {
                  var a = n.exec(r[i]);
                  a && s.push(new e({
                    fileName: a[2],
                    lineNumber: a[1],
                    source: r[i]
                  }))
                }
                return s
              },
              parseOpera10: function (t) {
                for (var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = t.stacktrace.split("\n"), s = [], i = 0, o = r.length; i < o; i += 2) {
                  var a = n.exec(r[i]);
                  a && s.push(new e({
                    functionName: a[3] || void 0,
                    fileName: a[2],
                    lineNumber: a[1],
                    source: r[i]
                  }))
                }
                return s
              },
              parseOpera11: function (n) {
                return n.stack.split("\n").filter((function (e) {
                  return !!e.match(t) && !e.match(/^Error created at/)
                }), this).map((function (t) {
                  var n, r = t.split("@"),
                    s = this.extractLocation(r.pop()),
                    i = r.shift() || "",
                    o = i.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
                  i.match(/\(([^)]*)\)/) && (n = i.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                  var a = void 0 === n || "[arguments not available]" === n ? void 0 : n.split(",");
                  return new e({
                    functionName: o,
                    args: a,
                    fileName: s[0],
                    lineNumber: s[1],
                    columnNumber: s[2],
                    source: t
                  })
                }), this)
              }
            }
          }) ? r.apply(t, s) : r) || (e.exports = i)
        }()
      },
      439: function (e, t) {
        var n, r, s;
        ! function (i, o) {
          "use strict";
          r = [], void 0 === (s = "function" == typeof (n = function () {
            function e(e) {
              return !isNaN(parseFloat(e)) && isFinite(e)
            }

            function t(e) {
              return e.charAt(0).toUpperCase() + e.substring(1)
            }

            function n(e) {
              return function () {
                return this[e]
              }
            }
            var r = ["isConstructor", "isEval", "isNative", "isToplevel"],
              s = ["columnNumber", "lineNumber"],
              i = ["fileName", "functionName", "source"],
              o = r.concat(s, i, ["args"], ["evalOrigin"]);

            function a(e) {
              if (e)
                for (var n = 0; n < o.length; n++) void 0 !== e[o[n]] && this["set" + t(o[n])](e[o[n]])
            }
            a.prototype = {
              getArgs: function () {
                return this.args
              },
              setArgs: function (e) {
                if ("[object Array]" !== Object.prototype.toString.call(e)) throw new TypeError("Args must be an Array");
                this.args = e
              },
              getEvalOrigin: function () {
                return this.evalOrigin
              },
              setEvalOrigin: function (e) {
                if (e instanceof a) this.evalOrigin = e;
                else {
                  if (!(e instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
                  this.evalOrigin = new a(e)
                }
              },
              toString: function () {
                var e = this.getFileName() || "",
                  t = this.getLineNumber() || "",
                  n = this.getColumnNumber() || "",
                  r = this.getFunctionName() || "";
                return this.getIsEval() ? e ? "[eval] (" + e + ":" + t + ":" + n + ")" : "[eval]:" + t + ":" + n : r ? r + " (" + e + ":" + t + ":" + n + ")" : e + ":" + t + ":" + n
              }
            }, a.fromString = function (e) {
              var t = e.indexOf("("),
                n = e.lastIndexOf(")"),
                r = e.substring(0, t),
                s = e.substring(t + 1, n).split(","),
                i = e.substring(n + 1);
              if (0 === i.indexOf("@")) var o = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i, ""),
                u = o[1],
                l = o[2],
                c = o[3];
              return new a({
                functionName: r,
                args: s || void 0,
                fileName: u,
                lineNumber: l || void 0,
                columnNumber: c || void 0
              })
            };
            for (var u = 0; u < r.length; u++) a.prototype["get" + t(r[u])] = n(r[u]), a.prototype["set" + t(r[u])] = function (e) {
              return function (t) {
                this[e] = Boolean(t)
              }
            }(r[u]);
            for (var l = 0; l < s.length; l++) a.prototype["get" + t(s[l])] = n(s[l]), a.prototype["set" + t(s[l])] = function (t) {
              return function (n) {
                if (!e(n)) throw new TypeError(t + " must be a Number");
                this[t] = Number(n)
              }
            }(s[l]);
            for (var c = 0; c < i.length; c++) a.prototype["get" + t(i[c])] = n(i[c]), a.prototype["set" + t(i[c])] = function (e) {
              return function (t) {
                this[e] = String(t)
              }
            }(i[c]);
            return a
          }) ? n.apply(t, r) : n) || (e.exports = s)
        }()
      },
      447: function (e, t, n) {
        var r = n(23),
          s = Object.prototype.hasOwnProperty,
          i = "undefined" != typeof Map;

        function o() {
          this._array = [], this._set = i ? new Map : Object.create(null)
        }
        o.fromArray = function (e, t) {
          for (var n = new o, r = 0, s = e.length; r < s; r++) n.add(e[r], t);
          return n
        }, o.prototype.size = function () {
          return i ? this._set.size : Object.getOwnPropertyNames(this._set).length
        }, o.prototype.add = function (e, t) {
          var n = i ? e : r.toSetString(e),
            o = i ? this.has(e) : s.call(this._set, n),
            a = this._array.length;
          o && !t || this._array.push(e), o || (i ? this._set.set(e, a) : this._set[n] = a)
        }, o.prototype.has = function (e) {
          if (i) return this._set.has(e);
          var t = r.toSetString(e);
          return s.call(this._set, t)
        }, o.prototype.indexOf = function (e) {
          if (i) {
            var t = this._set.get(e);
            if (t >= 0) return t
          } else {
            var n = r.toSetString(e);
            if (s.call(this._set, n)) return this._set[n]
          }
          throw new Error('"' + e + '" is not in the set.')
        }, o.prototype.at = function (e) {
          if (e >= 0 && e < this._array.length) return this._array[e];
          throw new Error("No element indexed by " + e)
        }, o.prototype.toArray = function () {
          return this._array.slice()
        }, t.I = o
      },
      725: function (e, t, n) {
        var r = n(817);
        t.encode = function (e) {
          var t, n = "",
            s = function (e) {
              return e < 0 ? 1 + (-e << 1) : 0 + (e << 1)
            }(e);
          do {
            t = 31 & s, (s >>>= 5) > 0 && (t |= 32), n += r.encode(t)
          } while (s > 0);
          return n
        }, t.decode = function (e, t, n) {
          var s, i, o, a, u = e.length,
            l = 0,
            c = 0;
          do {
            if (t >= u) throw new Error("Expected more digits in base 64 VLQ value.");
            if (-1 === (i = r.decode(e.charCodeAt(t++)))) throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
            s = !!(32 & i), l += (i &= 31) << c, c += 5
          } while (s);
          n.value = (a = (o = l) >> 1, 1 == (1 & o) ? -a : a), n.rest = t
        }
      },
      817: function (e, t) {
        var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
        t.encode = function (e) {
          if (0 <= e && e < n.length) return n[e];
          throw new TypeError("Must be between 0 and 63: " + e)
        }, t.decode = function (e) {
          return 65 <= e && e <= 90 ? e - 65 : 97 <= e && e <= 122 ? e - 97 + 26 : 48 <= e && e <= 57 ? e - 48 + 52 : 43 == e ? 62 : 47 == e ? 63 : -1
        }
      },
      106: function (e, t) {
        function n(e, r, s, i, o, a) {
          var u = Math.floor((r - e) / 2) + e,
            l = o(s, i[u], !0);
          return 0 === l ? u : l > 0 ? r - u > 1 ? n(u, r, s, i, o, a) : a == t.LEAST_UPPER_BOUND ? r < i.length ? r : -1 : u : u - e > 1 ? n(e, u, s, i, o, a) : a == t.LEAST_UPPER_BOUND ? u : e < 0 ? -1 : e
        }
        t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2, t.search = function (e, r, s, i) {
          if (0 === r.length) return -1;
          var o = n(-1, r.length, e, r, s, i || t.GREATEST_LOWER_BOUND);
          if (o < 0) return -1;
          for (; o - 1 >= 0 && 0 === s(r[o], r[o - 1], !0);) --o;
          return o
        }
      },
      626: function (e, t, n) {
        var r = n(23);

        function s() {
          this._array = [], this._sorted = !0, this._last = {
            generatedLine: -1,
            generatedColumn: 0
          }
        }
        s.prototype.unsortedForEach = function (e, t) {
          this._array.forEach(e, t)
        }, s.prototype.add = function (e) {
          var t, n, s, i, o, a;
          n = e, s = (t = this._last).generatedLine, i = n.generatedLine, o = t.generatedColumn, a = n.generatedColumn, i > s || i == s && a >= o || r.compareByGeneratedPositionsInflated(t, n) <= 0 ? (this._last = e, this._array.push(e)) : (this._sorted = !1, this._array.push(e))
        }, s.prototype.toArray = function () {
          return this._sorted || (this._array.sort(r.compareByGeneratedPositionsInflated), this._sorted = !0), this._array
        }, t.H = s
      },
      213: function (e, t) {
        function n(e, t, n) {
          var r = e[t];
          e[t] = e[n], e[n] = r
        }

        function r(e, t, s, i) {
          if (s < i) {
            var o = s - 1;
            n(e, (c = s, d = i, Math.round(c + Math.random() * (d - c))), i);
            for (var a = e[i], u = s; u < i; u++) t(e[u], a) <= 0 && n(e, o += 1, u);
            n(e, o + 1, u);
            var l = o + 1;
            r(e, t, s, l - 1), r(e, t, l + 1, i)
          }
          var c, d
        }
        t.U = function (e, t) {
          r(e, t, 0, e.length - 1)
        }
      },
      809: function (e, t, n) {
        var r = n(23),
          s = n(106),
          i = n(447).I,
          o = n(725),
          a = n(213).U;

        function u(e, t) {
          var n = e;
          return "string" == typeof e && (n = r.parseSourceMapInput(e)), null != n.sections ? new d(n, t) : new l(n, t)
        }

        function l(e, t) {
          var n = e;
          "string" == typeof e && (n = r.parseSourceMapInput(e));
          var s = r.getArg(n, "version"),
            o = r.getArg(n, "sources"),
            a = r.getArg(n, "names", []),
            u = r.getArg(n, "sourceRoot", null),
            l = r.getArg(n, "sourcesContent", null),
            c = r.getArg(n, "mappings"),
            d = r.getArg(n, "file", null);
          if (s != this._version) throw new Error("Unsupported version: " + s);
          u && (u = r.normalize(u)), o = o.map(String).map(r.normalize).map((function (e) {
            return u && r.isAbsolute(u) && r.isAbsolute(e) ? r.relative(u, e) : e
          })), this._names = i.fromArray(a.map(String), !0), this._sources = i.fromArray(o, !0), this._absoluteSources = this._sources.toArray().map((function (e) {
            return r.computeSourceURL(u, e, t)
          })), this.sourceRoot = u, this.sourcesContent = l, this._mappings = c, this._sourceMapURL = t, this.file = d
        }

        function c() {
          this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null
        }

        function d(e, t) {
          var n = e;
          "string" == typeof e && (n = r.parseSourceMapInput(e));
          var s = r.getArg(n, "version"),
            o = r.getArg(n, "sections");
          if (s != this._version) throw new Error("Unsupported version: " + s);
          this._sources = new i, this._names = new i;
          var a = {
            line: -1,
            column: 0
          };
          this._sections = o.map((function (e) {
            if (e.url) throw new Error("Support for url field in sections not implemented.");
            var n = r.getArg(e, "offset"),
              s = r.getArg(n, "line"),
              i = r.getArg(n, "column");
            if (s < a.line || s === a.line && i < a.column) throw new Error("Section offsets must be ordered and non-overlapping.");
            return a = n, {
              generatedOffset: {
                generatedLine: s + 1,
                generatedColumn: i + 1
              },
              consumer: new u(r.getArg(e, "map"), t)
            }
          }))
        }
        u.fromSourceMap = function (e, t) {
          return l.fromSourceMap(e, t)
        }, u.prototype._version = 3, u.prototype.__generatedMappings = null, Object.defineProperty(u.prototype, "_generatedMappings", {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings
          }
        }), u.prototype.__originalMappings = null, Object.defineProperty(u.prototype, "_originalMappings", {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings
          }
        }), u.prototype._charIsMappingSeparator = function (e, t) {
          var n = e.charAt(t);
          return ";" === n || "," === n
        }, u.prototype._parseMappings = function (e, t) {
          throw new Error("Subclasses must implement _parseMappings")
        }, u.GENERATED_ORDER = 1, u.ORIGINAL_ORDER = 2, u.GREATEST_LOWER_BOUND = 1, u.LEAST_UPPER_BOUND = 2, u.prototype.eachMapping = function (e, t, n) {
          var s, i = t || null;
          switch (n || u.GENERATED_ORDER) {
            case u.GENERATED_ORDER:
              s = this._generatedMappings;
              break;
            case u.ORIGINAL_ORDER:
              s = this._originalMappings;
              break;
            default:
              throw new Error("Unknown order of iteration.")
          }
          var o = this.sourceRoot;
          s.map((function (e) {
            var t = null === e.source ? null : this._sources.at(e.source);
            return {
              source: t = r.computeSourceURL(o, t, this._sourceMapURL),
              generatedLine: e.generatedLine,
              generatedColumn: e.generatedColumn,
              originalLine: e.originalLine,
              originalColumn: e.originalColumn,
              name: null === e.name ? null : this._names.at(e.name)
            }
          }), this).forEach(e, i)
        }, u.prototype.allGeneratedPositionsFor = function (e) {
          var t = r.getArg(e, "line"),
            n = {
              source: r.getArg(e, "source"),
              originalLine: t,
              originalColumn: r.getArg(e, "column", 0)
            };
          if (n.source = this._findSourceIndex(n.source), n.source < 0) return [];
          var i = [],
            o = this._findMapping(n, this._originalMappings, "originalLine", "originalColumn", r.compareByOriginalPositions, s.LEAST_UPPER_BOUND);
          if (o >= 0) {
            var a = this._originalMappings[o];
            if (void 0 === e.column)
              for (var u = a.originalLine; a && a.originalLine === u;) i.push({
                line: r.getArg(a, "generatedLine", null),
                column: r.getArg(a, "generatedColumn", null),
                lastColumn: r.getArg(a, "lastGeneratedColumn", null)
              }), a = this._originalMappings[++o];
            else
              for (var l = a.originalColumn; a && a.originalLine === t && a.originalColumn == l;) i.push({
                line: r.getArg(a, "generatedLine", null),
                column: r.getArg(a, "generatedColumn", null),
                lastColumn: r.getArg(a, "lastGeneratedColumn", null)
              }), a = this._originalMappings[++o]
          }
          return i
        }, t.SourceMapConsumer = u, l.prototype = Object.create(u.prototype), l.prototype.consumer = u, l.prototype._findSourceIndex = function (e) {
          var t, n = e;
          if (null != this.sourceRoot && (n = r.relative(this.sourceRoot, n)), this._sources.has(n)) return this._sources.indexOf(n);
          for (t = 0; t < this._absoluteSources.length; ++t)
            if (this._absoluteSources[t] == e) return t;
          return -1
        }, l.fromSourceMap = function (e, t) {
          var n = Object.create(l.prototype),
            s = n._names = i.fromArray(e._names.toArray(), !0),
            o = n._sources = i.fromArray(e._sources.toArray(), !0);
          n.sourceRoot = e._sourceRoot, n.sourcesContent = e._generateSourcesContent(n._sources.toArray(), n.sourceRoot), n.file = e._file, n._sourceMapURL = t, n._absoluteSources = n._sources.toArray().map((function (e) {
            return r.computeSourceURL(n.sourceRoot, e, t)
          }));
          for (var u = e._mappings.toArray().slice(), d = n.__generatedMappings = [], h = n.__originalMappings = [], p = 0, g = u.length; p < g; p++) {
            var m = u[p],
              f = new c;
            f.generatedLine = m.generatedLine, f.generatedColumn = m.generatedColumn, m.source && (f.source = o.indexOf(m.source), f.originalLine = m.originalLine, f.originalColumn = m.originalColumn, m.name && (f.name = s.indexOf(m.name)), h.push(f)), d.push(f)
          }
          return a(n.__originalMappings, r.compareByOriginalPositions), n
        }, l.prototype._version = 3, Object.defineProperty(l.prototype, "sources", {
          get: function () {
            return this._absoluteSources.slice()
          }
        }), l.prototype._parseMappings = function (e, t) {
          for (var n, s, i, u, l, d = 1, h = 0, p = 0, g = 0, m = 0, f = 0, b = e.length, v = 0, S = {}, y = {}, _ = [], w = []; v < b;)
            if (";" === e.charAt(v)) d++, v++, h = 0;
            else if ("," === e.charAt(v)) v++;
          else {
            for ((n = new c).generatedLine = d, u = v; u < b && !this._charIsMappingSeparator(e, u); u++);
            if (i = S[s = e.slice(v, u)]) v += s.length;
            else {
              for (i = []; v < u;) o.decode(e, v, y), l = y.value, v = y.rest, i.push(l);
              if (2 === i.length) throw new Error("Found a source, but no line and column");
              if (3 === i.length) throw new Error("Found a source and line, but no column");
              S[s] = i
            }
            n.generatedColumn = h + i[0], h = n.generatedColumn, i.length > 1 && (n.source = m + i[1], m += i[1], n.originalLine = p + i[2], p = n.originalLine, n.originalLine += 1, n.originalColumn = g + i[3], g = n.originalColumn, i.length > 4 && (n.name = f + i[4], f += i[4])), w.push(n), "number" == typeof n.originalLine && _.push(n)
          }
          a(w, r.compareByGeneratedPositionsDeflated), this.__generatedMappings = w, a(_, r.compareByOriginalPositions), this.__originalMappings = _
        }, l.prototype._findMapping = function (e, t, n, r, i, o) {
          if (e[n] <= 0) throw new TypeError("Line must be greater than or equal to 1, got " + e[n]);
          if (e[r] < 0) throw new TypeError("Column must be greater than or equal to 0, got " + e[r]);
          return s.search(e, t, i, o)
        }, l.prototype.computeColumnSpans = function () {
          for (var e = 0; e < this._generatedMappings.length; ++e) {
            var t = this._generatedMappings[e];
            if (e + 1 < this._generatedMappings.length) {
              var n = this._generatedMappings[e + 1];
              if (t.generatedLine === n.generatedLine) {
                t.lastGeneratedColumn = n.generatedColumn - 1;
                continue
              }
            }
            t.lastGeneratedColumn = 1 / 0
          }
        }, l.prototype.originalPositionFor = function (e) {
          var t = {
              generatedLine: r.getArg(e, "line"),
              generatedColumn: r.getArg(e, "column")
            },
            n = this._findMapping(t, this._generatedMappings, "generatedLine", "generatedColumn", r.compareByGeneratedPositionsDeflated, r.getArg(e, "bias", u.GREATEST_LOWER_BOUND));
          if (n >= 0) {
            var s = this._generatedMappings[n];
            if (s.generatedLine === t.generatedLine) {
              var i = r.getArg(s, "source", null);
              null !== i && (i = this._sources.at(i), i = r.computeSourceURL(this.sourceRoot, i, this._sourceMapURL));
              var o = r.getArg(s, "name", null);
              return null !== o && (o = this._names.at(o)), {
                source: i,
                line: r.getArg(s, "originalLine", null),
                column: r.getArg(s, "originalColumn", null),
                name: o
              }
            }
          }
          return {
            source: null,
            line: null,
            column: null,
            name: null
          }
        }, l.prototype.hasContentsOfAllSources = function () {
          return !!this.sourcesContent && this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some((function (e) {
            return null == e
          }))
        }, l.prototype.sourceContentFor = function (e, t) {
          if (!this.sourcesContent) return null;
          var n = this._findSourceIndex(e);
          if (n >= 0) return this.sourcesContent[n];
          var s, i = e;
          if (null != this.sourceRoot && (i = r.relative(this.sourceRoot, i)), null != this.sourceRoot && (s = r.urlParse(this.sourceRoot))) {
            var o = i.replace(/^file:\/\//, "");
            if ("file" == s.scheme && this._sources.has(o)) return this.sourcesContent[this._sources.indexOf(o)];
            if ((!s.path || "/" == s.path) && this._sources.has("/" + i)) return this.sourcesContent[this._sources.indexOf("/" + i)]
          }
          if (t) return null;
          throw new Error('"' + i + '" is not in the SourceMap.')
        }, l.prototype.generatedPositionFor = function (e) {
          var t = r.getArg(e, "source");
          if ((t = this._findSourceIndex(t)) < 0) return {
            line: null,
            column: null,
            lastColumn: null
          };
          var n = {
              source: t,
              originalLine: r.getArg(e, "line"),
              originalColumn: r.getArg(e, "column")
            },
            s = this._findMapping(n, this._originalMappings, "originalLine", "originalColumn", r.compareByOriginalPositions, r.getArg(e, "bias", u.GREATEST_LOWER_BOUND));
          if (s >= 0) {
            var i = this._originalMappings[s];
            if (i.source === n.source) return {
              line: r.getArg(i, "generatedLine", null),
              column: r.getArg(i, "generatedColumn", null),
              lastColumn: r.getArg(i, "lastGeneratedColumn", null)
            }
          }
          return {
            line: null,
            column: null,
            lastColumn: null
          }
        }, d.prototype = Object.create(u.prototype), d.prototype.constructor = u, d.prototype._version = 3, Object.defineProperty(d.prototype, "sources", {
          get: function () {
            for (var e = [], t = 0; t < this._sections.length; t++)
              for (var n = 0; n < this._sections[t].consumer.sources.length; n++) e.push(this._sections[t].consumer.sources[n]);
            return e
          }
        }), d.prototype.originalPositionFor = function (e) {
          var t = {
              generatedLine: r.getArg(e, "line"),
              generatedColumn: r.getArg(e, "column")
            },
            n = s.search(t, this._sections, (function (e, t) {
              return e.generatedLine - t.generatedOffset.generatedLine || e.generatedColumn - t.generatedOffset.generatedColumn
            })),
            i = this._sections[n];
          return i ? i.consumer.originalPositionFor({
            line: t.generatedLine - (i.generatedOffset.generatedLine - 1),
            column: t.generatedColumn - (i.generatedOffset.generatedLine === t.generatedLine ? i.generatedOffset.generatedColumn - 1 : 0),
            bias: e.bias
          }) : {
            source: null,
            line: null,
            column: null,
            name: null
          }
        }, d.prototype.hasContentsOfAllSources = function () {
          return this._sections.every((function (e) {
            return e.consumer.hasContentsOfAllSources()
          }))
        }, d.prototype.sourceContentFor = function (e, t) {
          for (var n = 0; n < this._sections.length; n++) {
            var r = this._sections[n].consumer.sourceContentFor(e, !0);
            if (r) return r
          }
          if (t) return null;
          throw new Error('"' + e + '" is not in the SourceMap.')
        }, d.prototype.generatedPositionFor = function (e) {
          for (var t = 0; t < this._sections.length; t++) {
            var n = this._sections[t];
            if (-1 !== n.consumer._findSourceIndex(r.getArg(e, "source"))) {
              var s = n.consumer.generatedPositionFor(e);
              if (s) return {
                line: s.line + (n.generatedOffset.generatedLine - 1),
                column: s.column + (n.generatedOffset.generatedLine === s.line ? n.generatedOffset.generatedColumn - 1 : 0)
              }
            }
          }
          return {
            line: null,
            column: null
          }
        }, d.prototype._parseMappings = function (e, t) {
          this.__generatedMappings = [], this.__originalMappings = [];
          for (var n = 0; n < this._sections.length; n++)
            for (var s = this._sections[n], i = s.consumer._generatedMappings, o = 0; o < i.length; o++) {
              var u = i[o],
                l = s.consumer._sources.at(u.source);
              l = r.computeSourceURL(s.consumer.sourceRoot, l, this._sourceMapURL), this._sources.add(l), l = this._sources.indexOf(l);
              var c = null;
              u.name && (c = s.consumer._names.at(u.name), this._names.add(c), c = this._names.indexOf(c));
              var d = {
                source: l,
                generatedLine: u.generatedLine + (s.generatedOffset.generatedLine - 1),
                generatedColumn: u.generatedColumn + (s.generatedOffset.generatedLine === u.generatedLine ? s.generatedOffset.generatedColumn - 1 : 0),
                originalLine: u.originalLine,
                originalColumn: u.originalColumn,
                name: c
              };
              this.__generatedMappings.push(d), "number" == typeof d.originalLine && this.__originalMappings.push(d)
            }
          a(this.__generatedMappings, r.compareByGeneratedPositionsDeflated), a(this.__originalMappings, r.compareByOriginalPositions)
        }
      },
      584: function (e, t, n) {
        var r = n(725),
          s = n(23),
          i = n(447).I,
          o = n(626).H;

        function a(e) {
          e || (e = {}), this._file = s.getArg(e, "file", null), this._sourceRoot = s.getArg(e, "sourceRoot", null), this._skipValidation = s.getArg(e, "skipValidation", !1), this._sources = new i, this._names = new i, this._mappings = new o, this._sourcesContents = null
        }
        a.prototype._version = 3, a.fromSourceMap = function (e) {
          var t = e.sourceRoot,
            n = new a({
              file: e.file,
              sourceRoot: t
            });
          return e.eachMapping((function (e) {
            var r = {
              generated: {
                line: e.generatedLine,
                column: e.generatedColumn
              }
            };
            null != e.source && (r.source = e.source, null != t && (r.source = s.relative(t, r.source)), r.original = {
              line: e.originalLine,
              column: e.originalColumn
            }, null != e.name && (r.name = e.name)), n.addMapping(r)
          })), e.sources.forEach((function (r) {
            var i = r;
            null !== t && (i = s.relative(t, r)), n._sources.has(i) || n._sources.add(i);
            var o = e.sourceContentFor(r);
            null != o && n.setSourceContent(r, o)
          })), n
        }, a.prototype.addMapping = function (e) {
          var t = s.getArg(e, "generated"),
            n = s.getArg(e, "original", null),
            r = s.getArg(e, "source", null),
            i = s.getArg(e, "name", null);
          this._skipValidation || this._validateMapping(t, n, r, i), null != r && (r = String(r), this._sources.has(r) || this._sources.add(r)), null != i && (i = String(i), this._names.has(i) || this._names.add(i)), this._mappings.add({
            generatedLine: t.line,
            generatedColumn: t.column,
            originalLine: null != n && n.line,
            originalColumn: null != n && n.column,
            source: r,
            name: i
          })
        }, a.prototype.setSourceContent = function (e, t) {
          var n = e;
          null != this._sourceRoot && (n = s.relative(this._sourceRoot, n)), null != t ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), this._sourcesContents[s.toSetString(n)] = t) : this._sourcesContents && (delete this._sourcesContents[s.toSetString(n)], 0 === Object.keys(this._sourcesContents).length && (this._sourcesContents = null))
        }, a.prototype.applySourceMap = function (e, t, n) {
          var r = t;
          if (null == t) {
            if (null == e.file) throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
            r = e.file
          }
          var o = this._sourceRoot;
          null != o && (r = s.relative(o, r));
          var a = new i,
            u = new i;
          this._mappings.unsortedForEach((function (t) {
            if (t.source === r && null != t.originalLine) {
              var i = e.originalPositionFor({
                line: t.originalLine,
                column: t.originalColumn
              });
              null != i.source && (t.source = i.source, null != n && (t.source = s.join(n, t.source)), null != o && (t.source = s.relative(o, t.source)), t.originalLine = i.line, t.originalColumn = i.column, null != i.name && (t.name = i.name))
            }
            var l = t.source;
            null == l || a.has(l) || a.add(l);
            var c = t.name;
            null == c || u.has(c) || u.add(c)
          }), this), this._sources = a, this._names = u, e.sources.forEach((function (t) {
            var r = e.sourceContentFor(t);
            null != r && (null != n && (t = s.join(n, t)), null != o && (t = s.relative(o, t)), this.setSourceContent(t, r))
          }), this)
        }, a.prototype._validateMapping = function (e, t, n, r) {
          if (t && "number" != typeof t.line && "number" != typeof t.column) throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
          if ((!(e && "line" in e && "column" in e && e.line > 0 && e.column >= 0) || t || n || r) && !(e && "line" in e && "column" in e && t && "line" in t && "column" in t && e.line > 0 && e.column >= 0 && t.line > 0 && t.column >= 0 && n)) throw new Error("Invalid mapping: " + JSON.stringify({
            generated: e,
            source: n,
            original: t,
            name: r
          }))
        }, a.prototype._serializeMappings = function () {
          for (var e, t, n, i, o = 0, a = 1, u = 0, l = 0, c = 0, d = 0, h = "", p = this._mappings.toArray(), g = 0, m = p.length; g < m; g++) {
            if (e = "", (t = p[g]).generatedLine !== a)
              for (o = 0; t.generatedLine !== a;) e += ";", a++;
            else if (g > 0) {
              if (!s.compareByGeneratedPositionsInflated(t, p[g - 1])) continue;
              e += ","
            }
            e += r.encode(t.generatedColumn - o), o = t.generatedColumn, null != t.source && (i = this._sources.indexOf(t.source), e += r.encode(i - d), d = i, e += r.encode(t.originalLine - 1 - l), l = t.originalLine - 1, e += r.encode(t.originalColumn - u), u = t.originalColumn, null != t.name && (n = this._names.indexOf(t.name), e += r.encode(n - c), c = n)), h += e
          }
          return h
        }, a.prototype._generateSourcesContent = function (e, t) {
          return e.map((function (e) {
            if (!this._sourcesContents) return null;
            null != t && (e = s.relative(t, e));
            var n = s.toSetString(e);
            return Object.prototype.hasOwnProperty.call(this._sourcesContents, n) ? this._sourcesContents[n] : null
          }), this)
        }, a.prototype.toJSON = function () {
          var e = {
            version: this._version,
            sources: this._sources.toArray(),
            names: this._names.toArray(),
            mappings: this._serializeMappings()
          };
          return null != this._file && (e.file = this._file), null != this._sourceRoot && (e.sourceRoot = this._sourceRoot), this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)), e
        }, a.prototype.toString = function () {
          return JSON.stringify(this.toJSON())
        }, t.h = a
      },
      270: function (e, t, n) {
        var r = n(584).h,
          s = n(23),
          i = /(\r?\n)/,
          o = "$$$isSourceNode$$$";

        function a(e, t, n, r, s) {
          this.children = [], this.sourceContents = {}, this.line = null == e ? null : e, this.column = null == t ? null : t, this.source = null == n ? null : n, this.name = null == s ? null : s, this[o] = !0, null != r && this.add(r)
        }
        a.fromStringWithSourceMap = function (e, t, n) {
          var r = new a,
            o = e.split(i),
            u = 0,
            l = function () {
              return e() + (e() || "");

              function e() {
                return u < o.length ? o[u++] : void 0
              }
            },
            c = 1,
            d = 0,
            h = null;
          return t.eachMapping((function (e) {
            if (null !== h) {
              if (!(c < e.generatedLine)) {
                var t = (n = o[u] || "").substr(0, e.generatedColumn - d);
                return o[u] = n.substr(e.generatedColumn - d), d = e.generatedColumn, p(h, t), void(h = e)
              }
              p(h, l()), c++, d = 0
            }
            for (; c < e.generatedLine;) r.add(l()), c++;
            if (d < e.generatedColumn) {
              var n = o[u] || "";
              r.add(n.substr(0, e.generatedColumn)), o[u] = n.substr(e.generatedColumn), d = e.generatedColumn
            }
            h = e
          }), this), u < o.length && (h && p(h, l()), r.add(o.splice(u).join(""))), t.sources.forEach((function (e) {
            var i = t.sourceContentFor(e);
            null != i && (null != n && (e = s.join(n, e)), r.setSourceContent(e, i))
          })), r;

          function p(e, t) {
            if (null === e || void 0 === e.source) r.add(t);
            else {
              var i = n ? s.join(n, e.source) : e.source;
              r.add(new a(e.originalLine, e.originalColumn, i, t, e.name))
            }
          }
        }, a.prototype.add = function (e) {
          if (Array.isArray(e)) e.forEach((function (e) {
            this.add(e)
          }), this);
          else {
            if (!e[o] && "string" != typeof e) throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
            e && this.children.push(e)
          }
          return this
        }, a.prototype.prepend = function (e) {
          if (Array.isArray(e))
            for (var t = e.length - 1; t >= 0; t--) this.prepend(e[t]);
          else {
            if (!e[o] && "string" != typeof e) throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
            this.children.unshift(e)
          }
          return this
        }, a.prototype.walk = function (e) {
          for (var t, n = 0, r = this.children.length; n < r; n++)(t = this.children[n])[o] ? t.walk(e) : "" !== t && e(t, {
            source: this.source,
            line: this.line,
            column: this.column,
            name: this.name
          })
        }, a.prototype.join = function (e) {
          var t, n, r = this.children.length;
          if (r > 0) {
            for (t = [], n = 0; n < r - 1; n++) t.push(this.children[n]), t.push(e);
            t.push(this.children[n]), this.children = t
          }
          return this
        }, a.prototype.replaceRight = function (e, t) {
          var n = this.children[this.children.length - 1];
          return n[o] ? n.replaceRight(e, t) : "string" == typeof n ? this.children[this.children.length - 1] = n.replace(e, t) : this.children.push("".replace(e, t)), this
        }, a.prototype.setSourceContent = function (e, t) {
          this.sourceContents[s.toSetString(e)] = t
        }, a.prototype.walkSourceContents = function (e) {
          for (var t = 0, n = this.children.length; t < n; t++) this.children[t][o] && this.children[t].walkSourceContents(e);
          var r = Object.keys(this.sourceContents);
          for (t = 0, n = r.length; t < n; t++) e(s.fromSetString(r[t]), this.sourceContents[r[t]])
        }, a.prototype.toString = function () {
          var e = "";
          return this.walk((function (t) {
            e += t
          })), e
        }, a.prototype.toStringWithSourceMap = function (e) {
          var t = {
              code: "",
              line: 1,
              column: 0
            },
            n = new r(e),
            s = !1,
            i = null,
            o = null,
            a = null,
            u = null;
          return this.walk((function (e, r) {
            t.code += e, null !== r.source && null !== r.line && null !== r.column ? (i === r.source && o === r.line && a === r.column && u === r.name || n.addMapping({
              source: r.source,
              original: {
                line: r.line,
                column: r.column
              },
              generated: {
                line: t.line,
                column: t.column
              },
              name: r.name
            }), i = r.source, o = r.line, a = r.column, u = r.name, s = !0) : s && (n.addMapping({
              generated: {
                line: t.line,
                column: t.column
              }
            }), i = null, s = !1);
            for (var l = 0, c = e.length; l < c; l++) 10 === e.charCodeAt(l) ? (t.line++, t.column = 0, l + 1 === c ? (i = null, s = !1) : s && n.addMapping({
              source: r.source,
              original: {
                line: r.line,
                column: r.column
              },
              generated: {
                line: t.line,
                column: t.column
              },
              name: r.name
            })) : t.column++
          })), this.walkSourceContents((function (e, t) {
            n.setSourceContent(e, t)
          })), {
            code: t.code,
            map: n
          }
        }
      },
      23: function (e, t) {
        t.getArg = function (e, t, n) {
          if (t in e) return e[t];
          if (3 === arguments.length) return n;
          throw new Error('"' + t + '" is a required argument.')
        };
        var n = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,
          r = /^data:.+\,.+$/;

        function s(e) {
          var t = e.match(n);
          return t ? {
            scheme: t[1],
            auth: t[2],
            host: t[3],
            port: t[4],
            path: t[5]
          } : null
        }

        function i(e) {
          var t = "";
          return e.scheme && (t += e.scheme + ":"), t += "//", e.auth && (t += e.auth + "@"), e.host && (t += e.host), e.port && (t += ":" + e.port), e.path && (t += e.path), t
        }

        function o(e) {
          var n = e,
            r = s(e);
          if (r) {
            if (!r.path) return e;
            n = r.path
          }
          for (var o, a = t.isAbsolute(n), u = n.split(/\/+/), l = 0, c = u.length - 1; c >= 0; c--) "." === (o = u[c]) ? u.splice(c, 1) : ".." === o ? l++ : l > 0 && ("" === o ? (u.splice(c + 1, l), l = 0) : (u.splice(c, 2), l--));
          return "" === (n = u.join("/")) && (n = a ? "/" : "."), r ? (r.path = n, i(r)) : n
        }

        function a(e, t) {
          "" === e && (e = "."), "" === t && (t = ".");
          var n = s(t),
            a = s(e);
          if (a && (e = a.path || "/"), n && !n.scheme) return a && (n.scheme = a.scheme), i(n);
          if (n || t.match(r)) return t;
          if (a && !a.host && !a.path) return a.host = t, i(a);
          var u = "/" === t.charAt(0) ? t : o(e.replace(/\/+$/, "") + "/" + t);
          return a ? (a.path = u, i(a)) : u
        }
        t.urlParse = s, t.urlGenerate = i, t.normalize = o, t.join = a, t.isAbsolute = function (e) {
          return "/" === e.charAt(0) || n.test(e)
        }, t.relative = function (e, t) {
          "" === e && (e = "."), e = e.replace(/\/$/, "");
          for (var n = 0; 0 !== t.indexOf(e + "/");) {
            var r = e.lastIndexOf("/");
            if (r < 0) return t;
            if ((e = e.slice(0, r)).match(/^([^\/]+:\/)?\/*$/)) return t;
            ++n
          }
          return Array(n + 1).join("../") + t.substr(e.length + 1)
        };
        var u = !("__proto__" in Object.create(null));

        function l(e) {
          return e
        }

        function c(e) {
          if (!e) return !1;
          var t = e.length;
          if (t < 9) return !1;
          if (95 !== e.charCodeAt(t - 1) || 95 !== e.charCodeAt(t - 2) || 111 !== e.charCodeAt(t - 3) || 116 !== e.charCodeAt(t - 4) || 111 !== e.charCodeAt(t - 5) || 114 !== e.charCodeAt(t - 6) || 112 !== e.charCodeAt(t - 7) || 95 !== e.charCodeAt(t - 8) || 95 !== e.charCodeAt(t - 9)) return !1;
          for (var n = t - 10; n >= 0; n--)
            if (36 !== e.charCodeAt(n)) return !1;
          return !0
        }

        function d(e, t) {
          return e === t ? 0 : null === e ? 1 : null === t ? -1 : e > t ? 1 : -1
        }
        t.toSetString = u ? l : function (e) {
          return c(e) ? "$" + e : e
        }, t.fromSetString = u ? l : function (e) {
          return c(e) ? e.slice(1) : e
        }, t.compareByOriginalPositions = function (e, t, n) {
          var r = d(e.source, t.source);
          return 0 !== r || 0 != (r = e.originalLine - t.originalLine) || 0 != (r = e.originalColumn - t.originalColumn) || n || 0 != (r = e.generatedColumn - t.generatedColumn) || 0 != (r = e.generatedLine - t.generatedLine) ? r : d(e.name, t.name)
        }, t.compareByGeneratedPositionsDeflated = function (e, t, n) {
          var r = e.generatedLine - t.generatedLine;
          return 0 !== r || 0 != (r = e.generatedColumn - t.generatedColumn) || n || 0 !== (r = d(e.source, t.source)) || 0 != (r = e.originalLine - t.originalLine) || 0 != (r = e.originalColumn - t.originalColumn) ? r : d(e.name, t.name)
        }, t.compareByGeneratedPositionsInflated = function (e, t) {
          var n = e.generatedLine - t.generatedLine;
          return 0 !== n || 0 != (n = e.generatedColumn - t.generatedColumn) || 0 !== (n = d(e.source, t.source)) || 0 != (n = e.originalLine - t.originalLine) || 0 != (n = e.originalColumn - t.originalColumn) ? n : d(e.name, t.name)
        }, t.parseSourceMapInput = function (e) {
          return JSON.parse(e.replace(/^\)]}'[^\n]*\n/, ""))
        }, t.computeSourceURL = function (e, t, n) {
          if (t = t || "", e && ("/" !== e[e.length - 1] && "/" !== t[0] && (e += "/"), t = e + t), n) {
            var r = s(n);
            if (!r) throw new Error("sourceMapURL could not be parsed");
            if (r.path) {
              var u = r.path.lastIndexOf("/");
              u >= 0 && (r.path = r.path.substring(0, u + 1))
            }
            t = a(i(r), t)
          }
          return o(t)
        }
      },
      517: function (e, t, n) {
        n(584).h, t.SourceMapConsumer = n(809).SourceMapConsumer, n(270)
      }
    },
    t = {};

  function n(r) {
    var s = t[r];
    if (void 0 !== s) return s.exports;
    var i = t[r] = {
      exports: {}
    };
    return e[r].call(i.exports, i, i.exports, n), i.exports
  }
  n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return n.d(t, {
      a: t
    }), t
  }, n.d = function (e, t) {
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
  }(), n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  };
  var r = {};
  ! function () {
    "use strict";
    n.d(r, {
      default: function () {
        return Ne
      }
    });
    var e = n(29),
      t = n.n(e);
    class s {
      constructor(e) {
        this.delegate = e
      }
      send(e) {
        const t = JSON.stringify(e);
        this.delegate.sendMessage(t)
      }
      sendRaw(e) {
        this.delegate.sendMessage(e)
      }
      set onmessage(e) {
        "function" == typeof e && (this.delegate.onMessage = t => {
          let n;
          try {
            n = JSON.parse(t), e(n)
          } catch (e) {
            console.warn("[FATAL]: failed to parse ws payload", e)
          }
        })
      }
    }
    class i {
      constructor(e) {
        this.delegate = e
      }
      suspend() {
        this.delegate.suspend()
      }
      resume() {
        this.delegate.resume()
      }
    }
    const o = Object.prototype.toString;

    function a(e) {
      return o.call(e).slice(8, -1)
    }

    function u(e) {
      return "Int8Array" === e || "Uint8Array" === e || "Uint8ClampedArray" === e || "Int16Array" === e || "Uint16Array" === e || "Int32Array" === e || "Uint32Array" === e || "Float32Array" === e || "Float64Array" === e
    }

    function l(e) {
      return "Object" === a(e)
    }

    function c(e) {
      return "ArrayBuffer" === a(e)
    }

    function d(e) {
      return u(a(e))
    }

    function h(e) {
      return "DataView" === a(e)
    }

    function p(e) {
      return "Symbol" === a(e)
    }

    function g(e) {
      return "Map" === a(e)
    }

    function m(e) {
      return "Set" === a(e)
    }

    function f(e) {
      return "RegExp" === a(e)
    }
    const b = Number.isNaN || (e => e != e),
      v = (Number.isFinite, e => (e => "Number" === a(e))(e) && Math.abs(e) === 1 / 0);

    function S(e) {
      return "string" == typeof e || "number" == typeof e || "bigint" == typeof e || "boolean" == typeof e || void 0 === e || "symbol" == typeof e
    }

    function y(e = "") {
      return e ? ((Number(e) ^ 16 * Math.random()) >> Number(e) / 4).toString(16) : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, y)
    }
    class _ {
      constructor() {
        this.handlers = []
      }
      subscribe(e) {
        this.handlers.push(e)
      }
      unsubscribe(e) {
        this.handlers = this.handlers.filter((t => t !== e))
      }
      publish(e) {
        this.handlers.slice(0).forEach((t => t(e)))
      }
    }
    class w {
      constructor(e, t, n) {
        this.line = e, this.column = t, this.scriptId = n
      }
    }
    class C {
      constructor(e, t, n) {
        this.line = void 0, this.column = void 0, this.scriptId = void 0, this.line = e, this.column = t, this.scriptId = n
      }
    }

    function k(e) {
      let t = "undefined";
      var n;
      return void 0 === e ? t = "undefined" : null === e ? t = "null" : "number" == typeof e ? t = b(e) ? "nan" : v(e) ? "infinity" : "number" : "boolean" == typeof e ? t = "boolean" : "string" == typeof e ? t = "string" : "function" == typeof e ? t = "function" : (n = e, (Array.isArray && "function" == typeof Array.isArray ? Array.isArray(n) : "Array" === a(n)) ? t = "array" : function (e) {
        return "Date" === a(e)
      }(e) ? t = "date" : l(e) ? t = "object" : f(e) ? t = "regexp" : c(e) ? t = "arraybuffer" : d(e) ? t = a(e) : h(e) ? t = "dataview" : p(e) ? t = "symbol" : g(e) ? t = "map" : m(e) ? t = "set" : function (e) {
        return "WeakMap" === a(e)
      }(e) ? t = "weakmap" : function (e) {
        return "WeakSet" === a(e)
      }(e) ? t = "weakset" : (function (e) {
        return "Math" === a(e)
      }(e) || function (e) {
        return "JSON" === a(e)
      }(e) || "object" == typeof e) && (t = "object")), t
    }

    function I(e, t, n, r, s = !1) {
      try {
        return O(e, t, n, r, s)
      } catch (e) {
        return null
      }
    }

    function O(e, t, n, r, s = !1) {
      let i, o, c, d, h = "",
        g = "",
        m = "";
      "null" == t ? (i = "object", o = "null", c = n) : "undefined" === t ? (i = "undefined", c = n) : "string" === t ? (i = "string", c = n) : "number" === t ? (i = "number", c = n) : "boolean" === t ? (i = "boolean", c = n) : "function" === t ? (i = "function", h = "Function", g = "function" == typeof n && n.__wrapped ? n.toString() : ((e, t) => {
        const n = e.toString(),
          r = t.getRawScriptGroup();
        if (r.length > 0) {
          let s = null;
          for (const e of r) e.rawScript.indexOf(n) > -1 && (s = e);
          if (!s) return "{}";
          try {
            const {
              line: e,
              column: r
            } = function (e, t) {
              const n = e.split("\n"),
                r = t.split("\n");
              let s = 0;
              for (; s < n.length;) {
                const e = n[s].indexOf(r[0]);
                if (e > -1) {
                  let t = 1;
                  for (; t < r.length && 0 === n[s + t].indexOf(r[t]);) t++;
                  if (1 === r.length) return {
                    line: s,
                    column: e
                  };
                  if (t === r.length) return {
                    line: s,
                    column: e
                  }
                }
                s++
              }
              return {
                line: -1,
                column: -1
              }
            }(s.rawScript, n);
            if (-1 === e || -1 === r) return "{}";
            const i = s.consumer.originalPositionFor({
              line: e + 1,
              column: r
            });
            if (i.source) {
              const e = t.getScriptByName(i.source);
              for (const t of e.functions) {
                const n = t.location[0],
                  r = t.location[1];
                if (i.line === n && i.column === r) return e.source.substring(t.start, t.end)
              }
            }
          } catch (e) {
            return t.log("err:", e), "{}"
          }
        }
        return "{}"
      })(n, r), d = r.retainObjectGroup(e, n)) : "nan" === t ? (i = "number", g = "NaN", m = "NaN") : "infinity" === t ? (i = "number", g = "Infinity", m = "Infinity") : "array" === t ? (i = "object", o = "array", h = "Array", g = `Array(${n.length})`, d = r.retainObjectGroup(e, n)) : "date" === t ? (i = "object", o = "date", c = n.toString()) : "object" === t ? (i = "object", h = "Object", g = "Object", d = r.retainObjectGroup(e, n)) : "regexp" === t ? (i = "object", o = "regexp", h = "RegExp", g = n.toString(), d = r.retainObjectGroup(e, n)) : "arraybuffer" === t ? (i = "object", o = "arraybuffer", h = "ArrayBuffer", g = `ArrayBuffer(${n.byteLength})`, d = r.retainObjectGroup(e, n)) : u(t) ? (i = "object", o = "typedarray", h = t, g = `${t}(${n.length})`, d = r.retainObjectGroup(e, n)) : "dataview" === t ? (i = "object", o = "dataview", h = "DataView", g = `DateView(${n.byteLength})`, d = r.retainObjectGroup(e, n)) : "symbol" == t ? (i = "symbol", g = n.toString(), d = r.retainObjectGroup(e, n)) : "map" === t ? (i = "object", o = "map", h = "Map", g = `Map(${n.size})`, d = r.retainObjectGroup(e, n)) : "set" === t ? (i = "object", o = "set", h = "Set", g = `Set(${n.size})`, d = r.retainObjectGroup(e, n)) : "weakset" === t ? (i = "object", o = "weakset", h = "WeakSet", g = "WeakSet", d = r.retainObjectGroup(e, n)) : "weakmap" === t && (i = "object", o = "weakmap", h = "WeakMap", g = "WeakMap", d = r.retainObjectGroup(e, n));
      let f = null;
      if (s)
        if ("Object" === h) {
          let t = !1;
          const s = A(n);
          s.length > 5 && (t = !0);
          const a = [];
          for (let t of s.slice(0, 5)) {
            if ("__proto__" === t) continue;
            const s = n[t],
              i = k(s);
            let o = "";
            if (p(t) && (t = t.toString()), S(s)) {
              const t = O(e, i, s, r, !1);
              o = t.value || t.description || ""
            }
            const u = {
              name: t,
              type: i,
              value: o
            };
            a.push(u)
          }
          f = {
            type: i,
            subtype: o,
            description: g,
            overflow: t,
            properties: a
          }
        } else if ("Array" === h) {
        let t = !1,
          s = n.length;
        s > 100 && (t = !0);
        const u = [];
        for (let t = 0; t < Math.min(s, 100); ++t) {
          const s = n[t],
            i = k(s);
          let c = "";
          if (S(s)) {
            const t = O(e, i, s, r, !1);
            c = t.value || t.description || ""
          } else if (l(s)) c = "Object";
          else if ("Function" === a(s)) c = "";
          else {
            const t = O(e, i, s, r, !1);
            o = t.subtype, c = t.description || ""
          }
          const d = {
            name: String(t),
            type: i,
            value: c
          };
          o && (d.subtype = o), u.push(d)
        }
        f = {
          type: i,
          subtype: o,
          description: g,
          overflow: t,
          properties: u
        }
      }
      const b = {
        type: i,
        subtype: o,
        value: c,
        className: h,
        description: g,
        objectId: d
      };
      return f && (b.preview = f), m && (b.unserializableValue = m), b
    }

    function E(e, t, n) {
      return O(e, k(t), t, n)
    }

    function A(e) {
      const t = Object.getOwnPropertyNames(e),
        n = Object.getOwnPropertySymbols(e),
        r = function (e) {
          return d(e) ? ["buffer", "byteLength", "byteOffset", "length"] : c(e) ? ["byteLength", D, x, T, R] : h(e) ? ["buffer"] : g(e) || m(e) ? ["[[Entries]]", "size"] : f(e) ? ["dotAll", "flags", "ignoreCase", "multiline", "source", "sticky", "unicode"] : l(e) ? ["__proto__"] : []
        }(e);
      return t.concat(n).concat(r)
    }
    const D = "[[Int8Array]]",
      x = "[[Int16Array]]",
      T = "[[Int32Array]]",
      R = "[[Uint8Array]]";

    function N(e, t) {
      return t.toString = () => `${e}() { [native code] }`, Object.defineProperty(t, "name", {
        writable: !1,
        enumerable: !1,
        configurable: !1,
        value: e
      }), t
    }
    var L = n(517),
      F = n(707),
      P = n.n(F);
    const j = "https://servicewechat.com/",
      M = e => `${j}${e}`,
      B = e => e.replace(j, "");
    let G, W, H;
    ! function (e) {
      e[e.Idle = 0] = "Idle", e[e.Running = 1] = "Running", e[e.Paused = 2] = "Paused"
    }(G || (G = {})),
    function (e) {
      e.PausedOnEntry = "PausedOnEntry", e.Ambiguous = "Ambiguous"
    }(W || (W = {})),
    function (e) {
      e.DebuggerStatement = "debuggerStatement", e.Call = "call", e.Return = "return"
    }(H || (H = {}));
    class q extends w {
      constructor(e, t, n) {
        super(e, t), this.breakType = void 0, this.breakType = n
      }
    }
    class U {
      constructor(e = "log", t, n) {
        this.type = e, this.messages = t, this.location = n
      }
    }
    class $ {
      constructor(e, t, n, r, s, i, o) {
        this.scriptId = e, this.url = t, this.relativePath = n, this.startLocation = r, this.endLocation = s, this.contextId = i, this.hashedScript = o
      }
    }
    class J {
      constructor(e, t, n, r) {
        this.scriptId = e, this.line = t, this.column = n, this.reason = r
      }
    }
    class z {}
    class V {
      constructor(e, t, n, r) {
        this.error = e, this.line = t, this.column = n, this.scriptId = r, this.id = V.nextId++
      }
    }
    V.nextId = 0;
    class X {
      constructor(e, t) {
        this.scriptId = e, this.url = t, this.id = void 0, this.name = void 0, this.evalFunction = void 0, this.evalInClosure = void 0, this.currentContext = void 0, this.metadata = void 0, this.callSite = void 0, this.interruptable = !1, this.currentDebuggerState = void 0, this.id = X.currentId++
      }
    }
    X.currentId = 0;
    class K {
      constructor(e, t) {
        this.type = e, this.value = t
      }
    }
    const Q = "(function _eval(_$expr, _$nextFuncDecl) {\n  return [eval(_$expr), eval(_$nextFuncDecl)]\n}.bind(this))",
      Y = ["error"];
    class Z {
      constructor(e, n) {
        this.thread = void 0, this.readFileSync = void 0, this.executionState = G.Idle, this.delegate = void 0, this.subContextGlobal = void 0, this.initialInject = !0, this.scriptsByScriptName = {}, this.scriptsByScriptId = {}, this.scriptByFunctionId = [], this.scriptByInterruptId = [], this.rawScriptGroup = [], this.retainedObjectPool = new Map, this.retainedObjectGroup = new Map, this.logEvent = new _, this.scriptParsedEvent = new _, this.pausedEvent = new _, this.resumedEvent = new _, this.contextCreatedEvent = new _, this.scriptExceptionEvent = new _, this.scriptReceivedEvent = new _, this.attachedPromise = void 0, this.resolveAttachedPromise = void 0, this.originalSubscribeHandler = void 0, this.bridgeBuffer = [], this.totalBreakpointCount = 0, this.hasBreakpoints = !1, this.currentLine = 0, this.currentColumn = 0, this.currentScriptId = 0, this.hasDebuggerStmt = !1, this.callFrames = [], this.thread = e, this.readFileSync = n;
        const r = this,
          s = [];
        this.subContextGlobal = {
          $dbg: {
            $: N("$", ((e, n) => {
              const i = s[n];
              if (i) return i.bind(null, e);
              const o = this.scriptByFunctionId[n],
                a = n - o.functionsRange[0],
                u = o.functions[a],
                l = {
                  scriptId: o.scriptId,
                  url: `${j}${o.fileName}`,
                  metadata: u,
                  name: u.name,
                  currentDebuggerState: te.Normal
                },
                c = function (e, ...n) {
                  const s = t()(t()({}, l), {}, {
                    id: X.currentId++,
                    currentContext: this,
                    interruptable: u.interruptsRequested > 0
                  });
                  r.callFrames.push(s), (r.hasBreakpoints || r.hasDebuggerStmt) && r.delegate.handlePushCallFrame();
                  try {
                    return e.apply(this, n)
                  } finally {
                    (r.hasBreakpoints || r.hasDebuggerStmt) && r.delegate.handlePopCallFrame(), r.callFrames.pop(), s.interruptable && r.releaseObjectGroup(String(s.id))
                  }
                };
              return Object.defineProperty(c, "name", {
                writable: !0,
                enumerable: !0,
                configurable: !0,
                value: u.name
              }), Object.defineProperty(c, "toString", {
                writable: !0,
                enumerable: !0,
                configurable: !0,
                value: function () {
                  return u ? o.source.substring(u.start, u.end) : "{}"
                }
              }), c.__wrapped = !0, s[n] = c, c.bind(null, e)
            })),
            __: N("__", (e => {
              this.setEvaluateForCallFrame(e)
            })),
            _: N("_", ((e, t, n, s = 0) => {
              if (this.currentLine = t, this.currentColumn = n, this.currentScriptId = e, s && this.setInterruptableForCurrentCallFrame(), !r.hasBreakpoints && !r.hasDebuggerStmt) return;
              if (!this.callFrames[this.callFrames.length - 1].interruptable) return;
              1 === this.callFrames.length && (this.getCurrentCallFrame().scriptId = e);
              const i = this.delegate && this.delegate.handleInterruptSignal(e, t, n);
              if (s || i) {
                this.executionState = G.Paused;
                const r = new J(e, t, n, W.Ambiguous);
                this.pausedEvent.publish(r), this.thread.suspend()
              }
            }))
          },
          BaseConsole: class {
            log(...e) {
              r.logEvent.publish(new U("log", e, new w(r.currentLine, r.currentColumn, r.currentScriptId)))
            }
            warn(...e) {
              r.logEvent.publish(new U("warning", e, new w(r.currentLine, r.currentColumn, r.currentScriptId)))
            }
            error(...e) {
              r.logEvent.publish(new U("error", e, new w(r.currentLine, r.currentColumn, r.currentScriptId)))
            }
            info(...e) {
              r.logEvent.publish(new U("info", e, new w(r.currentLine, r.currentColumn, r.currentScriptId)))
            }
            debug(...e) {
              r.logEvent.publish(new U("debug", e, new w(r.currentLine, r.currentColumn, r.currentScriptId)))
            }
            group(...e) {
              r.logEvent.publish(new U("group", e, new w(r.currentLine, r.currentColumn, r.currentScriptId)))
            }
            groupEnd(...e) {
              r.logEvent.publish(new U("groupEnd", e, new w(r.currentLine, r.currentColumn, r.currentScriptId)))
            }
          }
        }, this.attachedPromise = new Promise((e => {
          this.resolveAttachedPromise = e, setTimeout((() => {
            e()
          }), 3e4)
        }))
      }
      setupConsole(e, t) {
        const n = new t;
        Y.forEach((t => {
          const r = e[t];
          "function" == typeof e[t] && (e[t] = function () {
            n[t].apply(n, arguments), r.apply(e, arguments)
          })
        }))
      }
      notifyEntryCreated() {
        const e = new X(0, "");
        e.name = "global", e.interruptable = !0, this.callFrames.push(e), this.delegate && this.delegate.handlePushCallFrame(), this.executionState = G.Running
      }
      getSubContextGlobals() {
        return this.subContextGlobal
      }
      startBufferBridgeMessages() {
        const e = (...e) => {
            this.bridgeBuffer.push(e)
          },
          t = n.g;
        this.originalSubscribeHandler = t.WeixinJSBridge.subscribeHandler;
        try {
          Object.defineProperty(t.WeixinJSBridge, "subscribeHandler", {
            get: () => e
          })
        } catch (e) {}
      }
      dispatchBridgeMessages() {
        const e = n.g,
          t = this.originalSubscribeHandler;
        Object.defineProperty(e.WeixinJSBridge, "subscribeHandler", {
          get: () => t
        });
        for (const t of this.bridgeBuffer) e.WeixinJSBridge.subscribeHandler(...t)
      }
      setRuntimeDelegate(e) {
        this.delegate = e
      }
      launch() {
        this.resolveAttachedPromise && this.resolveAttachedPromise()
      }
      runAfterAttached(e = (() => {})) {
        return this.attachedPromise.then((() => {
          e()
        })).catch((e => {}))
      }
      registerScript(e, t = "", n = "") {
        let r, s = {},
          i = "";
        try {
          let o = "";
          if (t) o = t;
          else {
            const t = "__debug__/__jscore-debug__.png";
            o = e ? e + t : t
          }
          if (!n) {
            const t = "app-service.js.map";
            n = e ? e + t : t
          }
          const a = e ? e + "app-service.js" : "app-service.js",
            u = this.readFileSync(o),
            l = this.readFileSync(n);
          i = this.readFileSync(a);
          try {
            r = JSON.parse(u)
          } catch (e) {
            console.warn("[FATAL] failed to parse metadata")
          }
          try {
            s = JSON.parse(l)
          } catch (e) {
            console.warn("[FATAL] failed to parse sourcemap")
          }
        } catch (e) {
          console.warn("[FATAL] failed to regsiterScript", e)
        }
        r && (this.internalRegisterScript(this.initialInject, r, s, i), this.initialInject = !1)
      }
      triggerLogEvent(e = []) {
        this.logEvent.publish(new U("log", e))
      }
      internalRegisterScript(e, t, n, r) {
        const s = new L.SourceMapConsumer(n),
          i = Object.keys(t.scriptFiles),
          o = {
            rawScript: r,
            consumer: s
          };
        this.rawScriptGroup.push(o), i.forEach((e => {
          let n = "";
          try {
            n = s.sourceContentFor(e)
          } catch (e) {
            console.warn("[FATAL] sourcemap error", e)
          }
          const r = t.scriptFiles[e];
          r.functions = r.functions.map((e => {
            const n = t.functionMetadataKeys,
              r = {};
            return n.forEach(((t, n) => {
              r[t] = e[n]
            })), r.interruptsRequested = 0, r
          })), r.fileName = e, r.source = n, r.consumer = s, r.rawScript = o, this.scriptsByScriptId[r.scriptId] = r, this.scriptsByScriptName[r.fileName] = r;
          for (let e = r.interruptsRange[0]; e <= r.interruptsRange[1]; ++e) this.scriptByInterruptId[e] = r;
          for (let e = r.functionsRange[0]; e <= r.functionsRange[1]; ++e) this.scriptByFunctionId[e] = r;
          this.scriptParsedEvent.publish(new $(r.scriptId, M(e), e, new w(1, 0), new w(1, 0), this.getContextId(), String(function (e) {
            for (var t = 0, n = 3735928559; t < e.length; t++) n = Math.imul(n ^ e.charCodeAt(t), 2654435761);
            return (n ^ n >>> 16) >>> 0
          }(n))))
        })), e && this.notifyEntryCreated(), this.hasDebuggerStmt = this.hasDebuggerStmt || t.hasDebuggerStmt
      }
      setEvaluateForCallFrame(e) {
        const t = this.callFrames[this.callFrames.length - 1];
        t ? t.evalFunction = e : console.warn("[FATAL] invalid current call frame")
      }
      evaluateOnCallFrame(e, t = this.getCurrentCallFrame(), n = !1, r = !0) {
        if (!t) return new K("undefined", void 0);
        const s = t.evalFunction;
        if (s) {
          let i;
          n && !t.evalInClosure && (t.evalInClosure = s.call(t.currentContext, Q));
          try {
            if (this.delegate && this.delegate.willPerformEvaluate(e), n) {
              const n = t.evalInClosure,
                [r, s] = n(e, Q);
              t.evalInClosure = s, i = r
            } else i = s.call(t.currentContext, e)
          } catch (e) {
            if (!r) {
              const {
                line: t,
                column: n
              } = e;
              e.message = e.message, e.stack = "", this.scriptExceptionEvent.publish(new V(e, t, n))
            }
            return new K("undefined", void 0)
          } finally {
            this.delegate && this.delegate.didPerformEvaluate()
          }
          const o = k(i);
          return new K(o, i)
        }
        return new K("undefined", void 0)
      }
      rawEvaluateOnCallFrame(e, t = this.getCurrentCallFrame()) {
        if (!t) return new K("undefined", void 0);
        const n = t.evalFunction;
        if (n) {
          let r;
          try {
            this.delegate && this.delegate.willPerformEvaluate(e), r = n.call(t.currentContext, e)
          } catch (e) {
            return new K("undefined", void 0)
          } finally {
            this.delegate && this.delegate.didPerformEvaluate()
          }
          return r
        }
        return null
      }
      retainObjectGroup(e, t) {
        const n = y();
        return this.retainedObjectPool.set(n, {
          group: e,
          reference: t
        }), this.retainedObjectGroup.has(e) || this.retainedObjectGroup.set(e, []), this.retainedObjectGroup.get(e).push(n), n
      }
      releaseObjectGroup(e) {
        const t = this.retainedObjectGroup.get(e);
        if (t) {
          for (const e of t) this.retainedObjectPool.delete(e);
          this.retainedObjectGroup.delete(e)
        }
      }
      getRetainedObject(e) {
        var t;
        return null === (t = this.retainedObjectPool.get(e)) || void 0 === t ? void 0 : t.reference
      }
      getRetainedObjectGroup(e) {
        var t;
        return null === (t = this.retainedObjectPool.get(e)) || void 0 === t ? void 0 : t.group
      }
      resumeExecution() {
        this.thread.resume(), this.resumedEvent.publish(new z)
      }
      searchFunctionInLocation(e, t) {
        const n = this.getScriptByScriptId(e).functions;
        for (const e of n) {
          const n = e.location[0],
            r = e.location[1],
            s = e.location[2],
            i = e.location[3];
          if (n === s) {
            if (t.line === n && t.column >= r && t.column <= i) return e
          } else {
            if (t.line === n && t.column >= r) return e;
            if (t.line === s && t.column <= s) return e;
            if (t.line > n && t.line < s) return e
          }
        }
        return null
      }
      increaseInterruptForFunction(e) {
        if (e) {
          ++e.interruptsRequested, ++this.totalBreakpointCount, this.totalBreakpointCount > 0 && (this.hasBreakpoints = !0);
          for (const t of this.callFrames) t.metadata === e && (t.interruptable = !0)
        }
      }
      decreaseInterruptForFunction(e) {
        e && (--e.interruptsRequested, --this.totalBreakpointCount, this.totalBreakpointCount <= 0 && (this.hasBreakpoints = !1))
      }
      getCallFrames() {
        return this.callFrames
      }
      getGlobalCallFrame() {
        return this.callFrames[0]
      }
      getCallFrameById(e) {
        return this.callFrames.find((t => t.id === e))
      }
      getCurrentCallFrame() {
        const e = this.callFrames[this.callFrames.length - 1];
        return e || console.warn("[FATAL] invalid call frame"), e
      }
      setInterruptableForCurrentCallFrame() {
        const e = this.getCurrentCallFrame();
        e && (e.interruptable = !0)
      }
      setInterruptableForPreviousCallFrame() {
        const e = this.callFrames[this.callFrames.length - 2];
        e && (e.interruptable = !0)
      }
      dispatchError(e) {
        if (this.log("[ERROR]", e), "object" == typeof e && void 0 !== e.message && void 0 !== e.stack) {
          const t = (e => {
            const t = P().parse(e);
            if (t.length <= 0) return null;
            const n = t[0];
            return {
              fileName: n.fileName,
              lineNumber: n.lineNumber,
              columnNumber: n.columnNumber
            }
          })(e);
          let n;
          if (t) {
            e.line = t.lineNumber || 1, e.column = t.columnNumber || 1;
            const r = this.getScriptByName(t.fileName || "");
            r && (n = r.scriptId)
          }
          this.scriptExceptionEvent.publish(new V(e, e.line, e.column, n))
        } else {
          const t = new Error;
          t.message = e, this.scriptExceptionEvent.publish(new V(t, -1, -1))
        }
      }
      getThisObjectOnCurrentCallFrame() {
        const e = this.callFrames[this.callFrames.length - 1];
        if (e && e.evalFunction) {
          const t = (0, e.evalFunction)("this");
          if ("object" == typeof t) return t
        }
        return {}
      }
      getPossibleInterrupts(e, t, n) {
        var r, s;
        const i = null !== (r = null === (s = this.scriptsByScriptId[+e]) || void 0 === s ? void 0 : s.interrupts) && void 0 !== r ? r : [],
          o = [];
        for (const e of i) e[0] === t.line && o.push(new q(e[0], e[1], H.DebuggerStatement));
        return o
      }
      getExecutionState() {
        return this.executionState
      }
      getLogEvent() {
        return this.logEvent
      }
      getScriptParsedEvent() {
        return this.scriptParsedEvent
      }
      getPausedEvent() {
        return this.pausedEvent
      }
      getResumedEvent() {
        return this.resumedEvent
      }
      getContextCreatedEvent() {
        return this.contextCreatedEvent
      }
      getScriptExceptionEvent() {
        return this.scriptExceptionEvent
      }
      getScriptReceivedEvent() {
        return this.scriptReceivedEvent
      }
      getConsumer(e) {
        var t;
        return null === (t = this.scriptsByScriptName[e]) || void 0 === t ? void 0 : t.consumer
      }
      getFunctionMetadata(e) {
        return this.scriptsByScriptName[e].functions
      }
      getScriptByScriptId(e) {
        return this.scriptsByScriptId[e]
      }
      getScriptByName(e) {
        return this.scriptsByScriptName[e]
      }
      getScriptNames() {
        return Object.keys(this.scriptsByScriptName)
      }
      getScriptsWithScriptName() {
        return this.scriptsByScriptName
      }
      findFileByInterruptId(e) {
        return Object.values(this.scriptsByScriptId).find((t => e >= t.interruptsRange[0] && e <= t.interruptsRange[1]))
      }
      findScriptByFunctionId(e) {
        return Object.values(this.scriptsByScriptId).find((t => e >= t.functionsRange[0] && e <= t.functionsRange[1]))
      }
      findScriptById(e) {
        return this.scriptsByScriptId[e]
      }
      getRawScriptGroup() {
        return this.rawScriptGroup
      }
      getContextId() {
        return 1
      }
      isInitialInject() {
        return this.initialInject
      }
      log(...e) {
        this.logEvent.publish(new U("log", e))
      }
    }
    Z.globalScriptIndex = 0;
    class ee {
      constructor(e, t, n, r) {
        this.scriptId = e, this.line = t, this.column = n, this.condition = r
      }
    }
    let te, ne, re;
    ! function (e) {
      e[e.Normal = 0] = "Normal", e[e.StepOver = 1] = "StepOver", e[e.StepInto = 2] = "StepInto", e[e.StepOut = 3] = "StepOut", e[e.SkipAllPauses = 4] = "SkipAllPauses", e[e.ContinueToLocation = 5] = "ContinueToLocation"
    }(te || (te = {}));
    class se {
      constructor(e) {
        this.runtime = void 0, this.breakpoints = [], this.nextBreakpointId = 0, this.pausedOnEntry = !1, this.debuggerState = te.Normal, this.savedDebuggerState = te.Normal, this.targetContinueLocation = null, this.breakpointActive = !0, this.runtime = e, this.runtime.setRuntimeDelegate(this)
      }
      setPausedOnEntry(e = !0) {
        this.pausedOnEntry = e
      }
      didResetRuntimeState() {
        this.breakpoints = [], this.debuggerState = te.Normal, this.savedDebuggerState = te.Normal
      }
      handleInterruptSignal(e, t, n) {
        if (this.pausedOnEntry) return this.pausedOnEntry = !1, !0;
        if (!this.breakpointActive) return !1;
        if (this.debuggerState === te.SkipAllPauses) return !1;
        if (this.debuggerState === te.StepOver) return this.debuggerState = te.Normal, !0;
        if (this.debuggerState === te.StepInto) {
          const e = this.runtime.callFrames[this.runtime.callFrames.length - 1];
          return e && (e.currentDebuggerState = te.Normal), this.debuggerState = te.Normal, !0
        }
        for (const r of this.breakpoints)
          if (r && r.scriptId === e && t === r.line && n === r.column) return !(r.condition && !this.runtime.rawEvaluateOnCallFrame(r.condition));
        if (this.debuggerState === te.ContinueToLocation) {
          if (this.targetContinueLocation) {
            if (this.targetContinueLocation.line === t) return this.targetContinueLocation = null, this.debuggerState = te.Normal, !0
          } else console.warn("[FATAL] ContinueToLocation command without targetContinueLocation");
          return !1
        }
        return !1
      }
      handlePushCallFrame() {
        const e = this.runtime.callFrames[this.runtime.callFrames.length - 2];
        e && (e.currentDebuggerState = this.debuggerState), this.debuggerState === te.StepOver && (e && (e.currentDebuggerState = te.StepOver), this.debuggerState = te.Normal), e && e.currentDebuggerState === te.StepInto && (this.debuggerState = te.StepOver, e && (e.currentDebuggerState = te.Normal), this.runtime.setInterruptableForCurrentCallFrame())
      }
      handlePopCallFrame() {
        const e = this.runtime.callFrames[this.runtime.callFrames.length - 1];
        if (this.debuggerState === te.SkipAllPauses) return;
        e && e.currentDebuggerState === te.StepOut && (this.debuggerState = te.StepOver, e.currentDebuggerState = te.Normal, this.runtime.setInterruptableForPreviousCallFrame()), this.debuggerState === te.StepOver && (e.currentDebuggerState = te.Normal, this.runtime.setInterruptableForPreviousCallFrame());
        const t = this.runtime.callFrames[this.runtime.callFrames.length - 2];
        t && t.currentDebuggerState === te.StepOver && (this.debuggerState = te.StepOver)
      }
      willPerformEvaluate() {
        this.savedDebuggerState = this.debuggerState, this.debuggerState = te.SkipAllPauses
      }
      didPerformEvaluate() {
        this.debuggerState = this.savedDebuggerState, this.savedDebuggerState = te.Normal
      }
      setBreakPointByUrlWithCondition(e, t, n) {
        const r = this.runtime.getPossibleInterrupts(e, t, new w(0, 0)),
          s = t.column,
          i = r.reduce((function (e, t) {
            return Math.abs(t.column - s) < Math.abs(e.column - s) ? t : e
          })),
          o = this.breakpoints.findIndex((e => e && e.line === t.line && e.column === t.column));
        if (o > -1) return {
          breakpointId: o,
          breakpoint: this.breakpoints[o]
        };
        const a = new ee(e, i.line, i.column, n),
          u = this.nextBreakpointId++;
        this.breakpoints[u] = a;
        const l = this.runtime.searchFunctionInLocation(e, t);
        return l ? this.runtime.increaseInterruptForFunction(l) : console.warn("[FATAL] functionIndex is not found"), {
          breakpointId: u,
          breakpoint: a
        }
      }
      removeBreakpoint(e) {
        if (void 0 !== e) {
          const t = this.breakpoints[e];
          if (t && t.scriptId) {
            const e = this.runtime.searchFunctionInLocation(t.scriptId, new w(t.line, t.column));
            e && this.runtime.decreaseInterruptForFunction(e)
          }
          this.breakpoints[e] = void 0
        }
      }
      resume() {
        this.debuggerState !== te.SkipAllPauses && (this.debuggerState = te.Normal), this.runtime.resumeExecution()
      }
      setSkipAllPauses() {
        this.debuggerState = te.SkipAllPauses, setTimeout((() => {
          this.debuggerState = te.Normal
        }), 0)
      }
      stepOver() {
        this.runtime.getExecutionState() === G.Paused && (this.debuggerState = te.StepOver, this.runtime.resumeExecution())
      }
      stepInto() {
        this.runtime.getExecutionState() === G.Paused && (this.runtime.callFrames[this.runtime.callFrames.length - 1].currentDebuggerState = te.StepInto, this.debuggerState = te.StepInto, this.runtime.resumeExecution())
      }
      stepOut() {
        this.runtime.getExecutionState() === G.Paused && (this.runtime.getCallFrames().length > 1 ? (this.runtime.callFrames[this.runtime.callFrames.length - 1].currentDebuggerState = te.StepOut, this.debuggerState = te.StepOut) : this.debuggerState = te.SkipAllPauses, this.runtime.resumeExecution())
      }
      continueToLocation(e, t, n) {
        if (t < 0 || n && n < 0) return;
        if (this.runtime.getExecutionState() !== G.Paused) return;
        this.debuggerState = te.ContinueToLocation, this.targetContinueLocation = new C(t, n);
        const r = new w("number" == typeof t ? t : -1, "number" == typeof n ? n : -1),
          s = this.runtime.searchFunctionInLocation(e, r);
        s && this.runtime.increaseInterruptForFunction(s), this.runtime.resumeExecution()
      }
      setBreakpointActive(e) {
        this.breakpointActive = e
      }
    }
    class ie {
      constructor(e) {
        this.ws = e
      }
      respond(e, t = {}) {
        const n = {
          id: e,
          result: t
        };
        this.ws.send(n)
      }
      respondWithTag(e, t, n = {}) {
        const r = {
          id: t,
          result: n
        };
        this.ws.sendRaw(e + "_" + JSON.stringify(r))
      }
      fireEvent(e, t = {}) {
        const n = {
          method: e,
          params: t
        };
        this.ws.send(n)
      }
      fireEventWithTag(e, t, n = {}) {
        const r = {
          method: t,
          params: n
        };
        this.ws.sendRaw(e + "_" + JSON.stringify(r))
      }
    }
    class oe {
      constructor(e, t, n, r, s, i) {
        this.pageInspector = t, this.runtimeInspector = n, this.debugerInspector = r, this.profilerInspector = s, this.fallbackInspector = i, this.ws = void 0, this.ws = e
      }
      dispatch() {
        this.ws.onmessage = e => {
          const t = e.method;
          t.startsWith("Page") ? this.pageInspector.handle(e) : t.startsWith("Debugger") ? this.debugerInspector.handle(e) : t.startsWith("Runtime") ? this.runtimeInspector.handle(e) : t.startsWith("Profiler") ? this.profilerInspector.handle(e) : this.fallbackInspector.handle(e)
        }
      }
    }
    class ae extends ie {
      constructor(e, t) {
        super(e), this.runtime = void 0, this.runtimeHandlers = void 0, this.runtime = t, this.runtimeHandlers = {
          "Runtime.enable": this.handleEnableCommand,
          "Runtime.getIsolateId": this.handleGetIsolateId,
          "Runtime.runIfWaitingForDebugger": this.handleRunIfWaitingForDebugger,
          "Runtime.getProperties": this.handleGetProperties,
          "Runtime.releaseObjectGroup": this.handleReleaseObjectGroup,
          "Runtime.compileScript": this.handleCompileScript,
          "Runtime.evaluate": this.handleEvaluate
        }, this.runtime.getLogEvent().subscribe((e => {
          this.onConsoleOutput(e.type, e.messages, e.location)
        })), this.runtime.getScriptExceptionEvent().subscribe((e => {
          this.onExceptionThrown(e.id, e.error.message, e.line, e.column, e.error.stack || "", e.scriptId)
        }))
      }
      onConsoleOutput(e, t, n) {
        const r = t.map((e => O("console", k(e), e, this.runtime, !0))),
          s = this.runtime.getContextId(),
          i = this.runtime.getCurrentCallFrame();
        let o = [];
        if (i) {
          const e = {
            functionName: i.name || "",
            scriptId: n ? String(n.scriptId) : "",
            url: "https://servicewechat.com",
            lineNumber: n ? n.line - 1 : 0,
            columnNumber: n ? n.column : 0
          };
          o.push(e)
        }
        const a = {
          type: e,
          args: r,
          executionContextId: s,
          timestamp: Date.now(),
          stackTrace: {
            callFrames: o
          }
        };
        this.fireEvent("Runtime.consoleAPICalled", a)
      }
      onExceptionThrown(e, t, n, r, s, i) {
        const o = {
          exceptionId: e,
          text: t + "\n" + s,
          lineNumber: 1,
          columnNumber: 1
        };
        void 0 !== i && Object.assign(o, {
          lineNumber: n - 1,
          columnNumber: r,
          scriptId: i.toString()
        });
        const a = {
          timestamp: Date.now(),
          exceptionDetails: o
        };
        this.fireEvent("Runtime.exceptionThrown", a)
      }
      handle(e) {
        const t = this.runtimeHandlers[e.method];
        t ? t.call(this, e.id, e.params) : this.respond(e.id)
      }
      handleEnableCommand(e) {
        this.fireExecutionContextCreatedEvent(), this.respond(e)
      }
      handleGetIsolateId(e) {
        this.respond(e, {
          id: "0"
        })
      }
      handleRunIfWaitingForDebugger(e) {
        this.respond(e), this.runtime.launch()
      }
      handleGetProperties(e, t) {
        const n = [],
          r = {
            result: n
          },
          {
            objectId: s
          } = t;
        if (s) {
          const t = this.runtime.getRetainedObject(s),
            l = this.runtime.getRetainedObjectGroup(s),
            d = c(t),
            h = g(t),
            f = m(t);
          try {
            const r = A(t);
            for (let s of r) {
              let r;
              if (d && s.startsWith("[[") && s.endsWith("]]")) try {
                a = t, r = (u = s) === D ? new Int8Array(a) : u === x ? new Int16Array(a) : u === T ? new Int32Array(a) : u === R ? new Uint8Array(a) : void 0
              } catch (e) {
                continue
              } else h && "[[Entries]]" === s ? (o = t, r = Array.from(o.entries())) : (h || f) && "[[Entries]]" === s ? (i = t, r = Array.from(i.values())) : p(s) ? (r = t[s], s = s.toString()) : r = t[s];
              const c = I(l, k(r), r, this.runtime);
              if (!c) continue;
              const g = {
                name: s,
                value: c,
                configurable: !1,
                enumerable: !1
              };
              n.push(g)
            }
          } catch (e) {}
          this.respond(e, r)
        }
        var i, o, a, u
      }
      handleReleaseObjectGroup(e, t) {
        const n = t.objectGroup;
        this.runtime.releaseObjectGroup(n), this.respond(e, {})
      }
      handleCompileScript(e) {
        this.respond(e, {})
      }
      handleEvaluate(e, t) {
        const n = this.runtime.getGlobalCallFrame(),
          r = "console" === t.objectGroup,
          s = this.runtime.evaluateOnCallFrame(t.expression, n, r),
          i = {
            result: O(t.objectGroup || "default", s.type, s.value, this.runtime, t.generatePreview)
          };
        this.respond(e, i)
      }
      fireExecutionContextCreatedEvent() {
        const e = {
          context: {
            id: this.runtime.getContextId(),
            origin: "",
            name: "sub_context"
          }
        };
        this.fireEvent("Runtime.executionContextCreated", e)
      }
    }
    class ue extends ie {
      constructor(e, t) {
        super(e), this.runtime = void 0, this.pageCommandHandlers = void 0, this.runtime = t, this.pageCommandHandlers = {
          "Page.enable": this.handleEnableCommand,
          "Page.getResourceTree": this.handleGetResourceTreeCommand
        }
      }
      handle(e) {
        const t = this.pageCommandHandlers[e.method];
        t ? t.call(this, e.id, e.params) : this.respond(e.id)
      }
      handleEnableCommand(e, t) {
        this.respond(e, {})
      }
      handleGetResourceTreeCommand(e, t) {
        this.respond(e, {
          frameTree: {
            frame: {
              id: "0",
              loaderId: "0",
              name: "test",
              url: "https://debugger.io/app.js",
              securityOrigin: "://",
              mimeType: "text/javascript"
            },
            resources: [{
              url: "https://debugger.io/app.js",
              type: "Script",
              mimeType: "text/javascript"
            }]
          }
        })
      }
    }
    class le extends ie {
      constructor(e) {
        super(e), this.profilerCommandHandlers = void 0, this.profilerCommandHandlers = {
          "Profiler.enable": this.handleEnableCommand
        }
      }
      handle(e) {
        const t = this.profilerCommandHandlers[e.method];
        t ? t.call(this, e.id, e.params) : this.respond(e.id)
      }
      handleEnableCommand(e) {
        this.respond(e)
      }
    }
    class ce extends ie {
      constructor(e, t, n) {
        super(e), this.runtime = void 0, this.debugger = void 0, this.debuggerHandlers = void 0, this.sourcePathMap = {}, this.runtime = t, this.debugger = n, this.debuggerHandlers = {
          "Debugger.enable": this.handleEnableCommand,
          "Debugger.setPauseOnExceptions": this.handleSetPauseOnExceptions,
          "Debugger.setAsyncCallStackDepth": this.handleSetAsyncCallStackDepth,
          "Debugger.setBlackboxPatterns": this.handleSetBlackboxPatterns,
          "Debugger.getScriptSource": this.handleGetScriptSourceCommand,
          "Debugger.stepOver": this.handleStepOverCommand,
          "Debugger.stepInto": this.handleStepIntoCommand,
          "Debugger.stepOut": this.handleStepOutCommand,
          "Debugger.resume": this.handleResumeCommand,
          "Debugger.setSkipAllPauses": this.handleSetSkipAllPauses,
          "Debugger.continueToLocation": this.handleContinueToLocation,
          "Debugger.getPossibleBreakpoints": this.handleGetPossibleBreakpoints,
          "Debugger.setBreakpointByUrl": this.handleSetBreakpointByUrl,
          "Debugger.removeBreakpoint": this.handleRemoveBreakpoint,
          "Debugger.evaluateOnCallFrame": this.handleEvaluateOnCallFrame,
          "Debugger.setBreakpointsActive": this.handleSetBreakpointActive
        }, this.runtime.getScriptParsedEvent().subscribe((e => {
          this.fireSourceParsedEvent(e.scriptId, e.url, e.relativePath, e.startLocation, e.endLocation, e.contextId, e.hashedScript)
        })), this.runtime.getPausedEvent().subscribe((e => {
          this.firePausedEvent(e.scriptId, e.line, e.column, e.reason)
        })), this.runtime.getResumedEvent().subscribe((() => {
          this.fireResumedEvent()
        }))
      }
      handle(e) {
        const t = e.id,
          n = e.method,
          r = e.params,
          s = this.debuggerHandlers[n];
        s ? s.call(this, t, r) : this.respond(t)
      }
      handleEnableCommand(e, t) {
        this.respond(e, {
          debuggerId: "0"
        })
      }
      handleSetPauseOnExceptions(e, t) {
        this.respond(e)
      }
      handleSetAsyncCallStackDepth(e, t) {
        this.respond(e)
      }
      handleSetBlackboxPatterns(e, t) {
        this.respond(e)
      }
      handleGetScriptSourceCommand(e, t) {
        this.respond(e, {
          scriptSource: this.runtime.getScriptByScriptId(+t.scriptId).source
        })
      }
      handleResumeCommand(e) {
        this.debugger.resume(), this.respond(e)
      }
      handleSetSkipAllPauses(e) {
        this.debugger.setSkipAllPauses(), this.respond(e)
      }
      handleStepOverCommand(e) {
        this.debugger.stepOver(), this.respond(e)
      }
      handleStepIntoCommand(e) {
        this.debugger.stepInto(), this.respond(e)
      }
      handleStepOutCommand(e) {
        this.debugger.stepOut(), this.respond(e)
      }
      handleContinueToLocation(e, t) {
        const n = t.location;
        n.lineNumber && this.debugger.continueToLocation(+n.scriptId, n.lineNumber + 1, n.columnNumber), this.respond(e)
      }
      handleGetPossibleBreakpoints(e, t) {
        const n = t.start.lineNumber || 0,
          r = t.start.columnNumber || 0,
          s = t.end ? t.end.lineNumber : 0,
          i = t.end && t.end.columnNumber ? t.end.columnNumber : 0,
          o = t.start.scriptId,
          a = new w(n + 1, r),
          u = new w(s + 1, i),
          l = this.runtime.getPossibleInterrupts(+o, a, u),
          c = [];
        for (const e of l) {
          const t = {
            scriptId: o,
            lineNumber: e.line - 1,
            columnNumber: e.column,
            type: e.breakType
          };
          c.push(t)
        }
        const d = {
          locations: c
        };
        this.respond(e, d)
      }
      handleSetBreakpointByUrl(e, t) {
        const n = t.lineNumber,
          r = t.columnNumber || 0,
          s = t.condition,
          i = t.url || "",
          o = t.urlRegex || "";
        let a = null;
        if (i) a = this.runtime.getScriptByName(B(i));
        else if (o) {
          const e = new RegExp(o);
          for (let t of this.runtime.getScriptNames())
            if (e.test(M(t))) {
              a = this.runtime.getScriptsWithScriptName()[t];
              break
            }
        }
        if (a) {
          const t = new w(n + 1, r),
            {
              breakpointId: i,
              breakpoint: o
            } = this.debugger.setBreakPointByUrlWithCondition(a.scriptId, t, s),
            u = {
              scriptId: o.scriptId.toString(),
              lineNumber: o.line - 1,
              columnNumber: o.column
            },
            l = {
              breakpointId: i.toString(),
              locations: [u]
            };
          this.respond(e, l)
        }
      }
      handleRemoveBreakpoint(e, t) {
        const n = t.breakpointId;
        this.debugger.removeBreakpoint(parseInt(n, 10)), this.respond(e)
      }
      handleEvaluateOnCallFrame(e, t) {
        var n;
        const r = t.callFrameId,
          s = this.runtime.getCallFrameById(parseInt(r, 10)),
          i = "console" === t.objectGroup,
          o = this.runtime.evaluateOnCallFrame(t.expression, s, i, null === (n = t.silent) || void 0 === n || n),
          a = {
            result: O(t.objectGroup || "default", o.type, o.value, this.runtime, t.generatePreview)
          };
        this.respond(e, a)
      }
      handleSetBreakpointActive(e, t) {
        const n = t.active;
        this.debugger.setBreakpointActive(n), this.respond(e)
      }
      fireSourceParsedEvent(e, t, n, r, s, i, o) {
        const a = {
          url: t,
          scriptId: e.toString(),
          startLine: r.line - 1,
          startColumn: r.column,
          endLine: s.line,
          endColumn: r.column,
          executionContextId: i,
          hash: o,
          isLiveEdit: !1,
          hasSourceURL: !1,
          isModule: !1,
          executionContextAuxData: {
            isDefault: !0
          },
          relativePath: B(t),
          sourceMapURL: ""
        };
        this.sourcePathMap[e.toString()] = B(t), this.fireEventWithTag("asm", "Debugger.scriptParsed", a)
      }
      firePausedEvent(e, t, n, r) {
        const s = [];
        for (let e = this.runtime.getCallFrames().length - 1; e >= 0; e--) {
          const r = this.runtime.getCallFrames()[e],
            i = r.callSite,
            o = void 0 !== i ? i.line - 1 : t - 1,
            a = void 0 !== i ? i.column : n,
            u = {
              scriptId: r.scriptId.toString(),
              lineNumber: o,
              columnNumber: a
            },
            l = {
              type: "object",
              className: "Object",
              value: r,
              description: "global"
            },
            c = [];
          if (r.metadata) {
            const e = {};
            for (let t = 0, n = r.metadata.scopeBindings.length; t < n; ++t) {
              const n = r.metadata.scopeBindings[t],
                s = this.runtime.rawEvaluateOnCallFrame(n, r);
              e[n] = s
            }
            const t = {
              type: "local",
              object: E(String(r.id), e, this.runtime),
              name: r.name
            };
            c.push(t)
          }
          let d = null;
          r.metadata && (d = {
            lineNumber: r.metadata.location[0] - 1,
            columnNumber: r.metadata.location[1],
            scriptId: r.scriptId.toString()
          });
          const h = {
            callFrameId: String(r.id),
            functionName: r.name,
            location: u,
            url: r.url,
            scopeChain: c,
            this: l
          };
          d && (h.functionLocation = d), s.push(h)
        }
        const i = {
          callFrames: s,
          reason: "ambiguous"
        };
        this.fireEvent("Debugger.paused", i)
      }
      fireResumedEvent() {
        this.fireEvent("Debugger.resumed")
      }
    }
    class de extends ie {
      constructor(e) {
        super(e)
      }
      handle(e) {
        const t = e.id;
        this.respond(t)
      }
    }

    function he(e) {
      if (!e) return "text/plain";
      const t = ["Content-Type", "content-type", "Content-type", "content-Type"];
      for (let n = 0; n < t.length; n++) {
        const r = t[n];
        if ("string" == typeof e[r]) return e[r].split(";")[0]
      }
      return "text/plain"
    }
    const pe = {
      request: 1,
      download: 2,
      upload: 3,
      socket: 4
    };
    let ge = 0,
      me = 0,
      fe = 0,
      be = 0;
    const ve = {
        request: {},
        download: {},
        upload: {},
        socket: {}
      },
      Se = {
        request: {},
        download: {},
        upload: {},
        socket: {}
      },
      ye = {
        request: {},
        download: {},
        upload: {},
        socket: {}
      };

    function _e(e) {
      return JSON.parse(JSON.stringify(e))
    }

    function we(e, t) {
      const n = (t || "").toLowerCase(),
        r = ye[n] || {},
        s = ve[n];
      return r[e] && s ? function (e, t) {
        const n = (t || "").toLowerCase(),
          r = ve[n];
        if (!r) return null;
        const s = Object.keys(r);
        for (let t = 0; t < s.length; t++) {
          const n = s[t];
          if (r[n].id === e) return r[n]
        }
        return null
      }(r[e], n) : null
    }
    class Ce {
      constructor(e) {
        this.messager = void 0, this.messager = e, this._init()
      }
      _init() {
        const e = this.messager.getInstance();
        e.onReceiveNetworkHeader = this.onReceiveNetworkHeader.bind(this), e.registerCallback(this.onReceiveDevtoolsMessage.bind(this))
      }
      onReceiveNetworkHeader(e) {
        try {
          const n = JSON.parse(e);
          if (!n.task_id || !n.api_name || !n.request_headers) return;
          n.api_name = n.api_name.toLowerCase();
          const r = n.api_name,
            s = n.task_id,
            i = `${pe[r]}.${s}`,
            o = Se[r],
            a = JSON.parse(n.request_headers);
          o[i] = t()(t()({}, o[i] || {}), {}, {
            requestHeaders: a,
            requestTimestamp: n.timestamp || Date.now()
          });
          const {
            info: u
          } = we(s, n.api_name) || {
            info: {}
          }, l = {
            method: "Network.requestWillBeSent",
            params: {
              requestId: i,
              documentURL: a.Referer || a.referer,
              request: {
                url: u.url,
                method: u.method,
                postData: u.data,
                headers: a
              },
              timestamp: (o[i].requestTimestamp || Date.now()) / 1e3,
              type: "XHR"
            }
          };
          this.messager.sendToDevtools("__networkDebug", l)
        } catch (e) {}
      }
      onReceiveDevtoolsMessage(e, t) {
        if ("__getNetworkResponseBody" === e) try {
          const e = JSON.parse(t),
            {
              id: n,
              api: r,
              devtoolsMsgId: s
            } = e,
            i = we(n, r) || {};
          i.data && this.messager.sendToDevtools("__networkDebug", {
            id: s,
            result: {
              body: i.data,
              base64Encoded: !1
            }
          })
        } catch (e) {}
        if ("__resetNetworkCache" === e) {
          const e = Object.keys(ve);
          for (let t = 0; t < e.length; t++) {
            const n = e[t],
              r = ve[n],
              s = Object.keys(r);
            for (let e = 0; e < s.length; e++) {
              const t = r[s[e]];
              "success" !== t.state && "fail" !== t.state || (t.data = void 0, t.info = void 0, t.responseHeaders = void 0)
            }
          }
        }
      }
      invokeNetworkMethods(e, t, n) {
        this._invokeRequestTask(e, t, n), this._invokeDownloadTask(e, t, n), this._invokeUploadTask(e, t, n), this._invokeSocketTask(e, t, n)
      }
      _invokeRequestTask(e, t, n) {
        if ("createRequestTask" === t || "createRequestTaskAsync" === t) {
          const r = JSON.parse(n) || {},
            s = ++ge;
          return ve.request[e] = {
            id: String(s),
            api: "request",
            info: {
              url: r.url,
              method: r.method || "GET",
              data: r.data || r.formData || void 0
            },
            state: "requestSent",
            data: null
          }, JSON.stringify({
            errMsg: `${t}:ok`,
            requestTaskId: String(s)
          })
        }
      }
      _invokeDownloadTask(e, t, n) {
        if ("createDownloadTask" === t || "createDownloadTaskAsync" === t) {
          const r = ++me,
            s = JSON.parse(n) || {};
          return ve.download[e] = {
            id: String(r),
            api: "download",
            info: {
              url: s.url,
              method: s.method || "GET",
              data: s.data || s.formData || void 0
            },
            state: "requestSent",
            data: null
          }, JSON.stringify({
            errMsg: `${t}:ok`,
            downloadTaskId: String(r)
          })
        }
      }
      _invokeUploadTask(e, t, n) {
        if ("createUploadTask" === t || "createUploadTaskAsync" === t) {
          const r = ++fe,
            s = JSON.parse(n) || {};
          return ve.upload[e] = {
            id: String(r),
            api: "upload",
            info: {
              url: s.url,
              method: s.method || "POST",
              data: s.data || s.formData || void 0
            },
            state: "requestSent",
            data: null
          }, JSON.stringify({
            errMsg: `${t}:ok`,
            uploadTaskId: String(r)
          })
        }
      }
      _invokeSocketTask(e, t, n) {
        if ("createSocketTask" === t || "createSocketTaskAsync" === t) {
          const r = ++be,
            s = JSON.parse(n) || {};
          return ve.socket[e] = {
            id: String(r),
            api: "socket",
            info: {
              url: s.url,
              data: s.data || s.formData || void 0
            },
            state: "requestSent",
            data: ""
          }, JSON.stringify({
            errMsg: `${t}:ok`,
            socketTaskId: String(r)
          })
        }
      }
      invokeCallbackNetworkMethods(e, t) {
        ve.request[e] && t.requestTaskId && (ye.request[t.requestTaskId] = ve.request[e].id), ve.download[e] && t.downloadTaskId && (ye.download[t.downloadTaskId] = ve.download[e].id), ve.upload[e] && t.uploadTaskId && (ye.upload[t.uploadTaskId] = ve.upload[e].id), ve.socket[e] && t.socketTaskId && (ye.socket[t.socketTaskId] = ve.socket[e].id)
      }
      onRequestTaskStateChange(e) {
        const t = e[1] || {},
          n = (e[3] || {}).nativeTime || Date.now(),
          r = we(t.requestTaskId, "request");
        if (r)
          if ("headersReceived" === t.state) {
            r.responseHeaders = _e(t.header), r.state = "headersReceived";
            const e = {
              id: t.requestTaskId,
              api: "request",
              responseHeaders: t.header,
              state: "headersReceived"
            };
            this.sendNetworkDebug(e, n)
          } else if ("success" === t.state) {
          r.state = "success", r.data = t.data, r.statusCode = t.statusCode, r.statusText = t.statusText;
          const e = {
            id: t.requestTaskId,
            state: "success",
            api: "request",
            statusCode: t.statusCode,
            statusText: t.statusText,
            dataLength: (t.data || "").length
          };
          this.sendNetworkDebug(e, n)
        } else if ("fail" === t.state) {
          r.state = "fail", r.statusCode = r.statusCode || t.statusCode;
          const e = {
            id: t.requestTaskId,
            api: "request",
            state: "fail"
          };
          this.sendNetworkDebug(e, n)
        }
      }
      onDownloadTaskStateChange(e) {
        const t = e[1] || {},
          n = (e[3] || {}).nativeTime || Date.now(),
          r = we(t.downloadTaskId, "download");
        if (r)
          if ("headersReceived" === t.state) {
            r.responseHeaders = _e(t.header), r.state = "headersReceived";
            const e = {
              id: t.downloadTaskId,
              api: "download",
              responseHeaders: t.header,
              state: "headersReceived"
            };
            this.sendNetworkDebug(e, n)
          } else if ("progressUpdate" === t.state) {
          r.state = "dataReceived", r.dataLength = t.totalBytesWritten;
          const e = {
            id: t.downloadTaskId,
            state: "dataReceived",
            dataLength: t.totalBytesWritten,
            api: "download"
          };
          this.sendNetworkDebug(e, n)
        } else if ("success" === t.state) {
          r.state = "success", "number" == typeof r.dataLength ? r.data = `Saved ${r.dataLength} Bytes at "${t.tempFilePath}"` : r.data = `Saved at ${t.tempFilePath}`, r.statusCode = t.statusCode, r.statusText = t.statusText;
          const e = {
            id: t.downloadTaskId,
            state: "success",
            api: "download",
            statusCode: t.statusCode,
            statusText: t.statusText
          };
          this.sendNetworkDebug(e, n)
        } else if ("fail" === t.state) {
          r.state = "fail", r.statusCode = r.statusCode || t.statusCode;
          const e = {
            id: t.downloadTaskId,
            api: "download",
            state: "fail"
          };
          this.sendNetworkDebug(e, n)
        }
      }
      onUploadTaskStateChange(e) {
        const t = e[1] || {},
          n = (e[3] || {}).nativeTime || Date.now(),
          r = we(t.uploadTaskId, "upload");
        if (r)
          if ("headersReceived" === t.state) {
            r.responseHeaders = _e(t.header), r.state = "headersReceived";
            const e = {
              id: t.uploadTaskId,
              api: "upload",
              responseHeaders: t.header,
              state: "headersReceived"
            };
            this.sendNetworkDebug(e, n)
          } else if ("progressUpdate" === t.state) {
          r.state = "dataSent", r.dataLength = t.totalBytesSent;
          const e = {
            id: t.uploadTaskId,
            state: "dataSent",
            dataLength: t.totalBytesSent,
            api: "upload"
          };
          this.sendNetworkDebug(e, n)
        } else if ("success" === t.state) {
          r.state = "success", r.data = t.data, r.statusCode = t.statusCode, r.statusText = t.statusText;
          const e = {
            id: t.uploadTaskId,
            state: "success",
            api: "upload",
            statusCode: t.statusCode,
            statusText: t.statusText,
            dataLength: (t.data || "").length
          };
          this.sendNetworkDebug(e, n)
        } else if ("fail" === t.state) {
          r.state = "fail", r.statusCode = r.statusCode || t.statusCode;
          const e = {
            id: t.uploadTaskId,
            api: "upload",
            state: "fail"
          };
          this.sendNetworkDebug(e, n)
        }
      }
      onSocketTaskStateChange(e) {
        const t = e[1] || {},
          n = (e[3] || {}).nativeTime || Date.now(),
          r = we(t.socketTaskId, "socket");
        if (r)
          if ("open" === t.state) {
            r.responseHeaders = _e(t.header), r.state = "headersReceived";
            const e = {
              id: t.socketTaskId,
              api: "socket",
              responseHeaders: t.header,
              state: "headersReceived",
              websocketState: "open"
            };
            this.sendNetworkDebug(e, n)
          } else if ("close" === t.state) {
          r.state = "success", r.statusCode = t.statusCode, r.statusText = t.statusText;
          const e = {
            id: t.socketTaskId,
            state: "success",
            api: "socket",
            statusCode: t.statusCode,
            statusText: t.statusText,
            websocketState: "close"
          };
          this.sendNetworkDebug(e, n)
        } else if ("error" === t.state) {
          r.state = "fail", r.statusCode = r.statusCode || t.statusCode;
          const e = {
            id: t.socketTaskId,
            api: "socket",
            websocketState: "error",
            state: "fail"
          };
          this.sendNetworkDebug(e, n)
        }
      }
      sendNetworkDebug(e, t) {
        const {
          state: n,
          api: r
        } = e, s = `${pe[r]}.${e.id}`, i = Se[r];
        i[s] && ("headersReceived" === n ? this._netWorkDebugHeadersReceived(s, i, e, t) : "dataReceived" === n ? this._netWorkDebugDataReceived(s, i, e, t) : "dataSent" === n ? this._netWorkDebugDataSent(s, i, e, t) : "success" === n ? this._netWorkDebugSuccess(s, i, e, t) : "fail" === n && this._netWorkDebugFail(s, i, e, t))
      }
      _netWorkDebugHeadersReceived(e, n, r, s) {
        if (n[e] = t()(t()({}, n[e] || {}), {}, {
            sate: r.state,
            responseHeaders: r.responseHeaders,
            responseReceivedTimestamp: s || Date.now()
          }), "open" === r.websocketState) {
          const t = {
            method: "Network.responseReceived",
            params: {
              requestId: e,
              timestamp: (n[e].responseReceivedTimestamp || Date.now()) / 1e3,
              type: "XHR",
              response: {
                url: n[e].url,
                mimeType: he(n[e].responseHeaders),
                status: n[e].statusCode || 101,
                statusText: n[e].statusText || "Switching Protocols",
                headers: n[e].responseHeaders,
                connectionId: e,
                timing: {
                  requestTime: (s || Date.now()) / 1e3,
                  proxyStart: -1,
                  proxyEnd: -1,
                  dnsStart: -1,
                  dnsEnd: -1,
                  connectStart: -1,
                  connectEnd: -1,
                  sslStart: -1,
                  sslEnd: -1,
                  workerStart: -1,
                  workerReady: -1,
                  sendStart: -1,
                  sendEnd: -1,
                  pushStart: 0,
                  pushEnd: 0,
                  receiveHeadersEnd: (n[e].responseReceivedTimestamp || 0) - (s || Date.now()) || -1
                },
                protocol: "HTTP/1.1"
              }
            }
          };
          this.messager.sendToDevtools("__networkDebug", t)
        }
      }
      _netWorkDebugDataReceived(e, n, r, s) {
        const i = n[e].datasReceived || [],
          o = {
            dataLength: r.dataLength,
            timestamp: s || Date.now()
          };
        i.push(o), n[e] = t()(t()({}, n[e] || {}), {}, {
          state: r.state,
          datasReceived: i,
          dataLength: r.dataLength
        });
        const a = {
          method: "Network.dataReceived",
          params: {
            requestId: e,
            timestamp: o.timestamp / 1e3,
            dataLength: r.dataLength,
            encodedDataLength: r.dataLength
          }
        };
        this.messager.sendToDevtools("__networkDebug", a)
      }
      _netWorkDebugDataSent(e, n, r, s) {
        const i = n[e].datasSent || [],
          o = {
            dataLength: r.dataLength,
            timestamp: s || Date.now()
          };
        i.push(o), n[e] = t()(t()({}, n[e] || {}), {}, {
          state: r.state,
          datasSent: i,
          dataSentLength: r.dataLength
        })
      }
      _netWorkDebugSuccess(e, n, r, s) {
        n[e] = t()(t()({}, n[e] || {}), {}, {
          state: r.state,
          statusCode: r.statusCode,
          statusText: r.statusText,
          finishedTimestamp: s || Date.now(),
          dataLength: r.dataLength || n[e].dataLength
        });
        const i = n[e].datasSent || [];
        let o = -1,
          a = -1;
        i.length > 0 && (o = 0, a = (n[e].requestTimestamp || 0) - (i[i.length - 1].timestamp || 0));
        const u = {
            method: "Network.responseReceived",
            params: {
              requestId: e,
              timestamp: (n[e].responseReceivedTimestamp || Date.now()) / 1e3,
              type: "XHR",
              response: {
                url: n[e].url,
                status: n[e].statusCode,
                statusText: n[e].statusText || "",
                headers: n[e].responseHeaders,
                mimeType: he(n[e].responseHeaders),
                connectionId: e,
                timing: {
                  requestTime: (n[e].requestTimestamp || Date.now()) / 1e3,
                  proxyStart: -1,
                  proxyEnd: -1,
                  dnsStart: -1,
                  dnsEnd: -1,
                  connectStart: -1,
                  connectEnd: -1,
                  sslStart: -1,
                  sslEnd: -1,
                  workerStart: -1,
                  workerReady: -1,
                  sendStart: o,
                  sendEnd: a,
                  pushStart: 0,
                  pushEnd: 0,
                  receiveHeadersEnd: (n[e].responseReceivedTimestamp || 0) - (s || Date.now()) || -1
                },
                protocol: "HTTP/1.1"
              }
            }
          },
          l = {
            method: "Network.loadingFinished",
            params: {
              requestId: e,
              timestamp: (n[e].finishedTimestamp || Date.now()) / 1e3,
              dataLength: n[e].dataLength,
              encodedDataLength: n[e].dataLength
            }
          };
        "close" !== r.websocketState && this.messager.sendToDevtools("__networkDebug", u), this.messager.sendToDevtools("__networkDebug", l)
      }
      _netWorkDebugFail(e, n, r, s) {
        n[e] = t()(t()({}, n[e] || {}), {}, {
          state: r.state,
          finishedTimestamp: s || Date.now()
        });
        const i = {
          method: "Network.loadingFailed",
          params: {
            requestId: e,
            timestamp: (n[e].finishedTimestamp || Date.now()) / 1e3,
            type: "XHR",
            errorText: "request failed",
            canceled: !1
          }
        };
        this.messager.sendToDevtools("__networkDebug", i)
      }
    }
    let ke, Ie, Oe;
    const Ee = () => {};
    class Ae {
      constructor(e) {
        this.messager = void 0, this.__savedWebviewIds = new Set, this._handleSetWxAppDatas = e => {
          const t = ("function" == typeof Ie ? Ie : Ee)();
          if (Array.isArray(t) && t.length > 0 && t.every((e => "number" == typeof (e || {}).__wxWebviewId__))) {
            const n = {};
            t.forEach((e => {
              n[e.__route__ || e.route] = e
            })), Object.keys(e).forEach((t => {
              const r = e[t],
                s = r.__webviewId__;
              n[t] && "function" == typeof n[t].setData ? n[t].setData(r) : "function" == typeof Oe && Oe("appDataChange", r, [s])
            }))
          }
        }, this.messager = e, this._init()
      }
      _init() {
        this.messager.getInstance().registerCallback(this.onReceiveDevtoolsMessage.bind(this))
      }
      onReceiveDevtoolsMessage(e, t) {
        if ("__setAppData" === e) {
          const e = JSON.parse(t);
          this._handleSetWxAppDatas(e)
        } else "__getAppData" === e && this._handleGetWxAppDatas()
      }
      onAppRouteDone() {
        const e = ("function" == typeof Ie ? Ie : Ee)();
        if (Array.isArray(e) && e.length > 0 && e.every((e => "number" == typeof (e || {}).__wxWebviewId__))) {
          e.forEach((e => {
            this.__savedWebviewIds.add(e.__wxWebviewId__)
          }));
          const t = {
            currentWebviewId: e[e.length - 1].__wxWebviewId__,
            webviewIds: Array.from(this.__savedWebviewIds)
          };
          this.messager.sendToDevtools("__wxpagesinfo", t)
        }
      }
      onAppRoute(e) {
        const t = e[1] || {};
        if ("navigateBack" === t.openType) {
          const t = e[2];
          this.__savedWebviewIds.clear(), this.__savedWebviewIds.add(t), this.updateAppData()
        } else "reLaunch" === t.openType || "autoReLaunch" === t.openType || "redirectTo" === t.openType || "appLaunch" === t.openType ? (this.__savedWebviewIds.clear(), this.updateAppData()) : "switchTab" !== t.openType && "navigateTo" !== t.openType || this.updateAppData()
      }
      updateAppData() {
        ke && clearTimeout(ke), ke = setTimeout(this._handleGetWxAppDatas.bind(this), 200)
      }
      _handleGetWxAppDatas() {
        ke && clearTimeout(ke), ke = void 0;
        const e = ("function" == typeof Ie ? Ie : Ee)();
        if (Array.isArray(e) && e.length > 0 && e.every((e => "number" == typeof (e || {}).__wxWebviewId__))) {
          const n = {};
          for (let r = 0; r < e.length; r++) {
            const s = e[r];
            s && (s.__route__ || s.route) && (n[s.__route__ || s.route] = t()(t()({}, s.data || {}), {}, {
              __webviewId__: s.__wxWebviewId__
            }))
          }
          this.messager.sendToDevtools("__wxappdatas", n)
        }
      }
    }
    class De {
      constructor(e) {
        this.messagerImpl = void 0, this.messagerImpl = e
      }
      sendToDevtools(e, t) {
        var n;
        this.messagerImpl && ("string" != typeof t && (t = JSON.stringify(t)), null === (n = this.messagerImpl) || void 0 === n || n.sendCustomMessage(e, t))
      }
      registerCallback(e) {
        var t;
        this.messagerImpl && (null === (t = this.messagerImpl) || void 0 === t || t.registerCallback(e))
      }
      getInstance() {
        return this.messagerImpl
      }
    }
    let xe, Te;
    class Re {
      constructor(e, t, n, r) {
        this.networkDebugger = void 0, this.wxmlDebugger = void 0, this._subscribeHandler = (e, ...t) => {
          switch (t[0]) {
            case "onRequestTaskStateChange":
              t[1] && t[1].requestTaskId && this.networkDebugger.onRequestTaskStateChange(t);
              break;
            case "onDownloadTaskStateChange":
              t[1] && t[1].downloadTaskId && this.networkDebugger.onDownloadTaskStateChange(t);
              break;
            case "onUploadTaskStateChange":
              t[1] && t[1].uploadTaskId && this.networkDebugger.onUploadTaskStateChange(t);
              break;
            case "onSocketTaskStateChange":
              t[1] && t[1].socketTaskId && this.networkDebugger.onSocketTaskStateChange(t);
              break;
            case "onAppRouteDone":
              this.wxmlDebugger.onAppRouteDone();
              break;
            case "onAppRoute":
              this.wxmlDebugger.onAppRoute(t)
          }
          return e.call(Te, ...t)
        }, this._invokeCallbackHandler = (e, ...t) => {
          const n = t[0],
            r = t[1];
          return this.networkDebugger.invokeCallbackNetworkMethods(n, r), e.call(Te, ...t)
        }, this._hookWeixinJSCore = (e, t, ...n) => {
          const r = n[0],
            s = n[1],
            i = parseInt(n[2], 10),
            o = isNaN(i) ? 0 : i;
          if ("publishHandler" === e) {
            try {
              if (r.endsWith("invokeWebviewMethod")) {
                "appDataChange" === JSON.parse(s).data.name && this.wxmlDebugger.updateAppData()
              }(r.endsWith("vdSync") || r.endsWith("vdSyncBatch") || r.endsWith("appDataChange") || r.endsWith("pageInitData") || r.endsWith("__updateAppData")) && this.wxmlDebugger.updateAppData()
            } catch (e) {}
            return t.call(xe, ...n)
          }
          return this._methodInvokeHandler(o, r, s, n, t)
        }, Te = e, xe = t, this.networkDebugger = n, this.wxmlDebugger = r;
        const s = Te.subscribeHandler,
          i = Te.invokeCallbackHandler,
          o = xe.invokeHandler || (() => {}),
          a = xe.publishHandler || (() => {});
        Object.defineProperty(Te, "subscribeHandler", {
          value: this._subscribeHandler.bind(null, s)
        }), Object.defineProperty(Te, "invokeCallbackHandler", {
          value: this._invokeCallbackHandler.bind(null, i)
        }), Object.defineProperty(xe, "invokeHandler", {
          value: this._hookWeixinJSCore.bind(null, "invokeHandler", o)
        }), Object.defineProperty(xe, "publishHandler", {
          value: this._hookWeixinJSCore.bind(null, "publishHandler", a)
        })
      }
      _methodInvokeHandler(e, t, n, r, s) {
        return this.networkDebugger.invokeNetworkMethods(e, t, n), s.call(xe, ...r)
      }
    }

    function Ne(e, n, r, o, a) {
      let u = {};
      const l = ((e, t, n) => {
        const r = new De(e),
          s = new Ce(r),
          i = new Ae(r);
        return new Re(t, n, s, i), {
          __remoteDebug__: {
            setAppserviceHandlers: e => {
              var t;
              e && (Ie = (t = e).getCurrentPages, Oe = t.invokeWebviewMethod)
            }
          }
        }
      })(r, a, __WeixinJSCore__);
      return "ios" === e && (u = function (e, t, n) {
        const r = new s(t),
          o = new i({
            suspend() {
              e.suspend()
            },
            resume() {
              e.resume()
            }
          });
        ne = new Z(o, n), re = new se(ne);
        const a = new ue(r, ne),
          u = new ae(r, ne),
          l = new ce(r, ne, re),
          c = new le(r),
          d = new de(r);
        return new oe(r, a, u, l, c, d).dispatch(), {
          runtime: ne,
          debuggerInst: re
        }
      }(n, r, o)), t()(t()({}, u), l)
    }
    globalThis
  }(), __AppServiceRemoteDebugger__ = r.default
}();