(() => {
  var t = {
      1260: t => {
        t.exports = function (t, e, r) {
          return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = r, t
        }, t.exports.default = t.exports, t.exports.__esModule = !0
      },
      417: (t, e, r) => {
        var n = r(1260);

        function o(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
          }
          return r
        }
        t.exports = function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? o(Object(r), !0).forEach((function (e) {
              n(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
          }
          return t
        }, t.exports.default = t.exports, t.exports.__esModule = !0
      },
      2184: t => {
        t.exports = {
          highlightConfig: {
            showInfo: !0,
            showAccessibilityInfo: !0,
            showStyles: !0,
            contentColor: {
              r: 111,
              g: 168,
              b: 220,
              a: .66
            },
            paddingColor: {
              r: 147,
              g: 196,
              b: 125,
              a: .55
            },
            borderColor: {
              r: 255,
              g: 229,
              b: 153,
              a: .66
            },
            marginColor: {
              r: 246,
              g: 178,
              b: 107,
              a: .5
            },
            eventTargetColor: {
              r: 255,
              g: 196,
              b: 196,
              a: .66
            },
            shapeColor: {
              r: 96,
              g: 82,
              b: 177,
              a: .8
            },
            shapeMarginColor: {
              r: 96,
              g: 82,
              b: 127,
              a: .6
            }
          }
        }
      },
      3102: (t, e, r) => {
        const n = r(5036),
          o = r(7752),
          i = r(5966),
          s = r(1695),
          a = r(3595),
          u = r(6176),
          {
            IsDevtools: c
          } = r(4851),
          l = c ? 100 : 1e3,
          h = c ? 100 : 1e3,
          p = c ? 100 : 1e3;
        t.exports = new class {
          constructor(t) {
            this._ready = !1, this._inspectInfo = void 0, this._highlight = new o, this._styleSheets = new i, this._methodMap = {
              "DOM.getDocument": "getDocument",
              "DOM.querySelector": "querySelector",
              "DOM.requestChildNodes": "requestChildNodes",
              "DOM.highlightNode": "highlightNode",
              "DOM.hideHighlight": "hideHighlight",
              "DOM.getAttributes": "getAttributes",
              "DOM.removeAttribute": "removeAttribute",
              "DOM.removeNode": "removeNode",
              "DOM.setHideElement": "setHideElement",
              "DOM.scrollIntoView": "scrollIntoView",
              "DOM.setAttributesAsText": "setAttributesAsText",
              "DOM.setAttributeValue": "setAttributeValue",
              "CSS.getMatchedStylesForNode": "getMatchedStylesForNode",
              "CSS.getComputedStyleForNode": "getComputedStyleForNode",
              "CSS.setStyleTexts": "setStyleTexts",
              "Overlay.setInspectMode": "setInspectMode",
              "DOM.pushNodesByBackendIdsToFrontend": "pushNodesByBackendIdsToFrontend",
              "DOM.setNodeValue": "setNodeValue",
              "DOM.getComponentData": "getComponentData",
              "DOM.getComponentDataById": "getComponentDataById"
            }, this._observered = !1, window.addEventListener("scroll", (() => {
              this._highlight.hide()
            })), window.addEventListener("touchmove", (() => {
              this._highlight.hide()
            })), this._inspect = t, this._inspect && this._inspect.init(this._highlight, this.event.bind(this)), this._attributeModifiedEvent = {}, this._attributeModifiedEventTimer = null, this._childListModifiedEvent = [], this._childListModifiedEventTimer = null, this._characterDataModifiedEvent = {}, this._characterDataModifiedEventTimer = null, this._lastTriggerChildNodeMutationTime = 0, this._lastTriggerAttributeMutationTime = 0, this._lastTriggerCharacterDataMutationTime = 0, this._lastActiveId = null, this._hasListenOnVdSyncBatch = !1, this._lastTimeForComponentData = null
          }
          get debuggee() {
            return {
              targetId: window.__webviewId__
            }
          }
          get highlight() {
            return this._highlight.dom()
          }
          inHighLight(t) {
            return this._highlight.contain(t)
          }
          formatNode(t, e = -1) {
            const r = n.getNodeId(t);
            let o;
            t.parentElement && (o = n.getNodeId(t.parentElement));
            const i = {
              parentId: o,
              nodeId: r,
              localName: t.localName,
              nodeName: t.nodeName,
              nodeType: t.nodeType,
              nodeValue: t.nodeValue || "",
              children: [],
              attributes: []
            };
            if (t.attributes)
              for (let e = 0, r = t.attributes.length; e < r; e++) {
                const r = t.attributes[e];
                i.attributes.push(r.name), i.attributes.push(r.value)
              }
            const {
              children: s,
              childNodeCount: a
            } = this._requestChildNodes(r, e);
            return i.children = s, i.childNodeCount = a, i
          }
          _requestChildNodes(t, e = 1) {
            const r = n.getDOMByNodeId(t),
              o = [];
            let i = 0;
            if (r && r.childNodes)
              for (let t = 0, n = r.childNodes.length; t < n; t++) {
                const n = r.childNodes[t];
                this._highlight.contain(n) || "STYLE" !== n.tagName && "SCRIPT" !== n.tagName && (i++, (e < 0 || e >= 1) && o.push(this.formatNode(n, e - 1)))
              }
            return {
              children: o,
              childNodeCount: i
            }
          }
          attributesMutation(t) {
            if (this._highlight.contain(t.target)) return;
            const e = n.getNodeIdFromMap(t.target);
            if (!e) return;
            const r = t.target.getAttribute(t.attributeName);
            null === r ? this.event("DOM.attributeRemoved", {
              name: t.attributeName,
              nodeId: e
            }) : this._attributeModified(e, t.attributeName, r)
          }
          _attributeModified(t, e, r) {
            let n = this._attributeModifiedEvent[t];
            n || (n = this._attributeModifiedEvent[t] = {}), n[e] = r, clearTimeout(this._attributeModifiedEventTimer), Date.now() - this._lastTriggerAttributeMutationTime > l || Object.keys(this._attributeModifiedEvent).length > 100 ? this.triggerAttributeMutation() : this._attributeModifiedEventTimer = setTimeout((() => {
              this.triggerAttributeMutation()
            }), l)
          }
          triggerAttributeMutation() {
            Object.keys(this._attributeModifiedEvent).length > 0 && (this._lastTriggerAttributeMutationTime = Date.now(), this.event("DOM.attributeModified.EventList", this._attributeModifiedEvent), this._attributeModifiedEvent = {})
          }
          characterDataMutation(t) {
            if (this._highlight.contain(t.target)) return;
            const e = n.getNodeIdFromMap(t.target);
            e && this._characterDataModified(e, t.target.nodeValue)
          }
          _characterDataModified(t, e) {
            let r = this._characterDataModifiedEvent[t];
            r || (r = this._characterDataModifiedEvent[t] = {}), r.characterData = e, clearTimeout(this._characterDataModifiedEventTimer), Date.now() - this._lastTriggerCharacterDataMutationTime > h || Object.keys(this._characterDataModifiedEvent).length > 100 ? this.triggerCharacterDataMutation() : this._characterDataModifiedEventTimer = setTimeout((() => {
              this.triggerCharacterDataMutation()
            }), h)
          }
          triggerCharacterDataMutation() {
            Object.keys(this._characterDataModifiedEvent).length > 0 && (this._lastTriggerCharacterDataMutationTime = Date.now(), this.event("DOM.characterDataModified.EventList", this._characterDataModifiedEvent), this._characterDataModifiedEvent = {})
          }
          _childListModified(t, e) {
            this._childListModifiedEvent.push({
              type: t,
              params: e
            }), clearTimeout(this._childListModifiedEventTimer), Date.now() - this._lastTriggerChildNodeMutationTime > p || this._childListModifiedEvent.length > 100 ? this.triggerChildNodeMutation() : this._childListModifiedEventTimer = setTimeout((() => {
              this.triggerChildNodeMutation()
            }), p)
          }
          triggerChildNodeMutation() {
            if (this._childListModifiedEvent.length > 0) {
              const t = {},
                e = {};
              for (let r = 0, n = this._childListModifiedEvent.length; r < n; r++) {
                const n = this._childListModifiedEvent[r];
                if ("DOM.childNodeInserted" === n.type) t[`${n.params.node.nodeId}_${n.params.parentNodeId}`] = r;
                else if ("DOM.childNodeRemoved" === n.type) {
                  const o = t[`${n.params.nodeId}_${n.params.parentNodeId}`];
                  void 0 !== o && (e[o] = !0, e[r] = !0)
                }
              }
              const r = [];
              for (let t = 0, n = this._childListModifiedEvent.length; t < n; t++) e[t] || r.push(this._childListModifiedEvent[t]);
              this._lastTriggerChildNodeMutationTime = Date.now(), this.event("DOM.childNodeMutation.EventList", r), this._childListModifiedEvent = []
            }
          }
          childListMutation(t) {
            const e = n.getNodeIdFromMap(t.target);
            if (e || "html" === t.target.localName) {
              if (t.addedNodes.length > 0) {
                let r;
                t.previousSibling && (r = n.getNodeId(t.previousSibling)), t.addedNodes.forEach((t => {
                  if (t && !this._highlight.contain(t)) return "STYLE" === t.tagName ? this._styleSheets.init() : void("SCRIPT" !== t.tagName && this._childListModified("DOM.childNodeInserted", {
                    node: this.formatNode(t),
                    parentNodeId: e,
                    previousNodeId: r
                  }))
                }))
              }
              t.removedNodes.length > 0 && t.removedNodes.forEach((t => {
                if (!t || this._highlight.contain(t)) return;
                if ("BODY" === t.nodeName) return void this.event("DOM.documentUpdated", {});
                const r = n.removeDOM(t);
                r && this._childListModified("DOM.childNodeRemoved", {
                  parentNodeId: e,
                  nodeId: r
                })
              }))
            }
          }
          showScopeData() {
            window.__virtualDOM__ && window.__DOMTree__ ? window.__virtualDOM__.spreadScopeDataToDOMNode() : setTimeout((() => {
              this.showScopeData()
            }), 200)
          }
          getDocument() {
            const t = n.getNodeId(document);
            return this._observered || (this._observered = !0, a.observer(document, (t => {
              t.forEach((t => {
                switch (t.type) {
                  case "attributes":
                    this.attributesMutation(t);
                    break;
                  case "childList":
                    this.childListMutation(t);
                    break;
                  case "characterData":
                    this.characterDataMutation(t)
                }
              }))
            }))), {
              root: {
                baseURL: "https://servicewechat.com/page-frame.html",
                nodeId: t
              }
            }
          }
          querySelector(t) {
            this._ready = !0;
            const {
              nodeId: e,
              selector: r
            } = t, o = n.getDOMByNodeId(e);
            if (o) {
              const t = o.querySelector(r);
              if (t) return {
                nodeId: n.getNodeId(t)
              }
            }
          }
          requestChildNodes(t) {
            const {
              nodeId: e,
              depth: r = 1
            } = t;
            return setTimeout((() => {
              const {
                children: t
              } = this._requestChildNodes(e, r);
              this.event("DOM.setChildNodes", {
                parentId: e,
                nodes: t
              })
            })), {}
          }
          getMatchedStylesForNode(t) {
            const {
              nodeId: e
            } = t, r = n.getDOMByNodeId(e);
            return {
              matchedCSSRules: this._styleSheets.getMatchedStylesForNode(r),
              inlineStyle: this._styleSheets.getInlineStyle(r)
            }
          }
          getComputedStyleForNode(t) {
            const {
              nodeId: e
            } = t, r = n.getDOMByNodeId(e);
            return {
              computedStyle: this._styleSheets.getComputedStyleForNode(r)
            }
          }
          setStyleTexts(t) {
            const {
              edits: e
            } = t;
            for (let t = 0, r = e.length; t < r; t++) this._styleSheets.setStyleTexts(e[t]);
            return {}
          }
          getAttributes(t) {
            this.showScopeData();
            const {
              nodeId: e
            } = t, r = n.getDOMByNodeId(e);
            if (r) {
              const t = [];
              for (let e = 0, n = r.attributes.length; e < n; e++) {
                const n = r.attributes[e];
                t.push(n.name), t.push(n.value)
              }
              return {
                attributes: t
              }
            }
          }
          removeAttribute(t) {
            const {
              nodeId: e,
              name: r
            } = t, o = n.getDOMByNodeId(e);
            if (o) return o.removeAttribute(r), {}
          }
          removeNode(t) {
            var e = t.nodeId,
              r = n.getDOMByNodeId(e);
            if (r) return r.parentNode.removeChild(r), {}
          }
          setHideElement(t) {
            var e = t.nodeId,
              r = t.hide,
              o = n.getDOMByNodeId(e);
            o && (o.style.visibility = r ? "hidden" : "")
          }
          scrollIntoView(t) {
            var e = t.nodeId,
              r = n.getDOMByNodeId(e);
            r && r.scrollIntoView()
          }
          setAttributesAsText(t) {
            const {
              nodeId: e,
              text: r
            } = t, o = n.getDOMByNodeId(e);
            if (o) {
              const t = r.match(/(\w+)(-\w+)?\s*=\s*['"]([^"]*)['"]/g) || [];
              for (let e = 0, r = t.length; e < r; e++) {
                const r = t[e].split("="),
                  n = r[0].trim(),
                  i = r[1].trim().replace(/^"/, "").replace(/"$/, "");
                n && o.setAttribute(n, i)
              }
              return {}
            }
          }
          setAttributeValue(t) {
            const {
              nodeId: e,
              name: r,
              value: o
            } = t, i = n.getDOMByNodeId(e);
            if (i) return i.setAttribute(r, o), {}
          }
          highlightNode(t) {
            const {
              nodeId: e,
              highlightConfig: r
            } = t, o = n.getDOMByNodeId(e);
            o && this._highlight.show(o, r)
          }
          hideHighlight() {
            return this._highlight.hide(), {}
          }
          setInspectMode(t) {
            this._inspect && this._inspect.setInspectMode(t)
          }
          pushNodesByBackendIdsToFrontend(t) {
            return {
              nodeIds: t.backendNodeIds
            }
          }
          setNodeValue(t) {
            const {
              nodeId: e,
              value: r
            } = t, o = n.getDOMByNodeId(e);
            o && (o.__wxElement && (o.__wxElement.textContent = r), o.nodeValue = r)
          }
          getComponentData(t) {
            var e = t.nodeId,
              r = n.getDOMByNodeId(e);
            let o = r.__wxElement,
              i = o.data,
              a = __virtualDOM__.getNodeId(r.__wxElement);
            if (!a) {
              for (i = null; o.parentNode && (o = o.parentNode, o.__virtual););
              o.__wxHost && o.__wxHost.__virtual && (i = o.__wxHost.data, a = __virtualDOM__.getNodeId(o.__wxHost))
            }
            s.send({
              command: "COMPONENT_DATA",
              data: {
                componentData: i,
                exparseNodeId: a
              }
            }), this._lastActiveId = a, this._hasListenOnVdSyncBatch || (this.listenOnVdSyncBatch(), this._hasListenOnVdSyncBatch = !0)
          }
          componentDataByVdSync(t) {
            const e = __virtualDOM__.getNodeById(t).data;
            e && s.send({
              command: "COMPONENT_DATA",
              data: {
                componentData: e,
                exparseNodeId: t
              }
            })
          }
          listenOnVdSyncBatch() {
            const t = this._lastActiveId,
              e = this;
            let r = null;
            const n = () => {
              const n = Date.now();
              if (!e._lastTimeForComponentData || n - e._lastTimeForComponentData > 1e3) return e.componentDataByVdSync(t), void(e._lastTimeForComponentData = Date.now());
              r && clearTimeout(r), r = setTimeout((function () {
                e.componentDataByVdSync(t), e._lastTimeForComponentData = Date.now()
              }), 1e3)
            };
            wx.subscribe("vdSyncBatch", (function (e) {
              for (const r of e)
                if (r instanceof Array) {
                  for (const e of r)
                    if (e === t) {
                      n();
                      break
                    }
                } else r && r.nodeId && r.nodeId === t && n()
            }))
          }
          event(t, e) {
            this._ready && s.send({
              command: "DEBUGGEE_EVENT",
              data: {
                debuggee: this.debuggee,
                method: t,
                params: e
              }
            })
          }
          exec(t) {
            const e = this._methodMap[t.method];
            if (e && "function" == typeof this[e]) {
              const r = this[e](t.commandParams);
              t.callbackID && s.send({
                command: "DEBUGGEE_CALLBACK",
                callbackID: t.callbackID,
                data: r
              })
            }
          }
        }(u)
      },
      2481: (t, e, r) => {
        const n = r(779),
          o = r(4456),
          i = r(6562),
          s = r(6181),
          a = r(4747);
        t.exports = class {
          constructor() {
            this.container = document.createElement("div"), this.isInit = !1
          }
          init() {
            i(a), this.domHighlighter = new n(this.container), this.domHighlighter.intercept((function (t) {
              t.elementInfo && (t.elementInfo.tagName = t.elementInfo.tagName.replace(/^wx-/, ""))
            })), this.isInit = !0
          }
          show(t, e) {
            this.isInit || this.init(), s(e, {
              contentColor: "transparent",
              paddingColor: "transparent",
              borderColor: "transparent",
              marginColor: "transparent"
            }), document.body.appendChild(this.container), this.domHighlighter.highlight(t, e)
          }
          hide() {
            o(this.container), this.domHighlighter && this.domHighlighter.hide()
          }
          dom() {
            return this.container
          }
          contain(t) {
            return this.container === t || this.container.contains(t)
          }
        }
      },
      7752: (t, e, r) => {
        const {
          IsDevtools: n
        } = r(4851);
        t.exports = r(n ? 2481 : 9775)
      },
      9775: (t, e, r) => {
        var n = r(417).default;
        const o = '\n  top: 100%;\n  margin-top: -4px;\n  transform: rotate(45deg) skewX(5deg) skewY(5deg);\n  content: "";\n  position: absolute;\n  left: 10px;\n  width: 8px;\n  height: 8px;\n  border-radius: 0 0 2px 0;\n  background: linear-gradient(-45deg,#34373f 50%,transparent 0);\n  bottom: 100%;\n  margin-bottom: -4px;\n',
          i = function () {
            let t = 9e5;
            return () => t++
          }(),
          s = function (t) {
            return ("0" + parseInt(t, 10).toString(16)).slice(-2)
          };
        class a {
          constructor(t) {
            this.viewId = i(), wx.invoke("insertTextView", {
              parentId: t,
              viewId: this.viewId,
              transEvt: !0,
              position: {
                left: 0,
                top: 0,
                width: 0,
                height: 0
              }
            })
          }
          update(t = {}) {
            wx.invoke("updateTextView", {
              viewId: this.viewId,
              position: t.position,
              style: t.style
            })
          }
          hide() {
            wx.invoke("updateTextView", {
              viewId: this.viewId,
              position: {
                left: 0,
                top: 0,
                width: 0,
                height: 0
              }
            })
          }
          destroy() {
            wx.invoke("removeTextView", {
              viewId: this.viewId
            })
          }
        }
        t.exports = class {
          constructor() {
            this._inited = !1, this._domInited = !1, this._dom = null, this._borderDom = null, this._paddingDom = null, this._sizeDom = null, this._target = null
          }
          init() {
            this.initDOM(), this._inspectTipsContainer = document.createElement("div"), this._tagContainer = document.createElement("p"), this._tagNameTips = document.createElement("span"), this._idTips = document.createElement("span"), this._classTips = document.createElement("span"), this._inspectTipsSep = document.createElement("span"), this._sizeTips = document.createElement("span"), this._arrowTips = document.createElement("i"), this._inspectTipsContainer.setAttribute("style", "\n  display: flex;\n  position: fixed;\n  padding: 4px 10px;\n  font-size: 12px;\n  color: #d9d9d9;\n  background-color: #34373f;\n  z-index: 8000;\n  border-radius: 2px;\n  cursor: default;\n  border: 1px solid #7f7f7f;\n  box-sizing: border-box;\n"), this._tagContainer.setAttribute("style", "margin: auto; word-break: break-all; flex-shrink: 2;"), this._tagNameTips.setAttribute("style", "color:#df80e1;"), this._idTips.setAttribute("style", "color: #f3ae71;"), this._classTips.setAttribute("style", "color: #98cbef;"), this._inspectTipsSep.setAttribute("style", "\n  display: inline-block;\n  align-self: center;\n  height: 100%;\n  vertical-align: middle;\n  width: 1px;\n  height: 18px;\n  background-color: #7f7f7f;\n  margin: 0 8px;\n"), this._sizeTips.setAttribute("style", "color: white; font-size: 11px; white-space: nowrap; align-self: center;"), this._arrowTips.setAttribute("style", o), this._tagContainer.appendChild(this._tagNameTips), this._tagContainer.appendChild(this._idTips), this._tagContainer.appendChild(this._classTips), this._inspectTipsContainer.appendChild(this._tagContainer), this._inspectTipsContainer.appendChild(this._inspectTipsSep), this._inspectTipsContainer.appendChild(this._sizeTips), this._inspectTipsContainer.appendChild(this._arrowTips), this._inited = !0
          }
          initDOM() {
            this._dom = new a(0), this._borderDom = new a(this._dom.viewId), this._paddingDom = new a(this._borderDom.viewId), this._sizeDom = new a(this._paddingDom.viewId), this._domInited = !0
          }
          destroyDOM() {
            this._dom && (this._dom.destroy(), this._dom = this._borderDom = this._paddingDom = this._sizeDom = null, this._domInited = !1)
          }
          pruneNum(t) {
            return t.toFixed(2).replace(/\.?(0{1,})$/i, "")
          }
          setTips(t) {
            const {
              top: e,
              left: r,
              width: n,
              height: i,
              contentWidth: s,
              contentHeight: a
            } = t;
            let u = this._target.tagName.replace(/^WX-/, "").toLowerCase();
            "body" === u && (u = "page"), this._tagNameTips.innerText = u, this._idTips.innerText = this._target.id ? `#${this._target.id}` : "";
            const c = Array.prototype.join.call(this._target.classList, ".");
            this._classTips.innerText = c ? `.${c}` : "", this._sizeTips.innerText = `${this.pruneNum(s)} x ${this.pruneNum(a)}`;
            const l = window.innerWidth - 100;
            this._inspectTipsContainer.style.maxWidth = `${l}px`, this._inspectTipsContainer.style.minWidth = "120px";
            const h = 20 + 6.2 * (this._tagNameTips.innerText.length + this._idTips.innerText.length + this._classTips.innerText.length) + 16 + 1 + 6 * this._sizeTips.innerText.length;
            this._inspectTipsContainer.style.width = h + "px", document.body.appendChild(this._inspectTipsContainer);
            let p = this._inspectTipsContainer.getBoundingClientRect().height;
            const d = r + Math.min(l, h) > window.innerWidth,
              f = t => {
                if (d) {
                  this._arrowTips.setAttribute("style", t ? '\n  top: 100%;\n  margin-top: -4px;\n  transform: rotate(45deg) skewX(5deg) skewY(5deg);\n  content: "";\n  position: absolute;\n  right: 10px;\n  width: 8px;\n  height: 8px;\n  border-radius: 0 0 2px 0;\n  background: linear-gradient(-45deg,#34373f 50%,transparent 0);\n  bottom: 100%;\n  margin-bottom: -4px;\n' : '\n  bottom: 100%;\n  margin-bottom: -4px;\n  transform: rotate(225deg) skewX(5deg) skewY(5deg);\n  content: "";\n  position: absolute;\n  right: 10px;\n  width: 8px;\n  height: 8px;\n  border-radius: 0 0 2px 0;\n  background: linear-gradient(-45deg,#34373f 50%,transparent 0);\n');
                  const e = n + r - Math.min(l, h);
                  this._inspectTipsContainer.style.left = Math.max(0, e) + "px", e < 0 && (this._inspectTipsContainer.style.width = Math.min(l, h) + e + "px")
                } else this._arrowTips.setAttribute("style", t ? o : '\n  bottom: 100%;\n  margin-bottom: -4px;\n  transform: rotate(225deg) skewX(5deg) skewY(5deg);\n  content: "";\n  position: absolute;\n  left: 10px;\n  width: 8px;\n  height: 8px;\n  border-radius: 0 0 2px 0;\n  background: linear-gradient(-45deg,#34373f 50%,transparent 0);\n'), this._inspectTipsContainer.style.left = r + "px"
              };
            if (e > window.innerHeight - e - i) {
              f(!0);
              const t = e - p - 4;
              this._inspectTipsContainer.style.top = `${t>0?t:0}px`
            } else {
              f(!1);
              const t = e + i + 4;
              this._inspectTipsContainer.style.top = `${t+p<window.innerHeight?t:window.innerHeight-p}px`
            }
          }
          formatConfigColorRgba(t, e) {
            const {
              r: r,
              g: n,
              b: o,
              a: i
            } = t[e];
            return {
              bgColor: `#${s(r)}${s(n)}${s(o)}`,
              opacity: i
            }
          }
          show(t, e) {
            if (t === this._target) return;
            this._inited || this.init(), this._domInited || this.initDOM();
            const r = t.getBoundingClientRect(),
              o = window.getComputedStyle(t),
              i = {};
            ["width", "height", "marginLeft", "marginRight", "marginTop", "marginBottom", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"].forEach((t => {
              i[t] = parseFloat(o[t].replace("px", ""))
            }));
            const {
              top: s,
              left: a,
              width: u,
              height: c
            } = r;
            this._dom.update({
              style: n(n({}, this.formatConfigColorRgba(e, "marginColor")), {}, {
                fixed: !0
              }),
              position: {
                top: s - i.marginTop + window.scrollY,
                left: a - i.marginLeft + window.scrollX,
                width: u + i.marginLeft + i.marginRight,
                height: c + i.marginTop + i.marginBottom
              }
            }), this._borderDom.update({
              style: n(n({}, this.formatConfigColorRgba(e, "borderColor")), {}, {
                fixed: !0
              }),
              position: {
                top: s + window.scrollY,
                left: a + window.scrollX,
                width: u,
                height: c
              }
            }), this._paddingDom.update({
              style: n(n({}, this.formatConfigColorRgba(e, "paddingColor")), {}, {
                fixed: !0
              }),
              position: {
                top: s + i.borderTopWidth + window.scrollY,
                left: a + i.borderLeftWidth + window.scrollX,
                width: u - i.borderLeftWidth - i.borderRightWidth,
                height: c - i.borderTopWidth - i.borderBottomWidth
              }
            }), this._sizeDom.update({
              style: n(n({}, this.formatConfigColorRgba(e, "contentColor")), {}, {
                fixed: !1
              }),
              position: {
                top: s + i.borderTopWidth + i.paddingTop + window.scrollY,
                left: a + i.borderLeftWidth + i.paddingLeft + window.scrollX,
                width: u - i.borderLeftWidth - i.borderRightWidth - i.paddingLeft - i.paddingRight,
                height: c - i.borderTopWidth - i.borderBottomWidth - i.paddingTop - i.paddingBottom
              }
            }), this._target = t, this.setTips({
              top: s - i.marginTop,
              left: a - i.marginLeft,
              width: u + i.marginLeft + i.marginRight,
              height: c + i.marginTop + i.marginBottom,
              contentWidth: u,
              contentHeight: c
            }), document.body.appendChild(this._dom)
          }
          hide() {
            this.destroyDOM(), this._inspectTipsContainer && this._inspectTipsContainer.parentElement && this._inspectTipsContainer.parentElement.removeChild(this._inspectTipsContainer), this._target = null
          }
          dom() {
            return this._dom
          }
          contain(t) {
            return t === this._dom || t === this._sizeDom || t === this._borderDom || t === this._inspectTipsContainer || t === this._inspectTipsSep || t === this._selectorTips || t === this._arrowTips || t === this._sizeTips
          }
        }
      },
      4851: t => {
        const e = window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("wechatdevtools") >= 0;
        t.exports = {
          IsDevtools: e
        }
      },
      6619: (t, e, r) => {
        const {
          isValidNode: n
        } = r(2058), o = r(5036), i = r(2184);
        t.exports = new class {
          constructor() {
            this._highlight = null, this._lastHighLightTarget = null, this._highlightTimer = null, this._pointerEventsTimer = null, this._eventTrigger = () => {}, this._inspectMouseMove = this.inspectMouseMove.bind(this), this._inspectClick = this.inspectClick.bind(this), this._onMouseDown = this.onMouseDown.bind(this)
          }
          init(t, e) {
            this._highlight = t, this._eventTrigger = e
          }
          setInspectMode(t) {
            "none" === t.mode ? (document.removeEventListener("mousemove", this._inspectMouseMove), document.removeEventListener("click", this._inspectClick), document.removeEventListener("mousedown", this._onMouseDown)) : "searchForNode" === t.mode && (document.addEventListener("mousemove", this._inspectMouseMove), document.addEventListener("click", this._inspectClick), document.addEventListener("mousedown", this._onMouseDown))
          }
          onMouseDown(t) {
            document.dispatchEvent(new CustomEvent("touchcancel"))
          }
          inspectClick(t) {
            let e = t.target;
            for (; e && !n(e);) e = e.parentElement;
            if (e && e === this._lastHighLightTarget) {
              const t = o.getNodeId(e);
              this._eventTrigger("Overlay.inspectNodeRequested", {
                backendNodeId: t
              })
            }
          }
          inspectMouseMove(t) {
            let e = t.target;
            if (!e || e === document || e === this._lastHighLightTarget) return;
            for (; e && !n(e);) e = e.parentElement;
            if (!e) return;
            const r = o.getNodeId(e);
            this._highlightTimer && (clearTimeout(this._highlightTimer), this._highlightTimer = null), this._highlightTimer = setTimeout((() => {
              this._eventTrigger("Overlay.nodeHighlightRequested", {
                nodeId: r
              }), this._highlight.show(e, i.highlightConfig), this._lastHighLightTarget = e
            }), 100)
          }
        }
      },
      6176: (t, e, r) => {
        const {
          IsDevtools: n
        } = r(4851);
        t.exports = r(n ? 6619 : 5264)
      },
      5264: (t, e, r) => {
        const {
          isValidNode: n
        } = r(2058), o = r(5036), i = r(2184);
        let s = !1;
        try {
          const t = Object.defineProperty({}, "passive", {
            get() {
              s = !0
            }
          });
          window.addEventListener("test", null, t)
        } catch (t) {}
        t.exports = new class {
          constructor() {
            this._highlight = null, this._lastHighLightTarget = null, this._highlightTimer = null, this._pointerEventsTimer = null, this._eventTrigger = () => {}, this._inspectTouchStart = this.inspectTouchStart.bind(this), this._couldHighLight = !0
          }
          init(t, e) {
            this._highlight = t, this._eventTrigger = e
          }
          setInspectMode(t) {
            "none" === t.mode ? document.removeEventListener("touchstart", this._inspectTouchStart, !!s && {
              passive: !1
            }) : "searchForNode" === t.mode && document.addEventListener("touchstart", this._inspectTouchStart, !!s && {
              passive: !1
            })
          }
          inspectTouchStart(t) {
            document.dispatchEvent(new CustomEvent("touchcancel"));
            let e = t.target;
            if (e && e !== document) {
              for (; e && !n(e);) e = e.parentElement;
              e && this.doHighLight(e)
            }
          }
          doHighLight(t) {
            const e = o.getNodeId(t);
            this._lastHighLightTarget === t ? (this._eventTrigger("Overlay.inspectNodeRequested", {
              backendNodeId: e
            }), this._lastHighLightTarget = null) : (this._eventTrigger("Overlay.nodeHighlightRequested", {
              nodeId: e
            }), this._highlight.show(t, i.highlightConfig), this._lastHighLightTarget = t)
          }
        }
      },
      3927: t => {
        const e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

        function r(t) {
          return t ? t.replace(/^\s+|\s+$/g, "") : ""
        }

        function n(t, e) {
          const r = t && "string" == typeof t.type,
            o = r ? t : e;
          for (const e in t) {
            const r = t[e];
            Array.isArray(r) ? r.forEach((function (t) {
              n(t, o)
            })) : r && "object" == typeof r && n(r, o)
          }
          return r && Object.defineProperty(t, "parent", {
            configurable: !0,
            writable: !0,
            enumerable: !1,
            value: e || null
          }), t
        }
        t.exports = function (t, o) {
          o = o || {};
          let i = 1,
            s = 1;

          function a(t) {
            const e = t.match(/\n/g);
            e && (i += e.length);
            const r = t.lastIndexOf("\n");
            s = ~r ? t.length - r : s + t.length
          }

          function u() {
            const t = {
              line: i,
              column: s
            };
            return function (e) {
              return e.position = new c(t), m(), e
            }
          }

          function c(t) {
            this.startColumn = t.column - 1, this.startLine = t.line - 1, this.endColumn = s - 1, this.endLine = i - 1, this.source = o.source
          }
          c.prototype.content = t;
          const l = [];

          function h(e) {
            const r = new Error(o.source + ":" + i + ":" + s + ": " + e);
            if (r.reason = e, r.filename = o.source, r.line = i, r.column = s, r.source = t, !o.silent) throw r;
            l.push(r)
          }

          function p() {
            return g(/^{\s*/)
          }

          function d() {
            return g(/^}/)
          }

          function f() {
            let e;
            const r = [];
            for (m(), v(r); t.length && "}" != t.charAt(0) && (e = S() || C());) !1 !== e && (r.push(e), v(r));
            return r
          }

          function g(e) {
            const r = e.exec(t);
            if (!r) return;
            const n = r[0];
            return a(n), t = t.slice(n.length), r
          }

          function m() {
            g(/^\s*/)
          }

          function v(t) {
            let e;
            for (t = t || []; e = y();) !1 !== e && t.push(e);
            return t
          }

          function y() {
            const e = u();
            if ("/" != t.charAt(0) || "*" != t.charAt(1)) return;
            let r = 2;
            for (;
              "" != t.charAt(r) && ("*" != t.charAt(r) || "/" != t.charAt(r + 1));) ++r;
            if (r += 2, "" === t.charAt(r - 1)) return h("End of comment missing");
            const n = t.slice(2, r - 2);
            return s += 2, a(n), t = t.slice(r), s += 2, e({
              type: "comment",
              comment: n
            })
          }

          function b() {
            const t = g(/^([^{]+)/);
            if (t) return r(t[0]).replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, (function (t) {
              return t.replace(/,/g, "‌")
            })).split(/\s*(?![^(]*\)),\s*/).map((function (t) {
              return t.replace(/\u200C/g, ",")
            }))
          }

          function w() {
            const t = u();
            g(/^[;\s]*/);
            let n = g(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
            if (!n) return;
            n = r(n[0]), g(/^:\s*/);
            const o = g(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/),
              i = t({
                type: "declaration",
                property: n.replace(e, ""),
                value: o ? r(o[0]).replace(e, "") : ""
              });
            return g(/^[;\s]*/), i
          }

          function x() {
            const t = [];
            if (!p()) return h("missing '{'");
            let e;
            for (v(t); e = w();) !1 !== e && (t.push(e), v(t));
            return d() ? t : h("missing '}'")
          }

          function E() {
            let t;
            const e = [],
              r = u();
            for (; t = g(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);) e.push(t[1]), g(/^,\s*/);
            if (e.length) return r({
              type: "keyframe",
              values: e,
              declarations: x()
            })
          }
          const N = A("import"),
            _ = A("charset"),
            T = A("namespace");

          function A(t) {
            const e = new RegExp("^@" + t + "\\s*([^;]+);");
            return function () {
              const r = u(),
                n = g(e);
              if (!n) return;
              const o = {
                type: t
              };
              return o[t] = n[1].trim(), r(o)
            }
          }

          function S() {
            if ("@" == t[0]) return function () {
              const t = u();
              if (!(r = g(/^@([-\w]+)?keyframes\s*/))) return;
              const e = r[1];
              var r;
              if (v(), !(r = g(/^([-\w]+)\s*/))) return h("@keyframes missing name");
              const n = r[1];
              if (v(), !p()) return h("@keyframes missing '{'");
              let o, i = v();
              for (; o = E();) i.push(o), i = i.concat(v());
              return d() ? t({
                type: "keyframes",
                name: n,
                vendor: e,
                keyframes: i
              }) : h("@keyframes missing '}'")
            }() || function () {
              const t = u(),
                e = g(/^@media *([^{]+)/);
              if (!e) return;
              const n = r(e[1]);
              if (!p()) return h("@media missing '{'");
              const o = v().concat(f());
              return d() ? t({
                type: "media",
                media: n,
                rules: o
              }) : h("@media missing '}'")
            }() || function () {
              const t = u(),
                e = g(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
              if (e) return t({
                type: "custom-media",
                name: r(e[1]),
                media: r(e[2])
              })
            }() || function () {
              const t = u(),
                e = g(/^@supports *([^{]+)/);
              if (!e) return;
              const n = r(e[1]);
              if (!p()) return h("@supports missing '{'");
              const o = v().concat(f());
              return d() ? t({
                type: "supports",
                supports: n,
                rules: o
              }) : h("@supports missing '}'")
            }() || N() || _() || T() || function () {
              const t = u(),
                e = g(/^@([-\w]+)?document *([^{]+)/);
              if (!e) return;
              const n = r(e[1]),
                o = r(e[2]);
              if (!p()) return h("@document missing '{'");
              const i = v().concat(f());
              return d() ? t({
                type: "document",
                document: o,
                vendor: n,
                rules: i
              }) : h("@document missing '}'")
            }() || function () {
              const t = u();
              if (!g(/^@page */)) return;
              const e = b() || [];
              if (!p()) return h("@page missing '{'");
              let r, n = v();
              for (; r = w();) n.push(r), n = n.concat(v());
              return d() ? t({
                type: "page",
                selectors: e,
                declarations: n
              }) : h("@page missing '}'")
            }() || function () {
              const t = u();
              if (!g(/^@host\s*/)) return;
              if (!p()) return h("@host missing '{'");
              const e = v().concat(f());
              return d() ? t({
                type: "host",
                rules: e
              }) : h("@host missing '}'")
            }() || function () {
              const t = u();
              if (!g(/^@font-face\s*/)) return;
              if (!p()) return h("@font-face missing '{'");
              let e, r = v();
              for (; e = w();) r.push(e), r = r.concat(v());
              return d() ? t({
                type: "font-face",
                declarations: r
              }) : h("@font-face missing '}'")
            }()
          }

          function C() {
            const t = u();
            let e = b();
            return e || (e = ""), v(), t({
              type: "rule",
              selectors: e,
              declarations: x()
            })
          }
          return n({
            type: "stylesheet",
            stylesheet: {
              rules: f(),
              parsingErrors: l
            }
          })
        }
      },
      1695: t => {
        const e = [];

        function r() {
          e.forEach((t => {
            try {
              t.apply(this, arguments)
            } catch (t) {}
          }))
        }
        t.exports = {
          connect: function () {
            wx.on("remoteDebugCommand", r)
          },
          receive: t => {
            e.push(t)
          },
          send: function (t) {
            wx.invoke("remoteDebugInfo", t, (() => {}))
          }
        }
      },
      3595: t => {
        let e;
        const r = new MutationObserver((function (t) {
          e && e(t)
        }));
        t.exports = {
          observer: (t, n) => {
            e = n, r.disconnect(), r.observe(t, {
              attributes: !0,
              childList: !0,
              characterData: !0,
              subtree: !0,
              attributeOldValue: !0,
              characterDataOldValue: !0
            })
          }
        }
      },
      5036: t => {
        t.exports = new class {
          constructor() {
            this.NODE_COUNTER = 1, this.NODE_ID_DOM_MAP = {}, this.DOM_WEAK_MAP = new WeakMap
          }
          getNodeIdFromMap(t) {
            if (t) return this.DOM_WEAK_MAP.get(t)
          }
          getNodeId(t) {
            if (!t) return;
            let e = this.DOM_WEAK_MAP.get(t);
            return e || (e = this.NODE_COUNTER++, t.setAttribute && t.setAttribute("wx:nodeid", e), this.NODE_ID_DOM_MAP[e] = t, this.DOM_WEAK_MAP.set(t, e)), e
          }
          getDOMByNodeId(t) {
            return this.NODE_ID_DOM_MAP[t]
          }
          removeDOM(t) {
            const e = this.DOM_WEAK_MAP.get(t);
            return e && (delete this.NODE_ID_DOM_MAP[e], this.DOM_WEAK_MAP.delete(t)), e
          }
        }
      },
      5966: (t, e, r) => {
        const n = r(3927),
          o = r(5036),
          i = r(3861);
        t.exports = class {
          constuctor() {
            this._styleSheets
          }
          init() {
            this._styleSheets = {};
            const t = document.querySelectorAll("style");
            for (let e = 0, r = t.length; e < r; e++) {
              const r = t[e].innerText;
              try {
                this._styleSheets[`style_${e}`] = n(r, {
                  silent: !0
                })
              } catch (t) {}
            }
          }
          getMatchedCSSRules(t, e, r) {
            let n = [];
            for (let o in r) {
              let i = r[o];
              "media" === i.type && (n = n.concat(this.getMatchedCSSRules(t, e, i.rules)));
              for (let r in i.selectors) {
                let o = i.selectors[r],
                  s = !1;
                try {
                  s = e(o)
                } catch (t) {
                  continue
                }
                if (!s) continue;
                let a = {
                  style: {
                    cssProperties: [],
                    range: i.position
                  },
                  selectorList: {
                    text: o
                  },
                  styleSheetId: t
                };
                const u = i.parent.media;
                u && (a.media = u);
                for (let t = 0, e = i.declarations.length; t < e; t++) {
                  let e = i.declarations[t];
                  if ("comment" != e.type) a.style.cssProperties.push({
                    disabled: !1,
                    name: e.property,
                    value: e.value,
                    range: e.position
                  });
                  else {
                    let t = e.comment.replace(/;$/, "").trim(),
                      [r, n] = t.split(":");
                    r = r && r.trim() || "", n = n && n.trim() || "", a.style.cssProperties.push({
                      disabled: !0,
                      text: `/*${t}*/`,
                      range: e.position,
                      name: r,
                      value: n
                    })
                  }
                }
                n.push({
                  rule: a
                })
              }
            }
            return n
          }
          getMatchedStylesForNode(t) {
            let e = t.matches || t.webkitMatchesSelector;
            e = e.bind(t), this._styleSheets || this.init();
            let r = [];
            for (let t in this._styleSheets) {
              let n = this._styleSheets[t].stylesheet.rules;
              r = r.concat(this.getMatchedCSSRules(t, e, n))
            }
            return r = r.filter((t => !t.rule.media || window.matchMedia(t.rule.media).matches)), this.sortMatchedStyleRules(r)
          }
          sortMatchedStyleRules(t) {
            const e = [],
              r = t.length,
              n = [];
            for (let n = 0; n < r; n++) {
              const r = t[n].rule;
              e[n] = i(r.selectorList.text, {
                position: n
              })
            }
            e.sort(i.compare);
            for (let o = 0; o < r; o++) {
              const r = e[o][5];
              n[o] = t[r]
            }
            return n
          }
          getComputedStyleForNode(t) {
            const e = window.getComputedStyle(t),
              r = [];
            for (let t = 0, n = e.length; t < n; t++) {
              const n = e[t];
              r.push({
                name: n,
                value: e[n]
              })
            }
            return r
          }
          update(t, e) {
            this._styleSheets && (this._styleSheets[t] = e)
          }
          getInlineStyle(t) {
            const e = o.getNodeId(t),
              r = t.getAttribute("style") || "",
              i = n(`element.style{${r}}`).stylesheet.rules[0],
              s = {
                cssProperties: [],
                styleSheetId: `node_${e}`,
                range: i.position
              };
            for (let t = 0, e = i.declarations.length; t < e; t++) {
              const e = i.declarations[t];
              if ("comment" !== e.type) s.cssProperties.push({
                disabled: !1,
                name: e.property,
                value: e.value,
                range: e.position
              });
              else {
                const t = e.comment.replace(/;$/, "").trim();
                let [r, n] = t.split(":");
                r = r.trim(), n = n.trim(), s.cssProperties.push({
                  disabled: !0,
                  text: `/*${t}*/`,
                  range: e.position,
                  name: r,
                  value: n
                })
              }
            }
            return s
          }
          setStyleTexts(t) {
            try {
              const r = /^node_(\w+)$/,
                i = /^style_(\w+)$/;
              let s = t.styleSheetId.match(r);
              if (s) {
                const e = s[1],
                  r = o.getDOMByNodeId(e);
                r && r.setAttribute("style", t.text)
              }
              if (s = t.styleSheetId.match(i), s) {
                const r = s[1],
                  o = document.querySelectorAll("style")[r];
                if (o) {
                  let r = o.innerText;
                  const i = r.split("\n");
                  let s = [];
                  const {
                    startLine: a,
                    endLine: u,
                    endColumn: c
                  } = t.range;
                  let {
                    startColumn: l
                  } = t.range;
                  for (let t = a; t <= u; t++) {
                    const e = i[t];
                    t < u ? (s.push(e.substr(l, e.length - l)), l = 0) : s.push(e.substr(l, c - l))
                  }
                  s = s.join("\n");
                  const h = n(s),
                    p = [],
                    d = h.stylesheet.rules[0];
                  p.push(d.selectors.join(", ")), p.push("{"), p.push(t.text), p.push("}"), r = r.replace(s, p.join(""));
                  const f = n(r);
                  this.update(t.styleSheetId, f);
                  for (var e = document.createTextNode(r); o.childNodes.length > 0;) o.removeChild(o.childNodes[0]);
                  o.appendChild(e)
                }
              }
            } catch (t) {}
          }
        }
      },
      2058: t => {
        t.exports = {
          isValidNode: t => {
            if (3 === t.nodeType) return !0;
            const e = t.localName;
            if ("wx-content" === e) return !1;
            if ("body" === e) return !0;
            if (/^wx-/.test(e)) return !0;
            if (t.attributes && t.attributes.length > 0)
              for (let e = 0, r = t.attributes.length; e < r; e++)
                if ("exparser:info-custom-component" === t.attributes[e].name) return !0;
            return !1
          }
        }
      },
      8195: (t, e, r) => {
        var n = r(5001),
          o = r(337),
          i = r(2382),
          s = r(5486),
          a = r(2275),
          u = r(2212),
          c = r(3178),
          l = r(4456),
          h = r(8837),
          p = r(9636),
          d = r(9313),
          f = r(2158),
          g = r(2768),
          m = r(2038);
        e = function (t) {
          return new n(t)
        }, n.methods({
          offset: function () {
            return o(this)
          },
          hide: function () {
            return this.css("display", "none")
          },
          show: function () {
            return i(this), this
          },
          first: function () {
            return e(this[0])
          },
          last: function () {
            return e(c(this))
          },
          get: function (t) {
            return this[t]
          },
          eq: function (t) {
            return e(this[t])
          },
          on: function (t, e, r) {
            return p.on(this, t, e, r), this
          },
          off: function (t, e, r) {
            return p.off(this, t, e, r), this
          },
          html: function (t) {
            var e = u.html(this, t);
            return g(t) ? e : this
          },
          text: function (t) {
            var e = u.text(this, t);
            return g(t) ? e : this
          },
          val: function (t) {
            var e = u.val(this, t);
            return g(t) ? e : this
          },
          css: function (t, e) {
            var r = s(this, t, e);
            return v(t, e) ? r : this
          },
          attr: function (t, e) {
            var r = a(this, t, e);
            return v(t, e) ? r : this
          },
          data: function (t, e) {
            var r = h(this, t, e);
            return v(t, e) ? r : this
          },
          rmAttr: function (t) {
            return a.remove(this, t), this
          },
          remove: function () {
            return l(this), this
          },
          addClass: function (t) {
            return d.add(this, t), this
          },
          rmClass: function (t) {
            return d.remove(this, t), this
          },
          toggleClass: function (t) {
            return d.toggle(this, t), this
          },
          hasClass: function (t) {
            return d.has(this, t)
          },
          parent: function () {
            return e(this[0].parentNode)
          },
          append: function (t) {
            return f.append(this, t), this
          },
          prepend: function (t) {
            return f.prepend(this, t), this
          },
          before: function (t) {
            return f.before(this, t), this
          },
          after: function (t) {
            return f.after(this, t), this
          }
        });
        var v = function (t, e) {
          return g(e) && m(t)
        };
        t.exports = e
      },
      2275: (t, e, r) => {
        var n = r(1571),
          o = r(7765),
          i = r(2038),
          s = r(1304),
          a = r(2768),
          u = r(6028);
        (e = function (t, e, r) {
          if (t = u(t), a(r) && i(e)) return function (t, e) {
            return t.getAttribute(e)
          }(t[0], e);
          var n = e;
          o(n) || ((n = {})[e] = r),
            function (t, e) {
              s(t, (function (t) {
                s(e, (function (e, r) {
                  t.setAttribute(r, e)
                }))
              }))
            }(t, n)
        }).remove = function (t, e) {
          t = u(t), e = n(e), s(t, (function (t) {
            s(e, (function (e) {
              t.removeAttribute(e)
            }))
          }))
        }, t.exports = e
      },
      9313: (t, e, r) => {
        var n = r(1571),
          o = r(7557),
          i = r(6028),
          s = r(2038),
          a = r(1304);

        function u(t) {
          return s(t) ? t.split(/\s+/) : n(t)
        }
        e = {
          add: function (t, r) {
            t = i(t);
            var n = u(r);
            a(t, (function (t) {
              var r = [];
              a(n, (function (n) {
                e.has(t, n) || r.push(n)
              })), 0 !== r.length && (t.className += (t.className ? " " : "") + r.join(" "))
            }))
          },
          has: function (t, e) {
            t = i(t);
            var r = new RegExp("(^|\\s)" + e + "(\\s|$)");
            return o(t, (function (t) {
              return r.test(t.className)
            }))
          },
          toggle: function (t, r) {
            t = i(t), a(t, (function (t) {
              if (!e.has(t, r)) return e.add(t, r);
              e.remove(t, r)
            }))
          },
          remove: function (t, e) {
            t = i(t);
            var r = u(e);
            a(t, (function (t) {
              a(r, (function (e) {
                t.classList.remove(e)
              }))
            }))
          }
        }, t.exports = e
      },
      5486: (t, e, r) => {
        var n = r(2038),
          o = r(7765),
          i = r(8766),
          s = r(2768),
          a = r(390),
          u = r(1264),
          c = r(6028),
          l = r(6783),
          h = r(1304);
        e = function (t, e, r) {
          if (t = c(t), s(r) && n(e)) return function (t, e) {
            return t.style[l(e)] || getComputedStyle(t, "").getPropertyValue(e)
          }(t[0], e);
          var d = e;
          o(d) || ((d = {})[e] = r),
            function (t, e) {
              h(t, (function (t) {
                var r = ";";
                h(e, (function (t, e) {
                  e = l.dash(e), r += e + ":" + function (t, e) {
                    return u(e) && !a(p, i(t)) ? e + "px" : e
                  }(e, t) + ";"
                })), t.style.cssText += r
              }))
            }(t, d)
        };
        var p = ["column-count", "columns", "font-weight", "line-weight", "opacity", "z-index", "zoom"];
        t.exports = e
      },
      8837: (t, e, r) => {
        var n = r(2275),
          o = r(2038),
          i = r(7765),
          s = r(1304);
        r(6028), e = function (t, e, r) {
          var a = e;
          return o(e) && (a = "data-" + e), i(e) && (a = {}, s(e, (function (t, e) {
            a["data-" + e] = t
          }))), n(t, a, r)
        }, t.exports = e
      },
      9636: (t, e, r) => {
        var n = r(9736),
          o = r(2768),
          i = r(6028),
          s = r(1304);

        function a(t) {
          return function (e, r, a, u) {
            e = i(e), o(u) && (u = a, a = void 0), s(e, (function (e) {
              n[t](e, r, a, u)
            }))
          }
        }
        e = {
          on: a("add"),
          off: a("remove")
        }, t.exports = e
      },
      2158: (t, e, r) => {
        var n = r(1304),
          o = r(6028),
          i = r(2038);

        function s(t) {
          return function (e, r) {
            e = o(e), n(e, (function (e) {
              if (i(r)) e.insertAdjacentHTML(t, r);
              else {
                var n = e.parentNode;
                switch (t) {
                  case "beforebegin":
                    n && n.insertBefore(r, e);
                    break;
                  case "afterend":
                    n && n.insertBefore(r, e.nextSibling);
                    break;
                  case "beforeend":
                    e.appendChild(r);
                    break;
                  case "afterbegin":
                    e.prepend(r)
                }
              }
            }))
          }
        }
        e = {
          before: s("beforebegin"),
          after: s("afterend"),
          append: s("beforeend"),
          prepend: s("afterbegin")
        }, t.exports = e
      },
      337: (t, e, r) => {
        var n = r(6028);
        e = function (t) {
          var e = (t = n(t))[0].getBoundingClientRect();
          return {
            left: e.left + window.pageXOffset,
            top: e.top + window.pageYOffset,
            width: Math.round(e.width),
            height: Math.round(e.height)
          }
        }, t.exports = e
      },
      2212: (t, e, r) => {
        var n = r(2768),
          o = r(1304),
          i = r(6028);

        function s(t) {
          return function (e, r) {
            var s = (e = i(e))[0];
            if (n(r)) return s ? s[t] : "";
            s && o(e, (function (e) {
              e[t] = r
            }))
          }
        }
        e = {
          html: s("innerHTML"),
          text: s("textContent"),
          val: s("value")
        }, t.exports = e
      },
      4456: (t, e, r) => {
        var n = r(1304),
          o = r(6028);
        e = function (t) {
          t = o(t), n(t, (function (t) {
            var e = t.parentNode;
            e && e.removeChild(t)
          }))
        }, t.exports = e
      },
      6028: (t, e, r) => {
        var n = r(2038),
          o = r(1571),
          i = r(5001);
        e = function (t) {
          return o(n(t) ? new i(t) : t)
        }, t.exports = e
      },
      2382: (t, e, r) => {
        var n = r(1304),
          o = r(6028);
        e = function (t) {
          t = o(t), n(t, (function (t) {
            (function (t) {
              return "none" == getComputedStyle(t, "").getPropertyValue("display")
            })(t) && (t.style.display = function (t) {
              var e, r;
              return i[t] || (e = document.createElement(t), document.documentElement.appendChild(e), r = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == r && (r = "block"), i[t] = r), i[t]
            }(t.nodeName))
          }))
        };
        var i = {};
        t.exports = e
      },
      5593: (t, e, r) => {
        var n = r(4078),
          o = r(1571),
          i = r(650),
          s = r(708),
          a = r(649),
          u = (e = function (t, e) {
            return u.extend(t, e)
          }).Base = function t(e, r, u) {
            u = u || {};
            var c = r.className || s(r, "initialize.name") || "";
            delete r.className;
            var l = function () {
              var t = o(arguments);
              return this.initialize && this.initialize.apply(this, t) || this
            };
            if (!a) try {
              l = new Function("toArr", "return function " + c + "(){var args = toArr(arguments);return this.initialize ? this.initialize.apply(this, args) || this : this;};")(o)
            } catch (t) {}
            return i(l, e), l.prototype.constructor = l, l.extend = function (e, r) {
              return t(l, e, r)
            }, l.inherits = function (t) {
              i(l, t)
            }, l.methods = function (t) {
              return n(l.prototype, t), l
            }, l.statics = function (t) {
              return n(l, t), l
            }, l.methods(r).statics(u), l
          }(Object, {
            className: "Base",
            callSuper: function (t, e, r) {
              return t.prototype[e].apply(this, r)
            },
            toString: function () {
              return this.constructor.name
            }
          });
        t.exports = e
      },
      5795: (t, e, r) => {
        var n = r(5593),
          o = r(2038),
          i = r(3718),
          s = r(4400),
          a = r(6841),
          u = r(8945);
        e = n({
          initialize: function (t) {
            o(t) && (t = e.parse(t)), this.model = t.model, this.val = t.val
          },
          toRgb: function () {
            var t = this.val;
            "hsl" === this.model && (t = a(t));
            var e = "rgba";
            return 1 === t[3] && (e = "rgb", t = t.slice(0, 3)), e + "(" + t.join(", ") + ")"
          },
          toHex: function () {
            var t = this.val;
            "hsl" === this.model && (t = a(t));
            var e = u.encode(t.slice(0, 3));
            return e[0] === e[1] && e[2] === e[3] && e[4] === e[5] && (e = e[0] + e[2] + e[5]), "#" + e
          },
          toHsl: function () {
            var t = this.val;
            "rgb" === this.model && (t = s(t));
            var e = "hsla";
            return 1 === t[3] && (e = "hsl", t = t.slice(0, 3)), t[1] = t[1] + "%", t[2] = t[2] + "%", e + "(" + t.join(", ") + ")"
          }
        }, {
          parse: function (t) {
            var e, r, n = [0, 0, 0, 1],
              o = "rgb";
            if (r = t.match(c))
              for (r = r[1], e = 0; e < 3; e++) n[e] = parseInt(r[e] + r[e], 16);
            else if (r = t.match(l))
              for (r = r[1], e = 0; e < 3; e++) {
                var s = 2 * e;
                n[e] = parseInt(r.slice(s, s + 2), 16)
              } else if (r = t.match(h)) {
                for (e = 0; e < 3; e++) n[e] = parseInt(r[e + 1], 0);
                r[4] && (n[3] = parseFloat(r[4]))
              } else if (r = t.match(p)) {
              for (e = 0; e < 3; e++) n[e] = Math.round(2.55 * parseFloat(r[e + 1]));
              r[4] && (n[3] = parseFloat(r[4]))
            } else(r = t.match(d)) && (o = "hsl", n = [(parseFloat(r[1]) % 360 + 360) % 360, i(parseFloat(r[2]), 0, 100), i(parseFloat(r[3]), 0, 100), i(parseFloat(r[4]), 0, 1)]);
            return {
              val: n,
              model: o
            }
          }
        });
        var c = /^#([a-fA-F0-9]{3})$/,
          l = /^#([a-fA-F0-9]{6})$/,
          h = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d.]+)\s*)?\)$/,
          p = /^rgba?\(\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*(?:,\s*([+-]?[\d.]+)\s*)?\)$/,
          d = /^hsla?\(\s*([+-]?\d*[.]?\d+)(?:deg)?\s*,\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*(?:,\s*([+-]?[\d.]+)\s*)?\)$/;
        t.exports = e
      },
      1590: (t, e, r) => {
        var n = r(5593),
          o = r(6589),
          i = r(1304),
          s = r(2614),
          a = r(6165),
          u = r(638);
        e = n({
          initialize: function () {
            this._events = this._events || {}
          },
          on: function (t, e) {
            return this._events[t] = this._events[t] || [], this._events[t].push(e), this
          },
          off: function (t, e) {
            var r = this._events;
            if (o(r, t)) {
              var n = r[t].indexOf(e);
              return n > -1 && r[t].splice(n, 1), this
            }
          },
          once: function (t, e) {
            return this.on(t, a(e)), this
          },
          emit: function (t) {
            var e = this;
            if (o(this._events, t)) {
              var r = s(arguments, 1),
                n = u(this._events[t]);
              return i(n, (function (t) {
                return t.apply(e, r)
              }), this), this
            }
          },
          removeAllListeners: function (t) {
            return t ? delete this._events[t] : this._events = {}, this
          }
        }, {
          mixin: function (t) {
            i(["on", "off", "once", "emit", "removeAllListeners"], (function (r) {
              t[r] = e.prototype[r]
            })), t._events = t._events || {}
          }
        }), t.exports = e
      },
      9701: (t, e, r) => {
        var n = r(614),
          o = r(2830),
          i = r(9636),
          s = r(5486),
          a = r(390),
          u = r(4078),
          c = r(757);
        e = c.ResizeObserver ? n.extend({
          initialize: function (t) {
            var e = this;
            if (t._resizeSensor) return t._resizeSensor;
            this.callSuper(n, "initialize");
            var r = new c.ResizeObserver((function () {
              return e.emit()
            }));
            r.observe(t), t._resizeSensor = this, this._resizeObserver = r, this._el = t
          },
          destroy: function () {
            var t = this._el;
            t._resizeSensor && (this.rmAllListeners(), delete t._resizeSensor, this._resizeObserver.unobserve(t))
          }
        }) : n.extend({
          initialize: function (t) {
            if (t._resizeSensor) return t._resizeSensor;
            this.callSuper(n, "initialize"), this._el = t, t._resizeSensor = this, a(["absolute", "relative", "fixed", "sticky"], s(t, "position")) || s(t, "position", "relative"), this._appendResizeSensor(), this._bindEvent()
          },
          destroy: function () {
            var t = this._el;
            t._resizeSensor && (this.rmAllListeners(), delete t._resizeSensor, t.removeChild(this._resizeSensorEl))
          },
          _appendResizeSensor: function () {
            var t = this._el,
              e = {
                pointerEvents: "none",
                position: "absolute",
                left: "0px",
                top: "0px",
                right: "0px",
                bottom: "0px",
                overflow: "hidden",
                zIndex: "-1",
                visibility: "hidden",
                maxWidth: "100%"
              },
              r = {
                position: "absolute",
                left: "0px",
                top: "0px",
                transition: "0s"
              },
              n = o("div", {
                style: r
              }),
              i = o("div.resize-sensor-expand", {
                style: e
              }, n),
              s = o("div.resize-sensor-shrink", {
                style: e
              }, o("div", {
                style: u({
                  width: "200%",
                  height: "200%"
                }, r)
              })),
              a = o("div.resize-sensor", {
                dir: "ltr",
                style: e
              }, i, s);
            this._expandEl = i, this._expandChildEl = n, this._shrinkEl = s, this._resizeSensorEl = a, t.appendChild(a), this._resetExpandShrink()
          },
          _bindEvent: function () {
            var t = this;
            i.on(this._expandEl, "scroll", (function () {
              return t._onScroll()
            })), i.on(this._shrinkEl, "scroll", (function () {
              return t._onScroll()
            }))
          },
          _onScroll: function () {
            this.emit(), this._resetExpandShrink()
          },
          _resetExpandShrink: function () {
            var t = this._el,
              e = t.offsetWidth,
              r = t.offsetHeight;
            s(this._expandChildEl, {
              width: e + 10,
              height: r + 10
            }), u(this._expandEl, {
              scrollLeft: e + 10,
              scrollTop: r + 10
            }), u(this._shrinkEl, {
              scrollLeft: e + 10,
              scrollTop: r + 10
            })
          }
        }), t.exports = e
      },
      5001: (t, e, r) => {
        var n = r(5593),
          o = r(2038),
          i = r(1304),
          s = r(5436),
          a = new(e = n({
            className: "Select",
            initialize: function (t) {
              return this.length = 0, t ? o(t) ? a.find(t) : void(t.nodeType && (this[0] = t, this.length = 1)) : this
            },
            find: function (t) {
              var r = new e;
              return this.each((function () {
                s(r, this.querySelectorAll(t))
              })), r
            },
            each: function (t) {
              return i(this, (function (e, r) {
                t.call(e, r, e)
              })), this
            }
          }))(document);
        t.exports = e
      },
      614: (t, e, r) => {
        var n = r(5593),
          o = r(638),
          i = r(1304),
          s = r(1571);
        e = n({
          initialize: function () {
            this._listeners = []
          },
          addListener: function (t) {
            this._listeners.push(t)
          },
          rmListener: function (t) {
            var e = this._listeners.indexOf(t);
            e > -1 && this._listeners.splice(e, 1)
          },
          rmAllListeners: function () {
            this._listeners = []
          },
          emit: function () {
            var t = this,
              e = s(arguments),
              r = o(this._listeners);
            i(r, (function (r) {
              return r.apply(t, e)
            }), this)
          }
        }, {
          mixin: function (t) {
            i(["addListener", "rmListener", "emit", "rmAllListeners"], (function (r) {
              t[r] = e.prototype[r]
            })), t._listeners = t._listeners || []
          }
        }), t.exports = e
      },
      9880: (t, e, r) => {
        var n = r(5593),
          o = r(9379);
        e = n({
          initialize: function () {
            this.clear()
          },
          clear: function () {
            this._items = [], this.size = 0
          },
          push: function (t) {
            return this._items.push(t), ++this.size
          },
          pop: function () {
            if (this.size) return this.size--, this._items.pop()
          },
          peek: function () {
            return this._items[this.size - 1]
          },
          forEach: function (t, e) {
            e = arguments.length > 1 ? e : this;
            for (var r = this._items, n = this.size - 1, o = 0; n >= 0; n--, o++) t.call(e, r[n], o, this)
          },
          toArr: function () {
            return o(this._items)
          }
        }), t.exports = e
      },
      6601: (t, e, r) => {
        var n = r(5479),
          o = r(535),
          i = r(4673),
          s = Object.getOwnPropertyNames,
          a = Object.getOwnPropertySymbols;
        e = function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = e.prototype,
            u = void 0 === r || r,
            c = e.unenumerable,
            l = void 0 !== c && c,
            h = e.symbol,
            p = void 0 !== h && h,
            d = [];
          if ((l || p) && s) {
            var f = n;
            l && s && (f = s);
            do {
              d = d.concat(f(t)), p && a && (d = d.concat(a(t)))
            } while (u && (t = o(t)) && t !== Object.prototype);
            d = i(d)
          } else if (u)
            for (var g in t) d.push(g);
          else d = n(t);
          return d
        }, t.exports = e
      },
      8880: (t, e, r) => {
        var n = r(1304),
          o = r(2768),
          i = r(7018);
        e = function (t, e) {
          o(e) && (e = !0);
          var r = i(e),
            s = {};
          return n(t, (function (t) {
            s[t] = r ? e(t) : e
          })), s
        }, t.exports = e
      },
      3939: (t, e) => {
        e = function (t, e) {
          var r;
          return function () {
            return --t > 0 && (r = e.apply(this, arguments)), t <= 1 && (e = null), r
          }
        }, t.exports = e
      },
      7200: (t, e, r) => {
        var n = r(3038);

        function o(t, e) {
          this[e] = t.replace(/\w/, (function (t) {
            return t.toUpperCase()
          }))
        }
        e = function (t) {
          var e = n(t),
            r = e[0];
          return e.shift(), e.forEach(o, e), r + e.join("")
        }, t.exports = e
      },
      2069: (t, e, r) => {
        var n = r(6589),
          o = r(3463);
        e = function (t, e) {
          if (o(t)) return t;
          if (e && n(e, t)) return [t];
          var r = [];
          return t.replace(i, (function (t, e, n, o) {
            r.push(n ? o.replace(s, "$1") : e || t)
          })), r
        };
        var i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          s = /\\(\\)?/g;
        t.exports = e
      },
      3718: (t, e, r) => {
        var n = r(2768);
        e = function (t, e, r) {
          return n(r) && (r = e, e = void 0), !n(e) && t < e ? e : t > r ? r : t
        }, t.exports = e
      },
      638: (t, e, r) => {
        var n = r(7765),
          o = r(3463),
          i = r(4078);
        e = function (t) {
          return n(t) ? o(t) ? t.slice() : i({}, t) : t
        }, t.exports = e
      },
      2939: (t, e, r) => {
        var n = r(1900),
          o = r(9051);
        e = function (t, e) {
          t = t.split("."), e = e.split(".");
          for (var r = o(t.length, e.length), i = 0; i < r; i++) {
            var s = n(t[i]),
              a = n(e[i]);
            if (s > a) return 1;
            if (s < a) return -1
          }
          return 0
        }, t.exports = e
      },
      390: (t, e, r) => {
        var n = r(9748),
          o = r(2038),
          i = r(8082),
          s = r(4059);
        e = function (t, e) {
          return o(t) ? t.indexOf(e) > -1 : (i(t) || (t = s(t)), n(t, e) >= 0)
        }, t.exports = e
      },
      7450: (t, e, r) => {
        var n = r(7765);
        e = function (t) {
          if (!n(t)) return {};
          if (o) return o(t);

          function e() {}
          return e.prototype = t, new e
        };
        var o = Object.create;
        t.exports = e
      },
      1031: (t, e, r) => {
        var n = r(2768),
          o = r(1304);
        e = function (t, e) {
          return function (r) {
            return o(arguments, (function (i, s) {
              if (0 !== s) {
                var a = t(i);
                o(a, (function (t) {
                  e && !n(r[t]) || (r[t] = i[t])
                }))
              }
            })), r
          }
        }, t.exports = e
      },
      3861: (t, e, r) => {
        var n = r(4468),
          o = r(1304),
          i = r(6564),
          s = r(390),
          a = r(2939);
        e = function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = e.important,
            a = void 0 !== r && r,
            c = e.inlineStyle,
            l = void 0 !== c && c,
            h = e.position,
            p = void 0 === h ? 0 : h,
            d = [0, 0, 0, 0, 0, p];
          a && (d[0] = 1), l && (d[1] = 1);
          var f = n.parse(t)[0];
          return o(f, (function (t) {
            var e = t.type,
              r = t.value;
            switch (e) {
              case "id":
                d[2]++;
                break;
              case "class":
              case "attribute":
                d[3]++;
                break;
              case "pseudo":
                s(u, r.replace(/:/g, "")) ? d[4]++ : i(r, "::") || d[3]++;
                break;
              case "tag":
                "*" !== r && d[4]++
            }
          })), d
        };
        var u = ["first-letter", "last-letter", "first-line", "last-line", "first-child", "last-child", "before", "after"];
        e.compare = function (t, e) {
          return a(t.join("."), e.join("."))
        }, t.exports = e
      },
      6920: (t, e) => {
        e = function (t, e, r) {
          var n;
          return function () {
            var o = this,
              i = arguments,
              s = function () {
                n = null, t.apply(o, i)
              };
            r || clearTimeout(n), r && n || (n = setTimeout(s, e))
          }
        }, t.exports = e
      },
      6181: (t, e, r) => {
        e = r(1031)(r(6601), !0), t.exports = e
      },
      9736: (t, e, r) => {
        var n = r(5593),
          o = r(390);

        function i() {
          return !0
        }

        function s() {
          return !1
        }

        function a(t) {
          var r, n = this.events[t.type],
            o = u.call(this, t, n);
          t = new e.Event(t);
          for (var i, s, a = 0;
            (s = o[a++]) && !t.isPropagationStopped();)
            for (t.curTarget = s.el, i = 0;
              (r = s.handlers[i++]) && !t.isImmediatePropagationStopped();) !1 === r.handler.apply(s.el, [t]) && (t.preventDefault(), t.stopPropagation())
        }

        function u(t, e) {
          var r, n, i, s, a = t.target,
            u = [],
            c = e.delegateCount;
          if (a.nodeType)
            for (; a !== this; a = a.parentNode || this) {
              for (n = [], s = 0; s < c; s++) void 0 === n[r = (i = e[s]).selector + " "] && (n[r] = o(this.querySelectorAll(r), a)), n[r] && n.push(i);
              n.length && u.push({
                el: a,
                handlers: n
              })
            }
          return c < e.length && u.push({
            el: this,
            handlers: e.slice(c)
          }), u
        }
        e = {
          add: function (t, e, r, n) {
            var o, i = {
              selector: r,
              handler: n
            };
            t.events || (t.events = {}), (o = t.events[e]) || ((o = t.events[e] = []).delegateCount = 0, t.addEventListener(e, (function () {
              a.apply(t, arguments)
            }), !1)), r ? o.splice(o.delegateCount++, 0, i) : o.push(i)
          },
          remove: function (t, e, r, n) {
            var o = t.events;
            if (o && o[e])
              for (var i, s = o[e], a = s.length; a--;) i = s[a], r && i.selector != r || i.handler != n || (s.splice(a, 1), i.selector && s.delegateCount--)
          },
          Event: n({
            className: "Event",
            initialize: function (t) {
              this.origEvent = t
            },
            isDefaultPrevented: s,
            isPropagationStopped: s,
            isImmediatePropagationStopped: s,
            preventDefault: function () {
              var t = this.origEvent;
              this.isDefaultPrevented = i, t && t.preventDefault && t.preventDefault()
            },
            stopPropagation: function () {
              var t = this.origEvent;
              this.isPropagationStopped = i, t && t.stopPropagation && t.stopPropagation()
            },
            stopImmediatePropagation: function () {
              var t = this.origEvent;
              this.isImmediatePropagationStopped = i, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
          })
        }, t.exports = e
      },
      1304: (t, e, r) => {
        var n = r(8082),
          o = r(5479),
          i = r(5749);
        e = function (t, e, r) {
          var s, a;
          if (e = i(e, r), n(t))
            for (s = 0, a = t.length; s < a; s++) e(t[s], s, t);
          else {
            var u = o(t);
            for (s = 0, a = u.length; s < a; s++) e(t[u[s]], u[s], t)
          }
          return t
        }, t.exports = e
      },
      6562: (t, e) => {
        e = function (t) {
          var e = document.createElement("style");
          e.textContent = t, e.type = "text/css", document.head.appendChild(e)
        }, t.exports = e
      },
      4078: (t, e, r) => {
        e = r(1031)(r(6601)), t.exports = e
      },
      207: (t, e, r) => {
        var n = r(5479);
        e = r(1031)(n), t.exports = e
      },
      8206: (t, e, r) => {
        var n = r(5261),
          o = r(1304);
        e = function (t, e, r) {
          var i = [];
          return e = n(e, r), o(t, (function (t, r, n) {
            e(t, r, n) && i.push(t)
          })), i
        }, t.exports = e
      },
      535: (t, e, r) => {
        var n = r(7765),
          o = r(7018),
          i = Object.getPrototypeOf,
          s = {}.constructor;
        e = function (t) {
          if (n(t)) {
            if (i) return i(t);
            var e = t.__proto__;
            return e || null === e ? e : o(t.constructor) ? t.constructor.prototype : t instanceof s ? s.prototype : void 0
          }
        }, t.exports = e
      },
      2830: (t, e, r) => {
        var n = r(2317),
          o = r(2038),
          i = r(6564),
          s = r(9313),
          a = r(5486),
          u = r(1304),
          c = r(7018);

        function l(t) {
          for (var e = "div", r = "", n = [], o = [], s = "", a = 0, u = t.length; a < u; a++) {
            var c = t[a];
            "#" === c || "." === c ? (o.push(s), s = c) : s += c
          }
          o.push(s);
          for (var l = 0, h = o.length; l < h; l++)(s = o[l]) && (i(s, "#") ? r = s.slice(1) : i(s, ".") ? n.push(s.slice(1)) : e = s);
          return {
            tagName: e,
            id: r,
            classes: n
          }
        }
        e = function (t, e) {
          for (var r = arguments.length, h = new Array(r > 2 ? r - 2 : 0), p = 2; p < r; p++) h[p - 2] = arguments[p];
          (n(e) || o(e)) && (h.unshift(e), e = null), e || (e = {});
          var d = l(t),
            f = d.tagName,
            g = d.id,
            m = d.classes,
            v = document.createElement(f);
          return g && v.setAttribute("id", g), s.add(v, m), u(h, (function (t) {
            o(t) ? v.appendChild(document.createTextNode(t)) : n(t) && v.appendChild(t)
          })), u(e, (function (t, e) {
            o(t) ? v.setAttribute(e, t) : c(t) && i(e, "on") ? v.addEventListener(e.slice(2), t, !1) : "style" === e && a(v, t)
          })), v
        }, t.exports = e
      },
      6589: (t, e) => {
        var r = Object.prototype.hasOwnProperty;
        e = function (t, e) {
          return r.call(t, e)
        }, t.exports = e
      },
      8945: (t, e, r) => {
        var n = r(7705);
        e = {
          encode: function (t) {
            for (var e = [], r = 0, n = t.length; r < n; r++) {
              var o = t[r];
              e.push((o >>> 4).toString(16)), e.push((15 & o).toString(16))
            }
            return e.join("")
          },
          decode: function (t) {
            var e = [],
              r = t.length;
            n(r) && r--;
            for (var o = 0; o < r; o += 2) e.push(parseInt(t.substr(o, 2), 16));
            return e
          }
        }, t.exports = e
      },
      6841: (t, e) => {
        e = function (t) {
          var e, n, o, i = t[0] / 360,
            s = t[1] / 100,
            a = t[2] / 100,
            u = [];
          if (t[3] && (u[3] = t[3]), 0 === s) return o = r(255 * a), u[0] = u[1] = u[2] = o, u;
          for (var c = 2 * a - (e = a < .5 ? a * (1 + s) : a + s - a * s), l = 0; l < 3; l++)(n = i + 1 / 3 * -(l - 1)) < 0 && n++, n > 1 && n--, o = 6 * n < 1 ? c + 6 * (e - c) * n : 2 * n < 1 ? e : 3 * n < 2 ? c + (e - c) * (2 / 3 - n) * 6 : c, u[l] = r(255 * o);
          return u
        };
        var r = Math.round;
        t.exports = e
      },
      3132: (t, e, r) => {
        var n = r(5214),
          o = r(9880),
          i = r(3463),
          s = r(1304),
          a = r(2038),
          u = r(5279);
        e = {
          parse: function (t) {
            var e = [],
              r = new o;
            return n(t, {
              start: function (t, e) {
                e = u(e, (function (t) {
                  return function (t) {
                    return t.replace(/&quot;/g, '"')
                  }(t)
                })), r.push({
                  tag: t,
                  attrs: e
                })
              },
              end: function () {
                var t = r.pop();
                if (r.size) {
                  var n = r.peek();
                  i(n.content) || (n.content = []), n.content.push(t)
                } else e.push(t)
              },
              comment: function (t) {
                var n = "\x3c!--".concat(t, "--\x3e"),
                  o = r.peek();
                o ? (o.content || (o.content = []), o.content.push(n)) : e.push(n)
              },
              text: function (t) {
                var n = r.peek();
                n ? (n.content || (n.content = []), n.content.push(t)) : e.push(t)
              }
            }), e
          },
          stringify: function t(e) {
            var r = "";
            return i(e) ? s(e, (function (e) {
              return r += t(e)
            })) : a(e) ? r = e : (r += "<".concat(e.tag), s(e.attrs, (function (t, e) {
              return r += " ".concat(e, '="').concat(function (t) {
                return t.replace(/"/g, "&quot;")
              }(t), '"')
            })), r += ">", e.content && (r += t(e.content)), r += "</".concat(e.tag, ">")), r
          }
        }, t.exports = e
      },
      8496: (t, e) => {
        e = function (t) {
          return t
        }, t.exports = e
      },
      9748: (t, e) => {
        e = function (t, e, r) {
          return Array.prototype.indexOf.call(t, e, r)
        }, t.exports = e
      },
      650: (t, e, r) => {
        var n = r(7450);
        e = function (t, e) {
          t.prototype = n(e.prototype)
        }, t.exports = e
      },
      3463: (t, e, r) => {
        var n = r(8913);
        e = Array.isArray ? Array.isArray : function (t) {
          return "[object Array]" === n(t)
        }, t.exports = e
      },
      8082: (t, e, r) => {
        var n = r(1264),
          o = r(7018),
          i = Math.pow(2, 53) - 1;
        e = function (t) {
          if (!t) return !1;
          var e = t.length;
          return n(e) && e >= 0 && e <= i && !o(t)
        }, t.exports = e
      },
      4272: (t, e) => {
        e = "object" == typeof window && "object" == typeof document && 9 === document.nodeType, t.exports = e
      },
      2317: (t, e) => {
        e = function (t) {
          return !(!t || 1 !== t.nodeType)
        }, t.exports = e
      },
      7018: (t, e, r) => {
        var n = r(8913);
        e = function (t) {
          var e = n(t);
          return "[object Function]" === e || "[object GeneratorFunction]" === e || "[object AsyncFunction]" === e
        }, t.exports = e
      },
      5471: (t, e, r) => {
        var n = r(1264);
        e = function (t) {
          return n(t) && t % 1 == 0
        }, t.exports = e
      },
      6114: (t, e, r) => {
        var n = r(5479);
        e = function (t, e) {
          var r = n(e),
            o = r.length;
          if (null == t) return !o;
          t = Object(t);
          for (var i = 0; i < o; i++) {
            var s = r[i];
            if (e[s] !== t[s] || !(s in t)) return !1
          }
          return !0
        }, t.exports = e
      },
      649: (t, e, r) => {
        var n = r(7018);
        e = "undefined" != typeof wx && n(wx.openLocation), t.exports = e
      },
      1264: (t, e, r) => {
        var n = r(8913);
        e = function (t) {
          return "[object Number]" === n(t)
        }, t.exports = e
      },
      7765: (t, e) => {
        e = function (t) {
          var e = typeof t;
          return !!t && ("function" === e || "object" === e)
        }, t.exports = e
      },
      7705: (t, e, r) => {
        var n = r(5471);
        e = function (t) {
          return !!n(t) && t % 2 != 0
        }, t.exports = e
      },
      2038: (t, e, r) => {
        var n = r(8913);
        e = function (t) {
          return "[object String]" === n(t)
        }, t.exports = e
      },
      2768: (t, e) => {
        e = function (t) {
          return void 0 === t
        }, t.exports = e
      },
      8766: (t, e, r) => {
        var n = r(3038);
        e = function (t) {
          return n(t).join("-")
        }, t.exports = e
      },
      5479: (t, e, r) => {
        var n = r(6589);
        e = Object.keys ? Object.keys : function (t) {
          var e = [];
          for (var r in t) n(t, r) && e.push(r);
          return e
        }, t.exports = e
      },
      3178: (t, e) => {
        e = function (t) {
          var e = t ? t.length : 0;
          if (e) return t[e - 1]
        }, t.exports = e
      },
      5100: (t, e, r) => {
        var n = r(2296);
        e = function (t) {
          return n(t).toLocaleLowerCase()
        }, t.exports = e
      },
      443: (t, e) => {
        var r = /^\s+/;
        e = function (t, e) {
          if (null == e) return t.replace(r, "");
          for (var n, o, i = 0, s = t.length, a = e.length, u = !0; u && i < s;)
            for (u = !1, n = -1, o = t.charAt(i); ++n < a;)
              if (o === e[n]) {
                u = !0, i++;
                break
              } return i >= s ? "" : t.substr(i, s)
        }, t.exports = e
      },
      3803: (t, e, r) => {
        var n = r(5261),
          o = r(5479),
          i = r(8082);
        e = function (t, e, r) {
          e = n(e, r);
          for (var s = !i(t) && o(t), a = (s || t).length, u = Array(a), c = 0; c < a; c++) {
            var l = s ? s[c] : c;
            u[c] = e(t[l], l, t)
          }
          return u
        }, t.exports = e
      },
      5279: (t, e, r) => {
        var n = r(5261),
          o = r(5479);
        e = function (t, e, r) {
          e = n(e, r);
          for (var i = o(t), s = i.length, a = {}, u = 0; u < s; u++) {
            var c = i[u];
            a[c] = e(t[c], c, t)
          }
          return a
        }, t.exports = e
      },
      1705: (t, e, r) => {
        var n = r(207),
          o = r(6114);
        e = function (t) {
          return t = n({}, t),
            function (e) {
              return o(e, t)
            }
        }, t.exports = e
      },
      9051: (t, e) => {
        e = function () {
          for (var t = arguments, e = t[0], r = 1, n = t.length; r < n; r++) t[r] > e && (e = t[r]);
          return e
        }, t.exports = e
      },
      6755: (t, e, r) => {
        var n = r(6589);
        e = function (t, e) {
          var r = function (o) {
            var i = r.cache,
              s = "" + (e ? e.apply(this, arguments) : o);
            return n(i, s) || (i[s] = t.apply(this, arguments)), i[s]
          };
          return r.cache = {}, r
        }, t.exports = e
      },
      5436: (t, e, r) => {
        e = r(61)((function (t, e) {
          for (var r = t.length, n = 0, o = e.length; n < o; n++)
            for (var i = e[n], s = 0, a = i.length; s < a; s++) t[r++] = i[s];
          return t.length = r, t
        })), t.exports = e
      },
      8913: (t, e) => {
        var r = Object.prototype.toString;
        e = function (t) {
          return r.call(t)
        }, t.exports = e
      },
      6165: (t, e, r) => {
        e = r(9245)(r(3939), 2), t.exports = e
      },
      5749: (t, e, r) => {
        var n = r(2768);
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
              return function (r, n, o, i) {
                return t.call(e, r, n, o, i)
              }
          }
          return function () {
            return t.apply(e, arguments)
          }
        }, t.exports = e
      },
      5214: (t, e, r) => {
        var n = r(3178),
          o = r(8880),
          i = r(6564),
          s = r(5100);
        e = function (t, e) {
          for (var r, o = [], p = t; t;) {
            if (r = !0, n(o) && h[n(o)]) {
              var d = new RegExp("</".concat(n(o), "[^>]*>")).exec(t);
              if (d) {
                var f = t.substring(0, d.index);
                t = t.substring(d.index + d[0].length), f && e.text && e.text(f)
              }
              E("", n(o))
            } else {
              if (i(t, "\x3c!--")) {
                var g = t.indexOf("--\x3e");
                g >= 0 && (e.comment && e.comment(t.substring(4, g)), t = t.substring(g + 3), r = !1)
              } else if (i(t, "<!")) {
                var m = t.match(a);
                m && (e.text && e.text(t.substring(0, m[0].length)), t = t.substring(m[0].length), r = !1)
              } else if (i(t, "</")) {
                var v = t.match(u);
                v && (t = t.substring(v[0].length), v[0].replace(u, E), r = !1)
              } else if (i(t, "<")) {
                var y = t.match(c);
                y && (t = t.substring(y[0].length), y[0].replace(c, x), r = !1)
              }
              if (r) {
                var b = t.indexOf("<"),
                  w = b < 0 ? t : t.substring(0, b);
                t = b < 0 ? "" : t.substring(b), e.text && e.text(w)
              }
            }
            if (p === t) throw Error("Parse Error: " + t);
            p = t
          }

          function x(t, r, n, i) {
            if (r = s(r), (i = !!i) || o.push(r), e.start) {
              var a = {};
              n.replace(l, (function (t, e, r, n, o) {
                a[e] = r || n || o || ""
              })), e.start(r, a, i)
            }
          }

          function E(t, r) {
            var n;
            if (r = s(r))
              for (n = o.length - 1; n >= 0 && o[n] !== r; n--);
            else n = 0;
            if (n >= 0) {
              for (var i = o.length - 1; i >= n; i--) e.end && e.end(o[i]);
              o.length = n
            }
          }
          E()
        };
        var a = /^<!\s*doctype((?:\s+[\w:]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/i,
          u = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
          c = /^<([-A-Za-z0-9_]+)((?:\s+[-A-Za-z0-9_:@.]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/i,
          l = /([-A-Za-z0-9_:@.]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
          h = o("script,style".split(","));
        t.exports = e
      },
      9245: (t, e, r) => {
        var n = r(61),
          o = r(1571);
        e = n((function (t, e) {
          return function () {
            var r = [];
            return r = (r = r.concat(e)).concat(o(arguments)), t.apply(this, r)
          }
        })), t.exports = e
      },
      6783: (t, e, r) => {
        var n = r(6755),
          o = r(7200),
          i = r(5099),
          s = r(6589),
          a = r(8766);
        (e = n((function (t) {
          if (t = t.replace(c, ""), t = o(t), s(l, t)) return t;
          for (var e = u.length; e--;) {
            var r = u[e] + i(t);
            if (s(l, r)) return r
          }
          return t
        }))).dash = n((function (t) {
          var r = e(t);
          return (c.test(r) ? "-" : "") + a(r)
        }));
        var u = ["O", "ms", "Moz", "Webkit"],
          c = /^(O)|(ms)|(Moz)|(Webkit)|(-o-)|(-ms-)|(-moz-)|(-webkit-)/g,
          l = document.createElement("p").style;
        t.exports = e
      },
      1085: (t, e, r) => {
        var n = r(3463),
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
      61: (t, e) => {
        e = function (t, e) {
          return e = null == e ? t.length - 1 : +e,
            function () {
              var r, n = Math.max(arguments.length - e, 0),
                o = new Array(n);
              for (r = 0; r < n; r++) o[r] = arguments[r + e];
              switch (e) {
                case 0:
                  return t.call(this, o);
                case 1:
                  return t.call(this, arguments[0], o);
                case 2:
                  return t.call(this, arguments[0], arguments[1], o)
              }
              var i = new Array(e + 1);
              for (r = 0; r < e; r++) i[r] = arguments[r];
              return i[e] = o, t.apply(this, i)
            }
        }, t.exports = e
      },
      9379: (t, e) => {
        e = function (t) {
          var e = t.length,
            r = Array(e);
          e--;
          for (var n = 0; n <= e; n++) r[e - n] = t[n];
          return r
        }, t.exports = e
      },
      4400: (t, e) => {
        e = function (t) {
          var e, i, s = t[0] / 255,
            a = t[1] / 255,
            u = t[2] / 255,
            c = r(s, a, u),
            l = n(s, a, u),
            h = l - c;
          (e = r(60 * (e = l === c ? 0 : s === l ? (a - u) / h : a === l ? 2 + (u - s) / h : 4 + (s - a) / h), 360)) < 0 && (e += 360);
          var p = (c + l) / 2;
          i = l === c ? 0 : p <= .5 ? h / (l + c) : h / (2 - l - c);
          var d = [o(e), o(100 * i), o(100 * p)];
          return t[3] && (d[3] = t[3]), d
        };
        var r = Math.min,
          n = Math.max,
          o = Math.round;
        t.exports = e
      },
      757: (t, e, r) => {
        e = r(4272) ? window : r.g, t.exports = e
      },
      6367: (t, e) => {
        var r = /\s+$/;
        e = function (t, e) {
          if (null == e) return t.replace(r, "");
          for (var n, o, i = t.length - 1, s = e.length, a = !0; a && i >= 0;)
            for (a = !1, n = -1, o = t.charAt(i); ++n < s;)
              if (o === e[n]) {
                a = !0, i--;
                break
              } return i >= 0 ? t.substring(0, i + 1) : ""
        }, t.exports = e
      },
      5261: (t, e, r) => {
        var n = r(7018),
          o = r(7765),
          i = r(3463),
          s = r(5749),
          a = r(1705),
          u = r(8496),
          c = r(1085);
        e = function (t, e, r) {
          return null == t ? u : n(t) ? s(t, e, r) : o(t) && !i(t) ? a(t) : c(t)
        }, t.exports = e
      },
      708: (t, e, r) => {
        var n = r(2768),
          o = r(2069);
        e = function (t, e) {
          var r;
          for (r = (e = o(e, t)).shift(); !n(r);) {
            if (null == (t = t[r])) return;
            r = e.shift()
          }
          return t
        }, t.exports = e
      },
      4468: (t, e, r) => {
        var n = r(7968),
          o = r(1304),
          i = r(8496),
          s = r(3803),
          a = "[\\x20\\t\\r\\n\\f]",
          u = "(?:\\\\[\\da-fA-F]{1,6}".concat(a, "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+"),
          c = "\\[".concat(a, "*(").concat(u, ")(?:").concat(a, "*([*^$|!~]?=)").concat(a, "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(").concat(u, "))|)").concat(a, "*\\]"),
          l = "::?(".concat(u, ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|").concat(c, ")*)|.*)\\)|)"),
          h = new RegExp("^".concat(a, "*,").concat(a, "*")),
          p = new RegExp("^".concat(a, "*([>+~]|").concat(a, ")").concat(a, "*")),
          d = {
            id: {
              reg: new RegExp("^#(".concat(u, ")")),
              value: function (t) {
                return t.slice(1)
              },
              toStr: function (t) {
                return "#".concat(t)
              }
            },
            class: {
              reg: new RegExp("^\\.(".concat(u, ")")), value: function (t) {
                return t.slice(1)
              }, toStr: function (t) {
                return ".".concat(t)
              }
            },
            tag: {
              reg: new RegExp("^(".concat(u, "|[*])")),
              value: i
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
              value: i
            }
          };
        o(d, (function (t) {
          t.value || (t.value = i), t.toStr || (t.toStr = i)
        })), e = {
          parse: function (t) {
            t = n(t);
            for (var e, r, i, s = []; t && (i && !(r = h.exec(t)) || (r && (t = t.slice(r[0].length)), e = [], s.push(e)), i = !1, (r = p.exec(t)) && (i = r.shift(), t = t.slice(i.length), (i = n(i)) || (i = " "), e.push({
                value: i,
                type: "combinator"
              })), o(d, (function (o, s) {
                var a = o.reg,
                  u = o.value;
                (r = a.exec(t)) && (i = r.shift(), t = t.slice(i.length), i = n(i), e.push({
                  value: u(i),
                  type: s
                }))
              })), i););
            return s
          },
          stringify: function (t) {
            return s(t, (function (t) {
              return (t = s(t, (function (t) {
                var e = t.type,
                  r = t.value;
                return "combinator" === e ? " " === r ? r : " ".concat(r, " ") : d[e].toStr(r)
              }))).join("")
            })).join(", ")
          }
        }, t.exports = e
      },
      2614: (t, e) => {
        e = function (t, e, r) {
          var n = t.length;
          e = null == e ? 0 : e < 0 ? Math.max(n + e, 0) : Math.min(e, n), r = null == r ? n : r < 0 ? Math.max(n + r, 0) : Math.min(r, n);
          for (var o = []; e < r;) o.push(t[e++]);
          return o
        }, t.exports = e
      },
      7557: (t, e, r) => {
        var n = r(5261),
          o = r(8082),
          i = r(5479);
        e = function (t, e, r) {
          e = n(e, r);
          for (var s = !o(t) && i(t), a = (s || t).length, u = 0; u < a; u++) {
            var c = s ? s[u] : u;
            if (e(t[c], c, t)) return !0
          }
          return !1
        }, t.exports = e
      },
      3038: (t, e) => {
        var r = /([A-Z])/g,
          n = /[_.\- ]+/g,
          o = /(^-)|(-$)/g;
        e = function (t) {
          return (t = t.replace(r, "-$1").toLowerCase().replace(n, "-").replace(o, "")).split("-")
        }, t.exports = e
      },
      6564: (t, e) => {
        e = function (t, e) {
          return 0 === t.indexOf(e)
        }, t.exports = e
      },
      2827: (t, e, r) => {
        var n = r(6920);
        e = function (t, e) {
          return n(t, e, !0)
        }, t.exports = e
      },
      1571: (t, e, r) => {
        var n = r(8082),
          o = r(3803),
          i = r(3463),
          s = r(2038);
        e = function (t) {
          return t ? i(t) ? t : n(t) && !s(t) ? o(t) : [t] : []
        }, t.exports = e
      },
      1900: (t, e, r) => {
        var n = r(4320);
        e = function (t) {
          return t ? (t = n(t)) - t % 1 : 0 === t ? t : 0
        }, t.exports = e
      },
      4320: (t, e, r) => {
        var n = r(1264),
          o = r(7765),
          i = r(7018),
          s = r(2038);
        e = function (t) {
          if (n(t)) return t;
          if (o(t)) {
            var e = i(t.valueOf) ? t.valueOf() : t;
            t = o(e) ? e + "" : e
          }
          return s(t) ? +t : 0 === t ? t : +t
        }, t.exports = e
      },
      2296: (t, e) => {
        e = function (t) {
          return null == t ? "" : t.toString()
        }, t.exports = e
      },
      7968: (t, e, r) => {
        var n = r(443),
          o = r(6367),
          i = /^\s+|\s+$/g;
        e = function (t, e) {
          return null == e ? t.replace(i, "") : n(o(t, e), e)
        }, t.exports = e
      },
      4673: (t, e, r) => {
        var n = r(8206);

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
      223: (t, e, r) => {
        var n = r(2296);
        e = function (t) {
          return n(t).toLocaleUpperCase()
        }, t.exports = e
      },
      5099: (t, e) => {
        e = function (t) {
          return t.length < 1 ? t : t[0].toUpperCase() + t.slice(1)
        }, t.exports = e
      },
      4059: (t, e, r) => {
        var n = r(1304);
        e = function (t) {
          var e = [];
          return n(t, (function (t) {
            e.push(t)
          })), e
        }, t.exports = e
      },
      2517: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = [
          ["menuitem", "command"],
          ["rel", "roletype"],
          ["article", "article"],
          ["header", "banner"],
          ["input", "button", [
            ["type", "checkbox"]
          ]],
          ["summary", "button", [
            ["aria-expanded", "false"]
          ]],
          ["summary", "button", [
            ["aria-expanded", "true"]
          ]],
          ["input", "button", [
            ["type", "button"]
          ]],
          ["input", "button", [
            ["type", "image"]
          ]],
          ["input", "button", [
            ["type", "reset"]
          ]],
          ["input", "button", [
            ["type", "submit"]
          ]],
          ["button", "button"],
          ["td", "cell"],
          ["input", "checkbox", [
            ["type", "checkbox"]
          ]],
          ["th", "columnheader"],
          ["input", "combobox", [
            ["type", "email"]
          ]],
          ["input", "combobox", [
            ["type", "search"]
          ]],
          ["input", "combobox", [
            ["type", "tel"]
          ]],
          ["input", "combobox", [
            ["type", "text"]
          ]],
          ["input", "combobox", [
            ["type", "url"]
          ]],
          ["input", "combobox", [
            ["type", "url"]
          ]],
          ["select", "combobox"],
          ["select", "combobox", [
            ["size", 1]
          ]],
          ["aside", "complementary"],
          ["footer", "contentinfo"],
          ["dd", "definition"],
          ["dialog", "dialog"],
          ["body", "document"],
          ["figure", "figure"],
          ["form", "form"],
          ["form", "form"],
          ["form", "form"],
          ["span", "generic"],
          ["div", "generic"],
          ["table", "grid", [
            ["role", "grid"]
          ]],
          ["td", "gridcell", [
            ["role", "gridcell"]
          ]],
          ["details", "group"],
          ["fieldset", "group"],
          ["optgroup", "group"],
          ["h1", "heading"],
          ["h2", "heading"],
          ["h3", "heading"],
          ["h4", "heading"],
          ["h5", "heading"],
          ["h6", "heading"],
          ["img", "img"],
          ["img", "img"],
          ["a", "link"],
          ["area", "link"],
          ["link", "link"],
          ["menu", "list"],
          ["ol", "list"],
          ["ul", "list"],
          ["select", "listbox"],
          ["select", "listbox"],
          ["select", "listbox"],
          ["datalist", "listbox"],
          ["li", "listitem"],
          ["main", "main"],
          ["math", "math"],
          ["menuitem", "command"],
          ["nav", "navigation"],
          ["option", "option"],
          ["progress", "progressbar"],
          ["input", "radio", [
            ["type", "radio"]
          ]],
          ["section", "region"],
          ["section", "region"],
          ["frame", "region"],
          ["tr", "row"],
          ["tbody", "rowgroup"],
          ["tfoot", "rowgroup"],
          ["thead", "rowgroup"],
          ["th", "rowheader", [
            ["scope", "row"]
          ]],
          ["input", "searchbox", [
            ["type", "search"]
          ]],
          ["hr", "separator"],
          ["input", "slider", [
            ["type", "range"]
          ]],
          ["input", "spinbutton", [
            ["type", "number"]
          ]],
          ["output", "status"],
          ["table", "table"],
          ["dfn", "term"],
          ["input", "textbox"],
          ["input", "textbox", [
            ["type", "email"]
          ]],
          ["input", "textbox", [
            ["type", "tel"]
          ]],
          ["input", "textbox", [
            ["type", "text"]
          ]],
          ["input", "textbox", [
            ["type", "url"]
          ]],
          ["textarea", "textbox"]
        ]
      },
      779: function (t, e, r) {
        "use strict";
        var n = this && this.__importDefault || function (t) {
          return t && t.__esModule ? t : {
            default: t
          }
        };
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        const o = n(r(7789)),
          i = r(8171),
          s = r(341),
          a = n(r(9701)),
          u = n(r(2827)),
          c = n(r(5100)),
          l = n(r(1304)),
          h = n(r(5795)),
          p = n(r(8945)),
          d = n(r(223)),
          f = n(r(4078)),
          g = n(r(7200)),
          m = n(r(390)),
          v = n(r(4320)),
          y = n(r(2517)),
          b = n(r(2038));
        class w extends o.default {
          constructor(t, {
            showRulers: e = !1,
            showExtensionLines: r = !1,
            showInfo: n = !0,
            showStyles: o = !0,
            showAccessibilityInfo: s = !0,
            colorFormat: a = "hex",
            contentColor: c = "rgba(111, 168, 220, .66)",
            paddingColor: l = "rgba(147, 196, 125, .55)",
            borderColor: h = "rgba(255, 229, 153, .66)",
            marginColor: p = "rgba(246, 178, 107, .66)",
            monitorResize: d = !0
          } = {}) {
            super(t, {
              compName: "dom-highlighter"
            }), this.overlay = new i.HighlightOverlay(window), this.reset = () => {
              const t = document.documentElement.clientWidth,
                e = document.documentElement.clientHeight;
              this.overlay.reset({
                viewportSize: {
                  width: t,
                  height: e
                },
                deviceScaleFactor: 1,
                pageScaleFactor: 1,
                pageZoomFactor: 1,
                emulationScaleFactor: 1,
                scrollX: window.scrollX,
                scrollY: window.scrollY
              })
            }, this.options = {
              showRulers: e,
              showExtensionLines: r,
              showInfo: n,
              showStyles: o,
              showAccessibilityInfo: s,
              colorFormat: a,
              contentColor: c,
              paddingColor: l,
              borderColor: h,
              marginColor: p,
              monitorResize: d
            }, this.overlay.setContainer(t), this.overlay.setPlatform("mac"), this.redraw = u.default((() => {
              this.reset(), this.draw()
            }), 16), this.redraw(), this.bindEvent()
          }
          highlight(t, e) {
            e && f.default(this.options, e), this.target = t, t instanceof HTMLElement && this.options.monitorResize && (this.resizeSensor && this.resizeSensor.destroy(), this.resizeSensor = new a.default(t), this.resizeSensor.addListener(this.redraw)), this.redraw()
          }
          hide() {
            this.target = null, this.redraw()
          }
          setOption(t, e) {
            const r = this.options,
              n = r[t];
            r[t] = e, this.emit("optionChange", e, n), this.redraw()
          }
          intercept(t) {
            this.interceptor = t
          }
          destroy() {
            window.removeEventListener("resize", this.redraw), window.removeEventListener("scroll", this.redraw), this.resizeSensor && this.resizeSensor.destroy(), super.destroy()
          }
          draw() {
            const {
              target: t
            } = this;
            t && (t instanceof Text ? this.drawText(t) : this.drawElement(t))
          }
          drawText(t) {
            const {
              options: e
            } = this, r = document.createRange();
            r.selectNode(t);
            const {
              left: n,
              top: o,
              width: i,
              height: s
            } = r.getBoundingClientRect();
            r.detach();
            const a = {
              paths: [{
                path: this.rectToPath({
                  left: n,
                  top: o,
                  width: i,
                  height: s
                }),
                fillColor: N(e.contentColor),
                name: "content"
              }],
              showExtensionLines: e.showExtensionLines,
              showRulers: e.showRulers
            };
            e.showInfo && (a.elementInfo = {
              tagName: "#text",
              nodeWidth: i,
              nodeHeight: s
            }), this.overlay.drawHighlight(a)
          }
          drawElement(t) {
            let e = {
              paths: this.getPaths(t),
              showExtensionLines: this.options.showExtensionLines,
              showRulers: this.options.showRulers,
              colorFormat: this.options.colorFormat
            };
            if (this.options.showInfo && (e.elementInfo = this.getElementInfo(t)), this.interceptor) {
              const t = this.interceptor(e);
              t && (e = t)
            }
            this.overlay.drawHighlight(e)
          }
          getPaths(t) {
            const {
              options: e
            } = this, r = window.getComputedStyle(t), {
              left: n,
              top: o,
              width: i,
              height: a
            } = t.getBoundingClientRect(), u = t => s.pxToNum(r.getPropertyValue(t)), c = u("margin-left"), l = u("margin-right"), h = u("margin-top"), p = u("margin-bottom"), d = u("border-left-width"), f = u("border-right-width"), g = u("border-top-width"), m = u("border-bottom-width"), v = u("padding-left"), y = u("padding-right"), b = u("padding-top"), w = u("padding-bottom");
            return [{
              path: this.rectToPath({
                left: n + d + v,
                top: o + g + b,
                width: i - d - v - f - y,
                height: a - g - b - m - w
              }),
              fillColor: N(e.contentColor),
              name: "content"
            }, {
              path: this.rectToPath({
                left: n + d,
                top: o + g,
                width: i - d - f,
                height: a - g - m
              }),
              fillColor: N(e.paddingColor),
              name: "padding"
            }, {
              path: this.rectToPath({
                left: n,
                top: o,
                width: i,
                height: a
              }),
              fillColor: N(e.borderColor),
              name: "border"
            }, {
              path: this.rectToPath({
                left: n - c,
                top: o - h,
                width: i + c + l,
                height: a + h + p
              }),
              fillColor: N(e.marginColor),
              name: "margin"
            }]
          }
          getElementInfo(t) {
            const {
              width: e,
              height: r
            } = t.getBoundingClientRect(), n = t.className.split(/\s+/).map((t => "." + t)).join(""), o = {
              tagName: c.default(t.tagName),
              className: n,
              idValue: t.id,
              nodeWidth: e,
              nodeHeight: r
            };
            return this.options.showStyles && (o.style = this.getStyles(t)), this.options.showAccessibilityInfo && f.default(o, this.getAccessibilityInfo(t)), o
          }
          getStyles(t) {
            const e = window.getComputedStyle(t);
            let r = !1;
            const n = t.childNodes;
            for (let t = 0, e = n.length; t < e; t++) 3 === n[t].nodeType && (r = !0);
            const o = [];
            return r && o.push("color", "font-family", "font-size", "line-height"), o.push("padding", "margin", "background-color"), _(e, o)
          }
          getAccessibilityInfo(t) {
            return {
              showAccessibilityInfo: !0,
              contrast: {
                contrastAlgorithm: "aa",
                textOpacity: .1,
                ..._(window.getComputedStyle(t), ["font-size", "font-weight", "background-color", "text-opacity"], !0)
              },
              isKeyboardFocusable: this.isFocusable(t),
              ...this.getAccessibleNameAndRole(t)
            }
          }
          isFocusable(t) {
            const e = c.default(t.tagName);
            if (m.default(["a", "button", "input", "textarea", "select", "details"], e)) return !0;
            const r = t.getAttribute("tabindex");
            return !!(r && v.default(r) > -1)
          }
          getAccessibleNameAndRole(t) {
            const e = t.getAttribute("labelledby") || t.getAttribute("aria-label");
            let r = t.getAttribute("role");
            const n = c.default(t.tagName);
            return y.default.forEach((e => {
              if (r) return;
              const o = e[0],
                i = e[2];
              if (o === n) {
                if (i)
                  for (const e of i)
                    if (t.getAttribute(e[0]) !== e[1]) return;
                r = e[1]
              }
            })), {
              accessibleName: e || t.getAttribute("title") || "",
              accessibleRole: r || "generic"
            }
          }
          bindEvent() {
            window.addEventListener("resize", this.redraw), window.addEventListener("scroll", this.redraw)
          }
          rectToPath({
            left: t,
            top: e,
            width: r,
            height: n
          }) {
            const o = [];
            return o.push("M", t, e), o.push("L", t + r, e), o.push("L", t + r, e + n), o.push("L", t, e + n), o.push("Z"), o
          }
        }
        e.default = w, t.exports = w, t.exports.default = w;
        const x = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
          E = /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d*(?:\.\d+)?)\)$/;

        function N(t) {
          return b.default(t) ? t : (t = t).a ? `rgba(${t.r}, ${t.g}, ${t.b}, ${t.a})` : `rgb(${t.r}, ${t.g}, ${t.b})`
        }

        function _(t, e, r = !1) {
          const n = {};
          return l.default(e, (e => {
            let o = t["text-opacity" === e ? "color" : e];
            var i;
            o && (i = o, (x.test(i) || E.test(i)) && (o = function (t) {
              const e = h.default.parse(t),
                r = e.val[3] || 1;
              return e.val = e.val.slice(0, 3), e.val.push(Math.round(255 * r)), "#" + d.default(p.default.encode(e.val))
            }(o), "text-opacity" === e && (o = o.slice(7), o = p.default.decode(o)[0] / 255)), r && (e = g.default(e)), n[e] = o)
          })), n
        }
      },
      5473: (t, e) => {
        "use strict";

        function r(t, e) {
          const r = t[3];
          return [(1 - r) * e[0] + r * t[0], (1 - r) * e[1] + r * t[1], (1 - r) * e[2] + r * t[2], r + e[3] * (1 - r)]
        }

        function n([t, e, r]) {
          return .2126 * (t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)) + .7152 * (e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)) + .0722 * (r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4))
        }
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.getContrastThreshold = e.isLargeFont = e.getAPCAThreshold = e.desiredLuminanceAPCA = e.contrastRatioByLuminanceAPCA = e.contrastRatioAPCA = e.luminanceAPCA = e.contrastRatio = e.luminance = e.rgbaToHsla = e.blendColors = void 0, e.blendColors = r, e.rgbaToHsla = function ([t, e, r, n]) {
          const o = Math.max(t, e, r),
            i = Math.min(t, e, r),
            s = o - i,
            a = o + i;
          let u;
          u = i === o ? 0 : t === o ? (1 / 6 * (e - r) / s + 1) % 1 : e === o ? 1 / 6 * (r - t) / s + 1 / 3 : 1 / 6 * (t - e) / s + 2 / 3;
          const c = .5 * a;
          let l;
          return l = 0 === c || 1 === c ? 0 : c <= .5 ? s / a : s / (2 - a), [u, l, c, n]
        }, e.luminance = n, e.contrastRatio = function (t, e) {
          const o = n(r(t, e)),
            i = n(e);
          return (Math.max(o, i) + .05) / (Math.min(o, i) + .05)
        };
        const o = 12.82051282051282,
          i = .06;

        function s([t, e, r]) {
          return .2126729 * Math.pow(t, 2.4) + .7151522 * Math.pow(e, 2.4) + .072175 * Math.pow(r, 2.4)
        }

        function a(t) {
          return t > .03 ? t : t + Math.pow(.03 - t, 1.45)
        }

        function u(t, e) {
          if (t = a(t), e = a(e), Math.abs(t - e) < 5e-4) return 0;
          let r = 0;
          return e >= t ? (r = 1.25 * (Math.pow(e, .55) - Math.pow(t, .58)), r = r < .001 ? 0 : r < .078 ? r - r * o * i : r - i) : (r = 1.25 * (Math.pow(e, .62) - Math.pow(t, .57)), r = r > -.001 ? 0 : r > -.078 ? r - r * o * i : r + i), 100 * r
        }
        e.luminanceAPCA = s, e.contrastRatioAPCA = function (t, e) {
          return u(s(t), s(e))
        }, e.contrastRatioByLuminanceAPCA = u, e.desiredLuminanceAPCA = function (t, e, r) {
          function n() {
            return r ? Math.pow(Math.abs(Math.pow(t, .62) - (-e - i) / 1.25), 1 / .57) : Math.pow(Math.abs(Math.pow(t, .55) - (e + i) / 1.25), 1 / .58)
          }
          t = a(t), e /= 100;
          let o = n();
          return (o < 0 || o > 1) && (r = !r, o = n()), o
        };
        const c = [
          [12, -1, -1, -1, -1, 100, 90, 80, -1, -1],
          [14, -1, -1, -1, 100, 90, 80, 60, 60, -1],
          [16, -1, -1, 100, 90, 80, 60, 55, 50, 50],
          [18, -1, -1, 90, 80, 60, 55, 50, 40, 40],
          [24, -1, 100, 80, 60, 55, 50, 40, 38, 35],
          [30, -1, 90, 70, 55, 50, 40, 38, 35, 40],
          [36, -1, 80, 60, 50, 40, 38, 35, 30, 25],
          [48, 100, 70, 55, 40, 38, 35, 30, 25, 20],
          [60, 90, 60, 50, 38, 35, 30, 25, 20, 20],
          [72, 80, 55, 40, 35, 30, 25, 20, 20, 20],
          [96, 70, 50, 35, 30, 25, 20, 20, 20, 20],
          [120, 60, 40, 30, 25, 20, 20, 20, 20, 20]
        ];

        function l(t, e) {
          const r = 72 * parseFloat(t.replace("px", "")) / 96;
          return -1 !== ["bold", "bolder", "600", "700", "800", "900"].indexOf(e) ? r >= 14 : r >= 18
        }
        c.reverse(), e.getAPCAThreshold = function (t, e) {
          const r = parseFloat(t.replace("px", "")),
            n = parseFloat(e);
          for (const [t, ...e] of c)
            if (r >= t)
              for (const [t, r] of [900, 800, 700, 600, 500, 400, 300, 200, 100].entries())
                if (n >= r) {
                  const r = e[e.length - 1 - t];
                  return -1 === r ? null : r
                } return null
        }, e.isLargeFont = l;
        const h = {
            aa: 3,
            aaa: 4.5
          },
          p = {
            aa: 4.5,
            aaa: 7
          };
        e.getContrastThreshold = function (t, e) {
          return l(t, e) ? h : p
        }
      },
      5370: (t, e) => {
        "use strict";

        function r(t, e, r) {
          const o = n(e, r);
          return o.addEventListener("click", (function (t) {
            t.stopPropagation()
          }), !1), t.appendChild(o), o
        }

        function n(t, e) {
          const r = document.createElement(t);
          if (e) {
            let t = e.split(/\s+/);
            t = t.map((t => "luna-dom-highlighter-" + t)), r.className = t.join(" ")
          }
          return r
        }

        function o(t) {
          document.adoptedStyleSheets = [...document.adoptedStyleSheets, t]
        }
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.adoptStyleSheet = e.constrainNumber = e.ellipsify = e.createElement = e.createTextChild = e.createChild = e.log = e.Overlay = void 0, e.Overlay = class {
          constructor(t, e = []) {
            this.viewportSize = {
              width: 800,
              height: 600
            }, this.deviceScaleFactor = 1, this.emulationScaleFactor = 1, this.pageScaleFactor = 1, this.pageZoomFactor = 1, this.scrollX = 0, this.scrollY = 0, this.canvasWidth = 0, this.canvasHeight = 0, this._installed = !1, this._window = t, this._document = t.document, Array.isArray(e) || (e = [e]), this.style = e
          }
          setCanvas(t) {
            this.canvas = t, this._context = t.getContext("2d")
          }
          install() {
            for (const t of this.style) o(t);
            this._installed = !0
          }
          uninstall() {
            for (const t of this.style) document.adoptedStyleSheets = document.adoptedStyleSheets.filter((e => e !== t));
            this._installed = !1
          }
          reset(t) {
            t && (this.viewportSize = t.viewportSize, this.visualViewportSize = t.visualViewportSize, this.deviceScaleFactor = t.deviceScaleFactor, this.pageScaleFactor = t.pageScaleFactor, this.pageZoomFactor = t.pageZoomFactor, this.emulationScaleFactor = t.emulationScaleFactor, this.scrollX = Math.round(t.scrollX), this.scrollY = Math.round(t.scrollY)), this.resetCanvas()
          }
          resetCanvas() {
            this.canvas && this._context && (this.canvas.width = this.deviceScaleFactor * this.viewportSize.width, this.canvas.height = this.deviceScaleFactor * this.viewportSize.height, this.canvas.style.width = this.viewportSize.width + "px", this.canvas.style.height = this.viewportSize.height + "px", this._context.scale(this.deviceScaleFactor, this.deviceScaleFactor), this.canvasWidth = this.viewportSize.width, this.canvasHeight = this.viewportSize.height)
          }
          setPlatform(t) {
            this.platform = t, this._installed || this.install()
          }
          dispatch(t) {
            this[t.shift()].apply(this, t)
          }
          eventHasCtrlOrMeta(t) {
            return "mac" === this.platform ? t.metaKey && !t.ctrlKey : t.ctrlKey && !t.metaKey
          }
          get context() {
            if (!this._context) throw new Error("Context object is missing");
            return this._context
          }
          get document() {
            if (!this._document) throw new Error("Document object is missing");
            return this._document
          }
          get window() {
            if (!this._window) throw new Error("Window object is missing");
            return this._window
          }
          get installed() {
            return this._installed
          }
        }, e.log = function (t) {
          let e = document.getElementById("log");
          e || (e = r(document.body, "div"), e.id = "log"), r(e, "div").textContent = t
        }, e.createChild = r, e.createTextChild = function (t, e) {
          const r = document.createTextNode(e);
          return t.appendChild(r), r
        }, e.createElement = n, e.ellipsify = function (t, e) {
          return t.length <= e ? String(t) : t.substr(0, e - 1) + "…"
        }, e.constrainNumber = function (t, e, r) {
          return t < e ? t = e : t > r && (t = r), t
        }, e.adoptStyleSheet = o
      },
      7354: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.drawPath = e.formatColor = e.formatRgba = e.parseHexa = e.createPathForQuad = e.hatchFillPath = e.applyMatrixToPoint = e.emptyBounds = e.buildPath = e.fillPathWithBoxStyle = e.drawPathWithLineStyle = void 0;
        const n = r(5473);

        function o(t, e, r) {
          let n = 0;

          function o(o) {
            const i = [];
            for (let s = 0; s < o; ++s) {
              const o = Math.round(t[n++] * r);
              e.maxX = Math.max(e.maxX, o), e.minX = Math.min(e.minX, o);
              const s = Math.round(t[n++] * r);
              e.maxY = Math.max(e.maxY, s), e.minY = Math.min(e.minY, s), e.leftmostXForY[s] = Math.min(e.leftmostXForY[s] || Number.MAX_VALUE, o), e.rightmostXForY[s] = Math.max(e.rightmostXForY[s] || Number.MIN_VALUE, o), e.topmostYForX[o] = Math.min(e.topmostYForX[o] || Number.MAX_VALUE, s), e.bottommostYForX[o] = Math.max(e.bottommostYForX[o] || Number.MIN_VALUE, s), e.allPoints.push({
                x: o,
                y: s
              }), i.push(o, s)
            }
            return i
          }
          const i = t.length,
            s = new Path2D;
          for (; n < i;) switch (t[n++]) {
            case "M":
              s.moveTo.apply(s, o(1));
              break;
            case "L":
              s.lineTo.apply(s, o(1));
              break;
            case "C":
              s.bezierCurveTo.apply(s, o(3));
              break;
            case "Q":
              s.quadraticCurveTo.apply(s, o(2));
              break;
            case "Z":
              s.closePath()
          }
          return s
        }
        e.drawPathWithLineStyle = function (t, e, r, n = 1) {
          r && r.color && (t.save(), t.translate(.5, .5), t.lineWidth = n, "dashed" === r.pattern && t.setLineDash([3, 3]), "dotted" === r.pattern && t.setLineDash([2, 2]), t.strokeStyle = r.color, t.stroke(e), t.restore())
        }, e.fillPathWithBoxStyle = function (t, e, r, n, o) {
          o && (t.save(), o.fillColor && (t.fillStyle = o.fillColor, t.fill(e)), o.hatchColor && a(t, e, r, 10, o.hatchColor, n, !1), t.restore())
        }, e.buildPath = o, e.emptyBounds = function () {
          return {
            minX: Number.MAX_VALUE,
            minY: Number.MAX_VALUE,
            maxX: -Number.MAX_VALUE,
            maxY: -Number.MAX_VALUE,
            leftmostXForY: {},
            rightmostXForY: {},
            topmostYForX: {},
            bottommostYForX: {},
            allPoints: []
          }
        }, e.applyMatrixToPoint = function (t, e) {
          let r = new DOMPoint(t.x, t.y);
          return r = r.matrixTransform(e), {
            x: r.x,
            y: r.y
          }
        };
        let i, s = "";

        function a(t, e, r, n, o, a, u) {
          if ((t.canvas.width < r.maxX - r.minX || t.canvas.height < r.maxY - r.minY) && (r = {
              minX: 0,
              maxX: t.canvas.width,
              minY: 0,
              maxY: t.canvas.height,
              allPoints: []
            }), !i || o !== s) {
            s = o;
            const e = document.createElement("canvas");
            e.width = n, e.height = 8;
            const r = e.getContext("2d");
            r.clearRect(0, 0, e.width, e.height), r.rect(0, 0, 1, 5), r.fillStyle = o, r.fill(), i = t.createPattern(e, "repeat")
          }
          t.save();
          const c = new DOMMatrix;
          i.setTransform(c.scale(u ? -1 : 1, 1).rotate(0, 0, -45 + a)), t.fillStyle = i, t.fill(e), t.restore()
        }

        function u(t) {
          return (t.match(/#(\w\w)(\w\w)(\w\w)(\w\w)/) || []).slice(1).map((t => parseInt(t, 16) / 255))
        }

        function c(t, e) {
          if ("rgb" === e) {
            const [e, r, n, o] = t;
            return `rgb(${(255*e).toFixed()} ${(255*r).toFixed()} ${(255*n).toFixed()}${1===o?"":" / "+Math.round(100*o)/100})`
          }
          if ("hsl" === e) {
            const [e, r, o, i] = n.rgbaToHsla(t);
            return `hsl(${Math.round(360*e)}deg ${Math.round(100*r)} ${Math.round(100*o)}${1===i?"":" / "+Math.round(100*i)/100})`
          }
          throw new Error("NOT_REACHED")
        }
        e.hatchFillPath = a, e.createPathForQuad = function (t, e, r, n) {
          let i = ["M", t.p1.x, t.p1.y, "L", t.p2.x, t.p2.y, "L", t.p3.x, t.p3.y, "L", t.p4.x, t.p4.y];
          for (const r of e) i = [...i, "L", r.p4.x, r.p4.y, "L", r.p3.x, r.p3.y, "L", r.p2.x, r.p2.y, "L", r.p1.x, r.p1.y, "L", r.p4.x, r.p4.y, "L", t.p4.x, t.p4.y];
          return i.push("Z"), o(i, r, n)
        }, e.parseHexa = u, e.formatRgba = c, e.formatColor = function (t, e) {
          return "rgb" === e || "hsl" === e ? c(u(t), e) : t.endsWith("FF") ? t.substr(0, 7) : t
        }, e.drawPath = function (t, e, r, n, i, s, a) {
          t.save();
          const u = o(e, s, a);
          return r && (t.fillStyle = r, t.fill(u)), n && ("dashed" === i && t.setLineDash([3, 3]), "dotted" === i && t.setLineDash([2, 2]), t.lineWidth = 2, t.strokeStyle = n, t.stroke(u)), t.restore(), u
        }
      },
      8171: (t, e, r) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.HighlightOverlay = void 0;
        const n = r(5473),
          o = r(5370),
          i = r(7354);
        class s extends o.Overlay {
          constructor() {
            super(...arguments), this.gridLabelState = {
              gridLayerCounter: 0
            }
          }
          setContainer(t) {
            this._container = t
          }
          setPlatform(t) {
            this.container && this.container.classList.add("luna-dom-highlighter-platform-" + t), super.setPlatform(t)
          }
          get container() {
            return this._container
          }
          reset(t) {
            super.reset(t), this.tooltip.innerHTML = "", this.gridLabelState.gridLayerCounter = 0
          }
          install() {
            const t = this.document.createElement("canvas");
            t.id = "canvas", t.classList.add("luna-dom-highlighter-fill"), this.container.append(t);
            const e = this.document.createElement("div");
            this.container.append(e), this.tooltip = e, this.setCanvas(t), super.install()
          }
          uninstall() {
            this.document.body.classList.remove("fill"), this.document.body.innerHTML = "", super.uninstall()
          }
          drawHighlight(t) {
            this.context.save();
            const e = i.emptyBounds();
            for (let r = t.paths.slice(); r.length;) {
              const t = r.pop();
              t && (this.context.save(), i.drawPath(this.context, t.path, t.fillColor, t.outlineColor, void 0, e, this.emulationScaleFactor), r.length && (this.context.globalCompositeOperation = "destination-out", i.drawPath(this.context, r[r.length - 1].path, "red", void 0, void 0, e, this.emulationScaleFactor)), this.context.restore())
            }
            this.context.restore(), this.context.save();
            const r = Boolean(t.paths.length && t.showRulers && e.minX < 20 && e.maxX + 20 < this.canvasWidth),
              s = Boolean(t.paths.length && t.showRulers && e.minY < 20 && e.maxY + 20 < this.canvasHeight);
            return t.showRulers && this.drawAxis(this.context, r, s), t.paths.length && (t.showExtensionLines && function (t, e, r, n, o, i, s, a) {
              t.save();
              const u = s,
                c = a;
              if (t.strokeStyle = l, t.lineWidth = 1, t.translate(.5, .5), r)
                for (const r in e.rightmostXForY) t.beginPath(), t.moveTo(u, Number(r)), t.lineTo(e.rightmostXForY[r], Number(r)), t.stroke();
              else
                for (const r in e.leftmostXForY) t.beginPath(), t.moveTo(0, Number(r)), t.lineTo(e.leftmostXForY[r], Number(r)), t.stroke();
              if (n)
                for (const r in e.bottommostYForX) t.beginPath(), t.moveTo(Number(r), c), t.lineTo(Number(r), e.topmostYForX[r]), t.stroke();
              else
                for (const r in e.topmostYForX) t.beginPath(), t.moveTo(Number(r), 0), t.lineTo(Number(r), e.topmostYForX[r]), t.stroke();
              t.restore()
            }(this.context, e, r, s, 0, 0, this.canvasWidth, this.canvasHeight), t.elementInfo && function (t, e, r, s, a, u) {
              t.innerHTML = "";
              const c = o.createChild(t, "div"),
                l = o.createChild(c, "div", "tooltip-content"),
                h = function (t, e) {
                  const r = o.createElement("div", "element-info"),
                    s = o.createChild(r, "div", "element-info-header"),
                    a = function (t) {
                      return t.layoutObjectName && t.layoutObjectName.endsWith("Grid") ? "grid" : t.layoutObjectName && "LayoutNGFlexibleBox" === t.layoutObjectName ? "flex" : null
                    }(t);
                  a && o.createChild(s, "div", `element-layout-type ${a}`);
                  const u = o.createChild(s, "div", "element-description");
                  o.createChild(u, "span", "material-tag-name").textContent = t.tagName;
                  const c = o.createChild(u, "span", "material-node-id");
                  c.textContent = t.idValue ? "#" + o.ellipsify(t.idValue, 80) : "", c.classList.toggle("hidden", !t.idValue);
                  const l = o.createChild(u, "span", "material-class-name");
                  c.textContent.length < 80 && (l.textContent = o.ellipsify(t.className || "", 80 - c.textContent.length)), l.classList.toggle("hidden", !t.className);
                  const h = o.createChild(s, "div", "dimensions");
                  o.createChild(h, "span", "material-node-width").textContent = String(Math.round(100 * t.nodeWidth) / 100), o.createTextChild(h, "×"), o.createChild(h, "span", "material-node-height").textContent = String(Math.round(100 * t.nodeHeight) / 100);
                  const p = t.style || {};
                  let d;
                  t.isLockedAncestor && _("Showing content-visibility ancestor", ""), t.isLocked && _("Descendants are skipped due to content-visibility", "");
                  const f = p.color;
                  f && "#00000000" !== f && T("Color", f, e);
                  const g = p["font-family"],
                    m = p["font-size"];
                  g && "0px" !== m && _("Font", `${m} ${g}`);
                  const v = p["background-color"];
                  v && "#00000000" !== v && T("Background", v, e);
                  const y = p.margin;
                  y && "0px" !== y && _("Margin", y);
                  const b = p.padding;
                  b && "0px" !== b && _("Padding", b);
                  const w = t.contrast ? t.contrast.backgroundColor : null,
                    x = f && "#00000000" !== f && w && "#00000000" !== w;

                  function E() {
                    d || (d = o.createChild(r, "div", "element-info-body"))
                  }

                  function N(t, e, r) {
                    E();
                    const n = o.createChild(d, "div", "element-info-row");
                    return e && n.classList.add(e), o.createChild(n, "div", "element-info-name").textContent = t, o.createChild(n, "div", "element-info-gap"), o.createChild(n, "div", r || "")
                  }

                  function _(t, e) {
                    o.createTextChild(N(t, "", "element-info-value-text"), e)
                  }

                  function T(t, e, r) {
                    const n = N(t, "", "element-info-value-color"),
                      s = o.createChild(n, "div", "color-swatch");
                    o.createChild(s, "div", "color-swatch-inner").style.backgroundColor = e, o.createTextChild(n, i.formatColor(e, r))
                  }
                  return t.showAccessibilityInfo && (function (t) {
                    E();
                    const e = o.createChild(d, "div", "element-info-row element-info-section");
                    o.createChild(e, "div", "section-name").textContent = t, o.createChild(o.createChild(e, "div", "separator-container"), "div", "separator")
                  }("Accessibility"), x && p.color && t.contrast && function (t, e) {
                    const r = i.parseHexa(t),
                      s = i.parseHexa(e.backgroundColor);
                    r[3] *= e.textOpacity;
                    const a = N("Contrast", "", "element-info-value-contrast"),
                      u = o.createChild(a, "div", "contrast-text");
                    u.style.color = i.formatRgba(r, "rgb"), u.style.backgroundColor = e.backgroundColor, u.textContent = "Aa";
                    const c = o.createChild(a, "span");
                    if ("apca" === e.contrastAlgorithm) {
                      const t = n.contrastRatioAPCA(r, s),
                        i = n.getAPCAThreshold(e.fontSize, e.fontWeight);
                      c.textContent = String(Math.floor(100 * t) / 100) + "%", o.createChild(a, "div", null === i || Math.abs(t) < i ? "a11y-icon a11y-icon-warning" : "a11y-icon a11y-icon-ok")
                    } else if ("aa" === e.contrastAlgorithm || "aaa" === e.contrastAlgorithm) {
                      const t = n.contrastRatio(r, s),
                        i = n.getContrastThreshold(e.fontSize, e.fontWeight)[e.contrastAlgorithm];
                      c.textContent = String(Math.floor(100 * t) / 100), o.createChild(a, "div", t < i ? "a11y-icon a11y-icon-warning" : "a11y-icon a11y-icon-ok")
                    }
                  }(p.color, t.contrast), _("Name", t.accessibleName), _("Role", t.accessibleRole), function (t, e) {
                    o.createChild(N(t, "", "element-info-value-icon"), "div", e)
                  }("Keyboard-focusable", t.isKeyboardFocusable ? "a11y-icon a11y-icon-ok" : "a11y-icon a11y-icon-not-ok")), r
                }(e, r);
              l.appendChild(h);
              const p = l.offsetWidth,
                d = l.offsetHeight,
                f = 10,
                g = a - 2 - f - 16;
              let m;
              if (s.maxX - s.minX < 36) m = .5 * (s.minX + s.maxX) - 8;
              else {
                const t = s.minX + f,
                  e = s.maxX - f - 16;
                m = t > 12 && t < g ? t : o.constrainNumber(12, t, e)
              }
              const v = m < 12 || m > g;
              let y = m - f;
              y = o.constrainNumber(y, 2, a - p - 2);
              let b = s.minY - 8 - d,
                w = !0;
              b < 0 ? (b = Math.min(u - d, s.maxY + 8), w = !1) : s.minY > u && (b = u - 8 - d);
              const x = y >= s.minX && y + p <= s.maxX && b >= s.minY && b + d <= s.maxY;
              y < s.maxX && y + p > s.minX && b < s.maxY && b + d > s.minY && !x ? l.style.display = "none" : (l.style.top = b + "px", l.style.left = y + "px", l.style.setProperty("--arrow-visibility", v || x ? "hidden" : "visible"), v || (l.style.setProperty("--arrow", w ? "var(--arrow-down)" : "var(--arrow-up)"), l.style.setProperty("--shadow-direction", w ? "var(--shadow-up)" : "var(--shadow-down)"), l.style.setProperty("--arrow-top", (w ? d - 1 : -8) + "px"), l.style.setProperty("--arrow-left", m - y + "px")))
            }(this.tooltip, t.elementInfo, t.colorFormat, e, this.canvasWidth, this.canvasHeight)), this.context.restore(), {
              bounds: e
            }
          }
          drawAxis(t, e, r) {
            t.save();
            const n = this.pageZoomFactor * this.pageScaleFactor * this.emulationScaleFactor,
              o = this.scrollX * this.pageScaleFactor,
              i = this.scrollY * this.pageScaleFactor;

            function s(t) {
              return Math.round(t * n)
            }

            function l(t) {
              return Math.round(t / n)
            }
            const h = this.canvasWidth / n,
              p = this.canvasHeight / n,
              d = 50;
            t.save(), t.fillStyle = c, r ? t.fillRect(0, s(p) - 15, s(h), s(p)) : t.fillRect(0, 0, s(h), 15), t.globalCompositeOperation = "destination-out", t.fillStyle = "red", e ? t.fillRect(s(h) - 15, 0, s(h), s(p)) : t.fillRect(0, 0, 15, s(p)), t.restore(), t.fillStyle = c, e ? t.fillRect(s(h) - 15, 0, s(h), s(p)) : t.fillRect(0, 0, 15, s(p)), t.lineWidth = 1, t.strokeStyle = u, t.fillStyle = u; {
              t.save(), t.translate(-o, .5 - i);
              const n = p + l(i);
              for (let r = 100; r < n; r += 100) t.save(), t.translate(o, s(r)), t.rotate(-Math.PI / 2), t.fillText(String(r), 2, e ? s(h) - 7 : 13), t.restore();
              t.translate(.5, -.5);
              const a = h + l(o);
              for (let e = 100; e < a; e += 100) t.save(), t.fillText(String(e), s(e) + 2, r ? i + s(p) - 7 : i + 13), t.restore();
              t.restore()
            } {
              t.save(), e && (t.translate(s(h), 0), t.scale(-1, 1)), t.translate(-o, .5 - i);
              const r = p + l(i);
              for (let e = d; e < r; e += d) {
                t.beginPath(), t.moveTo(o, s(e));
                const r = e % 100 ? 5 : 8;
                t.lineTo(o + r, s(e)), t.stroke()
              }
              t.strokeStyle = a;
              for (let e = 5; e < r; e += 5) e % d && (t.beginPath(), t.moveTo(o, s(e)), t.lineTo(o + 5, s(e)), t.stroke());
              t.restore()
            } {
              t.save(), r && (t.translate(0, s(p)), t.scale(1, -1)), t.translate(.5 - o, -i);
              const e = h + l(o);
              for (let r = d; r < e; r += d) {
                t.beginPath(), t.moveTo(s(r), i);
                const e = r % 100 ? 5 : 8;
                t.lineTo(s(r), i + e), t.stroke()
              }
              t.strokeStyle = a;
              for (let r = 5; r < e; r += 5) r % d && (t.beginPath(), t.moveTo(s(r), i), t.lineTo(s(r), i + 5), t.stroke());
              t.restore()
            }
            t.restore()
          }
        }
        e.HighlightOverlay = s;
        const a = "rgba(0,0,0,0.2)",
          u = "rgba(0,0,0,0.7)",
          c = "rgba(255, 255, 255, 0.8)",
          l = "rgba(128, 128, 128, 0.3)"
      },
      7789: function (t, e, r) {
        "use strict";
        var n = this && this.__importDefault || function (t) {
          return t && t.__esModule ? t : {
            default: t
          }
        };
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        const o = n(r(1590)),
          i = n(r(8195)),
          s = r(341);
        class a extends o.default {
          constructor(t, {
            compName: e
          }) {
            super(), this.compName = e, this.c = s.classPrefix(e), this.container = t, this.$container = i.default(t), this.$container.addClass(`luna-${e}`)
          }
          destroy() {
            this.$container.rmClass(`luna-${this.compName}`), this.$container.html(""), this.emit("destroy"), this.removeAllListeners()
          }
          find(t) {
            return this.$container.find(this.c(t))
          }
        }
        e.default = a
      },
      341: function (t, e, r) {
        "use strict";
        var n = this && this.__importDefault || function (t) {
          return t && t.__esModule ? t : {
            default: t
          }
        };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.pxToNum = e.executeAfterTransition = e.hasVerticalScrollbar = e.measuredScrollbarWidth = e.eventClient = e.drag = e.classPrefix = void 0;
        const o = n(r(3803)),
          i = n(r(7968)),
          s = n(r(757)),
          a = n(r(3132)),
          u = n(r(1264)),
          c = n(r(390)),
          l = n(r(4320));

        function h(t, e) {
          for (let r = 0, n = t.length; r < n; r++) {
            const n = t[r];
            e(n), n.content && h(n.content, e)
          }
        }
        e.classPrefix = function (t) {
          const e = `luna-${t}-`;

          function r(t) {
            return o.default(i.default(t).split(/\s+/), (t => c.default(t, e) ? t : t.replace(/[\w-]+/, (t => `${e}${t}`)))).join(" ")
          }
          return function (t) {
            if (/<[^>]*>/g.test(t)) try {
              const e = a.default.parse(t);
              return h(e, (t => {
                t.attrs && t.attrs.class && (t.attrs.class = r(t.attrs.class))
              })), a.default.stringify(e)
            } catch (e) {
              return r(t)
            }
            return r(t)
          }
        };
        const p = "ontouchstart" in s.default,
          d = {
            start: "touchstart",
            move: "touchmove",
            end: "touchend"
          },
          f = {
            start: "mousedown",
            move: "mousemove",
            end: "mouseup"
          };
        let g;
        e.drag = function (t) {
          return p ? d[t] : f[t]
        }, e.eventClient = function (t, e) {
          const r = "x" === t ? "clientX" : "clientY";
          return e[r] ? e[r] : e.changedTouches ? e.changedTouches[0][r] : 0
        }, e.measuredScrollbarWidth = function () {
          if (u.default(g)) return g;
          if (!document) return 16;
          const t = document.createElement("div"),
            e = document.createElement("div");
          return t.setAttribute("style", "display: block; width: 100px; height: 100px; overflow: scroll;"), e.setAttribute("style", "height: 200px"), t.appendChild(e), document.body.appendChild(t), g = t.offsetWidth - t.clientWidth, document.body.removeChild(t), g
        }, e.hasVerticalScrollbar = function (t) {
          return t.scrollHeight > t.offsetHeight
        }, e.executeAfterTransition = function (t, e) {
          const r = n => {
            n.target === t && (t.removeEventListener("transitionend", r), e())
          };
          t.addEventListener("transitionend", r)
        }, e.pxToNum = function (t) {
          return l.default(t.replace("px", ""))
        }
      },
      4747: t => {
        t.exports = '.luna-dom-highlighter{position:fixed;left:0;top:0;width:100%;height:100%;z-index:100000;pointer-events:none;font-size:13px}.luna-dom-highlighter-fill{position:absolute;top:0;right:0;bottom:0;left:0}.luna-dom-highlighter-platform-linux{font-family:Roboto,Ubuntu,Arial,sans-serif}.luna-dom-highlighter-platform-mac{color:#303942;font-family:\'.SFNSDisplay-Regular\',\'Helvetica Neue\',\'Lucida Grande\',sans-serif}.luna-dom-highlighter-platform-windows{font-family:\'Segoe UI\',Tahoma,sans-serif}body{--arrow-width:15px;--arrow-height:8px;--shadow-up:5px;--shadow-down:-5px;--shadow-direction:var(--shadow-up);--arrow-down:polygon(0 0, 100% 0, 50% 100%);--arrow-up:polygon(50% 0, 0 100%, 100% 100%)}.luna-dom-highlighter-px{color:gray}#luna-dom-highlighter-element-title{position:absolute;z-index:10}.luna-dom-highlighter-tooltip-content{position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;padding:5px 8px;border:1px solid #fff;border-radius:3px;box-sizing:border-box;min-width:100px;max-width:min(300px,100% - 4px);z-index:2;background-clip:padding-box;will-change:transform;text-rendering:optimizeLegibility;pointer-events:none;filter:drop-shadow(0 2px 4px rgba(0,0,0,.35))}.luna-dom-highlighter-tooltip-content::after{content:\'\';background:#fff;width:var(--arrow-width);height:var(--arrow-height);-webkit-clip-path:var(--arrow);clip-path:var(--arrow);position:absolute;top:var(--arrow-top);left:var(--arrow-left);visibility:var(--arrow-visibility)}.luna-dom-highlighter-element-info-section{margin-top:12px;margin-bottom:6px}.luna-dom-highlighter-section-name{color:#333;font-weight:500;font-size:10px;text-transform:uppercase;letter-spacing:.05em;line-height:12px}.luna-dom-highlighter-element-info{display:flex;flex-direction:column}.luna-dom-highlighter-element-info-header{display:flex;align-items:center}.luna-dom-highlighter-element-info-body{display:flex;flex-direction:column;padding-top:2px;margin-top:2px}.luna-dom-highlighter-element-info-row{display:flex;line-height:19px}.luna-dom-highlighter-separator-container{display:flex;align-items:center;flex:auto;margin-left:7px}.luna-dom-highlighter-separator{border-top:1px solid #ddd;width:100%}.luna-dom-highlighter-element-info-name{flex-shrink:0;color:#666}.luna-dom-highlighter-element-info-gap{flex:auto}.luna-dom-highlighter-element-info-value-color{display:flex;color:#303942;margin-left:10px;align-items:baseline}.luna-dom-highlighter-a11y-icon{width:16px;height:16px;background-repeat:no-repeat;display:inline-block}.luna-dom-highlighter-element-info-value-contrast{display:flex;align-items:center;text-align:right;color:#303942;margin-left:10px}.luna-dom-highlighter-element-info-value-contrast .luna-dom-highlighter-a11y-icon{margin-left:8px}.luna-dom-highlighter-element-info-value-icon{display:flex;align-items:center}.luna-dom-highlighter-element-info-value-text{text-align:right;color:#303942;margin-left:10px;align-items:baseline;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.luna-dom-highlighter-color-swatch{display:flex;margin-right:2px;width:10px;height:10px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);line-height:10px}.luna-dom-highlighter-color-swatch-inner{flex:auto;border:1px solid #808002}.luna-dom-highlighter-element-layout-type{margin-right:10px;width:16px;height:16px}.luna-dom-highlighter-element-layout-type.luna-dom-highlighter-grid{background-image:url(\'data:image/svg+xml,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="2.5" width="4" height="4" stroke="%231A73E8"/><rect x="9.5" y="2.5" width="4" height="4" stroke="%231A73E8"/><rect x="9.5" y="9.5" width="4" height="4" stroke="%231A73E8"/><rect x="2.5" y="9.5" width="4" height="4" stroke="%231A73E8"/></svg>\')}.luna-dom-highlighter-element-layout-type.luna-dom-highlighter-flex{background-image:url(\'data:image/svg+xml,<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 3.5h8v3H1v-3zm-1 0a1 1 0 011-1h8a1 1 0 011 1v3a1 1 0 01-1 1H1a1 1 0 01-1-1v-3zm12 0h3v3h-3v-3zm-1 0a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3zm-7 6H1v3h3v-3zm-3-1a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1H1zm6 4v-3h8v3H7zm-1-3a1 1 0 011-1h8a1 1 0 011 1v3a1 1 0 01-1 1H7a1 1 0 01-1-1v-3z" fill="%231A73E8"/></svg>\')}.luna-dom-highlighter-element-description{flex:1 1;font-weight:700;word-wrap:break-word;word-break:break-all}.luna-dom-highlighter-dimensions{color:#737373;text-align:right;margin-left:10px}.luna-dom-highlighter-material-node-width{margin-right:2px}.luna-dom-highlighter-material-node-height{margin-left:2px}.luna-dom-highlighter-material-tag-name{color:#881280}.luna-dom-highlighter-material-class-name,.luna-dom-highlighter-material-node-id{color:#1a1aa6}.luna-dom-highlighter-contrast-text{width:16px;height:16px;text-align:center;line-height:16px;margin-right:8px;border:1px solid #000;padding:0 1px}.luna-dom-highlighter-a11y-icon-not-ok{background-image:url(\'data:image/svg+xml,<svg fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="m9 1.5c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5-3.36-7.5-7.5-7.5zm0 13.5c-3.315 0-6-2.685-6-6 0-1.3875.4725-2.6625 1.2675-3.675l8.4075 8.4075c-1.0125.795-2.2875 1.2675-3.675 1.2675zm4.7325-2.325-8.4075-8.4075c1.0125-.795 2.2875-1.2675 3.675-1.2675 3.315 0 6 2.685 6 6 0 1.3875-.4725 2.6625-1.2675 3.675z" fill="%239e9e9e"/></svg>\')}.luna-dom-highlighter-a11y-icon-warning{background-image:url(\'data:image/svg+xml,<svg fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="m8.25 11.25h1.5v1.5h-1.5zm0-6h1.5v4.5h-1.5zm.7425-3.75c-4.14 0-7.4925 3.36-7.4925 7.5s3.3525 7.5 7.4925 7.5c4.1475 0 7.5075-3.36 7.5075-7.5s-3.36-7.5-7.5075-7.5zm.0075 13.5c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" fill="%23e37400"/></svg>\')}.luna-dom-highlighter-a11y-icon-ok{background-image:url(\'data:image/svg+xml,<svg fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="m9 1.5c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5-3.36-7.5-7.5-7.5zm0 13.5c-3.3075 0-6-2.6925-6-6s2.6925-6 6-6 6 2.6925 6 6-2.6925 6-6 6zm-1.5-4.35-1.95-1.95-1.05 1.05 3 3 6-6-1.05-1.05z" fill="%230ca40c"/></svg>\')}@media (forced-colors:active){:root,body{background-color:transparent;forced-color-adjust:none}.luna-dom-highlighter-tooltip-content{border-color:Highlight;background-color:canvas;color:text;forced-color-adjust:none}.luna-dom-highlighter-tooltip-content::after{background-color:Highlight}.luna-dom-highlighter-color-swatch-inner,.luna-dom-highlighter-contrast-text,.luna-dom-highlighter-separator{border-color:Highlight}.luna-dom-highlighter-section-name{color:Highlight}.luna-dom-highlighter-dimensions,.luna-dom-highlighter-element-info-name,.luna-dom-highlighter-element-info-value-color,.luna-dom-highlighter-element-info-value-contrast,.luna-dom-highlighter-element-info-value-icon,.luna-dom-highlighter-element-info-value-text,.luna-dom-highlighter-material-class-name,.luna-dom-highlighter-material-node-id,.luna-dom-highlighter-material-tag-name{color:canvastext}}\n\n/*# sourceMappingURL=luna-dom-highlighter.css.map*/'
      }
    },
    e = {};

  function r(n) {
    var o = e[n];
    if (void 0 !== o) return o.exports;
    var i = e[n] = {
      exports: {}
    };
    return t[n].call(i.exports, i, i.exports, r), i.exports
  }
  r.g = function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (t) {
      if ("object" == typeof window) return window
    }
  }(), (() => {
    const t = r(1695),
      e = r(3102);
    t.connect(), t.receive((t => {
      e.exec(t)
    }))
  })()
})();
var WARemoteDebugVersion = "2021.7.21 10:18";
(() => {
  var t = {
      954: t => {
        function e(t, e, r, n, o, i, s) {
          try {
            var a = t[i](s),
              u = a.value
          } catch (t) {
            return void r(t)
          }
          a.done ? e(u) : Promise.resolve(u).then(n, o)
        }
        t.exports = function (t) {
          return function () {
            var r = this,
              n = arguments;
            return new Promise((function (o, i) {
              var s = t.apply(r, n);

              function a(t) {
                e(s, o, i, a, u, "next", t)
              }

              function u(t) {
                e(s, o, i, a, u, "throw", t)
              }
              a(void 0)
            }))
          }
        }, t.exports.default = t.exports, t.exports.__esModule = !0
      },
      220: (t, e, r) => {
        var n = r(834);
        t.exports = function (t, e) {
          if (null == t) return {};
          var r, o, i = n(t, e);
          if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(t);
            for (o = 0; o < s.length; o++) r = s[o], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
          }
          return i
        }, t.exports.default = t.exports, t.exports.__esModule = !0
      },
      834: t => {
        t.exports = function (t, e) {
          if (null == t) return {};
          var r, n, o = {},
            i = Object.keys(t);
          for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
          return o
        }, t.exports.default = t.exports, t.exports.__esModule = !0
      },
      601: (t, e, r) => {
        var n = r(479),
          o = r(535),
          i = r(673),
          s = Object.getOwnPropertyNames,
          a = Object.getOwnPropertySymbols;
        e = function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = e.prototype,
            u = void 0 === r || r,
            c = e.unenumerable,
            l = void 0 !== c && c,
            h = e.symbol,
            p = void 0 !== h && h,
            d = [];
          if ((l || p) && s) {
            var f = n;
            l && s && (f = s);
            do {
              d = d.concat(f(t)), p && a && (d = d.concat(a(t)))
            } while (u && (t = o(t)) && t !== Object.prototype);
            d = i(d)
          } else if (u)
            for (var g in t) d.push(g);
          else d = n(t);
          return d
        }, t.exports = e
      },
      69: (t, e, r) => {
        var n = r(589),
          o = r(463);
        e = function (t, e) {
          if (o(t)) return t;
          if (e && n(e, t)) return [t];
          var r = [];
          return t.replace(i, (function (t, e, n, o) {
            r.push(n ? o.replace(s, "$1") : e || t)
          })), r
        };
        var i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          s = /\\(\\)?/g;
        t.exports = e
      },
      31: (t, e, r) => {
        var n = r(768),
          o = r(304);
        e = function (t, e) {
          return function (r) {
            return o(arguments, (function (i, s) {
              if (0 !== s) {
                var a = t(i);
                o(a, (function (t) {
                  e && !n(r[t]) || (r[t] = i[t])
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
          i = r(749);
        e = function (t, e, r) {
          var s, a;
          if (e = i(e, r), n(t))
            for (s = 0, a = t.length; s < a; s++) e(t[s], s, t);
          else {
            var u = o(t);
            for (s = 0, a = u.length; s < a; s++) e(t[u[s]], u[s], t)
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
          var i = [];
          return e = n(e, r), o(t, (function (t, r, n) {
            e(t, r, n) && i.push(t)
          })), i
        }, t.exports = e
      },
      535: (t, e, r) => {
        var n = r(765),
          o = r(18),
          i = Object.getPrototypeOf,
          s = {}.constructor;
        e = function (t) {
          if (n(t)) {
            if (i) return i(t);
            var e = t.__proto__;
            return e || null === e ? e : o(t.constructor) ? t.constructor.prototype : t instanceof s ? s.prototype : void 0
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
          i = Math.pow(2, 53) - 1;
        e = function (t) {
          if (!t) return !1;
          var e = t.length;
          return n(e) && e >= 0 && e <= i && !o(t)
        }, t.exports = e
      },
      272: (t, e) => {
        e = "object" == typeof window && "object" == typeof document && 9 === document.nodeType, t.exports = e
      },
      349: (t, e, r) => {
        var n = r(82),
          o = r(463),
          i = r(38),
          s = r(483),
          a = r(479);
        e = function (t) {
          return null == t || (n(t) && (o(t) || i(t) || s(t)) ? 0 === t.length : 0 === a(t).length)
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
          for (var i = 0; i < o; i++) {
            var s = r[i];
            if (e[s] !== t[s] || !(s in t)) return !1
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
          for (var n, o, i = 0, s = t.length, a = e.length, u = !0; u && i < s;)
            for (u = !1, n = -1, o = t.charAt(i); ++n < a;)
              if (o === e[n]) {
                u = !0, i++;
                break
              } return i >= s ? "" : t.substr(i, s)
        }, t.exports = e
      },
      803: (t, e, r) => {
        var n = r(261),
          o = r(479),
          i = r(82);
        e = function (t, e, r) {
          e = n(e, r);
          for (var s = !i(t) && o(t), a = (s || t).length, u = Array(a), c = 0; c < a; c++) {
            var l = s ? s[c] : c;
            u[c] = e(t[l], l, t)
          }
          return u
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
              return function (r, n, o, i) {
                return t.call(e, r, n, o, i)
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
          i = r(51),
          s;
        e = function (t) {
          for (var e = new Uint8Array(t), r = 0; r < t; r++) e[r] = n(0, 255);
          return e
        }, o ? (s = window.crypto || window.msCrypto, s && (e = function (t) {
          var e = new Uint8Array(t);
          return s.getRandomValues(e), e
        })) : i && (s = eval("require")("crypto"), e = function (t) {
          return s.randomBytes(t)
        }), t.exports = e
      },
      367: (t, e) => {
        var r = /\s+$/;
        e = function (t, e) {
          if (null == e) return t.replace(r, "");
          for (var n, o, i = t.length - 1, s = e.length, a = !0; a && i >= 0;)
            for (a = !1, n = -1, o = t.charAt(i); ++n < s;)
              if (o === e[n]) {
                a = !0, i--;
                break
              } return i >= 0 ? t.substring(0, i + 1) : ""
        }, t.exports = e
      },
      261: (t, e, r) => {
        var n = r(18),
          o = r(765),
          i = r(463),
          s = r(749),
          a = r(705),
          u = r(496),
          c = r(85);
        e = function (t, e, r) {
          return null == t ? u : n(t) ? s(t, e, r) : o(t) && !i(t) ? a(t) : c(t)
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
          i = r(496),
          s = r(803),
          a = "[\\x20\\t\\r\\n\\f]",
          u = "(?:\\\\[\\da-fA-F]{1,6}".concat(a, "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+"),
          c = "\\[".concat(a, "*(").concat(u, ")(?:").concat(a, "*([*^$|!~]?=)").concat(a, "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(").concat(u, "))|)").concat(a, "*\\]"),
          l = "::?(".concat(u, ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|").concat(c, ")*)|.*)\\)|)"),
          h = new RegExp("^".concat(a, "*,").concat(a, "*")),
          p = new RegExp("^".concat(a, "*([>+~]|").concat(a, ")").concat(a, "*")),
          d = {
            id: {
              reg: new RegExp("^#(".concat(u, ")")),
              value: function (t) {
                return t.slice(1)
              },
              toStr: function (t) {
                return "#".concat(t)
              }
            },
            class: {
              reg: new RegExp("^\\.(".concat(u, ")")), value: function (t) {
                return t.slice(1)
              }, toStr: function (t) {
                return ".".concat(t)
              }
            },
            tag: {
              reg: new RegExp("^(".concat(u, "|[*])")),
              value: i
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
              value: i
            }
          };
        o(d, (function (t) {
          t.value || (t.value = i), t.toStr || (t.toStr = i)
        })), e = {
          parse: function (t) {
            t = n(t);
            for (var e, r, i, s = []; t && (i && !(r = h.exec(t)) || (r && (t = t.slice(r[0].length)), e = [], s.push(e)), i = !1, (r = p.exec(t)) && (i = r.shift(), t = t.slice(i.length), (i = n(i)) || (i = " "), e.push({
                value: i,
                type: "combinator"
              })), o(d, (function (o, s) {
                var a = o.reg,
                  u = o.value;
                (r = a.exec(t)) && (i = r.shift(), t = t.slice(i.length), i = n(i), e.push({
                  value: u(i),
                  type: s
                }))
              })), i););
            return s
          },
          stringify: function (t) {
            return s(t, (function (t) {
              return (t = s(t, (function (t) {
                var e = t.type,
                  r = t.value;
                return "combinator" === e ? " " === r ? r : " ".concat(r, " ") : d[e].toStr(r)
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
          i = r(463),
          s = r(38);
        e = function (t) {
          return t ? i(t) ? t : n(t) && !s(t) ? o(t) : [t] : []
        }, t.exports = e
      },
      968: (t, e, r) => {
        var n = r(443),
          o = r(367),
          i = /^\s+|\s+$/g;
        e = function (t, e) {
          return null == e ? t.replace(i, "") : n(o(t, e), e)
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
        for (var o = [], i = 0; i < 256; i++) o[i] = (i + 256).toString(16).substr(1);
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
          return new Promise((function (t, i) {
            var s = n(),
              a = function () {
                o().then((function (o) {
                  var u = n() - s;
                  o ? t(o) : e && u >= e ? i(Error("Wait timed out after ".concat(e, " ms"))) : setTimeout(a, r)
                }), i)
              };
            a()
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
          var i = function (t, e) {
              return e.join(t)
            },
            s = function (t, e, r) {
              return t + r + e
            },
            a = Array.prototype.concat;

          function u(t, e) {
            for (var r = Object(t), n = 1; n < arguments.length; n++) {
              var o = arguments[n];
              if (null != o)
                for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i])
            }
            return r
          }

          function c() {
            this.init()
          }

          function l(t) {
            this.expression = t
          }

          function h(t, e, r) {
            e in t || (t[e] = r)
          }

          function p() {}

          function d(t) {
            arguments.length > 0 && this.init(t)
          }

          function f(t) {
            arguments.length > 0 && this.init(t)
          }

          function g(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function m(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function v(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function y(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function b(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function w(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function x(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function E(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function N(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function _(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function T(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function A(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function S(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function C(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function O(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function M(t, e, r) {
            arguments.length > 0 && this.init(t, e, r)
          }

          function I(t) {
            for (; t && t.parentNode;) t = t.parentNode;
            return t
          }

          function D(t, e, r) {
            return M.applyPredicates(t.predicates, e, M.applyStep(t, e, r))
          }

          function R(t, e, r) {
            return function (t) {
              for (var e = [], r = 0; r < t.length; r += 32767) {
                var n = t.slice(r, r + 32767);
                e = a.apply(e, n)
              }
              return e
            }(n(D.bind(null, r, t), e))
          }

          function L(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function P(t, e, r) {
            arguments.length > 0 && this.init(t, e, r)
          }

          function F(t, e) {
            arguments.length > 0 && this.init(t, e)
          }

          function k(t) {
            arguments.length > 0 && this.init(t)
          }

          function B(t, e) {
            arguments.length > 0 && this.init(t, e)
          }
          c.prototype = new Object, c.prototype.constructor = c, c.superclass = Object.prototype, c.prototype.init = function () {
            this.reduceActions = [], this.reduceActions[3] = function (t) {
              return new m(t[0], t[2])
            }, this.reduceActions[5] = function (t) {
              return new v(t[0], t[2])
            }, this.reduceActions[7] = function (t) {
              return new y(t[0], t[2])
            }, this.reduceActions[8] = function (t) {
              return new b(t[0], t[2])
            }, this.reduceActions[10] = function (t) {
              return new w(t[0], t[2])
            }, this.reduceActions[11] = function (t) {
              return new x(t[0], t[2])
            }, this.reduceActions[12] = function (t) {
              return new E(t[0], t[2])
            }, this.reduceActions[13] = function (t) {
              return new N(t[0], t[2])
            }, this.reduceActions[15] = function (t) {
              return new _(t[0], t[2])
            }, this.reduceActions[16] = function (t) {
              return new T(t[0], t[2])
            }, this.reduceActions[18] = function (t) {
              return new A(t[0], t[2])
            }, this.reduceActions[19] = function (t) {
              return new S(t[0], t[2])
            }, this.reduceActions[20] = function (t) {
              return new C(t[0], t[2])
            }, this.reduceActions[22] = function (t) {
              return new f(t[1])
            }, this.reduceActions[24] = function (t) {
              return new O(t[0], t[2])
            }, this.reduceActions[25] = function (t) {
              return new M(void 0, void 0, t[0])
            }, this.reduceActions[27] = function (t) {
              return t[0].locationPath = t[2], t[0]
            }, this.reduceActions[28] = function (t) {
              return t[0].locationPath = t[2], t[0].locationPath.steps.unshift(new P(P.DESCENDANTORSELF, F.nodeTest, [])), t[0]
            }, this.reduceActions[29] = function (t) {
              return new M(t[0], [], void 0)
            }, this.reduceActions[30] = function (t) {
              return J.instance_of(t[0], M) ? (null == t[0].filterPredicates && (t[0].filterPredicates = []), t[0].filterPredicates.push(t[1]), t[0]) : new M(t[0], [t[1]], void 0)
            }, this.reduceActions[32] = function (t) {
              return t[1]
            }, this.reduceActions[33] = function (t) {
              return new V(t[0])
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
              return new L(!0, [])
            }, this.reduceActions[44] = function (t) {
              return t[1].absolute = !0, t[1]
            }, this.reduceActions[46] = function (t) {
              return new L(!1, [t[0]])
            }, this.reduceActions[47] = function (t) {
              return t[0].steps.push(t[2]), t[0]
            }, this.reduceActions[49] = function (t) {
              return new P(t[0], t[1], [])
            }, this.reduceActions[50] = function (t) {
              return new P(P.CHILD, t[0], [])
            }, this.reduceActions[51] = function (t) {
              return new P(t[0], t[1], t[2])
            }, this.reduceActions[52] = function (t) {
              return new P(P.CHILD, t[0], t[1])
            }, this.reduceActions[54] = function (t) {
              return [t[0]]
            }, this.reduceActions[55] = function (t) {
              return t[1].unshift(t[0]), t[1]
            }, this.reduceActions[56] = function (t) {
              return "ancestor" == t[0] ? P.ANCESTOR : "ancestor-or-self" == t[0] ? P.ANCESTORORSELF : "attribute" == t[0] ? P.ATTRIBUTE : "child" == t[0] ? P.CHILD : "descendant" == t[0] ? P.DESCENDANT : "descendant-or-self" == t[0] ? P.DESCENDANTORSELF : "following" == t[0] ? P.FOLLOWING : "following-sibling" == t[0] ? P.FOLLOWINGSIBLING : "namespace" == t[0] ? P.NAMESPACE : "parent" == t[0] ? P.PARENT : "preceding" == t[0] ? P.PRECEDING : "preceding-sibling" == t[0] ? P.PRECEDINGSIBLING : "self" == t[0] ? P.SELF : -1
            }, this.reduceActions[57] = function (t) {
              return P.ATTRIBUTE
            }, this.reduceActions[59] = function (t) {
              return "comment" == t[0] ? F.commentTest : "text" == t[0] ? F.textTest : "processing-instruction" == t[0] ? F.anyPiTest : "node" == t[0] ? F.nodeTest : new F(-1, void 0)
            }, this.reduceActions[60] = function (t) {
              return new F.PITest(t[2])
            }, this.reduceActions[61] = function (t) {
              return t[1]
            }, this.reduceActions[63] = function (t) {
              return t[1].absolute = !0, t[1].steps.unshift(new P(P.DESCENDANTORSELF, F.nodeTest, [])), t[1]
            }, this.reduceActions[64] = function (t) {
              return t[0].steps.push(new P(P.DESCENDANTORSELF, F.nodeTest, [])), t[0].steps.push(t[2]), t[0]
            }, this.reduceActions[65] = function (t) {
              return new P(P.SELF, F.nodeTest, [])
            }, this.reduceActions[66] = function (t) {
              return new P(P.PARENT, F.nodeTest, [])
            }, this.reduceActions[67] = function (t) {
              return new k(t[1])
            }, this.reduceActions[68] = function (t) {
              return F.nameTestAny
            }, this.reduceActions[69] = function (t) {
              return new F.NameTestPrefixAny(t[0].split(":")[0])
            }, this.reduceActions[70] = function (t) {
              return new F.NameTestQName(t[0])
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
            for (var e = [], r = [], n = t + "\0", o = 0, i = n.charAt(o++);;) {
              for (;
                " " == i || "\t" == i || "\r" == i || "\n" == i;) i = n.charAt(o++);
              if ("\0" == i || o >= n.length) break;
              if ("(" != i)
                if (")" != i)
                  if ("[" != i)
                    if ("]" != i)
                      if ("@" != i)
                        if ("," != i)
                          if ("|" != i)
                            if ("+" != i)
                              if ("-" != i)
                                if ("=" != i)
                                  if ("$" != i)
                                    if ("." != i)
                                      if ("'" != i && '"' != i)
                                        if (i >= "0" && i <= "9") {
                                          h = i;
                                          for (i = n.charAt(o++); i >= "0" && i <= "9";) h += i, i = n.charAt(o++);
                                          if ("." == i && n.charAt(o) >= "0" && n.charAt(o) <= "9")
                                            for (h += i, h += n.charAt(o++), i = n.charAt(o++); i >= "0" && i <= "9";) h += i, i = n.charAt(o++);
                                          e.push(c.NUMBER), r.push(h)
                                        } else if ("*" != i)
                if (":" != i || ":" != n.charAt(o))
                  if ("/" != i)
                    if ("!" != i || "=" != n.charAt(o))
                      if ("<" != i)
                        if (">" != i) {
                          if ("_" != i && !J.isLetter(i.charCodeAt(0))) throw new Error("Unexpected character " + i);
                          var s = i;
                          for (i = n.charAt(o++); J.isNCNameChar(i.charCodeAt(0));) s += i, i = n.charAt(o++);
                          if (e.length > 0 && (a = e[e.length - 1]) != c.AT && a != c.DOUBLECOLON && a != c.LEFTPARENTHESIS && a != c.LEFTBRACKET && a != c.AND && a != c.OR && a != c.MOD && a != c.DIV && a != c.MULTIPLYOPERATOR && a != c.SLASH && a != c.DOUBLESLASH && a != c.BAR && a != c.PLUS && a != c.MINUS && a != c.EQUALS && a != c.NOTEQUAL && a != c.LESSTHAN && a != c.LESSTHANOREQUAL && a != c.GREATERTHAN && a != c.GREATERTHANOREQUAL) {
                            if ("and" == s) {
                              e.push(c.AND), r.push(s);
                              continue
                            }
                            if ("or" == s) {
                              e.push(c.OR), r.push(s);
                              continue
                            }
                            if ("mod" == s) {
                              e.push(c.MOD), r.push(s);
                              continue
                            }
                            if ("div" == s) {
                              e.push(c.DIV), r.push(s);
                              continue
                            }
                          }
                          if (":" == i) {
                            if ("*" == n.charAt(o)) {
                              e.push(c.NCNAMECOLONASTERISK), r.push(s + ":*"), o++, i = n.charAt(o++);
                              continue
                            }
                            if ("_" == n.charAt(o) || J.isLetter(n.charCodeAt(o))) {
                              for (s += ":", i = n.charAt(o++); J.isNCNameChar(i.charCodeAt(0));) s += i, i = n.charAt(o++);
                              if ("(" == i) {
                                e.push(c.FUNCTIONNAME), r.push(s);
                                continue
                              }
                              e.push(c.QNAME), r.push(s);
                              continue
                            }
                            if (":" == n.charAt(o)) {
                              e.push(c.AXISNAME), r.push(s);
                              continue
                            }
                          }
                          if ("(" == i) {
                            if ("comment" == s || "text" == s || "node" == s) {
                              e.push(c.NODETYPE), r.push(s);
                              continue
                            }
                            if ("processing-instruction" == s) {
                              ")" == n.charAt(o) ? e.push(c.NODETYPE) : e.push(c.PROCESSINGINSTRUCTIONWITHLITERAL), r.push(s);
                              continue
                            }
                            e.push(c.FUNCTIONNAME), r.push(s);
                            continue
                          }
                          e.push(c.QNAME), r.push(s)
                        } else {
                          if ("=" == n.charAt(o)) {
                            e.push(c.GREATERTHANOREQUAL), r.push(">="), o++, i = n.charAt(o++);
                            continue
                          }
                          e.push(c.GREATERTHAN), r.push(">"), i = n.charAt(o++)
                        }
              else {
                if ("=" == n.charAt(o)) {
                  e.push(c.LESSTHANOREQUAL), r.push("<="), o++, i = n.charAt(o++);
                  continue
                }
                e.push(c.LESSTHAN), r.push("<"), i = n.charAt(o++)
              } else e.push(c.NOTEQUAL), r.push("!="), o++, i = n.charAt(o++);
              else {
                if ("/" == (i = n.charAt(o++))) {
                  e.push(c.DOUBLESLASH), r.push("//"), i = n.charAt(o++);
                  continue
                }
                e.push(c.SLASH), r.push("/")
              } else e.push(c.DOUBLECOLON), r.push("::"), o++, i = n.charAt(o++);
              else {
                var a;
                if (e.length > 0 && (a = e[e.length - 1]) != c.AT && a != c.DOUBLECOLON && a != c.LEFTPARENTHESIS && a != c.LEFTBRACKET && a != c.AND && a != c.OR && a != c.MOD && a != c.DIV && a != c.MULTIPLYOPERATOR && a != c.SLASH && a != c.DOUBLESLASH && a != c.BAR && a != c.PLUS && a != c.MINUS && a != c.EQUALS && a != c.NOTEQUAL && a != c.LESSTHAN && a != c.LESSTHANOREQUAL && a != c.GREATERTHAN && a != c.GREATERTHANOREQUAL) {
                  e.push(c.MULTIPLYOPERATOR), r.push(i), i = n.charAt(o++);
                  continue
                }
                e.push(c.ASTERISKNAMETEST), r.push(i), i = n.charAt(o++)
              } else {
                for (var u = i, l = ""; o < n.length && (i = n.charAt(o)) !== u;) l += i, o += 1;
                if (i !== u) throw K.fromMessage("Unterminated string literal: " + u + l);
                o += 1, e.push(c.LITERAL), r.push(l), i = n.charAt(o++)
              } else {
                if ("." == (i = n.charAt(o++))) {
                  e.push(c.DOUBLEDOT), r.push(".."), i = n.charAt(o++);
                  continue
                }
                if (i >= "0" && i <= "9") {
                  var h = "." + i;
                  for (i = n.charAt(o++); i >= "0" && i <= "9";) h += i, i = n.charAt(o++);
                  e.push(c.NUMBER), r.push(h);
                  continue
                }
                e.push(c.DOT), r.push(".")
              } else e.push(c.DOLLAR), r.push(i), i = n.charAt(o++);
              else e.push(c.EQUALS), r.push(i), i = n.charAt(o++);
              else e.push(c.MINUS), r.push(i), i = n.charAt(o++);
              else e.push(c.PLUS), r.push(i), i = n.charAt(o++);
              else e.push(c.BAR), r.push(i), i = n.charAt(o++);
              else e.push(c.COMMA), r.push(i), i = n.charAt(o++);
              else e.push(c.AT), r.push(i), i = n.charAt(o++);
              else e.push(c.RIGHTBRACKET), r.push(i), i = n.charAt(o++);
              else e.push(c.LEFTBRACKET), r.push(i), i = n.charAt(o++);
              else e.push(c.RIGHTPARENTHESIS), r.push(i), i = n.charAt(o++);
              else e.push(c.LEFTPARENTHESIS), r.push(i), i = n.charAt(o++)
            }
            return e.push(1), r.push("[EOF]"), [e, r]
          }, c.SHIFT = "s", c.REDUCE = "r", c.ACCEPT = "a", c.prototype.parse = function (t) {
            var e, r, n = this.tokenize(t);
            if (null != n) {
              e = n[0], r = n[1];
              var o, i, s = 0,
                a = [],
                u = [],
                h = [];
              for (a.push(0), u.push(1), h.push("_S"), o = e[s], i = r[s++];;) switch (t = a[a.length - 1], c.actionTable[t].charAt(o - 1)) {
                case c.SHIFT:
                  u.push(-o), h.push(i), a.push(c.actionTableNumber[t].charCodeAt(o - 1) - 32), o = e[s], i = r[s++];
                  break;
                case c.REDUCE:
                  for (var p = c.productions[c.actionTableNumber[t].charCodeAt(o - 1) - 32][1], d = [], f = 0; f < p; f++) u.pop(), d.unshift(h.pop()), a.pop();
                  var g = a[a.length - 1];
                  u.push(c.productions[c.actionTableNumber[t].charCodeAt(o - 1) - 32][0]), null == this.reduceActions[c.actionTableNumber[t].charCodeAt(o - 1) - 32] ? h.push(d[0]) : h.push(this.reduceActions[c.actionTableNumber[t].charCodeAt(o - 1) - 32](d)), a.push(c.gotoTable[g].charCodeAt(c.productions[c.actionTableNumber[t].charCodeAt(o - 1) - 32][0] - 2) - 33);
                  break;
                case c.ACCEPT:
                  return new l(h.pop());
                default:
                  throw new Error("XPath parse error")
              }
            }
          }, l.prototype = new Object, l.prototype.constructor = l, l.superclass = Object.prototype, l.prototype.toString = function () {
            return this.expression.toString()
          }, l.prototype.evaluate = function (t) {
            return t.contextNode = t.expressionContextNode, t.contextSize = 1, t.contextPosition = 1, t.isHtml && (h(t, "caseInsensitive", !0), h(t, "allowAnyNamespaceForNoPrefix", !0)), h(t, "caseInsensitive", !1), this.expression.evaluate(t)
          }, l.XML_NAMESPACE_URI = "http://www.w3.org/XML/1998/namespace", l.XMLNS_NAMESPACE_URI = "http://www.w3.org/2000/xmlns/", p.prototype = new Object, p.prototype.constructor = p, p.superclass = Object.prototype, p.prototype.init = function () {}, p.prototype.toString = function () {
            return "<Expression>"
          }, p.prototype.evaluate = function (t) {
            throw new Error("Could not evaluate expression.")
          }, d.prototype = new p, d.prototype.constructor = d, d.superclass = p.prototype, d.prototype.init = function (t) {
            this.rhs = t
          }, f.prototype = new d, f.prototype.constructor = f, f.superclass = d.prototype, f.prototype.init = function (t) {
            f.superclass.init.call(this, t)
          }, f.prototype.evaluate = function (t) {
            return this.rhs.evaluate(t).number().negate()
          }, f.prototype.toString = function () {
            return "-" + this.rhs.toString()
          }, g.prototype = new p, g.prototype.constructor = g, g.superclass = p.prototype, g.prototype.init = function (t, e) {
            this.lhs = t, this.rhs = e
          }, m.prototype = new g, m.prototype.constructor = m, m.superclass = g.prototype, m.prototype.init = function (t, e) {
            m.superclass.init.call(this, t, e)
          }, m.prototype.toString = function () {
            return "(" + this.lhs.toString() + " or " + this.rhs.toString() + ")"
          }, m.prototype.evaluate = function (t) {
            var e = this.lhs.evaluate(t).bool();
            return e.booleanValue() ? e : this.rhs.evaluate(t).bool()
          }, v.prototype = new g, v.prototype.constructor = v, v.superclass = g.prototype, v.prototype.init = function (t, e) {
            v.superclass.init.call(this, t, e)
          }, v.prototype.toString = function () {
            return "(" + this.lhs.toString() + " and " + this.rhs.toString() + ")"
          }, v.prototype.evaluate = function (t) {
            var e = this.lhs.evaluate(t).bool();
            return e.booleanValue() ? this.rhs.evaluate(t).bool() : e
          }, y.prototype = new g, y.prototype.constructor = y, y.superclass = g.prototype, y.prototype.init = function (t, e) {
            y.superclass.init.call(this, t, e)
          }, y.prototype.toString = function () {
            return "(" + this.lhs.toString() + " = " + this.rhs.toString() + ")"
          }, y.prototype.evaluate = function (t) {
            return this.lhs.evaluate(t).equals(this.rhs.evaluate(t))
          }, b.prototype = new g, b.prototype.constructor = b, b.superclass = g.prototype, b.prototype.init = function (t, e) {
            b.superclass.init.call(this, t, e)
          }, b.prototype.toString = function () {
            return "(" + this.lhs.toString() + " != " + this.rhs.toString() + ")"
          }, b.prototype.evaluate = function (t) {
            return this.lhs.evaluate(t).notequal(this.rhs.evaluate(t))
          }, w.prototype = new g, w.prototype.constructor = w, w.superclass = g.prototype, w.prototype.init = function (t, e) {
            w.superclass.init.call(this, t, e)
          }, w.prototype.evaluate = function (t) {
            return this.lhs.evaluate(t).lessthan(this.rhs.evaluate(t))
          }, w.prototype.toString = function () {
            return "(" + this.lhs.toString() + " < " + this.rhs.toString() + ")"
          }, x.prototype = new g, x.prototype.constructor = x, x.superclass = g.prototype, x.prototype.init = function (t, e) {
            x.superclass.init.call(this, t, e)
          }, x.prototype.evaluate = function (t) {
            return this.lhs.evaluate(t).greaterthan(this.rhs.evaluate(t))
          }, x.prototype.toString = function () {
            return "(" + this.lhs.toString() + " > " + this.rhs.toString() + ")"
          }, E.prototype = new g, E.prototype.constructor = E, E.superclass = g.prototype, E.prototype.init = function (t, e) {
            E.superclass.init.call(this, t, e)
          }, E.prototype.evaluate = function (t) {
            return this.lhs.evaluate(t).lessthanorequal(this.rhs.evaluate(t))
          }, E.prototype.toString = function () {
            return "(" + this.lhs.toString() + " <= " + this.rhs.toString() + ")"
          }, N.prototype = new g, N.prototype.constructor = N, N.superclass = g.prototype, N.prototype.init = function (t, e) {
            N.superclass.init.call(this, t, e)
          }, N.prototype.evaluate = function (t) {
            return this.lhs.evaluate(t).greaterthanorequal(this.rhs.evaluate(t))
          }, N.prototype.toString = function () {
            return "(" + this.lhs.toString() + " >= " + this.rhs.toString() + ")"
          }, _.prototype = new g, _.prototype.constructor = _, _.superclass = g.prototype, _.prototype.init = function (t, e) {
            _.superclass.init.call(this, t, e)
          }, _.prototype.evaluate = function (t) {
            return this.lhs.evaluate(t).number().plus(this.rhs.evaluate(t).number())
          }, _.prototype.toString = function () {
            return "(" + this.lhs.toString() + " + " + this.rhs.toString() + ")"
          }, T.prototype = new g, T.prototype.constructor = T, T.superclass = g.prototype, T.prototype.init = function (t, e) {
            T.superclass.init.call(this, t, e)
          }, T.prototype.evaluate = function (t) {
            return this.lhs.evaluate(t).number().minus(this.rhs.evaluate(t).number())
          }, T.prototype.toString = function () {
            return "(" + this.lhs.toString() + " - " + this.rhs.toString() + ")"
          }, A.prototype = new g, A.prototype.constructor = A, A.superclass = g.prototype, A.prototype.init = function (t, e) {
            A.superclass.init.call(this, t, e)
          }, A.prototype.evaluate = function (t) {
            return this.lhs.evaluate(t).number().multiply(this.rhs.evaluate(t).number())
          }, A.prototype.toString = function () {
            return "(" + this.lhs.toString() + " * " + this.rhs.toString() + ")"
          }, S.prototype = new g, S.prototype.constructor = S, S.superclass = g.prototype, S.prototype.init = function (t, e) {
            S.superclass.init.call(this, t, e)
          }, S.prototype.evaluate = function (t) {
            return this.lhs.evaluate(t).number().div(this.rhs.evaluate(t).number())
          }, S.prototype.toString = function () {
            return "(" + this.lhs.toString() + " div " + this.rhs.toString() + ")"
          }, C.prototype = new g, C.prototype.constructor = C, C.superclass = g.prototype, C.prototype.init = function (t, e) {
            C.superclass.init.call(this, t, e)
          }, C.prototype.evaluate = function (t) {
            return this.lhs.evaluate(t).number().mod(this.rhs.evaluate(t).number())
          }, C.prototype.toString = function () {
            return "(" + this.lhs.toString() + " mod " + this.rhs.toString() + ")"
          }, O.prototype = new g, O.prototype.constructor = O, O.superclass = g.prototype, O.prototype.init = function (t, e) {
            O.superclass.init.call(this, t, e)
          }, O.prototype.evaluate = function (t) {
            return this.lhs.evaluate(t).nodeset().union(this.rhs.evaluate(t).nodeset())
          }, O.prototype.toString = function () {
            return n(o, [this.lhs, this.rhs]).join(" | ")
          }, M.prototype = new p, M.prototype.constructor = M, M.superclass = p.prototype, M.prototype.init = function (t, e, r) {
            M.superclass.init.call(this), this.filter = t, this.filterPredicates = e, this.locationPath = r
          }, M.applyPredicates = function (t, n, o) {
            if (0 === t.length) return o;
            var i = n.extend({});
            return r((function (t, r) {
              return i.contextSize = t.length, n = function (t, e) {
                return i.contextNode = t, i.contextPosition = e + 1, M.predicateMatches(r, i)
              }, o = [], e((function (t, e) {
                n(t, e) && o.push(t)
              }), t), o;
              var n, o
            }), o, t)
          }, M.getRoot = function (t, e) {
            var r = e[0];
            if (9 === r.nodeType) return r;
            if (t.virtualRoot) return t.virtualRoot;
            var n = r.ownerDocument;
            if (n) return n;
            for (var o = r; null != o.parentNode;) o = o.parentNode;
            return o
          }, M.applyStep = function (t, e, r) {
            var n = [];
            switch (e.contextNode = r, t.axis) {
              case P.ANCESTOR:
                if (e.contextNode === e.virtualRoot) break;
                for (o = 2 == e.contextNode.nodeType ? M.getOwnerElement(e.contextNode) : e.contextNode.parentNode; null != o && (t.nodeTest.matches(o, e) && n.push(o), o !== e.virtualRoot);) o = o.parentNode;
                break;
              case P.ANCESTORORSELF:
                for (var o = e.contextNode; null != o && (t.nodeTest.matches(o, e) && n.push(o), o !== e.virtualRoot); o = 2 == o.nodeType ? M.getOwnerElement(o) : o.parentNode);
                break;
              case P.ATTRIBUTE:
                var i = e.contextNode.attributes;
                if (null != i)
                  for (var s = 0; s < i.length; s++) {
                    o = i.item(s);
                    t.nodeTest.matches(o, e) && n.push(o)
                  }
                break;
              case P.CHILD:
                for (o = e.contextNode.firstChild; null != o; o = o.nextSibling) t.nodeTest.matches(o, e) && n.push(o);
                break;
              case P.DESCENDANT:
                for (var a = [e.contextNode.firstChild]; a.length > 0;)
                  for (o = a.pop(); null != o;) t.nodeTest.matches(o, e) && n.push(o), null != o.firstChild ? (a.push(o.nextSibling), o = o.firstChild) : o = o.nextSibling;
                break;
              case P.DESCENDANTORSELF:
                t.nodeTest.matches(e.contextNode, e) && n.push(e.contextNode);
                for (a = [e.contextNode.firstChild]; a.length > 0;)
                  for (o = a.pop(); null != o;) t.nodeTest.matches(o, e) && n.push(o), null != o.firstChild ? (a.push(o.nextSibling), o = o.firstChild) : o = o.nextSibling;
                break;
              case P.FOLLOWING:
                if (e.contextNode === e.virtualRoot) break;
                a = [];
                null != e.contextNode.firstChild ? a.unshift(e.contextNode.firstChild) : a.unshift(e.contextNode.nextSibling);
                for (o = e.contextNode.parentNode; null != o && 9 != o.nodeType && o !== e.virtualRoot; o = o.parentNode) a.unshift(o.nextSibling);
                do {
                  for (o = a.pop(); null != o;) t.nodeTest.matches(o, e) && n.push(o), null != o.firstChild ? (a.push(o.nextSibling), o = o.firstChild) : o = o.nextSibling
                } while (a.length > 0);
                break;
              case P.FOLLOWINGSIBLING:
                if (e.contextNode === e.virtualRoot) break;
                for (o = e.contextNode.nextSibling; null != o; o = o.nextSibling) t.nodeTest.matches(o, e) && n.push(o);
                break;
              case P.NAMESPACE:
                var u = {};
                if (1 == e.contextNode.nodeType) {
                  u.xml = l.XML_NAMESPACE_URI, u.xmlns = l.XMLNS_NAMESPACE_URI;
                  for (o = e.contextNode; null != o && 1 == o.nodeType; o = o.parentNode)
                    for (s = 0; s < o.attributes.length; s++) {
                      var c = o.attributes.item(s),
                        h = String(c.name);
                      if ("xmlns" == h) null == u[""] && (u[""] = c.value);
                      else if (h.length > 6 && "xmlns:" == h.substring(0, 6)) {
                        null == u[p = h.substring(6, h.length)] && (u[p] = c.value)
                      }
                    }
                  for (var p in u) {
                    var d = new Y(p, u[p], e.contextNode);
                    t.nodeTest.matches(d, e) && n.push(d)
                  }
                }
                break;
              case P.PARENT:
                o = null, e.contextNode !== e.virtualRoot && (o = 2 == e.contextNode.nodeType ? M.getOwnerElement(e.contextNode) : e.contextNode.parentNode), null != o && t.nodeTest.matches(o, e) && n.push(o);
                break;
              case P.PRECEDING:
                a = null != e.virtualRoot ? [e.virtualRoot] : [I(e.contextNode)];
                t: for (; a.length > 0;)
                  for (o = a.pop(); null != o;) {
                    if (o == e.contextNode) break t;
                    t.nodeTest.matches(o, e) && n.unshift(o), null != o.firstChild ? (a.push(o.nextSibling), o = o.firstChild) : o = o.nextSibling
                  }
                break;
              case P.PRECEDINGSIBLING:
                if (e.contextNode === e.virtualRoot) break;
                for (o = e.contextNode.previousSibling; null != o; o = o.previousSibling) t.nodeTest.matches(o, e) && n.push(o);
                break;
              case P.SELF:
                t.nodeTest.matches(e.contextNode, e) && n.push(e.contextNode)
            }
            return n
          }, M.applySteps = function (t, e, n) {
            return r(R.bind(null, e), n, t)
          }, M.prototype.applyFilter = function (t, e) {
            if (!this.filter) return {
              nodes: [t.contextNode]
            };
            var r = this.filter.evaluate(t);
            if (!J.instance_of(r, z)) {
              if (null != this.filterPredicates && this.filterPredicates.length > 0 || null != this.locationPath) throw new Error("Path expression filter must evaluate to a nodeset if predicates or location path are used");
              return {
                nonNodes: r
              }
            }
            return {
              nodes: M.applyPredicates(this.filterPredicates || [], e, r.toUnsortedArray())
            }
          }, M.applyLocationPath = function (t, e, r) {
            if (!t) return r;
            var n = t.absolute ? [M.getRoot(e, r)] : r;
            return M.applySteps(t.steps, e, n)
          }, M.prototype.evaluate = function (t) {
            var e = u(new $, t),
              r = this.applyFilter(t, e);
            if ("nonNodes" in r) return r.nonNodes;
            var n = new z;
            return n.addArray(M.applyLocationPath(this.locationPath, e, r.nodes)), n
          }, M.predicateMatches = function (t, e) {
            var r = t.evaluate(e);
            return J.instance_of(r, j) ? e.contextPosition === r.numberValue() : r.booleanValue()
          }, M.predicateString = function (t) {
            return s("[", "]", t.toString())
          }, M.predicatesString = function (t) {
            return i("", n(M.predicateString, t))
          }, M.prototype.toString = function () {
            if (null != this.filter) {
              var t = o(this.filter);
              return J.instance_of(this.filter, V) ? s("'", "'", t) : null != this.filterPredicates && this.filterPredicates.length ? s("(", ")", t) + M.predicatesString(this.filterPredicates) : null != this.locationPath ? t + (this.locationPath.absolute ? "" : "/") + o(this.locationPath) : t
            }
            return o(this.locationPath)
          }, M.getOwnerElement = function (t) {
            if (t.ownerElement) return t.ownerElement;
            try {
              if (t.selectSingleNode) return t.selectSingleNode("..")
            } catch (t) {}
            for (var e = (9 == t.nodeType ? t : t.ownerDocument).getElementsByTagName("*"), r = 0; r < e.length; r++)
              for (var n = e.item(r), o = n.attributes, i = 0; i < o.length; i++) {
                if (o.item(i) === t) return n
              }
            return null
          }, L.prototype = new Object, L.prototype.constructor = L, L.superclass = Object.prototype, L.prototype.init = function (t, e) {
            this.absolute = t, this.steps = e
          }, L.prototype.toString = function () {
            return (this.absolute ? "/" : "") + n(o, this.steps).join("/")
          }, P.prototype = new Object, P.prototype.constructor = P, P.superclass = Object.prototype, P.prototype.init = function (t, e, r) {
            this.axis = t, this.nodeTest = e, this.predicates = r
          }, P.prototype.toString = function () {
            return P.STEPNAMES[this.axis] + "::" + this.nodeTest.toString() + M.predicatesString(this.predicates)
          }, P.ANCESTOR = 0, P.ANCESTORORSELF = 1, P.ATTRIBUTE = 2, P.CHILD = 3, P.DESCENDANT = 4, P.DESCENDANTORSELF = 5, P.FOLLOWING = 6, P.FOLLOWINGSIBLING = 7, P.NAMESPACE = 8, P.PARENT = 9, P.PRECEDING = 10, P.PRECEDINGSIBLING = 11, P.SELF = 12, P.STEPNAMES = r((function (t, e) {
            return t[e[0]] = e[1], t
          }), {}, [
            [P.ANCESTOR, "ancestor"],
            [P.ANCESTORORSELF, "ancestor-or-self"],
            [P.ATTRIBUTE, "attribute"],
            [P.CHILD, "child"],
            [P.DESCENDANT, "descendant"],
            [P.DESCENDANTORSELF, "descendant-or-self"],
            [P.FOLLOWING, "following"],
            [P.FOLLOWINGSIBLING, "following-sibling"],
            [P.NAMESPACE, "namespace"],
            [P.PARENT, "parent"],
            [P.PRECEDING, "preceding"],
            [P.PRECEDINGSIBLING, "preceding-sibling"],
            [P.SELF, "self"]
          ]), F.prototype = new Object, F.prototype.constructor = F, F.superclass = Object.prototype, F.prototype.init = function (t, e) {
            this.type = t, this.value = e
          }, F.prototype.toString = function () {
            return "<unknown nodetest type>"
          }, F.prototype.matches = function (t, e) {
            console.warn("unknown node test type")
          }, F.NAMETESTANY = 0, F.NAMETESTPREFIXANY = 1, F.NAMETESTQNAME = 2, F.COMMENT = 3, F.TEXT = 4, F.PI = 5, F.NODE = 6, F.isNodeType = function (t) {
            return function (e) {
              return function (t, e) {
                for (var r = 0; r < t.length; r += 1)
                  if (t[r] === e) return !0;
                return !1
              }(t, e.nodeType)
            }
          }, F.makeNodeTestType = function (t, e, r) {
            var n = r || function () {};
            return n.prototype = new F(t), n.prototype.constructor = n, u(n.prototype, e), n
          }, F.makeNodeTypeTest = function (t, e, r) {
            return new(F.makeNodeTestType(t, {
              matches: F.isNodeType(e),
              toString: (n = r, function () {
                return n
              })
            }));
            var n
          }, F.hasPrefix = function (t) {
            return t.prefix || -1 !== (t.nodeName || t.tagName).indexOf(":")
          }, F.isElementOrAttribute = F.isNodeType([1, 2]), F.nameSpaceMatches = function (t, e, r) {
            var n = r.namespaceURI || "";
            if (!t) return !n || e.allowAnyNamespaceForNoPrefix && !F.hasPrefix(r);
            var o = e.namespaceResolver.getNamespace(t, e.expressionContextNode);
            if (null == o) throw new Error("Cannot resolve QName " + t);
            return o === n
          }, F.localNameMatches = function (t, e, r) {
            var n = r.localName || r.nodeName;
            return e.caseInsensitive ? t.toLowerCase() === n.toLowerCase() : t === n
          }, F.NameTestPrefixAny = F.makeNodeTestType(F.NAMETESTPREFIXANY, {
            matches: function (t, e) {
              return F.isElementOrAttribute(t) && F.nameSpaceMatches(this.prefix, e, t)
            },
            toString: function () {
              return this.prefix + ":*"
            }
          }, (function (t) {
            this.prefix = t
          })), F.NameTestQName = F.makeNodeTestType(F.NAMETESTQNAME, {
            matches: function (t, e) {
              return F.isNodeType([1, 2, Y.XPATH_NAMESPACE_NODE])(t) && F.nameSpaceMatches(this.prefix, e, t) && F.localNameMatches(this.localName, e, t)
            },
            toString: function () {
              return this.name
            }
          }, (function (t) {
            var e = t.split(":");
            this.name = t, this.prefix = e.length > 1 ? e[0] : null, this.localName = e[e.length > 1 ? 1 : 0]
          })), F.PITest = F.makeNodeTestType(F.PI, {
            matches: function (t, e) {
              return F.isNodeType([7])(t) && (t.target || t.nodeName) === this.name
            },
            toString: function () {
              return s('processing-instruction("', '")', this.name)
            }
          }, (function (t) {
            this.name = t
          })), F.nameTestAny = F.makeNodeTypeTest(F.NAMETESTANY, [1, 2, Y.XPATH_NAMESPACE_NODE], "*"), F.textTest = F.makeNodeTypeTest(F.TEXT, [3, 4], "text()"), F.commentTest = F.makeNodeTypeTest(F.COMMENT, [8], "comment()"), F.nodeTest = F.makeNodeTypeTest(F.NODE, [1, 2, 3, 4, 7, 8, 9], "node()"), F.anyPiTest = F.makeNodeTypeTest(F.PI, [7], "processing-instruction()"), k.prototype = new p, k.prototype.constructor = k, k.superclass = p.prototype, k.prototype.init = function (t) {
            this.variable = t
          }, k.prototype.toString = function () {
            return "$" + this.variable
          }, k.prototype.evaluate = function (t) {
            var e = J.resolveQName(this.variable, t.namespaceResolver, t.contextNode, !1);
            if (null == e[0]) throw new Error("Cannot resolve QName " + fn);
            var r = t.variableResolver.getVariable(e[1], e[0]);
            if (!r) throw K.fromMessage("Undeclared variable: " + this.toString());
            return r
          }, B.prototype = new p, B.prototype.constructor = B, B.superclass = p.prototype, B.prototype.init = function (t, e) {
            this.functionName = t, this.arguments = e
          }, B.prototype.toString = function () {
            for (var t = this.functionName + "(", e = 0; e < this.arguments.length; e++) e > 0 && (t += ", "), t += this.arguments[e].toString();
            return t + ")"
          }, B.prototype.evaluate = function (t) {
            var e = q.getFunctionFromContext(this.functionName, t);
            if (!e) throw new Error("Unknown function " + this.functionName);
            var r = [t].concat(this.arguments);
            return e.apply(t.functionResolver.thisArg, r)
          };
          var H = new Object;

          function V(t) {
            arguments.length > 0 && this.init(t)
          }

          function j(t) {
            arguments.length > 0 && this.init(t)
          }

          function U(t) {
            arguments.length > 0 && this.init(t)
          }

          function W(t) {
            this.init(t)
          }

          function z() {
            this.init()
          }

          function Y(t, e, r) {
            this.isXPathNamespace = !0, this.ownerDocument = r.ownerDocument, this.nodeName = "#namespace", this.prefix = t, this.localName = t, this.namespaceURI = e, this.nodeValue = e, this.ownerElement = r, this.nodeType = Y.XPATH_NAMESPACE_NODE
          }

          function $(t, e, r) {
            this.variableResolver = null != t ? t : new X, this.namespaceResolver = null != e ? e : new G, this.functionResolver = null != r ? r : new q
          }

          function X() {}

          function q(t) {
            this.thisArg = null != t ? t : Q, this.functions = new Object, this.addStandardFunctions()
          }

          function G() {}
          H.equals = function (t, e) {
            return t.equals(e)
          }, H.notequal = function (t, e) {
            return t.notequal(e)
          }, H.lessthan = function (t, e) {
            return t.lessthan(e)
          }, H.greaterthan = function (t, e) {
            return t.greaterthan(e)
          }, H.lessthanorequal = function (t, e) {
            return t.lessthanorequal(e)
          }, H.greaterthanorequal = function (t, e) {
            return t.greaterthanorequal(e)
          }, V.prototype = new p, V.prototype.constructor = V, V.superclass = p.prototype, V.prototype.init = function (t) {
            this.str = String(t)
          }, V.prototype.toString = function () {
            return this.str
          }, V.prototype.evaluate = function (t) {
            return this
          }, V.prototype.string = function () {
            return this
          }, V.prototype.number = function () {
            return new j(this.str)
          }, V.prototype.bool = function () {
            return new U(this.str)
          }, V.prototype.nodeset = function () {
            throw new Error("Cannot convert string to nodeset")
          }, V.prototype.stringValue = function () {
            return this.str
          }, V.prototype.numberValue = function () {
            return this.number().numberValue()
          }, V.prototype.booleanValue = function () {
            return this.bool().booleanValue()
          }, V.prototype.equals = function (t) {
            return J.instance_of(t, U) ? this.bool().equals(t) : J.instance_of(t, j) ? this.number().equals(t) : J.instance_of(t, z) ? t.compareWithString(this, H.equals) : new U(this.str == t.str)
          }, V.prototype.notequal = function (t) {
            return J.instance_of(t, U) ? this.bool().notequal(t) : J.instance_of(t, j) ? this.number().notequal(t) : J.instance_of(t, z) ? t.compareWithString(this, H.notequal) : new U(this.str != t.str)
          }, V.prototype.lessthan = function (t) {
            return this.number().lessthan(t)
          }, V.prototype.greaterthan = function (t) {
            return this.number().greaterthan(t)
          }, V.prototype.lessthanorequal = function (t) {
            return this.number().lessthanorequal(t)
          }, V.prototype.greaterthanorequal = function (t) {
            return this.number().greaterthanorequal(t)
          }, j.prototype = new p, j.prototype.constructor = j, j.superclass = p.prototype, j.prototype.init = function (t) {
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
            return new V(this.toString())
          }, j.prototype.number = function () {
            return this
          }, j.prototype.bool = function () {
            return new U(this.num)
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
            return J.instance_of(t, U) ? this.bool().equals(t) : J.instance_of(t, V) ? this.equals(t.number()) : J.instance_of(t, z) ? t.compareWithNumber(this, H.equals) : new U(this.num == t.num)
          }, j.prototype.notequal = function (t) {
            return J.instance_of(t, U) ? this.bool().notequal(t) : J.instance_of(t, V) ? this.notequal(t.number()) : J.instance_of(t, z) ? t.compareWithNumber(this, H.notequal) : new U(this.num != t.num)
          }, j.prototype.lessthan = function (t) {
            return J.instance_of(t, z) ? t.compareWithNumber(this, H.greaterthan) : J.instance_of(t, U) || J.instance_of(t, V) ? this.lessthan(t.number()) : new U(this.num < t.num)
          }, j.prototype.greaterthan = function (t) {
            return J.instance_of(t, z) ? t.compareWithNumber(this, H.lessthan) : J.instance_of(t, U) || J.instance_of(t, V) ? this.greaterthan(t.number()) : new U(this.num > t.num)
          }, j.prototype.lessthanorequal = function (t) {
            return J.instance_of(t, z) ? t.compareWithNumber(this, H.greaterthanorequal) : J.instance_of(t, U) || J.instance_of(t, V) ? this.lessthanorequal(t.number()) : new U(this.num <= t.num)
          }, j.prototype.greaterthanorequal = function (t) {
            return J.instance_of(t, z) ? t.compareWithNumber(this, H.lessthanorequal) : J.instance_of(t, U) || J.instance_of(t, V) ? this.greaterthanorequal(t.number()) : new U(this.num >= t.num)
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
          }, U.prototype = new p, U.prototype.constructor = U, U.superclass = p.prototype, U.prototype.init = function (t) {
            this.b = Boolean(t)
          }, U.prototype.toString = function () {
            return this.b.toString()
          }, U.prototype.evaluate = function (t) {
            return this
          }, U.prototype.string = function () {
            return new V(this.b)
          }, U.prototype.number = function () {
            return new j(this.b)
          }, U.prototype.bool = function () {
            return this
          }, U.prototype.nodeset = function () {
            throw new Error("Cannot convert boolean to nodeset")
          }, U.prototype.stringValue = function () {
            return this.string().stringValue()
          }, U.prototype.numberValue = function () {
            return this.number().numberValue()
          }, U.prototype.booleanValue = function () {
            return this.b
          }, U.prototype.not = function () {
            return new U(!this.b)
          }, U.prototype.equals = function (t) {
            return J.instance_of(t, V) || J.instance_of(t, j) ? this.equals(t.bool()) : J.instance_of(t, z) ? t.compareWithBoolean(this, H.equals) : new U(this.b == t.b)
          }, U.prototype.notequal = function (t) {
            return J.instance_of(t, V) || J.instance_of(t, j) ? this.notequal(t.bool()) : J.instance_of(t, z) ? t.compareWithBoolean(this, H.notequal) : new U(this.b != t.b)
          }, U.prototype.lessthan = function (t) {
            return this.number().lessthan(t)
          }, U.prototype.greaterthan = function (t) {
            return this.number().greaterthan(t)
          }, U.prototype.lessthanorequal = function (t) {
            return this.number().lessthanorequal(t)
          }, U.prototype.greaterthanorequal = function (t) {
            return this.number().greaterthanorequal(t)
          }, U.true_ = new U(!0), U.false_ = new U(!1), W.prototype = new Object, W.prototype.constructor = W, W.superclass = Object.prototype, W.prototype.init = function (t) {
            this.left = null, this.right = null, this.node = t, this.depth = 1
          }, W.prototype.balance = function () {
            var t = null == this.left ? 0 : this.left.depth,
              e = null == this.right ? 0 : this.right.depth;
            if (t > e + 1)(null == this.left.left ? 0 : this.left.left.depth) < (null == this.left.right ? 0 : this.left.right.depth) && this.left.rotateRR(), this.rotateLL();
            else if (t + 1 < e) {
              var r = null == this.right.right ? 0 : this.right.right.depth;
              (null == this.right.left ? 0 : this.right.left.depth) > r && this.right.rotateLL(), this.rotateRR()
            }
          }, W.prototype.rotateLL = function () {
            var t = this.node,
              e = this.right;
            this.node = this.left.node, this.right = this.left, this.left = this.left.left, this.right.left = this.right.right, this.right.right = e, this.right.node = t, this.right.updateInNewLocation(), this.updateInNewLocation()
          }, W.prototype.rotateRR = function () {
            var t = this.node,
              e = this.left;
            this.node = this.right.node, this.left = this.right, this.right = this.right.right, this.left.right = this.left.left, this.left.left = e, this.left.node = t, this.left.updateInNewLocation(), this.updateInNewLocation()
          }, W.prototype.updateInNewLocation = function () {
            this.getDepthFromChildren()
          }, W.prototype.getDepthFromChildren = function () {
            this.depth = null == this.node ? 0 : 1, null != this.left && (this.depth = this.left.depth + 1), null != this.right && this.depth <= this.right.depth && (this.depth = this.right.depth + 1)
          }, W.prototype.add = function (t) {
            if (t === this.node) return !1;
            var e = function (t, e) {
                if (t === e) return 0;
                if (t.compareDocumentPosition) {
                  var r = t.compareDocumentPosition(e);
                  return 1 & r || 10 & r ? 1 : 20 & r ? -1 : 0
                }
                for (var n = 0, o = 0, i = t; null != i; i = i.parentNode || i.ownerElement) n++;
                for (var s = e; null != s; s = s.parentNode || s.ownerElement) o++;
                if (n > o) {
                  for (; n > o;) t = t.parentNode || t.ownerElement, n--;
                  if (t === e) return 1
                } else if (o > n) {
                  for (; o > n;) e = e.parentNode || e.ownerElement, o--;
                  if (t === e) return -1
                }
                for (var a = t.parentNode || t.ownerElement, u = e.parentNode || e.ownerElement; a !== u;) e = u, a = (t = a).parentNode || t.ownerElement, u = e.parentNode || e.ownerElement;
                var c = J.isAttribute(t),
                  l = J.isAttribute(e);
                if (c && !l) return -1;
                if (!c && l) return 1;
                if (a)
                  for (var h = c ? a.attributes : a.childNodes, p = h.length, d = 0; d < p; d += 1) {
                    var f = h[d];
                    if (f === t) return -1;
                    if (f === e) return 1
                  }
                throw new Error("Unexpected: could not determine node order")
              }(t, this.node),
              r = !1;
            return -1 == e ? null == this.left ? (this.left = new W(t), r = !0) : (r = this.left.add(t)) && this.balance() : 1 == e && (null == this.right ? (this.right = new W(t), r = !0) : (r = this.right.add(t)) && this.balance()), r && this.getDepthFromChildren(), r
          }, z.prototype = new p, z.prototype.constructor = z, z.superclass = p.prototype, z.prototype.init = function () {
            this.tree = null, this.nodes = [], this.size = 0
          }, z.prototype.toString = function () {
            var t = this.first();
            return null == t ? "" : this.stringForNode(t)
          }, z.prototype.evaluate = function (t) {
            return this
          }, z.prototype.string = function () {
            return new V(this.toString())
          }, z.prototype.stringValue = function () {
            return this.toString()
          }, z.prototype.number = function () {
            return new j(this.string())
          }, z.prototype.numberValue = function () {
            return Number(this.string())
          }, z.prototype.bool = function () {
            return new U(this.booleanValue())
          }, z.prototype.booleanValue = function () {
            return !!this.size
          }, z.prototype.nodeset = function () {
            return this
          }, z.prototype.stringForNode = function (t) {
            return 9 == t.nodeType || 1 == t.nodeType || 11 === t.nodeType ? this.stringForContainerNode(t) : 2 === t.nodeType ? t.value || t.nodeValue : t.isNamespaceNode ? t.namespace : t.nodeValue
          }, z.prototype.stringForContainerNode = function (t) {
            for (var e = "", r = t.firstChild; null != r; r = r.nextSibling) {
              var n = r.nodeType;
              1 !== n && 3 !== n && 4 !== n && 9 !== n && 11 !== n || (e += this.stringForNode(r))
            }
            return e
          }, z.prototype.buildTree = function () {
            if (!this.tree && this.nodes.length) {
              this.tree = new W(this.nodes[0]);
              for (var t = 1; t < this.nodes.length; t += 1) this.tree.add(this.nodes[t])
            }
            return this.tree
          }, z.prototype.first = function () {
            var t = this.buildTree();
            if (null == t) return null;
            for (; null != t.left;) t = t.left;
            return t.node
          }, z.prototype.add = function (t) {
            for (var e = 0; e < this.nodes.length; e += 1)
              if (t === this.nodes[e]) return;
            this.tree = null, this.nodes.push(t), this.size += 1
          }, z.prototype.addArray = function (t) {
            var r = this;
            e((function (t) {
              r.add(t)
            }), t)
          }, z.prototype.toArray = function () {
            var t = [];
            return this.toArrayRec(this.buildTree(), t), t
          }, z.prototype.toArrayRec = function (t, e) {
            null != t && (this.toArrayRec(t.left, e), e.push(t.node), this.toArrayRec(t.right, e))
          }, z.prototype.toUnsortedArray = function () {
            return this.nodes.slice()
          }, z.prototype.compareWithString = function (t, e) {
            for (var r = this.toUnsortedArray(), n = 0; n < r.length; n++) {
              var o = r[n],
                i = e(new V(this.stringForNode(o)), t);
              if (i.booleanValue()) return i
            }
            return new U(!1)
          }, z.prototype.compareWithNumber = function (t, e) {
            for (var r = this.toUnsortedArray(), n = 0; n < r.length; n++) {
              var o = r[n],
                i = e(new j(this.stringForNode(o)), t);
              if (i.booleanValue()) return i
            }
            return new U(!1)
          }, z.prototype.compareWithBoolean = function (t, e) {
            return e(this.bool(), t)
          }, z.prototype.compareWithNodeSet = function (t, e) {
            for (var r = this.toUnsortedArray(), n = function (t, r) {
                return e(r, t)
              }, o = 0; o < r.length; o++) {
              var i = new V(this.stringForNode(r[o])),
                s = t.compareWithString(i, n);
              if (s.booleanValue()) return s
            }
            return new U(!1)
          }, z.compareWith = function (t) {
            var e = Array.prototype.slice,
              r = t.length,
              n = function (t, r) {
                return function () {
                  return r.apply(this, t.concat(e.call(arguments)))
                }
              },
              o = function () {
                var i = e.call(arguments);
                return i.length < r ? n(i, o) : t.apply(this, e.apply(arguments, [0, r]))
              };
            return o
          }((function (t, e) {
            return J.instance_of(e, V) ? this.compareWithString(e, t) : J.instance_of(e, j) ? this.compareWithNumber(e, t) : J.instance_of(e, U) ? this.compareWithBoolean(e, t) : this.compareWithNodeSet(e, t)
          })), z.prototype.equals = z.compareWith(H.equals), z.prototype.notequal = z.compareWith(H.notequal), z.prototype.lessthan = z.compareWith(H.lessthan), z.prototype.greaterthan = z.compareWith(H.greaterthan), z.prototype.lessthanorequal = z.compareWith(H.lessthanorequal), z.prototype.greaterthanorequal = z.compareWith(H.greaterthanorequal), z.prototype.union = function (t) {
            var e = new z;
            return e.addArray(this.toUnsortedArray()), e.addArray(t.toUnsortedArray()), e
          }, Y.prototype = new Object, Y.prototype.constructor = Y, Y.superclass = Object.prototype, Y.prototype.toString = function () {
            return '{ "' + this.prefix + '", "' + this.namespaceURI + '" }'
          }, $.prototype = new Object, $.prototype.constructor = $, $.superclass = Object.prototype, $.prototype.extend = function (t) {
            return u(new $, this, t)
          }, X.prototype = new Object, X.prototype.constructor = X, X.superclass = Object.prototype, X.prototype.getVariable = function (t, e) {
            return null
          }, q.prototype = new Object, q.prototype.constructor = q, q.superclass = Object.prototype, q.prototype.addStandardFunctions = function () {
            this.functions["{}last"] = Q.last, this.functions["{}position"] = Q.position, this.functions["{}count"] = Q.count, this.functions["{}id"] = Q.id, this.functions["{}local-name"] = Q.localName, this.functions["{}namespace-uri"] = Q.namespaceURI, this.functions["{}name"] = Q.name, this.functions["{}string"] = Q.string, this.functions["{}concat"] = Q.concat, this.functions["{}starts-with"] = Q.startsWith, this.functions["{}contains"] = Q.contains, this.functions["{}substring-before"] = Q.substringBefore, this.functions["{}substring-after"] = Q.substringAfter, this.functions["{}substring"] = Q.substring, this.functions["{}string-length"] = Q.stringLength, this.functions["{}normalize-space"] = Q.normalizeSpace, this.functions["{}translate"] = Q.translate, this.functions["{}boolean"] = Q.boolean_, this.functions["{}not"] = Q.not, this.functions["{}true"] = Q.true_, this.functions["{}false"] = Q.false_, this.functions["{}lang"] = Q.lang, this.functions["{}number"] = Q.number, this.functions["{}sum"] = Q.sum, this.functions["{}floor"] = Q.floor, this.functions["{}ceiling"] = Q.ceiling, this.functions["{}round"] = Q.round
          }, q.prototype.addFunction = function (t, e, r) {
            this.functions["{" + t + "}" + e] = r
          }, q.getFunctionFromContext = function (t, e) {
            var r = J.resolveQName(t, e.namespaceResolver, e.contextNode, !1);
            if (null === r[0]) throw new Error("Cannot resolve QName " + name);
            return e.functionResolver.getFunction(r[1], r[0])
          }, q.prototype.getFunction = function (t, e) {
            return this.functions["{" + e + "}" + t]
          }, G.prototype = new Object, G.prototype.constructor = G, G.superclass = Object.prototype, G.prototype.getNamespace = function (t, e) {
            if ("xml" == t) return l.XML_NAMESPACE_URI;
            if ("xmlns" == t) return l.XMLNS_NAMESPACE_URI;
            for (9 == e.nodeType ? e = e.documentElement : 2 == e.nodeType ? e = M.getOwnerElement(e) : 1 != e.nodeType && (e = e.parentNode); null != e && 1 == e.nodeType;) {
              for (var r = e.attributes, n = 0; n < r.length; n++) {
                var o = r.item(n),
                  i = o.name || o.nodeName;
                if ("xmlns" === i && "" === t || i === "xmlns:" + t) return String(o.value || o.nodeValue)
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
            if (2 != arguments.length || !J.instance_of(t = arguments[1].evaluate(e), z)) throw new Error("Function count expects (node-set)");
            return new j(t.size)
          }, Q.id = function () {
            var t, e = arguments[0];
            if (2 != arguments.length) throw new Error("Function id expects (object)");
            t = arguments[1].evaluate(e);
            for (var r = (t = J.instance_of(t, z) ? t.toArray().join(" ") : t.stringValue()).split(/[\x0d\x0a\x09\x20]+/), n = new z, o = 9 == e.contextNode.nodeType ? e.contextNode : e.contextNode.ownerDocument, i = 0; i < r.length; i++) {
              var s;
              null != (s = o.getElementById ? o.getElementById(r[i]) : J.getElementById(o, r[i])) && (n.add(s))
            }
            return n
          }, Q.localName = function (t, e) {
            var r;
            if (1 == arguments.length) r = t.contextNode;
            else {
              if (2 != arguments.length) throw new Error("Function local-name expects (node-set?)");
              r = e.evaluate(t).first()
            }
            return new V(null == r ? "" : r.localName || r.baseName || r.target || r.nodeName || "")
          }, Q.namespaceURI = function () {
            var t, e = arguments[0];
            if (1 == arguments.length) t = e.contextNode;
            else {
              if (2 != arguments.length) throw new Error("Function namespace-uri expects (node-set?)");
              t = arguments[1].evaluate(e).first()
            }
            return new V(null == t ? "" : t.namespaceURI)
          }, Q.name = function () {
            var t, e = arguments[0];
            if (1 == arguments.length) t = e.contextNode;
            else {
              if (2 != arguments.length) throw new Error("Function name expects (node-set?)");
              t = arguments[1].evaluate(e).first()
            }
            return null == t ? new V("") : 1 == t.nodeType ? new V(t.nodeName) : 2 == t.nodeType ? new V(t.name || t.nodeName) : 7 === t.nodeType ? new V(t.target || t.nodeName) : null == t.localName ? new V("") : new V(t.localName)
          }, Q.string = function () {
            var t = arguments[0];
            if (1 == arguments.length) return new V(z.prototype.stringForNode(t.contextNode));
            if (2 == arguments.length) return arguments[1].evaluate(t).string();
            throw new Error("Function string expects (object?)")
          }, Q.concat = function (t) {
            if (arguments.length < 3) throw new Error("Function concat expects (string, string[, string]*)");
            for (var e = "", r = 1; r < arguments.length; r++) e += arguments[r].evaluate(t).stringValue();
            return new V(e)
          }, Q.startsWith = function () {
            var t = arguments[0];
            if (3 != arguments.length) throw new Error("Function startsWith expects (string, string)");
            var e = arguments[1].evaluate(t).stringValue(),
              r = arguments[2].evaluate(t).stringValue();
            return new U(e.substring(0, r.length) == r)
          }, Q.contains = function () {
            var t = arguments[0];
            if (3 != arguments.length) throw new Error("Function contains expects (string, string)");
            var e = arguments[1].evaluate(t).stringValue(),
              r = arguments[2].evaluate(t).stringValue();
            return new U(-1 !== e.indexOf(r))
          }, Q.substringBefore = function () {
            var t = arguments[0];
            if (3 != arguments.length) throw new Error("Function substring-before expects (string, string)");
            var e = arguments[1].evaluate(t).stringValue(),
              r = arguments[2].evaluate(t).stringValue();
            return new V(e.substring(0, e.indexOf(r)))
          }, Q.substringAfter = function () {
            var t = arguments[0];
            if (3 != arguments.length) throw new Error("Function substring-after expects (string, string)");
            var e = arguments[1].evaluate(t).stringValue(),
              r = arguments[2].evaluate(t).stringValue();
            if (0 == r.length) return new V(e);
            var n = e.indexOf(r);
            return new V(-1 == n ? "" : e.substring(n + r.length))
          }, Q.substring = function () {
            var t = arguments[0];
            if (3 != arguments.length && 4 != arguments.length) throw new Error("Function substring expects (string, number, number?)");
            var e = arguments[1].evaluate(t).stringValue(),
              r = Math.round(arguments[2].evaluate(t).numberValue()) - 1,
              n = 4 == arguments.length ? r + Math.round(arguments[3].evaluate(t).numberValue()) : void 0;
            return new V(e.substring(r, n))
          }, Q.stringLength = function () {
            var t, e = arguments[0];
            if (1 == arguments.length) t = z.prototype.stringForNode(e.contextNode);
            else {
              if (2 != arguments.length) throw new Error("Function string-length expects (string?)");
              t = arguments[1].evaluate(e).stringValue()
            }
            return new j(t.length)
          }, Q.normalizeSpace = function () {
            var t, e = arguments[0];
            if (1 == arguments.length) t = z.prototype.stringForNode(e.contextNode);
            else {
              if (2 != arguments.length) throw new Error("Function normalize-space expects (string?)");
              t = arguments[1].evaluate(e).stringValue()
            }
            for (var r = 0, n = t.length - 1; J.isSpace(t.charCodeAt(n));) n--;
            for (var o = ""; r <= n && J.isSpace(t.charCodeAt(r));) r++;
            for (; r <= n;)
              if (J.isSpace(t.charCodeAt(r)))
                for (o += " "; r <= n && J.isSpace(t.charCodeAt(r));) r++;
              else o += t.charAt(r), r++;
            return new V(o)
          }, Q.translate = function (t, e, o, s) {
            if (4 != arguments.length) throw new Error("Function translate expects (string, string, string)");
            var a = e.evaluate(t).stringValue(),
              u = o.evaluate(t).stringValue(),
              c = s.evaluate(t).stringValue(),
              l = r((function (t, e, r) {
                return e in t || (t[e] = r > c.length ? "" : c[r]), t
              }), {}, u),
              h = i("", n((function (t) {
                return t in l ? l[t] : t
              }), a));
            return new V(h)
          }, Q.boolean_ = function () {
            var t = arguments[0];
            if (2 != arguments.length) throw new Error("Function boolean expects (object)");
            return arguments[1].evaluate(t).bool()
          }, Q.not = function (t, e) {
            if (2 != arguments.length) throw new Error("Function not expects (object)");
            return e.evaluate(t).bool().not()
          }, Q.true_ = function () {
            if (1 != arguments.length) throw new Error("Function true expects ()");
            return U.true_
          }, Q.false_ = function () {
            if (1 != arguments.length) throw new Error("Function false expects ()");
            return U.false_
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
            if (null == t) return U.false_;
            var o = arguments[1].evaluate(e).stringValue();
            return new U(t.substring(0, o.length) == o && (t.length == o.length || "-" == t.charAt(o.length)))
          }, Q.number = function () {
            var t = arguments[0];
            if (1 != arguments.length && 2 != arguments.length) throw new Error("Function number expects (object?)");
            return 1 == arguments.length ? new j(z.prototype.stringForNode(t.contextNode)) : arguments[1].evaluate(t).number()
          }, Q.sum = function () {
            var t, e = arguments[0];
            if (2 != arguments.length || !J.instance_of(t = arguments[1].evaluate(e), z)) throw new Error("Function sum expects (node-set)");
            t = t.toUnsortedArray();
            for (var r = 0, n = 0; n < t.length; n++) r += new j(z.prototype.stringForNode(t[n])).numberValue();
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
          var J = new Object;
          J.isAttribute = function (t) {
            return t && (2 === t.nodeType || t.ownerElement)
          }, J.splitQName = function (t) {
            var e = t.indexOf(":");
            return -1 == e ? [null, t] : [t.substring(0, e), t.substring(e + 1)]
          }, J.resolveQName = function (t, e, r, n) {
            var o = J.splitQName(t);
            return null != o[0] ? o[0] = e.getNamespace(o[0], r) : n ? (o[0] = e.getNamespace("", r), null == o[0] && (o[0] = "")) : o[0] = "", o
          }, J.isSpace = function (t) {
            return 9 == t || 13 == t || 10 == t || 32 == t
          }, J.isLetter = function (t) {
            return t >= 65 && t <= 90 || t >= 97 && t <= 122 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 255 || t >= 256 && t <= 305 || t >= 308 && t <= 318 || t >= 321 && t <= 328 || t >= 330 && t <= 382 || t >= 384 && t <= 451 || t >= 461 && t <= 496 || t >= 500 && t <= 501 || t >= 506 && t <= 535 || t >= 592 && t <= 680 || t >= 699 && t <= 705 || 902 == t || t >= 904 && t <= 906 || 908 == t || t >= 910 && t <= 929 || t >= 931 && t <= 974 || t >= 976 && t <= 982 || 986 == t || 988 == t || 990 == t || 992 == t || t >= 994 && t <= 1011 || t >= 1025 && t <= 1036 || t >= 1038 && t <= 1103 || t >= 1105 && t <= 1116 || t >= 1118 && t <= 1153 || t >= 1168 && t <= 1220 || t >= 1223 && t <= 1224 || t >= 1227 && t <= 1228 || t >= 1232 && t <= 1259 || t >= 1262 && t <= 1269 || t >= 1272 && t <= 1273 || t >= 1329 && t <= 1366 || 1369 == t || t >= 1377 && t <= 1414 || t >= 1488 && t <= 1514 || t >= 1520 && t <= 1522 || t >= 1569 && t <= 1594 || t >= 1601 && t <= 1610 || t >= 1649 && t <= 1719 || t >= 1722 && t <= 1726 || t >= 1728 && t <= 1742 || t >= 1744 && t <= 1747 || 1749 == t || t >= 1765 && t <= 1766 || t >= 2309 && t <= 2361 || 2365 == t || t >= 2392 && t <= 2401 || t >= 2437 && t <= 2444 || t >= 2447 && t <= 2448 || t >= 2451 && t <= 2472 || t >= 2474 && t <= 2480 || 2482 == t || t >= 2486 && t <= 2489 || t >= 2524 && t <= 2525 || t >= 2527 && t <= 2529 || t >= 2544 && t <= 2545 || t >= 2565 && t <= 2570 || t >= 2575 && t <= 2576 || t >= 2579 && t <= 2600 || t >= 2602 && t <= 2608 || t >= 2610 && t <= 2611 || t >= 2613 && t <= 2614 || t >= 2616 && t <= 2617 || t >= 2649 && t <= 2652 || 2654 == t || t >= 2674 && t <= 2676 || t >= 2693 && t <= 2699 || 2701 == t || t >= 2703 && t <= 2705 || t >= 2707 && t <= 2728 || t >= 2730 && t <= 2736 || t >= 2738 && t <= 2739 || t >= 2741 && t <= 2745 || 2749 == t || 2784 == t || t >= 2821 && t <= 2828 || t >= 2831 && t <= 2832 || t >= 2835 && t <= 2856 || t >= 2858 && t <= 2864 || t >= 2866 && t <= 2867 || t >= 2870 && t <= 2873 || 2877 == t || t >= 2908 && t <= 2909 || t >= 2911 && t <= 2913 || t >= 2949 && t <= 2954 || t >= 2958 && t <= 2960 || t >= 2962 && t <= 2965 || t >= 2969 && t <= 2970 || 2972 == t || t >= 2974 && t <= 2975 || t >= 2979 && t <= 2980 || t >= 2984 && t <= 2986 || t >= 2990 && t <= 2997 || t >= 2999 && t <= 3001 || t >= 3077 && t <= 3084 || t >= 3086 && t <= 3088 || t >= 3090 && t <= 3112 || t >= 3114 && t <= 3123 || t >= 3125 && t <= 3129 || t >= 3168 && t <= 3169 || t >= 3205 && t <= 3212 || t >= 3214 && t <= 3216 || t >= 3218 && t <= 3240 || t >= 3242 && t <= 3251 || t >= 3253 && t <= 3257 || 3294 == t || t >= 3296 && t <= 3297 || t >= 3333 && t <= 3340 || t >= 3342 && t <= 3344 || t >= 3346 && t <= 3368 || t >= 3370 && t <= 3385 || t >= 3424 && t <= 3425 || t >= 3585 && t <= 3630 || 3632 == t || t >= 3634 && t <= 3635 || t >= 3648 && t <= 3653 || t >= 3713 && t <= 3714 || 3716 == t || t >= 3719 && t <= 3720 || 3722 == t || 3725 == t || t >= 3732 && t <= 3735 || t >= 3737 && t <= 3743 || t >= 3745 && t <= 3747 || 3749 == t || 3751 == t || t >= 3754 && t <= 3755 || t >= 3757 && t <= 3758 || 3760 == t || t >= 3762 && t <= 3763 || 3773 == t || t >= 3776 && t <= 3780 || t >= 3904 && t <= 3911 || t >= 3913 && t <= 3945 || t >= 4256 && t <= 4293 || t >= 4304 && t <= 4342 || 4352 == t || t >= 4354 && t <= 4355 || t >= 4357 && t <= 4359 || 4361 == t || t >= 4363 && t <= 4364 || t >= 4366 && t <= 4370 || 4412 == t || 4414 == t || 4416 == t || 4428 == t || 4430 == t || 4432 == t || t >= 4436 && t <= 4437 || 4441 == t || t >= 4447 && t <= 4449 || 4451 == t || 4453 == t || 4455 == t || 4457 == t || t >= 4461 && t <= 4462 || t >= 4466 && t <= 4467 || 4469 == t || 4510 == t || 4520 == t || 4523 == t || t >= 4526 && t <= 4527 || t >= 4535 && t <= 4536 || 4538 == t || t >= 4540 && t <= 4546 || 4587 == t || 4592 == t || 4601 == t || t >= 7680 && t <= 7835 || t >= 7840 && t <= 7929 || t >= 7936 && t <= 7957 || t >= 7960 && t <= 7965 || t >= 7968 && t <= 8005 || t >= 8008 && t <= 8013 || t >= 8016 && t <= 8023 || 8025 == t || 8027 == t || 8029 == t || t >= 8031 && t <= 8061 || t >= 8064 && t <= 8116 || t >= 8118 && t <= 8124 || 8126 == t || t >= 8130 && t <= 8132 || t >= 8134 && t <= 8140 || t >= 8144 && t <= 8147 || t >= 8150 && t <= 8155 || t >= 8160 && t <= 8172 || t >= 8178 && t <= 8180 || t >= 8182 && t <= 8188 || 8486 == t || t >= 8490 && t <= 8491 || 8494 == t || t >= 8576 && t <= 8578 || t >= 12353 && t <= 12436 || t >= 12449 && t <= 12538 || t >= 12549 && t <= 12588 || t >= 44032 && t <= 55203 || t >= 19968 && t <= 40869 || 12295 == t || t >= 12321 && t <= 12329
          }, J.isNCNameChar = function (t) {
            return t >= 48 && t <= 57 || t >= 1632 && t <= 1641 || t >= 1776 && t <= 1785 || t >= 2406 && t <= 2415 || t >= 2534 && t <= 2543 || t >= 2662 && t <= 2671 || t >= 2790 && t <= 2799 || t >= 2918 && t <= 2927 || t >= 3047 && t <= 3055 || t >= 3174 && t <= 3183 || t >= 3302 && t <= 3311 || t >= 3430 && t <= 3439 || t >= 3664 && t <= 3673 || t >= 3792 && t <= 3801 || t >= 3872 && t <= 3881 || 46 == t || 45 == t || 95 == t || J.isLetter(t) || t >= 768 && t <= 837 || t >= 864 && t <= 865 || t >= 1155 && t <= 1158 || t >= 1425 && t <= 1441 || t >= 1443 && t <= 1465 || t >= 1467 && t <= 1469 || 1471 == t || t >= 1473 && t <= 1474 || 1476 == t || t >= 1611 && t <= 1618 || 1648 == t || t >= 1750 && t <= 1756 || t >= 1757 && t <= 1759 || t >= 1760 && t <= 1764 || t >= 1767 && t <= 1768 || t >= 1770 && t <= 1773 || t >= 2305 && t <= 2307 || 2364 == t || t >= 2366 && t <= 2380 || 2381 == t || t >= 2385 && t <= 2388 || t >= 2402 && t <= 2403 || t >= 2433 && t <= 2435 || 2492 == t || 2494 == t || 2495 == t || t >= 2496 && t <= 2500 || t >= 2503 && t <= 2504 || t >= 2507 && t <= 2509 || 2519 == t || t >= 2530 && t <= 2531 || 2562 == t || 2620 == t || 2622 == t || 2623 == t || t >= 2624 && t <= 2626 || t >= 2631 && t <= 2632 || t >= 2635 && t <= 2637 || t >= 2672 && t <= 2673 || t >= 2689 && t <= 2691 || 2748 == t || t >= 2750 && t <= 2757 || t >= 2759 && t <= 2761 || t >= 2763 && t <= 2765 || t >= 2817 && t <= 2819 || 2876 == t || t >= 2878 && t <= 2883 || t >= 2887 && t <= 2888 || t >= 2891 && t <= 2893 || t >= 2902 && t <= 2903 || t >= 2946 && t <= 2947 || t >= 3006 && t <= 3010 || t >= 3014 && t <= 3016 || t >= 3018 && t <= 3021 || 3031 == t || t >= 3073 && t <= 3075 || t >= 3134 && t <= 3140 || t >= 3142 && t <= 3144 || t >= 3146 && t <= 3149 || t >= 3157 && t <= 3158 || t >= 3202 && t <= 3203 || t >= 3262 && t <= 3268 || t >= 3270 && t <= 3272 || t >= 3274 && t <= 3277 || t >= 3285 && t <= 3286 || t >= 3330 && t <= 3331 || t >= 3390 && t <= 3395 || t >= 3398 && t <= 3400 || t >= 3402 && t <= 3405 || 3415 == t || 3633 == t || t >= 3636 && t <= 3642 || t >= 3655 && t <= 3662 || 3761 == t || t >= 3764 && t <= 3769 || t >= 3771 && t <= 3772 || t >= 3784 && t <= 3789 || t >= 3864 && t <= 3865 || 3893 == t || 3895 == t || 3897 == t || 3902 == t || 3903 == t || t >= 3953 && t <= 3972 || t >= 3974 && t <= 3979 || t >= 3984 && t <= 3989 || 3991 == t || t >= 3993 && t <= 4013 || t >= 4017 && t <= 4023 || 4025 == t || t >= 8400 && t <= 8412 || 8417 == t || t >= 12330 && t <= 12335 || 12441 == t || 12442 == t || 183 == t || 720 == t || 721 == t || 903 == t || 1600 == t || 3654 == t || 3782 == t || 12293 == t || t >= 12337 && t <= 12341 || t >= 12445 && t <= 12446 || t >= 12540 && t <= 12542
          }, J.coalesceText = function (t) {
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
                  var i = n.parentNode;
                  if (null == n.nextSibling) i.removeChild(n), i.appendChild(i.ownerDocument.createTextNode(r));
                  else {
                    var s = n.nextSibling;
                    i.removeChild(n), i.insertBefore(i.ownerDocument.createTextNode(r), s)
                  }
                } else n.nodeValue = r;
                if (null == e) break
              } else 1 == e.nodeType && J.coalesceText(e)
          }, J.instance_of = function (t, e) {
            for (; null != t;) {
              if (t.constructor === e) return !0;
              if (t === Object) return !1;
              t = t.constructor.superclass
            }
            return !1
          }, J.getElementById = function (t, e) {
            if (1 == t.nodeType && (t.getAttribute("id") == e || t.getAttributeNS(null, "id") == e)) return t;
            for (var r = t.firstChild; null != r; r = r.nextSibling) {
              var n = J.getElementById(r, e);
              if (null != n) return n
            }
            return null
          };
          var K = function () {
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

          function Z(t, e, r) {
            this.xpath = r.parse(t), this.context = new $, this.context.namespaceResolver = new tt(e)
          }

          function tt(t) {
            this.xpathNSResolver = t
          }

          function et(t) {
            this.node = t, this.namespaceResolver = new G
          }

          function rt(t, e) {
            switch (e == rt.ANY_TYPE && (t.constructor === V ? e = rt.STRING_TYPE : t.constructor === j ? e = rt.NUMBER_TYPE : t.constructor === U ? e = rt.BOOLEAN_TYPE : t.constructor === z && (e = rt.UNORDERED_NODE_ITERATOR_TYPE)), this.resultType = e, e) {
              case rt.NUMBER_TYPE:
                return void(this.numberValue = t.numberValue());
              case rt.STRING_TYPE:
                return void(this.stringValue = t.stringValue());
              case rt.BOOLEAN_TYPE:
                return void(this.booleanValue = t.booleanValue());
              case rt.ANY_UNORDERED_NODE_TYPE:
              case rt.FIRST_ORDERED_NODE_TYPE:
                if (t.constructor === z) return void(this.singleNodeValue = t.first());
                break;
              case rt.UNORDERED_NODE_ITERATOR_TYPE:
              case rt.ORDERED_NODE_ITERATOR_TYPE:
                if (t.constructor === z) return this.invalidIteratorState = !1, this.nodes = t.toArray(), void(this.iteratorIndex = 0);
                break;
              case rt.UNORDERED_NODE_SNAPSHOT_TYPE:
              case rt.ORDERED_NODE_SNAPSHOT_TYPE:
                if (t.constructor === z) return this.nodes = t.toArray(), void(this.snapshotLength = this.nodes.length)
            }
            throw new K(K.TYPE_ERR)
          }

          function nt(t, e) {
            t.createExpression = function (t, r) {
              try {
                return new Z(t, r, e)
              } catch (t) {
                throw new K(K.INVALID_EXPRESSION_ERR, t)
              }
            }, t.createNSResolver = function (t) {
              return new et(t)
            }, t.evaluate = function (r, n, o, i, s) {
              if (i < 0 || i > 9) throw {
                code: 0,
                toString: function () {
                  return "Request type not supported"
                }
              };
              return t.createExpression(r, o, e).evaluate(n, i, s)
            }
          }
          Z.prototype = {}, Z.prototype.constructor = Z, Z.superclass = Object.prototype, Z.getOwnerDocument = function (t) {
            return 9 === t.nodeType ? t : t.ownerDocument
          }, Z.detectHtmlDom = function (t) {
            if (!t) return !1;
            var e = Z.getOwnerDocument(t);
            try {
              return e.implementation.hasFeature("HTML", "2.0")
            } catch (t) {
              return !0
            }
          }, Z.prototype.evaluate = function (t, e, r) {
            return this.context.expressionContextNode = t, this.context.caseInsensitive = Z.detectHtmlDom(t), new rt(this.xpath.evaluate(this.context), e)
          }, tt.prototype = {}, tt.prototype.constructor = tt, tt.superclass = Object.prototype, tt.prototype.getNamespace = function (t, e) {
            return null == this.xpathNSResolver ? null : this.xpathNSResolver.lookupNamespaceURI(t)
          }, et.prototype = {}, et.prototype.constructor = et, et.superclass = Object.prototype, et.prototype.lookupNamespaceURI = function (t) {
            return this.namespaceResolver.getNamespace(t, this.node)
          }, rt.prototype = {}, rt.prototype.constructor = rt, rt.superclass = Object.prototype, rt.prototype.iterateNext = function () {
            if (this.resultType != rt.UNORDERED_NODE_ITERATOR_TYPE && this.resultType != rt.ORDERED_NODE_ITERATOR_TYPE) throw new K(K.TYPE_ERR);
            return this.nodes[this.iteratorIndex++]
          }, rt.prototype.snapshotItem = function (t) {
            if (this.resultType != rt.UNORDERED_NODE_SNAPSHOT_TYPE && this.resultType != rt.ORDERED_NODE_SNAPSHOT_TYPE) throw new K(K.TYPE_ERR);
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
                r = new G,
                n = new q,
                o = new X;

              function i(t) {
                return {
                  getNamespace: function (e, n) {
                    return t(e, n) || r.getNamespace(e, n)
                  }
                }
              }

              function s(t) {
                return t && "function" == typeof t.getNamespace ? i((e = t).getNamespace.bind(e)) : "function" == typeof t ? i(t) : "object" == typeof t ? function (t) {
                  return i((function (e) {
                    return t[e]
                  }))
                }(t) : r;
                var e
              }

              function a(t) {
                if (null == t || t instanceof V || t instanceof U || t instanceof j || t instanceof z) return t;
                switch (typeof t) {
                  case "string":
                    return new V(t);
                  case "boolean":
                    return new U(t);
                  case "number":
                    return new j(t)
                }
                var e = new z;
                return e.addArray([].concat(t)), e
              }

              function u(t) {
                return {
                  getFunction: function (e, r) {
                    var o = t(e, r);
                    return o ? function (t) {
                      return function (e) {
                        var r = Array.prototype.slice.call(arguments, 1).map((function (t) {
                          return t.evaluate(e)
                        }));
                        return a(t.apply(this, [].concat(e, r)))
                      }
                    }(o) : n.getFunction(e, r)
                  }
                }
              }

              function l(t) {
                return t && "function" == typeof t.getFunction ? u((e = t).getFunction.bind(e)) : "function" == typeof t ? u(t) : "object" == typeof t ? function (t) {
                  return u((function (e) {
                    return t[e]
                  }))
                }(t) : n;
                var e
              }

              function h(t) {
                return {
                  getVariable: function (e, r) {
                    return a(t(e, r))
                  }
                }
              }

              function p(t, e, r) {
                t in r && (e[t] = r[t])
              }

              function d(t) {
                var e = new $;
                return t ? (e.namespaceResolver = s(t.namespaces), e.functionResolver = l(t.functions), e.variableResolver = function (t) {
                  if (t) {
                    if ("function" == typeof t.getVariable) return h(t.getVariable.bind(t));
                    if ("function" == typeof t) return h(t);
                    if ("object" == typeof t) return h((function (e) {
                      return t[e]
                    }))
                  }
                  return o
                }(t.variables), e.expressionContextNode = t.node, p("allowAnyNamespaceForNoPrefix", e, t), p("isHtml", e, t)) : e.namespaceResolver = r, e
              }
              var f = {
                evaluate: function (t) {
                  return function (t, e) {
                    var r = d(e);
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
                return Object.create(f, {
                  expression: {
                    value: r
                  }
                })
              }
            }(), u(t, {
              XPath: l,
              XPathParser: c,
              XPathResult: rt,
              Step: P,
              PathExpr: M,
              NodeTest: F,
              LocationPath: L,
              OrOperation: m,
              AndOperation: v,
              BarOperation: O,
              EqualsOperation: y,
              NotEqualOperation: b,
              LessThanOperation: w,
              GreaterThanOperation: x,
              LessThanOrEqualOperation: E,
              GreaterThanOrEqualOperation: N,
              PlusOperation: _,
              MinusOperation: T,
              MultiplyOperation: A,
              DivOperation: S,
              ModOperation: C,
              UnaryMinusOperation: f,
              FunctionCall: B,
              VariableReference: k,
              XPathContext: $,
              XNodeSet: z,
              XBoolean: U,
              XString: V,
              XNumber: j,
              NamespaceResolver: G,
              FunctionResolver: q,
              VariableResolver: X,
              Utilities: J
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
              var o = new Z(t, r, new c),
                i = rt.ANY_TYPE,
                s = o.evaluate(e, i, null);
              return s.resultType == rt.STRING_TYPE ? s = s.stringValue : s.resultType == rt.NUMBER_TYPE ? s = s.numberValue : s.resultType == rt.BOOLEAN_TYPE ? s = s.booleanValue : (s = s.nodes, n && (s = s[0])), s
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
    var i = e[n] = {
      exports: {}
    };
    return t[n](i, i.exports, r), i.exports
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
      i = r(564),
      s = r.n(i),
      a = r(468),
      u = r.n(a),
      c = r(304),
      l = r.n(c);

    function h(t, e = "") {
      const r = u().parse(t);
      return l()(r, (t => {
        l()(t, (t => {
          "tag" === t.type ? "page" === t.value ? t.value = "body" : t.value = "wx-" + t.value : "class" === t.type && e && (t.value = e + "--" + t.value)
        }))
      })), u().stringify(r)
    }

    function p(t) {
      return !!t && (s()(t.tagName, "WX-") || "BODY" === t.tagName)
    }

    function d(t) {
      let e = "";
      const r = t.__wxElement;
      return r && r.__component__ && (e = r.__componentOptions.classPrefix), e
    }
    var f = r(220),
      g = r.n(f),
      m = r(920),
      v = r.n(m),
      y = r(708),
      b = r.n(y),
      w = r(768),
      x = r.n(w),
      E = r(803),
      N = r.n(E),
      _ = r(181),
      T = r.n(_),
      A = r(349),
      S = r.n(A);
    const C = ["eventName", "elementId"],
      O = new Map;

    function M(t) {
      let e = t._id;
      return e || (e = v()(), t._id = e), O.set(e, {
        id: e,
        element: t
      }), e
    }

    function I(t) {
      const e = O.get(t);
      if (!e) throw Error("element destroyed");
      return e.element
    }

    function D(t) {
      const e = {
          elementId: M(t),
          tagName: t.tagName.toLocaleLowerCase().replace("wx-", "")
        },
        r = b()(t, "__wxElement.__wxTmplId");
      return r && (e.nodeId = r), "video" === e.tagName && (e.videoId = t.__wxElement.id || ""), e
    }

    function R() {
      return (R = e()((function* (t) {
        const {
          elementId: e,
          names: r
        } = t, n = I(e);
        return {
          attributes: r.map((t => n.getAttribute(t)))
        }
      }))).apply(this, arguments)
    }

    function L() {
      return (L = e()((function* (t) {
        const {
          elementId: e,
          names: r
        } = t, n = I(e), o = getComputedStyle(n);
        return {
          styles: r.map((t => o[t]))
        }
      }))).apply(this, arguments)
    }

    function P() {
      return (P = e()((function* (t) {
        const {
          elementId: e,
          type: r
        } = t, n = I(e);
        return {
          wxml: F("outer" === r ? n.outerHTML : n.innerHTML)
        }
      }))).apply(this, arguments)
    }

    function F(t) {
      return t = (t = (t = t.replace(/\n/g, "")).replace(/(<wx-text[^>]*>)(<span[^>]*>[^<]*<\/span>)(.*?<\/wx-text>)/g, "$1$3")).replace(/<\/?[^>]*>/g, (t => t.indexOf("<body") > -1 ? "<page>" : "</body>" === t ? "</page>" : 0 !== t.indexOf("<wx-") && 0 !== t.indexOf("</wx-") ? "" : t = (t = (t = (t = t.replace(/wx-/g, "")).replace(/ exparser:[^=]*="[^"]*"/g, "")).replace(/ wx:[^=]*="[^"]*"/g, "")).replace(/ role=""/g, "").replace(/ aria-label=""/g, "")))
    }

    function k() {
      return (k = e()((function* (t) {
        const {
          elementId: e,
          names: r
        } = t, n = I(e);
        return {
          properties: r.map((t => b()(n, t)))
        }
      }))).apply(this, arguments)
    }

    function B() {
      return (B = e()((function* (t) {
        const {
          elementId: e,
          names: r
        } = t, n = I(e).__wxElement;
        return {
          properties: r.map((t => b()(n, t)))
        }
      }))).apply(this, arguments)
    }

    function H() {
      return (H = e()((function* (t) {
        const e = I(t.elementId).getBoundingClientRect();
        return {
          left: e.left + window.pageXOffset,
          top: e.top + window.pageYOffset
        }
      }))).apply(this, arguments)
    }

    function V() {
      return (V = e()((function* (t) {
        const {
          elementId: e
        } = t, r = I(e);
        G(r), J(r)
      }))).apply(this, arguments)
    }

    function j() {
      return (j = e()((function* (t) {
        const {
          elementId: e,
          touches: r,
          changedTouches: n
        } = t;
        G(I(e), {
          touches: r,
          changedTouches: n
        })
      }))).apply(this, arguments)
    }

    function U() {
      return (U = e()((function* (t) {
        const {
          elementId: e,
          touches: r,
          changedTouches: n
        } = t;
        Q(I(e), {
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
        J(I(e), {
          touches: r,
          changedTouches: n
        })
      }))).apply(this, arguments)
    }

    function z() {
      return (z = e()((function* (t) {
        const {
          type: e,
          elementId: r
        } = t;
        let {
          detail: n
        } = t;
        const o = I(r);
        x()(n) && (n = {}), o.__wxElement.triggerEvent(e, n)
      }))).apply(this, arguments)
    }

    function Y() {
      return (Y = e()((function* (t) {
        const {
          functionName: e,
          args: r,
          elementId: n
        } = t;
        if (!e) throw Error("functionName is not provided");
        const o = I(n);
        r.unshift(o);
        const i = b()(q, e);
        if (!i) throw Error(`${e} not exists`);
        return {
          result: i.apply(null, r)
        }
      }))).apply(this, arguments)
    }

    function $(t, e, r) {
      const n = r.eventData || {},
        o = n.detail || {};
      let i = n.touches || [],
        s = n.changedTouches || [];
      i = tt(e, i), s = tt(e, s);
      const a = document.createEvent("Event");
      a.initEvent(t, !0, !0), a.touches = i, a.changedTouches = s;
      const u = {
        bubbles: !0,
        capturePhase: !0,
        composed: !0,
        extraFields: {
          _allowWriteOnly: !0,
          touches: i,
          changedTouches: s
        },
        originalEvent: a
      };
      return exparser.Event.create(t, o, u)
    }

    function X() {
      return (X = e()((function* (t) {
        const {
          eventName: e,
          elementId: r
        } = t, n = g()(t, C);
        if (!e) throw Error("eventName is not provided");
        const o = I(r),
          i = n.$ ? o.__wxElement.$[n.$] : o;
        if (!i) throw Error("target is not found");
        const s = $(e, i, t);
        "tap" === e ? __virtualDOM__.wrapTapMark((() => {
          exparser.Event.dispatchEvent(i, s)
        })) : exparser.Event.dispatchEvent(i, s)
      }))).apply(this, arguments)
    }
    const q = {
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

    function G(t, e = {}) {
      let {
        touches: r = [],
        changedTouches: n = []
      } = e;
      S()(r) && (r = [Z(t)]), S()(n) && (n = [Z(t)]), K("touchstart", t, {
        touches: r,
        changedTouches: n
      })
    }

    function Q(t, e = {}) {
      let {
        touches: r = [],
        changedTouches: n = []
      } = e;
      S()(r) && (r = [Z(t)]), S()(n) && (n = [Z(t)]), K("touchmove", t, {
        touches: r,
        changedTouches: n
      })
    }

    function J(t, e = {}) {
      const {
        touches: r = []
      } = e;
      let {
        changedTouches: n = []
      } = e;
      S()(n) && (n = [Z(t)]), K("touchend", t, {
        touches: r,
        changedTouches: n
      })
    }

    function K(t, e, r) {
      const {
        touches: n,
        changedTouches: o
      } = r, i = document.createEvent("Event");
      i.initEvent(t, !0, !0), i.touches = tt(e, n), i.changedTouches = tt(e, o), e.dispatchEvent(i)
    }

    function Z(t) {
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
      return N()(e, (e => (x()(e.pageX) && e.clientX ? e.pageX = e.clientX + n : e.pageX && x()(e.clientX) && (e.clientX = e.pageX - n), x()(e.pageY) && e.clientY ? e.pageY = e.clientY + r : e.pageY && x()(e.clientY) && (e.clientY = e.pageY - r), T()(e, {
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
        e = h(e);
        let r = window.document.querySelector(e);
        if (p(r) || (r = null), !r) throw Error("no such element");
        return D(r)
      }))).apply(this, arguments)
    }

    function it() {
      return (it = e()((function* (t) {
        let {
          selector: e
        } = t;
        e = h(e);
        const r = o()(window.document.querySelectorAll(e)),
          n = [];
        for (const t of r) p(t) && n.push(D(t));
        return {
          elements: n
        }
      }))).apply(this, arguments)
    }

    function st() {
      return (st = e()((function* (t) {
        let {
          selector: e
        } = t;
        const r = nt.parse(e).evaluate({
          node: document.body,
          isHtml: !0
        });
        let n = 1 === r.size ? r.nodes[0] : null;
        if (p(n) || (n = null), !n) throw Error("no such element");
        return D(n)
      }))).apply(this, arguments)
    }
    const at = {
      "Page.getElement": function (t) {
        return ot.apply(this, arguments)
      },
      "Page.getElements": function (t) {
        return it.apply(this, arguments)
      },
      "Page.getWindowProperties": function (t) {
        const {
          names: e
        } = t;
        return {
          properties: e.map((t => b()(window, t)))
        }
      },
      "Page.getElementByXpath": function (t) {
        return st.apply(this, arguments)
      },
      "Element.getElement": function (t) {
        const {
          elementId: e
        } = t;
        let {
          selector: r
        } = t, n = I(e);
        if (r = h(r, d(n)), n = n.querySelector(r), p(n) || (n = null), !n) throw Error("no such element");
        return D(n)
      },
      "Element.getElements": function (t) {
        const {
          elementId: e
        } = t;
        let {
          selector: r
        } = t;
        const n = I(e);
        r = h(r, d(n));
        const i = o()(n.querySelectorAll(r)),
          s = [];
        for (const t of i) p(t) && s.push(D(t));
        return {
          elements: s
        }
      },
      "Element.getAttributes": function (t) {
        return R.apply(this, arguments)
      },
      "Element.getStyles": function (t) {
        return L.apply(this, arguments)
      },
      "Element.getWXML": function (t) {
        return P.apply(this, arguments)
      },
      "Element.getDOMProperties": function (t) {
        return k.apply(this, arguments)
      },
      "Element.getProperties": function (t) {
        return B.apply(this, arguments)
      },
      "Element.getOffset": function (t) {
        return H.apply(this, arguments)
      },
      "Element.tap": function (t) {
        return V.apply(this, arguments)
      },
      "Element.touchstart": function (t) {
        return j.apply(this, arguments)
      },
      "Element.touchmove": function (t) {
        return U.apply(this, arguments)
      },
      "Element.touchend": function (t) {
        return W.apply(this, arguments)
      },
      "Element.triggerEvent": function (t) {
        return z.apply(this, arguments)
      },
      "Element.callFunction": function (t) {
        return Y.apply(this, arguments)
      },
      "Element.dispatchEvent": function (t) {
        return X.apply(this, arguments)
      }
    };
    var ut = r(44),
      ct = r.n(ut);
    let lt = r.g.WeixinJSBridge,
      ht = !1,
      pt = [];

    function dt() {
      ht = !0;
      for (let t = 0, e = pt.length; t < e; t++) pt[t]();
      pt = []
    }
    r.g.__wxConfig.clientDebug = !0;
    const ft = Object.getOwnPropertyDescriptor(r.g, "WeixinJSBridge");
    lt && lt.on ? dt() : ft && !1 === ft.configurable ? ct()((() => r.g.WeixinJSBridge && r.g.WeixinJSBridge.on), 5e3, 50).then((() => {
      lt = r.g.WeixinJSBridge, dt()
    })) : Object.defineProperty(r.g, "WeixinJSBridge", {
      set(t) {
        t && t.on && (lt = t, dt())
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
        ht ? t() : pt.push(t)
      }
    };

    function mt() {
      return (mt = e()((function* (t, e) {
        if (at[t]) return (yield at[t](e)) || {};
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
              return mt.apply(this, arguments)
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