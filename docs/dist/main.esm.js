function e() {}
const t = (e) => e;
function n(e, t) {
  for (const n in t) e[n] = t[n];
  return e;
}
function o(e) {
  return e();
}
function s() {
  return Object.create(null);
}
function r(e) {
  e.forEach(o);
}
function i(e) {
  return 'function' == typeof e;
}
function a(e, t) {
  return e != e ? t == t : e !== t || (e && 'object' == typeof e) || 'function' == typeof e;
}
function l(t, ...n) {
  if (null == t) return e;
  const o = t.subscribe(...n);
  return o.unsubscribe ? () => o.unsubscribe() : o;
}
function c(e, t, n) {
  e.$$.on_destroy.push(l(t, n));
}
function d(e, t, n, o) {
  if (e) {
    const s = u(e, t, n, o);
    return e[0](s);
  }
}
function u(e, t, o, s) {
  return e[1] && s ? n(o.ctx.slice(), e[1](s(t))) : o.ctx;
}
function m(e, t, n, o, s, r, i) {
  const a = (function (e, t, n, o) {
    if (e[2] && o) {
      const s = e[2](o(n));
      if (void 0 === t.dirty) return s;
      if ('object' == typeof s) {
        const e = [],
          n = Math.max(t.dirty.length, s.length);
        for (let o = 0; o < n; o += 1) e[o] = t.dirty[o] | s[o];
        return e;
      }
      return t.dirty | s;
    }
    return t.dirty;
  })(t, o, s, r);
  if (a) {
    const s = u(t, n, o, i);
    e.p(s, a);
  }
}
function p(e) {
  const t = {};
  for (const n in e) '$' !== n[0] && (t[n] = e[n]);
  return t;
}
function f(e, t) {
  const n = {};
  t = new Set(t);
  for (const o in e) t.has(o) || '$' === o[0] || (n[o] = e[o]);
  return n;
}
function g(e) {
  const t = {};
  for (const n in e) t[n] = !0;
  return t;
}
function h(e) {
  return null == e ? '' : e;
}
function $(t) {
  return t && i(t.destroy) ? t.destroy : e;
}
const b = 'undefined' != typeof window;
let x = b ? () => window.performance.now() : () => Date.now(),
  v = b ? (e) => requestAnimationFrame(e) : e;
const w = new Set();
function y(e) {
  w.forEach((t) => {
    t.c(e) || (w.delete(t), t.f());
  }),
    0 !== w.size && v(y);
}
function C(e) {
  let t;
  return (
    0 === w.size && v(y),
    {
      promise: new Promise((n) => {
        w.add((t = { c: e, f: n }));
      }),
      abort() {
        w.delete(t);
      },
    }
  );
}
function k(e, t) {
  e.appendChild(t);
}
function S(e, t, n) {
  e.insertBefore(t, n || null);
}
function M(e) {
  e.parentNode.removeChild(e);
}
function A(e, t) {
  for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
}
function E(e) {
  return document.createElement(e);
}
function L(e) {
  return document.createElementNS('http://www.w3.org/2000/svg', e);
}
function T(e) {
  return document.createTextNode(e);
}
function _() {
  return T(' ');
}
function F() {
  return T('');
}
function j(e, t, n, o) {
  return e.addEventListener(t, n, o), () => e.removeEventListener(t, n, o);
}
function q(e, t, n) {
  null == n ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function H(e, t) {
  const n = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const o in t)
    null == t[o]
      ? e.removeAttribute(o)
      : 'style' === o
      ? (e.style.cssText = t[o])
      : '__value' === o
      ? (e.value = e[o] = t[o])
      : n[o] && n[o].set
      ? (e[o] = t[o])
      : q(e, o, t[o]);
}
function P(e, t) {
  (t = '' + t), e.wholeText !== t && (e.data = t);
}
function N(e, t, n) {
  e.classList[n ? 'add' : 'remove'](t);
}
function O(e, t) {
  const n = document.createEvent('CustomEvent');
  return n.initCustomEvent(e, !1, !1, t), n;
}
const z = new Set();
let D,
  R = 0;
function W(e, t, n, o, s, r, i, a = 0) {
  const l = 16.666 / o;
  let c = '{\n';
  for (let e = 0; e <= 1; e += l) {
    const o = t + (n - t) * r(e);
    c += 100 * e + `%{${i(o, 1 - o)}}\n`;
  }
  const d = c + `100% {${i(n, 1 - n)}}\n}`,
    u = `__svelte_${(function (e) {
      let t = 5381,
        n = e.length;
      for (; n--; ) t = ((t << 5) - t) ^ e.charCodeAt(n);
      return t >>> 0;
    })(d)}_${a}`,
    m = e.ownerDocument;
  z.add(m);
  const p = m.__svelte_stylesheet || (m.__svelte_stylesheet = m.head.appendChild(E('style')).sheet),
    f = m.__svelte_rules || (m.__svelte_rules = {});
  f[u] || ((f[u] = !0), p.insertRule(`@keyframes ${u} ${d}`, p.cssRules.length));
  const g = e.style.animation || '';
  return (e.style.animation = `${g ? `${g}, ` : ''}${u} ${o}ms linear ${s}ms 1 both`), (R += 1), u;
}
function B(e, t) {
  const n = (e.style.animation || '').split(', '),
    o = n.filter(t ? (e) => e.indexOf(t) < 0 : (e) => -1 === e.indexOf('__svelte')),
    s = n.length - o.length;
  s &&
    ((e.style.animation = o.join(', ')),
    (R -= s),
    R ||
      v(() => {
        R ||
          (z.forEach((e) => {
            const t = e.__svelte_stylesheet;
            let n = t.cssRules.length;
            for (; n--; ) t.deleteRule(n);
            e.__svelte_rules = {};
          }),
          z.clear());
      }));
}
function I(e) {
  D = e;
}
function U() {
  if (!D) throw new Error('Function called outside component initialization');
  return D;
}
function Y() {
  const e = U();
  return (t, n) => {
    const o = e.$$.callbacks[t];
    if (o) {
      const s = O(t, n);
      o.slice().forEach((t) => {
        t.call(e, s);
      });
    }
  };
}
function V(e, t) {
  U().$$.context.set(e, t);
}
function K(e) {
  return U().$$.context.get(e);
}
function X(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((e) => e(t));
}
const G = [],
  Z = [],
  J = [],
  Q = [],
  ee = Promise.resolve();
let te = !1;
function ne() {
  te || ((te = !0), ee.then(ie));
}
function oe(e) {
  J.push(e);
}
let se = !1;
const re = new Set();
function ie() {
  if (!se) {
    se = !0;
    do {
      for (let e = 0; e < G.length; e += 1) {
        const t = G[e];
        I(t), ae(t.$$);
      }
      for (I(null), G.length = 0; Z.length; ) Z.pop()();
      for (let e = 0; e < J.length; e += 1) {
        const t = J[e];
        re.has(t) || (re.add(t), t());
      }
      J.length = 0;
    } while (G.length);
    for (; Q.length; ) Q.pop()();
    (te = !1), (se = !1), re.clear();
  }
}
function ae(e) {
  if (null !== e.fragment) {
    e.update(), r(e.before_update);
    const t = e.dirty;
    (e.dirty = [-1]), e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(oe);
  }
}
let le;
function ce() {
  return (
    le ||
      ((le = Promise.resolve()),
      le.then(() => {
        le = null;
      })),
    le
  );
}
function de(e, t, n) {
  e.dispatchEvent(O(`${t ? 'intro' : 'outro'}${n}`));
}
const ue = new Set();
let me;
function pe() {
  me = { r: 0, c: [], p: me };
}
function fe() {
  me.r || r(me.c), (me = me.p);
}
function ge(e, t) {
  e && e.i && (ue.delete(e), e.i(t));
}
function he(e, t, n, o) {
  if (e && e.o) {
    if (ue.has(e)) return;
    ue.add(e),
      me.c.push(() => {
        ue.delete(e), o && (n && e.d(1), o());
      }),
      e.o(t);
  }
}
const $e = { duration: 0 };
function be(n, o, s) {
  let r,
    a,
    l = o(n, s),
    c = !1,
    d = 0;
  function u() {
    r && B(n, r);
  }
  function m() {
    const { delay: o = 0, duration: s = 300, easing: i = t, tick: m = e, css: p } = l || $e;
    p && (r = W(n, 0, 1, s, o, i, p, d++)), m(0, 1);
    const f = x() + o,
      g = f + s;
    a && a.abort(),
      (c = !0),
      oe(() => de(n, !0, 'start')),
      (a = C((e) => {
        if (c) {
          if (e >= g) return m(1, 0), de(n, !0, 'end'), u(), (c = !1);
          if (e >= f) {
            const t = i((e - f) / s);
            m(t, 1 - t);
          }
        }
        return c;
      }));
  }
  let p = !1;
  return {
    start() {
      p || (B(n), i(l) ? ((l = l()), ce().then(m)) : m());
    },
    invalidate() {
      p = !1;
    },
    end() {
      c && (u(), (c = !1));
    },
  };
}
function xe(n, o, s) {
  let a,
    l = o(n, s),
    c = !0;
  const d = me;
  function u() {
    const { delay: o = 0, duration: s = 300, easing: i = t, tick: u = e, css: m } = l || $e;
    m && (a = W(n, 1, 0, s, o, i, m));
    const p = x() + o,
      f = p + s;
    oe(() => de(n, !1, 'start')),
      C((e) => {
        if (c) {
          if (e >= f) return u(0, 1), de(n, !1, 'end'), --d.r || r(d.c), !1;
          if (e >= p) {
            const t = i((e - p) / s);
            u(1 - t, t);
          }
        }
        return c;
      });
  }
  return (
    (d.r += 1),
    i(l)
      ? ce().then(() => {
          (l = l()), u();
        })
      : u(),
    {
      end(e) {
        e && l.tick && l.tick(1, 0), c && (a && B(n, a), (c = !1));
      },
    }
  );
}
function ve(n, o, s, a) {
  let l = o(n, s),
    c = a ? 0 : 1,
    d = null,
    u = null,
    m = null;
  function p() {
    m && B(n, m);
  }
  function f(e, t) {
    const n = e.b - c;
    return (
      (t *= Math.abs(n)),
      { a: c, b: e.b, d: n, duration: t, start: e.start, end: e.start + t, group: e.group }
    );
  }
  function g(o) {
    const { delay: s = 0, duration: i = 300, easing: a = t, tick: g = e, css: h } = l || $e,
      $ = { start: x() + s, b: o };
    o || (($.group = me), (me.r += 1)),
      d || u
        ? (u = $)
        : (h && (p(), (m = W(n, c, o, i, s, a, h))),
          o && g(0, 1),
          (d = f($, i)),
          oe(() => de(n, o, 'start')),
          C((e) => {
            if (
              (u &&
                e > u.start &&
                ((d = f(u, i)),
                (u = null),
                de(n, d.b, 'start'),
                h && (p(), (m = W(n, c, d.b, d.duration, 0, a, l.css)))),
              d)
            )
              if (e >= d.end)
                g((c = d.b), 1 - c),
                  de(n, d.b, 'end'),
                  u || (d.b ? p() : --d.group.r || r(d.group.c)),
                  (d = null);
              else if (e >= d.start) {
                const t = e - d.start;
                (c = d.a + d.d * a(t / d.duration)), g(c, 1 - c);
              }
            return !(!d && !u);
          }));
  }
  return {
    run(e) {
      i(l)
        ? ce().then(() => {
            (l = l()), g(e);
          })
        : g(e);
    },
    end() {
      p(), (d = u = null);
    },
  };
}
const we =
  'undefined' != typeof window ? window : 'undefined' != typeof globalThis ? globalThis : global;
