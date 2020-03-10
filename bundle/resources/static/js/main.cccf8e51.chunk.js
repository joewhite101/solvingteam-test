(window['webpackJsonpnazione-form-widget'] = window['webpackJsonpnazione-form-widget'] || []).push([
  [0],
  {
    164: function(e) {
      e.exports = JSON.parse(
        '{"error":{"dataLoading":"Error during server connection"},"common":{"save":"Save","dataSaved":"Data successfully saved","notAuthenticated":"User is not authenticated.","selectFile":"Upload new file","selectImageFile":"Upload new image","download":"Download"},"validation":{"required":"{{field}} is required"},"entities":{"nazione":{"id":"ID","name":"entities.nazione.name","descrizione":"entities.nazione.descrizione"}}}'
      );
    },
    187: function(e, t, n) {
      e.exports = n(335);
    },
    335: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(33),
        r = n(34),
        i = n(38),
        o = n(25),
        c = n(35),
        s = n(176),
        u = n(40),
        l = n(0),
        d = n.n(l),
        f = n(7),
        p = n.n(f),
        h = n(157),
        b = n.n(h),
        m = n(374),
        v = n(378),
        O = n(372),
        y = n(175),
        k = n(12),
        g = d.a.createContext(null);
      function E(e) {
        return function(t) {
          return d.a.createElement(g.Consumer, null, function(n) {
            return d.a.createElement(e, Object.assign({}, t, { keycloak: n }));
          });
        };
      }
      var j = n(59),
        w = n(110),
        S = n(37),
        z = { en: n(164) };
      function P(e, t) {
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
      var C = Object.keys(z).reduce(function(e, t) {
          return (function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? P(n, !0).forEach(function(t) {
                    Object(u.a)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : P(n).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  });
            }
            return e;
          })({}, e, Object(u.a)({}, t, Object(u.a)({}, 'translation', z[t])));
        }, {}),
        x = w.a.t,
        N = function(e) {
          !(function(e, t) {
            w.a
              .use(S.a)
              .init({
                defaultNs: 'translation',
                interpolation: { escapeValue: !1 },
                resources: C,
                lng: e || t,
                fallbackLng: t,
                react: { useSuspense: !1 }
              });
          })(e, 'en'),
            (function(e) {
              var t = {
                mixed: {
                  required: function(t) {
                    var n = t.path;
                    return e('validation.required', { field: e('entities.nazione.'.concat(n)) });
                  }
                }
              };
              j.setLocale(t);
            })(x);
        },
        D = function(e) {
          return function(t) {
            return (function(e, t) {
              var n = new CustomEvent(e, { detail: { payload: t } });
              window.dispatchEvent(n);
            })(e, t);
          };
        },
        F = { tableAdd: 'nazione.table.add', tableSelect: 'nazione.table.select' },
        U = {
          create: 'nazione.form.create',
          update: 'nazione.form.update',
          errorCreate: 'nazione.form.errorCreate',
          errorUpdate: 'nazione.form.errorUpdate'
        },
        T = n(15),
        A = n.n(T),
        M = n(30),
        R = n(39),
        L = n(3),
        H = n.n(L),
        I =
          (H.a.shape({ initialized: H.a.bool, authenticated: H.a.bool }),
          function(e) {
            var t = e.children,
              n = e.keycloak;
            return n.initialized && n.authenticated ? t : null;
          }),
        W = function(e) {
          var t = e.children,
            n = e.keycloak;
          return n.initialized && n.authenticated ? null : t;
        },
        B = Object({ NODE_ENV: 'production', PUBLIC_URL: '' }).REACT_APP_DOMAIN;
      function J(e, t) {
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
      function K(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? J(n, !0).forEach(function(t) {
                Object(u.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : J(n).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var q = function() {
          return {
            headers: new Headers({
              Authorization: 'Bearer '.concat(
                window && window.entando && window.entando.keycloak && window.entando.keycloak.authenticated
                  ? window.entando.keycloak.token
                  : ''
              ),
              'Content-Type': 'application/json'
            })
          };
        },
        V = (function() {
          var e = Object(M.a)(
            A.a.mark(function e(t, n) {
              var a;
              return A.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), fetch(t, n);
                    case 2:
                      return (
                        (a = e.sent),
                        e.abrupt(
                          'return',
                          a.status >= 200 && a.status < 300 ? a.json() : Promise.reject(new Error(a.statusText || a.status))
                        )
                      );
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t, n) {
            return e.apply(this, arguments);
          };
        })(),
        _ = (function() {
          var e = Object(M.a)(
            A.a.mark(function e(t) {
              var n, a;
              return A.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = ''
                          .concat(B, '/')
                          .concat('naziones', '/')
                          .concat(t)),
                        (a = K({}, q(), { method: 'GET' })),
                        e.abrupt('return', V(n, a))
                      );
                    case 3:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        G = (function() {
          var e = Object(M.a)(
            A.a.mark(function e(t) {
              var n, a;
              return A.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = ''.concat(B, '/').concat('naziones')),
                        (a = K({}, q(), { method: 'POST', body: t ? JSON.stringify(t) : null })),
                        e.abrupt('return', V(n, a))
                      );
                    case 3:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        Q = (function() {
          var e = Object(M.a)(
            A.a.mark(function e(t) {
              var n, a;
              return A.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = ''.concat(B, '/').concat('naziones')),
                        (a = K({}, q(), { method: 'PUT', body: t ? JSON.stringify(t) : null })),
                        e.abrupt('return', V(n, a))
                      );
                    case 3:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        X = n(4),
        Y = n(377),
        Z = n(376),
        $ = n(365),
        ee = n(5),
        te = n(369),
        ne = n(166),
        ae = n.n(ne),
        re = n(167),
        ie = n.n(re),
        oe = n(165),
        ce = n.n(oe),
        se = n(168),
        ue = n.n(se),
        le = { success: ce.a, error: ae.a, info: ie.a },
        de = { success: 3e3, error: null, info: 5e3 },
        fe = function e(t) {
          var n = t.className,
            a = t.classes,
            r = t.status,
            i = t.message,
            o = t.onClose,
            c = !!i,
            s = r || e.INFO,
            u = le[s],
            l = de[s],
            f = d.a.createElement(
              'span',
              { className: a.message },
              d.a.createElement(u, { className: Object(X.a)(a.icon, a.iconStatus) }),
              i
            );
          return d.a.createElement(
            Y.a,
            { open: c, onClose: o, autoHideDuration: l },
            d.a.createElement(Z.a, {
              className: Object(X.a)(a[s], n),
              message: f,
              action: [
                d.a.createElement(
                  te.a,
                  { key: 'close', 'aria-label': 'close', color: 'inherit', onClick: o },
                  d.a.createElement(ue.a, { className: a.icon })
                )
              ]
            })
          );
        };
      (fe.SUCCESS = 'success'),
        (fe.ERROR = 'error'),
        (fe.defaultProps = { message: null, className: '', status: (fe.INFO = 'info'), onClose: function() {} });
      var pe = Object(ee.a)(
          function(e) {
            return {
              message: { display: 'flex', alignItems: 'center' },
              icon: { fontSize: 20 },
              iconStatus: { opacity: 0.9, marginRight: e.spacing(1) },
              success: { backgroundColor: $.a[600] },
              error: { backgroundColor: e.palette.error.dark },
              info: { backgroundColor: e.palette.primary.main }
            };
          },
          { withTheme: !0 }
        )(fe),
        he =
          (H.a.shape({ id: H.a.number, name: H.a.string, descrizione: H.a.string }),
          H.a.shape({ name: H.a.string, descrizione: H.a.string }),
          H.a.shape({ name: H.a.oneOfType([H.a.bool, H.a.shape()]), descrizione: H.a.oneOfType([H.a.bool, H.a.shape()]) }),
          H.a.shape({ name: H.a.oneOfType([H.a.string, H.a.shape()]), descrizione: H.a.oneOfType([H.a.string, H.a.shape()]) }),
          n(174)),
        be = n(177),
        me = n(371),
        ve = n(370),
        Oe = n(373),
        ye = (function(e) {
          function t() {
            return Object(a.a)(this, t), Object(i.a)(this, Object(o.a)(t).apply(this, arguments));
          }
          return (
            Object(c.a)(t, e),
            Object(r.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.classes,
                    n = e.values,
                    a = e.touched,
                    r = e.errors,
                    i = e.handleChange,
                    o = e.handleBlur,
                    c = e.handleSubmit,
                    s = e.isSubmitting,
                    u = (e.setFieldValue, e.t),
                    l =
                      (e.i18n,
                      function(e) {
                        return r[e] && a[e] ? r[e] : '';
                      });
                  return d.a.createElement(
                    'form',
                    {
                      onSubmit: function(e) {
                        e.stopPropagation(), c(e);
                      },
                      className: t.root,
                      'data-testid': 'nazione-form'
                    },
                    d.a.createElement(
                      ve.a,
                      { container: !0, spacing: 2 },
                      d.a.createElement(
                        ve.a,
                        { item: !0, xs: 12, sm: 6 },
                        d.a.createElement(Oe.a, {
                          id: 'nazione-name',
                          error: r.name && a.name,
                          helperText: l('name'),
                          className: t.textField,
                          onChange: i,
                          onBlur: o,
                          value: n.name,
                          name: 'name',
                          label: u('entities.nazione.name')
                        })
                      ),
                      d.a.createElement(
                        ve.a,
                        { item: !0, xs: 12, sm: 6 },
                        d.a.createElement(Oe.a, {
                          id: 'nazione-descrizione',
                          error: r.descrizione && a.descrizione,
                          helperText: l('descrizione'),
                          className: t.textField,
                          onChange: i,
                          onBlur: o,
                          value: n.descrizione,
                          name: 'descrizione',
                          label: u('entities.nazione.descrizione')
                        })
                      ),
                      d.a.createElement(
                        me.a,
                        { type: 'submit', color: 'primary', disabled: s, 'data-testid': 'submit-btn' },
                        u('common.save')
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(l.PureComponent);
      ye.defaultProps = { classes: {}, values: {}, touched: {}, errors: {} };
      var ke = { name: '', descrizione: '' },
        ge = {
          mapPropsToValues: function(e) {
            return e.nazione || ke;
          },
          enableReinitialize: !0,
          validationSchema: j.object().shape({ name: j.string(), descrizione: j.string() }),
          handleSubmit: function(e, t) {
            var n = t.setSubmitting;
            (0, t.props.onSubmit)(e), n(!1);
          },
          displayName: 'NazioneForm'
        },
        Ee = Object(be.a)(
          Object(ee.a)(
            function(e) {
              return { root: { margin: e.spacing(3) }, textField: { width: '100%' } };
            },
            { withTheme: !0 }
          ),
          Object(S.b)(),
          Object(he.a)(ge)
        )(ye),
        je = (function(e) {
          function t(e) {
            var n;
            return (
              Object(a.a)(this, t),
              ((n = Object(i.a)(this, Object(o.a)(t).call(this, e))).state = { notificationMessage: null, notificationStatus: null }),
              (n.closeNotification = n.closeNotification.bind(Object(R.a)(n))),
              (n.handleSubmit = n.handleSubmit.bind(Object(R.a)(n))),
              n
            );
          }
          return (
            Object(c.a)(t, e),
            Object(r.a)(t, [
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
                  var t = this.props,
                    n = t.keycloak,
                    a = t.id,
                    r = n.initialized && n.authenticated,
                    i = e.keycloak.authenticated !== r,
                    o = a && a !== e.id;
                  r && (o || i) && this.fetchData();
                }
              },
              {
                key: 'fetchData',
                value: (function() {
                  var e = Object(M.a)(
                    A.a.mark(function e() {
                      var t, n, a, r;
                      return A.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (((t = this.props), (n = t.keycloak), (a = t.id), !(n.initialized && n.authenticated) || !a)) {
                                  e.next = 13;
                                  break;
                                }
                                return (e.prev = 3), (e.next = 6), _(a);
                              case 6:
                                (r = e.sent),
                                  this.setState(function() {
                                    return { nazione: r };
                                  }),
                                  (e.next = 13);
                                break;
                              case 10:
                                (e.prev = 10), (e.t0 = e.catch(3)), this.handleError(e.t0);
                              case 13:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[3, 10]]
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: 'closeNotification',
                value: function() {
                  this.setState(function() {
                    return { notificationMessage: null };
                  });
                }
              },
              {
                key: 'handleSubmit',
                value: (function() {
                  var e = Object(M.a)(
                    A.a.mark(function e(t) {
                      var n, a, r, i, o;
                      return A.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n = this.props), (a = n.t), (r = n.onUpdate), (i = n.keycloak), !(i.initialized && i.authenticated))
                                ) {
                                  e.next = 14;
                                  break;
                                }
                                return (e.prev = 3), (e.next = 6), Q(t);
                              case 6:
                                (o = e.sent),
                                  r(o),
                                  this.setState({ nazione: o, notificationMessage: a('common.dataSaved'), notificationStatus: pe.SUCCESS }),
                                  (e.next = 14);
                                break;
                              case 11:
                                (e.prev = 11), (e.t0 = e.catch(3)), this.handleError(e.t0);
                              case 14:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[3, 11]]
                      );
                    })
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: 'handleError',
                value: function(e) {
                  var t = this.props,
                    n = t.t;
                  (0, t.onError)(e),
                    this.setState(function() {
                      return { notificationMessage: n('error.dataLoading'), notificationStatus: pe.ERROR };
                    });
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.keycloak,
                    n = e.t,
                    a = this.state,
                    r = a.notificationMessage,
                    i = a.notificationStatus,
                    o = a.nazione;
                  return d.a.createElement(
                    d.a.Fragment,
                    null,
                    d.a.createElement(W, { keycloak: t }, n('common.notAuthenticated')),
                    d.a.createElement(I, { keycloak: t }, d.a.createElement(Ee, { nazione: o, onSubmit: this.handleSubmit })),
                    d.a.createElement(pe, { status: i, message: r, onClose: this.closeNotification })
                  );
                }
              }
            ]),
            t
          );
        })(l.PureComponent);
      je.defaultProps = { onUpdate: function() {}, onError: function() {} };
      var we = E(Object(S.b)()(je)),
        Se = (function(e) {
          function t(e) {
            var n;
            return (
              Object(a.a)(this, t),
              ((n = Object(i.a)(this, Object(o.a)(t).call(this, e))).state = { notificationMessage: null, notificationStatus: null }),
              (n.closeNotification = n.closeNotification.bind(Object(R.a)(n))),
              (n.handleSubmit = n.handleSubmit.bind(Object(R.a)(n))),
              n
            );
          }
          return (
            Object(c.a)(t, e),
            Object(r.a)(t, [
              {
                key: 'closeNotification',
                value: function() {
                  this.setState({ notificationMessage: null, notificationStatus: null });
                }
              },
              {
                key: 'handleSubmit',
                value: (function() {
                  var e = Object(M.a)(
                    A.a.mark(function e(t) {
                      var n, a, r, i, o;
                      return A.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n = this.props), (a = n.t), (r = n.onCreate), (i = n.keycloak), !(i.initialized && i.authenticated))
                                ) {
                                  e.next = 14;
                                  break;
                                }
                                return (e.prev = 3), (e.next = 6), G(t);
                              case 6:
                                (o = e.sent),
                                  r(o),
                                  this.setState({ notificationMessage: a('common.dataSaved'), notificationStatus: pe.SUCCESS }),
                                  (e.next = 14);
                                break;
                              case 11:
                                (e.prev = 11), (e.t0 = e.catch(3)), this.handleError(e.t0);
                              case 14:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[3, 11]]
                      );
                    })
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: 'handleError',
                value: function(e) {
                  var t = this.props,
                    n = t.onError,
                    a = t.t;
                  n(e), this.setState({ notificationMessage: a('error.dataLoading'), notificationStatus: pe.ERROR });
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.keycloak,
                    n = e.t,
                    a = this.state,
                    r = a.notificationMessage,
                    i = a.notificationStatus;
                  return d.a.createElement(
                    d.a.Fragment,
                    null,
                    d.a.createElement(W, { keycloak: t }, n('common.notAuthenticated')),
                    d.a.createElement(I, { keycloak: t }, d.a.createElement(Ee, { onSubmit: this.handleSubmit })),
                    d.a.createElement(pe, { status: i, message: r, onClose: this.closeNotification })
                  );
                }
              }
            ]),
            t
          );
        })(l.PureComponent);
      Se.defaultProps = { onError: function() {}, onCreate: function() {} };
      var ze = E(Object(S.b)()(Se));
      function Pe(e, t) {
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
      function Ce(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Pe(n, !0).forEach(function(t) {
                Object(u.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Pe(n).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var xe = function() {
          return (
            (window && window.entando && window.entando.keycloak && Ce({}, window.entando.keycloak, { initialized: !0 })) || {
              initialized: !1
            }
          );
        },
        Ne = { id: 'id', hidden: 'hidden', locale: 'locale', disableDefaultEventHandler: 'disable-default-event-handler' },
        De = (function(e) {
          function t() {
            var e, n;
            Object(a.a)(this, t);
            for (var r = arguments.length, c = new Array(r), s = 0; s < r; s++) c[s] = arguments[s];
            return (
              ((n = Object(i.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(c)))).keycloak = xe()),
              (n.onCreate = D(U.create)),
              (n.onUpdate = D(U.update)),
              (n.onErrorCreate = D(U.errorCreate)),
              (n.onErrorUpdate = D(U.errorUpdate)),
              n
            );
          }
          return (
            Object(c.a)(t, e),
            Object(r.a)(
              t,
              [
                {
                  key: 'attributeChangedCallback',
                  value: function(e, t, n) {
                    if (this.mountPoint && t !== n) {
                      if (!Object.values(Ne).includes(e)) throw new Error('Untracked changed attribute: '.concat(e));
                      this.render();
                    }
                  }
                },
                {
                  key: 'connectedCallback',
                  value: function() {
                    var e = this;
                    this.mountPoint = document.createElement('div');
                    var t,
                      n,
                      a = this.attachShadow({ mode: 'open' });
                    a.appendChild(this.mountPoint),
                      (this.jss = Object(k.b)(Ce({}, Object(m.a)(), { insertionPoint: this.mountPoint }))),
                      (this.muiTheme = Object(y.a)({
                        props: { MuiDialog: { container: this.mountPoint }, MuiPopover: { container: this.mountPoint } }
                      })),
                      (this.keycloak = Ce({}, xe(), { initialized: !0 })),
                      (this.unsubscribeFromKeycloakEvent =
                        ((t = 'keycloak'),
                        (n = function() {
                          (e.keycloak = Ce({}, xe(), { initialized: !0 })), e.render();
                        }),
                        window.addEventListener(t, n),
                        function() {
                          window.removeEventListener(t, n);
                        })),
                      this.render(),
                      b()(a);
                  }
                },
                {
                  key: 'disconnectedCallback',
                  value: function() {
                    this.unsubscribeFromWidgetEvents && this.unsubscribeFromWidgetEvents(),
                      this.unsubscribeFromKeycloakEvent && this.unsubscribeFromKeycloakEvent();
                  }
                },
                {
                  key: 'defaultWidgetEventHandler',
                  value: function() {
                    var e = this;
                    return function(t) {
                      var n = F.tableAdd,
                        a = F.tableSelect,
                        r = Ne.id;
                      switch (t.type) {
                        case n:
                          e.setAttribute(r, '');
                          break;
                        case a:
                          e.setAttribute(r, t.detail.payload.id);
                          break;
                        default:
                          throw new Error('Unsupported event: '.concat(t.type));
                      }
                    };
                  }
                },
                {
                  key: 'render',
                  value: function() {
                    if ('true' === this.getAttribute(Ne.hidden)) p.a.render(d.a.createElement(d.a.Fragment, null));
                    else {
                      var e,
                        t,
                        n = this.getAttribute(Ne.locale);
                      if ((N(n), 'true' === this.getAttribute(Ne.disableDefaultEventHandler)))
                        this.unsubscribeFromWidgetEvents && this.unsubscribeFromWidgetEvents(),
                          this.unsubscribeFromKeycloakEvent && this.unsubscribeFromKeycloakEvent();
                      else {
                        var a = this.defaultWidgetEventHandler();
                        this.unsubscribeFromWidgetEvents =
                          ((e = Object.values(F)),
                          (t = a),
                          e.forEach(function(e) {
                            return window.addEventListener(e, t);
                          }),
                          function() {
                            e.forEach(function(e) {
                              return window.removeEventListener(e, t);
                            });
                          });
                      }
                      var r = this.getAttribute(Ne.id),
                        i = r
                          ? d.a.createElement(we, { id: r, onUpdate: this.onUpdate, onError: this.onErrorUpdate }, null)
                          : d.a.createElement(ze, { onCreate: this.onCreate, onError: this.onErrorCreate }, null);
                      p.a.render(
                        d.a.createElement(
                          g.Provider,
                          { value: this.keycloak },
                          d.a.createElement(v.b, { jss: this.jss }, d.a.createElement(O.a, { theme: this.muiTheme }, i))
                        ),
                        this.mountPoint
                      );
                    }
                  }
                }
              ],
              [
                {
                  key: 'observedAttributes',
                  get: function() {
                    return Object.values(Ne);
                  }
                }
              ]
            ),
            t
          );
        })(Object(s.a)(HTMLElement));
      customElements.define('nazione-form', De);
    }
  },
  [[187, 1, 2]]
]);
//# sourceMappingURL=main.cccf8e51.chunk.js.map
