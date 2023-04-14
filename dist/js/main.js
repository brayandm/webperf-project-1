/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  'use strict'
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error('jQuery requires a window with a document')
            return t(e)
          })
    : t(e)
})('undefined' != typeof window ? window : this, function (C, e) {
  'use strict'
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e)
        }
      : function (e) {
          return t.concat.apply([], e)
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return (
        'function' == typeof e &&
        'number' != typeof e.nodeType &&
        'function' != typeof e.item
      )
    },
    x = function (e) {
      return null != e && e === e.window
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 }
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement('script')
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i)
    n.head.appendChild(o).parentNode.removeChild(o)
  }
  function w(e) {
    return null == e
      ? e + ''
      : 'object' == typeof e || 'function' == typeof e
      ? n[o.call(e)] || 'object'
      : typeof e
  }
  var f = '3.6.0',
    S = function (e, t) {
      return new S.fn.init(e, t)
    }
  function p(e) {
    var t = !!e && 'length' in e && e.length,
      n = w(e)
    return (
      !m(e) &&
      !x(e) &&
      ('array' === n ||
        0 === t ||
        ('number' == typeof t && 0 < t && t - 1 in e))
    )
  }
  ;(S.fn = S.prototype =
    {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function () {
        return s.call(this)
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e]
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e)
        return (t.prevObject = this), t
      },
      each: function (e) {
        return S.each(this, e)
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e)
          })
        )
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments))
      },
      first: function () {
        return this.eq(0)
      },
      last: function () {
        return this.eq(-1)
      },
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2
          })
        )
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2
          })
        )
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0)
        return this.pushStack(0 <= n && n < t ? [this[n]] : [])
      },
      end: function () {
        return this.prevObject || this.constructor()
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1
        for (
          'boolean' == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            'object' == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                '__proto__' !== t &&
                  a !== r &&
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || S.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = S.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r))
        return a
      }),
    S.extend({
      expando: 'jQuery' + (f + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw new Error(e)
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n
        return (
          !(!e || '[object Object]' !== o.call(e)) &&
          (!(t = r(e)) ||
            ('function' ==
              typeof (n = v.call(t, 'constructor') && t.constructor) &&
              a.call(n) === l))
        )
      },
      isEmptyObject: function (e) {
        var t
        for (t in e) return !1
        return !0
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n)
      },
      each: function (e, t) {
        var n,
          r = 0
        if (p(e)) {
          for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break
        return e
      },
      makeArray: function (e, t) {
        var n = t || []
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, 'string' == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        )
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n)
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]
        return (e.length = i), e
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i])
        return r
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = []
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i)
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i)
        return g(a)
      },
      guid: 1,
      support: y,
    }),
    'function' == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
        ' '
      ),
      function (e, t) {
        n['[object ' + t + ']'] = t.toLowerCase()
      }
    )
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      S = 'sizzle' + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      j = function (e, t) {
        return e === t && (l = !0), 0
      },
      D = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n
        return -1
      },
      R =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      M = '[\\x20\\t\\r\\n\\f]',
      I =
        '(?:\\\\[\\da-fA-F]{1,6}' +
        M +
        '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
      W =
        '\\[' +
        M +
        '*(' +
        I +
        ')(?:' +
        M +
        '*([*^$|!~]?=)' +
        M +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        I +
        '))|)' +
        M +
        '*\\]',
      F =
        ':(' +
        I +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        W +
        ')*)|.*)\\)|)',
      B = new RegExp(M + '+', 'g'),
      $ = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'),
      _ = new RegExp('^' + M + '*,' + M + '*'),
      z = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'),
      U = new RegExp(M + '|>'),
      X = new RegExp(F),
      V = new RegExp('^' + I + '$'),
      G = {
        ID: new RegExp('^#(' + I + ')'),
        CLASS: new RegExp('^\\.(' + I + ')'),
        TAG: new RegExp('^(' + I + '|[*])'),
        ATTR: new RegExp('^' + W),
        PSEUDO: new RegExp('^' + F),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            M +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            M +
            '*(?:([+-]|)' +
            M +
            '*(\\d+)|))' +
            M +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + R + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            M +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            M +
            '*((?:-\\d)?\\d*)' +
            M +
            '*\\)|)(?=[^-]|$)',
          'i'
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp('\\\\[\\da-fA-F]{1,6}' + M + '?|\\\\([^\\r\\n\\f])', 'g'),
      ne = function (e, t) {
        var n = '0x' + e.slice(1) - 65536
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        )
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? '\0' === e
            ? '\ufffd'
            : e.slice(0, -1) +
              '\\' +
              e.charCodeAt(e.length - 1).toString(16) +
              ' '
          : '\\' + e
      },
      oe = function () {
        T()
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase()
        },
        { dir: 'parentNode', next: 'legend' }
      )
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t))
            }
          : function (e, t) {
              var n = e.length,
                r = 0
              while ((e[n++] = t[r++]));
              e.length = n - 1
            },
      }
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9
      if (
        ((n = n || []),
        'string' != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n
              if (a.id === i) return n.push(a), n
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n
          }
        if (
          d.qsa &&
          !N[t + ' '] &&
          (!v || !v.test(t)) &&
          (1 !== p || 'object' !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ;((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute('id'))
                ? (s = s.replace(re, ie))
                : e.setAttribute('id', (s = S))),
              (o = (l = h(t)).length)
            while (o--) l[o] = (s ? '#' + s : ':scope') + ' ' + xe(l[o])
            c = l.join(',')
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n
          } catch (e) {
            N(t, !0)
          } finally {
            s === S && e.removeAttribute('id')
          }
        }
      }
      return g(t.replace($, '$1'), e, n, r)
    }
    function ue() {
      var r = []
      return function e(t, n) {
        return (
          r.push(t + ' ') > b.cacheLength && delete e[r.shift()],
          (e[t + ' '] = n)
        )
      }
    }
    function le(e) {
      return (e[S] = !0), e
    }
    function ce(e) {
      var t = C.createElement('fieldset')
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null)
      }
    }
    function fe(e, t) {
      var n = e.split('|'),
        r = n.length
      while (r--) b.attrHandle[n[r]] = t
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex
      if (r) return r
      if (n) while ((n = n.nextSibling)) if (n === t) return -1
      return e ? 1 : -1
    }
    function de(t) {
      return function (e) {
        return 'input' === e.nodeName.toLowerCase() && e.type === t
      }
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase()
        return ('input' === t || 'button' === t) && e.type === n
      }
    }
    function ge(t) {
      return function (e) {
        return 'form' in e
          ? e.parentNode && !1 === e.disabled
            ? 'label' in e
              ? 'label' in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : 'label' in e && e.disabled === t
      }
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]))
          })
        )
      })
    }
    function ye(e) {
      return e && 'undefined' != typeof e.getElementsByTagName && e
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement
        return !Y.test(t || (n && n.nodeName) || 'HTML')
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : p
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            p != C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener('unload', oe, !1)
                : n.attachEvent && n.attachEvent('onunload', oe)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement('div')),
                'undefined' != typeof e.querySelectorAll &&
                  !e.querySelectorAll(':scope fieldset div').length
              )
            })),
            (d.attributes = ce(function (e) {
              return (e.className = 'i'), !e.getAttribute('className')
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment('')),
                !e.getElementsByTagName('*').length
              )
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = S),
                !C.getElementsByName || !C.getElementsByName(S).length
              )
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne)
                  return function (e) {
                    return e.getAttribute('id') === t
                  }
                }),
                (b.find.ID = function (e, t) {
                  if ('undefined' != typeof t.getElementById && E) {
                    var n = t.getElementById(e)
                    return n ? [n] : []
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne)
                  return function (e) {
                    var t =
                      'undefined' != typeof e.getAttributeNode &&
                      e.getAttributeNode('id')
                    return t && t.value === n
                  }
                }),
                (b.find.ID = function (e, t) {
                  if ('undefined' != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e)
                    if (o) {
                      if ((n = o.getAttributeNode('id')) && n.value === e)
                        return [o]
                      ;(i = t.getElementsByName(e)), (r = 0)
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode('id')) && n.value === e)
                          return [o]
                    }
                    return []
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return 'undefined' != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e)
                  if ('*' === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n)
                    return r
                  }
                  return o
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ('undefined' != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e)
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t
                ;(a.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push('[*^$]=' + M + '*(?:\'\'|"")'),
                  e.querySelectorAll('[selected]').length ||
                    v.push('\\[' + M + '*(?:value|' + R + ')'),
                  e.querySelectorAll('[id~=' + S + '-]').length || v.push('~='),
                  (t = C.createElement('input')).setAttribute('name', ''),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    v.push('\\[' + M + '*name' + M + '*=' + M + '*(?:\'\'|"")'),
                  e.querySelectorAll(':checked').length || v.push(':checked'),
                  e.querySelectorAll('a#' + S + '+*').length ||
                    v.push('.#.+[+~]'),
                  e.querySelectorAll('\\\f'),
                  v.push('[\\r\\n\\f]')
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"
                var t = C.createElement('input')
                t.setAttribute('type', 'hidden'),
                  e.appendChild(t).setAttribute('name', 'D'),
                  e.querySelectorAll('[name=d]').length &&
                    v.push('name' + M + '*[*^$|!~]?='),
                  2 !== e.querySelectorAll(':enabled').length &&
                    v.push(':enabled', ':disabled'),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(':disabled').length &&
                    v.push(':enabled', ':disabled'),
                  e.querySelectorAll('*,:x'),
                  v.push(',.*:')
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                ;(d.disconnectedMatch = c.call(e, '*')),
                  c.call(e, "[s!='']:x"),
                  s.push('!=', F)
              }),
            (v = v.length && new RegExp(v.join('|'))),
            (s = s.length && new RegExp(s.join('|'))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    )
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0
                    return !1
                  }),
            (j = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && y(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && y(p, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  )
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t]
                  if (!i || !o)
                    return e == C
                      ? -1
                      : t == C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0
                  if (i === o) return pe(e, t)
                  n = e
                  while ((n = n.parentNode)) a.unshift(n)
                  n = t
                  while ((n = n.parentNode)) s.unshift(n)
                  while (a[r] === s[r]) r++
                  return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
                })),
          C
        )
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t)
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          E &&
          !N[t + ' '] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t)
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n
        } catch (e) {
          N(t, !0)
        }
      return 0 < se(t, C, null, [e]).length
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t)
    }),
    (se.attr = function (e, t) {
      ;(e.ownerDocument || e) != C && T(e)
      var n = b.attrHandle[t.toLowerCase()],
        r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null
    }),
    (se.escape = function (e) {
      return (e + '').replace(re, ie)
    }),
    (se.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e)
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(j),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i))
        while (r--) e.splice(n[r], 1)
      }
      return (u = null), e
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = '',
          r = 0,
          i = e.nodeType
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ('string' == typeof e.textContent) return e.textContent
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
          } else if (3 === i || 4 === i) return e.nodeValue
        } else while ((t = e[r++])) n += o(t)
        return n
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          '>': { dir: 'parentNode', first: !0 },
          ' ': { dir: 'parentNode' },
          '+': { dir: 'previousSibling', first: !0 },
          '~': { dir: 'previousSibling' },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
              '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
              e.slice(0, 4)
            )
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              'nth' === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ('even' === e[3] || 'odd' === e[3]))),
                  (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                : e[3] && se.error(e[0]),
              e
            )
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2]
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || '')
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(')', n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3))
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase()
            return '*' === e
              ? function () {
                  return !0
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t
                }
          },
          CLASS: function (e) {
            var t = m[e + ' ']
            return (
              t ||
              ((t = new RegExp('(^|' + M + ')' + e + '(' + M + '|$)')) &&
                m(e, function (e) {
                  return t.test(
                    ('string' == typeof e.className && e.className) ||
                      ('undefined' != typeof e.getAttribute &&
                        e.getAttribute('class')) ||
                      ''
                  )
                }))
            )
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n)
              return null == t
                ? '!=' === r
                : !r ||
                    ((t += ''),
                    '=' === r
                      ? t === i
                      : '!=' === r
                      ? t !== i
                      : '^=' === r
                      ? i && 0 === t.indexOf(i)
                      : '*=' === r
                      ? i && -1 < t.indexOf(i)
                      : '$=' === r
                      ? i && t.slice(-i.length) === i
                      : '~=' === r
                      ? -1 < (' ' + t.replace(B, ' ') + ' ').indexOf(i)
                      : '|=' === r &&
                        (t === i || t.slice(0, i.length + 1) === i + '-'))
            }
          },
          CHILD: function (h, e, t, g, v) {
            var y = 'nth' !== h.slice(0, 3),
              m = 'last' !== h.slice(-4),
              x = 'of-type' === e
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? 'nextSibling' : 'previousSibling',
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1
                        u = l = 'only' === h && !u && 'nextSibling'
                      }
                      return !0
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      ;(d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s])
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d]
                          break
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [k, d]),
                          a === e)
                        )
                          break
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g)
                  }
                }
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error('unsupported pseudo: ' + e)
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, '', o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i])
                    })
                  : function (e) {
                      return a(e, 0, t)
                    })
              : a
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace($, '$1'))
            return s[S]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i))
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop()
                }
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length
            }
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t)
              }
            )
          }),
          lang: le(function (n) {
            return (
              V.test(n || '') || se.error('unsupported lang: ' + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute('xml:lang') || e.getAttribute('lang'))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + '-')
                    )
                } while ((e = e.parentNode) && 1 === e.nodeType)
                return !1
              }
            )
          }),
          target: function (e) {
            var t = n.location && n.location.hash
            return t && t.slice(1) === e.id
          },
          root: function (e) {
            return e === a
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            )
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase()
            return (
              ('input' === t && !!e.checked) || ('option' === t && !!e.selected)
            )
          },
          selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1
            return !0
          },
          parent: function (e) {
            return !b.pseudos.empty(e)
          },
          header: function (e) {
            return J.test(e.nodeName)
          },
          input: function (e) {
            return Q.test(e.nodeName)
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase()
            return ('input' === t && 'button' === e.type) || 'button' === t
          },
          text: function (e) {
            var t
            return (
              'input' === e.nodeName.toLowerCase() &&
              'text' === e.type &&
              (null == (t = e.getAttribute('type')) ||
                'text' === t.toLowerCase())
            )
          },
          first: ve(function () {
            return [0]
          }),
          last: ve(function (e, t) {
            return [t - 1]
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n]
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n)
            return e
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n)
            return e
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r)
            return e
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r)
            return e
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e)
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e)
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value
      return r
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && 'parentNode' === c,
        p = r++
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n)
            return !1
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p]
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
                      return (a[2] = r[2])
                    if (((i[c] = a)[2] = s(e, t, n))) return !0
                  }
            return !1
          }
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length
            while (r--) if (!i[r](e, t, n)) return !1
            return !0
          }
        : i[0]
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)))
      return a
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = Ce(v)),
        y && !y[S] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n)
                return n
              })(h || '*', n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f
          if ((g && g(f, p, n, r), v)) {
            ;(i = Te(p, u)), v(i, [], n, r), (o = i.length)
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
          }
          if (e) {
            if (y || d) {
              if (y) {
                ;(i = []), (o = p.length)
                while (o--) (a = p[o]) && i.push((f[o] = a))
                y(null, (p = []), i, r)
              }
              o = p.length
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a))
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p)
        })
      )
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[' '],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e)
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n))
              return (i = null), r
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)]
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: ' ' === e[s - 2].type ? '*' : '' })
                ).replace($, '$1'),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            )
          }
          c.push(t)
        }
      return we(c)
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + ' ']
          if (l) return t ? 0 : l.slice(0)
          ;(a = e), (s = []), (u = b.preFilter)
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace($, ' ') }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)))
            if (!n) break
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = A[e + ' ']
          if (!a) {
            t || (t = h(e)), (n = t.length)
            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a)
            ;(a = A(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = '0',
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG('*', i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length
                for (
                  i && (w = t == C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    ;(a = 0), t || o.ownerDocument == C || (T(o), (n = !E))
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o)
                        break
                      }
                    i && (k = h)
                  }
                  m && ((o = !s && o) && u--, e && c.push(o))
                }
                if (((u += l), m && l !== u)) {
                  a = 0
                  while ((s = y[a++])) s(c, f, t, n)
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r))
                    f = Te(f)
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r)
                }
                return i && ((k = h), (w = p)), c
              }),
              m ? le(r) : r)
            )).selector = e
          }
          return a
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = 'function' == typeof e && e,
            c = !r && h((e = l.selector || e))
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              'ID' === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length))
            }
            i = G.needsContext.test(e) ? 0 : o.length
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n
                break
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          )
        }),
      (d.sortStable = S.split('').sort(j).join('') === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement('fieldset'))
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          '#' === e.firstChild.getAttribute('href')
        )
      }) ||
        fe('type|href|height|width', function (e, t, n) {
          if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2)
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = '<input/>'),
            e.firstChild.setAttribute('value', ''),
            '' === e.firstChild.getAttribute('value')
          )
        })) ||
        fe('value', function (e, t, n) {
          if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue
        }),
      ce(function (e) {
        return null == e.getAttribute('disabled')
      }) ||
        fe(R, function (e, t, n) {
          var r
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null
        }),
      se
    )
  })(C)
  ;(S.find = d),
    (S.expr = d.selectors),
    (S.expr[':'] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape)
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break
          r.push(e)
        }
      return r
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e)
      return n
    },
    k = S.expr.match.needsContext
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
  function j(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r
        })
      : 'string' != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r
        })
      : S.filter(n, e, r)
  }
  ;(S.filter = function (e, t, n) {
    var r = t[0]
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType
            })
          )
    )
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this
        if ('string' != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0
            })
          )
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n)
        return 1 < r ? S.uniqueSort(n) : n
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1))
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0))
      },
      is: function (e) {
        return !!j(this, 'string' == typeof e && k.test(e) ? S(e) : e || [], !1)
          .length
      },
    })
  var D,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/
  ;((S.fn.init = function (e, t, n) {
    var r, i
    if (!e) return this
    if (((n = n || D), 'string' == typeof e)) {
      if (
        !(r =
          '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e)
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          N.test(r[1]) && S.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r])
        return this
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      )
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(S)
      : S.makeArray(e, this)
  }).prototype = S.fn),
    (D = S(E))
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 }
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0
      })
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = 'string' != typeof e && S(e)
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n)
              break
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
    },
    index: function (e) {
      return e
        ? 'string' == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode
          return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
          return h(e, 'parentNode')
        },
        parentsUntil: function (e, t, n) {
          return h(e, 'parentNode', n)
        },
        next: function (e) {
          return O(e, 'nextSibling')
        },
        prev: function (e) {
          return O(e, 'previousSibling')
        },
        nextAll: function (e) {
          return h(e, 'nextSibling')
        },
        prevAll: function (e) {
          return h(e, 'previousSibling')
        },
        nextUntil: function (e, t, n) {
          return h(e, 'nextSibling', n)
        },
        prevUntil: function (e, t, n) {
          return h(e, 'previousSibling', n)
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
          return T(e.firstChild)
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, 'template') && (e = e.content || e),
              S.merge([], e.childNodes))
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e)
          return (
            'Until' !== r.slice(-5) && (t = e),
            t && 'string' == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          )
        }
      }
    )
  var P = /[^\x20\t\r\n\f]+/g
  function R(e) {
    return e
  }
  function M(e) {
    throw e
  }
  function I(e, t, n, r) {
    var i
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r))
    } catch (e) {
      n.apply(void 0, [e])
    }
  }
  ;(S.Callbacks = function (r) {
    var e, n
    r =
      'string' == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0
          }),
          n)
        : S.extend({}, r)
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift()
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1))
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : '')
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && 'string' !== w(t) && n(t)
                })
              })(arguments),
              t && !i && c()),
            this
          )
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n
              while (-1 < (n = S.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--
            }),
            this
          )
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length
        },
        empty: function () {
          return s && (s = []), this
        },
        disable: function () {
          return (a = u = []), (s = t = ''), this
        },
        disabled: function () {
          return !s
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ''), this
        },
        locked: function () {
          return !!a
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          )
        },
        fire: function () {
          return f.fireWith(this, arguments), this
        },
        fired: function () {
          return !!o
        },
      }
    return f
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              'notify',
              'progress',
              S.Callbacks('memory'),
              S.Callbacks('memory'),
              2,
            ],
            [
              'resolve',
              'done',
              S.Callbacks('once memory'),
              S.Callbacks('once memory'),
              0,
              'resolved',
            ],
            [
              'reject',
              'fail',
              S.Callbacks('once memory'),
              S.Callbacks('once memory'),
              1,
              'rejected',
            ],
          ],
          i = 'pending',
          a = {
            state: function () {
              return i
            },
            always: function () {
              return s.done(arguments).fail(arguments), this
            },
            catch: function (e) {
              return a.then(null, e)
            },
            pipe: function () {
              var i = arguments
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]]
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments)
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + 'With'](this, n ? [e] : arguments)
                  })
                }),
                  (i = null)
              }).promise()
            },
            then: function (t, n, r) {
              var u = 0
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError('Thenable self-resolution')
                        ;(t =
                          e &&
                          ('object' == typeof e || 'function' == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith)
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r))
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e()
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r))
                          }
                        }
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      C.setTimeout(t))
                }
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M))
              }).promise()
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a
            },
          },
          s = {}
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5]
            ;(a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + 'With'](this === s ? void 0 : this, arguments), this
                )
              }),
              (s[t[0] + 'With'] = n.fireWith)
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        )
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              ;(r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i)
            }
          }
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          'pending' === o.state() || m(i[t] && i[t].then))
        )
          return o.then()
        while (t--) I(i[t], a(t), o.reject)
        return o.promise()
      },
    })
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
  ;(S.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t)
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e
      })
    })
  var F = S.Deferred()
  function B() {
    E.removeEventListener('DOMContentLoaded', B),
      C.removeEventListener('load', B),
      S.ready()
  }
  ;(S.fn.ready = function (e) {
    return (
      F.then(e)['catch'](function (e) {
        S.readyException(e)
      }),
      this
    )
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        ;(!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          F.resolveWith(E, [S])
      },
    }),
    (S.ready.then = F.then),
    'complete' === E.readyState ||
    ('loading' !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener('DOMContentLoaded', B),
        C.addEventListener('load', B))
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n
      if ('object' === w(n)) for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a)
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n)
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)))
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    },
    _ = /^-ms-/,
    z = /-([a-z])/g
  function U(e, t) {
    return t.toUpperCase()
  }
  function X(e) {
    return e.replace(_, 'ms-').replace(z, U)
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  }
  function G() {
    this.expando = S.expando + G.uid++
  }
  ;(G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando]
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        )
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e)
        if ('string' == typeof t) i[X(t)] = n
        else for (r in t) i[X(r)] = t[r]
        return i
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)]
      },
      access: function (e, t, n) {
        return void 0 === t || (t && 'string' == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t)
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando]
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
              ? [t]
              : t.match(P) || []).length
            while (n--) delete r[t[n]]
          }
          ;(void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando])
        }
      },
      hasData: function (e) {
        var t = e[this.expando]
        return void 0 !== t && !S.isEmptyObject(t)
      },
    })
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g
  function Z(e, t, n) {
    var r, i
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = 'data-' + t.replace(K, '-$&').toLowerCase()),
        'string' == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            'true' === (i = n) ||
            ('false' !== i &&
              ('null' === i
                ? null
                : i === +i + ''
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i))
        } catch (e) {}
        Q.set(e, t, n)
      } else n = void 0
    return n
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e)
    },
    data: function (e, t, n) {
      return Q.access(e, t, n)
    },
    removeData: function (e, t) {
      Q.remove(e, t)
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n)
    },
    _removeData: function (e, t) {
      Y.remove(e, t)
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, 'hasDataAttrs'))
          ) {
            t = a.length
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf('data-') &&
                ((r = X(r.slice(5))), Z(o, r, i[r]))
            Y.set(o, 'hasDataAttrs', !0)
          }
          return i
        }
        return 'object' == typeof n
          ? this.each(function () {
              Q.set(this, n)
            })
          : $(
              this,
              function (e) {
                var t
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0
                this.each(function () {
                  Q.set(this, n, e)
                })
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            )
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e)
        })
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r
        if (e)
          return (
            (t = (t || 'fx') + 'queue'),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || []
          )
      },
      dequeue: function (e, t) {
        t = t || 'fx'
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t)
        'inprogress' === i && ((i = n.shift()), r--),
          i &&
            ('fx' === t && n.unshift('inprogress'),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t)
              },
              o
            )),
          !r && o && o.empty.fire()
      },
      _queueHooks: function (e, t) {
        var n = t + 'queueHooks'
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks('once memory').add(function () {
              Y.remove(e, [t + 'queue', n])
            }),
          })
        )
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2
        return (
          'string' != typeof t && ((n = t), (t = 'fx'), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n)
                S._queueHooks(this, t),
                  'fx' === t && 'inprogress' !== e[0] && S.dequeue(this, t)
              })
        )
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e)
        })
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', [])
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o])
          }
        'string' != typeof e && ((t = e), (e = void 0)), (e = e || 'fx')
        while (a--)
          (n = Y.get(o[a], e + 'queueHooks')) &&
            n.empty &&
            (r++, n.empty.add(s))
        return s(), i.promise(t)
      },
    })
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp('^(?:([+-])=|)(' + ee + ')([a-z%]*)$', 'i'),
    ne = ['Top', 'Right', 'Bottom', 'Left'],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e)
    },
    oe = { composed: !0 }
  re.getRootNode &&
    (ie = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      )
    })
  var ae = function (e, t) {
    return (
      'none' === (e = t || e).style.display ||
      ('' === e.style.display && ie(e) && 'none' === S.css(e, 'display'))
    )
  }
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur()
          }
        : function () {
            return S.css(e, t, '')
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? '' : 'px'),
      c =
        e.nodeType &&
        (S.cssNumber[t] || ('px' !== l && +u)) &&
        te.exec(S.css(e, t))
    if (c && c[3] !== l) {
      ;(u /= 2), (l = l || c[3]), (c = +u || 1)
      while (a--)
        S.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o)
      ;(c *= 2), S.style(e, t, c + l), (n = n || [])
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    )
  }
  var ue = {}
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ('none' === n &&
              ((l[c] = Y.get(r, 'display') || null),
              l[c] || (r.style.display = '')),
            '' === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, 'display')),
                  o.parentNode.removeChild(o),
                  'none' === u && (u = 'block'),
                  (ue[s] = u)))))
          : 'none' !== n && ((l[c] = 'none'), Y.set(r, 'display', n)))
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c])
    return e
  }
  S.fn.extend({
    show: function () {
      return le(this, !0)
    },
    hide: function () {
      return le(this)
    },
    toggle: function (e) {
      return 'boolean' == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide()
          })
    },
  })
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i
  ;(ce = E.createDocumentFragment().appendChild(E.createElement('div'))),
    (fe = E.createElement('input')).setAttribute('type', 'radio'),
    fe.setAttribute('checked', 'checked'),
    fe.setAttribute('name', 't'),
    ce.appendChild(fe),
    (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = '<textarea>x</textarea>'),
    (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = '<option></option>'),
    (y.option = !!ce.lastChild)
  var ge = {
    thead: [1, '<table>', '</table>'],
    col: [2, '<table><colgroup>', '</colgroup></table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    _default: [0, '', ''],
  }
  function ve(e, t) {
    var n
    return (
      (n =
        'undefined' != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || '*')
          : 'undefined' != typeof e.querySelectorAll
          ? e.querySelectorAll(t || '*')
          : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    )
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], 'globalEval', !t || Y.get(t[n], 'globalEval'))
  }
  ;(ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    y.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", '</select>'])
  var me = /<|&#?\w+;/
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ('object' === w(o)) S.merge(p, o.nodeType ? [o] : o)
        else if (me.test(o)) {
          ;(a = a || f.appendChild(t.createElement('div'))),
            (s = (de.exec(o) || ['', ''])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0])
          while (c--) a = a.lastChild
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = '')
        } else p.push(t.createTextNode(o))
    ;(f.textContent = ''), (d = 0)
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o)
      else if (
        ((l = ie(o)), (a = ve(f.appendChild(o), 'script')), l && ye(a), n)
      ) {
        c = 0
        while ((o = a[c++])) he.test(o.type || '') && n.push(o)
      }
    return f
  }
  var be = /^([^.]*)(?:\.(.+)|)/
  function we() {
    return !0
  }
  function Te() {
    return !1
  }
  function Ce(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement
          } catch (e) {}
        })()) ==
      ('focus' === t)
    )
  }
  function Ee(e, t, n, r, i, o) {
    var a, s
    if ('object' == typeof t) {
      for (s in ('string' != typeof n && ((r = r || n), (n = void 0)), t))
        Ee(e, s, n, r, t[s], o)
      return e
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ('string' == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Te
    else if (!i) return e
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n)
      })
    )
  }
  function Se(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i)
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (S.event.special[i] || {}).delegateType && e.stopPropagation()
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                )
            } else
              r.length &&
                (Y.set(this, i, {
                  value: S.event.trigger(
                    S.extend(r[0], S.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation())
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, we)
  }
  ;(S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(t)
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return 'undefined' != typeof S && S.event.triggered !== e.type
                  ? S.event.dispatch.apply(t, arguments)
                  : void 0
              }),
          (l = (e = (e || '').match(P) || ['']).length)
        while (l--)
          (d = g = (s = be.exec(e[l]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join('.'),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0))
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e)
      if (v && (u = v.events)) {
        l = (t = (t || '').match(P) || ['']).length
        while (l--)
          if (
            ((d = g = (s = be.exec(t[l]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            d)
          ) {
            ;(f = S.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')),
              (a = o = p.length)
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c))
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                S.removeEvent(e, d, v.handle),
              delete u[d])
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0)
        S.isEmptyObject(u) && Y.remove(e, 'handle events')
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, 'events') || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {}
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t]
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        ;(a = S.event.handlers.call(this, u, l)), (t = 0)
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          ;(u.currentTarget = i.elem), (n = 0)
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()))
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target
      if (u && l.nodeType && !('click' === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + ' ')] &&
                (a[i] = r.needsContext
                  ? -1 < S(i, this).index(l)
                  : S.find(i, this, null, [l]).length),
                a[i] && o.push(r)
            o.length && s.push({ elem: l, handlers: o })
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      )
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent)
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t]
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          })
        },
      })
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e)
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e
          return (
            pe.test(t.type) && t.click && A(t, 'input') && Se(t, 'click', we),
            !1
          )
        },
        trigger: function (e) {
          var t = this || e
          return (
            pe.test(t.type) && t.click && A(t, 'input') && Se(t, 'click'), !0
          )
        },
        _default: function (e) {
          var t = e.target
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, 'input') &&
              Y.get(t, 'click')) ||
            A(t, 'a')
          )
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result)
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t)
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? we
              : Te),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0)
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent
        ;(this.isDefaultPrevented = we),
          e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function () {
        var e = this.originalEvent
        ;(this.isPropagationStopped = we),
          e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent
        ;(this.isImmediatePropagationStopped = we),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation()
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      S.event.addProp
    ),
    S.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
      S.event.special[e] = {
        setup: function () {
          return Se(this, e, Ce), !1
        },
        trigger: function () {
          return Se(this, e), !0
        },
        _default: function () {
          return !0
        },
        delegateType: t,
      }
    }),
    S.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout',
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            )
          },
        }
      }
    ),
    S.fn.extend({
      on: function (e, t, n, r) {
        return Ee(this, e, t, n, r)
      },
      one: function (e, t, n, r) {
        return Ee(this, e, t, n, r, 1)
      },
      off: function (e, t, n) {
        var r, i
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
              r.namespace ? r.origType + '.' + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          )
        if ('object' == typeof e) {
          for (i in e) this.off(i, t, e[i])
          return this
        }
        return (
          (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Te),
          this.each(function () {
            S.event.remove(this, e, n, t)
          })
        )
      },
    })
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
  function je(e, t) {
    return (
      (A(e, 'table') &&
        A(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
        S(e).children('tbody')[0]) ||
      e
    )
  }
  function De(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e
  }
  function qe(e) {
    return (
      'true/' === (e.type || '').slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute('type'),
      e
    )
  }
  function Le(e, t) {
    var n, r, i, o, a, s
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, 'handle events'), s))
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n])
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a))
    }
  }
  function He(n, r, i, o) {
    r = g(r)
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d)
    if (h || (1 < f && 'string' == typeof d && !y.checkClone && Ae.test(d)))
      return n.each(function (e) {
        var t = n.eq(e)
        h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o)
      })
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = S.map(ve(e, 'script'), De)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, 'script'))),
          i.call(n[c], u, c)
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || '') &&
              !Y.access(u, 'globalEval') &&
              S.contains(l, u) &&
              (u.src && 'module' !== (u.type || '').toLowerCase()
                ? S._evalUrl &&
                  !u.noModule &&
                  S._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute('nonce') },
                    l
                  )
                : b(u.textContent.replace(Ne, ''), u, l))
    }
    return n
  }
  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ve(r)),
        r.parentNode &&
          (n && ie(r) && ye(ve(r, 'script')), r.parentNode.removeChild(r))
    return e
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e)
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            'input' === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ('input' !== l && 'textarea' !== l) ||
                (u.defaultValue = s.defaultValue)
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Le(o[r], a[r])
        else Le(e, c)
      return 0 < (a = ve(c, 'script')).length && ye(a, !f && ve(e, 'script')), c
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle)
            n[Y.expando] = void 0
          }
          n[Q.expando] && (n[Q.expando] = void 0)
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Oe(this, e, !0)
      },
      remove: function (e) {
        return Oe(this, e)
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  ;(1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e)
                })
          },
          null,
          e,
          arguments.length
        )
      },
      append: function () {
        return He(this, arguments, function (e) {
          ;(1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            je(this, e).appendChild(e)
        })
      },
      prepend: function () {
        return He(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = je(this, e)
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ''))
        return this
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t)
          })
        )
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML
            if (
              'string' == typeof e &&
              !ke.test(e) &&
              !ge[(de.exec(e) || ['', ''])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e)
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(ve(t, !1)), (t.innerHTML = e))
                t = 0
              } catch (e) {}
            }
            t && this.empty().append(e)
          },
          null,
          e,
          arguments.length
        )
      },
      replaceWith: function () {
        var n = []
        return He(
          this,
          arguments,
          function (e) {
            var t = this.parentNode
            S.inArray(this, n) < 0 &&
              (S.cleanData(ve(this)), t && t.replaceChild(e, this))
          },
          n
        )
      },
    }),
    S.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[a](t),
              u.apply(n, t.get())
          return this.pushStack(n)
        }
      }
    )
  var Pe = new RegExp('^(' + ee + ')(?!px)[a-z%]+$', 'i'),
    Re = function (e) {
      var t = e.ownerDocument.defaultView
      return (t && t.opener) || (t = C), t.getComputedStyle(e)
    },
    Me = function (e, t, n) {
      var r,
        i,
        o = {}
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i])
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i]
      return r
    },
    Ie = new RegExp(ne.join('|'), 'i')
  function We(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style
    return (
      (n = n || Re(e)) &&
        ('' !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = S.style(e, t)),
        !y.pixelBoxStyles() &&
          Pe.test(a) &&
          Ie.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + '' : a
    )
  }
  function Fe(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments)
        delete this.get
      },
    }
  }
  !(function () {
    function e() {
      if (l) {
        ;(u.style.cssText =
          'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
          (l.style.cssText =
            'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
          re.appendChild(u).appendChild(l)
        var e = C.getComputedStyle(l)
        ;(n = '1%' !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = '60%'),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = 'absolute'),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null)
      }
    }
    function t(e) {
      return Math.round(parseFloat(e))
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement('div'),
      l = E.createElement('div')
    l.style &&
      ((l.style.backgroundClip = 'content-box'),
      (l.cloneNode(!0).style.backgroundClip = ''),
      (y.clearCloneStyle = 'content-box' === l.style.backgroundClip),
      S.extend(y, {
        boxSizingReliable: function () {
          return e(), r
        },
        pixelBoxStyles: function () {
          return e(), o
        },
        pixelPosition: function () {
          return e(), n
        },
        reliableMarginLeft: function () {
          return e(), s
        },
        scrollboxSize: function () {
          return e(), i
        },
        reliableTrDimensions: function () {
          var e, t, n, r
          return (
            null == a &&
              ((e = E.createElement('table')),
              (t = E.createElement('tr')),
              (n = E.createElement('div')),
              (e.style.cssText =
                'position:absolute;left:-11111px;border-collapse:separate'),
              (t.style.cssText = 'border:1px solid'),
              (t.style.height = '1px'),
              (n.style.height = '9px'),
              (n.style.display = 'block'),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              re.removeChild(e)),
            a
          )
        },
      }))
  })()
  var Be = ['Webkit', 'Moz', 'ms'],
    $e = E.createElement('div').style,
    _e = {}
  function ze(e) {
    var t = S.cssProps[e] || _e[e]
    return (
      t ||
      (e in $e
        ? e
        : (_e[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Be.length
              while (n--) if ((e = Be[n] + t) in $e) return e
            })(e) || e))
    )
  }
  var Ue = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ve = { position: 'absolute', visibility: 'hidden', display: 'block' },
    Ge = { letterSpacing: '0', fontWeight: '400' }
  function Ye(e, t, n) {
    var r = te.exec(t)
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t
  }
  function Qe(e, t, n, r, i, o) {
    var a = 'width' === t ? 1 : 0,
      s = 0,
      u = 0
    if (n === (r ? 'border' : 'content')) return 0
    for (; a < 4; a += 2)
      'margin' === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ('content' === n && (u -= S.css(e, 'padding' + ne[a], !0, i)),
            'margin' !== n &&
              (u -= S.css(e, 'border' + ne[a] + 'Width', !0, i)))
          : ((u += S.css(e, 'padding' + ne[a], !0, i)),
            'padding' !== n
              ? (u += S.css(e, 'border' + ne[a] + 'Width', !0, i))
              : (s += S.css(e, 'border' + ne[a] + 'Width', !0, i)))
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    )
  }
  function Je(e, t, n) {
    var r = Re(e),
      i =
        (!y.boxSizingReliable() || n) &&
        'border-box' === S.css(e, 'boxSizing', !1, r),
      o = i,
      a = We(e, t, r),
      s = 'offset' + t[0].toUpperCase() + t.slice(1)
    if (Pe.test(a)) {
      if (!n) return a
      a = 'auto'
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        (!y.reliableTrDimensions() && A(e, 'tr')) ||
        'auto' === a ||
        (!parseFloat(a) && 'inline' === S.css(e, 'display', !1, r))) &&
        e.getClientRects().length &&
        ((i = 'border-box' === S.css(e, 'boxSizing', !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Qe(e, t, n || (i ? 'border' : 'content'), o, r, a) +
        'px'
    )
  }
  function Ke(e, t, n, r, i) {
    return new Ke.prototype.init(e, t, n, r, i)
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = We(e, 'opacity')
            return '' === n ? '1' : n
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Xe.test(t),
          l = e.style
        if (
          (u || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
        )
          return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t]
        'string' === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = 'number')),
          null != n &&
            n == n &&
            ('number' !== o ||
              u ||
              (n += (i && i[3]) || (S.cssNumber[s] ? '' : 'px')),
            y.clearCloneStyle ||
              '' !== n ||
              0 !== t.indexOf('background') ||
              (l[t] = 'inherit'),
            (a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)))
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t)
      return (
        Xe.test(t) || (t = ze(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) &&
          'get' in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = We(e, t, r)),
        'normal' === i && t in Ge && (i = Ge[t]),
        '' === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      )
    },
  }),
    S.each(['height', 'width'], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ue.test(S.css(e, 'display')) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Je(e, u, n)
              : Me(e, Ve, function () {
                  return Je(e, u, n)
                })
        },
        set: function (e, t, n) {
          var r,
            i = Re(e),
            o = !y.scrollboxSize() && 'absolute' === i.position,
            a = (o || n) && 'border-box' === S.css(e, 'boxSizing', !1, i),
            s = n ? Qe(e, u, n, a, i) : 0
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e['offset' + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Qe(e, u, 'border', !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              'px' !== (r[3] || 'px') &&
              ((e.style[u] = t), (t = S.css(e, u))),
            Ye(0, t, s)
          )
        },
      }
    }),
    (S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(We(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              Me(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left
              })) + 'px'
        )
    })),
    S.each({ margin: '', padding: '', border: 'Width' }, function (i, o) {
      ;(S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = 'string' == typeof e ? e.split(' ') : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0]
          return n
        },
      }),
        'margin' !== i && (S.cssHooks[i + o].set = Ye)
    }),
    S.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0
            if (Array.isArray(t)) {
              for (r = Re(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r)
              return o
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
          },
          e,
          t,
          1 < arguments.length
        )
      },
    }),
    (((S.Tween = Ke).prototype = {
      constructor: Ke,
      init: function (e, t, n, r, i, o) {
        ;(this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? '' : 'px'))
      },
      cur: function () {
        var e = Ke.propHooks[this.prop]
        return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
      },
      run: function (e) {
        var t,
          n = Ke.propHooks[this.prop]
        return (
          this.options.duration
            ? (this.pos = t =
                S.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
          this
        )
      },
    }).init.prototype = Ke.prototype),
    ((Ke.propHooks = {
      _default: {
        get: function (e) {
          var t
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, '')) && 'auto' !== t
            ? t
            : 0
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit)
        },
      },
    }).scrollTop = Ke.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2
      },
      _default: 'swing',
    }),
    (S.fx = Ke.prototype.init),
    (S.fx.step = {})
  var Ze,
    et,
    tt,
    nt,
    rt = /^(?:toggle|show|hide)$/,
    it = /queueHooks$/
  function ot() {
    et &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(ot)
        : C.setTimeout(ot, S.fx.interval),
      S.fx.tick())
  }
  function at() {
    return (
      C.setTimeout(function () {
        Ze = void 0
      }),
      (Ze = Date.now())
    )
  }
  function st(e, t) {
    var n,
      r = 0,
      i = { height: e }
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i['margin' + (n = ne[r])] = i['padding' + n] = e
    return t && (i.opacity = i.width = e), i
  }
  function ut(e, t, n) {
    for (
      var r,
        i = (lt.tweeners[t] || []).concat(lt.tweeners['*']),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r
  }
  function lt(o, e, t) {
    var n,
      a,
      r = 0,
      i = lt.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem
      }),
      u = function () {
        if (a) return !1
        for (
          var e = Ze || at(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n)
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        )
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: Ze || at(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          )
          return l.tweens.push(n), n
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0
          if (a) return this
          for (a = !0; t < n; t++) l.tweens[t].run(1)
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          )
        },
      }),
      c = l.props
    for (
      !(function (e, t) {
        var n, r, i, o, a
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ('expand' in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i))
          else t[r] = i
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = lt.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        )
    return (
      S.map(c, ut, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    )
  }
  ;(S.Animation = S.extend(lt, {
    tweeners: {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t)
          return se(n.elem, e, te.exec(t), n), n
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ['*'])) : (e = e.match(P))
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (lt.tweeners[n] = lt.tweeners[n] || []),
          lt.tweeners[n].unshift(t)
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = 'width' in t || 'height' in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, 'fxshow')
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, 'fx')).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s()
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, 'fx').length || a.empty.fire()
            })
          })),
        t))
          if (((i = t[r]), rt.test(i))) {
            if (
              (delete t[r],
              (o = o || 'toggle' === i),
              i === (g ? 'hide' : 'show'))
            ) {
              if ('show' !== i || !v || void 0 === v[r]) continue
              g = !0
            }
            d[r] = (v && v[r]) || S.style(e, r)
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, 'display')),
            'none' === (c = S.css(e, 'display')) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = S.css(e, 'display')),
                  le([e]))),
            ('inline' === c || ('inline-block' === c && null != l)) &&
              'none' === S.css(e, 'float') &&
              (u ||
                (p.done(function () {
                  h.display = l
                }),
                null == l && ((c = h.display), (l = 'none' === c ? '' : c))),
              (h.display = 'inline-block'))),
          n.overflow &&
            ((h.overflow = 'hidden'),
            p.always(function () {
              ;(h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2])
            })),
          (u = !1),
          d))
            u ||
              (v
                ? 'hidden' in v && (g = v.hidden)
                : (v = Y.access(e, 'fxshow', { display: l })),
              o && (v.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, 'fxshow'), d))
                  S.style(e, r, d[r])
              })),
              (u = ut(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)))
      },
    ],
    prefilter: function (e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && 'object' == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            }
      return (
        S.fx.off
          ? (r.duration = 0)
          : 'number' != typeof r.duration &&
            (r.duration in S.fx.speeds
              ? (r.duration = S.fx.speeds[r.duration])
              : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
        }),
        r
      )
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r)
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = lt(this, S.extend({}, t), o)
            ;(i || Y.get(this, 'finish')) && e.stop(!0)
          }
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        )
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop
          delete e.stop, t(o)
        }
        return (
          'string' != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || 'fx', []),
          this.each(function () {
            var e = !0,
              t = null != i && i + 'queueHooks',
              n = S.timers,
              r = Y.get(this)
            if (t) r[t] && r[t].stop && a(r[t])
            else for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t])
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1))
            ;(!e && o) || S.dequeue(this, i)
          })
        )
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || 'fx'),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + 'queue'],
              r = t[a + 'queueHooks'],
              i = S.timers,
              o = n ? n.length : 0
            for (
              t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1))
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this)
            delete t.finish
          })
        )
      },
    }),
    S.each(['toggle', 'show', 'hide'], function (e, r) {
      var i = S.fn[r]
      S.fn[r] = function (e, t, n) {
        return null == e || 'boolean' == typeof e
          ? i.apply(this, arguments)
          : this.animate(st(r, !0), e, t, n)
      }
    }),
    S.each(
      {
        slideDown: st('show'),
        slideUp: st('hide'),
        slideToggle: st('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n)
        }
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers
      for (Ze = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1)
      n.length || S.fx.stop(), (Ze = void 0)
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start()
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      et || ((et = !0), ot())
    }),
    (S.fx.stop = function () {
      et = null
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || 'fx'),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r)
          t.stop = function () {
            C.clearTimeout(n)
          }
        })
      )
    }),
    (tt = E.createElement('input')),
    (nt = E.createElement('select').appendChild(E.createElement('option'))),
    (tt.type = 'checkbox'),
    (y.checkOn = '' !== tt.value),
    (y.optSelected = nt.selected),
    ((tt = E.createElement('input')).value = 't'),
    (tt.type = 'radio'),
    (y.radioValue = 't' === tt.value)
  var ct,
    ft = S.expr.attrHandle
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length)
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e)
      })
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType
        if (3 !== o && 8 !== o && 2 !== o)
          return 'undefined' == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? ct : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ''), n)
                : i && 'get' in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r)
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && 'radio' === t && A(e, 'input')) {
              var n = e.value
              return e.setAttribute('type', t), n && (e.value = n), t
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P)
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n)
      },
    }),
    (ct = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = ft[t] || S.find.attr
      ft[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase()
        return (
          n ||
            ((i = ft[o]),
            (ft[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (ft[o] = i)),
          r
        )
      }
    })
  var pt = /^(?:input|select|textarea|button)$/i,
    dt = /^(?:a|area)$/i
  function ht(e) {
    return (e.match(P) || []).join(' ')
  }
  function gt(e) {
    return (e.getAttribute && e.getAttribute('class')) || ''
  }
  function vt(e) {
    return Array.isArray(e) ? e : ('string' == typeof e && e.match(P)) || []
  }
  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length)
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e]
      })
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && 'get' in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          )
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, 'tabindex')
            return t
              ? parseInt(t, 10)
              : pt.test(e.nodeName) || (dt.test(e.nodeName) && e.href)
              ? 0
              : -1
          },
        },
      },
      propFix: { for: 'htmlFor', class: 'className' },
    }),
    y.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode
          return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
          var t = e.parentNode
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        },
      }),
    S.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable',
      ],
      function () {
        S.propFix[this.toLowerCase()] = this
      }
    ),
    S.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0
        if (m(t))
          return this.each(function (e) {
            S(this).addClass(t.call(this, e, gt(this)))
          })
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && ' ' + ht(i) + ' '))) {
              a = 0
              while ((o = e[a++]))
                r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ')
              i !== (s = ht(r)) && n.setAttribute('class', s)
            }
        return this
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0
        if (m(t))
          return this.each(function (e) {
            S(this).removeClass(t.call(this, e, gt(this)))
          })
        if (!arguments.length) return this.attr('class', '')
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && ' ' + ht(i) + ' '))) {
              a = 0
              while ((o = e[a++]))
                while (-1 < r.indexOf(' ' + o + ' '))
                  r = r.replace(' ' + o + ' ', ' ')
              i !== (s = ht(r)) && n.setAttribute('class', s)
            }
        return this
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = 'string' === o || Array.isArray(i)
        return 'boolean' == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              S(this).toggleClass(i.call(this, e, gt(this), t), t)
            })
          : this.each(function () {
              var e, t, n, r
              if (a) {
                ;(t = 0), (n = S(this)), (r = vt(i))
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
              } else (void 0 !== i && 'boolean' !== o) || ((e = gt(this)) && Y.set(this, '__className__', e), this.setAttribute && this.setAttribute('class', e || !1 === i ? '' : Y.get(this, '__className__') || ''))
            })
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0
        t = ' ' + e + ' '
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (' ' + ht(gt(n)) + ' ').indexOf(t))
            return !0
        return !1
      },
    })
  var yt = /\r/g
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0]
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = '')
                : 'number' == typeof t
                ? (t += '')
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? '' : e + ''
                  })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                'set' in r &&
                void 0 !== r.set(this, t, 'value')) ||
                (this.value = t))
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
          'get' in r &&
          void 0 !== (e = r.get(t, 'value'))
          ? e
          : 'string' == typeof (e = t.value)
          ? e.replace(yt, '')
          : null == e
          ? ''
          : e
        : void 0
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, 'value')
            return null != t ? t : ht(S.text(e))
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = 'select-one' === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, 'optgroup'))
              ) {
                if (((t = S(n).val()), a)) return t
                s.push(t)
              }
            return s
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length
            while (a--)
              ((r = i[a]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0)
            return n || (e.selectedIndex = -1), o
          },
        },
      },
    }),
    S.each(['radio', 'checkbox'], function () {
      ;(S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t))
        },
      }),
        y.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value
          })
    }),
    (y.focusin = 'onfocusin' in C)
  var mt = /^(?:focusinfocus|focusoutblur)$/,
    xt = function (e) {
      e.stopPropagation()
    }
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, 'type') ? e.type : e,
        h = v.call(e, 'namespace') ? e.namespace.split('.') : []
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !mt.test(d + S.event.triggered) &&
          (-1 < d.indexOf('.') && ((d = (h = d.split('.')).shift()), h.sort()),
          (u = d.indexOf(':') < 0 && 'on' + d),
          ((e = e[S.expando]
            ? e
            : new S.Event(d, 'object' == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join('.')),
          (e.rnamespace = e.namespace
            ? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o)
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C)
        }
        i = 0
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (Y.get(o, 'events') || Object.create(null))[e.type] &&
              Y.get(o, 'handle')) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault())
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, xt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, xt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        )
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 })
      S.event.trigger(r, null, t)
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this)
        })
      },
      triggerHandler: function (e, t) {
        var n = this[0]
        if (n) return S.event.trigger(e, t, n, !0)
      },
    }),
    y.focusin ||
      S.each({ focus: 'focusin', blur: 'focusout' }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e))
        }
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r)
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r))
          },
        }
      })
  var bt = C.location,
    wt = { guid: Date.now() },
    Tt = /\?/
  S.parseXML = function (e) {
    var t, n
    if (!e || 'string' != typeof e) return null
    try {
      t = new C.DOMParser().parseFromString(e, 'text/xml')
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName('parsererror')[0]),
      (t && !n) ||
        S.error(
          'Invalid XML: ' +
            (n
              ? S.map(n.childNodes, function (e) {
                  return e.textContent
                }).join('\n')
              : e)
        ),
      t
    )
  }
  var Ct = /\[\]$/,
    Et = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    kt = /^(?:input|select|textarea|keygen)/i
  function At(n, e, r, i) {
    var t
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || Ct.test(n)
          ? i(n, t)
          : At(
              n + '[' + ('object' == typeof t && null != t ? e : '') + ']',
              t,
              r,
              i
            )
      })
    else if (r || 'object' !== w(e)) i(n, e)
    else for (t in e) At(n + '[' + t + ']', e[t], r, i)
  }
  ;(S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t
        r[r.length] =
          encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n)
      }
    if (null == e) return ''
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value)
      })
    else for (n in e) At(n, e[n], t, i)
    return r.join('&')
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray())
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, 'elements')
          return e ? S.makeArray(e) : this
        })
          .filter(function () {
            var e = this.type
            return (
              this.name &&
              !S(this).is(':disabled') &&
              kt.test(this.nodeName) &&
              !St.test(e) &&
              (this.checked || !pe.test(e))
            )
          })
          .map(function (e, t) {
            var n = S(this).val()
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(Et, '\r\n') }
                })
              : { name: t.name, value: n.replace(Et, '\r\n') }
          })
          .get()
      },
    })
  var Nt = /%20/g,
    jt = /#.*$/,
    Dt = /([?&])_=[^&]*/,
    qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Lt = /^(?:GET|HEAD)$/,
    Ht = /^\/\//,
    Ot = {},
    Pt = {},
    Rt = '*/'.concat('*'),
    Mt = E.createElement('a')
  function It(o) {
    return function (e, t) {
      'string' != typeof e && ((t = e), (e = '*'))
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || []
      if (m(t))
        while ((n = i[r++]))
          '+' === n[0]
            ? ((n = n.slice(1) || '*'), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t)
    }
  }
  function Wt(t, i, o, a) {
    var s = {},
      u = t === Pt
    function l(e) {
      var r
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a)
          return 'string' != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1)
        }),
        r
      )
    }
    return l(i.dataTypes[0]) || (!s['*'] && l('*'))
  }
  function Ft(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {}
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n])
    return r && S.extend(!0, e, r), e
  }
  ;(Mt.href = bt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: bt.href,
        type: 'GET',
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            bt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': Rt,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript',
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: 'responseXML',
          text: 'responseText',
          json: 'responseJSON',
        },
        converters: {
          '* text': String,
          'text html': !0,
          'text json': JSON.parse,
          'text xml': S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e)
      },
      ajaxPrefilter: It(Ot),
      ajaxTransport: It(Pt),
      ajax: function (e, t) {
        'object' == typeof e && ((t = e), (e = void 0)), (t = t || {})
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks('once memory'),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = 'canceled',
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t
              if (h) {
                if (!n) {
                  n = {}
                  while ((t = qt.exec(p)))
                    n[t[1].toLowerCase() + ' '] = (
                      n[t[1].toLowerCase() + ' '] || []
                    ).concat(t[2])
                }
                t = n[e.toLowerCase() + ' ']
              }
              return null == t ? null : t.join(', ')
            },
            getAllResponseHeaders: function () {
              return h ? p : null
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              )
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this
            },
            statusCode: function (e) {
              var t
              if (e)
                if (h) T.always(e[T.status])
                else for (t in e) w[t] = [w[t], e[t]]
              return this
            },
            abort: function (e) {
              var t = e || u
              return c && c.abort(t), l(0, t), this
            },
          }
        if (
          (x.promise(T),
          (v.url = ((e || v.url || bt.href) + '').replace(
            Ht,
            bt.protocol + '//'
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || '*').toLowerCase().match(P) || ['']),
          null == v.crossDomain)
        ) {
          r = E.createElement('a')
          try {
            ;(r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Mt.protocol + '//' + Mt.host != r.protocol + '//' + r.host)
          } catch (e) {
            v.crossDomain = !0
          }
        }
        if (
          (v.data &&
            v.processData &&
            'string' != typeof v.data &&
            (v.data = S.param(v.data, v.traditional)),
          Wt(Ot, v, t, T),
          h)
        )
          return T
        for (i in ((g = S.event && v.global) &&
          0 == S.active++ &&
          S.event.trigger('ajaxStart'),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Lt.test(v.type)),
        (f = v.url.replace(jt, '')),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || '').indexOf(
                'application/x-www-form-urlencoded'
              ) &&
            (v.data = v.data.replace(Nt, '+'))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || 'string' == typeof v.data) &&
              ((f += (Tt.test(f) ? '&' : '?') + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Dt, '$1')),
              (o = (Tt.test(f) ? '&' : '?') + '_=' + wt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader('If-Modified-Since', S.lastModified[f]),
          S.etag[f] && T.setRequestHeader('If-None-Match', S.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader('Content-Type', v.contentType),
        T.setRequestHeader(
          'Accept',
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ('*' !== v.dataTypes[0] ? ', ' + Rt + '; q=0.01' : '')
            : v.accepts['*']
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i])
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort()
        if (
          ((u = 'abort'),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Wt(Pt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger('ajaxSend', [T, v]), h))
            return T
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort('timeout')
            }, v.timeout))
          try {
            ;(h = !1), c.send(a, l)
          } catch (e) {
            if (h) throw e
            l(-1, e)
          }
        } else l(-1, 'No Transport')
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ''),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes
                while ('*' === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader('Content-Type'))
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i)
                      break
                    }
                if (u[0] in n) o = u[0]
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + ' ' + u[0]]) {
                      o = i
                      break
                    }
                    a || (a = i)
                  }
                  o = o || a
                }
                if (o) return o !== u[0] && u.unshift(o), n[o]
              })(v, T, n)),
            !i &&
              -1 < S.inArray('script', v.dataTypes) &&
              S.inArray('json', v.dataTypes) < 0 &&
              (v.converters['text script'] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice()
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a]
              o = c.shift()
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ('*' === o) o = u
                  else if ('*' !== u && u !== o) {
                    if (!(a = l[u + ' ' + o] || l['* ' + o]))
                      for (i in l)
                        if (
                          (s = i.split(' '))[1] === o &&
                          (a = l[u + ' ' + s[0]] || l['* ' + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]))
                          break
                        }
                    if (!0 !== a)
                      if (a && e['throws']) t = a(t)
                      else
                        try {
                          t = a(t)
                        } catch (e) {
                          return {
                            state: 'parsererror',
                            error: a
                              ? e
                              : 'No conversion from ' + u + ' to ' + o,
                          }
                        }
                  }
              return { state: 'success', data: t }
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader('Last-Modified')) &&
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader('etag')) && (S.etag[f] = u)),
                204 === e || 'HEAD' === v.type
                  ? (l = 'nocontent')
                  : 304 === e
                  ? (l = 'notmodified')
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = 'error'), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ''),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? 'ajaxSuccess' : 'ajaxError', [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger('ajaxComplete', [T, v]),
              --S.active || S.event.trigger('ajaxStop')))
        }
        return T
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, 'json')
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, 'script')
      },
    }),
    S.each(['get', 'post'], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              S.isPlainObject(e) && e
            )
          )
        )
      }
    }),
    S.ajaxPrefilter(function (e) {
      var t
      for (t in e.headers)
        'content-type' === t.toLowerCase() &&
          (e.contentType = e.headers[t] || '')
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        cache: !0,
        async: !1,
        global: !1,
        converters: { 'text script': function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n)
        },
      })
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this
                while (e.firstElementChild) e = e.firstElementChild
                return e
              })
              .append(this)),
          this
        )
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e))
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents()
              t.length ? t.wrapAll(n) : e.append(n)
            })
      },
      wrap: function (t) {
        var n = m(t)
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t)
        })
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not('body')
            .each(function () {
              S(this).replaceWith(this.childNodes)
            }),
          this
        )
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e)
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest()
      } catch (e) {}
    })
  var Bt = { 0: 200, 1223: 204 },
    $t = S.ajaxSettings.xhr()
  ;(y.cors = !!$t && 'withCredentials' in $t),
    (y.ajax = $t = !!$t),
    S.ajaxTransport(function (i) {
      var o, a
      if (y.cors || ($t && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr()
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n]
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e['X-Requested-With'] ||
              (e['X-Requested-With'] = 'XMLHttpRequest'),
            e))
              r.setRequestHeader(n, e[n])
            ;(o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  'abort' === e
                    ? r.abort()
                    : 'error' === e
                    ? 'number' != typeof r.status
                      ? t(0, 'error')
                      : t(r.status, r.statusText)
                    : t(
                        Bt[r.status] || r.status,
                        r.statusText,
                        'text' !== (r.responseType || 'text') ||
                          'string' != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ))
              }
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o('error')),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a()
                      })
                  }),
              (o = o('abort'))
            try {
              r.send((i.hasContent && i.data) || null)
            } catch (e) {
              if (o) throw e
            }
          },
          abort: function () {
            o && o()
          },
        }
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1)
    }),
    S.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (e) {
          return S.globalEval(e), e
        },
      },
    }),
    S.ajaxPrefilter('script', function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET')
    }),
    S.ajaxTransport('script', function (n) {
      var r, i
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            ;(r = S('<script>')
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                'load error',
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t('error' === e.type ? 404 : 200, e.type)
                })
              )),
              E.head.appendChild(r[0])
          },
          abort: function () {
            i && i()
          },
        }
    })
  var _t,
    zt = [],
    Ut = /(=)\?(?=&|$)|\?\?/
  S.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = zt.pop() || S.expando + '_' + wt.guid++
      return (this[e] = !0), e
    },
  }),
    S.ajaxPrefilter('json jsonp', function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Ut.test(e.url)
            ? 'url'
            : 'string' == typeof e.data &&
              0 ===
                (e.contentType || '').indexOf(
                  'application/x-www-form-urlencoded'
                ) &&
              Ut.test(e.data) &&
              'data')
      if (a || 'jsonp' === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Ut, '$1' + r))
            : !1 !== e.jsonp &&
              (e.url += (Tt.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
          (e.converters['script json'] = function () {
            return o || S.error(r + ' was not called'), o[0]
          }),
          (e.dataTypes[0] = 'json'),
          (i = C[r]),
          (C[r] = function () {
            o = arguments
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), zt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0)
          }),
          'script'
        )
    }),
    (y.createHTMLDocument =
      (((_t = E.implementation.createHTMLDocument('').body).innerHTML =
        '<form></form><form></form>'),
      2 === _t.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return 'string' != typeof e
        ? []
        : ('boolean' == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument('')).createElement(
                  'base'
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)))
      var r, i, o
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(' ')
      return (
        -1 < s && ((r = ht(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && 'object' == typeof t && (i = 'POST'),
        0 < a.length &&
          S.ajax({ url: e, type: i || 'GET', dataType: 'html', data: t })
            .done(function (e) {
              ;(o = arguments),
                a.html(r ? S('<div>').append(S.parseHTML(e)).find(r) : e)
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e])
                  })
                }
            ),
        this
      )
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem
      }).length
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, 'position'),
          c = S(e),
          f = {}
        'static' === l && (e.style.position = 'relative'),
          (s = c.offset()),
          (o = S.css(e, 'top')),
          (u = S.css(e, 'left')),
          ('absolute' === l || 'fixed' === l) && -1 < (o + u).indexOf('auto')
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          'using' in t ? t.using.call(e, f) : c.css(f)
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e)
              })
        var e,
          n,
          r = this[0]
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 }
          if ('fixed' === S.css(r, 'position')) t = r.getBoundingClientRect()
          else {
            ;(t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement)
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              'static' === S.css(e, 'position')
            )
              e = e.parentNode
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, 'borderTopWidth', !0)),
              (i.left += S.css(e, 'borderLeftWidth', !0)))
          }
          return {
            top: t.top - i.top - S.css(r, 'marginTop', !0),
            left: t.left - i.left - S.css(r, 'marginLeft', !0),
          }
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent
          while (e && 'static' === S.css(e, 'position')) e = e.offsetParent
          return e || re
        })
      },
    }),
    S.each(
      { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
      function (t, i) {
        var o = 'pageYOffset' === i
        S.fn[t] = function (e) {
          return $(
            this,
            function (e, t, n) {
              var r
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t]
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n)
            },
            t,
            e,
            arguments.length
          )
        }
      }
    ),
    S.each(['top', 'left'], function (e, n) {
      S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
        if (t) return (t = We(e, n)), Pe.test(t) ? S(e).position()[n] + 'px' : t
      })
    }),
    S.each({ Height: 'height', Width: 'width' }, function (a, s) {
      S.each(
        { padding: 'inner' + a, content: s, '': 'outer' + a },
        function (r, o) {
          S.fn[o] = function (e, t) {
            var n = arguments.length && (r || 'boolean' != typeof e),
              i = r || (!0 === e || !0 === t ? 'margin' : 'border')
            return $(
              this,
              function (e, t, n) {
                var r
                return x(e)
                  ? 0 === o.indexOf('outer')
                    ? e['inner' + a]
                    : e.document.documentElement['client' + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body['scroll' + a],
                      r['scroll' + a],
                      e.body['offset' + a],
                      r['offset' + a],
                      r['client' + a]
                    ))
                  : void 0 === n
                  ? S.css(e, t, i)
                  : S.style(e, t, n, i)
              },
              s,
              n ? e : void 0,
              n
            )
          }
        }
      )
    }),
    S.each(
      [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend',
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e)
        }
      }
    ),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n)
      },
      unbind: function (e, t) {
        return this.off(e, null, t)
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r)
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, '**')
          : this.off(t, e || '**', n)
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      },
    }),
    S.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' '
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
      }
    )
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
  ;(S.proxy = function (e, t) {
    var n, r, i
    if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid =
          e.guid || S.guid++),
        i
      )
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0)
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e)
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e))
    }),
    (S.trim = function (e) {
      return null == e ? '' : (e + '').replace(Xt, '')
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return S
      })
  var Vt = C.jQuery,
    Gt = C.$
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S
    }),
    'undefined' == typeof e && (C.jQuery = C.$ = S),
    S
  )
})
jQuery.noConflict()
/*! This file is auto-generated */
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!(function (e, t) {
  'function' == typeof define && define.amd
    ? define('ev-emitter/ev-emitter', t)
    : 'object' == typeof module && module.exports
    ? (module.exports = t())
    : (e.EvEmitter = t())
})('undefined' != typeof window ? window : this, function () {
  function e() {}

  var t = e.prototype
  return (
    (t.on = function (e, t) {
      if (e && t) {
        var i = (this._events = this._events || {}),
          n = (i[e] = i[e] || [])
        return n.indexOf(t) == -1 && n.push(t), this
      }
    }),
    (t.once = function (e, t) {
      if (e && t) {
        this.on(e, t)
        var i = (this._onceEvents = this._onceEvents || {}),
          n = (i[e] = i[e] || {})
        return (n[t] = !0), this
      }
    }),
    (t.off = function (e, t) {
      var i = this._events && this._events[e]
      if (i && i.length) {
        var n = i.indexOf(t)
        return n != -1 && i.splice(n, 1), this
      }
    }),
    (t.emitEvent = function (e, t) {
      var i = this._events && this._events[e]
      if (i && i.length) {
        ;(i = i.slice(0)), (t = t || [])
        for (
          var n = this._onceEvents && this._onceEvents[e], o = 0;
          o < i.length;
          o++
        ) {
          var r = i[o],
            s = n && n[r]
          s && (this.off(e, r), delete n[r]), r.apply(this, t)
        }
        return this
      }
    }),
    (t.allOff = function () {
      delete this._events, delete this._onceEvents
    }),
    e
  )
}),
  (function (e, t) {
    'use strict'
    'function' == typeof define && define.amd
      ? define(['ev-emitter/ev-emitter'], function (i) {
          return t(e, i)
        })
      : 'object' == typeof module && module.exports
      ? (module.exports = t(e, require('ev-emitter')))
      : (e.imagesLoaded = t(e, e.EvEmitter))
  })('undefined' != typeof window ? window : this, function (e, t) {
    function i(e, t) {
      for (var i in t) e[i] = t[i]
      return e
    }

    function n(e) {
      if (Array.isArray(e)) return e
      var t = 'object' == typeof e && 'number' == typeof e.length
      return t ? d.call(e) : [e]
    }

    function o(e, t, r) {
      if (!(this instanceof o)) return new o(e, t, r)
      var s = e
      return (
        'string' == typeof e && (s = document.querySelectorAll(e)),
        s
          ? ((this.elements = n(s)),
            (this.options = i({}, this.options)),
            'function' == typeof t ? (r = t) : i(this.options, t),
            r && this.on('always', r),
            this.getImages(),
            h && (this.jqDeferred = new h.Deferred()),
            void setTimeout(this.check.bind(this)))
          : void a.error('Bad element for imagesLoaded ' + (s || e))
      )
    }

    function r(e) {
      this.img = e
    }

    function s(e, t) {
      ;(this.url = e), (this.element = t), (this.img = new Image())
    }

    var h = e.jQuery,
      a = e.console,
      d = Array.prototype.slice
    ;(o.prototype = Object.create(t.prototype)),
      (o.prototype.options = {}),
      (o.prototype.getImages = function () {
        ;(this.images = []), this.elements.forEach(this.addElementImages, this)
      }),
      (o.prototype.addElementImages = function (e) {
        'IMG' == e.nodeName && this.addImage(e),
          this.options.background === !0 && this.addElementBackgroundImages(e)
        var t = e.nodeType
        if (t && u[t]) {
          for (var i = e.querySelectorAll('img'), n = 0; n < i.length; n++) {
            var o = i[n]
            this.addImage(o)
          }
          if ('string' == typeof this.options.background) {
            var r = e.querySelectorAll(this.options.background)
            for (n = 0; n < r.length; n++) {
              var s = r[n]
              this.addElementBackgroundImages(s)
            }
          }
        }
      })
    var u = { 1: !0, 9: !0, 11: !0 }
    return (
      (o.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e)
        if (t)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage);
            null !== n;

          ) {
            var o = n && n[2]
            o && this.addBackground(o, e), (n = i.exec(t.backgroundImage))
          }
      }),
      (o.prototype.addImage = function (e) {
        var t = new r(e)
        this.images.push(t)
      }),
      (o.prototype.addBackground = function (e, t) {
        var i = new s(e, t)
        this.images.push(i)
      }),
      (o.prototype.check = function () {
        function e(e, i, n) {
          setTimeout(function () {
            t.progress(e, i, n)
          })
        }

        var t = this
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (t) {
                t.once('progress', e), t.check()
              })
            : void this.complete()
        )
      }),
      (o.prototype.progress = function (e, t, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
          this.emitEvent('progress', [this, e, t]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, e),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && a && a.log('progress: ' + i, e, t)
      }),
      (o.prototype.complete = function () {
        var e = this.hasAnyBroken ? 'fail' : 'done'
        if (
          ((this.isComplete = !0),
          this.emitEvent(e, [this]),
          this.emitEvent('always', [this]),
          this.jqDeferred)
        ) {
          var t = this.hasAnyBroken ? 'reject' : 'resolve'
          this.jqDeferred[t](this)
        }
      }),
      (r.prototype = Object.create(t.prototype)),
      (r.prototype.check = function () {
        var e = this.getIsImageComplete()
        return e
          ? void this.confirm(0 !== this.img.naturalWidth, 'naturalWidth')
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener('load', this),
            this.proxyImage.addEventListener('error', this),
            this.img.addEventListener('load', this),
            this.img.addEventListener('error', this),
            void (this.proxyImage.src = this.img.src))
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth
      }),
      (r.prototype.confirm = function (e, t) {
        ;(this.isLoaded = e), this.emitEvent('progress', [this, this.img, t])
      }),
      (r.prototype.handleEvent = function (e) {
        var t = 'on' + e.type
        this[t] && this[t](e)
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, 'onload'), this.unbindEvents()
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, 'onerror'), this.unbindEvents()
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener('load', this),
          this.proxyImage.removeEventListener('error', this),
          this.img.removeEventListener('load', this),
          this.img.removeEventListener('error', this)
      }),
      (s.prototype = Object.create(r.prototype)),
      (s.prototype.check = function () {
        this.img.addEventListener('load', this),
          this.img.addEventListener('error', this),
          (this.img.src = this.url)
        var e = this.getIsImageComplete()
        e &&
          (this.confirm(0 !== this.img.naturalWidth, 'naturalWidth'),
          this.unbindEvents())
      }),
      (s.prototype.unbindEvents = function () {
        this.img.removeEventListener('load', this),
          this.img.removeEventListener('error', this)
      }),
      (s.prototype.confirm = function (e, t) {
        ;(this.isLoaded = e),
          this.emitEvent('progress', [this, this.element, t])
      }),
      (o.makeJQueryPlugin = function (t) {
        ;(t = t || e.jQuery),
          t &&
            ((h = t),
            (h.fn.imagesLoaded = function (e, t) {
              var i = new o(this, e, t)
              return i.jqDeferred.promise(h(this))
            }))
      }),
      o.makeJQueryPlugin(),
      o
    )
  })