function ye(e, t) {
  he(e, 1, 1, () => {
    t.delete(e.key);
  });
}
function Ce(e, t, n, o, s, r, i, a, l, c, d, u) {
  let m = e.length,
    p = r.length,
    f = m;
  const g = {};
  for (; f--; ) g[e[f].key] = f;
  const h = [],
    $ = new Map(),
    b = new Map();
  for (f = p; f--; ) {
    const e = u(s, r, f),
      a = n(e);
    let l = i.get(a);
    l ? o && l.p(e, t) : ((l = c(a, e)), l.c()),
      $.set(a, (h[f] = l)),
      a in g && b.set(a, Math.abs(f - g[a]));
  }
  const x = new Set(),
    v = new Set();
  function w(e) {
    ge(e, 1), e.m(a, d), i.set(e.key, e), (d = e.first), p--;
  }
  for (; m && p; ) {
    const t = h[p - 1],
      n = e[m - 1],
      o = t.key,
      s = n.key;
    t === n
      ? ((d = t.first), m--, p--)
      : $.has(s)
      ? !i.has(o) || x.has(o)
        ? w(t)
        : v.has(s)
        ? m--
        : b.get(o) > b.get(s)
        ? (v.add(o), w(t))
        : (x.add(s), m--)
      : (l(n, i), m--);
  }
  for (; m--; ) {
    const t = e[m];
    $.has(t.key) || l(t, i);
  }
  for (; p; ) w(h[p - 1]);
  return h;
}
function ke(e, t) {
  const n = {},
    o = {},
    s = { $$scope: 1 };
  let r = e.length;
  for (; r--; ) {
    const i = e[r],
      a = t[r];
    if (a) {
      for (const e in i) e in a || (o[e] = 1);
      for (const e in a) s[e] || ((n[e] = a[e]), (s[e] = 1));
      e[r] = a;
    } else for (const e in i) s[e] = 1;
  }
  for (const e in o) e in n || (n[e] = void 0);
  return n;
}
function Se(e) {
  return 'object' == typeof e && null !== e ? e : {};
}
function Me(e) {
  e && e.c();
}
function Ae(e, t, n, s) {
  const { fragment: a, on_mount: l, on_destroy: c, after_update: d } = e.$$;
  a && a.m(t, n),
    s ||
      oe(() => {
        const t = l.map(o).filter(i);
        c ? c.push(...t) : r(t), (e.$$.on_mount = []);
      }),
    d.forEach(oe);
}
function Ee(e, t) {
  const n = e.$$;
  null !== n.fragment &&
    (r(n.on_destroy),
    n.fragment && n.fragment.d(t),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function Le(t, n, o, i, a, l, c = [-1]) {
  const d = D;
  I(t);
  const u = (t.$$ = {
    fragment: null,
    ctx: null,
    props: l,
    update: e,
    not_equal: a,
    bound: s(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(d ? d.$$.context : n.context || []),
    callbacks: s(),
    dirty: c,
    skip_bound: !1,
  });
  let m = !1;
  if (
    ((u.ctx = o
      ? o(t, n.props || {}, (e, n, ...o) => {
          const s = o.length ? o[0] : n;
          return (
            u.ctx &&
              a(u.ctx[e], (u.ctx[e] = s)) &&
              (!u.skip_bound && u.bound[e] && u.bound[e](s),
              m &&
                (function (e, t) {
                  -1 === e.$$.dirty[0] && (G.push(e), ne(), e.$$.dirty.fill(0)),
                    (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
                })(t, e)),
            n
          );
        })
      : []),
    u.update(),
    (m = !0),
    r(u.before_update),
    (u.fragment = !!i && i(u.ctx)),
    n.target)
  ) {
    if (n.hydrate) {
      const e = (function (e) {
        return Array.from(e.childNodes);
      })(n.target);
      u.fragment && u.fragment.l(e), e.forEach(M);
    } else u.fragment && u.fragment.c();
    n.intro && ge(t.$$.fragment), Ae(t, n.target, n.anchor, n.customElement), ie();
  }
  I(d);
}
class Te {
  $destroy() {
    Ee(this, 1), (this.$destroy = e);
  }
  $on(e, t) {
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      n.push(t),
      () => {
        const e = n.indexOf(t);
        -1 !== e && n.splice(e, 1);
      }
    );
  }
  $set(e) {
    var t;
    this.$$set &&
      ((t = e), 0 !== Object.keys(t).length) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
function _e(e) {
  return e < 0.5 ? 4 * e * e * e : 0.5 * Math.pow(2 * e - 2, 3) + 1;
}
function Fe(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function je(
  e,
  { delay: t = 0, duration: n = 400, easing: o = _e, amount: s = 5, opacity: r = 0 } = {}
) {
  const i = getComputedStyle(e),
    a = +i.opacity,
    l = 'none' === i.filter ? '' : i.filter,
    c = a * (1 - r);
  return {
    delay: t,
    duration: n,
    easing: o,
    css: (e, t) => `opacity: ${a - c * t}; filter: ${l} blur(${t * s}px);`,
  };
}
function qe(e, { delay: n = 0, duration: o = 400, easing: s = t } = {}) {
  const r = +getComputedStyle(e).opacity;
  return { delay: n, duration: o, easing: s, css: (e) => 'opacity: ' + e * r };
}
function He(e, { delay: t = 0, duration: n = 400, easing: o = Fe } = {}) {
  const s = getComputedStyle(e),
    r = +s.opacity,
    i = parseFloat(s.height),
    a = parseFloat(s.paddingTop),
    l = parseFloat(s.paddingBottom),
    c = parseFloat(s.marginTop),
    d = parseFloat(s.marginBottom),
    u = parseFloat(s.borderTopWidth),
    m = parseFloat(s.borderBottomWidth);
  return {
    delay: t,
    duration: n,
    easing: o,
    css: (e) =>
      `overflow: hidden;opacity: ${Math.min(20 * e, 1) * r};height: ${e * i}px;padding-top: ${
        e * a
      }px;padding-bottom: ${e * l}px;margin-top: ${e * c}px;margin-bottom: ${
        e * d
      }px;border-top-width: ${e * u}px;border-bottom-width: ${e * m}px;`,
  };
}
const Pe = [];
function Ne(t, n = e) {
  let o;
  const s = [];
  function r(e) {
    if (a(t, e) && ((t = e), o)) {
      const e = !Pe.length;
      for (let e = 0; e < s.length; e += 1) {
        const n = s[e];
        n[1](), Pe.push(n, t);
      }
      if (e) {
        for (let e = 0; e < Pe.length; e += 2) Pe[e][0](Pe[e + 1]);
        Pe.length = 0;
      }
    }
  }
  return {
    set: r,
    update: function (e) {
      r(e(t));
    },
    subscribe: function (i, a = e) {
      const l = [i, a];
      return (
        s.push(l),
        1 === s.length && (o = n(r) || e),
        i(t),
        () => {
          const e = s.indexOf(l);
          -1 !== e && s.splice(e, 1), 0 === s.length && (o(), (o = null));
        }
      );
    },
  };
}
var Oe = {
  ...Ne({ static: [], dynamic: [] }),
  getState() {
    return (function (e) {
      let t;
      return l(e, (e) => (t = e))(), t;
    })(this);
  },
};
const ze = { hide: () => ({}), cancel: () => ({}), component: null },
  De = () => K(ze);
function Re(e) {
  let t, n, o, s, r, a, l, c;
  const u = e[13].default,
    p = d(u, e, e[12], null);
  return {
    c() {
      (t = E('div')),
        (n = E('div')),
        (o = E('div')),
        p && p.c(),
        q(o, 'class', 'modal__content js-modal__content svelte-190jx0e'),
        q(o, 'role', 'alertdialog'),
        q(o, 'aria-expanded', 'true'),
        q(n, 'class', 'modal__dialog svelte-190jx0e'),
        q(t, 'class', 'modal ' + e[6] + ' svelte-190jx0e'),
        q(t, 'data-name', e[3]);
    },
    m(r, i) {
      S(r, t, i),
        k(t, n),
        k(n, o),
        p && p.m(o, null),
        e[14](o),
        (a = !0),
        l || ((c = $((s = e[7].call(null, t, { currentBreakpoint: e[1] })))), (l = !0));
    },
    p(t, n) {
      (e = t),
        p && p.p && 4096 & n[0] && m(p, u, e, e[12], n, null, null),
        s && i(s.update) && 2 & n[0] && s.update.call(null, { currentBreakpoint: e[1] });
    },
    i(n) {
      a ||
        (ge(p, n),
        oe(() => {
          r || (r = ve(t, e[4], e[5], !0)), r.run(1);
        }),
        (a = !0));
    },
    o(n) {
      he(p, n), r || (r = ve(t, e[4], e[5], !1)), r.run(0), (a = !1);
    },
    d(n) {
      n && M(t), p && p.d(n), e[14](null), n && r && r.end(), (l = !1), c();
    },
  };
}
function We(e) {
  let t,
    n,
    o = e[2] && e[8].default && Re(e);
  return {
    c() {
      o && o.c(), (t = F());
    },
    m(e, s) {
      o && o.m(e, s), S(e, t, s), (n = !0);
    },
    p(e, n) {
      e[2] && e[8].default
        ? o
          ? (o.p(e, n), 260 & n[0] && ge(o, 1))
          : ((o = Re(e)), o.c(), ge(o, 1), o.m(t.parentNode, t))
        : o &&
          (pe(),
          he(o, 1, 1, () => {
            o = null;
          }),
          fe());
    },
    i(e) {
      n || (ge(o), (n = !0));
    },
    o(e) {
      he(o), (n = !1);
    },
    d(e) {
      o && o.d(e), e && M(t);
    },
  };
}
const Be = () => 'ResizeObserver' in window,
  Ie = Object.freeze({ BACKDROP_CLICK: 'BACKDROP_CLICK', ESC: 'ESC' }),
  Ue = (e, t, n) => (n ? e.classList.add(t) : e.classList.remove(t)),
  Ye = (e = {}, t = {}) => {
    const n = e;
    Object.entries(t).forEach(([e, t]) => {
      e in n.style && (n.style[e] = t || '');
    });
  };
function Ve(e, t, o) {
  let s, r, i, a;
  const l = [];
  let d,
    u = f(t, l);
  c(e, Oe, (e) => o(10, (d = e)));
  let { $$slots: m = {}, $$scope: h } = t;
  const $ = g(m),
    {
      name: b,
      transition: x = () => null,
      transitionParams: v = {},
      breakpoints: w = {},
      escapeToClose: y = !0,
      clickOutsideToClose: C = !0,
      disableBodyScroll: k = !0,
      focusOnOpen: S = !0,
      focusTrap: M = !0,
      classes: A = '',
      ...E
    } = u;
  let L, T, _, F;
  const j = Y(),
    q = (e) => r.cancel(b, e),
    H = ({ target: e }) => {
      e.closest('.js-modal__content') || q(Ie.BACKDROP_CLICK);
    },
    P = (e) => {
      27 !== !e.keyCode && 'Escape' === e.key && q(Ie.ESC);
    },
    N = (e) => {
      9 !== !e.keyCode &&
        'Tab' === e.key &&
        (_ === document.activeElement && e.shiftKey && (e.preventDefault(), F.focus()),
        F !== document.activeElement || e.shiftKey || (e.preventDefault(), _.focus()));
    };
  V(ze, { hide: (e) => r.hide(b, e), cancel: q, component: U() });
  const O = () => {
      if (!r) return;
      const e = a.findIndex(([e]) => window.matchMedia(`(min-width: ${e})`).matches);
      o(
        1,
        (T = {
          index: e,
          config:
            e > -1
              ? a
                  .filter((t, n) => e <= n)
                  .reverse()
                  .reduce((e, [t, n]) => ({ ...e, ...n }), { height: 'auto', ...E })
              : E,
        })
      );
    },
    z = ((e, t, n = !1) => {
      let o = null,
        s = !0;
      return (...r) => {
        const i = () => {
          e.apply(this, ...r), (o = null);
        };
        n && s && ((s = !1), i()), o || (o = setTimeout(i, t));
      };
    })(O, 240);
  return (
    (e.$$set = (e) => {
      (t = n(n({}, t), p(e))), o(35, (u = f(t, l))), '$$scope' in e && o(12, (h = e.$$scope));
    }),
    (e.$$.update = () => {
      1024 & e.$$.dirty[0] && o(9, (s = [...d.dynamic, ...d.static])),
        512 & e.$$.dirty[0] && o(2, (r = s.find((e) => e.props.name === b))),
        2048 & e.$$.dirty[0] && (a = Object.entries(i));
    }),
    o(
      11,
      (i = Object.entries(w)
        .map(([e, t]) => {
          const n = /px|em|rem/,
            [o] = e.match(n) || [];
          let s = parseInt(e.replace(n, ''), 10);
          if (o && ['em', 'rem'].includes(o)) {
            s *= parseInt(
              window
                .getComputedStyle(document.documentElement)
                .getPropertyValue('font-size')
                .replace('px', ''),
              10
            );
          }
          return [e, t, s];
        })
        .sort((e, t) => t[2] - e[2])
        .reduce((e, [t, n]) => ({ ...e, [t]: n }), {}))
    ),
    [
      L,
      T,
      r,
      b,
      x,
      v,
      A,
      (e) => {
        O(), j('opened');
        let t = null;
        return (
          Be() ? ((t = new ResizeObserver(z)), t.observe(e)) : window.addEventListener('resize', z),
          k && Ye(document.body, { overflow: 'hidden' }),
          S &&
            (((e) => {
              const t = [
                ...e.querySelectorAll(
                  '[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary'
                ),
              ];
              if (!t.length) return;
              const n = (e) => e.offsetWidth || e.offsetHeight || e.getClientRects().length;
              for (let e = 0; e < t.length; e += 1) {
                const o = t[e];
                if (n(o)) {
                  _ = o;
                  break;
                }
              }
              for (let e = t.length - 1; e >= 0; e -= 1) {
                const o = t[e];
                if (n(o)) {
                  F = o;
                  break;
                }
              }
              _ && _.focus();
            })(e),
            M && e.addEventListener('keydown', N)),
          C && e.addEventListener('click', H),
          y && window.addEventListener('keydown', P),
          {
            async update() {
              await (ne(), ee);
              const {
                maxWidth: t,
                margin: n,
                height: o,
                backgroundColor: s = '#fff',
                padding: r = '20px',
                borderRadius: i,
                backdropColor: a = 'rgba(0, 0, 0, 0.6)',
                boxShadow: l,
                centered: c,
                scrollable: d,
                zIndex: u = '50',
              } = T.config || {};
              Ue(e, 'modal--centered', c),
                Ue(e, 'modal--scrollable', d),
                Ye(e, { zIndex: u, backgroundColor: a }),
                Ye(L, {
                  maxWidth: t,
                  height: o,
                  margin: n,
                  backgroundColor: s,
                  padding: r,
                  borderRadius: i,
                  boxShadow: l,
                });
            },
            destroy() {
              j('closed'),
                k && !s.length && Ye(document.body, { overflow: '' }),
                S && M && e.removeEventListener('keydown', N),
                C && e.removeEventListener('click', H),
                y && window.removeEventListener('keydown', P),
                Be() && t ? t.disconnect() : window.removeEventListener('resize', z);
            },
          }
        );
      },
      $,
      s,
      d,
      i,
      h,
      m,
      function (e) {
        Z[e ? 'unshift' : 'push'](() => {
          (L = e), o(0, L);
        });
      },
    ]
  );
}
class Ke extends Te {
  constructor(e) {
    super(), Le(this, e, Ve, We, a, {}, [-1, -1]);
  }
}
function Xe(e, t, n) {
  const o = e.slice();
  return (o[1] = t[n]), o;
}
function Ge(e) {
  let t, o, s;
  const r = [e[1].componentProps];
  var i = e[1].component;
  function a(e) {
    let t = {};
    for (let e = 0; e < r.length; e += 1) t = n(t, r[e]);
    return { props: t };
  }
  return (
    i && (t = new i(a())),
    {
      c() {
        t && Me(t.$$.fragment), (o = _());
      },
      m(e, n) {
        t && Ae(t, e, n), S(e, o, n), (s = !0);
      },
      p(e, n) {
        const s = 1 & n ? ke(r, [Se(e[1].componentProps)]) : {};
        if (i !== (i = e[1].component)) {
          if (t) {
            pe();
            const e = t;
            he(e.$$.fragment, 1, 0, () => {
              Ee(e, 1);
            }),
              fe();
          }
          i
            ? ((t = new i(a())), Me(t.$$.fragment), ge(t.$$.fragment, 1), Ae(t, o.parentNode, o))
            : (t = null);
        } else i && t.$set(s);
      },
      i(e) {
        s || (t && ge(t.$$.fragment, e), (s = !0));
      },
      o(e) {
        t && he(t.$$.fragment, e), (s = !1);
      },
      d(e) {
        t && Ee(t, e), e && M(o);
      },
    }
  );
}
function Ze(e, t) {
  let o, s, r;
  const a = [t[1].props];
  let l = { $$slots: { default: [Ge] }, $$scope: { ctx: t } };
  for (let e = 0; e < a.length; e += 1) l = n(l, a[e]);
  return (
    (s = new Ke({ props: l })),
    s.$on('opened', function () {
      i(t[1].events && t[1].events.opened) &&
        (t[1].events && t[1].events.opened).apply(this, arguments);
    }),
    s.$on('closed', function () {
      i(t[1].events && t[1].events.closed) &&
        (t[1].events && t[1].events.closed).apply(this, arguments);
    }),
    {
      key: e,
      first: null,
      c() {
        (o = F()), Me(s.$$.fragment), (this.first = o);
      },
      m(e, t) {
        S(e, o, t), Ae(s, e, t), (r = !0);
      },
      p(e, n) {
        t = e;
        const o = 1 & n ? ke(a, [Se(t[1].props)]) : {};
        17 & n && (o.$$scope = { dirty: n, ctx: t }), s.$set(o);
      },
      i(e) {
        r || (ge(s.$$.fragment, e), (r = !0));
      },
      o(e) {
        he(s.$$.fragment, e), (r = !1);
      },
      d(e) {
        e && M(o), Ee(s, e);
      },
    }
  );
}
function Je(e) {
  let t,
    n,
    o = [],
    s = new Map(),
    r = e[0].dynamic;
  const i = (e) => e[1].props.name;
  for (let t = 0; t < r.length; t += 1) {
    let n = Xe(e, r, t),
      a = i(n);
    s.set(a, (o[t] = Ze(a, n)));
  }
  return {
    c() {
      t = E('div');
      for (let e = 0; e < o.length; e += 1) o[e].c();
      q(t, 'class', 'js-modals');
    },
    m(e, s) {
      S(e, t, s);
      for (let e = 0; e < o.length; e += 1) o[e].m(t, null);
      n = !0;
    },
    p(e, [n]) {
      1 & n && ((r = e[0].dynamic), pe(), (o = Ce(o, n, i, 1, e, r, s, t, ye, Ze, null, Xe)), fe());
    },
    i(e) {
      if (!n) {
        for (let e = 0; e < r.length; e += 1) ge(o[e]);
        n = !0;
      }
    },
    o(e) {
      for (let e = 0; e < o.length; e += 1) he(o[e]);
      n = !1;
    },
    d(e) {
      e && M(t);
      for (let e = 0; e < o.length; e += 1) o[e].d();
    },
  };
}
function Qe(e, t, n) {
  let o;
  return c(e, Oe, (e) => n(0, (o = e))), [o];
}
class et extends Te {
  constructor(e) {
    super(), Le(this, e, Qe, Je, a, {});
  }
}
const tt = (e) => {
    e && console.error(`[smodale] ${e}`);
  },
  nt = (e) => {
    const t = Oe.getState();
    return [...t.static, ...t.dynamic].find((t) => t.props.name === e);
  },
  ot = (e, t, n) => {
    const o = nt(t);
    o &&
      (o[e](n),
      ((e) => {
        Oe.update((t) => ({
          static: t.static.filter((t) => t.props.name !== e),
          dynamic: t.dynamic.filter((t) => t.props.name !== e),
        }));
      })(t));
  };
var st = {
  show(...e) {
    const [t] = e;
    return t
      ? new Promise((n, o) => {
          if (nt(t)) return void tt(`Name ${t} already exists. You must provide an unique one.`);
          const s = [n, o, this.hide, this.cancel];
          'string' == typeof t
            ? ((e, t, n, o, s) => {
                Oe.update((r) => ({
                  static: [
                    ...r.static,
                    { props: { name: e }, resolve: t, reject: n, hide: o, cancel: s },
                  ],
                  dynamic: r.dynamic,
                }));
              })(t, ...s)
            : 'function' == typeof t
            ? ((e, t, n, o, s, r, i, a) => {
                document.getElementsByClassName('js-modals')[0] ||
                  new et({ target: document.body }),
                  Oe.update((l) => {
                    const c = (i && i.name) || 'modal';
                    return {
                      static: l.static,
                      dynamic: [
                        ...l.dynamic,
                        {
                          component: s,
                          componentProps: r,
                          props: { ...i, name: `${c}-${l.dynamic.length}` },
                          events: a,
                          resolve: e,
                          reject: t,
                          hide: n,
                          cancel: o,
                        },
                      ],
                    };
                  });
              })(...s, ...e)
            : tt('Invalid name or component');
        })
      : (tt('name missing'), Promise);
  },
  hide(e, t) {
    ot('resolve', e, t);
  },
  cancel(e, t) {
    ot('reject', e, t);
  },
};
const rt = {
  subscribe: null,
  addNotification: null,
  removeNotification: null,
  clearNotifications: null,
};
function it(e) {
  let t, n, o;
  var s = e[0];
  function r(e) {
    return { props: { notification: e[1], withoutStyles: e[2], onRemove: e[3] } };
  }
  return (
    s && (t = new s(r(e))),
    {
      c() {
        t && Me(t.$$.fragment), (n = F());
      },
      m(e, s) {
        t && Ae(t, e, s), S(e, n, s), (o = !0);
      },
      p(e, [o]) {
        const i = {};
        if (
          (2 & o && (i.notification = e[1]), 4 & o && (i.withoutStyles = e[2]), s !== (s = e[0]))
        ) {
          if (t) {
            pe();
            const e = t;
            he(e.$$.fragment, 1, 0, () => {
              Ee(e, 1);
            }),
              fe();
          }
          s
            ? ((t = new s(r(e))), Me(t.$$.fragment), ge(t.$$.fragment, 1), Ae(t, n.parentNode, n))
            : (t = null);
        } else s && t.$set(i);
      },
      i(e) {
        o || (t && ge(t.$$.fragment, e), (o = !0));
      },
      o(e) {
        t && he(t.$$.fragment, e), (o = !1);
      },
      d(e) {
        e && M(n), t && Ee(t, e);
      },
    }
  );
}
function at(e, t, n) {
  let { item: o } = t,
    { notification: s = {} } = t,
    { withoutStyles: r = !1 } = t;
  const { removeNotification: i } = K(rt),
    { id: a, removeAfter: l, customClass: c = '' } = s,
    d = () => i(a);
  let u = null;
  var m;
  return (
    l && (u = setTimeout(d, l)),
    (m = () => {
      l && u && clearTimeout(u);
    }),
    U().$$.on_destroy.push(m),
    (e.$$set = (e) => {
      'item' in e && n(0, (o = e.item)),
        'notification' in e && n(1, (s = e.notification)),
        'withoutStyles' in e && n(2, (r = e.withoutStyles));
    }),
    [o, s, r, d]
  );
}
class lt extends Te {
  constructor(e) {
    super(), Le(this, e, at, it, a, { item: 0, notification: 1, withoutStyles: 2 });
  }
}
function ct(t) {
  let n, o, s, r, a, l, c, u, p, f;
  const g = t[6].default,
    $ = d(g, t, t[5], null),
    b =
      $ ||
      (function (t) {
        let n;
        return {
          c() {
            n = T(t[1]);
          },
          m(e, t) {
            S(e, n, t);
          },
          p: e,
          d(e) {
            e && M(n);
          },
        };
      })(t);
  return {
    c() {
      (n = E('div')),
        (o = E('div')),
        b && b.c(),
        (s = _()),
        (r = E('button')),
        (a = T('×')),
        q(o, 'class', h(t[2]('content')) + ' svelte-max09n'),
        q(r, 'class', h(t[2]('button')) + ' svelte-max09n'),
        q(r, 'aria-label', 'delete notification'),
        q(n, 'class', h(t[2]()) + ' svelte-max09n'),
        q(n, 'role', 'status'),
        q(n, 'aria-live', 'polite');
    },
    m(e, l) {
      S(e, n, l),
        k(n, o),
        b && b.m(o, null),
        k(n, s),
        k(n, r),
        k(r, a),
        (u = !0),
        p ||
          ((f = j(r, 'click', function () {
            i(t[0]) && t[0].apply(this, arguments);
          })),
          (p = !0));
    },
    p(e, [n]) {
      (t = e), $ && $.p && 32 & n && m($, g, t, t[5], n, null, null);
    },
    i(e) {
      u ||
        (ge(b, e),
        oe(() => {
          c && c.end(1), l || (l = be(n, qe, {})), l.start();
        }),
        (u = !0));
    },
    o(e) {
      he(b, e), l && l.invalidate(), (c = xe(n, qe, {})), (u = !1);
    },
    d(e) {
      e && M(n), b && b.d(e), e && c && c.end(), (p = !1), f();
    },
  };
}
function dt(e, t, n) {
  let { $$slots: o = {}, $$scope: s } = t,
    { notification: r = {} } = t,
    { withoutStyles: i = !1 } = t,
    { onRemove: a = null } = t;
  const { id: l, text: c, type: d } = r;
  return (
    (e.$$set = (e) => {
      'notification' in e && n(3, (r = e.notification)),
        'withoutStyles' in e && n(4, (i = e.withoutStyles)),
        'onRemove' in e && n(0, (a = e.onRemove)),
        '$$scope' in e && n(5, (s = e.$$scope));
    }),
    [
      a,
      c,
      (e) => {
        const t = e ? `-${e}` : '';
        return `notification${t}${i ? '' : ` default-notification-style${t}`}${
          d && !e ? ` default-notification-${d}` : ''
        }`;
      },
      r,
      i,
      s,
      o,
    ]
  );
}
class ut extends Te {
  constructor(e) {
    super(), Le(this, e, dt, ct, a, { notification: 3, withoutStyles: 4, onRemove: 0 });
  }
}
const mt = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'],
  pt = (e, t) => {
    if (!((e) => !(!e || !e.text || 'string' != typeof e.text || !mt.includes(e.position)))(e))
      throw new Error('Notification object is not valid');
    const { id: n = new Date().getTime(), removeAfter: o = +e.removeAfter, ...s } = e;
    t((e) => [...e, { id: n, removeAfter: o, ...s }]);
  };
var ft = (() => {
  const { subscribe: e, set: t, update: n } = Ne([]);
  return {
    subscribe: e,
    addNotification: (e) => pt(e, n),
    removeNotification: (e) => ((e, t) => t((t) => t.filter((t) => t.id !== e)))(e, n),
    clearNotifications: () => ((e) => e([]))(t),
  };
})();
function gt(e, t, n) {
  const o = e.slice();
  return (o[6] = t[n]), o;
}
function ht(e, t, n) {
  const o = e.slice();
  return (o[9] = t[n]), o;
}
function $t(e) {
  let t, n;
  return (
    (t = new lt({ props: { notification: e[9], withoutStyles: e[1], item: e[0] ? e[0] : ut } })),
    {
      c() {
        Me(t.$$.fragment);
      },
      m(e, o) {
        Ae(t, e, o), (n = !0);
      },
      p(e, n) {
        const o = {};
        4 & n && (o.notification = e[9]),
          2 & n && (o.withoutStyles = e[1]),
          1 & n && (o.item = e[0] ? e[0] : ut),
          t.$set(o);
      },
      i(e) {
        n || (ge(t.$$.fragment, e), (n = !0));
      },
      o(e) {
        he(t.$$.fragment, e), (n = !1);
      },
      d(e) {
        Ee(t, e);
      },
    }
  );
}
function bt(e, t) {
  let n,
    o,
    s,
    r = t[9].position === t[6] && $t(t);
  return {
    key: e,
    first: null,
    c() {
      (n = F()), r && r.c(), (o = F()), (this.first = n);
    },
    m(e, t) {
      S(e, n, t), r && r.m(e, t), S(e, o, t), (s = !0);
    },
    p(e, n) {
      (t = e)[9].position === t[6]
        ? r
          ? (r.p(t, n), 4 & n && ge(r, 1))
          : ((r = $t(t)), r.c(), ge(r, 1), r.m(o.parentNode, o))
        : r &&
          (pe(),
          he(r, 1, 1, () => {
            r = null;
          }),
          fe());
    },
    i(e) {
      s || (ge(r), (s = !0));
    },
    o(e) {
      he(r), (s = !1);
    },
    d(e) {
      e && M(n), r && r.d(e), e && M(o);
    },
  };
}
function xt(e) {
  let t,
    n,
    o,
    s = [],
    r = new Map(),
    i = e[2];
  const a = (e) => e[9].id;
  for (let t = 0; t < i.length; t += 1) {
    let n = ht(e, i, t),
      o = a(n);
    r.set(o, (s[t] = bt(o, n)));
  }
  return {
    c() {
      t = E('div');
      for (let e = 0; e < s.length; e += 1) s[e].c();
      (n = _()), q(t, 'class', h(e[3](e[6])) + ' svelte-1flixvv');
    },
    m(e, r) {
      S(e, t, r);
      for (let e = 0; e < s.length; e += 1) s[e].m(t, null);
      k(t, n), (o = !0);
    },
    p(e, o) {
      7 & o && ((i = e[2]), pe(), (s = Ce(s, o, a, 1, e, i, r, t, ye, bt, n, ht)), fe());
    },
    i(e) {
      if (!o) {
        for (let e = 0; e < i.length; e += 1) ge(s[e]);
        o = !0;
      }
    },
    o(e) {
      for (let e = 0; e < s.length; e += 1) he(s[e]);
      o = !1;
    },
    d(e) {
      e && M(t);
      for (let e = 0; e < s.length; e += 1) s[e].d();
    },
  };
}
function vt(e) {
  let t, n, o;
  const s = e[5].default,
    r = d(s, e, e[4], null);
  let i = mt,
    a = [];
  for (let t = 0; t < i.length; t += 1) a[t] = xt(gt(e, i, t));
  const l = (e) =>
    he(a[e], 1, 1, () => {
      a[e] = null;
    });
  return {
    c() {
      r && r.c(), (t = _()), (n = E('div'));
      for (let e = 0; e < a.length; e += 1) a[e].c();
      q(n, 'class', 'notifications');
    },
    m(e, s) {
      r && r.m(e, s), S(e, t, s), S(e, n, s);
      for (let e = 0; e < a.length; e += 1) a[e].m(n, null);
      o = !0;
    },
    p(e, [t]) {
      if ((r && r.p && 16 & t && m(r, s, e, e[4], t, null, null), 15 & t)) {
        let o;
        for (i = mt, o = 0; o < i.length; o += 1) {
          const s = gt(e, i, o);
          a[o]
            ? (a[o].p(s, t), ge(a[o], 1))
            : ((a[o] = xt(s)), a[o].c(), ge(a[o], 1), a[o].m(n, null));
        }
        for (pe(), o = i.length; o < a.length; o += 1) l(o);
        fe();
      }
    },
    i(e) {
      if (!o) {
        ge(r, e);
        for (let e = 0; e < i.length; e += 1) ge(a[e]);
        o = !0;
      }
    },
    o(e) {
      he(r, e), (a = a.filter(Boolean));
      for (let e = 0; e < a.length; e += 1) he(a[e]);
      o = !1;
    },
    d(e) {
      r && r.d(e), e && M(t), e && M(n), A(a, e);
    },
  };
}
function wt(e, t, n) {
  let o;
  c(e, ft, (e) => n(2, (o = e)));
  let { $$slots: s = {}, $$scope: r } = t,
    { item: i = null } = t,
    { withoutStyles: a = !1 } = t;
  return (
    V(rt, ft),
    (e.$$set = (e) => {
      'item' in e && n(0, (i = e.item)),
        'withoutStyles' in e && n(1, (a = e.withoutStyles)),
        '$$scope' in e && n(4, (r = e.$$scope));
    }),
    [i, a, o, (e = '') => `position-${e}${a ? '' : ` default-position-style-${e}`}`, r, s]
  );
}
class yt extends Te {
  constructor(e) {
    super(), Le(this, e, wt, vt, a, { item: 0, withoutStyles: 1 });
  }
}
const Ct = Object.freeze({ SUCCESS: 'success', WARNING: 'warning', DANGER: 'danger' }),
  kt = (e, t) => {
    ft.addNotification({ removeAfter: 4500, position: 'bottom-center', ...t, text: e });
  };
var St =
  "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48' height='48' viewBox='0 0 48 48'%3e %3cg transform='translate(0%2c 0)'%3e %3cpolygon points='37.435 7.736 24 21.172 10.565 7.736 7.737 10.564 21.172 24 7.737 37.436 10.565 40.264 24 26.828 37.435 40.264 40.263 37.436 26.828 24 40.263 10.564 37.435 7.736' fill='currentColor' %3e%3c/polygon%3e %3c/g%3e%3c/svg%3e";
function Mt(e) {
  let t;
  return {
    c() {
      (t = L('path')),
        q(
          t,
          'd',
          'M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M14.658,18.284 c-0.661,0.26-2.952,1.354-4.272,0.191c-0.394-0.346-0.59-0.785-0.59-1.318c0-0.998,0.328-1.868,0.919-3.957 c0.104-0.395,0.231-0.907,0.231-1.313c0-0.701-0.266-0.887-0.987-0.887c-0.352,0-0.742,0.125-1.095,0.257l0.195-0.799 c0.787-0.32,1.775-0.71,2.621-0.71c1.269,0,2.203,0.633,2.203,1.837c0,0.347-0.06,0.955-0.186,1.375l-0.73,2.582 c-0.151,0.522-0.424,1.673-0.001,2.014c0.416,0.337,1.401,0.158,1.887-0.071L14.658,18.284z M13.452,8c-0.828,0-1.5-0.672-1.5-1.5 s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S14.28,8,13.452,8z'
        );
    },
    m(e, n) {
      S(e, t, n);
    },
    d(e) {
      e && M(t);
    },
  };
}
function At(e) {
  let t;
  return {
    c() {
      (t = L('path')),
        q(
          t,
          'd',
          'M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M13.645,5L13,14h-2l-0.608-9 H13.645z M12,20c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2c1.105,0,2,0.895,2,2C14,19.105,13.105,20,12,20z'
        );
    },
    m(e, n) {
      S(e, t, n);
    },
    d(e) {
      e && M(t);
    },
  };
}
function Et(e) {
  let t;
  return {
    c() {
      (t = L('path')),
        q(
          t,
          'd',
          'M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M13.645,5L13,14h-2l-0.608-9 H13.645z M12,20c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2c1.105,0,2,0.895,2,2C14,19.105,13.105,20,12,20z'
        );
    },
    m(e, n) {
      S(e, t, n);
    },
    d(e) {
      e && M(t);
    },
  };
}
function Lt(e) {
  let t;
  return {
    c() {
      (t = L('path')),
        q(
          t,
          'd',
          'M12,0A12,12,0,1,0,24,12,12.035,12.035,0,0,0,12,0ZM10,17.414,4.586,12,6,10.586l4,4,8-8L19.414,8Z'
        );
    },
    m(e, n) {
      S(e, t, n);
    },
    d(e) {
      e && M(t);
    },
  };
}
function Tt(e) {
  let t, n, o, s, r, i, a, l, c, u, p, f;
  function g(e, t) {
    return e[0] ? Lt : e[1] ? Et : e[2] ? At : Mt;
  }
  let h = g(e),
    $ = h(e);
  const b = e[6].default,
    x = d(b, e, e[5], null);
  return {
    c() {
      (t = E('div')),
        (n = E('div')),
        (o = E('div')),
        (s = L('svg')),
        $.c(),
        (r = _()),
        x && x.c(),
        (i = _()),
        (a = E('button')),
        (l = E('img')),
        q(s, 'class', 'icon icon--sm alert__icon margin-right-sm svelte-xldvxb'),
        q(s, 'viewBox', '0 0 24 24'),
        q(s, 'aria-hidden', 'true'),
        q(o, 'class', 'flex items-center'),
        q(l, 'class', 'icon block'),
        l.src !== (c = St) &&
          q(
            l,
            'src',
            "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48' height='48' viewBox='0 0 48 48'%3e %3cg transform='translate(0%2c 0)'%3e %3cpolygon points='37.435 7.736 24 21.172 10.565 7.736 7.737 10.564 21.172 24 7.737 37.436 10.565 40.264 24 26.828 37.435 40.264 40.263 37.436 26.828 24 40.263 10.564 37.435 7.736' fill='currentColor' %3e%3c/polygon%3e %3c/g%3e%3c/svg%3e"
          ),
        q(l, 'alt', 'Close'),
        q(a, 'type', 'button'),
        q(a, 'class', 'reset alert__close-btn margin-left-sm js-tab-focus svelte-xldvxb'),
        q(n, 'class', 'flex items-center justify-between'),
        q(t, 'class', 'alert alert--is-visible padding-sm radius-md svelte-xldvxb'),
        q(t, 'role', 'alert'),
        N(t, 'alert--success', e[0]),
        N(t, 'alert--warning', e[1]),
        N(t, 'alert--danger', e[2]);
    },
    m(c, d) {
      S(c, t, d),
        k(t, n),
        k(n, o),
        k(o, s),
        $.m(s, null),
        k(o, r),
        x && x.m(o, null),
        k(n, i),
        k(n, a),
        k(a, l),
        (u = !0),
        p || ((f = j(a, 'click', e[3])), (p = !0));
    },
    p(e, [n]) {
      h !== (h = g(e)) && ($.d(1), ($ = h(e)), $ && ($.c(), $.m(s, null))),
        x && x.p && 32 & n && m(x, b, e, e[5], n, null, null),
        1 & n && N(t, 'alert--success', e[0]),
        2 & n && N(t, 'alert--warning', e[1]),
        4 & n && N(t, 'alert--danger', e[2]);
    },
    i(e) {
      u || (ge(x, e), (u = !0));
    },
    o(e) {
      he(x, e), (u = !1);
    },
    d(e) {
      e && M(t), $.d(), x && x.d(e), (p = !1), f();
    },
  };
}
function _t(e, t, n) {
  let o,
    s,
    r,
    { $$slots: i = {}, $$scope: a } = t,
    { severity: l } = t;
  const c = Y();
  return (
    (e.$$set = (e) => {
      'severity' in e && n(4, (l = e.severity)), '$$scope' in e && n(5, (a = e.$$scope));
    }),
    (e.$$.update = () => {
      16 & e.$$.dirty && n(0, (o = l === Ct.SUCCESS)),
        16 & e.$$.dirty && n(1, (s = l === Ct.WARNING)),
        16 & e.$$.dirty && n(2, (r = l === Ct.DANGER));
    }),
    [o, s, r, () => c('remove'), l, a, i]
  );
}
class Ft extends Te {
  constructor(e) {
    super(), Le(this, e, _t, Tt, a, { severity: 4 });
  }
}
function jt(t) {
  let n,
    o = t[0].text + '';
  return {
    c() {
      (n = E('div')), q(n, 'class', 'text-sm');
    },
    m(e, t) {
      S(e, n, t), (n.innerHTML = o);
    },
    p: e,
    d(e) {
      e && M(n);
    },
  };
}
function qt(e) {
  let t, n, o, s, r;
  return (
    (n = new Ft({
      props: { severity: e[0]?.type, $$slots: { default: [jt] }, $$scope: { ctx: e } },
    })),
    n.$on('remove', e[1]),
    {
      c() {
        (t = E('div')),
          Me(n.$$.fragment),
          q(t, 'class', 'margin-sm shadow-sm radius-md'),
          q(t, 'role', 'status'),
          q(t, 'aria-live', 'polite');
      },
      m(e, o) {
        S(e, t, o), Ae(n, t, null), (r = !0);
      },
      p(e, [t]) {
        const o = {};
        8 & t && (o.$$scope = { dirty: t, ctx: e }), n.$set(o);
      },
      i(e) {
        r ||
          (ge(n.$$.fragment, e),
          oe(() => {
            s && s.end(1), o || (o = be(t, He, {})), o.start();
          }),
          (r = !0));
      },
      o(e) {
        he(n.$$.fragment, e), o && o.invalidate(), (s = xe(t, He, {})), (r = !1);
      },
      d(e) {
        e && M(t), Ee(n), e && s && s.end();
      },
    }
  );
}
function Ht(e, t, o) {
  const s = [];
  let r = f(t, s);
  const { notification: i = {}, onRemove: a = () => ({}) } = r;
  return (
    (e.$$set = (e) => {
      (t = n(n({}, t), p(e))), o(2, (r = f(t, s)));
    }),
    [i, a]
  );
}
class Pt extends Te {
  constructor(e) {
    super(), Le(this, e, Ht, qt, a, {});
  }
}
function Nt(e) {
  let t;
  const n = e[0].default,
    o = d(n, e, e[1], null);
  return {
    c() {
      o && o.c();
    },
    m(e, n) {
      o && o.m(e, n), (t = !0);
    },
    p(e, t) {
      o && o.p && 2 & t && m(o, n, e, e[1], t, null, null);
    },
    i(e) {
      t || (ge(o, e), (t = !0));
    },
    o(e) {
      he(o, e), (t = !1);
    },
    d(e) {
      o && o.d(e);
    },
  };
}
function Ot(e) {
  let t, n;
  return (
    (t = new yt({ props: { item: Pt, $$slots: { default: [Nt] }, $$scope: { ctx: e } } })),
    {
      c() {
        Me(t.$$.fragment);
      },
      m(e, o) {
        Ae(t, e, o), (n = !0);
      },
      p(e, [n]) {
        const o = {};
        2 & n && (o.$$scope = { dirty: n, ctx: e }), t.$set(o);
      },
      i(e) {
        n || (ge(t.$$.fragment, e), (n = !0));
      },
      o(e) {
        he(t.$$.fragment, e), (n = !1);
      },
      d(e) {
        Ee(t, e);
      },
    }
  );
}
function zt(e, t, n) {
  let { $$slots: o = {}, $$scope: s } = t;
  return (
    (e.$$set = (e) => {
      '$$scope' in e && n(1, (s = e.$$scope));
    }),
    [o, s]
  );
}
class Dt extends Te {
  constructor(e) {
    super(), Le(this, e, zt, Ot, a, {});
  }
}
function Rt(t) {
  let n, o, s, i, a, l, c, d;
  return {
    c() {
      (n = E('div')),
        (n.innerHTML =
          '<h2>Modal title</h2> \n  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!</p> \n  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!</p> \n  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!</p>'),
        (o = _()),
        (s = E('footer')),
        (i = E('button')),
        (i.textContent = 'Cancel'),
        (a = _()),
        (l = E('button')),
        (l.textContent = 'Confirm'),
        q(n, 'class', 'text-component'),
        q(i, 'type', 'button'),
        q(i, 'class', 'btn btn--subtle'),
        q(l, 'type', 'button'),
        q(l, 'class', 'btn btn--primary'),
        q(s, 'class', 'flex justify-end gap-xs margin-top-md');
    },
    m(e, r) {
      S(e, n, r),
        S(e, o, r),
        S(e, s, r),
        k(s, i),
        k(s, a),
        k(s, l),
        c || ((d = [j(i, 'click', t[1]), j(l, 'click', t[0])]), (c = !0));
    },
    p: e,
    i: e,
    o: e,
    d(e) {
      e && M(n), e && M(o), e && M(s), (c = !1), r(d);
    },
  };
}
function Wt(e) {
  const { hide: t, cancel: n } = De();
  return [t, n];
}
class Bt extends Te {
  constructor(e) {
    super(), Le(this, e, Wt, Rt, a, {});
  }
}
function It(t) {
  let n, o, s, i, a, l, c, d, u, m, p, f, g, h, $, b, x;
  return {
    c() {
      (n = E('header')),
        (o = E('button')),
        (s = E('img')),
        (a = _()),
        (l = E('span')),
        (l.textContent = 'Go back'),
        (c = _()),
        (d = E('div')),
        (u = E('p')),
        (u.textContent =
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!'),
        (m = _()),
        (p = E('p')),
        (p.textContent =
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!'),
        (f = _()),
        (g = E('p')),
        (g.textContent =
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!'),
        (h = _()),
        ($ = E('button')),
        ($.textContent = 'Show nested modal'),
        q(s, 'class', 'icon'),
        s.src !==
          (i =
            "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48' height='48' viewBox='0 0 48 48'%3e %3cg transform='translate(0%2c 0)'%3e %3cpath d='M45%2c22H8.828l9.879-9.879a1%2c1%2c0%2c0%2c0%2c0-1.414L17.293%2c9.293a1%2c1%2c0%2c0%2c0-1.414%2c0l-14%2c14a1%2c1%2c0%2c0%2c0%2c0%2c1.414l14%2c14a1%2c1%2c0%2c0%2c0%2c1.414%2c0l1.414-1.414a1%2c1%2c0%2c0%2c0%2c0-1.414L8.828%2c26H45a1%2c1%2c0%2c0%2c0%2c1-1V23A1%2c1%2c0%2c0%2c0%2c45%2c22Z' fill='currentColor' %3e%3c/path%3e %3c/g%3e%3c/svg%3e") &&
          q(
            s,
            'src',
            "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48' height='48' viewBox='0 0 48 48'%3e %3cg transform='translate(0%2c 0)'%3e %3cpath d='M45%2c22H8.828l9.879-9.879a1%2c1%2c0%2c0%2c0%2c0-1.414L17.293%2c9.293a1%2c1%2c0%2c0%2c0-1.414%2c0l-14%2c14a1%2c1%2c0%2c0%2c0%2c0%2c1.414l14%2c14a1%2c1%2c0%2c0%2c0%2c1.414%2c0l1.414-1.414a1%2c1%2c0%2c0%2c0%2c0-1.414L8.828%2c26H45a1%2c1%2c0%2c0%2c0%2c1-1V23A1%2c1%2c0%2c0%2c0%2c45%2c22Z' fill='currentColor' %3e%3c/path%3e %3c/g%3e%3c/svg%3e"
          ),
        q(s, 'alt', 'Go back'),
        q(l, 'class', 'margin-left-xs'),
        q(o, 'type', 'button'),
        q(o, 'class', 'btn btn--subtle'),
        q(n, 'class', 'margin-bottom-sm'),
        q($, 'class', 'btn btn--primary'),
        q($, 'type', 'button'),
        q(d, 'class', 'text-component');
    },
    m(e, r) {
      S(e, n, r),
        k(n, o),
        k(o, s),
        k(o, a),
        k(o, l),
        S(e, c, r),
        S(e, d, r),
        k(d, u),
        k(d, m),
        k(d, p),
        k(d, f),
        k(d, g),
        k(d, h),
        k(d, $),
        b || ((x = [j(o, 'click', t[0]), j($, 'click', t[1])]), (b = !0));
    },
    p: e,
    i: e,
    o: e,
    d(e) {
      e && M(n), e && M(c), e && M(d), (b = !1), r(x);
    },
  };
}
function Ut(e) {
  const { cancel: t } = De();
  return [
    t,
    () =>
      st.show(Bt, null, {
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
      }),
  ];
}
class Yt extends Te {
  constructor(e) {
    super(), Le(this, e, Ut, It, a, {});
  }
}
function Vt(t) {
  let n, o, s, i, a, l, c, d, u, m, p, f, g;
  return {
    c() {
      (n = E('header')),
        (o = E('h2')),
        (o.textContent = 'First modal'),
        (s = _()),
        (i = E('button')),
        (a = E('img')),
        (c = _()),
        (d = E('div')),
        (u = E('p')),
        (u.textContent =
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta voluptatum unde omnis\n    distinctio obcaecati corporis ducimus beatae. Sunt, debitis ex dicta, illum voluptates molestiae\n    soluta neque, rerum eligendi laudantium maxime.'),
        (m = _()),
        (p = E('button')),
        (p.textContent = 'Show nested modal'),
        q(a, 'class', 'icon icon--sm'),
        a.src !== (l = St) &&
          q(
            a,
            'src',
            "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48' height='48' viewBox='0 0 48 48'%3e %3cg transform='translate(0%2c 0)'%3e %3cpolygon points='37.435 7.736 24 21.172 10.565 7.736 7.737 10.564 21.172 24 7.737 37.436 10.565 40.264 24 26.828 37.435 40.264 40.263 37.436 26.828 24 40.263 10.564 37.435 7.736' fill='currentColor' %3e%3c/polygon%3e %3c/g%3e%3c/svg%3e"
          ),
        q(a, 'alt', 'Close'),
        q(i, 'class', 'btn btn--subtle padding-xs js-tab-focus'),
        q(i, 'type', 'button'),
        q(n, 'class', 'flex items-center justify-between margin-bottom-sm'),
        q(p, 'class', 'btn btn--primary'),
        q(p, 'type', 'button'),
        q(d, 'class', 'text-component');
    },
    m(e, r) {
      S(e, n, r),
        k(n, o),
        k(n, s),
        k(n, i),
        k(i, a),
        S(e, c, r),
        S(e, d, r),
        k(d, u),
        k(d, m),
        k(d, p),
        f || ((g = [j(i, 'click', t[0]), j(p, 'click', t[1])]), (f = !0));
    },
    p: e,
    i: e,
    o: e,
    d(e) {
      e && M(n), e && M(c), e && M(d), (f = !1), r(g);
    },
  };
}
function Kt(e) {
  const { cancel: t } = De();
  return [
    t,
    () =>
      st.show(Yt, null, {
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
      }),
  ];
}
class Xt extends Te {
  constructor(e) {
    super(), Le(this, e, Kt, Vt, a, {});
  }
}
function Gt(e) {
  const t = e;
  Util.removeClass(t.element, t.showClass),
    (t.firstFocusable = null),
    (t.lastFocusable = null),
    t.selectedTrigger && t.selectedTrigger.focus(),
    t.element.removeAttribute('tabindex'),
    (function (e) {
      e.element.removeEventListener('keydown', e), e.element.removeEventListener('click', e);
    })(t);
}
function Zt(e, t) {
  (t.keyCode && 27 === t.keyCode) || (t.key && 'Escape' === t.key)
    ? Gt(e)
    : ((t.keyCode && 9 === t.keyCode) || (t.key && 'Tab' === t.key)) &&
      (function (e, t) {
        e.firstFocusable === document.activeElement &&
          t.shiftKey &&
          (t.preventDefault(), e.lastFocusable.focus()),
          e.lastFocusable !== document.activeElement ||
            t.shiftKey ||
            (t.preventDefault(), e.firstFocusable.focus());
      })(e, t);
}
function Jt(e) {
  Util.addClass(e.element, e.showClass),
    (function (e) {
      const t = e.element.querySelectorAll(
        '[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary'
      );
      !(function (e, t) {
        const n = e;
        for (let e = 0; e < t.length; e += 1)
          if (t[e].offsetWidth || t[e].offsetHeight || t[e].getClientRects().length)
            return (n.firstFocusable = t[e]), !0;
      })(e, t),
        (function (e, t) {
          const n = e;
          for (let e = t.length - 1; e >= 0; e -= 1)
            if (t[e].offsetWidth || t[e].offsetHeight || t[e].getClientRects().length)
              return (n.lastFocusable = t[e]), !0;
        })(e, t);
    })(e),
    Util.moveFocus(e.element);
}
function Qt(e) {
  e.element.addEventListener('keydown', e), e.element.addEventListener('click', e);
}
function en(e) {
  const t = e,
    n = getComputedStyle(t.element, ':before').getPropertyValue('content').replace(/'|"/g, '');
  n !== t.layout &&
    ((t.layout = n),
    'static' !== n && Util.addClass(t.element, 'is-hidden'),
    Util.toggleClass(t.element, t.staticClass + t.customStaticClass, 'static' === n),
    'static' !== n && setTimeout(() => Util.removeClass(t.element, 'is-hidden')),
    'static' === n
      ? t.element.removeAttribute('role', 'alertdialog')
      : t.element.setAttribute('role', 'alertdialog'),
    'static' === n && Util.hasClass(t.element, t.showClass) && Gt(t));
}
function tn(e) {
  const t = e;
  if (
    ((function (e) {
      const t = getComputedStyle(e.element, ':before').getPropertyValue('content');
      t &&
        '' !== t &&
        'none' !== t &&
        (en(e),
        e.element.addEventListener('update-sidebar', function () {
          en(e);
        })),
        Util.addClass(e.element, e.readyClass);
    })(t),
    t.triggers)
  )
    for (let e = 0; e < t.triggers.length; e += 1)
      t.triggers[e].addEventListener('click', function (e) {
        if ((e.preventDefault(), Util.hasClass(t.element, t.showClass)))
          return (t.selectedTrigger = e.target), void Gt(t);
        (t.selectedTrigger = e.target), Jt(t), Qt(t);
      });
}
const nn = function (e) {
  (this.element = e),
    (this.triggers = document.querySelectorAll(
      `[aria-controls="${this.element.getAttribute('id')}"]`
    )),
    (this.firstFocusable = null),
    (this.lastFocusable = null),
    (this.selectedTrigger = null),
    (this.showClass = 'sidebar--is-visible'),
    (this.staticClass = 'sidebar--static'),
    (this.customStaticClass = ''),
    (this.readyClass = 'sidebar--loaded'),
    (this.layout = !1),
    (function (e) {
      const t = e,
        n = t.element.getAttribute('data-static-class');
      n && (t.customStaticClass = ` ${n}`);
    })(this),
    tn(this);
};
function on(t) {
  let n, o, s;
  return {
    c() {
      (n = E('button')),
        (o = E('i')),
        q(o, 'class', 'anim-menu-btn__icon anim-menu-btn__icon--close svelte-k651fp'),
        q(o, 'aria-hidden', 'true'),
        q(
          n,
          'class',
          (s = 'reset anim-menu-btn color-contrast-high js-tab-focus ' + t[0] + ' svelte-k651fp')
        ),
        q(n, 'aria-label', t[2]),
        q(n, 'aria-controls', t[1]),
        q(n, 'type', 'button');
    },
    m(e, t) {
      S(e, n, t), k(n, o);
    },
    p(e, [t]) {
      1 & t &&
        s !==
          (s = 'reset anim-menu-btn color-contrast-high js-tab-focus ' + e[0] + ' svelte-k651fp') &&
        q(n, 'class', s),
        4 & t && q(n, 'aria-label', e[2]),
        2 & t && q(n, 'aria-controls', e[1]);
    },
    i: e,
    o: e,
    d(e) {
      e && M(n);
    },
  };
}
function sn(e, t, n) {
  let { class: o = '' } = t,
    { ariaControls: s = '' } = t,
    { ariaLabel: r = 'Toggle menu' } = t;
  return (
    (e.$$set = (e) => {
      'class' in e && n(0, (o = e.class)),
        'ariaControls' in e && n(1, (s = e.ariaControls)),
        'ariaLabel' in e && n(2, (r = e.ariaLabel));
    }),
    [o, s, r]
  );
}
(nn.prototype.close = function () {
  Gt(this);
}),
  (nn.prototype.handleEvent = function (e) {
    switch (e.type) {
      case 'click':
        !(function (e, t) {
          (t.target.closest('.js-sidebar__close-btn') || Util.hasClass(t.target, 'js-sidebar')) &&
            (t.preventDefault(), Gt(e));
        })(this, e);
        break;
      case 'keydown':
        Zt(this, e);
    }
  }),
  (nn.prototype.resetLayout = function () {
    this.element.dispatchEvent(new CustomEvent('update-sidebar'));
  });
class rn extends Te {
  constructor(e) {
    super(), Le(this, e, sn, on, a, { class: 0, ariaControls: 1, ariaLabel: 2 });
  }
}
const an = (e) => ({ prop: 1 & e }),
  ln = (e) => ({ prop: { sidebar: e[0] } }),
  cn = (e) => ({ prop: 1 & e }),
  dn = (e) => ({ prop: { sidebar: e[0] } });
function un(e) {
  let t, n, o, s, r, i, a, l, c, u, p, f, g, h, b, x, v, w, y, C, A, L, T, F;
  n = new rn({
    props: {
      ariaControls: 'sidebar',
      class:
        'btn btn--subtle radius-50% position-fixed top-0 right-0 z-index-fixed-element margin-top-sm margin-right-md',
    },
  });
  const j = e[3].aside,
    H = d(j, e, e[2], dn),
    P = e[3].default,
    N = d(P, e, e[2], ln);
  return {
    c() {
      (t = E('div')),
        Me(n.$$.fragment),
        (o = _()),
        (s = E('div')),
        (r = E('aside')),
        (i = E('div')),
        (a = E('header')),
        (l = E('div')),
        (c = E('h1')),
        (c.textContent = 'Smodale'),
        (u = _()),
        (p = E('small')),
        (p.textContent = 'v1.0.0'),
        (f = _()),
        (g = E('button')),
        (h = E('img')),
        (x = _()),
        (v = E('div')),
        (w = E('div')),
        H && H.c(),
        (y = _()),
        (C = E('main')),
        (A = E('div')),
        N && N.c(),
        q(t, 'class', 'hide@md no-js:is-hidden'),
        q(c, 'class', 'text-md text-truncate'),
        q(c, 'id', 'sidebar-title'),
        q(p, 'class', 'color-contrast-medium'),
        q(h, 'class', 'icon icon--sm'),
        h.src !== (b = St) &&
          q(
            h,
            'src',
            "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48' height='48' viewBox='0 0 48 48'%3e %3cg transform='translate(0%2c 0)'%3e %3cpolygon points='37.435 7.736 24 21.172 10.565 7.736 7.737 10.564 21.172 24 7.737 37.436 10.565 40.264 24 26.828 37.435 40.264 40.263 37.436 26.828 24 40.263 10.564 37.435 7.736' fill='currentColor' %3e%3c/polygon%3e %3c/g%3e%3c/svg%3e"
          ),
        q(h, 'alt', 'Close panel'),
        q(g, 'class', 'btn btn--subtle padding-sm js-sidebar__close-btn js-tab-focus'),
        q(g, 'type', 'button'),
        q(a, 'class', 'sidebar__header z-index-2 svelte-b07n84'),
        q(w, 'class', 'padding-md'),
        q(v, 'class', 'position-relative z-index-1'),
        q(i, 'class', 'sidebar__panel'),
        q(
          r,
          'class',
          'sidebar sidebar--static@md sidebar--right-on-mobile js-sidebar svelte-b07n84'
        ),
        q(
          r,
          'data-static-class',
          'position-relative z-index-1 flex-grow max-width-xxxxs border-right sidebar--sticky-on-desktop'
        ),
        q(r, 'id', 'sidebar'),
        q(r, 'aria-labelledby', 'sidebar-title'),
        q(A, 'class', 'padding-md'),
        q(C, 'class', 'position-relative flex-grow height-100%'),
        q(s, 'class', 'flex@md');
    },
    m(d, m) {
      S(d, t, m),
        Ae(n, t, null),
        S(d, o, m),
        S(d, s, m),
        k(s, r),
        k(r, i),
        k(i, a),
        k(a, l),
        k(l, c),
        k(l, u),
        k(l, p),
        k(a, f),
        k(a, g),
        k(g, h),
        k(i, x),
        k(i, v),
        k(v, w),
        H && H.m(w, null),
        k(s, y),
        k(s, C),
        k(C, A),
        N && N.m(A, null),
        (L = !0),
        T || ((F = $(e[1].call(null, r))), (T = !0));
    },
    p(e, [t]) {
      H && H.p && 5 & t && m(H, j, e, e[2], t, cn, dn),
        N && N.p && 5 & t && m(N, P, e, e[2], t, an, ln);
    },
    i(e) {
      L || (ge(n.$$.fragment, e), ge(H, e), ge(N, e), (L = !0));
    },
    o(e) {
      he(n.$$.fragment, e), he(H, e), he(N, e), (L = !1);
    },
    d(e) {
      e && M(t), Ee(n), e && M(o), e && M(s), H && H.d(e), N && N.d(e), (T = !1), F();
    },
  };
}
function mn(e, t, n) {
  let { $$slots: o = {}, $$scope: s } = t,
    r = null;
  return (
    (e.$$set = (e) => {
      '$$scope' in e && n(2, (s = e.$$scope));
    }),
    [
      r,
      (e) => {
        n(0, (r = new nn(e))),
          window.requestAnimationFrame
            ? window.requestAnimationFrame(r.resetLayout.bind(r))
            : r.resetLayout(),
          window.addEventListener('resize', () => {
            window.requestAnimationFrame
              ? window.requestAnimationFrame(r.resetLayout.bind(r))
              : setTimeout(r.resetLayout.bind(r), 250);
          });
      },
      s,
      o,
    ]
  );
}
class pn extends Te {
  constructor(e) {
    super(), Le(this, e, mn, un, a, {});
  }
}
function fn(e) {
  let t, n;
  const o = e[1].default,
    s = d(o, e, e[0], null);
  return {
    c() {
      (t = E('nav')), s && s.c();
    },
    m(e, o) {
      S(e, t, o), s && s.m(t, null), (n = !0);
    },
    p(e, [t]) {
      s && s.p && 1 & t && m(s, o, e, e[0], t, null, null);
    },
    i(e) {
      n || (ge(s, e), (n = !0));
    },
    o(e) {
      he(s, e), (n = !1);
    },
    d(e) {
      e && M(t), s && s.d(e);
    },
  };
}
function gn(e, t, n) {
  let { $$slots: o = {}, $$scope: s } = t;
  return (
    (e.$$set = (e) => {
      '$$scope' in e && n(0, (s = e.$$scope));
    }),
    [s, o]
  );
}
class hn extends Te {
  constructor(e) {
    super(), Le(this, e, gn, fn, a, {});
  }
}
const { window: $n } = we;
function bn(e) {
  let t, n, o, s;
  const i = e[3].default,
    a = d(i, e, e[2], null);
  return {
    c() {
      (t = E('div')), a && a.c();
    },
    m(r, i) {
      S(r, t, i),
        a && a.m(t, null),
        (n = !0),
        o || ((s = [j($n, 'scroll', e[1]), $(e[0].call(null, t))]), (o = !0));
    },
    p(e, [t]) {
      a && a.p && 4 & t && m(a, i, e, e[2], t, null, null);
    },
    i(e) {
      n || (ge(a, e), (n = !0));
    },
    o(e) {
      he(a, e), (n = !1);
    },
    d(e) {
      e && M(t), a && a.d(e), (o = !1), r(s);
    },
  };
}
const xn = Ne({ currentSectionId: '', clickScrolling: !1 });
function vn(t, n, o) {
  let s,
    r = e;
  c(t, xn, (e) => o(5, (s = e))), t.$$.on_destroy.push(() => r());
  let { $$slots: i = {}, $$scope: a } = n,
    l = 0;
  return (
    (t.$$set = (e) => {
      '$$scope' in e && o(2, (a = e.$$scope));
    }),
    [
      (e) => {
        const t = [...e.getElementsByClassName('js-scroll-spy-section')];
        let n = null;
        if (t.length) {
          let e = 0;
          (n = new IntersectionObserver(
            () => {
              s.clickScrolling ||
                (clearTimeout(e),
                (e = setTimeout(() => {
                  const e = window.innerHeight / 2,
                    n = t.reduce((t, n) => {
                      const { top: o } = n.getBoundingClientRect();
                      return o < e ? n.id : t;
                    }, '');
                  xn.update((e) => ({ ...e, currentSectionId: n }));
                }, 240)));
            },
            { threshold: [0, 0.1], rootMargin: '0px 0px -70% 0px' }
          )),
            t.forEach((e) => n.observe(e));
        }
        return {
          destroy() {
            n && n.disconnect();
          },
        };
      },
      () => {
        clearTimeout(l),
          (l = setTimeout(() => xn.update((e) => ({ ...e, clickScrolling: !1 })), 240));
      },
      a,
      i,
    ]
  );
}
class wn extends Te {
  constructor(e) {
    super(), Le(this, e, vn, bn, a, {});
  }
}
function yn(e) {
  let t, n;
  const o = e[2].default,
    s = d(o, e, e[1], null);
  return {
    c() {
      (t = E('section')), s && s.c(), q(t, 'class', 'js-scroll-spy-section'), q(t, 'id', e[0]);
    },
    m(e, o) {
      S(e, t, o), s && s.m(t, null), (n = !0);
    },
    p(e, [r]) {
      s && s.p && 2 & r && m(s, o, e, e[1], r, null, null), (!n || 1 & r) && q(t, 'id', e[0]);
    },
    i(e) {
      n || (ge(s, e), (n = !0));
    },
    o(e) {
      he(s, e), (n = !1);
    },
    d(e) {
      e && M(t), s && s.d(e);
    },
  };
}
function Cn(e, t, n) {
  let { $$slots: o = {}, $$scope: s } = t,
    { id: r = '' } = t;
  return (
    (e.$$set = (e) => {
      'id' in e && n(0, (r = e.id)), '$$scope' in e && n(1, (s = e.$$scope));
    }),
    [r, s, o]
  );
}
class kn extends Te {
  constructor(e) {
    super(), Le(this, e, Cn, yn, a, { id: 0 });
  }
}
function Sn(e) {
  let t, n;
  const o = e[1].default,
    s = d(o, e, e[0], null);
  return {
    c() {
      (t = E('div')),
        s && s.c(),
        q(
          t,
          'class',
          'text-uppercase color-contrast-medium margin-bottom-xxs text-xs font-semibold'
        );
    },
    m(e, o) {
      S(e, t, o), s && s.m(t, null), (n = !0);
    },
    p(e, [t]) {
      s && s.p && 1 & t && m(s, o, e, e[0], t, null, null);
    },
    i(e) {
      n || (ge(s, e), (n = !0));
    },
    o(e) {
      he(s, e), (n = !1);
    },
    d(e) {
      e && M(t), s && s.d(e);
    },
  };
}
function Mn(e, t, n) {
  let { $$slots: o = {}, $$scope: s } = t;
  return (
    (e.$$set = (e) => {
      '$$scope' in e && n(0, (s = e.$$scope));
    }),
    [s, o]
  );
}
class An extends Te {
  constructor(e) {
    super(), Le(this, e, Mn, Sn, a, {});
  }
}
function En(e) {
  let t, n;
  const o = e[1].default,
    s = d(o, e, e[0], null);
  return {
    c() {
      (t = E('nav')), s && s.c(), q(t, 'class', 'margin-bottom-xxs');
    },
    m(e, o) {
      S(e, t, o), s && s.m(t, null), (n = !0);
    },
    p(e, [t]) {
      s && s.p && 1 & t && m(s, o, e, e[0], t, null, null);
    },
    i(e) {
      n || (ge(s, e), (n = !0));
    },
    o(e) {
      he(s, e), (n = !1);
    },
    d(e) {
      e && M(t), s && s.d(e);
    },
  };
}
function Ln(e, t, n) {
  let { $$slots: o = {}, $$scope: s } = t;
  return (
    (e.$$set = (e) => {
      '$$scope' in e && n(0, (s = e.$$scope));
    }),
    [s, o]
  );
}
class Tn extends Te {
  constructor(e) {
    super(), Le(this, e, Ln, En, a, {});
  }
}
const _n = function (e) {
  Util.cssSupports('color', 'var(--color-var)') &&
    ((this.element = e),
    (this.scrollDuration = parseInt(this.element.getAttribute('data-duration'), 10) || 300),
    (this.dataElementY =
      this.element.getAttribute('data-scrollable-element-y') ||
      this.element.getAttribute('data-scrollable-element') ||
      this.element.getAttribute('data-element')),
    (this.scrollElementY = this.dataElementY ? document.querySelector(this.dataElementY) : window),
    (this.dataElementX = this.element.getAttribute('data-scrollable-element-x')),
    (this.scrollElementX = this.dataElementY ? document.querySelector(this.dataElementX) : window),
    this.initScroll());
};
function Fn(e) {
  let t, n, o, s, i;
  const a = e[7].default,
    l = d(a, e, e[6], null);
  return {
    c() {
      (t = E('a')),
        l && l.c(),
        q(t, 'href', e[1]),
        q(t, 'class', (n = 'js-smooth-scroll ' + e[0])),
        q(t, 'data-duration', e[2]),
        q(t, 'aria-current', e[3]);
    },
    m(n, r) {
      S(n, t, r),
        l && l.m(t, null),
        (o = !0),
        s || ((i = [$(e[4].call(null, t)), j(t, 'click', e[8])]), (s = !0));
    },
    p(e, s) {
      l && l.p && 64 & s && m(l, a, e, e[6], s, null, null),
        (!o || 2 & s) && q(t, 'href', e[1]),
        (!o || (1 & s && n !== (n = 'js-smooth-scroll ' + e[0]))) && q(t, 'class', n),
        (!o || 4 & s) && q(t, 'data-duration', e[2]),
        (!o || 8 & s) && q(t, 'aria-current', e[3]);
    },
    i(e) {
      o || (ge(l, e), (o = !0));
    },
    o(e) {
      he(l, e), (o = !1);
    },
    d(e) {
      e && M(t), l && l.d(e), (s = !1), r(i);
    },
  };
}
function jn(e) {
  let t,
    n,
    o = e[5].default && Fn(e);
  return {
    c() {
      o && o.c(), (t = F());
    },
    m(e, s) {
      o && o.m(e, s), S(e, t, s), (n = !0);
    },
    p(e, [n]) {
      e[5].default
        ? o
          ? (o.p(e, n), 32 & n && ge(o, 1))
          : ((o = Fn(e)), o.c(), ge(o, 1), o.m(t.parentNode, t))
        : o &&
          (pe(),
          he(o, 1, 1, () => {
            o = null;
          }),
          fe());
    },
    i(e) {
      n || (ge(o), (n = !0));
    },
    o(e) {
      he(o), (n = !1);
    },
    d(e) {
      o && o.d(e), e && M(t);
    },
  };
}
function qn(e, t, n) {
  let { $$slots: o = {}, $$scope: s } = t;
  const r = g(o);
  let { class: i = '' } = t,
    { href: a = '' } = t,
    { duration: l = 300 } = t,
    { ariaCurrent: c = '' } = t;
  return (
    (e.$$set = (e) => {
      'class' in e && n(0, (i = e.class)),
        'href' in e && n(1, (a = e.href)),
        'duration' in e && n(2, (l = e.duration)),
        'ariaCurrent' in e && n(3, (c = e.ariaCurrent)),
        '$$scope' in e && n(6, (s = e.$$scope));
    }),
    [
      i,
      a,
      l,
      c,
      (e) => new _n(e),
      r,
      s,
      o,
      function (t) {
        X(e, t);
      },
    ]
  );
}
(_n.prototype.initScroll = function () {
  const e = this;
  this.element.addEventListener('click', function (t) {
    t.preventDefault();
    const n = t.target.closest('.js-smooth-scroll').getAttribute('href').replace('#', ''),
      o = document.getElementById(n);
    if (!o) return;
    const s = o.getAttribute('tabindex');
    let r = e.scrollElementY.scrollTop || document.documentElement.scrollTop;
    e.dataElementY || (r = window.scrollY || document.documentElement.scrollTop);
    const i = !!e.dataElementY && e.scrollElementY,
      a = e.getFixedElementHeight();
    Util.scrollTo(
      o.getBoundingClientRect().top + r - a,
      e.scrollDuration,
      function () {
        e.scrollHorizontally(o, a),
          Util.moveFocus(o),
          window.history.pushState(!1, !1, `#${n}`),
          e.resetTarget(o, s);
      },
      i
    );
  });
}),
  (_n.prototype.scrollHorizontally = function (e, t) {
    const n = !!this.dataElementX && this.scrollElementX,
      o = this.scrollElementX
        ? this.scrollElementX.scrollLeft
        : document.documentElement.scrollLeft,
      s = e.getBoundingClientRect().left + o - t,
      r = this.scrollDuration,
      i = n || window;
    let a = i.scrollLeft || document.documentElement.scrollLeft,
      l = null;
    if ((n || (a = window.scrollX || document.documentElement.scrollLeft), Math.abs(a - s) < 5))
      return;
    window.requestAnimationFrame(function e(t) {
      l || (l = t);
      let n = t - l;
      n > r && (n = r);
      const o = Math.easeInOutQuad(n, a, s - a, r);
      i.scrollTo({ left: o }), n < r && window.requestAnimationFrame(e);
    });
  }),
  (_n.prototype.resetTarget = function (e, t) {
    const n = e;
    parseInt(n.getAttribute('tabindex'), 10) < 0 &&
      ((n.style.outline = 'none'), t || n.removeAttribute('tabindex'));
  }),
  (_n.prototype.getFixedElementHeight = function () {
    const e = this.dataElementY ? this.scrollElementY : document.documentElement;
    let t = parseInt(getComputedStyle(e).getPropertyValue('scroll-padding'), 10);
    if (Number.isNaN(t)) {
      t = 0;
      const e = document.querySelector(this.element.getAttribute('data-fixed-element'));
      e && (t = parseInt(e.getBoundingClientRect().height, 10));
    }
    return t;
  });
class Hn extends Te {
  constructor(e) {
    super(), Le(this, e, qn, jn, a, { class: 0, href: 1, duration: 2, ariaCurrent: 3 });
  }
}
function Pn(e) {
  let t;
  const n = e[3].default,
    o = d(n, e, e[5], null);
  return {
    c() {
      o && o.c();
    },
    m(e, n) {
      o && o.m(e, n), (t = !0);
    },
    p(e, t) {
      o && o.p && 32 & t && m(o, n, e, e[5], t, null, null);
    },
    i(e) {
      t || (ge(o, e), (t = !0));
    },
    o(e) {
      he(o, e), (t = !1);
    },
    d(e) {
      o && o.d(e);
    },
  };
}
function Nn(e) {
  let t, n, o;
  return (
    (n = new Hn({
      props: {
        href: e[0],
        ariaCurrent: e[1],
        class:
          'text-decoration-none radius-md padding-y-xxs padding-x-xxs block color-contrast-high',
        $$slots: { default: [Pn] },
        $$scope: { ctx: e },
      },
    })),
    n.$on('click', e[4]),
    {
      c() {
        (t = E('div')),
          Me(n.$$.fragment),
          q(t, 'class', 'sidenav-list-item margin-left-xxxxs margin-bottom-xxxxs svelte-11oue6z');
      },
      m(e, s) {
        S(e, t, s), Ae(n, t, null), (o = !0);
      },
      p(e, [t]) {
        const o = {};
        1 & t && (o.href = e[0]),
          2 & t && (o.ariaCurrent = e[1]),
          32 & t && (o.$$scope = { dirty: t, ctx: e }),
          n.$set(o);
      },
      i(e) {
        o || (ge(n.$$.fragment, e), (o = !0));
      },
      o(e) {
        he(n.$$.fragment, e), (o = !1);
      },
      d(e) {
        e && M(t), Ee(n);
      },
    }
  );
}
function On(e, t, n) {
  let o,
    { $$slots: s = {}, $$scope: r } = t,
    { href: i = '' } = t,
    { current: a = !1 } = t;
  return (
    (e.$$set = (e) => {
      'href' in e && n(0, (i = e.href)),
        'current' in e && n(2, (a = e.current)),
        '$$scope' in e && n(5, (r = e.$$scope));
    }),
    (e.$$.update = () => {
      4 & e.$$.dirty && n(1, (o = a ? 'page' : null));
    }),
    [
      i,
      o,
      a,
      s,
      function (t) {
        X(e, t);
      },
      r,
    ]
  );
}
class zn extends Te {
  constructor(e) {
    super(), Le(this, e, On, Nn, a, { href: 0, current: 2 });
  }
}
const Dn = (e) => ({ prop: 2 & e }),
  Rn = (e) => ({ prop: e[1] });
function Wn(e) {
  let t, n, o, s;
  const a = e[6].default,
    l = d(a, e, e[5], Rn);
  return {
    c() {
      (t = E('div')),
        l && l.c(),
        q(t, 'class', 'scroll-spy-link'),
        N(t, 'scroll-spy-link--current', e[1]);
    },
    m(r, a) {
      S(r, t, a),
        l && l.m(t, null),
        (n = !0),
        o ||
          ((s = [
            j(t, 'click', function () {
              i(e[2](e[0])) && e[2](e[0]).apply(this, arguments);
            }),
            $(e[3].call(null, t)),
          ]),
          (o = !0));
    },
    p(n, [o]) {
      (e = n),
        l && l.p && 34 & o && m(l, a, e, e[5], o, Dn, Rn),
        2 & o && N(t, 'scroll-spy-link--current', e[1]);
    },
    i(e) {
      n || (ge(l, e), (n = !0));
    },
    o(e) {
      he(l, e), (n = !1);
    },
    d(e) {
      e && M(t), l && l.d(e), (o = !1), r(s);
    },
  };
}
function Bn(e, t, n) {
  let o, s;
  c(e, xn, (e) => n(4, (s = e)));
  let { $$slots: r = {}, $$scope: i } = t,
    { id: a = '' } = t;
  const l = (e) => xn.update((t) => ({ ...t, currentSectionId: e, clickScrolling: !0 }));
  return (
    (e.$$set = (e) => {
      'id' in e && n(0, (a = e.id)), '$$scope' in e && n(5, (i = e.$$scope));
    }),
    (e.$$.update = () => {
      17 & e.$$.dirty && n(1, (o = s.currentSectionId === a));
    }),
    [
      a,
      o,
      l,
      () => {
        const e = window.location.hash.replace('#', '');
        e === a && l(e);
      },
      s,
      i,
      r,
    ]
  );
}
class In extends Te {
  constructor(e) {
    super(), Le(this, e, Bn, Wn, a, { id: 0 });
  }
}
function Un(t) {
  let n;
  return {
    c() {
      (n = E('p')),
        (n.innerHTML =
          'Smodale module targets modern browsers. However if you want to support older browsers make sure to\n  <a target="_blank" ref="noopener noreferrer" href="https://svelte-recipes.netlify.app/build-setup/#transpiling-es6-to-es5-for-legacy-browser-ie11-support-with-babel">transpile</a> \n  <code>ECMAScript 2020</code> and provide\n  <a target="_blank" ref="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#polyfill">closest polyfill\n  </a>to your code.');
    },
    m(e, t) {
      S(e, n, t);
    },
    p: e,
    i: e,
    o: e,
    d(e) {
      e && M(n);
    },
  };
}
var Yn = (function (e) {
  var t = /\blang(?:uage)?-([\w-]+)\b/i,
    n = 0,
    o = {
      manual: e.Prism && e.Prism.manual,
      disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
      util: {
        encode: function e(t) {
          return t instanceof s
            ? new s(t.type, e(t.content), t.alias)
            : Array.isArray(t)
            ? t.map(e)
            : t
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/\u00a0/g, ' ');
        },
        type: function (e) {
          return Object.prototype.toString.call(e).slice(8, -1);
        },
        objId: function (e) {
          return e.__id || Object.defineProperty(e, '__id', { value: ++n }), e.__id;
        },
        clone: function e(t, n) {
          var s, r;
          switch (((n = n || {}), o.util.type(t))) {
            case 'Object':
              if (((r = o.util.objId(t)), n[r])) return n[r];
              for (var i in ((s = {}), (n[r] = s), t)) t.hasOwnProperty(i) && (s[i] = e(t[i], n));
              return s;
            case 'Array':
              return (
                (r = o.util.objId(t)),
                n[r]
                  ? n[r]
                  : ((s = []),
                    (n[r] = s),
                    t.forEach(function (t, o) {
                      s[o] = e(t, n);
                    }),
                    s)
              );
            default:
              return t;
          }
        },
        getLanguage: function (e) {
          for (; e && !t.test(e.className); ) e = e.parentElement;
          return e ? (e.className.match(t) || [, 'none'])[1].toLowerCase() : 'none';
        },
        currentScript: function () {
          if ('undefined' == typeof document) return null;
          if ('currentScript' in document) return document.currentScript;
          try {
            throw new Error();
          } catch (o) {
            var e = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(o.stack) || [])[1];
            if (e) {
              var t = document.getElementsByTagName('script');
              for (var n in t) if (t[n].src == e) return t[n];
            }
            return null;
          }
        },
        isActive: function (e, t, n) {
          for (var o = 'no-' + t; e; ) {
            var s = e.classList;
            if (s.contains(t)) return !0;
            if (s.contains(o)) return !1;
            e = e.parentElement;
          }
          return !!n;
        },
      },
      languages: {
        extend: function (e, t) {
          var n = o.util.clone(o.languages[e]);
          for (var s in t) n[s] = t[s];
          return n;
        },
        insertBefore: function (e, t, n, s) {
          var r = (s = s || o.languages)[e],
            i = {};
          for (var a in r)
            if (r.hasOwnProperty(a)) {
              if (a == t) for (var l in n) n.hasOwnProperty(l) && (i[l] = n[l]);
              n.hasOwnProperty(a) || (i[a] = r[a]);
            }
          var c = s[e];
          return (
            (s[e] = i),
            o.languages.DFS(o.languages, function (t, n) {
              n === c && t != e && (this[t] = i);
            }),
            i
          );
        },
        DFS: function e(t, n, s, r) {
          r = r || {};
          var i = o.util.objId;
          for (var a in t)
            if (t.hasOwnProperty(a)) {
              n.call(t, a, t[a], s || a);
              var l = t[a],
                c = o.util.type(l);
              'Object' !== c || r[i(l)]
                ? 'Array' !== c || r[i(l)] || ((r[i(l)] = !0), e(l, n, a, r))
                : ((r[i(l)] = !0), e(l, n, null, r));
            }
        },
      },
      plugins: {},
      highlightAll: function (e, t) {
        o.highlightAllUnder(document, e, t);
      },
      highlightAllUnder: function (e, t, n) {
        var s = {
          callback: n,
          container: e,
          selector:
            'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
        };
        o.hooks.run('before-highlightall', s),
          (s.elements = Array.prototype.slice.apply(s.container.querySelectorAll(s.selector))),
          o.hooks.run('before-all-elements-highlight', s);
        for (var r, i = 0; (r = s.elements[i++]); ) o.highlightElement(r, !0 === t, s.callback);
      },
      highlightElement: function (n, s, r) {
        var i = o.util.getLanguage(n),
          a = o.languages[i];
        n.className = n.className.replace(t, '').replace(/\s+/g, ' ') + ' language-' + i;
        var l = n.parentElement;
        l &&
          'pre' === l.nodeName.toLowerCase() &&
          (l.className = l.className.replace(t, '').replace(/\s+/g, ' ') + ' language-' + i);
        var c = { element: n, language: i, grammar: a, code: n.textContent };
        function d(e) {
          (c.highlightedCode = e),
            o.hooks.run('before-insert', c),
            (c.element.innerHTML = c.highlightedCode),
            o.hooks.run('after-highlight', c),
            o.hooks.run('complete', c),
            r && r.call(c.element);
        }
        if ((o.hooks.run('before-sanity-check', c), !c.code))
          return o.hooks.run('complete', c), void (r && r.call(c.element));
        if ((o.hooks.run('before-highlight', c), c.grammar))
          if (s && e.Worker) {
            var u = new Worker(o.filename);
            (u.onmessage = function (e) {
              d(e.data);
            }),
              u.postMessage(
                JSON.stringify({ language: c.language, code: c.code, immediateClose: !0 })
              );
          } else d(o.highlight(c.code, c.grammar, c.language));
        else d(o.util.encode(c.code));
      },
      highlight: function (e, t, n) {
        var r = { code: e, grammar: t, language: n };
        return (
          o.hooks.run('before-tokenize', r),
          (r.tokens = o.tokenize(r.code, r.grammar)),
          o.hooks.run('after-tokenize', r),
          s.stringify(o.util.encode(r.tokens), r.language)
        );
      },
      tokenize: function (e, t) {
        var n = t.rest;
        if (n) {
          for (var o in n) t[o] = n[o];
          delete t.rest;
        }
        var s = new a();
        return (
          l(s, s.head, e),
          i(e, s, t, s.head, 0),
          (function (e) {
            var t = [],
              n = e.head.next;
            for (; n !== e.tail; ) t.push(n.value), (n = n.next);
            return t;
          })(s)
        );
      },
      hooks: {
        all: {},
        add: function (e, t) {
          var n = o.hooks.all;
          (n[e] = n[e] || []), n[e].push(t);
        },
        run: function (e, t) {
          var n = o.hooks.all[e];
          if (n && n.length) for (var s, r = 0; (s = n[r++]); ) s(t);
        },
      },
      Token: s,
    };
  function s(e, t, n, o) {
    (this.type = e), (this.content = t), (this.alias = n), (this.length = 0 | (o || '').length);
  }
  function r(e, t, n, o) {
    e.lastIndex = t;
    var s = e.exec(n);
    if (s && o && s[1]) {
      var r = s[1].length;
      (s.index += r), (s[0] = s[0].slice(r));
    }
    return s;
  }
  function i(e, t, n, a, d, u) {
    for (var m in n)
      if (n.hasOwnProperty(m) && n[m]) {
        var p = n[m];
        p = Array.isArray(p) ? p : [p];
        for (var f = 0; f < p.length; ++f) {
          if (u && u.cause == m + ',' + f) return;
          var g = p[f],
            h = g.inside,
            $ = !!g.lookbehind,
            b = !!g.greedy,
            x = g.alias;
          if (b && !g.pattern.global) {
            var v = g.pattern.toString().match(/[imsuy]*$/)[0];
            g.pattern = RegExp(g.pattern.source, v + 'g');
          }
          for (
            var w = g.pattern || g, y = a.next, C = d;
            y !== t.tail && !(u && C >= u.reach);
            C += y.value.length, y = y.next
          ) {
            var k = y.value;
            if (t.length > e.length) return;
            if (!(k instanceof s)) {
              var S,
                M = 1;
              if (b) {
                if (!(S = r(w, C, e, $))) break;
                var A = S.index,
                  E = S.index + S[0].length,
                  L = C;
                for (L += y.value.length; A >= L; ) L += (y = y.next).value.length;
                if (((C = L -= y.value.length), y.value instanceof s)) continue;
                for (var T = y; T !== t.tail && (L < E || 'string' == typeof T.value); T = T.next)
                  M++, (L += T.value.length);
                M--, (k = e.slice(C, L)), (S.index -= C);
              } else if (!(S = r(w, 0, k, $))) continue;
              A = S.index;
              var _ = S[0],
                F = k.slice(0, A),
                j = k.slice(A + _.length),
                q = C + k.length;
              u && q > u.reach && (u.reach = q);
              var H = y.prev;
              F && ((H = l(t, H, F)), (C += F.length)),
                c(t, H, M),
                (y = l(t, H, new s(m, h ? o.tokenize(_, h) : _, x, _))),
                j && l(t, y, j),
                M > 1 && i(e, t, n, y.prev, C, { cause: m + ',' + f, reach: q });
            }
          }
        }
      }
  }
  function a() {
    var e = { value: null, prev: null, next: null },
      t = { value: null, prev: e, next: null };
    (e.next = t), (this.head = e), (this.tail = t), (this.length = 0);
  }
  function l(e, t, n) {
    var o = t.next,
      s = { value: n, prev: t, next: o };
    return (t.next = s), (o.prev = s), e.length++, s;
  }
  function c(e, t, n) {
    for (var o = t.next, s = 0; s < n && o !== e.tail; s++) o = o.next;
    (t.next = o), (o.prev = t), (e.length -= s);
  }
  if (
    ((e.Prism = o),
    (s.stringify = function e(t, n) {
      if ('string' == typeof t) return t;
      if (Array.isArray(t)) {
        var s = '';
        return (
          t.forEach(function (t) {
            s += e(t, n);
          }),
          s
        );
      }
      var r = {
          type: t.type,
          content: e(t.content, n),
          tag: 'span',
          classes: ['token', t.type],
          attributes: {},
          language: n,
        },
        i = t.alias;
      i && (Array.isArray(i) ? Array.prototype.push.apply(r.classes, i) : r.classes.push(i)),
        o.hooks.run('wrap', r);
      var a = '';
      for (var l in r.attributes)
        a += ' ' + l + '="' + (r.attributes[l] || '').replace(/"/g, '&quot;') + '"';
      return (
        '<' +
        r.tag +
        ' class="' +
        r.classes.join(' ') +
        '"' +
        a +
        '>' +
        r.content +
        '</' +
        r.tag +
        '>'
      );
    }),
    !e.document)
  )
    return e.addEventListener
      ? (o.disableWorkerMessageHandler ||
          e.addEventListener(
            'message',
            function (t) {
              var n = JSON.parse(t.data),
                s = n.language,
                r = n.code,
                i = n.immediateClose;
              e.postMessage(o.highlight(r, o.languages[s], s)), i && e.close();
            },
            !1
          ),
        o)
      : o;
  var d = o.util.currentScript();
  function u() {
    o.manual || o.highlightAll();
  }
  if ((d && ((o.filename = d.src), d.hasAttribute('data-manual') && (o.manual = !0)), !o.manual)) {
    var m = document.readyState;
    'loading' === m || ('interactive' === m && d && d.defer)
      ? document.addEventListener('DOMContentLoaded', u)
      : window.requestAnimationFrame
      ? window.requestAnimationFrame(u)
      : window.setTimeout(u, 16);
  }
  return o;
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
 */ function Vn(e) {
  let t, n;
  return {
    c() {
      (t = E('div')),
        (n = T(e[1])),
        q(
          t,
          'class',
          'position-absolute top-0 right-0 text-xs margin-top-sm margin-right-md font-mono color-contrast-low'
        );
    },
    m(e, o) {
      S(e, t, o), k(t, n);
    },
    p(e, t) {
      2 & t && P(n, e[1]);
    },
    d(e) {
      e && M(t);
    },
  };
}
function Kn(e) {
  let t, n, o, s;
  return {
    c() {
      (t = E('code')), q(t, 'class', (n = 'language-' + e[0] + ' svelte-12j4wht'));
    },
    m(n, r) {
      S(n, t, r), (t.innerHTML = e[3]), o || ((s = $(e[4].call(null, t))), (o = !0));
    },
    p(e, o) {
      8 & o && (t.innerHTML = e[3]),
        1 & o && n !== (n = 'language-' + e[0] + ' svelte-12j4wht') && q(t, 'class', n);
    },
    d(e) {
      e && M(t), (o = !1), s();
    },
  };
}
function Xn(t) {
  let o,
    s,
    r,
    i,
    a,
    l = t[1] && Vn(t),
    c = !('data-src' in t[5]) && t[2] && Kn(t),
    d = [{ class: 'radius-lg' }, t[5]],
    u = {};
  for (let e = 0; e < d.length; e += 1) u = n(u, d[e]);
  return {
    c() {
      (o = E('div')),
        l && l.c(),
        (s = _()),
        (r = E('pre')),
        c && c.c(),
        H(r, u),
        N(r, 'svelte-12j4wht', !0),
        q(o, 'class', 'code-snippet position-relative svelte-12j4wht');
    },
    m(e, n) {
      S(e, o, n),
        l && l.m(o, null),
        k(o, s),
        k(o, r),
        c && c.m(r, null),
        i || ((a = $(t[4].call(null, r))), (i = !0));
    },
    p(e, [t]) {
      e[1] ? (l ? l.p(e, t) : ((l = Vn(e)), l.c(), l.m(o, s))) : l && (l.d(1), (l = null)),
        !('data-src' in e[5]) && e[2]
          ? c
            ? c.p(e, t)
            : ((c = Kn(e)), c.c(), c.m(r, null))
          : c && (c.d(1), (c = null)),
        H(r, (u = ke(d, [{ class: 'radius-lg' }, 32 & t && e[5]]))),
        N(r, 'svelte-12j4wht', !0);
    },
    i: e,
    o: e,
    d(e) {
      e && M(o), l && l.d(), c && c.d(), (i = !1), a();
    },
  };
}
function Gn(e, t, o) {
  let s;
  const r = ['language', 'unescaped', 'filename', 'code'];
  let i = f(t, r),
    { language: a = 'js' } = t,
    { unescaped: l = !1 } = t,
    { filename: c = '' } = t,
    { code: d = '' } = t;
  window.Prism.languages.svelte = window.Prism.languages.extend('markup');
  return (
    (e.$$set = (e) => {
      (t = n(n({}, t), p(e))),
        o(5, (i = f(t, r))),
        'language' in e && o(0, (a = e.language)),
        'unescaped' in e && o(6, (l = e.unescaped)),
        'filename' in e && o(1, (c = e.filename)),
        'code' in e && o(2, (d = e.code));
    }),
    (e.$$.update = () => {
      69 & e.$$.dirty && o(3, (s = l && 'markup' === a ? `\x3c!--${d.trim()}--\x3e` : d));
    }),
    [a, c, d, s, (e) => window.Prism.highlightElement(e), i, l]
  );
}
'undefined' != typeof module && module.exports && (module.exports = Yn),
  'undefined' != typeof global && (global.Prism = Yn),
  (Yn.languages.markup = {
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
  (Yn.languages.markup.tag.inside['attr-value'].inside.entity = Yn.languages.markup.entity),
  (Yn.languages.markup.doctype.inside['internal-subset'].inside = Yn.languages.markup),
  Yn.hooks.add('wrap', function (e) {
    'entity' === e.type && (e.attributes.title = e.content.replace(/&amp;/, '&'));
  }),
  Object.defineProperty(Yn.languages.markup.tag, 'addInlined', {
    value: function (e, t) {
      var n = {};
      (n['language-' + t] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: Yn.languages[t],
      }),
        (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
      var o = { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: n } };
      o['language-' + t] = { pattern: /[\s\S]+/, inside: Yn.languages[t] };
      var s = {};
      (s[e] = {
        pattern: RegExp(
          /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
            /__/g,
            function () {
              return e;
            }
          ),
          'i'
        ),
        lookbehind: !0,
        greedy: !0,
        inside: o,
      }),
        Yn.languages.insertBefore('markup', 'cdata', s);
    },
  }),
  (Yn.languages.html = Yn.languages.markup),
  (Yn.languages.mathml = Yn.languages.markup),
  (Yn.languages.svg = Yn.languages.markup),
  (Yn.languages.xml = Yn.languages.extend('markup', {})),
  (Yn.languages.ssml = Yn.languages.xml),
  (Yn.languages.atom = Yn.languages.xml),
  (Yn.languages.rss = Yn.languages.xml),
  (function (e) {
    var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
    (e.languages.css = {
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
          '\\burl\\((?:' + t.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)',
          'i'
        ),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: { pattern: RegExp('^' + t.source + '$'), alias: 'url' },
        },
      },
      selector: RegExp('[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + t.source + ')*(?=\\s*\\{)'),
      string: { pattern: t, greedy: !0 },
      property: /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      important: /!important\b/i,
      function: /[-a-z0-9]+(?=\()/i,
      punctuation: /[(){};:,]/,
    }),
      (e.languages.css.atrule.inside.rest = e.languages.css);
    var n = e.languages.markup;
    n &&
      (n.tag.addInlined('style', 'css'),
      e.languages.insertBefore(
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
                    inside: e.languages.css,
                  },
                  punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
                },
              },
              'attr-name': /^style/i,
            },
          },
        },
        n.tag
      ));
  })(Yn),
  (Yn.languages.clike = {
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
  (Yn.languages.javascript = Yn.languages.extend('clike', {
    'class-name': [
      Yn.languages.clike['class-name'],
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
  (Yn.languages.javascript[
    'class-name'
  ][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
  Yn.languages.insertBefore('javascript', 'keyword', {
    regex: {
      pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        'regex-source': {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: 'language-regex',
          inside: Yn.languages.regex,
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
        inside: Yn.languages.javascript,
      },
      {
        pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        inside: Yn.languages.javascript,
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Yn.languages.javascript,
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Yn.languages.javascript,
      },
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
  }),
  Yn.languages.insertBefore('javascript', 'string', {
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
            rest: Yn.languages.javascript,
          },
        },
        string: /[\s\S]+/,
      },
    },
  }),
  Yn.languages.markup && Yn.languages.markup.tag.addInlined('script', 'javascript'),
  (Yn.languages.js = Yn.languages.javascript),
  (function () {
    if ('undefined' != typeof self && self.Prism && self.document) {
      Element.prototype.matches ||
        (Element.prototype.matches =
          Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
      var e = window.Prism,
        t = {
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
        n = 'data-src-status',
        o = 'loading',
        s = 'loaded',
        r = 'pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',
        i = /\blang(?:uage)?-([\w-]+)\b/i;
      e.hooks.add('before-highlightall', function (e) {
        e.selector += ', ' + r;
      }),
        e.hooks.add('before-sanity-check', function (i) {
          var a = i.element;
          if (a.matches(r)) {
            (i.code = ''), a.setAttribute(n, o);
            var c = a.appendChild(document.createElement('CODE'));
            c.textContent = 'Loading…';
            var d = a.getAttribute('data-src'),
              u = i.language;
            if ('none' === u) {
              var m = (/\.(\w+)$/.exec(d) || [, 'none'])[1];
              u = t[m] || m;
            }
            l(c, u), l(a, u);
            var p = e.plugins.autoloader;
            p && p.loadLanguages(u);
            var f = new XMLHttpRequest();
            f.open('GET', d, !0),
              (f.onreadystatechange = function () {
                var t, o;
                4 == f.readyState &&
                  (f.status < 400 && f.responseText
                    ? (a.setAttribute(n, s),
                      (c.textContent = f.responseText),
                      e.highlightElement(c))
                    : (a.setAttribute(n, 'failed'),
                      f.status >= 400
                        ? (c.textContent =
                            ((t = f.status),
                            (o = f.statusText),
                            '✖ Error ' + t + ' while fetching file: ' + o))
                        : (c.textContent = '✖ Error: File does not exist or is empty')));
              }),
              f.send(null);
          }
        }),
        (e.plugins.fileHighlight = {
          highlight: function (t) {
            for (var n, o = (t || document).querySelectorAll(r), s = 0; (n = o[s++]); )
              e.highlightElement(n);
          },
        });
      var a = !1;
      e.fileHighlight = function () {
        a ||
          (console.warn(
            'Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.'
          ),
          (a = !0)),
          e.plugins.fileHighlight.highlight.apply(this, arguments);
      };
    }
    function l(e, t) {
      var n = e.className;
      (n = n.replace(i, ' ') + ' language-' + t), (e.className = n.replace(/\s+/g, ' ').trim());
    }
  })(),
  (function () {
    var e =
      Object.assign ||
      function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e;
      };
    function t(t) {
      this.defaults = e({}, t);
    }
    function n(e) {
      for (var t = 0, n = 0; n < e.length; ++n) e.charCodeAt(n) == '\t'.charCodeAt(0) && (t += 3);
      return e.length + t;
    }
    (t.prototype = {
      setDefaults: function (t) {
        this.defaults = e(this.defaults, t);
      },
      normalize: function (t, n) {
        for (var o in (n = e(this.defaults, n))) {
          var s = o.replace(/-(\w)/g, function (e, t) {
            return t.toUpperCase();
          });
          'normalize' !== o &&
            'setDefaults' !== s &&
            n[o] &&
            this[s] &&
            (t = this[s].call(this, t, n[o]));
        }
        return t;
      },
      leftTrim: function (e) {
        return e.replace(/^\s+/, '');
      },
      rightTrim: function (e) {
        return e.replace(/\s+$/, '');
      },
      tabsToSpaces: function (e, t) {
        return (t = 0 | t || 4), e.replace(/\t/g, new Array(++t).join(' '));
      },
      spacesToTabs: function (e, t) {
        return (t = 0 | t || 4), e.replace(RegExp(' {' + t + '}', 'g'), '\t');
      },
      removeTrailing: function (e) {
        return e.replace(/\s*?$/gm, '');
      },
      removeInitialLineFeed: function (e) {
        return e.replace(/^(?:\r?\n|\r)/, '');
      },
      removeIndent: function (e) {
        var t = e.match(/^[^\S\n\r]*(?=\S)/gm);
        return t && t[0].length
          ? (t.sort(function (e, t) {
              return e.length - t.length;
            }),
            t[0].length ? e.replace(RegExp('^' + t[0], 'gm'), '') : e)
          : e;
      },
      indent: function (e, t) {
        return e.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++t).join('\t') + '$&');
      },
      breakLines: function (e, t) {
        t = !0 === t ? 80 : 0 | t || 80;
        for (var o = e.split('\n'), s = 0; s < o.length; ++s)
          if (!(n(o[s]) <= t)) {
            for (var r = o[s].split(/(\s+)/g), i = 0, a = 0; a < r.length; ++a) {
              var l = n(r[a]);
              (i += l) > t && ((r[a] = '\n' + r[a]), (i = l));
            }
            o[s] = r.join('');
          }
        return o.join('\n');
      },
    }),
      'undefined' != typeof module && module.exports && (module.exports = t),
      'undefined' != typeof Prism &&
        ((Prism.plugins.NormalizeWhitespace = new t({
          'remove-trailing': !0,
          'remove-indent': !0,
          'left-trim': !0,
          'right-trim': !0,
        })),
        Prism.hooks.add('before-sanity-check', function (e) {
          var t = Prism.plugins.NormalizeWhitespace;
          if (
            (!e.settings || !1 !== e.settings['whitespace-normalization']) &&
            Prism.util.isActive(e.element, 'whitespace-normalization', !0)
          )
            if ((e.element && e.element.parentNode) || !e.code) {
              var n = e.element.parentNode;
              if (e.code && n && 'pre' === n.nodeName.toLowerCase()) {
                for (var o = n.childNodes, s = '', r = '', i = !1, a = 0; a < o.length; ++a) {
                  var l = o[a];
                  l == e.element
                    ? (i = !0)
                    : '#text' === l.nodeName &&
                      (i ? (r += l.nodeValue) : (s += l.nodeValue), n.removeChild(l), --a);
                }
                if (e.element.children.length && Prism.plugins.KeepMarkup) {
                  var c = s + e.element.innerHTML + r;
                  (e.element.innerHTML = t.normalize(c, e.settings)),
                    (e.code = e.element.textContent);
                } else (e.code = s + e.code + r), (e.code = t.normalize(e.code, e.settings));
              }
            } else e.code = t.normalize(e.code, e.settings);
        }));
  })(),
  'undefined' != typeof self &&
    self.Prism &&
    self.document &&
    (Element.prototype.matches ||
      (Element.prototype.matches =
        Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
    (Prism.plugins.UnescapedMarkup = !0),
    Prism.hooks.add('before-highlightall', function (e) {
      e.selector +=
        ', [class*="lang-"] script[type="text/plain"], [class*="language-"] script[type="text/plain"], script[type="text/plain"][class*="lang-"], script[type="text/plain"][class*="language-"]';
    }),
    Prism.hooks.add('before-sanity-check', function (e) {
      var t = e.element;
      if (t.matches('script[type="text/plain"]')) {
        var n = document.createElement('code'),
          o = document.createElement('pre');
        o.className = n.className = t.className;
        var s = t.dataset;
        return (
          Object.keys(s || {}).forEach(function (e) {
            Object.prototype.hasOwnProperty.call(s, e) && (o.dataset[e] = s[e]);
          }),
          (n.textContent = e.code = e.code.replace(/&lt;\/script(?:>|&gt;)/gi, '</script>')),
          o.appendChild(n),
          t.parentNode.replaceChild(o, t),
          void (e.element = n)
        );
      }
      if (!e.code) {
        var r = t.childNodes;
        1 === r.length &&
          '#comment' == r[0].nodeName &&
          (t.textContent = e.code = r[0].textContent);
      }
    })),
  (window.Prism = window.Prism || {}),
  (window.Prism.manual = !0);
class Zn extends Te {
  constructor(e) {
    super(), Le(this, e, Gn, Xn, a, { language: 0, unescaped: 6, filename: 1, code: 2 });
  }
}
function Jn(t) {
  let n, o, s, r, i, a, l, c, d, u, m, p, f, g;
  return (
    (d = new Zn({
      props: {
        code: "\n  import smodale from 'smodale';\n\n  smodale.show().catch(() => {});\n  ",
      },
    })),
    (f = new Zn({
      props: {
        code:
          "\n  window.addEventListener('unhandledrejection', (event) => event.preventDefault());\n  ",
      },
    })),
    {
      c() {
        (n = E('h3')),
          (n.innerHTML = '<code>Uncaught (in promise)</code>'),
          (o = _()),
          (s = E('hr')),
          (r = _()),
          (i = E('p')),
          (i.innerHTML =
            'This console error happens when the returned promise from <code>show()</code> method has been\n  rejected through the <code>cancel()</code> method and has no rejection handler.'),
          (a = _()),
          (l = E('p')),
          (l.innerHTML =
            'You can prevent that from happening by handling the rejection with the <code>catch</code> block'),
          (c = _()),
          Me(d.$$.fragment),
          (u = _()),
          (m = E('p')),
          (m.innerHTML =
            'Another solution could be preventing the unhandled rejection event from <code>window</code> object'),
          (p = _()),
          Me(f.$$.fragment);
      },
      m(e, t) {
        S(e, n, t),
          S(e, o, t),
          S(e, s, t),
          S(e, r, t),
          S(e, i, t),
          S(e, a, t),
          S(e, l, t),
          S(e, c, t),
          Ae(d, e, t),
          S(e, u, t),
          S(e, m, t),
          S(e, p, t),
          Ae(f, e, t),
          (g = !0);
      },
      p: e,
      i(e) {
        g || (ge(d.$$.fragment, e), ge(f.$$.fragment, e), (g = !0));
      },
      o(e) {
        he(d.$$.fragment, e), he(f.$$.fragment, e), (g = !1);
      },
      d(e) {
        e && M(n),
          e && M(o),
          e && M(s),
          e && M(r),
          e && M(i),
          e && M(a),
          e && M(l),
          e && M(c),
          Ee(d, e),
          e && M(u),
          e && M(m),
          e && M(p),
          Ee(f, e);
      },
    }
  );
}
function Qn(t) {
  let n, o, s;
  return {
    c() {
      (n = E('button')),
        (n.textContent = 'Show first modal'),
        q(n, 'class', 'btn btn--accent'),
        q(n, 'type', 'button');
    },
    m(e, r) {
      S(e, n, r), o || ((s = j(n, 'click', t[0])), (o = !0));
    },
    p: e,
    i: e,
    o: e,
    d(e) {
      e && M(n), (o = !1), s();
    },
  };
}
function eo(e) {
  return [
    () =>
      st.show(Xt, null, {
        breakpoints: {
          '32rem': {
            maxWidth: 'var(--max-width-xxs)',
            margin: 'var(--component-padding)',
            borderRadius: 'var(--radius-md)',
            centered: !0,
            scrollable: !0,
          },
        },
      }),
  ];
}
class to extends Te {
  constructor(e) {
    super(), Le(this, e, eo, Qn, a, {});
  }
}
const no = function (e, t) {
  (this.element = e),
    (this.summary = this.element.querySelector('.js-details__summary')),
    (this.details = this.element.querySelector('.js-details__content')),
    (this.htmlElSupported = 'open' in this.element),
    this.initDetails(t),
    this.initDetailsEvents();
};
function oo(e) {
  let t, n, o, s, r, i, a, l, c, u, p, f, g, h;
  const b = e[4].default,
    x = d(b, e, e[3], null);
  return {
    c() {
      (t = E('details')),
        (n = E('summary')),
        (o = E('span')),
        (s = L('svg')),
        (r = L('path')),
        (i = _()),
        (a = E('span')),
        (l = T(e[1])),
        (c = _()),
        (u = E('div')),
        x && x.c(),
        q(
          r,
          'd',
          'M2.783.088A.5.5,0,0,0,2,.5v11a.5.5,0,0,0,.268.442A.49.49,0,0,0,2.5,12a.5.5,0,0,0,.283-.088l8-5.5a.5.5,0,0,0,0-.824Z'
        ),
        q(s, 'class', 'icon icon--xxs margin-right-xxxs svelte-oq3v32'),
        q(s, 'aria-hidden', 'true'),
        q(s, 'viewBox', '0 0 12 12'),
        q(o, 'class', 'flex items-center'),
        q(n, 'class', 'details__summary js-details__summary svelte-oq3v32'),
        q(n, 'role', 'button'),
        q(u, 'class', 'details__content margin-top-xs js-details__content'),
        q(t, 'class', (p = 'details js-details ' + e[0] + ' svelte-oq3v32'));
    },
    m(d, m) {
      S(d, t, m),
        k(t, n),
        k(n, o),
        k(o, s),
        k(s, r),
        k(o, i),
        k(o, a),
        k(a, l),
        k(t, c),
        k(t, u),
        x && x.m(u, null),
        (f = !0),
        g || ((h = $(e[2].call(null, t))), (g = !0));
    },
    p(e, [n]) {
      (!f || 2 & n) && P(l, e[1]),
        x && x.p && 8 & n && m(x, b, e, e[3], n, null, null),
        (!f || (1 & n && p !== (p = 'details js-details ' + e[0] + ' svelte-oq3v32'))) &&
          q(t, 'class', p);
    },
    i(e) {
      f || (ge(x, e), (f = !0));
    },
    o(e) {
      he(x, e), (f = !1);
    },
    d(e) {
      e && M(t), x && x.d(e), (g = !1), h();
    },
  };
}
(no.prototype.initDetails = function (e) {
  Util.setAttributes(this.summary, {
    'aria-expanded': 'false',
    'aria-controls': `details--${e}`,
    role: 'button',
  }),
    Util.setAttributes(this.details, { 'aria-hidden': 'true', id: `details--${e}` });
}),
  (no.prototype.initDetailsEvents = function () {
    const e = this;
    this.htmlElSupported
      ? this.element.addEventListener('toggle', function () {
          const t = e.element.open ? ['true', 'false'] : ['false', 'true'];
          e.updateAriaValues(t);
        })
      : this.summary.addEventListener('click', function (t) {
          t.preventDefault();
          const n = e.element.getAttribute('open');
          let o = [];
          n ? e.element.removeAttribute('open') : e.element.setAttribute('open', 'true'),
            (o = n ? ['false', 'true'] : ['true', 'false']),
            e.updateAriaValues(o);
        });
  }),
  (no.prototype.updateAriaValues = function (e) {
    this.summary.setAttribute('aria-expanded', e[0]),
      this.details.setAttribute('aria-hidden', e[1]);
  });
let so = 0;
function ro(e, t, n) {
  let { $$slots: o = {}, $$scope: s } = t,
    { class: r } = t,
    { title: i = '' } = t;
  so += 1;
  return (
    (e.$$set = (e) => {
      'class' in e && n(0, (r = e.class)),
        'title' in e && n(1, (i = e.title)),
        '$$scope' in e && n(3, (s = e.$$scope));
    }),
    [r, i, (e) => new no(e, so), s, o]
  );
}
class io extends Te {
  constructor(e) {
    super(), Le(this, e, ro, oo, a, { class: 0, title: 1 });
  }
}
function ao(t) {
  let n, o;
  return (
    (n = new Zn({
      props: {
        'data-src': 'demo/components/organisms/SectionNestedModals/NestedModalsExample.svelte',
      },
    })),
    {
      c() {
        Me(n.$$.fragment);
      },
      m(e, t) {
        Ae(n, e, t), (o = !0);
      },
      p: e,
      i(e) {
        o || (ge(n.$$.fragment, e), (o = !0));
      },
      o(e) {
        he(n.$$.fragment, e), (o = !1);
      },
      d(e) {
        Ee(n, e);
      },
    }
  );
}
function lo(e) {
  let t, n, o, s;
  return (
    (t = new to({})),
    (o = new io({
      props: {
        class: 'margin-top-sm',
        title: 'Show code',
        $$slots: { default: [ao] },
        $$scope: { ctx: e },
      },
    })),
    {
      c() {
        Me(t.$$.fragment), (n = _()), Me(o.$$.fragment);
      },
      m(e, r) {
        Ae(t, e, r), S(e, n, r), Ae(o, e, r), (s = !0);
      },
      p(e, [t]) {
        const n = {};
        1 & t && (n.$$scope = { dirty: t, ctx: e }), o.$set(n);
      },
      i(e) {
        s || (ge(t.$$.fragment, e), ge(o.$$.fragment, e), (s = !0));
      },
      o(e) {
        he(t.$$.fragment, e), he(o.$$.fragment, e), (s = !1);
      },
      d(e) {
        Ee(t, e), e && M(n), Ee(o, e);
      },
    }
  );
}
function co(t) {
  let n, o, s, r, i, a, l, c, d, u;
  return {
    c() {
      (n = E('header')),
        (o = E('h2')),
        (o.textContent = 'Modal title'),
        (s = _()),
        (r = E('button')),
        (i = E('img')),
        (l = _()),
        (c = E('div')),
        (c.innerHTML =
          '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!</p> \n  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!</p> \n  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur doloremque\n    vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui officiis\n    reprehenderit reiciendis excepturi culpa!</p>'),
        q(i, 'class', 'icon icon--sm'),
        i.src !== (a = St) &&
          q(
            i,
            'src',
            "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48' height='48' viewBox='0 0 48 48'%3e %3cg transform='translate(0%2c 0)'%3e %3cpolygon points='37.435 7.736 24 21.172 10.565 7.736 7.737 10.564 21.172 24 7.737 37.436 10.565 40.264 24 26.828 37.435 40.264 40.263 37.436 26.828 24 40.263 10.564 37.435 7.736' fill='currentColor' %3e%3c/polygon%3e %3c/g%3e%3c/svg%3e"
          ),
        q(i, 'alt', 'Close'),
        q(r, 'class', 'btn btn--subtle padding-xs js-tab-focus'),
        q(r, 'type', 'button'),
        q(n, 'class', 'flex items-center justify-between margin-bottom-sm'),
        q(c, 'class', 'text-component');
    },
    m(e, a) {
      S(e, n, a),
        k(n, o),
        k(n, s),
        k(n, r),
        k(r, i),
        S(e, l, a),
        S(e, c, a),
        d || ((u = j(r, 'click', t[0])), (d = !0));
    },
    p: e,
    i: e,
    o: e,
    d(e) {
      e && M(n), e && M(l), e && M(c), (d = !1), u();
    },
  };
}
function uo(e) {
  const { cancel: t } = De();
  return [t];
}
class mo extends Te {
  constructor(e) {
    super(), Le(this, e, uo, co, a, {});
  }
}
function po(t) {
  let n, o, s;
  return {
    c() {
      (n = E('button')),
        (n.textContent = 'Show vertically and horizontally centered modal'),
        q(n, 'class', 'btn btn--accent'),
        q(n, 'type', 'button');
    },
    m(e, r) {
      S(e, n, r), o || ((s = j(n, 'click', t[0])), (o = !0));
    },
    p: e,
    i: e,
    o: e,
    d(e) {
      e && M(n), (o = !1), s();
    },
  };
}
function fo(e) {
  return [
    () =>
      st.show(mo, null, {
        breakpoints: {
          '32rem': {
            maxWidth: 'var(--max-width-xxs)',
            margin: 'var(--component-padding)',
            borderRadius: 'var(--radius-md)',
            centered: !0,
          },
        },
      }),
  ];
}
class go extends Te {
  constructor(e) {
    super(), Le(this, e, fo, po, a, {});
  }
}
function ho(t) {
  let n, o, s;
  return {
    c() {
      (n = E('button')),
        (n.textContent = 'Show vertically centered modal'),
        q(n, 'class', 'btn btn--accent'),
        q(n, 'type', 'button');
    },
    m(e, r) {
      S(e, n, r), o || ((s = j(n, 'click', t[0])), (o = !0));
    },
    p: e,
    i: e,
    o: e,
    d(e) {
      e && M(n), (o = !1), s();
    },
  };
}
function $o(e) {
  return [
    () =>
      st.show(mo, null, {
        breakpoints: {
          '32rem': {
            maxWidth: 'var(--max-width-xxs)',
            margin: 'var(--component-padding) auto',
            borderRadius: 'var(--radius-md)',
          },
        },
      }),
  ];
}
class bo extends Te {
  constructor(e) {
    super(), Le(this, e, $o, ho, a, {});
  }
}
function xo(t) {
  let n, o;
  return (
    (n = new Zn({
      props: {
        'data-src':
          'demo/components/organisms/SectionCentered/VerticallyAndHorizontallyCenteredExample.svelte',
      },
    })),
    {
      c() {
        Me(n.$$.fragment);
      },
      m(e, t) {
        Ae(n, e, t), (o = !0);
      },
      p: e,
      i(e) {
        o || (ge(n.$$.fragment, e), (o = !0));
      },
      o(e) {
        he(n.$$.fragment, e), (o = !1);
      },
      d(e) {
        Ee(n, e);
      },
    }
  );
}
function vo(t) {
  let n, o;
  return (
    (n = new Zn({
      props: {
        'data-src': 'demo/components/organisms/SectionCentered/VerticallyCenteredExample.svelte',
      },
    })),
    {
      c() {
        Me(n.$$.fragment);
      },
      m(e, t) {
        Ae(n, e, t), (o = !0);
      },
      p: e,
      i(e) {
        o || (ge(n.$$.fragment, e), (o = !0));
      },
      o(e) {
        he(n.$$.fragment, e), (o = !1);
      },
      d(e) {
        Ee(n, e);
      },
    }
  );
}
function wo(e) {
  let t, n, o, s, r, i, a, l, c, d;
  return (
    (t = new go({})),
    (o = new io({
      props: {
        class: 'margin-top-sm',
        title: 'Show code',
        $$slots: { default: [xo] },
        $$scope: { ctx: e },
      },
    })),
    (a = new bo({})),
    (c = new io({
      props: {
        class: 'margin-top-sm',
        title: 'Show code',
        $$slots: { default: [vo] },
        $$scope: { ctx: e },
      },
    })),
    {
      c() {
        Me(t.$$.fragment),
          (n = _()),
          Me(o.$$.fragment),
          (s = _()),
          (r = E('div')),
          (i = _()),
          Me(a.$$.fragment),
          (l = _()),
          Me(c.$$.fragment),
          q(r, 'class', 'margin-top-sm');
      },
      m(e, u) {
        Ae(t, e, u),
          S(e, n, u),
          Ae(o, e, u),
          S(e, s, u),
          S(e, r, u),
          S(e, i, u),
          Ae(a, e, u),
          S(e, l, u),
          Ae(c, e, u),
          (d = !0);
      },
      p(e, [t]) {
        const n = {};
        1 & t && (n.$$scope = { dirty: t, ctx: e }), o.$set(n);
        const s = {};
        1 & t && (s.$$scope = { dirty: t, ctx: e }), c.$set(s);
      },
      i(e) {
        d ||
          (ge(t.$$.fragment, e),
          ge(o.$$.fragment, e),
          ge(a.$$.fragment, e),
          ge(c.$$.fragment, e),
          (d = !0));
      },
      o(e) {
        he(t.$$.fragment, e),
          he(o.$$.fragment, e),
          he(a.$$.fragment, e),
          he(c.$$.fragment, e),
          (d = !1);
      },
      d(e) {
        Ee(t, e),
          e && M(n),
          Ee(o, e),
          e && M(s),
          e && M(r),
          e && M(i),
          Ee(a, e),
          e && M(l),
          Ee(c, e);
      },
    }
  );
}
function yo(e, t, n) {
  const o = e.slice();
  return (o[2] = t[n]), (o[4] = n), o;
}
function Co(t) {
  let n,
    o,
    s,
    r = t[4] + 1 + '';
  return {
    c() {
      (n = E('p')),
        (o = T(r)),
        (s = T(
          '. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi iure tenetur\n      doloremque vitae cumque sint iusto, optio laborum ut dolore sequi blanditiis, accusamus qui\n      officiis reprehenderit reiciendis excepturi culpa!\n    '
        ));
    },
    m(e, t) {
      S(e, n, t), k(n, o), k(n, s);
    },
    p: e,
    d(e) {
      e && M(n);
    },
  };
}
function ko(t) {
  let n,
    o,
    s,
    i,
    a,
    l,
    c,
    d,
    u,
    m,
    p = Array(16),
    f = [];
  for (let e = 0; e < p.length; e += 1) f[e] = Co(yo(t, p, e));
  return {
    c() {
      (n = E('div')), (o = E('h2')), (o.textContent = 'Modal title'), (s = _());
      for (let e = 0; e < f.length; e += 1) f[e].c();
      (i = _()),
        (a = E('footer')),
        (l = E('button')),
        (l.textContent = 'Cancel'),
        (c = _()),
        (d = E('button')),
        (d.textContent = 'Confirm'),
        q(n, 'class', 'text-component'),
        q(l, 'type', 'button'),
        q(l, 'class', 'btn btn--subtle'),
        q(d, 'type', 'button'),
        q(d, 'class', 'btn btn--primary'),
        q(a, 'class', 'flex justify-end gap-xs margin-top-md');
    },
    m(e, r) {
      S(e, n, r), k(n, o), k(n, s);
      for (let e = 0; e < f.length; e += 1) f[e].m(n, null);
      S(e, i, r),
        S(e, a, r),
        k(a, l),
        k(a, c),
        k(a, d),
        u || ((m = [j(l, 'click', t[1]), j(d, 'click', t[0])]), (u = !0));
    },
    p: e,
    i: e,
    o: e,
    d(e) {
      e && M(n), A(f, e), e && M(i), e && M(a), (u = !1), r(m);
    },
  };
}
function So(e) {
  const { hide: t, cancel: n } = De();
  return [t, n];
}
class Mo extends Te {
  constructor(e) {
    super(), Le(this, e, So, ko, a, {});
  }
}
function Ao(t) {
  let n, o, s;
  return {
    c() {
      (n = E('button')),
        (n.textContent = 'Show long content modal'),
        q(n, 'class', 'btn btn--accent'),
        q(n, 'type', 'button');
    },
    m(e, r) {
      S(e, n, r), o || ((s = j(n, 'click', t[0])), (o = !0));
    },
    p: e,
    i: e,
    o: e,
    d(e) {
      e && M(n), (o = !1), s();
    },
  };
}
function Eo(e) {
  return [
    () => {
      st.show(Mo, null, {
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
class Lo extends Te {
  constructor(e) {
    super(), Le(this, e, Eo, Ao, a, {});
  }
}
function To(e, t, n) {
  const o = e.slice();
  return (o[3] = t[n]), (o[5] = n), o;
}
function _o(t) {
  let n,
    o,
    s,
    r = t[5] + 1 + '';
  return {
    c() {
      (n = E('p')),
        (o = T(r)),
        (s = T(
          '. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis consequuntur\n          odio natus veritatis, cupiditate iusto velit numquam at voluptates. Laudantium, deleniti\n          eos. Porro illo quo architecto magnam nobis laborum aliquid!\n        '
        ));
    },
    m(e, t) {
      S(e, n, t), k(n, o), k(n, s);
    },
    p: e,
    d(e) {
      e && M(n);
    },
  };
}
function Fo(t) {
  let n,
    o,
    s,
    r,
    i,
    a,
    l,
    c,
    d,
    u = Array(10),
    m = [];
  for (let e = 0; e < u.length; e += 1) m[e] = _o(To(t, u, e));
  return {
    c() {
      (n = E('div')),
        (o = E('header')),
        (o.innerHTML = '<h2 class="svelte-yt9149">Modal title</h2>'),
        (s = _()),
        (r = E('main'));
      for (let e = 0; e < m.length; e += 1) m[e].c();
      (i = _()),
        (a = E('footer')),
        (l = E('button')),
        (l.textContent = 'Close'),
        q(o, 'class', 'svelte-yt9149'),
        q(r, 'class', 'svelte-yt9149'),
        q(l, 'class', 'btn btn--subtle'),
        q(l, 'type', 'button'),
        q(a, 'class', 'svelte-yt9149'),
        q(n, 'class', 'flex flex-column height-100%');
    },
    m(e, u) {
      S(e, n, u), k(n, o), k(n, s), k(n, r);
      for (let e = 0; e < m.length; e += 1) m[e].m(r, null);
      k(n, i), k(n, a), k(a, l), c || ((d = j(l, 'click', t[2])), (c = !0));
    },
    p: e,
    d(e) {
      e && M(n), A(m, e), (c = !1), d();
    },
  };
}
function jo(e) {
  let t, o, s, r, i, a;
  const l = [e[0]];
  let c = { $$slots: { default: [Fo] }, $$scope: { ctx: e } };
  for (let e = 0; e < l.length; e += 1) c = n(c, l[e]);
  return (
    (s = new Ke({ props: c })),
    {
      c() {
        (t = E('button')),
          (t.textContent = 'Show long content modal with body scroll'),
          (o = _()),
          Me(s.$$.fragment),
          q(t, 'class', 'btn btn--accent'),
          q(t, 'type', 'button');
      },
      m(n, l) {
        S(n, t, l), S(n, o, l), Ae(s, n, l), (r = !0), i || ((a = j(t, 'click', e[1])), (i = !0));
      },
      p(e, [t]) {
        const n = 1 & t ? ke(l, [Se(e[0])]) : {};
        64 & t && (n.$$scope = { dirty: t, ctx: e }), s.$set(n);
      },
      i(e) {
        r || (ge(s.$$.fragment, e), (r = !0));
      },
      o(e) {
        he(s.$$.fragment, e), (r = !1);
      },
      d(e) {
        e && M(t), e && M(o), Ee(s, e), (i = !1), a();
      },
    }
  );
}
const qo = 'long-content-body-scroll';
function Ho(e) {
  return [
    {
      name: qo,
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
    () => st.show(qo),
    () => st.cancel(qo),
  ];
}
class Po extends Te {
  constructor(e) {
    super(), Le(this, e, Ho, jo, a, {});
  }
}
function No(t) {
  let n, o;
  return (
    (n = new Zn({
      props: {
        'data-src': 'demo/components/organisms/SectionLongContent/LongContentExample.svelte',
      },
    })),
    {
      c() {
        Me(n.$$.fragment);
      },
      m(e, t) {
        Ae(n, e, t), (o = !0);
      },
      p: e,
      i(e) {
        o || (ge(n.$$.fragment, e), (o = !0));
      },
      o(e) {
        he(n.$$.fragment, e), (o = !1);
      },
      d(e) {
        Ee(n, e);
      },
    }
  );
}
function Oo(t) {
  let n, o;
  return (
    (n = new Zn({
      props: {
        'data-src':
          'demo/components/organisms/SectionLongContent/LongContentBodyScrollExample.svelte',
      },
    })),
    {
      c() {
        Me(n.$$.fragment);
      },
      m(e, t) {
        Ae(n, e, t), (o = !0);
      },
      p: e,
      i(e) {
        o || (ge(n.$$.fragment, e), (o = !0));
      },
      o(e) {
        he(n.$$.fragment, e), (o = !1);
      },
      d(e) {
        Ee(n, e);
      },
    }
  );
}
function zo(e) {
  let t, n, o, s, r, i, a, l, c, d;
  return (
    (t = new Lo({})),
    (o = new io({
      props: {
        class: 'margin-top-sm',
        title: 'Show code',
        $$slots: { default: [No] },
        $$scope: { ctx: e },
      },
    })),
    (a = new Po({})),
    (c = new io({
      props: {
        class: 'margin-top-sm',
        title: 'Show code',
        $$slots: { default: [Oo] },
        $$scope: { ctx: e },
      },
    })),
    {
      c() {
        Me(t.$$.fragment),
          (n = _()),
          Me(o.$$.fragment),
          (s = _()),
          (r = E('div')),
          (i = _()),
          Me(a.$$.fragment),
          (l = _()),
          Me(c.$$.fragment),
          q(r, 'class', 'margin-top-sm');
      },
      m(e, u) {
        Ae(t, e, u),
          S(e, n, u),
          Ae(o, e, u),
          S(e, s, u),
          S(e, r, u),
          S(e, i, u),
          Ae(a, e, u),
          S(e, l, u),
          Ae(c, e, u),
          (d = !0);
      },
      p(e, [t]) {
        const n = {};
        1 & t && (n.$$scope = { dirty: t, ctx: e }), o.$set(n);
        const s = {};
        1 & t && (s.$$scope = { dirty: t, ctx: e }), c.$set(s);
      },
      i(e) {
        d ||
          (ge(t.$$.fragment, e),
          ge(o.$$.fragment, e),
          ge(a.$$.fragment, e),
          ge(c.$$.fragment, e),
          (d = !0));
      },
      o(e) {
        he(t.$$.fragment, e),
          he(o.$$.fragment, e),
          he(a.$$.fragment, e),
          he(c.$$.fragment, e),
          (d = !1);
      },
      d(e) {
        Ee(t, e),
          e && M(n),
          Ee(o, e),
          e && M(s),
          e && M(r),
          e && M(i),
          Ee(a, e),
          e && M(l),
          Ee(c, e);
      },
    }
  );
}
function Do(e) {
  let t, n;
  const o = e[2].default,
    s = d(o, e, e[1], null);
  return {
    c() {
      (t = E('ul')), s && s.c(), q(t, 'class', 'list'), N(t, 'list--ul', 'ul' === e[0]);
    },
    m(e, o) {
      S(e, t, o), s && s.m(t, null), (n = !0);
    },
    p(e, [n]) {
      s && s.p && 2 & n && m(s, o, e, e[1], n, null, null),
        1 & n && N(t, 'list--ul', 'ul' === e[0]);
    },
    i(e) {
      n || (ge(s, e), (n = !0));
    },
    o(e) {
      he(s, e), (n = !1);
    },
    d(e) {
      e && M(t), s && s.d(e);
    },
  };
}
function Ro(e, t, n) {
  let { $$slots: o = {}, $$scope: s } = t,
    { variant: r = 'ul' } = t;
  return (
    (e.$$set = (e) => {
      'variant' in e && n(0, (r = e.variant)), '$$scope' in e && n(1, (s = e.$$scope));
    }),
    [r, s, o]
  );
}
class Wo extends Te {
  constructor(e) {
    super(), Le(this, e, Ro, Do, a, { variant: 0 });
  }
}
function Bo(e) {
  let t, n, o;
  return {
    c() {
      (t = E('li')),
        (t.innerHTML =
          '<code>opened</code> \n    <div>Fired when DOM elements are created and the modal is visible.</div>'),
        (n = _()),
        (o = E('li')),
        (o.innerHTML =
          '<code>closed</code> \n    <div>Fired when DOM elements are removed and the modal is not anymore visible.</div>');
    },
    m(e, s) {
      S(e, t, s), S(e, n, s), S(e, o, s);
    },
    d(e) {
      e && M(t), e && M(n), e && M(o);
    },
  };
}
function Io(e) {
  let t, n;
  return (
    (t = new Wo({ props: { $$slots: { default: [Bo] }, $$scope: { ctx: e } } })),
    {
      c() {
        Me(t.$$.fragment);
      },
      m(e, o) {
        Ae(t, e, o), (n = !0);
      },
      p(e, [n]) {
        const o = {};
        1 & n && (o.$$scope = { dirty: n, ctx: e }), t.$set(o);
      },
      i(e) {
        n || (ge(t.$$.fragment, e), (n = !0));
      },
      o(e) {
        he(t.$$.fragment, e), (n = !1);
      },
      d(e) {
        Ee(t, e);
      },
    }
  );
}
function Uo(t) {
  let n,
    o,
    s,
    r,
    i,
    a,
    l,
    c,
    d,
    u,
    m,
    p,
    f,
    g,
    h,
    $,
    b,
    x,
    v,
    w,
    y,
    C,
    A,
    L,
    F,
    j,
    H,
    P,
    N,
    O,
    z,
    D,
    R,
    W,
    B,
    I,
    U,
    Y,
    V,
    K,
    X,
    G,
    Z,
    J,
    Q,
    ee,
    te,
    ne,
    oe,
    se,
    re,
    ie,
    ae,
    le,
    ce,
    de,
    ue,
    me,
    pe,
    fe,
    $e,
    be,
    xe,
    ve,
    we,
    ye,
    Ce,
    ke,
    Se,
    Le,
    Te,
    _e,
    Fe,
    je,
    qe,
    He,
    Pe,
    Ne,
    Oe,
    ze,
    De,
    Re,
    We,
    Be,
    Ie,
    Ue,
    Ye,
    Ve,
    Ke,
    Xe,
    Ge,
    Ze,
    Je,
    Qe,
    et,
    tt,
    nt,
    ot,
    st,
    rt,
    it,
    at,
    lt,
    ct,
    dt,
    ut,
    mt,
    pt,
    ft,
    gt,
    ht,
    $t,
    bt,
    xt,
    vt,
    wt,
    yt,
    Ct,
    kt,
    St,
    Mt,
    At,
    Et,
    Lt,
    Tt,
    _t,
    Ft,
    jt,
    qt,
    Ht,
    Pt,
    Nt,
    Ot;
  return (
    (Se = new Zn({
      props: {
        language: 'markup',
        unescaped: !0,
        code:
          "\n<script>\n  import smodale, { Modal } from 'smodale';\n\n  const modalProps = {\n    name: 'modal-name',\n    breakpoints: {\n      // @media (min-width: 768px)\n      '768px': {\n        maxWidth: '450px',\n        centered: true,\n        borderRadius: 'var(--radius-md)',\n      },\n      // @media (min-width: 64rem)\n      '64rem': {\n        maxWidth: '650px',\n      },\n    },\n  };\n\n  smodale.show('modal-name');\n</script>\n\n<Modal {...modalProps}>...</Modal>\n    ",
      },
    })),
    {
      c() {
        (n = E('li')),
          (o = E('strong')),
          (o.textContent = 'Generic properties'),
          (s = _()),
          (r = E('ul')),
          (i = E('li')),
          (a = E('code')),
          (a.textContent = '{ string } name'),
          (l = _()),
          (c = E('div')),
          (c.innerHTML =
            'An <u>unique</u> and <u>required</u> property when defining a <u>static modal</u>.'),
          (d = _()),
          (u = E('li')),
          (m = E('code')),
          (m.textContent = '{ function } transition'),
          (p = _()),
          (f = E('div')),
          (f.innerHTML =
            'A Svelte\n          <a href="https://svelte.dev/docs#transition_fn" target="_blank" rel="noopener noreferrer">transition</a>\n          function applied on <code>.modal</code> element. Default <code>null</code>.'),
          (g = _()),
          (h = E('li')),
          ($ = E('code')),
          ($.textContent = '{ boolean } escapeToClose'),
          (b = _()),
          (x = E('div')),
          (x.innerHTML =
            'Whether or not close the modal on escape key (ESC) press. Default <code>true</code>.'),
          (v = _()),
          (w = E('li')),
          (y = E('code')),
          (y.textContent = '{ boolean } clickOutsideToClose'),
          (C = _()),
          (A = E('div')),
          (A.innerHTML =
            'Whether or not close the modal on backdrop click. Default <code>true</code>.'),
          (L = _()),
          (F = E('li')),
          (j = E('code')),
          (j.textContent = '{ boolean } disableBodyScroll'),
          (H = _()),
          (P = E('div')),
          (P.innerHTML =
            'Whether or not to prevent body element scroll while the modal is open. Default\n          <code>true</code>.'),
          (N = _()),
          (O = E('li')),
          (z = E('code')),
          (z.textContent = '{ boolean } focusOnOpen'),
          (D = _()),
          (R = E('div')),
          (R.innerHTML =
            'Whether or not move focus automatically to the first focusable element inside the modal\n          when the modal is open. Default <code>true</code>.'),
          (W = _()),
          (B = E('li')),
          (I = E('code')),
          (I.textContent = '{ boolean } focusTrap'),
          (U = _()),
          (Y = E('div')),
          (Y.innerHTML =
            'Whether or not focus only the elements that are inside the modal on TAB key press. Default\n          <code>true</code>.'),
          (V = _()),
          (K = E('li')),
          (X = E('code')),
          (X.textContent = '{ string } classes'),
          (G = _()),
          (Z = E('div')),
          (Z.innerHTML =
            'Append custom classes on <code>.modal</code> element. Default <code>&#39;&#39;</code>.'),
          (J = _()),
          (Q = E('li')),
          (ee = E('code')),
          (ee.textContent = '{ object } transitionParams'),
          (te = _()),
          (ne = E('div')),
          (oe = T('A Svelte\n          ')),
          (se = E('a')),
          (se.textContent = 'transition parameters'),
          (re = T('\n          object used on transition property. Default ')),
          (ie = E('code')),
          (ie.textContent = '{}'),
          (ae = T('.')),
          (le = _()),
          (ce = E('li')),
          (de = E('code')),
          (de.textContent = '{ object } breakpoints'),
          (ue = _()),
          (me = E('p')),
          (pe = T(
            'Allows to customize the modal with specific properties for different breakpoints. Default\n          '
          )),
          (fe = E('code')),
          (fe.textContent = '{}'),
          ($e = T('.')),
          (be = _()),
          (xe = E('p')),
          (xe.innerHTML =
            'Breakpoint keys can be defined with <code>px</code>, <code>rem</code> and <code>em</code> units\n          and behaves in a cascade way like CSS rules.'),
          (ve = _()),
          (we = E('blockquote')),
          (we.innerHTML = '⚠️ Allowed properties are only the <u>style properties</u>.'),
          (ye = _()),
          (Ce = E('strong')),
          (Ce.innerHTML = '<small>Example:</small>'),
          (ke = _()),
          Me(Se.$$.fragment),
          (Le = _()),
          (Te = E('li')),
          (_e = E('strong')),
          (_e.textContent = 'Style properties'),
          (Fe = _()),
          (je = E('p')),
          (je.innerHTML =
            'Properties that can be also used in the generic <code>breakpoints</code> property.'),
          (qe = _()),
          (He = E('p')),
          (He.innerHTML =
            'When properties are <code>string</code> type,\n      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" target="_blank" rel="noopener noreferrer">CSS custom properties</a> can be used.'),
          (Pe = _()),
          (Ne = E('ul')),
          (Oe = E('li')),
          (ze = E('code')),
          (ze.textContent = '{ string } maxWidth'),
          (De = _()),
          (Re = E('div')),
          (Re.textContent = 'Set max width.'),
          (We = _()),
          (Be = E('li')),
          (Ie = E('code')),
          (Ie.textContent = '{ string } margin'),
          (Ue = _()),
          (Ye = E('div')),
          (Ye.textContent = 'Set margin.'),
          (Ve = _()),
          (Ke = E('li')),
          (Xe = E('code')),
          (Xe.textContent = '{ string } height'),
          (Ge = _()),
          (Ze = E('div')),
          (Ze.textContent = 'Set height.'),
          (Je = _()),
          (Qe = E('li')),
          (et = E('code')),
          (et.textContent = '{ string } backgroundColor'),
          (tt = _()),
          (nt = E('div')),
          (nt.innerHTML = 'Set background color. Default <code>#fff</code>.'),
          (ot = _()),
          (st = E('li')),
          (rt = E('code')),
          (rt.textContent = '{ string } padding'),
          (it = _()),
          (at = E('div')),
          (at.innerHTML = 'Set padding. Default <code>20px</code>.'),
          (lt = _()),
          (ct = E('li')),
          (dt = E('code')),
          (dt.textContent = '{ string } borderRadius'),
          (ut = _()),
          (mt = E('div')),
          (mt.textContent = 'Set border radius.'),
          (pt = _()),
          (ft = E('li')),
          (gt = E('code')),
          (gt.textContent = '{ string } backdropColor'),
          (ht = _()),
          ($t = E('div')),
          ($t.innerHTML = 'Set backdrop color. Default <code>rgba(0, 0, 0, 0.6)</code>.'),
          (bt = _()),
          (xt = E('li')),
          (vt = E('code')),
          (vt.textContent = '{ string } boxShadow'),
          (wt = _()),
          (yt = E('div')),
          (yt.textContent = 'Set box shadow.'),
          (Ct = _()),
          (kt = E('li')),
          (St = E('code')),
          (St.textContent = '{ boolean } centered'),
          (Mt = _()),
          (At = E('div')),
          (At.textContent = 'Whether or not vertically and horizontally centered.'),
          (Et = _()),
          (Lt = E('li')),
          (Tt = E('code')),
          (Tt.textContent = '{ boolean } scrollable'),
          (_t = _()),
          (Ft = E('div')),
          (Ft.textContent = 'Whether or not scrollable content.'),
          (jt = _()),
          (qt = E('li')),
          (Ht = E('code')),
          (Ht.textContent = '{ string } zIndex'),
          (Pt = _()),
          (Nt = E('div')),
          (Nt.innerHTML = 'Set modal <code>z-index</code>. Default <code>50</code>.'),
          q(se, 'href', 'https://svelte.dev/docs#Transition_parameters'),
          q(se, 'target', '_blank'),
          q(se, 'rel', 'noopener noreferrer');
      },
      m(e, t) {
        S(e, n, t),
          k(n, o),
          k(n, s),
          k(n, r),
          k(r, i),
          k(i, a),
          k(i, l),
          k(i, c),
          k(r, d),
          k(r, u),
          k(u, m),
          k(u, p),
          k(u, f),
          k(r, g),
          k(r, h),
          k(h, $),
          k(h, b),
          k(h, x),
          k(r, v),
          k(r, w),
          k(w, y),
          k(w, C),
          k(w, A),
          k(r, L),
          k(r, F),
          k(F, j),
          k(F, H),
          k(F, P),
          k(r, N),
          k(r, O),
          k(O, z),
          k(O, D),
          k(O, R),
          k(r, W),
          k(r, B),
          k(B, I),
          k(B, U),
          k(B, Y),
          k(r, V),
          k(r, K),
          k(K, X),
          k(K, G),
          k(K, Z),
          k(r, J),
          k(r, Q),
          k(Q, ee),
          k(Q, te),
          k(Q, ne),
          k(ne, oe),
          k(ne, se),
          k(ne, re),
          k(ne, ie),
          k(ne, ae),
          k(r, le),
          k(r, ce),
          k(ce, de),
          k(ce, ue),
          k(ce, me),
          k(me, pe),
          k(me, fe),
          k(me, $e),
          k(ce, be),
          k(ce, xe),
          k(ce, ve),
          k(ce, we),
          k(ce, ye),
          k(ce, Ce),
          k(ce, ke),
          Ae(Se, ce, null),
          S(e, Le, t),
          S(e, Te, t),
          k(Te, _e),
          k(Te, Fe),
          k(Te, je),
          k(Te, qe),
          k(Te, He),
          k(Te, Pe),
          k(Te, Ne),
          k(Ne, Oe),
          k(Oe, ze),
          k(Oe, De),
          k(Oe, Re),
          k(Ne, We),
          k(Ne, Be),
          k(Be, Ie),
          k(Be, Ue),
          k(Be, Ye),
          k(Ne, Ve),
          k(Ne, Ke),
          k(Ke, Xe),
          k(Ke, Ge),
          k(Ke, Ze),
          k(Ne, Je),
          k(Ne, Qe),
          k(Qe, et),
          k(Qe, tt),
          k(Qe, nt),
          k(Ne, ot),
          k(Ne, st),
          k(st, rt),
          k(st, it),
          k(st, at),
          k(Ne, lt),
          k(Ne, ct),
          k(ct, dt),
          k(ct, ut),
          k(ct, mt),
          k(Ne, pt),
          k(Ne, ft),
          k(ft, gt),
          k(ft, ht),
          k(ft, $t),
          k(Ne, bt),
          k(Ne, xt),
          k(xt, vt),
          k(xt, wt),
          k(xt, yt),
          k(Ne, Ct),
          k(Ne, kt),
          k(kt, St),
          k(kt, Mt),
          k(kt, At),
          k(Ne, Et),
          k(Ne, Lt),
          k(Lt, Tt),
          k(Lt, _t),
          k(Lt, Ft),
          k(Ne, jt),
          k(Ne, qt),
          k(qt, Ht),
          k(qt, Pt),
          k(qt, Nt),
          (Ot = !0);
      },
      p: e,
      i(e) {
        Ot || (ge(Se.$$.fragment, e), (Ot = !0));
      },
      o(e) {
        he(Se.$$.fragment, e), (Ot = !1);
      },
      d(e) {
        e && M(n), Ee(Se), e && M(Le), e && M(Te);
      },
    }
  );
}
function Yo(e) {
  let t, n, o, s;
  return (
    (o = new Wo({ props: { $$slots: { default: [Uo] }, $$scope: { ctx: e } } })),
    {
      c() {
        (t = E('p')),
          (t.innerHTML =
            'There are 2 types of properties: <u>generic</u> ones which will handle some base functionalities\n  and\n  <u>style</u> ones which will customize the modal.'),
          (n = _()),
          Me(o.$$.fragment);
      },
      m(e, r) {
        S(e, t, r), S(e, n, r), Ae(o, e, r), (s = !0);
      },
      p(e, [t]) {
        const n = {};
        1 & t && (n.$$scope = { dirty: t, ctx: e }), o.$set(n);
      },
      i(e) {
        s || (ge(o.$$.fragment, e), (s = !0));
      },
      o(e) {
        he(o.$$.fragment, e), (s = !1);
      },
      d(e) {
        e && M(t), e && M(n), Ee(o, e);
      },
    }
  );
}
function Vo(t) {
  let n, o, s, r, i, a, l, c, d, u, m, p, f, g, h, $, b, x, v, w, y, C, A, L, T;
  return (
    (L = new Zn({
      props: {
        filename: 'App.svelte',
        language: 'markup',
        unescaped: !0,
        code:
          "\n<script>\n  import smodale, { Modal } from 'smodale';\n  import MyCustomModalContent from 'MyCustomModalContent.svelte';\n\n  const componentProps = { text: 'Lorem ipsum' };\n  const modalProps = {\n    breakpoints: {\n      '768px': {\n        maxWidth: '450px',\n      },\n    },\n  };\n\n  smodale.show('modal-name');\n  smodale.show(MyCustomModalContent, componentProps, modalProps);\n</script>\n\n<Modal name=\"modal-name\" {...modalProps}>\n  <h1>Modal title</h1>\n  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>\n</Modal>\n",
      },
    })),
    {
      c() {
        (n = E('li')),
          (o = E('strong')),
          (o.innerHTML = '<small>Arguments:</small>'),
          (s = _()),
          (r = E('ul')),
          (i = E('li')),
          (a = E('code')),
          (a.textContent = '{ string | SvelteComponent } name (required)'),
          (l = _()),
          (c = E('li')),
          (d = E('code')),
          (d.textContent = '{ object } componentProps (optional)'),
          (u = _()),
          (m = E('li')),
          (p = E('code')),
          (p.textContent = '{ object } modalProps (optional)'),
          (f = _()),
          (g = E('li')),
          (h = E('code')),
          (h.textContent = '{ object } modalEvents (optional)'),
          ($ = _()),
          (b = E('p')),
          (b.innerHTML =
            'Optional arguments are consumed when <code>name</code> it&#39;s a\n        <code>SvelteComponent</code> object.'),
          (x = _()),
          (v = E('li')),
          (v.innerHTML =
            '<strong><small>Returns:</small></strong> \n    <ul><li>A<code>Promise</code> object.</li></ul>'),
          (w = _()),
          (y = E('li')),
          (C = E('strong')),
          (C.innerHTML = '<small>Example:</small>'),
          (A = _()),
          Me(L.$$.fragment);
      },
      m(e, t) {
        S(e, n, t),
          k(n, o),
          k(n, s),
          k(n, r),
          k(r, i),
          k(i, a),
          k(r, l),
          k(r, c),
          k(c, d),
          k(r, u),
          k(r, m),
          k(m, p),
          k(r, f),
          k(r, g),
          k(g, h),
          k(r, $),
          k(r, b),
          S(e, x, t),
          S(e, v, t),
          S(e, w, t),
          S(e, y, t),
          k(y, C),
          k(y, A),
          Ae(L, y, null),
          (T = !0);
      },
      p: e,
      i(e) {
        T || (ge(L.$$.fragment, e), (T = !0));
      },
      o(e) {
        he(L.$$.fragment, e), (T = !1);
      },
      d(e) {
        e && M(n), e && M(x), e && M(v), e && M(w), e && M(y), Ee(L);
      },
    }
  );
}
function Ko(t) {
  let n, o, s, r, i, a, l, c, d, u, m, p, f, g, h, $;
  return (
    (h = new Zn({
      props: {
        filename: 'App.svelte',
        language: 'markup',
        unescaped: !0,
        code:
          "\n<script>\n  import smodale, { Modal } from 'smodale';\n\n  smodale\n    .show('modal-name')\n    .then(data => {\n      console.log(data); // { foo: 'bar' }\n    });\n\n  const onOkClick = () => smodale.hide('modal-name', { foo: 'bar' });\n</script>\n\n<Modal name=\"modal-name\">\n  <h1>Modal title</h1>\n  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>\n  <button on:click={onOkClick}>Ok</button>\n</Modal>\n",
      },
    })),
    {
      c() {
        (n = E('li')),
          (o = E('strong')),
          (o.innerHTML = '<small>Arguments:</small>'),
          (s = _()),
          (r = E('ul')),
          (i = E('li')),
          (a = E('code')),
          (a.textContent = '{ string } name (required)'),
          (l = _()),
          (c = E('li')),
          (d = E('code')),
          (d.textContent = '{ any } data (optional)'),
          (u = T(' — Argument for the resolved promise')),
          (m = _()),
          (p = E('li')),
          (f = E('strong')),
          (f.innerHTML = '<small>Example:</small>'),
          (g = _()),
          Me(h.$$.fragment);
      },
      m(e, t) {
        S(e, n, t),
          k(n, o),
          k(n, s),
          k(n, r),
          k(r, i),
          k(i, a),
          k(r, l),
          k(r, c),
          k(c, d),
          k(c, u),
          S(e, m, t),
          S(e, p, t),
          k(p, f),
          k(p, g),
          Ae(h, p, null),
          ($ = !0);
      },
      p: e,
      i(e) {
        $ || (ge(h.$$.fragment, e), ($ = !0));
      },
      o(e) {
        he(h.$$.fragment, e), ($ = !1);
      },
      d(e) {
        e && M(n), e && M(m), e && M(p), Ee(h);
      },
    }
  );
}
function Xo(t) {
  let n, o, s, r, i, a, l, c, d, u, m, p, f, g, h, $;
  return (
    (h = new Zn({
      props: {
        filename: 'App.svelte',
        language: 'markup',
        unescaped: !0,
        code:
          "\n<script>\n  import smodale, { Modal } from 'smodale';\n\n  smodale\n    .show('modal-name')\n    .then(data => {\n      console.log(data); // { foo: 'bar' }\n    });\n\n  const onCancelClick = () => smodale.cancel('modal-name', { foo: 'bar' });\n</script>\n\n<Modal name=\"modal-name\">\n  <h1>Modal title</h1>\n  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>\n  <button on:click={onCancelClick}>Cancel</button>\n</Modal>\n",
      },
    })),
    {
      c() {
        (n = E('li')),
          (o = E('strong')),
          (o.innerHTML = '<small>Arguments:</small>'),
          (s = _()),
          (r = E('ul')),
          (i = E('li')),
          (a = E('code')),
          (a.textContent = '{ string } name (required)'),
          (l = _()),
          (c = E('li')),
          (d = E('code')),
          (d.textContent = '{ any } data (optional)'),
          (u = T(' — Argument for the rejected promise')),
          (m = _()),
          (p = E('li')),
          (f = E('strong')),
          (f.innerHTML = '<small>Example:</small>'),
          (g = _()),
          Me(h.$$.fragment);
      },
      m(e, t) {
        S(e, n, t),
          k(n, o),
          k(n, s),
          k(n, r),
          k(r, i),
          k(i, a),
          k(r, l),
          k(r, c),
          k(c, d),
          k(c, u),
          S(e, m, t),
          S(e, p, t),
          k(p, f),
          k(p, g),
          Ae(h, p, null),
          ($ = !0);
      },
      p: e,
      i(e) {
        $ || (ge(h.$$.fragment, e), ($ = !0));
      },
      o(e) {
        he(h.$$.fragment, e), ($ = !1);
      },
      d(e) {
        e && M(n), e && M(m), e && M(p), Ee(h);
      },
    }
  );
}
function Go(t) {
  let n, o, s, r, i, a, l, c, d;
  return (
    (a = new Zn({
      props: {
        filename: 'MyCustomModalContent.svelte',
        language: 'markup',
        unescaped: !0,
        code:
          "\n<script>\n  import { getModalContext } from 'smodale';\n  \n  const { hide, cancel, component } = getModalContext();\n\n  console.log(component);\n\n  const onCancelClick = () => cancel('cancelled');\n  const onOkClick = () => hide({ foo: 'bar' });\n\n  <button on:click={onCancelClick}>Cancel</button>\n  <button on:click={onOkClick}>Ok</button>\n</script>\n",
      },
    })),
    (c = new Zn({
      props: {
        filename: 'App.svelte',
        language: 'markup',
        unescaped: !0,
        code:
          "\n<script>\n  import smodale, { Modal } from 'smodale';\n  import MyCustomModalContent from 'MyCustomModalContent.svelte';\n\n  smodale.show('modal-name');\n  smodale.show(MyCustomModalContent);\n</script>\n\n<Modal name=\"modal-name\">\n  <MyCustomModalContent />\n</Modal>\n",
      },
    })),
    {
      c() {
        (n = E('li')),
          (n.innerHTML =
            '<strong><small>Returns:</small></strong> \n    <ul><li>An <code>Object</code> with the following properties.\n        <ul><li><code>hide(data: any)</code> — Hide modal and resolve the promise</li> \n          <li><code>close(data: any)</code> — Hide modal and reject the promise</li> \n          <li><code>component</code> — <code>Modal</code> component instance</li></ul></li></ul>'),
          (o = _()),
          (s = E('li')),
          (r = E('strong')),
          (r.innerHTML = '<small>Example:</small>'),
          (i = _()),
          Me(a.$$.fragment),
          (l = _()),
          Me(c.$$.fragment);
      },
      m(e, t) {
        S(e, n, t),
          S(e, o, t),
          S(e, s, t),
          k(s, r),
          k(s, i),
          Ae(a, s, null),
          k(s, l),
          Ae(c, s, null),
          (d = !0);
      },
      p: e,
      i(e) {
        d || (ge(a.$$.fragment, e), ge(c.$$.fragment, e), (d = !0));
      },
      o(e) {
        he(a.$$.fragment, e), he(c.$$.fragment, e), (d = !1);
      },
      d(e) {
        e && M(n), e && M(o), e && M(s), Ee(a), Ee(c);
      },
    }
  );
}
function Zo(t) {
  let n, o, s, r, i, a, l, c, d, u, m;
  return (
    (u = new Zn({
      props: {
        filename: 'App.svelte',
        language: 'markup',
        unescaped: !0,
        code:
          "\n<script>\n  import smodale, { ModalDismissReasons } from 'smodale';\n  import MyCustomModalContent from 'MyCustomModalContent.svelte';\n\n  smodale.show(MyCustomModalContent)\n    .then(() => {})\n    .catch(reason => {\n      if (\n        reason === ModalDismissReasons.BACKDROP_CLICK ||\n        reason === ModalDismissReasons.ESC\n      ) {\n        // do something\n      }\n    });\n</script>\n",
      },
    })),
    {
      c() {
        (n = E('li')),
          (n.innerHTML =
            '<strong><small>Type:</small></strong>  <code>Object</code> \n    <ul><li><code>BACKDROP_CLICK</code></li> \n      <li><code>ESC</code></li></ul>'),
          (o = _()),
          (s = E('li')),
          (s.innerHTML = '<strong><small>Read only</small></strong>'),
          (r = _()),
          (i = E('li')),
          (i.innerHTML =
            '<strong><small>Details:</small></strong> \n    <p>When props <code>escapeToClose</code> or <code>clickOutsideToClose</code> are set to\n      <code>true</code>the modal will be closed with the <code>cancel()</code> method with a dismiss\n      string argument.</p>'),
          (a = _()),
          (l = E('li')),
          (c = E('strong')),
          (c.innerHTML = '<small>Example:</small>'),
          (d = _()),
          Me(u.$$.fragment);
      },
      m(e, t) {
        S(e, n, t),
          S(e, o, t),
          S(e, s, t),
          S(e, r, t),
          S(e, i, t),
          S(e, a, t),
          S(e, l, t),
          k(l, c),
          k(l, d),
          Ae(u, l, null),
          (m = !0);
      },
      p: e,
      i(e) {
        m || (ge(u.$$.fragment, e), (m = !0));
      },
      o(e) {
        he(u.$$.fragment, e), (m = !1);
      },
      d(e) {
        e && M(n), e && M(o), e && M(s), e && M(r), e && M(i), e && M(a), e && M(l), Ee(u);
      },
    }
  );
}
function Jo(e) {
  let t,
    n,
    o,
    s,
    r,
    i,
    a,
    l,
    c,
    d,
    u,
    m,
    p,
    f,
    g,
    h,
    $,
    b,
    x,
    v,
    w,
    y,
    C,
    k,
    A,
    L,
    T,
    F,
    j,
    q,
    H,
    P,
    N,
    O,
    z,
    D,
    R,
    W,
    B,
    I;
  return (
    (a = new Wo({ props: { $$slots: { default: [Vo] }, $$scope: { ctx: e } } })),
    (g = new Wo({ props: { $$slots: { default: [Ko] }, $$scope: { ctx: e } } })),
    (C = new Wo({ props: { $$slots: { default: [Xo] }, $$scope: { ctx: e } } })),
    (H = new Wo({ props: { $$slots: { default: [Go] }, $$scope: { ctx: e } } })),
    (B = new Wo({ props: { $$slots: { default: [Zo] }, $$scope: { ctx: e } } })),
    {
      c() {
        (t = E('h4')),
          (t.innerHTML = '<code>show()</code>'),
          (n = _()),
          (o = E('hr')),
          (s = _()),
          (r = E('p')),
          (r.textContent = 'Display a static or dynamic modal.'),
          (i = _()),
          Me(a.$$.fragment),
          (l = _()),
          (c = E('h4')),
          (c.innerHTML = '<code>hide()</code>'),
          (d = _()),
          (u = E('hr')),
          (m = _()),
          (p = E('p')),
          (p.innerHTML =
            'Hide an existing modal and <u>resolve</u> the promise returned from <code>show()</code>'),
          (f = _()),
          Me(g.$$.fragment),
          (h = _()),
          ($ = E('h4')),
          ($.innerHTML = '<code>cancel()</code>'),
          (b = _()),
          (x = E('hr')),
          (v = _()),
          (w = E('p')),
          (w.innerHTML =
            'Hide an existing modal and <u>reject</u> the promise returned from <code>show()</code>'),
          (y = _()),
          Me(C.$$.fragment),
          (k = _()),
          (A = E('h4')),
          (A.innerHTML = '<code>getModalContext()</code>'),
          (L = _()),
          (T = E('hr')),
          (F = _()),
          (j = E('p')),
          (j.innerHTML =
            'Usable in children components of <code>Modal</code> component or in custom components for dynamic modals.'),
          (q = _()),
          Me(H.$$.fragment),
          (P = _()),
          (N = E('h4')),
          (N.innerHTML = '<code>ModalDismissReasons</code>'),
          (O = _()),
          (z = E('hr')),
          (D = _()),
          (R = E('p')),
          (R.textContent = "Constants for checking what's the modal close reason."),
          (W = _()),
          Me(B.$$.fragment);
      },
      m(e, M) {
        S(e, t, M),
          S(e, n, M),
          S(e, o, M),
          S(e, s, M),
          S(e, r, M),
          S(e, i, M),
          Ae(a, e, M),
          S(e, l, M),
          S(e, c, M),
          S(e, d, M),
          S(e, u, M),
          S(e, m, M),
          S(e, p, M),
          S(e, f, M),
          Ae(g, e, M),
          S(e, h, M),
          S(e, $, M),
          S(e, b, M),
          S(e, x, M),
          S(e, v, M),
          S(e, w, M),
          S(e, y, M),
          Ae(C, e, M),
          S(e, k, M),
          S(e, A, M),
          S(e, L, M),
          S(e, T, M),
          S(e, F, M),
          S(e, j, M),
          S(e, q, M),
          Ae(H, e, M),
          S(e, P, M),
          S(e, N, M),
          S(e, O, M),
          S(e, z, M),
          S(e, D, M),
          S(e, R, M),
          S(e, W, M),
          Ae(B, e, M),
          (I = !0);
      },
      p(e, [t]) {
        const n = {};
        1 & t && (n.$$scope = { dirty: t, ctx: e }), a.$set(n);
        const o = {};
        1 & t && (o.$$scope = { dirty: t, ctx: e }), g.$set(o);
        const s = {};
        1 & t && (s.$$scope = { dirty: t, ctx: e }), C.$set(s);
        const r = {};
        1 & t && (r.$$scope = { dirty: t, ctx: e }), H.$set(r);
        const i = {};
        1 & t && (i.$$scope = { dirty: t, ctx: e }), B.$set(i);
      },
      i(e) {
        I ||
          (ge(a.$$.fragment, e),
          ge(g.$$.fragment, e),
          ge(C.$$.fragment, e),
          ge(H.$$.fragment, e),
          ge(B.$$.fragment, e),
          (I = !0));
      },
      o(e) {
        he(a.$$.fragment, e),
          he(g.$$.fragment, e),
          he(C.$$.fragment, e),
          he(H.$$.fragment, e),
          he(B.$$.fragment, e),
          (I = !1);
      },
      d(e) {
        e && M(t),
          e && M(n),
          e && M(o),
          e && M(s),
          e && M(r),
          e && M(i),
          Ee(a, e),
          e && M(l),
          e && M(c),
          e && M(d),
          e && M(u),
          e && M(m),
          e && M(p),
          e && M(f),
          Ee(g, e),
          e && M(h),
          e && M($),
          e && M(b),
          e && M(x),
          e && M(v),
          e && M(w),
          e && M(y),
          Ee(C, e),
          e && M(k),
          e && M(A),
          e && M(L),
          e && M(T),
          e && M(F),
          e && M(j),
          e && M(q),
          Ee(H, e),
          e && M(P),
          e && M(N),
          e && M(O),
          e && M(z),
          e && M(D),
          e && M(R),
          e && M(W),
          Ee(B, e);
      },
    }
  );
}
function Qo(t) {
  let n, o, s, r, i, a, l, c, d, u, m, p, f, g, h, $, b, x, v, w, y, C;
  return (
    (n = new Zn({ props: { language: 'bash', code: 'npm i -S smodale' } })),
    (m = new Zn({
      props: {
        filename: 'App.svelte',
        language: 'markup',
        unescaped: !0,
        code:
          "\n<script>\n  import smodale, { Modal } from 'smodale';\n\n  smodale.show('modal-name')\n    .then(data => {\n      console.log(data); // { foo: 'bar' }\n    })\n    .catch(data => {\n      console.log(data); // 'cancelled'\n    });\n\n  const onCancelClick = () => smodale.cancel('modal-name', 'cancelled');\n  const onOkClick = () => smodale.hide('modal-name', { foo: 'bar' });\n</script>\n\n<Modal name=\"modal-name\">\n  <h1>Modal title</h1>\n  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>\n  <button on:click={onCancelClick}>Cancel</button>\n  <button on:click={onOkClick}>Ok</button>\n</Modal>\n",
      },
    })),
    (v = new Zn({
      props: {
        filename: 'MyCustomModalContent.svelte',
        language: 'markup',
        unescaped: !0,
        code:
          "\n<script>\n  import { getModalContext } from 'smodale';\n\n  const { hide, cancel } = getModalContext();\n\n  export let text = '';\n\n  const onCancelClick = () => cancel(text.toUpperCase());\n  const onOkClick = () => hide({ foo: 'bar' });\n</script>\n\n<button on:click={onCancelClick}>Cancel</button>\n<button on:click={onOkClick}>Ok</button>\n  ",
      },
    })),
    (y = new Zn({
      props: {
        filename: 'App.svelte',
        language: 'markup',
        unescaped: !0,
        code:
          "\n<script>\nimport smodale, { Modal } from 'smodale';\nimport MyCustomModalContent from 'MyCustomModalContent.svelte';\n\nsmodale.show(MyCustomModalContent, { text: 'Lorem ipsum' })\n  .then(data => {\n    console.log(data); // { foo: 'bar' }\n  })\n  .catch(data => {\n    console.log(data); // 'LOREM IPSUM'\n  });\n</script>\n  ",
      },
    })),
    {
      c() {
        Me(n.$$.fragment),
          (o = _()),
          (s = E('h3')),
          (s.textContent = 'Usage'),
          (r = _()),
          (i = E('p')),
          (i.textContent =
            'Modals can be shown statically or dynamically. When shown dynamically can be also nested.'),
          (a = _()),
          (l = E('h4')),
          (l.textContent = 'Static modal'),
          (c = _()),
          (d = E('p')),
          (d.innerHTML =
            'They are defined through a <code>Modal</code> component in the template markup. When using static\n  modals the property <code>name</code> it&#39;s mandatory and must be unique.'),
          (u = _()),
          Me(m.$$.fragment),
          (p = _()),
          (f = E('h4')),
          (f.textContent = 'Dynamic modal'),
          (g = _()),
          (h = E('p')),
          (h.innerHTML =
            'They are generated at runtime by using <code>show()</code> method. When using dynamic modals you should\n  first define your modal content as a Svelte component.'),
          ($ = _()),
          (b = E('blockquote')),
          (b.innerHTML =
            '<p>Dynamic modals are useful especially for code splitting or when you need to show multiple modals\n    at the same time (nested modals)</p>'),
          (x = _()),
          Me(v.$$.fragment),
          (w = _()),
          Me(y.$$.fragment);
      },
      m(e, t) {
        Ae(n, e, t),
          S(e, o, t),
          S(e, s, t),
          S(e, r, t),
          S(e, i, t),
          S(e, a, t),
          S(e, l, t),
          S(e, c, t),
          S(e, d, t),
          S(e, u, t),
          Ae(m, e, t),
          S(e, p, t),
          S(e, f, t),
          S(e, g, t),
          S(e, h, t),
          S(e, $, t),
          S(e, b, t),
          S(e, x, t),
          Ae(v, e, t),
          S(e, w, t),
          Ae(y, e, t),
          (C = !0);
      },
      p: e,
      i(e) {
        C ||
          (ge(n.$$.fragment, e),
          ge(m.$$.fragment, e),
          ge(v.$$.fragment, e),
          ge(y.$$.fragment, e),
          (C = !0));
      },
      o(e) {
        he(n.$$.fragment, e),
          he(m.$$.fragment, e),
          he(v.$$.fragment, e),
          he(y.$$.fragment, e),
          (C = !1);
      },
      d(e) {
        Ee(n, e),
          e && M(o),
          e && M(s),
          e && M(r),
          e && M(i),
          e && M(a),
          e && M(l),
          e && M(c),
          e && M(d),
          e && M(u),
          Ee(m, e),
          e && M(p),
          e && M(f),
          e && M(g),
          e && M(h),
          e && M($),
          e && M(b),
          e && M(x),
          Ee(v, e),
          e && M(w),
          Ee(y, e);
      },
    }
  );
}
function es(t) {
  let n, o, s, r, i;
  return {
    c() {
      (n = E('p')),
        (n.innerHTML =
          'Smodale uses <code>svelte/store</code> module for handling the visibility of modals and when\n  supported it also uses <code>ResizeObserver</code> for detecting screen changes.'),
        (o = _()),
        (s = E('p')),
        (s.innerHTML =
          'By default when a modal it&#39;s shown will fit the viewport height and width, which could be a common\n  case when on mobile devices however the <code>breakpoints</code> property will allow the definition\n  of some parameters which will style modals on different screen sizes.'),
        (r = _()),
        (i = E('p')),
        (i.textContent =
          'Smodale also provides a built-in way for getting back data on modal acceptance or removal.');
    },
    m(e, t) {
      S(e, n, t), S(e, o, t), S(e, s, t), S(e, r, t), S(e, i, t);
    },
    p: e,
    i: e,
    o: e,
    d(e) {
      e && M(n), e && M(o), e && M(s), e && M(r), e && M(i);
    },
  };
}
function ts(e) {
  let t;
  return {
    c() {
      (t = E('li')),
        (t.innerHTML = '<code>default</code> \n    <div>Slot for the modal content.</div>');
    },
    m(e, n) {
      S(e, t, n);
    },
    d(e) {
      e && M(t);
    },
  };
}
function ns(e) {
  let t, n;
  return (
    (t = new Wo({ props: { $$slots: { default: [ts] }, $$scope: { ctx: e } } })),
    {
      c() {
        Me(t.$$.fragment);
      },
      m(e, o) {
        Ae(t, e, o), (n = !0);
      },
      p(e, [n]) {
        const o = {};
        1 & n && (o.$$scope = { dirty: n, ctx: e }), t.$set(o);
      },
      i(e) {
        n || (ge(t.$$.fragment, e), (n = !0));
      },
      o(e) {
        he(t.$$.fragment, e), (n = !1);
      },
      d(e) {
        Ee(t, e);
      },
    }
  );
}
function os(t) {
  let n, o, s;
  return {
    c() {
      (n = E('button')),
        (n.textContent = 'Show modal with fade transtion'),
        q(n, 'class', 'btn btn--accent'),
        q(n, 'type', 'button');
    },
    m(e, r) {
      S(e, n, r), o || ((s = j(n, 'click', t[0])), (o = !0));
    },
    p: e,
    i: e,
    o: e,
    d(e) {
      e && M(n), (o = !1), s();
    },
  };
}
function ss(e) {
  return [
    () =>
      st.show(Bt, null, {
        transition: qe,
        transitionParams: { duration: 200 },
        breakpoints: {
          '32rem': {
            maxWidth: 'var(--max-width-xxs)',
            margin: 'var(--component-padding)',
            borderRadius: 'var(--radius-md)',
            centered: !0,
          },
        },
      }),
  ];
}
class rs extends Te {
  constructor(e) {
    super(), Le(this, e, ss, os, a, {});
  }
}
function is(t) {
  let n, o, s;
  return {
    c() {
      (n = E('button')),
        (n.textContent = 'Show modal with blur transtion'),
        q(n, 'class', 'btn btn--accent'),
        q(n, 'type', 'button');
    },
    m(e, r) {
      S(e, n, r), o || ((s = j(n, 'click', t[0])), (o = !0));
    },
    p: e,
    i: e,
    o: e,
    d(e) {
      e && M(n), (o = !1), s();
    },
  };
}
function as(e) {
  return [
    () =>
      st.show(Bt, null, {
        transition: je,
        transitionParams: { duration: 300 },
        breakpoints: {
          '32rem': {
            maxWidth: 'var(--max-width-xxs)',
            margin: 'var(--component-padding)',
            borderRadius: 'var(--radius-md)',
            centered: !0,
          },
        },
      }),
  ];
}
class ls extends Te {
  constructor(e) {
    super(), Le(this, e, as, is, a, {});
  }
}
function cs(t) {
  let n, o;
  return (
    (n = new Zn({
      props: {
        'data-src': 'demo/components/organisms/SectionTransition/TransitionFadeExample.svelte',
      },
    })),
    {
      c() {
        Me(n.$$.fragment);
      },
      m(e, t) {
        Ae(n, e, t), (o = !0);
      },
      p: e,
      i(e) {
        o || (ge(n.$$.fragment, e), (o = !0));
      },
      o(e) {
        he(n.$$.fragment, e), (o = !1);
      },
      d(e) {
        Ee(n, e);
      },
    }
  );
}
function ds(t) {
  let n, o;
  return (
    (n = new Zn({
      props: {
        'data-src': 'demo/components/organisms/SectionTransition/TransitionBlurExample.svelte',
      },
    })),
    {
      c() {
        Me(n.$$.fragment);
      },
      m(e, t) {
        Ae(n, e, t), (o = !0);
      },
      p: e,
      i(e) {
        o || (ge(n.$$.fragment, e), (o = !0));
      },
      o(e) {
        he(n.$$.fragment, e), (o = !1);
      },
      d(e) {
        Ee(n, e);
      },
    }
  );
}
function us(e) {
  let t, n, o, s, r, i, a, l, c, d;
  return (
    (t = new rs({})),
    (o = new io({
      props: {
        class: 'margin-top-sm',
        title: 'Show code',
        $$slots: { default: [cs] },
        $$scope: { ctx: e },
      },
    })),
    (a = new ls({})),
    (c = new io({
      props: {
        class: 'margin-top-sm',
        title: 'Show code',
        $$slots: { default: [ds] },
        $$scope: { ctx: e },
      },
    })),
    {
      c() {
        Me(t.$$.fragment),
          (n = _()),
          Me(o.$$.fragment),
          (s = _()),
          (r = E('div')),
          (i = _()),
          Me(a.$$.fragment),
          (l = _()),
          Me(c.$$.fragment),
          q(r, 'class', 'margin-top-sm');
      },
      m(e, u) {
        Ae(t, e, u),
          S(e, n, u),
          Ae(o, e, u),
          S(e, s, u),
          S(e, r, u),
          S(e, i, u),
          Ae(a, e, u),
          S(e, l, u),
          Ae(c, e, u),
          (d = !0);
      },
      p(e, [t]) {
        const n = {};
        1 & t && (n.$$scope = { dirty: t, ctx: e }), o.$set(n);
        const s = {};
        1 & t && (s.$$scope = { dirty: t, ctx: e }), c.$set(s);
      },
      i(e) {
        d ||
          (ge(t.$$.fragment, e),
          ge(o.$$.fragment, e),
          ge(a.$$.fragment, e),
          ge(c.$$.fragment, e),
          (d = !0));
      },
      o(e) {
        he(t.$$.fragment, e),
          he(o.$$.fragment, e),
          he(a.$$.fragment, e),
          he(c.$$.fragment, e),
          (d = !1);
      },
      d(e) {
        Ee(t, e),
          e && M(n),
          Ee(o, e),
          e && M(s),
          e && M(r),
          e && M(i),
          Ee(a, e),
          e && M(l),
          Ee(c, e);
      },
    }
  );
}
function ms(t) {
  let n, o, s;
  return {
    c() {
      (n = E('button')),
        (n.textContent = 'Show modal with custom breakpoints'),
        q(n, 'class', 'btn btn--accent'),
        q(n, 'type', 'button');
    },
    m(e, r) {
      S(e, n, r), o || ((s = j(n, 'click', t[0])), (o = !0));
    },
    p: e,
    i: e,
    o: e,
    d(e) {
      e && M(n), (o = !1), s();
    },
  };
}
function ps(e) {
  return [
    () =>
      st.show(Bt, null, {
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
      }),
  ];
}
class fs extends Te {
  constructor(e) {
    super(), Le(this, e, ps, ms, a, {});
  }
}
function gs(t) {
  let n, o;
  return (
    (n = new Zn({
      props: {
        'data-src': 'demo/components/organisms/SectionBreakpoints/BreakpointsExample.svelte',
      },
    })),
    {
      c() {
        Me(n.$$.fragment);
      },
      m(e, t) {
        Ae(n, e, t), (o = !0);
      },
      p: e,
      i(e) {
        o || (ge(n.$$.fragment, e), (o = !0));
      },
      o(e) {
        he(n.$$.fragment, e), (o = !1);
      },
      d(e) {
        Ee(n, e);
      },
    }
  );
}
function hs(e) {
  let t, n, o, s;
  return (
    (t = new fs({})),
    (o = new io({
      props: {
        class: 'margin-top-sm',
        title: 'Show code',
        $$slots: { default: [gs] },
        $$scope: { ctx: e },
      },
    })),
    {
      c() {
        Me(t.$$.fragment), (n = _()), Me(o.$$.fragment);
      },
      m(e, r) {
        Ae(t, e, r), S(e, n, r), Ae(o, e, r), (s = !0);
      },
      p(e, [t]) {
        const n = {};
        1 & t && (n.$$scope = { dirty: t, ctx: e }), o.$set(n);
      },
      i(e) {
        s || (ge(t.$$.fragment, e), ge(o.$$.fragment, e), (s = !0));
      },
      o(e) {
        he(t.$$.fragment, e), he(o.$$.fragment, e), (s = !1);
      },
      d(e) {
        Ee(t, e), e && M(n), Ee(o, e);
      },
    }
  );
}
function $s(t) {
  let n, o, s, r, i, a, l, c, d, u;
  return {
    c() {
      (n = E('figure')),
        (o = E('iframe')),
        (r = _()),
        (i = E('div')),
        (a = E('button')),
        (l = E('img')),
        q(o, 'title', xs),
        o.src !== (s = 'https://www.youtube.com/embed/gJ2P6hGwcgo') &&
          q(o, 'src', 'https://www.youtube.com/embed/gJ2P6hGwcgo'),
        q(o, 'width', '640'),
        q(o, 'height', '360'),
        q(o, 'frameborder', '0'),
        q(o, 'webkitallowfullscreen', ''),
        q(o, 'mozallowfullscreen', ''),
        (o.allowFullscreen = !0),
        q(n, 'class', 'aspect-ratio-16:9 bg-black'),
        q(l, 'class', 'icon icon--sm'),
        l.src !== (c = St) &&
          q(
            l,
            'src',
            "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48' height='48' viewBox='0 0 48 48'%3e %3cg transform='translate(0%2c 0)'%3e %3cpolygon points='37.435 7.736 24 21.172 10.565 7.736 7.737 10.564 21.172 24 7.737 37.436 10.565 40.264 24 26.828 37.435 40.264 40.263 37.436 26.828 24 40.263 10.564 37.435 7.736' fill='currentColor' %3e%3c/polygon%3e %3c/g%3e%3c/svg%3e"
          ),
        q(l, 'alt', 'Close'),
        q(a, 'class', 'btn btn--subtle padding-xs js-tab-focus radius-full'),
        q(a, 'type', 'button'),
        q(i, 'class', 'position-absolute top-md right-md');
    },
    m(e, s) {
      S(e, n, s),
        k(n, o),
        S(e, r, s),
        S(e, i, s),
        k(i, a),
        k(a, l),
        d || ((u = j(a, 'click', t[2])), (d = !0));
    },
    p: e,
    d(e) {
      e && M(n), e && M(r), e && M(i), (d = !1), u();
    },
  };
}
function bs(e) {
  let t, o, s, r, i, a;
  const l = [e[0]];
  let c = { $$slots: { default: [$s] }, $$scope: { ctx: e } };
  for (let e = 0; e < l.length; e += 1) c = n(c, l[e]);
  return (
    (s = new Ke({ props: c })),
    {
      c() {
        (t = E('button')),
          (t.textContent = 'Show modal video'),
          (o = _()),
          Me(s.$$.fragment),
          q(t, 'class', 'btn btn--accent'),
          q(t, 'type', 'button');
      },
      m(n, l) {
        S(n, t, l), S(n, o, l), Ae(s, n, l), (r = !0), i || ((a = j(t, 'click', e[1])), (i = !0));
      },
      p(e, [t]) {
        const n = 1 & t ? ke(l, [Se(e[0])]) : {};
        8 & t && (n.$$scope = { dirty: t, ctx: e }), s.$set(n);
      },
      i(e) {
        r || (ge(s.$$.fragment, e), (r = !0));
      },
      o(e) {
        he(s.$$.fragment, e), (r = !1);
      },
      d(e) {
        e && M(t), e && M(o), Ee(s, e), (i = !1), a();
      },
    }
  );
}
const xs = 'modal-video';
function vs(e) {
  return [
    {
      name: xs,
      backgroundColor: 'transparent',
      margin: 'var(--component-padding)',
      padding: 0,
      borderRadius: 'var(--radius-lg)',
      centered: !0,
      maxWidth: 'var(--max-width-md)',
      height: 'auto',
      clickOutsideToClose: !1,
    },
    () => st.show(xs),
    () => st.cancel(xs),
  ];
}
class ws extends Te {
  constructor(e) {
    super(), Le(this, e, vs, bs, a, {});
  }
}
function ys(t) {
  let n, o;
  return (
    (n = new Zn({
      props: { 'data-src': 'demo/components/organisms/SectionVideo/VideoExample.svelte' },
    })),
    {
      c() {
        Me(n.$$.fragment);
      },
      m(e, t) {
        Ae(n, e, t), (o = !0);
      },
      p: e,
      i(e) {
        o || (ge(n.$$.fragment, e), (o = !0));
      },
      o(e) {
        he(n.$$.fragment, e), (o = !1);
      },
      d(e) {
        Ee(n, e);
      },
    }
  );
}
function Cs(e) {
  let t, n, o, s;
  return (
    (t = new ws({})),
    (o = new io({
      props: {
        class: 'margin-top-sm',
        title: 'Show code',
        $$slots: { default: [ys] },
        $$scope: { ctx: e },
      },
    })),
    {
      c() {
        Me(t.$$.fragment), (n = _()), Me(o.$$.fragment);
      },
      m(e, r) {
        Ae(t, e, r), S(e, n, r), Ae(o, e, r), (s = !0);
      },
      p(e, [t]) {
        const n = {};
        1 & t && (n.$$scope = { dirty: t, ctx: e }), o.$set(n);
      },
      i(e) {
        s || (ge(t.$$.fragment, e), ge(o.$$.fragment, e), (s = !0));
      },
      o(e) {
        he(t.$$.fragment, e), he(o.$$.fragment, e), (s = !1);
      },
      d(e) {
        Ee(t, e), e && M(n), Ee(o, e);
      },
    }
  );
}
var ks = [
  {
    label: 'Getting started',
    items: [
      {
        id: 'introduction',
        label: 'Introduction',
        component: class extends Te {
          constructor(e) {
            super(), Le(this, e, null, es, a, {});
          }
        },
      },
      {
        id: 'installation',
        label: 'Installation',
        component: class extends Te {
          constructor(e) {
            super(), Le(this, e, null, Qo, a, {});
          }
        },
      },
    ],
  },
  {
    label: 'Component',
    items: [
      {
        id: 'api',
        label: 'API',
        component: class extends Te {
          constructor(e) {
            super(), Le(this, e, null, Jo, a, {});
          }
        },
      },
      {
        id: 'properties',
        label: 'Properties',
        component: class extends Te {
          constructor(e) {
            super(), Le(this, e, null, Yo, a, {});
          }
        },
      },
      {
        id: 'events',
        label: 'Events',
        component: class extends Te {
          constructor(e) {
            super(), Le(this, e, null, Io, a, {});
          }
        },
      },
      {
        id: 'slots',
        label: 'Slots',
        component: class extends Te {
          constructor(e) {
            super(), Le(this, e, null, ns, a, {});
          }
        },
      },
    ],
  },
  {
    label: 'Examples',
    items: [
      {
        id: 'centered',
        label: 'Centered',
        component: class extends Te {
          constructor(e) {
            super(), Le(this, e, null, wo, a, {});
          }
        },
      },
      {
        id: 'long-content',
        label: 'Long content',
        component: class extends Te {
          constructor(e) {
            super(), Le(this, e, null, zo, a, {});
          }
        },
      },
      {
        id: 'nested-modals',
        label: 'Nested modals',
        component: class extends Te {
          constructor(e) {
            super(), Le(this, e, null, lo, a, {});
          }
        },
      },
      {
        id: 'transition',
        label: 'Transition',
        component: class extends Te {
          constructor(e) {
            super(), Le(this, e, null, us, a, {});
          }
        },
      },
      {
        id: 'breakpoints',
        label: 'Breakpoints',
        component: class extends Te {
          constructor(e) {
            super(), Le(this, e, null, hs, a, {});
          }
        },
      },
      {
        id: 'video',
        label: 'Video',
        component: class extends Te {
          constructor(e) {
            super(), Le(this, e, null, Cs, a, {});
          }
        },
      },
    ],
  },
  {
    label: 'Other',
    items: [
      {
        id: 'troubleshooting',
        label: 'Troubleshooting',
        component: class extends Te {
          constructor(e) {
            super(), Le(this, e, null, Jn, a, {});
          }
        },
      },
      {
        id: 'support',
        label: 'Support',
        component: class extends Te {
          constructor(e) {
            super(), Le(this, e, null, Un, a, {});
          }
        },
      },
    ],
  },
];
function Ss(e, t, n) {
  const o = e.slice();
  return (o[12] = t[n].id), (o[8] = t[n].label), (o[16] = t[n].component), (o[11] = n), o;
}
function Ms(e, t, n) {
  const o = e.slice();
  return (o[8] = t[n].label), (o[9] = t[n].items), (o[11] = n), o;
}
function As(e, t, n) {
  const o = e.slice();
  return (o[12] = t[n].id), (o[8] = t[n].label), (o[14] = n), o;
}
function Es(e) {
  let t, n;
  return (
    (t = new Bt({})),
    {
      c() {
        Me(t.$$.fragment);
      },
      m(e, o) {
        Ae(t, e, o), (n = !0);
      },
      i(e) {
        n || (ge(t.$$.fragment, e), (n = !0));
      },
      o(e) {
        he(t.$$.fragment, e), (n = !1);
      },
      d(e) {
        Ee(t, e);
      },
    }
  );
}
function Ls(e) {
  let t,
    n,
    o,
    s,
    r,
    i,
    a = e[8] + '';
  var l = e[16];
  return (
    l && (s = new l({})),
    {
      c() {
        (t = E('h2')), (n = T(a)), (o = _()), s && Me(s.$$.fragment), (r = _());
      },
      m(e, a) {
        S(e, t, a), k(t, n), S(e, o, a), s && Ae(s, e, a), S(e, r, a), (i = !0);
      },
      p(e, t) {
        if (((!i || 1 & t) && a !== (a = e[8] + '') && P(n, a), l !== (l = e[16]))) {
          if (s) {
            pe();
            const e = s;
            he(e.$$.fragment, 1, 0, () => {
              Ee(e, 1);
            }),
              fe();
          }
          l
            ? ((s = new l({})), Me(s.$$.fragment), ge(s.$$.fragment, 1), Ae(s, r.parentNode, r))
            : (s = null);
        }
      },
      i(e) {
        i || (s && ge(s.$$.fragment, e), (i = !0));
      },
      o(e) {
        s && he(s.$$.fragment, e), (i = !1);
      },
      d(e) {
        e && M(t), e && M(o), s && Ee(s, e), e && M(r);
      },
    }
  );
}
function Ts(e) {
  let t, n;
  return (
    (t = new kn({ props: { id: e[12], $$slots: { default: [Ls] }, $$scope: { ctx: e } } })),
    {
      c() {
        Me(t.$$.fragment);
      },
      m(e, o) {
        Ae(t, e, o), (n = !0);
      },
      p(e, n) {
        const o = {};
        1 & n && (o.id = e[12]), 262145 & n && (o.$$scope = { dirty: n, ctx: e }), t.$set(o);
      },
      i(e) {
        n || (ge(t.$$.fragment, e), (n = !0));
      },
      o(e) {
        he(t.$$.fragment, e), (n = !1);
      },
      d(e) {
        Ee(t, e);
      },
    }
  );
}
function _s(e) {
  let t, o, s, i, a, l, c, d, u, m, p, f, g, h, $, b;
  const x = [e[1]];
  let v = { $$slots: { default: [Es] }, $$scope: { ctx: e } };
  for (let e = 0; e < x.length; e += 1) v = n(v, x[e]);
  (m = new Ke({ props: v })), m.$on('opened', e[3]), m.$on('closed', e[2]);
  let w = e[0],
    y = [];
  for (let t = 0; t < w.length; t += 1) y[t] = Ts(Ss(e, w, t));
  const C = (e) =>
    he(y[e], 1, 1, () => {
      y[e] = null;
    });
  return {
    c() {
      (t = E('div')),
        (o = E('section')),
        (s = E('div')),
        (s.innerHTML =
          '<h1>Smodale</h1> \n              <p class="text-md color-contrast-medium">A simple, light and highly customizable modal for Svelte</p> \n              <p>Designed with the &quot;Mobile-first&quot; approach for serving static and dynamic modals\n                which are customizable on specific viewport breakpoints</p>'),
        (i = _()),
        (a = E('div')),
        (l = E('button')),
        (l.textContent = 'Show a static modal'),
        (c = _()),
        (d = E('button')),
        (d.textContent = 'Show a dynamic modal'),
        (u = _()),
        Me(m.$$.fragment),
        (p = _()),
        (f = E('hr')),
        (g = _());
      for (let e = 0; e < y.length; e += 1) y[e].c();
      q(s, 'class', 'margin-bottom-md'),
        q(l, 'type', 'button'),
        q(l, 'class', 'btn btn--primary'),
        q(d, 'type', 'button'),
        q(d, 'class', 'btn btn--accent'),
        q(a, 'class', 'flex flex-column flex-row@xs gap-xs'),
        q(t, 'class', 'text-component article');
    },
    m(n, r) {
      S(n, t, r),
        k(t, o),
        k(o, s),
        k(o, i),
        k(o, a),
        k(a, l),
        k(a, c),
        k(a, d),
        k(o, u),
        Ae(m, o, null),
        k(o, p),
        k(o, f),
        k(t, g);
      for (let e = 0; e < y.length; e += 1) y[e].m(t, null);
      (h = !0), $ || ((b = [j(l, 'click', e[4]), j(d, 'click', e[5])]), ($ = !0));
    },
    p(e, n) {
      const o = 2 & n ? ke(x, [Se(e[1])]) : {};
      if ((262144 & n && (o.$$scope = { dirty: n, ctx: e }), m.$set(o), 1 & n)) {
        let o;
        for (w = e[0], o = 0; o < w.length; o += 1) {
          const s = Ss(e, w, o);
          y[o]
            ? (y[o].p(s, n), ge(y[o], 1))
            : ((y[o] = Ts(s)), y[o].c(), ge(y[o], 1), y[o].m(t, null));
        }
        for (pe(), o = w.length; o < y.length; o += 1) C(o);
        fe();
      }
    },
    i(e) {
      if (!h) {
        ge(m.$$.fragment, e);
        for (let e = 0; e < w.length; e += 1) ge(y[e]);
        h = !0;
      }
    },
    o(e) {
      he(m.$$.fragment, e), (y = y.filter(Boolean));
      for (let e = 0; e < y.length; e += 1) he(y[e]);
      h = !1;
    },
    d(e) {
      e && M(t), Ee(m), A(y, e), ($ = !1), r(b);
    },
  };
}
function Fs(t) {
  let n,
    o = t[8] + '';
  return {
    c() {
      n = T(o);
    },
    m(e, t) {
      S(e, n, t);
    },
    p: e,
    d(e) {
      e && M(n);
    },
  };
}
function js(t) {
  let n,
    o = t[8] + '';
  return {
    c() {
      n = T(o);
    },
    m(e, t) {
      S(e, n, t);
    },
    p: e,
    d(e) {
      e && M(n);
    },
  };
}
function qs(e) {
  let t, n;
  return (
    (t = new zn({
      props: { href: `#${e[12]}`, current: e[15], $$slots: { default: [js] }, $$scope: { ctx: e } },
    })),
    t.$on('click', function () {
      i(e[6](e[7])) && e[6](e[7]).apply(this, arguments);
    }),
    {
      c() {
        Me(t.$$.fragment);
      },
      m(e, o) {
        Ae(t, e, o), (n = !0);
      },
      p(n, o) {
        e = n;
        const s = {};
        32768 & o && (s.current = e[15]),
          262144 & o && (s.$$scope = { dirty: o, ctx: e }),
          t.$set(s);
      },
      i(e) {
        n || (ge(t.$$.fragment, e), (n = !0));
      },
      o(e) {
        he(t.$$.fragment, e), (n = !1);
      },
      d(e) {
        Ee(t, e);
      },
    }
  );
}
function Hs(e) {
  let t, n;
  return (
    (t = new In({
      props: {
        id: e[12],
        $$slots: { default: [qs, ({ prop: e }) => ({ 15: e }), ({ prop: e }) => (e ? 32768 : 0)] },
        $$scope: { ctx: e },
      },
    })),
    {
      c() {
        Me(t.$$.fragment);
      },
      m(e, o) {
        Ae(t, e, o), (n = !0);
      },
      p(e, n) {
        const o = {};
        295040 & n && (o.$$scope = { dirty: n, ctx: e }), t.$set(o);
      },
      i(e) {
        n || (ge(t.$$.fragment, e), (n = !0));
      },
      o(e) {
        he(t.$$.fragment, e), (n = !1);
      },
      d(e) {
        Ee(t, e);
      },
    }
  );
}
function Ps(e) {
  let t,
    n,
    o = e[9],
    s = [];
  for (let t = 0; t < o.length; t += 1) s[t] = Hs(As(e, o, t));
  const r = (e) =>
    he(s[e], 1, 1, () => {
      s[e] = null;
    });
  return {
    c() {
      for (let e = 0; e < s.length; e += 1) s[e].c();
      t = _();
    },
    m(e, o) {
      for (let t = 0; t < s.length; t += 1) s[t].m(e, o);
      S(e, t, o), (n = !0);
    },
    p(e, n) {
      if (32960 & n) {
        let i;
        for (o = e[9], i = 0; i < o.length; i += 1) {
          const r = As(e, o, i);
          s[i]
            ? (s[i].p(r, n), ge(s[i], 1))
            : ((s[i] = Hs(r)), s[i].c(), ge(s[i], 1), s[i].m(t.parentNode, t));
        }
        for (pe(), i = o.length; i < s.length; i += 1) r(i);
        fe();
      }
    },
    i(e) {
      if (!n) {
        for (let e = 0; e < o.length; e += 1) ge(s[e]);
        n = !0;
      }
    },
    o(e) {
      s = s.filter(Boolean);
      for (let e = 0; e < s.length; e += 1) he(s[e]);
      n = !1;
    },
    d(e) {
      A(s, e), e && M(t);
    },
  };
}
function Ns(e) {
  let t, n, o, s;
  return (
    (t = new An({ props: { $$slots: { default: [Fs] }, $$scope: { ctx: e } } })),
    (o = new Tn({ props: { $$slots: { default: [Ps] }, $$scope: { ctx: e } } })),
    {
      c() {
        Me(t.$$.fragment), (n = _()), Me(o.$$.fragment);
      },
      m(e, r) {
        Ae(t, e, r), S(e, n, r), Ae(o, e, r), (s = !0);
      },
      p(e, n) {
        const s = {};
        262144 & n && (s.$$scope = { dirty: n, ctx: e }), t.$set(s);
        const r = {};
        262272 & n && (r.$$scope = { dirty: n, ctx: e }), o.$set(r);
      },
      i(e) {
        s || (ge(t.$$.fragment, e), ge(o.$$.fragment, e), (s = !0));
      },
      o(e) {
        he(t.$$.fragment, e), he(o.$$.fragment, e), (s = !1);
      },
      d(e) {
        Ee(t, e), e && M(n), Ee(o, e);
      },
    }
  );
}
function Os(e) {
  let t,
    n,
    o = ks,
    s = [];
  for (let t = 0; t < o.length; t += 1) s[t] = Ns(Ms(e, o, t));
  const r = (e) =>
    he(s[e], 1, 1, () => {
      s[e] = null;
    });
  return {
    c() {
      for (let e = 0; e < s.length; e += 1) s[e].c();
      t = F();
    },
    m(e, o) {
      for (let t = 0; t < s.length; t += 1) s[t].m(e, o);
      S(e, t, o), (n = !0);
    },
    p(e, n) {
      if (32960 & n) {
        let i;
        for (o = ks, i = 0; i < o.length; i += 1) {
          const r = Ms(e, o, i);
          s[i]
            ? (s[i].p(r, n), ge(s[i], 1))
            : ((s[i] = Ns(r)), s[i].c(), ge(s[i], 1), s[i].m(t.parentNode, t));
        }
        for (pe(), i = o.length; i < s.length; i += 1) r(i);
        fe();
      }
    },
    i(e) {
      if (!n) {
        for (let e = 0; e < o.length; e += 1) ge(s[e]);
        n = !0;
      }
    },
    o(e) {
      s = s.filter(Boolean);
      for (let e = 0; e < s.length; e += 1) he(s[e]);
      n = !1;
    },
    d(e) {
      A(s, e), e && M(t);
    },
  };
}
function zs(e) {
  let t, n;
  return (
    (t = new hn({ props: { $$slots: { default: [Os] }, $$scope: { ctx: e } } })),
    {
      c() {
        Me(t.$$.fragment);
      },
      m(e, o) {
        Ae(t, e, o), (n = !0);
      },
      p(e, n) {
        const o = {};
        262272 & n && (o.$$scope = { dirty: n, ctx: e }), t.$set(o);
      },
      i(e) {
        n || (ge(t.$$.fragment, e), (n = !0));
      },
      o(e) {
        he(t.$$.fragment, e), (n = !1);
      },
      d(e) {
        Ee(t, e);
      },
    }
  );
}
function Ds(e) {
  let t, n;
  return (
    (t = new pn({
      props: {
        $$slots: {
          aside: [zs, ({ prop: { sidebar: e } }) => ({ 7: e }), ({ prop: e }) => (e ? 128 : 0)],
          default: [_s, ({ prop: { sidebar: e } }) => ({ 7: e }), ({ prop: e }) => (e ? 128 : 0)],
        },
        $$scope: { ctx: e },
      },
    })),
    {
      c() {
        Me(t.$$.fragment);
      },
      m(e, o) {
        Ae(t, e, o), (n = !0);
      },
      p(e, n) {
        const o = {};
        262273 & n && (o.$$scope = { dirty: n, ctx: e }), t.$set(o);
      },
      i(e) {
        n || (ge(t.$$.fragment, e), (n = !0));
      },
      o(e) {
        he(t.$$.fragment, e), (n = !1);
      },
      d(e) {
        Ee(t, e);
      },
    }
  );
}
function Rs(e) {
  let t, n, o;
  return (
    (n = new wn({ props: { $$slots: { default: [Ds] }, $$scope: { ctx: e } } })),
    {
      c() {
        (t = E('div')), Me(n.$$.fragment), q(t, 'class', 'container max-width-adaptive-md');
      },
      m(e, s) {
        S(e, t, s), Ae(n, t, null), (o = !0);
      },
      p(e, t) {
        const o = {};
        262145 & t && (o.$$scope = { dirty: t, ctx: e }), n.$set(o);
      },
      i(e) {
        o || (ge(n.$$.fragment, e), (o = !0));
      },
      o(e) {
        he(n.$$.fragment, e), (o = !1);
      },
      d(e) {
        e && M(t), Ee(n);
      },
    }
  );
}
function Ws(e) {
  let t, n;
  return (
    (t = new Dt({ props: { $$slots: { default: [Rs] }, $$scope: { ctx: e } } })),
    {
      c() {
        Me(t.$$.fragment);
      },
      m(e, o) {
        Ae(t, e, o), (n = !0);
      },
      p(e, [n]) {
        const o = {};
        262145 & n && (o.$$scope = { dirty: n, ctx: e }), t.$set(o);
      },
      i(e) {
        n || (ge(t.$$.fragment, e), (n = !0));
      },
      o(e) {
        he(t.$$.fragment, e), (n = !1);
      },
      d(e) {
        Ee(t, e);
      },
    }
  );
}
function Bs(e, t, n) {
  let o;
  const s = {
      name: 'example',
      padding: 'var(--component-padding)',
      transition: qe,
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
    r = () => kt('Event: <code>closed</code>'),
    i = () => kt('Event: <code>opened</code>');
  return (
    n(0, (o = ks.reduce((e, t) => [...e, ...t.items], []))),
    [
      o,
      s,
      r,
      i,
      () =>
        st
          .show('example')
          .then(() => ((e, t) => kt(e, { ...t, type: Ct.SUCCESS }))('Hide: Confirmed'))
          .catch((e) =>
            ((e, t) => kt(e, { ...t, type: Ct.WARNING }))(
              'Cancel' + (e ? `: <code>${e}</code>` : '')
            )
          ),
      () => st.show(Xt, null, s, { closed: r, opened: i }),
      (e) => {
        'mobile' === e.layout && e.close();
      },
    ]
  );
}
(window.ga =
  window.ga ||
  function e(...t) {
    (e.q = e.q || []).push(...t);
  }),
  (ga.l = +new Date()),
  ga('create', 'UA-XXXXX-Y', 'auto'),
  ga('send', 'pageview', { anonymizeIp: !0 });
var Is = new (class extends Te {
  constructor(e) {
    super(), Le(this, e, Bs, Ws, a, {});
  }
})({ target: document.body });
export default Is;
//# sourceMappingURL=main.esm.js.map
