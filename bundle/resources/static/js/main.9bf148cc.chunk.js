(window['webpackJsonppersona-details-widget'] = window['webpackJsonppersona-details-widget'] || []).push([
  [0],
  {
    56: function(e) {
      e.exports = JSON.parse(
        '{"common":{"couldNotFetchData":"Unfortunately we could not fetch entity data","widgetName":"Details about \'{{widgetNamePlaceholder}}\'","name":"Name","value":"Value","loading":"Loading...","missingId":"Please provide persona ID","notAuthenticated":"User is not authenticated.","download":"Download file"},"entities":{"persona":{"id":"ID","nome":"entities.persona.nome","cognome":"entities.persona.cognome","codiceFiscale":"entities.persona.codiceFiscale","indirizzo":"entities.persona.indirizzo","numeroConsolato":"entities.persona.numeroConsolato"}}}'
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
        r = n(21),
        i = { en: n(56) };
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
      var l = Object.keys(i).reduce(function(e, t) {
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
        })({}, e, Object(a.a)({}, t, { translation: i[t] }));
      }, {});
      o.a.use(r.a).init({ fallbackLng: 'en', resources: l, interpolation: { escapeValue: !1 } });
      n(78);
      var s = n(37),
        u = n(38),
        m = n(46),
        d = n(27),
        p = n(39),
        f = n(62),
        h = n(0),
        b = n.n(h),
        E = n(13),
        O = n.n(E),
        y = b.a.createContext(null);
      var g = n(31),
        k = n(119),
        v = n(61),
        w = n(3),
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
        C = n(121),
        S =
          (j.a.shape({
            id: j.a.number,
            nome: j.a.string,
            cognome: j.a.string,
            codiceFiscale: j.a.string,
            indirizzo: j.a.string,
            numeroConsolato: j.a.string
          }),
          n(113)),
        N = n(117),
        z = n(116),
        F = n(114),
        R = n(115),
        A = function(e) {
          var t = e.t,
            n = e.persona;
          return b.a.createElement(
            S.a,
            null,
            b.a.createElement(
              F.a,
              null,
              b.a.createElement(R.a, null, b.a.createElement(z.a, null, t('common.name')), b.a.createElement(z.a, null, t('common.value')))
            ),
            b.a.createElement(
              N.a,
              null,
              b.a.createElement(
                R.a,
                null,
                b.a.createElement(z.a, null, b.a.createElement('span', null, t(''.concat('entities.persona.', 'id')))),
                b.a.createElement(z.a, null, b.a.createElement('span', null, n.id))
              ),
              b.a.createElement(
                R.a,
                null,
                b.a.createElement(z.a, null, b.a.createElement('span', null, t(''.concat('entities.persona.', 'nome')))),
                b.a.createElement(z.a, null, b.a.createElement('span', null, n.nome))
              ),
              b.a.createElement(
                R.a,
                null,
                b.a.createElement(z.a, null, b.a.createElement('span', null, t(''.concat('entities.persona.', 'cognome')))),
                b.a.createElement(z.a, null, b.a.createElement('span', null, n.cognome))
              ),
              b.a.createElement(
                R.a,
                null,
                b.a.createElement(z.a, null, b.a.createElement('span', null, t(''.concat('entities.persona.', 'codiceFiscale')))),
                b.a.createElement(z.a, null, b.a.createElement('span', null, n.codiceFiscale))
              ),
              b.a.createElement(
                R.a,
                null,
                b.a.createElement(z.a, null, b.a.createElement('span', null, t(''.concat('entities.persona.', 'indirizzo')))),
                b.a.createElement(z.a, null, b.a.createElement('span', null, n.indirizzo))
              ),
              b.a.createElement(
                R.a,
                null,
                b.a.createElement(z.a, null, b.a.createElement('span', null, t(''.concat('entities.persona.', 'numeroConsolato')))),
                b.a.createElement(z.a, null, b.a.createElement('span', null, n.numeroConsolato))
              )
            )
          );
        };
      A.defaultProps = { persona: [] };
      var I = Object(r.b)()(A),
        M = function(e) {
          var t = e.t,
            n = e.persona;
          return b.a.createElement(
            C.a,
            null,
            b.a.createElement('h3', null, t('common.widgetName', { widgetNamePlaceholder: 'Persona' })),
            b.a.createElement(I, { persona: n })
          );
        };
      M.defaultProps = { persona: {} };
      var L = Object(r.b)()(M),
        T = n(4),
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
            r = t.message,
            i = t.onClose,
            c = !!r,
            l = o || e.INFO,
            s = Y[l],
            u = Z[l],
            m = b.a.createElement(
              'span',
              { className: a.message },
              b.a.createElement(s, { className: Object(T.a)(a.icon, a.iconStatus) }),
              r
            );
          return b.a.createElement(
            U.a,
            { open: c, onClose: i, autoHideDuration: u },
            b.a.createElement(x.a, {
              className: Object(T.a)(a[l], n),
              message: m,
              action: [
                b.a.createElement(
                  H.a,
                  { key: 'close', 'aria-label': 'close', color: 'inherit', onClick: i },
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
        re = (function(e) {
          function t(e) {
            var n;
            return (
              Object(s.a)(this, t),
              ((n = Object(m.a)(this, Object(d.a)(t).call(this, e))).state = {
                loading: !0,
                persona: {},
                notificationStatus: null,
                notificationMessage: null
              }),
              (n.theme = Object(v.a)()),
              (n.closeNotification = n.closeNotification.bind(Object(g.a)(n))),
              (n.fetchData = n.fetchData.bind(Object(g.a)(n))),
              n
            );
          }
          return (
            Object(p.a)(t, e),
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
                    r = t.keycloak;
                  r.initialized &&
                    r.authenticated &&
                    (n
                      ? (function() {
                          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.id,
                            n = e.options,
                            a = oe(),
                            o = ''
                              .concat(te)
                              .concat(te.endsWith('/') ? '' : '/', 'personas/')
                              .concat(t),
                            r = { headers: new Headers({ Authorization: 'Bearer '.concat(a), 'Content-Type': 'application/json' }) };
                          return fetch(o, ae({ method: 'GET' }, r, {}, n))
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
                            return e.setState({ notificationStatus: null, notificationMessage: null, persona: t });
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
                    t = e.persona,
                    n = e.notificationStatus,
                    a = e.notificationMessage,
                    o = e.loading,
                    r = this.props,
                    i = r.t,
                    c = r.keycloak;
                  return b.a.createElement(
                    k.a,
                    { theme: this.theme },
                    b.a.createElement(D, { keycloak: c }, i('common.notAuthenticated')),
                    b.a.createElement(P, { keycloak: c }, o && i('common.loading'), !o && b.a.createElement(L, { persona: t })),
                    b.a.createElement(ee, { status: n, message: a, onClose: this.closeNotification })
                  );
                }
              }
            ]),
            t
          );
        })(b.a.Component);
      re.defaultProps = { onError: function() {} };
      var ie,
        ce =
          ((ie = Object(r.b)()(re)),
          function(e) {
            return b.a.createElement(y.Consumer, null, function(t) {
              return b.a.createElement(ie, Object.assign({}, e, { keycloak: t }));
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
        me = (function(e) {
          function t() {
            var e, n;
            Object(s.a)(this, t);
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++) o[r] = arguments[r];
            return (
              ((n = Object(m.a)(this, (e = Object(d.a)(t)).call.apply(e, [this].concat(o)))).mountPoint = null),
              (n.unsubscribeFromKeycloakEvent = null),
              (n.keycloak = ue()),
              n
            );
          }
          return (
            Object(p.a)(t, e),
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
                        var n = new CustomEvent(''.concat('persona.details.', 'error'), { details: { error: t } });
                        e.dispatchEvent(n);
                      }
                    });
                  O.a.render(b.a.createElement(y.Provider, { value: this.keycloak }, n), this.mountPoint);
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
        })(Object(f.a)(HTMLElement));
      customElements.define('persona-details', me);
    }
  },
  [[68, 1, 2]]
]);
//# sourceMappingURL=main.9bf148cc.chunk.js.map
