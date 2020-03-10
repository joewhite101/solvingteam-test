(window['webpackJsonpnazione-details-widget'] = window['webpackJsonpnazione-details-widget'] || []).push([
  [0],
  {
    56: function(e) {
      e.exports = JSON.parse(
        '{"common":{"couldNotFetchData":"Unfortunately we could not fetch entity data","widgetName":"Details about \'{{widgetNamePlaceholder}}\'","name":"Name","value":"Value","loading":"Loading...","missingId":"Please provide nazione ID","notAuthenticated":"User is not authenticated.","download":"Download file"},"entities":{"nazione":{"id":"ID","name":"entities.nazione.name","descrizione":"entities.nazione.descrizione"}}}'
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
        o = n(45),
        i = n(21),
        r = { en: n(56) };
      function c(e, t) {
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
      var l = Object.keys(r).reduce(function(e, t) {
        return (function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? c(n, !0).forEach(function(t) {
                  Object(a.a)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : c(n).forEach(function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        })({}, e, Object(a.a)({}, t, { translation: r[t] }));
      }, {});
      o.a.use(i.a).init({ fallbackLng: 'en', resources: l, interpolation: { escapeValue: !1 } });
      n(78);
      var s = n(37),
        u = n(38),
        d = n(46),
        m = n(27),
        f = n(39),
        p = n(62),
        h = n(0),
        b = n.n(h),
        O = n(13),
        y = n.n(O),
        k = b.a.createContext(null);
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
        z = function(e) {
          var t = e.children,
            n = e.keycloak;
          return n.initialized && n.authenticated ? null : t;
        },
        D = n(121),
        N = (j.a.shape({ id: j.a.number, name: j.a.string, descrizione: j.a.string }), n(113)),
        S = n(117),
        C = n(116),
        R = n(114),
        A = n(115),
        I = function(e) {
          var t = e.t,
            n = e.nazione;
          return b.a.createElement(
            N.a,
            null,
            b.a.createElement(
              R.a,
              null,
              b.a.createElement(A.a, null, b.a.createElement(C.a, null, t('common.name')), b.a.createElement(C.a, null, t('common.value')))
            ),
            b.a.createElement(
              S.a,
              null,
              b.a.createElement(
                A.a,
                null,
                b.a.createElement(C.a, null, b.a.createElement('span', null, t(''.concat('entities.nazione.', 'id')))),
                b.a.createElement(C.a, null, b.a.createElement('span', null, n.id))
              ),
              b.a.createElement(
                A.a,
                null,
                b.a.createElement(C.a, null, b.a.createElement('span', null, t(''.concat('entities.nazione.', 'name')))),
                b.a.createElement(C.a, null, b.a.createElement('span', null, n.name))
              ),
              b.a.createElement(
                A.a,
                null,
                b.a.createElement(C.a, null, b.a.createElement('span', null, t(''.concat('entities.nazione.', 'descrizione')))),
                b.a.createElement(C.a, null, b.a.createElement('span', null, n.descrizione))
              )
            )
          );
        };
      I.defaultProps = { nazione: [] };
      var M = Object(i.b)()(I),
        F = function(e) {
          var t = e.t,
            n = e.nazione;
          return b.a.createElement(
            D.a,
            null,
            b.a.createElement('h3', null, t('common.widgetName', { widgetNamePlaceholder: 'Nazione' })),
            b.a.createElement(M, { nazione: n })
          );
        };
      F.defaultProps = { nazione: {} };
      var L = Object(i.b)()(F),
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
            o = t.status,
            i = t.message,
            r = t.onClose,
            c = !!i,
            l = o || e.INFO,
            s = Y[l],
            u = Z[l],
            d = b.a.createElement(
              'span',
              { className: a.message },
              b.a.createElement(s, { className: Object(T.a)(a.icon, a.iconStatus) }),
              i
            );
          return b.a.createElement(
            U.a,
            { open: c, onClose: r, autoHideDuration: u },
            b.a.createElement(x.a, {
              className: Object(T.a)(a[l], n),
              message: d,
              action: [
                b.a.createElement(
                  H.a,
                  { key: 'close', 'aria-label': 'close', color: 'inherit', onClick: r },
                  b.a.createElement(X.a, { className: a.icon })
                )
              ]
            })
          );
        };
      ($.SUCCESS = 'success'),
        ($.ERROR = 'error'),
        ($.defaultProps = { message: null, className: '', status: ($.INFO = 'info'), onClose: function() {} });
      var ee = Object(_.a)(
          function(e) {
            return {
              message: { display: 'flex', alignItems: 'center' },
              icon: { fontSize: 20 },
              iconStatus: { opacity: 0.9, marginRight: e.spacing(1) },
              success: { backgroundColor: K.a[600] },
              error: { backgroundColor: e.palette.error.dark },
              info: { backgroundColor: e.palette.primary.main }
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
      var oe = function() {
          return window && window.entando && window.entando.keycloak && window.entando.keycloak.authenticated
            ? window.entando.keycloak.token
            : '';
        },
        ie = (function(e) {
          function t(e) {
            var n;
            return (
              Object(s.a)(this, t),
              ((n = Object(d.a)(this, Object(m.a)(t).call(this, e))).state = {
                loading: !0,
                nazione: {},
                notificationStatus: null,
                notificationMessage: null
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
                }
              },
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  var t = this.props.keycloak,
                    n = t.initialized && t.authenticated,
                    a = e.keycloak.authenticated !== n;
                  n && a && this.fetchData();
                }
              },
              {
                key: 'fetchData',
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.id,
                    a = t.onError,
                    o = t.t,
                    i = t.keycloak;
                  i.initialized &&
                    i.authenticated &&
                    (n
                      ? (function() {
                          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.id,
                            n = e.options,
                            a = oe(),
                            o = ''
                              .concat(te)
                              .concat(te.endsWith('/') ? '' : '/', 'naziones/')
                              .concat(t),
                            i = { headers: new Headers({ Authorization: 'Bearer '.concat(a), 'Content-Type': 'application/json' }) };
                          return fetch(o, ae({ method: 'GET' }, i, {}, n))
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
                            return e.setState({ notificationStatus: null, notificationMessage: null, nazione: t });
                          })
                          .catch(function(t) {
                            a(t), e.setState({ notificationStatus: ee.ERROR, notificationMessage: o('common.couldNotFetchData') });
                          })
                          .finally(function() {
                            return e.setState({ loading: !1 });
                          })
                      : this.setState({ loading: !1, notificationStatus: ee.ERROR, notificationMessage: o('common.missingId') }));
                }
              },
              {
                key: 'closeNotification',
                value: function() {
                  this.setState({ notificationStatus: null, notificationMessage: null });
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.state,
                    t = e.nazione,
                    n = e.notificationStatus,
                    a = e.notificationMessage,
                    o = e.loading,
                    i = this.props,
                    r = i.t,
                    c = i.keycloak;
                  return b.a.createElement(
                    g.a,
                    { theme: this.theme },
                    b.a.createElement(z, { keycloak: c }, r('common.notAuthenticated')),
                    b.a.createElement(P, { keycloak: c }, o && r('common.loading'), !o && b.a.createElement(L, { nazione: t })),
                    b.a.createElement(ee, { status: n, message: a, onClose: this.closeNotification })
                  );
                }
              }
            ]),
            t
          );
        })(b.a.Component);
      ie.defaultProps = { onError: function() {} };
      var re,
        ce =
          ((re = Object(i.b)()(ie)),
          function(e) {
            return b.a.createElement(k.Consumer, null, function(t) {
              return b.a.createElement(re, Object.assign({}, e, { keycloak: t }));
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
            (window && window.entando && window.entando.keycloak && se({}, window.entando.keycloak, { initialized: !0 })) || {
              initialized: !1
            }
          );
        },
        de = (function(e) {
          function t() {
            var e, n;
            Object(s.a)(this, t);
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
            return (
              ((n = Object(d.a)(this, (e = Object(m.a)(t)).call.apply(e, [this].concat(o)))).mountPoint = null),
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
                  (this.mountPoint = document.createElement('div')), this.appendChild(this.mountPoint);
                  var t,
                    n,
                    a = this.getAttribute('locale') || 'en';
                  o.a.changeLanguage(a),
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
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.getAttribute('id'),
                    n = b.a.createElement(ce, {
                      id: t,
                      onError: function(t) {
                        var n = new CustomEvent(''.concat('nazione.details.', 'error'), { details: { error: t } });
                        e.dispatchEvent(n);
                      }
                    });
                  y.a.render(b.a.createElement(k.Provider, { value: this.keycloak }, n), this.mountPoint);
                }
              },
              {
                key: 'disconnectedCallback',
                value: function() {
                  this.unsubscribeFromKeycloakEvent && this.unsubscribeFromKeycloakEvent();
                }
              }
            ]),
            t
          );
        })(Object(p.a)(HTMLElement));
      customElements.define('nazione-details', de);
    }
  },
  [[68, 1, 2]]
]);
//# sourceMappingURL=main.a59820e8.chunk.js.map