/* <![CDATA[ */
var travell_js_settings = {
  rtl_mode: "",
  header_sticky_offset: "150",
  header_sticky_up: "",
  home_slider_autoplay: "",
  home_slider_autoplay_time: "5",
  use_gallery: "1",
  home_cover_video_image_fallback: "1",
  home_counter_animate: "",
  cover_parallax: "",
};
/* ]]> */
!(function (o) {
  'use strict'
  ;(o.fn.fitVids = function (t) {
    var e,
      i,
      s = { customSelector: null, ignore: null }
    return (
      document.getElementById('fit-vids-style') ||
        ((e = document.head || document.getElementsByTagName('head')[0]),
        ((i = document.createElement('div')).innerHTML =
          '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>'),
        e.appendChild(i.childNodes[1])),
      t && o.extend(s, t),
      this.each(function () {
        var t = [
          'iframe[src*="player.vimeo.com"]',
          'iframe[src*="youtube.com"]',
          'iframe[src*="youtube-nocookie.com"]',
          'iframe[src*="kickstarter.com"][src*="video.html"]',
          'object',
          'embed',
        ]
        s.customSelector && t.push(s.customSelector)
        var n = '.fitvidsignore'
        s.ignore && (n = n + ', ' + s.ignore)
        t = o(this).find(t.join(','))
        ;(t = (t = t.not('object object')).not(n)).each(function () {
          var t,
            e,
            i = o(this)
          0 < i.parents(n).length ||
            ('embed' === this.tagName.toLowerCase() &&
              i.parent('object').length) ||
            i.parent('.fluid-width-video-wrapper').length ||
            (i.css('height') ||
              i.css('width') ||
              (!isNaN(i.attr('height')) && !isNaN(i.attr('width'))) ||
              (i.attr('height', 9), i.attr('width', 16)),
            (t =
              ('object' === this.tagName.toLowerCase() ||
              (i.attr('height') && !isNaN(parseInt(i.attr('height'), 10)))
                ? parseInt(i.attr('height'), 10)
                : i.height()) /
              (isNaN(parseInt(i.attr('width'), 10))
                ? i.width()
                : parseInt(i.attr('width'), 10))),
            i.attr('name') ||
              ((e = 'fitvid' + o.fn.fitVids._count),
              i.attr('name', e),
              o.fn.fitVids._count++),
            i
              .wrap('<div class="fluid-width-video-wrapper"></div>')
              .parent('.fluid-width-video-wrapper')
              .css('padding-top', 100 * t + '%'),
            i.removeAttr('height').removeAttr('width'))
        })
      })
    )
  }),
    (o.fn.fitVids._count = 0)
})(window.jQuery || window.Zepto)
var objectFitImages = (function () {
  'use strict'
  var a = 'bfred-it:object-fit-images',
    l = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,
    t = new Image(),
    c = 'object-fit' in t.style,
    s = 'object-position' in t.style,
    o = 'background-size' in t.style,
    u = 'string' == typeof t.currentSrc,
    h = t.getAttribute,
    d = t.setAttribute,
    r = !1
  function p(t, e, i) {
    i =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
      (e || 1) +
      "' height='" +
      (i || 0) +
      "'%3E%3C/svg%3E"
    h.call(t, 'src') !== i && d.call(t, 'src', i)
  }
  function m(t, e) {
    t.naturalWidth ? e(t) : setTimeout(m, 100, t, e)
  }
  function A(e) {
    var i,
      n,
      t,
      s,
      o = (function (t) {
        for (
          var e, i = getComputedStyle(t).fontFamily, n = {};
          null !== (e = l.exec(i));

        )
          n[e[1]] = e[2]
        return n
      })(e),
      r = e[a]
    if (((o['object-fit'] = o['object-fit'] || 'fill'), !r.img)) {
      if ('fill' === o['object-fit']) return
      if (!r.skipTest && c && !o['object-position']) return
    }
    if (!r.img) {
      ;(r.img = new Image(e.width, e.height)),
        (r.img.srcset = h.call(e, 'data-ofi-srcset') || e.srcset),
        (r.img.src = h.call(e, 'data-ofi-src') || e.src),
        d.call(e, 'data-ofi-src', e.src),
        e.srcset && d.call(e, 'data-ofi-srcset', e.srcset),
        p(e, e.naturalWidth || e.width, e.naturalHeight || e.height),
        e.srcset && (e.srcset = '')
      try {
        ;(i = e),
          (n = {
            get: function (t) {
              return i[a].img[t || 'src']
            },
            set: function (t, e) {
              return (
                (i[a].img[e || 'src'] = t),
                d.call(i, 'data-ofi-' + e, t),
                A(i),
                t
              )
            },
          }),
          Object.defineProperty(i, 'src', n),
          Object.defineProperty(i, 'currentSrc', {
            get: function () {
              return n.get('currentSrc')
            },
          }),
          Object.defineProperty(i, 'srcset', {
            get: function () {
              return n.get('srcset')
            },
            set: function (t) {
              return n.set(t, 'srcset')
            },
          })
      } catch (t) {
        window.console && console.log('http://bit.ly/ofi-old-browser')
      }
    }
    ;(t = r.img).srcset &&
      !u &&
      window.picturefill &&
      ((t[(s = window.picturefill._).ns] && t[s.ns].evaled) ||
        s.fillImg(t, { reselect: !0 }),
      t[s.ns].curSrc ||
        ((t[s.ns].supported = !1), s.fillImg(t, { reselect: !0 })),
      (t.currentSrc = t[s.ns].curSrc || t.src)),
      (e.style.backgroundImage =
        'url(' +
        (r.img.currentSrc || r.img.src)
          .replace('(', '%28')
          .replace(')', '%29') +
        ')'),
      (e.style.backgroundPosition = o['object-position'] || 'center'),
      (e.style.backgroundRepeat = 'no-repeat'),
      /scale-down/.test(o['object-fit'])
        ? m(r.img, function () {
            r.img.naturalWidth > e.width || r.img.naturalHeight > e.height
              ? (e.style.backgroundSize = 'contain')
              : (e.style.backgroundSize = 'auto')
          })
        : (e.style.backgroundSize = o['object-fit']
            .replace('none', 'auto')
            .replace('fill', '100% 100%')),
      m(r.img, function (t) {
        p(e, t.naturalWidth, t.naturalHeight)
      })
  }
  function f(t, e) {
    var i = !r && !t
    if (((e = e || {}), (s && !e.skipTest) || !o)) return !1
    'string' == typeof (t = t || 'img')
      ? (t = document.querySelectorAll(t))
      : 'length' in t || (t = [t])
    for (var n = 0; n < t.length; n++)
      (t[n][a] = t[n][a] || { skipTest: e.skipTest }), A(t[n])
    i &&
      (document.body.addEventListener(
        'load',
        function (t) {
          'IMG' === t.target.tagName && f(t.target, { skipTest: e.skipTest })
        },
        !0
      ),
      (r = !0),
      (t = 'img')),
      e.watchMQ &&
        window.addEventListener(
          'resize',
          f.bind(null, t, { skipTest: e.skipTest })
        )
  }
  function i(t, e) {
    return t[a] && t[a].img && ('src' === e || 'srcset' === e) ? t[a].img : t
  }
  return (
    (f.supportsObjectFit = c),
    (f.supportsObjectPosition = s) ||
      ((HTMLImageElement.prototype.getAttribute = function (t) {
        return h.call(i(this, t), t)
      }),
      (HTMLImageElement.prototype.setAttribute = function (t, e) {
        return d.call(i(this, t), t, String(e))
      })),
    f
  )
})()
!(function (l, i, n, o) {
  function c(t, e) {
    ;(this.settings = null),
      (this.options = l.extend({}, c.Defaults, e)),
      (this.$element = l(t)),
      (this._handlers = {}),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._widths = []),
      (this._invalidated = {}),
      (this._pipe = []),
      (this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: { start: null, current: null },
        direction: null,
      }),
      (this._states = {
        current: {},
        tags: {
          initializing: ['busy'],
          animating: ['busy'],
          dragging: ['interacting'],
        },
      }),
      l.each(
        ['onResize', 'onThrottledResize'],
        l.proxy(function (t, e) {
          this._handlers[e] = l.proxy(this[e], this)
        }, this)
      ),
      l.each(
        c.Plugins,
        l.proxy(function (t, e) {
          this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)
      ),
      l.each(
        c.Workers,
        l.proxy(function (t, e) {
          this._pipe.push({ filter: e.filter, run: l.proxy(e.run, this) })
        }, this)
      ),
      this.setup(),
      this.initialize()
  }
  ;(c.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: i,
    fallbackEasing: 'swing',
    info: !1,
    nestedItemSelector: !1,
    itemElement: 'div',
    stageElement: 'div',
    refreshClass: 'owl-refresh',
    loadedClass: 'owl-loaded',
    loadingClass: 'owl-loading',
    rtlClass: 'owl-rtl',
    responsiveClass: 'owl-responsive',
    dragClass: 'owl-drag',
    itemClass: 'owl-item',
    stageClass: 'owl-stage',
    stageOuterClass: 'owl-stage-outer',
    grabClass: 'owl-grab',
  }),
    (c.Width = { Default: 'default', Inner: 'inner', Outer: 'outer' }),
    (c.Type = { Event: 'event', State: 'state' }),
    (c.Plugins = {}),
    (c.Workers = [
      {
        filter: ['width', 'settings'],
        run: function () {
          this._width = this.$element.width()
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (t) {
          t.current = this._items && this._items[this.relative(this._current)]
        },
      },
      {
        filter: ['items', 'settings'],
        run: function () {
          this.$stage.children('.cloned').remove()
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (t) {
          var e = this.settings.margin || '',
            i = !this.settings.autoWidth,
            n = this.settings.rtl,
            e = {
              width: 'auto',
              'margin-left': n ? e : '',
              'margin-right': n ? '' : e,
            }
          i || this.$stage.children().css(e), (t.css = e)
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (t) {
          var e =
              (this.width() / this.settings.items).toFixed(3) -
              this.settings.margin,
            i = null,
            n = this._items.length,
            s = !this.settings.autoWidth,
            o = []
          for (t.items = { merge: !1, width: e }; n--; )
            (i = this._mergers[n]),
              (i =
                (this.settings.mergeFit && Math.min(i, this.settings.items)) ||
                i),
              (t.items.merge = 1 < i || t.items.merge),
              (o[n] = s ? e * i : this._items[n].width())
          this._widths = o
        },
      },
      {
        filter: ['items', 'settings'],
        run: function () {
          var t = [],
            e = this._items,
            i = this.settings,
            n = Math.max(2 * i.items, 4),
            s = 2 * Math.ceil(e.length / 2),
            o = i.loop && e.length ? (i.rewind ? n : Math.max(n, s)) : 0,
            r = '',
            a = ''
          for (o /= 2; o--; )
            t.push(this.normalize(t.length / 2, !0)),
              (r += e[t[t.length - 1]][0].outerHTML),
              t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)),
              (a = e[t[t.length - 1]][0].outerHTML + a)
          ;(this._clones = t),
            l(r).addClass('cloned').appendTo(this.$stage),
            l(a).addClass('cloned').prependTo(this.$stage)
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function () {
          for (
            var t,
              e,
              i = this.settings.rtl ? 1 : -1,
              n = this._clones.length + this._items.length,
              s = -1,
              o = [];
            ++s < n;

          )
            (t = o[s - 1] || 0),
              (e = this._widths[this.relative(s)] + this.settings.margin),
              o.push(t + e * i)
          this._coordinates = o
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function () {
          var t = this.settings.stagePadding,
            e = this._coordinates,
            t = {
              width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
              'padding-left': t || '',
              'padding-right': t || '',
            }
          this.$stage.css(t)
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (t) {
          var e = this._coordinates.length,
            i = !this.settings.autoWidth,
            n = this.$stage.children()
          if (i && t.items.merge)
            for (; e--; )
              (t.css.width = this._widths[this.relative(e)]), n.eq(e).css(t.css)
          else i && ((t.css.width = t.items.width), n.css(t.css))
        },
      },
      {
        filter: ['items'],
        run: function () {
          this._coordinates.length < 1 && this.$stage.removeAttr('style')
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (t) {
          ;(t.current = t.current
            ? this.$stage.children().index(t.current)
            : 0),
            (t.current = Math.max(
              this.minimum(),
              Math.min(this.maximum(), t.current)
            )),
            this.reset(t.current)
        },
      },
      {
        filter: ['position'],
        run: function () {
          this.animate(this.coordinates(this._current))
        },
      },
      {
        filter: ['width', 'position', 'items', 'settings'],
        run: function () {
          for (
            var t,
              e,
              i = this.settings.rtl ? 1 : -1,
              n = 2 * this.settings.stagePadding,
              s = this.coordinates(this.current()) + n,
              o = s + this.width() * i,
              r = [],
              a = 0,
              l = this._coordinates.length;
            a < l;
            a++
          )
            (t = this._coordinates[a - 1] || 0),
              (e = Math.abs(this._coordinates[a]) + n * i),
              ((this.op(t, '<=', s) && this.op(t, '>', o)) ||
                (this.op(e, '<', s) && this.op(e, '>', o))) &&
                r.push(a)
          this.$stage.children('.active').removeClass('active'),
            this.$stage
              .children(':eq(' + r.join('), :eq(') + ')')
              .addClass('active'),
            this.settings.center &&
              (this.$stage.children('.center').removeClass('center'),
              this.$stage.children().eq(this.current()).addClass('center'))
        },
      },
    ]),
    (c.prototype.initialize = function () {
      var t, e
      this.enter('initializing'),
        this.trigger('initialize'),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth &&
          !this.is('pre-loading') &&
          ((t = this.$element.find('img')),
          (e = this.settings.nestedItemSelector
            ? '.' + this.settings.nestedItemSelector
            : o),
          (e = this.$element.children(e).width()),
          t.length && e <= 0 && this.preloadAutoWidthImages(t)),
        this.$element.addClass(this.options.loadingClass),
        (this.$stage = l(
          '<' +
            this.settings.stageElement +
            ' class="' +
            this.settings.stageClass +
            '"/>'
        ).wrap('<div class="' + this.settings.stageOuterClass + '"/>')),
        this.$element.append(this.$stage.parent()),
        this.replace(this.$element.children().not(this.$stage.parent())),
        this.$element.is(':visible')
          ? this.refresh()
          : this.invalidate('width'),
        this.$element
          .removeClass(this.options.loadingClass)
          .addClass(this.options.loadedClass),
        this.registerEventHandlers(),
        this.leave('initializing'),
        this.trigger('initialized')
    }),
    (c.prototype.setup = function () {
      var e = this.viewport(),
        t = this.options.responsive,
        i = -1,
        n = null
      t
        ? (l.each(t, function (t) {
            t <= e && i < t && (i = Number(t))
          }),
          'function' ==
            typeof (n = l.extend({}, this.options, t[i])).stagePadding &&
            (n.stagePadding = n.stagePadding()),
          delete n.responsive,
          n.responsiveClass &&
            this.$element.attr(
              'class',
              this.$element
                .attr('class')
                .replace(
                  new RegExp(
                    '(' + this.options.responsiveClass + '-)\\S+\\s',
                    'g'
                  ),
                  '$1' + i
                )
            ))
        : (n = l.extend({}, this.options)),
        this.trigger('change', { property: { name: 'settings', value: n } }),
        (this._breakpoint = i),
        (this.settings = n),
        this.invalidate('settings'),
        this.trigger('changed', {
          property: { name: 'settings', value: this.settings },
        })
    }),
    (c.prototype.optionsLogic = function () {
      this.settings.autoWidth &&
        ((this.settings.stagePadding = !1), (this.settings.merge = !1))
    }),
    (c.prototype.prepare = function (t) {
      var e = this.trigger('prepare', { content: t })
      return (
        e.data ||
          (e.data = l('<' + this.settings.itemElement + '/>')
            .addClass(this.options.itemClass)
            .append(t)),
        this.trigger('prepared', { content: e.data }),
        e.data
      )
    }),
    (c.prototype.update = function () {
      for (
        var t = 0,
          e = this._pipe.length,
          i = l.proxy(function (t) {
            return this[t]
          }, this._invalidated),
          n = {};
        t < e;

      )
        (this._invalidated.all || 0 < l.grep(this._pipe[t].filter, i).length) &&
          this._pipe[t].run(n),
          t++
      ;(this._invalidated = {}), this.is('valid') || this.enter('valid')
    }),
    (c.prototype.width = function (t) {
      switch ((t = t || c.Width.Default)) {
        case c.Width.Inner:
        case c.Width.Outer:
          return this._width
        default:
          return (
            this._width - 2 * this.settings.stagePadding + this.settings.margin
          )
      }
    }),
    (c.prototype.refresh = function () {
      this.enter('refreshing'),
        this.trigger('refresh'),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave('refreshing'),
        this.trigger('refreshed')
    }),
    (c.prototype.onThrottledResize = function () {
      i.clearTimeout(this.resizeTimer),
        (this.resizeTimer = i.setTimeout(
          this._handlers.onResize,
          this.settings.responsiveRefreshRate
        ))
    }),
    (c.prototype.onResize = function () {
      return (
        !!this._items.length &&
        this._width !== this.$element.width() &&
        !!this.$element.is(':visible') &&
        (this.enter('resizing'),
        this.trigger('resize').isDefaultPrevented()
          ? (this.leave('resizing'), !1)
          : (this.invalidate('width'),
            this.refresh(),
            this.leave('resizing'),
            void this.trigger('resized')))
      )
    }),
    (c.prototype.registerEventHandlers = function () {
      l.support.transition &&
        this.$stage.on(
          l.support.transition.end + '.owl.core',
          l.proxy(this.onTransitionEnd, this)
        ),
        !1 !== this.settings.responsive &&
          this.on(i, 'resize', this._handlers.onThrottledResize),
        this.settings.mouseDrag &&
          (this.$element.addClass(this.options.dragClass),
          this.$stage.on('mousedown.owl.core', l.proxy(this.onDragStart, this)),
          this.$stage.on(
            'dragstart.owl.core selectstart.owl.core',
            function () {
              return !1
            }
          )),
        this.settings.touchDrag &&
          (this.$stage.on(
            'touchstart.owl.core',
            l.proxy(this.onDragStart, this)
          ),
          this.$stage.on('touchcancel.owl.core', l.proxy(this.onDragEnd, this)))
    }),
    (c.prototype.onDragStart = function (t) {
      var e = null
      3 !== t.which &&
        ((e = l.support.transform
          ? {
              x: (e = this.$stage
                .css('transform')
                .replace(/.*\(|\)| /g, '')
                .split(','))[16 === e.length ? 12 : 4],
              y: e[16 === e.length ? 13 : 5],
            }
          : ((e = this.$stage.position()),
            {
              x: this.settings.rtl
                ? e.left +
                  this.$stage.width() -
                  this.width() +
                  this.settings.margin
                : e.left,
              y: e.top,
            })),
        this.is('animating') &&
          (l.support.transform ? this.animate(e.x) : this.$stage.stop(),
          this.invalidate('position')),
        this.$element.toggleClass(
          this.options.grabClass,
          'mousedown' === t.type
        ),
        this.speed(0),
        (this._drag.time = new Date().getTime()),
        (this._drag.target = l(t.target)),
        (this._drag.stage.start = e),
        (this._drag.stage.current = e),
        (this._drag.pointer = this.pointer(t)),
        l(n).on(
          'mouseup.owl.core touchend.owl.core',
          l.proxy(this.onDragEnd, this)
        ),
        l(n).one(
          'mousemove.owl.core touchmove.owl.core',
          l.proxy(function (t) {
            var e = this.difference(this._drag.pointer, this.pointer(t))
            l(n).on(
              'mousemove.owl.core touchmove.owl.core',
              l.proxy(this.onDragMove, this)
            ),
              (Math.abs(e.x) < Math.abs(e.y) && this.is('valid')) ||
                (t.preventDefault(),
                this.enter('dragging'),
                this.trigger('drag'))
          }, this)
        ))
    }),
    (c.prototype.onDragMove = function (t) {
      var e,
        i = null,
        n = null,
        s = this.difference(this._drag.pointer, this.pointer(t)),
        o = this.difference(this._drag.stage.start, s)
      this.is('dragging') &&
        (t.preventDefault(),
        this.settings.loop
          ? ((i = this.coordinates(this.minimum())),
            (n = this.coordinates(this.maximum() + 1) - i),
            (o.x = ((((o.x - i) % n) + n) % n) + i))
          : ((i = this.settings.rtl
              ? this.coordinates(this.maximum())
              : this.coordinates(this.minimum())),
            (n = this.settings.rtl
              ? this.coordinates(this.minimum())
              : this.coordinates(this.maximum())),
            (e = this.settings.pullDrag ? (-1 * s.x) / 5 : 0),
            (o.x = Math.max(Math.min(o.x, i + e), n + e))),
        (this._drag.stage.current = o),
        this.animate(o.x))
    }),
    (c.prototype.onDragEnd = function (t) {
      var e = this.difference(this._drag.pointer, this.pointer(t)),
        i = this._drag.stage.current,
        t = (0 < e.x) ^ this.settings.rtl ? 'left' : 'right'
      l(n).off('.owl.core'),
        this.$element.removeClass(this.options.grabClass),
        ((0 !== e.x && this.is('dragging')) || !this.is('valid')) &&
          (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(this.closest(i.x, 0 !== e.x ? t : this._drag.direction)),
          this.invalidate('position'),
          this.update(),
          (this._drag.direction = t),
          (3 < Math.abs(e.x) || 300 < new Date().getTime() - this._drag.time) &&
            this._drag.target.one('click.owl.core', function () {
              return !1
            })),
        this.is('dragging') && (this.leave('dragging'), this.trigger('dragged'))
    }),
    (c.prototype.closest = function (i, n) {
      var s = -1,
        o = this.width(),
        r = this.coordinates()
      return (
        this.settings.freeDrag ||
          l.each(
            r,
            l.proxy(function (t, e) {
              return (
                'left' === n && e - 30 < i && i < e + 30
                  ? (s = t)
                  : 'right' === n && e - o - 30 < i && i < e - o + 30
                  ? (s = t + 1)
                  : this.op(i, '<', e) &&
                    this.op(i, '>', r[t + 1] || e - o) &&
                    (s = 'left' === n ? t + 1 : t),
                -1 === s
              )
            }, this)
          ),
        this.settings.loop ||
          (this.op(i, '>', r[this.minimum()])
            ? (s = i = this.minimum())
            : this.op(i, '<', r[this.maximum()]) && (s = i = this.maximum())),
        s
      )
    }),
    (c.prototype.animate = function (t) {
      var e = 0 < this.speed()
      this.is('animating') && this.onTransitionEnd(),
        e && (this.enter('animating'), this.trigger('translate')),
        l.support.transform3d && l.support.transition
          ? this.$stage.css({
              transform: 'translate3d(' + t + 'px,0px,0px)',
              transition: this.speed() / 1e3 + 's',
            })
          : e
          ? this.$stage.animate(
              { left: t + 'px' },
              this.speed(),
              this.settings.fallbackEasing,
              l.proxy(this.onTransitionEnd, this)
            )
          : this.$stage.css({ left: t + 'px' })
    }),
    (c.prototype.is = function (t) {
      return this._states.current[t] && 0 < this._states.current[t]
    }),
    (c.prototype.current = function (t) {
      return t === o
        ? this._current
        : 0 === this._items.length
        ? o
        : ((t = this.normalize(t)),
          this._current !== t &&
            ((e = this.trigger('change', {
              property: { name: 'position', value: t },
            })).data !== o && (t = this.normalize(e.data)),
            (this._current = t),
            this.invalidate('position'),
            this.trigger('changed', {
              property: { name: 'position', value: this._current },
            })),
          this._current)
      var e
    }),
    (c.prototype.invalidate = function (t) {
      return (
        'string' === l.type(t) &&
          ((this._invalidated[t] = !0),
          this.is('valid') && this.leave('valid')),
        l.map(this._invalidated, function (t, e) {
          return e
        })
      )
    }),
    (c.prototype.reset = function (t) {
      ;(t = this.normalize(t)) !== o &&
        ((this._speed = 0),
        (this._current = t),
        this.suppress(['translate', 'translated']),
        this.animate(this.coordinates(t)),
        this.release(['translate', 'translated']))
    }),
    (c.prototype.normalize = function (t, e) {
      var i = this._items.length,
        e = e ? 0 : this._clones.length
      return (
        !this.isNumeric(t) || i < 1
          ? (t = o)
          : (t < 0 || i + e <= t) &&
            (t = ((((t - e / 2) % i) + i) % i) + e / 2),
        t
      )
    }),
    (c.prototype.relative = function (t) {
      return (t -= this._clones.length / 2), this.normalize(t, !0)
    }),
    (c.prototype.maximum = function (t) {
      var e,
        i,
        n,
        s = this.settings,
        o = this._coordinates.length
      if (s.loop) o = this._clones.length / 2 + this._items.length - 1
      else if (s.autoWidth || s.merge) {
        for (
          e = this._items.length,
            i = this._items[--e].width(),
            n = this.$element.width();
          e-- && !(n < (i += this._items[e].width() + this.settings.margin));

        );
        o = e + 1
      } else
        o = s.center ? this._items.length - 1 : this._items.length - s.items
      return t && (o -= this._clones.length / 2), Math.max(o, 0)
    }),
    (c.prototype.minimum = function (t) {
      return t ? 0 : this._clones.length / 2
    }),
    (c.prototype.items = function (t) {
      return t === o
        ? this._items.slice()
        : ((t = this.normalize(t, !0)), this._items[t])
    }),
    (c.prototype.mergers = function (t) {
      return t === o
        ? this._mergers.slice()
        : ((t = this.normalize(t, !0)), this._mergers[t])
    }),
    (c.prototype.clones = function (i) {
      function n(t) {
        return t % 2 == 0 ? s + t / 2 : e - (t + 1) / 2
      }
      var e = this._clones.length / 2,
        s = e + this._items.length
      return i === o
        ? l.map(this._clones, function (t, e) {
            return n(e)
          })
        : l.map(this._clones, function (t, e) {
            return t === i ? n(e) : null
          })
    }),
    (c.prototype.speed = function (t) {
      return t !== o && (this._speed = t), this._speed
    }),
    (c.prototype.coordinates = function (t) {
      var e,
        i = 1,
        n = t - 1
      return t === o
        ? l.map(
            this._coordinates,
            l.proxy(function (t, e) {
              return this.coordinates(e)
            }, this)
          )
        : (this.settings.center
            ? (this.settings.rtl && ((i = -1), (n = t + 1)),
              (e = this._coordinates[t]),
              (e += ((this.width() - e + (this._coordinates[n] || 0)) / 2) * i))
            : (e = this._coordinates[n] || 0),
          (e = Math.ceil(e)))
    }),
    (c.prototype.duration = function (t, e, i) {
      return 0 === i
        ? 0
        : Math.min(Math.max(Math.abs(e - t), 1), 6) *
            Math.abs(i || this.settings.smartSpeed)
    }),
    (c.prototype.to = function (t, e) {
      var i,
        n = this.current(),
        s = t - this.relative(n),
        o = (0 < s) - (s < 0),
        r = this._items.length,
        a = this.minimum(),
        l = this.maximum()
      this.settings.loop
        ? (!this.settings.rewind && Math.abs(s) > r / 2 && (s += -1 * o * r),
          (i = (((((t = n + s) - a) % r) + r) % r) + a) !== t &&
            i - s <= l &&
            0 < i - s &&
            this.reset((n = (t = i) - s)))
        : (t = this.settings.rewind
            ? ((t % (l += 1)) + l) % l
            : Math.max(a, Math.min(l, t))),
        this.speed(this.duration(n, t, e)),
        this.current(t),
        this.$element.is(':visible') && this.update()
    }),
    (c.prototype.next = function (t) {
      ;(t = t || !1), this.to(this.relative(this.current()) + 1, t)
    }),
    (c.prototype.prev = function (t) {
      ;(t = t || !1), this.to(this.relative(this.current()) - 1, t)
    }),
    (c.prototype.onTransitionEnd = function (t) {
      if (
        t !== o &&
        (t.stopPropagation(),
        (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))
      )
        return !1
      this.leave('animating'), this.trigger('translated')
    }),
    (c.prototype.viewport = function () {
      var t
      return (
        this.options.responsiveBaseElement !== i
          ? (t = l(this.options.responsiveBaseElement).width())
          : i.innerWidth
          ? (t = i.innerWidth)
          : n.documentElement && n.documentElement.clientWidth
          ? (t = n.documentElement.clientWidth)
          : console.warn('Can not detect viewport width.'),
        t
      )
    }),
    (c.prototype.replace = function (t) {
      this.$stage.empty(),
        (this._items = []),
        (t = t && (t instanceof jQuery ? t : l(t))),
        (t = this.settings.nestedItemSelector
          ? t.find('.' + this.settings.nestedItemSelector)
          : t)
          .filter(function () {
            return 1 === this.nodeType
          })
          .each(
            l.proxy(function (t, e) {
              ;(e = this.prepare(e)),
                this.$stage.append(e),
                this._items.push(e),
                this._mergers.push(
                  +e
                    .find('[data-merge]')
                    .addBack('[data-merge]')
                    .attr('data-merge') || 1
                )
            }, this)
          ),
        this.reset(
          this.isNumeric(this.settings.startPosition)
            ? this.settings.startPosition
            : 0
        ),
        this.invalidate('items')
    }),
    (c.prototype.add = function (t, e) {
      var i = this.relative(this._current)
      ;(e = e === o ? this._items.length : this.normalize(e, !0)),
        (t = t instanceof jQuery ? t : l(t)),
        this.trigger('add', { content: t, position: e }),
        (t = this.prepare(t)),
        0 === this._items.length || e === this._items.length
          ? (0 === this._items.length && this.$stage.append(t),
            0 !== this._items.length && this._items[e - 1].after(t),
            this._items.push(t),
            this._mergers.push(
              +t
                .find('[data-merge]')
                .addBack('[data-merge]')
                .attr('data-merge') || 1
            ))
          : (this._items[e].before(t),
            this._items.splice(e, 0, t),
            this._mergers.splice(
              e,
              0,
              +t
                .find('[data-merge]')
                .addBack('[data-merge]')
                .attr('data-merge') || 1
            )),
        this._items[i] && this.reset(this._items[i].index()),
        this.invalidate('items'),
        this.trigger('added', { content: t, position: e })
    }),
    (c.prototype.remove = function (t) {
      ;(t = this.normalize(t, !0)) !== o &&
        (this.trigger('remove', { content: this._items[t], position: t }),
        this._items[t].remove(),
        this._items.splice(t, 1),
        this._mergers.splice(t, 1),
        this.invalidate('items'),
        this.trigger('removed', { content: null, position: t }))
    }),
    (c.prototype.preloadAutoWidthImages = function (t) {
      t.each(
        l.proxy(function (t, e) {
          this.enter('pre-loading'),
            (e = l(e)),
            l(new Image())
              .one(
                'load',
                l.proxy(function (t) {
                  e.attr('src', t.target.src),
                    e.css('opacity', 1),
                    this.leave('pre-loading'),
                    this.is('pre-loading') ||
                      this.is('initializing') ||
                      this.refresh()
                }, this)
              )
              .attr(
                'src',
                e.attr('src') || e.attr('data-src') || e.attr('data-src-retina')
              )
        }, this)
      )
    }),
    (c.prototype.destroy = function () {
      for (var t in (this.$element.off('.owl.core'),
      this.$stage.off('.owl.core'),
      l(n).off('.owl.core'),
      !1 !== this.settings.responsive &&
        (i.clearTimeout(this.resizeTimer),
        this.off(i, 'resize', this._handlers.onThrottledResize)),
      this._plugins))
        this._plugins[t].destroy()
      this.$stage.children('.cloned').remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$element
          .removeClass(this.options.refreshClass)
          .removeClass(this.options.loadingClass)
          .removeClass(this.options.loadedClass)
          .removeClass(this.options.rtlClass)
          .removeClass(this.options.dragClass)
          .removeClass(this.options.grabClass)
          .attr(
            'class',
            this.$element
              .attr('class')
              .replace(
                new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'),
                ''
              )
          )
          .removeData('owl.carousel')
    }),
    (c.prototype.op = function (t, e, i) {
      var n = this.settings.rtl
      switch (e) {
        case '<':
          return n ? i < t : t < i
        case '>':
          return n ? t < i : i < t
        case '>=':
          return n ? t <= i : i <= t
        case '<=':
          return n ? i <= t : t <= i
      }
    }),
    (c.prototype.on = function (t, e, i, n) {
      t.addEventListener
        ? t.addEventListener(e, i, n)
        : t.attachEvent && t.attachEvent('on' + e, i)
    }),
    (c.prototype.off = function (t, e, i, n) {
      t.removeEventListener
        ? t.removeEventListener(e, i, n)
        : t.detachEvent && t.detachEvent('on' + e, i)
    }),
    (c.prototype.trigger = function (t, e, i, n, s) {
      var o = { item: { count: this._items.length, index: this.current() } },
        r = l.camelCase(
          l
            .grep(['on', t, i], function (t) {
              return t
            })
            .join('-')
            .toLowerCase()
        ),
        a = l.Event(
          [t, 'owl', i || 'carousel'].join('.').toLowerCase(),
          l.extend({ relatedTarget: this }, o, e)
        )
      return (
        this._supress[t] ||
          (l.each(this._plugins, function (t, e) {
            e.onTrigger && e.onTrigger(a)
          }),
          this.register({ type: c.Type.Event, name: t }),
          this.$element.trigger(a),
          this.settings &&
            'function' == typeof this.settings[r] &&
            this.settings[r].call(this, a)),
        a
      )
    }),
    (c.prototype.enter = function (t) {
      l.each(
        [t].concat(this._states.tags[t] || []),
        l.proxy(function (t, e) {
          this._states.current[e] === o && (this._states.current[e] = 0),
            this._states.current[e]++
        }, this)
      )
    }),
    (c.prototype.leave = function (t) {
      l.each(
        [t].concat(this._states.tags[t] || []),
        l.proxy(function (t, e) {
          this._states.current[e]--
        }, this)
      )
    }),
    (c.prototype.register = function (i) {
      var e
      i.type === c.Type.Event
        ? (l.event.special[i.name] || (l.event.special[i.name] = {}),
          l.event.special[i.name].owl ||
            ((e = l.event.special[i.name]._default),
            (l.event.special[i.name]._default = function (t) {
              return !e ||
                !e.apply ||
                (t.namespace && -1 !== t.namespace.indexOf('owl'))
                ? t.namespace && -1 < t.namespace.indexOf('owl')
                : e.apply(this, arguments)
            }),
            (l.event.special[i.name].owl = !0)))
        : i.type === c.Type.State &&
          (this._states.tags[i.name]
            ? (this._states.tags[i.name] = this._states.tags[i.name].concat(
                i.tags
              ))
            : (this._states.tags[i.name] = i.tags),
          (this._states.tags[i.name] = l.grep(
            this._states.tags[i.name],
            l.proxy(function (t, e) {
              return l.inArray(t, this._states.tags[i.name]) === e
            }, this)
          )))
    }),
    (c.prototype.suppress = function (t) {
      l.each(
        t,
        l.proxy(function (t, e) {
          this._supress[e] = !0
        }, this)
      )
    }),
    (c.prototype.release = function (t) {
      l.each(
        t,
        l.proxy(function (t, e) {
          delete this._supress[e]
        }, this)
      )
    }),
    (c.prototype.pointer = function (t) {
      var e = { x: null, y: null }
      return (
        (t =
          (t = t.originalEvent || t || i.event).touches && t.touches.length
            ? t.touches[0]
            : t.changedTouches && t.changedTouches.length
            ? t.changedTouches[0]
            : t).pageX
          ? ((e.x = t.pageX), (e.y = t.pageY))
          : ((e.x = t.clientX), (e.y = t.clientY)),
        e
      )
    }),
    (c.prototype.isNumeric = function (t) {
      return !isNaN(parseFloat(t))
    }),
    (c.prototype.difference = function (t, e) {
      return { x: t.x - e.x, y: t.y - e.y }
    }),
    (l.fn.owlCarousel = function (e) {
      var n = Array.prototype.slice.call(arguments, 1)
      return this.each(function () {
        var t = l(this),
          i = t.data('owl.carousel')
        i ||
          ((i = new c(this, 'object' == typeof e && e)),
          t.data('owl.carousel', i),
          l.each(
            [
              'next',
              'prev',
              'to',
              'destroy',
              'refresh',
              'replace',
              'add',
              'remove',
            ],
            function (t, e) {
              i.register({ type: c.Type.Event, name: e }),
                i.$element.on(
                  e + '.owl.carousel.core',
                  l.proxy(function (t) {
                    t.namespace &&
                      t.relatedTarget !== this &&
                      (this.suppress([e]),
                      i[e].apply(this, [].slice.call(arguments, 1)),
                      this.release([e]))
                  }, i)
                )
            }
          )),
          'string' == typeof e && '_' !== e.charAt(0) && i[e].apply(i, n)
      })
    }),
    (l.fn.owlCarousel.Constructor = c)
})(window.Zepto || window.jQuery, window, document),
  (function (e, i) {
    function n(t) {
      ;(this._core = t),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          'initialized.owl.carousel': e.proxy(function (t) {
            t.namespace && this._core.settings.autoRefresh && this.watch()
          }, this),
        }),
        (this._core.options = e.extend({}, n.Defaults, this._core.options)),
        this._core.$element.on(this._handlers)
    }
    ;(n.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (n.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.$element.is(':visible')),
          (this._interval = i.setInterval(
            e.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )))
      }),
      (n.prototype.refresh = function () {
        this._core.$element.is(':visible') !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass('owl-hidden', !this._visible),
          this._visible &&
            this._core.invalidate('width') &&
            this._core.refresh())
      }),
      (n.prototype.destroy = function () {
        var t, e
        for (t in (i.clearInterval(this._interval), this._handlers))
          this._core.$element.off(t, this._handlers[t])
        for (e in Object.getOwnPropertyNames(this))
          'function' != typeof this[e] && (this[e] = null)
      }),
      (e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n)
  })(window.Zepto || window.jQuery, window, document),
  (function (a, s) {
    function e(t) {
      ;(this._core = t),
        (this._loaded = []),
        (this._handlers = {
          'initialized.owl.carousel change.owl.carousel resized.owl.carousel':
            a.proxy(function (t) {
              if (
                t.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((t.property && 'position' == t.property.name) ||
                  'initialized' == t.type)
              )
                for (
                  var e = this._core.settings,
                    i = (e.center && Math.ceil(e.items / 2)) || e.items,
                    n = (e.center && -1 * i) || 0,
                    s =
                      (t.property && void 0 !== t.property.value
                        ? t.property.value
                        : this._core.current()) + n,
                    o = this._core.clones().length,
                    r = a.proxy(function (t, e) {
                      this.load(e)
                    }, this);
                  n++ < i;

                )
                  this.load(o / 2 + this._core.relative(s)),
                    o && a.each(this._core.clones(this._core.relative(s)), r),
                    s++
            }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers)
    }
    ;(e.Defaults = { lazyLoad: !1 }),
      (e.prototype.load = function (t) {
        var e = this._core.$stage.children().eq(t),
          t = e && e.find('.owl-lazy')
        !t ||
          -1 < a.inArray(e.get(0), this._loaded) ||
          (t.each(
            a.proxy(function (t, e) {
              var i = a(e),
                n =
                  (1 < s.devicePixelRatio && i.attr('data-src-retina')) ||
                  i.attr('data-src')
              this._core.trigger('load', { element: i, url: n }, 'lazy'),
                i.is('img')
                  ? i
                      .one(
                        'load.owl.lazy',
                        a.proxy(function () {
                          i.css('opacity', 1),
                            this._core.trigger(
                              'loaded',
                              { element: i, url: n },
                              'lazy'
                            )
                        }, this)
                      )
                      .attr('src', n)
                  : (((e = new Image()).onload = a.proxy(function () {
                      i.css({
                        'background-image': 'url("' + n + '")',
                        opacity: '1',
                      }),
                        this._core.trigger(
                          'loaded',
                          { element: i, url: n },
                          'lazy'
                        )
                    }, this)),
                    (e.src = n))
            }, this)
          ),
          this._loaded.push(e.get(0)))
      }),
      (e.prototype.destroy = function () {
        var t, e
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t])
        for (e in Object.getOwnPropertyNames(this))
          'function' != typeof this[e] && (this[e] = null)
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Lazy = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (n) {
    function e(t) {
      ;(this._core = t),
        (this._handlers = {
          'initialized.owl.carousel refreshed.owl.carousel': n.proxy(function (
            t
          ) {
            t.namespace && this._core.settings.autoHeight && this.update()
          },
          this),
          'changed.owl.carousel': n.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              'position' == t.property.name &&
              this.update()
          }, this),
          'loaded.owl.lazy': n.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              t.element.closest('.' + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update()
          }, this),
        }),
        (this._core.options = n.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers)
    }
    ;(e.Defaults = { autoHeight: !1, autoHeightClass: 'owl-height' }),
      (e.prototype.update = function () {
        var t = this._core._current,
          e = t + this._core.settings.items,
          t = this._core.$stage.children().toArray().slice(t, e),
          i = []
        n.each(t, function (t, e) {
          i.push(n(e).height())
        }),
          (e = Math.max.apply(null, i)),
          this._core.$stage
            .parent()
            .height(e)
            .addClass(this._core.settings.autoHeightClass)
      }),
      (e.prototype.destroy = function () {
        var t, e
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t])
        for (e in Object.getOwnPropertyNames(this))
          'function' != typeof this[e] && (this[e] = null)
      }),
      (n.fn.owlCarousel.Constructor.Plugins.AutoHeight = e)
  })(window.Zepto || window.jQuery, (window, document)),
  (function (u, e) {
    function i(t) {
      ;(this._core = t),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          'initialized.owl.carousel': u.proxy(function (t) {
            t.namespace &&
              this._core.register({
                type: 'state',
                name: 'playing',
                tags: ['interacting'],
              })
          }, this),
          'resize.owl.carousel': u.proxy(function (t) {
            t.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              t.preventDefault()
          }, this),
          'refreshed.owl.carousel': u.proxy(function (t) {
            t.namespace &&
              this._core.is('resizing') &&
              this._core.$stage.find('.cloned .owl-video-frame').remove()
          }, this),
          'changed.owl.carousel': u.proxy(function (t) {
            t.namespace &&
              'position' === t.property.name &&
              this._playing &&
              this.stop()
          }, this),
          'prepared.owl.carousel': u.proxy(function (t) {
            var e
            !t.namespace ||
              ((e = u(t.content).find('.owl-video')).length &&
                (e.css('display', 'none'), this.fetch(e, u(t.content))))
          }, this),
        }),
        (this._core.options = u.extend({}, i.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          'click.owl.video',
          '.owl-video-play-icon',
          u.proxy(function (t) {
            this.play(t)
          }, this)
        )
    }
    ;(i.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (i.prototype.fetch = function (t, e) {
        var i = t.attr('data-vimeo-id')
            ? 'vimeo'
            : t.attr('data-vzaar-id')
            ? 'vzaar'
            : 'youtube',
          n =
            t.attr('data-vimeo-id') ||
            t.attr('data-youtube-id') ||
            t.attr('data-vzaar-id'),
          s = t.attr('data-width') || this._core.settings.videoWidth,
          o = t.attr('data-height') || this._core.settings.videoHeight,
          r = t.attr('href')
        if (!r) throw new Error('Missing video URL.')
        if (
          -1 <
          (n = r.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          ))[3].indexOf('youtu')
        )
          i = 'youtube'
        else if (-1 < n[3].indexOf('vimeo')) i = 'vimeo'
        else {
          if (!(-1 < n[3].indexOf('vzaar')))
            throw new Error('Video URL not supported.')
          i = 'vzaar'
        }
        ;(n = n[6]),
          (this._videos[r] = { type: i, id: n, width: s, height: o }),
          e.attr('data-video', r),
          this.thumbnail(t, this._videos[r])
      }),
      (i.prototype.thumbnail = function (e, t) {
        function i(t) {
          ;(n = c.lazyLoad
            ? '<div class="owl-video-tn ' + l + '" ' + a + '="' + t + '"></div>'
            : '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
              t +
              ')"></div>'),
            e.after(n),
            e.after('<div class="owl-video-play-icon"></div>')
        }
        var n,
          s,
          o =
            t.width && t.height
              ? 'style="width:' + t.width + 'px;height:' + t.height + 'px;"'
              : '',
          r = e.find('img'),
          a = 'src',
          l = '',
          c = this._core.settings
        if (
          (e.wrap('<div class="owl-video-wrapper"' + o + '></div>'),
          this._core.settings.lazyLoad && ((a = 'data-src'), (l = 'owl-lazy')),
          r.length)
        )
          return i(r.attr(a)), r.remove(), !1
        'youtube' === t.type
          ? ((s = '//img.youtube.com/vi/' + t.id + '/hqdefault.jpg'), i(s))
          : 'vimeo' === t.type
          ? u.ajax({
              type: 'GET',
              url: '//vimeo.com/api/v2/video/' + t.id + '.json',
              jsonp: 'callback',
              dataType: 'jsonp',
              success: function (t) {
                ;(s = t[0].thumbnail_large), i(s)
              },
            })
          : 'vzaar' === t.type &&
            u.ajax({
              type: 'GET',
              url: '//vzaar.com/api/videos/' + t.id + '.json',
              jsonp: 'callback',
              dataType: 'jsonp',
              success: function (t) {
                ;(s = t.framegrab_url), i(s)
              },
            })
      }),
      (i.prototype.stop = function () {
        this._core.trigger('stop', null, 'video'),
          this._playing.find('.owl-video-frame').remove(),
          this._playing.removeClass('owl-video-playing'),
          (this._playing = null),
          this._core.leave('playing'),
          this._core.trigger('stopped', null, 'video')
      }),
      (i.prototype.play = function (t) {
        var e,
          i = u(t.target).closest('.' + this._core.settings.itemClass),
          n = this._videos[i.attr('data-video')],
          s = n.width || '100%',
          t = n.height || this._core.$stage.height()
        this._playing ||
          (this._core.enter('playing'),
          this._core.trigger('play', null, 'video'),
          (i = this._core.items(this._core.relative(i.index()))),
          this._core.reset(i.index()),
          'youtube' === n.type
            ? (e =
                '<iframe width="' +
                s +
                '" height="' +
                t +
                '" src="//www.youtube.com/embed/' +
                n.id +
                '?autoplay=1&rel=0&v=' +
                n.id +
                '" frameborder="0" allowfullscreen></iframe>')
            : 'vimeo' === n.type
            ? (e =
                '<iframe src="//player.vimeo.com/video/' +
                n.id +
                '?autoplay=1" width="' +
                s +
                '" height="' +
                t +
                '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
            : 'vzaar' === n.type &&
              (e =
                '<iframe frameborder="0"height="' +
                t +
                '"width="' +
                s +
                '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' +
                n.id +
                '/player?autoplay=true"></iframe>'),
          u('<div class="owl-video-frame">' + e + '</div>').insertAfter(
            i.find('.owl-video')
          ),
          (this._playing = i.addClass('owl-video-playing')))
      }),
      (i.prototype.isInFullScreen = function () {
        var t =
          e.fullscreenElement ||
          e.mozFullScreenElement ||
          e.webkitFullscreenElement
        return t && u(t).parent().hasClass('owl-video-frame')
      }),
      (i.prototype.destroy = function () {
        var t, e
        for (t in (this._core.$element.off('click.owl.video'), this._handlers))
          this._core.$element.off(t, this._handlers[t])
        for (e in Object.getOwnPropertyNames(this))
          'function' != typeof this[e] && (this[e] = null)
      }),
      (u.fn.owlCarousel.Constructor.Plugins.Video = i)
  })(window.Zepto || window.jQuery, (window, document)),
  (function (r) {
    function e(t) {
      ;(this.core = t),
        (this.core.options = r.extend({}, e.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = void 0),
        (this.next = void 0),
        (this.handlers = {
          'change.owl.carousel': r.proxy(function (t) {
            t.namespace &&
              'position' == t.property.name &&
              ((this.previous = this.core.current()),
              (this.next = t.property.value))
          }, this),
          'drag.owl.carousel dragged.owl.carousel translated.owl.carousel':
            r.proxy(function (t) {
              t.namespace && (this.swapping = 'translated' == t.type)
            }, this),
          'translate.owl.carousel': r.proxy(function (t) {
            t.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap()
          }, this),
        }),
        this.core.$element.on(this.handlers)
    }
    ;(e.Defaults = { animateOut: !1, animateIn: !1 }),
      (e.prototype.swap = function () {
        var t, e, i, n, s, o
        1 === this.core.settings.items &&
          r.support.animation &&
          r.support.transition &&
          (this.core.speed(0),
          (e = r.proxy(this.clear, this)),
          (i = this.core.$stage.children().eq(this.previous)),
          (n = this.core.$stage.children().eq(this.next)),
          (s = this.core.settings.animateIn),
          (o = this.core.settings.animateOut),
          this.core.current() !== this.previous &&
            (o &&
              ((t =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              i
                .one(r.support.animation.end, e)
                .css({ left: t + 'px' })
                .addClass('animated owl-animated-out')
                .addClass(o)),
            s &&
              n
                .one(r.support.animation.end, e)
                .addClass('animated owl-animated-in')
                .addClass(s)))
      }),
      (e.prototype.clear = function (t) {
        r(t.target)
          .css({ left: '' })
          .removeClass('animated owl-animated-out owl-animated-in')
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd()
      }),
      (e.prototype.destroy = function () {
        var t, e
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t])
        for (e in Object.getOwnPropertyNames(this))
          'function' != typeof this[e] && (this[e] = null)
      }),
      (r.fn.owlCarousel.Constructor.Plugins.Animate = e)
  })(window.Zepto || window.jQuery, (window, document)),
  (function (i, n, s) {
    function e(t) {
      ;(this._core = t),
        (this._timeout = null),
        (this._paused = !1),
        (this._handlers = {
          'changed.owl.carousel': i.proxy(function (t) {
            t.namespace && 'settings' === t.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : t.namespace &&
                'position' === t.property.name &&
                this._core.settings.autoplay &&
                this._setAutoPlayInterval()
          }, this),
          'initialized.owl.carousel': i.proxy(function (t) {
            t.namespace && this._core.settings.autoplay && this.play()
          }, this),
          'play.owl.autoplay': i.proxy(function (t, e, i) {
            t.namespace && this.play(e, i)
          }, this),
          'stop.owl.autoplay': i.proxy(function (t) {
            t.namespace && this.stop()
          }, this),
          'mouseover.owl.autoplay': i.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is('rotating') &&
              this.pause()
          }, this),
          'mouseleave.owl.autoplay': i.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is('rotating') &&
              this.play()
          }, this),
          'touchstart.owl.core': i.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is('rotating') &&
              this.pause()
          }, this),
          'touchend.owl.core': i.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play()
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = i.extend({}, e.Defaults, this._core.options))
    }
    ;(e.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (e.prototype.play = function (t, e) {
        ;(this._paused = !1),
          this._core.is('rotating') ||
            (this._core.enter('rotating'), this._setAutoPlayInterval())
      }),
      (e.prototype._getNextTimeout = function (t, e) {
        return (
          this._timeout && n.clearTimeout(this._timeout),
          n.setTimeout(
            i.proxy(function () {
              this._paused ||
                this._core.is('busy') ||
                this._core.is('interacting') ||
                s.hidden ||
                this._core.next(e || this._core.settings.autoplaySpeed)
            }, this),
            t || this._core.settings.autoplayTimeout
          )
        )
      }),
      (e.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout()
      }),
      (e.prototype.stop = function () {
        this._core.is('rotating') &&
          (n.clearTimeout(this._timeout), this._core.leave('rotating'))
      }),
      (e.prototype.pause = function () {
        this._core.is('rotating') && (this._paused = !0)
      }),
      (e.prototype.destroy = function () {
        var t, e
        for (t in (this.stop(), this._handlers))
          this._core.$element.off(t, this._handlers[t])
        for (e in Object.getOwnPropertyNames(this))
          'function' != typeof this[e] && (this[e] = null)
      }),
      (i.fn.owlCarousel.Constructor.Plugins.autoplay = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (s) {
    'use strict'
    function e(t) {
      ;(this._core = t),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          'prepared.owl.carousel': s.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  s(t.content)
                    .find('[data-dot]')
                    .addBack('[data-dot]')
                    .attr('data-dot') +
                  '</div>'
              )
          }, this),
          'added.owl.carousel': s.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 0, this._templates.pop())
          }, this),
          'remove.owl.carousel': s.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 1)
          }, this),
          'changed.owl.carousel': s.proxy(function (t) {
            t.namespace && 'position' == t.property.name && this.draw()
          }, this),
          'initialized.owl.carousel': s.proxy(function (t) {
            t.namespace &&
              !this._initialized &&
              (this._core.trigger('initialize', null, 'navigation'),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger('initialized', null, 'navigation'))
          }, this),
          'refreshed.owl.carousel': s.proxy(function (t) {
            t.namespace &&
              this._initialized &&
              (this._core.trigger('refresh', null, 'navigation'),
              this.update(),
              this.draw(),
              this._core.trigger('refreshed', null, 'navigation'))
          }, this),
        }),
        (this._core.options = s.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers)
    }
    ;(e.Defaults = {
      nav: !1,
      navText: ['prev', 'next'],
      navSpeed: !1,
      navElement: 'div',
      navContainer: !1,
      navContainerClass: 'owl-nav',
      navClass: ['owl-prev', 'owl-next'],
      slideBy: 1,
      dotClass: 'owl-dot',
      dotsClass: 'owl-dots',
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (e.prototype.initialize = function () {
        var t,
          i = this._core.settings
        for (t in ((this._controls.$relative = (
          i.navContainer
            ? s(i.navContainer)
            : s('<div>').addClass(i.navContainerClass).appendTo(this.$element)
        ).addClass('disabled')),
        (this._controls.$previous = s('<' + i.navElement + '>')
          .addClass(i.navClass[0])
          .html(i.navText[0])
          .prependTo(this._controls.$relative)
          .on(
            'click',
            s.proxy(function (t) {
              this.prev(i.navSpeed)
            }, this)
          )),
        (this._controls.$next = s('<' + i.navElement + '>')
          .addClass(i.navClass[1])
          .html(i.navText[1])
          .appendTo(this._controls.$relative)
          .on(
            'click',
            s.proxy(function (t) {
              this.next(i.navSpeed)
            }, this)
          )),
        i.dotsData ||
          (this._templates = [
            s('<div>')
              .addClass(i.dotClass)
              .append(s('<span>'))
              .prop('outerHTML'),
          ]),
        (this._controls.$absolute = (
          i.dotsContainer
            ? s(i.dotsContainer)
            : s('<div>').addClass(i.dotsClass).appendTo(this.$element)
        ).addClass('disabled')),
        this._controls.$absolute.on(
          'click',
          'div',
          s.proxy(function (t) {
            var e = (
              s(t.target).parent().is(this._controls.$absolute)
                ? s(t.target)
                : s(t.target).parent()
            ).index()
            t.preventDefault(), this.to(e, i.dotsSpeed)
          }, this)
        ),
        this._overrides))
          this._core[t] = s.proxy(this[t], this)
      }),
      (e.prototype.destroy = function () {
        var t, e, i, n
        for (t in this._handlers) this.$element.off(t, this._handlers[t])
        for (e in this._controls) this._controls[e].remove()
        for (n in this.overides) this._core[n] = this._overrides[n]
        for (i in Object.getOwnPropertyNames(this))
          'function' != typeof this[i] && (this[i] = null)
      }),
      (e.prototype.update = function () {
        var t,
          e,
          i = this._core.clones().length / 2,
          n = i + this._core.items().length,
          s = this._core.maximum(!0),
          o = this._core.settings,
          r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items
        if (
          ('page' !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)),
          o.dots || 'page' == o.slideBy)
        )
          for (this._pages = [], t = i, e = 0; t < n; t++) {
            if (r <= e || 0 === e) {
              if (
                (this._pages.push({
                  start: Math.min(s, t - i),
                  end: t - i + r - 1,
                }),
                Math.min(s, t - i) === s)
              )
                break
              ;(e = 0), 0
            }
            e += this._core.mergers(this._core.relative(t))
          }
      }),
      (e.prototype.draw = function () {
        var t = this._core.settings,
          e = this._core.items().length <= t.items,
          i = this._core.relative(this._core.current()),
          n = t.loop || t.rewind
        this._controls.$relative.toggleClass('disabled', !t.nav || e),
          t.nav &&
            (this._controls.$previous.toggleClass(
              'disabled',
              !n && i <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              'disabled',
              !n && i >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass('disabled', !t.dots || e),
          t.dots &&
            ((e =
              this._pages.length - this._controls.$absolute.children().length),
            t.dotsData && 0 != e
              ? this._controls.$absolute.html(this._templates.join(''))
              : 0 < e
              ? this._controls.$absolute.append(
                  new Array(1 + e).join(this._templates[0])
                )
              : e < 0 && this._controls.$absolute.children().slice(e).remove(),
            this._controls.$absolute.find('.active').removeClass('active'),
            this._controls.$absolute
              .children()
              .eq(s.inArray(this.current(), this._pages))
              .addClass('active'))
      }),
      (e.prototype.onTrigger = function (t) {
        var e = this._core.settings
        t.page = {
          index: s.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            e &&
            (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items),
        }
      }),
      (e.prototype.current = function () {
        var i = this._core.relative(this._core.current())
        return s
          .grep(
            this._pages,
            s.proxy(function (t, e) {
              return t.start <= i && t.end >= i
            }, this)
          )
          .pop()
      }),
      (e.prototype.getPosition = function (t) {
        var e,
          i,
          n = this._core.settings
        return (
          'page' == n.slideBy
            ? ((e = s.inArray(this.current(), this._pages)),
              (i = this._pages.length),
              t ? ++e : --e,
              (e = this._pages[((e % i) + i) % i].start))
            : ((e = this._core.relative(this._core.current())),
              (i = this._core.items().length),
              t ? (e += n.slideBy) : (e -= n.slideBy)),
          e
        )
      }),
      (e.prototype.next = function (t) {
        s.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
      }),
      (e.prototype.prev = function (t) {
        s.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
      }),
      (e.prototype.to = function (t, e, i) {
        !i && this._pages.length
          ? ((i = this._pages.length),
            s.proxy(this._overrides.to, this._core)(
              this._pages[((t % i) + i) % i].start,
              e
            ))
          : s.proxy(this._overrides.to, this._core)(t, e)
      }),
      (s.fn.owlCarousel.Constructor.Plugins.Navigation = e)
  })(window.Zepto || window.jQuery, (window, document)),
  (function (n, s) {
    'use strict'
    function e(t) {
      ;(this._core = t),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          'initialized.owl.carousel': n.proxy(function (t) {
            t.namespace &&
              'URLHash' === this._core.settings.startPosition &&
              n(s).trigger('hashchange.owl.navigation')
          }, this),
          'prepared.owl.carousel': n.proxy(function (t) {
            var e
            !t.namespace ||
              ((e = n(t.content)
                .find('[data-hash]')
                .addBack('[data-hash]')
                .attr('data-hash')) &&
                (this._hashes[e] = t.content))
          }, this),
          'changed.owl.carousel': n.proxy(function (t) {
            var i
            t.namespace &&
              'position' === t.property.name &&
              ((i = this._core.items(
                this._core.relative(this._core.current())
              )),
              (t = n
                .map(this._hashes, function (t, e) {
                  return t === i ? e : null
                })
                .join()) &&
                s.location.hash.slice(1) !== t &&
                (s.location.hash = t))
          }, this),
        }),
        (this._core.options = n.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        n(s).on(
          'hashchange.owl.navigation',
          n.proxy(function (t) {
            var e = s.location.hash.substring(1),
              i = this._core.$stage.children(),
              e = this._hashes[e] && i.index(this._hashes[e])
            void 0 !== e &&
              e !== this._core.current() &&
              this._core.to(this._core.relative(e), !1, !0)
          }, this)
        )
    }
    ;(e.Defaults = { URLhashListener: !1 }),
      (e.prototype.destroy = function () {
        var t, e
        for (t in (n(s).off('hashchange.owl.navigation'), this._handlers))
          this._core.$element.off(t, this._handlers[t])
        for (e in Object.getOwnPropertyNames(this))
          'function' != typeof this[e] && (this[e] = null)
      }),
      (n.fn.owlCarousel.Constructor.Plugins.Hash = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (s) {
    var o = s('<support>').get(0).style,
      r = 'Webkit Moz O ms'.split(' '),
      t = {
        transition: {
          end: {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd',
            transition: 'transitionend',
          },
        },
        animation: {
          end: {
            WebkitAnimation: 'webkitAnimationEnd',
            MozAnimation: 'animationend',
            OAnimation: 'oAnimationEnd',
            animation: 'animationend',
          },
        },
      },
      e = function () {
        return !!a('transform')
      },
      i = function () {
        return !!a('perspective')
      },
      n = function () {
        return !!a('animation')
      }
    function a(t, i) {
      var n = !1,
        e = t.charAt(0).toUpperCase() + t.slice(1)
      return (
        s.each((t + ' ' + r.join(e + ' ') + e).split(' '), function (t, e) {
          if (void 0 !== o[e]) return (n = !i || e), !1
        }),
        n
      )
    }
    function l(t) {
      return a(t, !0)
    }
    !(function () {
      return !!a('transition')
    })() ||
      ((s.support.transition = new String(l('transition'))),
      (s.support.transition.end = t.transition.end[s.support.transition])),
      n() &&
        ((s.support.animation = new String(l('animation'))),
        (s.support.animation.end = t.animation.end[s.support.animation])),
      e() &&
        ((s.support.transform = new String(l('transform'))),
        (s.support.transform3d = i()))
  })(window.Zepto || window.jQuery, (window, document)),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(e)
      : 'object' == typeof exports
      ? (module.exports = e())
      : (t.PhotoSwipeUI_Default = e())
  })(this, function () {
    'use strict'
    return function (n, a) {
      function t(t) {
        if (k) return !0
        ;(t = t || window.event), E.timeToIdle && E.mouseUsed && !y && r()
        for (
          var e,
            i,
            n = (t.target || t.srcElement).getAttribute('class') || '',
            s = 0;
          s < L.length;
          s++
        )
          (e = L[s]).onTap &&
            -1 < n.indexOf('pswp__' + e.name) &&
            (e.onTap(), (i = !0))
        i &&
          (t.stopPropagation && t.stopPropagation(),
          (k = !0),
          (t = a.features.isOldAndroid ? 600 : 30),
          setTimeout(function () {
            k = !1
          }, t))
      }
      function i() {
        var t = 1 === E.getNumItemsFn()
        t !== T && (F(p, 'ui--one-slide', t), (T = t))
      }
      function e() {
        F(w, 'share-modal--hidden', B)
      }
      function s() {
        return (
          (B = !B)
            ? (a.removeClass(w, 'pswp__share-modal--fade-in'),
              setTimeout(function () {
                B && e()
              }, 300))
            : (e(),
              setTimeout(function () {
                B || a.addClass(w, 'pswp__share-modal--fade-in')
              }, 30)),
          B ||
            (function () {
              for (
                var t = '', e, i, n, s, o, r = 0;
                r < E.shareButtons.length;
                r++
              ) {
                e = E.shareButtons[r]
                n = E.getImageURLForShare(e)
                s = E.getPageURLForShare(e)
                o = E.getTextForShare(e)
                i = e.url
                  .replace('{{url}}', encodeURIComponent(s))
                  .replace('{{image_url}}', encodeURIComponent(n))
                  .replace('{{raw_image_url}}', n)
                  .replace('{{text}}', encodeURIComponent(o))
                t +=
                  '<a href="' +
                  i +
                  '" target="_blank" ' +
                  'class="pswp__share--' +
                  e.id +
                  '"' +
                  (e.download ? 'download' : '') +
                  '>' +
                  e.label +
                  '</a>'
                if (E.parseShareButtonOut) t = E.parseShareButtonOut(e, t)
              }
              ;(w.children[0].innerHTML = t), (w.children[0].onclick = R)
            })(),
          0
        )
      }
      function o(t) {
        for (var e = 0; e < E.closeElClasses.length; e++)
          if (a.hasClass(t, 'pswp__' + E.closeElClasses[e])) return !0
      }
      function r() {
        clearTimeout(S), (O = 0), y && D.setIdle(!1)
      }
      function l(t) {
        ;((t = (t = t || window.event).relatedTarget || t.toElement) &&
          'HTML' !== t.nodeName) ||
          (clearTimeout(S),
          (S = setTimeout(function () {
            D.setIdle(!0)
          }, E.timeToIdleOutside)))
      }
      function c(t) {
        b !== t && (F(x, 'preloader--active', !t), (b = t))
      }
      function u(t) {
        var e,
          i = t.vGap
        !n.likelyTouchDevice || E.mouseUsed || screen.width > E.fitControlsWidth
          ? ((e = E.barsSize),
            E.captionEl && 'auto' === e.bottom
              ? (A ||
                  ((A = a.createEl(
                    'pswp__caption pswp__caption--fake'
                  )).appendChild(a.createEl('pswp__caption__center')),
                  p.insertBefore(A, m),
                  a.addClass(p, 'pswp__ui--fit')),
                E.addCaptionHTMLFn(t, A, !0)
                  ? ((t = A.clientHeight), (i.bottom = parseInt(t, 10) || 44))
                  : (i.bottom = e.top))
              : (i.bottom = 'auto' === e.bottom ? 0 : e.bottom),
            (i.top = e.top))
          : (i.top = i.bottom = 0)
      }
      function h() {
        function t(t) {
          if (t)
            for (var e = t.length, i = 0; i < e; i++) {
              ;(s = t[i]), (o = s.className)
              for (var n = 0; n < L.length; n++)
                (r = L[n]),
                  -1 < o.indexOf('pswp__' + r.name) &&
                    (E[r.option]
                      ? (a.removeClass(s, 'pswp__element--disabled'),
                        r.onInit && r.onInit(s))
                      : a.addClass(s, 'pswp__element--disabled'))
            }
        }
        var s, o, r
        t(p.children)
        var e = a.getChildByClass(p, 'pswp__top-bar')
        e && t(e.children)
      }
      var d,
        p,
        m,
        A,
        f,
        g,
        w,
        v,
        y,
        _,
        x,
        b,
        C,
        T,
        E,
        k,
        I,
        S,
        D = this,
        M = !1,
        z = !0,
        B = !0,
        P = {
          barsSize: { top: 44, bottom: 'auto' },
          closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'],
          timeToIdle: 4e3,
          timeToIdleOutside: 1e3,
          loadingIndicatorDelay: 1e3,
          addCaptionHTMLFn: function (t, e) {
            return t.title
              ? ((e.children[0].innerHTML = t.title), !0)
              : ((e.children[0].innerHTML = ''), !1)
          },
          closeEl: !0,
          captionEl: !0,
          fullscreenEl: !0,
          zoomEl: !0,
          shareEl: !0,
          counterEl: !0,
          arrowEl: !0,
          preloaderEl: !0,
          tapToClose: !1,
          tapToToggleControls: !0,
          clickToCloseNonZoomable: !0,
          shareButtons: [
            {
              id: 'facebook',
              label: 'Share on Facebook',
              url: 'https://www.facebook.com/sharer/sharer.php?u={{url}}',
            },
            {
              id: 'twitter',
              label: 'Tweet',
              url: 'https://twitter.com/intent/tweet?text={{text}}&url={{url}}',
            },
            {
              id: 'pinterest',
              label: 'Pin it',
              url: 'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}',
            },
            {
              id: 'download',
              label: 'Download image',
              url: '{{raw_image_url}}',
              download: !0,
            },
          ],
          getImageURLForShare: function () {
            return n.currItem.src || ''
          },
          getPageURLForShare: function () {
            return window.location.href
          },
          getTextForShare: function () {
            return n.currItem.title || ''
          },
          indexIndicatorSep: ' / ',
          fitControlsWidth: 1200,
        },
        F = function (t, e, i) {
          a[(i ? 'add' : 'remove') + 'Class'](t, 'pswp__' + e)
        },
        R = function (t) {
          var e = (t = t || window.event).target || t.srcElement
          return (
            n.shout('shareLinkClick', t, e),
            !!e.href &&
              (!!e.hasAttribute('download') ||
                (window.open(
                  e.href,
                  'pswp_share',
                  'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=' +
                    (window.screen ? Math.round(screen.width / 2 - 275) : 100)
                ),
                B || s(),
                !1))
          )
        },
        O = 0,
        L = [
          {
            name: 'caption',
            option: 'captionEl',
            onInit: function (t) {
              m = t
            },
          },
          {
            name: 'share-modal',
            option: 'shareEl',
            onInit: function (t) {
              w = t
            },
            onTap: function () {
              s()
            },
          },
          {
            name: 'button--share',
            option: 'shareEl',
            onInit: function (t) {
              g = t
            },
            onTap: function () {
              s()
            },
          },
          {
            name: 'button--zoom',
            option: 'zoomEl',
            onTap: n.toggleDesktopZoom,
          },
          {
            name: 'counter',
            option: 'counterEl',
            onInit: function (t) {
              f = t
            },
          },
          { name: 'button--close', option: 'closeEl', onTap: n.close },
          { name: 'button--arrow--left', option: 'arrowEl', onTap: n.prev },
          { name: 'button--arrow--right', option: 'arrowEl', onTap: n.next },
          {
            name: 'button--fs',
            option: 'fullscreenEl',
            onTap: function () {
              d.isFullscreen() ? d.exit() : d.enter()
            },
          },
          {
            name: 'preloader',
            option: 'preloaderEl',
            onInit: function (t) {
              x = t
            },
          },
        ]
      ;(D.init = function () {
        var e
        a.extend(n.options, P, !0),
          (E = n.options),
          (p = a.getChildByClass(n.scrollWrap, 'pswp__ui')),
          (_ = n.listen)('onVerticalDrag', function (t) {
            z && t < 0.95
              ? D.hideControls()
              : !z && 0.95 <= t && D.showControls()
          }),
          _('onPinchClose', function (t) {
            z && t < 0.9
              ? (D.hideControls(), (e = !0))
              : e && !z && 0.9 < t && D.showControls()
          }),
          _('zoomGestureEnded', function () {
            ;(e = !1) && !z && D.showControls()
          }),
          _('beforeChange', D.update),
          _('doubleTap', function (t) {
            var e = n.currItem.initialZoomLevel
            n.getZoomLevel() !== e
              ? n.zoomTo(e, t, 333)
              : n.zoomTo(E.getDoubleTapZoom(!1, n.currItem), t, 333)
          }),
          _('preventDragEvent', function (t, e, i) {
            var n = t.target || t.srcElement
            n &&
              n.getAttribute('class') &&
              -1 < t.type.indexOf('mouse') &&
              (0 < n.getAttribute('class').indexOf('__caption') ||
                /(SMALL|STRONG|EM)/i.test(n.tagName)) &&
              (i.prevent = !1)
          }),
          _('bindEvents', function () {
            a.bind(p, 'pswpTap click', t),
              a.bind(n.scrollWrap, 'pswpTap', D.onGlobalTap),
              n.likelyTouchDevice ||
                a.bind(n.scrollWrap, 'mouseover', D.onMouseOver)
          }),
          _('unbindEvents', function () {
            B || s(),
              I && clearInterval(I),
              a.unbind(document, 'mouseout', l),
              a.unbind(document, 'mousemove', r),
              a.unbind(p, 'pswpTap click', t),
              a.unbind(n.scrollWrap, 'pswpTap', D.onGlobalTap),
              a.unbind(n.scrollWrap, 'mouseover', D.onMouseOver),
              d &&
                (a.unbind(document, d.eventK, D.updateFullscreen),
                d.isFullscreen() && ((E.hideAnimationDuration = 0), d.exit()),
                (d = null))
          }),
          _('destroy', function () {
            E.captionEl &&
              (A && p.removeChild(A), a.removeClass(m, 'pswp__caption--empty')),
              w && (w.children[0].onclick = null),
              a.removeClass(p, 'pswp__ui--over-close'),
              a.addClass(p, 'pswp__ui--hidden'),
              D.setIdle(!1)
          }),
          E.showAnimationDuration || a.removeClass(p, 'pswp__ui--hidden'),
          _('initialZoomIn', function () {
            E.showAnimationDuration && a.removeClass(p, 'pswp__ui--hidden')
          }),
          _('initialZoomOut', function () {
            a.addClass(p, 'pswp__ui--hidden')
          }),
          _('parseVerticalMargin', u),
          h(),
          E.shareEl && g && w && (B = !0),
          i(),
          E.timeToIdle &&
            _('mouseUsed', function () {
              a.bind(document, 'mousemove', r),
                a.bind(document, 'mouseout', l),
                (I = setInterval(function () {
                  2 === ++O && D.setIdle(!0)
                }, E.timeToIdle / 2))
            }),
          E.fullscreenEl &&
            !a.features.isOldAndroid &&
            ((d = d || D.getFullscreenAPI())
              ? (a.bind(document, d.eventK, D.updateFullscreen),
                D.updateFullscreen(),
                a.addClass(n.template, 'pswp--supports-fs'))
              : a.removeClass(n.template, 'pswp--supports-fs')),
          E.preloaderEl &&
            (c(!0),
            _('beforeChange', function () {
              clearTimeout(C),
                (C = setTimeout(function () {
                  n.currItem && n.currItem.loading
                    ? (n.allowProgressiveImg() &&
                        (!n.currItem.img || n.currItem.img.naturalWidth)) ||
                      c(!1)
                    : c(!0)
                }, E.loadingIndicatorDelay))
            }),
            _('imageLoadComplete', function (t, e) {
              n.currItem === e && c(!0)
            }))
      }),
        (D.setIdle = function (t) {
          F(p, 'ui--idle', (y = t))
        }),
        (D.update = function () {
          ;(M =
            !(!z || !n.currItem) &&
            (D.updateIndexIndicator(),
            E.captionEl &&
              (E.addCaptionHTMLFn(n.currItem, m),
              F(m, 'caption--empty', !n.currItem.title)),
            !0)),
            B || s(),
            i()
        }),
        (D.updateFullscreen = function (t) {
          t &&
            setTimeout(function () {
              n.setScrollOffset(0, a.getScrollY())
            }, 50),
            a[(d.isFullscreen() ? 'add' : 'remove') + 'Class'](
              n.template,
              'pswp--fs'
            )
        }),
        (D.updateIndexIndicator = function () {
          E.counterEl &&
            (f.innerHTML =
              n.getCurrentIndex() + 1 + E.indexIndicatorSep + E.getNumItemsFn())
        }),
        (D.onGlobalTap = function (t) {
          var e = (t = t || window.event).target || t.srcElement
          k ||
            (t.detail && 'mouse' === t.detail.pointerType
              ? o(e)
                ? n.close()
                : a.hasClass(e, 'pswp__img') &&
                  (1 === n.getZoomLevel() &&
                  n.getZoomLevel() <= n.currItem.fitRatio
                    ? E.clickToCloseNonZoomable && n.close()
                    : n.toggleDesktopZoom(t.detail.releasePoint))
              : (E.tapToToggleControls &&
                  (z ? D.hideControls() : D.showControls()),
                E.tapToClose &&
                  (a.hasClass(e, 'pswp__img') || o(e)) &&
                  n.close()))
        }),
        (D.onMouseOver = function (t) {
          t = (t = t || window.event).target || t.srcElement
          F(p, 'ui--over-close', o(t))
        }),
        (D.hideControls = function () {
          a.addClass(p, 'pswp__ui--hidden'), (z = !1)
        }),
        (D.showControls = function () {
          ;(z = !0), M || D.update(), a.removeClass(p, 'pswp__ui--hidden')
        }),
        (D.supportsFullscreen = function () {
          var t = document
          return !!(
            t.exitFullscreen ||
            t.mozCancelFullScreen ||
            t.webkitExitFullscreen ||
            t.msExitFullscreen
          )
        }),
        (D.getFullscreenAPI = function () {
          var t,
            e = document.documentElement,
            i = 'fullscreenchange'
          return (
            e.requestFullscreen
              ? (t = {
                  enterK: 'requestFullscreen',
                  exitK: 'exitFullscreen',
                  elementK: 'fullscreenElement',
                  eventK: i,
                })
              : e.mozRequestFullScreen
              ? (t = {
                  enterK: 'mozRequestFullScreen',
                  exitK: 'mozCancelFullScreen',
                  elementK: 'mozFullScreenElement',
                  eventK: 'moz' + i,
                })
              : e.webkitRequestFullscreen
              ? (t = {
                  enterK: 'webkitRequestFullscreen',
                  exitK: 'webkitExitFullscreen',
                  elementK: 'webkitFullscreenElement',
                  eventK: 'webkit' + i,
                })
              : e.msRequestFullscreen &&
                (t = {
                  enterK: 'msRequestFullscreen',
                  exitK: 'msExitFullscreen',
                  elementK: 'msFullscreenElement',
                  eventK: 'MSFullscreenChange',
                }),
            t &&
              ((t.enter = function () {
                if (
                  ((v = E.closeOnScroll),
                  (E.closeOnScroll = !1),
                  'webkitRequestFullscreen' !== this.enterK)
                )
                  return n.template[this.enterK]()
                n.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
              }),
              (t.exit = function () {
                return (E.closeOnScroll = v), document[this.exitK]()
              }),
              (t.isFullscreen = function () {
                return document[this.elementK]
              })),
            t
          )
        })
    }
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(e)
      : 'object' == typeof exports
      ? (module.exports = e())
      : (t.PhotoSwipe = e())
  })(this, function () {
    'use strict'
    return function (d, i, t, e) {
      var p = {
        features: null,
        bind: function (t, e, i, n) {
          var s = (n ? 'remove' : 'add') + 'EventListener'
          e = e.split(' ')
          for (var o = 0; o < e.length; o++) e[o] && t[s](e[o], i, !1)
        },
        isArray: function (t) {
          return t instanceof Array
        },
        createEl: function (t, e) {
          e = document.createElement(e || 'div')
          return t && (e.className = t), e
        },
        getScrollY: function () {
          var t = window.pageYOffset
          return void 0 !== t ? t : document.documentElement.scrollTop
        },
        unbind: function (t, e, i) {
          p.bind(t, e, i, !0)
        },
        removeClass: function (t, e) {
          e = new RegExp('(\\s|^)' + e + '(\\s|$)')
          t.className = t.className
            .replace(e, ' ')
            .replace(/^\s\s*/, '')
            .replace(/\s\s*$/, '')
        },
        addClass: function (t, e) {
          p.hasClass(t, e) || (t.className += (t.className ? ' ' : '') + e)
        },
        hasClass: function (t, e) {
          return (
            t.className &&
            new RegExp('(^|\\s)' + e + '(\\s|$)').test(t.className)
          )
        },
        getChildByClass: function (t, e) {
          for (var i = t.firstChild; i; ) {
            if (p.hasClass(i, e)) return i
            i = i.nextSibling
          }
        },
        arraySearch: function (t, e, i) {
          for (var n = t.length; n--; ) if (t[n][i] === e) return n
          return -1
        },
        extend: function (t, e, i) {
          for (var n in e)
            e.hasOwnProperty(n) && ((i && t.hasOwnProperty(n)) || (t[n] = e[n]))
        },
        easing: {
          sine: {
            out: function (t) {
              return Math.sin(t * (Math.PI / 2))
            },
            inOut: function (t) {
              return -(Math.cos(Math.PI * t) - 1) / 2
            },
          },
          cubic: {
            out: function (t) {
              return --t * t * t + 1
            },
          },
        },
        detectFeatures: function () {
          if (p.features) return p.features
          var t,
            e,
            i = p.createEl().style,
            n = '',
            s = {}
          ;(s.oldIE = document.all && !document.addEventListener),
            (s.touch = 'ontouchstart' in window),
            window.requestAnimationFrame &&
              ((s.raf = window.requestAnimationFrame),
              (s.caf = window.cancelAnimationFrame)),
            (s.pointerEvent =
              navigator.pointerEnabled || navigator.msPointerEnabled),
            s.pointerEvent ||
              ((t = navigator.userAgent),
              !/iP(hone|od)/.test(navigator.platform) ||
                ((e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)) &&
                  0 < e.length &&
                  1 <= (e = parseInt(e[1], 10)) &&
                  e < 8 &&
                  (s.isOldIOSPhone = !0)),
              (e = (e = t.match(/Android\s([0-9\.]*)/)) ? e[1] : 0),
              1 <= (e = parseFloat(e)) &&
                (e < 4.4 && (s.isOldAndroid = !0), (s.androidVersion = e)),
              (s.isMobileOpera = /opera mini|opera mobi/i.test(t)))
          for (
            var o,
              r,
              a,
              l = ['transform', 'perspective', 'animationName'],
              c = ['', 'webkit', 'Moz', 'ms', 'O'],
              u = 0;
            u < 4;
            u++
          ) {
            for (var n = c[u], h = 0; h < 3; h++)
              (o = l[h]),
                (r = n + (n ? o.charAt(0).toUpperCase() + o.slice(1) : o)),
                !s[o] && r in i && (s[o] = r)
            n &&
              !s.raf &&
              ((n = n.toLowerCase()),
              (s.raf = window[n + 'RequestAnimationFrame']),
              s.raf &&
                (s.caf =
                  window[n + 'CancelAnimationFrame'] ||
                  window[n + 'CancelRequestAnimationFrame']))
          }
          return (
            s.raf ||
              ((a = 0),
              (s.raf = function (t) {
                var e = new Date().getTime(),
                  i = Math.max(0, 16 - (e - a)),
                  n = window.setTimeout(function () {
                    t(e + i)
                  }, i)
                return (a = e + i), n
              }),
              (s.caf = function (t) {
                clearTimeout(t)
              })),
            (s.svg =
              !!document.createElementNS &&
              !!document.createElementNS('http://www.w3.org/2000/svg', 'svg')
                .createSVGRect),
            (p.features = s)
          )
        },
      }
      p.detectFeatures(),
        p.features.oldIE &&
          (p.bind = function (t, e, i, n) {
            e = e.split(' ')
            for (
              var s,
                o = (n ? 'detach' : 'attach') + 'Event',
                r = function () {
                  i.handleEvent.call(i)
                },
                a = 0;
              a < e.length;
              a++
            )
              if ((s = e[a]))
                if ('object' == typeof i && i.handleEvent) {
                  if (n) {
                    if (!i['oldIE' + s]) return !1
                  } else i['oldIE' + s] = r
                  t[o]('on' + s, i['oldIE' + s])
                } else t[o]('on' + s, i)
          })
      var m = this,
        o = 25,
        A = {
          allowPanToNext: !0,
          spacing: 0.12,
          bgOpacity: 1,
          mouseUsed: !1,
          loop: !0,
          pinchToClose: !0,
          closeOnScroll: !0,
          closeOnVerticalDrag: !0,
          verticalDragRange: 0.75,
          hideAnimationDuration: 333,
          showAnimationDuration: 333,
          showHideOpacity: !1,
          focus: !0,
          escKey: !0,
          arrowKeys: !0,
          mainScrollEndFriction: 0.35,
          panEndFriction: 0.35,
          isClickableElement: function (t) {
            return 'A' === t.tagName
          },
          getDoubleTapZoom: function (t, e) {
            return t || e.initialZoomLevel < 0.7 ? 1 : 1.33
          },
          maxSpreadZoom: 1.33,
          modal: !0,
          scaleMode: 'fit',
        }
      p.extend(A, e)
      function n() {
        return { x: 0, y: 0 }
      }
      function s(t, e) {
        p.extend(m, e.publicMethods), Dt.push(t)
      }
      function r(t) {
        var e = Xe()
        return e - 1 < t ? t - e : t < 0 ? e + t : t
      }
      function a(t, e) {
        return Bt[t] || (Bt[t] = []), Bt[t].push(e)
      }
      function l(t, e, i, n) {
        return n === m.currItem.initialZoomLevel
          ? ((i[t] = m.currItem.initialPosition[t]), !0)
          : ((i[t] = Ht(t, n)),
            i[t] > e.min[t]
              ? ((i[t] = e.min[t]), !0)
              : i[t] < e.max[t] && ((i[t] = e.max[t]), !0))
      }
      function c(t) {
        var e = ''
        A.escKey && 27 === t.keyCode
          ? (e = 'close')
          : A.arrowKeys &&
            (37 === t.keyCode
              ? (e = 'prev')
              : 39 === t.keyCode && (e = 'next')),
          e &&
            (t.ctrlKey ||
              t.altKey ||
              t.shiftKey ||
              t.metaKey ||
              (t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
              m[e]()))
      }
      function u(t) {
        t && (rt || ot || mt || et) && (t.preventDefault(), t.stopPropagation())
      }
      function h() {
        m.setScrollOffset(0, p.getScrollY())
      }
      function f(t) {
        var e
        ;('mousedown' === t.type && 0 < t.button) ||
          (Ve
            ? t.preventDefault()
            : (it && 'mousedown' === t.type) ||
              (Ee(t, !0) && t.preventDefault(),
              Pt('pointerDown'),
              W &&
                ((e = p.arraySearch(ce, t.pointerId, 'id')) < 0 &&
                  (e = ce.length),
                (ce[e] = { x: t.pageX, y: t.pageY, id: t.pointerId })),
              (t = (e = Pe(t)).length),
              (ct = null),
              te(),
              (nt && 1 !== t) ||
                ((nt = ft = !0),
                p.bind(window, T, m),
                (tt = vt = gt = et = lt = rt = st = ot = !1),
                (At = null),
                Pt('firstTouchStart', e),
                jt(xt, bt),
                (_t.x = _t.y = 0),
                jt(ae, e[0]),
                jt(le, ae),
                (ue.x = kt.x * Tt),
                (he = [{ x: ae.x, y: ae.y }]),
                (K = q = Ft()),
                Gt(I, !0),
                _e(),
                xe()),
              !ut &&
                1 < t &&
                !mt &&
                !lt &&
                ((S = I),
                (ut = st = !(ot = !1)),
                (_t.y = _t.x = 0),
                jt(xt, bt),
                jt(se, e[0]),
                jt(oe, e[1]),
                Ie(se, oe, we),
                (ge.x = Math.abs(we.x) - bt.x),
                (ge.y = Math.abs(we.y) - bt.y),
                (ht = ye(se, oe)))))
      }
      function g(t) {
        var e, i
        t.preventDefault(),
          !W ||
            (-1 < (e = p.arraySearch(ce, t.pointerId, 'id')) &&
              (((i = ce[e]).x = t.pageX), (i.y = t.pageY))),
          nt &&
            ((i = Pe(t)),
            At || rt || ut
              ? (ct = i)
              : fe.x !== kt.x * Tt
              ? (At = 'h')
              : ((t = Math.abs(i[0].x - ae.x) - Math.abs(i[0].y - ae.y)),
                Math.abs(t) >= ne && ((At = 0 < t ? 'h' : 'v'), (ct = i))))
      }
      function w(t) {
        if (Y.isOldAndroid) {
          if (it && 'mouseup' === t.type) return
          ;-1 < t.type.indexOf('touch') &&
            (clearTimeout(it),
            (it = setTimeout(function () {
              it = 0
            }, 600)))
        }
        Pt('pointerUp'),
          Ee(t, !1) && t.preventDefault(),
          !W ||
            (-1 < (i = p.arraySearch(ce, t.pointerId, 'id')) &&
              ((o = ce.splice(i, 1)[0]),
              navigator.pointerEnabled
                ? (o.type = t.pointerType || 'mouse')
                : ((o.type = { 4: 'mouse', 2: 'touch', 3: 'pen' }[
                    t.pointerType
                  ]),
                  o.type || (o.type = t.pointerType || 'mouse'))))
        var e = Pe(t),
          i = e.length
        if (2 === (i = 'mouseup' === t.type ? 0 : i)) return !(ct = null)
        1 === i && jt(le, e[0]),
          0 !== i ||
            At ||
            mt ||
            (o ||
              ('mouseup' === t.type
                ? (o = { x: t.pageX, y: t.pageY, type: 'mouse' })
                : t.changedTouches &&
                  t.changedTouches[0] &&
                  (o = {
                    x: t.changedTouches[0].pageX,
                    y: t.changedTouches[0].pageY,
                    type: 'touch',
                  })),
            Pt('touchRelease', t, o))
        var n,
          s,
          o = -1
        if (
          (0 === i &&
            ((nt = !1),
            p.unbind(window, T, m),
            _e(),
            ut ? (o = 0) : -1 !== Ae && (o = Ft() - Ae)),
          (Ae = 1 === i ? Ft() : -1),
          (o = -1 !== o && o < 150 ? 'zoom' : 'swipe'),
          ut &&
            i < 2 &&
            ((ut = !1),
            1 === i && (o = 'zoomPointerUp'),
            Pt('zoomGestureEnded')),
          (ct = null),
          rt || ot || mt || et)
        )
          if ((te(), (J = J || Oe()).calculateSwipeSpeed('x'), et))
            De() < A.verticalDragRange
              ? m.close()
              : ((n = bt.y),
                (s = wt),
                ee('verticalDrag', 0, 1, 300, p.easing.cubic.out, function (t) {
                  ;(bt.y = (m.currItem.initialPosition.y - n) * t + n),
                    Rt((1 - s) * t + s),
                    Lt()
                }),
                Pt('onVerticalDrag', 1))
          else {
            if ((lt || mt) && 0 === i) {
              if (Ze(o, J)) return
              o = 'zoomPointerUp'
            }
            mt ||
              ('swipe' === o ? !lt && I > m.currItem.fitRatio && Le(J) : We())
          }
      }
      var v,
        y,
        _,
        x,
        b,
        C,
        T,
        E,
        k,
        I,
        S,
        D,
        M,
        z,
        B,
        P,
        F,
        R,
        O,
        L,
        Z,
        $,
        W,
        H,
        j,
        N,
        U,
        Q,
        G,
        V,
        Y,
        X,
        q,
        K,
        J,
        tt,
        et,
        it,
        nt,
        st,
        ot,
        rt,
        at,
        lt,
        ct,
        ut,
        ht,
        dt,
        pt,
        mt,
        At,
        ft,
        gt,
        wt,
        vt,
        yt,
        _t = n(),
        xt = n(),
        bt = n(),
        Ct = {},
        Tt = 0,
        Et = {},
        kt = n(),
        It = 0,
        St = !0,
        Dt = [],
        Mt = {},
        zt = !1,
        Bt = {},
        Pt = function (t) {
          var e = Bt[t]
          if (e) {
            var i = Array.prototype.slice.call(arguments)
            i.shift()
            for (var n = 0; n < e.length; n++) e[n].apply(m, i)
          }
        },
        Ft = function () {
          return new Date().getTime()
        },
        Rt = function (t) {
          ;(wt = t), (m.bg.style.opacity = t * A.bgOpacity)
        },
        Ot = function (t, e, i, n, s) {
          ;(!zt || (s && s !== m.currItem)) &&
            (n /= (s || m.currItem).fitRatio),
            (t[$] = D + e + 'px, ' + i + 'px' + M + ' scale(' + n + ')')
        },
        Lt = function (t) {
          pt &&
            (t &&
              (I > m.currItem.fitRatio
                ? zt || (oi(m.currItem, !1, !0), (zt = !0))
                : zt && (oi(m.currItem), (zt = !1))),
            Ot(pt, bt.x, bt.y, I))
        },
        Zt = function (t) {
          t.container &&
            Ot(
              t.container.style,
              t.initialPosition.x,
              t.initialPosition.y,
              t.initialZoomLevel,
              t
            )
        },
        $t = function (t, e) {
          e[$] = D + t + 'px, 0px' + M
        },
        Wt = function (t, e) {
          var i
          !A.loop &&
            e &&
            ((i = x + (kt.x * Tt - t) / kt.x),
            (e = Math.round(t - fe.x)),
            ((i < 0 && 0 < e) || (i >= Xe() - 1 && e < 0)) &&
              (t = fe.x + e * A.mainScrollEndFriction)),
            (fe.x = t),
            $t(t, b)
        },
        Ht = function (t, e) {
          var i = ge[t] - Et[t]
          return xt[t] + _t[t] + i - (e / S) * i
        },
        jt = function (t, e) {
          ;(t.x = e.x), (t.y = e.y), e.id && (t.id = e.id)
        },
        Nt = function (t) {
          ;(t.x = Math.round(t.x)), (t.y = Math.round(t.y))
        },
        Ut = null,
        Qt = function () {
          Ut &&
            (p.unbind(document, 'mousemove', Qt),
            p.addClass(d, 'pswp--has_mouse'),
            (A.mouseUsed = !0),
            Pt('mouseUsed')),
            (Ut = setTimeout(function () {
              Ut = null
            }, 100))
        },
        Gt = function (t, e) {
          t = ni(m.currItem, Ct, t)
          return e && (dt = t), t
        },
        Vt = function (t) {
          return (t = t || m.currItem).initialZoomLevel
        },
        Yt = function (t) {
          return 0 < (t = t || m.currItem).w ? A.maxSpreadZoom : 1
        },
        Xt = {},
        qt = 0,
        Kt = function (t) {
          Xt[t] && (Xt[t].raf && N(Xt[t].raf), qt--, delete Xt[t])
        },
        Jt = function (t) {
          Xt[t] && Kt(t), Xt[t] || (qt++, (Xt[t] = {}))
        },
        te = function () {
          for (var t in Xt) Xt.hasOwnProperty(t) && Kt(t)
        },
        ee = function (t, e, i, n, s, o, r) {
          var a,
            l = Ft()
          Jt(t)
          function c() {
            if (Xt[t]) {
              if (((a = Ft() - l), n <= a)) return Kt(t), o(i), void (r && r())
              o((i - e) * s(a / n) + e), (Xt[t].raf = j(c))
            }
          }
          c()
        },
        e = {
          shout: Pt,
          listen: a,
          viewportSize: Ct,
          options: A,
          isMainScrollAnimating: function () {
            return mt
          },
          getZoomLevel: function () {
            return I
          },
          getCurrentIndex: function () {
            return x
          },
          isDragging: function () {
            return nt
          },
          isZooming: function () {
            return ut
          },
          setScrollOffset: function (t, e) {
            ;(Et.x = t), (V = Et.y = e), Pt('updateScrollOffset', Et)
          },
          applyZoomPan: function (t, e, i, n) {
            ;(bt.x = e), (bt.y = i), (I = t), Lt(n)
          },
          init: function () {
            if (!v && !y) {
              var t
              ;(m.framework = p),
                (m.template = d),
                (m.bg = p.getChildByClass(d, 'pswp__bg')),
                (U = d.className),
                (v = !0),
                (Y = p.detectFeatures()),
                (j = Y.raf),
                (N = Y.caf),
                ($ = Y.transform),
                (G = Y.oldIE),
                (m.scrollWrap = p.getChildByClass(d, 'pswp__scroll-wrap')),
                (m.container = p.getChildByClass(
                  m.scrollWrap,
                  'pswp__container'
                )),
                (b = m.container.style),
                (m.itemHolders = P =
                  [
                    { el: m.container.children[0], wrap: 0, index: -1 },
                    { el: m.container.children[1], wrap: 0, index: -1 },
                    { el: m.container.children[2], wrap: 0, index: -1 },
                  ]),
                (P[0].el.style.display = P[2].el.style.display = 'none'),
                (function () {
                  if ($) {
                    var t = Y.perspective && !H
                    return (
                      (D = 'translate' + (t ? '3d(' : '(')),
                      (M = Y.perspective ? ', 0px)' : ')')
                    )
                  }
                  ;($ = 'left'),
                    p.addClass(d, 'pswp--ie'),
                    ($t = function (t, e) {
                      e.left = t + 'px'
                    }),
                    (Zt = function (t) {
                      var e = 1 < t.fitRatio ? 1 : t.fitRatio,
                        i = t.container.style,
                        n = e * t.w,
                        e = e * t.h
                      ;(i.width = n + 'px'),
                        (i.height = e + 'px'),
                        (i.left = t.initialPosition.x + 'px'),
                        (i.top = t.initialPosition.y + 'px')
                    }),
                    (Lt = function () {
                      var t, e, i, n
                      pt &&
                        ((t = pt),
                        (i =
                          (e = 1 < (n = m.currItem).fitRatio ? 1 : n.fitRatio) *
                          n.w),
                        (n = e * n.h),
                        (t.width = i + 'px'),
                        (t.height = n + 'px'),
                        (t.left = bt.x + 'px'),
                        (t.top = bt.y + 'px'))
                    })
                })(),
                (k = {
                  resize: m.updateSize,
                  orientationchange: function () {
                    clearTimeout(X),
                      (X = setTimeout(function () {
                        Ct.x !== m.scrollWrap.clientWidth && m.updateSize()
                      }, 500))
                  },
                  scroll: h,
                  keydown: c,
                  click: u,
                })
              var e = Y.isOldIOSPhone || Y.isOldAndroid || Y.isMobileOpera
              for (
                (Y.animationName && Y.transform && !e) ||
                  (A.showAnimationDuration = A.hideAnimationDuration = 0),
                  t = 0;
                t < Dt.length;
                t++
              )
                m['init' + Dt[t]]()
              i && (m.ui = new i(m, p)).init(),
                Pt('firstUpdate'),
                (x = x || A.index || 0),
                (isNaN(x) || x < 0 || x >= Xe()) && (x = 0),
                (m.currItem = Ye(x)),
                (Y.isOldIOSPhone || Y.isOldAndroid) && (St = !1),
                d.setAttribute('aria-hidden', 'false'),
                A.modal &&
                  (St
                    ? (d.style.position = 'fixed')
                    : ((d.style.position = 'absolute'),
                      (d.style.top = p.getScrollY() + 'px'))),
                void 0 === V && (Pt('initialLayout'), (V = Q = p.getScrollY()))
              e = 'pswp--open '
              for (
                A.mainClass && (e += A.mainClass + ' '),
                  A.showHideOpacity && (e += 'pswp--animate_opacity '),
                  e += H ? 'pswp--touch' : 'pswp--notouch',
                  e += Y.animationName ? ' pswp--css_animation' : '',
                  e += Y.svg ? ' pswp--svg' : '',
                  p.addClass(d, e),
                  m.updateSize(),
                  C = -1,
                  It = null,
                  t = 0;
                t < 3;
                t++
              )
                $t((t + C) * kt.x, P[t].el.style)
              G || p.bind(m.scrollWrap, E, m),
                a('initialZoomInEnd', function () {
                  m.setContent(P[0], x - 1),
                    m.setContent(P[2], x + 1),
                    (P[0].el.style.display = P[2].el.style.display = 'block'),
                    A.focus && d.focus(),
                    p.bind(document, 'keydown', m),
                    Y.transform && p.bind(m.scrollWrap, 'click', m),
                    A.mouseUsed || p.bind(document, 'mousemove', Qt),
                    p.bind(window, 'resize scroll orientationchange', m),
                    Pt('bindEvents')
                }),
                m.setContent(P[1], x),
                m.updateCurrItem(),
                Pt('afterInit'),
                St ||
                  (z = setInterval(function () {
                    qt ||
                      nt ||
                      ut ||
                      I !== m.currItem.initialZoomLevel ||
                      m.updateSize()
                  }, 1e3)),
                p.addClass(d, 'pswp--visible')
            }
          },
          close: function () {
            v &&
              ((y = !(v = !1)),
              Pt('close'),
              p.unbind(window, 'resize scroll orientationchange', m),
              p.unbind(window, 'scroll', k.scroll),
              p.unbind(document, 'keydown', m),
              p.unbind(document, 'mousemove', Qt),
              Y.transform && p.unbind(m.scrollWrap, 'click', m),
              nt && p.unbind(window, T, m),
              clearTimeout(X),
              Pt('unbindEvents'),
              qe(m.currItem, null, !0, m.destroy))
          },
          destroy: function () {
            Pt('destroy'),
              Ue && clearTimeout(Ue),
              d.setAttribute('aria-hidden', 'true'),
              (d.className = U),
              z && clearInterval(z),
              p.unbind(m.scrollWrap, E, m),
              p.unbind(window, 'scroll', m),
              _e(),
              te(),
              (Bt = null)
          },
          panTo: function (t, e, i) {
            i ||
              (t > dt.min.x ? (t = dt.min.x) : t < dt.max.x && (t = dt.max.x),
              e > dt.min.y ? (e = dt.min.y) : e < dt.max.y && (e = dt.max.y)),
              (bt.x = t),
              (bt.y = e),
              Lt()
          },
          handleEvent: function (t) {
            ;(t = t || window.event), k[t.type] && k[t.type](t)
          },
          goTo: function (t) {
            var e = (t = r(t)) - x
            ;(It = e),
              (x = t),
              (m.currItem = Ye(x)),
              (Tt -= e),
              Wt(kt.x * Tt),
              te(),
              (mt = !1),
              m.updateCurrItem()
          },
          next: function () {
            m.goTo(x + 1)
          },
          prev: function () {
            m.goTo(x - 1)
          },
          updateCurrZoomItem: function (t) {
            var e
            t && Pt('beforeChange', 0),
              (pt = P[1].el.children.length
                ? ((e = P[1].el.children[0]),
                  p.hasClass(e, 'pswp__zoom-wrap') ? e.style : null)
                : null),
              (dt = m.currItem.bounds),
              (S = I = m.currItem.initialZoomLevel),
              (bt.x = dt.center.x),
              (bt.y = dt.center.y),
              t && Pt('afterChange')
          },
          invalidateCurrItems: function () {
            B = !0
            for (var t = 0; t < 3; t++)
              P[t].item && (P[t].item.needsUpdate = !0)
          },
          updateCurrItem: function (t) {
            if (0 !== It) {
              var e,
                i = Math.abs(It)
              if (!(t && i < 2)) {
                ;(m.currItem = Ye(x)),
                  (zt = !1),
                  Pt('beforeChange', It),
                  3 <= i && ((C += It + (0 < It ? -3 : 3)), (i = 3))
                for (var n = 0; n < i; n++)
                  0 < It
                    ? ((e = P.shift()),
                      (P[2] = e),
                      $t((++C + 2) * kt.x, e.el.style),
                      m.setContent(e, x - i + n + 1 + 1))
                    : ((e = P.pop()),
                      P.unshift(e),
                      $t(--C * kt.x, e.el.style),
                      m.setContent(e, x + i - n - 1 - 1))
                !pt ||
                  1 !== Math.abs(It) ||
                  ((t = Ye(F)).initialZoomLevel !== I &&
                    (ni(t, Ct), oi(t), Zt(t))),
                  (It = 0),
                  m.updateCurrZoomItem(),
                  (F = x),
                  Pt('afterChange')
              }
            }
          },
          updateSize: function (t) {
            if (!St && A.modal) {
              var e = p.getScrollY()
              if (
                (V !== e && ((d.style.top = e + 'px'), (V = e)),
                !t && Mt.x === window.innerWidth && Mt.y === window.innerHeight)
              )
                return
              ;(Mt.x = window.innerWidth),
                (Mt.y = window.innerHeight),
                (d.style.height = Mt.y + 'px')
            }
            if (
              ((Ct.x = m.scrollWrap.clientWidth),
              (Ct.y = m.scrollWrap.clientHeight),
              h(),
              (kt.x = Ct.x + Math.round(Ct.x * A.spacing)),
              (kt.y = Ct.y),
              Wt(kt.x * Tt),
              Pt('beforeResize'),
              void 0 !== C)
            ) {
              for (var i, n, s, o = 0; o < 3; o++)
                (i = P[o]),
                  $t((o + C) * kt.x, i.el.style),
                  (s = x + o - 1),
                  A.loop && 2 < Xe() && (s = r(s)),
                  (n = Ye(s)) && (B || n.needsUpdate || !n.bounds)
                    ? (m.cleanSlide(n),
                      m.setContent(i, s),
                      1 === o && ((m.currItem = n), m.updateCurrZoomItem(!0)),
                      (n.needsUpdate = !1))
                    : -1 === i.index && 0 <= s && m.setContent(i, s),
                  n && n.container && (ni(n, Ct), oi(n), Zt(n))
              B = !1
            }
            ;(S = I = m.currItem.initialZoomLevel),
              (dt = m.currItem.bounds) &&
                ((bt.x = dt.center.x), (bt.y = dt.center.y), Lt(!0)),
              Pt('resize')
          },
          zoomTo: function (e, t, i, n, s) {
            t &&
              ((S = I),
              (ge.x = Math.abs(t.x) - bt.x),
              (ge.y = Math.abs(t.y) - bt.y),
              jt(xt, bt))
            var t = Gt(e, !1),
              o = {}
            l('x', t, o, e), l('y', t, o, e)
            var r = I,
              a = { x: bt.x, y: bt.y }
            Nt(o)
            t = function (t) {
              1 === t
                ? ((I = e), (bt.x = o.x), (bt.y = o.y))
                : ((I = (e - r) * t + r),
                  (bt.x = (o.x - a.x) * t + a.x),
                  (bt.y = (o.y - a.y) * t + a.y)),
                s && s(t),
                Lt(1 === t)
            }
            i ? ee('customZoomTo', 0, 1, i, n || p.easing.sine.inOut, t) : t(1)
          },
        },
        ie = 30,
        ne = 10,
        se = {},
        oe = {},
        re = {},
        ae = {},
        le = {},
        ce = [],
        ue = {},
        he = [],
        de = {},
        pe = 0,
        me = n(),
        Ae = 0,
        fe = n(),
        ge = n(),
        we = n(),
        ve = function (t, e) {
          return t.x === e.x && t.y === e.y
        },
        ye = function (t, e) {
          return (
            (de.x = Math.abs(t.x - e.x)),
            (de.y = Math.abs(t.y - e.y)),
            Math.sqrt(de.x * de.x + de.y * de.y)
          )
        },
        _e = function () {
          at && (N(at), (at = null))
        },
        xe = function () {
          nt && ((at = j(xe)), Re())
        },
        be = function () {
          return !('fit' === A.scaleMode && I === m.currItem.initialZoomLevel)
        },
        Ce = function (t, e) {
          return (
            !(!t || t === document) &&
            !(
              t.getAttribute('class') &&
              -1 < t.getAttribute('class').indexOf('pswp__scroll-wrap')
            ) &&
            (e(t) ? t : Ce(t.parentNode, e))
          )
        },
        Te = {},
        Ee = function (t, e) {
          return (
            (Te.prevent = !Ce(t.target, A.isClickableElement)),
            Pt('preventDragEvent', t, e, Te),
            Te.prevent
          )
        },
        ke = function (t, e) {
          return (e.x = t.pageX), (e.y = t.pageY), (e.id = t.identifier), e
        },
        Ie = function (t, e, i) {
          ;(i.x = 0.5 * (t.x + e.x)), (i.y = 0.5 * (t.y + e.y))
        },
        Se = function (t, e, i) {
          var n
          50 < t - K &&
            (((n = 2 < he.length ? he.shift() : {}).x = e),
            (n.y = i),
            he.push(n),
            (K = t))
        },
        De = function () {
          var t = bt.y - m.currItem.initialPosition.y
          return 1 - Math.abs(t / (Ct.y / 2))
        },
        Me = {},
        ze = {},
        Be = [],
        Pe = function (t) {
          for (; 0 < Be.length; ) Be.pop()
          return (
            W
              ? ((yt = 0),
                ce.forEach(function (t) {
                  0 === yt ? (Be[0] = t) : 1 === yt && (Be[1] = t), yt++
                }))
              : -1 < t.type.indexOf('touch')
              ? t.touches &&
                0 < t.touches.length &&
                ((Be[0] = ke(t.touches[0], Me)),
                1 < t.touches.length && (Be[1] = ke(t.touches[1], ze)))
              : ((Me.x = t.pageX),
                (Me.y = t.pageY),
                (Me.id = ''),
                (Be[0] = Me)),
            Be
          )
        },
        Fe = function (t, e) {
          var i,
            n,
            s,
            o = bt[t] + e[t],
            r = 0 < e[t],
            a = fe.x + e.x,
            l = fe.x - ue.x,
            c = o > dt.min[t] || o < dt.max[t] ? A.panEndFriction : 1,
            o = bt[t] + e[t] * c
          if (
            (A.allowPanToNext || I === m.currItem.initialZoomLevel) &&
            (pt
              ? 'h' !== At ||
                'x' !== t ||
                ot ||
                (r
                  ? (o > dt.min[t] &&
                      ((c = A.panEndFriction),
                      dt.min[t],
                      (i = dt.min[t] - xt[t])),
                    (i <= 0 || l < 0) && 1 < Xe()
                      ? ((s = a), l < 0 && a > ue.x && (s = ue.x))
                      : dt.min.x !== dt.max.x && (n = o))
                  : (o < dt.max[t] &&
                      ((c = A.panEndFriction),
                      dt.max[t],
                      (i = xt[t] - dt.max[t])),
                    (i <= 0 || 0 < l) && 1 < Xe()
                      ? ((s = a), 0 < l && a < ue.x && (s = ue.x))
                      : dt.min.x !== dt.max.x && (n = o)))
              : (s = a),
            'x' === t)
          )
            return (
              void 0 !== s && (Wt(s, !0), (lt = s !== ue.x)),
              dt.min.x !== dt.max.x &&
                (void 0 !== n ? (bt.x = n) : lt || (bt.x += e.x * c)),
              void 0 !== s
            )
          mt || lt || (I > m.currItem.fitRatio && (bt[t] += e[t] * c))
        },
        Re = function () {
          if (ct) {
            var t,
              e,
              i,
              n,
              s = ct.length
            if (0 !== s)
              if (
                (jt(se, ct[0]),
                (re.x = se.x - ae.x),
                (re.y = se.y - ae.y),
                ut && 1 < s)
              )
                (ae.x = se.x),
                  (ae.y = se.y),
                  (!re.x && !re.y && ve(ct[1], oe)) ||
                    (jt(oe, ct[1]),
                    ot || ((ot = !0), Pt('zoomGestureStarted')),
                    (t = ye(se, oe)),
                    (o = $e(t)) >
                      m.currItem.initialZoomLevel +
                        m.currItem.initialZoomLevel / 15 && (vt = !0),
                    (e = 1),
                    (i = Vt()),
                    (n = Yt()),
                    o < i
                      ? A.pinchToClose &&
                        !vt &&
                        S <= m.currItem.initialZoomLevel
                        ? (Rt((s = 1 - (i - o) / (i / 1.2))),
                          Pt('onPinchClose', s),
                          (gt = !0))
                        : (o =
                            i - (e = 1 < (e = (i - o) / i) ? 1 : e) * (i / 3))
                      : n < o &&
                        (o = n + (e = 1 < (e = (o - n) / (6 * i)) ? 1 : e) * i),
                    e < 0 && (e = 0),
                    Ie(se, oe, me),
                    (_t.x += me.x - we.x),
                    (_t.y += me.y - we.y),
                    jt(we, me),
                    (bt.x = Ht('x', o)),
                    (bt.y = Ht('y', o)),
                    (tt = I < o),
                    (I = o),
                    Lt())
              else if (
                At &&
                (ft &&
                  ((ft = !1),
                  Math.abs(re.x) >= ne && (re.x -= ct[0].x - le.x),
                  Math.abs(re.y) >= ne && (re.y -= ct[0].y - le.y)),
                (ae.x = se.x),
                (ae.y = se.y),
                0 !== re.x || 0 !== re.y)
              ) {
                if ('v' === At && A.closeOnVerticalDrag && !be()) {
                  ;(_t.y += re.y), (bt.y += re.y)
                  var o = De()
                  return (et = !0), Pt('onVerticalDrag', o), Rt(o), void Lt()
                }
                Se(Ft(), se.x, se.y),
                  (rt = !0),
                  (dt = m.currItem.bounds),
                  Fe('x', re) || (Fe('y', re), Nt(bt), Lt())
              }
          }
        },
        Oe = function () {
          var e,
            i,
            n = {
              lastFlickOffset: {},
              lastFlickDist: {},
              lastFlickSpeed: {},
              slowDownRatio: {},
              slowDownRatioReverse: {},
              speedDecelerationRatio: {},
              speedDecelerationRatioAbs: {},
              distanceOffset: {},
              backAnimDestination: {},
              backAnimStarted: {},
              calculateSwipeSpeed: function (t) {
                ;(i =
                  1 < he.length
                    ? ((e = Ft() - K + 50), he[he.length - 2][t])
                    : ((e = Ft() - q), le[t])),
                  (n.lastFlickOffset[t] = ae[t] - i),
                  (n.lastFlickDist[t] = Math.abs(n.lastFlickOffset[t])),
                  20 < n.lastFlickDist[t]
                    ? (n.lastFlickSpeed[t] = n.lastFlickOffset[t] / e)
                    : (n.lastFlickSpeed[t] = 0),
                  Math.abs(n.lastFlickSpeed[t]) < 0.1 &&
                    (n.lastFlickSpeed[t] = 0),
                  (n.slowDownRatio[t] = 0.95),
                  (n.slowDownRatioReverse[t] = 1 - n.slowDownRatio[t]),
                  (n.speedDecelerationRatio[t] = 1)
              },
              calculateOverBoundsAnimOffset: function (e, t) {
                n.backAnimStarted[e] ||
                  (bt[e] > dt.min[e]
                    ? (n.backAnimDestination[e] = dt.min[e])
                    : bt[e] < dt.max[e] &&
                      (n.backAnimDestination[e] = dt.max[e]),
                  void 0 !== n.backAnimDestination[e] &&
                    ((n.slowDownRatio[e] = 0.7),
                    (n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e]),
                    n.speedDecelerationRatioAbs[e] < 0.05 &&
                      ((n.lastFlickSpeed[e] = 0),
                      (n.backAnimStarted[e] = !0),
                      ee(
                        'bounceZoomPan' + e,
                        bt[e],
                        n.backAnimDestination[e],
                        t || 300,
                        p.easing.sine.out,
                        function (t) {
                          ;(bt[e] = t), Lt()
                        }
                      ))))
              },
              calculateAnimOffset: function (t) {
                n.backAnimStarted[t] ||
                  ((n.speedDecelerationRatio[t] =
                    n.speedDecelerationRatio[t] *
                    (n.slowDownRatio[t] +
                      n.slowDownRatioReverse[t] -
                      (n.slowDownRatioReverse[t] * n.timeDiff) / 10)),
                  (n.speedDecelerationRatioAbs[t] = Math.abs(
                    n.lastFlickSpeed[t] * n.speedDecelerationRatio[t]
                  )),
                  (n.distanceOffset[t] =
                    n.lastFlickSpeed[t] *
                    n.speedDecelerationRatio[t] *
                    n.timeDiff),
                  (bt[t] += n.distanceOffset[t]))
              },
              panAnimLoop: function () {
                Xt.zoomPan &&
                  ((Xt.zoomPan.raf = j(n.panAnimLoop)),
                  (n.now = Ft()),
                  (n.timeDiff = n.now - n.lastNow),
                  (n.lastNow = n.now),
                  n.calculateAnimOffset('x'),
                  n.calculateAnimOffset('y'),
                  Lt(),
                  n.calculateOverBoundsAnimOffset('x'),
                  n.calculateOverBoundsAnimOffset('y'),
                  n.speedDecelerationRatioAbs.x < 0.05 &&
                    n.speedDecelerationRatioAbs.y < 0.05 &&
                    ((bt.x = Math.round(bt.x)),
                    (bt.y = Math.round(bt.y)),
                    Lt(),
                    Kt('zoomPan')))
              },
            }
          return n
        },
        Le = function (t) {
          if (
            (t.calculateSwipeSpeed('y'),
            (dt = m.currItem.bounds),
            (t.backAnimDestination = {}),
            (t.backAnimStarted = {}),
            Math.abs(t.lastFlickSpeed.x) <= 0.05 &&
              Math.abs(t.lastFlickSpeed.y) <= 0.05)
          )
            return (
              (t.speedDecelerationRatioAbs.x = t.speedDecelerationRatioAbs.y =
                0),
              t.calculateOverBoundsAnimOffset('x'),
              t.calculateOverBoundsAnimOffset('y'),
              !0
            )
          Jt('zoomPan'), (t.lastNow = Ft()), t.panAnimLoop()
        },
        Ze = function (t, e) {
          var i, n
          mt || (pe = x),
            'swipe' === t &&
              ((n = ae.x - le.x),
              (t = e.lastFlickDist.x < 10),
              ie < n && (t || 20 < e.lastFlickOffset.x)
                ? (o = -1)
                : n < -ie && (t || e.lastFlickOffset.x < -20) && (o = 1)),
            o &&
              ((x += o) < 0
                ? ((x = A.loop ? Xe() - 1 : 0), (s = !0))
                : x >= Xe() && ((x = A.loop ? 0 : Xe() - 1), (s = !0)),
              (s && !A.loop) || ((It += o), (Tt -= o), (i = !0)))
          var s = kt.x * Tt,
            o = Math.abs(s - fe.x),
            r =
              i || s > fe.x == 0 < e.lastFlickSpeed.x
                ? ((r =
                    0 < Math.abs(e.lastFlickSpeed.x)
                      ? o / Math.abs(e.lastFlickSpeed.x)
                      : 333),
                  (r = Math.min(r, 400)),
                  Math.max(r, 250))
                : 333
          return (
            pe === x && (i = !1),
            (mt = !0),
            Pt('mainScrollAnimStart'),
            ee('mainScroll', fe.x, s, r, p.easing.cubic.out, Wt, function () {
              te(),
                (mt = !1),
                (pe = -1),
                (!i && pe === x) || m.updateCurrItem(),
                Pt('mainScrollAnimComplete')
            }),
            i && m.updateCurrItem(!0),
            i
          )
        },
        $e = function (t) {
          return (1 / ht) * t * S
        },
        We = function () {
          var t = I,
            e = Vt(),
            i = Yt()
          I < e ? (t = e) : i < I && (t = i)
          var n,
            s = wt
          return (
            gt && !tt && !vt && I < e
              ? m.close()
              : (gt &&
                  (n = function (t) {
                    Rt((1 - s) * t + s)
                  }),
                m.zoomTo(t, 0, 200, p.easing.cubic.out, n)),
            !0
          )
        }
      s('Gestures', {
        publicMethods: {
          initGestures: function () {
            function t(t, e, i, n, s) {
              ;(R = t + e), (O = t + i), (L = t + n), (Z = s ? t + s : '')
            }
            ;(W = Y.pointerEvent) && Y.touch && (Y.touch = !1),
              W
                ? navigator.pointerEnabled
                  ? t('pointer', 'down', 'move', 'up', 'cancel')
                  : t('MSPointer', 'Down', 'Move', 'Up', 'Cancel')
                : Y.touch
                ? (t('touch', 'start', 'move', 'end', 'cancel'), (H = !0))
                : t('mouse', 'down', 'move', 'up'),
              (T = O + ' ' + L + ' ' + Z),
              (E = R),
              W &&
                !H &&
                (H =
                  1 < navigator.maxTouchPoints ||
                  1 < navigator.msMaxTouchPoints),
              (m.likelyTouchDevice = H),
              (k[R] = f),
              (k[O] = g),
              (k[L] = w),
              Z && (k[Z] = k[L]),
              Y.touch &&
                ((E += ' mousedown'),
                (T += ' mousemove mouseup'),
                (k.mousedown = k[R]),
                (k.mousemove = k[O]),
                (k.mouseup = k[L])),
              H || (A.allowPanToNext = !1)
          },
        },
      })
      function He(t) {
        function e() {
          ;(t.loading = !1),
            (t.loaded = !0),
            t.loadComplete ? t.loadComplete(t) : (t.img = null),
            (i.onload = i.onerror = null),
            (i = null)
        }
        ;(t.loading = !0), (t.loaded = !1)
        var i = (t.img = p.createEl('pswp__img', 'img'))
        return (
          (i.onload = e),
          (i.onerror = function () {
            ;(t.loadError = !0), e()
          }),
          (i.src = t.src),
          i
        )
      }
      function je(t, e) {
        return (
          t.src &&
          t.loadError &&
          t.container &&
          (e && (t.container.innerHTML = ''),
          (t.container.innerHTML = A.errorMsg.replace('%url%', t.src)),
          1)
        )
      }
      function Ne() {
        if (Je.length) {
          for (var t, e = 0; e < Je.length; e++)
            (t = Je[e]).holder.index === t.index &&
              si(t.index, t.item, t.baseDiv, t.img, !1, t.clearPlaceholder)
          Je = []
        }
      }
      var Ue,
        Qe,
        Ge,
        Ve,
        Ye,
        Xe,
        qe = function (o, t, r, e) {
          var a
          Ue && clearTimeout(Ue),
            (Ge = Ve = !0),
            o.initialLayout
              ? ((a = o.initialLayout), (o.initialLayout = null))
              : (a = A.getThumbBoundsFn && A.getThumbBoundsFn(x))
          function l() {
            Kt('initialZoom'),
              r
                ? (m.template.removeAttribute('style'),
                  m.bg.removeAttribute('style'))
                : (Rt(1),
                  t && (t.style.display = 'block'),
                  p.addClass(d, 'pswp--animated-in'),
                  Pt('initialZoom' + (r ? 'OutEnd' : 'InEnd'))),
              e && e(),
              (Ve = !1)
          }
          var c = r ? A.hideAnimationDuration : A.showAnimationDuration
          if (!c || !a || void 0 === a.x)
            return (
              Pt('initialZoom' + (r ? 'Out' : 'In')),
              (I = o.initialZoomLevel),
              jt(bt, o.initialPosition),
              Lt(),
              (d.style.opacity = r ? 0 : 1),
              Rt(1),
              void (c
                ? setTimeout(function () {
                    l()
                  }, c)
                : l())
            )
          var u, h
          ;(u = _),
            (h = !m.currItem.src || m.currItem.loadError || A.showHideOpacity),
            o.miniImg && (o.miniImg.style.webkitBackfaceVisibility = 'hidden'),
            r ||
              ((I = a.w / o.w),
              (bt.x = a.x),
              (bt.y = a.y - Q),
              (m[h ? 'template' : 'bg'].style.opacity = 0.001),
              Lt()),
            Jt('initialZoom'),
            r && !u && p.removeClass(d, 'pswp--animated-in'),
            h &&
              (r
                ? p[(u ? 'remove' : 'add') + 'Class'](
                    d,
                    'pswp--animate_opacity'
                  )
                : setTimeout(function () {
                    p.addClass(d, 'pswp--animate_opacity')
                  }, 30)),
            (Ue = setTimeout(
              function () {
                var e, i, n, s, t
                Pt('initialZoom' + (r ? 'Out' : 'In')),
                  r
                    ? ((e = a.w / o.w),
                      (i = { x: bt.x, y: bt.y }),
                      (n = I),
                      (s = wt),
                      (t = function (t) {
                        1 === t
                          ? ((I = e), (bt.x = a.x), (bt.y = a.y - V))
                          : ((I = (e - n) * t + n),
                            (bt.x = (a.x - i.x) * t + i.x),
                            (bt.y = (a.y - V - i.y) * t + i.y)),
                          Lt(),
                          h ? (d.style.opacity = 1 - t) : Rt(s - t * s)
                      }),
                      u
                        ? ee('initialZoom', 0, 1, c, p.easing.cubic.out, t, l)
                        : (t(1), (Ue = setTimeout(l, c + 20))))
                    : ((I = o.initialZoomLevel),
                      jt(bt, o.initialPosition),
                      Lt(),
                      Rt(1),
                      h ? (d.style.opacity = 1) : Rt(1),
                      (Ue = setTimeout(l, c + 20)))
              },
              r ? 25 : 90
            ))
        },
        Ke = {},
        Je = [],
        ti = {
          index: 0,
          errorMsg:
            '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
          forceProgressiveLoading: !1,
          preload: [1, 1],
          getNumItemsFn: function () {
            return Qe.length
          },
        },
        ei = function () {
          return {
            center: { x: 0, y: 0 },
            max: { x: 0, y: 0 },
            min: { x: 0, y: 0 },
          }
        },
        ii = function (t, e, i) {
          var n = t.bounds
          ;(n.center.x = Math.round((Ke.x - e) / 2)),
            (n.center.y = Math.round((Ke.y - i) / 2) + t.vGap.top),
            (n.max.x = e > Ke.x ? Math.round(Ke.x - e) : n.center.x),
            (n.max.y =
              i > Ke.y ? Math.round(Ke.y - i) + t.vGap.top : n.center.y),
            (n.min.x = e > Ke.x ? 0 : n.center.x),
            (n.min.y = i > Ke.y ? t.vGap.top : n.center.y)
        },
        ni = function (t, e, i) {
          if (!t.src || t.loadError)
            return (
              (t.w = t.h = 0),
              (t.initialZoomLevel = t.fitRatio = 1),
              (t.bounds = ei()),
              (t.initialPosition = t.bounds.center),
              t.bounds
            )
          var n,
            s = !i
          return (
            s &&
              (t.vGap || (t.vGap = { top: 0, bottom: 0 }),
              Pt('parseVerticalMargin', t)),
            (Ke.x = e.x),
            (Ke.y = e.y - t.vGap.top - t.vGap.bottom),
            s &&
              ((n = Ke.x / t.w),
              (e = Ke.y / t.h),
              (t.fitRatio = n < e ? n : e),
              'orig' === (e = A.scaleMode)
                ? (i = 1)
                : 'fit' === e && (i = t.fitRatio),
              (t.initialZoomLevel = i = 1 < i ? 1 : i),
              t.bounds || (t.bounds = ei())),
            i
              ? (ii(t, t.w * i, t.h * i),
                s &&
                  i === t.initialZoomLevel &&
                  (t.initialPosition = t.bounds.center),
                t.bounds)
              : void 0
          )
        },
        si = function (t, e, i, n, s, o) {
          e.loadError ||
            (n &&
              ((e.imageAppended = !0),
              oi(e, n, e === m.currItem && zt),
              i.appendChild(n),
              o &&
                setTimeout(function () {
                  e &&
                    e.loaded &&
                    e.placeholder &&
                    ((e.placeholder.style.display = 'none'),
                    (e.placeholder = null))
                }, 500)))
        },
        oi = function (t, e, i) {
          var n
          t.src &&
            ((e = e || t.container.lastChild),
            (n = i ? t.w : Math.round(t.w * t.fitRatio)),
            (i = i ? t.h : Math.round(t.h * t.fitRatio)),
            t.placeholder &&
              !t.loaded &&
              ((t.placeholder.style.width = n + 'px'),
              (t.placeholder.style.height = i + 'px')),
            (e.style.width = n + 'px'),
            (e.style.height = i + 'px'))
        }
      s('Controller', {
        publicMethods: {
          lazyLoadItem: function (t) {
            t = r(t)
            var e = Ye(t)
            e &&
              ((!e.loaded && !e.loading) || B) &&
              (Pt('gettingData', t, e), e.src && He(e))
          },
          initController: function () {
            p.extend(A, ti, !0),
              (m.items = Qe = t),
              (Ye = m.getItemAt),
              (Xe = A.getNumItemsFn),
              A.loop,
              Xe() < 3 && (A.loop = !1),
              a('beforeChange', function (t) {
                for (
                  var e = A.preload,
                    i = null === t || 0 <= t,
                    n = Math.min(e[0], Xe()),
                    s = Math.min(e[1], Xe()),
                    o = 1;
                  o <= (i ? s : n);
                  o++
                )
                  m.lazyLoadItem(x + o)
                for (o = 1; o <= (i ? n : s); o++) m.lazyLoadItem(x - o)
              }),
              a('initialLayout', function () {
                m.currItem.initialLayout =
                  A.getThumbBoundsFn && A.getThumbBoundsFn(x)
              }),
              a('mainScrollAnimComplete', Ne),
              a('initialZoomInEnd', Ne),
              a('destroy', function () {
                for (var t, e = 0; e < Qe.length; e++)
                  (t = Qe[e]).container && (t.container = null),
                    t.placeholder && (t.placeholder = null),
                    t.img && (t.img = null),
                    t.preloader && (t.preloader = null),
                    t.loadError && (t.loaded = t.loadError = !1)
                Je = null
              })
          },
          getItemAt: function (t) {
            return 0 <= t && void 0 !== Qe[t] && Qe[t]
          },
          allowProgressiveImg: function () {
            return (
              A.forceProgressiveLoading ||
              !H ||
              A.mouseUsed ||
              1200 < screen.width
            )
          },
          setContent: function (e, i) {
            A.loop && (i = r(i))
            var t = m.getItemAt(e.index)
            t && (t.container = null)
            var n,
              s,
              o = m.getItemAt(i)
            o
              ? (Pt('gettingData', i, o),
                (e.index = i),
                (s = (e.item = o).container = p.createEl('pswp__zoom-wrap')),
                !o.src &&
                  o.html &&
                  (o.html.tagName
                    ? s.appendChild(o.html)
                    : (s.innerHTML = o.html)),
                je(o),
                ni(o, Ct),
                !o.src || o.loadError || o.loaded
                  ? o.src &&
                    !o.loadError &&
                    (((n = p.createEl('pswp__img', 'img')).style.opacity = 1),
                    (n.src = o.src),
                    oi(o, n),
                    si(i, o, s, n, !0))
                  : ((o.loadComplete = function (t) {
                      if (v) {
                        if (e && e.index === i) {
                          if (je(t, !0))
                            return (
                              (t.loadComplete = t.img = null),
                              ni(t, Ct),
                              Zt(t),
                              void (e.index === x && m.updateCurrZoomItem())
                            )
                          t.imageAppended
                            ? !Ve &&
                              t.placeholder &&
                              ((t.placeholder.style.display = 'none'),
                              (t.placeholder = null))
                            : Y.transform && (mt || Ve)
                            ? Je.push({
                                item: t,
                                baseDiv: s,
                                img: t.img,
                                index: i,
                                holder: e,
                                clearPlaceholder: !0,
                              })
                            : si(i, t, s, t.img, mt || Ve, !0)
                        }
                        ;(t.loadComplete = null),
                          (t.img = null),
                          Pt('imageLoadComplete', i, t)
                      }
                    }),
                    p.features.transform &&
                      ((t = 'pswp__img pswp__img--placeholder'),
                      (t += o.msrc ? '' : ' pswp__img--placeholder--blank'),
                      (t = p.createEl(t, o.msrc ? 'img' : '')),
                      o.msrc && (t.src = o.msrc),
                      oi(o, t),
                      s.appendChild(t),
                      (o.placeholder = t)),
                    o.loading || He(o),
                    m.allowProgressiveImg() &&
                      (!Ge && Y.transform
                        ? Je.push({
                            item: o,
                            baseDiv: s,
                            img: o.img,
                            index: i,
                            holder: e,
                          })
                        : si(i, o, s, o.img, !0, !0))),
                Ge || i !== x ? Zt(o) : ((pt = s.style), qe(o, n || o.img)),
                (e.el.innerHTML = ''),
                e.el.appendChild(s))
              : (e.el.innerHTML = '')
          },
          cleanSlide: function (t) {
            t.img && (t.img.onload = t.img.onerror = null),
              (t.loaded = t.loading = t.img = t.imageAppended = !1)
          },
        },
      })
      function ri(t, e, i) {
        var n = document.createEvent('CustomEvent'),
          i = {
            origEvent: t,
            target: t.target,
            releasePoint: e,
            pointerType: i || 'touch',
          }
        n.initCustomEvent('pswpTap', !0, !0, i), t.target.dispatchEvent(n)
      }
      var ai,
        li,
        ci = {}
      s('Tap', {
        publicMethods: {
          initTap: function () {
            a('firstTouchStart', m.onTapStart),
              a('touchRelease', m.onTapRelease),
              a('destroy', function () {
                ;(ci = {}), (ai = null)
              })
          },
          onTapStart: function (t) {
            1 < t.length && (clearTimeout(ai), (ai = null))
          },
          onTapRelease: function (t, e) {
            var i, n, s
            e &&
              (rt ||
                st ||
                qt ||
                ((i = e),
                ai &&
                (clearTimeout(ai),
                (ai = null),
                (n = i),
                (s = ci),
                Math.abs(n.x - s.x) < o && Math.abs(n.y - s.y) < o)
                  ? Pt('doubleTap', i)
                  : 'mouse' !== e.type
                  ? 'BUTTON' === t.target.tagName.toUpperCase() ||
                    p.hasClass(t.target, 'pswp__single-tap')
                    ? ri(t, e)
                    : (jt(ci, i),
                      (ai = setTimeout(function () {
                        ri(t, e), (ai = null)
                      }, 300)))
                  : ri(t, e, 'mouse')))
          },
        },
      }),
        s('DesktopZoom', {
          publicMethods: {
            initDesktopZoom: function () {
              G ||
                (H
                  ? a('mouseUsed', function () {
                      m.setupDesktopZoom()
                    })
                  : m.setupDesktopZoom(!0))
            },
            setupDesktopZoom: function (t) {
              li = {}
              var e = 'wheel mousewheel DOMMouseScroll'
              a('bindEvents', function () {
                p.bind(d, e, m.handleMouseWheel)
              }),
                a('unbindEvents', function () {
                  li && p.unbind(d, e, m.handleMouseWheel)
                }),
                (m.mouseZoomedIn = !1)
              function i() {
                m.mouseZoomedIn &&
                  (p.removeClass(d, 'pswp--zoomed-in'), (m.mouseZoomedIn = !1)),
                  I < 1
                    ? p.addClass(d, 'pswp--zoom-allowed')
                    : p.removeClass(d, 'pswp--zoom-allowed'),
                  s()
              }
              var n,
                s = function () {
                  n && (p.removeClass(d, 'pswp--dragging'), (n = !1))
                }
              a('resize', i),
                a('afterChange', i),
                a('pointerDown', function () {
                  m.mouseZoomedIn && ((n = !0), p.addClass(d, 'pswp--dragging'))
                }),
                a('pointerUp', s),
                t || i()
            },
            handleMouseWheel: function (t) {
              if (I <= m.currItem.fitRatio)
                return (
                  A.modal &&
                    (!A.closeOnScroll || qt || nt
                      ? t.preventDefault()
                      : $ && 2 < Math.abs(t.deltaY) && ((_ = !0), m.close())),
                  !0
                )
              if ((t.stopPropagation(), (li.x = 0), 'deltaX' in t))
                1 === t.deltaMode
                  ? ((li.x = 18 * t.deltaX), (li.y = 18 * t.deltaY))
                  : ((li.x = t.deltaX), (li.y = t.deltaY))
              else if ('wheelDelta' in t)
                t.wheelDeltaX && (li.x = -0.16 * t.wheelDeltaX),
                  t.wheelDeltaY
                    ? (li.y = -0.16 * t.wheelDeltaY)
                    : (li.y = -0.16 * t.wheelDelta)
              else {
                if (!('detail' in t)) return
                li.y = t.detail
              }
              Gt(I, !0)
              var e = bt.x - li.x,
                i = bt.y - li.y
              ;(A.modal ||
                (e <= dt.min.x &&
                  e >= dt.max.x &&
                  i <= dt.min.y &&
                  i >= dt.max.y)) &&
                t.preventDefault(),
                m.panTo(e, i)
            },
            toggleDesktopZoom: function (t) {
              t = t || { x: Ct.x / 2 + Et.x, y: Ct.y / 2 + Et.y }
              var e = A.getDoubleTapZoom(!0, m.currItem),
                i = I === e
              ;(m.mouseZoomedIn = !i),
                m.zoomTo(i ? m.currItem.initialZoomLevel : e, t, 333),
                p[(i ? 'remove' : 'add') + 'Class'](d, 'pswp--zoomed-in')
            },
          },
        })
      function ui() {
        di && clearTimeout(di), mi && clearTimeout(mi)
      }
      function hi() {
        var t = Ti(),
          e = {}
        if (t.length < 5) return e
        var i,
          n = t.split('&')
        for (o = 0; o < n.length; o++)
          n[o] && ((i = n[o].split('=')).length < 2 || (e[i[0]] = i[1]))
        if (A.galleryPIDs) {
          for (var s = e.pid, o = (e.pid = 0); o < Qe.length; o++)
            if (Qe[o].pid === s) {
              e.pid = o
              break
            }
        } else e.pid = parseInt(e.pid, 10) - 1
        return e.pid < 0 && (e.pid = 0), e
      }
      var di,
        pi,
        mi,
        Ai,
        fi,
        gi,
        wi,
        vi,
        yi,
        _i,
        xi,
        bi,
        Ci = { history: !0, galleryUID: 1 },
        Ti = function () {
          return xi.hash.substring(1)
        },
        Ei = function () {
          var t, e
          mi && clearTimeout(mi),
            qt || nt
              ? (mi = setTimeout(Ei, 500))
              : (Ai ? clearTimeout(pi) : (Ai = !0),
                (e = x + 1),
                (t = Ye(x)).hasOwnProperty('pid') && (e = t.pid),
                (t = wi + '&gid=' + A.galleryUID + '&pid=' + e),
                vi || (-1 === xi.hash.indexOf(t) && (_i = !0)),
                (e = xi.href.split('#')[0] + '#' + t),
                bi
                  ? '#' + t !== window.location.hash &&
                    history[vi ? 'replaceState' : 'pushState'](
                      '',
                      document.title,
                      e
                    )
                  : vi
                  ? xi.replace(e)
                  : (xi.hash = t),
                (vi = !0),
                (pi = setTimeout(function () {
                  Ai = !1
                }, 60)))
        }
      s('History', {
        publicMethods: {
          initHistory: function () {
            var t, e
            p.extend(A, Ci, !0),
              A.history &&
                ((xi = window.location),
                (vi = yi = _i = !1),
                (wi = Ti()),
                (bi = 'pushState' in history),
                -1 < wi.indexOf('gid=') &&
                  (wi = (wi = wi.split('&gid=')[0]).split('?gid=')[0]),
                a('afterChange', m.updateURL),
                a('unbindEvents', function () {
                  p.unbind(window, 'hashchange', m.onHashChange)
                }),
                (t = function () {
                  ;(gi = !0),
                    yi ||
                      (_i
                        ? history.back()
                        : wi
                        ? (xi.hash = wi)
                        : bi
                        ? history.pushState(
                            '',
                            document.title,
                            xi.pathname + xi.search
                          )
                        : (xi.hash = '')),
                    ui()
                }),
                a('unbindEvents', function () {
                  _ && t()
                }),
                a('destroy', function () {
                  gi || t()
                }),
                a('firstUpdate', function () {
                  x = hi().pid
                }),
                -1 < (e = wi.indexOf('pid=')) &&
                  '&' === (wi = wi.substring(0, e)).slice(-1) &&
                  (wi = wi.slice(0, -1)),
                setTimeout(function () {
                  v && p.bind(window, 'hashchange', m.onHashChange)
                }, 40))
          },
          onHashChange: function () {
            if (Ti() === wi) return (yi = !0), void m.close()
            Ai || ((fi = !0), m.goTo(hi().pid), (fi = !1))
          },
          updateURL: function () {
            ui(), fi || (vi ? (di = setTimeout(Ei, 800)) : Ei())
          },
        },
      }),
        p.extend(m, e)
    }
  }),
  (function (t) {
    var e,
      s,
      i,
      n,
      o = navigator.userAgent
    function r() {
      clearTimeout(e), (e = setTimeout(i, 99))
    }
    function a() {
      r(), n && n.addListener && n.addListener(r)
    }
    t.HTMLPictureElement &&
      /ecko/.test(o) &&
      o.match(/rv\:(\d+)/) &&
      RegExp.$1 < 45 &&
      addEventListener(
        'resize',
        ((s = document.createElement('source')),
        (i = function () {
          for (
            var t = document.querySelectorAll(
                'picture > img, img[srcset][sizes]'
              ),
              e = 0;
            e < t.length;
            e++
          )
            !(function (t) {
              var e,
                i,
                n = t.parentNode
              'PICTURE' === n.nodeName.toUpperCase()
                ? ((e = s.cloneNode()),
                  n.insertBefore(e, n.firstElementChild),
                  setTimeout(function () {
                    n.removeChild(e)
                  }))
                : (!t._pfLastSize || t.offsetWidth > t._pfLastSize) &&
                  ((t._pfLastSize = t.offsetWidth),
                  (i = t.sizes),
                  (t.sizes += ',100vw'),
                  setTimeout(function () {
                    t.sizes = i
                  }))
            })(t[e])
        }),
        (n = t.matchMedia && matchMedia('(orientation: landscape)')),
        (s.srcset =
          'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
        /^[c|i]|d$/.test(document.readyState || '')
          ? a()
          : document.addEventListener('DOMContentLoaded', a),
        r)
      )
  })(window),
  (function (t, o, c) {
    'use strict'
    var s, u, r
    o.createElement('picture')
    function e() {}
    function i(t, e, i, n) {
      t.addEventListener
        ? t.addEventListener(e, i, n || !1)
        : t.attachEvent && t.attachEvent('on' + e, i)
    }
    var y = {},
      a = !1,
      n = o.createElement('img'),
      h = n.getAttribute,
      d = n.setAttribute,
      p = n.removeAttribute,
      l = o.documentElement,
      m = {},
      _ = { algorithm: '' },
      A = 'data-pfsrc',
      f = A + 'set',
      g = navigator.userAgent,
      x =
        /rident/.test(g) ||
        (/ecko/.test(g) && g.match(/rv\:(\d+)/) && 35 < RegExp.$1),
      b = 'currentSrc',
      w = /\s+\+?\d+(e\d+)?w/,
      v = /(\([^)]+\))?\s*(.+)/,
      C = t.picturefillCFG,
      T = 'font-size:100%!important;',
      E = !0,
      k = {},
      I = {},
      S = t.devicePixelRatio,
      D = { px: 1, in: 96 },
      M = o.createElement('a'),
      z = !1,
      B = /^[ \t\n\r\u000c]+/,
      P = /^[, \t\n\r\u000c]+/,
      F = /^[^ \t\n\r\u000c]+/,
      R = /[,]+$/,
      O = /^\d+$/,
      L = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
      g = function (e) {
        var i = {}
        return function (t) {
          return t in i || (i[t] = e(t)), i[t]
        }
      }
    function Z(t) {
      return ' ' === t || '\t' === t || '\n' === t || '\f' === t || '\r' === t
    }
    function $(t, e) {
      return (
        t.w
          ? ((t.cWidth = y.calcListLength(e || '100vw')),
            (t.res = t.w / t.cWidth))
          : (t.res = t.d),
        t
      )
    }
    var W,
      H,
      j,
      N,
      U,
      Q,
      G,
      V,
      Y,
      X,
      q,
      K,
      J,
      tt,
      et,
      it =
        ((W = /^([\d\.]+)(em|vw|px)$/),
        (H = g(function (t) {
          return (
            'return ' +
            (function () {
              for (var t = arguments, e = 0, i = t[0]; ++e in t; )
                i = i.replace(t[e], t[++e])
              return i
            })(
              (t || '').toLowerCase(),
              /\band\b/g,
              '&&',
              /,/g,
              '||',
              /min-([a-z-\s]+):/g,
              'e.$1>=',
              /max-([a-z-\s]+):/g,
              'e.$1<=',
              /calc([^)]+)/g,
              '($1)',
              /(\d+[\.]*[\d]*)([a-z]+)/g,
              '($1 * e.$2)',
              /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,
              ''
            ) +
            ';'
          )
        })),
        function (t, e) {
          var i
          if (!(t in k))
            if (((k[t] = !1), e && (i = t.match(W)))) k[t] = i[1] * D[i[2]]
            else
              try {
                k[t] = new Function('e', H(t))(D)
              } catch (t) {}
          return k[t]
        }),
      nt = function (t) {
        if (a) {
          var e,
            i,
            n,
            s = t || {}
          if (
            (s.elements &&
              1 === s.elements.nodeType &&
              ('IMG' === s.elements.nodeName.toUpperCase()
                ? (s.elements = [s.elements])
                : ((s.context = s.elements), (s.elements = null))),
            (n = (e =
              s.elements ||
              y.qsa(
                s.context || o,
                s.reevaluate || s.reselect ? y.sel : y.selShort
              )).length))
          ) {
            for (y.setupRun(s), z = !0, i = 0; i < n; i++) y.fillImg(e[i], s)
            y.teardownRun(s)
          }
        }
      }
    function st(t, e) {
      return t.res - e.res
    }
    function ot(t, e) {
      var i, n, s
      if (t && e)
        for (s = y.parseSet(e), t = y.makeUrl(t), i = 0; i < s.length; i++)
          if (t === y.makeUrl(s[i].url)) {
            n = s[i]
            break
          }
      return n
    }
    function rt(e, u) {
      function t(t) {
        var t = t.exec(e.substring(r))
        if (t) return (t = t[0]), (r += t.length), t
      }
      var h,
        d,
        i,
        n,
        s,
        o = e.length,
        r = 0,
        p = []
      function a() {
        for (var t, e, i, n, s, o, r, a = !1, l = {}, c = 0; c < d.length; c++)
          (n = (r = d[c])[r.length - 1]),
            (s = r.substring(0, r.length - 1)),
            (o = parseInt(s, 10)),
            (r = parseFloat(s)),
            O.test(s) && 'w' === n
              ? ((t || e) && (a = !0), 0 === o ? (a = !0) : (t = o))
              : L.test(s) && 'x' === n
              ? ((t || e || i) && (a = !0), r < 0 ? (a = !0) : (e = r))
              : O.test(s) && 'h' === n
              ? ((i || e) && (a = !0), 0 === o ? (a = !0) : (i = o))
              : (a = !0)
        a ||
          ((l.url = h),
          t && (l.w = t),
          e && (l.d = e),
          i && (l.h = i),
          i || e || t || (l.d = 1),
          1 === l.d && (u.has1x = !0),
          (l.set = u),
          p.push(l))
      }
      for (;;) {
        if ((t(P), o <= r)) return p
        ;(h = t(F)),
          (d = []),
          ',' === h.slice(-1)
            ? ((h = h.replace(R, '')), a())
            : (function () {
                for (t(B), i = '', n = 'in descriptor'; ; ) {
                  if (((s = e.charAt(r)), 'in descriptor' === n))
                    if (Z(s))
                      i && (d.push(i), (i = ''), (n = 'after descriptor'))
                    else {
                      if (',' === s) return (r += 1), i && d.push(i), a()
                      if ('(' === s) (i += s), (n = 'in parens')
                      else {
                        if ('' === s) return i && d.push(i), a()
                        i += s
                      }
                    }
                  else if ('in parens' === n)
                    if (')' === s) (i += s), (n = 'in descriptor')
                    else {
                      if ('' === s) return d.push(i), a()
                      i += s
                    }
                  else if ('after descriptor' === n && !Z(s)) {
                    if ('' === s) return a()
                    ;(n = 'in descriptor'), --r
                  }
                  r += 1
                }
              })()
      }
    }
    function at(t) {
      var e,
        i,
        n,
        s,
        o,
        r,
        a =
          /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
        l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i
      for (
        n = (i = (function (t) {
          var e,
            i = '',
            n = [],
            s = [],
            o = 0,
            r = 0,
            a = !1
          function l() {
            i && (n.push(i), (i = ''))
          }
          function c() {
            n[0] && (s.push(n), (n = []))
          }
          for (;;) {
            if ('' === (e = t.charAt(r))) return l(), c(), s
            if (a)
              '*' !== e || '/' !== t[r + 1]
                ? (r += 1)
                : ((a = !1), (r += 2), l())
            else {
              if (Z(e)) {
                if ((t.charAt(r - 1) && Z(t.charAt(r - 1))) || !i) {
                  r += 1
                  continue
                }
                if (0 === o) {
                  l(), (r += 1)
                  continue
                }
                e = ' '
              } else if ('(' === e) o += 1
              else if (')' === e) --o
              else {
                if (',' === e) {
                  l(), c(), (r += 1)
                  continue
                }
                if ('/' === e && '*' === t.charAt(r + 1)) {
                  ;(a = !0), (r += 2)
                  continue
                }
              }
              ;(i += e), (r += 1)
            }
          }
        })(t)).length,
          e = 0;
        e < n;
        e++
      )
        if (
          ((o = (s = i[e])[s.length - 1]),
          (r = o),
          (a.test(r) && 0 <= parseFloat(r)) ||
            l.test(r) ||
            '0' === r ||
            '-0' === r ||
            '+0' === r)
        ) {
          if (((o = o), s.pop(), 0 === s.length)) return o
          if (((s = s.join(' ')), y.matchesMedia(s))) return o
        }
      return '100vw'
    }
    function lt() {
      2 === N.width && (y.supSizes = !0),
        (u = y.supSrcset && !y.supSizes),
        (a = !0),
        setTimeout(nt)
    }
    function ct() {
      var t = o.readyState || ''
      ;(q = setTimeout(ct, 'loading' === t ? 200 : 999)),
        o.body && (y.fillImgs(), (U = U || X.test(t)) && clearTimeout(q))
    }
    function ut() {
      var t = new Date() - Y
      t < G ? (V = setTimeout(ut, G - t)) : ((V = null), Q())
    }
    t.console && console.warn,
      b in n || (b = 'src'),
      (m['image/jpeg'] = !0),
      (m['image/gif'] = !0),
      (m['image/png'] = !0),
      (m['image/svg+xml'] = o.implementation.hasFeature(
        'http://www.w3.org/TR/SVG11/feature#Image',
        '1.1'
      )),
      (y.ns = ('pf' + new Date().getTime()).substr(0, 9)),
      (y.supSrcset = 'srcset' in n),
      (y.supSizes = 'sizes' in n),
      (y.supPicture = !!t.HTMLPictureElement),
      y.supSrcset &&
        y.supPicture &&
        !y.supSizes &&
        ((j = o.createElement('img')),
        (n.srcset = 'data:,a'),
        (j.src = 'data:,a'),
        (y.supSrcset = n.complete === j.complete),
        (y.supPicture = y.supSrcset && y.supPicture)),
      y.supSrcset && !y.supSizes
        ? ((j =
            'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
          ((N = o.createElement('img')).onload = lt),
          (N.onerror = lt),
          N.setAttribute('sizes', '9px'),
          (N.srcset =
            j +
            ' 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w'),
          (N.src = j))
        : (a = !0),
      (y.selShort = 'picture>img,img[srcset]'),
      (y.sel = y.selShort),
      (y.cfg = _),
      (y.DPR = S || 1),
      (y.u = D),
      (y.types = m),
      (y.setSize = e),
      (y.makeUrl = g(function (t) {
        return (M.href = t), M.href
      })),
      (y.qsa = function (t, e) {
        return 'querySelector' in t ? t.querySelectorAll(e) : []
      }),
      (y.matchesMedia = function () {
        return (
          t.matchMedia && (matchMedia('(min-width: 0.1em)') || {}).matches
            ? (y.matchesMedia = function (t) {
                return !t || matchMedia(t).matches
              })
            : (y.matchesMedia = y.mMQ),
          y.matchesMedia.apply(this, arguments)
        )
      }),
      (y.mMQ = function (t) {
        return !t || it(t)
      }),
      (y.calcLength = function (t) {
        t = it(t, !0) || !1
        return (t = t < 0 ? !1 : t)
      }),
      (y.supportsType = function (t) {
        return !t || m[t]
      }),
      (y.parseSize = g(function (t) {
        t = (t || '').match(v)
        return { media: t && t[1], length: t && t[2] }
      })),
      (y.parseSet = function (t) {
        return t.cands || (t.cands = rt(t.srcset, t)), t.cands
      }),
      (y.getEmValue = function () {
        var t, e, i, n
        return (
          !s &&
            (t = o.body) &&
            ((e = o.createElement('div')),
            (i = l.style.cssText),
            (n = t.style.cssText),
            (e.style.cssText =
              'position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)'),
            (l.style.cssText = T),
            (t.style.cssText = T),
            t.appendChild(e),
            (s = e.offsetWidth),
            t.removeChild(e),
            (s = parseFloat(s, 10)),
            (l.style.cssText = i),
            (t.style.cssText = n)),
          s || 16
        )
      }),
      (y.calcListLength = function (t) {
        var e
        return (
          (t in I && !_.uT) ||
            ((e = y.calcLength(at(t))), (I[t] = e || D.width)),
          I[t]
        )
      }),
      (y.setRes = function (t) {
        if (t)
          for (var e, i = 0, n = (e = y.parseSet(t)).length; i < n; i++)
            $(e[i], t.sizes)
        return e
      }),
      (y.setRes.res = $),
      (y.applySetCandidate = function (t, e) {
        if (t.length) {
          var i,
            n,
            s,
            o,
            r,
            a,
            l,
            c,
            u,
            h,
            d,
            p,
            m,
            A,
            f = e[y.ns],
            g = y.DPR,
            w = f.curSrc || e[b],
            v =
              f.curCan ||
              ((l = e),
              (c = w),
              (v = t[0].set),
              (v = ot(
                c,
                (v = !v && c ? (v = l[y.ns].sets) && v[v.length - 1] : v)
              )) &&
                ((c = y.makeUrl(c)),
                (l[y.ns].curSrc = c),
                (l[y.ns].curCan = v).res || $(v, v.set.sizes)),
              v)
          if (
            (v &&
              v.set === t[0].set &&
              ((a = x && !e.complete && v.res - 0.1 > g) ||
                ((v.cached = !0), v.res >= g && (r = v))),
            !r)
          )
            for (t.sort(st), r = t[(o = t.length) - 1], n = 0; n < o; n++)
              if ((i = t[n]).res >= g) {
                r =
                  t[(s = n - 1)] &&
                  (a || w !== y.makeUrl(i.url)) &&
                  ((u = t[s].res),
                  (h = i.res),
                  (d = g),
                  (p = t[s].cached),
                  (A = m = void 0),
                  (u =
                    'saveData' === _.algorithm
                      ? 2.7 < u
                        ? d + 1
                        : ((A = (h - d) * (m = Math.pow(u - 0.6, 1.5))),
                          p && (A += 0.1 * m),
                          u + A)
                      : 1 < d
                      ? Math.sqrt(u * h)
                      : u),
                  d < u)
                    ? t[s]
                    : i
                break
              }
          r &&
            ((v = y.makeUrl(r.url)),
            (f.curSrc = v),
            (f.curCan = r),
            v !== w && y.setSrc(e, r),
            y.setSize(e))
        }
      }),
      (y.setSrc = function (t, e) {
        ;(t.src = e.url),
          'image/svg+xml' === e.set.type &&
            ((e = t.style.width),
            (t.style.width = t.offsetWidth + 1 + 'px'),
            t.offsetWidth + 1 && (t.style.width = e))
      }),
      (y.getSet = function (t) {
        for (var e, i, n = !1, s = t[y.ns].sets, o = 0; o < s.length && !n; o++)
          if (
            (e = s[o]).srcset &&
            y.matchesMedia(e.media) &&
            (i = y.supportsType(e.type))
          ) {
            n = e = 'pending' === i ? i : e
            break
          }
        return n
      }),
      (y.parseSets = function (t, e, i) {
        var n,
          s,
          o,
          r,
          a = e && 'PICTURE' === e.nodeName.toUpperCase(),
          l = t[y.ns]
        ;(l.src !== c && !i.src) ||
          ((l.src = h.call(t, 'src')),
          l.src ? d.call(t, A, l.src) : p.call(t, A)),
          (l.srcset !== c && !i.srcset && y.supSrcset && !t.srcset) ||
            ((n = h.call(t, 'srcset')), (l.srcset = n), (r = !0)),
          (l.sets = []),
          a &&
            ((l.pic = !0),
            (function (t, e) {
              for (
                var i,
                  n,
                  s = t.getElementsByTagName('source'),
                  o = 0,
                  r = s.length;
                o < r;
                o++
              )
                ((i = s[o])[y.ns] = !0),
                  (n = i.getAttribute('srcset')) &&
                    e.push({
                      srcset: n,
                      media: i.getAttribute('media'),
                      type: i.getAttribute('type'),
                      sizes: i.getAttribute('sizes'),
                    })
            })(e, l.sets)),
          l.srcset
            ? ((s = { srcset: l.srcset, sizes: h.call(t, 'sizes') }),
              l.sets.push(s),
              (o = (u || l.src) && w.test(l.srcset || '')) ||
                !l.src ||
                ot(l.src, s) ||
                s.has1x ||
                ((s.srcset += ', ' + l.src),
                s.cands.push({ url: l.src, d: 1, set: s })))
            : l.src && l.sets.push({ srcset: l.src, sizes: null }),
          (l.curCan = null),
          (l.curSrc = c),
          (l.supported = !(a || (s && !y.supSrcset) || (o && !y.supSizes))),
          r &&
            y.supSrcset &&
            !l.supported &&
            (n ? (d.call(t, f, n), (t.srcset = '')) : p.call(t, f)),
          l.supported &&
            !l.srcset &&
            ((!l.src && t.src) || t.src !== y.makeUrl(l.src)) &&
            (null === l.src ? t.removeAttribute('src') : (t.src = l.src)),
          (l.parsed = !0)
      }),
      (y.fillImg = function (t, e) {
        var i,
          n = e.reselect || e.reevaluate
        t[y.ns] || (t[y.ns] = {}),
          (i = t[y.ns]),
          (!n && i.evaled === r) ||
            ((i.parsed && !e.reevaluate) || y.parseSets(t, t.parentNode, e),
            i.supported
              ? (i.evaled = r)
              : ((e = t),
                (i = y.getSet(e)),
                (t = !1),
                'pending' !== i &&
                  ((t = r),
                  i && ((i = y.setRes(i)), y.applySetCandidate(i, e))),
                (e[y.ns].evaled = t)))
      }),
      (y.setupRun = function () {
        ;(z && !E && S === t.devicePixelRatio) ||
          ((E = !1),
          (S = t.devicePixelRatio),
          (k = {}),
          (I = {}),
          (y.DPR = S || 1),
          (D.width = Math.max(t.innerWidth || 0, l.clientWidth)),
          (D.height = Math.max(t.innerHeight || 0, l.clientHeight)),
          (D.vw = D.width / 100),
          (D.vh = D.height / 100),
          (r = [D.height, D.width, S].join('-')),
          (D.em = y.getEmValue()),
          (D.rem = D.em))
      }),
      y.supPicture
        ? ((nt = e), (y.fillImg = e))
        : ((X = t.attachEvent ? /d$|^c/ : /d$|^c|^i/),
          (q = setTimeout(ct, o.body ? 9 : 99)),
          (K = l.clientHeight),
          i(
            t,
            'resize',
            ((Q = function () {
              ;(E =
                Math.max(t.innerWidth || 0, l.clientWidth) !== D.width ||
                l.clientHeight !== K),
                (K = l.clientHeight),
                E && y.fillImgs()
            }),
            (G = 99),
            function () {
              ;(Y = new Date()), (V = V || setTimeout(ut, G))
            })
          ),
          i(o, 'readystatechange', ct)),
      (y.picturefill = nt),
      (y.fillImgs = nt),
      (y.teardownRun = e),
      (nt._ = y),
      (t.picturefillCFG = {
        pf: y,
        push: function (t) {
          var e = t.shift()
          'function' == typeof y[e]
            ? y[e].apply(y, t)
            : ((_[e] = t[0]), z && y.fillImgs({ reselect: !0 }))
        },
      })
    for (; C && C.length; ) t.picturefillCFG.push(C.shift())
    ;(t.picturefill = nt),
      'object' == typeof module && 'object' == typeof module.exports
        ? (module.exports = nt)
        : 'function' == typeof define &&
          define.amd &&
          define('picturefill', function () {
            return nt
          }),
      y.supPicture ||
        (m['image/webp'] =
          ((J = 'image/webp'),
          (tt =
            'data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=='),
          ((et = new t.Image()).onerror = function () {
            ;(m[J] = !1), nt()
          }),
          (et.onload = function () {
            ;(m[J] = 1 === et.width), nt()
          }),
          (et.src = tt),
          'pending'))
  })(window, document),
  function () {
    var D = this.jQuery || window.jQuery,
      M = D(window)
    D.fn.stick_in_parent = function (t) {
      var x,
        e,
        s,
        i,
        n,
        o,
        b = (t = null == t ? {} : t).sticky_class,
        C = t.inner_scrolling,
        T = t.recalc_every,
        E = t.parent,
        k = t.offset_top,
        I = t.spacer,
        S = t.bottoming
      for (
        null == k && (k = 0),
          null == E && (E = void 0),
          null == C && (C = !0),
          null == b && (b = 'is_stuck'),
          x = D(document),
          null == S && (S = !0),
          s = function (t) {
            var e, i
            return window.getComputedStyle
              ? (t[0],
                (e = window.getComputedStyle(t[0])),
                (i =
                  parseFloat(e.getPropertyValue('width')) +
                  parseFloat(e.getPropertyValue('margin-left')) +
                  parseFloat(e.getPropertyValue('margin-right'))),
                'border-box' !== e.getPropertyValue('box-sizing') &&
                  (i +=
                    parseFloat(e.getPropertyValue('border-left-width')) +
                    parseFloat(e.getPropertyValue('border-right-width')) +
                    parseFloat(e.getPropertyValue('padding-left')) +
                    parseFloat(e.getPropertyValue('padding-right'))),
                i)
              : t.outerWidth(!0)
          },
          i = function (o, r, a, l, c, u, h, d) {
            var p, t, m, A, f, g, w, v, e, y, _, n
            if (!o.data('sticky_kit')) {
              if (
                (o.data('sticky_kit', !0),
                (f = x.height()),
                (w = o.parent()),
                !(w = null != E ? w.closest(E) : w).length)
              )
                throw 'failed to find stick parent'
              if (
                ((p = m = !1),
                (_ = null != I ? I && o.closest(I) : D('<div />')) &&
                  _.css('position', o.css('position')),
                (v = function () {
                  var t, e, i
                  if (!d)
                    return (
                      (f = x.height()),
                      (t = parseInt(w.css('border-top-width'), 10)),
                      (e = parseInt(w.css('padding-top'), 10)),
                      (r = parseInt(w.css('padding-bottom'), 10)),
                      (a = w.offset().top + t + e),
                      (l = w.height()),
                      m &&
                        ((p = m = !1),
                        null == I && (o.insertAfter(_), _.detach()),
                        o
                          .css({ position: '', top: '', width: '', bottom: '' })
                          .removeClass(b),
                        (i = !0)),
                      (c =
                        o.offset().top -
                        (parseInt(o.css('margin-top'), 10) || 0) -
                        k),
                      (u = o.outerHeight(!0)),
                      (h = o.css('float')),
                      _ &&
                        _.css({
                          width: s(o),
                          height: u,
                          display: o.css('display'),
                          'vertical-align': o.css('vertical-align'),
                          float: h,
                        }),
                      i ? n() : void 0
                    )
                })(),
                u !== l)
              )
                return (
                  (A = void 0),
                  (g = k),
                  (y = T),
                  (n = function () {
                    var t, e, i, n, s
                    if (!d)
                      return (
                        (i = !1),
                        null != y && --y <= 0 && ((y = T), v(), (i = !0)),
                        i || x.height() === f || (v(), (i = !0)),
                        (i = M.scrollTop()),
                        null != A && (e = i - A),
                        (A = i),
                        m
                          ? (S &&
                              ((n = l + a < i + u + g),
                              p &&
                                !n &&
                                ((p = !1),
                                o
                                  .css({
                                    position: 'fixed',
                                    bottom: '',
                                    top: g,
                                  })
                                  .trigger('sticky_kit:unbottom'))),
                            i < c &&
                              ((m = !1),
                              (g = k),
                              null == I &&
                                (('left' !== h && 'right' !== h) ||
                                  o.insertAfter(_),
                                _.detach()),
                              o
                                .css((t = { position: '', width: '', top: '' }))
                                .removeClass(b)
                                .trigger('sticky_kit:unstick')),
                            C &&
                              (s = M.height()) < u + k &&
                              (p ||
                                ((g -= e),
                                (g = Math.max(s - u, g)),
                                (g = Math.min(k, g)),
                                m && o.css({ top: g + 'px' }))))
                          : c < i &&
                            ((m = !0),
                            ((t = { position: 'fixed', top: g }).width =
                              'border-box' === o.css('box-sizing')
                                ? o.outerWidth() + 'px'
                                : o.width() + 'px'),
                            o.css(t).addClass(b),
                            null == I &&
                              (o.after(_),
                              ('left' !== h && 'right' !== h) || _.append(o)),
                            o.trigger('sticky_kit:stick')),
                        m &&
                        S &&
                        (null == n && (n = l + a < i + u + g), !p && n)
                          ? ((p = !0),
                            'static' === w.css('position') &&
                              w.css({ position: 'relative' }),
                            o
                              .css({
                                position: 'absolute',
                                bottom: r,
                                top: 'auto',
                              })
                              .trigger('sticky_kit:bottom'))
                          : void 0
                      )
                  }),
                  (e = function () {
                    if (
                      !(
                        document.fullscreenElement ||
                        document.mozFullScreenElement ||
                        document.webkitFullscreenElement ||
                        document.msFullscreenElement
                      )
                    )
                      return v(), n()
                  }),
                  (t = function () {
                    if (
                      ((d = !0),
                      M.off('touchmove', n),
                      M.off('scroll', n),
                      M.off('resize', e),
                      D(document.body).off('sticky_kit:recalc', e),
                      o.off('sticky_kit:detach', t),
                      o.removeData('sticky_kit'),
                      o.css({ position: '', bottom: '', top: '', width: '' }),
                      w.position('position', ''),
                      m)
                    )
                      return (
                        null == I &&
                          (('left' !== h && 'right' !== h) || o.insertAfter(_),
                          _.remove()),
                        o.removeClass(b)
                      )
                  }),
                  M.on('touchmove', n),
                  M.on('scroll', n),
                  M.on('resize', e),
                  D(document.body).on('sticky_kit:recalc', e),
                  o.on('sticky_kit:detach', t),
                  setTimeout(n, 0)
                )
            }
          },
          n = 0,
          o = this.length;
        n < o;
        n++
      )
        (e = this[n]), i(D(e))
      return this
    }
  }.call(this),
  (function (a) {
    'use strict'
    var r = {
      settings: { admin_bar: { height: 0, position: '' } },
      init: function () {
        this.admin_bar_check(),
          this.sticky_sidebar(),
          this.accordion_widget(),
          this.sticky_header(),
          this.fit_vids(),
          this.sliders(),
          this.instagram_slider(),
          this.responsive_sidebar(),
          this.header_action_search(),
          this.init_load_more_click(),
          this.init_infinite_scroll(),
          this.scroll_push_state(),
          this.scroll_animate(),
          this.gutenberg_gallery(),
          this.popup(),
          this.reverse_menu(),
          this.start_kenburns(),
          this.object_fit_fix(),
          this.video_fallback_image(),
          this.animate_counters(),
          this.cover_image_parallax(),
          this.align_full_fix(),
          this.switcher()
      },
      resize: function () {
        this.admin_bar_check(), this.sticky_sidebar(), this.align_full_fix()
      },
      scroll: function () {},
      admin_bar_check: function () {
        a('#wpadminbar').length &&
          a('#wpadminbar').is(':visible') &&
          ((this.settings.admin_bar.height = a('#wpadminbar').height()),
          (this.settings.admin_bar.position = a('#wpadminbar').css('position')))
      },
      switcher: function () {
        a('#switcher_link, .switcher_close').click(function (t) {
          t.preventDefault(), a('#switcher_wrap').toggleClass('switcher_moved')
        }),
          a('#switcher_wrap').hasClass('lazy_open') &&
            setTimeout(function () {
              a('#switcher_wrap').hasClass('switcher_moved') &&
                a('#switcher_link').click()
            }, 7e3),
          a('#show-rtl').change(function () {
            a(this).is(':checked')
              ? a('head').append(
                  '<link media="all" type="text/css" href="' +
                    a(this).attr('data-url') +
                    '" id="travell-rtl-css-custom" rel="stylesheet">'
                )
              : a('#travell-rtl-css-custom').remove()
          })
      },
      sticky_sidebar: function () {
        a('.travell-sidebar-sticky').length &&
          a('body').imagesLoaded(function () {
            var t = a('.travell-sidebar-sticky'),
              i = window.matchMedia('(min-width: 1260px)').matches ? 50 : 30
            t.each(function () {
              var t = a(this).parent().hasClass('travell-sidebar-mini')
                  ? 730
                  : 1024,
                e =
                  (a('.travell-header-sticky').length &&
                  !travell_js_settings.header_sticky_up
                    ? a('.travell-header-sticky').outerHeight()
                    : 0) +
                  ('fixed' == r.settings.admin_bar.position
                    ? r.settings.admin_bar.height
                    : 0) +
                  i
              window.matchMedia('(min-width: ' + t + 'px)').matches
                ? a(this).stick_in_parent({
                    inner_scrolling: !0,
                    offset_top: e,
                  })
                : (a(this).css('height', 'auto'),
                  a(this).css('min-height', '1px'),
                  a(this).trigger('sticky_kit:detach'))
            })
          })
      },
      accordion_widget: function () {
        a('.widget').each(function () {
          a(this)
            .find(
              '.menu-item-has-children > a, .page_item_has_children > a, .cat-parent > a'
            )
            .after(
              '<span class="travell-accordion-nav"><i class="o-angle-down-1"></i></span>'
            )
        }),
          a('.widget').on('click', '.travell-accordion-nav', function () {
            a(this)
              .next('ul.sub-menu:first, ul.children:first')
              .slideToggle('fast')
              .parent()
              .toggleClass('active')
          })
      },
      responsive_sidebar: function () {
        a('body').on('click', '.travell-hamburger', function () {
          a('body').addClass('travell-sidebar-action-open travell-lock')
          var t =
            'fixed' == r.settings.admin_bar.position ||
            0 == a(window).scrollTop()
              ? r.settings.admin_bar.height
              : 0
          a('.travell-sidebar').css('top', t)
        }),
          a('body').on(
            'click',
            '.travell-action-close, .travell-body-overlay',
            function () {
              a('body').removeClass('travell-sidebar-action-open travell-lock')
            }
          ),
          a(document).keyup(function (t) {
            27 == t.keyCode &&
              a('body').hasClass('travell-sidebar-action-open') &&
              a('body').removeClass('travell-sidebar-action-open travell-lock')
          })
        var t = a('.travell-sidebar .widget:not(.travell-responsive-nav)'),
          e = a(
            '.travell-sidebar .widget.widget-no-padding:not(.travell-responsive-nav)'
          )
        t.length == e.length &&
          0 != t.length &&
          a('.travell-responsive-nav').addClass('widget-no-padding')
      },
      header_action_search: function () {
        a('body').on('click', '.travell-action-search span', function () {
          a(this).find('i').toggleClass('o-exit-1', 'o-search-1'),
            a(this).closest('.travell-action-search').toggleClass('active'),
            setTimeout(function () {
              a('.active input[type="text"]').focus()
            }, 150)
        }),
          a(document).on('click', function (t) {
            !a(t.target).is('.travell-action-search span') &&
              a(window).width() < 580 &&
              a('.travell-action-search.active .sub-menu').css(
                'width',
                a(window).width()
              )
          })
      },
      sticky_header: function () {
        var i = a('.travell-header-sticky')
        if (l(i)) return !1
        var n = 0
        a(window).scroll(function () {
          var t = a(window).scrollTop(),
            e =
              'fixed' == r.settings.admin_bar.position
                ? r.settings.admin_bar.height
                : 0
          travell_js_settings.header_sticky_up
            ? t < n && t >= travell_js_settings.header_sticky_offset
              ? r.show_sticky_header(i, e)
              : r.hide_sticky_header(i)
            : t >= travell_js_settings.header_sticky_offset
            ? r.show_sticky_header(i, e)
            : r.hide_sticky_header(i),
            (n = t)
        })
      },
      fit_vids: function () {
        a(
          '.travell-entry, .widget, .travell-cover > .container, .travell-custom-content'
        ).fitVids({
          customSelector: [
            "iframe[src*='youtube.com/embed']",
            "iframe[src*='player.vimeo.com/video']",
            "iframe[src*='kickstarter.com/projects']",
            "iframe[src*='players.brightcove.net']",
            "iframe[src*='hulu.com/embed']",
            "iframe[src*='vine.co/v']",
            "iframe[src*='videopress.com/embed']",
            "iframe[src*='dailymotion.com/embed']",
            "iframe[src*='vid.me/e']",
            "iframe[src*='player.twitch.tv']",
            "iframe[src*='facebook.com/plugins/video.php']",
            "iframe[src*='gfycat.com/ifr/']",
            "iframe[src*='liveleak.com/ll_embed']",
            "iframe[src*='media.myspace.com']",
            "iframe[src*='archive.org/embed']",
            "iframe[src*='w.soundcloud.com/player']",
            "iframe[src*='channel9.msdn.com']",
            "iframe[src*='content.jwplatform.com']",
            "iframe[src*='wistia.com']",
            "iframe[src*='vooplayer.com']",
            "iframe[src*='content.zetatv.com.uy']",
            "iframe[src*='embed.wirewax.com']",
            "iframe[src*='eventopedia.navstream.com']",
            "iframe[src*='cdn.playwire.com']",
            "iframe[src*='drive.google.com']",
            "iframe[src*='videos.sproutvideo.com']",
          ].join(','),
          ignore: '[class^="wp-block"]',
        })
      },
      show_sticky_header: function (t, e) {
        ;(t = l(e) ? 0 : t).hasClass('active') ||
          (t.css('top', e), t.addClass('active'))
      },
      hide_sticky_header: function (t) {
        t.hasClass('active') && t.removeClass('active')
      },
      sliders: function () {
        a('body').imagesLoaded(function () {
          a(
            '.travell-cover-gallery .gallery, .travell-cover-slider, .gallery.gallery-columns-1, .wp-block-gallery.columns-1, .travell-cover-gallery .wp-block-gallery'
          ).each(function () {
            var t,
              e,
              i = a(this)
            ;(!i.hasClass('travell-cover-slider') &&
              l(travell_js_settings.use_gallery)) ||
              (i.hasClass('owl-carousel') || i.addClass('owl-carousel'),
              (t = l(
                (e = i.hasClass('wp-block-gallery')
                  ? i.attr('class').match(/columns-(\d+)/)
                  : i.attr('class').match(/gallery-columns-(\d+)/))
              )
                ? 1
                : e[1]),
              (e = !1),
              i.hasClass('travell-cover-slider') &&
                (e = !!travell_js_settings.home_slider_autoplay),
              i.owlCarousel({
                rtl: !!travell_js_settings.rtl_mode,
                loop: !0,
                nav: !0,
                autoWidth: !1,
                autoHeight: !0,
                autoplay: e,
                autoplayTimeout:
                  1e3 * parseInt(travell_js_settings.home_slider_autoplay_time),
                autoplayHoverPause: !0,
                center: !1,
                fluidSpeed: 300,
                margin: 0,
                items: t,
                navText: [
                  '<i class="o-angle-left-1"></i>',
                  '<i class="o-angle-right-1"></i>',
                ],
                responsive: {
                  0: { items: 1 == t ? 1 : 2 },
                  729: { items: 1 == t ? 1 : 3 },
                  1024: { items: 1 == t ? 1 : 4 },
                  1200: { items: t },
                },
              }))
          })
        })
      },
      instagram_slider: function () {
        var t = a('.travell-pre-footer .meks-instagram-widget')
        t.length &&
          (t.hasClass('owl-carousel') || t.addClass('owl-carousel'),
          t.owlCarousel({
            rtl: !!travell_js_settings.rtl_mode,
            loop: !0,
            nav: !0,
            autoWidth: !1,
            center: !0,
            fluidSpeed: 300,
            margin: 0,
            items: 5,
            navText: [
              '<i class="o-angle-left-1"></i>',
              '<i class="o-angle-right-1"></i>',
            ],
            lazyLoad: !0,
            responsive: {
              0: { items: 2 },
              729: { items: 3 },
              1024: { items: 4 },
              1200: { items: 5 },
            },
          }))
      },
      gutenberg_gallery: function () {
        var t
        l(travell_js_settings.use_gallery) ||
          ((t = a('.wp-block-gallery')).length &&
            a('body').imagesLoaded(function () {
              var i = document.querySelectorAll('.wp-block-gallery img')
              t.find('a').each(function (t) {
                var e = i[t].naturalWidth,
                  t = i[t].naturalHeight
                a(this).attr('data-size', JSON.stringify({ w: e, h: t }))
              })
            }))
      },
      popup: function () {
        a('body').on(
          'click',
          '.gallery-item a, a.travell-popup-img, .wp-block-gallery a',
          function (t) {
            if (
              a(this).hasClass('travell-popup-img') ||
              !l(travell_js_settings.use_gallery)
            ) {
              t.preventDefault()
              var e = document.querySelectorAll('.pswp')[0],
                i = [],
                n = 0,
                s = a(this),
                o = !!s
                  .closest('.gallery, .wp-block-gallery')
                  .hasClass('owl-carousel'),
                t = [],
                r = !s.hasClass('travell-popup-img')
              if (
                l(
                  (t = r
                    ? o
                      ? a(this)
                          .closest('.gallery, .wp-block-gallery')
                          .find(
                            '.owl-item:not(.cloned) .gallery-item a, .owl-item:not(.cloned) .blocks-gallery-item a'
                          )
                      : a(this)
                          .closest('.gallery, .wp-block-gallery')
                          .find('.gallery-item a, .blocks-gallery-item a')
                    : a('a.travell-popup-img'))
                )
              )
                return !0
              a.each(t, function (t) {
                s.attr('href') == a(this).attr('href') && (n = t)
                ;(t = JSON.parse(a(this).attr('data-size'))),
                  (t = {
                    src: a(this).attr('href'),
                    w: t.w,
                    h: t.h,
                    title: (r
                      ? a(this).closest('.gallery-item, .blocks-gallery-item')
                      : a(this).closest('figure.wp-caption')
                    )
                      .find('figcaption')
                      .html(),
                  })
                i.push(t)
              }),
                new PhotoSwipe(e, PhotoSwipeUI_Default, i, {
                  history: !1,
                  index: n,
                  preload: [2, 2],
                  captionEl: !0,
                  fullscreenEl: !1,
                  zoomEl: !1,
                  shareEl: !1,
                  preloaderEl: !0,
                }).init()
            }
          }
        )
      },
      reverse_menu: function () {
        a('.travell-header').on('mouseenter', 'ul li', function (t) {
          a(this).find('ul').length &&
            a(window).width() -
              (a(this).find('ul').offset().left +
                a(this).find('ul').outerWidth()) <
              0 &&
            a(this).find('ul').addClass('travell-rev')
        })
      },
      init_load_more_click: function () {
        a('body').on('click', '.load-more > a', function (t) {
          t.preventDefault()
          t = a(this).attr('href')
          l(t) ||
            r.load_more(
              { url: t, elem_with_new_url: '.load-more > a' },
              function () {}
            )
        })
      },
      init_infinite_scroll: function () {
        var e
        l(a('.travell-pagination .travell-infinite-scroll')) ||
          ((e = !0),
          a(window).scroll(function () {
            var t = a('.travell-pagination')
            l(t) ||
              (e &&
                a(this).scrollTop() > t.offset().top - a(this).height() - 200 &&
                ((e = !1),
                (t = a('.travell-pagination .travell-infinite-scroll a').attr(
                  'href'
                )),
                r.load_more(
                  { url: t, elem_with_new_url: '.travell-infinite-scroll a' },
                  function () {
                    e = !0
                  }
                )))
          }))
      },
      load_more: function (t, s) {
        var e, o
        l(t)
          ? console.error("Args can't be empty")
          : (r.toggle_pagination_loader(),
            (e = {
              url: window.location.href,
              container: '.travell-posts',
              elem_with_new_url: '.load-more > a',
              attr_with_new_url: 'href',
            }),
            l((o = a.extend({}, e, t)).url) &&
              console.error('You must provide url to next page'),
            a('<div>').load(o.url, function () {
              var t = a(this),
                e = t.find(o.elem_with_new_url).attr(o.attr_with_new_url),
                i = t.find('title').text(),
                n = t.find(o.container).children()
              n.imagesLoaded(function () {
                var t
                n.hide().appendTo('.travell-posts:last').fadeIn(),
                  window.location.href !== e
                    ? (l(e)
                        ? a(o.elem_with_new_url)
                            .closest('.travell-pagination')
                            .fadeOut('fast')
                            .remove()
                        : a(o.elem_with_new_url).attr(o.attr_with_new_url, e),
                      (t = {
                        prev: window.location.href,
                        next: o.url,
                        offset: a(window).scrollTop(),
                        prev_title: window.document.title,
                        next_title: i,
                      }),
                      r.push_state(t),
                      'function' == typeof s && s(!0))
                    : (a(o.elem_with_new_url)
                        .closest('.travell-pagination')
                        .fadeOut('fast')
                        .remove(),
                      'function' == typeof s && s(!1)),
                  r.toggle_pagination_loader(),
                  r.sticky_sidebar()
              })
            }))
      },
      toggle_pagination_loader: function () {
        a('.travell-pagination').toggleClass('travell-loader-active')
      },
      push_state: function (t) {
        var e = {
            prev: window.location.href,
            next: '',
            offset: a(window).scrollTop(),
            prev_title: window.document.title,
            next_title: window.document.title,
            increase_counter: !0,
          },
          t = a.extend({}, e, t)
        t.increase_counter && (r.pushes.up++, r.pushes.down++),
          delete t.increase_counter,
          r.pushes.url.push(t),
          (window.document.title = t.next_title),
          window.history.pushState(t, '', t.next)
      },
      pushes: { url: [], up: 0, down: 0 },
      scroll_push_state: function () {
        var t, e
        ;(l(a('.travell-pagination .load-more a')) &&
          l(a('.travell-pagination .travell-infinite-scroll'))) ||
          (r.push_state({ increase_counter: !1 }),
          (e = 0),
          a(window).scroll(function () {
            r.pushes.url[r.pushes.up].offset !== t &&
              a(window).scrollTop() < r.pushes.url[r.pushes.up].offset &&
              ((t = r.pushes.url[r.pushes.up].offset),
              (e = 0),
              (window.document.title = r.pushes.url[r.pushes.up].prev_title),
              window.history.replaceState(
                r.pushes.url,
                '',
                r.pushes.url[r.pushes.up].prev
              ),
              (r.pushes.down = r.pushes.up),
              0 !== r.pushes.up && r.pushes.up--),
              r.pushes.url[r.pushes.down].offset !== e &&
                a(window).scrollTop() > r.pushes.url[r.pushes.down].offset &&
                ((e = r.pushes.url[r.pushes.down].offset),
                (t = 0),
                (window.document.title =
                  r.pushes.url[r.pushes.down].next_title),
                window.history.replaceState(
                  r.pushes.url,
                  '',
                  r.pushes.url[r.pushes.down].next
                ),
                (r.pushes.up = r.pushes.down),
                r.pushes.down < r.pushes.url.length - 1 && r.pushes.down++)
          }))
      },
      scroll_animate: function () {
        a('body').on('click', '.travell-scroll-animate', function (t) {
          t.preventDefault()
          var e = this.hash,
            i = a(e),
            t = travell_js_settings.header_sticky
              ? a('.travell-header-sticky').height()
              : 0
          a('html, body')
            .stop()
            .animate(
              { scrollTop: i.offset().top - t },
              900,
              'swing',
              function () {
                window.location.hash = e
              }
            )
        })
      },
      start_kenburns: function () {
        if (window.matchMedia('(max-width: 439px)').matches) return !1
        a('body').imagesLoaded(function () {
          a('body.travell-animation-kenburns').addClass(
            'travell-animation-kenburns-start'
          )
        })
      },
      object_fit_fix: function () {
        a('body').imagesLoaded(function () {
          objectFitImages('.travell-item a.entry-image img,.travell-cover img')
        })
      },
      video_fallback_image: function () {
        travell_js_settings.home_cover_video_image_fallback &&
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ) &&
          this.is_autoplay_supported(function (t) {
            t ||
              (a('.travell-cover-video-item video').css('display', 'none'),
              a('.travell-cover-video-item .travell-fallback-video-image').css(
                'display',
                'block'
              ))
          })
      },
      is_autoplay_supported: function (t) {
        if ('function' != typeof t)
          return (
            console.log('is_autoplay_supported: Callback must be a function!'),
            !1
          )
        var e
        sessionStorage.autoplay_supported
          ? 'true' === sessionStorage.autoplay_supported
            ? t(!0)
            : t(!1)
          : (((e = document.createElement('video')).autoplay = !0),
            (e.src =
              'data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDJtcDQxaXNvbWF2YzEAAATKbW9vdgAAAGxtdmhkAAAAANLEP5XSxD+VAAB1MAAAdU4AAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAACFpb2RzAAAAABCAgIAQAE////9//w6AgIAEAAAAAQAABDV0cmFrAAAAXHRraGQAAAAH0sQ/ldLEP5UAAAABAAAAAAAAdU4AAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAoAAAAFoAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAHVOAAAH0gABAAAAAAOtbWRpYQAAACBtZGhkAAAAANLEP5XSxD+VAAB1MAAAdU5VxAAAAAAANmhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABMLVNNQVNIIFZpZGVvIEhhbmRsZXIAAAADT21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAw9zdGJsAAAAwXN0c2QAAAAAAAAAAQAAALFhdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAoABaABIAAAASAAAAAAAAAABCkFWQyBDb2RpbmcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAAAOGF2Y0MBZAAf/+EAHGdkAB+s2UCgL/lwFqCgoKgAAB9IAAdTAHjBjLABAAVo6+yyLP34+AAAAAATY29scm5jbHgABQAFAAUAAAAAEHBhc3AAAAABAAAAAQAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAAQBjdHRzAAAAAAAAAB4AAAABAAAH0gAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAE40AAAABAAAH0gAAAAEAAAAAAAAAAQAAA+kAAAABAAATjQAAAAEAAAfSAAAAAQAAAAAAAAABAAAD6QAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAE40AAAABAAAH0gAAAAEAAAAAAAAAAQAAA+kAAAABAAATjQAAAAEAAAfSAAAAAQAAAAAAAAABAAAD6QAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAB9IAAAAUc3RzcwAAAAAAAAABAAAAAQAAACpzZHRwAAAAAKaWlpqalpaampaWmpqWlpqalpaampaWmpqWlpqalgAAABxzdHNjAAAAAAAAAAEAAAABAAAAHgAAAAEAAACMc3RzegAAAAAAAAAAAAAAHgAAA5YAAAAVAAAAEwAAABMAAAATAAAAGwAAABUAAAATAAAAEwAAABsAAAAVAAAAEwAAABMAAAAbAAAAFQAAABMAAAATAAAAGwAAABUAAAATAAAAEwAAABsAAAAVAAAAEwAAABMAAAAbAAAAFQAAABMAAAATAAAAGwAAABRzdGNvAAAAAAAAAAEAAAT6AAAAGHNncGQBAAAAcm9sbAAAAAIAAAAAAAAAHHNiZ3AAAAAAcm9sbAAAAAEAAAAeAAAAAAAAAAhmcmVlAAAGC21kYXQAAAMfBgX///8b3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMTEgNzU5OTIxMCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTUgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0xIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDM6MHgxMTMgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTEgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz0xMSBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgc3RpdGNoYWJsZT0xIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PWluZmluaXRlIGtleWludF9taW49Mjkgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD00MCByYz0ycGFzcyBtYnRyZWU9MSBiaXRyYXRlPTExMiByYXRldG9sPTEuMCBxY29tcD0wLjYwIHFwbWluPTUgcXBtYXg9NjkgcXBzdGVwPTQgY3BseGJsdXI9MjAuMCBxYmx1cj0wLjUgdmJ2X21heHJhdGU9ODI1IHZidl9idWZzaXplPTkwMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAG9liIQAFf/+963fgU3DKzVrulc4tMurlDQ9UfaUpni2SAAAAwAAAwAAD/DNvp9RFdeXpgAAAwB+ABHAWYLWHUFwGoHeKCOoUwgBAAADAAADAAADAAADAAAHgvugkks0lyOD2SZ76WaUEkznLgAAFFEAAAARQZokbEFf/rUqgAAAAwAAHVAAAAAPQZ5CeIK/AAADAAADAA6ZAAAADwGeYXRBXwAAAwAAAwAOmAAAAA8BnmNqQV8AAAMAAAMADpkAAAAXQZpoSahBaJlMCCv//rUqgAAAAwAAHVEAAAARQZ6GRREsFf8AAAMAAAMADpkAAAAPAZ6ldEFfAAADAAADAA6ZAAAADwGep2pBXwAAAwAAAwAOmAAAABdBmqxJqEFsmUwIK//+tSqAAAADAAAdUAAAABFBnspFFSwV/wAAAwAAAwAOmQAAAA8Bnul0QV8AAAMAAAMADpgAAAAPAZ7rakFfAAADAAADAA6YAAAAF0Ga8EmoQWyZTAgr//61KoAAAAMAAB1RAAAAEUGfDkUVLBX/AAADAAADAA6ZAAAADwGfLXRBXwAAAwAAAwAOmQAAAA8Bny9qQV8AAAMAAAMADpgAAAAXQZs0SahBbJlMCCv//rUqgAAAAwAAHVAAAAARQZ9SRRUsFf8AAAMAAAMADpkAAAAPAZ9xdEFfAAADAAADAA6YAAAADwGfc2pBXwAAAwAAAwAOmAAAABdBm3hJqEFsmUwIK//+tSqAAAADAAAdUQAAABFBn5ZFFSwV/wAAAwAAAwAOmAAAAA8Bn7V0QV8AAAMAAAMADpkAAAAPAZ+3akFfAAADAAADAA6ZAAAAF0GbvEmoQWyZTAgr//61KoAAAAMAAB1QAAAAEUGf2kUVLBX/AAADAAADAA6ZAAAADwGf+XRBXwAAAwAAAwAOmAAAAA8Bn/tqQV8AAAMAAAMADpkAAAAXQZv9SahBbJlMCCv//rUqgAAAAwAAHVE='),
            e.load(),
            (e.style.display = 'none'),
            (e.playing = !1),
            e.play(),
            (e.onplay = function () {
              this.playing = !0
            }),
            (e.oncanplay = function () {
              e.playing
                ? ((sessionStorage.autoplay_supported = 'true'), t(!0))
                : ((sessionStorage.autoplay_supported = 'false'), t(!1))
            }))
      },
      animate_counters: function () {
        var e, i
        !travell_js_settings.home_counter_animate ||
          (0 != (e = a('.travell-numbers')).length &&
            ((i = !0),
            a(window).scroll(function () {
              var t = e.offset().top - window.innerHeight
              i &&
                a(window).scrollTop() > t &&
                (a('.display-2').each(function () {
                  var t = a(this),
                    e = t.attr('data-count')
                  a({ count_start: 0 }).animate(
                    { count_start: e },
                    {
                      duration: 2e3,
                      easing: 'swing',
                      step: function () {
                        t.text(Math.floor(this.count_start))
                      },
                      complete: function () {
                        t.text(this.count_start)
                      },
                    }
                  )
                }),
                (i = !1))
            })))
      },
      cover_image_parallax: function () {
        travell_js_settings.cover_parallax &&
          a('.travell-parallax .travell-cover-item').css(
            'background-image',
            'url(' +
              a('.travell-parallax .travell-cover-item .entry-image img').attr(
                'src'
              ) +
              ')'
          )
      },
      align_full_fix: function () {
        var t
        a('body').hasClass('travell-sidebar-none') &&
          ((t =
            '.alignfull { width: ' +
            a(window).width() +
            'px; margin-left: -' +
            a(window).width() / 2 +
            'px; margin-right: -' +
            a(window).width() / 2 +
            'px; left:50%; right:50%; }'),
          a('#travell-align-fix').length
            ? a('#travell-align-fix').html(t)
            : a('head').append(
                '<style id="travell-align-fix" type="text/css">' +
                  t +
                  '</style>'
              ))
      },
    }
    function l(t) {
      return (
        void 0 === t ||
        null === t ||
        0 === t.length ||
        '' === t ||
        !('object' != typeof t || !a.isEmptyObject(t))
      )
    }
    a(document).ready(function () {
      r.init()
    }),
      a(window).resize(function () {
        r.resize()
      }),
      a(window).scroll(function () {
        r.scroll()
      })
  })(jQuery)
