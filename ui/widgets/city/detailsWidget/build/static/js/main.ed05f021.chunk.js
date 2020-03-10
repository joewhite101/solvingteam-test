(window['webpackJsonpcity-details-widget'] = window['webpackJsonpcity-details-widget'] || []).push([
  [0],
  {
    56: function(e) {
      e.exports = JSON.parse(
        '{"common":{"couldNotFetchData":"Unfortunately we could not fetch entity data","widgetName":"Details about \'{{widgetNamePlaceholder}}\'","name":"Name","value":"Value","loading":"Loading...","missingId":"Please provide city ID","notAuthenticated":"User is not authenticated.","download":"Download file"},"entities":{"city":{"id":"ID","name":"entities.city.name","descrizione":"entities.city.descrizione"}}}'
      );
    },
    68: function(e, t, n) {
      e.exports = n(87);
    },
    78: function(e, t, n) {},
    87: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(22),
        i = n(45),
        o = n(21),
        c = { en: n(56) };
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      var l = Object.keys(c).reduce(function(e, t) {
        return (function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? r(n, !0).forEach(function(t) {
                  Object(a.a)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : r(n).forEach(function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        })({}, e, Object(a.a)({}, t, { translation: c[t] }));
      }, {});
      i.a.use(o.a).init({ fallbackLng: 'en', resources: l, interpolation: { escapeValue: !1 } });
      n(78);
      var s = n(37),
        u = n(38),
        d = n(46),
        m = n(27),
        f = n(39),
        p = n(62),
        y = n(0),
        h = n.n(y),
        b = n(13),
        O = n.n(b),
        k = h.a.createContext(null);
      var E = n(31),
        g = n(119),
        v = n(61),
        w = n(4),
        j = n.n(w),
        P =
          (j.a.shape({ initialized: j.a.bool, authenticated: j.a.bool }),
          function(e) {
            var t = e.children,
              n = e.keycloak;
            return n.initialized && n.authenticated ? t : null;
          }),
        D = function(e) {
          var t = e.children,
            n = e.keycloak;
          return n.initialized && n.authenticated ? null : t;
        },
        S = n(121),
        N = (j.a.shape({ id: j.a.number, name: j.a.string, descrizione: j.a.string }), n(113)),
        C = n(117),
        z = n(116),
        R = n(114),
        A = n(115),
        I = function(e) {
          var t = e.t,
            n = e.city;
          return h.a.createElement(
            N.a,
            null,
            h.a.createElement(
              R.a,
              null,
              h.a.createElement(
                A.a,
                null,
                h.a.createElement(z.a, null, t('common.name')),
                h.a.createElement(z.a, null, t('common.value'))
              )
            ),
            h.a.createElement(
              C.a,
              null,
              h.a.createElement(
                A.a,
                null,
                h.a.createElement(
                  z.a,
                  null,
                  h.a.createElement('span', null, t(''.concat('entities.city.', 'id')))
                ),
                h.a.createElement(z.a, null, h.a.createElement('span', null, n.id))
              ),
              h.a.createElement(
                A.a,
                null,
                h.a.createElement(
                  z.a,
                  null,
                  h.a.createElement('span', null, t(''.concat('entities.city.', 'name')))
                ),
                h.a.createElement(z.a, null, h.a.createElement('span', null, n.name))
              ),
              h.a.createElement(
                A.a,
                null,
                h.a.createElement(
                  z.a,
                  null,
                  h.a.createElement('span', null, t(''.concat('entities.city.', 'descrizione')))
                ),
                h.a.createElement(z.a, null, h.a.createElement('span', null, n.descrizione))
              )
            )
          );
        };
      I.defaultProps = { city: [] };
      var M = Object(o.b)()(I),
        F = function(e) {
          var t = e.t,
            n = e.city;
          return h.a.createElement(
            S.a,
            null,
            h.a.createElement(
              'h3',
              null,
              t('common.widgetName', { widgetNamePlaceholder: 'City' })
            ),
            h.a.createElement(M, { city: n })
          );
        };
      F.defaultProps = { city: {} };
      var L = Object(o.b)()(F),
        T = n(3),
        U = n(122),
        x = n(124),
        K = n(118),
        _ = n(5),
        H = n(123),
        J = n(58),
        V = n.n(J),
        B = n(59),
        G = n.n(B),
        W = n(57),
        q = n.n(W),
        Q = n(60),
        X = n.n(Q),
        Y = { success: q.a, error: V.a, info: G.a },
        Z = { success: 3e3, error: null, info: 5e3 },
        $ = function e(t) {
          var n = t.className,
            a = t.classes,
            i = t.status,
            o = t.message,
            c = t.onClose,
            r = !!o,
            l = i || e.INFO,
            s = Y[l],
            u = Z[l],
            d = h.a.createElement(
              'span',
              { className: a.message },
              h.a.createElement(s, { className: Object(T.a)(a.icon, a.iconStatus) }),
              o
            );
          return h.a.createElement(
            U.a,
            { open: r, onClose: c, autoHideDuration: u },
            h.a.createElement(x.a, {
              className: Object(T.a)(a[l], n),
              message: d,
              action: [
                h.a.createElement(
                  H.a,
                  { key: 'close', 'aria-label': 'close', color: 'inherit', onClick: c },
                  h.a.createElement(X.a, { className: a.icon })
                ),
              ],
            })
          );
        };
      ($.SUCCESS = 'success'),
        ($.ERROR = 'error'),
        ($.defaultProps = {
          message: null,
          className: '',
          status: ($.INFO = 'info'),
          onClose: function() {},
        });
      var ee = Object(_.a)(
          function(e) {
            return {
              message: { display: 'flex', alignItems: 'center' },
              icon: { fontSize: 20 },
              iconStatus: { opacity: 0.9, marginRight: e.spacing(1) },
              success: { backgroundColor: K.a[600] },
              error: { backgroundColor: e.palette.error.dark },
              info: { backgroundColor: e.palette.primary.main },
            };
          },
          { withTheme: !0 }
        )($),
        te = Object({ NODE_ENV: 'production', PUBLIC_URL: '' }).REACT_APP_DOMAIN;
      function ne(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ne(n, !0).forEach(function(t) {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ne(n).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var ie = function() {
          return window &&
            window.entando &&
            window.entando.keycloak &&
            window.entando.keycloak.authenticated
            ? window.entando.keycloak.token
            : '';
        },
        oe = (function(e) {
          function t(e) {
            var n;
            return (
              Object(s.a)(this, t),
              ((n = Object(d.a)(this, Object(m.a)(t).call(this, e))).state = {
                loading: !0,
                city: {},
                notificationStatus: null,
                notificationMessage: null,
              }),
              (n.theme = Object(v.a)()),
              (n.closeNotification = n.closeNotification.bind(Object(E.a)(n))),
              (n.fetchData = n.fetchData.bind(Object(E.a)(n))),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this.props.keycloak;
                  e.initialized && e.authenticated && this.fetchData();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  var t = this.props.keycloak,
                    n = t.initialized && t.authenticated,
                    a = e.keycloak.authenticated !== n;
                  n && a && this.fetchData();
                },
              },
              {
                key: 'fetchData',
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.id,
                    a = t.onError,
                    i = t.t,
                    o = t.keycloak;
                  o.initialized &&
                    o.authenticated &&
                    (n
                      ? (function() {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.id,
                            n = e.options,
                            a = ie(),
                            i = ''
                              .concat(te)
                              .concat(te.endsWith('/') ? '' : '/', 'cities/')
                              .concat(t),
                            o = {
                              headers: new Headers({
                                Authorization: 'Bearer '.concat(a),
                                'Content-Type': 'application/json',
                              }),
                            };
                          return fetch(i, ae({ method: 'GET' }, o, {}, n))
                            .then(function(e) {
                              return e.status >= 200 && e.status < 300
                                ? Promise.resolve(e)
                                : Promise.reject(new Error(e.statusText || e.status));
                            })
                            .then(function(e) {
                              return e.json();
                            });
                        })({ id: n })
                          .then(function(t) {
                            return e.setState({
                              notificationStatus: null,
                              notificationMessage: null,
                              city: t,
                            });
                          })
                          .catch(function(t) {
                            a(t),
                              e.setState({
                                notificationStatus: ee.ERROR,
                                notificationMessage: i('common.couldNotFetchData'),
                              });
                          })
                          .finally(function() {
                            return e.setState({ loading: !1 });
                          })
                      : this.setState({
                          loading: !1,
                          notificationStatus: ee.ERROR,
                          notificationMessage: i('common.missingId'),
                        }));
                },
              },
              {
                key: 'closeNotification',
                value: function() {
                  this.setState({ notificationStatus: null, notificationMessage: null });
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.state,
                    t = e.city,
                    n = e.notificationStatus,
                    a = e.notificationMessage,
                    i = e.loading,
                    o = this.props,
                    c = o.t,
                    r = o.keycloak;
                  return h.a.createElement(
                    g.a,
                    { theme: this.theme },
                    h.a.createElement(D, { keycloak: r }, c('common.notAuthenticated')),
                    h.a.createElement(
                      P,
                      { keycloak: r },
                      i && c('common.loading'),
                      !i && h.a.createElement(L, { city: t })
                    ),
                    h.a.createElement(ee, {
                      status: n,
                      message: a,
                      onClose: this.closeNotification,
                    })
                  );
                },
              },
            ]),
            t
          );
        })(h.a.Component);
      oe.defaultProps = { onError: function() {} };
      var ce,
        re =
          ((ce = Object(o.b)()(oe)),
          function(e) {
            return h.a.createElement(k.Consumer, null, function(t) {
              return h.a.createElement(ce, Object.assign({}, e, { keycloak: t }));
            });
          });
      function le(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function se(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? le(n, !0).forEach(function(t) {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : le(n).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var ue = function() {
          return (
            (window &&
              window.entando &&
              window.entando.keycloak &&
              se({}, window.entando.keycloak, { initialized: !0 })) || { initialized: !1 }
          );
        },
        de = (function(e) {
          function t() {
            var e, n;
            Object(s.a)(this, t);
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
            return (
              ((n = Object(d.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(i))
              )).mountPoint = null),
              (n.unsubscribeFromKeycloakEvent = null),
              (n.keycloak = ue()),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(u.a)(t, [
              {
                key: 'connectedCallback',
                value: function() {
                  var e = this;
                  (this.mountPoint = document.createElement('div')),
                    this.appendChild(this.mountPoint);
                  var t,
                    n,
                    a = this.getAttribute('locale') || 'en';
                  i.a.changeLanguage(a),
                    (this.keycloak = se({}, ue(), { initialized: !0 })),
                    (this.unsubscribeFromKeycloakEvent =
                      ((t = 'keycloak'),
                      (n = function() {
                        (e.keycloak = se({}, ue(), { initialized: !0 })), e.render();
                      }),
                      window.addEventListener(t, n),
                      function() {
                        window.removeEventListener(t, n);
                      })),
                    this.render();
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.getAttribute('id'),
                    n = h.a.createElement(re, {
                      id: t,
                      onError: function(t) {
                        var n = new CustomEvent(''.concat('city.details.', 'error'), {
                          details: { error: t },
                        });
                        e.dispatchEvent(n);
                      },
                    });
                  O.a.render(
                    h.a.createElement(k.Provider, { value: this.keycloak }, n),
                    this.mountPoint
                  );
                },
              },
              {
                key: 'disconnectedCallback',
                value: function() {
                  this.unsubscribeFromKeycloakEvent && this.unsubscribeFromKeycloakEvent();
                },
              },
            ]),
            t
          );
        })(Object(p.a)(HTMLElement));
      customElements.define('city-details', de);
    },
  },
  [[68, 1, 2]],
]);
//# sourceMappingURL=main.ed05f021.chunk.js.map
