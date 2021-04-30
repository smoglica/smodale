var app = (function () {
  'use strict';
  function t(t, n) {
    if (!(t instanceof n)) throw new TypeError('Cannot call a class as a function');
  }
  function n(t) {
    if (void 0 === t)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }
  var e =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {};
  function r(t) {
    var n = { exports: {} };
    return t(n, n.exports), n.exports;
  }
  var o = function (t) {
      return t && t.Math == Math && t;
    },
    i =
      o('object' == typeof globalThis && globalThis) ||
      o('object' == typeof window && window) ||
      o('object' == typeof self && self) ||
      o('object' == typeof e && e) ||
      (function () {
        return this;
      })() ||
      Function('return this')(),
    c = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
    a = !c(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    }),
    u = {}.propertyIsEnumerable,
    s = Object.getOwnPropertyDescriptor,
    l = {
      f:
        s && !u.call({ 1: 2 }, 1)
          ? function (t) {
              var n = s(this, t);
              return !!n && n.enumerable;
            }
          : u,
    },
    f = function (t, n) {
      return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n };
    },
    d = {}.toString,
    p = function (t) {
      return d.call(t).slice(8, -1);
    },
    m = ''.split,
    h = c(function () {
      return !Object('z').propertyIsEnumerable(0);
    })
      ? function (t) {
          return 'String' == p(t) ? m.call(t, '') : Object(t);
        }
      : Object,
    v = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    },
    g = function (t) {
      return h(v(t));
    },
    y = function (t) {
      return 'object' == typeof t ? null !== t : 'function' == typeof t;
    },
    b = function (t, n) {
      if (!y(t)) return t;
      var e, r;
      if (n && 'function' == typeof (e = t.toString) && !y((r = e.call(t)))) return r;
      if ('function' == typeof (e = t.valueOf) && !y((r = e.call(t)))) return r;
      if (!n && 'function' == typeof (e = t.toString) && !y((r = e.call(t)))) return r;
      throw TypeError("Can't convert object to primitive value");
    },
    $ = function (t) {
      return Object(v(t));
    },
    x = {}.hasOwnProperty,
    w = function (t, n) {
      return x.call($(t), n);
    },
    O = i.document,
    S = y(O) && y(O.createElement),
    k = function (t) {
      return S ? O.createElement(t) : {};
    },
    R =
      !a &&
      !c(function () {
        return (
          7 !=
          Object.defineProperty(k('div'), 'a', {
            get: function () {
              return 7;
            },
          }).a
        );
      }),
    C = Object.getOwnPropertyDescriptor,
    E = {
      f: a
        ? C
        : function (t, n) {
            if (((t = g(t)), (n = b(n, !0)), R))
              try {
                return C(t, n);
              } catch (t) {}
            if (w(t, n)) return f(!l.f.call(t, n), t[n]);
          },
    },
    j = function (t) {
      if (!y(t)) throw TypeError(String(t) + ' is not an object');
      return t;
    },
    P = Object.defineProperty,
    A = {
      f: a
        ? P
        : function (t, n, e) {
            if ((j(t), (n = b(n, !0)), j(e), R))
              try {
                return P(t, n, e);
              } catch (t) {}
            if ('get' in e || 'set' in e) throw TypeError('Accessors not supported');
            return 'value' in e && (t[n] = e.value), t;
          },
    },
    T = a
      ? function (t, n, e) {
          return A.f(t, n, f(1, e));
        }
      : function (t, n, e) {
          return (t[n] = e), t;
        },
    M = function (t, n) {
      try {
        T(i, t, n);
      } catch (e) {
        i[t] = n;
      }
      return n;
    },
    L = '__core-js_shared__',
    _ = i[L] || M(L, {}),
    F = Function.toString;
  'function' != typeof _.inspectSource &&
    (_.inspectSource = function (t) {
      return F.call(t);
    });
  var B,
    I,
    N,
    D = _.inspectSource,
    q = i.WeakMap,
    H = 'function' == typeof q && /native code/.test(D(q)),
    z = r(function (t) {
      (t.exports = function (t, n) {
        return _[t] || (_[t] = void 0 !== n ? n : {});
      })('versions', []).push({
        version: '3.11.0',
        mode: 'global',
        copyright: '© 2021 Denis Pushkarev (zloirock.ru)',
      });
    }),
    W = 0,
    U = Math.random(),
    G = function (t) {
      return 'Symbol(' + String(void 0 === t ? '' : t) + ')_' + (++W + U).toString(36);
    },
    V = z('keys'),
    Y = function (t) {
      return V[t] || (V[t] = G(t));
    },
    K = {},
    X = 'Object already initialized',
    Z = i.WeakMap;
  if (H) {
    var J = _.state || (_.state = new Z()),
      Q = J.get,
      tt = J.has,
      nt = J.set;
    (B = function (t, n) {
      if (tt.call(J, t)) throw new TypeError(X);
      return (n.facade = t), nt.call(J, t, n), n;
    }),
      (I = function (t) {
        return Q.call(J, t) || {};
      }),
      (N = function (t) {
        return tt.call(J, t);
      });
  } else {
    var et = Y('state');
    (K[et] = !0),
      (B = function (t, n) {
        if (w(t, et)) throw new TypeError(X);
        return (n.facade = t), T(t, et, n), n;
      }),
      (I = function (t) {
        return w(t, et) ? t[et] : {};
      }),
      (N = function (t) {
        return w(t, et);
      });
  }
  var rt,
    ot = {
      set: B,
      get: I,
      has: N,
      enforce: function (t) {
        return N(t) ? I(t) : B(t, {});
      },
      getterFor: function (t) {
        return function (n) {
          var e;
          if (!y(n) || (e = I(n)).type !== t)
            throw TypeError('Incompatible receiver, ' + t + ' required');
          return e;
        };
      },
    },
    it = r(function (t) {
      var n = ot.get,
        e = ot.enforce,
        r = String(String).split('String');
      (t.exports = function (t, n, o, c) {
        var a,
          u = !!c && !!c.unsafe,
          s = !!c && !!c.enumerable,
          l = !!c && !!c.noTargetGet;
        'function' == typeof o &&
          ('string' != typeof n || w(o, 'name') || T(o, 'name', n),
          (a = e(o)).source || (a.source = r.join('string' == typeof n ? n : ''))),
          t !== i
            ? (u ? !l && t[n] && (s = !0) : delete t[n], s ? (t[n] = o) : T(t, n, o))
            : s
            ? (t[n] = o)
            : M(n, o);
      })(Function.prototype, 'toString', function () {
        return ('function' == typeof this && n(this).source) || D(this);
      });
    }),
    ct = i,
    at = function (t) {
      return 'function' == typeof t ? t : void 0;
    },
    ut = function (t, n) {
      return arguments.length < 2
        ? at(ct[t]) || at(i[t])
        : (ct[t] && ct[t][n]) || (i[t] && i[t][n]);
    },
    st = Math.ceil,
    lt = Math.floor,
    ft = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? lt : st)(t);
    },
    dt = Math.min,
    pt = function (t) {
      return t > 0 ? dt(ft(t), 9007199254740991) : 0;
    },
    mt = Math.max,
    ht = Math.min,
    vt = function (t, n) {
      var e = ft(t);
      return e < 0 ? mt(e + n, 0) : ht(e, n);
    },
    gt = function (t) {
      return function (n, e, r) {
        var o,
          i = g(n),
          c = pt(i.length),
          a = vt(r, c);
        if (t && e != e) {
          for (; c > a; ) if ((o = i[a++]) != o) return !0;
        } else for (; c > a; a++) if ((t || a in i) && i[a] === e) return t || a || 0;
        return !t && -1;
      };
    },
    yt = { includes: gt(!0), indexOf: gt(!1) },
    bt = yt.indexOf,
    $t = function (t, n) {
      var e,
        r = g(t),
        o = 0,
        i = [];
      for (e in r) !w(K, e) && w(r, e) && i.push(e);
      for (; n.length > o; ) w(r, (e = n[o++])) && (~bt(i, e) || i.push(e));
      return i;
    },
    xt = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf',
    ],
    wt = xt.concat('length', 'prototype'),
    Ot = {
      f:
        Object.getOwnPropertyNames ||
        function (t) {
          return $t(t, wt);
        },
    },
    St = { f: Object.getOwnPropertySymbols },
    kt =
      ut('Reflect', 'ownKeys') ||
      function (t) {
        var n = Ot.f(j(t)),
          e = St.f;
        return e ? n.concat(e(t)) : n;
      },
    Rt = function (t, n) {
      for (var e = kt(n), r = A.f, o = E.f, i = 0; i < e.length; i++) {
        var c = e[i];
        w(t, c) || r(t, c, o(n, c));
      }
    },
    Ct = /#|\.prototype\./,
    Et = function (t, n) {
      var e = Pt[jt(t)];
      return e == Tt || (e != At && ('function' == typeof n ? c(n) : !!n));
    },
    jt = (Et.normalize = function (t) {
      return String(t).replace(Ct, '.').toLowerCase();
    }),
    Pt = (Et.data = {}),
    At = (Et.NATIVE = 'N'),
    Tt = (Et.POLYFILL = 'P'),
    Mt = Et,
    Lt = E.f,
    _t = function (t, n) {
      var e,
        r,
        o,
        c,
        a,
        u = t.target,
        s = t.global,
        l = t.stat;
      if ((e = s ? i : l ? i[u] || M(u, {}) : (i[u] || {}).prototype))
        for (r in n) {
          if (
            ((c = n[r]),
            (o = t.noTargetGet ? (a = Lt(e, r)) && a.value : e[r]),
            !Mt(s ? r : u + (l ? '.' : '#') + r, t.forced) && void 0 !== o)
          ) {
            if (typeof c == typeof o) continue;
            Rt(c, o);
          }
          (t.sham || (o && o.sham)) && T(c, 'sham', !0), it(e, r, c, t);
        }
    },
    Ft =
      Object.keys ||
      function (t) {
        return $t(t, xt);
      },
    Bt = a
      ? Object.defineProperties
      : function (t, n) {
          j(t);
          for (var e, r = Ft(n), o = r.length, i = 0; o > i; ) A.f(t, (e = r[i++]), n[e]);
          return t;
        },
    It = ut('document', 'documentElement'),
    Nt = Y('IE_PROTO'),
    Dt = function () {},
    qt = function (t) {
      return '<script>' + t + '</' + 'script>';
    },
    Ht = function () {
      try {
        rt = document.domain && new ActiveXObject('htmlfile');
      } catch (t) {}
      var t, n;
      Ht = rt
        ? (function (t) {
            t.write(qt('')), t.close();
            var n = t.parentWindow.Object;
            return (t = null), n;
          })(rt)
        : (((n = k('iframe')).style.display = 'none'),
          It.appendChild(n),
          (n.src = String('javascript:')),
          (t = n.contentWindow.document).open(),
          t.write(qt('document.F=Object')),
          t.close(),
          t.F);
      for (var e = xt.length; e--; ) delete Ht.prototype[xt[e]];
      return Ht();
    };
  K[Nt] = !0;
  var zt =
    Object.create ||
    function (t, n) {
      var e;
      return (
        null !== t
          ? ((Dt.prototype = j(t)), (e = new Dt()), (Dt.prototype = null), (e[Nt] = t))
          : (e = Ht()),
        void 0 === n ? e : Bt(e, n)
      );
    };
  _t({ target: 'Object', stat: !0, sham: !a }, { create: zt });
  var Wt =
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
              j(e),
              (function (t) {
                if (!y(t) && null !== t)
                  throw TypeError("Can't set " + String(t) + ' as a prototype');
              })(r),
              n ? t.call(e, r) : (e.__proto__ = r),
              e
            );
          };
        })()
      : void 0);
  function Ut(t, n) {
    return (Ut =
      Object.setPrototypeOf ||
      function (t, n) {
        return (t.__proto__ = n), t;
      })(t, n);
  }
  function Gt(t, n) {
    if ('function' != typeof n && null !== n)
      throw new TypeError('Super expression must either be null or a function');
    (t.prototype = Object.create(n && n.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      n && Ut(t, n);
  }
  _t({ target: 'Object', stat: !0 }, { setPrototypeOf: Wt });
  var Vt,
    Yt,
    Kt = 'process' == p(i.process),
    Xt = ut('navigator', 'userAgent') || '',
    Zt = i.process,
    Jt = Zt && Zt.versions,
    Qt = Jt && Jt.v8;
  Qt
    ? (Yt = (Vt = Qt.split('.'))[0] + Vt[1])
    : Xt &&
      (!(Vt = Xt.match(/Edge\/(\d+)/)) || Vt[1] >= 74) &&
      (Vt = Xt.match(/Chrome\/(\d+)/)) &&
      (Yt = Vt[1]);
  var tn = Yt && +Yt,
    nn =
      !!Object.getOwnPropertySymbols &&
      !c(function () {
        return !Symbol.sham && (Kt ? 38 === tn : tn > 37 && tn < 41);
      }),
    en = nn && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
    rn =
      Array.isArray ||
      function (t) {
        return 'Array' == p(t);
      },
    on = Ot.f,
    cn = {}.toString,
    an =
      'object' == typeof window && window && Object.getOwnPropertyNames
        ? Object.getOwnPropertyNames(window)
        : [],
    un = {
      f: function (t) {
        return an && '[object Window]' == cn.call(t)
          ? (function (t) {
              try {
                return on(t);
              } catch (t) {
                return an.slice();
              }
            })(t)
          : on(g(t));
      },
    },
    sn = z('wks'),
    ln = i.Symbol,
    fn = en ? ln : (ln && ln.withoutSetter) || G,
    dn = function (t) {
      return (
        (w(sn, t) && (nn || 'string' == typeof sn[t])) ||
          (nn && w(ln, t) ? (sn[t] = ln[t]) : (sn[t] = fn('Symbol.' + t))),
        sn[t]
      );
    },
    pn = { f: dn },
    mn = A.f,
    hn = function (t) {
      var n = ct.Symbol || (ct.Symbol = {});
      w(n, t) || mn(n, t, { value: pn.f(t) });
    },
    vn = A.f,
    gn = dn('toStringTag'),
    yn = function (t, n, e) {
      t && !w((t = e ? t : t.prototype), gn) && vn(t, gn, { configurable: !0, value: n });
    },
    bn = function (t) {
      if ('function' != typeof t) throw TypeError(String(t) + ' is not a function');
      return t;
    },
    $n = function (t, n, e) {
      if ((bn(t), void 0 === n)) return t;
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
    xn = dn('species'),
    wn = function (t, n) {
      var e;
      return (
        rn(t) &&
          ('function' != typeof (e = t.constructor) || (e !== Array && !rn(e.prototype))
            ? y(e) && null === (e = e[xn]) && (e = void 0)
            : (e = void 0)),
        new (void 0 === e ? Array : e)(0 === n ? 0 : n)
      );
    },
    On = [].push,
    Sn = function (t) {
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
            m = $(u),
            v = h(m),
            g = $n(s, l, 3),
            y = pt(v.length),
            b = 0,
            x = f || wn,
            w = n ? x(u, y) : e || c ? x(u, 0) : void 0;
          y > b;
          b++
        )
          if ((a || b in v) && ((p = g((d = v[b]), b, m)), t))
            if (n) w[b] = p;
            else if (p)
              switch (t) {
                case 3:
                  return !0;
                case 5:
                  return d;
                case 6:
                  return b;
                case 2:
                  On.call(w, d);
              }
            else
              switch (t) {
                case 4:
                  return !1;
                case 7:
                  On.call(w, d);
              }
        return i ? -1 : r || o ? o : w;
      };
    },
    kn = {
      forEach: Sn(0),
      map: Sn(1),
      filter: Sn(2),
      some: Sn(3),
      every: Sn(4),
      find: Sn(5),
      findIndex: Sn(6),
      filterOut: Sn(7),
    },
    Rn = kn.forEach,
    Cn = Y('hidden'),
    En = 'Symbol',
    jn = dn('toPrimitive'),
    Pn = ot.set,
    An = ot.getterFor(En),
    Tn = Object.prototype,
    Mn = i.Symbol,
    Ln = ut('JSON', 'stringify'),
    _n = E.f,
    Fn = A.f,
    Bn = un.f,
    In = l.f,
    Nn = z('symbols'),
    Dn = z('op-symbols'),
    qn = z('string-to-symbol-registry'),
    Hn = z('symbol-to-string-registry'),
    zn = z('wks'),
    Wn = i.QObject,
    Un = !Wn || !Wn.prototype || !Wn.prototype.findChild,
    Gn =
      a &&
      c(function () {
        return (
          7 !=
          zt(
            Fn({}, 'a', {
              get: function () {
                return Fn(this, 'a', { value: 7 }).a;
              },
            })
          ).a
        );
      })
        ? function (t, n, e) {
            var r = _n(Tn, n);
            r && delete Tn[n], Fn(t, n, e), r && t !== Tn && Fn(Tn, n, r);
          }
        : Fn,
    Vn = function (t, n) {
      var e = (Nn[t] = zt(Mn.prototype));
      return Pn(e, { type: En, tag: t, description: n }), a || (e.description = n), e;
    },
    Yn = en
      ? function (t) {
          return 'symbol' == typeof t;
        }
      : function (t) {
          return Object(t) instanceof Mn;
        },
    Kn = function (t, n, e) {
      t === Tn && Kn(Dn, n, e), j(t);
      var r = b(n, !0);
      return (
        j(e),
        w(Nn, r)
          ? (e.enumerable
              ? (w(t, Cn) && t[Cn][r] && (t[Cn][r] = !1), (e = zt(e, { enumerable: f(0, !1) })))
              : (w(t, Cn) || Fn(t, Cn, f(1, {})), (t[Cn][r] = !0)),
            Gn(t, r, e))
          : Fn(t, r, e)
      );
    },
    Xn = function (t, n) {
      j(t);
      var e = g(n),
        r = Ft(e).concat(te(e));
      return (
        Rn(r, function (n) {
          (a && !Zn.call(e, n)) || Kn(t, n, e[n]);
        }),
        t
      );
    },
    Zn = function (t) {
      var n = b(t, !0),
        e = In.call(this, n);
      return (
        !(this === Tn && w(Nn, n) && !w(Dn, n)) &&
        (!(e || !w(this, n) || !w(Nn, n) || (w(this, Cn) && this[Cn][n])) || e)
      );
    },
    Jn = function (t, n) {
      var e = g(t),
        r = b(n, !0);
      if (e !== Tn || !w(Nn, r) || w(Dn, r)) {
        var o = _n(e, r);
        return !o || !w(Nn, r) || (w(e, Cn) && e[Cn][r]) || (o.enumerable = !0), o;
      }
    },
    Qn = function (t) {
      var n = Bn(g(t)),
        e = [];
      return (
        Rn(n, function (t) {
          w(Nn, t) || w(K, t) || e.push(t);
        }),
        e
      );
    },
    te = function (t) {
      var n = t === Tn,
        e = Bn(n ? Dn : g(t)),
        r = [];
      return (
        Rn(e, function (t) {
          !w(Nn, t) || (n && !w(Tn, t)) || r.push(Nn[t]);
        }),
        r
      );
    };
  if (
    (nn ||
      (it(
        (Mn = function () {
          if (this instanceof Mn) throw TypeError('Symbol is not a constructor');
          var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
            n = G(t),
            e = function (t) {
              this === Tn && e.call(Dn, t),
                w(this, Cn) && w(this[Cn], n) && (this[Cn][n] = !1),
                Gn(this, n, f(1, t));
            };
          return a && Un && Gn(Tn, n, { configurable: !0, set: e }), Vn(n, t);
        }).prototype,
        'toString',
        function () {
          return An(this).tag;
        }
      ),
      it(Mn, 'withoutSetter', function (t) {
        return Vn(G(t), t);
      }),
      (l.f = Zn),
      (A.f = Kn),
      (E.f = Jn),
      (Ot.f = un.f = Qn),
      (St.f = te),
      (pn.f = function (t) {
        return Vn(dn(t), t);
      }),
      a &&
        (Fn(Mn.prototype, 'description', {
          configurable: !0,
          get: function () {
            return An(this).description;
          },
        }),
        it(Tn, 'propertyIsEnumerable', Zn, { unsafe: !0 }))),
    _t({ global: !0, wrap: !0, forced: !nn, sham: !nn }, { Symbol: Mn }),
    Rn(Ft(zn), function (t) {
      hn(t);
    }),
    _t(
      { target: En, stat: !0, forced: !nn },
      {
        for: function (t) {
          var n = String(t);
          if (w(qn, n)) return qn[n];
          var e = Mn(n);
          return (qn[n] = e), (Hn[e] = n), e;
        },
        keyFor: function (t) {
          if (!Yn(t)) throw TypeError(t + ' is not a symbol');
          if (w(Hn, t)) return Hn[t];
        },
        useSetter: function () {
          Un = !0;
        },
        useSimple: function () {
          Un = !1;
        },
      }
    ),
    _t(
      { target: 'Object', stat: !0, forced: !nn, sham: !a },
      {
        create: function (t, n) {
          return void 0 === n ? zt(t) : Xn(zt(t), n);
        },
        defineProperty: Kn,
        defineProperties: Xn,
        getOwnPropertyDescriptor: Jn,
      }
    ),
    _t(
      { target: 'Object', stat: !0, forced: !nn },
      { getOwnPropertyNames: Qn, getOwnPropertySymbols: te }
    ),
    _t(
      {
        target: 'Object',
        stat: !0,
        forced: c(function () {
          St.f(1);
        }),
      },
      {
        getOwnPropertySymbols: function (t) {
          return St.f($(t));
        },
      }
    ),
    Ln)
  ) {
    var ne =
      !nn ||
      c(function () {
        var t = Mn();
        return '[null]' != Ln([t]) || '{}' != Ln({ a: t }) || '{}' != Ln(Object(t));
      });
    _t(
      { target: 'JSON', stat: !0, forced: ne },
      {
        stringify: function (t, n, e) {
          for (var r, o = [t], i = 1; arguments.length > i; ) o.push(arguments[i++]);
          if (((r = n), (y(n) || void 0 !== t) && !Yn(t)))
            return (
              rn(n) ||
                (n = function (t, n) {
                  if (('function' == typeof r && (n = r.call(this, t, n)), !Yn(n))) return n;
                }),
              (o[1] = n),
              Ln.apply(null, o)
            );
        },
      }
    );
  }
  Mn.prototype[jn] || T(Mn.prototype, jn, Mn.prototype.valueOf), yn(Mn, En), (K[Cn] = !0);
  var ee = A.f,
    re = i.Symbol;
  if (
    a &&
    'function' == typeof re &&
    (!('description' in re.prototype) || void 0 !== re().description)
  ) {
    var oe = {},
      ie = function () {
        var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
          n = this instanceof ie ? new re(t) : void 0 === t ? re() : re(t);
        return '' === t && (oe[n] = !0), n;
      };
    Rt(ie, re);
    var ce = (ie.prototype = re.prototype);
    ce.constructor = ie;
    var ae = ce.toString,
      ue = 'Symbol(test)' == String(re('test')),
      se = /^Symbol\((.*)\)[^)]+$/;
    ee(ce, 'description', {
      configurable: !0,
      get: function () {
        var t = y(this) ? this.valueOf() : this,
          n = ae.call(t);
        if (w(oe, t)) return '';
        var e = ue ? n.slice(7, -1) : n.replace(se, '$1');
        return '' === e ? void 0 : e;
      },
    }),
      _t({ global: !0, forced: !0 }, { Symbol: ie });
  }
  var le = {};
  le[dn('toStringTag')] = 'z';
  var fe = '[object z]' === String(le),
    de = dn('toStringTag'),
    pe =
      'Arguments' ==
      p(
        (function () {
          return arguments;
        })()
      ),
    me = fe
      ? p
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
              })((n = Object(t)), de))
            ? e
            : pe
            ? p(n)
            : 'Object' == (r = p(n)) && 'function' == typeof n.callee
            ? 'Arguments'
            : r;
        },
    he = fe
      ? {}.toString
      : function () {
          return '[object ' + me(this) + ']';
        };
  fe || it(Object.prototype, 'toString', he, { unsafe: !0 }), hn('iterator');
  var ve = dn('unscopables'),
    ge = Array.prototype;
  null == ge[ve] && A.f(ge, ve, { configurable: !0, value: zt(null) });
  var ye,
    be,
    $e,
    xe = function (t) {
      ge[ve][t] = !0;
    },
    we = {},
    Oe = !c(function () {
      function t() {}
      return (t.prototype.constructor = null), Object.getPrototypeOf(new t()) !== t.prototype;
    }),
    Se = Y('IE_PROTO'),
    ke = Object.prototype,
    Re = Oe
      ? Object.getPrototypeOf
      : function (t) {
          return (
            (t = $(t)),
            w(t, Se)
              ? t[Se]
              : 'function' == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? ke
              : null
          );
        },
    Ce = dn('iterator'),
    Ee = !1;
  [].keys &&
    ('next' in ($e = [].keys()) ? (be = Re(Re($e))) !== Object.prototype && (ye = be) : (Ee = !0)),
    (null == ye ||
      c(function () {
        var t = {};
        return ye[Ce].call(t) !== t;
      })) &&
      (ye = {}),
    w(ye, Ce) ||
      T(ye, Ce, function () {
        return this;
      });
  var je = { IteratorPrototype: ye, BUGGY_SAFARI_ITERATORS: Ee },
    Pe = je.IteratorPrototype,
    Ae = function () {
      return this;
    },
    Te = je.IteratorPrototype,
    Me = je.BUGGY_SAFARI_ITERATORS,
    Le = dn('iterator'),
    _e = 'keys',
    Fe = 'values',
    Be = 'entries',
    Ie = function () {
      return this;
    },
    Ne = function (t, n, e, r, o, i, c) {
      !(function (t, n, e) {
        var r = n + ' Iterator';
        (t.prototype = zt(Pe, { next: f(1, e) })), yn(t, r, !1), (we[r] = Ae);
      })(e, n, r);
      var a,
        u,
        s,
        l = function (t) {
          if (t === o && v) return v;
          if (!Me && t in m) return m[t];
          switch (t) {
            case _e:
            case Fe:
            case Be:
              return function () {
                return new e(this, t);
              };
          }
          return function () {
            return new e(this);
          };
        },
        d = n + ' Iterator',
        p = !1,
        m = t.prototype,
        h = m[Le] || m['@@iterator'] || (o && m[o]),
        v = (!Me && h) || l(o),
        g = ('Array' == n && m.entries) || h;
      if (
        (g &&
          ((a = Re(g.call(new t()))),
          Te !== Object.prototype &&
            a.next &&
            (Re(a) !== Te && (Wt ? Wt(a, Te) : 'function' != typeof a[Le] && T(a, Le, Ie)),
            yn(a, d, !0))),
        o == Fe &&
          h &&
          h.name !== Fe &&
          ((p = !0),
          (v = function () {
            return h.call(this);
          })),
        m[Le] !== v && T(m, Le, v),
        (we[n] = v),
        o)
      )
        if (((u = { values: l(Fe), keys: i ? v : l(_e), entries: l(Be) }), c))
          for (s in u) (Me || p || !(s in m)) && it(m, s, u[s]);
        else _t({ target: n, proto: !0, forced: Me || p }, u);
      return u;
    },
    De = 'Array Iterator',
    qe = ot.set,
    He = ot.getterFor(De),
    ze = Ne(
      Array,
      'Array',
      function (t, n) {
        qe(this, { type: De, target: g(t), index: 0, kind: n });
      },
      function () {
        var t = He(this),
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
  (we.Arguments = we.Array), xe('keys'), xe('values'), xe('entries');
  var We = function (t) {
      return function (n, e) {
        var r,
          o,
          i = String(v(n)),
          c = ft(e),
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
    Ue = { codeAt: We(!1), charAt: We(!0) },
    Ge = Ue.charAt,
    Ve = 'String Iterator',
    Ye = ot.set,
    Ke = ot.getterFor(Ve);
  Ne(
    String,
    'String',
    function (t) {
      Ye(this, { type: Ve, string: String(t), index: 0 });
    },
    function () {
      var t,
        n = Ke(this),
        e = n.string,
        r = n.index;
      return r >= e.length
        ? { value: void 0, done: !0 }
        : ((t = Ge(e, r)), (n.index += t.length), { value: t, done: !1 });
    }
  );
  var Xe = {
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
    Ze = dn('iterator'),
    Je = dn('toStringTag'),
    Qe = ze.values;
  for (var tr in Xe) {
    var nr = i[tr],
      er = nr && nr.prototype;
    if (er) {
      if (er[Ze] !== Qe)
        try {
          T(er, Ze, Qe);
        } catch (ks) {
          er[Ze] = Qe;
        }
      if ((er[Je] || T(er, Je, tr), Xe[tr]))
        for (var rr in ze)
          if (er[rr] !== ze[rr])
            try {
              T(er, rr, ze[rr]);
            } catch (ks) {
              er[rr] = ze[rr];
            }
    }
  }
  function or(t) {
    return (or =
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
  function ir(t, e) {
    return !e || ('object' !== or(e) && 'function' != typeof e) ? n(t) : e;
  }
  var cr = c(function () {
    Re(1);
  });
  function ar(t) {
    return (ar = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function ur(t, n) {
    (null == n || n > t.length) && (n = t.length);
    for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
    return r;
  }
  _t(
    { target: 'Object', stat: !0, forced: cr, sham: !Oe },
    {
      getPrototypeOf: function (t) {
        return Re($(t));
      },
    }
  ),
    _t({ target: 'Array', stat: !0 }, { isArray: rn });
  var sr = function (t) {
      var n = t.return;
      if (void 0 !== n) return j(n.call(t)).value;
    },
    lr = function (t, n, e, r) {
      try {
        return r ? n(j(e)[0], e[1]) : n(e);
      } catch (n) {
        throw (sr(t), n);
      }
    },
    fr = dn('iterator'),
    dr = Array.prototype,
    pr = function (t) {
      return void 0 !== t && (we.Array === t || dr[fr] === t);
    },
    mr = function (t, n, e) {
      var r = b(n);
      r in t ? A.f(t, r, f(0, e)) : (t[r] = e);
    },
    hr = dn('iterator'),
    vr = function (t) {
      if (null != t) return t[hr] || t['@@iterator'] || we[me(t)];
    },
    gr = dn('iterator'),
    yr = !1;
  try {
    var br = 0,
      $r = {
        next: function () {
          return { done: !!br++ };
        },
        return: function () {
          yr = !0;
        },
      };
    ($r[gr] = function () {
      return this;
    }),
      Array.from($r, function () {
        throw 2;
      });
  } catch (ks) {}
  var xr = function (t, n) {
      if (!n && !yr) return !1;
      var e = !1;
      try {
        var r = {};
        (r[gr] = function () {
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
    wr = !xr(function (t) {
      Array.from(t);
    });
  _t(
    { target: 'Array', stat: !0, forced: wr },
    {
      from: function (t) {
        var n,
          e,
          r,
          o,
          i,
          c,
          a = $(t),
          u = 'function' == typeof this ? this : Array,
          s = arguments.length,
          l = s > 1 ? arguments[1] : void 0,
          f = void 0 !== l,
          d = vr(a),
          p = 0;
        if (
          (f && (l = $n(l, s > 2 ? arguments[2] : void 0, 2)), null == d || (u == Array && pr(d)))
        )
          for (e = new u((n = pt(a.length))); n > p; p++) (c = f ? l(a[p], p) : a[p]), mr(e, p, c);
        else
          for (i = (o = d.call(a)).next, e = new u(); !(r = i.call(o)).done; p++)
            (c = f ? lr(o, l, [r.value, p], !0) : r.value), mr(e, p, c);
        return (e.length = p), e;
      },
    }
  );
  var Or = dn('species'),
    Sr = function (t) {
      return (
        tn >= 51 ||
        !c(function () {
          var n = [];
          return (
            ((n.constructor = {})[Or] = function () {
              return { foo: 1 };
            }),
            1 !== n[t](Boolean).foo
          );
        })
      );
    },
    kr = Sr('slice'),
    Rr = dn('species'),
    Cr = [].slice,
    Er = Math.max;
  _t(
    { target: 'Array', proto: !0, forced: !kr },
    {
      slice: function (t, n) {
        var e,
          r,
          o,
          i = g(this),
          c = pt(i.length),
          a = vt(t, c),
          u = vt(void 0 === n ? c : n, c);
        if (
          rn(i) &&
          ('function' != typeof (e = i.constructor) || (e !== Array && !rn(e.prototype))
            ? y(e) && null === (e = e[Rr]) && (e = void 0)
            : (e = void 0),
          e === Array || void 0 === e)
        )
          return Cr.call(i, a, u);
        for (r = new (void 0 === e ? Array : e)(Er(u - a, 0)), o = 0; a < u; a++, o++)
          a in i && mr(r, o, i[a]);
        return (r.length = o), r;
      },
    }
  );
  var jr = A.f,
    Pr = Function.prototype,
    Ar = Pr.toString,
    Tr = /^\s*function ([^ (]*)/,
    Mr = 'name';
  function Lr(t, n) {
    if (t) {
      if ('string' == typeof t) return ur(t, n);
      var e = Object.prototype.toString.call(t).slice(8, -1);
      return (
        'Object' === e && t.constructor && (e = t.constructor.name),
        'Map' === e || 'Set' === e
          ? Array.from(t)
          : 'Arguments' === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
          ? ur(t, n)
          : void 0
      );
    }
  }
  function _r(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return ur(t);
      })(t) ||
      (function (t) {
        if (('undefined' != typeof Symbol && null != t[Symbol.iterator]) || null != t['@@iterator'])
          return Array.from(t);
      })(t) ||
      Lr(t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()
    );
  }
  function Fr(t, n) {
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
      Lr(t, n) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()
    );
  }
  a &&
    !(Mr in Pr) &&
    jr(Pr, Mr, {
      configurable: !0,
      get: function () {
        try {
          return Ar.call(this).match(Tr)[1];
        } catch (t) {
          return '';
        }
      },
    });
  var Br = kn.filter,
    Ir = Sr('filter');
  _t(
    { target: 'Array', proto: !0, forced: !Ir },
    {
      filter: function (t) {
        return Br(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var Nr = function (t) {
      return function (n, e, r, o) {
        bn(e);
        var i = $(n),
          c = h(i),
          a = pt(i.length),
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
    Dr = function (t, n) {
      var e = [][t];
      return (
        !!e &&
        c(function () {
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
    qr = { left: Nr(!1), right: Nr(!0) }.left,
    Hr = Dr('reduce');
  _t(
    { target: 'Array', proto: !0, forced: !Hr || (!Kt && tn > 79 && tn < 83) },
    {
      reduce: function (t) {
        return qr(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var zr = dn('isConcatSpreadable'),
    Wr = 9007199254740991,
    Ur = 'Maximum allowed index exceeded',
    Gr =
      tn >= 51 ||
      !c(function () {
        var t = [];
        return (t[zr] = !1), t.concat()[0] !== t;
      }),
    Vr = Sr('concat'),
    Yr = function (t) {
      if (!y(t)) return !1;
      var n = t[zr];
      return void 0 !== n ? !!n : rn(t);
    };
  _t(
    { target: 'Array', proto: !0, forced: !Gr || !Vr },
    {
      concat: function (t) {
        var n,
          e,
          r,
          o,
          i,
          c = $(this),
          a = wn(c, 0),
          u = 0;
        for (n = -1, r = arguments.length; n < r; n++)
          if (Yr((i = -1 === n ? c : arguments[n]))) {
            if (u + (o = pt(i.length)) > Wr) throw TypeError(Ur);
            for (e = 0; e < o; e++, u++) e in i && mr(a, u, i[e]);
          } else {
            if (u >= Wr) throw TypeError(Ur);
            mr(a, u++, i);
          }
        return (a.length = u), a;
      },
    }
  );
  var Kr = [].slice,
    Xr = {},
    Zr = function (t, n, e) {
      if (!(n in Xr)) {
        for (var r = [], o = 0; o < n; o++) r[o] = 'a[' + o + ']';
        Xr[n] = Function('C,a', 'return new C(' + r.join(',') + ')');
      }
      return Xr[n](t, e);
    },
    Jr =
      Function.bind ||
      function (t) {
        var n = bn(this),
          e = Kr.call(arguments, 1),
          r = function () {
            var o = e.concat(Kr.call(arguments));
            return this instanceof r ? Zr(n, o.length, o) : n.apply(t, o);
          };
        return y(n.prototype) && (r.prototype = n.prototype), r;
      },
    Qr = ut('Reflect', 'construct'),
    to = c(function () {
      function t() {}
      return !(Qr(function () {}, [], t) instanceof t);
    }),
    no = !c(function () {
      Qr(function () {});
    }),
    eo = to || no;
  function ro() {}
  _t(
    { target: 'Reflect', stat: !0, forced: eo, sham: eo },
    {
      construct: function (t, n) {
        bn(t), j(n);
        var e = arguments.length < 3 ? t : bn(arguments[2]);
        if (no && !to) return Qr(t, n, e);
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
          return r.push.apply(r, n), new (Jr.apply(t, r))();
        }
        var o = e.prototype,
          i = zt(y(o) ? o : Object.prototype),
          c = Function.apply.call(t, i, n);
        return y(c) ? c : i;
      },
    }
  );
  const oo = (t) => t;
  function io(t, n) {
    for (const e in n) t[e] = n[e];
    return t;
  }
  function co(t) {
    return t();
  }
  function ao() {
    return Object.create(null);
  }
  function uo(t) {
    t.forEach(co);
  }
  function so(t) {
    return 'function' == typeof t;
  }
  function lo(t, n) {
    return t != t ? n == n : t !== n || (t && 'object' == typeof t) || 'function' == typeof t;
  }
  function fo(t, ...n) {
    if (null == t) return ro;
    const e = t.subscribe(...n);
    return e.unsubscribe ? () => e.unsubscribe() : e;
  }
  function po(t, n, e) {
    t.$$.on_destroy.push(fo(n, e));
  }
  function mo(t, n, e, r) {
    if (t) {
      const o = ho(t, n, e, r);
      return t[0](o);
    }
  }
  function ho(t, n, e, r) {
    return t[1] && r ? io(e.ctx.slice(), t[1](r(n))) : e.ctx;
  }
  function vo(t, n, e, r, o, i, c) {
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
      const o = ho(n, e, r, c);
      t.p(o, a);
    }
  }
  function go(t) {
    const n = {};
    for (const e in t) '$' !== e[0] && (n[e] = t[e]);
    return n;
  }
  function yo(t, n) {
    const e = {};
    n = new Set(n);
    for (const r in t) n.has(r) || '$' === r[0] || (e[r] = t[r]);
    return e;
  }
  function bo(t) {
    const n = {};
    for (const e in t) n[e] = !0;
    return n;
  }
  function $o(t) {
    return null == t ? '' : t;
  }
  function xo(t) {
    return t && so(t.destroy) ? t.destroy : ro;
  }
  const wo = 'undefined' != typeof window;
  let Oo = wo ? () => window.performance.now() : () => Date.now(),
    So = wo ? (t) => requestAnimationFrame(t) : ro;
  const ko = new Set();
  function Ro(t) {
    ko.forEach((n) => {
      n.c(t) || (ko.delete(n), n.f());
    }),
      0 !== ko.size && So(Ro);
  }
  function Co(t) {
    let n;
    return (
      0 === ko.size && So(Ro),
      {
        promise: new Promise((e) => {
          ko.add((n = { c: t, f: e }));
        }),
        abort() {
          ko.delete(n);
        },
      }
    );
  }
  function Eo(t, n) {
    t.appendChild(n);
  }
  function jo(t, n, e) {
    t.insertBefore(n, e || null);
  }
  function Po(t) {
    t.parentNode.removeChild(t);
  }
  function Ao(t, n) {
    for (let e = 0; e < t.length; e += 1) t[e] && t[e].d(n);
  }
  function To(t) {
    return document.createElement(t);
  }
  function Mo(t) {
    return document.createElementNS('http://www.w3.org/2000/svg', t);
  }
  function Lo(t) {
    return document.createTextNode(t);
  }
  function _o() {
    return Lo(' ');
  }
  function Fo() {
    return Lo('');
  }
  function Bo(t, n, e, r) {
    return t.addEventListener(n, e, r), () => t.removeEventListener(n, e, r);
  }
  function Io(t, n, e) {
    null == e ? t.removeAttribute(n) : t.getAttribute(n) !== e && t.setAttribute(n, e);
  }
  function No(t, n) {
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
        : Io(t, r, n[r]);
  }
  function Do(t, n) {
    (n = '' + n), t.wholeText !== n && (t.data = n);
  }
  function qo(t, n, e) {
    t.classList[e ? 'add' : 'remove'](n);
  }
  function Ho(t, n) {
    const e = document.createEvent('CustomEvent');
    return e.initCustomEvent(t, !1, !1, n), e;
  }
  const zo = new Set();
  let Wo,
    Uo = 0;
  function Go(t, n, e, r, o, i, c, a = 0) {
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
    zo.add(d);
    const p =
        d.__svelte_stylesheet || (d.__svelte_stylesheet = d.head.appendChild(To('style')).sheet),
      m = d.__svelte_rules || (d.__svelte_rules = {});
    m[f] || ((m[f] = !0), p.insertRule(`@keyframes ${f} ${l}`, p.cssRules.length));
    const h = t.style.animation || '';
    return (
      (t.style.animation = `${h ? `${h}, ` : ''}${f} ${r}ms linear ${o}ms 1 both`), (Uo += 1), f
    );
  }
  function Vo(t, n) {
    const e = (t.style.animation || '').split(', '),
      r = e.filter(n ? (t) => t.indexOf(n) < 0 : (t) => -1 === t.indexOf('__svelte')),
      o = e.length - r.length;
    o &&
      ((t.style.animation = r.join(', ')),
      (Uo -= o),
      Uo ||
        So(() => {
          Uo ||
            (zo.forEach((t) => {
              const n = t.__svelte_stylesheet;
              let e = n.cssRules.length;
              for (; e--; ) n.deleteRule(e);
              t.__svelte_rules = {};
            }),
            zo.clear());
        }));
  }
  function Yo(t) {
    Wo = t;
  }
  function Ko() {
    if (!Wo) throw new Error('Function called outside component initialization');
    return Wo;
  }
  function Xo() {
    const t = Ko();
    return (n, e) => {
      const r = t.$$.callbacks[n];
      if (r) {
        const o = Ho(n, e);
        r.slice().forEach((n) => {
          n.call(t, o);
        });
      }
    };
  }
  function Zo(t, n) {
    Ko().$$.context.set(t, n);
  }
  function Jo(t) {
    return Ko().$$.context.get(t);
  }
  function Qo(t, n) {
    const e = t.$$.callbacks[n.type];
    e && e.slice().forEach((t) => t(n));
  }
  const ti = [],
    ni = [],
    ei = [],
    ri = [],
    oi = Promise.resolve();
  let ii = !1;
  function ci() {
    ii || ((ii = !0), oi.then(li));
  }
  function ai(t) {
    ei.push(t);
  }
  let ui = !1;
  const si = new Set();
  function li() {
    if (!ui) {
      ui = !0;
      do {
        for (let t = 0; t < ti.length; t += 1) {
          const n = ti[t];
          Yo(n), fi(n.$$);
        }
        for (Yo(null), ti.length = 0; ni.length; ) ni.pop()();
        for (let t = 0; t < ei.length; t += 1) {
          const n = ei[t];
          si.has(n) || (si.add(n), n());
        }
        ei.length = 0;
      } while (ti.length);
      for (; ri.length; ) ri.pop()();
      (ii = !1), (ui = !1), si.clear();
    }
  }
  function fi(t) {
    if (null !== t.fragment) {
      t.update(), uo(t.before_update);
      const n = t.dirty;
      (t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(ai);
    }
  }
  let di;
  function pi() {
    return (
      di ||
        ((di = Promise.resolve()),
        di.then(() => {
          di = null;
        })),
      di
    );
  }
  function mi(t, n, e) {
    t.dispatchEvent(Ho(`${n ? 'intro' : 'outro'}${e}`));
  }
  const hi = new Set();
  let vi;
  function gi() {
    vi = { r: 0, c: [], p: vi };
  }
  function yi() {
    vi.r || uo(vi.c), (vi = vi.p);
  }
  function bi(t, n) {
    t && t.i && (hi.delete(t), t.i(n));
  }
  function $i(t, n, e, r) {
    if (t && t.o) {
      if (hi.has(t)) return;
      hi.add(t),
        vi.c.push(() => {
          hi.delete(t), r && (e && t.d(1), r());
        }),
        t.o(n);
    }
  }
  const xi = { duration: 0 };
  function wi(t, n, e) {
    let r,
      o,
      i = n(t, e),
      c = !1,
      a = 0;
    function u() {
      r && Vo(t, r);
    }
    function s() {
      const { delay: n = 0, duration: e = 300, easing: s = oo, tick: l = ro, css: f } = i || xi;
      f && (r = Go(t, 0, 1, e, n, s, f, a++)), l(0, 1);
      const d = Oo() + n,
        p = d + e;
      o && o.abort(),
        (c = !0),
        ai(() => mi(t, !0, 'start')),
        (o = Co((n) => {
          if (c) {
            if (n >= p) return l(1, 0), mi(t, !0, 'end'), u(), (c = !1);
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
        l || (Vo(t), so(i) ? ((i = i()), pi().then(s)) : s());
      },
      invalidate() {
        l = !1;
      },
      end() {
        c && (u(), (c = !1));
      },
    };
  }
  function Oi(t, n, e) {
    let r,
      o = n(t, e),
      i = !0;
    const c = vi;
    function a() {
      const { delay: n = 0, duration: e = 300, easing: a = oo, tick: u = ro, css: s } = o || xi;
      s && (r = Go(t, 1, 0, e, n, a, s));
      const l = Oo() + n,
        f = l + e;
      ai(() => mi(t, !1, 'start')),
        Co((n) => {
          if (i) {
            if (n >= f) return u(0, 1), mi(t, !1, 'end'), --c.r || uo(c.c), !1;
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
      so(o)
        ? pi().then(() => {
            (o = o()), a();
          })
        : a(),
      {
        end(n) {
          n && o.tick && o.tick(1, 0), i && (r && Vo(t, r), (i = !1));
        },
      }
    );
  }
  function Si(t, n, e, r) {
    let o = n(t, e),
      i = r ? 0 : 1,
      c = null,
      a = null,
      u = null;
    function s() {
      u && Vo(t, u);
    }
    function l(t, n) {
      const e = t.b - i;
      return (
        (n *= Math.abs(e)),
        { a: i, b: t.b, d: e, duration: n, start: t.start, end: t.start + n, group: t.group }
      );
    }
    function f(n) {
      const { delay: e = 0, duration: r = 300, easing: f = oo, tick: d = ro, css: p } = o || xi,
        m = { start: Oo() + e, b: n };
      n || ((m.group = vi), (vi.r += 1)),
        c || a
          ? (a = m)
          : (p && (s(), (u = Go(t, i, n, r, e, f, p))),
            n && d(0, 1),
            (c = l(m, r)),
            ai(() => mi(t, n, 'start')),
            Co((n) => {
              if (
                (a &&
                  n > a.start &&
                  ((c = l(a, r)),
                  (a = null),
                  mi(t, c.b, 'start'),
                  p && (s(), (u = Go(t, i, c.b, c.duration, 0, f, o.css)))),
                c)
              )
                if (n >= c.end)
                  d((i = c.b), 1 - i),
                    mi(t, c.b, 'end'),
                    a || (c.b ? s() : --c.group.r || uo(c.group.c)),
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
        so(o)
          ? pi().then(() => {
              (o = o()), f(t);
            })
          : f(t);
      },
      end() {
        s(), (c = a = null);
      },
    };
  }
  const ki =
    'undefined' != typeof window ? window : 'undefined' != typeof globalThis ? globalThis : global;
  function Ri(t, n) {
    $i(t, 1, 1, () => {
      n.delete(t.key);
    });
  }
  function Ci(t, n, e, r, o, i, c, a, u, s, l, f) {
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
      bi(t, 1), t.m(a, l), c.set(t.key, t), (l = t.first), p--;
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
  function Ei(t, n) {
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
  function ji(t) {
    return 'object' == typeof t && null !== t ? t : {};
  }
  function Pi(t) {
    t && t.c();
  }
  function Ai(t, n, e, r) {
    const { fragment: o, on_mount: i, on_destroy: c, after_update: a } = t.$$;
    o && o.m(n, e),
      r ||
        ai(() => {
          const n = i.map(co).filter(so);
          c ? c.push(...n) : uo(n), (t.$$.on_mount = []);
        }),
      a.forEach(ai);
  }
  function Ti(t, n) {
    const e = t.$$;
    null !== e.fragment &&
      (uo(e.on_destroy),
      e.fragment && e.fragment.d(n),
      (e.on_destroy = e.fragment = null),
      (e.ctx = []));
  }
  function Mi(t, n, e, r, o, i, c = [-1]) {
    const a = Wo;
    Yo(t);
    const u = (t.$$ = {
      fragment: null,
      ctx: null,
      props: i,
      update: ro,
      not_equal: o,
      bound: ao(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(a ? a.$$.context : n.context || []),
      callbacks: ao(),
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
                    -1 === t.$$.dirty[0] && (ti.push(t), ci(), t.$$.dirty.fill(0)),
                      (t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
                  })(t, n)),
              e
            );
          })
        : []),
      u.update(),
      (s = !0),
      uo(u.before_update),
      (u.fragment = !!r && r(u.ctx)),
      n.target)
    ) {
      if (n.hydrate) {
        const t = (function (t) {
          return Array.from(t.childNodes);
        })(n.target);
        u.fragment && u.fragment.l(t), t.forEach(Po);
      } else u.fragment && u.fragment.c();
      n.intro && bi(t.$$.fragment), Ai(t, n.target, n.anchor, n.customElement), li();
    }
    Yo(a);
  }
  class Li {
    $destroy() {
      Ti(this, 1), (this.$destroy = ro);
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
  function _i(t) {
    return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
  }
  function Fi(t) {
    const n = t - 1;
    return n * n * n + 1;
  }
  function Bi(
    t,
    { delay: n = 0, duration: e = 400, easing: r = _i, amount: o = 5, opacity: i = 0 } = {}
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
  function Ii(t, { delay: n = 0, duration: e = 400, easing: r = oo } = {}) {
    const o = +getComputedStyle(t).opacity;
    return { delay: n, duration: e, easing: r, css: (t) => 'opacity: ' + t * o };
  }
  function Ni(t, { delay: n = 0, duration: e = 400, easing: r = Fi } = {}) {
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
  var Di = c(function () {
    Ft(1);
  });
  _t(
    { target: 'Object', stat: !0, forced: Di },
    {
      keys: function (t) {
        return Ft($(t));
      },
    }
  );
  var qi = E.f,
    Hi = c(function () {
      qi(1);
    });
  _t(
    { target: 'Object', stat: !0, forced: !a || Hi, sham: !a },
    {
      getOwnPropertyDescriptor: function (t, n) {
        return qi(g(t), n);
      },
    }
  ),
    _t(
      { target: 'Object', stat: !0, sham: !a },
      {
        getOwnPropertyDescriptors: function (t) {
          for (var n, e, r = g(t), o = E.f, i = kt(r), c = {}, a = 0; i.length > a; )
            void 0 !== (e = o(r, (n = i[a++]))) && mr(c, n, e);
          return c;
        },
      }
    ),
    _t({ target: 'Object', stat: !0, forced: !a, sham: !a }, { defineProperties: Bt }),
    _t({ target: 'Object', stat: !0, forced: !a, sham: !a }, { defineProperty: A.f });
  var zi,
    Wi,
    Ui,
    Gi = i.Promise,
    Vi = function (t, n, e) {
      for (var r in n) it(t, r, n[r], e);
      return t;
    },
    Yi = dn('species'),
    Ki = function (t) {
      var n = ut(t),
        e = A.f;
      a &&
        n &&
        !n[Yi] &&
        e(n, Yi, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    },
    Xi = function (t, n, e) {
      if (!(t instanceof n)) throw TypeError('Incorrect ' + (e ? e + ' ' : '') + 'invocation');
      return t;
    },
    Zi = function (t, n) {
      (this.stopped = t), (this.result = n);
    },
    Ji = function (t, n, e) {
      var r,
        o,
        i,
        c,
        a,
        u,
        s,
        l = e && e.that,
        f = !(!e || !e.AS_ENTRIES),
        d = !(!e || !e.IS_ITERATOR),
        p = !(!e || !e.INTERRUPTED),
        m = $n(n, l, 1 + f + p),
        h = function (t) {
          return r && sr(r), new Zi(!0, t);
        },
        v = function (t) {
          return f ? (j(t), p ? m(t[0], t[1], h) : m(t[0], t[1])) : p ? m(t, h) : m(t);
        };
      if (d) r = t;
      else {
        if ('function' != typeof (o = vr(t))) throw TypeError('Target is not iterable');
        if (pr(o)) {
          for (i = 0, c = pt(t.length); c > i; i++) if ((a = v(t[i])) && a instanceof Zi) return a;
          return new Zi(!1);
        }
        r = o.call(t);
      }
      for (u = r.next; !(s = u.call(r)).done; ) {
        try {
          a = v(s.value);
        } catch (t) {
          throw (sr(r), t);
        }
        if ('object' == typeof a && a && a instanceof Zi) return a;
      }
      return new Zi(!1);
    },
    Qi = dn('species'),
    tc = function (t, n) {
      var e,
        r = j(t).constructor;
      return void 0 === r || null == (e = j(r)[Qi]) ? n : bn(e);
    },
    nc = /(?:iphone|ipod|ipad).*applewebkit/i.test(Xt),
    ec = i.location,
    rc = i.setImmediate,
    oc = i.clearImmediate,
    ic = i.process,
    cc = i.MessageChannel,
    ac = i.Dispatch,
    uc = 0,
    sc = {},
    lc = 'onreadystatechange',
    fc = function (t) {
      if (sc.hasOwnProperty(t)) {
        var n = sc[t];
        delete sc[t], n();
      }
    },
    dc = function (t) {
      return function () {
        fc(t);
      };
    },
    pc = function (t) {
      fc(t.data);
    },
    mc = function (t) {
      i.postMessage(t + '', ec.protocol + '//' + ec.host);
    };
  (rc && oc) ||
    ((rc = function (t) {
      for (var n = [], e = 1; arguments.length > e; ) n.push(arguments[e++]);
      return (
        (sc[++uc] = function () {
          ('function' == typeof t ? t : Function(t)).apply(void 0, n);
        }),
        zi(uc),
        uc
      );
    }),
    (oc = function (t) {
      delete sc[t];
    }),
    Kt
      ? (zi = function (t) {
          ic.nextTick(dc(t));
        })
      : ac && ac.now
      ? (zi = function (t) {
          ac.now(dc(t));
        })
      : cc && !nc
      ? ((Ui = (Wi = new cc()).port2), (Wi.port1.onmessage = pc), (zi = $n(Ui.postMessage, Ui, 1)))
      : i.addEventListener &&
        'function' == typeof postMessage &&
        !i.importScripts &&
        ec &&
        'file:' !== ec.protocol &&
        !c(mc)
      ? ((zi = mc), i.addEventListener('message', pc, !1))
      : (zi =
          lc in k('script')
            ? function (t) {
                It.appendChild(k('script')).onreadystatechange = function () {
                  It.removeChild(this), fc(t);
                };
              }
            : function (t) {
                setTimeout(dc(t), 0);
              }));
  var hc,
    vc,
    gc,
    yc,
    bc,
    $c,
    xc,
    wc,
    Oc = { set: rc, clear: oc },
    Sc = /web0s(?!.*chrome)/i.test(Xt),
    kc = E.f,
    Rc = Oc.set,
    Cc = i.MutationObserver || i.WebKitMutationObserver,
    Ec = i.document,
    jc = i.process,
    Pc = i.Promise,
    Ac = kc(i, 'queueMicrotask'),
    Tc = Ac && Ac.value;
  Tc ||
    ((hc = function () {
      var t, n;
      for (Kt && (t = jc.domain) && t.exit(); vc; ) {
        (n = vc.fn), (vc = vc.next);
        try {
          n();
        } catch (t) {
          throw (vc ? yc() : (gc = void 0), t);
        }
      }
      (gc = void 0), t && t.enter();
    }),
    nc || Kt || Sc || !Cc || !Ec
      ? Pc && Pc.resolve
        ? ((xc = Pc.resolve(void 0)),
          (wc = xc.then),
          (yc = function () {
            wc.call(xc, hc);
          }))
        : (yc = Kt
            ? function () {
                jc.nextTick(hc);
              }
            : function () {
                Rc.call(i, hc);
              })
      : ((bc = !0),
        ($c = Ec.createTextNode('')),
        new Cc(hc).observe($c, { characterData: !0 }),
        (yc = function () {
          $c.data = bc = !bc;
        })));
  var Mc,
    Lc,
    _c,
    Fc,
    Bc =
      Tc ||
      function (t) {
        var n = { fn: t, next: void 0 };
        gc && (gc.next = n), vc || ((vc = n), yc()), (gc = n);
      },
    Ic = function (t) {
      var n, e;
      (this.promise = new t(function (t, r) {
        if (void 0 !== n || void 0 !== e) throw TypeError('Bad Promise constructor');
        (n = t), (e = r);
      })),
        (this.resolve = bn(n)),
        (this.reject = bn(e));
    },
    Nc = {
      f: function (t) {
        return new Ic(t);
      },
    },
    Dc = function (t, n) {
      if ((j(t), y(n) && n.constructor === t)) return n;
      var e = Nc.f(t);
      return (0, e.resolve)(n), e.promise;
    },
    qc = function (t) {
      try {
        return { error: !1, value: t() };
      } catch (t) {
        return { error: !0, value: t };
      }
    },
    Hc = Oc.set,
    zc = dn('species'),
    Wc = 'Promise',
    Uc = ot.get,
    Gc = ot.set,
    Vc = ot.getterFor(Wc),
    Yc = Gi,
    Kc = i.TypeError,
    Xc = i.document,
    Zc = i.process,
    Jc = ut('fetch'),
    Qc = Nc.f,
    ta = Qc,
    na = !!(Xc && Xc.createEvent && i.dispatchEvent),
    ea = 'function' == typeof PromiseRejectionEvent,
    ra = 'unhandledrejection',
    oa = Mt(Wc, function () {
      if (!(D(Yc) !== String(Yc))) {
        if (66 === tn) return !0;
        if (!Kt && !ea) return !0;
      }
      if (tn >= 51 && /native code/.test(Yc)) return !1;
      var t = Yc.resolve(1),
        n = function (t) {
          t(
            function () {},
            function () {}
          );
        };
      return ((t.constructor = {})[zc] = n), !(t.then(function () {}) instanceof n);
    }),
    ia =
      oa ||
      !xr(function (t) {
        Yc.all(t).catch(function () {});
      }),
    ca = function (t) {
      var n;
      return !(!y(t) || 'function' != typeof (n = t.then)) && n;
    },
    aa = function (t, n) {
      if (!t.notified) {
        t.notified = !0;
        var e = t.reactions;
        Bc(function () {
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
                ? (o || (2 === t.rejection && fa(t), (t.rejection = 1)),
                  !0 === l ? (c = r) : (p && p.enter(), (c = l(r)), p && (p.exit(), (u = !0))),
                  c === s.promise
                    ? d(Kc('Promise-chain cycle'))
                    : (a = ca(c))
                    ? a.call(c, f, d)
                    : f(c))
                : d(r);
            } catch (t) {
              p && !u && p.exit(), d(t);
            }
          }
          (t.reactions = []), (t.notified = !1), n && !t.rejection && sa(t);
        });
      }
    },
    ua = function (t, n, e) {
      var r, o;
      na
        ? (((r = Xc.createEvent('Event')).promise = n),
          (r.reason = e),
          r.initEvent(t, !1, !0),
          i.dispatchEvent(r))
        : (r = { promise: n, reason: e }),
        !ea && (o = i['on' + t])
          ? o(r)
          : t === ra &&
            (function (t, n) {
              var e = i.console;
              e && e.error && (1 === arguments.length ? e.error(t) : e.error(t, n));
            })('Unhandled promise rejection', e);
    },
    sa = function (t) {
      Hc.call(i, function () {
        var n,
          e = t.facade,
          r = t.value;
        if (
          la(t) &&
          ((n = qc(function () {
            Kt ? Zc.emit('unhandledRejection', r, e) : ua(ra, e, r);
          })),
          (t.rejection = Kt || la(t) ? 2 : 1),
          n.error)
        )
          throw n.value;
      });
    },
    la = function (t) {
      return 1 !== t.rejection && !t.parent;
    },
    fa = function (t) {
      Hc.call(i, function () {
        var n = t.facade;
        Kt ? Zc.emit('rejectionHandled', n) : ua('rejectionhandled', n, t.value);
      });
    },
    da = function (t, n, e) {
      return function (r) {
        t(n, r, e);
      };
    },
    pa = function (t, n, e) {
      t.done || ((t.done = !0), e && (t = e), (t.value = n), (t.state = 2), aa(t, !0));
    },
    ma = function (t, n, e) {
      if (!t.done) {
        (t.done = !0), e && (t = e);
        try {
          if (t.facade === n) throw Kc("Promise can't be resolved itself");
          var r = ca(n);
          r
            ? Bc(function () {
                var e = { done: !1 };
                try {
                  r.call(n, da(ma, e, t), da(pa, e, t));
                } catch (n) {
                  pa(e, n, t);
                }
              })
            : ((t.value = n), (t.state = 1), aa(t, !1));
        } catch (n) {
          pa({ done: !1 }, n, t);
        }
      }
    };
  function ha(t, n, e, r, o, i, c) {
    try {
      var a = t[i](c),
        u = a.value;
    } catch (t) {
      return void e(t);
    }
    a.done ? n(u) : Promise.resolve(u).then(r, o);
  }
  function va(t, n, e) {
    return (
      n in t
        ? Object.defineProperty(t, n, { value: e, enumerable: !0, configurable: !0, writable: !0 })
        : (t[n] = e),
      t
    );
  }
  oa &&
    ((Yc = function (t) {
      Xi(this, Yc, Wc), bn(t), Mc.call(this);
      var n = Uc(this);
      try {
        t(da(ma, n), da(pa, n));
      } catch (t) {
        pa(n, t);
      }
    }),
    ((Mc = function (t) {
      Gc(this, {
        type: Wc,
        done: !1,
        notified: !1,
        parent: !1,
        reactions: [],
        rejection: !1,
        state: 0,
        value: void 0,
      });
    }).prototype = Vi(Yc.prototype, {
      then: function (t, n) {
        var e = Vc(this),
          r = Qc(tc(this, Yc));
        return (
          (r.ok = 'function' != typeof t || t),
          (r.fail = 'function' == typeof n && n),
          (r.domain = Kt ? Zc.domain : void 0),
          (e.parent = !0),
          e.reactions.push(r),
          0 != e.state && aa(e, !1),
          r.promise
        );
      },
      catch: function (t) {
        return this.then(void 0, t);
      },
    })),
    (Lc = function () {
      var t = new Mc(),
        n = Uc(t);
      (this.promise = t), (this.resolve = da(ma, n)), (this.reject = da(pa, n));
    }),
    (Nc.f = Qc = function (t) {
      return t === Yc || t === _c ? new Lc(t) : ta(t);
    }),
    'function' == typeof Gi &&
      ((Fc = Gi.prototype.then),
      it(
        Gi.prototype,
        'then',
        function (t, n) {
          var e = this;
          return new Yc(function (t, n) {
            Fc.call(e, t, n);
          }).then(t, n);
        },
        { unsafe: !0 }
      ),
      'function' == typeof Jc &&
        _t(
          { global: !0, enumerable: !0, forced: !0 },
          {
            fetch: function (t) {
              return Dc(Yc, Jc.apply(i, arguments));
            },
          }
        ))),
    _t({ global: !0, wrap: !0, forced: oa }, { Promise: Yc }),
    yn(Yc, Wc, !1),
    Ki(Wc),
    (_c = ut(Wc)),
    _t(
      { target: Wc, stat: !0, forced: oa },
      {
        reject: function (t) {
          var n = Qc(this);
          return n.reject.call(void 0, t), n.promise;
        },
      }
    ),
    _t(
      { target: Wc, stat: !0, forced: oa },
      {
        resolve: function (t) {
          return Dc(this, t);
        },
      }
    ),
    _t(
      { target: Wc, stat: !0, forced: ia },
      {
        all: function (t) {
          var n = this,
            e = Qc(n),
            r = e.resolve,
            o = e.reject,
            i = qc(function () {
              var e = bn(n.resolve),
                i = [],
                c = 0,
                a = 1;
              Ji(t, function (t) {
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
            e = Qc(n),
            r = e.reject,
            o = qc(function () {
              var o = bn(n.resolve);
              Ji(t, function (t) {
                o.call(n, t).then(e.resolve, r);
              });
            });
          return o.error && r(o.value), e.promise;
        },
      }
    );
  var ya = yt.indexOf,
    ba = [].indexOf,
    $a = !!ba && 1 / [1].indexOf(1, -0) < 0,
    xa = Dr('indexOf');
  function wa(t, n) {
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
  _t(
    { target: 'Array', proto: !0, forced: $a || !xa },
    {
      indexOf: function (t) {
        return $a
          ? ba.apply(this, arguments) || 0
          : ya(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  ),
    hn('asyncIterator'),
    hn('toStringTag'),
    yn(i.JSON, 'JSON', !0),
    yn(Math, 'Math', !0);
  var Oa = kn.forEach,
    Sa = Dr('forEach')
      ? [].forEach
      : function (t) {
          return Oa(this, t, arguments.length > 1 ? arguments[1] : void 0);
        };
  _t({ target: 'Array', proto: !0, forced: [].forEach != Sa }, { forEach: Sa });
  var ka = Date.prototype,
    Ra = 'Invalid Date',
    Ca = 'toString',
    Ea = ka.toString,
    ja = ka.getTime;
  new Date(NaN) + '' != Ra &&
    it(ka, Ca, function () {
      var t = ja.call(this);
      return t == t ? Ea.call(this) : Ra;
    });
  var Pa = function () {
      var t = j(this),
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
    Aa = 'toString',
    Ta = RegExp.prototype,
    Ma = Ta.toString,
    La = c(function () {
      return '/a/b' != Ma.call({ source: 'a', flags: 'b' });
    }),
    _a = Ma.name != Aa;
  for (var Fa in ((La || _a) &&
    it(
      RegExp.prototype,
      Aa,
      function () {
        var t = j(this),
          n = String(t.source),
          e = t.flags;
        return (
          '/' +
          n +
          '/' +
          String(void 0 === e && t instanceof RegExp && !('flags' in Ta) ? Pa.call(t) : e)
        );
      },
      { unsafe: !0 }
    ),
  Xe)) {
    var Ba = i[Fa],
      Ia = Ba && Ba.prototype;
    if (Ia && Ia.forEach !== Sa)
      try {
        T(Ia, 'forEach', Sa);
      } catch (ks) {
        Ia.forEach = Sa;
      }
  }
  var Na = [].reverse,
    Da = [1, 2];
  _t(
    { target: 'Array', proto: !0, forced: String(Da) === String(Da.reverse()) },
    {
      reverse: function () {
        return rn(this) && (this.length = this.length), Na.call(this);
      },
    }
  );
  var qa = r(function (t) {
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
              return f && 'object' === or(f) && r.call(f, '__await')
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
    Ha = !c(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    }),
    za = r(function (t) {
      var n = A.f,
        e = G('meta'),
        r = 0,
        o =
          Object.isExtensible ||
          function () {
            return !0;
          },
        i = function (t) {
          n(t, e, { value: { objectID: 'O' + ++r, weakData: {} } });
        },
        c = (t.exports = {
          REQUIRED: !1,
          fastKey: function (t, n) {
            if (!y(t)) return 'symbol' == typeof t ? t : ('string' == typeof t ? 'S' : 'P') + t;
            if (!w(t, e)) {
              if (!o(t)) return 'F';
              if (!n) return 'E';
              i(t);
            }
            return t[e].objectID;
          },
          getWeakData: function (t, n) {
            if (!w(t, e)) {
              if (!o(t)) return !0;
              if (!n) return !1;
              i(t);
            }
            return t[e].weakData;
          },
          onFreeze: function (t) {
            return Ha && c.REQUIRED && o(t) && !w(t, e) && i(t), t;
          },
        });
      K[e] = !0;
    }),
    Wa = za.onFreeze,
    Ua = Object.freeze,
    Ga = c(function () {
      Ua(1);
    });
  _t(
    { target: 'Object', stat: !0, forced: Ga, sham: !Ha },
    {
      freeze: function (t) {
        return Ua && y(t) ? Ua(Wa(t)) : t;
      },
    }
  );
  var Va = l.f,
    Ya = function (t) {
      return function (n) {
        for (var e, r = g(n), o = Ft(r), i = o.length, c = 0, u = []; i > c; )
          (e = o[c++]), (a && !Va.call(r, e)) || u.push(t ? [e, r[e]] : r[e]);
        return u;
      };
    },
    Ka = { entries: Ya(!0), values: Ya(!1) }.entries;
  _t(
    { target: 'Object', stat: !0 },
    {
      entries: function (t) {
        return Ka(t);
      },
    }
  );
  var Xa = kn.findIndex,
    Za = 'findIndex',
    Ja = !0;
  Za in [] &&
    Array(1).findIndex(function () {
      Ja = !1;
    }),
    _t(
      { target: 'Array', proto: !0, forced: Ja },
      {
        findIndex: function (t) {
          return Xa(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
    xe(Za);
  var Qa = [].slice,
    tu = /MSIE .\./.test(Xt),
    nu = function (t) {
      return function (n, e) {
        var r = arguments.length > 2,
          o = r ? Qa.call(arguments, 2) : void 0;
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
  _t(
    { global: !0, bind: !0, forced: tu },
    { setTimeout: nu(i.setTimeout), setInterval: nu(i.setInterval) }
  );
  var eu = kn.find,
    ru = 'find',
    ou = !0;
  ru in [] &&
    Array(1).find(function () {
      ou = !1;
    }),
    _t(
      { target: 'Array', proto: !0, forced: ou },
      {
        find: function (t) {
          return eu(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
    xe(ru);
  var iu = [],
    cu = iu.sort,
    au = c(function () {
      iu.sort(void 0);
    }),
    uu = c(function () {
      iu.sort(null);
    }),
    su = Dr('sort');
  _t(
    { target: 'Array', proto: !0, forced: au || !uu || !su },
    {
      sort: function (t) {
        return void 0 === t ? cu.call($(this)) : cu.call($(this), bn(t));
      },
    }
  );
  var lu = kn.map,
    fu = Sr('map');
  function du(t, n) {
    return RegExp(t, n);
  }
  _t(
    { target: 'Array', proto: !0, forced: !fu },
    {
      map: function (t) {
        return lu(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var pu = {
      UNSUPPORTED_Y: c(function () {
        var t = du('a', 'y');
        return (t.lastIndex = 2), null != t.exec('abcd');
      }),
      BROKEN_CARET: c(function () {
        var t = du('^r', 'gy');
        return (t.lastIndex = 2), null != t.exec('str');
      }),
    },
    mu = RegExp.prototype.exec,
    hu = z('native-string-replace', String.prototype.replace),
    vu = mu,
    gu = (function () {
      var t = /a/,
        n = /b*/g;
      return mu.call(t, 'a'), mu.call(n, 'a'), 0 !== t.lastIndex || 0 !== n.lastIndex;
    })(),
    yu = pu.UNSUPPORTED_Y || pu.BROKEN_CARET,
    bu = void 0 !== /()??/.exec('')[1];
  (gu || bu || yu) &&
    (vu = function (t) {
      var n,
        e,
        r,
        o,
        i = this,
        c = yu && i.sticky,
        a = Pa.call(i),
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
        bu && (e = new RegExp('^' + u + '$(?!\\s)', a)),
        gu && (n = i.lastIndex),
        (r = mu.call(c ? e : i, l)),
        c
          ? r
            ? ((r.input = r.input.slice(s)),
              (r[0] = r[0].slice(s)),
              (r.index = i.lastIndex),
              (i.lastIndex += r[0].length))
            : (i.lastIndex = 0)
          : gu && r && (i.lastIndex = i.global ? r.index + r[0].length : n),
        bu &&
          r &&
          r.length > 1 &&
          hu.call(r[0], e, function () {
            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0);
          }),
        r
      );
    });
  var $u = vu;
  _t({ target: 'RegExp', proto: !0, forced: /./.exec !== $u }, { exec: $u });
  var xu = dn('species'),
    wu = !c(function () {
      var t = /./;
      return (
        (t.exec = function () {
          var t = [];
          return (t.groups = { a: '7' }), t;
        }),
        '7' !== ''.replace(t, '$<a>')
      );
    }),
    Ou = '$0' === 'a'.replace(/./, '$0'),
    Su = dn('replace'),
    ku = !!/./[Su] && '' === /./[Su]('a', '$0'),
    Ru = !c(function () {
      var t = /(?:)/,
        n = t.exec;
      t.exec = function () {
        return n.apply(this, arguments);
      };
      var e = 'ab'.split(t);
      return 2 !== e.length || 'a' !== e[0] || 'b' !== e[1];
    }),
    Cu = function (t, n, e, r) {
      var o = dn(t),
        i = !c(function () {
          var n = {};
          return (
            (n[o] = function () {
              return 7;
            }),
            7 != ''[t](n)
          );
        }),
        a =
          i &&
          !c(function () {
            var n = !1,
              e = /a/;
            return (
              'split' === t &&
                (((e = {}).constructor = {}),
                (e.constructor[xu] = function () {
                  return e;
                }),
                (e.flags = ''),
                (e[o] = /./[o])),
              (e.exec = function () {
                return (n = !0), null;
              }),
              e[o](''),
              !n
            );
          });
      if (!i || !a || ('replace' === t && (!wu || !Ou || ku)) || ('split' === t && !Ru)) {
        var u = /./[o],
          s = e(
            o,
            ''[t],
            function (t, n, e, r, o) {
              return n.exec === RegExp.prototype.exec
                ? i && !o
                  ? { done: !0, value: u.call(n, e, r) }
                  : { done: !0, value: t.call(e, n, r) }
                : { done: !1 };
            },
            { REPLACE_KEEPS_$0: Ou, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: ku }
          ),
          l = s[0],
          f = s[1];
        it(String.prototype, t, l),
          it(
            RegExp.prototype,
            o,
            2 == n
              ? function (t, n) {
                  return f.call(t, this, n);
                }
              : function (t) {
                  return f.call(t, this);
                }
          );
      }
      r && T(RegExp.prototype[o], 'sham', !0);
    },
    Eu = Ue.charAt,
    ju = function (t, n, e) {
      return n + (e ? Eu(t, n).length : 1);
    },
    Pu = function (t, n) {
      var e = t.exec;
      if ('function' == typeof e) {
        var r = e.call(t, n);
        if ('object' != typeof r)
          throw TypeError('RegExp exec method returned something other than an Object or null');
        return r;
      }
      if ('RegExp' !== p(t)) throw TypeError('RegExp#exec called on incompatible receiver');
      return $u.call(t, n);
    };
  Cu('match', 1, function (t, n, e) {
    return [
      function (n) {
        var e = v(this),
          r = null == n ? void 0 : n[t];
        return void 0 !== r ? r.call(n, e) : new RegExp(n)[t](String(e));
      },
      function (t) {
        var r = e(n, t, this);
        if (r.done) return r.value;
        var o = j(t),
          i = String(this);
        if (!o.global) return Pu(o, i);
        var c = o.unicode;
        o.lastIndex = 0;
        for (var a, u = [], s = 0; null !== (a = Pu(o, i)); ) {
          var l = String(a[0]);
          (u[s] = l), '' === l && (o.lastIndex = ju(i, pt(o.lastIndex), c)), s++;
        }
        return 0 === s ? null : u;
      },
    ];
  });
  var Au = '\t\n\v\f\r                　\u2028\u2029\ufeff',
    Tu = '[' + Au + ']',
    Mu = RegExp('^' + Tu + Tu + '*'),
    Lu = RegExp(Tu + Tu + '*$'),
    _u = function (t) {
      return function (n) {
        var e = String(v(n));
        return 1 & t && (e = e.replace(Mu, '')), 2 & t && (e = e.replace(Lu, '')), e;
      };
    },
    Fu = { start: _u(1), end: _u(2), trim: _u(3) },
    Bu = Fu.trim,
    Iu = i.parseInt,
    Nu = /^[+-]?0[Xx]/,
    Du =
      8 !== Iu(Au + '08') || 22 !== Iu(Au + '0x16')
        ? function (t, n) {
            var e = Bu(String(t));
            return Iu(e, n >>> 0 || (Nu.test(e) ? 16 : 10));
          }
        : Iu;
  _t({ global: !0, forced: parseInt != Du }, { parseInt: Du });
  var qu = Math.floor,
    Hu = ''.replace,
    zu = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
    Wu = /\$([$&'`]|\d{1,2})/g,
    Uu = function (t, n, e, r, o, i) {
      var c = e + t.length,
        a = r.length,
        u = Wu;
      return (
        void 0 !== o && ((o = $(o)), (u = zu)),
        Hu.call(i, u, function (i, u) {
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
                var f = qu(l / 10);
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
    Gu = Math.max,
    Vu = Math.min;
  Cu('replace', 2, function (t, n, e, r) {
    var o = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
      i = r.REPLACE_KEEPS_$0,
      c = o ? '$' : '$0';
    return [
      function (e, r) {
        var o = v(this),
          i = null == e ? void 0 : e[t];
        return void 0 !== i ? i.call(e, o, r) : n.call(String(o), e, r);
      },
      function (t, r) {
        if ((!o && i) || ('string' == typeof r && -1 === r.indexOf(c))) {
          var a = e(n, t, this, r);
          if (a.done) return a.value;
        }
        var u = j(t),
          s = String(this),
          l = 'function' == typeof r;
        l || (r = String(r));
        var f = u.global;
        if (f) {
          var d = u.unicode;
          u.lastIndex = 0;
        }
        for (var p = []; ; ) {
          var m = Pu(u, s);
          if (null === m) break;
          if ((p.push(m), !f)) break;
          '' === String(m[0]) && (u.lastIndex = ju(s, pt(u.lastIndex), d));
        }
        for (var h, v = '', g = 0, y = 0; y < p.length; y++) {
          m = p[y];
          for (
            var b = String(m[0]), $ = Gu(Vu(ft(m.index), s.length), 0), x = [], w = 1;
            w < m.length;
            w++
          )
            x.push(void 0 === (h = m[w]) ? h : String(h));
          var O = m.groups;
          if (l) {
            var S = [b].concat(x, $, s);
            void 0 !== O && S.push(O);
            var k = String(r.apply(void 0, S));
          } else k = Uu(b, s, $, x, O, r);
          $ >= g && ((v += s.slice(g, $) + k), (g = $ + b.length));
        }
        return v + s.slice(g);
      },
    ];
  });
  var Yu = yt.includes;
  _t(
    { target: 'Array', proto: !0 },
    {
      includes: function (t) {
        return Yu(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  ),
    xe('includes');
  const Ku = [];
  function Xu(t, n = ro) {
    let e;
    const r = [];
    function o(n) {
      if (lo(t, n) && ((t = n), e)) {
        const n = !Ku.length;
        for (let n = 0; n < r.length; n += 1) {
          const e = r[n];
          e[1](), Ku.push(e, t);
        }
        if (n) {
          for (let t = 0; t < Ku.length; t += 2) Ku[t][0](Ku[t + 1]);
          Ku.length = 0;
        }
      }
    }
    return {
      set: o,
      update: function (n) {
        o(n(t));
      },
      subscribe: function (i, c = ro) {
        const a = [i, c];
        return (
          r.push(a),
          1 === r.length && (e = n(o) || ro),
          i(t),
          () => {
            const t = r.indexOf(a);
            -1 !== t && r.splice(t, 1), 0 === r.length && (e(), (e = null));
          }
        );
      },
    };
  }
  function Zu(t, n) {
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
  function Ju(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = null != arguments[n] ? arguments[n] : {};
      n % 2
        ? Zu(Object(e), !0).forEach(function (n) {
            va(t, n, e[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
        : Zu(Object(e)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
          });
    }
    return t;
  }
  var Qu = Ju(
      Ju({}, Xu({ static: [], dynamic: [] })),
      {},
      {
        getState: function () {
          return (function (t) {
            let n;
            return fo(t, (t) => (n = t))(), n;
          })(this);
        },
      }
    ),
    ts = {
      hide: function () {
        return {};
      },
      cancel: function () {
        return {};
      },
      component: null,
    },
    ns = function () {
      return Jo(ts);
    };
  function es(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function rs(t, n) {
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
  function os(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = null != arguments[n] ? arguments[n] : {};
      n % 2
        ? rs(Object(e), !0).forEach(function (n) {
            va(t, n, e[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
        : rs(Object(e)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
          });
    }
    return t;
  }
  function is(t) {
    var n,
      e,
      r,
      o,
      i,
      c,
      a,
      u,
      s = t[13].default,
      l = mo(s, t, t[12], null);
    return {
      c: function () {
        (n = To('div')),
          (e = To('div')),
          (r = To('div')),
          l && l.c(),
          Io(r, 'class', 'modal__content js-modal__content svelte-190jx0e'),
          Io(r, 'role', 'alertdialog'),
          Io(r, 'aria-expanded', 'true'),
          Io(e, 'class', 'modal__dialog svelte-190jx0e'),
          Io(n, 'class', 'modal ' + t[6] + ' svelte-190jx0e'),
          Io(n, 'data-name', t[3]);
      },
      m: function (i, s) {
        jo(i, n, s),
          Eo(n, e),
          Eo(e, r),
          l && l.m(r, null),
          t[14](r),
          (c = !0),
          a || ((u = xo((o = t[7].call(null, n, { currentBreakpoint: t[1] })))), (a = !0));
      },
      p: function (n, e) {
        (t = n),
          l && l.p && 4096 & e[0] && vo(l, s, t, t[12], e, null, null),
          o && so(o.update) && 2 & e[0] && o.update.call(null, { currentBreakpoint: t[1] });
      },
      i: function (e) {
        c ||
          (bi(l, e),
          ai(function () {
            i || (i = Si(n, t[4], t[5], !0)), i.run(1);
          }),
          (c = !0));
      },
      o: function (e) {
        $i(l, e), i || (i = Si(n, t[4], t[5], !1)), i.run(0), (c = !1);
      },
      d: function (e) {
        e && Po(n), l && l.d(e), t[14](null), e && i && i.end(), (a = !1), u();
      },
    };
  }
  function cs(t) {
    var n,
      e,
      r = t[2] && t[8].default && is(t);
    return {
      c: function () {
        r && r.c(), (n = Fo());
      },
      m: function (t, o) {
        r && r.m(t, o), jo(t, n, o), (e = !0);
      },
      p: function (t, e) {
        t[2] && t[8].default
          ? r
            ? (r.p(t, e), 260 & e[0] && bi(r, 1))
            : ((r = is(t)).c(), bi(r, 1), r.m(n.parentNode, n))
          : r &&
            (gi(),
            $i(r, 1, 1, function () {
              r = null;
            }),
            yi());
      },
      i: function (t) {
        e || (bi(r), (e = !0));
      },
      o: function (t) {
        $i(r), (e = !1);
      },
      d: function (t) {
        r && r.d(t), t && Po(n);
      },
    };
  }
  var as = function () {
      return 'ResizeObserver' in window;
    },
    us = Object.freeze({ BACKDROP_CLICK: 'BACKDROP_CLICK', ESC: 'ESC' }),
    ss = function (t, n, e) {
      return e ? t.classList.add(n) : t.classList.remove(n);
    },
    ls = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        e = t;
      Object.entries(n).forEach(function (t) {
        var n = Fr(t, 2),
          r = n[0],
          o = n[1];
        r in e.style && (e.style[r] = o || '');
      });
    };
  function fs(t, n, e) {
    var r,
      o,
      i,
      c,
      a,
      u = this,
      s = [],
      l = yo(n, s);
    po(t, Qu, function (t) {
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
      b = bo(g),
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
      M = void 0 === T || T,
      L = $.focusOnOpen,
      _ = void 0 === L || L,
      F = $.focusTrap,
      B = void 0 === F || F,
      I = $.classes,
      N = void 0 === I ? '' : I,
      D = wa($, [
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
      q = Xo(),
      H = function (t) {
        return o.cancel(x, t);
      },
      z = function (t) {
        t.target.closest('.js-modal__content') || H(us.BACKDROP_CLICK);
      },
      W = function (t) {
        27 !== !t.keyCode && 'Escape' === t.key && H(us.ESC);
      },
      U = function (t) {
        9 !== !t.keyCode &&
          'Tab' === t.key &&
          (p === document.activeElement && t.shiftKey && (t.preventDefault(), m.focus()),
          m !== document.activeElement || t.shiftKey || (t.preventDefault(), p.focus()));
      };
    Zo(ts, {
      hide: function (t) {
        return o.hide(x, t);
      },
      cancel: H,
      component: Ko(),
    });
    var G = function () {
        if (o) {
          var t = c.findIndex(function (t) {
            var n = Fr(t, 1)[0];
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
                        var e = Fr(n, 2);
                        e[0];
                        var r = e[1];
                        return os(os({}, t), r);
                      }, os({ height: 'auto' }, D))
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
        (n = io(io({}, n), go(t))), e(35, (l = yo(n, s))), '$$scope' in t && e(12, (y = t.$$scope));
      }),
      (t.$$.update = function () {
        1024 & t.$$.dirty[0] && e(9, (r = [].concat(_r(a.dynamic), _r(a.static)))),
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
            var n = Fr(t, 2),
              e = n[0],
              r = n[1],
              o = /px|em|rem/,
              i = Fr(e.match(o) || [], 1)[0],
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
            var e = Fr(n, 2),
              r = e[0],
              o = e[1];
            return os(os({}, t), {}, va({}, r, o));
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
            as() ? (n = new ResizeObserver(V)).observe(t) : window.addEventListener('resize', V),
            M && ls(document.body, { overflow: 'hidden' }),
            _ &&
              (!(function (t) {
                var n = _r(
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
                return ((n = qa.mark(function n() {
                  var e, r, o, i, c, a, u, s, l, p, m, h, v, g, y, b;
                  return qa.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), ci(), oi;
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
                            ss(t, 'modal--centered', v),
                            ss(t, 'modal--scrollable', g),
                            ls(t, { zIndex: b, backgroundColor: m }),
                            ls(f, {
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
                      ha(i, r, o, c, a, 'next', t);
                    }
                    function a(t) {
                      ha(i, r, o, c, a, 'throw', t);
                    }
                    c(void 0);
                  });
                })();
                var n;
              },
              destroy: function () {
                q('closed'),
                  M && !r.length && ls(document.body, { overflow: '' }),
                  _ && B && t.removeEventListener('keydown', U),
                  A && t.removeEventListener('click', z),
                  j && window.removeEventListener('keydown', W),
                  as() && n ? n.disconnect() : window.removeEventListener('resize', V);
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
          ni[t ? 'unshift' : 'push'](function () {
            e(0, (f = t));
          });
        },
      ]
    );
  }
  var ds = (function (e) {
      Gt(o, e);
      var r = es(o);
      function o(e) {
        var i;
        return t(this, o), Mi(n((i = r.call(this))), e, fs, cs, lo, {}, [-1, -1]), i;
      }
      return o;
    })(Li),
    ps = function (t, n, e) {
      var r, o;
      return (
        Wt &&
          'function' == typeof (r = n.constructor) &&
          r !== e &&
          y((o = r.prototype)) &&
          o !== e.prototype &&
          Wt(t, o),
        t
      );
    },
    ms = A.f,
    hs = za.fastKey,
    vs = ot.set,
    gs = ot.getterFor;
  function ys(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function bs(t, n, e) {
    var r = t.slice();
    return (r[1] = n[e]), r;
  }
  function $s(t) {
    var n,
      e,
      r,
      o = [t[1].componentProps],
      i = t[1].component;
    function c(t) {
      for (var n = {}, e = 0; e < o.length; e += 1) n = io(n, o[e]);
      return { props: n };
    }
    return (
      i && (n = new i(c())),
      {
        c: function () {
          n && Pi(n.$$.fragment), (e = _o());
        },
        m: function (t, o) {
          n && Ai(n, t, o), jo(t, e, o), (r = !0);
        },
        p: function (t, r) {
          var a = 1 & r ? Ei(o, [ji(t[1].componentProps)]) : {};
          if (i !== (i = t[1].component)) {
            if (n) {
              gi();
              var u = n;
              $i(u.$$.fragment, 1, 0, function () {
                Ti(u, 1);
              }),
                yi();
            }
            i
              ? (Pi((n = new i(c())).$$.fragment), bi(n.$$.fragment, 1), Ai(n, e.parentNode, e))
              : (n = null);
          } else i && n.$set(a);
        },
        i: function (t) {
          r || (n && bi(n.$$.fragment, t), (r = !0));
        },
        o: function (t) {
          n && $i(n.$$.fragment, t), (r = !1);
        },
        d: function (t) {
          n && Ti(n, t), t && Po(e);
        },
      }
    );
  }
  function xs(t, n) {
    for (
      var e, r, o, i = [n[1].props], c = { $$slots: { default: [$s] }, $$scope: { ctx: n } }, a = 0;
      a < i.length;
      a += 1
    )
      c = io(c, i[a]);
    return (
      (r = new ds({ props: c })).$on('opened', function () {
        so(n[1].events && n[1].events.opened) &&
          (n[1].events && n[1].events.opened).apply(this, arguments);
      }),
      r.$on('closed', function () {
        so(n[1].events && n[1].events.closed) &&
          (n[1].events && n[1].events.closed).apply(this, arguments);
      }),
      {
        key: t,
        first: null,
        c: function () {
          (e = Fo()), Pi(r.$$.fragment), (this.first = e);
        },
        m: function (t, n) {
          jo(t, e, n), Ai(r, t, n), (o = !0);
        },
        p: function (t, e) {
          n = t;
          var o = 1 & e ? Ei(i, [ji(n[1].props)]) : {};
          17 & e && (o.$$scope = { dirty: e, ctx: n }), r.$set(o);
        },
        i: function (t) {
          o || (bi(r.$$.fragment, t), (o = !0));
        },
        o: function (t) {
          $i(r.$$.fragment, t), (o = !1);
        },
        d: function (t) {
          t && Po(e), Ti(r, t);
        },
      }
    );
  }
  function ws(t) {
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
      var u = bs(t, i, a),
        s = c(u);
      o.set(s, (r[a] = xs(s, u)));
    }
    return {
      c: function () {
        n = To('div');
        for (var t = 0; t < r.length; t += 1) r[t].c();
        Io(n, 'class', 'js-modals');
      },
      m: function (t, o) {
        jo(t, n, o);
        for (var i = 0; i < r.length; i += 1) r[i].m(n, null);
        e = !0;
      },
      p: function (t, e) {
        var a = Fr(e, 1)[0];
        1 & a &&
          ((i = t[0].dynamic), gi(), (r = Ci(r, a, c, 1, t, i, o, n, Ri, xs, null, bs)), yi());
      },
      i: function (t) {
        if (!e) {
          for (var n = 0; n < i.length; n += 1) bi(r[n]);
          e = !0;
        }
      },
      o: function (t) {
        for (var n = 0; n < r.length; n += 1) $i(r[n]);
        e = !1;
      },
      d: function (t) {
        t && Po(n);
        for (var e = 0; e < r.length; e += 1) r[e].d();
      },
    };
  }
  function Os(t, n, e) {
    var r;
    return (
      po(t, Qu, function (t) {
        return e(0, (r = t));
      }),
      [r]
    );
  }
  !(function (t, n, e) {
    var r = -1 !== t.indexOf('Map'),
      o = -1 !== t.indexOf('Weak'),
      a = r ? 'set' : 'add',
      u = i[t],
      s = u && u.prototype,
      l = u,
      f = {},
      d = function (t) {
        var n = s[t];
        it(
          s,
          t,
          'add' == t
            ? function (t) {
                return n.call(this, 0 === t ? 0 : t), this;
              }
            : 'delete' == t
            ? function (t) {
                return !(o && !y(t)) && n.call(this, 0 === t ? 0 : t);
              }
            : 'get' == t
            ? function (t) {
                return o && !y(t) ? void 0 : n.call(this, 0 === t ? 0 : t);
              }
            : 'has' == t
            ? function (t) {
                return !(o && !y(t)) && n.call(this, 0 === t ? 0 : t);
              }
            : function (t, e) {
                return n.call(this, 0 === t ? 0 : t, e), this;
              }
        );
      };
    if (
      Mt(
        t,
        'function' != typeof u ||
          !(
            o ||
            (s.forEach &&
              !c(function () {
                new u().entries().next();
              }))
          )
      )
    )
      (l = e.getConstructor(n, t, r, a)), (za.REQUIRED = !0);
    else if (Mt(t, !0)) {
      var p = new l(),
        m = p[a](o ? {} : -0, 1) != p,
        h = c(function () {
          p.has(1);
        }),
        v = xr(function (t) {
          new u(t);
        }),
        g =
          !o &&
          c(function () {
            for (var t = new u(), n = 5; n--; ) t[a](n, n);
            return !t.has(-0);
          });
      v ||
        (((l = n(function (n, e) {
          Xi(n, l, t);
          var o = ps(new u(), n, l);
          return null != e && Ji(e, o[a], { that: o, AS_ENTRIES: r }), o;
        })).prototype = s),
        (s.constructor = l)),
        (h || g) && (d('delete'), d('has'), r && d('get')),
        (g || m) && d(a),
        o && s.clear && delete s.clear;
    }
    (f[t] = l), _t({ global: !0, forced: l != u }, f), yn(l, t), o || e.setStrong(l, t, r);
  })(
    'Map',
    function (t) {
      return function () {
        return t(this, arguments.length ? arguments[0] : void 0);
      };
    },
    {
      getConstructor: function (t, n, e, r) {
        var o = t(function (t, i) {
            Xi(t, o, n),
              vs(t, { type: n, index: zt(null), first: void 0, last: void 0, size: 0 }),
              a || (t.size = 0),
              null != i && Ji(i, t[r], { that: t, AS_ENTRIES: e });
          }),
          i = gs(n),
          c = function (t, n, e) {
            var r,
              o,
              c = i(t),
              s = u(t, n);
            return (
              s
                ? (s.value = e)
                : ((c.last = s = {
                    index: (o = hs(n, !0)),
                    key: n,
                    value: e,
                    previous: (r = c.last),
                    next: void 0,
                    removed: !1,
                  }),
                  c.first || (c.first = s),
                  r && (r.next = s),
                  a ? c.size++ : t.size++,
                  'F' !== o && (c.index[o] = s)),
              t
            );
          },
          u = function (t, n) {
            var e,
              r = i(t),
              o = hs(n);
            if ('F' !== o) return r.index[o];
            for (e = r.first; e; e = e.next) if (e.key == n) return e;
          };
        return (
          Vi(o.prototype, {
            clear: function () {
              for (var t = i(this), n = t.index, e = t.first; e; )
                (e.removed = !0),
                  e.previous && (e.previous = e.previous.next = void 0),
                  delete n[e.index],
                  (e = e.next);
              (t.first = t.last = void 0), a ? (t.size = 0) : (this.size = 0);
            },
            delete: function (t) {
              var n = this,
                e = i(n),
                r = u(n, t);
              if (r) {
                var o = r.next,
                  c = r.previous;
                delete e.index[r.index],
                  (r.removed = !0),
                  c && (c.next = o),
                  o && (o.previous = c),
                  e.first == r && (e.first = o),
                  e.last == r && (e.last = c),
                  a ? e.size-- : n.size--;
              }
              return !!r;
            },
            forEach: function (t) {
              for (
                var n, e = i(this), r = $n(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                (n = n ? n.next : e.first);

              )
                for (r(n.value, n.key, this); n && n.removed; ) n = n.previous;
            },
            has: function (t) {
              return !!u(this, t);
            },
          }),
          Vi(
            o.prototype,
            e
              ? {
                  get: function (t) {
                    var n = u(this, t);
                    return n && n.value;
                  },
                  set: function (t, n) {
                    return c(this, 0 === t ? 0 : t, n);
                  },
                }
              : {
                  add: function (t) {
                    return c(this, (t = 0 === t ? 0 : t), t);
                  },
                }
          ),
          a &&
            ms(o.prototype, 'size', {
              get: function () {
                return i(this).size;
              },
            }),
          o
        );
      },
      setStrong: function (t, n, e) {
        var r = n + ' Iterator',
          o = gs(n),
          i = gs(r);
        Ne(
          t,
          n,
          function (t, n) {
            vs(this, { type: r, target: t, state: o(t), kind: n, last: void 0 });
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
          Ki(n);
      },
    }
  );
  var Ss = (function (e) {
      Gt(o, e);
      var r = ys(o);
      function o(e) {
        var i;
        return t(this, o), Mi(n((i = r.call(this))), e, Os, ws, lo, {}), i;
      }
      return o;
    })(Li),
    ks = function (t) {
      t && console.error('[smodale] '.concat(t));
    };
  function Rs(t, n) {
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
  function Cs(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = null != arguments[n] ? arguments[n] : {};
      n % 2
        ? Rs(Object(e), !0).forEach(function (n) {
            va(t, n, e[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
        : Rs(Object(e)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
          });
    }
    return t;
  }
  var Es = function (t) {
      var n = Qu.getState();
      return [].concat(_r(n.static), _r(n.dynamic)).find(function (n) {
        return n.props.name === t;
      });
    },
    js = function (t, n, e, r, o) {
      Qu.update(function (i) {
        return {
          static: [].concat(_r(i.static), [
            { props: { name: t }, resolve: n, reject: e, hide: r, cancel: o },
          ]),
          dynamic: i.dynamic,
        };
      });
    },
    Ps = function (t, n, e, r, o, i, c, a) {
      document.getElementsByClassName('js-modals')[0] || new Ss({ target: document.body }),
        Qu.update(function (u) {
          var s = (c && c.name) || 'modal';
          return {
            static: u.static,
            dynamic: [].concat(_r(u.dynamic), [
              {
                component: o,
                componentProps: i,
                props: Cs(Cs({}, c), {}, { name: ''.concat(s, '-').concat(u.dynamic.length) }),
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
    As = function (t, n, e) {
      var r = Es(n);
      r &&
        (r[t](e),
        (function (t) {
          Qu.update(function (n) {
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
    Ts = {
      show: function () {
        for (var t = this, n = arguments.length, e = new Array(n), r = 0; r < n; r++)
          e[r] = arguments[r];
        var o = e[0];
        return o
          ? new Promise(function (n, r) {
              if (Es(o)) ks('Name '.concat(o, ' already exists. You must provide an unique one.'));
              else {
                var i = [n, r, t.hide, t.cancel];
                'string' == typeof o
                  ? js.apply(void 0, [o].concat(i))
                  : 'function' == typeof o
                  ? Ps.apply(void 0, i.concat(e))
                  : ks('Invalid name or component');
              }
            })
          : (ks('name missing'), Promise);
      },
      hide: function (t, n) {
        As('resolve', t, n);
      },
      cancel: function (t, n) {
        As('reject', t, n);
      },
    },
    Ms = {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function _s(t) {
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
          n && Pi(n.$$.fragment), (e = Fo());
        },
        m: function (t, o) {
          n && Ai(n, t, o), jo(t, e, o), (r = !0);
        },
        p: function (t, r) {
          var c = Fr(r, 1)[0],
            a = {};
          if (
            (2 & c && (a.notification = t[1]), 4 & c && (a.withoutStyles = t[2]), o !== (o = t[0]))
          ) {
            if (n) {
              gi();
              var u = n;
              $i(u.$$.fragment, 1, 0, function () {
                Ti(u, 1);
              }),
                yi();
            }
            o
              ? (Pi((n = new o(i(t))).$$.fragment), bi(n.$$.fragment, 1), Ai(n, e.parentNode, e))
              : (n = null);
          } else o && n.$set(a);
        },
        i: function (t) {
          r || (n && bi(n.$$.fragment, t), (r = !0));
        },
        o: function (t) {
          n && $i(n.$$.fragment, t), (r = !1);
        },
        d: function (t) {
          t && Po(e), n && Ti(n, t);
        },
      }
    );
  }
  function Fs(t, n, e) {
    var r = n.item,
      o = n.notification,
      i = void 0 === o ? {} : o,
      c = n.withoutStyles,
      a = void 0 !== c && c,
      u = Jo(Ms).removeNotification,
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
      Ko().$$.on_destroy.push(d),
      (t.$$set = function (t) {
        'item' in t && e(0, (r = t.item)),
          'notification' in t && e(1, (i = t.notification)),
          'withoutStyles' in t && e(2, (a = t.withoutStyles));
      }),
      [r, i, a, p]
    );
  }
  var Bs = (function (e) {
    Gt(o, e);
    var r = Ls(o);
    function o(e) {
      var i;
      return (
        t(this, o),
        Mi(n((i = r.call(this))), e, Fs, _s, lo, { item: 0, notification: 1, withoutStyles: 2 }),
        i
      );
    }
    return o;
  })(Li);
  function Is(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Ns(t) {
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
      d = mo(f, t, t[5], null),
      p =
        d ||
        (function (t) {
          var n;
          return {
            c: function () {
              n = Lo(t[1]);
            },
            m: function (t, e) {
              jo(t, n, e);
            },
            p: ro,
            d: function (t) {
              t && Po(n);
            },
          };
        })(t);
    return {
      c: function () {
        (n = To('div')),
          (e = To('div')),
          p && p.c(),
          (r = _o()),
          (o = To('button')),
          (i = Lo('×')),
          Io(e, 'class', $o(t[2]('content')) + ' svelte-max09n'),
          Io(o, 'class', $o(t[2]('button')) + ' svelte-max09n'),
          Io(o, 'aria-label', 'delete notification'),
          Io(n, 'class', $o(t[2]()) + ' svelte-max09n'),
          Io(n, 'role', 'status'),
          Io(n, 'aria-live', 'polite');
      },
      m: function (c, a) {
        jo(c, n, a),
          Eo(n, e),
          p && p.m(e, null),
          Eo(n, r),
          Eo(n, o),
          Eo(o, i),
          (u = !0),
          s ||
            ((l = Bo(o, 'click', function () {
              so(t[0]) && t[0].apply(this, arguments);
            })),
            (s = !0));
      },
      p: function (n, e) {
        var r = Fr(e, 1)[0];
        (t = n), d && d.p && 32 & r && vo(d, f, t, t[5], r, null, null);
      },
      i: function (t) {
        u ||
          (bi(p, t),
          ai(function () {
            a && a.end(1), c || (c = wi(n, Ii, {})), c.start();
          }),
          (u = !0));
      },
      o: function (t) {
        $i(p, t), c && c.invalidate(), (a = Oi(n, Ii, {})), (u = !1);
      },
      d: function (t) {
        t && Po(n), p && p.d(t), t && a && a.end(), (s = !1), l();
      },
    };
  }
  function Ds(t, n, e) {
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
  var qs = (function (e) {
      Gt(o, e);
      var r = Is(o);
      function o(e) {
        var i;
        return (
          t(this, o),
          Mi(n((i = r.call(this))), e, Ds, Ns, lo, {
            notification: 3,
            withoutStyles: 4,
            onRemove: 0,
          }),
          i
        );
      }
      return o;
    })(Li),
    Hs = dn('match'),
    zs = function (t) {
      var n;
      return y(t) && (void 0 !== (n = t[Hs]) ? !!n : 'RegExp' == p(t));
    },
    Ws = function (t) {
      if (zs(t)) throw TypeError("The method doesn't accept regular expressions");
      return t;
    },
    Us = dn('match');
  _t(
    {
      target: 'String',
      proto: !0,
      forced: !(function (t) {
        var n = /./;
        try {
          '/./'[t](n);
        } catch (e) {
          try {
            return (n[Us] = !1), '/./'[t](n);
          } catch (t) {}
        }
        return !1;
      })('includes'),
    },
    {
      includes: function (t) {
        return !!~String(v(this)).indexOf(Ws(t), arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var Gs = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'];
  function Vs(t, n) {
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
  function Ys(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = null != arguments[n] ? arguments[n] : {};
      n % 2
        ? Vs(Object(e), !0).forEach(function (n) {
            va(t, n, e[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
        : Vs(Object(e)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
          });
    }
    return t;
  }
  var Ks = function (t, n) {
      if (
        !(function (t) {
          return !(!t || !t.text || 'string' != typeof t.text || !Gs.includes(t.position));
        })(t)
      )
        throw new Error('Notification object is not valid');
      var e = t.id,
        r = void 0 === e ? new Date().getTime() : e,
        o = t.removeAfter,
        i = void 0 === o ? +t.removeAfter : o,
        c = wa(t, ['id', 'removeAfter']);
      n(function (t) {
        return [].concat(_r(t), [Ys({ id: r, removeAfter: i }, c)]);
      });
    },
    Xs = (function () {
      var t = Xu([]),
        n = t.subscribe,
        e = t.set,
        r = t.update;
      return {
        subscribe: n,
        addNotification: function (t) {
          return Ks(t, r);
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
  function Zs(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Js(t, n, e) {
    var r = t.slice();
    return (r[6] = n[e]), r;
  }
  function Qs(t, n, e) {
    var r = t.slice();
    return (r[9] = n[e]), r;
  }
  function tl(t) {
    var n, e;
    return (
      (n = new Bs({ props: { notification: t[9], withoutStyles: t[1], item: t[0] ? t[0] : qs } })),
      {
        c: function () {
          Pi(n.$$.fragment);
        },
        m: function (t, r) {
          Ai(n, t, r), (e = !0);
        },
        p: function (t, e) {
          var r = {};
          4 & e && (r.notification = t[9]),
            2 & e && (r.withoutStyles = t[1]),
            1 & e && (r.item = t[0] ? t[0] : qs),
            n.$set(r);
        },
        i: function (t) {
          e || (bi(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Ti(n, t);
        },
      }
    );
  }
  function nl(t, n) {
    var e,
      r,
      o,
      i = n[9].position === n[6] && tl(n);
    return {
      key: t,
      first: null,
      c: function () {
        (e = Fo()), i && i.c(), (r = Fo()), (this.first = e);
      },
      m: function (t, n) {
        jo(t, e, n), i && i.m(t, n), jo(t, r, n), (o = !0);
      },
      p: function (t, e) {
        (n = t)[9].position === n[6]
          ? i
            ? (i.p(n, e), 4 & e && bi(i, 1))
            : ((i = tl(n)).c(), bi(i, 1), i.m(r.parentNode, r))
          : i &&
            (gi(),
            $i(i, 1, 1, function () {
              i = null;
            }),
            yi());
      },
      i: function (t) {
        o || (bi(i), (o = !0));
      },
      o: function (t) {
        $i(i), (o = !1);
      },
      d: function (t) {
        t && Po(e), i && i.d(t), t && Po(r);
      },
    };
  }
  function el(t) {
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
      var s = Qs(t, c, u),
        l = a(s);
      i.set(l, (o[u] = nl(l, s)));
    }
    return {
      c: function () {
        n = To('div');
        for (var r = 0; r < o.length; r += 1) o[r].c();
        (e = _o()), Io(n, 'class', $o(t[3](t[6])) + ' svelte-1flixvv');
      },
      m: function (t, i) {
        jo(t, n, i);
        for (var c = 0; c < o.length; c += 1) o[c].m(n, null);
        Eo(n, e), (r = !0);
      },
      p: function (t, r) {
        7 & r && ((c = t[2]), gi(), (o = Ci(o, r, a, 1, t, c, i, n, Ri, nl, e, Qs)), yi());
      },
      i: function (t) {
        if (!r) {
          for (var n = 0; n < c.length; n += 1) bi(o[n]);
          r = !0;
        }
      },
      o: function (t) {
        for (var n = 0; n < o.length; n += 1) $i(o[n]);
        r = !1;
      },
      d: function (t) {
        t && Po(n);
        for (var e = 0; e < o.length; e += 1) o[e].d();
      },
    };
  }
  function rl(t) {
    for (
      var n, e, r, o = t[5].default, i = mo(o, t, t[4], null), c = Gs, a = [], u = 0;
      u < c.length;
      u += 1
    )
      a[u] = el(Js(t, c, u));
    var s = function (t) {
      return $i(a[t], 1, 1, function () {
        a[t] = null;
      });
    };
    return {
      c: function () {
        i && i.c(), (n = _o()), (e = To('div'));
        for (var t = 0; t < a.length; t += 1) a[t].c();
        Io(e, 'class', 'notifications');
      },
      m: function (t, o) {
        i && i.m(t, o), jo(t, n, o), jo(t, e, o);
        for (var c = 0; c < a.length; c += 1) a[c].m(e, null);
        r = !0;
      },
      p: function (t, n) {
        var r = Fr(n, 1)[0];
        if ((i && i.p && 16 & r && vo(i, o, t, t[4], r, null, null), 15 & r)) {
          var u;
          for (c = Gs, u = 0; u < c.length; u += 1) {
            var l = Js(t, c, u);
            a[u]
              ? (a[u].p(l, r), bi(a[u], 1))
              : ((a[u] = el(l)), a[u].c(), bi(a[u], 1), a[u].m(e, null));
          }
          for (gi(), u = c.length; u < a.length; u += 1) s(u);
          yi();
        }
      },
      i: function (t) {
        if (!r) {
          bi(i, t);
          for (var n = 0; n < c.length; n += 1) bi(a[n]);
          r = !0;
        }
      },
      o: function (t) {
        $i(i, t), (a = a.filter(Boolean));
        for (var n = 0; n < a.length; n += 1) $i(a[n]);
        r = !1;
      },
      d: function (t) {
        i && i.d(t), t && Po(n), t && Po(e), Ao(a, t);
      },
    };
  }
  function ol(t, n, e) {
    var r;
    po(t, Xs, function (t) {
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
      Zo(Ms, Xs),
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
  var il = (function (e) {
    Gt(o, e);
    var r = Zs(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, ol, rl, lo, { item: 0, withoutStyles: 1 }), i;
    }
    return o;
  })(Li);
  function cl(t, n) {
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
  function al(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = null != arguments[n] ? arguments[n] : {};
      n % 2
        ? cl(Object(e), !0).forEach(function (n) {
            va(t, n, e[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
        : cl(Object(e)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
          });
    }
    return t;
  }
  var ul = Object.freeze({ SUCCESS: 'success', WARNING: 'warning', DANGER: 'danger' }),
    sl = function (t, n) {
      Xs.addNotification(
        al(al({ removeAfter: 4500, position: 'bottom-center' }, n), {}, { text: t })
      );
    },
    ll =
      "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48' height='48' viewBox='0 0 48 48'%3e %3cg transform='translate(0%2c 0)'%3e %3cpolygon points='37.435 7.736 24 21.172 10.565 7.736 7.737 10.564 21.172 24 7.737 37.436 10.565 40.264 24 26.828 37.435 40.264 40.263 37.436 26.828 24 40.263 10.564 37.435 7.736' fill='currentColor' %3e%3c/polygon%3e %3c/g%3e%3c/svg%3e";
  function fl(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function dl(t) {
    var n;
    return {
      c: function () {
        Io(
          (n = Mo('path')),
          'd',
          'M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M14.658,18.284 c-0.661,0.26-2.952,1.354-4.272,0.191c-0.394-0.346-0.59-0.785-0.59-1.318c0-0.998,0.328-1.868,0.919-3.957 c0.104-0.395,0.231-0.907,0.231-1.313c0-0.701-0.266-0.887-0.987-0.887c-0.352,0-0.742,0.125-1.095,0.257l0.195-0.799 c0.787-0.32,1.775-0.71,2.621-0.71c1.269,0,2.203,0.633,2.203,1.837c0,0.347-0.06,0.955-0.186,1.375l-0.73,2.582 c-0.151,0.522-0.424,1.673-0.001,2.014c0.416,0.337,1.401,0.158,1.887-0.071L14.658,18.284z M13.452,8c-0.828,0-1.5-0.672-1.5-1.5 s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S14.28,8,13.452,8z'
        );
      },
      m: function (t, e) {
        jo(t, n, e);
      },
      d: function (t) {
        t && Po(n);
      },
    };
  }
  function pl(t) {
    var n;
    return {
      c: function () {
        Io(
          (n = Mo('path')),
          'd',
          'M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M13.645,5L13,14h-2l-0.608-9 H13.645z M12,20c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2c1.105,0,2,0.895,2,2C14,19.105,13.105,20,12,20z'
        );
      },
      m: function (t, e) {
        jo(t, n, e);
      },
      d: function (t) {
        t && Po(n);
      },
    };
  }
  function ml(t) {
    var n;
    return {
      c: function () {
        Io(
          (n = Mo('path')),
          'd',
          'M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M13.645,5L13,14h-2l-0.608-9 H13.645z M12,20c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2c1.105,0,2,0.895,2,2C14,19.105,13.105,20,12,20z'
        );
      },
      m: function (t, e) {
        jo(t, n, e);
      },
      d: function (t) {
        t && Po(n);
      },
    };
  }
  function hl(t) {
    var n;
    return {
      c: function () {
        Io(
          (n = Mo('path')),
          'd',
          'M12,0A12,12,0,1,0,24,12,12.035,12.035,0,0,0,12,0ZM10,17.414,4.586,12,6,10.586l4,4,8-8L19.414,8Z'
        );
      },
      m: function (t, e) {
        jo(t, n, e);
      },
      d: function (t) {
        t && Po(n);
      },
    };
  }
  function vl(t) {
    var n, e, r, o, i, c, a, u, s, l, f;
    function d(t, n) {
      return t[0] ? hl : t[1] ? ml : t[2] ? pl : dl;
    }
    var p = d(t),
      m = p(t),
      h = t[6].default,
      v = mo(h, t, t[5], null);
    return {
      c: function () {
        (n = To('div')),
          (e = To('div')),
          (r = To('div')),
          (o = Mo('svg')),
          m.c(),
          (i = _o()),
          v && v.c(),
          (c = _o()),
          (a = To('button')),
          (u = To('img')),
          Io(o, 'class', 'icon icon--sm alert__icon margin-right-sm svelte-xldvxb'),
          Io(o, 'viewBox', '0 0 24 24'),
          Io(o, 'aria-hidden', 'true'),
          Io(r, 'class', 'flex items-center'),
          Io(u, 'class', 'icon block'),
          u.src !== ll &&
            Io(
              u,
              'src',
              "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48' height='48' viewBox='0 0 48 48'%3e %3cg transform='translate(0%2c 0)'%3e %3cpolygon points='37.435 7.736 24 21.172 10.565 7.736 7.737 10.564 21.172 24 7.737 37.436 10.565 40.264 24 26.828 37.435 40.264 40.263 37.436 26.828 24 40.263 10.564 37.435 7.736' fill='currentColor' %3e%3c/polygon%3e %3c/g%3e%3c/svg%3e"
            ),
          Io(u, 'alt', 'Close'),
          Io(a, 'type', 'button'),
          Io(a, 'class', 'reset alert__close-btn margin-left-sm js-tab-focus svelte-xldvxb'),
          Io(e, 'class', 'flex items-center justify-between'),
          Io(n, 'class', 'alert alert--is-visible padding-sm radius-md svelte-xldvxb'),
          Io(n, 'role', 'alert'),
          qo(n, 'alert--success', t[0]),
          qo(n, 'alert--warning', t[1]),
          qo(n, 'alert--danger', t[2]);
      },
      m: function (d, p) {
        jo(d, n, p),
          Eo(n, e),
          Eo(e, r),
          Eo(r, o),
          m.m(o, null),
          Eo(r, i),
          v && v.m(r, null),
          Eo(e, c),
          Eo(e, a),
          Eo(a, u),
          (s = !0),
          l || ((f = Bo(a, 'click', t[3])), (l = !0));
      },
      p: function (t, e) {
        var r = Fr(e, 1)[0];
        p !== (p = d(t)) && (m.d(1), (m = p(t)) && (m.c(), m.m(o, null))),
          v && v.p && 32 & r && vo(v, h, t, t[5], r, null, null),
          1 & r && qo(n, 'alert--success', t[0]),
          2 & r && qo(n, 'alert--warning', t[1]),
          4 & r && qo(n, 'alert--danger', t[2]);
      },
      i: function (t) {
        s || (bi(v, t), (s = !0));
      },
      o: function (t) {
        $i(v, t), (s = !1);
      },
      d: function (t) {
        t && Po(n), m.d(), v && v.d(t), (l = !1), f();
      },
    };
  }
  function gl(t, n, e) {
    var r,
      o,
      i,
      c = n.$$slots,
      a = void 0 === c ? {} : c,
      u = n.$$scope,
      s = n.severity,
      l = Xo();
    return (
      (t.$$set = function (t) {
        'severity' in t && e(4, (s = t.severity)), '$$scope' in t && e(5, (u = t.$$scope));
      }),
      (t.$$.update = function () {
        16 & t.$$.dirty && e(0, (r = s === ul.SUCCESS)),
          16 & t.$$.dirty && e(1, (o = s === ul.WARNING)),
          16 & t.$$.dirty && e(2, (i = s === ul.DANGER));
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
  var yl = (function (e) {
    Gt(o, e);
    var r = fl(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, gl, vl, lo, { severity: 4 }), i;
    }
    return o;
  })(Li);
  function bl(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function $l(t) {
    var n,
      e = t[0].text + '';
    return {
      c: function () {
        Io((n = To('div')), 'class', 'text-sm');
      },
      m: function (t, r) {
        jo(t, n, r), (n.innerHTML = e);
      },
      p: ro,
      d: function (t) {
        t && Po(n);
      },
    };
  }
  function xl(t) {
    var n, e, r, o, i, c;
    return (
      (r = new yl({
        props: {
          severity: null === (n = t[0]) || void 0 === n ? void 0 : n.type,
          $$slots: { default: [$l] },
          $$scope: { ctx: t },
        },
      })).$on('remove', t[1]),
      {
        c: function () {
          (e = To('div')),
            Pi(r.$$.fragment),
            Io(e, 'class', 'margin-sm shadow-sm radius-md'),
            Io(e, 'role', 'status'),
            Io(e, 'aria-live', 'polite');
        },
        m: function (t, n) {
          jo(t, e, n), Ai(r, e, null), (c = !0);
        },
        p: function (t, n) {
          var e = Fr(n, 1)[0],
            o = {};
          8 & e && (o.$$scope = { dirty: e, ctx: t }), r.$set(o);
        },
        i: function (t) {
          c ||
            (bi(r.$$.fragment, t),
            ai(function () {
              i && i.end(1), o || (o = wi(e, Ni, {})), o.start();
            }),
            (c = !0));
        },
        o: function (t) {
          $i(r.$$.fragment, t), o && o.invalidate(), (i = Oi(e, Ni, {})), (c = !1);
        },
        d: function (t) {
          t && Po(e), Ti(r), t && i && i.end();
        },
      }
    );
  }
  function wl(t, n, e) {
    var r = [],
      o = yo(n, r),
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
        (n = io(io({}, n), go(t))), e(2, (o = yo(n, r)));
      }),
      [a, s]
    );
  }
  var Ol = (function (e) {
    Gt(o, e);
    var r = bl(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, wl, xl, lo, {}), i;
    }
    return o;
  })(Li);
  function Sl(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function kl(t) {
    var n,
      e = t[0].default,
      r = mo(e, t, t[1], null);
    return {
      c: function () {
        r && r.c();
      },
      m: function (t, e) {
        r && r.m(t, e), (n = !0);
      },
      p: function (t, n) {
        r && r.p && 2 & n && vo(r, e, t, t[1], n, null, null);
      },
      i: function (t) {
        n || (bi(r, t), (n = !0));
      },
      o: function (t) {
        $i(r, t), (n = !1);
      },
      d: function (t) {
        r && r.d(t);
      },
    };
  }
  function Rl(t) {
    var n, e;
    return (
      (n = new il({ props: { item: Ol, $$slots: { default: [kl] }, $$scope: { ctx: t } } })),
      {
        c: function () {
          Pi(n.$$.fragment);
        },
        m: function (t, r) {
          Ai(n, t, r), (e = !0);
        },
        p: function (t, e) {
          var r = Fr(e, 1)[0],
            o = {};
          2 & r && (o.$$scope = { dirty: r, ctx: t }), n.$set(o);
        },
        i: function (t) {
          e || (bi(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Ti(n, t);
        },
      }
    );
  }
  function Cl(t, n, e) {
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
  var El = (function (e) {
    Gt(o, e);
    var r = Sl(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, Cl, Rl, lo, {}), i;
    }
    return o;
  })(Li);
  function jl(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Pl(t) {
    var n, e, r, o, i, c, a, u;
    return {
      c: function () {
        ((n = To('div')).innerHTML =
          '<h2>Modal title</h2> \n  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!</p> \n  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!</p> \n  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!</p>'),
          (e = _o()),
          (r = To('footer')),
          ((o = To('button')).textContent = 'Cancel'),
          (i = _o()),
          ((c = To('button')).textContent = 'Confirm'),
          Io(n, 'class', 'text-component'),
          Io(o, 'type', 'button'),
          Io(o, 'class', 'btn btn--subtle'),
          Io(c, 'type', 'button'),
          Io(c, 'class', 'btn btn--primary'),
          Io(r, 'class', 'flex justify-end gap-xs margin-top-md');
      },
      m: function (s, l) {
        jo(s, n, l),
          jo(s, e, l),
          jo(s, r, l),
          Eo(r, o),
          Eo(r, i),
          Eo(r, c),
          a || ((u = [Bo(o, 'click', t[1]), Bo(c, 'click', t[0])]), (a = !0));
      },
      p: ro,
      i: ro,
      o: ro,
      d: function (t) {
        t && Po(n), t && Po(e), t && Po(r), (a = !1), uo(u);
      },
    };
  }
  function Al(t) {
    var n = ns();
    return [n.hide, n.cancel];
  }
  var Tl = (function (e) {
    Gt(o, e);
    var r = jl(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, Al, Pl, lo, {}), i;
    }
    return o;
  })(Li);
  function Ml(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Ll(t) {
    var n, e, r, o, i, c, a, u, s, l, f, d, p, m, h, v;
    return {
      c: function () {
        (n = To('header')),
          (e = To('button')),
          (r = To('img')),
          (o = _o()),
          ((i = To('span')).textContent = 'Go back'),
          (c = _o()),
          (a = To('div')),
          ((u = To('p')).textContent =
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!'),
          (s = _o()),
          ((l = To('p')).textContent =
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!'),
          (f = _o()),
          ((d = To('p')).textContent =
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!'),
          (p = _o()),
          ((m = To('button')).textContent = 'Show nested modal'),
          Io(r, 'class', 'icon'),
          r.src !==
            "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48' height='48' viewBox='0 0 48 48'%3e %3cg transform='translate(0%2c 0)'%3e %3cpath d='M45%2c22H8.828l9.879-9.879a1%2c1%2c0%2c0%2c0%2c0-1.414L17.293%2c9.293a1%2c1%2c0%2c0%2c0-1.414%2c0l-14%2c14a1%2c1%2c0%2c0%2c0%2c0%2c1.414l14%2c14a1%2c1%2c0%2c0%2c0%2c1.414%2c0l1.414-1.414a1%2c1%2c0%2c0%2c0%2c0-1.414L8.828%2c26H45a1%2c1%2c0%2c0%2c0%2c1-1V23A1%2c1%2c0%2c0%2c0%2c45%2c22Z' fill='currentColor' %3e%3c/path%3e %3c/g%3e%3c/svg%3e" &&
            Io(
              r,
              'src',
              "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48' height='48' viewBox='0 0 48 48'%3e %3cg transform='translate(0%2c 0)'%3e %3cpath d='M45%2c22H8.828l9.879-9.879a1%2c1%2c0%2c0%2c0%2c0-1.414L17.293%2c9.293a1%2c1%2c0%2c0%2c0-1.414%2c0l-14%2c14a1%2c1%2c0%2c0%2c0%2c0%2c1.414l14%2c14a1%2c1%2c0%2c0%2c0%2c1.414%2c0l1.414-1.414a1%2c1%2c0%2c0%2c0%2c0-1.414L8.828%2c26H45a1%2c1%2c0%2c0%2c0%2c1-1V23A1%2c1%2c0%2c0%2c0%2c45%2c22Z' fill='currentColor' %3e%3c/path%3e %3c/g%3e%3c/svg%3e"
            ),
          Io(r, 'alt', 'Go back'),
          Io(i, 'class', 'margin-left-xs'),
          Io(e, 'type', 'button'),
          Io(e, 'class', 'btn btn--subtle'),
          Io(n, 'class', 'margin-bottom-sm'),
          Io(m, 'class', 'btn btn--primary'),
          Io(m, 'type', 'button'),
          Io(a, 'class', 'text-component');
      },
      m: function (g, y) {
        jo(g, n, y),
          Eo(n, e),
          Eo(e, r),
          Eo(e, o),
          Eo(e, i),
          jo(g, c, y),
          jo(g, a, y),
          Eo(a, u),
          Eo(a, s),
          Eo(a, l),
          Eo(a, f),
          Eo(a, d),
          Eo(a, p),
          Eo(a, m),
          h || ((v = [Bo(e, 'click', t[0]), Bo(m, 'click', t[1])]), (h = !0));
      },
      p: ro,
      i: ro,
      o: ro,
      d: function (t) {
        t && Po(n), t && Po(c), t && Po(a), (h = !1), uo(v);
      },
    };
  }
  function _l(t) {
    return [
      ns().cancel,
      function () {
        return Ts.show(Tl, null, {
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
  var Fl = (function (e) {
    Gt(o, e);
    var r = Ml(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, _l, Ll, lo, {}), i;
    }
    return o;
  })(Li);
  function Bl(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Il(t) {
    var n, e, r, o, i, c, a, u, s, l, f, d;
    return {
      c: function () {
        (n = To('header')),
          ((e = To('h2')).textContent = 'First modal'),
          (r = _o()),
          (o = To('button')),
          (i = To('img')),
          (c = _o()),
          (a = To('div')),
          ((u = To('p')).textContent =
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta voluptatum unde omnis\n    distinctio obcaecati corporis ducimus beatae. Sunt, debitis ex dicta, illum voluptates molestiae\n    soluta neque, rerum eligendi laudantium maxime.'),
          (s = _o()),
          ((l = To('button')).textContent = 'Show nested modal'),
          Io(i, 'class', 'icon icon--sm'),
          i.src !== ll &&
            Io(
              i,
              'src',
              "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48' height='48' viewBox='0 0 48 48'%3e %3cg transform='translate(0%2c 0)'%3e %3cpolygon points='37.435 7.736 24 21.172 10.565 7.736 7.737 10.564 21.172 24 7.737 37.436 10.565 40.264 24 26.828 37.435 40.264 40.263 37.436 26.828 24 40.263 10.564 37.435 7.736' fill='currentColor' %3e%3c/polygon%3e %3c/g%3e%3c/svg%3e"
            ),
          Io(i, 'alt', 'Close'),
          Io(o, 'class', 'btn btn--subtle padding-xs js-tab-focus'),
          Io(o, 'type', 'button'),
          Io(n, 'class', 'flex items-center justify-between margin-bottom-sm'),
          Io(l, 'class', 'btn btn--primary'),
          Io(l, 'type', 'button'),
          Io(a, 'class', 'text-component');
      },
      m: function (p, m) {
        jo(p, n, m),
          Eo(n, e),
          Eo(n, r),
          Eo(n, o),
          Eo(o, i),
          jo(p, c, m),
          jo(p, a, m),
          Eo(a, u),
          Eo(a, s),
          Eo(a, l),
          f || ((d = [Bo(o, 'click', t[0]), Bo(l, 'click', t[1])]), (f = !0));
      },
      p: ro,
      i: ro,
      o: ro,
      d: function (t) {
        t && Po(n), t && Po(c), t && Po(a), (f = !1), uo(d);
      },
    };
  }
  function Nl(t) {
    return [
      ns().cancel,
      function () {
        return Ts.show(Fl, null, {
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
  var Dl = (function (e) {
    Gt(o, e);
    var r = Bl(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, Nl, Il, lo, {}), i;
    }
    return o;
  })(Li);
  function ql(t) {
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
  function Hl(t, n) {
    (n.keyCode && 27 === n.keyCode) || (n.key && 'Escape' === n.key)
      ? ql(t)
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
  function zl(t) {
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
  function Wl(t) {
    t.element.addEventListener('keydown', t), t.element.addEventListener('click', t);
  }
  function Ul(t) {
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
      'static' === e && Util.hasClass(n.element, n.showClass) && ql(n));
  }
  function Gl(t) {
    var n = t;
    if (
      ((function (t) {
        var n = getComputedStyle(t.element, ':before').getPropertyValue('content');
        n &&
          '' !== n &&
          'none' !== n &&
          (Ul(t),
          t.element.addEventListener('update-sidebar', function () {
            Ul(t);
          })),
          Util.addClass(t.element, t.readyClass);
      })(n),
      n.triggers)
    )
      for (var e = 0; e < n.triggers.length; e += 1)
        n.triggers[e].addEventListener('click', function (t) {
          if ((t.preventDefault(), Util.hasClass(n.element, n.showClass)))
            return (n.selectedTrigger = t.target), void ql(n);
          (n.selectedTrigger = t.target), zl(n), Wl(n);
        });
  }
  _t({ target: 'Function', proto: !0 }, { bind: Jr });
  var Vl = function (t) {
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
      Gl(this);
  };
  function Yl(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Kl(t) {
    var n, e, r;
    return {
      c: function () {
        (n = To('button')),
          Io(
            (e = To('i')),
            'class',
            'anim-menu-btn__icon anim-menu-btn__icon--close svelte-k651fp'
          ),
          Io(e, 'aria-hidden', 'true'),
          Io(
            n,
            'class',
            (r = 'reset anim-menu-btn color-contrast-high js-tab-focus ' + t[0] + ' svelte-k651fp')
          ),
          Io(n, 'aria-label', t[2]),
          Io(n, 'aria-controls', t[1]),
          Io(n, 'type', 'button');
      },
      m: function (t, r) {
        jo(t, n, r), Eo(n, e);
      },
      p: function (t, e) {
        var o = Fr(e, 1)[0];
        1 & o &&
          r !==
            (r =
              'reset anim-menu-btn color-contrast-high js-tab-focus ' + t[0] + ' svelte-k651fp') &&
          Io(n, 'class', r),
          4 & o && Io(n, 'aria-label', t[2]),
          2 & o && Io(n, 'aria-controls', t[1]);
      },
      i: ro,
      o: ro,
      d: function (t) {
        t && Po(n);
      },
    };
  }
  function Xl(t, n, e) {
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
  (Vl.prototype.close = function () {
    ql(this);
  }),
    (Vl.prototype.handleEvent = function (t) {
      switch (t.type) {
        case 'click':
          !(function (t, n) {
            (n.target.closest('.js-sidebar__close-btn') || Util.hasClass(n.target, 'js-sidebar')) &&
              (n.preventDefault(), ql(t));
          })(this, t);
          break;
        case 'keydown':
          Hl(this, t);
      }
    }),
    (Vl.prototype.resetLayout = function () {
      this.element.dispatchEvent(new CustomEvent('update-sidebar'));
    });
  var Zl = (function (e) {
    Gt(o, e);
    var r = Yl(o);
    function o(e) {
      var i;
      return (
        t(this, o),
        Mi(n((i = r.call(this))), e, Xl, Kl, lo, { class: 0, ariaControls: 1, ariaLabel: 2 }),
        i
      );
    }
    return o;
  })(Li);
  function Jl(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  var Ql = function (t) {
      return { prop: 1 & t };
    },
    tf = function (t) {
      return { prop: { sidebar: t[0] } };
    },
    nf = function (t) {
      return { prop: 1 & t };
    },
    ef = function (t) {
      return { prop: { sidebar: t[0] } };
    };
  function rf(t) {
    var n, e, r, o, i, c, a, u, s, l, f, d, p, m, h, v, g, y, b, $, x, w, O;
    e = new Zl({
      props: {
        ariaControls: 'sidebar',
        class:
          'btn btn--subtle radius-50% position-fixed top-0 right-0 z-index-fixed-element margin-top-sm margin-right-md',
      },
    });
    var S = t[3].aside,
      k = mo(S, t, t[2], ef),
      R = t[3].default,
      C = mo(R, t, t[2], tf);
    return {
      c: function () {
        (n = To('div')),
          Pi(e.$$.fragment),
          (r = _o()),
          (o = To('div')),
          (i = To('aside')),
          (c = To('div')),
          (a = To('header')),
          (u = To('div')),
          ((s = To('h1')).textContent = 'Smodale'),
          (l = _o()),
          ((f = To('small')).textContent = ''.concat('v'.concat('1.0.2'))),
          (d = _o()),
          (p = To('button')),
          (m = To('img')),
          (h = _o()),
          (v = To('div')),
          (g = To('div')),
          k && k.c(),
          (y = _o()),
          (b = To('main')),
          ($ = To('div')),
          C && C.c(),
          Io(n, 'class', 'hide@md no-js:is-hidden'),
          Io(s, 'class', 'text-md text-truncate'),
          Io(s, 'id', 'sidebar-title'),
          Io(f, 'class', 'color-contrast-medium'),
          Io(m, 'class', 'icon icon--sm'),
          m.src !== ll &&
            Io(
              m,
              'src',
              "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48' height='48' viewBox='0 0 48 48'%3e %3cg transform='translate(0%2c 0)'%3e %3cpolygon points='37.435 7.736 24 21.172 10.565 7.736 7.737 10.564 21.172 24 7.737 37.436 10.565 40.264 24 26.828 37.435 40.264 40.263 37.436 26.828 24 40.263 10.564 37.435 7.736' fill='currentColor' %3e%3c/polygon%3e %3c/g%3e%3c/svg%3e"
            ),
          Io(m, 'alt', 'Close panel'),
          Io(p, 'class', 'btn btn--subtle padding-sm js-sidebar__close-btn js-tab-focus'),
          Io(p, 'type', 'button'),
          Io(a, 'class', 'sidebar__header z-index-2 svelte-b07n84'),
          Io(g, 'class', 'padding-md'),
          Io(v, 'class', 'position-relative z-index-1'),
          Io(c, 'class', 'sidebar__panel'),
          Io(
            i,
            'class',
            'sidebar sidebar--static@md sidebar--right-on-mobile js-sidebar svelte-b07n84'
          ),
          Io(
            i,
            'data-static-class',
            'position-relative z-index-1 flex-grow max-width-xxxxs border-right sidebar--sticky-on-desktop'
          ),
          Io(i, 'id', 'sidebar'),
          Io(i, 'aria-labelledby', 'sidebar-title'),
          Io($, 'class', 'padding-md'),
          Io(b, 'class', 'position-relative flex-grow height-100%'),
          Io(o, 'class', 'flex@md');
      },
      m: function (S, R) {
        jo(S, n, R),
          Ai(e, n, null),
          jo(S, r, R),
          jo(S, o, R),
          Eo(o, i),
          Eo(i, c),
          Eo(c, a),
          Eo(a, u),
          Eo(u, s),
          Eo(u, l),
          Eo(u, f),
          Eo(a, d),
          Eo(a, p),
          Eo(p, m),
          Eo(c, h),
          Eo(c, v),
          Eo(v, g),
          k && k.m(g, null),
          Eo(o, y),
          Eo(o, b),
          Eo(b, $),
          C && C.m($, null),
          (x = !0),
          w || ((O = xo(t[1].call(null, i))), (w = !0));
      },
      p: function (t, n) {
        var e = Fr(n, 1)[0];
        k && k.p && 5 & e && vo(k, S, t, t[2], e, nf, ef),
          C && C.p && 5 & e && vo(C, R, t, t[2], e, Ql, tf);
      },
      i: function (t) {
        x || (bi(e.$$.fragment, t), bi(k, t), bi(C, t), (x = !0));
      },
      o: function (t) {
        $i(e.$$.fragment, t), $i(k, t), $i(C, t), (x = !1);
      },
      d: function (t) {
        t && Po(n), Ti(e), t && Po(r), t && Po(o), k && k.d(t), C && C.d(t), (w = !1), O();
      },
    };
  }
  function of(t, n, e) {
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
          e(0, (c = new Vl(t))),
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
  var cf = (function (e) {
    Gt(o, e);
    var r = Jl(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, of, rf, lo, {}), i;
    }
    return o;
  })(Li);
  function af(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function uf(t) {
    var n,
      e,
      r = t[1].default,
      o = mo(r, t, t[0], null);
    return {
      c: function () {
        (n = To('nav')), o && o.c();
      },
      m: function (t, r) {
        jo(t, n, r), o && o.m(n, null), (e = !0);
      },
      p: function (t, n) {
        var e = Fr(n, 1)[0];
        o && o.p && 1 & e && vo(o, r, t, t[0], e, null, null);
      },
      i: function (t) {
        e || (bi(o, t), (e = !0));
      },
      o: function (t) {
        $i(o, t), (e = !1);
      },
      d: function (t) {
        t && Po(n), o && o.d(t);
      },
    };
  }
  function sf(t, n, e) {
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
  var lf = (function (e) {
    Gt(o, e);
    var r = af(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, sf, uf, lo, {}), i;
    }
    return o;
  })(Li);
  function ff(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function df(t, n) {
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
  function pf(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = null != arguments[n] ? arguments[n] : {};
      n % 2
        ? df(Object(e), !0).forEach(function (n) {
            va(t, n, e[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
        : df(Object(e)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
          });
    }
    return t;
  }
  var mf = ki.window;
  function hf(t) {
    var n,
      e,
      r,
      o,
      i = t[3].default,
      c = mo(i, t, t[2], null);
    return {
      c: function () {
        (n = To('div')), c && c.c();
      },
      m: function (i, a) {
        jo(i, n, a),
          c && c.m(n, null),
          (e = !0),
          r || ((o = [Bo(mf, 'scroll', t[1]), xo(t[0].call(null, n))]), (r = !0));
      },
      p: function (t, n) {
        var e = Fr(n, 1)[0];
        c && c.p && 4 & e && vo(c, i, t, t[2], e, null, null);
      },
      i: function (t) {
        e || (bi(c, t), (e = !0));
      },
      o: function (t) {
        $i(c, t), (e = !1);
      },
      d: function (t) {
        t && Po(n), c && c.d(t), (r = !1), uo(o);
      },
    };
  }
  var vf = Xu({ currentSectionId: '', clickScrolling: !1 });
  function gf(t, n, e) {
    var r,
      o = ro;
    po(t, vf, function (t) {
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
          var n = _r(t.getElementsByClassName('js-scroll-spy-section')),
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
                    vf.update(function (t) {
                      return pf(pf({}, t), {}, { currentSectionId: e });
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
              return vf.update(function (t) {
                return pf(pf({}, t), {}, { clickScrolling: !1 });
              });
            }, 240));
        },
        a,
        c,
      ]
    );
  }
  var yf = (function (e) {
    Gt(o, e);
    var r = ff(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, gf, hf, lo, {}), i;
    }
    return o;
  })(Li);
  function bf(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function $f(t) {
    var n,
      e,
      r = t[2].default,
      o = mo(r, t, t[1], null);
    return {
      c: function () {
        (n = To('section')), o && o.c(), Io(n, 'class', 'js-scroll-spy-section'), Io(n, 'id', t[0]);
      },
      m: function (t, r) {
        jo(t, n, r), o && o.m(n, null), (e = !0);
      },
      p: function (t, i) {
        var c = Fr(i, 1)[0];
        o && o.p && 2 & c && vo(o, r, t, t[1], c, null, null), (!e || 1 & c) && Io(n, 'id', t[0]);
      },
      i: function (t) {
        e || (bi(o, t), (e = !0));
      },
      o: function (t) {
        $i(o, t), (e = !1);
      },
      d: function (t) {
        t && Po(n), o && o.d(t);
      },
    };
  }
  function xf(t, n, e) {
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
  var wf = (function (e) {
    Gt(o, e);
    var r = bf(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, xf, $f, lo, { id: 0 }), i;
    }
    return o;
  })(Li);
  function Of(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Sf(t) {
    var n,
      e,
      r = t[1].default,
      o = mo(r, t, t[0], null);
    return {
      c: function () {
        (n = To('div')),
          o && o.c(),
          Io(
            n,
            'class',
            'text-uppercase color-contrast-medium margin-bottom-xxs text-xs font-semibold'
          );
      },
      m: function (t, r) {
        jo(t, n, r), o && o.m(n, null), (e = !0);
      },
      p: function (t, n) {
        var e = Fr(n, 1)[0];
        o && o.p && 1 & e && vo(o, r, t, t[0], e, null, null);
      },
      i: function (t) {
        e || (bi(o, t), (e = !0));
      },
      o: function (t) {
        $i(o, t), (e = !1);
      },
      d: function (t) {
        t && Po(n), o && o.d(t);
      },
    };
  }
  function kf(t, n, e) {
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
  var Rf = (function (e) {
    Gt(o, e);
    var r = Of(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, kf, Sf, lo, {}), i;
    }
    return o;
  })(Li);
  function Cf(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Ef(t) {
    var n,
      e,
      r = t[1].default,
      o = mo(r, t, t[0], null);
    return {
      c: function () {
        (n = To('nav')), o && o.c(), Io(n, 'class', 'margin-bottom-xxs');
      },
      m: function (t, r) {
        jo(t, n, r), o && o.m(n, null), (e = !0);
      },
      p: function (t, n) {
        var e = Fr(n, 1)[0];
        o && o.p && 1 & e && vo(o, r, t, t[0], e, null, null);
      },
      i: function (t) {
        e || (bi(o, t), (e = !0));
      },
      o: function (t) {
        $i(o, t), (e = !1);
      },
      d: function (t) {
        t && Po(n), o && o.d(t);
      },
    };
  }
  function jf(t, n, e) {
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
  var Pf = (function (e) {
    Gt(o, e);
    var r = Cf(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, jf, Ef, lo, {}), i;
    }
    return o;
  })(Li);
  _t(
    { target: 'Number', stat: !0 },
    {
      isNaN: function (t) {
        return t != t;
      },
    }
  );
  var Af = Ot.f,
    Tf = E.f,
    Mf = A.f,
    Lf = Fu.trim,
    _f = 'Number',
    Ff = i.Number,
    Bf = Ff.prototype,
    If = p(zt(Bf)) == _f,
    Nf = function (t) {
      var n,
        e,
        r,
        o,
        i,
        c,
        a,
        u,
        s = b(t, !1);
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
  if (Mt(_f, !Ff(' 0o1') || !Ff('0b1') || Ff('+0x1'))) {
    for (
      var Df,
        qf = function (t) {
          var n = arguments.length < 1 ? 0 : t,
            e = this;
          return e instanceof qf &&
            (If
              ? c(function () {
                  Bf.valueOf.call(e);
                })
              : p(e) != _f)
            ? ps(new Ff(Nf(n)), e, qf)
            : Nf(n);
        },
        Hf = a
          ? Af(Ff)
          : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range'.split(
              ','
            ),
        zf = 0;
      Hf.length > zf;
      zf++
    )
      w(Ff, (Df = Hf[zf])) && !w(qf, Df) && Mf(qf, Df, Tf(Ff, Df));
    (qf.prototype = Bf), (Bf.constructor = qf), it(i, _f, qf);
  }
  var Wf = function (t) {
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
  function Uf(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Gf(t) {
    var n,
      e,
      r,
      o,
      i,
      c = t[7].default,
      a = mo(c, t, t[6], null);
    return {
      c: function () {
        (n = To('a')),
          a && a.c(),
          Io(n, 'href', t[1]),
          Io(n, 'class', (e = 'js-smooth-scroll ' + t[0])),
          Io(n, 'data-duration', t[2]),
          Io(n, 'aria-current', t[3]);
      },
      m: function (e, c) {
        jo(e, n, c),
          a && a.m(n, null),
          (r = !0),
          o || ((i = [xo(t[4].call(null, n)), Bo(n, 'click', t[8])]), (o = !0));
      },
      p: function (t, o) {
        a && a.p && 64 & o && vo(a, c, t, t[6], o, null, null),
          (!r || 2 & o) && Io(n, 'href', t[1]),
          (!r || (1 & o && e !== (e = 'js-smooth-scroll ' + t[0]))) && Io(n, 'class', e),
          (!r || 4 & o) && Io(n, 'data-duration', t[2]),
          (!r || 8 & o) && Io(n, 'aria-current', t[3]);
      },
      i: function (t) {
        r || (bi(a, t), (r = !0));
      },
      o: function (t) {
        $i(a, t), (r = !1);
      },
      d: function (t) {
        t && Po(n), a && a.d(t), (o = !1), uo(i);
      },
    };
  }
  function Vf(t) {
    var n,
      e,
      r = t[5].default && Gf(t);
    return {
      c: function () {
        r && r.c(), (n = Fo());
      },
      m: function (t, o) {
        r && r.m(t, o), jo(t, n, o), (e = !0);
      },
      p: function (t, e) {
        var o = Fr(e, 1)[0];
        t[5].default
          ? r
            ? (r.p(t, o), 32 & o && bi(r, 1))
            : ((r = Gf(t)).c(), bi(r, 1), r.m(n.parentNode, n))
          : r &&
            (gi(),
            $i(r, 1, 1, function () {
              r = null;
            }),
            yi());
      },
      i: function (t) {
        e || (bi(r), (e = !0));
      },
      o: function (t) {
        $i(r), (e = !1);
      },
      d: function (t) {
        r && r.d(t), t && Po(n);
      },
    };
  }
  function Yf(t, n, e) {
    var r = n.$$slots,
      o = void 0 === r ? {} : r,
      i = n.$$scope,
      c = bo(o),
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
          return new Wf(t);
        },
        c,
        i,
        o,
        function (n) {
          Qo(t, n);
        },
      ]
    );
  }
  (Wf.prototype.initScroll = function () {
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
    (Wf.prototype.scrollHorizontally = function (t, n) {
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
    (Wf.prototype.resetTarget = function (t, n) {
      var e = t;
      parseInt(e.getAttribute('tabindex'), 10) < 0 &&
        ((e.style.outline = 'none'), n || e.removeAttribute('tabindex'));
    }),
    (Wf.prototype.getFixedElementHeight = function () {
      var t = this.dataElementY ? this.scrollElementY : document.documentElement,
        n = parseInt(getComputedStyle(t).getPropertyValue('scroll-padding'), 10);
      if (Number.isNaN(n)) {
        n = 0;
        var e = document.querySelector(this.element.getAttribute('data-fixed-element'));
        e && (n = parseInt(e.getBoundingClientRect().height, 10));
      }
      return n;
    });
  var Kf = (function (e) {
    Gt(o, e);
    var r = Uf(o);
    function o(e) {
      var i;
      return (
        t(this, o),
        Mi(n((i = r.call(this))), e, Yf, Vf, lo, {
          class: 0,
          href: 1,
          duration: 2,
          ariaCurrent: 3,
        }),
        i
      );
    }
    return o;
  })(Li);
  function Xf(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Zf(t) {
    var n,
      e = t[3].default,
      r = mo(e, t, t[5], null);
    return {
      c: function () {
        r && r.c();
      },
      m: function (t, e) {
        r && r.m(t, e), (n = !0);
      },
      p: function (t, n) {
        r && r.p && 32 & n && vo(r, e, t, t[5], n, null, null);
      },
      i: function (t) {
        n || (bi(r, t), (n = !0));
      },
      o: function (t) {
        $i(r, t), (n = !1);
      },
      d: function (t) {
        r && r.d(t);
      },
    };
  }
  function Jf(t) {
    var n, e, r;
    return (
      (e = new Kf({
        props: {
          href: t[0],
          ariaCurrent: t[1],
          class:
            'text-decoration-none radius-md padding-y-xxs padding-x-xxs block color-contrast-high',
          $$slots: { default: [Zf] },
          $$scope: { ctx: t },
        },
      })).$on('click', t[4]),
      {
        c: function () {
          (n = To('div')),
            Pi(e.$$.fragment),
            Io(
              n,
              'class',
              'sidenav-list-item margin-left-xxxxs margin-bottom-xxxxs svelte-11oue6z'
            );
        },
        m: function (t, o) {
          jo(t, n, o), Ai(e, n, null), (r = !0);
        },
        p: function (t, n) {
          var r = Fr(n, 1)[0],
            o = {};
          1 & r && (o.href = t[0]),
            2 & r && (o.ariaCurrent = t[1]),
            32 & r && (o.$$scope = { dirty: r, ctx: t }),
            e.$set(o);
        },
        i: function (t) {
          r || (bi(e.$$.fragment, t), (r = !0));
        },
        o: function (t) {
          $i(e.$$.fragment, t), (r = !1);
        },
        d: function (t) {
          t && Po(n), Ti(e);
        },
      }
    );
  }
  function Qf(t, n, e) {
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
          Qo(t, n);
        },
        c,
      ]
    );
  }
  var td = (function (e) {
    Gt(o, e);
    var r = Xf(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, Qf, Jf, lo, { href: 0, current: 2 }), i;
    }
    return o;
  })(Li);
  function nd(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function ed(t, n) {
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
  function rd(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = null != arguments[n] ? arguments[n] : {};
      n % 2
        ? ed(Object(e), !0).forEach(function (n) {
            va(t, n, e[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
        : ed(Object(e)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
          });
    }
    return t;
  }
  var od = function (t) {
      return { prop: 2 & t };
    },
    id = function (t) {
      return { prop: t[1] };
    };
  function cd(t) {
    var n,
      e,
      r,
      o,
      i = t[6].default,
      c = mo(i, t, t[5], id);
    return {
      c: function () {
        (n = To('div')),
          c && c.c(),
          Io(n, 'class', 'scroll-spy-link'),
          qo(n, 'scroll-spy-link--current', t[1]);
      },
      m: function (i, a) {
        jo(i, n, a),
          c && c.m(n, null),
          (e = !0),
          r ||
            ((o = [
              Bo(n, 'click', function () {
                so(t[2](t[0])) && t[2](t[0]).apply(this, arguments);
              }),
              xo(t[3].call(null, n)),
            ]),
            (r = !0));
      },
      p: function (e, r) {
        var o = Fr(r, 1)[0];
        (t = e),
          c && c.p && 34 & o && vo(c, i, t, t[5], o, od, id),
          2 & o && qo(n, 'scroll-spy-link--current', t[1]);
      },
      i: function (t) {
        e || (bi(c, t), (e = !0));
      },
      o: function (t) {
        $i(c, t), (e = !1);
      },
      d: function (t) {
        t && Po(n), c && c.d(t), (r = !1), uo(o);
      },
    };
  }
  function ad(t, n, e) {
    var r, o;
    po(t, vf, function (t) {
      return e(4, (o = t));
    });
    var i = n.$$slots,
      c = void 0 === i ? {} : i,
      a = n.$$scope,
      u = n.id,
      s = void 0 === u ? '' : u,
      l = function (t) {
        return vf.update(function (n) {
          return rd(rd({}, n), {}, { currentSectionId: t, clickScrolling: !0 });
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
  var ud = (function (e) {
    Gt(o, e);
    var r = nd(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, ad, cd, lo, { id: 0 }), i;
    }
    return o;
  })(Li);
  function sd(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function ld(t) {
    var n;
    return {
      c: function () {
        (n = To('p')).innerHTML =
          'Smodale module targets modern browsers. However if you want to support older browsers make sure to\n  <a target="_blank" ref="noopener noreferrer" href="https://svelte-recipes.netlify.app/build-setup/#transpiling-es6-to-es5-for-legacy-browser-ie11-support-with-babel">transpile</a> \n  <code>ECMAScript 2020</code> and provide\n  <a target="_blank" ref="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#polyfill">closest polyfill\n  </a>to your code.';
      },
      m: function (t, e) {
        jo(t, n, e);
      },
      p: ro,
      i: ro,
      o: ro,
      d: function (t) {
        t && Po(n);
      },
    };
  }
  var fd = (function (e) {
      Gt(o, e);
      var r = sd(o);
      function o(e) {
        var i;
        return t(this, o), Mi(n((i = r.call(this))), e, null, ld, lo, {}), i;
      }
      return o;
    })(Li),
    dd = Fu.trim;
  _t(
    {
      target: 'String',
      proto: !0,
      forced: (function (t) {
        return c(function () {
          return !!Au[t]() || '​᠎' != '​᠎'[t]() || Au[t].name !== t;
        });
      })('trim'),
    },
    {
      trim: function () {
        return dd(this);
      },
    }
  );
  var pd = [].join,
    md = h != Object,
    hd = Dr('join', ',');
  _t(
    { target: 'Array', proto: !0, forced: md || !hd },
    {
      join: function (t) {
        return pd.call(g(this), void 0 === t ? ',' : t);
      },
    }
  );
  var vd = A.f,
    gd = Ot.f,
    yd = ot.enforce,
    bd = dn('match'),
    $d = i.RegExp,
    xd = $d.prototype,
    wd = /a/g,
    Od = /a/g,
    Sd = new $d(wd) !== wd,
    kd = pu.UNSUPPORTED_Y;
  if (
    a &&
    Mt(
      'RegExp',
      !Sd ||
        kd ||
        c(function () {
          return (Od[bd] = !1), $d(wd) != wd || $d(Od) == Od || '/a/i' != $d(wd, 'i');
        })
    )
  ) {
    for (
      var Rd = function (t, n) {
          var e,
            r = this instanceof Rd,
            o = zs(t),
            i = void 0 === n;
          if (!r && o && t.constructor === Rd && i) return t;
          Sd
            ? o && !i && (t = t.source)
            : t instanceof Rd && (i && (n = Pa.call(t)), (t = t.source)),
            kd && (e = !!n && n.indexOf('y') > -1) && (n = n.replace(/y/g, ''));
          var c = ps(Sd ? new $d(t, n) : $d(t, n), r ? this : xd, Rd);
          kd && e && (yd(c).sticky = !0);
          return c;
        },
        Cd = function (t) {
          (t in Rd) ||
            vd(Rd, t, {
              configurable: !0,
              get: function () {
                return $d[t];
              },
              set: function (n) {
                $d[t] = n;
              },
            });
        },
        Ed = gd($d),
        jd = 0;
      Ed.length > jd;

    )
      Cd(Ed[jd++]);
    (xd.constructor = Rd), (Rd.prototype = xd), it(i, 'RegExp', Rd);
  }
  Ki('RegExp'),
    r(function (t) {
      var n = (function (t) {
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
                      M = S.slice(C + A.length),
                      L = O + S.length;
                    f && L > f.reach && (f.reach = L);
                    var _ = w.prev;
                    T && ((_ = u(n, _, T)), (O += T.length)),
                      s(n, _, R),
                      (w = u(n, _, new o(d, v ? r.tokenize(A, v) : A, b, A))),
                      M && u(n, w, M),
                      R > 1 && c(t, n, e, w.prev, O, { cause: d + ',' + m, reach: L });
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
       */ t.exports && (t.exports = n),
        void 0 !== e && (e.Prism = n),
        (n.languages.markup = {
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
        (n.languages.markup.tag.inside['attr-value'].inside.entity = n.languages.markup.entity),
        (n.languages.markup.doctype.inside['internal-subset'].inside = n.languages.markup),
        n.hooks.add('wrap', function (t) {
          'entity' === t.type && (t.attributes.title = t.content.replace(/&amp;/, '&'));
        }),
        Object.defineProperty(n.languages.markup.tag, 'addInlined', {
          value: function (t, e) {
            var r = {};
            (r['language-' + e] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: !0,
              inside: n.languages[e],
            }),
              (r.cdata = /^<!\[CDATA\[|\]\]>$/i);
            var o = { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: r } };
            o['language-' + e] = { pattern: /[\s\S]+/, inside: n.languages[e] };
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
              n.languages.insertBefore('markup', 'cdata', i);
          },
        }),
        (n.languages.html = n.languages.markup),
        (n.languages.mathml = n.languages.markup),
        (n.languages.svg = n.languages.markup),
        (n.languages.xml = n.languages.extend('markup', {})),
        (n.languages.ssml = n.languages.xml),
        (n.languages.atom = n.languages.xml),
        (n.languages.rss = n.languages.xml),
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
        })(n),
        (n.languages.clike = {
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
        (n.languages.javascript = n.languages.extend('clike', {
          'class-name': [
            n.languages.clike['class-name'],
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
        (n.languages.javascript[
          'class-name'
        ][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
        n.languages.insertBefore('javascript', 'keyword', {
          regex: {
            pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
              'regex-source': {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: 'language-regex',
                inside: n.languages.regex,
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
              inside: n.languages.javascript,
            },
            {
              pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
              inside: n.languages.javascript,
            },
            {
              pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: n.languages.javascript,
            },
            {
              pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: n.languages.javascript,
            },
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
        }),
        n.languages.insertBefore('javascript', 'string', {
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
                  rest: n.languages.javascript,
                },
              },
              string: /[\s\S]+/,
            },
          },
        }),
        n.languages.markup && n.languages.markup.tag.addInlined('script', 'javascript'),
        (n.languages.js = n.languages.javascript),
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
  var Pd = Object.assign,
    Ad = Object.defineProperty,
    Td =
      !Pd ||
      c(function () {
        if (
          a &&
          1 !==
            Pd(
              { b: 1 },
              Pd(
                Ad({}, 'a', {
                  enumerable: !0,
                  get: function () {
                    Ad(this, 'b', { value: 3, enumerable: !1 });
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
          7 != Pd({}, t)[e] || Ft(Pd({}, n)).join('') != r
        );
      })
        ? function (t, n) {
            for (var e = $(t), r = arguments.length, o = 1, i = St.f, c = l.f; r > o; )
              for (
                var u,
                  s = h(arguments[o++]),
                  f = i ? Ft(s).concat(i(s)) : Ft(s),
                  d = f.length,
                  p = 0;
                d > p;

              )
                (u = f[p++]), (a && !c.call(s, u)) || (e[u] = s[u]);
            return e;
          }
        : Pd;
  _t({ target: 'Object', stat: !0, forced: Object.assign !== Td }, { assign: Td });
  var Md = pu.UNSUPPORTED_Y,
    Ld = [].push,
    _d = Math.min,
    Fd = 4294967295;
  function Bd(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Id(t) {
    var n, e;
    return {
      c: function () {
        (n = To('div')),
          (e = Lo(t[1])),
          Io(
            n,
            'class',
            'position-absolute top-0 right-0 text-xs margin-top-sm margin-right-md font-mono color-contrast-low'
          );
      },
      m: function (t, r) {
        jo(t, n, r), Eo(n, e);
      },
      p: function (t, n) {
        2 & n && Do(e, t[1]);
      },
      d: function (t) {
        t && Po(n);
      },
    };
  }
  function Nd(t) {
    var n, e, r, o;
    return {
      c: function () {
        Io((n = To('code')), 'class', (e = 'language-' + t[0] + ' svelte-12j4wht'));
      },
      m: function (e, i) {
        jo(e, n, i), (n.innerHTML = t[3]), r || ((o = xo(t[4].call(null, n))), (r = !0));
      },
      p: function (t, r) {
        8 & r && (n.innerHTML = t[3]),
          1 & r && e !== (e = 'language-' + t[0] + ' svelte-12j4wht') && Io(n, 'class', e);
      },
      d: function (t) {
        t && Po(n), (r = !1), o();
      },
    };
  }
  function Dd(t) {
    for (
      var n,
        e,
        r,
        o,
        i,
        c = t[1] && Id(t),
        a = !('data-src' in t[5]) && t[2] && Nd(t),
        u = [{ class: 'radius-lg' }, t[5]],
        s = {},
        l = 0;
      l < u.length;
      l += 1
    )
      s = io(s, u[l]);
    return {
      c: function () {
        (n = To('div')),
          c && c.c(),
          (e = _o()),
          (r = To('pre')),
          a && a.c(),
          No(r, s),
          qo(r, 'svelte-12j4wht', !0),
          Io(n, 'class', 'code-snippet position-relative svelte-12j4wht');
      },
      m: function (u, s) {
        jo(u, n, s),
          c && c.m(n, null),
          Eo(n, e),
          Eo(n, r),
          a && a.m(r, null),
          o || ((i = xo(t[4].call(null, r))), (o = !0));
      },
      p: function (t, o) {
        var i = Fr(o, 1)[0];
        t[1] ? (c ? c.p(t, i) : ((c = Id(t)).c(), c.m(n, e))) : c && (c.d(1), (c = null)),
          !('data-src' in t[5]) && t[2]
            ? a
              ? a.p(t, i)
              : ((a = Nd(t)).c(), a.m(r, null))
            : a && (a.d(1), (a = null)),
          No(r, (s = Ei(u, [{ class: 'radius-lg' }, 32 & i && t[5]]))),
          qo(r, 'svelte-12j4wht', !0);
      },
      i: ro,
      o: ro,
      d: function (t) {
        t && Po(n), c && c.d(), a && a.d(), (o = !1), i();
      },
    };
  }
  function qd(t, n, e) {
    var r,
      o = ['language', 'unescaped', 'filename', 'code'],
      i = yo(n, o),
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
        (n = io(io({}, n), go(t))),
          e(5, (i = yo(n, o))),
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
  Cu(
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
                var r = String(v(this)),
                  o = void 0 === e ? Fd : e >>> 0;
                if (0 === o) return [];
                if (void 0 === t) return [r];
                if (!zs(t)) return n.call(r, t, o);
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
                  (i = $u.call(f, r)) &&
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
            var o = v(this),
              i = null == n ? void 0 : n[t];
            return void 0 !== i ? i.call(n, o, e) : r.call(String(o), n, e);
          },
          function (t, o) {
            var i = e(r, t, this, o, r !== n);
            if (i.done) return i.value;
            var c = j(t),
              a = String(this),
              u = tc(c, RegExp),
              s = c.unicode,
              l =
                (c.ignoreCase ? 'i' : '') +
                (c.multiline ? 'm' : '') +
                (c.unicode ? 'u' : '') +
                (Md ? 'g' : 'y'),
              f = new u(Md ? '^(?:' + c.source + ')' : c, l),
              d = void 0 === o ? Fd : o >>> 0;
            if (0 === d) return [];
            if (0 === a.length) return null === Pu(f, a) ? [a] : [];
            for (var p = 0, m = 0, h = []; m < a.length; ) {
              f.lastIndex = Md ? 0 : m;
              var v,
                g = Pu(f, Md ? a.slice(m) : a);
              if (null === g || (v = _d(pt(f.lastIndex + (Md ? m : 0)), a.length)) === p)
                m = ju(a, m, s);
              else {
                if ((h.push(a.slice(p, m)), h.length === d)) return h;
                for (var y = 1; y <= g.length - 1; y++)
                  if ((h.push(g[y]), h.length === d)) return h;
                m = p = v;
              }
            }
            return h.push(a.slice(p)), h;
          },
        ]
      );
    },
    Md
  ),
    r(function (t) {
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
  var Hd = (function (e) {
    Gt(o, e);
    var r = Bd(o);
    function o(e) {
      var i;
      return (
        t(this, o),
        Mi(n((i = r.call(this))), e, qd, Dd, lo, {
          language: 0,
          unescaped: 6,
          filename: 1,
          code: 2,
        }),
        i
      );
    }
    return o;
  })(Li);
  function zd(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Wd(t) {
    var n, e, r, o, i, c, a, u, s, l, f, d, p, m;
    return (
      (s = new Hd({
        props: {
          code: "\n  import smodale from 'smodale';\n\n  smodale.show().catch(() => {});\n  ",
        },
      })),
      (p = new Hd({
        props: {
          code:
            "\n  window.addEventListener('unhandledrejection', (event) => event.preventDefault());\n  ",
        },
      })),
      {
        c: function () {
          ((n = To('h3')).innerHTML = '<code>Uncaught (in promise)</code>'),
            (e = _o()),
            (r = To('hr')),
            (o = _o()),
            ((i = To('p')).innerHTML =
              'This console error happens when the returned promise from <code>show()</code> method has been\n  rejected through the <code>cancel()</code> method and has no rejection handler.'),
            (c = _o()),
            ((a = To('p')).innerHTML =
              'You can prevent that from happening by handling the rejection with the <code>catch</code> block'),
            (u = _o()),
            Pi(s.$$.fragment),
            (l = _o()),
            ((f = To('p')).innerHTML =
              'Another solution could be preventing the unhandled rejection event from <code>window</code> object'),
            (d = _o()),
            Pi(p.$$.fragment);
        },
        m: function (t, h) {
          jo(t, n, h),
            jo(t, e, h),
            jo(t, r, h),
            jo(t, o, h),
            jo(t, i, h),
            jo(t, c, h),
            jo(t, a, h),
            jo(t, u, h),
            Ai(s, t, h),
            jo(t, l, h),
            jo(t, f, h),
            jo(t, d, h),
            Ai(p, t, h),
            (m = !0);
        },
        p: ro,
        i: function (t) {
          m || (bi(s.$$.fragment, t), bi(p.$$.fragment, t), (m = !0));
        },
        o: function (t) {
          $i(s.$$.fragment, t), $i(p.$$.fragment, t), (m = !1);
        },
        d: function (t) {
          t && Po(n),
            t && Po(e),
            t && Po(r),
            t && Po(o),
            t && Po(i),
            t && Po(c),
            t && Po(a),
            t && Po(u),
            Ti(s, t),
            t && Po(l),
            t && Po(f),
            t && Po(d),
            Ti(p, t);
        },
      }
    );
  }
  var Ud = (function (e) {
    Gt(o, e);
    var r = zd(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, null, Wd, lo, {}), i;
    }
    return o;
  })(Li);
  function Gd(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Vd(t) {
    var n, e, r;
    return {
      c: function () {
        ((n = To('button')).textContent = 'Show first modal'),
          Io(n, 'class', 'btn btn--accent'),
          Io(n, 'type', 'button');
      },
      m: function (o, i) {
        jo(o, n, i), e || ((r = Bo(n, 'click', t[0])), (e = !0));
      },
      p: ro,
      i: ro,
      o: ro,
      d: function (t) {
        t && Po(n), (e = !1), r();
      },
    };
  }
  function Yd(t) {
    return [
      function () {
        return Ts.show(Dl, null, {
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
  var Kd = (function (e) {
      Gt(o, e);
      var r = Gd(o);
      function o(e) {
        var i;
        return t(this, o), Mi(n((i = r.call(this))), e, Yd, Vd, lo, {}), i;
      }
      return o;
    })(Li),
    Xd = function (t, n) {
      (this.element = t),
        (this.summary = this.element.querySelector('.js-details__summary')),
        (this.details = this.element.querySelector('.js-details__content')),
        (this.htmlElSupported = 'open' in this.element),
        this.initDetails(n),
        this.initDetailsEvents();
    };
  function Zd(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Jd(t) {
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
      v = mo(h, t, t[3], null);
    return {
      c: function () {
        (n = To('details')),
          (e = To('summary')),
          (r = To('span')),
          (o = Mo('svg')),
          (i = Mo('path')),
          (c = _o()),
          (a = To('span')),
          (u = Lo(t[1])),
          (s = _o()),
          (l = To('div')),
          v && v.c(),
          Io(
            i,
            'd',
            'M2.783.088A.5.5,0,0,0,2,.5v11a.5.5,0,0,0,.268.442A.49.49,0,0,0,2.5,12a.5.5,0,0,0,.283-.088l8-5.5a.5.5,0,0,0,0-.824Z'
          ),
          Io(o, 'class', 'icon icon--xxs margin-right-xxxs svelte-oq3v32'),
          Io(o, 'aria-hidden', 'true'),
          Io(o, 'viewBox', '0 0 12 12'),
          Io(r, 'class', 'flex items-center'),
          Io(e, 'class', 'details__summary js-details__summary svelte-oq3v32'),
          Io(e, 'role', 'button'),
          Io(l, 'class', 'details__content margin-top-xs js-details__content'),
          Io(n, 'class', (f = 'details js-details ' + t[0] + ' svelte-oq3v32'));
      },
      m: function (f, h) {
        jo(f, n, h),
          Eo(n, e),
          Eo(e, r),
          Eo(r, o),
          Eo(o, i),
          Eo(r, c),
          Eo(r, a),
          Eo(a, u),
          Eo(n, s),
          Eo(n, l),
          v && v.m(l, null),
          (d = !0),
          p || ((m = xo(t[2].call(null, n))), (p = !0));
      },
      p: function (t, e) {
        var r = Fr(e, 1)[0];
        (!d || 2 & r) && Do(u, t[1]),
          v && v.p && 8 & r && vo(v, h, t, t[3], r, null, null),
          (!d || (1 & r && f !== (f = 'details js-details ' + t[0] + ' svelte-oq3v32'))) &&
            Io(n, 'class', f);
      },
      i: function (t) {
        d || (bi(v, t), (d = !0));
      },
      o: function (t) {
        $i(v, t), (d = !1);
      },
      d: function (t) {
        t && Po(n), v && v.d(t), (p = !1), m();
      },
    };
  }
  (Xd.prototype.initDetails = function (t) {
    Util.setAttributes(this.summary, {
      'aria-expanded': 'false',
      'aria-controls': 'details--'.concat(t),
      role: 'button',
    }),
      Util.setAttributes(this.details, { 'aria-hidden': 'true', id: 'details--'.concat(t) });
  }),
    (Xd.prototype.initDetailsEvents = function () {
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
    (Xd.prototype.updateAriaValues = function (t) {
      this.summary.setAttribute('aria-expanded', t[0]),
        this.details.setAttribute('aria-hidden', t[1]);
    });
  var Qd = 0;
  function tp(t, n, e) {
    var r = n.$$slots,
      o = void 0 === r ? {} : r,
      i = n.$$scope,
      c = n.class,
      a = n.title,
      u = void 0 === a ? '' : a;
    Qd += 1;
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
          return new Xd(t, Qd);
        },
        i,
        o,
      ]
    );
  }
  var np = (function (e) {
    Gt(o, e);
    var r = Zd(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, tp, Jd, lo, { class: 0, title: 1 }), i;
    }
    return o;
  })(Li);
  function ep(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function rp(t) {
    var n, e;
    return (
      (n = new Hd({
        props: {
          'data-src': 'demo/components/organisms/SectionNestedModals/NestedModalsExample.svelte',
        },
      })),
      {
        c: function () {
          Pi(n.$$.fragment);
        },
        m: function (t, r) {
          Ai(n, t, r), (e = !0);
        },
        p: ro,
        i: function (t) {
          e || (bi(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Ti(n, t);
        },
      }
    );
  }
  function op(t) {
    var n, e, r, o;
    return (
      (n = new Kd({})),
      (r = new np({
        props: {
          class: 'margin-top-sm',
          title: 'Show code',
          $$slots: { default: [rp] },
          $$scope: { ctx: t },
        },
      })),
      {
        c: function () {
          Pi(n.$$.fragment), (e = _o()), Pi(r.$$.fragment);
        },
        m: function (t, i) {
          Ai(n, t, i), jo(t, e, i), Ai(r, t, i), (o = !0);
        },
        p: function (t, n) {
          var e = Fr(n, 1)[0],
            o = {};
          1 & e && (o.$$scope = { dirty: e, ctx: t }), r.$set(o);
        },
        i: function (t) {
          o || (bi(n.$$.fragment, t), bi(r.$$.fragment, t), (o = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t), $i(r.$$.fragment, t), (o = !1);
        },
        d: function (t) {
          Ti(n, t), t && Po(e), Ti(r, t);
        },
      }
    );
  }
  var ip = (function (e) {
    Gt(o, e);
    var r = ep(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, null, op, lo, {}), i;
    }
    return o;
  })(Li);
  function cp(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function ap(t) {
    var n, e, r, o, i, c, a, u, s;
    return {
      c: function () {
        (n = To('header')),
          ((e = To('h2')).textContent = 'Modal title'),
          (r = _o()),
          (o = To('button')),
          (i = To('img')),
          (c = _o()),
          ((a = To('div')).innerHTML =
            '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!</p> \n  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!</p> \n  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!</p>'),
          Io(i, 'class', 'icon icon--sm'),
          i.src !== ll &&
            Io(
              i,
              'src',
              "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48' height='48' viewBox='0 0 48 48'%3e %3cg transform='translate(0%2c 0)'%3e %3cpolygon points='37.435 7.736 24 21.172 10.565 7.736 7.737 10.564 21.172 24 7.737 37.436 10.565 40.264 24 26.828 37.435 40.264 40.263 37.436 26.828 24 40.263 10.564 37.435 7.736' fill='currentColor' %3e%3c/polygon%3e %3c/g%3e%3c/svg%3e"
            ),
          Io(i, 'alt', 'Close'),
          Io(o, 'class', 'btn btn--subtle padding-xs js-tab-focus'),
          Io(o, 'type', 'button'),
          Io(n, 'class', 'flex items-center justify-between margin-bottom-sm'),
          Io(a, 'class', 'text-component');
      },
      m: function (l, f) {
        jo(l, n, f),
          Eo(n, e),
          Eo(n, r),
          Eo(n, o),
          Eo(o, i),
          jo(l, c, f),
          jo(l, a, f),
          u || ((s = Bo(o, 'click', t[0])), (u = !0));
      },
      p: ro,
      i: ro,
      o: ro,
      d: function (t) {
        t && Po(n), t && Po(c), t && Po(a), (u = !1), s();
      },
    };
  }
  function up(t) {
    return [ns().cancel];
  }
  var sp = (function (e) {
    Gt(o, e);
    var r = cp(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, up, ap, lo, {}), i;
    }
    return o;
  })(Li);
  function lp(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function fp(t) {
    var n, e, r;
    return {
      c: function () {
        ((n = To('button')).textContent = 'Show vertically and horizontally centered modal'),
          Io(n, 'class', 'btn btn--accent'),
          Io(n, 'type', 'button');
      },
      m: function (o, i) {
        jo(o, n, i), e || ((r = Bo(n, 'click', t[0])), (e = !0));
      },
      p: ro,
      i: ro,
      o: ro,
      d: function (t) {
        t && Po(n), (e = !1), r();
      },
    };
  }
  function dp(t) {
    return [
      function () {
        return Ts.show(sp, null, {
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
  var pp = (function (e) {
    Gt(o, e);
    var r = lp(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, dp, fp, lo, {}), i;
    }
    return o;
  })(Li);
  function mp(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function hp(t) {
    var n, e, r;
    return {
      c: function () {
        ((n = To('button')).textContent = 'Show vertically centered modal'),
          Io(n, 'class', 'btn btn--accent'),
          Io(n, 'type', 'button');
      },
      m: function (o, i) {
        jo(o, n, i), e || ((r = Bo(n, 'click', t[0])), (e = !0));
      },
      p: ro,
      i: ro,
      o: ro,
      d: function (t) {
        t && Po(n), (e = !1), r();
      },
    };
  }
  function vp(t) {
    return [
      function () {
        return Ts.show(sp, null, {
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
  var gp = (function (e) {
    Gt(o, e);
    var r = mp(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, vp, hp, lo, {}), i;
    }
    return o;
  })(Li);
  function yp(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function bp(t) {
    var n, e;
    return (
      (n = new Hd({
        props: {
          'data-src':
            'demo/components/organisms/SectionCentered/VerticallyAndHorizontallyCenteredExample.svelte',
        },
      })),
      {
        c: function () {
          Pi(n.$$.fragment);
        },
        m: function (t, r) {
          Ai(n, t, r), (e = !0);
        },
        p: ro,
        i: function (t) {
          e || (bi(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Ti(n, t);
        },
      }
    );
  }
  function $p(t) {
    var n, e;
    return (
      (n = new Hd({
        props: {
          'data-src': 'demo/components/organisms/SectionCentered/VerticallyCenteredExample.svelte',
        },
      })),
      {
        c: function () {
          Pi(n.$$.fragment);
        },
        m: function (t, r) {
          Ai(n, t, r), (e = !0);
        },
        p: ro,
        i: function (t) {
          e || (bi(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Ti(n, t);
        },
      }
    );
  }
  function xp(t) {
    var n, e, r, o, i, c, a, u, s, l;
    return (
      (n = new pp({})),
      (r = new np({
        props: {
          class: 'margin-top-sm',
          title: 'Show code',
          $$slots: { default: [bp] },
          $$scope: { ctx: t },
        },
      })),
      (a = new gp({})),
      (s = new np({
        props: {
          class: 'margin-top-sm',
          title: 'Show code',
          $$slots: { default: [$p] },
          $$scope: { ctx: t },
        },
      })),
      {
        c: function () {
          Pi(n.$$.fragment),
            (e = _o()),
            Pi(r.$$.fragment),
            (o = _o()),
            (i = To('div')),
            (c = _o()),
            Pi(a.$$.fragment),
            (u = _o()),
            Pi(s.$$.fragment),
            Io(i, 'class', 'margin-top-sm');
        },
        m: function (t, f) {
          Ai(n, t, f),
            jo(t, e, f),
            Ai(r, t, f),
            jo(t, o, f),
            jo(t, i, f),
            jo(t, c, f),
            Ai(a, t, f),
            jo(t, u, f),
            Ai(s, t, f),
            (l = !0);
        },
        p: function (t, n) {
          var e = Fr(n, 1)[0],
            o = {};
          1 & e && (o.$$scope = { dirty: e, ctx: t }), r.$set(o);
          var i = {};
          1 & e && (i.$$scope = { dirty: e, ctx: t }), s.$set(i);
        },
        i: function (t) {
          l ||
            (bi(n.$$.fragment, t),
            bi(r.$$.fragment, t),
            bi(a.$$.fragment, t),
            bi(s.$$.fragment, t),
            (l = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t),
            $i(r.$$.fragment, t),
            $i(a.$$.fragment, t),
            $i(s.$$.fragment, t),
            (l = !1);
        },
        d: function (t) {
          Ti(n, t),
            t && Po(e),
            Ti(r, t),
            t && Po(o),
            t && Po(i),
            t && Po(c),
            Ti(a, t),
            t && Po(u),
            Ti(s, t);
        },
      }
    );
  }
  var wp = (function (e) {
    Gt(o, e);
    var r = yp(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, null, xp, lo, {}), i;
    }
    return o;
  })(Li);
  function Op(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Sp(t, n, e) {
    var r = t.slice();
    return (r[2] = n[e]), (r[4] = e), r;
  }
  function kp(t) {
    var n,
      e,
      r,
      o = t[4] + 1 + '';
    return {
      c: function () {
        (n = To('p')),
          (e = Lo(o)),
          (r = Lo(
            '. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur\n      doloremque vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui\n      officiis reprehenderit reiciendis excepturi culpa!\n    '
          ));
      },
      m: function (t, o) {
        jo(t, n, o), Eo(n, e), Eo(n, r);
      },
      p: ro,
      d: function (t) {
        t && Po(n);
      },
    };
  }
  function Rp(t) {
    for (var n, e, r, o, i, c, a, u, s, l, f = Array(16), d = [], p = 0; p < f.length; p += 1)
      d[p] = kp(Sp(t, f, p));
    return {
      c: function () {
        (n = To('div')), ((e = To('h2')).textContent = 'Modal title'), (r = _o());
        for (var t = 0; t < d.length; t += 1) d[t].c();
        (o = _o()),
          (i = To('footer')),
          ((c = To('button')).textContent = 'Cancel'),
          (a = _o()),
          ((u = To('button')).textContent = 'Confirm'),
          Io(n, 'class', 'text-component'),
          Io(c, 'type', 'button'),
          Io(c, 'class', 'btn btn--subtle'),
          Io(u, 'type', 'button'),
          Io(u, 'class', 'btn btn--primary'),
          Io(i, 'class', 'flex justify-end gap-xs margin-top-md');
      },
      m: function (f, p) {
        jo(f, n, p), Eo(n, e), Eo(n, r);
        for (var m = 0; m < d.length; m += 1) d[m].m(n, null);
        jo(f, o, p),
          jo(f, i, p),
          Eo(i, c),
          Eo(i, a),
          Eo(i, u),
          s || ((l = [Bo(c, 'click', t[1]), Bo(u, 'click', t[0])]), (s = !0));
      },
      p: ro,
      i: ro,
      o: ro,
      d: function (t) {
        t && Po(n), Ao(d, t), t && Po(o), t && Po(i), (s = !1), uo(l);
      },
    };
  }
  function Cp(t) {
    var n = ns();
    return [n.hide, n.cancel];
  }
  var Ep = (function (e) {
    Gt(o, e);
    var r = Op(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, Cp, Rp, lo, {}), i;
    }
    return o;
  })(Li);
  function jp(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Pp(t) {
    var n, e, r;
    return {
      c: function () {
        ((n = To('button')).textContent = 'Show long content modal'),
          Io(n, 'class', 'btn btn--accent'),
          Io(n, 'type', 'button');
      },
      m: function (o, i) {
        jo(o, n, i), e || ((r = Bo(n, 'click', t[0])), (e = !0));
      },
      p: ro,
      i: ro,
      o: ro,
      d: function (t) {
        t && Po(n), (e = !1), r();
      },
    };
  }
  function Ap(t) {
    return [
      function () {
        Ts.show(Ep, null, {
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
  var Tp = (function (e) {
    Gt(o, e);
    var r = jp(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, Ap, Pp, lo, {}), i;
    }
    return o;
  })(Li);
  function Mp(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Lp(t, n, e) {
    var r = t.slice();
    return (r[3] = n[e]), (r[5] = e), r;
  }
  function _p(t) {
    var n,
      e,
      r,
      o = t[5] + 1 + '';
    return {
      c: function () {
        (n = To('p')),
          (e = Lo(o)),
          (r = Lo(
            '. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis consequuntur\n          odio natus veritatis, cupiditate iusto velit numquam at voluptates. Laudantium, deleniti\n          eos. Porro illo quo architecto magnam nobis laborum aliquid!\n        '
          ));
      },
      m: function (t, o) {
        jo(t, n, o), Eo(n, e), Eo(n, r);
      },
      p: ro,
      d: function (t) {
        t && Po(n);
      },
    };
  }
  function Fp(t) {
    for (var n, e, r, o, i, c, a, u, s, l = Array(10), f = [], d = 0; d < l.length; d += 1)
      f[d] = _p(Lp(t, l, d));
    return {
      c: function () {
        (n = To('div')),
          ((e = To('header')).innerHTML = '<h2 class="svelte-yt9149">Modal title</h2>'),
          (r = _o()),
          (o = To('main'));
        for (var t = 0; t < f.length; t += 1) f[t].c();
        (i = _o()),
          (c = To('footer')),
          ((a = To('button')).textContent = 'Close'),
          Io(e, 'class', 'svelte-yt9149'),
          Io(o, 'class', 'svelte-yt9149'),
          Io(a, 'class', 'btn btn--subtle'),
          Io(a, 'type', 'button'),
          Io(c, 'class', 'svelte-yt9149'),
          Io(n, 'class', 'flex flex-column height-100%');
      },
      m: function (l, d) {
        jo(l, n, d), Eo(n, e), Eo(n, r), Eo(n, o);
        for (var p = 0; p < f.length; p += 1) f[p].m(o, null);
        Eo(n, i), Eo(n, c), Eo(c, a), u || ((s = Bo(a, 'click', t[2])), (u = !0));
      },
      p: ro,
      d: function (t) {
        t && Po(n), Ao(f, t), (u = !1), s();
      },
    };
  }
  function Bp(t) {
    for (
      var n,
        e,
        r,
        o,
        i,
        c,
        a = [t[0]],
        u = { $$slots: { default: [Fp] }, $$scope: { ctx: t } },
        s = 0;
      s < a.length;
      s += 1
    )
      u = io(u, a[s]);
    return (
      (r = new ds({ props: u })),
      {
        c: function () {
          ((n = To('button')).textContent = 'Show long content modal with body scroll'),
            (e = _o()),
            Pi(r.$$.fragment),
            Io(n, 'class', 'btn btn--accent'),
            Io(n, 'type', 'button');
        },
        m: function (a, u) {
          jo(a, n, u),
            jo(a, e, u),
            Ai(r, a, u),
            (o = !0),
            i || ((c = Bo(n, 'click', t[1])), (i = !0));
        },
        p: function (t, n) {
          var e = Fr(n, 1)[0],
            o = 1 & e ? Ei(a, [ji(t[0])]) : {};
          64 & e && (o.$$scope = { dirty: e, ctx: t }), r.$set(o);
        },
        i: function (t) {
          o || (bi(r.$$.fragment, t), (o = !0));
        },
        o: function (t) {
          $i(r.$$.fragment, t), (o = !1);
        },
        d: function (t) {
          t && Po(n), t && Po(e), Ti(r, t), (i = !1), c();
        },
      }
    );
  }
  var Ip = 'long-content-body-scroll';
  function Np(t) {
    return [
      {
        name: Ip,
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
        return Ts.show(Ip);
      },
      function () {
        return Ts.cancel(Ip);
      },
    ];
  }
  var Dp = (function (e) {
    Gt(o, e);
    var r = Mp(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, Np, Bp, lo, {}), i;
    }
    return o;
  })(Li);
  function qp(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Hp(t) {
    var n, e;
    return (
      (n = new Hd({
        props: {
          'data-src': 'demo/components/organisms/SectionLongContent/LongContentExample.svelte',
        },
      })),
      {
        c: function () {
          Pi(n.$$.fragment);
        },
        m: function (t, r) {
          Ai(n, t, r), (e = !0);
        },
        p: ro,
        i: function (t) {
          e || (bi(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Ti(n, t);
        },
      }
    );
  }
  function zp(t) {
    var n, e;
    return (
      (n = new Hd({
        props: {
          'data-src':
            'demo/components/organisms/SectionLongContent/LongContentBodyScrollExample.svelte',
        },
      })),
      {
        c: function () {
          Pi(n.$$.fragment);
        },
        m: function (t, r) {
          Ai(n, t, r), (e = !0);
        },
        p: ro,
        i: function (t) {
          e || (bi(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Ti(n, t);
        },
      }
    );
  }
  function Wp(t) {
    var n, e, r, o, i, c, a, u, s, l;
    return (
      (n = new Tp({})),
      (r = new np({
        props: {
          class: 'margin-top-sm',
          title: 'Show code',
          $$slots: { default: [Hp] },
          $$scope: { ctx: t },
        },
      })),
      (a = new Dp({})),
      (s = new np({
        props: {
          class: 'margin-top-sm',
          title: 'Show code',
          $$slots: { default: [zp] },
          $$scope: { ctx: t },
        },
      })),
      {
        c: function () {
          Pi(n.$$.fragment),
            (e = _o()),
            Pi(r.$$.fragment),
            (o = _o()),
            (i = To('div')),
            (c = _o()),
            Pi(a.$$.fragment),
            (u = _o()),
            Pi(s.$$.fragment),
            Io(i, 'class', 'margin-top-sm');
        },
        m: function (t, f) {
          Ai(n, t, f),
            jo(t, e, f),
            Ai(r, t, f),
            jo(t, o, f),
            jo(t, i, f),
            jo(t, c, f),
            Ai(a, t, f),
            jo(t, u, f),
            Ai(s, t, f),
            (l = !0);
        },
        p: function (t, n) {
          var e = Fr(n, 1)[0],
            o = {};
          1 & e && (o.$$scope = { dirty: e, ctx: t }), r.$set(o);
          var i = {};
          1 & e && (i.$$scope = { dirty: e, ctx: t }), s.$set(i);
        },
        i: function (t) {
          l ||
            (bi(n.$$.fragment, t),
            bi(r.$$.fragment, t),
            bi(a.$$.fragment, t),
            bi(s.$$.fragment, t),
            (l = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t),
            $i(r.$$.fragment, t),
            $i(a.$$.fragment, t),
            $i(s.$$.fragment, t),
            (l = !1);
        },
        d: function (t) {
          Ti(n, t),
            t && Po(e),
            Ti(r, t),
            t && Po(o),
            t && Po(i),
            t && Po(c),
            Ti(a, t),
            t && Po(u),
            Ti(s, t);
        },
      }
    );
  }
  var Up = (function (e) {
    Gt(o, e);
    var r = qp(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, null, Wp, lo, {}), i;
    }
    return o;
  })(Li);
  function Gp(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Vp(t) {
    var n,
      e,
      r = t[2].default,
      o = mo(r, t, t[1], null);
    return {
      c: function () {
        (n = To('ul')), o && o.c(), Io(n, 'class', 'list'), qo(n, 'list--ul', 'ul' === t[0]);
      },
      m: function (t, r) {
        jo(t, n, r), o && o.m(n, null), (e = !0);
      },
      p: function (t, e) {
        var i = Fr(e, 1)[0];
        o && o.p && 2 & i && vo(o, r, t, t[1], i, null, null),
          1 & i && qo(n, 'list--ul', 'ul' === t[0]);
      },
      i: function (t) {
        e || (bi(o, t), (e = !0));
      },
      o: function (t) {
        $i(o, t), (e = !1);
      },
      d: function (t) {
        t && Po(n), o && o.d(t);
      },
    };
  }
  function Yp(t, n, e) {
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
  var Kp = (function (e) {
    Gt(o, e);
    var r = Gp(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, Yp, Vp, lo, { variant: 0 }), i;
    }
    return o;
  })(Li);
  function Xp(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Zp(t) {
    var n, e, r;
    return {
      c: function () {
        ((n = To('li')).innerHTML =
          '<code>opened</code> \n    <div>Fired when DOM elements are created and the modal is visible.</div>'),
          (e = _o()),
          ((r = To('li')).innerHTML =
            '<code>closed</code> \n    <div>Fired when DOM elements are removed and the modal is not anymore visible.</div>');
      },
      m: function (t, o) {
        jo(t, n, o), jo(t, e, o), jo(t, r, o);
      },
      d: function (t) {
        t && Po(n), t && Po(e), t && Po(r);
      },
    };
  }
  function Jp(t) {
    var n, e;
    return (
      (n = new Kp({ props: { $$slots: { default: [Zp] }, $$scope: { ctx: t } } })),
      {
        c: function () {
          Pi(n.$$.fragment);
        },
        m: function (t, r) {
          Ai(n, t, r), (e = !0);
        },
        p: function (t, e) {
          var r = Fr(e, 1)[0],
            o = {};
          1 & r && (o.$$scope = { dirty: r, ctx: t }), n.$set(o);
        },
        i: function (t) {
          e || (bi(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Ti(n, t);
        },
      }
    );
  }
  var Qp = (function (e) {
    Gt(o, e);
    var r = Xp(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, null, Jp, lo, {}), i;
    }
    return o;
  })(Li);
  function tm(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function nm(t) {
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
      M,
      L,
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
      Mt,
      Lt,
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
      (ht = new Hd({
        props: {
          language: 'markup',
          unescaped: !0,
          code:
            "\n<script>\n  import smodale, { Modal } from 'smodale';\n\n  const modalProps = {\n    name: 'modal-name',\n    breakpoints: {\n      // @media (min-width: 768px)\n      '768px': {\n        maxWidth: '450px',\n        centered: true,\n        borderRadius: 'var(--radius-md)',\n      },\n      // @media (min-width: 64rem)\n      '64rem': {\n        maxWidth: '650px',\n      },\n    },\n  };\n\n  smodale.show('modal-name');\n</script>\n\n<Modal {...modalProps}>...</Modal>\n    ",
        },
      })),
      {
        c: function () {
          (n = To('li')),
            ((e = To('strong')).textContent = 'Generic properties'),
            (r = _o()),
            (o = To('ul')),
            (i = To('li')),
            ((c = To('code')).textContent = '{ string } name'),
            (a = _o()),
            ((u = To('div')).innerHTML =
              'An <u>unique</u> and <u>required</u> property when defining a <u>static modal</u>.'),
            (s = _o()),
            (l = To('li')),
            ((f = To('code')).textContent = '{ function } transition'),
            (d = _o()),
            ((p = To('div')).innerHTML =
              'A Svelte\n          <a href="https://svelte.dev/docs#transition_fn" target="_blank" rel="noopener noreferrer">transition</a>\n          function applied on <code>.modal</code> element. Default <code>null</code>.'),
            (m = _o()),
            (h = To('li')),
            ((v = To('code')).textContent = '{ boolean } escapeToClose'),
            (g = _o()),
            ((y = To('div')).innerHTML =
              'Whether or not close the modal on escape key (ESC) press. Default <code>true</code>.'),
            (b = _o()),
            ($ = To('li')),
            ((x = To('code')).textContent = '{ boolean } clickOutsideToClose'),
            (w = _o()),
            ((O = To('div')).innerHTML =
              'Whether or not close the modal on backdrop click. Default <code>true</code>.'),
            (S = _o()),
            (k = To('li')),
            ((R = To('code')).textContent = '{ boolean } disableBodyScroll'),
            (C = _o()),
            ((E = To('div')).innerHTML =
              'Whether or not to prevent body element scroll while the modal is open. Default\n          <code>true</code>.'),
            (j = _o()),
            (P = To('li')),
            ((A = To('code')).textContent = '{ boolean } focusOnOpen'),
            (T = _o()),
            ((M = To('div')).innerHTML =
              'Whether or not move focus automatically to the first focusable element inside the modal\n          when the modal is open. Default <code>true</code>.'),
            (L = _o()),
            (_ = To('li')),
            ((F = To('code')).textContent = '{ boolean } focusTrap'),
            (B = _o()),
            ((I = To('div')).innerHTML =
              'Whether or not focus only the elements that are inside the modal on TAB key press. Default\n          <code>true</code>.'),
            (N = _o()),
            (D = To('li')),
            ((q = To('code')).textContent = '{ string } classes'),
            (H = _o()),
            ((z = To('div')).innerHTML =
              'Append custom classes on <code>.modal</code> element. Default <code>&#39;&#39;</code>.'),
            (W = _o()),
            (U = To('li')),
            ((G = To('code')).textContent = '{ object } transitionParams'),
            (V = _o()),
            (Y = To('div')),
            (K = Lo('A Svelte\n          ')),
            ((X = To('a')).textContent = 'transition parameters'),
            (Z = Lo('\n          object used on transition property. Default ')),
            ((J = To('code')).textContent = '{}'),
            (Q = Lo('.')),
            (tt = _o()),
            (nt = To('li')),
            ((et = To('code')).textContent = '{ object } breakpoints'),
            (rt = _o()),
            (ot = To('p')),
            (it = Lo(
              'Allows to customize the modal with specific properties for different breakpoints. Default\n          '
            )),
            ((ct = To('code')).textContent = '{}'),
            (at = Lo('.')),
            (ut = _o()),
            ((st = To('p')).innerHTML =
              'Breakpoint keys can be defined with <code>px</code>, <code>rem</code> and <code>em</code> units\n          and behaves in a cascade way like CSS rules.'),
            (lt = _o()),
            ((ft = To('blockquote')).innerHTML =
              '⚠️ Allowed properties are only the <u>style properties</u>.'),
            (dt = _o()),
            ((pt = To('strong')).innerHTML = '<small>Example:</small>'),
            (mt = _o()),
            Pi(ht.$$.fragment),
            (vt = _o()),
            (gt = To('li')),
            ((yt = To('strong')).textContent = 'Style properties'),
            (bt = _o()),
            (($t = To('p')).innerHTML =
              'Properties that can be also used in the generic <code>breakpoints</code> property.'),
            (xt = _o()),
            ((wt = To('p')).innerHTML =
              'When properties are <code>string</code> type,\n      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" target="_blank" rel="noopener noreferrer">CSS custom properties</a> can be used.'),
            (Ot = _o()),
            (St = To('ul')),
            (kt = To('li')),
            ((Rt = To('code')).textContent = '{ string } maxWidth'),
            (Ct = _o()),
            ((Et = To('div')).textContent = 'Set max width.'),
            (jt = _o()),
            (Pt = To('li')),
            ((At = To('code')).textContent = '{ string } margin'),
            (Tt = _o()),
            ((Mt = To('div')).textContent = 'Set margin.'),
            (Lt = _o()),
            (_t = To('li')),
            ((Ft = To('code')).textContent = '{ string } height'),
            (Bt = _o()),
            ((It = To('div')).textContent = 'Set height.'),
            (Nt = _o()),
            (Dt = To('li')),
            ((qt = To('code')).textContent = '{ string } backgroundColor'),
            (Ht = _o()),
            ((zt = To('div')).innerHTML = 'Set background color. Default <code>#fff</code>.'),
            (Wt = _o()),
            (Ut = To('li')),
            ((Gt = To('code')).textContent = '{ string } padding'),
            (Vt = _o()),
            ((Yt = To('div')).innerHTML = 'Set padding. Default <code>20px</code>.'),
            (Kt = _o()),
            (Xt = To('li')),
            ((Zt = To('code')).textContent = '{ string } borderRadius'),
            (Jt = _o()),
            ((Qt = To('div')).textContent = 'Set border radius.'),
            (tn = _o()),
            (nn = To('li')),
            ((en = To('code')).textContent = '{ string } backdropColor'),
            (rn = _o()),
            ((on = To('div')).innerHTML =
              'Set backdrop color. Default <code>rgba(0, 0, 0, 0.6)</code>.'),
            (cn = _o()),
            (an = To('li')),
            ((un = To('code')).textContent = '{ string } boxShadow'),
            (sn = _o()),
            ((ln = To('div')).textContent = 'Set box shadow.'),
            (fn = _o()),
            (dn = To('li')),
            ((pn = To('code')).textContent = '{ boolean } centered'),
            (mn = _o()),
            ((hn = To('div')).textContent = 'Whether or not vertically and horizontally centered.'),
            (vn = _o()),
            (gn = To('li')),
            ((yn = To('code')).textContent = '{ boolean } scrollable'),
            (bn = _o()),
            (($n = To('div')).textContent = 'Whether or not scrollable content.'),
            (xn = _o()),
            (wn = To('li')),
            ((On = To('code')).textContent = '{ string } zIndex'),
            (Sn = _o()),
            ((kn = To('div')).innerHTML =
              'Set modal <code>z-index</code>. Default <code>50</code>.'),
            Io(X, 'href', 'https://svelte.dev/docs#Transition_parameters'),
            Io(X, 'target', '_blank'),
            Io(X, 'rel', 'noopener noreferrer');
        },
        m: function (t, Cn) {
          jo(t, n, Cn),
            Eo(n, e),
            Eo(n, r),
            Eo(n, o),
            Eo(o, i),
            Eo(i, c),
            Eo(i, a),
            Eo(i, u),
            Eo(o, s),
            Eo(o, l),
            Eo(l, f),
            Eo(l, d),
            Eo(l, p),
            Eo(o, m),
            Eo(o, h),
            Eo(h, v),
            Eo(h, g),
            Eo(h, y),
            Eo(o, b),
            Eo(o, $),
            Eo($, x),
            Eo($, w),
            Eo($, O),
            Eo(o, S),
            Eo(o, k),
            Eo(k, R),
            Eo(k, C),
            Eo(k, E),
            Eo(o, j),
            Eo(o, P),
            Eo(P, A),
            Eo(P, T),
            Eo(P, M),
            Eo(o, L),
            Eo(o, _),
            Eo(_, F),
            Eo(_, B),
            Eo(_, I),
            Eo(o, N),
            Eo(o, D),
            Eo(D, q),
            Eo(D, H),
            Eo(D, z),
            Eo(o, W),
            Eo(o, U),
            Eo(U, G),
            Eo(U, V),
            Eo(U, Y),
            Eo(Y, K),
            Eo(Y, X),
            Eo(Y, Z),
            Eo(Y, J),
            Eo(Y, Q),
            Eo(o, tt),
            Eo(o, nt),
            Eo(nt, et),
            Eo(nt, rt),
            Eo(nt, ot),
            Eo(ot, it),
            Eo(ot, ct),
            Eo(ot, at),
            Eo(nt, ut),
            Eo(nt, st),
            Eo(nt, lt),
            Eo(nt, ft),
            Eo(nt, dt),
            Eo(nt, pt),
            Eo(nt, mt),
            Ai(ht, nt, null),
            jo(t, vt, Cn),
            jo(t, gt, Cn),
            Eo(gt, yt),
            Eo(gt, bt),
            Eo(gt, $t),
            Eo(gt, xt),
            Eo(gt, wt),
            Eo(gt, Ot),
            Eo(gt, St),
            Eo(St, kt),
            Eo(kt, Rt),
            Eo(kt, Ct),
            Eo(kt, Et),
            Eo(St, jt),
            Eo(St, Pt),
            Eo(Pt, At),
            Eo(Pt, Tt),
            Eo(Pt, Mt),
            Eo(St, Lt),
            Eo(St, _t),
            Eo(_t, Ft),
            Eo(_t, Bt),
            Eo(_t, It),
            Eo(St, Nt),
            Eo(St, Dt),
            Eo(Dt, qt),
            Eo(Dt, Ht),
            Eo(Dt, zt),
            Eo(St, Wt),
            Eo(St, Ut),
            Eo(Ut, Gt),
            Eo(Ut, Vt),
            Eo(Ut, Yt),
            Eo(St, Kt),
            Eo(St, Xt),
            Eo(Xt, Zt),
            Eo(Xt, Jt),
            Eo(Xt, Qt),
            Eo(St, tn),
            Eo(St, nn),
            Eo(nn, en),
            Eo(nn, rn),
            Eo(nn, on),
            Eo(St, cn),
            Eo(St, an),
            Eo(an, un),
            Eo(an, sn),
            Eo(an, ln),
            Eo(St, fn),
            Eo(St, dn),
            Eo(dn, pn),
            Eo(dn, mn),
            Eo(dn, hn),
            Eo(St, vn),
            Eo(St, gn),
            Eo(gn, yn),
            Eo(gn, bn),
            Eo(gn, $n),
            Eo(St, xn),
            Eo(St, wn),
            Eo(wn, On),
            Eo(wn, Sn),
            Eo(wn, kn),
            (Rn = !0);
        },
        p: ro,
        i: function (t) {
          Rn || (bi(ht.$$.fragment, t), (Rn = !0));
        },
        o: function (t) {
          $i(ht.$$.fragment, t), (Rn = !1);
        },
        d: function (t) {
          t && Po(n), Ti(ht), t && Po(vt), t && Po(gt);
        },
      }
    );
  }
  function em(t) {
    var n, e, r, o;
    return (
      (r = new Kp({ props: { $$slots: { default: [nm] }, $$scope: { ctx: t } } })),
      {
        c: function () {
          ((n = To('p')).innerHTML =
            'There are 2 types of properties: <u>generic</u> ones which will handle some base functionalities\n  and\n  <u>style</u> ones which will customize the modal.'),
            (e = _o()),
            Pi(r.$$.fragment);
        },
        m: function (t, i) {
          jo(t, n, i), jo(t, e, i), Ai(r, t, i), (o = !0);
        },
        p: function (t, n) {
          var e = Fr(n, 1)[0],
            o = {};
          1 & e && (o.$$scope = { dirty: e, ctx: t }), r.$set(o);
        },
        i: function (t) {
          o || (bi(r.$$.fragment, t), (o = !0));
        },
        o: function (t) {
          $i(r.$$.fragment, t), (o = !1);
        },
        d: function (t) {
          t && Po(n), t && Po(e), Ti(r, t);
        },
      }
    );
  }
  var rm = (function (e) {
    Gt(o, e);
    var r = tm(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, null, em, lo, {}), i;
    }
    return o;
  })(Li);
  function om(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function im(t) {
    var n, e, r, o, i, c, a, u, s, l, f, d, p, m, h, v, g, y, b, $, x, w, O, S, k;
    return (
      (S = new Hd({
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
          (n = To('li')),
            ((e = To('strong')).innerHTML = '<small>Arguments:</small>'),
            (r = _o()),
            (o = To('ul')),
            (i = To('li')),
            ((c = To('code')).textContent = '{ string | SvelteComponent } name (required)'),
            (a = _o()),
            (u = To('li')),
            ((s = To('code')).textContent = '{ object } componentProps (optional)'),
            (l = _o()),
            (f = To('li')),
            ((d = To('code')).textContent = '{ object } modalProps (optional)'),
            (p = _o()),
            (m = To('li')),
            ((h = To('code')).textContent = '{ object } modalEvents (optional)'),
            (v = _o()),
            ((g = To('p')).innerHTML =
              'Optional arguments are consumed when <code>name</code> it&#39;s a\n        <code>SvelteComponent</code> object.'),
            (y = _o()),
            ((b = To('li')).innerHTML =
              '<strong><small>Returns:</small></strong> \n    <ul><li>A<code>Promise</code> object.</li></ul>'),
            ($ = _o()),
            (x = To('li')),
            ((w = To('strong')).innerHTML = '<small>Example:</small>'),
            (O = _o()),
            Pi(S.$$.fragment);
        },
        m: function (t, R) {
          jo(t, n, R),
            Eo(n, e),
            Eo(n, r),
            Eo(n, o),
            Eo(o, i),
            Eo(i, c),
            Eo(o, a),
            Eo(o, u),
            Eo(u, s),
            Eo(o, l),
            Eo(o, f),
            Eo(f, d),
            Eo(o, p),
            Eo(o, m),
            Eo(m, h),
            Eo(o, v),
            Eo(o, g),
            jo(t, y, R),
            jo(t, b, R),
            jo(t, $, R),
            jo(t, x, R),
            Eo(x, w),
            Eo(x, O),
            Ai(S, x, null),
            (k = !0);
        },
        p: ro,
        i: function (t) {
          k || (bi(S.$$.fragment, t), (k = !0));
        },
        o: function (t) {
          $i(S.$$.fragment, t), (k = !1);
        },
        d: function (t) {
          t && Po(n), t && Po(y), t && Po(b), t && Po($), t && Po(x), Ti(S);
        },
      }
    );
  }
  function cm(t) {
    var n, e, r, o, i, c, a, u, s, l, f, d, p, m, h, v;
    return (
      (h = new Hd({
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
          (n = To('li')),
            ((e = To('strong')).innerHTML = '<small>Arguments:</small>'),
            (r = _o()),
            (o = To('ul')),
            (i = To('li')),
            ((c = To('code')).textContent = '{ string } name (required)'),
            (a = _o()),
            (u = To('li')),
            ((s = To('code')).textContent = '{ any } data (optional)'),
            (l = Lo(' — Argument for the resolved promise')),
            (f = _o()),
            (d = To('li')),
            ((p = To('strong')).innerHTML = '<small>Example:</small>'),
            (m = _o()),
            Pi(h.$$.fragment);
        },
        m: function (t, g) {
          jo(t, n, g),
            Eo(n, e),
            Eo(n, r),
            Eo(n, o),
            Eo(o, i),
            Eo(i, c),
            Eo(o, a),
            Eo(o, u),
            Eo(u, s),
            Eo(u, l),
            jo(t, f, g),
            jo(t, d, g),
            Eo(d, p),
            Eo(d, m),
            Ai(h, d, null),
            (v = !0);
        },
        p: ro,
        i: function (t) {
          v || (bi(h.$$.fragment, t), (v = !0));
        },
        o: function (t) {
          $i(h.$$.fragment, t), (v = !1);
        },
        d: function (t) {
          t && Po(n), t && Po(f), t && Po(d), Ti(h);
        },
      }
    );
  }
  function am(t) {
    var n, e, r, o, i, c, a, u, s, l, f, d, p, m, h, v;
    return (
      (h = new Hd({
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
          (n = To('li')),
            ((e = To('strong')).innerHTML = '<small>Arguments:</small>'),
            (r = _o()),
            (o = To('ul')),
            (i = To('li')),
            ((c = To('code')).textContent = '{ string } name (required)'),
            (a = _o()),
            (u = To('li')),
            ((s = To('code')).textContent = '{ any } data (optional)'),
            (l = Lo(' — Argument for the rejected promise')),
            (f = _o()),
            (d = To('li')),
            ((p = To('strong')).innerHTML = '<small>Example:</small>'),
            (m = _o()),
            Pi(h.$$.fragment);
        },
        m: function (t, g) {
          jo(t, n, g),
            Eo(n, e),
            Eo(n, r),
            Eo(n, o),
            Eo(o, i),
            Eo(i, c),
            Eo(o, a),
            Eo(o, u),
            Eo(u, s),
            Eo(u, l),
            jo(t, f, g),
            jo(t, d, g),
            Eo(d, p),
            Eo(d, m),
            Ai(h, d, null),
            (v = !0);
        },
        p: ro,
        i: function (t) {
          v || (bi(h.$$.fragment, t), (v = !0));
        },
        o: function (t) {
          $i(h.$$.fragment, t), (v = !1);
        },
        d: function (t) {
          t && Po(n), t && Po(f), t && Po(d), Ti(h);
        },
      }
    );
  }
  function um(t) {
    var n, e, r, o, i, c, a, u, s;
    return (
      (c = new Hd({
        props: {
          filename: 'MyCustomModalContent.svelte',
          language: 'markup',
          unescaped: !0,
          code:
            "\n<script>\n  import { getModalContext } from 'smodale';\n  \n  const { hide, cancel, component } = getModalContext();\n\n  console.log(component);\n\n  const onCancelClick = () => cancel('cancelled');\n  const onOkClick = () => hide({ foo: 'bar' });\n\n  <button on:click={onCancelClick}>Cancel</button>\n  <button on:click={onOkClick}>Ok</button>\n</script>\n",
        },
      })),
      (u = new Hd({
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
          ((n = To('li')).innerHTML =
            '<strong><small>Returns:</small></strong> \n    <ul><li>An <code>Object</code> with the following properties.\n        <ul><li><code>hide(data: any)</code> — Hide modal and resolve the promise</li> \n          <li><code>close(data: any)</code> — Hide modal and reject the promise</li> \n          <li><code>component</code> — <code>Modal</code> component instance</li></ul></li></ul>'),
            (e = _o()),
            (r = To('li')),
            ((o = To('strong')).innerHTML = '<small>Example:</small>'),
            (i = _o()),
            Pi(c.$$.fragment),
            (a = _o()),
            Pi(u.$$.fragment);
        },
        m: function (t, l) {
          jo(t, n, l),
            jo(t, e, l),
            jo(t, r, l),
            Eo(r, o),
            Eo(r, i),
            Ai(c, r, null),
            Eo(r, a),
            Ai(u, r, null),
            (s = !0);
        },
        p: ro,
        i: function (t) {
          s || (bi(c.$$.fragment, t), bi(u.$$.fragment, t), (s = !0));
        },
        o: function (t) {
          $i(c.$$.fragment, t), $i(u.$$.fragment, t), (s = !1);
        },
        d: function (t) {
          t && Po(n), t && Po(e), t && Po(r), Ti(c), Ti(u);
        },
      }
    );
  }
  function sm(t) {
    var n, e, r, o, i, c, a, u, s, l, f;
    return (
      (l = new Hd({
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
          ((n = To('li')).innerHTML =
            '<strong><small>Type:</small></strong>  <code>Object</code> \n    <ul><li><code>BACKDROP_CLICK</code></li> \n      <li><code>ESC</code></li></ul>'),
            (e = _o()),
            ((r = To('li')).innerHTML = '<strong><small>Read only</small></strong>'),
            (o = _o()),
            ((i = To('li')).innerHTML =
              '<strong><small>Details:</small></strong> \n    <p>When props <code>escapeToClose</code> or <code>clickOutsideToClose</code> are set to\n      <code>true</code>the modal will be closed with the <code>cancel()</code> method with a dismiss\n      string argument.</p>'),
            (c = _o()),
            (a = To('li')),
            ((u = To('strong')).innerHTML = '<small>Example:</small>'),
            (s = _o()),
            Pi(l.$$.fragment);
        },
        m: function (t, d) {
          jo(t, n, d),
            jo(t, e, d),
            jo(t, r, d),
            jo(t, o, d),
            jo(t, i, d),
            jo(t, c, d),
            jo(t, a, d),
            Eo(a, u),
            Eo(a, s),
            Ai(l, a, null),
            (f = !0);
        },
        p: ro,
        i: function (t) {
          f || (bi(l.$$.fragment, t), (f = !0));
        },
        o: function (t) {
          $i(l.$$.fragment, t), (f = !1);
        },
        d: function (t) {
          t && Po(n), t && Po(e), t && Po(r), t && Po(o), t && Po(i), t && Po(c), t && Po(a), Ti(l);
        },
      }
    );
  }
  function lm(t) {
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
      M,
      L,
      _,
      F,
      B,
      I,
      N,
      D;
    return (
      (a = new Kp({ props: { $$slots: { default: [im] }, $$scope: { ctx: t } } })),
      (h = new Kp({ props: { $$slots: { default: [cm] }, $$scope: { ctx: t } } })),
      (O = new Kp({ props: { $$slots: { default: [am] }, $$scope: { ctx: t } } })),
      (A = new Kp({ props: { $$slots: { default: [um] }, $$scope: { ctx: t } } })),
      (N = new Kp({ props: { $$slots: { default: [sm] }, $$scope: { ctx: t } } })),
      {
        c: function () {
          ((n = To('h4')).innerHTML = '<code>show()</code>'),
            (e = _o()),
            (r = To('hr')),
            (o = _o()),
            ((i = To('p')).textContent = 'Display a static or dynamic modal.'),
            (c = _o()),
            Pi(a.$$.fragment),
            (u = _o()),
            ((s = To('h4')).innerHTML = '<code>hide()</code>'),
            (l = _o()),
            (f = To('hr')),
            (d = _o()),
            ((p = To('p')).innerHTML =
              'Hide an existing modal and <u>resolve</u> the promise returned from <code>show()</code>'),
            (m = _o()),
            Pi(h.$$.fragment),
            (v = _o()),
            ((g = To('h4')).innerHTML = '<code>cancel()</code>'),
            (y = _o()),
            (b = To('hr')),
            ($ = _o()),
            ((x = To('p')).innerHTML =
              'Hide an existing modal and <u>reject</u> the promise returned from <code>show()</code>'),
            (w = _o()),
            Pi(O.$$.fragment),
            (S = _o()),
            ((k = To('h4')).innerHTML = '<code>getModalContext()</code>'),
            (R = _o()),
            (C = To('hr')),
            (E = _o()),
            ((j = To('p')).innerHTML =
              'Usable in children components of <code>Modal</code> component or in custom components for dynamic modals.'),
            (P = _o()),
            Pi(A.$$.fragment),
            (T = _o()),
            ((M = To('h4')).innerHTML = '<code>ModalDismissReasons</code>'),
            (L = _o()),
            (_ = To('hr')),
            (F = _o()),
            ((B = To('p')).textContent = "Constants for checking what's the modal close reason."),
            (I = _o()),
            Pi(N.$$.fragment);
        },
        m: function (t, q) {
          jo(t, n, q),
            jo(t, e, q),
            jo(t, r, q),
            jo(t, o, q),
            jo(t, i, q),
            jo(t, c, q),
            Ai(a, t, q),
            jo(t, u, q),
            jo(t, s, q),
            jo(t, l, q),
            jo(t, f, q),
            jo(t, d, q),
            jo(t, p, q),
            jo(t, m, q),
            Ai(h, t, q),
            jo(t, v, q),
            jo(t, g, q),
            jo(t, y, q),
            jo(t, b, q),
            jo(t, $, q),
            jo(t, x, q),
            jo(t, w, q),
            Ai(O, t, q),
            jo(t, S, q),
            jo(t, k, q),
            jo(t, R, q),
            jo(t, C, q),
            jo(t, E, q),
            jo(t, j, q),
            jo(t, P, q),
            Ai(A, t, q),
            jo(t, T, q),
            jo(t, M, q),
            jo(t, L, q),
            jo(t, _, q),
            jo(t, F, q),
            jo(t, B, q),
            jo(t, I, q),
            Ai(N, t, q),
            (D = !0);
        },
        p: function (t, n) {
          var e = Fr(n, 1)[0],
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
            (bi(a.$$.fragment, t),
            bi(h.$$.fragment, t),
            bi(O.$$.fragment, t),
            bi(A.$$.fragment, t),
            bi(N.$$.fragment, t),
            (D = !0));
        },
        o: function (t) {
          $i(a.$$.fragment, t),
            $i(h.$$.fragment, t),
            $i(O.$$.fragment, t),
            $i(A.$$.fragment, t),
            $i(N.$$.fragment, t),
            (D = !1);
        },
        d: function (t) {
          t && Po(n),
            t && Po(e),
            t && Po(r),
            t && Po(o),
            t && Po(i),
            t && Po(c),
            Ti(a, t),
            t && Po(u),
            t && Po(s),
            t && Po(l),
            t && Po(f),
            t && Po(d),
            t && Po(p),
            t && Po(m),
            Ti(h, t),
            t && Po(v),
            t && Po(g),
            t && Po(y),
            t && Po(b),
            t && Po($),
            t && Po(x),
            t && Po(w),
            Ti(O, t),
            t && Po(S),
            t && Po(k),
            t && Po(R),
            t && Po(C),
            t && Po(E),
            t && Po(j),
            t && Po(P),
            Ti(A, t),
            t && Po(T),
            t && Po(M),
            t && Po(L),
            t && Po(_),
            t && Po(F),
            t && Po(B),
            t && Po(I),
            Ti(N, t);
        },
      }
    );
  }
  var fm = (function (e) {
    Gt(o, e);
    var r = om(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, null, lm, lo, {}), i;
    }
    return o;
  })(Li);
  function dm(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function pm(t) {
    var n, e, r, o, i, c, a, u, s, l, f, d, p, m, h, v, g, y, b, $, x, w;
    return (
      (n = new Hd({ props: { language: 'bash', code: 'npm i -S smodale' } })),
      (f = new Hd({
        props: {
          filename: 'App.svelte',
          language: 'markup',
          unescaped: !0,
          code:
            "\n<script>\n  import smodale, { Modal } from 'smodale';\n\n  smodale.show('modal-name')\n    .then(data => {\n      console.log(data); // { foo: 'bar' }\n    })\n    .catch(data => {\n      console.log(data); // 'cancelled'\n    });\n\n  const onCancelClick = () => smodale.cancel('modal-name', 'cancelled');\n  const onOkClick = () => smodale.hide('modal-name', { foo: 'bar' });\n</script>\n\n<Modal name=\"modal-name\">\n  <h1>Modal title</h1>\n  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>\n  <button on:click={onCancelClick}>Cancel</button>\n  <button on:click={onOkClick}>Ok</button>\n</Modal>\n",
        },
      })),
      (b = new Hd({
        props: {
          filename: 'MyCustomModalContent.svelte',
          language: 'markup',
          unescaped: !0,
          code:
            "\n<script>\n  import { getModalContext } from 'smodale';\n\n  const { hide, cancel } = getModalContext();\n\n  export let text = '';\n\n  const onCancelClick = () => cancel(text.toUpperCase());\n  const onOkClick = () => hide({ foo: 'bar' });\n</script>\n\n<button on:click={onCancelClick}>Cancel</button>\n<button on:click={onOkClick}>Ok</button>\n  ",
        },
      })),
      (x = new Hd({
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
          Pi(n.$$.fragment),
            (e = _o()),
            ((r = To('h3')).textContent = 'Usage'),
            (o = _o()),
            ((i = To('p')).textContent =
              'Modals can be shown statically or dynamically. When shown dynamically can be also nested.'),
            (c = _o()),
            ((a = To('h4')).textContent = 'Static modal'),
            (u = _o()),
            ((s = To('p')).innerHTML =
              'They are defined through a <code>Modal</code> component in the template markup. When using static\n  modals the property <code>name</code> it&#39;s mandatory and must be unique.'),
            (l = _o()),
            Pi(f.$$.fragment),
            (d = _o()),
            ((p = To('h4')).textContent = 'Dynamic modal'),
            (m = _o()),
            ((h = To('p')).innerHTML =
              'They are generated at runtime by using <code>show()</code> method. When using dynamic modals you should\n  first define your modal content as a Svelte component.'),
            (v = _o()),
            ((g = To('blockquote')).innerHTML =
              '<p>Dynamic modals are useful especially for code splitting or when you need to show multiple modals\n    at the same time (nested modals)</p>'),
            (y = _o()),
            Pi(b.$$.fragment),
            ($ = _o()),
            Pi(x.$$.fragment);
        },
        m: function (t, O) {
          Ai(n, t, O),
            jo(t, e, O),
            jo(t, r, O),
            jo(t, o, O),
            jo(t, i, O),
            jo(t, c, O),
            jo(t, a, O),
            jo(t, u, O),
            jo(t, s, O),
            jo(t, l, O),
            Ai(f, t, O),
            jo(t, d, O),
            jo(t, p, O),
            jo(t, m, O),
            jo(t, h, O),
            jo(t, v, O),
            jo(t, g, O),
            jo(t, y, O),
            Ai(b, t, O),
            jo(t, $, O),
            Ai(x, t, O),
            (w = !0);
        },
        p: ro,
        i: function (t) {
          w ||
            (bi(n.$$.fragment, t),
            bi(f.$$.fragment, t),
            bi(b.$$.fragment, t),
            bi(x.$$.fragment, t),
            (w = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t),
            $i(f.$$.fragment, t),
            $i(b.$$.fragment, t),
            $i(x.$$.fragment, t),
            (w = !1);
        },
        d: function (t) {
          Ti(n, t),
            t && Po(e),
            t && Po(r),
            t && Po(o),
            t && Po(i),
            t && Po(c),
            t && Po(a),
            t && Po(u),
            t && Po(s),
            t && Po(l),
            Ti(f, t),
            t && Po(d),
            t && Po(p),
            t && Po(m),
            t && Po(h),
            t && Po(v),
            t && Po(g),
            t && Po(y),
            Ti(b, t),
            t && Po($),
            Ti(x, t);
        },
      }
    );
  }
  var mm = (function (e) {
    Gt(o, e);
    var r = dm(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, null, pm, lo, {}), i;
    }
    return o;
  })(Li);
  function hm(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function vm(t) {
    var n, e, r, o, i;
    return {
      c: function () {
        ((n = To('p')).innerHTML =
          'Smodale uses <code>svelte/store</code> module for handling the visibility of modals and when\n  supported it also uses <code>ResizeObserver</code> for detecting screen changes.'),
          (e = _o()),
          ((r = To('p')).innerHTML =
            'By default when a modal it&#39;s shown will fit the viewport height and width, which could be a common\n  case when on mobile devices however the <code>breakpoints</code> property will allow the definition\n  of some parameters which will style modals on different screen sizes.'),
          (o = _o()),
          ((i = To('p')).textContent =
            'Smodale also provides a built-in way for getting back data on modal acceptance or removal.');
      },
      m: function (t, c) {
        jo(t, n, c), jo(t, e, c), jo(t, r, c), jo(t, o, c), jo(t, i, c);
      },
      p: ro,
      i: ro,
      o: ro,
      d: function (t) {
        t && Po(n), t && Po(e), t && Po(r), t && Po(o), t && Po(i);
      },
    };
  }
  var gm = (function (e) {
    Gt(o, e);
    var r = hm(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, null, vm, lo, {}), i;
    }
    return o;
  })(Li);
  function ym(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function bm(t) {
    var n;
    return {
      c: function () {
        (n = To('li')).innerHTML =
          '<code>default</code> \n    <div>Slot for the modal content.</div>';
      },
      m: function (t, e) {
        jo(t, n, e);
      },
      d: function (t) {
        t && Po(n);
      },
    };
  }
  function $m(t) {
    var n, e;
    return (
      (n = new Kp({ props: { $$slots: { default: [bm] }, $$scope: { ctx: t } } })),
      {
        c: function () {
          Pi(n.$$.fragment);
        },
        m: function (t, r) {
          Ai(n, t, r), (e = !0);
        },
        p: function (t, e) {
          var r = Fr(e, 1)[0],
            o = {};
          1 & r && (o.$$scope = { dirty: r, ctx: t }), n.$set(o);
        },
        i: function (t) {
          e || (bi(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Ti(n, t);
        },
      }
    );
  }
  var xm = (function (e) {
    Gt(o, e);
    var r = ym(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, null, $m, lo, {}), i;
    }
    return o;
  })(Li);
  function wm(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Om(t) {
    var n, e, r;
    return {
      c: function () {
        ((n = To('button')).textContent = 'Show modal with fade transtion'),
          Io(n, 'class', 'btn btn--accent'),
          Io(n, 'type', 'button');
      },
      m: function (o, i) {
        jo(o, n, i), e || ((r = Bo(n, 'click', t[0])), (e = !0));
      },
      p: ro,
      i: ro,
      o: ro,
      d: function (t) {
        t && Po(n), (e = !1), r();
      },
    };
  }
  function Sm(t) {
    return [
      function () {
        return Ts.show(Tl, null, {
          transition: Ii,
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
  var km = (function (e) {
    Gt(o, e);
    var r = wm(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, Sm, Om, lo, {}), i;
    }
    return o;
  })(Li);
  function Rm(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Cm(t) {
    var n, e, r;
    return {
      c: function () {
        ((n = To('button')).textContent = 'Show modal with blur transtion'),
          Io(n, 'class', 'btn btn--accent'),
          Io(n, 'type', 'button');
      },
      m: function (o, i) {
        jo(o, n, i), e || ((r = Bo(n, 'click', t[0])), (e = !0));
      },
      p: ro,
      i: ro,
      o: ro,
      d: function (t) {
        t && Po(n), (e = !1), r();
      },
    };
  }
  function Em(t) {
    return [
      function () {
        return Ts.show(Tl, null, {
          transition: Bi,
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
  var jm = (function (e) {
    Gt(o, e);
    var r = Rm(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, Em, Cm, lo, {}), i;
    }
    return o;
  })(Li);
  function Pm(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Am(t) {
    var n, e;
    return (
      (n = new Hd({
        props: {
          'data-src': 'demo/components/organisms/SectionTransition/TransitionFadeExample.svelte',
        },
      })),
      {
        c: function () {
          Pi(n.$$.fragment);
        },
        m: function (t, r) {
          Ai(n, t, r), (e = !0);
        },
        p: ro,
        i: function (t) {
          e || (bi(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Ti(n, t);
        },
      }
    );
  }
  function Tm(t) {
    var n, e;
    return (
      (n = new Hd({
        props: {
          'data-src': 'demo/components/organisms/SectionTransition/TransitionBlurExample.svelte',
        },
      })),
      {
        c: function () {
          Pi(n.$$.fragment);
        },
        m: function (t, r) {
          Ai(n, t, r), (e = !0);
        },
        p: ro,
        i: function (t) {
          e || (bi(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Ti(n, t);
        },
      }
    );
  }
  function Mm(t) {
    var n, e, r, o, i, c, a, u, s, l;
    return (
      (n = new km({})),
      (r = new np({
        props: {
          class: 'margin-top-sm',
          title: 'Show code',
          $$slots: { default: [Am] },
          $$scope: { ctx: t },
        },
      })),
      (a = new jm({})),
      (s = new np({
        props: {
          class: 'margin-top-sm',
          title: 'Show code',
          $$slots: { default: [Tm] },
          $$scope: { ctx: t },
        },
      })),
      {
        c: function () {
          Pi(n.$$.fragment),
            (e = _o()),
            Pi(r.$$.fragment),
            (o = _o()),
            (i = To('div')),
            (c = _o()),
            Pi(a.$$.fragment),
            (u = _o()),
            Pi(s.$$.fragment),
            Io(i, 'class', 'margin-top-sm');
        },
        m: function (t, f) {
          Ai(n, t, f),
            jo(t, e, f),
            Ai(r, t, f),
            jo(t, o, f),
            jo(t, i, f),
            jo(t, c, f),
            Ai(a, t, f),
            jo(t, u, f),
            Ai(s, t, f),
            (l = !0);
        },
        p: function (t, n) {
          var e = Fr(n, 1)[0],
            o = {};
          1 & e && (o.$$scope = { dirty: e, ctx: t }), r.$set(o);
          var i = {};
          1 & e && (i.$$scope = { dirty: e, ctx: t }), s.$set(i);
        },
        i: function (t) {
          l ||
            (bi(n.$$.fragment, t),
            bi(r.$$.fragment, t),
            bi(a.$$.fragment, t),
            bi(s.$$.fragment, t),
            (l = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t),
            $i(r.$$.fragment, t),
            $i(a.$$.fragment, t),
            $i(s.$$.fragment, t),
            (l = !1);
        },
        d: function (t) {
          Ti(n, t),
            t && Po(e),
            Ti(r, t),
            t && Po(o),
            t && Po(i),
            t && Po(c),
            Ti(a, t),
            t && Po(u),
            Ti(s, t);
        },
      }
    );
  }
  var Lm = (function (e) {
    Gt(o, e);
    var r = Pm(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, null, Mm, lo, {}), i;
    }
    return o;
  })(Li);
  function _m(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Fm(t) {
    var n, e, r;
    return {
      c: function () {
        ((n = To('button')).textContent = 'Show modal with custom breakpoints'),
          Io(n, 'class', 'btn btn--accent'),
          Io(n, 'type', 'button');
      },
      m: function (o, i) {
        jo(o, n, i), e || ((r = Bo(n, 'click', t[0])), (e = !0));
      },
      p: ro,
      i: ro,
      o: ro,
      d: function (t) {
        t && Po(n), (e = !1), r();
      },
    };
  }
  function Bm(t) {
    return [
      function () {
        return Ts.show(Tl, null, {
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
  var Im = (function (e) {
    Gt(o, e);
    var r = _m(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, Bm, Fm, lo, {}), i;
    }
    return o;
  })(Li);
  function Nm(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Dm(t) {
    var n, e;
    return (
      (n = new Hd({
        props: {
          'data-src': 'demo/components/organisms/SectionBreakpoints/BreakpointsExample.svelte',
        },
      })),
      {
        c: function () {
          Pi(n.$$.fragment);
        },
        m: function (t, r) {
          Ai(n, t, r), (e = !0);
        },
        p: ro,
        i: function (t) {
          e || (bi(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Ti(n, t);
        },
      }
    );
  }
  function qm(t) {
    var n, e, r, o;
    return (
      (n = new Im({})),
      (r = new np({
        props: {
          class: 'margin-top-sm',
          title: 'Show code',
          $$slots: { default: [Dm] },
          $$scope: { ctx: t },
        },
      })),
      {
        c: function () {
          Pi(n.$$.fragment), (e = _o()), Pi(r.$$.fragment);
        },
        m: function (t, i) {
          Ai(n, t, i), jo(t, e, i), Ai(r, t, i), (o = !0);
        },
        p: function (t, n) {
          var e = Fr(n, 1)[0],
            o = {};
          1 & e && (o.$$scope = { dirty: e, ctx: t }), r.$set(o);
        },
        i: function (t) {
          o || (bi(n.$$.fragment, t), bi(r.$$.fragment, t), (o = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t), $i(r.$$.fragment, t), (o = !1);
        },
        d: function (t) {
          Ti(n, t), t && Po(e), Ti(r, t);
        },
      }
    );
  }
  var Hm = (function (e) {
    Gt(o, e);
    var r = Nm(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, null, qm, lo, {}), i;
    }
    return o;
  })(Li);
  function zm(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Wm(t) {
    var n, e, r, o, i, c, a, u;
    return {
      c: function () {
        (n = To('figure')),
          (e = To('iframe')),
          (r = _o()),
          (o = To('div')),
          (i = To('button')),
          (c = To('img')),
          Io(e, 'title', Gm),
          e.src !== 'https://www.youtube.com/embed/gJ2P6hGwcgo' &&
            Io(e, 'src', 'https://www.youtube.com/embed/gJ2P6hGwcgo'),
          Io(e, 'width', '640'),
          Io(e, 'height', '360'),
          Io(e, 'frameborder', '0'),
          Io(e, 'webkitallowfullscreen', ''),
          Io(e, 'mozallowfullscreen', ''),
          (e.allowFullscreen = !0),
          Io(n, 'class', 'aspect-ratio-16:9 bg-black'),
          Io(c, 'class', 'icon icon--sm'),
          c.src !== ll &&
            Io(
              c,
              'src',
              "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48' height='48' viewBox='0 0 48 48'%3e %3cg transform='translate(0%2c 0)'%3e %3cpolygon points='37.435 7.736 24 21.172 10.565 7.736 7.737 10.564 21.172 24 7.737 37.436 10.565 40.264 24 26.828 37.435 40.264 40.263 37.436 26.828 24 40.263 10.564 37.435 7.736' fill='currentColor' %3e%3c/polygon%3e %3c/g%3e%3c/svg%3e"
            ),
          Io(c, 'alt', 'Close'),
          Io(i, 'class', 'btn btn--subtle padding-xs js-tab-focus radius-full'),
          Io(i, 'type', 'button'),
          Io(o, 'class', 'position-absolute top-md right-md');
      },
      m: function (s, l) {
        jo(s, n, l),
          Eo(n, e),
          jo(s, r, l),
          jo(s, o, l),
          Eo(o, i),
          Eo(i, c),
          a || ((u = Bo(i, 'click', t[2])), (a = !0));
      },
      p: ro,
      d: function (t) {
        t && Po(n), t && Po(r), t && Po(o), (a = !1), u();
      },
    };
  }
  function Um(t) {
    for (
      var n,
        e,
        r,
        o,
        i,
        c,
        a = [t[0]],
        u = { $$slots: { default: [Wm] }, $$scope: { ctx: t } },
        s = 0;
      s < a.length;
      s += 1
    )
      u = io(u, a[s]);
    return (
      (r = new ds({ props: u })),
      {
        c: function () {
          ((n = To('button')).textContent = 'Show modal video'),
            (e = _o()),
            Pi(r.$$.fragment),
            Io(n, 'class', 'btn btn--accent'),
            Io(n, 'type', 'button');
        },
        m: function (a, u) {
          jo(a, n, u),
            jo(a, e, u),
            Ai(r, a, u),
            (o = !0),
            i || ((c = Bo(n, 'click', t[1])), (i = !0));
        },
        p: function (t, n) {
          var e = Fr(n, 1)[0],
            o = 1 & e ? Ei(a, [ji(t[0])]) : {};
          8 & e && (o.$$scope = { dirty: e, ctx: t }), r.$set(o);
        },
        i: function (t) {
          o || (bi(r.$$.fragment, t), (o = !0));
        },
        o: function (t) {
          $i(r.$$.fragment, t), (o = !1);
        },
        d: function (t) {
          t && Po(n), t && Po(e), Ti(r, t), (i = !1), c();
        },
      }
    );
  }
  var Gm = 'modal-video';
  function Vm(t) {
    return [
      {
        name: Gm,
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
        return Ts.show(Gm);
      },
      function () {
        return Ts.cancel(Gm);
      },
    ];
  }
  var Ym = (function (e) {
    Gt(o, e);
    var r = zm(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, Vm, Um, lo, {}), i;
    }
    return o;
  })(Li);
  function Km(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function Xm(t) {
    var n, e;
    return (
      (n = new Hd({
        props: { 'data-src': 'demo/components/organisms/SectionVideo/VideoExample.svelte' },
      })),
      {
        c: function () {
          Pi(n.$$.fragment);
        },
        m: function (t, r) {
          Ai(n, t, r), (e = !0);
        },
        p: ro,
        i: function (t) {
          e || (bi(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Ti(n, t);
        },
      }
    );
  }
  function Zm(t) {
    var n, e, r, o;
    return (
      (n = new Ym({})),
      (r = new np({
        props: {
          class: 'margin-top-sm',
          title: 'Show code',
          $$slots: { default: [Xm] },
          $$scope: { ctx: t },
        },
      })),
      {
        c: function () {
          Pi(n.$$.fragment), (e = _o()), Pi(r.$$.fragment);
        },
        m: function (t, i) {
          Ai(n, t, i), jo(t, e, i), Ai(r, t, i), (o = !0);
        },
        p: function (t, n) {
          var e = Fr(n, 1)[0],
            o = {};
          1 & e && (o.$$scope = { dirty: e, ctx: t }), r.$set(o);
        },
        i: function (t) {
          o || (bi(n.$$.fragment, t), bi(r.$$.fragment, t), (o = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t), $i(r.$$.fragment, t), (o = !1);
        },
        d: function (t) {
          Ti(n, t), t && Po(e), Ti(r, t);
        },
      }
    );
  }
  var Jm = [
    {
      label: 'Getting started',
      items: [
        { id: 'introduction', label: 'Introduction', component: gm },
        { id: 'installation', label: 'Installation', component: mm },
      ],
    },
    {
      label: 'Component',
      items: [
        { id: 'api', label: 'API', component: fm },
        { id: 'properties', label: 'Properties', component: rm },
        { id: 'events', label: 'Events', component: Qp },
        { id: 'slots', label: 'Slots', component: xm },
      ],
    },
    {
      label: 'Examples',
      items: [
        { id: 'centered', label: 'Centered', component: wp },
        { id: 'long-content', label: 'Long content', component: Up },
        { id: 'nested-modals', label: 'Nested modals', component: ip },
        { id: 'transition', label: 'Transition', component: Lm },
        { id: 'breakpoints', label: 'Breakpoints', component: Hm },
        {
          id: 'video',
          label: 'Video',
          component: (function (e) {
            Gt(o, e);
            var r = Km(o);
            function o(e) {
              var i;
              return t(this, o), Mi(n((i = r.call(this))), e, null, Zm, lo, {}), i;
            }
            return o;
          })(Li),
        },
      ],
    },
    {
      label: 'Other',
      items: [
        { id: 'troubleshooting', label: 'Troubleshooting', component: Ud },
        { id: 'support', label: 'Support', component: fd },
      ],
    },
  ];
  function Qm(t) {
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
        r = ar(t);
      if (n) {
        var o = ar(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return ir(this, e);
    };
  }
  function th(t, n, e) {
    var r = t.slice();
    return (r[12] = n[e].id), (r[8] = n[e].label), (r[16] = n[e].component), (r[11] = e), r;
  }
  function nh(t, n, e) {
    var r = t.slice();
    return (r[8] = n[e].label), (r[9] = n[e].items), (r[11] = e), r;
  }
  function eh(t, n, e) {
    var r = t.slice();
    return (r[12] = n[e].id), (r[8] = n[e].label), (r[14] = e), r;
  }
  function rh(t) {
    var n, e;
    return (
      (n = new Tl({})),
      {
        c: function () {
          Pi(n.$$.fragment);
        },
        m: function (t, r) {
          Ai(n, t, r), (e = !0);
        },
        i: function (t) {
          e || (bi(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Ti(n, t);
        },
      }
    );
  }
  function oh(t) {
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
          (n = To('h2')), (e = Lo(a)), (r = _o()), o && Pi(o.$$.fragment), (i = _o());
        },
        m: function (t, a) {
          jo(t, n, a), Eo(n, e), jo(t, r, a), o && Ai(o, t, a), jo(t, i, a), (c = !0);
        },
        p: function (t, n) {
          if (((!c || 1 & n) && a !== (a = t[8] + '') && Do(e, a), u !== (u = t[16]))) {
            if (o) {
              gi();
              var r = o;
              $i(r.$$.fragment, 1, 0, function () {
                Ti(r, 1);
              }),
                yi();
            }
            u
              ? (Pi((o = new u({})).$$.fragment), bi(o.$$.fragment, 1), Ai(o, i.parentNode, i))
              : (o = null);
          }
        },
        i: function (t) {
          c || (o && bi(o.$$.fragment, t), (c = !0));
        },
        o: function (t) {
          o && $i(o.$$.fragment, t), (c = !1);
        },
        d: function (t) {
          t && Po(n), t && Po(r), o && Ti(o, t), t && Po(i);
        },
      }
    );
  }
  function ih(t) {
    var n, e;
    return (
      (n = new wf({ props: { id: t[12], $$slots: { default: [oh] }, $$scope: { ctx: t } } })),
      {
        c: function () {
          Pi(n.$$.fragment);
        },
        m: function (t, r) {
          Ai(n, t, r), (e = !0);
        },
        p: function (t, e) {
          var r = {};
          1 & e && (r.id = t[12]), 262145 & e && (r.$$scope = { dirty: e, ctx: t }), n.$set(r);
        },
        i: function (t) {
          e || (bi(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Ti(n, t);
        },
      }
    );
  }
  function ch(t) {
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
        y = { $$slots: { default: [rh] }, $$scope: { ctx: t } },
        b = 0;
      b < g.length;
      b += 1
    )
      y = io(y, g[b]);
    (l = new ds({ props: y })).$on('opened', t[3]), l.$on('closed', t[2]);
    for (var $ = t[0], x = [], w = 0; w < $.length; w += 1) x[w] = ih(th(t, $, w));
    var O = function (t) {
      return $i(x[t], 1, 1, function () {
        x[t] = null;
      });
    };
    return {
      c: function () {
        (n = To('div')),
          (e = To('section')),
          ((r = To('div')).innerHTML =
            '<h1>Smodale</h1> \n              <p class="text-md color-contrast-medium">A simple, light and highly customizable modal for Svelte</p> \n              <p>Designed with the &quot;Mobile-first&quot; approach for serving static and dynamic modals\n                which are customizable on specific viewport breakpoints</p>'),
          (o = _o()),
          (i = To('div')),
          ((c = To('button')).textContent = 'Show a static modal'),
          (a = _o()),
          ((u = To('button')).textContent = 'Show a dynamic modal'),
          (s = _o()),
          Pi(l.$$.fragment),
          (f = _o()),
          (d = To('hr')),
          (p = _o());
        for (var t = 0; t < x.length; t += 1) x[t].c();
        Io(r, 'class', 'margin-bottom-md'),
          Io(c, 'type', 'button'),
          Io(c, 'class', 'btn btn--primary'),
          Io(u, 'type', 'button'),
          Io(u, 'class', 'btn btn--accent'),
          Io(i, 'class', 'flex flex-column flex-row@xs gap-xs'),
          Io(n, 'class', 'text-component article');
      },
      m: function (g, y) {
        jo(g, n, y),
          Eo(n, e),
          Eo(e, r),
          Eo(e, o),
          Eo(e, i),
          Eo(i, c),
          Eo(i, a),
          Eo(i, u),
          Eo(e, s),
          Ai(l, e, null),
          Eo(e, f),
          Eo(e, d),
          Eo(n, p);
        for (var b = 0; b < x.length; b += 1) x[b].m(n, null);
        (m = !0), h || ((v = [Bo(c, 'click', t[4]), Bo(u, 'click', t[5])]), (h = !0));
      },
      p: function (t, e) {
        var r = 2 & e ? Ei(g, [ji(t[1])]) : {};
        if ((262144 & e && (r.$$scope = { dirty: e, ctx: t }), l.$set(r), 1 & e)) {
          var o;
          for ($ = t[0], o = 0; o < $.length; o += 1) {
            var i = th(t, $, o);
            x[o]
              ? (x[o].p(i, e), bi(x[o], 1))
              : ((x[o] = ih(i)), x[o].c(), bi(x[o], 1), x[o].m(n, null));
          }
          for (gi(), o = $.length; o < x.length; o += 1) O(o);
          yi();
        }
      },
      i: function (t) {
        if (!m) {
          bi(l.$$.fragment, t);
          for (var n = 0; n < $.length; n += 1) bi(x[n]);
          m = !0;
        }
      },
      o: function (t) {
        $i(l.$$.fragment, t), (x = x.filter(Boolean));
        for (var n = 0; n < x.length; n += 1) $i(x[n]);
        m = !1;
      },
      d: function (t) {
        t && Po(n), Ti(l), Ao(x, t), (h = !1), uo(v);
      },
    };
  }
  function ah(t) {
    var n,
      e = t[8] + '';
    return {
      c: function () {
        n = Lo(e);
      },
      m: function (t, e) {
        jo(t, n, e);
      },
      p: ro,
      d: function (t) {
        t && Po(n);
      },
    };
  }
  function uh(t) {
    var n,
      e = t[8] + '';
    return {
      c: function () {
        n = Lo(e);
      },
      m: function (t, e) {
        jo(t, n, e);
      },
      p: ro,
      d: function (t) {
        t && Po(n);
      },
    };
  }
  function sh(t) {
    var n, e;
    return (
      (n = new td({
        props: {
          href: '#'.concat(t[12]),
          current: t[15],
          $$slots: { default: [uh] },
          $$scope: { ctx: t },
        },
      })).$on('click', function () {
        so(t[6](t[7])) && t[6](t[7]).apply(this, arguments);
      }),
      {
        c: function () {
          Pi(n.$$.fragment);
        },
        m: function (t, r) {
          Ai(n, t, r), (e = !0);
        },
        p: function (e, r) {
          t = e;
          var o = {};
          32768 & r && (o.current = t[15]),
            262144 & r && (o.$$scope = { dirty: r, ctx: t }),
            n.$set(o);
        },
        i: function (t) {
          e || (bi(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Ti(n, t);
        },
      }
    );
  }
  function lh(t) {
    var n, e;
    return (
      (n = new ud({
        props: {
          id: t[12],
          $$slots: {
            default: [
              sh,
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
          Pi(n.$$.fragment);
        },
        m: function (t, r) {
          Ai(n, t, r), (e = !0);
        },
        p: function (t, e) {
          var r = {};
          295040 & e && (r.$$scope = { dirty: e, ctx: t }), n.$set(r);
        },
        i: function (t) {
          e || (bi(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Ti(n, t);
        },
      }
    );
  }
  function fh(t) {
    for (var n, e, r = t[9], o = [], i = 0; i < r.length; i += 1) o[i] = lh(eh(t, r, i));
    var c = function (t) {
      return $i(o[t], 1, 1, function () {
        o[t] = null;
      });
    };
    return {
      c: function () {
        for (var t = 0; t < o.length; t += 1) o[t].c();
        n = _o();
      },
      m: function (t, r) {
        for (var i = 0; i < o.length; i += 1) o[i].m(t, r);
        jo(t, n, r), (e = !0);
      },
      p: function (t, e) {
        if (32960 & e) {
          var i;
          for (r = t[9], i = 0; i < r.length; i += 1) {
            var a = eh(t, r, i);
            o[i]
              ? (o[i].p(a, e), bi(o[i], 1))
              : ((o[i] = lh(a)), o[i].c(), bi(o[i], 1), o[i].m(n.parentNode, n));
          }
          for (gi(), i = r.length; i < o.length; i += 1) c(i);
          yi();
        }
      },
      i: function (t) {
        if (!e) {
          for (var n = 0; n < r.length; n += 1) bi(o[n]);
          e = !0;
        }
      },
      o: function (t) {
        o = o.filter(Boolean);
        for (var n = 0; n < o.length; n += 1) $i(o[n]);
        e = !1;
      },
      d: function (t) {
        Ao(o, t), t && Po(n);
      },
    };
  }
  function dh(t) {
    var n, e, r, o;
    return (
      (n = new Rf({ props: { $$slots: { default: [ah] }, $$scope: { ctx: t } } })),
      (r = new Pf({ props: { $$slots: { default: [fh] }, $$scope: { ctx: t } } })),
      {
        c: function () {
          Pi(n.$$.fragment), (e = _o()), Pi(r.$$.fragment);
        },
        m: function (t, i) {
          Ai(n, t, i), jo(t, e, i), Ai(r, t, i), (o = !0);
        },
        p: function (t, e) {
          var o = {};
          262144 & e && (o.$$scope = { dirty: e, ctx: t }), n.$set(o);
          var i = {};
          262272 & e && (i.$$scope = { dirty: e, ctx: t }), r.$set(i);
        },
        i: function (t) {
          o || (bi(n.$$.fragment, t), bi(r.$$.fragment, t), (o = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t), $i(r.$$.fragment, t), (o = !1);
        },
        d: function (t) {
          Ti(n, t), t && Po(e), Ti(r, t);
        },
      }
    );
  }
  function ph(t) {
    for (var n, e, r = Jm, o = [], i = 0; i < r.length; i += 1) o[i] = dh(nh(t, r, i));
    var c = function (t) {
      return $i(o[t], 1, 1, function () {
        o[t] = null;
      });
    };
    return {
      c: function () {
        for (var t = 0; t < o.length; t += 1) o[t].c();
        n = Fo();
      },
      m: function (t, r) {
        for (var i = 0; i < o.length; i += 1) o[i].m(t, r);
        jo(t, n, r), (e = !0);
      },
      p: function (t, e) {
        if (32960 & e) {
          var i;
          for (r = Jm, i = 0; i < r.length; i += 1) {
            var a = nh(t, r, i);
            o[i]
              ? (o[i].p(a, e), bi(o[i], 1))
              : ((o[i] = dh(a)), o[i].c(), bi(o[i], 1), o[i].m(n.parentNode, n));
          }
          for (gi(), i = r.length; i < o.length; i += 1) c(i);
          yi();
        }
      },
      i: function (t) {
        if (!e) {
          for (var n = 0; n < r.length; n += 1) bi(o[n]);
          e = !0;
        }
      },
      o: function (t) {
        o = o.filter(Boolean);
        for (var n = 0; n < o.length; n += 1) $i(o[n]);
        e = !1;
      },
      d: function (t) {
        Ao(o, t), t && Po(n);
      },
    };
  }
  function mh(t) {
    var n, e;
    return (
      (n = new lf({ props: { $$slots: { default: [ph] }, $$scope: { ctx: t } } })),
      {
        c: function () {
          Pi(n.$$.fragment);
        },
        m: function (t, r) {
          Ai(n, t, r), (e = !0);
        },
        p: function (t, e) {
          var r = {};
          262272 & e && (r.$$scope = { dirty: e, ctx: t }), n.$set(r);
        },
        i: function (t) {
          e || (bi(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Ti(n, t);
        },
      }
    );
  }
  function hh(t) {
    var n, e;
    return (
      (n = new cf({
        props: {
          $$slots: {
            aside: [
              mh,
              function (t) {
                return { 7: t.prop.sidebar };
              },
              function (t) {
                return t.prop ? 128 : 0;
              },
            ],
            default: [
              ch,
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
          Pi(n.$$.fragment);
        },
        m: function (t, r) {
          Ai(n, t, r), (e = !0);
        },
        p: function (t, e) {
          var r = {};
          262273 & e && (r.$$scope = { dirty: e, ctx: t }), n.$set(r);
        },
        i: function (t) {
          e || (bi(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Ti(n, t);
        },
      }
    );
  }
  function vh(t) {
    var n, e, r;
    return (
      (e = new yf({ props: { $$slots: { default: [hh] }, $$scope: { ctx: t } } })),
      {
        c: function () {
          (n = To('div')), Pi(e.$$.fragment), Io(n, 'class', 'container max-width-adaptive-md');
        },
        m: function (t, o) {
          jo(t, n, o), Ai(e, n, null), (r = !0);
        },
        p: function (t, n) {
          var r = {};
          262145 & n && (r.$$scope = { dirty: n, ctx: t }), e.$set(r);
        },
        i: function (t) {
          r || (bi(e.$$.fragment, t), (r = !0));
        },
        o: function (t) {
          $i(e.$$.fragment, t), (r = !1);
        },
        d: function (t) {
          t && Po(n), Ti(e);
        },
      }
    );
  }
  function gh(t) {
    var n, e;
    return (
      (n = new El({ props: { $$slots: { default: [vh] }, $$scope: { ctx: t } } })),
      {
        c: function () {
          Pi(n.$$.fragment);
        },
        m: function (t, r) {
          Ai(n, t, r), (e = !0);
        },
        p: function (t, e) {
          var r = Fr(e, 1)[0],
            o = {};
          262145 & r && (o.$$scope = { dirty: r, ctx: t }), n.$set(o);
        },
        i: function (t) {
          e || (bi(n.$$.fragment, t), (e = !0));
        },
        o: function (t) {
          $i(n.$$.fragment, t), (e = !1);
        },
        d: function (t) {
          Ti(n, t);
        },
      }
    );
  }
  function yh(t, n, e) {
    var r,
      o = {
        name: 'example',
        padding: 'var(--component-padding)',
        transition: Ii,
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
        return sl('Event: <code>closed</code>');
      },
      c = function () {
        return sl('Event: <code>opened</code>');
      };
    return (
      e(
        0,
        (r = Jm.reduce(function (t, n) {
          return [].concat(_r(t), _r(n.items));
        }, []))
      ),
      [
        r,
        o,
        i,
        c,
        function () {
          return Ts.show('example')
            .then(function () {
              return (function (t, n) {
                return sl(t, al(al({}, n), {}, { type: ul.SUCCESS }));
              })('Hide: Confirmed');
            })
            .catch(function (t) {
              return (function (t, n) {
                return sl(t, al(al({}, n), {}, { type: ul.WARNING }));
              })('Cancel'.concat(t ? ': <code>'.concat(t, '</code>') : ''));
            });
        },
        function () {
          return Ts.show(Dl, null, o, { closed: i, opened: c });
        },
        function (t) {
          'mobile' === t.layout && t.close();
        },
      ]
    );
  }
  var bh = (function (e) {
    Gt(o, e);
    var r = Qm(o);
    function o(e) {
      var i;
      return t(this, o), Mi(n((i = r.call(this))), e, yh, gh, lo, {}), i;
    }
    return o;
  })(Li);
  return (
    (window.ga =
      window.ga ||
      function t() {
        var n;
        (n = t.q = t.q || []).push.apply(n, arguments);
      }),
    (ga.l = +new Date()),
    ga('create', 'G-K01G7CKPDV', 'auto'),
    ga('send', 'pageview', { anonymizeIp: !0 }),
    new bh({ target: document.body })
  );
})();
//# sourceMappingURL=main.js.map
