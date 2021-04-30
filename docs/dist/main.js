var app = (function () {
  'use strict';
  var t =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {};
  function n(t) {
    var n = { exports: {} };
    return t(n, n.exports), n.exports;
  }
  var e = function (t) {
      return t && t.Math == Math && t;
    },
    r =
      e('object' == typeof globalThis && globalThis) ||
      e('object' == typeof window && window) ||
      e('object' == typeof self && self) ||
      e('object' == typeof t && t) ||
      (function () {
        return this;
      })() ||
      Function('return this')(),
    o = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
    i = !o(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    }),
    c = function (t) {
      return 'object' == typeof t ? null !== t : 'function' == typeof t;
    },
    a = r.document,
    u = c(a) && c(a.createElement),
    s = function (t) {
      return u ? a.createElement(t) : {};
    },
    l =
      !i &&
      !o(function () {
        return (
          7 !=
          Object.defineProperty(s('div'), 'a', {
            get: function () {
              return 7;
            },
          }).a
        );
      }),
    f = function (t) {
      if (!c(t)) throw TypeError(String(t) + ' is not an object');
      return t;
    },
    d = function (t, n) {
      if (!c(t)) return t;
      var e, r;
      if (n && 'function' == typeof (e = t.toString) && !c((r = e.call(t)))) return r;
      if ('function' == typeof (e = t.valueOf) && !c((r = e.call(t)))) return r;
      if (!n && 'function' == typeof (e = t.toString) && !c((r = e.call(t)))) return r;
      throw TypeError("Can't convert object to primitive value");
    },
    p = Object.defineProperty,
    m = {
      f: i
        ? p
        : function (t, n, e) {
            if ((f(t), (n = d(n, !0)), f(e), l))
              try {
                return p(t, n, e);
              } catch (t) {}
            if ('get' in e || 'set' in e) throw TypeError('Accessors not supported');
            return 'value' in e && (t[n] = e.value), t;
          },
    },
    h = function (t, n) {
      return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n };
    },
    v = i
      ? function (t, n, e) {
          return m.f(t, n, h(1, e));
        }
      : function (t, n, e) {
          return (t[n] = e), t;
        },
    g = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    },
    y = function (t) {
      return Object(g(t));
    },
    b = {}.hasOwnProperty,
    $ = function (t, n) {
      return b.call(y(t), n);
    },
    x = function (t, n) {
      try {
        v(r, t, n);
      } catch (e) {
        r[t] = n;
      }
      return n;
    },
    w = '__core-js_shared__',
    O = r[w] || x(w, {}),
    S = Function.toString;
  'function' != typeof O.inspectSource &&
    (O.inspectSource = function (t) {
      return S.call(t);
    });
  var k,
    R,
    C,
    E = O.inspectSource,
    j = r.WeakMap,
    P = 'function' == typeof j && /native code/.test(E(j)),
    A = n(function (t) {
      (t.exports = function (t, n) {
        return O[t] || (O[t] = void 0 !== n ? n : {});
      })('versions', []).push({
        version: '3.11.0',
        mode: 'global',
        copyright: '© 2021 Denis Pushkarev (zloirock.ru)',
      });
    }),
    T = 0,
    L = Math.random(),
    M = function (t) {
      return 'Symbol(' + String(void 0 === t ? '' : t) + ')_' + (++T + L).toString(36);
    },
    _ = A('keys'),
    F = function (t) {
      return _[t] || (_[t] = M(t));
    },
    B = {},
    I = 'Object already initialized',
    N = r.WeakMap;
  if (P) {
    var D = O.state || (O.state = new N()),
      q = D.get,
      H = D.has,
      z = D.set;
    (k = function (t, n) {
      if (H.call(D, t)) throw new TypeError(I);
      return (n.facade = t), z.call(D, t, n), n;
    }),
      (R = function (t) {
        return q.call(D, t) || {};
      }),
      (C = function (t) {
        return H.call(D, t);
      });
  } else {
    var W = F('state');
    (B[W] = !0),
      (k = function (t, n) {
        if ($(t, W)) throw new TypeError(I);
        return (n.facade = t), v(t, W, n), n;
      }),
      (R = function (t) {
        return $(t, W) ? t[W] : {};
      }),
      (C = function (t) {
        return $(t, W);
      });
  }
  var U = {
      set: k,
      get: R,
      has: C,
      enforce: function (t) {
        return C(t) ? R(t) : k(t, {});
      },
      getterFor: function (t) {
        return function (n) {
          var e;
          if (!c(n) || (e = R(n)).type !== t)
            throw TypeError('Incompatible receiver, ' + t + ' required');
          return e;
        };
      },
    },
    G = n(function (t) {
      var n = U.get,
        e = U.enforce,
        o = String(String).split('String');
      (t.exports = function (t, n, i, c) {
        var a,
          u = !!c && !!c.unsafe,
          s = !!c && !!c.enumerable,
          l = !!c && !!c.noTargetGet;
        'function' == typeof i &&
          ('string' != typeof n || $(i, 'name') || v(i, 'name', n),
          (a = e(i)).source || (a.source = o.join('string' == typeof n ? n : ''))),
          t !== r
            ? (u ? !l && t[n] && (s = !0) : delete t[n], s ? (t[n] = i) : v(t, n, i))
            : s
            ? (t[n] = i)
            : x(n, i);
      })(Function.prototype, 'toString', function () {
        return ('function' == typeof this && n(this).source) || E(this);
      });
    }),
    V = Date.prototype,
    Y = 'Invalid Date',
    K = 'toString',
    X = V.toString,
    Z = V.getTime;
  function J(t, n) {
    if (!(t instanceof n)) throw new TypeError('Cannot call a class as a function');
  }
  function Q(t) {
    if (void 0 === t)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }
  new Date(NaN) + '' != Y &&
    G(V, K, function () {
      var t = Z.call(this);
      return t == t ? X.call(this) : Y;
    });
  var tt,
    nt = {}.propertyIsEnumerable,
    et = Object.getOwnPropertyDescriptor,
    rt = {
      f:
        et && !nt.call({ 1: 2 }, 1)
          ? function (t) {
              var n = et(this, t);
              return !!n && n.enumerable;
            }
          : nt,
    },
    ot = {}.toString,
    it = function (t) {
      return ot.call(t).slice(8, -1);
    },
    ct = ''.split,
    at = o(function () {
      return !Object('z').propertyIsEnumerable(0);
    })
      ? function (t) {
          return 'String' == it(t) ? ct.call(t, '') : Object(t);
        }
      : Object,
    ut = function (t) {
      return at(g(t));
    },
    st = Object.getOwnPropertyDescriptor,
    lt = {
      f: i
        ? st
        : function (t, n) {
            if (((t = ut(t)), (n = d(n, !0)), l))
              try {
                return st(t, n);
              } catch (t) {}
            if ($(t, n)) return h(!rt.f.call(t, n), t[n]);
          },
    },
    ft = r,
    dt = function (t) {
      return 'function' == typeof t ? t : void 0;
    },
    pt = function (t, n) {
      return arguments.length < 2
        ? dt(ft[t]) || dt(r[t])
        : (ft[t] && ft[t][n]) || (r[t] && r[t][n]);
    },
    mt = Math.ceil,
    ht = Math.floor,
    vt = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? ht : mt)(t);
    },
    gt = Math.min,
    yt = function (t) {
      return t > 0 ? gt(vt(t), 9007199254740991) : 0;
    },
    bt = Math.max,
    $t = Math.min,
    xt = function (t, n) {
      var e = vt(t);
      return e < 0 ? bt(e + n, 0) : $t(e, n);
    },
    wt = function (t) {
      return function (n, e, r) {
        var o,
          i = ut(n),
          c = yt(i.length),
          a = xt(r, c);
        if (t && e != e) {
          for (; c > a; ) if ((o = i[a++]) != o) return !0;
        } else for (; c > a; a++) if ((t || a in i) && i[a] === e) return t || a || 0;
        return !t && -1;
      };
    },
    Ot = { includes: wt(!0), indexOf: wt(!1) },
    St = Ot.indexOf,
    kt = function (t, n) {
      var e,
        r = ut(t),
        o = 0,
        i = [];
      for (e in r) !$(B, e) && $(r, e) && i.push(e);
      for (; n.length > o; ) $(r, (e = n[o++])) && (~St(i, e) || i.push(e));
      return i;
    },
    Rt = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf',
    ],
    Ct = Rt.concat('length', 'prototype'),
    Et = {
      f:
        Object.getOwnPropertyNames ||
        function (t) {
          return kt(t, Ct);
        },
    },
    jt = { f: Object.getOwnPropertySymbols },
    Pt =
      pt('Reflect', 'ownKeys') ||
      function (t) {
        var n = Et.f(f(t)),
          e = jt.f;
        return e ? n.concat(e(t)) : n;
      },
    At = function (t, n) {
      for (var e = Pt(n), r = m.f, o = lt.f, i = 0; i < e.length; i++) {
        var c = e[i];
        $(t, c) || r(t, c, o(n, c));
      }
    },
    Tt = /#|\.prototype\./,
    Lt = function (t, n) {
      var e = _t[Mt(t)];
      return e == Bt || (e != Ft && ('function' == typeof n ? o(n) : !!n));
    },
    Mt = (Lt.normalize = function (t) {
      return String(t).replace(Tt, '.').toLowerCase();
    }),
    _t = (Lt.data = {}),
    Ft = (Lt.NATIVE = 'N'),
    Bt = (Lt.POLYFILL = 'P'),
    It = Lt,
    Nt = lt.f,
    Dt = function (t, n) {
      var e,
        o,
        i,
        c,
        a,
        u = t.target,
        s = t.global,
        l = t.stat;
      if ((e = s ? r : l ? r[u] || x(u, {}) : (r[u] || {}).prototype))
        for (o in n) {
          if (
            ((c = n[o]),
            (i = t.noTargetGet ? (a = Nt(e, o)) && a.value : e[o]),
            !It(s ? o : u + (l ? '.' : '#') + o, t.forced) && void 0 !== i)
          ) {
            if (typeof c == typeof i) continue;
            At(c, i);
          }
          (t.sham || (i && i.sham)) && v(c, 'sham', !0), G(e, o, c, t);
        }
    },
    qt =
      Object.keys ||
      function (t) {
        return kt(t, Rt);
      },
    Ht = i
      ? Object.defineProperties
      : function (t, n) {
          f(t);
          for (var e, r = qt(n), o = r.length, i = 0; o > i; ) m.f(t, (e = r[i++]), n[e]);
          return t;
        },
    zt = pt('document', 'documentElement'),
    Wt = F('IE_PROTO'),
    Ut = function () {},
    Gt = function (t) {
      return '<script>' + t + '</' + 'script>';
    },
    Vt = function () {
      try {
        tt = document.domain && new ActiveXObject('htmlfile');
      } catch (t) {}
      var t, n;
      Vt = tt
        ? (function (t) {
            t.write(Gt('')), t.close();
            var n = t.parentWindow.Object;
            return (t = null), n;
          })(tt)
        : (((n = s('iframe')).style.display = 'none'),
          zt.appendChild(n),
          (n.src = String('javascript:')),
          (t = n.contentWindow.document).open(),
          t.write(Gt('document.F=Object')),
          t.close(),
          t.F);
      for (var e = Rt.length; e--; ) delete Vt.prototype[Rt[e]];
      return Vt();
    };
  B[Wt] = !0;
  var Yt =
    Object.create ||
    function (t, n) {
      var e;
      return (
        null !== t
          ? ((Ut.prototype = f(t)), (e = new Ut()), (Ut.prototype = null), (e[Wt] = t))
          : (e = Vt()),
        void 0 === n ? e : Ht(e, n)
      );
    };
  Dt({ target: 'Object', stat: !0, sham: !i }, { create: Yt });
  var Kt =
    Object.setPrototypeOf ||
    ('__proto__' in {}
      ? (function () {
          var t,
            n = !1,
            e = {};
          try {
            (t = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set).call(e, []),
              (n = e instanceof Array);
          } catch (t) {}
          return function (e, r) {
            return (
              f(e),
              (function (t) {
                if (!c(t) && null !== t)
                  throw TypeError("Can't set " + String(t) + ' as a prototype');
              })(r),
              n ? t.call(e, r) : (e.__proto__ = r),
              e
            );
          };
        })()
      : void 0);
  function Xt(t, n) {
    return (Xt =
      Object.setPrototypeOf ||
      function (t, n) {
        return (t.__proto__ = n), t;
      })(t, n);
  }
  function Zt(t, n) {
    if ('function' != typeof n && null !== n)
      throw new TypeError('Super expression must either be null or a function');
    (t.prototype = Object.create(n && n.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      n && Xt(t, n);
  }
  Dt({ target: 'Object', stat: !0 }, { setPrototypeOf: Kt });
  var Jt,
    Qt,
    tn = 'process' == it(r.process),
    nn = pt('navigator', 'userAgent') || '',
    en = r.process,
    rn = en && en.versions,
    on = rn && rn.v8;
  on
    ? (Qt = (Jt = on.split('.'))[0] + Jt[1])
    : nn &&
      (!(Jt = nn.match(/Edge\/(\d+)/)) || Jt[1] >= 74) &&
      (Jt = nn.match(/Chrome\/(\d+)/)) &&
      (Qt = Jt[1]);
  var cn = Qt && +Qt,
    an =
      !!Object.getOwnPropertySymbols &&
      !o(function () {
        return !Symbol.sham && (tn ? 38 === cn : cn > 37 && cn < 41);
      }),
    un = an && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
    sn =
      Array.isArray ||
      function (t) {
        return 'Array' == it(t);
      },
    ln = Et.f,
    fn = {}.toString,
    dn =
      'object' == typeof window && window && Object.getOwnPropertyNames
        ? Object.getOwnPropertyNames(window)
        : [],
    pn = {
      f: function (t) {
        return dn && '[object Window]' == fn.call(t)
          ? (function (t) {
              try {
                return ln(t);
              } catch (t) {
                return dn.slice();
              }
            })(t)
          : ln(ut(t));
      },
    },
    mn = A('wks'),
    hn = r.Symbol,
    vn = un ? hn : (hn && hn.withoutSetter) || M,
    gn = function (t) {
      return (
        ($(mn, t) && (an || 'string' == typeof mn[t])) ||
          (an && $(hn, t) ? (mn[t] = hn[t]) : (mn[t] = vn('Symbol.' + t))),
        mn[t]
      );
    },
    yn = { f: gn },
    bn = m.f,
    $n = function (t) {
      var n = ft.Symbol || (ft.Symbol = {});
      $(n, t) || bn(n, t, { value: yn.f(t) });
    },
    xn = m.f,
    wn = gn('toStringTag'),
    On = function (t, n, e) {
      t && !$((t = e ? t : t.prototype), wn) && xn(t, wn, { configurable: !0, value: n });
    },
    Sn = function (t) {
      if ('function' != typeof t) throw TypeError(String(t) + ' is not a function');
      return t;
    },
    kn = function (t, n, e) {
      if ((Sn(t), void 0 === n)) return t;
      switch (e) {
        case 0:
          return function () {
            return t.call(n);
          };
        case 1:
          return function (e) {
            return t.call(n, e);
          };
        case 2:
          return function (e, r) {
            return t.call(n, e, r);
          };
        case 3:
          return function (e, r, o) {
            return t.call(n, e, r, o);
          };
      }
      return function () {
        return t.apply(n, arguments);
      };
    },
    Rn = gn('species'),
    Cn = function (t, n) {
      var e;
      return (
        sn(t) &&
          ('function' != typeof (e = t.constructor) || (e !== Array && !sn(e.prototype))
            ? c(e) && null === (e = e[Rn]) && (e = void 0)
            : (e = void 0)),
        new (void 0 === e ? Array : e)(0 === n ? 0 : n)
      );
    },
    En = [].push,
    jn = function (t) {
      var n = 1 == t,
        e = 2 == t,
        r = 3 == t,
        o = 4 == t,
        i = 6 == t,
        c = 7 == t,
        a = 5 == t || i;
      return function (u, s, l, f) {
        for (
          var d,
            p,
            m = y(u),
            h = at(m),
            v = kn(s, l, 3),
            g = yt(h.length),
            b = 0,
            $ = f || Cn,
            x = n ? $(u, g) : e || c ? $(u, 0) : void 0;
          g > b;
          b++
        )
          if ((a || b in h) && ((p = v((d = h[b]), b, m)), t))
            if (n) x[b] = p;
            else if (p)
              switch (t) {
                case 3:
                  return !0;
                case 5:
                  return d;
                case 6:
                  return b;
                case 2:
                  En.call(x, d);
              }
            else
              switch (t) {
                case 4:
                  return !1;
                case 7:
                  En.call(x, d);
              }
        return i ? -1 : r || o ? o : x;
      };
    },
    Pn = {
      forEach: jn(0),
      map: jn(1),
      filter: jn(2),
      some: jn(3),
      every: jn(4),
      find: jn(5),
      findIndex: jn(6),
      filterOut: jn(7),
    },
    An = Pn.forEach,
    Tn = F('hidden'),
    Ln = 'Symbol',
    Mn = gn('toPrimitive'),
    _n = U.set,
    Fn = U.getterFor(Ln),
    Bn = Object.prototype,
    In = r.Symbol,
    Nn = pt('JSON', 'stringify'),
    Dn = lt.f,
    qn = m.f,
    Hn = pn.f,
    zn = rt.f,
    Wn = A('symbols'),
    Un = A('op-symbols'),
    Gn = A('string-to-symbol-registry'),
    Vn = A('symbol-to-string-registry'),
    Yn = A('wks'),
    Kn = r.QObject,
    Xn = !Kn || !Kn.prototype || !Kn.prototype.findChild,
    Zn =
      i &&
      o(function () {
        return (
          7 !=
          Yt(
            qn({}, 'a', {
              get: function () {
                return qn(this, 'a', { value: 7 }).a;
              },
            })
          ).a
        );
      })
        ? function (t, n, e) {
            var r = Dn(Bn, n);
            r && delete Bn[n], qn(t, n, e), r && t !== Bn && qn(Bn, n, r);
          }
        : qn,
    Jn = function (t, n) {
      var e = (Wn[t] = Yt(In.prototype));
      return _n(e, { type: Ln, tag: t, description: n }), i || (e.description = n), e;
    },
    Qn = un
      ? function (t) {
          return 'symbol' == typeof t;
        }
      : function (t) {
          return Object(t) instanceof In;
        },
    te = function (t, n, e) {
      t === Bn && te(Un, n, e), f(t);
      var r = d(n, !0);
      return (
        f(e),
        $(Wn, r)
          ? (e.enumerable
              ? ($(t, Tn) && t[Tn][r] && (t[Tn][r] = !1), (e = Yt(e, { enumerable: h(0, !1) })))
              : ($(t, Tn) || qn(t, Tn, h(1, {})), (t[Tn][r] = !0)),
            Zn(t, r, e))
          : qn(t, r, e)
      );
    },
    ne = function (t, n) {
      f(t);
      var e = ut(n),
        r = qt(e).concat(ie(e));
      return (
        An(r, function (n) {
          (i && !ee.call(e, n)) || te(t, n, e[n]);
        }),
        t
      );
    },
    ee = function (t) {
      var n = d(t, !0),
        e = zn.call(this, n);
      return (
        !(this === Bn && $(Wn, n) && !$(Un, n)) &&
        (!(e || !$(this, n) || !$(Wn, n) || ($(this, Tn) && this[Tn][n])) || e)
      );
    },
    re = function (t, n) {
      var e = ut(t),
        r = d(n, !0);
      if (e !== Bn || !$(Wn, r) || $(Un, r)) {
        var o = Dn(e, r);
        return !o || !$(Wn, r) || ($(e, Tn) && e[Tn][r]) || (o.enumerable = !0), o;
      }
    },
    oe = function (t) {
      var n = Hn(ut(t)),
        e = [];
      return (
        An(n, function (t) {
          $(Wn, t) || $(B, t) || e.push(t);
        }),
        e
      );
    },
    ie = function (t) {
      var n = t === Bn,
        e = Hn(n ? Un : ut(t)),
        r = [];
      return (
        An(e, function (t) {
          !$(Wn, t) || (n && !$(Bn, t)) || r.push(Wn[t]);
        }),
        r
      );
    };
  if (
    (an ||
      (G(
        (In = function () {
          if (this instanceof In) throw TypeError('Symbol is not a constructor');
          var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
            n = M(t),
            e = function (t) {
              this === Bn && e.call(Un, t),
                $(this, Tn) && $(this[Tn], n) && (this[Tn][n] = !1),
                Zn(this, n, h(1, t));
            };
          return i && Xn && Zn(Bn, n, { configurable: !0, set: e }), Jn(n, t);
        }).prototype,
        'toString',
        function () {
          return Fn(this).tag;
        }
      ),
      G(In, 'withoutSetter', function (t) {
        return Jn(M(t), t);
      }),
      (rt.f = ee),
      (m.f = te),
      (lt.f = re),
      (Et.f = pn.f = oe),
      (jt.f = ie),
      (yn.f = function (t) {
        return Jn(gn(t), t);
      }),
      i &&
        (qn(In.prototype, 'description', {
          configurable: !0,
          get: function () {
            return Fn(this).description;
          },
        }),
        G(Bn, 'propertyIsEnumerable', ee, { unsafe: !0 }))),
    Dt({ global: !0, wrap: !0, forced: !an, sham: !an }, { Symbol: In }),
    An(qt(Yn), function (t) {
      $n(t);
    }),
    Dt(
      { target: Ln, stat: !0, forced: !an },
      {
        for: function (t) {
          var n = String(t);
          if ($(Gn, n)) return Gn[n];
          var e = In(n);
          return (Gn[n] = e), (Vn[e] = n), e;
        },
        keyFor: function (t) {
          if (!Qn(t)) throw TypeError(t + ' is not a symbol');
          if ($(Vn, t)) return Vn[t];
        },
        useSetter: function () {
          Xn = !0;
        },
        useSimple: function () {
          Xn = !1;
        },
      }
    ),
    Dt(
      { target: 'Object', stat: !0, forced: !an, sham: !i },
      {
        create: function (t, n) {
          return void 0 === n ? Yt(t) : ne(Yt(t), n);
        },
        defineProperty: te,
        defineProperties: ne,
        getOwnPropertyDescriptor: re,
      }
    ),
    Dt(
      { target: 'Object', stat: !0, forced: !an },
      { getOwnPropertyNames: oe, getOwnPropertySymbols: ie }
    ),
    Dt(
      {
        target: 'Object',
        stat: !0,
        forced: o(function () {
          jt.f(1);
        }),
      },
      {
        getOwnPropertySymbols: function (t) {
          return jt.f(y(t));
        },
      }
    ),
    Nn)
  ) {
    var ce =
      !an ||
      o(function () {
        var t = In();
        return '[null]' != Nn([t]) || '{}' != Nn({ a: t }) || '{}' != Nn(Object(t));
      });
    Dt(
      { target: 'JSON', stat: !0, forced: ce },
      {
        stringify: function (t, n, e) {
          for (var r, o = [t], i = 1; arguments.length > i; ) o.push(arguments[i++]);
          if (((r = n), (c(n) || void 0 !== t) && !Qn(t)))
            return (
              sn(n) ||
                (n = function (t, n) {
                  if (('function' == typeof r && (n = r.call(this, t, n)), !Qn(n))) return n;
                }),
              (o[1] = n),
              Nn.apply(null, o)
            );
        },
      }
    );
  }
  In.prototype[Mn] || v(In.prototype, Mn, In.prototype.valueOf), On(In, Ln), (B[Tn] = !0);
  var ae = m.f,
    ue = r.Symbol;
  if (
    i &&
    'function' == typeof ue &&
    (!('description' in ue.prototype) || void 0 !== ue().description)
  ) {
    var se = {},
      le = function () {
        var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
          n = this instanceof le ? new ue(t) : void 0 === t ? ue() : ue(t);
        return '' === t && (se[n] = !0), n;
      };
    At(le, ue);
    var fe = (le.prototype = ue.prototype);
    fe.constructor = le;
    var de = fe.toString,
      pe = 'Symbol(test)' == String(ue('test')),
      me = /^Symbol\((.*)\)[^)]+$/;
    ae(fe, 'description', {
      configurable: !0,
      get: function () {
        var t = c(this) ? this.valueOf() : this,
          n = de.call(t);
        if ($(se, t)) return '';
        var e = pe ? n.slice(7, -1) : n.replace(me, '$1');
        return '' === e ? void 0 : e;
      },
    }),
      Dt({ global: !0, forced: !0 }, { Symbol: le });
  }
  var he = {};
  he[gn('toStringTag')] = 'z';
  var ve = '[object z]' === String(he),
    ge = gn('toStringTag'),
    ye =
      'Arguments' ==
      it(
        (function () {
          return arguments;
        })()
      ),
    be = ve
      ? it
      : function (t) {
          var n, e, r;
          return void 0 === t
            ? 'Undefined'
            : null === t
            ? 'Null'
            : 'string' ==
              typeof (e = (function (t, n) {
                try {
                  return t[n];
                } catch (t) {}
              })((n = Object(t)), ge))
            ? e
            : ye
            ? it(n)
            : 'Object' == (r = it(n)) && 'function' == typeof n.callee
            ? 'Arguments'
            : r;
        },
    $e = ve
      ? {}.toString
      : function () {
          return '[object ' + be(this) + ']';
        };
  ve || G(Object.prototype, 'toString', $e, { unsafe: !0 }), $n('iterator');
  var xe = gn('unscopables'),
    we = Array.prototype;
  null == we[xe] && m.f(we, xe, { configurable: !0, value: Yt(null) });
  var Oe,
    Se,
    ke,
    Re = function (t) {
      we[xe][t] = !0;
    },
    Ce = {},
    Ee = !o(function () {
      function t() {}
      return (t.prototype.constructor = null), Object.getPrototypeOf(new t()) !== t.prototype;
    }),
    je = F('IE_PROTO'),
    Pe = Object.prototype,
    Ae = Ee
      ? Object.getPrototypeOf
      : function (t) {
          return (
            (t = y(t)),
            $(t, je)
              ? t[je]
              : 'function' == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? Pe
              : null
          );
        },
    Te = gn('iterator'),
    Le = !1;
  [].keys &&
    ('next' in (ke = [].keys()) ? (Se = Ae(Ae(ke))) !== Object.prototype && (Oe = Se) : (Le = !0)),
    (null == Oe ||
      o(function () {
        var t = {};
        return Oe[Te].call(t) !== t;
      })) &&
      (Oe = {}),
    $(Oe, Te) ||
      v(Oe, Te, function () {
        return this;
      });
  var Me = { IteratorPrototype: Oe, BUGGY_SAFARI_ITERATORS: Le },
    _e = Me.IteratorPrototype,
    Fe = function () {
      return this;
    },
    Be = Me.IteratorPrototype,
    Ie = Me.BUGGY_SAFARI_ITERATORS,
    Ne = gn('iterator'),
    De = 'keys',
    qe = 'values',
    He = 'entries',
    ze = function () {
      return this;
    },
    We = function (t, n, e, r, o, i, c) {
      !(function (t, n, e) {
        var r = n + ' Iterator';
        (t.prototype = Yt(_e, { next: h(1, e) })), On(t, r, !1), (Ce[r] = Fe);
      })(e, n, r);
      var a,
        u,
        s,
        l = function (t) {
          if (t === o && g) return g;
          if (!Ie && t in p) return p[t];
          switch (t) {
            case De:
            case qe:
            case He:
              return function () {
                return new e(this, t);
              };
          }
          return function () {
            return new e(this);
          };
        },
        f = n + ' Iterator',
        d = !1,
        p = t.prototype,
        m = p[Ne] || p['@@iterator'] || (o && p[o]),
        g = (!Ie && m) || l(o),
        y = ('Array' == n && p.entries) || m;
      if (
        (y &&
          ((a = Ae(y.call(new t()))),
          Be !== Object.prototype &&
            a.next &&
            (Ae(a) !== Be && (Kt ? Kt(a, Be) : 'function' != typeof a[Ne] && v(a, Ne, ze)),
            On(a, f, !0))),
        o == qe &&
          m &&
          m.name !== qe &&
          ((d = !0),
          (g = function () {
            return m.call(this);
          })),
        p[Ne] !== g && v(p, Ne, g),
        (Ce[n] = g),
        o)
      )
        if (((u = { values: l(qe), keys: i ? g : l(De), entries: l(He) }), c))
          for (s in u) (Ie || d || !(s in p)) && G(p, s, u[s]);
        else Dt({ target: n, proto: !0, forced: Ie || d }, u);
      return u;
    },
    Ue = 'Array Iterator',
    Ge = U.set,
    Ve = U.getterFor(Ue),
    Ye = We(
      Array,
      'Array',
      function (t, n) {
        Ge(this, { type: Ue, target: ut(t), index: 0, kind: n });
      },
      function () {
        var t = Ve(this),
          n = t.target,
          e = t.kind,
          r = t.index++;
        return !n || r >= n.length
          ? ((t.target = void 0), { value: void 0, done: !0 })
          : 'keys' == e
          ? { value: r, done: !1 }
          : 'values' == e
          ? { value: n[r], done: !1 }
          : { value: [r, n[r]], done: !1 };
      },
      'values'
    );
  (Ce.Arguments = Ce.Array), Re('keys'), Re('values'), Re('entries');
  var Ke = function (t) {
      return function (n, e) {
        var r,
          o,
          i = String(g(n)),
          c = vt(e),
          a = i.length;
        return c < 0 || c >= a
          ? t
            ? ''
            : void 0
          : (r = i.charCodeAt(c)) < 55296 ||
            r > 56319 ||
            c + 1 === a ||
            (o = i.charCodeAt(c + 1)) < 56320 ||
            o > 57343
          ? t
            ? i.charAt(c)
            : r
          : t
          ? i.slice(c, c + 2)
          : o - 56320 + ((r - 55296) << 10) + 65536;
      };
    },
    Xe = { codeAt: Ke(!1), charAt: Ke(!0) },
    Ze = Xe.charAt,
    Je = 'String Iterator',
    Qe = U.set,
    tr = U.getterFor(Je);
  We(
    String,
    'String',
    function (t) {
      Qe(this, { type: Je, string: String(t), index: 0 });
    },
    function () {
      var t,
        n = tr(this),
        e = n.string,
        r = n.index;
      return r >= e.length
        ? { value: void 0, done: !0 }
        : ((t = Ze(e, r)), (n.index += t.length), { value: t, done: !1 });
    }
  );
  var nr = {
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
      TouchList: 0,
    },
    er = gn('iterator'),
    rr = gn('toStringTag'),
    or = Ye.values;
  for (var ir in nr) {
    var cr = r[ir],
      ar = cr && cr.prototype;
    if (ar) {
      if (ar[er] !== or)
        try {
          v(ar, er, or);
        } catch (Ss) {
          ar[er] = or;
        }
      if ((ar[rr] || v(ar, rr, ir), nr[ir]))
        for (var ur in Ye)
          if (ar[ur] !== Ye[ur])
            try {
              v(ar, ur, Ye[ur]);
            } catch (Ss) {
              ar[ur] = Ye[ur];
            }
    }
  }
  function sr(t) {
    return (sr =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              'function' == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          })(t);
  }
  function lr(t, n) {
    return !n || ('object' !== sr(n) && 'function' != typeof n) ? Q(t) : n;
  }
  var fr = o(function () {
    Ae(1);
  });
  function dr(t) {
    return (dr = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function pr(t, n) {
    (null == n || n > t.length) && (n = t.length);
    for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
    return r;
  }
  Dt(
    { target: 'Object', stat: !0, forced: fr, sham: !Ee },
    {
      getPrototypeOf: function (t) {
        return Ae(y(t));
      },
    }
  ),
    Dt({ target: 'Array', stat: !0 }, { isArray: sn });
  var mr = function (t) {
      var n = t.return;
      if (void 0 !== n) return f(n.call(t)).value;
    },
    hr = function (t, n, e, r) {
      try {
        return r ? n(f(e)[0], e[1]) : n(e);
      } catch (n) {
        throw (mr(t), n);
      }
    },
    vr = gn('iterator'),
    gr = Array.prototype,
    yr = function (t) {
      return void 0 !== t && (Ce.Array === t || gr[vr] === t);
    },
    br = function (t, n, e) {
      var r = d(n);
      r in t ? m.f(t, r, h(0, e)) : (t[r] = e);
    },
    $r = gn('iterator'),
    xr = function (t) {
      if (null != t) return t[$r] || t['@@iterator'] || Ce[be(t)];
    },
    wr = gn('iterator'),
    Or = !1;
  try {
    var Sr = 0,
      kr = {
        next: function () {
          return { done: !!Sr++ };
        },
        return: function () {
          Or = !0;
        },
      };
    (kr[wr] = function () {
      return this;
    }),
      Array.from(kr, function () {
        throw 2;
      });
  } catch (Ss) {}
  var Rr = function (t, n) {
      if (!n && !Or) return !1;
      var e = !1;
      try {
        var r = {};
        (r[wr] = function () {
          return {
            next: function () {
              return { done: (e = !0) };
            },
          };
        }),
          t(r);
      } catch (t) {}
      return e;
    },
    Cr = !Rr(function (t) {
      Array.from(t);
    });
  Dt(
    { target: 'Array', stat: !0, forced: Cr },
    {
      from: function (t) {
        var n,
          e,
          r,
          o,
          i,
          c,
          a = y(t),
          u = 'function' == typeof this ? this : Array,
          s = arguments.length,
          l = s > 1 ? arguments[1] : void 0,
          f = void 0 !== l,
          d = xr(a),
          p = 0;
        if (
          (f && (l = kn(l, s > 2 ? arguments[2] : void 0, 2)), null == d || (u == Array && yr(d)))
        )
          for (e = new u((n = yt(a.length))); n > p; p++) (c = f ? l(a[p], p) : a[p]), br(e, p, c);
        else
          for (i = (o = d.call(a)).next, e = new u(); !(r = i.call(o)).done; p++)
            (c = f ? hr(o, l, [r.value, p], !0) : r.value), br(e, p, c);
        return (e.length = p), e;
      },
    }
  );
  var Er = gn('species'),
    jr = function (t) {
      return (
        cn >= 51 ||
        !o(function () {
          var n = [];
          return (
            ((n.constructor = {})[Er] = function () {
              return { foo: 1 };
            }),
            1 !== n[t](Boolean).foo
          );
        })
      );
    },
    Pr = jr('slice'),
    Ar = gn('species'),
    Tr = [].slice,
    Lr = Math.max;
  Dt(
    { target: 'Array', proto: !0, forced: !Pr },
    {
      slice: function (t, n) {
        var e,
          r,
          o,
          i = ut(this),
          a = yt(i.length),
          u = xt(t, a),
          s = xt(void 0 === n ? a : n, a);
        if (
          sn(i) &&
          ('function' != typeof (e = i.constructor) || (e !== Array && !sn(e.prototype))
            ? c(e) && null === (e = e[Ar]) && (e = void 0)
            : (e = void 0),
          e === Array || void 0 === e)
        )
          return Tr.call(i, u, s);
        for (r = new (void 0 === e ? Array : e)(Lr(s - u, 0)), o = 0; u < s; u++, o++)
          u in i && br(r, o, i[u]);
        return (r.length = o), r;
      },
    }
  );
  var Mr = m.f,
    _r = Function.prototype,
    Fr = _r.toString,
    Br = /^\s*function ([^ (]*)/,
    Ir = 'name';
  function Nr(t, n) {
    if (t) {
      if ('string' == typeof t) return pr(t, n);
      var e = Object.prototype.toString.call(t).slice(8, -1);
      return (
        'Object' === e && t.constructor && (e = t.constructor.name),
        'Map' === e || 'Set' === e
          ? Array.from(t)
          : 'Arguments' === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
          ? pr(t, n)
          : void 0
      );
    }
  }
  function Dr(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return pr(t);
      })(t) ||
      (function (t) {
        if (('undefined' != typeof Symbol && null != t[Symbol.iterator]) || null != t['@@iterator'])
          return Array.from(t);
      })(t) ||
      Nr(t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()
    );
  }
  function qr(t, n) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, n) {
        var e = t && (('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator']);
        if (null != e) {
          var r,
            o,
            i = [],
            c = !0,
            a = !1;
          try {
            for (
              e = e.call(t);
              !(c = (r = e.next()).done) && (i.push(r.value), !n || i.length !== n);
              c = !0
            );
          } catch (t) {
            (a = !0), (o = t);
          } finally {
            try {
              c || null == e.return || e.return();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      })(t, n) ||
      Nr(t, n) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()
    );
  }
  i &&
    !(Ir in _r) &&
    Mr(_r, Ir, {
      configurable: !0,
      get: function () {
        try {
          return Fr.call(this).match(Br)[1];
        } catch (t) {
          return '';
        }
      },
    });
  var Hr = Pn.filter,
    zr = jr('filter');
  Dt(
    { target: 'Array', proto: !0, forced: !zr },
    {
      filter: function (t) {
        return Hr(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var Wr = function (t) {
      return function (n, e, r, o) {
        Sn(e);
        var i = y(n),
          c = at(i),
          a = yt(i.length),
          u = t ? a - 1 : 0,
          s = t ? -1 : 1;
        if (r < 2)
          for (;;) {
            if (u in c) {
              (o = c[u]), (u += s);
              break;
            }
            if (((u += s), t ? u < 0 : a <= u))
              throw TypeError('Reduce of empty array with no initial value');
          }
        for (; t ? u >= 0 : a > u; u += s) u in c && (o = e(o, c[u], u, i));
        return o;
      };
    },
    Ur = function (t, n) {
      var e = [][t];
      return (
        !!e &&
        o(function () {
          e.call(
            null,
            n ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    },
    Gr = { left: Wr(!1), right: Wr(!0) }.left,
    Vr = Ur('reduce');
  Dt(
    { target: 'Array', proto: !0, forced: !Vr || (!tn && cn > 79 && cn < 83) },
    {
      reduce: function (t) {
        return Gr(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var Yr = gn('isConcatSpreadable'),
    Kr = 9007199254740991,
    Xr = 'Maximum allowed index exceeded',
    Zr =
      cn >= 51 ||
      !o(function () {
        var t = [];
        return (t[Yr] = !1), t.concat()[0] !== t;
      }),
    Jr = jr('concat'),
    Qr = function (t) {
      if (!c(t)) return !1;
      var n = t[Yr];
      return void 0 !== n ? !!n : sn(t);
    };
  Dt(
    { target: 'Array', proto: !0, forced: !Zr || !Jr },
    {
      concat: function (t) {
        var n,
          e,
          r,
          o,
          i,
          c = y(this),
          a = Cn(c, 0),
          u = 0;
        for (n = -1, r = arguments.length; n < r; n++)
          if (Qr((i = -1 === n ? c : arguments[n]))) {
            if (u + (o = yt(i.length)) > Kr) throw TypeError(Xr);
            for (e = 0; e < o; e++, u++) e in i && br(a, u, i[e]);
          } else {
            if (u >= Kr) throw TypeError(Xr);
            br(a, u++, i);
          }
        return (a.length = u), a;
      },
    }
  );
  var to = [].slice,
    no = {},
    eo = function (t, n, e) {
      if (!(n in no)) {
        for (var r = [], o = 0; o < n; o++) r[o] = 'a[' + o + ']';
        no[n] = Function('C,a', 'return new C(' + r.join(',') + ')');
      }
      return no[n](t, e);
    },
    ro =
      Function.bind ||
      function (t) {
        var n = Sn(this),
          e = to.call(arguments, 1),
          r = function () {
            var o = e.concat(to.call(arguments));
            return this instanceof r ? eo(n, o.length, o) : n.apply(t, o);
          };
        return c(n.prototype) && (r.prototype = n.prototype), r;
      },
    oo = pt('Reflect', 'construct'),
    io = o(function () {
      function t() {}
      return !(oo(function () {}, [], t) instanceof t);
    }),
    co = !o(function () {
      oo(function () {});
    }),
    ao = io || co;
  function uo() {}
  Dt(
    { target: 'Reflect', stat: !0, forced: ao, sham: ao },
    {
      construct: function (t, n) {
        Sn(t), f(n);
        var e = arguments.length < 3 ? t : Sn(arguments[2]);
        if (co && !io) return oo(t, n, e);
        if (t == e) {
          switch (n.length) {
            case 0:
              return new t();
            case 1:
              return new t(n[0]);
            case 2:
              return new t(n[0], n[1]);
            case 3:
              return new t(n[0], n[1], n[2]);
            case 4:
              return new t(n[0], n[1], n[2], n[3]);
          }
          var r = [null];
          return r.push.apply(r, n), new (ro.apply(t, r))();
        }
        var o = e.prototype,
          i = Yt(c(o) ? o : Object.prototype),
          a = Function.apply.call(t, i, n);
        return c(a) ? a : i;
      },
    }
  );
  const so = (t) => t;
  function lo(t, n) {
    for (const e in n) t[e] = n[e];
    return t;
  }
  function fo(t) {
    return t();
  }
  function po() {
    return Object.create(null);
  }
  function mo(t) {
    t.forEach(fo);
  }
  function ho(t) {
    return 'function' == typeof t;
  }
  function vo(t, n) {
    return t != t ? n == n : t !== n || (t && 'object' == typeof t) || 'function' == typeof t;
  }
  function go(t, ...n) {
    if (null == t) return uo;
    const e = t.subscribe(...n);
    return e.unsubscribe ? () => e.unsubscribe() : e;
  }
  function yo(t, n, e) {
    t.$$.on_destroy.push(go(n, e));
  }
  function bo(t, n, e, r) {
    if (t) {
      const o = $o(t, n, e, r);
      return t[0](o);
    }
  }
  function $o(t, n, e, r) {
    return t[1] && r ? lo(e.ctx.slice(), t[1](r(n))) : e.ctx;
  }
  function xo(t, n, e, r, o, i, c) {
    const a = (function (t, n, e, r) {
      if (t[2] && r) {
        const o = t[2](r(e));
        if (void 0 === n.dirty) return o;
        if ('object' == typeof o) {
          const t = [],
            e = Math.max(n.dirty.length, o.length);
          for (let r = 0; r < e; r += 1) t[r] = n.dirty[r] | o[r];
          return t;
        }
        return n.dirty | o;
      }
      return n.dirty;
    })(n, r, o, i);
    if (a) {
      const o = $o(n, e, r, c);
      t.p(o, a);
    }
  }
  function wo(t) {
    const n = {};
    for (const e in t) '$' !== e[0] && (n[e] = t[e]);
    return n;
  }
  function Oo(t, n) {
    const e = {};
    n = new Set(n);
    for (const r in t) n.has(r) || '$' === r[0] || (e[r] = t[r]);
    return e;
  }
  function So(t) {
    const n = {};
    for (const e in t) n[e] = !0;
    return n;
  }
  function ko(t) {
    return null == t ? '' : t;
  }
  function Ro(t) {
    return t && ho(t.destroy) ? t.destroy : uo;
  }
  const Co = 'undefined' != typeof window;
  let Eo = Co ? () => window.performance.now() : () => Date.now(),
    jo = Co ? (t) => requestAnimationFrame(t) : uo;
  const Po = new Set();
  function Ao(t) {
    Po.forEach((n) => {
      n.c(t) || (Po.delete(n), n.f());
    }),
      0 !== Po.size && jo(Ao);
  }
  function To(t) {
    let n;
    return (
      0 === Po.size && jo(Ao),
      {
        promise: new Promise((e) => {
          Po.add((n = { c: t, f: e }));
        }),
        abort() {
          Po.delete(n);
        },
      }
    );
  }
  function Lo(t, n) {
    t.appendChild(n);
  }
  function Mo(t, n, e) {
    t.insertBefore(n, e || null);
  }
  function _o(t) {
    t.parentNode.removeChild(t);
  }
  function Fo(t, n) {
    for (let e = 0; e < t.length; e += 1) t[e] && t[e].d(n);
  }
  function Bo(t) {
    return document.createElement(t);
  }
  function Io(t) {
    return document.createElementNS('http://www.w3.org/2000/svg', t);
  }
  function No(t) {
    return document.createTextNode(t);
  }
  function Do() {
    return No(' ');
  }
  function qo() {
    return No('');
  }
  function Ho(t, n, e, r) {
    return t.addEventListener(n, e, r), () => t.removeEventListener(n, e, r);
  }
  function zo(t, n, e) {
    null == e ? t.removeAttribute(n) : t.getAttribute(n) !== e && t.setAttribute(n, e);
  }
  function Wo(t, n) {
    const e = Object.getOwnPropertyDescriptors(t.__proto__);
    for (const r in n)
      null == n[r]
        ? t.removeAttribute(r)
        : 'style' === r
        ? (t.style.cssText = n[r])
        : '__value' === r
        ? (t.value = t[r] = n[r])
        : e[r] && e[r].set
        ? (t[r] = n[r])
        : zo(t, r, n[r]);
  }
  function Uo(t, n) {
    (n = '' + n), t.wholeText !== n && (t.data = n);
  }
  function Go(t, n, e) {
    t.classList[e ? 'add' : 'remove'](n);
  }
  function Vo(t, n) {
    const e = document.createEvent('CustomEvent');
    return e.initCustomEvent(t, !1, !1, n), e;
  }
  const Yo = new Set();
  let Ko,
    Xo = 0;
  function Zo(t, n, e, r, o, i, c, a = 0) {
    const u = 16.666 / r;
    let s = '{\n';
    for (let t = 0; t <= 1; t += u) {
      const r = n + (e - n) * i(t);
      s += 100 * t + `%{${c(r, 1 - r)}}\n`;
    }
    const l = s + `100% {${c(e, 1 - e)}}\n}`,
      f = `__svelte_${(function (t) {
        let n = 5381,
          e = t.length;
        for (; e--; ) n = ((n << 5) - n) ^ t.charCodeAt(e);
        return n >>> 0;
      })(l)}_${a}`,
      d = t.ownerDocument;
    Yo.add(d);
    const p =
        d.__svelte_stylesheet || (d.__svelte_stylesheet = d.head.appendChild(Bo('style')).sheet),
      m = d.__svelte_rules || (d.__svelte_rules = {});
    m[f] || ((m[f] = !0), p.insertRule(`@keyframes ${f} ${l}`, p.cssRules.length));
    const h = t.style.animation || '';
    return (
      (t.style.animation = `${h ? `${h}, ` : ''}${f} ${r}ms linear ${o}ms 1 both`), (Xo += 1), f
    );
  }
  function Jo(t, n) {
    const e = (t.style.animation || '').split(', '),
      r = e.filter(n ? (t) => t.indexOf(n) < 0 : (t) => -1 === t.indexOf('__svelte')),
      o = e.length - r.length;
    o &&
      ((t.style.animation = r.join(', ')),
      (Xo -= o),
      Xo ||
        jo(() => {
          Xo ||
            (Yo.forEach((t) => {
              const n = t.__svelte_stylesheet;
              let e = n.cssRules.length;
              for (; e--; ) n.deleteRule(e);
              t.__svelte_rules = {};
            }),
            Yo.clear());
        }));
  }
  function Qo(t) {
    Ko = t;
  }
  function ti() {
    if (!Ko) throw new Error('Function called outside component initialization');
    return Ko;
  }
  function ni() {
    const t = ti();
    return (n, e) => {
      const r = t.$$.callbacks[n];
      if (r) {
        const o = Vo(n, e);
        r.slice().forEach((n) => {
          n.call(t, o);
        });
      }
    };
  }
  function ei(t, n) {
    ti().$$.context.set(t, n);
  }
  function ri(t) {
    return ti().$$.context.get(t);
  }
  function oi(t, n) {
    const e = t.$$.callbacks[n.type];
    e && e.slice().forEach((t) => t(n));
  }
  const ii = [],
    ci = [],
    ai = [],
    ui = [],
    si = Promise.resolve();
  let li = !1;
  function fi() {
    li || ((li = !0), si.then(hi));
  }
  function di(t) {
    ai.push(t);
  }
  let pi = !1;
  const mi = new Set();
  function hi() {
    if (!pi) {
      pi = !0;
      do {
        for (let t = 0; t < ii.length; t += 1) {
          const n = ii[t];
          Qo(n), vi(n.$$);
        }
        for (Qo(null), ii.length = 0; ci.length; ) ci.pop()();
        for (let t = 0; t < ai.length; t += 1) {
          const n = ai[t];
          mi.has(n) || (mi.add(n), n());
        }
        ai.length = 0;
      } while (ii.length);
      for (; ui.length; ) ui.pop()();
      (li = !1), (pi = !1), mi.clear();
    }
  }
  function vi(t) {
    if (null !== t.fragment) {
      t.update(), mo(t.before_update);
      const n = t.dirty;
      (t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(di);
    }
  }
  let gi;
  function yi() {
    return (
      gi ||
        ((gi = Promise.resolve()),
        gi.then(() => {
          gi = null;
        })),
      gi
    );
  }
  function bi(t, n, e) {
    t.dispatchEvent(Vo(`${n ? 'intro' : 'outro'}${e}`));
  }
  const $i = new Set();
  let xi;
  function wi() {
    xi = { r: 0, c: [], p: xi };
  }
  function Oi() {
    xi.r || mo(xi.c), (xi = xi.p);
  }
  function Si(t, n) {
    t && t.i && ($i.delete(t), t.i(n));
  }
  function ki(t, n, e, r) {
    if (t && t.o) {
      if ($i.has(t)) return;
      $i.add(t),
        xi.c.push(() => {
          $i.delete(t), r && (e && t.d(1), r());
        }),
        t.o(n);
    }
  }
  const Ri = { duration: 0 };
  function Ci(t, n, e) {
    let r,
      o,
      i = n(t, e),
      c = !1,
      a = 0;
    function u() {
      r && Jo(t, r);
    }
    function s() {
      const { delay: n = 0, duration: e = 300, easing: s = so, tick: l = uo, css: f } = i || Ri;
      f && (r = Zo(t, 0, 1, e, n, s, f, a++)), l(0, 1);
      const d = Eo() + n,
        p = d + e;
      o && o.abort(),
        (c = !0),
        di(() => bi(t, !0, 'start')),
        (o = To((n) => {
          if (c) {
            if (n >= p) return l(1, 0), bi(t, !0, 'end'), u(), (c = !1);
            if (n >= d) {
              const t = s((n - d) / e);
              l(t, 1 - t);
            }
          }
          return c;
        }));
    }
    let l = !1;
    return {
      start() {
        l || (Jo(t), ho(i) ? ((i = i()), yi().then(s)) : s());
      },
      invalidate() {
        l = !1;
      },
      end() {
        c && (u(), (c = !1));
      },
    };
  }
  function Ei(t, n, e) {
    let r,
      o = n(t, e),
      i = !0;
    const c = xi;
    function a() {
      const { delay: n = 0, duration: e = 300, easing: a = so, tick: u = uo, css: s } = o || Ri;
      s && (r = Zo(t, 1, 0, e, n, a, s));
      const l = Eo() + n,
        f = l + e;
      di(() => bi(t, !1, 'start')),
        To((n) => {
          if (i) {
            if (n >= f) return u(0, 1), bi(t, !1, 'end'), --c.r || mo(c.c), !1;
            if (n >= l) {
              const t = a((n - l) / e);
              u(1 - t, t);
            }
          }
          return i;
        });
    }
    return (
      (c.r += 1),
      ho(o)
        ? yi().then(() => {
            (o = o()), a();
          })
        : a(),
      {
        end(n) {
          n && o.tick && o.tick(1, 0), i && (r && Jo(t, r), (i = !1));
        },
      }
    );
  }
  function ji(t, n, e, r) {
    let o = n(t, e),
      i = r ? 0 : 1,
      c = null,
      a = null,
      u = null;
    function s() {
      u && Jo(t, u);
    }
    function l(t, n) {
      const e = t.b - i;
      return (
        (n *= Math.abs(e)),
        { a: i, b: t.b, d: e, duration: n, start: t.start, end: t.start + n, group: t.group }
      );
    }
    function f(n) {
      const { delay: e = 0, duration: r = 300, easing: f = so, tick: d = uo, css: p } = o || Ri,
        m = { start: Eo() + e, b: n };
      n || ((m.group = xi), (xi.r += 1)),
        c || a
          ? (a = m)
          : (p && (s(), (u = Zo(t, i, n, r, e, f, p))),
            n && d(0, 1),
            (c = l(m, r)),
            di(() => bi(t, n, 'start')),
            To((n) => {
              if (
                (a &&
                  n > a.start &&
                  ((c = l(a, r)),
                  (a = null),
                  bi(t, c.b, 'start'),
                  p && (s(), (u = Zo(t, i, c.b, c.duration, 0, f, o.css)))),
                c)
              )
                if (n >= c.end)
                  d((i = c.b), 1 - i),
                    bi(t, c.b, 'end'),
                    a || (c.b ? s() : --c.group.r || mo(c.group.c)),
                    (c = null);
                else if (n >= c.start) {
                  const t = n - c.start;
                  (i = c.a + c.d * f(t / c.duration)), d(i, 1 - i);
                }
              return !(!c && !a);
            }));
    }
    return {
      run(t) {
        ho(o)
          ? yi().then(() => {
              (o = o()), f(t);
            })
          : f(t);
      },
      end() {
        s(), (c = a = null);
      },
    };
  }
  const Pi =
    'undefined' != typeof window ? window : 'undefined' != typeof globalThis ? globalThis : global;
  function Ai(t, n) {
    ki(t, 1, 1, () => {
      n.delete(t.key);
    });
  }
  function Ti(t, n, e, r, o, i, c, a, u, s, l, f) {
    let d = t.length,
      p = i.length,
      m = d;
    const h = {};
    for (; m--; ) h[t[m].key] = m;
    const v = [],
      g = new Map(),
      y = new Map();
    for (m = p; m--; ) {
      const t = f(o, i, m),
        a = e(t);
      let u = c.get(a);
      u ? r && u.p(t, n) : ((u = s(a, t)), u.c()),
        g.set(a, (v[m] = u)),
        a in h && y.set(a, Math.abs(m - h[a]));
    }
    const b = new Set(),
      $ = new Set();
    function x(t) {
      Si(t, 1), t.m(a, l), c.set(t.key, t), (l = t.first), p--;
    }
    for (; d && p; ) {
      const n = v[p - 1],
        e = t[d - 1],
        r = n.key,
        o = e.key;
      n === e
        ? ((l = n.first), d--, p--)
        : g.has(o)
        ? !c.has(r) || b.has(r)
          ? x(n)
          : $.has(o)
          ? d--
          : y.get(r) > y.get(o)
          ? ($.add(r), x(n))
          : (b.add(o), d--)
        : (u(e, c), d--);
    }
    for (; d--; ) {
      const n = t[d];
      g.has(n.key) || u(n, c);
    }
    for (; p; ) x(v[p - 1]);
    return v;
  }
  function Li(t, n) {
    const e = {},
      r = {},
      o = { $$scope: 1 };
    let i = t.length;
    for (; i--; ) {
      const c = t[i],
        a = n[i];
      if (a) {
        for (const t in c) t in a || (r[t] = 1);
        for (const t in a) o[t] || ((e[t] = a[t]), (o[t] = 1));
        t[i] = a;
      } else for (const t in c) o[t] = 1;
    }
    for (const t in r) t in e || (e[t] = void 0);
    return e;
  }
  function Mi(t) {
    return 'object' == typeof t && null !== t ? t : {};
  }
  function _i(t) {
    t && t.c();
  }
  function Fi(t, n, e, r) {
    const { fragment: o, on_mount: i, on_destroy: c, after_update: a } = t.$$;
    o && o.m(n, e),
      r ||
        di(() => {
          const n = i.map(fo).filter(ho);
          c ? c.push(...n) : mo(n), (t.$$.on_mount = []);
        }),
      a.forEach(di);
  }
  function Bi(t, n) {
    const e = t.$$;
    null !== e.fragment &&
      (mo(e.on_destroy),
      e.fragment && e.fragment.d(n),
      (e.on_destroy = e.fragment = null),
      (e.ctx = []));
  }
  function Ii(t, n, e, r, o, i, c = [-1]) {
    const a = Ko;
    Qo(t);
    const u = (t.$$ = {
      fragment: null,
      ctx: null,
      props: i,
      update: uo,
      not_equal: o,
      bound: po(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(a ? a.$$.context : n.context || []),
      callbacks: po(),
      dirty: c,
      skip_bound: !1,
    });
    let s = !1;
    if (
      ((u.ctx = e
        ? e(t, n.props || {}, (n, e, ...r) => {
            const i = r.length ? r[0] : e;
            return (
              u.ctx &&
                o(u.ctx[n], (u.ctx[n] = i)) &&
                (!u.skip_bound && u.bound[n] && u.bound[n](i),
                s &&
                  (function (t, n) {
                    -1 === t.$$.dirty[0] && (ii.push(t), fi(), t.$$.dirty.fill(0)),
                      (t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
                  })(t, n)),
              e
            );
          })
        : []),
      u.update(),
      (s = !0),
      mo(u.before_update),
      (u.fragment = !!r && r(u.ctx)),
      n.target)
    ) {
      if (n.hydrate) {
        const t = (function (t) {
          return Array.from(t.childNodes);
        })(n.target);
        u.fragment && u.fragment.l(t), t.forEach(_o);
      } else u.fragment && u.fragment.c();
      n.intro && Si(t.$$.fragment), Fi(t, n.target, n.anchor, n.customElement), hi();
    }
    Qo(a);
  }
  class Ni {
    $destroy() {
      Bi(this, 1), (this.$destroy = uo);
    }
    $on(t, n) {
      const e = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return (
        e.push(n),
        () => {
          const t = e.indexOf(n);
          -1 !== t && e.splice(t, 1);
        }
      );
    }
    $set(t) {
      var n;
      this.$$set &&
        ((n = t), 0 !== Object.keys(n).length) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
  }
  function Di(t) {
    return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
  }
  function qi(t) {
    const n = t - 1;
    return n * n * n + 1;
  }
  function Hi(
    t,
    { delay: n = 0, duration: e = 400, easing: r = Di, amount: o = 5, opacity: i = 0 } = {}
  ) {
    const c = getComputedStyle(t),
      a = +c.opacity,
      u = 'none' === c.filter ? '' : c.filter,
      s = a * (1 - i);
    return {
      delay: n,
      duration: e,
      easing: r,
      css: (t, n) => `opacity: ${a - s * n}; filter: ${u} blur(${n * o}px);`,
    };
  }
  function zi(t, { delay: n = 0, duration: e = 400, easing: r = so } = {}) {
    const o = +getComputedStyle(t).opacity;
    return { delay: n, duration: e, easing: r, css: (t) => 'opacity: ' + t * o };
  }
  function Wi(t, { delay: n = 0, duration: e = 400, easing: r = qi } = {}) {
    const o = getComputedStyle(t),
      i = +o.opacity,
      c = parseFloat(o.height),
      a = parseFloat(o.paddingTop),
      u = parseFloat(o.paddingBottom),
      s = parseFloat(o.marginTop),
      l = parseFloat(o.marginBottom),
      f = parseFloat(o.borderTopWidth),
      d = parseFloat(o.borderBottomWidth);
    return {
      delay: n,
      duration: e,
      easing: r,
      css: (t) =>
        `overflow: hidden;opacity: ${Math.min(20 * t, 1) * i};height: ${t * c}px;padding-top: ${
          t * a
        }px;padding-bottom: ${t * u}px;margin-top: ${t * s}px;margin-bottom: ${
          t * l
        }px;border-top-width: ${t * f}px;border-bottom-width: ${t * d}px;`,
    };
  }
  var Ui = o(function () {
    qt(1);
  });
  Dt(
    { target: 'Object', stat: !0, forced: Ui },
    {
      keys: function (t) {
        return qt(y(t));
      },
    }
  );
  var Gi = lt.f,
    Vi = o(function () {
      Gi(1);
    });
  Dt(
    { target: 'Object', stat: !0, forced: !i || Vi, sham: !i },
    {
      getOwnPropertyDescriptor: function (t, n) {
        return Gi(ut(t), n);
      },
    }
  ),
    Dt(
      { target: 'Object', stat: !0, sham: !i },
      {
        getOwnPropertyDescriptors: function (t) {
          for (var n, e, r = ut(t), o = lt.f, i = Pt(r), c = {}, a = 0; i.length > a; )
            void 0 !== (e = o(r, (n = i[a++]))) && br(c, n, e);
          return c;
        },
      }
    ),
    Dt({ target: 'Object', stat: !0, forced: !i, sham: !i }, { defineProperties: Ht }),
    Dt({ target: 'Object', stat: !0, forced: !i, sham: !i }, { defineProperty: m.f });
  var Yi,
    Ki,
    Xi,
    Zi = r.Promise,
    Ji = function (t, n, e) {
      for (var r in n) G(t, r, n[r], e);
      return t;
    },
    Qi = gn('species'),
    tc = function (t) {
      var n = pt(t),
        e = m.f;
      i &&
        n &&
        !n[Qi] &&
        e(n, Qi, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    },
    nc = function (t, n, e) {
      if (!(t instanceof n)) throw TypeError('Incorrect ' + (e ? e + ' ' : '') + 'invocation');
      return t;
    },
    ec = function (t, n) {
      (this.stopped = t), (this.result = n);
    },
    rc = function (t, n, e) {
      var r,
        o,
        i,
        c,
        a,
        u,
        s,
        l = e && e.that,
        d = !(!e || !e.AS_ENTRIES),
        p = !(!e || !e.IS_ITERATOR),
        m = !(!e || !e.INTERRUPTED),
        h = kn(n, l, 1 + d + m),
        v = function (t) {
          return r && mr(r), new ec(!0, t);
        },
        g = function (t) {
          return d ? (f(t), m ? h(t[0], t[1], v) : h(t[0], t[1])) : m ? h(t, v) : h(t);
        };
      if (p) r = t;
      else {
        if ('function' != typeof (o = xr(t))) throw TypeError('Target is not iterable');
        if (yr(o)) {
          for (i = 0, c = yt(t.length); c > i; i++) if ((a = g(t[i])) && a instanceof ec) return a;
          return new ec(!1);
        }
        r = o.call(t);
      }
      for (u = r.next; !(s = u.call(r)).done; ) {
        try {
          a = g(s.value);
        } catch (t) {
          throw (mr(r), t);
        }
        if ('object' == typeof a && a && a instanceof ec) return a;
      }
      return new ec(!1);
    },
    oc = gn('species'),
    ic = function (t, n) {
      var e,
        r = f(t).constructor;
      return void 0 === r || null == (e = f(r)[oc]) ? n : Sn(e);
    },
    cc = /(?:iphone|ipod|ipad).*applewebkit/i.test(nn),
    ac = r.location,
    uc = r.setImmediate,
    sc = r.clearImmediate,
    lc = r.process,
    fc = r.MessageChannel,
    dc = r.Dispatch,
    pc = 0,
    mc = {},
    hc = 'onreadystatechange',
    vc = function (t) {
      if (mc.hasOwnProperty(t)) {
        var n = mc[t];
        delete mc[t], n();
      }
    },
    gc = function (t) {
      return function () {
        vc(t);
      };
    },
    yc = function (t) {
      vc(t.data);
    },
    bc = function (t) {
      r.postMessage(t + '', ac.protocol + '//' + ac.host);
    };
  (uc && sc) ||
    ((uc = function (t) {
      for (var n = [], e = 1; arguments.length > e; ) n.push(arguments[e++]);
      return (
        (mc[++pc] = function () {
          ('function' == typeof t ? t : Function(t)).apply(void 0, n);
        }),
        Yi(pc),
        pc
      );
    }),
    (sc = function (t) {
      delete mc[t];
    }),
    tn
      ? (Yi = function (t) {
          lc.nextTick(gc(t));
        })
      : dc && dc.now
      ? (Yi = function (t) {
          dc.now(gc(t));
        })
      : fc && !cc
      ? ((Xi = (Ki = new fc()).port2), (Ki.port1.onmessage = yc), (Yi = kn(Xi.postMessage, Xi, 1)))
      : r.addEventListener &&
        'function' == typeof postMessage &&
        !r.importScripts &&
        ac &&
        'file:' !== ac.protocol &&
        !o(bc)
      ? ((Yi = bc), r.addEventListener('message', yc, !1))
      : (Yi =
          hc in s('script')
            ? function (t) {
                zt.appendChild(s('script')).onreadystatechange = function () {
                  zt.removeChild(this), vc(t);
                };
              }
            : function (t) {
                setTimeout(gc(t), 0);
              }));
  var $c,
    xc,
    wc,
    Oc,
    Sc,
    kc,
    Rc,
    Cc,
    Ec = { set: uc, clear: sc },
    jc = /web0s(?!.*chrome)/i.test(nn),
    Pc = lt.f,
    Ac = Ec.set,
    Tc = r.MutationObserver || r.WebKitMutationObserver,
    Lc = r.document,
    Mc = r.process,
    _c = r.Promise,
    Fc = Pc(r, 'queueMicrotask'),
    Bc = Fc && Fc.value;
  Bc ||
    (($c = function () {
      var t, n;
      for (tn && (t = Mc.domain) && t.exit(); xc; ) {
        (n = xc.fn), (xc = xc.next);
        try {
          n();
        } catch (t) {
          throw (xc ? Oc() : (wc = void 0), t);
        }
      }
      (wc = void 0), t && t.enter();
    }),
    cc || tn || jc || !Tc || !Lc
      ? _c && _c.resolve
        ? ((Rc = _c.resolve(void 0)),
          (Cc = Rc.then),
          (Oc = function () {
            Cc.call(Rc, $c);
          }))
        : (Oc = tn
            ? function () {
                Mc.nextTick($c);
              }
            : function () {
                Ac.call(r, $c);
              })
      : ((Sc = !0),
        (kc = Lc.createTextNode('')),
        new Tc($c).observe(kc, { characterData: !0 }),
        (Oc = function () {
          kc.data = Sc = !Sc;
        })));
  var Ic,
    Nc,
    Dc,
    qc,
    Hc =
      Bc ||
      function (t) {
        var n = { fn: t, next: void 0 };
        wc && (wc.next = n), xc || ((xc = n), Oc()), (wc = n);
      },
    zc = function (t) {
      var n, e;
      (this.promise = new t(function (t, r) {
        if (void 0 !== n || void 0 !== e) throw TypeError('Bad Promise constructor');
        (n = t), (e = r);
      })),
        (this.resolve = Sn(n)),
        (this.reject = Sn(e));
    },
    Wc = {
      f: function (t) {
        return new zc(t);
      },
    },
    Uc = function (t, n) {
      if ((f(t), c(n) && n.constructor === t)) return n;
      var e = Wc.f(t);
      return (0, e.resolve)(n), e.promise;
    },
    Gc = function (t) {
      try {
        return { error: !1, value: t() };
      } catch (t) {
        return { error: !0, value: t };
      }
    },
    Vc = Ec.set,
    Yc = gn('species'),
    Kc = 'Promise',
    Xc = U.get,
    Zc = U.set,
    Jc = U.getterFor(Kc),
    Qc = Zi,
    ta = r.TypeError,
    na = r.document,
    ea = r.process,
    ra = pt('fetch'),
    oa = Wc.f,
    ia = oa,
    ca = !!(na && na.createEvent && r.dispatchEvent),
    aa = 'function' == typeof PromiseRejectionEvent,
    ua = 'unhandledrejection',
    sa = It(Kc, function () {
      if (!(E(Qc) !== String(Qc))) {
        if (66 === cn) return !0;
        if (!tn && !aa) return !0;
      }
      if (cn >= 51 && /native code/.test(Qc)) return !1;
      var t = Qc.resolve(1),
        n = function (t) {
          t(
            function () {},
            function () {}
          );
        };
      return ((t.constructor = {})[Yc] = n), !(t.then(function () {}) instanceof n);
    }),
    la =
      sa ||
      !Rr(function (t) {
        Qc.all(t).catch(function () {});
      }),
    fa = function (t) {
      var n;
      return !(!c(t) || 'function' != typeof (n = t.then)) && n;
    },
    da = function (t, n) {
      if (!t.notified) {
        t.notified = !0;
        var e = t.reactions;
        Hc(function () {
          for (var r = t.value, o = 1 == t.state, i = 0; e.length > i; ) {
            var c,
              a,
              u,
              s = e[i++],
              l = o ? s.ok : s.fail,
              f = s.resolve,
              d = s.reject,
              p = s.domain;
            try {
              l
                ? (o || (2 === t.rejection && va(t), (t.rejection = 1)),
                  !0 === l ? (c = r) : (p && p.enter(), (c = l(r)), p && (p.exit(), (u = !0))),
                  c === s.promise
                    ? d(ta('Promise-chain cycle'))
                    : (a = fa(c))
                    ? a.call(c, f, d)
                    : f(c))
                : d(r);
            } catch (t) {
              p && !u && p.exit(), d(t);
            }
          }
          (t.reactions = []), (t.notified = !1), n && !t.rejection && ma(t);
        });
      }
    },
    pa = function (t, n, e) {
      var o, i;
      ca
        ? (((o = na.createEvent('Event')).promise = n),
          (o.reason = e),
          o.initEvent(t, !1, !0),
          r.dispatchEvent(o))
        : (o = { promise: n, reason: e }),
        !aa && (i = r['on' + t])
          ? i(o)
          : t === ua &&
            (function (t, n) {
              var e = r.console;
              e && e.error && (1 === arguments.length ? e.error(t) : e.error(t, n));
            })('Unhandled promise rejection', e);
    },
    ma = function (t) {
      Vc.call(r, function () {
        var n,
          e = t.facade,
          r = t.value;
        if (
          ha(t) &&
          ((n = Gc(function () {
            tn ? ea.emit('unhandledRejection', r, e) : pa(ua, e, r);
          })),
          (t.rejection = tn || ha(t) ? 2 : 1),
          n.error)
        )
          throw n.value;
      });
    },
    ha = function (t) {
      return 1 !== t.rejection && !t.parent;
    },
    va = function (t) {
      Vc.call(r, function () {
        var n = t.facade;
        tn ? ea.emit('rejectionHandled', n) : pa('rejectionhandled', n, t.value);
      });
    },
    ga = function (t, n, e) {
      return function (r) {
        t(n, r, e);
      };
    },
    ya = function (t, n, e) {
      t.done || ((t.done = !0), e && (t = e), (t.value = n), (t.state = 2), da(t, !0));
    },
    ba = function (t, n, e) {
      if (!t.done) {
        (t.done = !0), e && (t = e);
        try {
          if (t.facade === n) throw ta("Promise can't be resolved itself");
          var r = fa(n);
          r
            ? Hc(function () {
                var e = { done: !1 };
                try {
                  r.call(n, ga(ba, e, t), ga(ya, e, t));
                } catch (n) {
                  ya(e, n, t);
                }
              })
            : ((t.value = n), (t.state = 1), da(t, !1));
        } catch (n) {
          ya({ done: !1 }, n, t);
        }
      }
    };
  function $a(t, n, e, r, o, i, c) {
    try {
      var a = t[i](c),
        u = a.value;
    } catch (t) {
      return void e(t);
    }
    a.done ? n(u) : Promise.resolve(u).then(r, o);
  }
  function xa(t, n, e) {
    return (
      n in t
        ? Object.defineProperty(t, n, { value: e, enumerable: !0, configurable: !0, writable: !0 })
        : (t[n] = e),
      t
    );
  }
  sa &&
    ((Qc = function (t) {
      nc(this, Qc, Kc), Sn(t), Ic.call(this);
      var n = Xc(this);
      try {
        t(ga(ba, n), ga(ya, n));
      } catch (t) {
        ya(n, t);
      }
    }),
    ((Ic = function (t) {
      Zc(this, {
        type: Kc,
        done: !1,
        notified: !1,
        parent: !1,
        reactions: [],
        rejection: !1,
        state: 0,
        value: void 0,
      });
    }).prototype = Ji(Qc.prototype, {
      then: function (t, n) {
        var e = Jc(this),
          r = oa(ic(this, Qc));
        return (
          (r.ok = 'function' != typeof t || t),
          (r.fail = 'function' == typeof n && n),
          (r.domain = tn ? ea.domain : void 0),
          (e.parent = !0),
          e.reactions.push(r),
          0 != e.state && da(e, !1),
          r.promise
        );
      },
      catch: function (t) {
        return this.then(void 0, t);
      },
    })),
    (Nc = function () {
      var t = new Ic(),
        n = Xc(t);
      (this.promise = t), (this.resolve = ga(ba, n)), (this.reject = ga(ya, n));
    }),
    (Wc.f = oa = function (t) {
      return t === Qc || t === Dc ? new Nc(t) : ia(t);
    }),
    'function' == typeof Zi &&
      ((qc = Zi.prototype.then),
      G(
        Zi.prototype,
        'then',
        function (t, n) {
          var e = this;
          return new Qc(function (t, n) {
            qc.call(e, t, n);
          }).then(t, n);
        },
        { unsafe: !0 }
      ),
      'function' == typeof ra &&
        Dt(
          { global: !0, enumerable: !0, forced: !0 },
          {
            fetch: function (t) {
              return Uc(Qc, ra.apply(r, arguments));
            },
          }
        ))),
    Dt({ global: !0, wrap: !0, forced: sa }, { Promise: Qc }),
    On(Qc, Kc, !1),
    tc(Kc),
    (Dc = pt(Kc)),
    Dt(
      { target: Kc, stat: !0, forced: sa },
      {
        reject: function (t) {
          var n = oa(this);
          return n.reject.call(void 0, t), n.promise;
        },
      }
    ),
    Dt(
      { target: Kc, stat: !0, forced: sa },
      {
        resolve: function (t) {
          return Uc(this, t);
        },
      }
    ),
    Dt(
      { target: Kc, stat: !0, forced: la },
      {
        all: function (t) {
          var n = this,
            e = oa(n),
            r = e.resolve,
            o = e.reject,
            i = Gc(function () {
              var e = Sn(n.resolve),
                i = [],
                c = 0,
                a = 1;
              rc(t, function (t) {
                var u = c++,
                  s = !1;
                i.push(void 0),
                  a++,
                  e.call(n, t).then(function (t) {
                    s || ((s = !0), (i[u] = t), --a || r(i));
                  }, o);
              }),
                --a || r(i);
            });
          return i.error && o(i.value), e.promise;
        },
        race: function (t) {
          var n = this,
            e = oa(n),
            r = e.reject,
            o = Gc(function () {
              var o = Sn(n.resolve);
              rc(t, function (t) {
                o.call(n, t).then(e.resolve, r);
              });
            });
          return o.error && r(o.value), e.promise;
        },
      }
    );
  var wa = Ot.indexOf,
    Oa = [].indexOf,
    Sa = !!Oa && 1 / [1].indexOf(1, -0) < 0,
    ka = Ur('indexOf');
  function Ra(t, n) {
    if (null == t) return {};
    var e,
      r,
      o = (function (t, n) {
        if (null == t) return {};
        var e,
          r,
          o = {},
          i = Object.keys(t);
        for (r = 0; r < i.length; r++) (e = i[r]), n.indexOf(e) >= 0 || (o[e] = t[e]);
        return o;
      })(t, n);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      for (r = 0; r < i.length; r++)
        (e = i[r]),
          n.indexOf(e) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, e) && (o[e] = t[e]));
    }
    return o;
  }
  Dt(
    { target: 'Array', proto: !0, forced: Sa || !ka },
    {
      indexOf: function (t) {
        return Sa
          ? Oa.apply(this, arguments) || 0
          : wa(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  ),
    $n('asyncIterator'),
    $n('toStringTag'),
    On(r.JSON, 'JSON', !0),
    On(Math, 'Math', !0);
  var Ca = Pn.forEach,
    Ea = Ur('forEach')
      ? [].forEach
      : function (t) {
          return Ca(this, t, arguments.length > 1 ? arguments[1] : void 0);
        };
  Dt({ target: 'Array', proto: !0, forced: [].forEach != Ea }, { forEach: Ea });
  var ja = function () {
      var t = f(this),
        n = '';
      return (
        t.global && (n += 'g'),
        t.ignoreCase && (n += 'i'),
        t.multiline && (n += 'm'),
        t.dotAll && (n += 's'),
        t.unicode && (n += 'u'),
        t.sticky && (n += 'y'),
        n
      );
    },
    Pa = 'toString',
    Aa = RegExp.prototype,
    Ta = Aa.toString,
    La = o(function () {
      return '/a/b' != Ta.call({ source: 'a', flags: 'b' });
    }),
    Ma = Ta.name != Pa;
  for (var _a in ((La || Ma) &&
    G(
      RegExp.prototype,
      Pa,
      function () {
        var t = f(this),
          n = String(t.source),
          e = t.flags;
        return (
          '/' +
          n +
          '/' +
          String(void 0 === e && t instanceof RegExp && !('flags' in Aa) ? ja.call(t) : e)
        );
      },
      { unsafe: !0 }
    ),
  nr)) {
    var Fa = r[_a],
      Ba = Fa && Fa.prototype;
    if (Ba && Ba.forEach !== Ea)
      try {
        v(Ba, 'forEach', Ea);
      } catch (Ss) {
        Ba.forEach = Ea;
      }
  }
  var Ia = [].reverse,
    Na = [1, 2];
  Dt(
    { target: 'Array', proto: !0, forced: String(Na) === String(Na.reverse()) },
    {
      reverse: function () {
        return sn(this) && (this.length = this.length), Ia.call(this);
      },
    }
  );
  var Da = n(function (t) {
      var n = (function (t) {
        var n,
          e = Object.prototype,
          r = e.hasOwnProperty,
          o = 'function' == typeof Symbol ? Symbol : {},
          i = o.iterator || '@@iterator',
          c = o.asyncIterator || '@@asyncIterator',
          a = o.toStringTag || '@@toStringTag';
        function u(t, n, e) {
          return (
            Object.defineProperty(t, n, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[n]
          );
        }
        try {
          u({}, '');
        } catch (t) {
          u = function (t, n, e) {
            return (t[n] = e);
          };
        }
        function s(t, n, e, r) {
          var o = n && n.prototype instanceof v ? n : v,
            i = Object.create(o.prototype),
            c = new E(r || []);
          return (
            (i._invoke = (function (t, n, e) {
              var r = f;
              return function (o, i) {
                if (r === p) throw new Error('Generator is already running');
                if (r === m) {
                  if ('throw' === o) throw i;
                  return P();
                }
                for (e.method = o, e.arg = i; ; ) {
                  var c = e.delegate;
                  if (c) {
                    var a = k(c, e);
                    if (a) {
                      if (a === h) continue;
                      return a;
                    }
                  }
                  if ('next' === e.method) e.sent = e._sent = e.arg;
                  else if ('throw' === e.method) {
                    if (r === f) throw ((r = m), e.arg);
                    e.dispatchException(e.arg);
                  } else 'return' === e.method && e.abrupt('return', e.arg);
                  r = p;
                  var u = l(t, n, e);
                  if ('normal' === u.type) {
                    if (((r = e.done ? m : d), u.arg === h)) continue;
                    return { value: u.arg, done: e.done };
                  }
                  'throw' === u.type && ((r = m), (e.method = 'throw'), (e.arg = u.arg));
                }
              };
            })(t, e, c)),
            i
          );
        }
        function l(t, n, e) {
          try {
            return { type: 'normal', arg: t.call(n, e) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        t.wrap = s;
        var f = 'suspendedStart',
          d = 'suspendedYield',
          p = 'executing',
          m = 'completed',
          h = {};
        function v() {}
        function g() {}
        function y() {}
        var b = {};
        b[i] = function () {
          return this;
        };
        var $ = Object.getPrototypeOf,
          x = $ && $($(j([])));
        x && x !== e && r.call(x, i) && (b = x);
        var w = (y.prototype = v.prototype = Object.create(b));
        function O(t) {
          ['next', 'throw', 'return'].forEach(function (n) {
            u(t, n, function (t) {
              return this._invoke(n, t);
            });
          });
        }
        function S(t, n) {
          function e(o, i, c, a) {
            var u = l(t[o], t, i);
            if ('throw' !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && 'object' === sr(f) && r.call(f, '__await')
                ? n.resolve(f.__await).then(
                    function (t) {
                      e('next', t, c, a);
                    },
                    function (t) {
                      e('throw', t, c, a);
                    }
                  )
                : n.resolve(f).then(
                    function (t) {
                      (s.value = t), c(s);
                    },
                    function (t) {
                      return e('throw', t, c, a);
                    }
                  );
            }
            a(u.arg);
          }
          var o;
          this._invoke = function (t, r) {
            function i() {
              return new n(function (n, o) {
                e(t, r, n, o);
              });
            }
            return (o = o ? o.then(i, i) : i());
          };
        }
        function k(t, e) {
          var r = t.iterator[e.method];
          if (r === n) {
            if (((e.delegate = null), 'throw' === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = 'return'), (e.arg = n), k(t, e), 'throw' === e.method)
              )
                return h;
              (e.method = 'throw'),
                (e.arg = new TypeError("The iterator does not provide a 'throw' method"));
            }
            return h;
          }
          var o = l(r, t.iterator, e.arg);
          if ('throw' === o.type)
            return (e.method = 'throw'), (e.arg = o.arg), (e.delegate = null), h;
          var i = o.arg;
          return i
            ? i.done
              ? ((e[t.resultName] = i.value),
                (e.next = t.nextLoc),
                'return' !== e.method && ((e.method = 'next'), (e.arg = n)),
                (e.delegate = null),
                h)
              : i
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              h);
        }
        function R(t) {
          var n = { tryLoc: t[0] };
          1 in t && (n.catchLoc = t[1]),
            2 in t && ((n.finallyLoc = t[2]), (n.afterLoc = t[3])),
            this.tryEntries.push(n);
        }
        function C(t) {
          var n = t.completion || {};
          (n.type = 'normal'), delete n.arg, (t.completion = n);
        }
        function E(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(R, this), this.reset(!0);
        }
        function j(t) {
          if (t) {
            var e = t[i];
            if (e) return e.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                c = function e() {
                  for (; ++o < t.length; )
                    if (r.call(t, o)) return (e.value = t[o]), (e.done = !1), e;
                  return (e.value = n), (e.done = !0), e;
                };
              return (c.next = c);
            }
          }
          return { next: P };
        }
        function P() {
          return { value: n, done: !0 };
        }
        return (
          (g.prototype = w.constructor = y),
          (y.constructor = g),
          (g.displayName = u(y, a, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (t) {
            var n = 'function' == typeof t && t.constructor;
            return !!n && (n === g || 'GeneratorFunction' === (n.displayName || n.name));
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, y)
                : ((t.__proto__ = y), u(t, a, 'GeneratorFunction')),
              (t.prototype = Object.create(w)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          O(S.prototype),
          (S.prototype[c] = function () {
            return this;
          }),
          (t.AsyncIterator = S),
          (t.async = function (n, e, r, o, i) {
            void 0 === i && (i = Promise);
            var c = new S(s(n, e, r, o), i);
            return t.isGeneratorFunction(e)
              ? c
              : c.next().then(function (t) {
                  return t.done ? t.value : c.next();
                });
          }),
          O(w),
          u(w, a, 'Generator'),
          (w[i] = function () {
            return this;
          }),
          (w.toString = function () {
            return '[object Generator]';
          }),
          (t.keys = function (t) {
            var n = [];
            for (var e in t) n.push(e);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = j),
          (E.prototype = {
            constructor: E,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = n),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = n),
                this.tryEntries.forEach(C),
                !t)
              )
                for (var e in this)
                  't' === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = n);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function o(r, o) {
                return (
                  (a.type = 'throw'),
                  (a.arg = t),
                  (e.next = r),
                  o && ((e.method = 'next'), (e.arg = n)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var c = this.tryEntries[i],
                  a = c.completion;
                if ('root' === c.tryLoc) return o('end');
                if (c.tryLoc <= this.prev) {
                  var u = r.call(c, 'catchLoc'),
                    s = r.call(c, 'finallyLoc');
                  if (u && s) {
                    if (this.prev < c.catchLoc) return o(c.catchLoc, !0);
                    if (this.prev < c.finallyLoc) return o(c.finallyLoc);
                  } else if (u) {
                    if (this.prev < c.catchLoc) return o(c.catchLoc, !0);
                  } else {
                    if (!s) throw new Error('try statement without catch or finally');
                    if (this.prev < c.finallyLoc) return o(c.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, n) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var o = this.tryEntries[e];
                if (o.tryLoc <= this.prev && r.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i &&
                ('break' === t || 'continue' === t) &&
                i.tryLoc <= n &&
                n <= i.finallyLoc &&
                (i = null);
              var c = i ? i.completion : {};
              return (
                (c.type = t),
                (c.arg = n),
                i ? ((this.method = 'next'), (this.next = i.finallyLoc), h) : this.complete(c)
              );
            },
            complete: function (t, n) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                  ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                  : 'normal' === t.type && n && (this.next = n),
                h
              );
            },
            finish: function (t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var e = this.tryEntries[n];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), C(e), h;
              }
            },
            catch: function (t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var e = this.tryEntries[n];
                if (e.tryLoc === t) {
                  var r = e.completion;
                  if ('throw' === r.type) {
                    var o = r.arg;
                    C(e);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: j(t), resultName: e, nextLoc: r }),
                'next' === this.method && (this.arg = n),
                h
              );
            },
          }),
          t
        );
      })(t.exports);
      try {
        regeneratorRuntime = n;
      } catch (t) {
        Function('r', 'regeneratorRuntime = r')(n);
      }
    }),
    qa = !o(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    }),
    Ha = n(function (t) {
      var n = m.f,
        e = M('meta'),
        r = 0,
        o =
          Object.isExtensible ||
          function () {
            return !0;
          },
        i = function (t) {
          n(t, e, { value: { objectID: 'O' + ++r, weakData: {} } });
        },
        a = (t.exports = {
          REQUIRED: !1,
          fastKey: function (t, n) {
            if (!c(t)) return 'symbol' == typeof t ? t : ('string' == typeof t ? 'S' : 'P') + t;
            if (!$(t, e)) {
              if (!o(t)) return 'F';
              if (!n) return 'E';
              i(t);
            }
            return t[e].objectID;
          },
          getWeakData: function (t, n) {
            if (!$(t, e)) {
              if (!o(t)) return !0;
              if (!n) return !1;
              i(t);
            }
            return t[e].weakData;
          },
          onFreeze: function (t) {
            return qa && a.REQUIRED && o(t) && !$(t, e) && i(t), t;
          },
        });
      B[e] = !0;
    }),
    za = Ha.onFreeze,
    Wa = Object.freeze,
    Ua = o(function () {
      Wa(1);
    });
  Dt(
    { target: 'Object', stat: !0, forced: Ua, sham: !qa },
    {
      freeze: function (t) {
        return Wa && c(t) ? Wa(za(t)) : t;
      },
    }
  );
  var Ga = rt.f,
    Va = function (t) {
      return function (n) {
        for (var e, r = ut(n), o = qt(r), c = o.length, a = 0, u = []; c > a; )
          (e = o[a++]), (i && !Ga.call(r, e)) || u.push(t ? [e, r[e]] : r[e]);
        return u;
      };
    },
    Ya = { entries: Va(!0), values: Va(!1) }.entries;
  Dt(
    { target: 'Object', stat: !0 },
    {
      entries: function (t) {
        return Ya(t);
      },
    }
  );
  var Ka = Pn.findIndex,
    Xa = 'findIndex',
    Za = !0;
  Xa in [] &&
    Array(1).findIndex(function () {
      Za = !1;
    }),
    Dt(
      { target: 'Array', proto: !0, forced: Za },
      {
        findIndex: function (t) {
          return Ka(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
    Re(Xa);
  var Ja = [].slice,
    Qa = /MSIE .\./.test(nn),
    tu = function (t) {
      return function (n, e) {
        var r = arguments.length > 2,
          o = r ? Ja.call(arguments, 2) : void 0;
        return t(
          r
            ? function () {
                ('function' == typeof n ? n : Function(n)).apply(this, o);
              }
            : n,
          e
        );
      };
    };
  Dt(
    { global: !0, bind: !0, forced: Qa },
    { setTimeout: tu(r.setTimeout), setInterval: tu(r.setInterval) }
  );
  var nu = Pn.find,
    eu = 'find',
    ru = !0;
  eu in [] &&
    Array(1).find(function () {
      ru = !1;
    }),
    Dt(
      { target: 'Array', proto: !0, forced: ru },
      {
        find: function (t) {
          return nu(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
    Re(eu);
  var ou = [],
    iu = ou.sort,
    cu = o(function () {
      ou.sort(void 0);
    }),
    au = o(function () {
      ou.sort(null);
    }),
    uu = Ur('sort');
  Dt(
    { target: 'Array', proto: !0, forced: cu || !au || !uu },
    {
      sort: function (t) {
        return void 0 === t ? iu.call(y(this)) : iu.call(y(this), Sn(t));
      },
    }
  );
  var su = Pn.map,
    lu = jr('map');
  function fu(t, n) {
    return RegExp(t, n);
  }
  Dt(
    { target: 'Array', proto: !0, forced: !lu },
    {
      map: function (t) {
        return su(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var du = {
      UNSUPPORTED_Y: o(function () {
        var t = fu('a', 'y');
        return (t.lastIndex = 2), null != t.exec('abcd');
      }),
      BROKEN_CARET: o(function () {
        var t = fu('^r', 'gy');
        return (t.lastIndex = 2), null != t.exec('str');
      }),
    },
    pu = RegExp.prototype.exec,
    mu = A('native-string-replace', String.prototype.replace),
    hu = pu,
    vu = (function () {
      var t = /a/,
        n = /b*/g;
      return pu.call(t, 'a'), pu.call(n, 'a'), 0 !== t.lastIndex || 0 !== n.lastIndex;
    })(),
    gu = du.UNSUPPORTED_Y || du.BROKEN_CARET,
    yu = void 0 !== /()??/.exec('')[1];
  (vu || yu || gu) &&
    (hu = function (t) {
      var n,
        e,
        r,
        o,
        i = this,
        c = gu && i.sticky,
        a = ja.call(i),
        u = i.source,
        s = 0,
        l = t;
      return (
        c &&
          (-1 === (a = a.replace('y', '')).indexOf('g') && (a += 'g'),
          (l = String(t).slice(i.lastIndex)),
          i.lastIndex > 0 &&
            (!i.multiline || (i.multiline && '\n' !== t[i.lastIndex - 1])) &&
            ((u = '(?: ' + u + ')'), (l = ' ' + l), s++),
          (e = new RegExp('^(?:' + u + ')', a))),
        yu && (e = new RegExp('^' + u + '$(?!\\s)', a)),
        vu && (n = i.lastIndex),
        (r = pu.call(c ? e : i, l)),
        c
          ? r
            ? ((r.input = r.input.slice(s)),
              (r[0] = r[0].slice(s)),
              (r.index = i.lastIndex),
              (i.lastIndex += r[0].length))
            : (i.lastIndex = 0)
          : vu && r && (i.lastIndex = i.global ? r.index + r[0].length : n),
        yu &&
          r &&
          r.length > 1 &&
          mu.call(r[0], e, function () {
            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0);
          }),
        r
      );
    });
  var bu = hu;
  Dt({ target: 'RegExp', proto: !0, forced: /./.exec !== bu }, { exec: bu });
  var $u = gn('species'),
    xu = !o(function () {
      var t = /./;
      return (
        (t.exec = function () {
          var t = [];
          return (t.groups = { a: '7' }), t;
        }),
        '7' !== ''.replace(t, '$<a>')
      );
    }),
    wu = '$0' === 'a'.replace(/./, '$0'),
    Ou = gn('replace'),
    Su = !!/./[Ou] && '' === /./[Ou]('a', '$0'),
    ku = !o(function () {
      var t = /(?:)/,
        n = t.exec;
      t.exec = function () {
        return n.apply(this, arguments);
      };
      var e = 'ab'.split(t);
      return 2 !== e.length || 'a' !== e[0] || 'b' !== e[1];
    }),
    Ru = function (t, n, e, r) {
      var i = gn(t),
        c = !o(function () {
          var n = {};
          return (
            (n[i] = function () {
              return 7;
            }),
            7 != ''[t](n)
          );
        }),
        a =
          c &&
          !o(function () {
            var n = !1,
              e = /a/;
            return (
              'split' === t &&
                (((e = {}).constructor = {}),
                (e.constructor[$u] = function () {
                  return e;
                }),
                (e.flags = ''),
                (e[i] = /./[i])),
              (e.exec = function () {
                return (n = !0), null;
              }),
              e[i](''),
              !n
            );
          });
      if (!c || !a || ('replace' === t && (!xu || !wu || Su)) || ('split' === t && !ku)) {
        var u = /./[i],
          s = e(
            i,
            ''[t],
            function (t, n, e, r, o) {
              return n.exec === RegExp.prototype.exec
                ? c && !o
                  ? { done: !0, value: u.call(n, e, r) }
                  : { done: !0, value: t.call(e, n, r) }
                : { done: !1 };
            },
            { REPLACE_KEEPS_$0: wu, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Su }
          ),
          l = s[0],
          f = s[1];
        G(String.prototype, t, l),
          G(
            RegExp.prototype,
            i,
            2 == n
              ? function (t, n) {
                  return f.call(t, this, n);
                }
              : function (t) {
                  return f.call(t, this);
                }
          );
      }
      r && v(RegExp.prototype[i], 'sham', !0);
    },
    Cu = Xe.charAt,
    Eu = function (t, n, e) {
      return n + (e ? Cu(t, n).length : 1);
    },
    ju = function (t, n) {
      var e = t.exec;
      if ('function' == typeof e) {
        var r = e.call(t, n);
        if ('object' != typeof r)
          throw TypeError('RegExp exec method returned something other than an Object or null');
        return r;
      }
      if ('RegExp' !== it(t)) throw TypeError('RegExp#exec called on incompatible receiver');
      return bu.call(t, n);
    };
  Ru('match', 1, function (t, n, e) {
    return [
      function (n) {
        var e = g(this),
          r = null == n ? void 0 : n[t];
        return void 0 !== r ? r.call(n, e) : new RegExp(n)[t](String(e));
      },
      function (t) {
        var r = e(n, t, this);
        if (r.done) return r.value;
        var o = f(t),
          i = String(this);
        if (!o.global) return ju(o, i);
        var c = o.unicode;
        o.lastIndex = 0;
        for (var a, u = [], s = 0; null !== (a = ju(o, i)); ) {
          var l = String(a[0]);
          (u[s] = l), '' === l && (o.lastIndex = Eu(i, yt(o.lastIndex), c)), s++;
        }
        return 0 === s ? null : u;
      },
    ];
  });
  var Pu = '\t\n\v\f\r                　\u2028\u2029\ufeff',
    Au = '[' + Pu + ']',
    Tu = RegExp('^' + Au + Au + '*'),
    Lu = RegExp(Au + Au + '*$'),
    Mu = function (t) {
      return function (n) {
        var e = String(g(n));
        return 1 & t && (e = e.replace(Tu, '')), 2 & t && (e = e.replace(Lu, '')), e;
      };
    },
    _u = { start: Mu(1), end: Mu(2), trim: Mu(3) },
    Fu = _u.trim,
    Bu = r.parseInt,
    Iu = /^[+-]?0[Xx]/,
    Nu =
      8 !== Bu(Pu + '08') || 22 !== Bu(Pu + '0x16')
        ? function (t, n) {
            var e = Fu(String(t));
            return Bu(e, n >>> 0 || (Iu.test(e) ? 16 : 10));
          }
        : Bu;
  Dt({ global: !0, forced: parseInt != Nu }, { parseInt: Nu });
  var Du = Math.floor,
    qu = ''.replace,
    Hu = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
    zu = /\$([$&'`]|\d{1,2})/g,
    Wu = function (t, n, e, r, o, i) {
      var c = e + t.length,
        a = r.length,
        u = zu;
      return (
        void 0 !== o && ((o = y(o)), (u = Hu)),
        qu.call(i, u, function (i, u) {
          var s;
          switch (u.charAt(0)) {
            case '$':
              return '$';
            case '&':
              return t;
            case '`':
              return n.slice(0, e);
            case "'":
              return n.slice(c);
            case '<':
              s = o[u.slice(1, -1)];
              break;
            default:
              var l = +u;
              if (0 === l) return i;
              if (l > a) {
                var f = Du(l / 10);
                return 0 === f
                  ? i
                  : f <= a
                  ? void 0 === r[f - 1]
                    ? u.charAt(1)
                    : r[f - 1] + u.charAt(1)
                  : i;
              }
              s = r[l - 1];
          }
          return void 0 === s ? '' : s;
        })
      );
    },
    Uu = Math.max,
    Gu = Math.min;
  Ru('replace', 2, function (t, n, e, r) {
    var o = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
      i = r.REPLACE_KEEPS_$0,
      c = o ? '$' : '$0';
    return [
      function (e, r) {
        var o = g(this),
          i = null == e ? void 0 : e[t];
        return void 0 !== i ? i.call(e, o, r) : n.call(String(o), e, r);
      },
      function (t, r) {
        if ((!o && i) || ('string' == typeof r && -1 === r.indexOf(c))) {
          var a = e(n, t, this, r);
          if (a.done) return a.value;
        }
        var u = f(t),
          s = String(this),
          l = 'function' == typeof r;
        l || (r = String(r));
        var d = u.global;
        if (d) {
          var p = u.unicode;
          u.lastIndex = 0;
        }
        for (var m = []; ; ) {
          var h = ju(u, s);
          if (null === h) break;
          if ((m.push(h), !d)) break;
          '' === String(h[0]) && (u.lastIndex = Eu(s, yt(u.lastIndex), p));
        }
        for (var v, g = '', y = 0, b = 0; b < m.length; b++) {
          h = m[b];
          for (
            var $ = String(h[0]), x = Uu(Gu(vt(h.index), s.length), 0), w = [], O = 1;
            O < h.length;
            O++
          )
            w.push(void 0 === (v = h[O]) ? v : String(v));
          var S = h.groups;
          if (l) {
            var k = [$].concat(w, x, s);
            void 0 !== S && k.push(S);
            var R = String(r.apply(void 0, k));
          } else R = Wu($, s, x, w, S, r);
          x >= y && ((g += s.slice(y, x) + R), (y = x + $.length));
        }
        return g + s.slice(y);
      },
    ];
  });
  var Vu = Ot.includes;
  Dt(
    { target: 'Array', proto: !0 },
    {
      includes: function (t) {
        return Vu(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  ),
    Re('includes');
  const Yu = [];
  function Ku(t, n = uo) {
    let e;
    const r = [];
    function o(n) {
      if (vo(t, n) && ((t = n), e)) {
        const n = !Yu.length;
        for (let n = 0; n < r.length; n += 1) {
          const e = r[n];
          e[1](), Yu.push(e, t);
        }
        if (n) {
          for (let t = 0; t < Yu.length; t += 2) Yu[t][0](Yu[t + 1]);
          Yu.length = 0;
        }
      }
    }
    return {
      set: o,
      update: function (n) {
        o(n(t));
      },
      subscribe: function (i, c = uo) {
        const a = [i, c];
        return (
          r.push(a),
          1 === r.length && (e = n(o) || uo),
          i(t),
          () => {
            const t = r.indexOf(a);
            -1 !== t && r.splice(t, 1), 0 === r.length && (e(), (e = null));
          }
        );
      },
    };
  }
  function Xu(t, n) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      n &&
        (r = r.filter(function (n) {
          return Object.getOwnPropertyDescriptor(t, n).enumerable;
        })),
        e.push.apply(e, r);
    }
    return e;
  }
  function Zu(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = null != arguments[n] ? arguments[n] : {};
      n % 2
        ? Xu(Object(e), !0).forEach(function (n) {
            xa(t, n, e[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
        : Xu(Object(e)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
          });
    }
    return t;
  }
  var Ju = Zu(
      Zu({}, Ku({ static: [], dynamic: [] })),
      {},
      {
        getState: function () {
          return (function (t) {
            let n;
            return go(t, (t) => (n = t))(), n;
          })(this);
        },
      }
    ),
    Qu = {
      hide: function () {
        return {};
      },
      cancel: function () {
        return {};
      },
      component: null,
    },
    ts = function () {
      return ri(Qu);
    };
  function ns(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function es(t, n) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      n &&
        (r = r.filter(function (n) {
          return Object.getOwnPropertyDescriptor(t, n).enumerable;
        })),
        e.push.apply(e, r);
    }
    return e;
  }
  function rs(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = null != arguments[n] ? arguments[n] : {};
      n % 2
        ? es(Object(e), !0).forEach(function (n) {
            xa(t, n, e[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
        : es(Object(e)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
          });
    }
    return t;
  }
  function os(t) {
    var n,
      e,
      r,
      o,
      i,
      c,
      a,
      u,
      s = t[13].default,
      l = bo(s, t, t[12], null);
    return {
      c: function () {
        (n = Bo('div')),
          (e = Bo('div')),
          (r = Bo('div')),
          l && l.c(),
          zo(r, 'class', 'modal__content js-modal__content svelte-190jx0e'),
          zo(r, 'role', 'alertdialog'),
          zo(r, 'aria-expanded', 'true'),
          zo(e, 'class', 'modal__dialog svelte-190jx0e'),
          zo(n, 'class', 'modal ' + t[6] + ' svelte-190jx0e'),
          zo(n, 'data-name', t[3]);
      },
      m: function (i, s) {
        Mo(i, n, s),
          Lo(n, e),
          Lo(e, r),
          l && l.m(r, null),
          t[14](r),
          (c = !0),
          a || ((u = Ro((o = t[7].call(null, n, { currentBreakpoint: t[1] })))), (a = !0));
      },
      p: function (n, e) {
        (t = n),
          l && l.p && 4096 & e[0] && xo(l, s, t, t[12], e, null, null),
          o && ho(o.update) && 2 & e[0] && o.update.call(null, { currentBreakpoint: t[1] });
      },
      i: function (e) {
        c ||
          (Si(l, e),
          di(function () {
            i || (i = ji(n, t[4], t[5], !0)), i.run(1);
          }),
          (c = !0));
      },
      o: function (e) {
        ki(l, e), i || (i = ji(n, t[4], t[5], !1)), i.run(0), (c = !1);
      },
      d: function (e) {
        e && _o(n), l && l.d(e), t[14](null), e && i && i.end(), (a = !1), u();
      },
    };
  }
  function is(t) {
    var n,
      e,
      r = t[2] && t[8].default && os(t);
    return {
      c: function () {
        r && r.c(), (n = qo());
      },
      m: function (t, o) {
        r && r.m(t, o), Mo(t, n, o), (e = !0);
      },
      p: function (t, e) {
        t[2] && t[8].default
          ? r
            ? (r.p(t, e), 260 & e[0] && Si(r, 1))
            : ((r = os(t)).c(), Si(r, 1), r.m(n.parentNode, n))
          : r &&
            (wi(),
            ki(r, 1, 1, function () {
              r = null;
            }),
            Oi());
      },
      i: function (t) {
        e || (Si(r), (e = !0));
      },
      o: function (t) {
        ki(r), (e = !1);
      },
      d: function (t) {
        r && r.d(t), t && _o(n);
      },
    };
  }
  var cs = function () {
      return 'ResizeObserver' in window;
    },
    as = Object.freeze({ BACKDROP_CLICK: 'BACKDROP_CLICK', ESC: 'ESC' }),
    us = function (t, n, e) {
      return e ? t.classList.add(n) : t.classList.remove(n);
    },
    ss = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        e = t;
      Object.entries(n).forEach(function (t) {
        var n = qr(t, 2),
          r = n[0],
          o = n[1];
        r in e.style && (e.style[r] = o || '');
      });
    };
  function ls(t, n, e) {
    var r,
      o,
      i,
      c,
      a,
      u = this,
      s = [],
      l = Oo(n, s);
    yo(t, Ju, function (t) {
      return e(10, (a = t));
    });
    var f,
      d,
      p,
      m,
      h = n,
      v = h.$$slots,
      g = void 0 === v ? {} : v,
      y = h.$$scope,
      b = So(g),
      $ = l,
      x = $.name,
      w = $.transition,
      O =
        void 0 === w
          ? function () {
              return null;
            }
          : w,
      S = $.transitionParams,
      k = void 0 === S ? {} : S,
      R = $.breakpoints,
      C = void 0 === R ? {} : R,
      E = $.escapeToClose,
      j = void 0 === E || E,
      P = $.clickOutsideToClose,
      A = void 0 === P || P,
      T = $.disableBodyScroll,
      L = void 0 === T || T,
      M = $.focusOnOpen,
      _ = void 0 === M || M,
      F = $.focusTrap,
      B = void 0 === F || F,
      I = $.classes,
      N = void 0 === I ? '' : I,
      D = Ra($, [
        'name',
        'transition',
        'transitionParams',
        'breakpoints',
        'escapeToClose',
        'clickOutsideToClose',
        'disableBodyScroll',
        'focusOnOpen',
        'focusTrap',
        'classes',
      ]),
      q = ni(),
      H = function (t) {
        return o.cancel(x, t);
      },
      z = function (t) {
        t.target.closest('.js-modal__content') || H(as.BACKDROP_CLICK);
      },
      W = function (t) {
        27 !== !t.keyCode && 'Escape' === t.key && H(as.ESC);
      },
      U = function (t) {
        9 !== !t.keyCode &&
          'Tab' === t.key &&
          (p === document.activeElement && t.shiftKey && (t.preventDefault(), m.focus()),
          m !== document.activeElement || t.shiftKey || (t.preventDefault(), p.focus()));
      };
    ei(Qu, {
      hide: function (t) {
        return o.hide(x, t);
      },
      cancel: H,
      component: ti(),
    });
    var G = function () {
        if (o) {
          var t = c.findIndex(function (t) {
            var n = qr(t, 1)[0];
            return window.matchMedia('(min-width: '.concat(n, ')')).matches;
          });
          e(
            1,
            (d = {
              index: t,
              config:
                t > -1
                  ? c
                      .filter(function (n, e) {
                        return t <= e;
                      })
                      .reverse()
                      .reduce(function (t, n) {
                        var e = qr(n, 2);
                        e[0];
                        var r = e[1];
                        return rs(rs({}, t), r);
                      }, rs({ height: 'auto' }, D))
                  : D,
            })
          );
        }
      },
      V = (function (t, n) {
        var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = null,
          o = !0;
        return function () {
          for (var i = arguments.length, c = new Array(i), a = 0; a < i; a++) c[a] = arguments[a];
          var s = e && o,
            l = function () {
              t.apply.apply(t, [u].concat(c)), (r = null);
            };
          s && ((o = !1), l()), r || (r = setTimeout(l, n));
        };
      })(G, 240);
    return (
      (t.$$set = function (t) {
        (n = lo(lo({}, n), wo(t))), e(35, (l = Oo(n, s))), '$$scope' in t && e(12, (y = t.$$scope));
      }),
      (t.$$.update = function () {
        1024 & t.$$.dirty[0] && e(9, (r = [].concat(Dr(a.dynamic), Dr(a.static)))),
          512 & t.$$.dirty[0] &&
            e(
              2,
              (o = r.find(function (t) {
                return t.props.name === x;
              }))
            ),
          2048 & t.$$.dirty[0] && (c = Object.entries(i));
      }),
      e(
        11,
        (i = Object.entries(C)
          .map(function (t) {
            var n = qr(t, 2),
              e = n[0],
              r = n[1],
              o = /px|em|rem/,
              i = qr(e.match(o) || [], 1)[0],
              c = parseInt(e.replace(o, ''), 10);
            i &&
              ['em', 'rem'].includes(i) &&
              (c *= parseInt(
                window
                  .getComputedStyle(document.documentElement)
                  .getPropertyValue('font-size')
                  .replace('px', ''),
                10
              ));
            return [e, r, c];
          })
          .sort(function (t, n) {
            return n[2] - t[2];
          })
          .reduce(function (t, n) {
            var e = qr(n, 2),
              r = e[0],
              o = e[1];
            return rs(rs({}, t), {}, xa({}, r, o));
          }, {}))
      ),
      [
        f,
        d,
        o,
        x,
        O,
        k,
        N,
        function (t) {
          G(), q('opened');
          var n = null;
          return (
            cs() ? (n = new ResizeObserver(V)).observe(t) : window.addEventListener('resize', V),
            L && ss(document.body, { overflow: 'hidden' }),
            _ &&
              (!(function (t) {
                var n = Dr(
                  t.querySelectorAll(
                    '[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary'
                  )
                );
                if (n.length) {
                  for (
                    var e = function (t) {
                        return t.offsetWidth || t.offsetHeight || t.getClientRects().length;
                      },
                      r = 0;
                    r < n.length;
                    r += 1
                  ) {
                    var o = n[r];
                    if (e(o)) {
                      p = o;
                      break;
                    }
                  }
                  for (var i = n.length - 1; i >= 0; i -= 1) {
                    var c = n[i];
                    if (e(c)) {
                      m = c;
                      break;
                    }
                  }
                  p && p.focus();
                }
              })(t),
              B && t.addEventListener('keydown', U)),
            A && t.addEventListener('click', z),
            j && window.addEventListener('keydown', W),
            {
              update: function () {
                return ((n = Da.mark(function n() {
                  var e, r, o, i, c, a, u, s, l, p, m, h, v, g, y, b;
                  return Da.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), fi(), si;
                        case 2:
                          (e = d.config || {}),
                            (r = e.maxWidth),
                            (o = e.margin),
                            (i = e.height),
                            (c = e.backgroundColor),
                            (a = void 0 === c ? '#fff' : c),
                            (u = e.padding),
                            (s = void 0 === u ? '20px' : u),
                            (l = e.borderRadius),
                            (p = e.backdropColor),
                            (m = void 0 === p ? 'rgba(0, 0, 0, 0.6)' : p),
                            (h = e.boxShadow),
                            (v = e.centered),
                            (g = e.scrollable),
                            (y = e.zIndex),
                            (b = void 0 === y ? '50' : y),
                            us(t, 'modal--centered', v),
                            us(t, 'modal--scrollable', g),
                            ss(t, { zIndex: b, backgroundColor: m }),
                            ss(f, {
                              maxWidth: r,
                              height: i,
                              margin: o,
                              backgroundColor: a,
                              padding: s,
                              borderRadius: l,
                              boxShadow: h,
                            });
                        case 7:
                        case 'end':
                          return n.stop();
                      }
                  }, n);
                })),
                function () {
                  var t = this,
                    e = arguments;
                  return new Promise(function (r, o) {
                    var i = n.apply(t, e);
                    function c(t) {
                      $a(i, r, o, c, a, 'next', t);
                    }
                    function a(t) {
                      $a(i, r, o, c, a, 'throw', t);
                    }
                    c(void 0);
                  });
                })();
                var n;
              },
              destroy: function () {
                q('closed'),
                  L && !r.length && ss(document.body, { overflow: '' }),
                  _ && B && t.removeEventListener('keydown', U),
                  A && t.removeEventListener('click', z),
                  j && window.removeEventListener('keydown', W),
                  cs() && n ? n.disconnect() : window.removeEventListener('resize', V);
              },
            }
          );
        },
        b,
        r,
        a,
        i,
        y,
        g,
        function (t) {
          ci[t ? 'unshift' : 'push'](function () {
            e(0, (f = t));
          });
        },
      ]
    );
  }
  var fs = (function (t) {
      Zt(e, t);
      var n = ns(e);
      function e(t) {
        var r;
        return J(this, e), Ii(Q((r = n.call(this))), t, ls, is, vo, {}, [-1, -1]), r;
      }
      return e;
    })(Ni),
    ds = function (t, n, e) {
      var r, o;
      return (
        Kt &&
          'function' == typeof (r = n.constructor) &&
          r !== e &&
          c((o = r.prototype)) &&
          o !== e.prototype &&
          Kt(t, o),
        t
      );
    },
    ps = m.f,
    ms = Ha.fastKey,
    hs = U.set,
    vs = U.getterFor;
  function gs(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function ys(t, n, e) {
    var r = t.slice();
    return (r[1] = n[e]), r;
  }
  function bs(t) {
    var n,
      e,
      r,
      o = [t[1].componentProps],
      i = t[1].component;
    function c(t) {
      for (var n = {}, e = 0; e < o.length; e += 1) n = lo(n, o[e]);
      return { props: n };
    }
    return (
      i && (n = new i(c())),
      {
        c: function () {
          n && _i(n.$$.fragment), (e = Do());
        },
        m: function (t, o) {
          n && Fi(n, t, o), Mo(t, e, o), (r = !0);
        },
        p: function (t, r) {
          var a = 1 & r ? Li(o, [Mi(t[1].componentProps)]) : {};
          if (i !== (i = t[1].component)) {
            if (n) {
              wi();
              var u = n;
              ki(u.$$.fragment, 1, 0, function () {
                Bi(u, 1);
              }),
                Oi();
            }
            i
              ? (_i((n = new i(c())).$$.fragment), Si(n.$$.fragment, 1), Fi(n, e.parentNode, e))
              : (n = null);
          } else i && n.$set(a);
        },
        i: function (t) {
          r || (n && Si(n.$$.fragment, t), (r = !0));
        },
        o: function (t) {
          n && ki(n.$$.fragment, t), (r = !1);
        },
        d: function (t) {
          n && Bi(n, t), t && _o(e);
        },
      }
    );
  }
  function $s(t, n) {
    for (
      var e, r, o, i = [n[1].props], c = { $$slots: { default: [bs] }, $$scope: { ctx: n } }, a = 0;
      a < i.length;
      a += 1
    )
      c = lo(c, i[a]);
    return (
      (r = new fs({ props: c })).$on('opened', function () {
        ho(n[1].events && n[1].events.opened) &&
          (n[1].events && n[1].events.opened).apply(this, arguments);
      }),
      r.$on('closed', function () {
        ho(n[1].events && n[1].events.closed) &&
          (n[1].events && n[1].events.closed).apply(this, arguments);
      }),
      {
        key: t,
        first: null,
        c: function () {
          (e = qo()), _i(r.$$.fragment), (this.first = e);
        },
        m: function (t, n) {
          Mo(t, e, n), Fi(r, t, n), (o = !0);
        },
        p: function (t, e) {
          n = t;
          var o = 1 & e ? Li(i, [Mi(n[1].props)]) : {};
          17 & e && (o.$$scope = { dirty: e, ctx: n }), r.$set(o);
        },
        i: function (t) {
          o || (Si(r.$$.fragment, t), (o = !0));
        },
        o: function (t) {
          ki(r.$$.fragment, t), (o = !1);
        },
        d: function (t) {
          t && _o(e), Bi(r, t);
        },
      }
    );
  }
  function xs(t) {
    for (
      var n,
        e,
        r = [],
        o = new Map(),
        i = t[0].dynamic,
        c = function (t) {
          return t[1].props.name;
        },
        a = 0;
      a < i.length;
      a += 1
    ) {
      var u = ys(t, i, a),
        s = c(u);
      o.set(s, (r[a] = $s(s, u)));
    }
    return {
      c: function () {
        n = Bo('div');
        for (var t = 0; t < r.length; t += 1) r[t].c();
        zo(n, 'class', 'js-modals');
      },
      m: function (t, o) {
        Mo(t, n, o);
        for (var i = 0; i < r.length; i += 1) r[i].m(n, null);
        e = !0;
      },
      p: function (t, e) {
        var a = qr(e, 1)[0];
        1 & a &&
          ((i = t[0].dynamic), wi(), (r = Ti(r, a, c, 1, t, i, o, n, Ai, $s, null, ys)), Oi());
      },
      i: function (t) {
        if (!e) {
          for (var n = 0; n < i.length; n += 1) Si(r[n]);
          e = !0;
        }
      },
      o: function (t) {
        for (var n = 0; n < r.length; n += 1) ki(r[n]);
        e = !1;
      },
      d: function (t) {
        t && _o(n);
        for (var e = 0; e < r.length; e += 1) r[e].d();
      },
    };
  }
  function ws(t, n, e) {
    var r;
    return (
      yo(t, Ju, function (t) {
        return e(0, (r = t));
      }),
      [r]
    );
  }
  !(function (t, n, e) {
    var i = -1 !== t.indexOf('Map'),
      a = -1 !== t.indexOf('Weak'),
      u = i ? 'set' : 'add',
      s = r[t],
      l = s && s.prototype,
      f = s,
      d = {},
      p = function (t) {
        var n = l[t];
        G(
          l,
          t,
          'add' == t
            ? function (t) {
                return n.call(this, 0 === t ? 0 : t), this;
              }
            : 'delete' == t
            ? function (t) {
                return !(a && !c(t)) && n.call(this, 0 === t ? 0 : t);
              }
            : 'get' == t
            ? function (t) {
                return a && !c(t) ? void 0 : n.call(this, 0 === t ? 0 : t);
              }
            : 'has' == t
            ? function (t) {
                return !(a && !c(t)) && n.call(this, 0 === t ? 0 : t);
              }
            : function (t, e) {
                return n.call(this, 0 === t ? 0 : t, e), this;
              }
        );
      };
    if (
      It(
        t,
        'function' != typeof s ||
          !(
            a ||
            (l.forEach &&
              !o(function () {
                new s().entries().next();
              }))
          )
      )
    )
      (f = e.getConstructor(n, t, i, u)), (Ha.REQUIRED = !0);
    else if (It(t, !0)) {
      var m = new f(),
        h = m[u](a ? {} : -0, 1) != m,
        v = o(function () {
          m.has(1);
        }),
        g = Rr(function (t) {
          new s(t);
        }),
        y =
          !a &&
          o(function () {
            for (var t = new s(), n = 5; n--; ) t[u](n, n);
            return !t.has(-0);
          });
      g ||
        (((f = n(function (n, e) {
          nc(n, f, t);
          var r = ds(new s(), n, f);
          return null != e && rc(e, r[u], { that: r, AS_ENTRIES: i }), r;
        })).prototype = l),
        (l.constructor = f)),
        (v || y) && (p('delete'), p('has'), i && p('get')),
        (y || h) && p(u),
        a && l.clear && delete l.clear;
    }
    (d[t] = f), Dt({ global: !0, forced: f != s }, d), On(f, t), a || e.setStrong(f, t, i);
  })(
    'Map',
    function (t) {
      return function () {
        return t(this, arguments.length ? arguments[0] : void 0);
      };
    },
    {
      getConstructor: function (t, n, e, r) {
        var o = t(function (t, c) {
            nc(t, o, n),
              hs(t, { type: n, index: Yt(null), first: void 0, last: void 0, size: 0 }),
              i || (t.size = 0),
              null != c && rc(c, t[r], { that: t, AS_ENTRIES: e });
          }),
          c = vs(n),
          a = function (t, n, e) {
            var r,
              o,
              a = c(t),
              s = u(t, n);
            return (
              s
                ? (s.value = e)
                : ((a.last = s = {
                    index: (o = ms(n, !0)),
                    key: n,
                    value: e,
                    previous: (r = a.last),
                    next: void 0,
                    removed: !1,
                  }),
                  a.first || (a.first = s),
                  r && (r.next = s),
                  i ? a.size++ : t.size++,
                  'F' !== o && (a.index[o] = s)),
              t
            );
          },
          u = function (t, n) {
            var e,
              r = c(t),
              o = ms(n);
            if ('F' !== o) return r.index[o];
            for (e = r.first; e; e = e.next) if (e.key == n) return e;
          };
        return (
          Ji(o.prototype, {
            clear: function () {
              for (var t = c(this), n = t.index, e = t.first; e; )
                (e.removed = !0),
                  e.previous && (e.previous = e.previous.next = void 0),
                  delete n[e.index],
                  (e = e.next);
              (t.first = t.last = void 0), i ? (t.size = 0) : (this.size = 0);
            },
            delete: function (t) {
              var n = this,
                e = c(n),
                r = u(n, t);
              if (r) {
                var o = r.next,
                  a = r.previous;
                delete e.index[r.index],
                  (r.removed = !0),
                  a && (a.next = o),
                  o && (o.previous = a),
                  e.first == r && (e.first = o),
                  e.last == r && (e.last = a),
                  i ? e.size-- : n.size--;
              }
              return !!r;
            },
            forEach: function (t) {
              for (
                var n, e = c(this), r = kn(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                (n = n ? n.next : e.first);

              )
                for (r(n.value, n.key, this); n && n.removed; ) n = n.previous;
            },
            has: function (t) {
              return !!u(this, t);
            },
          }),
          Ji(
            o.prototype,
            e
              ? {
                  get: function (t) {
                    var n = u(this, t);
                    return n && n.value;
                  },
                  set: function (t, n) {
                    return a(this, 0 === t ? 0 : t, n);
                  },
                }
              : {
                  add: function (t) {
                    return a(this, (t = 0 === t ? 0 : t), t);
                  },
                }
          ),
          i &&
            ps(o.prototype, 'size', {
              get: function () {
                return c(this).size;
              },
            }),
          o
        );
      },
      setStrong: function (t, n, e) {
        var r = n + ' Iterator',
          o = vs(n),
          i = vs(r);
        We(
          t,
          n,
          function (t, n) {
            hs(this, { type: r, target: t, state: o(t), kind: n, last: void 0 });
          },
          function () {
            for (var t = i(this), n = t.kind, e = t.last; e && e.removed; ) e = e.previous;
            return t.target && (t.last = e = e ? e.next : t.state.first)
              ? 'keys' == n
                ? { value: e.key, done: !1 }
                : 'values' == n
                ? { value: e.value, done: !1 }
                : { value: [e.key, e.value], done: !1 }
              : ((t.target = void 0), { value: void 0, done: !0 });
          },
          e ? 'entries' : 'values',
          !e,
          !0
        ),
          tc(n);
      },
    }
  );
  var Os = (function (t) {
      Zt(e, t);
      var n = gs(e);
      function e(t) {
        var r;
        return J(this, e), Ii(Q((r = n.call(this))), t, ws, xs, vo, {}), r;
      }
      return e;
    })(Ni),
    Ss = function (t) {
      t && console.error('[smodale] '.concat(t));
    };
  function ks(t, n) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      n &&
        (r = r.filter(function (n) {
          return Object.getOwnPropertyDescriptor(t, n).enumerable;
        })),
        e.push.apply(e, r);
    }
    return e;
  }
  function Rs(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = null != arguments[n] ? arguments[n] : {};
      n % 2
        ? ks(Object(e), !0).forEach(function (n) {
            xa(t, n, e[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
        : ks(Object(e)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
          });
    }
    return t;
  }
  var Cs = function (t) {
      var n = Ju.getState();
      return [].concat(Dr(n.static), Dr(n.dynamic)).find(function (n) {
        return n.props.name === t;
      });
    },
    Es = function (t, n, e, r, o) {
      Ju.update(function (i) {
        return {
          static: [].concat(Dr(i.static), [
            { props: { name: t }, resolve: n, reject: e, hide: r, cancel: o },
          ]),
          dynamic: i.dynamic,
        };
      });
    },
    js = function (t, n, e, r, o, i, c, a) {
      document.getElementsByClassName('js-modals')[0] || new Os({ target: document.body }),
        Ju.update(function (u) {
          var s = (c && c.name) || 'modal';
          return {
            static: u.static,
            dynamic: [].concat(Dr(u.dynamic), [
              {
                component: o,
                componentProps: i,
                props: Rs(Rs({}, c), {}, { name: ''.concat(s, '-').concat(u.dynamic.length) }),
                events: a,
                resolve: t,
                reject: n,
                hide: e,
                cancel: r,
              },
            ]),
          };
        });
    },
    Ps = function (t, n, e) {
      var r = Cs(n);
      r &&
        (r[t](e),
        (function (t) {
          Ju.update(function (n) {
            return {
              static: n.static.filter(function (n) {
                return n.props.name !== t;
              }),
              dynamic: n.dynamic.filter(function (n) {
                return n.props.name !== t;
              }),
            };
          });
        })(n));
    },
    As = {
      show: function () {
        for (var t = this, n = arguments.length, e = new Array(n), r = 0; r < n; r++)
          e[r] = arguments[r];
        var o = e[0];
        return o
          ? new Promise(function (n, r) {
              if (Cs(o)) Ss('Name '.concat(o, ' already exists. You must provide an unique one.'));
              else {
                var i = [n, r, t.hide, t.cancel];
                'string' == typeof o
                  ? Es.apply(void 0, [o].concat(i))
                  : 'function' == typeof o
                  ? js.apply(void 0, i.concat(e))
                  : Ss('Invalid name or component');
              }
            })
          : (Ss('name missing'), Promise);
      },
      hide: function (t, n) {
        Ps('resolve', t, n);
      },
      cancel: function (t, n) {
        Ps('reject', t, n);
      },
    },
    Ts = {
      subscribe: null,
      addNotification: null,
      removeNotification: null,
      clearNotifications: null,
    };
  function Ls(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function Ms(t) {
    var n,
      e,
      r,
      o = t[0];
    function i(t) {
      return { props: { notification: t[1], withoutStyles: t[2], onRemove: t[3] } };
    }
    return (
      o && (n = new o(i(t))),
      {
        c: function () {
          n && _i(n.$$.fragment), (e = qo());
        },
        m: function (t, o) {
          n && Fi(n, t, o), Mo(t, e, o), (r = !0);
        },
        p: function (t, r) {
          var c = qr(r, 1)[0],
            a = {};
          if (
            (2 & c && (a.notification = t[1]), 4 & c && (a.withoutStyles = t[2]), o !== (o = t[0]))
          ) {
            if (n) {
              wi();
              var u = n;
              ki(u.$$.fragment, 1, 0, function () {
                Bi(u, 1);
              }),
                Oi();
            }
            o
              ? (_i((n = new o(i(t))).$$.fragment), Si(n.$$.fragment, 1), Fi(n, e.parentNode, e))
              : (n = null);
          } else o && n.$set(a);
        },
        i: function (t) {
          r || (n && Si(n.$$.fragment, t), (r = !0));
        },
        o: function (t) {
          n && ki(n.$$.fragment, t), (r = !1);
        },
        d: function (t) {
          t && _o(e), n && Bi(n, t);
        },
      }
    );
  }
  function _s(t, n, e) {
    var r = n.item,
      o = n.notification,
      i = void 0 === o ? {} : o,
      c = n.withoutStyles,
      a = void 0 !== c && c,
      u = ri(Ts).removeNotification,
      s = i,
      l = s.id,
      f = s.removeAfter;
    s.customClass;
    var d,
      p = function () {
        return u(l);
      },
      m = null;
    return (
      f && (m = setTimeout(p, f)),
      (d = function () {
        f && m && clearTimeout(m);
      }),
      ti().$$.on_destroy.push(d),
      (t.$$set = function (t) {
        'item' in t && e(0, (r = t.item)),
          'notification' in t && e(1, (i = t.notification)),
          'withoutStyles' in t && e(2, (a = t.withoutStyles));
      }),
      [r, i, a, p]
    );
  }
  var Fs = (function (t) {
    Zt(e, t);
    var n = Ls(e);
    function e(t) {
      var r;
      return (
        J(this, e),
        Ii(Q((r = n.call(this))), t, _s, Ms, vo, { item: 0, notification: 1, withoutStyles: 2 }),
        r
      );
    }
    return e;
  })(Ni);
  function Bs(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function Is(t) {
    var n,
      e,
      r,
      o,
      i,
      c,
      a,
      u,
      s,
      l,
      f = t[6].default,
      d = bo(f, t, t[5], null),
      p =
        d ||
        (function (t) {
          var n;
          return {
            c: function () {
              n = No(t[1]);
            },
            m: function (t, e) {
              Mo(t, n, e);
            },
            p: uo,
            d: function (t) {
              t && _o(n);
            },
          };
        })(t);
    return {
      c: function () {
        (n = Bo('div')),
          (e = Bo('div')),
          p && p.c(),
          (r = Do()),
          (o = Bo('button')),
          (i = No('×')),
          zo(e, 'class', ko(t[2]('content')) + ' svelte-max09n'),
          zo(o, 'class', ko(t[2]('button')) + ' svelte-max09n'),
          zo(o, 'aria-label', 'delete notification'),
          zo(n, 'class', ko(t[2]()) + ' svelte-max09n'),
          zo(n, 'role', 'status'),
          zo(n, 'aria-live', 'polite');
      },
      m: function (c, a) {
        Mo(c, n, a),
          Lo(n, e),
          p && p.m(e, null),
          Lo(n, r),
          Lo(n, o),
          Lo(o, i),
          (u = !0),
          s ||
            ((l = Ho(o, 'click', function () {
              ho(t[0]) && t[0].apply(this, arguments);
            })),
            (s = !0));
      },
      p: function (n, e) {
        var r = qr(e, 1)[0];
        (t = n), d && d.p && 32 & r && xo(d, f, t, t[5], r, null, null);
      },
      i: function (t) {
        u ||
          (Si(p, t),
          di(function () {
            a && a.end(1), c || (c = Ci(n, zi, {})), c.start();
          }),
          (u = !0));
      },
      o: function (t) {
        ki(p, t), c && c.invalidate(), (a = Ei(n, zi, {})), (u = !1);
      },
      d: function (t) {
        t && _o(n), p && p.d(t), t && a && a.end(), (s = !1), l();
      },
    };
  }
  function Ns(t, n, e) {
    var r = n.$$slots,
      o = void 0 === r ? {} : r,
      i = n.$$scope,
      c = n.notification,
      a = void 0 === c ? {} : c,
      u = n.withoutStyles,
      s = void 0 !== u && u,
      l = n.onRemove,
      f = void 0 === l ? null : l,
      d = a;
    d.id;
    var p = d.text,
      m = d.type;
    return (
      (t.$$set = function (t) {
        'notification' in t && e(3, (a = t.notification)),
          'withoutStyles' in t && e(4, (s = t.withoutStyles)),
          'onRemove' in t && e(0, (f = t.onRemove)),
          '$$scope' in t && e(5, (i = t.$$scope));
      }),
      [
        f,
        p,
        function (t) {
          var n = t ? '-'.concat(t) : '',
            e = ' default-notification-style'.concat(n),
            r = m && !t ? ' default-notification-'.concat(m) : '';
          return 'notification'
            .concat(n)
            .concat(s ? '' : e)
            .concat(r);
        },
        a,
        s,
        i,
        o,
      ]
    );
  }
  var Ds = (function (t) {
      Zt(e, t);
      var n = Bs(e);
      function e(t) {
        var r;
        return (
          J(this, e),
          Ii(Q((r = n.call(this))), t, Ns, Is, vo, {
            notification: 3,
            withoutStyles: 4,
            onRemove: 0,
          }),
          r
        );
      }
      return e;
    })(Ni),
    qs = gn('match'),
    Hs = function (t) {
      var n;
      return c(t) && (void 0 !== (n = t[qs]) ? !!n : 'RegExp' == it(t));
    },
    zs = function (t) {
      if (Hs(t)) throw TypeError("The method doesn't accept regular expressions");
      return t;
    },
    Ws = gn('match');
  Dt(
    {
      target: 'String',
      proto: !0,
      forced: !(function (t) {
        var n = /./;
        try {
          '/./'[t](n);
        } catch (e) {
          try {
            return (n[Ws] = !1), '/./'[t](n);
          } catch (t) {}
        }
        return !1;
      })('includes'),
    },
    {
      includes: function (t) {
        return !!~String(g(this)).indexOf(zs(t), arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var Us = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'];
  function Gs(t, n) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      n &&
        (r = r.filter(function (n) {
          return Object.getOwnPropertyDescriptor(t, n).enumerable;
        })),
        e.push.apply(e, r);
    }
    return e;
  }
  function Vs(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = null != arguments[n] ? arguments[n] : {};
      n % 2
        ? Gs(Object(e), !0).forEach(function (n) {
            xa(t, n, e[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
        : Gs(Object(e)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
          });
    }
    return t;
  }
  var Ys = function (t, n) {
      if (
        !(function (t) {
          return !(!t || !t.text || 'string' != typeof t.text || !Us.includes(t.position));
        })(t)
      )
        throw new Error('Notification object is not valid');
      var e = t.id,
        r = void 0 === e ? new Date().getTime() : e,
        o = t.removeAfter,
        i = void 0 === o ? +t.removeAfter : o,
        c = Ra(t, ['id', 'removeAfter']);
      n(function (t) {
        return [].concat(Dr(t), [Vs({ id: r, removeAfter: i }, c)]);
      });
    },
    Ks = (function () {
      var t = Ku([]),
        n = t.subscribe,
        e = t.set,
        r = t.update;
      return {
        subscribe: n,
        addNotification: function (t) {
          return Ys(t, r);
        },
        removeNotification: function (t) {
          return (function (t, n) {
            return n(function (n) {
              return n.filter(function (n) {
                return n.id !== t;
              });
            });
          })(t, r);
        },
        clearNotifications: function () {
          return (function (t) {
            return t([]);
          })(e);
        },
      };
    })();
  function Xs(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function Zs(t, n, e) {
    var r = t.slice();
    return (r[6] = n[e]), r;
  }
  function Js(t, n, e) {
    var r = t.slice();
    return (r[9] = n[e]), r;
  }
  function Qs(t) {
    var n, e;
    return (
      (n = new Fs({ props: { notification: t[9], withoutStyles: t[1], item: t[0] ? t[0] : Ds } })),
      {
        c: function () {
          _i(n.$$.fragment);
        },
        m: function (t, r) {
          Fi(n, t, r), (e = !0);
        },
        p: function (t, e) {
          var r = {};
          4 & e && (r.notification = t[9]),
            2 & e && (r.withoutStyles = t[1]),
            1 & e && (r.item = t[0] ? t[0] : Ds),
            n.$set(r);
        },
        i: function (t) {
          e || (Si(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Bi(n, t);
        },
      }
    );
  }
  function tl(t, n) {
    var e,
      r,
      o,
      i = n[9].position === n[6] && Qs(n);
    return {
      key: t,
      first: null,
      c: function () {
        (e = qo()), i && i.c(), (r = qo()), (this.first = e);
      },
      m: function (t, n) {
        Mo(t, e, n), i && i.m(t, n), Mo(t, r, n), (o = !0);
      },
      p: function (t, e) {
        (n = t)[9].position === n[6]
          ? i
            ? (i.p(n, e), 4 & e && Si(i, 1))
            : ((i = Qs(n)).c(), Si(i, 1), i.m(r.parentNode, r))
          : i &&
            (wi(),
            ki(i, 1, 1, function () {
              i = null;
            }),
            Oi());
      },
      i: function (t) {
        o || (Si(i), (o = !0));
      },
      o: function (t) {
        ki(i), (o = !1);
      },
      d: function (t) {
        t && _o(e), i && i.d(t), t && _o(r);
      },
    };
  }
  function nl(t) {
    for (
      var n,
        e,
        r,
        o = [],
        i = new Map(),
        c = t[2],
        a = function (t) {
          return t[9].id;
        },
        u = 0;
      u < c.length;
      u += 1
    ) {
      var s = Js(t, c, u),
        l = a(s);
      i.set(l, (o[u] = tl(l, s)));
    }
    return {
      c: function () {
        n = Bo('div');
        for (var r = 0; r < o.length; r += 1) o[r].c();
        (e = Do()), zo(n, 'class', ko(t[3](t[6])) + ' svelte-1flixvv');
      },
      m: function (t, i) {
        Mo(t, n, i);
        for (var c = 0; c < o.length; c += 1) o[c].m(n, null);
        Lo(n, e), (r = !0);
      },
      p: function (t, r) {
        7 & r && ((c = t[2]), wi(), (o = Ti(o, r, a, 1, t, c, i, n, Ai, tl, e, Js)), Oi());
      },
      i: function (t) {
        if (!r) {
          for (var n = 0; n < c.length; n += 1) Si(o[n]);
          r = !0;
        }
      },
      o: function (t) {
        for (var n = 0; n < o.length; n += 1) ki(o[n]);
        r = !1;
      },
      d: function (t) {
        t && _o(n);
        for (var e = 0; e < o.length; e += 1) o[e].d();
      },
    };
  }
  function el(t) {
    for (
      var n, e, r, o = t[5].default, i = bo(o, t, t[4], null), c = Us, a = [], u = 0;
      u < c.length;
      u += 1
    )
      a[u] = nl(Zs(t, c, u));
    var s = function (t) {
      return ki(a[t], 1, 1, function () {
        a[t] = null;
      });
    };
    return {
      c: function () {
        i && i.c(), (n = Do()), (e = Bo('div'));
        for (var t = 0; t < a.length; t += 1) a[t].c();
        zo(e, 'class', 'notifications');
      },
      m: function (t, o) {
        i && i.m(t, o), Mo(t, n, o), Mo(t, e, o);
        for (var c = 0; c < a.length; c += 1) a[c].m(e, null);
        r = !0;
      },
      p: function (t, n) {
        var r = qr(n, 1)[0];
        if ((i && i.p && 16 & r && xo(i, o, t, t[4], r, null, null), 15 & r)) {
          var u;
          for (c = Us, u = 0; u < c.length; u += 1) {
            var l = Zs(t, c, u);
            a[u]
              ? (a[u].p(l, r), Si(a[u], 1))
              : ((a[u] = nl(l)), a[u].c(), Si(a[u], 1), a[u].m(e, null));
          }
          for (wi(), u = c.length; u < a.length; u += 1) s(u);
          Oi();
        }
      },
      i: function (t) {
        if (!r) {
          Si(i, t);
          for (var n = 0; n < c.length; n += 1) Si(a[n]);
          r = !0;
        }
      },
      o: function (t) {
        ki(i, t), (a = a.filter(Boolean));
        for (var n = 0; n < a.length; n += 1) ki(a[n]);
        r = !1;
      },
      d: function (t) {
        i && i.d(t), t && _o(n), t && _o(e), Fo(a, t);
      },
    };
  }
  function rl(t, n, e) {
    var r;
    yo(t, Ks, function (t) {
      return e(2, (r = t));
    });
    var o = n.$$slots,
      i = void 0 === o ? {} : o,
      c = n.$$scope,
      a = n.item,
      u = void 0 === a ? null : a,
      s = n.withoutStyles,
      l = void 0 !== s && s;
    return (
      ei(Ts, Ks),
      (t.$$set = function (t) {
        'item' in t && e(0, (u = t.item)),
          'withoutStyles' in t && e(1, (l = t.withoutStyles)),
          '$$scope' in t && e(4, (c = t.$$scope));
      }),
      [
        u,
        l,
        r,
        function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
            n = ' default-position-style-'.concat(t);
          return 'position-'.concat(t).concat(l ? '' : n);
        },
        c,
        i,
      ]
    );
  }
  var ol = (function (t) {
    Zt(e, t);
    var n = Xs(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, rl, el, vo, { item: 0, withoutStyles: 1 }), r;
    }
    return e;
  })(Ni);
  function il(t, n) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      n &&
        (r = r.filter(function (n) {
          return Object.getOwnPropertyDescriptor(t, n).enumerable;
        })),
        e.push.apply(e, r);
    }
    return e;
  }
  function cl(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = null != arguments[n] ? arguments[n] : {};
      n % 2
        ? il(Object(e), !0).forEach(function (n) {
            xa(t, n, e[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
        : il(Object(e)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
          });
    }
    return t;
  }
  var al = Object.freeze({ SUCCESS: 'success', WARNING: 'warning', DANGER: 'danger' }),
    ul = function (t, n) {
      Ks.addNotification(
        cl(cl({ removeAfter: 4500, position: 'bottom-center' }, n), {}, { text: t })
      );
    },
    sl =
      "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48' height='48' viewBox='0 0 48 48'%3e %3cg transform='translate(0%2c 0)'%3e %3cpolygon points='37.435 7.736 24 21.172 10.565 7.736 7.737 10.564 21.172 24 7.737 37.436 10.565 40.264 24 26.828 37.435 40.264 40.263 37.436 26.828 24 40.263 10.564 37.435 7.736' fill='currentColor' %3e%3c/polygon%3e %3c/g%3e%3c/svg%3e";
  function ll(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function fl(t) {
    var n;
    return {
      c: function () {
        zo(
          (n = Io('path')),
          'd',
          'M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M14.658,18.284 c-0.661,0.26-2.952,1.354-4.272,0.191c-0.394-0.346-0.59-0.785-0.59-1.318c0-0.998,0.328-1.868,0.919-3.957 c0.104-0.395,0.231-0.907,0.231-1.313c0-0.701-0.266-0.887-0.987-0.887c-0.352,0-0.742,0.125-1.095,0.257l0.195-0.799 c0.787-0.32,1.775-0.71,2.621-0.71c1.269,0,2.203,0.633,2.203,1.837c0,0.347-0.06,0.955-0.186,1.375l-0.73,2.582 c-0.151,0.522-0.424,1.673-0.001,2.014c0.416,0.337,1.401,0.158,1.887-0.071L14.658,18.284z M13.452,8c-0.828,0-1.5-0.672-1.5-1.5 s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S14.28,8,13.452,8z'
        );
      },
      m: function (t, e) {
        Mo(t, n, e);
      },
      d: function (t) {
        t && _o(n);
      },
    };
  }
  function dl(t) {
    var n;
    return {
      c: function () {
        zo(
          (n = Io('path')),
          'd',
          'M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M13.645,5L13,14h-2l-0.608-9 H13.645z M12,20c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2c1.105,0,2,0.895,2,2C14,19.105,13.105,20,12,20z'
        );
      },
      m: function (t, e) {
        Mo(t, n, e);
      },
      d: function (t) {
        t && _o(n);
      },
    };
  }
  function pl(t) {
    var n;
    return {
      c: function () {
        zo(
          (n = Io('path')),
          'd',
          'M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M13.645,5L13,14h-2l-0.608-9 H13.645z M12,20c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2c1.105,0,2,0.895,2,2C14,19.105,13.105,20,12,20z'
        );
      },
      m: function (t, e) {
        Mo(t, n, e);
      },
      d: function (t) {
        t && _o(n);
      },
    };
  }
  function ml(t) {
    var n;
    return {
      c: function () {
        zo(
          (n = Io('path')),
          'd',
          'M12,0A12,12,0,1,0,24,12,12.035,12.035,0,0,0,12,0ZM10,17.414,4.586,12,6,10.586l4,4,8-8L19.414,8Z'
        );
      },
      m: function (t, e) {
        Mo(t, n, e);
      },
      d: function (t) {
        t && _o(n);
      },
    };
  }
  function hl(t) {
    var n, e, r, o, i, c, a, u, s, l, f;
    function d(t, n) {
      return t[0] ? ml : t[1] ? pl : t[2] ? dl : fl;
    }
    var p = d(t),
      m = p(t),
      h = t[6].default,
      v = bo(h, t, t[5], null);
    return {
      c: function () {
        (n = Bo('div')),
          (e = Bo('div')),
          (r = Bo('div')),
          (o = Io('svg')),
          m.c(),
          (i = Do()),
          v && v.c(),
          (c = Do()),
          (a = Bo('button')),
          (u = Bo('img')),
          zo(o, 'class', 'icon icon--sm alert__icon margin-right-sm svelte-xldvxb'),
          zo(o, 'viewBox', '0 0 24 24'),
          zo(o, 'aria-hidden', 'true'),
          zo(r, 'class', 'flex items-center'),
          zo(u, 'class', 'icon block'),
          u.src !== sl &&
            zo(
              u,
              'src',
              "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48' height='48' viewBox='0 0 48 48'%3e %3cg transform='translate(0%2c 0)'%3e %3cpolygon points='37.435 7.736 24 21.172 10.565 7.736 7.737 10.564 21.172 24 7.737 37.436 10.565 40.264 24 26.828 37.435 40.264 40.263 37.436 26.828 24 40.263 10.564 37.435 7.736' fill='currentColor' %3e%3c/polygon%3e %3c/g%3e%3c/svg%3e"
            ),
          zo(u, 'alt', 'Close'),
          zo(a, 'type', 'button'),
          zo(a, 'class', 'reset alert__close-btn margin-left-sm js-tab-focus svelte-xldvxb'),
          zo(e, 'class', 'flex items-center justify-between'),
          zo(n, 'class', 'alert alert--is-visible padding-sm radius-md svelte-xldvxb'),
          zo(n, 'role', 'alert'),
          Go(n, 'alert--success', t[0]),
          Go(n, 'alert--warning', t[1]),
          Go(n, 'alert--danger', t[2]);
      },
      m: function (d, p) {
        Mo(d, n, p),
          Lo(n, e),
          Lo(e, r),
          Lo(r, o),
          m.m(o, null),
          Lo(r, i),
          v && v.m(r, null),
          Lo(e, c),
          Lo(e, a),
          Lo(a, u),
          (s = !0),
          l || ((f = Ho(a, 'click', t[3])), (l = !0));
      },
      p: function (t, e) {
        var r = qr(e, 1)[0];
        p !== (p = d(t)) && (m.d(1), (m = p(t)) && (m.c(), m.m(o, null))),
          v && v.p && 32 & r && xo(v, h, t, t[5], r, null, null),
          1 & r && Go(n, 'alert--success', t[0]),
          2 & r && Go(n, 'alert--warning', t[1]),
          4 & r && Go(n, 'alert--danger', t[2]);
      },
      i: function (t) {
        s || (Si(v, t), (s = !0));
      },
      o: function (t) {
        ki(v, t), (s = !1);
      },
      d: function (t) {
        t && _o(n), m.d(), v && v.d(t), (l = !1), f();
      },
    };
  }
  function vl(t, n, e) {
    var r,
      o,
      i,
      c = n.$$slots,
      a = void 0 === c ? {} : c,
      u = n.$$scope,
      s = n.severity,
      l = ni();
    return (
      (t.$$set = function (t) {
        'severity' in t && e(4, (s = t.severity)), '$$scope' in t && e(5, (u = t.$$scope));
      }),
      (t.$$.update = function () {
        16 & t.$$.dirty && e(0, (r = s === al.SUCCESS)),
          16 & t.$$.dirty && e(1, (o = s === al.WARNING)),
          16 & t.$$.dirty && e(2, (i = s === al.DANGER));
      }),
      [
        r,
        o,
        i,
        function () {
          return l('remove');
        },
        s,
        u,
        a,
      ]
    );
  }
  var gl = (function (t) {
    Zt(e, t);
    var n = ll(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, vl, hl, vo, { severity: 4 }), r;
    }
    return e;
  })(Ni);
  function yl(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function bl(t) {
    var n,
      e = t[0].text + '';
    return {
      c: function () {
        zo((n = Bo('div')), 'class', 'text-sm');
      },
      m: function (t, r) {
        Mo(t, n, r), (n.innerHTML = e);
      },
      p: uo,
      d: function (t) {
        t && _o(n);
      },
    };
  }
  function $l(t) {
    var n, e, r, o, i, c;
    return (
      (r = new gl({
        props: {
          severity: null === (n = t[0]) || void 0 === n ? void 0 : n.type,
          $$slots: { default: [bl] },
          $$scope: { ctx: t },
        },
      })).$on('remove', t[1]),
      {
        c: function () {
          (e = Bo('div')),
            _i(r.$$.fragment),
            zo(e, 'class', 'margin-sm shadow-sm radius-md'),
            zo(e, 'role', 'status'),
            zo(e, 'aria-live', 'polite');
        },
        m: function (t, n) {
          Mo(t, e, n), Fi(r, e, null), (c = !0);
        },
        p: function (t, n) {
          var e = qr(n, 1)[0],
            o = {};
          8 & e && (o.$$scope = { dirty: e, ctx: t }), r.$set(o);
        },
        i: function (t) {
          c ||
            (Si(r.$$.fragment, t),
            di(function () {
              i && i.end(1), o || (o = Ci(e, Wi, {})), o.start();
            }),
            (c = !0));
        },
        o: function (t) {
          ki(r.$$.fragment, t), o && o.invalidate(), (i = Ei(e, Wi, {})), (c = !1);
        },
        d: function (t) {
          t && _o(e), Bi(r), t && i && i.end();
        },
      }
    );
  }
  function xl(t, n, e) {
    var r = [],
      o = Oo(n, r),
      i = o,
      c = i.notification,
      a = void 0 === c ? {} : c,
      u = i.onRemove,
      s =
        void 0 === u
          ? function () {
              return {};
            }
          : u;
    return (
      (t.$$set = function (t) {
        (n = lo(lo({}, n), wo(t))), e(2, (o = Oo(n, r)));
      }),
      [a, s]
    );
  }
  var wl = (function (t) {
    Zt(e, t);
    var n = yl(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, xl, $l, vo, {}), r;
    }
    return e;
  })(Ni);
  function Ol(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function Sl(t) {
    var n,
      e = t[0].default,
      r = bo(e, t, t[1], null);
    return {
      c: function () {
        r && r.c();
      },
      m: function (t, e) {
        r && r.m(t, e), (n = !0);
      },
      p: function (t, n) {
        r && r.p && 2 & n && xo(r, e, t, t[1], n, null, null);
      },
      i: function (t) {
        n || (Si(r, t), (n = !0));
      },
      o: function (t) {
        ki(r, t), (n = !1);
      },
      d: function (t) {
        r && r.d(t);
      },
    };
  }
  function kl(t) {
    var n, e;
    return (
      (n = new ol({ props: { item: wl, $$slots: { default: [Sl] }, $$scope: { ctx: t } } })),
      {
        c: function () {
          _i(n.$$.fragment);
        },
        m: function (t, r) {
          Fi(n, t, r), (e = !0);
        },
        p: function (t, e) {
          var r = qr(e, 1)[0],
            o = {};
          2 & r && (o.$$scope = { dirty: r, ctx: t }), n.$set(o);
        },
        i: function (t) {
          e || (Si(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Bi(n, t);
        },
      }
    );
  }
  function Rl(t, n, e) {
    var r = n.$$slots,
      o = void 0 === r ? {} : r,
      i = n.$$scope;
    return (
      (t.$$set = function (t) {
        '$$scope' in t && e(1, (i = t.$$scope));
      }),
      [o, i]
    );
  }
  var Cl = (function (t) {
    Zt(e, t);
    var n = Ol(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, Rl, kl, vo, {}), r;
    }
    return e;
  })(Ni);
  function El(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function jl(t) {
    var n, e, r, o, i, c, a, u;
    return {
      c: function () {
        ((n = Bo('div')).innerHTML =
          '<h2>Modal title</h2> \n  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!</p> \n  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!</p> \n  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!</p>'),
          (e = Do()),
          (r = Bo('footer')),
          ((o = Bo('button')).textContent = 'Cancel'),
          (i = Do()),
          ((c = Bo('button')).textContent = 'Confirm'),
          zo(n, 'class', 'text-component'),
          zo(o, 'type', 'button'),
          zo(o, 'class', 'btn btn--subtle'),
          zo(c, 'type', 'button'),
          zo(c, 'class', 'btn btn--primary'),
          zo(r, 'class', 'flex justify-end gap-xs margin-top-md');
      },
      m: function (s, l) {
        Mo(s, n, l),
          Mo(s, e, l),
          Mo(s, r, l),
          Lo(r, o),
          Lo(r, i),
          Lo(r, c),
          a || ((u = [Ho(o, 'click', t[1]), Ho(c, 'click', t[0])]), (a = !0));
      },
      p: uo,
      i: uo,
      o: uo,
      d: function (t) {
        t && _o(n), t && _o(e), t && _o(r), (a = !1), mo(u);
      },
    };
  }
  function Pl(t) {
    var n = ts();
    return [n.hide, n.cancel];
  }
  var Al = (function (t) {
    Zt(e, t);
    var n = El(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, Pl, jl, vo, {}), r;
    }
    return e;
  })(Ni);
  function Tl(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function Ll(t) {
    var n, e, r, o, i, c, a, u, s, l, f, d, p, m, h, v;
    return {
      c: function () {
        (n = Bo('header')),
          (e = Bo('button')),
          (r = Bo('img')),
          (o = Do()),
          ((i = Bo('span')).textContent = 'Go back'),
          (c = Do()),
          (a = Bo('div')),
          ((u = Bo('p')).textContent =
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!'),
          (s = Do()),
          ((l = Bo('p')).textContent =
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!'),
          (f = Do()),
          ((d = Bo('p')).textContent =
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!'),
          (p = Do()),
          ((m = Bo('button')).textContent = 'Show nested modal'),
          zo(r, 'class', 'icon'),
          r.src !==
            "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48' height='48' viewBox='0 0 48 48'%3e %3cg transform='translate(0%2c 0)'%3e %3cpath d='M45%2c22H8.828l9.879-9.879a1%2c1%2c0%2c0%2c0%2c0-1.414L17.293%2c9.293a1%2c1%2c0%2c0%2c0-1.414%2c0l-14%2c14a1%2c1%2c0%2c0%2c0%2c0%2c1.414l14%2c14a1%2c1%2c0%2c0%2c0%2c1.414%2c0l1.414-1.414a1%2c1%2c0%2c0%2c0%2c0-1.414L8.828%2c26H45a1%2c1%2c0%2c0%2c0%2c1-1V23A1%2c1%2c0%2c0%2c0%2c45%2c22Z' fill='currentColor' %3e%3c/path%3e %3c/g%3e%3c/svg%3e" &&
            zo(
              r,
              'src',
              "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48' height='48' viewBox='0 0 48 48'%3e %3cg transform='translate(0%2c 0)'%3e %3cpath d='M45%2c22H8.828l9.879-9.879a1%2c1%2c0%2c0%2c0%2c0-1.414L17.293%2c9.293a1%2c1%2c0%2c0%2c0-1.414%2c0l-14%2c14a1%2c1%2c0%2c0%2c0%2c0%2c1.414l14%2c14a1%2c1%2c0%2c0%2c0%2c1.414%2c0l1.414-1.414a1%2c1%2c0%2c0%2c0%2c0-1.414L8.828%2c26H45a1%2c1%2c0%2c0%2c0%2c1-1V23A1%2c1%2c0%2c0%2c0%2c45%2c22Z' fill='currentColor' %3e%3c/path%3e %3c/g%3e%3c/svg%3e"
            ),
          zo(r, 'alt', 'Go back'),
          zo(i, 'class', 'margin-left-xs'),
          zo(e, 'type', 'button'),
          zo(e, 'class', 'btn btn--subtle'),
          zo(n, 'class', 'margin-bottom-sm'),
          zo(m, 'class', 'btn btn--primary'),
          zo(m, 'type', 'button'),
          zo(a, 'class', 'text-component');
      },
      m: function (g, y) {
        Mo(g, n, y),
          Lo(n, e),
          Lo(e, r),
          Lo(e, o),
          Lo(e, i),
          Mo(g, c, y),
          Mo(g, a, y),
          Lo(a, u),
          Lo(a, s),
          Lo(a, l),
          Lo(a, f),
          Lo(a, d),
          Lo(a, p),
          Lo(a, m),
          h || ((v = [Ho(e, 'click', t[0]), Ho(m, 'click', t[1])]), (h = !0));
      },
      p: uo,
      i: uo,
      o: uo,
      d: function (t) {
        t && _o(n), t && _o(c), t && _o(a), (h = !1), mo(v);
      },
    };
  }
  function Ml(t) {
    return [
      ts().cancel,
      function () {
        return As.show(Al, null, {
          padding: 'var(--component-padding)',
          backdropColor: 'transparent',
          breakpoints: {
            '32rem': {
              borderRadius: 'var(--radius-md)',
              margin: 'var(--component-padding)',
              maxWidth: 'var(--max-width-xxs)',
              centered: !0,
              scrollable: !0,
            },
            '48rem': { maxWidth: 'var(--max-width-sm)' },
          },
        });
      },
    ];
  }
  var _l = (function (t) {
    Zt(e, t);
    var n = Tl(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, Ml, Ll, vo, {}), r;
    }
    return e;
  })(Ni);
  function Fl(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function Bl(t) {
    var n, e, r, o, i, c, a, u, s, l, f, d;
    return {
      c: function () {
        (n = Bo('header')),
          ((e = Bo('h2')).textContent = 'First modal'),
          (r = Do()),
          (o = Bo('button')),
          (i = Bo('img')),
          (c = Do()),
          (a = Bo('div')),
          ((u = Bo('p')).textContent =
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta voluptatum unde omnis\n    distinctio obcaecati corporis ducimus beatae. Sunt, debitis ex dicta, illum voluptates molestiae\n    soluta neque, rerum eligendi laudantium maxime.'),
          (s = Do()),
          ((l = Bo('button')).textContent = 'Show nested modal'),
          zo(i, 'class', 'icon icon--sm'),
          i.src !== sl &&
            zo(
              i,
              'src',
              "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48' height='48' viewBox='0 0 48 48'%3e %3cg transform='translate(0%2c 0)'%3e %3cpolygon points='37.435 7.736 24 21.172 10.565 7.736 7.737 10.564 21.172 24 7.737 37.436 10.565 40.264 24 26.828 37.435 40.264 40.263 37.436 26.828 24 40.263 10.564 37.435 7.736' fill='currentColor' %3e%3c/polygon%3e %3c/g%3e%3c/svg%3e"
            ),
          zo(i, 'alt', 'Close'),
          zo(o, 'class', 'btn btn--subtle padding-xs js-tab-focus'),
          zo(o, 'type', 'button'),
          zo(n, 'class', 'flex items-center justify-between margin-bottom-sm'),
          zo(l, 'class', 'btn btn--primary'),
          zo(l, 'type', 'button'),
          zo(a, 'class', 'text-component');
      },
      m: function (p, m) {
        Mo(p, n, m),
          Lo(n, e),
          Lo(n, r),
          Lo(n, o),
          Lo(o, i),
          Mo(p, c, m),
          Mo(p, a, m),
          Lo(a, u),
          Lo(a, s),
          Lo(a, l),
          f || ((d = [Ho(o, 'click', t[0]), Ho(l, 'click', t[1])]), (f = !0));
      },
      p: uo,
      i: uo,
      o: uo,
      d: function (t) {
        t && _o(n), t && _o(c), t && _o(a), (f = !1), mo(d);
      },
    };
  }
  function Il(t) {
    return [
      ts().cancel,
      function () {
        return As.show(_l, null, {
          padding: 'var(--component-padding)',
          backdropColor: 'transparent',
          breakpoints: {
            '32rem': {
              borderRadius: 'var(--radius-md)',
              margin: 'var(--component-padding)',
              maxWidth: 'var(--max-width-xxs)',
              centered: !0,
              scrollable: !0,
            },
            '48rem': { maxWidth: 'var(--max-width-sm)' },
          },
        });
      },
    ];
  }
  var Nl = (function (t) {
    Zt(e, t);
    var n = Fl(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, Il, Bl, vo, {}), r;
    }
    return e;
  })(Ni);
  function Dl(t) {
    var n = t;
    Util.removeClass(n.element, n.showClass),
      (n.firstFocusable = null),
      (n.lastFocusable = null),
      n.selectedTrigger && n.selectedTrigger.focus(),
      n.element.removeAttribute('tabindex'),
      (function (t) {
        t.element.removeEventListener('keydown', t), t.element.removeEventListener('click', t);
      })(n);
  }
  function ql(t, n) {
    (n.keyCode && 27 === n.keyCode) || (n.key && 'Escape' === n.key)
      ? Dl(t)
      : ((n.keyCode && 9 === n.keyCode) || (n.key && 'Tab' === n.key)) &&
        (function (t, n) {
          t.firstFocusable === document.activeElement &&
            n.shiftKey &&
            (n.preventDefault(), t.lastFocusable.focus()),
            t.lastFocusable !== document.activeElement ||
              n.shiftKey ||
              (n.preventDefault(), t.firstFocusable.focus());
        })(t, n);
  }
  function Hl(t) {
    Util.addClass(t.element, t.showClass),
      (function (t) {
        var n = t.element.querySelectorAll(
          '[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary'
        );
        !(function (t, n) {
          for (var e = t, r = 0; r < n.length; r += 1)
            if (n[r].offsetWidth || n[r].offsetHeight || n[r].getClientRects().length)
              return (e.firstFocusable = n[r]), !0;
        })(t, n),
          (function (t, n) {
            for (var e = t, r = n.length - 1; r >= 0; r -= 1)
              if (n[r].offsetWidth || n[r].offsetHeight || n[r].getClientRects().length)
                return (e.lastFocusable = n[r]), !0;
          })(t, n);
      })(t),
      Util.moveFocus(t.element);
  }
  function zl(t) {
    t.element.addEventListener('keydown', t), t.element.addEventListener('click', t);
  }
  function Wl(t) {
    var n = t,
      e = getComputedStyle(n.element, ':before').getPropertyValue('content').replace(/'|"/g, '');
    e !== n.layout &&
      ((n.layout = e),
      'static' !== e && Util.addClass(n.element, 'is-hidden'),
      Util.toggleClass(n.element, n.staticClass + n.customStaticClass, 'static' === e),
      'static' !== e &&
        setTimeout(function () {
          return Util.removeClass(n.element, 'is-hidden');
        }),
      'static' === e
        ? n.element.removeAttribute('role', 'alertdialog')
        : n.element.setAttribute('role', 'alertdialog'),
      'static' === e && Util.hasClass(n.element, n.showClass) && Dl(n));
  }
  function Ul(t) {
    var n = t;
    if (
      ((function (t) {
        var n = getComputedStyle(t.element, ':before').getPropertyValue('content');
        n &&
          '' !== n &&
          'none' !== n &&
          (Wl(t),
          t.element.addEventListener('update-sidebar', function () {
            Wl(t);
          })),
          Util.addClass(t.element, t.readyClass);
      })(n),
      n.triggers)
    )
      for (var e = 0; e < n.triggers.length; e += 1)
        n.triggers[e].addEventListener('click', function (t) {
          if ((t.preventDefault(), Util.hasClass(n.element, n.showClass)))
            return (n.selectedTrigger = t.target), void Dl(n);
          (n.selectedTrigger = t.target), Hl(n), zl(n);
        });
  }
  Dt({ target: 'Function', proto: !0 }, { bind: ro });
  var Gl = function (t) {
    (this.element = t),
      (this.triggers = document.querySelectorAll(
        '[aria-controls="'.concat(this.element.getAttribute('id'), '"]')
      )),
      (this.firstFocusable = null),
      (this.lastFocusable = null),
      (this.selectedTrigger = null),
      (this.showClass = 'sidebar--is-visible'),
      (this.staticClass = 'sidebar--static'),
      (this.customStaticClass = ''),
      (this.readyClass = 'sidebar--loaded'),
      (this.layout = !1),
      (function (t) {
        var n = t,
          e = n.element.getAttribute('data-static-class');
        e && (n.customStaticClass = ' '.concat(e));
      })(this),
      Ul(this);
  };
  function Vl(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function Yl(t) {
    var n, e, r;
    return {
      c: function () {
        (n = Bo('button')),
          zo(
            (e = Bo('i')),
            'class',
            'anim-menu-btn__icon anim-menu-btn__icon--close svelte-k651fp'
          ),
          zo(e, 'aria-hidden', 'true'),
          zo(
            n,
            'class',
            (r = 'reset anim-menu-btn color-contrast-high js-tab-focus ' + t[0] + ' svelte-k651fp')
          ),
          zo(n, 'aria-label', t[2]),
          zo(n, 'aria-controls', t[1]),
          zo(n, 'type', 'button');
      },
      m: function (t, r) {
        Mo(t, n, r), Lo(n, e);
      },
      p: function (t, e) {
        var o = qr(e, 1)[0];
        1 & o &&
          r !==
            (r =
              'reset anim-menu-btn color-contrast-high js-tab-focus ' + t[0] + ' svelte-k651fp') &&
          zo(n, 'class', r),
          4 & o && zo(n, 'aria-label', t[2]),
          2 & o && zo(n, 'aria-controls', t[1]);
      },
      i: uo,
      o: uo,
      d: function (t) {
        t && _o(n);
      },
    };
  }
  function Kl(t, n, e) {
    var r = n.class,
      o = void 0 === r ? '' : r,
      i = n.ariaControls,
      c = void 0 === i ? '' : i,
      a = n.ariaLabel,
      u = void 0 === a ? 'Toggle menu' : a;
    return (
      (t.$$set = function (t) {
        'class' in t && e(0, (o = t.class)),
          'ariaControls' in t && e(1, (c = t.ariaControls)),
          'ariaLabel' in t && e(2, (u = t.ariaLabel));
      }),
      [o, c, u]
    );
  }
  (Gl.prototype.close = function () {
    Dl(this);
  }),
    (Gl.prototype.handleEvent = function (t) {
      switch (t.type) {
        case 'click':
          !(function (t, n) {
            (n.target.closest('.js-sidebar__close-btn') || Util.hasClass(n.target, 'js-sidebar')) &&
              (n.preventDefault(), Dl(t));
          })(this, t);
          break;
        case 'keydown':
          ql(this, t);
      }
    }),
    (Gl.prototype.resetLayout = function () {
      this.element.dispatchEvent(new CustomEvent('update-sidebar'));
    });
  var Xl = (function (t) {
    Zt(e, t);
    var n = Vl(e);
    function e(t) {
      var r;
      return (
        J(this, e),
        Ii(Q((r = n.call(this))), t, Kl, Yl, vo, { class: 0, ariaControls: 1, ariaLabel: 2 }),
        r
      );
    }
    return e;
  })(Ni);
  function Zl(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  var Jl = function (t) {
      return { prop: 1 & t };
    },
    Ql = function (t) {
      return { prop: { sidebar: t[0] } };
    },
    tf = function (t) {
      return { prop: 1 & t };
    },
    nf = function (t) {
      return { prop: { sidebar: t[0] } };
    };
  function ef(t) {
    var n, e, r, o, i, c, a, u, s, l, f, d, p, m, h, v, g, y, b, $, x, w, O;
    e = new Xl({
      props: {
        ariaControls: 'sidebar',
        class:
          'btn btn--subtle radius-50% position-fixed top-0 right-0 z-index-fixed-element margin-top-sm margin-right-md',
      },
    });
    var S = t[3].aside,
      k = bo(S, t, t[2], nf),
      R = t[3].default,
      C = bo(R, t, t[2], Ql);
    return {
      c: function () {
        (n = Bo('div')),
          _i(e.$$.fragment),
          (r = Do()),
          (o = Bo('div')),
          (i = Bo('aside')),
          (c = Bo('div')),
          (a = Bo('header')),
          (u = Bo('div')),
          ((s = Bo('h1')).textContent = 'Smodale'),
          (l = Do()),
          ((f = Bo('small')).textContent = ''.concat('v'.concat('1.0.2'))),
          (d = Do()),
          (p = Bo('button')),
          (m = Bo('img')),
          (h = Do()),
          (v = Bo('div')),
          (g = Bo('div')),
          k && k.c(),
          (y = Do()),
          (b = Bo('main')),
          ($ = Bo('div')),
          C && C.c(),
          zo(n, 'class', 'hide@md no-js:is-hidden'),
          zo(s, 'class', 'text-md text-truncate'),
          zo(s, 'id', 'sidebar-title'),
          zo(f, 'class', 'color-contrast-medium'),
          zo(m, 'class', 'icon icon--sm'),
          m.src !== sl &&
            zo(
              m,
              'src',
              "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48' height='48' viewBox='0 0 48 48'%3e %3cg transform='translate(0%2c 0)'%3e %3cpolygon points='37.435 7.736 24 21.172 10.565 7.736 7.737 10.564 21.172 24 7.737 37.436 10.565 40.264 24 26.828 37.435 40.264 40.263 37.436 26.828 24 40.263 10.564 37.435 7.736' fill='currentColor' %3e%3c/polygon%3e %3c/g%3e%3c/svg%3e"
            ),
          zo(m, 'alt', 'Close panel'),
          zo(p, 'class', 'btn btn--subtle padding-sm js-sidebar__close-btn js-tab-focus'),
          zo(p, 'type', 'button'),
          zo(a, 'class', 'sidebar__header z-index-2 svelte-b07n84'),
          zo(g, 'class', 'padding-md'),
          zo(v, 'class', 'position-relative z-index-1'),
          zo(c, 'class', 'sidebar__panel'),
          zo(
            i,
            'class',
            'sidebar sidebar--static@md sidebar--right-on-mobile js-sidebar svelte-b07n84'
          ),
          zo(
            i,
            'data-static-class',
            'position-relative z-index-1 flex-grow max-width-xxxxs border-right sidebar--sticky-on-desktop'
          ),
          zo(i, 'id', 'sidebar'),
          zo(i, 'aria-labelledby', 'sidebar-title'),
          zo($, 'class', 'padding-md'),
          zo(b, 'class', 'position-relative flex-grow height-100%'),
          zo(o, 'class', 'flex@md');
      },
      m: function (S, R) {
        Mo(S, n, R),
          Fi(e, n, null),
          Mo(S, r, R),
          Mo(S, o, R),
          Lo(o, i),
          Lo(i, c),
          Lo(c, a),
          Lo(a, u),
          Lo(u, s),
          Lo(u, l),
          Lo(u, f),
          Lo(a, d),
          Lo(a, p),
          Lo(p, m),
          Lo(c, h),
          Lo(c, v),
          Lo(v, g),
          k && k.m(g, null),
          Lo(o, y),
          Lo(o, b),
          Lo(b, $),
          C && C.m($, null),
          (x = !0),
          w || ((O = Ro(t[1].call(null, i))), (w = !0));
      },
      p: function (t, n) {
        var e = qr(n, 1)[0];
        k && k.p && 5 & e && xo(k, S, t, t[2], e, tf, nf),
          C && C.p && 5 & e && xo(C, R, t, t[2], e, Jl, Ql);
      },
      i: function (t) {
        x || (Si(e.$$.fragment, t), Si(k, t), Si(C, t), (x = !0));
      },
      o: function (t) {
        ki(e.$$.fragment, t), ki(k, t), ki(C, t), (x = !1);
      },
      d: function (t) {
        t && _o(n), Bi(e), t && _o(r), t && _o(o), k && k.d(t), C && C.d(t), (w = !1), O();
      },
    };
  }
  function rf(t, n, e) {
    var r = n.$$slots,
      o = void 0 === r ? {} : r,
      i = n.$$scope,
      c = null;
    return (
      (t.$$set = function (t) {
        '$$scope' in t && e(2, (i = t.$$scope));
      }),
      [
        c,
        function (t) {
          e(0, (c = new Gl(t))),
            window.requestAnimationFrame
              ? window.requestAnimationFrame(c.resetLayout.bind(c))
              : c.resetLayout(),
            window.addEventListener('resize', function () {
              window.requestAnimationFrame
                ? window.requestAnimationFrame(c.resetLayout.bind(c))
                : setTimeout(c.resetLayout.bind(c), 250);
            });
        },
        i,
        o,
      ]
    );
  }
  var of = (function (t) {
    Zt(e, t);
    var n = Zl(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, rf, ef, vo, {}), r;
    }
    return e;
  })(Ni);
  function cf(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function af(t) {
    var n,
      e,
      r = t[1].default,
      o = bo(r, t, t[0], null);
    return {
      c: function () {
        (n = Bo('nav')), o && o.c();
      },
      m: function (t, r) {
        Mo(t, n, r), o && o.m(n, null), (e = !0);
      },
      p: function (t, n) {
        var e = qr(n, 1)[0];
        o && o.p && 1 & e && xo(o, r, t, t[0], e, null, null);
      },
      i: function (t) {
        e || (Si(o, t), (e = !0));
      },
      o: function (t) {
        ki(o, t), (e = !1);
      },
      d: function (t) {
        t && _o(n), o && o.d(t);
      },
    };
  }
  function uf(t, n, e) {
    var r = n.$$slots,
      o = void 0 === r ? {} : r,
      i = n.$$scope;
    return (
      (t.$$set = function (t) {
        '$$scope' in t && e(0, (i = t.$$scope));
      }),
      [i, o]
    );
  }
  var sf = (function (t) {
    Zt(e, t);
    var n = cf(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, uf, af, vo, {}), r;
    }
    return e;
  })(Ni);
  function lf(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function ff(t, n) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      n &&
        (r = r.filter(function (n) {
          return Object.getOwnPropertyDescriptor(t, n).enumerable;
        })),
        e.push.apply(e, r);
    }
    return e;
  }
  function df(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = null != arguments[n] ? arguments[n] : {};
      n % 2
        ? ff(Object(e), !0).forEach(function (n) {
            xa(t, n, e[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
        : ff(Object(e)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
          });
    }
    return t;
  }
  var pf = Pi.window;
  function mf(t) {
    var n,
      e,
      r,
      o,
      i = t[3].default,
      c = bo(i, t, t[2], null);
    return {
      c: function () {
        (n = Bo('div')), c && c.c();
      },
      m: function (i, a) {
        Mo(i, n, a),
          c && c.m(n, null),
          (e = !0),
          r || ((o = [Ho(pf, 'scroll', t[1]), Ro(t[0].call(null, n))]), (r = !0));
      },
      p: function (t, n) {
        var e = qr(n, 1)[0];
        c && c.p && 4 & e && xo(c, i, t, t[2], e, null, null);
      },
      i: function (t) {
        e || (Si(c, t), (e = !0));
      },
      o: function (t) {
        ki(c, t), (e = !1);
      },
      d: function (t) {
        t && _o(n), c && c.d(t), (r = !1), mo(o);
      },
    };
  }
  var hf = Ku({ currentSectionId: '', clickScrolling: !1 });
  function vf(t, n, e) {
    var r,
      o = uo;
    yo(t, hf, function (t) {
      return e(5, (r = t));
    }),
      t.$$.on_destroy.push(function () {
        return o();
      });
    var i = n.$$slots,
      c = void 0 === i ? {} : i,
      a = n.$$scope,
      u = 0;
    return (
      (t.$$set = function (t) {
        '$$scope' in t && e(2, (a = t.$$scope));
      }),
      [
        function (t) {
          var n = Dr(t.getElementsByClassName('js-scroll-spy-section')),
            e = null;
          if (n.length) {
            var o = 0;
            (e = new IntersectionObserver(
              function () {
                r.clickScrolling ||
                  (clearTimeout(o),
                  (o = setTimeout(function () {
                    var t = window.innerHeight / 2,
                      e = n.reduce(function (n, e) {
                        return e.getBoundingClientRect().top < t ? e.id : n;
                      }, '');
                    hf.update(function (t) {
                      return df(df({}, t), {}, { currentSectionId: e });
                    });
                  }, 240)));
              },
              { threshold: [0, 0.1], rootMargin: '0px 0px -70% 0px' }
            )),
              n.forEach(function (t) {
                return e.observe(t);
              });
          }
          return {
            destroy: function () {
              e && e.disconnect();
            },
          };
        },
        function () {
          clearTimeout(u),
            (u = setTimeout(function () {
              return hf.update(function (t) {
                return df(df({}, t), {}, { clickScrolling: !1 });
              });
            }, 240));
        },
        a,
        c,
      ]
    );
  }
  var gf = (function (t) {
    Zt(e, t);
    var n = lf(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, vf, mf, vo, {}), r;
    }
    return e;
  })(Ni);
  function yf(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function bf(t) {
    var n,
      e,
      r = t[2].default,
      o = bo(r, t, t[1], null);
    return {
      c: function () {
        (n = Bo('section')), o && o.c(), zo(n, 'class', 'js-scroll-spy-section'), zo(n, 'id', t[0]);
      },
      m: function (t, r) {
        Mo(t, n, r), o && o.m(n, null), (e = !0);
      },
      p: function (t, i) {
        var c = qr(i, 1)[0];
        o && o.p && 2 & c && xo(o, r, t, t[1], c, null, null), (!e || 1 & c) && zo(n, 'id', t[0]);
      },
      i: function (t) {
        e || (Si(o, t), (e = !0));
      },
      o: function (t) {
        ki(o, t), (e = !1);
      },
      d: function (t) {
        t && _o(n), o && o.d(t);
      },
    };
  }
  function $f(t, n, e) {
    var r = n.$$slots,
      o = void 0 === r ? {} : r,
      i = n.$$scope,
      c = n.id,
      a = void 0 === c ? '' : c;
    return (
      (t.$$set = function (t) {
        'id' in t && e(0, (a = t.id)), '$$scope' in t && e(1, (i = t.$$scope));
      }),
      [a, i, o]
    );
  }
  var xf = (function (t) {
    Zt(e, t);
    var n = yf(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, $f, bf, vo, { id: 0 }), r;
    }
    return e;
  })(Ni);
  function wf(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function Of(t) {
    var n,
      e,
      r = t[1].default,
      o = bo(r, t, t[0], null);
    return {
      c: function () {
        (n = Bo('div')),
          o && o.c(),
          zo(
            n,
            'class',
            'text-uppercase color-contrast-medium margin-bottom-xxs text-xs font-semibold'
          );
      },
      m: function (t, r) {
        Mo(t, n, r), o && o.m(n, null), (e = !0);
      },
      p: function (t, n) {
        var e = qr(n, 1)[0];
        o && o.p && 1 & e && xo(o, r, t, t[0], e, null, null);
      },
      i: function (t) {
        e || (Si(o, t), (e = !0));
      },
      o: function (t) {
        ki(o, t), (e = !1);
      },
      d: function (t) {
        t && _o(n), o && o.d(t);
      },
    };
  }
  function Sf(t, n, e) {
    var r = n.$$slots,
      o = void 0 === r ? {} : r,
      i = n.$$scope;
    return (
      (t.$$set = function (t) {
        '$$scope' in t && e(0, (i = t.$$scope));
      }),
      [i, o]
    );
  }
  var kf = (function (t) {
    Zt(e, t);
    var n = wf(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, Sf, Of, vo, {}), r;
    }
    return e;
  })(Ni);
  function Rf(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function Cf(t) {
    var n,
      e,
      r = t[1].default,
      o = bo(r, t, t[0], null);
    return {
      c: function () {
        (n = Bo('nav')), o && o.c(), zo(n, 'class', 'margin-bottom-xxs');
      },
      m: function (t, r) {
        Mo(t, n, r), o && o.m(n, null), (e = !0);
      },
      p: function (t, n) {
        var e = qr(n, 1)[0];
        o && o.p && 1 & e && xo(o, r, t, t[0], e, null, null);
      },
      i: function (t) {
        e || (Si(o, t), (e = !0));
      },
      o: function (t) {
        ki(o, t), (e = !1);
      },
      d: function (t) {
        t && _o(n), o && o.d(t);
      },
    };
  }
  function Ef(t, n, e) {
    var r = n.$$slots,
      o = void 0 === r ? {} : r,
      i = n.$$scope;
    return (
      (t.$$set = function (t) {
        '$$scope' in t && e(0, (i = t.$$scope));
      }),
      [i, o]
    );
  }
  var jf = (function (t) {
    Zt(e, t);
    var n = Rf(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, Ef, Cf, vo, {}), r;
    }
    return e;
  })(Ni);
  Dt(
    { target: 'Number', stat: !0 },
    {
      isNaN: function (t) {
        return t != t;
      },
    }
  );
  var Pf = Et.f,
    Af = lt.f,
    Tf = m.f,
    Lf = _u.trim,
    Mf = 'Number',
    _f = r.Number,
    Ff = _f.prototype,
    Bf = it(Yt(Ff)) == Mf,
    If = function (t) {
      var n,
        e,
        r,
        o,
        i,
        c,
        a,
        u,
        s = d(t, !1);
      if ('string' == typeof s && s.length > 2)
        if (43 === (n = (s = Lf(s)).charCodeAt(0)) || 45 === n) {
          if (88 === (e = s.charCodeAt(2)) || 120 === e) return NaN;
        } else if (48 === n) {
          switch (s.charCodeAt(1)) {
            case 66:
            case 98:
              (r = 2), (o = 49);
              break;
            case 79:
            case 111:
              (r = 8), (o = 55);
              break;
            default:
              return +s;
          }
          for (c = (i = s.slice(2)).length, a = 0; a < c; a++)
            if ((u = i.charCodeAt(a)) < 48 || u > o) return NaN;
          return parseInt(i, r);
        }
      return +s;
    };
  if (It(Mf, !_f(' 0o1') || !_f('0b1') || _f('+0x1'))) {
    for (
      var Nf,
        Df = function (t) {
          var n = arguments.length < 1 ? 0 : t,
            e = this;
          return e instanceof Df &&
            (Bf
              ? o(function () {
                  Ff.valueOf.call(e);
                })
              : it(e) != Mf)
            ? ds(new _f(If(n)), e, Df)
            : If(n);
        },
        qf = i
          ? Pf(_f)
          : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range'.split(
              ','
            ),
        Hf = 0;
      qf.length > Hf;
      Hf++
    )
      $(_f, (Nf = qf[Hf])) && !$(Df, Nf) && Tf(Df, Nf, Af(_f, Nf));
    (Df.prototype = Ff), (Ff.constructor = Df), G(r, Mf, Df);
  }
  var zf = function (t) {
    Util.cssSupports('color', 'var(--color-var)') &&
      ((this.element = t),
      (this.scrollDuration = parseInt(this.element.getAttribute('data-duration'), 10) || 300),
      (this.dataElementY =
        this.element.getAttribute('data-scrollable-element-y') ||
        this.element.getAttribute('data-scrollable-element') ||
        this.element.getAttribute('data-element')),
      (this.scrollElementY = this.dataElementY
        ? document.querySelector(this.dataElementY)
        : window),
      (this.dataElementX = this.element.getAttribute('data-scrollable-element-x')),
      (this.scrollElementX = this.dataElementY
        ? document.querySelector(this.dataElementX)
        : window),
      this.initScroll());
  };
  function Wf(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function Uf(t) {
    var n,
      e,
      r,
      o,
      i,
      c = t[7].default,
      a = bo(c, t, t[6], null);
    return {
      c: function () {
        (n = Bo('a')),
          a && a.c(),
          zo(n, 'href', t[1]),
          zo(n, 'class', (e = 'js-smooth-scroll ' + t[0])),
          zo(n, 'data-duration', t[2]),
          zo(n, 'aria-current', t[3]);
      },
      m: function (e, c) {
        Mo(e, n, c),
          a && a.m(n, null),
          (r = !0),
          o || ((i = [Ro(t[4].call(null, n)), Ho(n, 'click', t[8])]), (o = !0));
      },
      p: function (t, o) {
        a && a.p && 64 & o && xo(a, c, t, t[6], o, null, null),
          (!r || 2 & o) && zo(n, 'href', t[1]),
          (!r || (1 & o && e !== (e = 'js-smooth-scroll ' + t[0]))) && zo(n, 'class', e),
          (!r || 4 & o) && zo(n, 'data-duration', t[2]),
          (!r || 8 & o) && zo(n, 'aria-current', t[3]);
      },
      i: function (t) {
        r || (Si(a, t), (r = !0));
      },
      o: function (t) {
        ki(a, t), (r = !1);
      },
      d: function (t) {
        t && _o(n), a && a.d(t), (o = !1), mo(i);
      },
    };
  }
  function Gf(t) {
    var n,
      e,
      r = t[5].default && Uf(t);
    return {
      c: function () {
        r && r.c(), (n = qo());
      },
      m: function (t, o) {
        r && r.m(t, o), Mo(t, n, o), (e = !0);
      },
      p: function (t, e) {
        var o = qr(e, 1)[0];
        t[5].default
          ? r
            ? (r.p(t, o), 32 & o && Si(r, 1))
            : ((r = Uf(t)).c(), Si(r, 1), r.m(n.parentNode, n))
          : r &&
            (wi(),
            ki(r, 1, 1, function () {
              r = null;
            }),
            Oi());
      },
      i: function (t) {
        e || (Si(r), (e = !0));
      },
      o: function (t) {
        ki(r), (e = !1);
      },
      d: function (t) {
        r && r.d(t), t && _o(n);
      },
    };
  }
  function Vf(t, n, e) {
    var r = n.$$slots,
      o = void 0 === r ? {} : r,
      i = n.$$scope,
      c = So(o),
      a = n.class,
      u = void 0 === a ? '' : a,
      s = n.href,
      l = void 0 === s ? '' : s,
      f = n.duration,
      d = void 0 === f ? 300 : f,
      p = n.ariaCurrent,
      m = void 0 === p ? '' : p;
    return (
      (t.$$set = function (t) {
        'class' in t && e(0, (u = t.class)),
          'href' in t && e(1, (l = t.href)),
          'duration' in t && e(2, (d = t.duration)),
          'ariaCurrent' in t && e(3, (m = t.ariaCurrent)),
          '$$scope' in t && e(6, (i = t.$$scope));
      }),
      [
        u,
        l,
        d,
        m,
        function (t) {
          return new zf(t);
        },
        c,
        i,
        o,
        function (n) {
          oi(t, n);
        },
      ]
    );
  }
  (zf.prototype.initScroll = function () {
    var t = this;
    this.element.addEventListener('click', function (n) {
      n.preventDefault();
      var e = n.target.closest('.js-smooth-scroll').getAttribute('href').replace('#', ''),
        r = document.getElementById(e);
      if (r) {
        var o = r.getAttribute('tabindex'),
          i = t.scrollElementY.scrollTop || document.documentElement.scrollTop;
        t.dataElementY || (i = window.scrollY || document.documentElement.scrollTop);
        var c = !!t.dataElementY && t.scrollElementY,
          a = t.getFixedElementHeight();
        Util.scrollTo(
          r.getBoundingClientRect().top + i - a,
          t.scrollDuration,
          function () {
            t.scrollHorizontally(r, a),
              Util.moveFocus(r),
              window.history.pushState(!1, !1, '#'.concat(e)),
              t.resetTarget(r, o);
          },
          c
        );
      }
    });
  }),
    (zf.prototype.scrollHorizontally = function (t, n) {
      var e = !!this.dataElementX && this.scrollElementX,
        r = this.scrollElementX
          ? this.scrollElementX.scrollLeft
          : document.documentElement.scrollLeft,
        o = t.getBoundingClientRect().left + r - n,
        i = this.scrollDuration,
        c = e || window,
        a = c.scrollLeft || document.documentElement.scrollLeft,
        u = null;
      if (
        (e || (a = window.scrollX || document.documentElement.scrollLeft), !(Math.abs(a - o) < 5))
      ) {
        window.requestAnimationFrame(function t(n) {
          u || (u = n);
          var e = n - u;
          e > i && (e = i);
          var r = Math.easeInOutQuad(e, a, o - a, i);
          c.scrollTo({ left: r }), e < i && window.requestAnimationFrame(t);
        });
      }
    }),
    (zf.prototype.resetTarget = function (t, n) {
      var e = t;
      parseInt(e.getAttribute('tabindex'), 10) < 0 &&
        ((e.style.outline = 'none'), n || e.removeAttribute('tabindex'));
    }),
    (zf.prototype.getFixedElementHeight = function () {
      var t = this.dataElementY ? this.scrollElementY : document.documentElement,
        n = parseInt(getComputedStyle(t).getPropertyValue('scroll-padding'), 10);
      if (Number.isNaN(n)) {
        n = 0;
        var e = document.querySelector(this.element.getAttribute('data-fixed-element'));
        e && (n = parseInt(e.getBoundingClientRect().height, 10));
      }
      return n;
    });
  var Yf = (function (t) {
    Zt(e, t);
    var n = Wf(e);
    function e(t) {
      var r;
      return (
        J(this, e),
        Ii(Q((r = n.call(this))), t, Vf, Gf, vo, {
          class: 0,
          href: 1,
          duration: 2,
          ariaCurrent: 3,
        }),
        r
      );
    }
    return e;
  })(Ni);
  function Kf(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function Xf(t) {
    var n,
      e = t[3].default,
      r = bo(e, t, t[5], null);
    return {
      c: function () {
        r && r.c();
      },
      m: function (t, e) {
        r && r.m(t, e), (n = !0);
      },
      p: function (t, n) {
        r && r.p && 32 & n && xo(r, e, t, t[5], n, null, null);
      },
      i: function (t) {
        n || (Si(r, t), (n = !0));
      },
      o: function (t) {
        ki(r, t), (n = !1);
      },
      d: function (t) {
        r && r.d(t);
      },
    };
  }
  function Zf(t) {
    var n, e, r;
    return (
      (e = new Yf({
        props: {
          href: t[0],
          ariaCurrent: t[1],
          class:
            'text-decoration-none radius-md padding-y-xxs padding-x-xxs block color-contrast-high',
          $$slots: { default: [Xf] },
          $$scope: { ctx: t },
        },
      })).$on('click', t[4]),
      {
        c: function () {
          (n = Bo('div')),
            _i(e.$$.fragment),
            zo(
              n,
              'class',
              'sidenav-list-item margin-left-xxxxs margin-bottom-xxxxs svelte-11oue6z'
            );
        },
        m: function (t, o) {
          Mo(t, n, o), Fi(e, n, null), (r = !0);
        },
        p: function (t, n) {
          var r = qr(n, 1)[0],
            o = {};
          1 & r && (o.href = t[0]),
            2 & r && (o.ariaCurrent = t[1]),
            32 & r && (o.$$scope = { dirty: r, ctx: t }),
            e.$set(o);
        },
        i: function (t) {
          r || (Si(e.$$.fragment, t), (r = !0));
        },
        o: function (t) {
          ki(e.$$.fragment, t), (r = !1);
        },
        d: function (t) {
          t && _o(n), Bi(e);
        },
      }
    );
  }
  function Jf(t, n, e) {
    var r,
      o = n.$$slots,
      i = void 0 === o ? {} : o,
      c = n.$$scope,
      a = n.href,
      u = void 0 === a ? '' : a,
      s = n.current,
      l = void 0 !== s && s;
    return (
      (t.$$set = function (t) {
        'href' in t && e(0, (u = t.href)),
          'current' in t && e(2, (l = t.current)),
          '$$scope' in t && e(5, (c = t.$$scope));
      }),
      (t.$$.update = function () {
        4 & t.$$.dirty && e(1, (r = l ? 'page' : null));
      }),
      [
        u,
        r,
        l,
        i,
        function (n) {
          oi(t, n);
        },
        c,
      ]
    );
  }
  var Qf = (function (t) {
    Zt(e, t);
    var n = Kf(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, Jf, Zf, vo, { href: 0, current: 2 }), r;
    }
    return e;
  })(Ni);
  function td(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function nd(t, n) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      n &&
        (r = r.filter(function (n) {
          return Object.getOwnPropertyDescriptor(t, n).enumerable;
        })),
        e.push.apply(e, r);
    }
    return e;
  }
  function ed(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = null != arguments[n] ? arguments[n] : {};
      n % 2
        ? nd(Object(e), !0).forEach(function (n) {
            xa(t, n, e[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
        : nd(Object(e)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
          });
    }
    return t;
  }
  var rd = function (t) {
      return { prop: 2 & t };
    },
    od = function (t) {
      return { prop: t[1] };
    };
  function id(t) {
    var n,
      e,
      r,
      o,
      i = t[6].default,
      c = bo(i, t, t[5], od);
    return {
      c: function () {
        (n = Bo('div')),
          c && c.c(),
          zo(n, 'class', 'scroll-spy-link'),
          Go(n, 'scroll-spy-link--current', t[1]);
      },
      m: function (i, a) {
        Mo(i, n, a),
          c && c.m(n, null),
          (e = !0),
          r ||
            ((o = [
              Ho(n, 'click', function () {
                ho(t[2](t[0])) && t[2](t[0]).apply(this, arguments);
              }),
              Ro(t[3].call(null, n)),
            ]),
            (r = !0));
      },
      p: function (e, r) {
        var o = qr(r, 1)[0];
        (t = e),
          c && c.p && 34 & o && xo(c, i, t, t[5], o, rd, od),
          2 & o && Go(n, 'scroll-spy-link--current', t[1]);
      },
      i: function (t) {
        e || (Si(c, t), (e = !0));
      },
      o: function (t) {
        ki(c, t), (e = !1);
      },
      d: function (t) {
        t && _o(n), c && c.d(t), (r = !1), mo(o);
      },
    };
  }
  function cd(t, n, e) {
    var r, o;
    yo(t, hf, function (t) {
      return e(4, (o = t));
    });
    var i = n.$$slots,
      c = void 0 === i ? {} : i,
      a = n.$$scope,
      u = n.id,
      s = void 0 === u ? '' : u,
      l = function (t) {
        return hf.update(function (n) {
          return ed(ed({}, n), {}, { currentSectionId: t, clickScrolling: !0 });
        });
      };
    return (
      (t.$$set = function (t) {
        'id' in t && e(0, (s = t.id)), '$$scope' in t && e(5, (a = t.$$scope));
      }),
      (t.$$.update = function () {
        17 & t.$$.dirty && e(1, (r = o.currentSectionId === s));
      }),
      [
        s,
        r,
        l,
        function () {
          var t = window.location.hash.replace('#', '');
          t === s && l(t);
        },
        o,
        a,
        c,
      ]
    );
  }
  var ad = (function (t) {
    Zt(e, t);
    var n = td(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, cd, id, vo, { id: 0 }), r;
    }
    return e;
  })(Ni);
  function ud(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function sd(t) {
    var n;
    return {
      c: function () {
        (n = Bo('p')).innerHTML =
          'Smodale module targets modern browsers. However if you want to support older browsers make sure to\n  <a target="_blank" ref="noopener noreferrer" href="https://svelte-recipes.netlify.app/build-setup/#transpiling-es6-to-es5-for-legacy-browser-ie11-support-with-babel">transpile</a> \n  <code>ECMAScript 2020</code> and provide\n  <a target="_blank" ref="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#polyfill">closest polyfill\n  </a>to your code.';
      },
      m: function (t, e) {
        Mo(t, n, e);
      },
      p: uo,
      i: uo,
      o: uo,
      d: function (t) {
        t && _o(n);
      },
    };
  }
  var ld = (function (t) {
      Zt(e, t);
      var n = ud(e);
      function e(t) {
        var r;
        return J(this, e), Ii(Q((r = n.call(this))), t, null, sd, vo, {}), r;
      }
      return e;
    })(Ni),
    fd = _u.trim;
  Dt(
    {
      target: 'String',
      proto: !0,
      forced: (function (t) {
        return o(function () {
          return !!Pu[t]() || '​᠎' != '​᠎'[t]() || Pu[t].name !== t;
        });
      })('trim'),
    },
    {
      trim: function () {
        return fd(this);
      },
    }
  );
  var dd = [].join,
    pd = at != Object,
    md = Ur('join', ',');
  Dt(
    { target: 'Array', proto: !0, forced: pd || !md },
    {
      join: function (t) {
        return dd.call(ut(this), void 0 === t ? ',' : t);
      },
    }
  );
  var hd = m.f,
    vd = Et.f,
    gd = U.enforce,
    yd = gn('match'),
    bd = r.RegExp,
    $d = bd.prototype,
    xd = /a/g,
    wd = /a/g,
    Od = new bd(xd) !== xd,
    Sd = du.UNSUPPORTED_Y;
  if (
    i &&
    It(
      'RegExp',
      !Od ||
        Sd ||
        o(function () {
          return (wd[yd] = !1), bd(xd) != xd || bd(wd) == wd || '/a/i' != bd(xd, 'i');
        })
    )
  ) {
    for (
      var kd = function (t, n) {
          var e,
            r = this instanceof kd,
            o = Hs(t),
            i = void 0 === n;
          if (!r && o && t.constructor === kd && i) return t;
          Od
            ? o && !i && (t = t.source)
            : t instanceof kd && (i && (n = ja.call(t)), (t = t.source)),
            Sd && (e = !!n && n.indexOf('y') > -1) && (n = n.replace(/y/g, ''));
          var c = ds(Od ? new bd(t, n) : bd(t, n), r ? this : $d, kd);
          Sd && e && (gd(c).sticky = !0);
          return c;
        },
        Rd = function (t) {
          (t in kd) ||
            hd(kd, t, {
              configurable: !0,
              get: function () {
                return bd[t];
              },
              set: function (n) {
                bd[t] = n;
              },
            });
        },
        Cd = vd(bd),
        Ed = 0;
      Cd.length > Ed;

    )
      Rd(Cd[Ed++]);
    ($d.constructor = kd), (kd.prototype = $d), G(r, 'RegExp', kd);
  }
  tc('RegExp'),
    n(function (n) {
      var e = (function (t) {
        var n = /\blang(?:uage)?-([\w-]+)\b/i,
          e = 0,
          r = {
            manual: t.Prism && t.Prism.manual,
            disableWorkerMessageHandler: t.Prism && t.Prism.disableWorkerMessageHandler,
            util: {
              encode: function t(n) {
                return n instanceof o
                  ? new o(n.type, t(n.content), n.alias)
                  : Array.isArray(n)
                  ? n.map(t)
                  : n
                      .replace(/&/g, '&amp;')
                      .replace(/</g, '&lt;')
                      .replace(/\u00a0/g, ' ');
              },
              type: function (t) {
                return Object.prototype.toString.call(t).slice(8, -1);
              },
              objId: function (t) {
                return t.__id || Object.defineProperty(t, '__id', { value: ++e }), t.__id;
              },
              clone: function t(n, e) {
                var o, i;
                switch (((e = e || {}), r.util.type(n))) {
                  case 'Object':
                    if (((i = r.util.objId(n)), e[i])) return e[i];
                    for (var c in ((o = {}), (e[i] = o), n))
                      n.hasOwnProperty(c) && (o[c] = t(n[c], e));
                    return o;
                  case 'Array':
                    return (
                      (i = r.util.objId(n)),
                      e[i]
                        ? e[i]
                        : ((o = []),
                          (e[i] = o),
                          n.forEach(function (n, r) {
                            o[r] = t(n, e);
                          }),
                          o)
                    );
                  default:
                    return n;
                }
              },
              getLanguage: function (t) {
                for (; t && !n.test(t.className); ) t = t.parentElement;
                return t ? (t.className.match(n) || [, 'none'])[1].toLowerCase() : 'none';
              },
              currentScript: function () {
                if ('undefined' == typeof document) return null;
                if ('currentScript' in document) return document.currentScript;
                try {
                  throw new Error();
                } catch (r) {
                  var t = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(r.stack) || [])[1];
                  if (t) {
                    var n = document.getElementsByTagName('script');
                    for (var e in n) if (n[e].src == t) return n[e];
                  }
                  return null;
                }
              },
              isActive: function (t, n, e) {
                for (var r = 'no-' + n; t; ) {
                  var o = t.classList;
                  if (o.contains(n)) return !0;
                  if (o.contains(r)) return !1;
                  t = t.parentElement;
                }
                return !!e;
              },
            },
            languages: {
              extend: function (t, n) {
                var e = r.util.clone(r.languages[t]);
                for (var o in n) e[o] = n[o];
                return e;
              },
              insertBefore: function (t, n, e, o) {
                var i = (o = o || r.languages)[t],
                  c = {};
                for (var a in i)
                  if (i.hasOwnProperty(a)) {
                    if (a == n) for (var u in e) e.hasOwnProperty(u) && (c[u] = e[u]);
                    e.hasOwnProperty(a) || (c[a] = i[a]);
                  }
                var s = o[t];
                return (
                  (o[t] = c),
                  r.languages.DFS(r.languages, function (n, e) {
                    e === s && n != t && (this[n] = c);
                  }),
                  c
                );
              },
              DFS: function t(n, e, o, i) {
                i = i || {};
                var c = r.util.objId;
                for (var a in n)
                  if (n.hasOwnProperty(a)) {
                    e.call(n, a, n[a], o || a);
                    var u = n[a],
                      s = r.util.type(u);
                    'Object' !== s || i[c(u)]
                      ? 'Array' !== s || i[c(u)] || ((i[c(u)] = !0), t(u, e, a, i))
                      : ((i[c(u)] = !0), t(u, e, null, i));
                  }
              },
            },
            plugins: {},
            highlightAll: function (t, n) {
              r.highlightAllUnder(document, t, n);
            },
            highlightAllUnder: function (t, n, e) {
              var o = {
                callback: e,
                container: t,
                selector:
                  'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
              };
              r.hooks.run('before-highlightall', o),
                (o.elements = Array.prototype.slice.apply(
                  o.container.querySelectorAll(o.selector)
                )),
                r.hooks.run('before-all-elements-highlight', o);
              for (var i, c = 0; (i = o.elements[c++]); )
                r.highlightElement(i, !0 === n, o.callback);
            },
            highlightElement: function (e, o, i) {
              var c = r.util.getLanguage(e),
                a = r.languages[c];
              e.className = e.className.replace(n, '').replace(/\s+/g, ' ') + ' language-' + c;
              var u = e.parentElement;
              u &&
                'pre' === u.nodeName.toLowerCase() &&
                (u.className = u.className.replace(n, '').replace(/\s+/g, ' ') + ' language-' + c);
              var s = { element: e, language: c, grammar: a, code: e.textContent };
              function l(t) {
                (s.highlightedCode = t),
                  r.hooks.run('before-insert', s),
                  (s.element.innerHTML = s.highlightedCode),
                  r.hooks.run('after-highlight', s),
                  r.hooks.run('complete', s),
                  i && i.call(s.element);
              }
              if ((r.hooks.run('before-sanity-check', s), !s.code))
                return r.hooks.run('complete', s), void (i && i.call(s.element));
              if ((r.hooks.run('before-highlight', s), s.grammar))
                if (o && t.Worker) {
                  var f = new Worker(r.filename);
                  (f.onmessage = function (t) {
                    l(t.data);
                  }),
                    f.postMessage(
                      JSON.stringify({ language: s.language, code: s.code, immediateClose: !0 })
                    );
                } else l(r.highlight(s.code, s.grammar, s.language));
              else l(r.util.encode(s.code));
            },
            highlight: function (t, n, e) {
              var i = { code: t, grammar: n, language: e };
              return (
                r.hooks.run('before-tokenize', i),
                (i.tokens = r.tokenize(i.code, i.grammar)),
                r.hooks.run('after-tokenize', i),
                o.stringify(r.util.encode(i.tokens), i.language)
              );
            },
            tokenize: function (t, n) {
              var e = n.rest;
              if (e) {
                for (var r in e) n[r] = e[r];
                delete n.rest;
              }
              var o = new a();
              return (
                u(o, o.head, t),
                c(t, o, n, o.head, 0),
                (function (t) {
                  var n = [],
                    e = t.head.next;
                  for (; e !== t.tail; ) n.push(e.value), (e = e.next);
                  return n;
                })(o)
              );
            },
            hooks: {
              all: {},
              add: function (t, n) {
                var e = r.hooks.all;
                (e[t] = e[t] || []), e[t].push(n);
              },
              run: function (t, n) {
                var e = r.hooks.all[t];
                if (e && e.length) for (var o, i = 0; (o = e[i++]); ) o(n);
              },
            },
            Token: o,
          };
        function o(t, n, e, r) {
          (this.type = t),
            (this.content = n),
            (this.alias = e),
            (this.length = 0 | (r || '').length);
        }
        function i(t, n, e, r) {
          t.lastIndex = n;
          var o = t.exec(e);
          if (o && r && o[1]) {
            var i = o[1].length;
            (o.index += i), (o[0] = o[0].slice(i));
          }
          return o;
        }
        function c(t, n, e, a, l, f) {
          for (var d in e)
            if (e.hasOwnProperty(d) && e[d]) {
              var p = e[d];
              p = Array.isArray(p) ? p : [p];
              for (var m = 0; m < p.length; ++m) {
                if (f && f.cause == d + ',' + m) return;
                var h = p[m],
                  v = h.inside,
                  g = !!h.lookbehind,
                  y = !!h.greedy,
                  b = h.alias;
                if (y && !h.pattern.global) {
                  var $ = h.pattern.toString().match(/[imsuy]*$/)[0];
                  h.pattern = RegExp(h.pattern.source, $ + 'g');
                }
                for (
                  var x = h.pattern || h, w = a.next, O = l;
                  w !== n.tail && !(f && O >= f.reach);
                  O += w.value.length, w = w.next
                ) {
                  var S = w.value;
                  if (n.length > t.length) return;
                  if (!(S instanceof o)) {
                    var k,
                      R = 1;
                    if (y) {
                      if (!(k = i(x, O, t, g))) break;
                      var C = k.index,
                        E = k.index + k[0].length,
                        j = O;
                      for (j += w.value.length; C >= j; ) j += (w = w.next).value.length;
                      if (((O = j -= w.value.length), w.value instanceof o)) continue;
                      for (
                        var P = w;
                        P !== n.tail && (j < E || 'string' == typeof P.value);
                        P = P.next
                      )
                        R++, (j += P.value.length);
                      R--, (S = t.slice(O, j)), (k.index -= O);
                    } else if (!(k = i(x, 0, S, g))) continue;
                    C = k.index;
                    var A = k[0],
                      T = S.slice(0, C),
                      L = S.slice(C + A.length),
                      M = O + S.length;
                    f && M > f.reach && (f.reach = M);
                    var _ = w.prev;
                    T && ((_ = u(n, _, T)), (O += T.length)),
                      s(n, _, R),
                      (w = u(n, _, new o(d, v ? r.tokenize(A, v) : A, b, A))),
                      L && u(n, w, L),
                      R > 1 && c(t, n, e, w.prev, O, { cause: d + ',' + m, reach: M });
                  }
                }
              }
            }
        }
        function a() {
          var t = { value: null, prev: null, next: null },
            n = { value: null, prev: t, next: null };
          (t.next = n), (this.head = t), (this.tail = n), (this.length = 0);
        }
        function u(t, n, e) {
          var r = n.next,
            o = { value: e, prev: n, next: r };
          return (n.next = o), (r.prev = o), t.length++, o;
        }
        function s(t, n, e) {
          for (var r = n.next, o = 0; o < e && r !== t.tail; o++) r = r.next;
          (n.next = r), (r.prev = n), (t.length -= o);
        }
        if (
          ((t.Prism = r),
          (o.stringify = function t(n, e) {
            if ('string' == typeof n) return n;
            if (Array.isArray(n)) {
              var o = '';
              return (
                n.forEach(function (n) {
                  o += t(n, e);
                }),
                o
              );
            }
            var i = {
                type: n.type,
                content: t(n.content, e),
                tag: 'span',
                classes: ['token', n.type],
                attributes: {},
                language: e,
              },
              c = n.alias;
            c && (Array.isArray(c) ? Array.prototype.push.apply(i.classes, c) : i.classes.push(c)),
              r.hooks.run('wrap', i);
            var a = '';
            for (var u in i.attributes)
              a += ' ' + u + '="' + (i.attributes[u] || '').replace(/"/g, '&quot;') + '"';
            return (
              '<' +
              i.tag +
              ' class="' +
              i.classes.join(' ') +
              '"' +
              a +
              '>' +
              i.content +
              '</' +
              i.tag +
              '>'
            );
          }),
          !t.document)
        )
          return t.addEventListener
            ? (r.disableWorkerMessageHandler ||
                t.addEventListener(
                  'message',
                  function (n) {
                    var e = JSON.parse(n.data),
                      o = e.language,
                      i = e.code,
                      c = e.immediateClose;
                    t.postMessage(r.highlight(i, r.languages[o], o)), c && t.close();
                  },
                  !1
                ),
              r)
            : r;
        var l = r.util.currentScript();
        function f() {
          r.manual || r.highlightAll();
        }
        if (
          (l && ((r.filename = l.src), l.hasAttribute('data-manual') && (r.manual = !0)), !r.manual)
        ) {
          var d = document.readyState;
          'loading' === d || ('interactive' === d && l && l.defer)
            ? document.addEventListener('DOMContentLoaded', f)
            : window.requestAnimationFrame
            ? window.requestAnimationFrame(f)
            : window.setTimeout(f, 16);
        }
        return r;
      })(
        'undefined' != typeof window
          ? window
          : 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope
          ? self
          : {}
      );
      /**
       * Prism: Lightweight, robust, elegant syntax highlighting
       *
       * @license MIT <https://opensource.org/licenses/MIT>
       * @author Lea Verou <https://lea.verou.me>
       * @namespace
       * @public
       */ n.exports && (n.exports = e),
        void 0 !== t && (t.Prism = e),
        (e.languages.markup = {
          comment: /<!--[\s\S]*?-->/,
          prolog: /<\?[\s\S]+?\?>/,
          doctype: {
            pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
              'internal-subset': {
                pattern: /(\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null,
              },
              string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
              punctuation: /^<!|>$|[[\]]/,
              'doctype-tag': /^DOCTYPE/,
              name: /[^\s<>'"]+/,
            },
          },
          cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
          tag: {
            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
              tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
              },
              'attr-value': {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: { punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/] },
              },
              punctuation: /\/?>/,
              'attr-name': { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } },
            },
          },
          entity: [{ pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' }, /&#x?[\da-f]{1,8};/i],
        }),
        (e.languages.markup.tag.inside['attr-value'].inside.entity = e.languages.markup.entity),
        (e.languages.markup.doctype.inside['internal-subset'].inside = e.languages.markup),
        e.hooks.add('wrap', function (t) {
          'entity' === t.type && (t.attributes.title = t.content.replace(/&amp;/, '&'));
        }),
        Object.defineProperty(e.languages.markup.tag, 'addInlined', {
          value: function (t, n) {
            var r = {};
            (r['language-' + n] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: !0,
              inside: e.languages[n],
            }),
              (r.cdata = /^<!\[CDATA\[|\]\]>$/i);
            var o = { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: r } };
            o['language-' + n] = { pattern: /[\s\S]+/, inside: e.languages[n] };
            var i = {};
            (i[t] = {
              pattern: RegExp(
                /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                  /__/g,
                  function () {
                    return t;
                  }
                ),
                'i'
              ),
              lookbehind: !0,
              greedy: !0,
              inside: o,
            }),
              e.languages.insertBefore('markup', 'cdata', i);
          },
        }),
        (e.languages.html = e.languages.markup),
        (e.languages.mathml = e.languages.markup),
        (e.languages.svg = e.languages.markup),
        (e.languages.xml = e.languages.extend('markup', {})),
        (e.languages.ssml = e.languages.xml),
        (e.languages.atom = e.languages.xml),
        (e.languages.rss = e.languages.xml),
        (function (t) {
          var n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
          (t.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
              inside: {
                rule: /^@[\w-]+/,
                'selector-function-argument': {
                  pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: !0,
                  alias: 'selector',
                },
                keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 },
              },
            },
            url: {
              pattern: RegExp(
                '\\burl\\((?:' + n.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)',
                'i'
              ),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp('^' + n.source + '$'), alias: 'url' },
              },
            },
            selector: RegExp(
              '[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + n.source + ')*(?=\\s*\\{)'
            ),
            string: { pattern: n, greedy: !0 },
            property: /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            important: /!important\b/i,
            function: /[-a-z0-9]+(?=\()/i,
            punctuation: /[(){};:,]/,
          }),
            (t.languages.css.atrule.inside.rest = t.languages.css);
          var e = t.languages.markup;
          e &&
            (e.tag.addInlined('style', 'css'),
            t.languages.insertBefore(
              'inside',
              'attr-value',
              {
                'style-attr': {
                  pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
                  lookbehind: !0,
                  inside: {
                    'attr-value': {
                      pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                      inside: {
                        style: {
                          pattern: /(["'])[\s\S]+(?=["']$)/,
                          lookbehind: !0,
                          alias: 'language-css',
                          inside: t.languages.css,
                        },
                        punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
                      },
                    },
                    'attr-name': /^style/i,
                  },
                },
              },
              e.tag
            ));
        })(e),
        (e.languages.clike = {
          comment: [
            { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          'class-name': {
            pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
          boolean: /\b(?:true|false)\b/,
          function: /\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (e.languages.javascript = e.languages.extend('clike', {
          'class-name': [
            e.languages.clike['class-name'],
            {
              pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
            {
              pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
          operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        })),
        (e.languages.javascript[
          'class-name'
        ][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
        e.languages.insertBefore('javascript', 'keyword', {
          regex: {
            pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
              'regex-source': {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: 'language-regex',
                inside: e.languages.regex,
              },
              'regex-flags': /[a-z]+$/,
              'regex-delimiter': /^\/|\/$/,
            },
          },
          'function-variable': {
            pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: 'function',
          },
          parameter: [
            {
              pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
              lookbehind: !0,
              inside: e.languages.javascript,
            },
            {
              pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
              inside: e.languages.javascript,
            },
            {
              pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: e.languages.javascript,
            },
            {
              pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: e.languages.javascript,
            },
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
        }),
        e.languages.insertBefore('javascript', 'string', {
          'template-string': {
            pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
            greedy: !0,
            inside: {
              'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
              interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                lookbehind: !0,
                inside: {
                  'interpolation-punctuation': { pattern: /^\${|}$/, alias: 'punctuation' },
                  rest: e.languages.javascript,
                },
              },
              string: /[\s\S]+/,
            },
          },
        }),
        e.languages.markup && e.languages.markup.tag.addInlined('script', 'javascript'),
        (e.languages.js = e.languages.javascript),
        (function () {
          if ('undefined' != typeof self && self.Prism && self.document) {
            Element.prototype.matches ||
              (Element.prototype.matches =
                Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
            var t = window.Prism,
              n = {
                js: 'javascript',
                py: 'python',
                rb: 'ruby',
                ps1: 'powershell',
                psm1: 'powershell',
                sh: 'bash',
                bat: 'batch',
                h: 'c',
                tex: 'latex',
              },
              e = 'data-src-status',
              r = 'loading',
              o = 'loaded',
              i = 'pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',
              c = /\blang(?:uage)?-([\w-]+)\b/i;
            t.hooks.add('before-highlightall', function (t) {
              t.selector += ', ' + i;
            }),
              t.hooks.add('before-sanity-check', function (c) {
                var a = c.element;
                if (a.matches(i)) {
                  (c.code = ''), a.setAttribute(e, r);
                  var s = a.appendChild(document.createElement('CODE'));
                  s.textContent = 'Loading…';
                  var l = a.getAttribute('data-src'),
                    f = c.language;
                  if ('none' === f) {
                    var d = (/\.(\w+)$/.exec(l) || [, 'none'])[1];
                    f = n[d] || d;
                  }
                  u(s, f), u(a, f);
                  var p = t.plugins.autoloader;
                  p && p.loadLanguages(f);
                  var m = new XMLHttpRequest();
                  m.open('GET', l, !0),
                    (m.onreadystatechange = function () {
                      var n, r;
                      4 == m.readyState &&
                        (m.status < 400 && m.responseText
                          ? (a.setAttribute(e, o),
                            (s.textContent = m.responseText),
                            t.highlightElement(s))
                          : (a.setAttribute(e, 'failed'),
                            m.status >= 400
                              ? (s.textContent =
                                  ((n = m.status),
                                  (r = m.statusText),
                                  '✖ Error ' + n + ' while fetching file: ' + r))
                              : (s.textContent = '✖ Error: File does not exist or is empty')));
                    }),
                    m.send(null);
                }
              }),
              (t.plugins.fileHighlight = {
                highlight: function (n) {
                  for (var e, r = (n || document).querySelectorAll(i), o = 0; (e = r[o++]); )
                    t.highlightElement(e);
                },
              });
            var a = !1;
            t.fileHighlight = function () {
              a ||
                (console.warn(
                  'Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.'
                ),
                (a = !0)),
                t.plugins.fileHighlight.highlight.apply(this, arguments);
            };
          }
          function u(t, n) {
            var e = t.className;
            (e = e.replace(c, ' ') + ' language-' + n),
              (t.className = e.replace(/\s+/g, ' ').trim());
          }
        })();
    });
  var jd = Object.assign,
    Pd = Object.defineProperty,
    Ad =
      !jd ||
      o(function () {
        if (
          i &&
          1 !==
            jd(
              { b: 1 },
              jd(
                Pd({}, 'a', {
                  enumerable: !0,
                  get: function () {
                    Pd(this, 'b', { value: 3, enumerable: !1 });
                  },
                }),
                { b: 2 }
              )
            ).b
        )
          return !0;
        var t = {},
          n = {},
          e = Symbol(),
          r = 'abcdefghijklmnopqrst';
        return (
          (t[e] = 7),
          r.split('').forEach(function (t) {
            n[t] = t;
          }),
          7 != jd({}, t)[e] || qt(jd({}, n)).join('') != r
        );
      })
        ? function (t, n) {
            for (var e = y(t), r = arguments.length, o = 1, c = jt.f, a = rt.f; r > o; )
              for (
                var u,
                  s = at(arguments[o++]),
                  l = c ? qt(s).concat(c(s)) : qt(s),
                  f = l.length,
                  d = 0;
                f > d;

              )
                (u = l[d++]), (i && !a.call(s, u)) || (e[u] = s[u]);
            return e;
          }
        : jd;
  Dt({ target: 'Object', stat: !0, forced: Object.assign !== Ad }, { assign: Ad });
  var Td = du.UNSUPPORTED_Y,
    Ld = [].push,
    Md = Math.min,
    _d = 4294967295;
  function Fd(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function Bd(t) {
    var n, e;
    return {
      c: function () {
        (n = Bo('div')),
          (e = No(t[1])),
          zo(
            n,
            'class',
            'position-absolute top-0 right-0 text-xs margin-top-sm margin-right-md font-mono color-contrast-low'
          );
      },
      m: function (t, r) {
        Mo(t, n, r), Lo(n, e);
      },
      p: function (t, n) {
        2 & n && Uo(e, t[1]);
      },
      d: function (t) {
        t && _o(n);
      },
    };
  }
  function Id(t) {
    var n, e, r, o;
    return {
      c: function () {
        zo((n = Bo('code')), 'class', (e = 'language-' + t[0] + ' svelte-12j4wht'));
      },
      m: function (e, i) {
        Mo(e, n, i), (n.innerHTML = t[3]), r || ((o = Ro(t[4].call(null, n))), (r = !0));
      },
      p: function (t, r) {
        8 & r && (n.innerHTML = t[3]),
          1 & r && e !== (e = 'language-' + t[0] + ' svelte-12j4wht') && zo(n, 'class', e);
      },
      d: function (t) {
        t && _o(n), (r = !1), o();
      },
    };
  }
  function Nd(t) {
    for (
      var n,
        e,
        r,
        o,
        i,
        c = t[1] && Bd(t),
        a = !('data-src' in t[5]) && t[2] && Id(t),
        u = [{ class: 'radius-lg' }, t[5]],
        s = {},
        l = 0;
      l < u.length;
      l += 1
    )
      s = lo(s, u[l]);
    return {
      c: function () {
        (n = Bo('div')),
          c && c.c(),
          (e = Do()),
          (r = Bo('pre')),
          a && a.c(),
          Wo(r, s),
          Go(r, 'svelte-12j4wht', !0),
          zo(n, 'class', 'code-snippet position-relative svelte-12j4wht');
      },
      m: function (u, s) {
        Mo(u, n, s),
          c && c.m(n, null),
          Lo(n, e),
          Lo(n, r),
          a && a.m(r, null),
          o || ((i = Ro(t[4].call(null, r))), (o = !0));
      },
      p: function (t, o) {
        var i = qr(o, 1)[0];
        t[1] ? (c ? c.p(t, i) : ((c = Bd(t)).c(), c.m(n, e))) : c && (c.d(1), (c = null)),
          !('data-src' in t[5]) && t[2]
            ? a
              ? a.p(t, i)
              : ((a = Id(t)).c(), a.m(r, null))
            : a && (a.d(1), (a = null)),
          Wo(r, (s = Li(u, [{ class: 'radius-lg' }, 32 & i && t[5]]))),
          Go(r, 'svelte-12j4wht', !0);
      },
      i: uo,
      o: uo,
      d: function (t) {
        t && _o(n), c && c.d(), a && a.d(), (o = !1), i();
      },
    };
  }
  function Dd(t, n, e) {
    var r,
      o = ['language', 'unescaped', 'filename', 'code'],
      i = Oo(n, o),
      c = n.language,
      a = void 0 === c ? 'js' : c,
      u = n.unescaped,
      s = void 0 !== u && u,
      l = n.filename,
      f = void 0 === l ? '' : l,
      d = n.code,
      p = void 0 === d ? '' : d;
    window.Prism.languages.svelte = window.Prism.languages.extend('markup');
    return (
      (t.$$set = function (t) {
        (n = lo(lo({}, n), wo(t))),
          e(5, (i = Oo(n, o))),
          'language' in t && e(0, (a = t.language)),
          'unescaped' in t && e(6, (s = t.unescaped)),
          'filename' in t && e(1, (f = t.filename)),
          'code' in t && e(2, (p = t.code));
      }),
      (t.$$.update = function () {
        69 & t.$$.dirty &&
          e(3, (r = s && 'markup' === a ? '\x3c!--'.concat(p.trim(), '--\x3e') : p));
      }),
      [
        a,
        f,
        p,
        r,
        function (t) {
          return window.Prism.highlightElement(t);
        },
        i,
        s,
      ]
    );
  }
  Ru(
    'split',
    2,
    function (t, n, e) {
      var r;
      return (
        (r =
          'c' == 'abbc'.split(/(b)*/)[1] ||
          4 != 'test'.split(/(?:)/, -1).length ||
          2 != 'ab'.split(/(?:ab)*/).length ||
          4 != '.'.split(/(.?)(.?)/).length ||
          '.'.split(/()()/).length > 1 ||
          ''.split(/.?/).length
            ? function (t, e) {
                var r = String(g(this)),
                  o = void 0 === e ? _d : e >>> 0;
                if (0 === o) return [];
                if (void 0 === t) return [r];
                if (!Hs(t)) return n.call(r, t, o);
                for (
                  var i,
                    c,
                    a,
                    u = [],
                    s =
                      (t.ignoreCase ? 'i' : '') +
                      (t.multiline ? 'm' : '') +
                      (t.unicode ? 'u' : '') +
                      (t.sticky ? 'y' : ''),
                    l = 0,
                    f = new RegExp(t.source, s + 'g');
                  (i = bu.call(f, r)) &&
                  !(
                    (c = f.lastIndex) > l &&
                    (u.push(r.slice(l, i.index)),
                    i.length > 1 && i.index < r.length && Ld.apply(u, i.slice(1)),
                    (a = i[0].length),
                    (l = c),
                    u.length >= o)
                  );

                )
                  f.lastIndex === i.index && f.lastIndex++;
                return (
                  l === r.length ? (!a && f.test('')) || u.push('') : u.push(r.slice(l)),
                  u.length > o ? u.slice(0, o) : u
                );
              }
            : '0'.split(void 0, 0).length
            ? function (t, e) {
                return void 0 === t && 0 === e ? [] : n.call(this, t, e);
              }
            : n),
        [
          function (n, e) {
            var o = g(this),
              i = null == n ? void 0 : n[t];
            return void 0 !== i ? i.call(n, o, e) : r.call(String(o), n, e);
          },
          function (t, o) {
            var i = e(r, t, this, o, r !== n);
            if (i.done) return i.value;
            var c = f(t),
              a = String(this),
              u = ic(c, RegExp),
              s = c.unicode,
              l =
                (c.ignoreCase ? 'i' : '') +
                (c.multiline ? 'm' : '') +
                (c.unicode ? 'u' : '') +
                (Td ? 'g' : 'y'),
              d = new u(Td ? '^(?:' + c.source + ')' : c, l),
              p = void 0 === o ? _d : o >>> 0;
            if (0 === p) return [];
            if (0 === a.length) return null === ju(d, a) ? [a] : [];
            for (var m = 0, h = 0, v = []; h < a.length; ) {
              d.lastIndex = Td ? 0 : h;
              var g,
                y = ju(d, Td ? a.slice(h) : a);
              if (null === y || (g = Md(yt(d.lastIndex + (Td ? h : 0)), a.length)) === m)
                h = Eu(a, h, s);
              else {
                if ((v.push(a.slice(m, h)), v.length === p)) return v;
                for (var b = 1; b <= y.length - 1; b++)
                  if ((v.push(y[b]), v.length === p)) return v;
                h = m = g;
              }
            }
            return v.push(a.slice(m)), v;
          },
        ]
      );
    },
    Td
  ),
    n(function (t) {
      !(function () {
        var n =
          Object.assign ||
          function (t, n) {
            for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]);
            return t;
          };
        function e(t) {
          this.defaults = n({}, t);
        }
        function r(t) {
          for (var n = 0, e = 0; e < t.length; ++e)
            t.charCodeAt(e) == '\t'.charCodeAt(0) && (n += 3);
          return t.length + n;
        }
        (e.prototype = {
          setDefaults: function (t) {
            this.defaults = n(this.defaults, t);
          },
          normalize: function (t, e) {
            for (var r in (e = n(this.defaults, e))) {
              var o = r.replace(/-(\w)/g, function (t, n) {
                return n.toUpperCase();
              });
              'normalize' !== r &&
                'setDefaults' !== o &&
                e[r] &&
                this[o] &&
                (t = this[o].call(this, t, e[r]));
            }
            return t;
          },
          leftTrim: function (t) {
            return t.replace(/^\s+/, '');
          },
          rightTrim: function (t) {
            return t.replace(/\s+$/, '');
          },
          tabsToSpaces: function (t, n) {
            return (n = 0 | n || 4), t.replace(/\t/g, new Array(++n).join(' '));
          },
          spacesToTabs: function (t, n) {
            return (n = 0 | n || 4), t.replace(RegExp(' {' + n + '}', 'g'), '\t');
          },
          removeTrailing: function (t) {
            return t.replace(/\s*?$/gm, '');
          },
          removeInitialLineFeed: function (t) {
            return t.replace(/^(?:\r?\n|\r)/, '');
          },
          removeIndent: function (t) {
            var n = t.match(/^[^\S\n\r]*(?=\S)/gm);
            return n && n[0].length
              ? (n.sort(function (t, n) {
                  return t.length - n.length;
                }),
                n[0].length ? t.replace(RegExp('^' + n[0], 'gm'), '') : t)
              : t;
          },
          indent: function (t, n) {
            return t.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++n).join('\t') + '$&');
          },
          breakLines: function (t, n) {
            n = !0 === n ? 80 : 0 | n || 80;
            for (var e = t.split('\n'), o = 0; o < e.length; ++o)
              if (!(r(e[o]) <= n)) {
                for (var i = e[o].split(/(\s+)/g), c = 0, a = 0; a < i.length; ++a) {
                  var u = r(i[a]);
                  (c += u) > n && ((i[a] = '\n' + i[a]), (c = u));
                }
                e[o] = i.join('');
              }
            return e.join('\n');
          },
        }),
          t.exports && (t.exports = e),
          'undefined' != typeof Prism &&
            ((Prism.plugins.NormalizeWhitespace = new e({
              'remove-trailing': !0,
              'remove-indent': !0,
              'left-trim': !0,
              'right-trim': !0,
            })),
            Prism.hooks.add('before-sanity-check', function (t) {
              var n = Prism.plugins.NormalizeWhitespace;
              if (
                (!t.settings || !1 !== t.settings['whitespace-normalization']) &&
                Prism.util.isActive(t.element, 'whitespace-normalization', !0)
              )
                if ((t.element && t.element.parentNode) || !t.code) {
                  var e = t.element.parentNode;
                  if (t.code && e && 'pre' === e.nodeName.toLowerCase()) {
                    for (var r = e.childNodes, o = '', i = '', c = !1, a = 0; a < r.length; ++a) {
                      var u = r[a];
                      u == t.element
                        ? (c = !0)
                        : '#text' === u.nodeName &&
                          (c ? (i += u.nodeValue) : (o += u.nodeValue), e.removeChild(u), --a);
                    }
                    if (t.element.children.length && Prism.plugins.KeepMarkup) {
                      var s = o + t.element.innerHTML + i;
                      (t.element.innerHTML = n.normalize(s, t.settings)),
                        (t.code = t.element.textContent);
                    } else (t.code = o + t.code + i), (t.code = n.normalize(t.code, t.settings));
                  }
                } else t.code = n.normalize(t.code, t.settings);
            }));
      })();
    }),
    'undefined' != typeof self &&
      self.Prism &&
      self.document &&
      (Element.prototype.matches ||
        (Element.prototype.matches =
          Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
      (Prism.plugins.UnescapedMarkup = !0),
      Prism.hooks.add('before-highlightall', function (t) {
        t.selector +=
          ', [class*="lang-"] script[type="text/plain"], [class*="language-"] script[type="text/plain"], script[type="text/plain"][class*="lang-"], script[type="text/plain"][class*="language-"]';
      }),
      Prism.hooks.add('before-sanity-check', function (t) {
        var n = t.element;
        if (n.matches('script[type="text/plain"]')) {
          var e = document.createElement('code'),
            r = document.createElement('pre');
          r.className = e.className = n.className;
          var o = n.dataset;
          return (
            Object.keys(o || {}).forEach(function (t) {
              Object.prototype.hasOwnProperty.call(o, t) && (r.dataset[t] = o[t]);
            }),
            (e.textContent = t.code = t.code.replace(/&lt;\/script(?:>|&gt;)/gi, '</script>')),
            r.appendChild(e),
            n.parentNode.replaceChild(r, n),
            void (t.element = e)
          );
        }
        if (!t.code) {
          var i = n.childNodes;
          1 === i.length &&
            '#comment' == i[0].nodeName &&
            (n.textContent = t.code = i[0].textContent);
        }
      })),
    (window.Prism = window.Prism || {}),
    (window.Prism.manual = !0);
  var qd = (function (t) {
    Zt(e, t);
    var n = Fd(e);
    function e(t) {
      var r;
      return (
        J(this, e),
        Ii(Q((r = n.call(this))), t, Dd, Nd, vo, {
          language: 0,
          unescaped: 6,
          filename: 1,
          code: 2,
        }),
        r
      );
    }
    return e;
  })(Ni);
  function Hd(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function zd(t) {
    var n, e, r, o, i, c, a, u, s, l, f, d, p, m;
    return (
      (s = new qd({
        props: {
          code: "\n  import smodale from 'smodale';\n\n  smodale.show().catch(() => {});\n  ",
        },
      })),
      (p = new qd({
        props: {
          code:
            "\n  window.addEventListener('unhandledrejection', (event) => event.preventDefault());\n  ",
        },
      })),
      {
        c: function () {
          ((n = Bo('h3')).innerHTML = '<code>Uncaught (in promise)</code>'),
            (e = Do()),
            (r = Bo('hr')),
            (o = Do()),
            ((i = Bo('p')).innerHTML =
              'This console error happens when the returned promise from <code>show()</code> method has been\n  rejected through the <code>cancel()</code> method and has no rejection handler.'),
            (c = Do()),
            ((a = Bo('p')).innerHTML =
              'You can prevent that from happening by handling the rejection with the <code>catch</code> block'),
            (u = Do()),
            _i(s.$$.fragment),
            (l = Do()),
            ((f = Bo('p')).innerHTML =
              'Another solution could be preventing the unhandled rejection event from <code>window</code> object'),
            (d = Do()),
            _i(p.$$.fragment);
        },
        m: function (t, h) {
          Mo(t, n, h),
            Mo(t, e, h),
            Mo(t, r, h),
            Mo(t, o, h),
            Mo(t, i, h),
            Mo(t, c, h),
            Mo(t, a, h),
            Mo(t, u, h),
            Fi(s, t, h),
            Mo(t, l, h),
            Mo(t, f, h),
            Mo(t, d, h),
            Fi(p, t, h),
            (m = !0);
        },
        p: uo,
        i: function (t) {
          m || (Si(s.$$.fragment, t), Si(p.$$.fragment, t), (m = !0));
        },
        o: function (t) {
          ki(s.$$.fragment, t), ki(p.$$.fragment, t), (m = !1);
        },
        d: function (t) {
          t && _o(n),
            t && _o(e),
            t && _o(r),
            t && _o(o),
            t && _o(i),
            t && _o(c),
            t && _o(a),
            t && _o(u),
            Bi(s, t),
            t && _o(l),
            t && _o(f),
            t && _o(d),
            Bi(p, t);
        },
      }
    );
  }
  var Wd = (function (t) {
    Zt(e, t);
    var n = Hd(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, null, zd, vo, {}), r;
    }
    return e;
  })(Ni);
  function Ud(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function Gd(t) {
    var n, e, r;
    return {
      c: function () {
        ((n = Bo('button')).textContent = 'Show first modal'),
          zo(n, 'class', 'btn btn--accent'),
          zo(n, 'type', 'button');
      },
      m: function (o, i) {
        Mo(o, n, i), e || ((r = Ho(n, 'click', t[0])), (e = !0));
      },
      p: uo,
      i: uo,
      o: uo,
      d: function (t) {
        t && _o(n), (e = !1), r();
      },
    };
  }
  function Vd(t) {
    return [
      function () {
        return As.show(Nl, null, {
          breakpoints: {
            '32rem': {
              maxWidth: 'var(--max-width-xxs)',
              margin: 'var(--component-padding)',
              borderRadius: 'var(--radius-md)',
              centered: !0,
              scrollable: !0,
            },
          },
        });
      },
    ];
  }
  var Yd = (function (t) {
      Zt(e, t);
      var n = Ud(e);
      function e(t) {
        var r;
        return J(this, e), Ii(Q((r = n.call(this))), t, Vd, Gd, vo, {}), r;
      }
      return e;
    })(Ni),
    Kd = function (t, n) {
      (this.element = t),
        (this.summary = this.element.querySelector('.js-details__summary')),
        (this.details = this.element.querySelector('.js-details__content')),
        (this.htmlElSupported = 'open' in this.element),
        this.initDetails(n),
        this.initDetailsEvents();
    };
  function Xd(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function Zd(t) {
    var n,
      e,
      r,
      o,
      i,
      c,
      a,
      u,
      s,
      l,
      f,
      d,
      p,
      m,
      h = t[4].default,
      v = bo(h, t, t[3], null);
    return {
      c: function () {
        (n = Bo('details')),
          (e = Bo('summary')),
          (r = Bo('span')),
          (o = Io('svg')),
          (i = Io('path')),
          (c = Do()),
          (a = Bo('span')),
          (u = No(t[1])),
          (s = Do()),
          (l = Bo('div')),
          v && v.c(),
          zo(
            i,
            'd',
            'M2.783.088A.5.5,0,0,0,2,.5v11a.5.5,0,0,0,.268.442A.49.49,0,0,0,2.5,12a.5.5,0,0,0,.283-.088l8-5.5a.5.5,0,0,0,0-.824Z'
          ),
          zo(o, 'class', 'icon icon--xxs margin-right-xxxs svelte-oq3v32'),
          zo(o, 'aria-hidden', 'true'),
          zo(o, 'viewBox', '0 0 12 12'),
          zo(r, 'class', 'flex items-center'),
          zo(e, 'class', 'details__summary js-details__summary svelte-oq3v32'),
          zo(e, 'role', 'button'),
          zo(l, 'class', 'details__content margin-top-xs js-details__content'),
          zo(n, 'class', (f = 'details js-details ' + t[0] + ' svelte-oq3v32'));
      },
      m: function (f, h) {
        Mo(f, n, h),
          Lo(n, e),
          Lo(e, r),
          Lo(r, o),
          Lo(o, i),
          Lo(r, c),
          Lo(r, a),
          Lo(a, u),
          Lo(n, s),
          Lo(n, l),
          v && v.m(l, null),
          (d = !0),
          p || ((m = Ro(t[2].call(null, n))), (p = !0));
      },
      p: function (t, e) {
        var r = qr(e, 1)[0];
        (!d || 2 & r) && Uo(u, t[1]),
          v && v.p && 8 & r && xo(v, h, t, t[3], r, null, null),
          (!d || (1 & r && f !== (f = 'details js-details ' + t[0] + ' svelte-oq3v32'))) &&
            zo(n, 'class', f);
      },
      i: function (t) {
        d || (Si(v, t), (d = !0));
      },
      o: function (t) {
        ki(v, t), (d = !1);
      },
      d: function (t) {
        t && _o(n), v && v.d(t), (p = !1), m();
      },
    };
  }
  (Kd.prototype.initDetails = function (t) {
    Util.setAttributes(this.summary, {
      'aria-expanded': 'false',
      'aria-controls': 'details--'.concat(t),
      role: 'button',
    }),
      Util.setAttributes(this.details, { 'aria-hidden': 'true', id: 'details--'.concat(t) });
  }),
    (Kd.prototype.initDetailsEvents = function () {
      var t = this;
      this.htmlElSupported
        ? this.element.addEventListener('toggle', function () {
            var n = t.element.open ? ['true', 'false'] : ['false', 'true'];
            t.updateAriaValues(n);
          })
        : this.summary.addEventListener('click', function (n) {
            n.preventDefault();
            var e,
              r = t.element.getAttribute('open');
            r ? t.element.removeAttribute('open') : t.element.setAttribute('open', 'true'),
              (e = r ? ['false', 'true'] : ['true', 'false']),
              t.updateAriaValues(e);
          });
    }),
    (Kd.prototype.updateAriaValues = function (t) {
      this.summary.setAttribute('aria-expanded', t[0]),
        this.details.setAttribute('aria-hidden', t[1]);
    });
  var Jd = 0;
  function Qd(t, n, e) {
    var r = n.$$slots,
      o = void 0 === r ? {} : r,
      i = n.$$scope,
      c = n.class,
      a = n.title,
      u = void 0 === a ? '' : a;
    Jd += 1;
    return (
      (t.$$set = function (t) {
        'class' in t && e(0, (c = t.class)),
          'title' in t && e(1, (u = t.title)),
          '$$scope' in t && e(3, (i = t.$$scope));
      }),
      [
        c,
        u,
        function (t) {
          return new Kd(t, Jd);
        },
        i,
        o,
      ]
    );
  }
  var tp = (function (t) {
    Zt(e, t);
    var n = Xd(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, Qd, Zd, vo, { class: 0, title: 1 }), r;
    }
    return e;
  })(Ni);
  function np(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function ep(t) {
    var n, e;
    return (
      (n = new qd({
        props: {
          'data-src': 'demo/components/organisms/SectionNestedModals/NestedModalsExample.svelte',
        },
      })),
      {
        c: function () {
          _i(n.$$.fragment);
        },
        m: function (t, r) {
          Fi(n, t, r), (e = !0);
        },
        p: uo,
        i: function (t) {
          e || (Si(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Bi(n, t);
        },
      }
    );
  }
  function rp(t) {
    var n, e, r, o;
    return (
      (n = new Yd({})),
      (r = new tp({
        props: {
          class: 'margin-top-sm',
          title: 'Show code',
          $$slots: { default: [ep] },
          $$scope: { ctx: t },
        },
      })),
      {
        c: function () {
          _i(n.$$.fragment), (e = Do()), _i(r.$$.fragment);
        },
        m: function (t, i) {
          Fi(n, t, i), Mo(t, e, i), Fi(r, t, i), (o = !0);
        },
        p: function (t, n) {
          var e = qr(n, 1)[0],
            o = {};
          1 & e && (o.$$scope = { dirty: e, ctx: t }), r.$set(o);
        },
        i: function (t) {
          o || (Si(n.$$.fragment, t), Si(r.$$.fragment, t), (o = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t), ki(r.$$.fragment, t), (o = !1);
        },
        d: function (t) {
          Bi(n, t), t && _o(e), Bi(r, t);
        },
      }
    );
  }
  var op = (function (t) {
    Zt(e, t);
    var n = np(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, null, rp, vo, {}), r;
    }
    return e;
  })(Ni);
  function ip(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function cp(t) {
    var n, e, r, o, i, c, a, u, s;
    return {
      c: function () {
        (n = Bo('header')),
          ((e = Bo('h2')).textContent = 'Modal title'),
          (r = Do()),
          (o = Bo('button')),
          (i = Bo('img')),
          (c = Do()),
          ((a = Bo('div')).innerHTML =
            '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!</p> \n  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!</p> \n  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!</p>'),
          zo(i, 'class', 'icon icon--sm'),
          i.src !== sl &&
            zo(
              i,
              'src',
              "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48' height='48' viewBox='0 0 48 48'%3e %3cg transform='translate(0%2c 0)'%3e %3cpolygon points='37.435 7.736 24 21.172 10.565 7.736 7.737 10.564 21.172 24 7.737 37.436 10.565 40.264 24 26.828 37.435 40.264 40.263 37.436 26.828 24 40.263 10.564 37.435 7.736' fill='currentColor' %3e%3c/polygon%3e %3c/g%3e%3c/svg%3e"
            ),
          zo(i, 'alt', 'Close'),
          zo(o, 'class', 'btn btn--subtle padding-xs js-tab-focus'),
          zo(o, 'type', 'button'),
          zo(n, 'class', 'flex items-center justify-between margin-bottom-sm'),
          zo(a, 'class', 'text-component');
      },
      m: function (l, f) {
        Mo(l, n, f),
          Lo(n, e),
          Lo(n, r),
          Lo(n, o),
          Lo(o, i),
          Mo(l, c, f),
          Mo(l, a, f),
          u || ((s = Ho(o, 'click', t[0])), (u = !0));
      },
      p: uo,
      i: uo,
      o: uo,
      d: function (t) {
        t && _o(n), t && _o(c), t && _o(a), (u = !1), s();
      },
    };
  }
  function ap(t) {
    return [ts().cancel];
  }
  var up = (function (t) {
    Zt(e, t);
    var n = ip(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, ap, cp, vo, {}), r;
    }
    return e;
  })(Ni);
  function sp(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function lp(t) {
    var n, e, r;
    return {
      c: function () {
        ((n = Bo('button')).textContent = 'Show vertically and horizontally centered modal'),
          zo(n, 'class', 'btn btn--accent'),
          zo(n, 'type', 'button');
      },
      m: function (o, i) {
        Mo(o, n, i), e || ((r = Ho(n, 'click', t[0])), (e = !0));
      },
      p: uo,
      i: uo,
      o: uo,
      d: function (t) {
        t && _o(n), (e = !1), r();
      },
    };
  }
  function fp(t) {
    return [
      function () {
        return As.show(up, null, {
          breakpoints: {
            '32rem': {
              maxWidth: 'var(--max-width-xxs)',
              margin: 'var(--component-padding)',
              borderRadius: 'var(--radius-md)',
              centered: !0,
            },
          },
        });
      },
    ];
  }
  var dp = (function (t) {
    Zt(e, t);
    var n = sp(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, fp, lp, vo, {}), r;
    }
    return e;
  })(Ni);
  function pp(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function mp(t) {
    var n, e, r;
    return {
      c: function () {
        ((n = Bo('button')).textContent = 'Show vertically centered modal'),
          zo(n, 'class', 'btn btn--accent'),
          zo(n, 'type', 'button');
      },
      m: function (o, i) {
        Mo(o, n, i), e || ((r = Ho(n, 'click', t[0])), (e = !0));
      },
      p: uo,
      i: uo,
      o: uo,
      d: function (t) {
        t && _o(n), (e = !1), r();
      },
    };
  }
  function hp(t) {
    return [
      function () {
        return As.show(up, null, {
          breakpoints: {
            '32rem': {
              maxWidth: 'var(--max-width-xxs)',
              margin: 'var(--component-padding) auto',
              borderRadius: 'var(--radius-md)',
            },
          },
        });
      },
    ];
  }
  var vp = (function (t) {
    Zt(e, t);
    var n = pp(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, hp, mp, vo, {}), r;
    }
    return e;
  })(Ni);
  function gp(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function yp(t) {
    var n, e;
    return (
      (n = new qd({
        props: {
          'data-src':
            'demo/components/organisms/SectionCentered/VerticallyAndHorizontallyCenteredExample.svelte',
        },
      })),
      {
        c: function () {
          _i(n.$$.fragment);
        },
        m: function (t, r) {
          Fi(n, t, r), (e = !0);
        },
        p: uo,
        i: function (t) {
          e || (Si(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Bi(n, t);
        },
      }
    );
  }
  function bp(t) {
    var n, e;
    return (
      (n = new qd({
        props: {
          'data-src': 'demo/components/organisms/SectionCentered/VerticallyCenteredExample.svelte',
        },
      })),
      {
        c: function () {
          _i(n.$$.fragment);
        },
        m: function (t, r) {
          Fi(n, t, r), (e = !0);
        },
        p: uo,
        i: function (t) {
          e || (Si(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Bi(n, t);
        },
      }
    );
  }
  function $p(t) {
    var n, e, r, o, i, c, a, u, s, l;
    return (
      (n = new dp({})),
      (r = new tp({
        props: {
          class: 'margin-top-sm',
          title: 'Show code',
          $$slots: { default: [yp] },
          $$scope: { ctx: t },
        },
      })),
      (a = new vp({})),
      (s = new tp({
        props: {
          class: 'margin-top-sm',
          title: 'Show code',
          $$slots: { default: [bp] },
          $$scope: { ctx: t },
        },
      })),
      {
        c: function () {
          _i(n.$$.fragment),
            (e = Do()),
            _i(r.$$.fragment),
            (o = Do()),
            (i = Bo('div')),
            (c = Do()),
            _i(a.$$.fragment),
            (u = Do()),
            _i(s.$$.fragment),
            zo(i, 'class', 'margin-top-sm');
        },
        m: function (t, f) {
          Fi(n, t, f),
            Mo(t, e, f),
            Fi(r, t, f),
            Mo(t, o, f),
            Mo(t, i, f),
            Mo(t, c, f),
            Fi(a, t, f),
            Mo(t, u, f),
            Fi(s, t, f),
            (l = !0);
        },
        p: function (t, n) {
          var e = qr(n, 1)[0],
            o = {};
          1 & e && (o.$$scope = { dirty: e, ctx: t }), r.$set(o);
          var i = {};
          1 & e && (i.$$scope = { dirty: e, ctx: t }), s.$set(i);
        },
        i: function (t) {
          l ||
            (Si(n.$$.fragment, t),
            Si(r.$$.fragment, t),
            Si(a.$$.fragment, t),
            Si(s.$$.fragment, t),
            (l = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t),
            ki(r.$$.fragment, t),
            ki(a.$$.fragment, t),
            ki(s.$$.fragment, t),
            (l = !1);
        },
        d: function (t) {
          Bi(n, t),
            t && _o(e),
            Bi(r, t),
            t && _o(o),
            t && _o(i),
            t && _o(c),
            Bi(a, t),
            t && _o(u),
            Bi(s, t);
        },
      }
    );
  }
  var xp = (function (t) {
    Zt(e, t);
    var n = gp(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, null, $p, vo, {}), r;
    }
    return e;
  })(Ni);
  function wp(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function Op(t, n, e) {
    var r = t.slice();
    return (r[2] = n[e]), (r[4] = e), r;
  }
  function Sp(t) {
    var n,
      e,
      r,
      o = t[4] + 1 + '';
    return {
      c: function () {
        (n = Bo('p')),
          (e = No(o)),
          (r = No(
            '. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur\n      doloremque vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui\n      officiis reprehenderit reiciendis excepturi culpa!\n    '
          ));
      },
      m: function (t, o) {
        Mo(t, n, o), Lo(n, e), Lo(n, r);
      },
      p: uo,
      d: function (t) {
        t && _o(n);
      },
    };
  }
  function kp(t) {
    for (var n, e, r, o, i, c, a, u, s, l, f = Array(16), d = [], p = 0; p < f.length; p += 1)
      d[p] = Sp(Op(t, f, p));
    return {
      c: function () {
        (n = Bo('div')), ((e = Bo('h2')).textContent = 'Modal title'), (r = Do());
        for (var t = 0; t < d.length; t += 1) d[t].c();
        (o = Do()),
          (i = Bo('footer')),
          ((c = Bo('button')).textContent = 'Cancel'),
          (a = Do()),
          ((u = Bo('button')).textContent = 'Confirm'),
          zo(n, 'class', 'text-component'),
          zo(c, 'type', 'button'),
          zo(c, 'class', 'btn btn--subtle'),
          zo(u, 'type', 'button'),
          zo(u, 'class', 'btn btn--primary'),
          zo(i, 'class', 'flex justify-end gap-xs margin-top-md');
      },
      m: function (f, p) {
        Mo(f, n, p), Lo(n, e), Lo(n, r);
        for (var m = 0; m < d.length; m += 1) d[m].m(n, null);
        Mo(f, o, p),
          Mo(f, i, p),
          Lo(i, c),
          Lo(i, a),
          Lo(i, u),
          s || ((l = [Ho(c, 'click', t[1]), Ho(u, 'click', t[0])]), (s = !0));
      },
      p: uo,
      i: uo,
      o: uo,
      d: function (t) {
        t && _o(n), Fo(d, t), t && _o(o), t && _o(i), (s = !1), mo(l);
      },
    };
  }
  function Rp(t) {
    var n = ts();
    return [n.hide, n.cancel];
  }
  var Cp = (function (t) {
    Zt(e, t);
    var n = wp(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, Rp, kp, vo, {}), r;
    }
    return e;
  })(Ni);
  function Ep(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function jp(t) {
    var n, e, r;
    return {
      c: function () {
        ((n = Bo('button')).textContent = 'Show long content modal'),
          zo(n, 'class', 'btn btn--accent'),
          zo(n, 'type', 'button');
      },
      m: function (o, i) {
        Mo(o, n, i), e || ((r = Ho(n, 'click', t[0])), (e = !0));
      },
      p: uo,
      i: uo,
      o: uo,
      d: function (t) {
        t && _o(n), (e = !1), r();
      },
    };
  }
  function Pp(t) {
    return [
      function () {
        As.show(Cp, null, {
          breakpoints: {
            '32rem': {
              maxWidth: 'var(--max-width-xxs)',
              margin: 'var(--component-padding)',
              borderRadius: 'var(--radius-md)',
              centered: !0,
              scrollable: !0,
            },
          },
        });
      },
    ];
  }
  var Ap = (function (t) {
    Zt(e, t);
    var n = Ep(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, Pp, jp, vo, {}), r;
    }
    return e;
  })(Ni);
  function Tp(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function Lp(t, n, e) {
    var r = t.slice();
    return (r[3] = n[e]), (r[5] = e), r;
  }
  function Mp(t) {
    var n,
      e,
      r,
      o = t[5] + 1 + '';
    return {
      c: function () {
        (n = Bo('p')),
          (e = No(o)),
          (r = No(
            '. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis consequuntur\n          odio natus veritatis, cupiditate iusto velit numquam at voluptates. Laudantium, deleniti\n          eos. Porro illo quo architecto magnam nobis laborum aliquid!\n        '
          ));
      },
      m: function (t, o) {
        Mo(t, n, o), Lo(n, e), Lo(n, r);
      },
      p: uo,
      d: function (t) {
        t && _o(n);
      },
    };
  }
  function _p(t) {
    for (var n, e, r, o, i, c, a, u, s, l = Array(10), f = [], d = 0; d < l.length; d += 1)
      f[d] = Mp(Lp(t, l, d));
    return {
      c: function () {
        (n = Bo('div')),
          ((e = Bo('header')).innerHTML = '<h2 class="svelte-yt9149">Modal title</h2>'),
          (r = Do()),
          (o = Bo('main'));
        for (var t = 0; t < f.length; t += 1) f[t].c();
        (i = Do()),
          (c = Bo('footer')),
          ((a = Bo('button')).textContent = 'Close'),
          zo(e, 'class', 'svelte-yt9149'),
          zo(o, 'class', 'svelte-yt9149'),
          zo(a, 'class', 'btn btn--subtle'),
          zo(a, 'type', 'button'),
          zo(c, 'class', 'svelte-yt9149'),
          zo(n, 'class', 'flex flex-column height-100%');
      },
      m: function (l, d) {
        Mo(l, n, d), Lo(n, e), Lo(n, r), Lo(n, o);
        for (var p = 0; p < f.length; p += 1) f[p].m(o, null);
        Lo(n, i), Lo(n, c), Lo(c, a), u || ((s = Ho(a, 'click', t[2])), (u = !0));
      },
      p: uo,
      d: function (t) {
        t && _o(n), Fo(f, t), (u = !1), s();
      },
    };
  }
  function Fp(t) {
    for (
      var n,
        e,
        r,
        o,
        i,
        c,
        a = [t[0]],
        u = { $$slots: { default: [_p] }, $$scope: { ctx: t } },
        s = 0;
      s < a.length;
      s += 1
    )
      u = lo(u, a[s]);
    return (
      (r = new fs({ props: u })),
      {
        c: function () {
          ((n = Bo('button')).textContent = 'Show long content modal with body scroll'),
            (e = Do()),
            _i(r.$$.fragment),
            zo(n, 'class', 'btn btn--accent'),
            zo(n, 'type', 'button');
        },
        m: function (a, u) {
          Mo(a, n, u),
            Mo(a, e, u),
            Fi(r, a, u),
            (o = !0),
            i || ((c = Ho(n, 'click', t[1])), (i = !0));
        },
        p: function (t, n) {
          var e = qr(n, 1)[0],
            o = 1 & e ? Li(a, [Mi(t[0])]) : {};
          64 & e && (o.$$scope = { dirty: e, ctx: t }), r.$set(o);
        },
        i: function (t) {
          o || (Si(r.$$.fragment, t), (o = !0));
        },
        o: function (t) {
          ki(r.$$.fragment, t), (o = !1);
        },
        d: function (t) {
          t && _o(n), t && _o(e), Bi(r, t), (i = !1), c();
        },
      }
    );
  }
  var Bp = 'long-content-body-scroll';
  function Ip(t) {
    return [
      {
        name: Bp,
        padding: 0,
        breakpoints: {
          '32rem': {
            maxWidth: 'var(--max-width-xxs)',
            margin: 'var(--component-padding)',
            borderRadius: 'var(--radius-md)',
            height: 'calc(100% - var(--component-padding) * 2)',
            centered: !0,
          },
        },
      },
      function () {
        return As.show(Bp);
      },
      function () {
        return As.cancel(Bp);
      },
    ];
  }
  var Np = (function (t) {
    Zt(e, t);
    var n = Tp(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, Ip, Fp, vo, {}), r;
    }
    return e;
  })(Ni);
  function Dp(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function qp(t) {
    var n, e;
    return (
      (n = new qd({
        props: {
          'data-src': 'demo/components/organisms/SectionLongContent/LongContentExample.svelte',
        },
      })),
      {
        c: function () {
          _i(n.$$.fragment);
        },
        m: function (t, r) {
          Fi(n, t, r), (e = !0);
        },
        p: uo,
        i: function (t) {
          e || (Si(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Bi(n, t);
        },
      }
    );
  }
  function Hp(t) {
    var n, e;
    return (
      (n = new qd({
        props: {
          'data-src':
            'demo/components/organisms/SectionLongContent/LongContentBodyScrollExample.svelte',
        },
      })),
      {
        c: function () {
          _i(n.$$.fragment);
        },
        m: function (t, r) {
          Fi(n, t, r), (e = !0);
        },
        p: uo,
        i: function (t) {
          e || (Si(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Bi(n, t);
        },
      }
    );
  }
  function zp(t) {
    var n, e, r, o, i, c, a, u, s, l;
    return (
      (n = new Ap({})),
      (r = new tp({
        props: {
          class: 'margin-top-sm',
          title: 'Show code',
          $$slots: { default: [qp] },
          $$scope: { ctx: t },
        },
      })),
      (a = new Np({})),
      (s = new tp({
        props: {
          class: 'margin-top-sm',
          title: 'Show code',
          $$slots: { default: [Hp] },
          $$scope: { ctx: t },
        },
      })),
      {
        c: function () {
          _i(n.$$.fragment),
            (e = Do()),
            _i(r.$$.fragment),
            (o = Do()),
            (i = Bo('div')),
            (c = Do()),
            _i(a.$$.fragment),
            (u = Do()),
            _i(s.$$.fragment),
            zo(i, 'class', 'margin-top-sm');
        },
        m: function (t, f) {
          Fi(n, t, f),
            Mo(t, e, f),
            Fi(r, t, f),
            Mo(t, o, f),
            Mo(t, i, f),
            Mo(t, c, f),
            Fi(a, t, f),
            Mo(t, u, f),
            Fi(s, t, f),
            (l = !0);
        },
        p: function (t, n) {
          var e = qr(n, 1)[0],
            o = {};
          1 & e && (o.$$scope = { dirty: e, ctx: t }), r.$set(o);
          var i = {};
          1 & e && (i.$$scope = { dirty: e, ctx: t }), s.$set(i);
        },
        i: function (t) {
          l ||
            (Si(n.$$.fragment, t),
            Si(r.$$.fragment, t),
            Si(a.$$.fragment, t),
            Si(s.$$.fragment, t),
            (l = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t),
            ki(r.$$.fragment, t),
            ki(a.$$.fragment, t),
            ki(s.$$.fragment, t),
            (l = !1);
        },
        d: function (t) {
          Bi(n, t),
            t && _o(e),
            Bi(r, t),
            t && _o(o),
            t && _o(i),
            t && _o(c),
            Bi(a, t),
            t && _o(u),
            Bi(s, t);
        },
      }
    );
  }
  var Wp = (function (t) {
    Zt(e, t);
    var n = Dp(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, null, zp, vo, {}), r;
    }
    return e;
  })(Ni);
  function Up(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function Gp(t) {
    var n,
      e,
      r = t[2].default,
      o = bo(r, t, t[1], null);
    return {
      c: function () {
        (n = Bo('ul')), o && o.c(), zo(n, 'class', 'list'), Go(n, 'list--ul', 'ul' === t[0]);
      },
      m: function (t, r) {
        Mo(t, n, r), o && o.m(n, null), (e = !0);
      },
      p: function (t, e) {
        var i = qr(e, 1)[0];
        o && o.p && 2 & i && xo(o, r, t, t[1], i, null, null),
          1 & i && Go(n, 'list--ul', 'ul' === t[0]);
      },
      i: function (t) {
        e || (Si(o, t), (e = !0));
      },
      o: function (t) {
        ki(o, t), (e = !1);
      },
      d: function (t) {
        t && _o(n), o && o.d(t);
      },
    };
  }
  function Vp(t, n, e) {
    var r = n.$$slots,
      o = void 0 === r ? {} : r,
      i = n.$$scope,
      c = n.variant,
      a = void 0 === c ? 'ul' : c;
    return (
      (t.$$set = function (t) {
        'variant' in t && e(0, (a = t.variant)), '$$scope' in t && e(1, (i = t.$$scope));
      }),
      [a, i, o]
    );
  }
  var Yp = (function (t) {
    Zt(e, t);
    var n = Up(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, Vp, Gp, vo, { variant: 0 }), r;
    }
    return e;
  })(Ni);
  function Kp(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function Xp(t) {
    var n, e, r;
    return {
      c: function () {
        ((n = Bo('li')).innerHTML =
          '<code>opened</code> \n    <div>Fired when DOM elements are created and the modal is visible.</div>'),
          (e = Do()),
          ((r = Bo('li')).innerHTML =
            '<code>closed</code> \n    <div>Fired when DOM elements are removed and the modal is not anymore visible.</div>');
      },
      m: function (t, o) {
        Mo(t, n, o), Mo(t, e, o), Mo(t, r, o);
      },
      d: function (t) {
        t && _o(n), t && _o(e), t && _o(r);
      },
    };
  }
  function Zp(t) {
    var n, e;
    return (
      (n = new Yp({ props: { $$slots: { default: [Xp] }, $$scope: { ctx: t } } })),
      {
        c: function () {
          _i(n.$$.fragment);
        },
        m: function (t, r) {
          Fi(n, t, r), (e = !0);
        },
        p: function (t, e) {
          var r = qr(e, 1)[0],
            o = {};
          1 & r && (o.$$scope = { dirty: r, ctx: t }), n.$set(o);
        },
        i: function (t) {
          e || (Si(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Bi(n, t);
        },
      }
    );
  }
  var Jp = (function (t) {
    Zt(e, t);
    var n = Kp(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, null, Zp, vo, {}), r;
    }
    return e;
  })(Ni);
  function Qp(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function tm(t) {
    var n,
      e,
      r,
      o,
      i,
      c,
      a,
      u,
      s,
      l,
      f,
      d,
      p,
      m,
      h,
      v,
      g,
      y,
      b,
      $,
      x,
      w,
      O,
      S,
      k,
      R,
      C,
      E,
      j,
      P,
      A,
      T,
      L,
      M,
      _,
      F,
      B,
      I,
      N,
      D,
      q,
      H,
      z,
      W,
      U,
      G,
      V,
      Y,
      K,
      X,
      Z,
      J,
      Q,
      tt,
      nt,
      et,
      rt,
      ot,
      it,
      ct,
      at,
      ut,
      st,
      lt,
      ft,
      dt,
      pt,
      mt,
      ht,
      vt,
      gt,
      yt,
      bt,
      $t,
      xt,
      wt,
      Ot,
      St,
      kt,
      Rt,
      Ct,
      Et,
      jt,
      Pt,
      At,
      Tt,
      Lt,
      Mt,
      _t,
      Ft,
      Bt,
      It,
      Nt,
      Dt,
      qt,
      Ht,
      zt,
      Wt,
      Ut,
      Gt,
      Vt,
      Yt,
      Kt,
      Xt,
      Zt,
      Jt,
      Qt,
      tn,
      nn,
      en,
      rn,
      on,
      cn,
      an,
      un,
      sn,
      ln,
      fn,
      dn,
      pn,
      mn,
      hn,
      vn,
      gn,
      yn,
      bn,
      $n,
      xn,
      wn,
      On,
      Sn,
      kn,
      Rn;
    return (
      (ht = new qd({
        props: {
          language: 'markup',
          unescaped: !0,
          code:
            "\n<script>\n  import smodale, { Modal } from 'smodale';\n\n  const modalProps = {\n    name: 'modal-name',\n    breakpoints: {\n      // @media (min-width: 768px)\n      '768px': {\n        maxWidth: '450px',\n        centered: true,\n        borderRadius: 'var(--radius-md)',\n      },\n      // @media (min-width: 64rem)\n      '64rem': {\n        maxWidth: '650px',\n      },\n    },\n  };\n\n  smodale.show('modal-name');\n</script>\n\n<Modal {...modalProps}>...</Modal>\n    ",
        },
      })),
      {
        c: function () {
          (n = Bo('li')),
            ((e = Bo('strong')).textContent = 'Generic properties'),
            (r = Do()),
            (o = Bo('ul')),
            (i = Bo('li')),
            ((c = Bo('code')).textContent = '{ string } name'),
            (a = Do()),
            ((u = Bo('div')).innerHTML =
              'An <u>unique</u> and <u>required</u> property when defining a <u>static modal</u>.'),
            (s = Do()),
            (l = Bo('li')),
            ((f = Bo('code')).textContent = '{ function } transition'),
            (d = Do()),
            ((p = Bo('div')).innerHTML =
              'A Svelte\n          <a href="https://svelte.dev/docs#transition_fn" target="_blank" rel="noopener noreferrer">transition</a>\n          function applied on <code>.modal</code> element. Default <code>null</code>.'),
            (m = Do()),
            (h = Bo('li')),
            ((v = Bo('code')).textContent = '{ boolean } escapeToClose'),
            (g = Do()),
            ((y = Bo('div')).innerHTML =
              'Whether or not close the modal on escape key (ESC) press. Default <code>true</code>.'),
            (b = Do()),
            ($ = Bo('li')),
            ((x = Bo('code')).textContent = '{ boolean } clickOutsideToClose'),
            (w = Do()),
            ((O = Bo('div')).innerHTML =
              'Whether or not close the modal on backdrop click. Default <code>true</code>.'),
            (S = Do()),
            (k = Bo('li')),
            ((R = Bo('code')).textContent = '{ boolean } disableBodyScroll'),
            (C = Do()),
            ((E = Bo('div')).innerHTML =
              'Whether or not to prevent body element scroll while the modal is open. Default\n          <code>true</code>.'),
            (j = Do()),
            (P = Bo('li')),
            ((A = Bo('code')).textContent = '{ boolean } focusOnOpen'),
            (T = Do()),
            ((L = Bo('div')).innerHTML =
              'Whether or not move focus automatically to the first focusable element inside the modal\n          when the modal is open. Default <code>true</code>.'),
            (M = Do()),
            (_ = Bo('li')),
            ((F = Bo('code')).textContent = '{ boolean } focusTrap'),
            (B = Do()),
            ((I = Bo('div')).innerHTML =
              'Whether or not focus only the elements that are inside the modal on TAB key press. Default\n          <code>true</code>.'),
            (N = Do()),
            (D = Bo('li')),
            ((q = Bo('code')).textContent = '{ string } classes'),
            (H = Do()),
            ((z = Bo('div')).innerHTML =
              'Append custom classes on <code>.modal</code> element. Default <code>&#39;&#39;</code>.'),
            (W = Do()),
            (U = Bo('li')),
            ((G = Bo('code')).textContent = '{ object } transitionParams'),
            (V = Do()),
            (Y = Bo('div')),
            (K = No('A Svelte\n          ')),
            ((X = Bo('a')).textContent = 'transition parameters'),
            (Z = No('\n          object used on transition property. Default ')),
            ((J = Bo('code')).textContent = '{}'),
            (Q = No('.')),
            (tt = Do()),
            (nt = Bo('li')),
            ((et = Bo('code')).textContent = '{ object } breakpoints'),
            (rt = Do()),
            (ot = Bo('p')),
            (it = No(
              'Allows to customize the modal with specific properties for different breakpoints. Default\n          '
            )),
            ((ct = Bo('code')).textContent = '{}'),
            (at = No('.')),
            (ut = Do()),
            ((st = Bo('p')).innerHTML =
              'Breakpoint keys can be defined with <code>px</code>, <code>rem</code> and <code>em</code> units\n          and behaves in a cascade way like CSS rules.'),
            (lt = Do()),
            ((ft = Bo('blockquote')).innerHTML =
              '⚠️ Allowed properties are only the <u>style properties</u>.'),
            (dt = Do()),
            ((pt = Bo('strong')).innerHTML = '<small>Example:</small>'),
            (mt = Do()),
            _i(ht.$$.fragment),
            (vt = Do()),
            (gt = Bo('li')),
            ((yt = Bo('strong')).textContent = 'Style properties'),
            (bt = Do()),
            (($t = Bo('p')).innerHTML =
              'Properties that can be also used in the generic <code>breakpoints</code> property.'),
            (xt = Do()),
            ((wt = Bo('p')).innerHTML =
              'When properties are <code>string</code> type,\n      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" target="_blank" rel="noopener noreferrer">CSS custom properties</a> can be used.'),
            (Ot = Do()),
            (St = Bo('ul')),
            (kt = Bo('li')),
            ((Rt = Bo('code')).textContent = '{ string } maxWidth'),
            (Ct = Do()),
            ((Et = Bo('div')).textContent = 'Set max width.'),
            (jt = Do()),
            (Pt = Bo('li')),
            ((At = Bo('code')).textContent = '{ string } margin'),
            (Tt = Do()),
            ((Lt = Bo('div')).textContent = 'Set margin.'),
            (Mt = Do()),
            (_t = Bo('li')),
            ((Ft = Bo('code')).textContent = '{ string } height'),
            (Bt = Do()),
            ((It = Bo('div')).textContent = 'Set height.'),
            (Nt = Do()),
            (Dt = Bo('li')),
            ((qt = Bo('code')).textContent = '{ string } backgroundColor'),
            (Ht = Do()),
            ((zt = Bo('div')).innerHTML = 'Set background color. Default <code>#fff</code>.'),
            (Wt = Do()),
            (Ut = Bo('li')),
            ((Gt = Bo('code')).textContent = '{ string } padding'),
            (Vt = Do()),
            ((Yt = Bo('div')).innerHTML = 'Set padding. Default <code>20px</code>.'),
            (Kt = Do()),
            (Xt = Bo('li')),
            ((Zt = Bo('code')).textContent = '{ string } borderRadius'),
            (Jt = Do()),
            ((Qt = Bo('div')).textContent = 'Set border radius.'),
            (tn = Do()),
            (nn = Bo('li')),
            ((en = Bo('code')).textContent = '{ string } backdropColor'),
            (rn = Do()),
            ((on = Bo('div')).innerHTML =
              'Set backdrop color. Default <code>rgba(0, 0, 0, 0.6)</code>.'),
            (cn = Do()),
            (an = Bo('li')),
            ((un = Bo('code')).textContent = '{ string } boxShadow'),
            (sn = Do()),
            ((ln = Bo('div')).textContent = 'Set box shadow.'),
            (fn = Do()),
            (dn = Bo('li')),
            ((pn = Bo('code')).textContent = '{ boolean } centered'),
            (mn = Do()),
            ((hn = Bo('div')).textContent = 'Whether or not vertically and horizontally centered.'),
            (vn = Do()),
            (gn = Bo('li')),
            ((yn = Bo('code')).textContent = '{ boolean } scrollable'),
            (bn = Do()),
            (($n = Bo('div')).textContent = 'Whether or not scrollable content.'),
            (xn = Do()),
            (wn = Bo('li')),
            ((On = Bo('code')).textContent = '{ string } zIndex'),
            (Sn = Do()),
            ((kn = Bo('div')).innerHTML =
              'Set modal <code>z-index</code>. Default <code>50</code>.'),
            zo(X, 'href', 'https://svelte.dev/docs#Transition_parameters'),
            zo(X, 'target', '_blank'),
            zo(X, 'rel', 'noopener noreferrer');
        },
        m: function (t, Cn) {
          Mo(t, n, Cn),
            Lo(n, e),
            Lo(n, r),
            Lo(n, o),
            Lo(o, i),
            Lo(i, c),
            Lo(i, a),
            Lo(i, u),
            Lo(o, s),
            Lo(o, l),
            Lo(l, f),
            Lo(l, d),
            Lo(l, p),
            Lo(o, m),
            Lo(o, h),
            Lo(h, v),
            Lo(h, g),
            Lo(h, y),
            Lo(o, b),
            Lo(o, $),
            Lo($, x),
            Lo($, w),
            Lo($, O),
            Lo(o, S),
            Lo(o, k),
            Lo(k, R),
            Lo(k, C),
            Lo(k, E),
            Lo(o, j),
            Lo(o, P),
            Lo(P, A),
            Lo(P, T),
            Lo(P, L),
            Lo(o, M),
            Lo(o, _),
            Lo(_, F),
            Lo(_, B),
            Lo(_, I),
            Lo(o, N),
            Lo(o, D),
            Lo(D, q),
            Lo(D, H),
            Lo(D, z),
            Lo(o, W),
            Lo(o, U),
            Lo(U, G),
            Lo(U, V),
            Lo(U, Y),
            Lo(Y, K),
            Lo(Y, X),
            Lo(Y, Z),
            Lo(Y, J),
            Lo(Y, Q),
            Lo(o, tt),
            Lo(o, nt),
            Lo(nt, et),
            Lo(nt, rt),
            Lo(nt, ot),
            Lo(ot, it),
            Lo(ot, ct),
            Lo(ot, at),
            Lo(nt, ut),
            Lo(nt, st),
            Lo(nt, lt),
            Lo(nt, ft),
            Lo(nt, dt),
            Lo(nt, pt),
            Lo(nt, mt),
            Fi(ht, nt, null),
            Mo(t, vt, Cn),
            Mo(t, gt, Cn),
            Lo(gt, yt),
            Lo(gt, bt),
            Lo(gt, $t),
            Lo(gt, xt),
            Lo(gt, wt),
            Lo(gt, Ot),
            Lo(gt, St),
            Lo(St, kt),
            Lo(kt, Rt),
            Lo(kt, Ct),
            Lo(kt, Et),
            Lo(St, jt),
            Lo(St, Pt),
            Lo(Pt, At),
            Lo(Pt, Tt),
            Lo(Pt, Lt),
            Lo(St, Mt),
            Lo(St, _t),
            Lo(_t, Ft),
            Lo(_t, Bt),
            Lo(_t, It),
            Lo(St, Nt),
            Lo(St, Dt),
            Lo(Dt, qt),
            Lo(Dt, Ht),
            Lo(Dt, zt),
            Lo(St, Wt),
            Lo(St, Ut),
            Lo(Ut, Gt),
            Lo(Ut, Vt),
            Lo(Ut, Yt),
            Lo(St, Kt),
            Lo(St, Xt),
            Lo(Xt, Zt),
            Lo(Xt, Jt),
            Lo(Xt, Qt),
            Lo(St, tn),
            Lo(St, nn),
            Lo(nn, en),
            Lo(nn, rn),
            Lo(nn, on),
            Lo(St, cn),
            Lo(St, an),
            Lo(an, un),
            Lo(an, sn),
            Lo(an, ln),
            Lo(St, fn),
            Lo(St, dn),
            Lo(dn, pn),
            Lo(dn, mn),
            Lo(dn, hn),
            Lo(St, vn),
            Lo(St, gn),
            Lo(gn, yn),
            Lo(gn, bn),
            Lo(gn, $n),
            Lo(St, xn),
            Lo(St, wn),
            Lo(wn, On),
            Lo(wn, Sn),
            Lo(wn, kn),
            (Rn = !0);
        },
        p: uo,
        i: function (t) {
          Rn || (Si(ht.$$.fragment, t), (Rn = !0));
        },
        o: function (t) {
          ki(ht.$$.fragment, t), (Rn = !1);
        },
        d: function (t) {
          t && _o(n), Bi(ht), t && _o(vt), t && _o(gt);
        },
      }
    );
  }
  function nm(t) {
    var n, e, r, o;
    return (
      (r = new Yp({ props: { $$slots: { default: [tm] }, $$scope: { ctx: t } } })),
      {
        c: function () {
          ((n = Bo('p')).innerHTML =
            'There are 2 types of properties: <u>generic</u> ones which will handle some base functionalities\n  and\n  <u>style</u> ones which will customize the modal.'),
            (e = Do()),
            _i(r.$$.fragment);
        },
        m: function (t, i) {
          Mo(t, n, i), Mo(t, e, i), Fi(r, t, i), (o = !0);
        },
        p: function (t, n) {
          var e = qr(n, 1)[0],
            o = {};
          1 & e && (o.$$scope = { dirty: e, ctx: t }), r.$set(o);
        },
        i: function (t) {
          o || (Si(r.$$.fragment, t), (o = !0));
        },
        o: function (t) {
          ki(r.$$.fragment, t), (o = !1);
        },
        d: function (t) {
          t && _o(n), t && _o(e), Bi(r, t);
        },
      }
    );
  }
  var em = (function (t) {
    Zt(e, t);
    var n = Qp(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, null, nm, vo, {}), r;
    }
    return e;
  })(Ni);
  function rm(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function om(t) {
    var n, e, r, o, i, c, a, u, s, l, f, d, p, m, h, v, g, y, b, $, x, w, O, S, k;
    return (
      (S = new qd({
        props: {
          filename: 'App.svelte',
          language: 'markup',
          unescaped: !0,
          code:
            "\n<script>\n  import smodale, { Modal } from 'smodale';\n  import MyCustomModalContent from 'MyCustomModalContent.svelte';\n\n  const componentProps = { text: 'Lorem ipsum' };\n  const modalProps = {\n    breakpoints: {\n      '768px': {\n        maxWidth: '450px',\n      },\n    },\n  };\n\n  smodale.show('modal-name');\n  smodale.show(MyCustomModalContent, componentProps, modalProps);\n</script>\n\n<Modal name=\"modal-name\" {...modalProps}>\n  <h1>Modal title</h1>\n  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>\n</Modal>\n",
        },
      })),
      {
        c: function () {
          (n = Bo('li')),
            ((e = Bo('strong')).innerHTML = '<small>Arguments:</small>'),
            (r = Do()),
            (o = Bo('ul')),
            (i = Bo('li')),
            ((c = Bo('code')).textContent = '{ string | SvelteComponent } name (required)'),
            (a = Do()),
            (u = Bo('li')),
            ((s = Bo('code')).textContent = '{ object } componentProps (optional)'),
            (l = Do()),
            (f = Bo('li')),
            ((d = Bo('code')).textContent = '{ object } modalProps (optional)'),
            (p = Do()),
            (m = Bo('li')),
            ((h = Bo('code')).textContent = '{ object } modalEvents (optional)'),
            (v = Do()),
            ((g = Bo('p')).innerHTML =
              'Optional arguments are consumed when <code>name</code> it&#39;s a\n        <code>SvelteComponent</code> object.'),
            (y = Do()),
            ((b = Bo('li')).innerHTML =
              '<strong><small>Returns:</small></strong> \n    <ul><li>A<code>Promise</code> object.</li></ul>'),
            ($ = Do()),
            (x = Bo('li')),
            ((w = Bo('strong')).innerHTML = '<small>Example:</small>'),
            (O = Do()),
            _i(S.$$.fragment);
        },
        m: function (t, R) {
          Mo(t, n, R),
            Lo(n, e),
            Lo(n, r),
            Lo(n, o),
            Lo(o, i),
            Lo(i, c),
            Lo(o, a),
            Lo(o, u),
            Lo(u, s),
            Lo(o, l),
            Lo(o, f),
            Lo(f, d),
            Lo(o, p),
            Lo(o, m),
            Lo(m, h),
            Lo(o, v),
            Lo(o, g),
            Mo(t, y, R),
            Mo(t, b, R),
            Mo(t, $, R),
            Mo(t, x, R),
            Lo(x, w),
            Lo(x, O),
            Fi(S, x, null),
            (k = !0);
        },
        p: uo,
        i: function (t) {
          k || (Si(S.$$.fragment, t), (k = !0));
        },
        o: function (t) {
          ki(S.$$.fragment, t), (k = !1);
        },
        d: function (t) {
          t && _o(n), t && _o(y), t && _o(b), t && _o($), t && _o(x), Bi(S);
        },
      }
    );
  }
  function im(t) {
    var n, e, r, o, i, c, a, u, s, l, f, d, p, m, h, v;
    return (
      (h = new qd({
        props: {
          filename: 'App.svelte',
          language: 'markup',
          unescaped: !0,
          code:
            "\n<script>\n  import smodale, { Modal } from 'smodale';\n\n  smodale\n    .show('modal-name')\n    .then(data => {\n      console.log(data); // { foo: 'bar' }\n    });\n\n  const onOkClick = () => smodale.hide('modal-name', { foo: 'bar' });\n</script>\n\n<Modal name=\"modal-name\">\n  <h1>Modal title</h1>\n  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>\n  <button on:click={onOkClick}>Ok</button>\n</Modal>\n",
        },
      })),
      {
        c: function () {
          (n = Bo('li')),
            ((e = Bo('strong')).innerHTML = '<small>Arguments:</small>'),
            (r = Do()),
            (o = Bo('ul')),
            (i = Bo('li')),
            ((c = Bo('code')).textContent = '{ string } name (required)'),
            (a = Do()),
            (u = Bo('li')),
            ((s = Bo('code')).textContent = '{ any } data (optional)'),
            (l = No(' — Argument for the resolved promise')),
            (f = Do()),
            (d = Bo('li')),
            ((p = Bo('strong')).innerHTML = '<small>Example:</small>'),
            (m = Do()),
            _i(h.$$.fragment);
        },
        m: function (t, g) {
          Mo(t, n, g),
            Lo(n, e),
            Lo(n, r),
            Lo(n, o),
            Lo(o, i),
            Lo(i, c),
            Lo(o, a),
            Lo(o, u),
            Lo(u, s),
            Lo(u, l),
            Mo(t, f, g),
            Mo(t, d, g),
            Lo(d, p),
            Lo(d, m),
            Fi(h, d, null),
            (v = !0);
        },
        p: uo,
        i: function (t) {
          v || (Si(h.$$.fragment, t), (v = !0));
        },
        o: function (t) {
          ki(h.$$.fragment, t), (v = !1);
        },
        d: function (t) {
          t && _o(n), t && _o(f), t && _o(d), Bi(h);
        },
      }
    );
  }
  function cm(t) {
    var n, e, r, o, i, c, a, u, s, l, f, d, p, m, h, v;
    return (
      (h = new qd({
        props: {
          filename: 'App.svelte',
          language: 'markup',
          unescaped: !0,
          code:
            "\n<script>\n  import smodale, { Modal } from 'smodale';\n\n  smodale\n    .show('modal-name')\n    .then(data => {\n      console.log(data); // { foo: 'bar' }\n    });\n\n  const onCancelClick = () => smodale.cancel('modal-name', { foo: 'bar' });\n</script>\n\n<Modal name=\"modal-name\">\n  <h1>Modal title</h1>\n  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>\n  <button on:click={onCancelClick}>Cancel</button>\n</Modal>\n",
        },
      })),
      {
        c: function () {
          (n = Bo('li')),
            ((e = Bo('strong')).innerHTML = '<small>Arguments:</small>'),
            (r = Do()),
            (o = Bo('ul')),
            (i = Bo('li')),
            ((c = Bo('code')).textContent = '{ string } name (required)'),
            (a = Do()),
            (u = Bo('li')),
            ((s = Bo('code')).textContent = '{ any } data (optional)'),
            (l = No(' — Argument for the rejected promise')),
            (f = Do()),
            (d = Bo('li')),
            ((p = Bo('strong')).innerHTML = '<small>Example:</small>'),
            (m = Do()),
            _i(h.$$.fragment);
        },
        m: function (t, g) {
          Mo(t, n, g),
            Lo(n, e),
            Lo(n, r),
            Lo(n, o),
            Lo(o, i),
            Lo(i, c),
            Lo(o, a),
            Lo(o, u),
            Lo(u, s),
            Lo(u, l),
            Mo(t, f, g),
            Mo(t, d, g),
            Lo(d, p),
            Lo(d, m),
            Fi(h, d, null),
            (v = !0);
        },
        p: uo,
        i: function (t) {
          v || (Si(h.$$.fragment, t), (v = !0));
        },
        o: function (t) {
          ki(h.$$.fragment, t), (v = !1);
        },
        d: function (t) {
          t && _o(n), t && _o(f), t && _o(d), Bi(h);
        },
      }
    );
  }
  function am(t) {
    var n, e, r, o, i, c, a, u, s;
    return (
      (c = new qd({
        props: {
          filename: 'MyCustomModalContent.svelte',
          language: 'markup',
          unescaped: !0,
          code:
            "\n<script>\n  import { getModalContext } from 'smodale';\n  \n  const { hide, cancel, component } = getModalContext();\n\n  console.log(component);\n\n  const onCancelClick = () => cancel('cancelled');\n  const onOkClick = () => hide({ foo: 'bar' });\n\n  <button on:click={onCancelClick}>Cancel</button>\n  <button on:click={onOkClick}>Ok</button>\n</script>\n",
        },
      })),
      (u = new qd({
        props: {
          filename: 'App.svelte',
          language: 'markup',
          unescaped: !0,
          code:
            "\n<script>\n  import smodale, { Modal } from 'smodale';\n  import MyCustomModalContent from 'MyCustomModalContent.svelte';\n\n  smodale.show('modal-name');\n  smodale.show(MyCustomModalContent);\n</script>\n\n<Modal name=\"modal-name\">\n  <MyCustomModalContent />\n</Modal>\n",
        },
      })),
      {
        c: function () {
          ((n = Bo('li')).innerHTML =
            '<strong><small>Returns:</small></strong> \n    <ul><li>An <code>Object</code> with the following properties.\n        <ul><li><code>hide(data: any)</code> — Hide modal and resolve the promise</li> \n          <li><code>close(data: any)</code> — Hide modal and reject the promise</li> \n          <li><code>component</code> — <code>Modal</code> component instance</li></ul></li></ul>'),
            (e = Do()),
            (r = Bo('li')),
            ((o = Bo('strong')).innerHTML = '<small>Example:</small>'),
            (i = Do()),
            _i(c.$$.fragment),
            (a = Do()),
            _i(u.$$.fragment);
        },
        m: function (t, l) {
          Mo(t, n, l),
            Mo(t, e, l),
            Mo(t, r, l),
            Lo(r, o),
            Lo(r, i),
            Fi(c, r, null),
            Lo(r, a),
            Fi(u, r, null),
            (s = !0);
        },
        p: uo,
        i: function (t) {
          s || (Si(c.$$.fragment, t), Si(u.$$.fragment, t), (s = !0));
        },
        o: function (t) {
          ki(c.$$.fragment, t), ki(u.$$.fragment, t), (s = !1);
        },
        d: function (t) {
          t && _o(n), t && _o(e), t && _o(r), Bi(c), Bi(u);
        },
      }
    );
  }
  function um(t) {
    var n, e, r, o, i, c, a, u, s, l, f;
    return (
      (l = new qd({
        props: {
          filename: 'App.svelte',
          language: 'markup',
          unescaped: !0,
          code:
            "\n<script>\n  import smodale, { ModalDismissReasons } from 'smodale';\n  import MyCustomModalContent from 'MyCustomModalContent.svelte';\n\n  smodale.show(MyCustomModalContent)\n    .then(() => {})\n    .catch(reason => {\n      if (\n        reason === ModalDismissReasons.BACKDROP_CLICK ||\n        reason === ModalDismissReasons.ESC\n      ) {\n        // do something\n      }\n    });\n</script>\n",
        },
      })),
      {
        c: function () {
          ((n = Bo('li')).innerHTML =
            '<strong><small>Type:</small></strong>  <code>Object</code> \n    <ul><li><code>BACKDROP_CLICK</code></li> \n      <li><code>ESC</code></li></ul>'),
            (e = Do()),
            ((r = Bo('li')).innerHTML = '<strong><small>Read only</small></strong>'),
            (o = Do()),
            ((i = Bo('li')).innerHTML =
              '<strong><small>Details:</small></strong> \n    <p>When props <code>escapeToClose</code> or <code>clickOutsideToClose</code> are set to\n      <code>true</code>the modal will be closed with the <code>cancel()</code> method with a dismiss\n      string argument.</p>'),
            (c = Do()),
            (a = Bo('li')),
            ((u = Bo('strong')).innerHTML = '<small>Example:</small>'),
            (s = Do()),
            _i(l.$$.fragment);
        },
        m: function (t, d) {
          Mo(t, n, d),
            Mo(t, e, d),
            Mo(t, r, d),
            Mo(t, o, d),
            Mo(t, i, d),
            Mo(t, c, d),
            Mo(t, a, d),
            Lo(a, u),
            Lo(a, s),
            Fi(l, a, null),
            (f = !0);
        },
        p: uo,
        i: function (t) {
          f || (Si(l.$$.fragment, t), (f = !0));
        },
        o: function (t) {
          ki(l.$$.fragment, t), (f = !1);
        },
        d: function (t) {
          t && _o(n), t && _o(e), t && _o(r), t && _o(o), t && _o(i), t && _o(c), t && _o(a), Bi(l);
        },
      }
    );
  }
  function sm(t) {
    var n,
      e,
      r,
      o,
      i,
      c,
      a,
      u,
      s,
      l,
      f,
      d,
      p,
      m,
      h,
      v,
      g,
      y,
      b,
      $,
      x,
      w,
      O,
      S,
      k,
      R,
      C,
      E,
      j,
      P,
      A,
      T,
      L,
      M,
      _,
      F,
      B,
      I,
      N,
      D;
    return (
      (a = new Yp({ props: { $$slots: { default: [om] }, $$scope: { ctx: t } } })),
      (h = new Yp({ props: { $$slots: { default: [im] }, $$scope: { ctx: t } } })),
      (O = new Yp({ props: { $$slots: { default: [cm] }, $$scope: { ctx: t } } })),
      (A = new Yp({ props: { $$slots: { default: [am] }, $$scope: { ctx: t } } })),
      (N = new Yp({ props: { $$slots: { default: [um] }, $$scope: { ctx: t } } })),
      {
        c: function () {
          ((n = Bo('h4')).innerHTML = '<code>show()</code>'),
            (e = Do()),
            (r = Bo('hr')),
            (o = Do()),
            ((i = Bo('p')).textContent = 'Display a static or dynamic modal.'),
            (c = Do()),
            _i(a.$$.fragment),
            (u = Do()),
            ((s = Bo('h4')).innerHTML = '<code>hide()</code>'),
            (l = Do()),
            (f = Bo('hr')),
            (d = Do()),
            ((p = Bo('p')).innerHTML =
              'Hide an existing modal and <u>resolve</u> the promise returned from <code>show()</code>'),
            (m = Do()),
            _i(h.$$.fragment),
            (v = Do()),
            ((g = Bo('h4')).innerHTML = '<code>cancel()</code>'),
            (y = Do()),
            (b = Bo('hr')),
            ($ = Do()),
            ((x = Bo('p')).innerHTML =
              'Hide an existing modal and <u>reject</u> the promise returned from <code>show()</code>'),
            (w = Do()),
            _i(O.$$.fragment),
            (S = Do()),
            ((k = Bo('h4')).innerHTML = '<code>getModalContext()</code>'),
            (R = Do()),
            (C = Bo('hr')),
            (E = Do()),
            ((j = Bo('p')).innerHTML =
              'Usable in children components of <code>Modal</code> component or in custom components for dynamic modals.'),
            (P = Do()),
            _i(A.$$.fragment),
            (T = Do()),
            ((L = Bo('h4')).innerHTML = '<code>ModalDismissReasons</code>'),
            (M = Do()),
            (_ = Bo('hr')),
            (F = Do()),
            ((B = Bo('p')).textContent = "Constants for checking what's the modal close reason."),
            (I = Do()),
            _i(N.$$.fragment);
        },
        m: function (t, q) {
          Mo(t, n, q),
            Mo(t, e, q),
            Mo(t, r, q),
            Mo(t, o, q),
            Mo(t, i, q),
            Mo(t, c, q),
            Fi(a, t, q),
            Mo(t, u, q),
            Mo(t, s, q),
            Mo(t, l, q),
            Mo(t, f, q),
            Mo(t, d, q),
            Mo(t, p, q),
            Mo(t, m, q),
            Fi(h, t, q),
            Mo(t, v, q),
            Mo(t, g, q),
            Mo(t, y, q),
            Mo(t, b, q),
            Mo(t, $, q),
            Mo(t, x, q),
            Mo(t, w, q),
            Fi(O, t, q),
            Mo(t, S, q),
            Mo(t, k, q),
            Mo(t, R, q),
            Mo(t, C, q),
            Mo(t, E, q),
            Mo(t, j, q),
            Mo(t, P, q),
            Fi(A, t, q),
            Mo(t, T, q),
            Mo(t, L, q),
            Mo(t, M, q),
            Mo(t, _, q),
            Mo(t, F, q),
            Mo(t, B, q),
            Mo(t, I, q),
            Fi(N, t, q),
            (D = !0);
        },
        p: function (t, n) {
          var e = qr(n, 1)[0],
            r = {};
          1 & e && (r.$$scope = { dirty: e, ctx: t }), a.$set(r);
          var o = {};
          1 & e && (o.$$scope = { dirty: e, ctx: t }), h.$set(o);
          var i = {};
          1 & e && (i.$$scope = { dirty: e, ctx: t }), O.$set(i);
          var c = {};
          1 & e && (c.$$scope = { dirty: e, ctx: t }), A.$set(c);
          var u = {};
          1 & e && (u.$$scope = { dirty: e, ctx: t }), N.$set(u);
        },
        i: function (t) {
          D ||
            (Si(a.$$.fragment, t),
            Si(h.$$.fragment, t),
            Si(O.$$.fragment, t),
            Si(A.$$.fragment, t),
            Si(N.$$.fragment, t),
            (D = !0));
        },
        o: function (t) {
          ki(a.$$.fragment, t),
            ki(h.$$.fragment, t),
            ki(O.$$.fragment, t),
            ki(A.$$.fragment, t),
            ki(N.$$.fragment, t),
            (D = !1);
        },
        d: function (t) {
          t && _o(n),
            t && _o(e),
            t && _o(r),
            t && _o(o),
            t && _o(i),
            t && _o(c),
            Bi(a, t),
            t && _o(u),
            t && _o(s),
            t && _o(l),
            t && _o(f),
            t && _o(d),
            t && _o(p),
            t && _o(m),
            Bi(h, t),
            t && _o(v),
            t && _o(g),
            t && _o(y),
            t && _o(b),
            t && _o($),
            t && _o(x),
            t && _o(w),
            Bi(O, t),
            t && _o(S),
            t && _o(k),
            t && _o(R),
            t && _o(C),
            t && _o(E),
            t && _o(j),
            t && _o(P),
            Bi(A, t),
            t && _o(T),
            t && _o(L),
            t && _o(M),
            t && _o(_),
            t && _o(F),
            t && _o(B),
            t && _o(I),
            Bi(N, t);
        },
      }
    );
  }
  var lm = (function (t) {
    Zt(e, t);
    var n = rm(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, null, sm, vo, {}), r;
    }
    return e;
  })(Ni);
  function fm(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function dm(t) {
    var n, e, r, o, i, c, a, u, s, l, f, d, p, m, h, v, g, y, b, $, x, w;
    return (
      (n = new qd({ props: { language: 'bash', code: 'npm i -S smodale' } })),
      (f = new qd({
        props: {
          filename: 'App.svelte',
          language: 'markup',
          unescaped: !0,
          code:
            "\n<script>\n  import smodale, { Modal } from 'smodale';\n\n  smodale.show('modal-name')\n    .then(data => {\n      console.log(data); // { foo: 'bar' }\n    })\n    .catch(data => {\n      console.log(data); // 'cancelled'\n    });\n\n  const onCancelClick = () => smodale.cancel('modal-name', 'cancelled');\n  const onOkClick = () => smodale.hide('modal-name', { foo: 'bar' });\n</script>\n\n<Modal name=\"modal-name\">\n  <h1>Modal title</h1>\n  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>\n  <button on:click={onCancelClick}>Cancel</button>\n  <button on:click={onOkClick}>Ok</button>\n</Modal>\n",
        },
      })),
      (b = new qd({
        props: {
          filename: 'MyCustomModalContent.svelte',
          language: 'markup',
          unescaped: !0,
          code:
            "\n<script>\n  import { getModalContext } from 'smodale';\n\n  const { hide, cancel } = getModalContext();\n\n  export let text = '';\n\n  const onCancelClick = () => cancel(text.toUpperCase());\n  const onOkClick = () => hide({ foo: 'bar' });\n</script>\n\n<button on:click={onCancelClick}>Cancel</button>\n<button on:click={onOkClick}>Ok</button>\n  ",
        },
      })),
      (x = new qd({
        props: {
          filename: 'App.svelte',
          language: 'markup',
          unescaped: !0,
          code:
            "\n<script>\nimport smodale, { Modal } from 'smodale';\nimport MyCustomModalContent from 'MyCustomModalContent.svelte';\n\nsmodale.show(MyCustomModalContent, { text: 'Lorem ipsum' })\n  .then(data => {\n    console.log(data); // { foo: 'bar' }\n  })\n  .catch(data => {\n    console.log(data); // 'LOREM IPSUM'\n  });\n</script>\n  ",
        },
      })),
      {
        c: function () {
          _i(n.$$.fragment),
            (e = Do()),
            ((r = Bo('h3')).textContent = 'Usage'),
            (o = Do()),
            ((i = Bo('p')).textContent =
              'Modals can be shown statically or dynamically. When shown dynamically can be also nested.'),
            (c = Do()),
            ((a = Bo('h4')).textContent = 'Static modal'),
            (u = Do()),
            ((s = Bo('p')).innerHTML =
              'They are defined through a <code>Modal</code> component in the template markup. When using static\n  modals the property <code>name</code> it&#39;s mandatory and must be unique.'),
            (l = Do()),
            _i(f.$$.fragment),
            (d = Do()),
            ((p = Bo('h4')).textContent = 'Dynamic modal'),
            (m = Do()),
            ((h = Bo('p')).innerHTML =
              'They are generated at runtime by using <code>show()</code> method. When using dynamic modals you should\n  first define your modal content as a Svelte component.'),
            (v = Do()),
            ((g = Bo('blockquote')).innerHTML =
              '<p>Dynamic modals are useful especially for code splitting or when you need to show multiple modals\n    at the same time (nested modals)</p>'),
            (y = Do()),
            _i(b.$$.fragment),
            ($ = Do()),
            _i(x.$$.fragment);
        },
        m: function (t, O) {
          Fi(n, t, O),
            Mo(t, e, O),
            Mo(t, r, O),
            Mo(t, o, O),
            Mo(t, i, O),
            Mo(t, c, O),
            Mo(t, a, O),
            Mo(t, u, O),
            Mo(t, s, O),
            Mo(t, l, O),
            Fi(f, t, O),
            Mo(t, d, O),
            Mo(t, p, O),
            Mo(t, m, O),
            Mo(t, h, O),
            Mo(t, v, O),
            Mo(t, g, O),
            Mo(t, y, O),
            Fi(b, t, O),
            Mo(t, $, O),
            Fi(x, t, O),
            (w = !0);
        },
        p: uo,
        i: function (t) {
          w ||
            (Si(n.$$.fragment, t),
            Si(f.$$.fragment, t),
            Si(b.$$.fragment, t),
            Si(x.$$.fragment, t),
            (w = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t),
            ki(f.$$.fragment, t),
            ki(b.$$.fragment, t),
            ki(x.$$.fragment, t),
            (w = !1);
        },
        d: function (t) {
          Bi(n, t),
            t && _o(e),
            t && _o(r),
            t && _o(o),
            t && _o(i),
            t && _o(c),
            t && _o(a),
            t && _o(u),
            t && _o(s),
            t && _o(l),
            Bi(f, t),
            t && _o(d),
            t && _o(p),
            t && _o(m),
            t && _o(h),
            t && _o(v),
            t && _o(g),
            t && _o(y),
            Bi(b, t),
            t && _o($),
            Bi(x, t);
        },
      }
    );
  }
  var pm = (function (t) {
    Zt(e, t);
    var n = fm(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, null, dm, vo, {}), r;
    }
    return e;
  })(Ni);
  function mm(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function hm(t) {
    var n, e, r, o, i;
    return {
      c: function () {
        ((n = Bo('p')).innerHTML =
          'Smodale uses <code>svelte/store</code> module for handling the visibility of modals and when\n  supported it also uses <code>ResizeObserver</code> for detecting screen changes.'),
          (e = Do()),
          ((r = Bo('p')).innerHTML =
            'By default when a modal it&#39;s shown will fit the viewport height and width, which could be a common\n  case when on mobile devices however the <code>breakpoints</code> property will allow the definition\n  of some parameters which will style modals on different screen sizes.'),
          (o = Do()),
          ((i = Bo('p')).textContent =
            'Smodale also provides a built-in way for getting back data on modal acceptance or removal.');
      },
      m: function (t, c) {
        Mo(t, n, c), Mo(t, e, c), Mo(t, r, c), Mo(t, o, c), Mo(t, i, c);
      },
      p: uo,
      i: uo,
      o: uo,
      d: function (t) {
        t && _o(n), t && _o(e), t && _o(r), t && _o(o), t && _o(i);
      },
    };
  }
  var vm = (function (t) {
    Zt(e, t);
    var n = mm(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, null, hm, vo, {}), r;
    }
    return e;
  })(Ni);
  function gm(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function ym(t) {
    var n;
    return {
      c: function () {
        (n = Bo('li')).innerHTML =
          '<code>default</code> \n    <div>Slot for the modal content.</div>';
      },
      m: function (t, e) {
        Mo(t, n, e);
      },
      d: function (t) {
        t && _o(n);
      },
    };
  }
  function bm(t) {
    var n, e;
    return (
      (n = new Yp({ props: { $$slots: { default: [ym] }, $$scope: { ctx: t } } })),
      {
        c: function () {
          _i(n.$$.fragment);
        },
        m: function (t, r) {
          Fi(n, t, r), (e = !0);
        },
        p: function (t, e) {
          var r = qr(e, 1)[0],
            o = {};
          1 & r && (o.$$scope = { dirty: r, ctx: t }), n.$set(o);
        },
        i: function (t) {
          e || (Si(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Bi(n, t);
        },
      }
    );
  }
  var $m = (function (t) {
    Zt(e, t);
    var n = gm(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, null, bm, vo, {}), r;
    }
    return e;
  })(Ni);
  function xm(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function wm(t) {
    var n, e, r;
    return {
      c: function () {
        ((n = Bo('button')).textContent = 'Show modal with fade transtion'),
          zo(n, 'class', 'btn btn--accent'),
          zo(n, 'type', 'button');
      },
      m: function (o, i) {
        Mo(o, n, i), e || ((r = Ho(n, 'click', t[0])), (e = !0));
      },
      p: uo,
      i: uo,
      o: uo,
      d: function (t) {
        t && _o(n), (e = !1), r();
      },
    };
  }
  function Om(t) {
    return [
      function () {
        return As.show(Al, null, {
          transition: zi,
          transitionParams: { duration: 200 },
          breakpoints: {
            '32rem': {
              maxWidth: 'var(--max-width-xxs)',
              margin: 'var(--component-padding)',
              borderRadius: 'var(--radius-md)',
              centered: !0,
            },
          },
        });
      },
    ];
  }
  var Sm = (function (t) {
    Zt(e, t);
    var n = xm(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, Om, wm, vo, {}), r;
    }
    return e;
  })(Ni);
  function km(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function Rm(t) {
    var n, e, r;
    return {
      c: function () {
        ((n = Bo('button')).textContent = 'Show modal with blur transtion'),
          zo(n, 'class', 'btn btn--accent'),
          zo(n, 'type', 'button');
      },
      m: function (o, i) {
        Mo(o, n, i), e || ((r = Ho(n, 'click', t[0])), (e = !0));
      },
      p: uo,
      i: uo,
      o: uo,
      d: function (t) {
        t && _o(n), (e = !1), r();
      },
    };
  }
  function Cm(t) {
    return [
      function () {
        return As.show(Al, null, {
          transition: Hi,
          transitionParams: { duration: 300 },
          breakpoints: {
            '32rem': {
              maxWidth: 'var(--max-width-xxs)',
              margin: 'var(--component-padding)',
              borderRadius: 'var(--radius-md)',
              centered: !0,
            },
          },
        });
      },
    ];
  }
  var Em = (function (t) {
    Zt(e, t);
    var n = km(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, Cm, Rm, vo, {}), r;
    }
    return e;
  })(Ni);
  function jm(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function Pm(t) {
    var n, e;
    return (
      (n = new qd({
        props: {
          'data-src': 'demo/components/organisms/SectionTransition/TransitionFadeExample.svelte',
        },
      })),
      {
        c: function () {
          _i(n.$$.fragment);
        },
        m: function (t, r) {
          Fi(n, t, r), (e = !0);
        },
        p: uo,
        i: function (t) {
          e || (Si(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Bi(n, t);
        },
      }
    );
  }
  function Am(t) {
    var n, e;
    return (
      (n = new qd({
        props: {
          'data-src': 'demo/components/organisms/SectionTransition/TransitionBlurExample.svelte',
        },
      })),
      {
        c: function () {
          _i(n.$$.fragment);
        },
        m: function (t, r) {
          Fi(n, t, r), (e = !0);
        },
        p: uo,
        i: function (t) {
          e || (Si(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Bi(n, t);
        },
      }
    );
  }
  function Tm(t) {
    var n, e, r, o, i, c, a, u, s, l;
    return (
      (n = new Sm({})),
      (r = new tp({
        props: {
          class: 'margin-top-sm',
          title: 'Show code',
          $$slots: { default: [Pm] },
          $$scope: { ctx: t },
        },
      })),
      (a = new Em({})),
      (s = new tp({
        props: {
          class: 'margin-top-sm',
          title: 'Show code',
          $$slots: { default: [Am] },
          $$scope: { ctx: t },
        },
      })),
      {
        c: function () {
          _i(n.$$.fragment),
            (e = Do()),
            _i(r.$$.fragment),
            (o = Do()),
            (i = Bo('div')),
            (c = Do()),
            _i(a.$$.fragment),
            (u = Do()),
            _i(s.$$.fragment),
            zo(i, 'class', 'margin-top-sm');
        },
        m: function (t, f) {
          Fi(n, t, f),
            Mo(t, e, f),
            Fi(r, t, f),
            Mo(t, o, f),
            Mo(t, i, f),
            Mo(t, c, f),
            Fi(a, t, f),
            Mo(t, u, f),
            Fi(s, t, f),
            (l = !0);
        },
        p: function (t, n) {
          var e = qr(n, 1)[0],
            o = {};
          1 & e && (o.$$scope = { dirty: e, ctx: t }), r.$set(o);
          var i = {};
          1 & e && (i.$$scope = { dirty: e, ctx: t }), s.$set(i);
        },
        i: function (t) {
          l ||
            (Si(n.$$.fragment, t),
            Si(r.$$.fragment, t),
            Si(a.$$.fragment, t),
            Si(s.$$.fragment, t),
            (l = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t),
            ki(r.$$.fragment, t),
            ki(a.$$.fragment, t),
            ki(s.$$.fragment, t),
            (l = !1);
        },
        d: function (t) {
          Bi(n, t),
            t && _o(e),
            Bi(r, t),
            t && _o(o),
            t && _o(i),
            t && _o(c),
            Bi(a, t),
            t && _o(u),
            Bi(s, t);
        },
      }
    );
  }
  var Lm = (function (t) {
    Zt(e, t);
    var n = jm(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, null, Tm, vo, {}), r;
    }
    return e;
  })(Ni);
  function Mm(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function _m(t) {
    var n, e, r;
    return {
      c: function () {
        ((n = Bo('button')).textContent = 'Show modal with custom breakpoints'),
          zo(n, 'class', 'btn btn--accent'),
          zo(n, 'type', 'button');
      },
      m: function (o, i) {
        Mo(o, n, i), e || ((r = Ho(n, 'click', t[0])), (e = !0));
      },
      p: uo,
      i: uo,
      o: uo,
      d: function (t) {
        t && _o(n), (e = !1), r();
      },
    };
  }
  function Fm(t) {
    return [
      function () {
        return As.show(Al, null, {
          breakpoints: {
            '32rem': {
              centered: !0,
              maxWidth: 'var(--max-width-xxs)',
              margin: 'var(--component-padding)',
              borderRadius: 'var(--radius-md)',
              boxShadow: '7px 7px 20px 0 rgba(0, 0, 0, 0.3)',
            },
            '768px': {
              backdropColor: 'rgba(255, 255, 255, 0.6)',
              boxShadow: '0 0 20px 3px rgba(0, 0, 0, 0.3)',
              maxWidth: 'var(--max-width-xs)',
            },
            '80rem': {
              centered: !1,
              margin: 'var(--component-padding) auto',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: '0 0 20px 3px hsl(7, 87%, 57%, 0.3)',
              maxWidth: '48rem',
            },
          },
        });
      },
    ];
  }
  var Bm = (function (t) {
    Zt(e, t);
    var n = Mm(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, Fm, _m, vo, {}), r;
    }
    return e;
  })(Ni);
  function Im(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function Nm(t) {
    var n, e;
    return (
      (n = new qd({
        props: {
          'data-src': 'demo/components/organisms/SectionBreakpoints/BreakpointsExample.svelte',
        },
      })),
      {
        c: function () {
          _i(n.$$.fragment);
        },
        m: function (t, r) {
          Fi(n, t, r), (e = !0);
        },
        p: uo,
        i: function (t) {
          e || (Si(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Bi(n, t);
        },
      }
    );
  }
  function Dm(t) {
    var n, e, r, o;
    return (
      (n = new Bm({})),
      (r = new tp({
        props: {
          class: 'margin-top-sm',
          title: 'Show code',
          $$slots: { default: [Nm] },
          $$scope: { ctx: t },
        },
      })),
      {
        c: function () {
          _i(n.$$.fragment), (e = Do()), _i(r.$$.fragment);
        },
        m: function (t, i) {
          Fi(n, t, i), Mo(t, e, i), Fi(r, t, i), (o = !0);
        },
        p: function (t, n) {
          var e = qr(n, 1)[0],
            o = {};
          1 & e && (o.$$scope = { dirty: e, ctx: t }), r.$set(o);
        },
        i: function (t) {
          o || (Si(n.$$.fragment, t), Si(r.$$.fragment, t), (o = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t), ki(r.$$.fragment, t), (o = !1);
        },
        d: function (t) {
          Bi(n, t), t && _o(e), Bi(r, t);
        },
      }
    );
  }
  var qm = (function (t) {
    Zt(e, t);
    var n = Im(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, null, Dm, vo, {}), r;
    }
    return e;
  })(Ni);
  function Hm(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function zm(t) {
    var n, e, r, o, i, c, a, u;
    return {
      c: function () {
        (n = Bo('figure')),
          (e = Bo('iframe')),
          (r = Do()),
          (o = Bo('div')),
          (i = Bo('button')),
          (c = Bo('img')),
          zo(e, 'title', Um),
          e.src !== 'https://www.youtube.com/embed/gJ2P6hGwcgo' &&
            zo(e, 'src', 'https://www.youtube.com/embed/gJ2P6hGwcgo'),
          zo(e, 'width', '640'),
          zo(e, 'height', '360'),
          zo(e, 'frameborder', '0'),
          zo(e, 'webkitallowfullscreen', ''),
          zo(e, 'mozallowfullscreen', ''),
          (e.allowFullscreen = !0),
          zo(n, 'class', 'aspect-ratio-16:9 bg-black'),
          zo(c, 'class', 'icon icon--sm'),
          c.src !== sl &&
            zo(
              c,
              'src',
              "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48' height='48' viewBox='0 0 48 48'%3e %3cg transform='translate(0%2c 0)'%3e %3cpolygon points='37.435 7.736 24 21.172 10.565 7.736 7.737 10.564 21.172 24 7.737 37.436 10.565 40.264 24 26.828 37.435 40.264 40.263 37.436 26.828 24 40.263 10.564 37.435 7.736' fill='currentColor' %3e%3c/polygon%3e %3c/g%3e%3c/svg%3e"
            ),
          zo(c, 'alt', 'Close'),
          zo(i, 'class', 'btn btn--subtle padding-xs js-tab-focus radius-full'),
          zo(i, 'type', 'button'),
          zo(o, 'class', 'position-absolute top-md right-md');
      },
      m: function (s, l) {
        Mo(s, n, l),
          Lo(n, e),
          Mo(s, r, l),
          Mo(s, o, l),
          Lo(o, i),
          Lo(i, c),
          a || ((u = Ho(i, 'click', t[2])), (a = !0));
      },
      p: uo,
      d: function (t) {
        t && _o(n), t && _o(r), t && _o(o), (a = !1), u();
      },
    };
  }
  function Wm(t) {
    for (
      var n,
        e,
        r,
        o,
        i,
        c,
        a = [t[0]],
        u = { $$slots: { default: [zm] }, $$scope: { ctx: t } },
        s = 0;
      s < a.length;
      s += 1
    )
      u = lo(u, a[s]);
    return (
      (r = new fs({ props: u })),
      {
        c: function () {
          ((n = Bo('button')).textContent = 'Show modal video'),
            (e = Do()),
            _i(r.$$.fragment),
            zo(n, 'class', 'btn btn--accent'),
            zo(n, 'type', 'button');
        },
        m: function (a, u) {
          Mo(a, n, u),
            Mo(a, e, u),
            Fi(r, a, u),
            (o = !0),
            i || ((c = Ho(n, 'click', t[1])), (i = !0));
        },
        p: function (t, n) {
          var e = qr(n, 1)[0],
            o = 1 & e ? Li(a, [Mi(t[0])]) : {};
          8 & e && (o.$$scope = { dirty: e, ctx: t }), r.$set(o);
        },
        i: function (t) {
          o || (Si(r.$$.fragment, t), (o = !0));
        },
        o: function (t) {
          ki(r.$$.fragment, t), (o = !1);
        },
        d: function (t) {
          t && _o(n), t && _o(e), Bi(r, t), (i = !1), c();
        },
      }
    );
  }
  var Um = 'modal-video';
  function Gm(t) {
    return [
      {
        name: Um,
        backgroundColor: 'transparent',
        margin: 'var(--component-padding)',
        padding: 0,
        borderRadius: 'var(--radius-lg)',
        centered: !0,
        maxWidth: 'var(--max-width-md)',
        height: 'auto',
        clickOutsideToClose: !1,
      },
      function () {
        return As.show(Um);
      },
      function () {
        return As.cancel(Um);
      },
    ];
  }
  var Vm = (function (t) {
    Zt(e, t);
    var n = Hm(e);
    function e(t) {
      var r;
      return J(this, e), Ii(Q((r = n.call(this))), t, Gm, Wm, vo, {}), r;
    }
    return e;
  })(Ni);
  function Ym(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function Km(t) {
    var n, e;
    return (
      (n = new qd({
        props: { 'data-src': 'demo/components/organisms/SectionVideo/VideoExample.svelte' },
      })),
      {
        c: function () {
          _i(n.$$.fragment);
        },
        m: function (t, r) {
          Fi(n, t, r), (e = !0);
        },
        p: uo,
        i: function (t) {
          e || (Si(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Bi(n, t);
        },
      }
    );
  }
  function Xm(t) {
    var n, e, r, o;
    return (
      (n = new Vm({})),
      (r = new tp({
        props: {
          class: 'margin-top-sm',
          title: 'Show code',
          $$slots: { default: [Km] },
          $$scope: { ctx: t },
        },
      })),
      {
        c: function () {
          _i(n.$$.fragment), (e = Do()), _i(r.$$.fragment);
        },
        m: function (t, i) {
          Fi(n, t, i), Mo(t, e, i), Fi(r, t, i), (o = !0);
        },
        p: function (t, n) {
          var e = qr(n, 1)[0],
            o = {};
          1 & e && (o.$$scope = { dirty: e, ctx: t }), r.$set(o);
        },
        i: function (t) {
          o || (Si(n.$$.fragment, t), Si(r.$$.fragment, t), (o = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t), ki(r.$$.fragment, t), (o = !1);
        },
        d: function (t) {
          Bi(n, t), t && _o(e), Bi(r, t);
        },
      }
    );
  }
  var Zm = [
    {
      label: 'Getting started',
      items: [
        { id: 'introduction', label: 'Introduction', component: vm },
        { id: 'installation', label: 'Installation', component: pm },
      ],
    },
    {
      label: 'Component',
      items: [
        { id: 'api', label: 'API', component: lm },
        { id: 'properties', label: 'Properties', component: em },
        { id: 'events', label: 'Events', component: Jp },
        { id: 'slots', label: 'Slots', component: $m },
      ],
    },
    {
      label: 'Examples',
      items: [
        { id: 'centered', label: 'Centered', component: xp },
        { id: 'long-content', label: 'Long content', component: Wp },
        { id: 'nested-modals', label: 'Nested modals', component: op },
        { id: 'transition', label: 'Transition', component: Lm },
        { id: 'breakpoints', label: 'Breakpoints', component: qm },
        {
          id: 'video',
          label: 'Video',
          component: (function (t) {
            Zt(e, t);
            var n = Ym(e);
            function e(t) {
              var r;
              return J(this, e), Ii(Q((r = n.call(this))), t, null, Xm, vo, {}), r;
            }
            return e;
          })(Ni),
        },
      ],
    },
    {
      label: 'Other',
      items: [
        { id: 'troubleshooting', label: 'Troubleshooting', component: Wd },
        { id: 'support', label: 'Support', component: ld },
      ],
    },
  ];
  function Jm(t) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var e,
        r = dr(t);
      if (n) {
        var o = dr(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return lr(this, e);
    };
  }
  function Qm(t, n, e) {
    var r = t.slice();
    return (r[12] = n[e].id), (r[8] = n[e].label), (r[16] = n[e].component), (r[11] = e), r;
  }
  function th(t, n, e) {
    var r = t.slice();
    return (r[8] = n[e].label), (r[9] = n[e].items), (r[11] = e), r;
  }
  function nh(t, n, e) {
    var r = t.slice();
    return (r[12] = n[e].id), (r[8] = n[e].label), (r[14] = e), r;
  }
  function eh(t) {
    var n, e;
    return (
      (n = new Al({})),
      {
        c: function () {
          _i(n.$$.fragment);
        },
        m: function (t, r) {
          Fi(n, t, r), (e = !0);
        },
        i: function (t) {
          e || (Si(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Bi(n, t);
        },
      }
    );
  }
  function rh(t) {
    var n,
      e,
      r,
      o,
      i,
      c,
      a = t[8] + '',
      u = t[16];
    return (
      u && (o = new u({})),
      {
        c: function () {
          (n = Bo('h2')), (e = No(a)), (r = Do()), o && _i(o.$$.fragment), (i = Do());
        },
        m: function (t, a) {
          Mo(t, n, a), Lo(n, e), Mo(t, r, a), o && Fi(o, t, a), Mo(t, i, a), (c = !0);
        },
        p: function (t, n) {
          if (((!c || 1 & n) && a !== (a = t[8] + '') && Uo(e, a), u !== (u = t[16]))) {
            if (o) {
              wi();
              var r = o;
              ki(r.$$.fragment, 1, 0, function () {
                Bi(r, 1);
              }),
                Oi();
            }
            u
              ? (_i((o = new u({})).$$.fragment), Si(o.$$.fragment, 1), Fi(o, i.parentNode, i))
              : (o = null);
          }
        },
        i: function (t) {
          c || (o && Si(o.$$.fragment, t), (c = !0));
        },
        o: function (t) {
          o && ki(o.$$.fragment, t), (c = !1);
        },
        d: function (t) {
          t && _o(n), t && _o(r), o && Bi(o, t), t && _o(i);
        },
      }
    );
  }
  function oh(t) {
    var n, e;
    return (
      (n = new xf({ props: { id: t[12], $$slots: { default: [rh] }, $$scope: { ctx: t } } })),
      {
        c: function () {
          _i(n.$$.fragment);
        },
        m: function (t, r) {
          Fi(n, t, r), (e = !0);
        },
        p: function (t, e) {
          var r = {};
          1 & e && (r.id = t[12]), 262145 & e && (r.$$scope = { dirty: e, ctx: t }), n.$set(r);
        },
        i: function (t) {
          e || (Si(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Bi(n, t);
        },
      }
    );
  }
  function ih(t) {
    for (
      var n,
        e,
        r,
        o,
        i,
        c,
        a,
        u,
        s,
        l,
        f,
        d,
        p,
        m,
        h,
        v,
        g = [t[1]],
        y = { $$slots: { default: [eh] }, $$scope: { ctx: t } },
        b = 0;
      b < g.length;
      b += 1
    )
      y = lo(y, g[b]);
    (l = new fs({ props: y })).$on('opened', t[3]), l.$on('closed', t[2]);
    for (var $ = t[0], x = [], w = 0; w < $.length; w += 1) x[w] = oh(Qm(t, $, w));
    var O = function (t) {
      return ki(x[t], 1, 1, function () {
        x[t] = null;
      });
    };
    return {
      c: function () {
        (n = Bo('div')),
          (e = Bo('section')),
          ((r = Bo('div')).innerHTML =
            '<h1>Smodale</h1> \n              <p class="text-md color-contrast-medium">A simple, light and highly customizable modal for Svelte</p> \n              <p>Designed with the &quot;Mobile-first&quot; approach for serving static and dynamic modals\n                which are customizable on specific viewport breakpoints</p>'),
          (o = Do()),
          (i = Bo('div')),
          ((c = Bo('button')).textContent = 'Show a static modal'),
          (a = Do()),
          ((u = Bo('button')).textContent = 'Show a dynamic modal'),
          (s = Do()),
          _i(l.$$.fragment),
          (f = Do()),
          (d = Bo('hr')),
          (p = Do());
        for (var t = 0; t < x.length; t += 1) x[t].c();
        zo(r, 'class', 'margin-bottom-md'),
          zo(c, 'type', 'button'),
          zo(c, 'class', 'btn btn--primary'),
          zo(u, 'type', 'button'),
          zo(u, 'class', 'btn btn--accent'),
          zo(i, 'class', 'flex flex-column flex-row@xs gap-xs'),
          zo(n, 'class', 'text-component article');
      },
      m: function (g, y) {
        Mo(g, n, y),
          Lo(n, e),
          Lo(e, r),
          Lo(e, o),
          Lo(e, i),
          Lo(i, c),
          Lo(i, a),
          Lo(i, u),
          Lo(e, s),
          Fi(l, e, null),
          Lo(e, f),
          Lo(e, d),
          Lo(n, p);
        for (var b = 0; b < x.length; b += 1) x[b].m(n, null);
        (m = !0), h || ((v = [Ho(c, 'click', t[4]), Ho(u, 'click', t[5])]), (h = !0));
      },
      p: function (t, e) {
        var r = 2 & e ? Li(g, [Mi(t[1])]) : {};
        if ((262144 & e && (r.$$scope = { dirty: e, ctx: t }), l.$set(r), 1 & e)) {
          var o;
          for ($ = t[0], o = 0; o < $.length; o += 1) {
            var i = Qm(t, $, o);
            x[o]
              ? (x[o].p(i, e), Si(x[o], 1))
              : ((x[o] = oh(i)), x[o].c(), Si(x[o], 1), x[o].m(n, null));
          }
          for (wi(), o = $.length; o < x.length; o += 1) O(o);
          Oi();
        }
      },
      i: function (t) {
        if (!m) {
          Si(l.$$.fragment, t);
          for (var n = 0; n < $.length; n += 1) Si(x[n]);
          m = !0;
        }
      },
      o: function (t) {
        ki(l.$$.fragment, t), (x = x.filter(Boolean));
        for (var n = 0; n < x.length; n += 1) ki(x[n]);
        m = !1;
      },
      d: function (t) {
        t && _o(n), Bi(l), Fo(x, t), (h = !1), mo(v);
      },
    };
  }
  function ch(t) {
    var n,
      e = t[8] + '';
    return {
      c: function () {
        n = No(e);
      },
      m: function (t, e) {
        Mo(t, n, e);
      },
      p: uo,
      d: function (t) {
        t && _o(n);
      },
    };
  }
  function ah(t) {
    var n,
      e = t[8] + '';
    return {
      c: function () {
        n = No(e);
      },
      m: function (t, e) {
        Mo(t, n, e);
      },
      p: uo,
      d: function (t) {
        t && _o(n);
      },
    };
  }
  function uh(t) {
    var n, e;
    return (
      (n = new Qf({
        props: {
          href: '#'.concat(t[12]),
          current: t[15],
          $$slots: { default: [ah] },
          $$scope: { ctx: t },
        },
      })).$on('click', function () {
        ho(t[6](t[7])) && t[6](t[7]).apply(this, arguments);
      }),
      {
        c: function () {
          _i(n.$$.fragment);
        },
        m: function (t, r) {
          Fi(n, t, r), (e = !0);
        },
        p: function (e, r) {
          t = e;
          var o = {};
          32768 & r && (o.current = t[15]),
            262144 & r && (o.$$scope = { dirty: r, ctx: t }),
            n.$set(o);
        },
        i: function (t) {
          e || (Si(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Bi(n, t);
        },
      }
    );
  }
  function sh(t) {
    var n, e;
    return (
      (n = new ad({
        props: {
          id: t[12],
          $$slots: {
            default: [
              uh,
              function (t) {
                return { 15: t.prop };
              },
              function (t) {
                return t.prop ? 32768 : 0;
              },
            ],
          },
          $$scope: { ctx: t },
        },
      })),
      {
        c: function () {
          _i(n.$$.fragment);
        },
        m: function (t, r) {
          Fi(n, t, r), (e = !0);
        },
        p: function (t, e) {
          var r = {};
          295040 & e && (r.$$scope = { dirty: e, ctx: t }), n.$set(r);
        },
        i: function (t) {
          e || (Si(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Bi(n, t);
        },
      }
    );
  }
  function lh(t) {
    for (var n, e, r = t[9], o = [], i = 0; i < r.length; i += 1) o[i] = sh(nh(t, r, i));
    var c = function (t) {
      return ki(o[t], 1, 1, function () {
        o[t] = null;
      });
    };
    return {
      c: function () {
        for (var t = 0; t < o.length; t += 1) o[t].c();
        n = Do();
      },
      m: function (t, r) {
        for (var i = 0; i < o.length; i += 1) o[i].m(t, r);
        Mo(t, n, r), (e = !0);
      },
      p: function (t, e) {
        if (32960 & e) {
          var i;
          for (r = t[9], i = 0; i < r.length; i += 1) {
            var a = nh(t, r, i);
            o[i]
              ? (o[i].p(a, e), Si(o[i], 1))
              : ((o[i] = sh(a)), o[i].c(), Si(o[i], 1), o[i].m(n.parentNode, n));
          }
          for (wi(), i = r.length; i < o.length; i += 1) c(i);
          Oi();
        }
      },
      i: function (t) {
        if (!e) {
          for (var n = 0; n < r.length; n += 1) Si(o[n]);
          e = !0;
        }
      },
      o: function (t) {
        o = o.filter(Boolean);
        for (var n = 0; n < o.length; n += 1) ki(o[n]);
        e = !1;
      },
      d: function (t) {
        Fo(o, t), t && _o(n);
      },
    };
  }
  function fh(t) {
    var n, e, r, o;
    return (
      (n = new kf({ props: { $$slots: { default: [ch] }, $$scope: { ctx: t } } })),
      (r = new jf({ props: { $$slots: { default: [lh] }, $$scope: { ctx: t } } })),
      {
        c: function () {
          _i(n.$$.fragment), (e = Do()), _i(r.$$.fragment);
        },
        m: function (t, i) {
          Fi(n, t, i), Mo(t, e, i), Fi(r, t, i), (o = !0);
        },
        p: function (t, e) {
          var o = {};
          262144 & e && (o.$$scope = { dirty: e, ctx: t }), n.$set(o);
          var i = {};
          262272 & e && (i.$$scope = { dirty: e, ctx: t }), r.$set(i);
        },
        i: function (t) {
          o || (Si(n.$$.fragment, t), Si(r.$$.fragment, t), (o = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t), ki(r.$$.fragment, t), (o = !1);
        },
        d: function (t) {
          Bi(n, t), t && _o(e), Bi(r, t);
        },
      }
    );
  }
  function dh(t) {
    for (var n, e, r = Zm, o = [], i = 0; i < r.length; i += 1) o[i] = fh(th(t, r, i));
    var c = function (t) {
      return ki(o[t], 1, 1, function () {
        o[t] = null;
      });
    };
    return {
      c: function () {
        for (var t = 0; t < o.length; t += 1) o[t].c();
        n = qo();
      },
      m: function (t, r) {
        for (var i = 0; i < o.length; i += 1) o[i].m(t, r);
        Mo(t, n, r), (e = !0);
      },
      p: function (t, e) {
        if (32960 & e) {
          var i;
          for (r = Zm, i = 0; i < r.length; i += 1) {
            var a = th(t, r, i);
            o[i]
              ? (o[i].p(a, e), Si(o[i], 1))
              : ((o[i] = fh(a)), o[i].c(), Si(o[i], 1), o[i].m(n.parentNode, n));
          }
          for (wi(), i = r.length; i < o.length; i += 1) c(i);
          Oi();
        }
      },
      i: function (t) {
        if (!e) {
          for (var n = 0; n < r.length; n += 1) Si(o[n]);
          e = !0;
        }
      },
      o: function (t) {
        o = o.filter(Boolean);
        for (var n = 0; n < o.length; n += 1) ki(o[n]);
        e = !1;
      },
      d: function (t) {
        Fo(o, t), t && _o(n);
      },
    };
  }
  function ph(t) {
    var n, e;
    return (
      (n = new sf({ props: { $$slots: { default: [dh] }, $$scope: { ctx: t } } })),
      {
        c: function () {
          _i(n.$$.fragment);
        },
        m: function (t, r) {
          Fi(n, t, r), (e = !0);
        },
        p: function (t, e) {
          var r = {};
          262272 & e && (r.$$scope = { dirty: e, ctx: t }), n.$set(r);
        },
        i: function (t) {
          e || (Si(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Bi(n, t);
        },
      }
    );
  }
  function mh(t) {
    var n, e;
    return (
      (n = new of({
        props: {
          $$slots: {
            aside: [
              ph,
              function (t) {
                return { 7: t.prop.sidebar };
              },
              function (t) {
                return t.prop ? 128 : 0;
              },
            ],
            default: [
              ih,
              function (t) {
                return { 7: t.prop.sidebar };
              },
              function (t) {
                return t.prop ? 128 : 0;
              },
            ],
          },
          $$scope: { ctx: t },
        },
      })),
      {
        c: function () {
          _i(n.$$.fragment);
        },
        m: function (t, r) {
          Fi(n, t, r), (e = !0);
        },
        p: function (t, e) {
          var r = {};
          262273 & e && (r.$$scope = { dirty: e, ctx: t }), n.$set(r);
        },
        i: function (t) {
          e || (Si(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Bi(n, t);
        },
      }
    );
  }
  function hh(t) {
    var n, e, r;
    return (
      (e = new gf({ props: { $$slots: { default: [mh] }, $$scope: { ctx: t } } })),
      {
        c: function () {
          (n = Bo('div')), _i(e.$$.fragment), zo(n, 'class', 'container max-width-adaptive-md');
        },
        m: function (t, o) {
          Mo(t, n, o), Fi(e, n, null), (r = !0);
        },
        p: function (t, n) {
          var r = {};
          262145 & n && (r.$$scope = { dirty: n, ctx: t }), e.$set(r);
        },
        i: function (t) {
          r || (Si(e.$$.fragment, t), (r = !0));
        },
        o: function (t) {
          ki(e.$$.fragment, t), (r = !1);
        },
        d: function (t) {
          t && _o(n), Bi(e);
        },
      }
    );
  }
  function vh(t) {
    var n, e;
    return (
      (n = new Cl({ props: { $$slots: { default: [hh] }, $$scope: { ctx: t } } })),
      {
        c: function () {
          _i(n.$$.fragment);
        },
        m: function (t, r) {
          Fi(n, t, r), (e = !0);
        },
        p: function (t, e) {
          var r = qr(e, 1)[0],
            o = {};
          262145 & r && (o.$$scope = { dirty: r, ctx: t }), n.$set(o);
        },
        i: function (t) {
          e || (Si(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          ki(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Bi(n, t);
        },
      }
    );
  }
  function gh(t, n, e) {
    var r,
      o = {
        name: 'example',
        padding: 'var(--component-padding)',
        transition: zi,
        transitionParams: { duration: 150 },
        breakpoints: {
          '32rem': {
            maxWidth: 'var(--max-width-xxs)',
            margin: 'var(--component-padding)',
            borderRadius: 'var(--radius-md)',
            scrollable: !0,
            centered: !0,
          },
          '48rem': { maxWidth: 'var(--max-width-sm)' },
        },
      },
      i = function () {
        return ul('Event: <code>closed</code>');
      },
      c = function () {
        return ul('Event: <code>opened</code>');
      };
    return (
      e(
        0,
        (r = Zm.reduce(function (t, n) {
          return [].concat(Dr(t), Dr(n.items));
        }, []))
      ),
      [
        r,
        o,
        i,
        c,
        function () {
          return As.show('example')
            .then(function () {
              return (function (t, n) {
                return ul(t, cl(cl({}, n), {}, { type: al.SUCCESS }));
              })('Hide: Confirmed');
            })
            .catch(function (t) {
              return (function (t, n) {
                return ul(t, cl(cl({}, n), {}, { type: al.WARNING }));
              })('Cancel'.concat(t ? ': <code>'.concat(t, '</code>') : ''));
            });
        },
        function () {
          return As.show(Nl, null, o, { closed: i, opened: c });
        },
        function (t) {
          'mobile' === t.layout && t.close();
        },
      ]
    );
  }
  var yh = (function (t) {
      Zt(e, t);
      var n = Jm(e);
      function e(t) {
        var r;
        return J(this, e), Ii(Q((r = n.call(this))), t, gh, vh, vo, {}), r;
      }
      return e;
    })(Ni),
    bh = function () {
      return (window.dataLayer = window.dataLayer || []), dataLayer;
    },
    $h = function () {
      var t = bh();
      t.push.apply(t, arguments);
    };
  return (
    $h('js', new Date()),
    $h('config', 'G-K01G7CKPDV', { anonymize_ip: !0 }),
    new yh({ target: document.body })
  );
})();
//# sourceMappingURL=main.js.map
