(window['webpackJsonppersona-form-widget'] = window['webpackJsonppersona-form-widget'] || []).push([
  [0],
  {
    164: function(e) {
      e.exports = JSON.parse(
        '{"error":{"dataLoading":"Error during server connection"},"common":{"save":"Save","dataSaved":"Data successfully saved","notAuthenticated":"User is not authenticated.","selectFile":"Upload new file","selectImageFile":"Upload new image","download":"Download"},"validation":{"required":"{{field}} is required"},"entities":{"persona":{"id":"ID","nome":"entities.persona.nome","cognome":"entities.persona.cognome","codiceFiscale":"entities.persona.codiceFiscale","indirizzo":"entities.persona.indirizzo","numeroConsolato":"entities.persona.numeroConsolato"}}}'
      );
    },
    187: function(e, t, n) {
      e.exports = n(335);
    },
    335: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(34),
        r = n(35),
        o = n(39),
        i = n(25),
        c = n(36),
        s = n(176),
        u = n(41),
        l = n(0),
        d = n.n(l),
        p = n(7),
        m = n.n(p),
        f = n(157),
        h = n.n(f),
        b = n(374),
        v = n(378),
        g = n(372),
        O = n(175),
        y = n(12),
        k = d.a.createContext(null);
      function E(e) {
        return function(t) {
          return d.a.createElement(k.Consumer, null, function(n) {
            return d.a.createElement(e, Object.assign({}, t, { keycloak: n }));
          });
        };
      }
      var j = n(32),
        w = n(110),
        S = n(38),
        C = { en: n(164) };
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
      var z = Object.keys(C).reduce(function(e, t) {
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
          })({}, e, Object(u.a)({}, t, Object(u.a)({}, 'translation', C[t])));
        }, {}),
        F = w.a.t,
        x = function(e) {
          !(function(e, t) {
            w.a
              .use(S.a)
              .init({
                defaultNs: 'translation',
                interpolation: { escapeValue: !1 },
                resources: z,
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
                    return e('validation.required', { field: e('entities.persona.'.concat(n)) });
                  }
                }
              };
              j.setLocale(t);
            })(F);
        },
        N = function(e) {
          return function(t) {
            return (function(e, t) {
              var n = new CustomEvent(e, { detail: { payload: t } });
              window.dispatchEvent(n);
            })(e, t);
          };
        },
        T = { tableAdd: 'persona.table.add', tableSelect: 'persona.table.select' },
        D = {
          create: 'persona.form.create',
          update: 'persona.form.update',
          errorCreate: 'persona.form.errorCreate',
          errorUpdate: 'persona.form.errorUpdate'
        },
        U = n(15),
        A = n.n(U),
        M = n(30),
        R = n(40),
        L = n(2),
        B = n.n(L),
        H =
          (B.a.shape({ initialized: B.a.bool, authenticated: B.a.bool }),
          function(e) {
            var t = e.children,
              n = e.keycloak;
            return n.initialized && n.authenticated ? t : null;
          }),
        I = function(e) {
          var t = e.children,
            n = e.keycloak;
          return n.initialized && n.authenticated ? null : t;
        },
        W = Object({ NODE_ENV: 'production', PUBLIC_URL: '' }).REACT_APP_DOMAIN;
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
                          .concat(W, '/')
                          .concat('personas', '/')
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
                        (n = ''.concat(W, '/').concat('personas')),
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
                        (n = ''.concat(W, '/').concat('personas')),
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
        oe = n.n(re),
        ie = n(165),
        ce = n.n(ie),
        se = n(168),
        ue = n.n(se),
        le = { success: ce.a, error: ae.a, info: oe.a },
        de = { success: 3e3, error: null, info: 5e3 },
        pe = function e(t) {
          var n = t.className,
            a = t.classes,
            r = t.status,
            o = t.message,
            i = t.onClose,
            c = !!o,
            s = r || e.INFO,
            u = le[s],
            l = de[s],
            p = d.a.createElement(
              'span',
              { className: a.message },
              d.a.createElement(u, { className: Object(X.a)(a.icon, a.iconStatus) }),
              o
            );
          return d.a.createElement(
            Y.a,
            { open: c, onClose: i, autoHideDuration: l },
            d.a.createElement(Z.a, {
              className: Object(X.a)(a[s], n),
              message: p,
              action: [
                d.a.createElement(
                  te.a,
                  { key: 'close', 'aria-label': 'close', color: 'inherit', onClick: i },
                  d.a.createElement(ue.a, { className: a.icon })
                )
              ]
            })
          );
        };
      (pe.SUCCESS = 'success'),
        (pe.ERROR = 'error'),
        (pe.defaultProps = { message: null, className: '', status: (pe.INFO = 'info'), onClose: function() {} });
      var me = Object(ee.a)(
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
        )(pe),
        fe =
          (B.a.shape({
            id: B.a.number,
            nome: B.a.string,
            cognome: B.a.string,
            codiceFiscale: B.a.string,
            indirizzo: B.a.string,
            numeroConsolato: B.a.string
          }),
          B.a.shape({
            nome: B.a.string,
            cognome: B.a.string,
            codiceFiscale: B.a.string,
            indirizzo: B.a.string,
            numeroConsolato: B.a.string
          }),
          B.a.shape({
            nome: B.a.oneOfType([B.a.bool, B.a.shape()]),
            cognome: B.a.oneOfType([B.a.bool, B.a.shape()]),
            codiceFiscale: B.a.oneOfType([B.a.bool, B.a.shape()]),
            indirizzo: B.a.oneOfType([B.a.bool, B.a.shape()]),
            numeroConsolato: B.a.oneOfType([B.a.bool, B.a.shape()])
          }),
          B.a.shape({
            nome: B.a.oneOfType([B.a.string, B.a.shape()]),
            cognome: B.a.oneOfType([B.a.string, B.a.shape()]),
            codiceFiscale: B.a.oneOfType([B.a.string, B.a.shape()]),
            indirizzo: B.a.oneOfType([B.a.string, B.a.shape()]),
            numeroConsolato: B.a.oneOfType([B.a.string, B.a.shape()])
          }),
          n(174)),
        he = n(177),
        be = n(371),
        ve = n(370),
        ge = n(373),
        Oe = (function(e) {
          function t() {
            return Object(a.a)(this, t), Object(o.a)(this, Object(i.a)(t).apply(this, arguments));
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
                    o = e.handleChange,
                    i = e.handleBlur,
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
                      'data-testid': 'persona-form'
                    },
                    d.a.createElement(
                      ve.a,
                      { container: !0, spacing: 2 },
                      d.a.createElement(
                        ve.a,
                        { item: !0, xs: 12, sm: 6 },
                        d.a.createElement(ge.a, {
                          id: 'persona-nome',
                          error: r.nome && a.nome,
                          helperText: l('nome'),
                          className: t.textField,
                          onChange: o,
                          onBlur: i,
                          value: n.nome,
                          name: 'nome',
                          label: u('entities.persona.nome')
                        })
                      ),
                      d.a.createElement(
                        ve.a,
                        { item: !0, xs: 12, sm: 6 },
                        d.a.createElement(ge.a, {
                          id: 'persona-cognome',
                          error: r.cognome && a.cognome,
                          helperText: l('cognome'),
                          className: t.textField,
                          onChange: o,
                          onBlur: i,
                          value: n.cognome,
                          name: 'cognome',
                          label: u('entities.persona.cognome')
                        })
                      ),
                      d.a.createElement(
                        ve.a,
                        { item: !0, xs: 12, sm: 6 },
                        d.a.createElement(ge.a, {
                          id: 'persona-codiceFiscale',
                          error: r.codiceFiscale && a.codiceFiscale,
                          helperText: l('codiceFiscale'),
                          className: t.textField,
                          onChange: o,
                          onBlur: i,
                          value: n.codiceFiscale,
                          name: 'codiceFiscale',
                          label: u('entities.persona.codiceFiscale')
                        })
                      ),
                      d.a.createElement(
                        ve.a,
                        { item: !0, xs: 12, sm: 6 },
                        d.a.createElement(ge.a, {
                          id: 'persona-indirizzo',
                          error: r.indirizzo && a.indirizzo,
                          helperText: l('indirizzo'),
                          className: t.textField,
                          onChange: o,
                          onBlur: i,
                          value: n.indirizzo,
                          name: 'indirizzo',
                          label: u('entities.persona.indirizzo')
                        })
                      ),
                      d.a.createElement(
                        ve.a,
                        { item: !0, xs: 12, sm: 6 },
                        d.a.createElement(ge.a, {
                          id: 'persona-numeroConsolato',
                          error: r.numeroConsolato && a.numeroConsolato,
                          helperText: l('numeroConsolato'),
                          className: t.textField,
                          onChange: o,
                          onBlur: i,
                          value: n.numeroConsolato,
                          name: 'numeroConsolato',
                          label: u('entities.persona.numeroConsolato')
                        })
                      ),
                      d.a.createElement(
                        be.a,
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
      Oe.defaultProps = { classes: {}, values: {}, touched: {}, errors: {} };
      var ye = { nome: '', cognome: '', codiceFiscale: '', indirizzo: '', numeroConsolato: '' },
        ke = {
          mapPropsToValues: function(e) {
            return e.persona || ye;
          },
          enableReinitialize: !0,
          validationSchema: j
            .object()
            .shape({
              nome: j.string(),
              cognome: j.string(),
              codiceFiscale: j.string(),
              indirizzo: j.string(),
              numeroConsolato: j.string()
            }),
          handleSubmit: function(e, t) {
            var n = t.setSubmitting;
            (0, t.props.onSubmit)(e), n(!1);
          },
          displayName: 'PersonaForm'
        },
        Ee = Object(he.a)(
          Object(ee.a)(
            function(e) {
              return { root: { margin: e.spacing(3) }, textField: { width: '100%' } };
            },
            { withTheme: !0 }
          ),
          Object(S.b)(),
          Object(fe.a)(ke)
        )(Oe),
        je = (function(e) {
          function t(e) {
            var n;
            return (
              Object(a.a)(this, t),
              ((n = Object(o.a)(this, Object(i.a)(t).call(this, e))).state = { notificationMessage: null, notificationStatus: null }),
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
                    o = e.keycloak.authenticated !== r,
                    i = a && a !== e.id;
                  r && (i || o) && this.fetchData();
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
                                    return { persona: r };
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
                      var n, a, r, o, i;
                      return A.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n = this.props), (a = n.t), (r = n.onUpdate), (o = n.keycloak), !(o.initialized && o.authenticated))
                                ) {
                                  e.next = 14;
                                  break;
                                }
                                return (e.prev = 3), (e.next = 6), Q(t);
                              case 6:
                                (i = e.sent),
                                  r(i),
                                  this.setState({ persona: i, notificationMessage: a('common.dataSaved'), notificationStatus: me.SUCCESS }),
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
                      return { notificationMessage: n('error.dataLoading'), notificationStatus: me.ERROR };
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
                    o = a.notificationStatus,
                    i = a.persona;
                  return d.a.createElement(
                    d.a.Fragment,
                    null,
                    d.a.createElement(I, { keycloak: t }, n('common.notAuthenticated')),
                    d.a.createElement(H, { keycloak: t }, d.a.createElement(Ee, { persona: i, onSubmit: this.handleSubmit })),
                    d.a.createElement(me, { status: o, message: r, onClose: this.closeNotification })
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
              ((n = Object(o.a)(this, Object(i.a)(t).call(this, e))).state = { notificationMessage: null, notificationStatus: null }),
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
                      var n, a, r, o, i;
                      return A.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n = this.props), (a = n.t), (r = n.onCreate), (o = n.keycloak), !(o.initialized && o.authenticated))
                                ) {
                                  e.next = 14;
                                  break;
                                }
                                return (e.prev = 3), (e.next = 6), G(t);
                              case 6:
                                (i = e.sent),
                                  r(i),
                                  this.setState({ notificationMessage: a('common.dataSaved'), notificationStatus: me.SUCCESS }),
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
                  n(e), this.setState({ notificationMessage: a('error.dataLoading'), notificationStatus: me.ERROR });
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
                    o = a.notificationStatus;
                  return d.a.createElement(
                    d.a.Fragment,
                    null,
                    d.a.createElement(I, { keycloak: t }, n('common.notAuthenticated')),
                    d.a.createElement(H, { keycloak: t }, d.a.createElement(Ee, { onSubmit: this.handleSubmit })),
                    d.a.createElement(me, { status: o, message: r, onClose: this.closeNotification })
                  );
                }
              }
            ]),
            t
          );
        })(l.PureComponent);
      Se.defaultProps = { onError: function() {}, onCreate: function() {} };
      var Ce = E(Object(S.b)()(Se));
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
      function ze(e) {
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
      var Fe = function() {
          return (
            (window && window.entando && window.entando.keycloak && ze({}, window.entando.keycloak, { initialized: !0 })) || {
              initialized: !1
            }
          );
        },
        xe = { id: 'id', hidden: 'hidden', locale: 'locale', disableDefaultEventHandler: 'disable-default-event-handler' },
        Ne = (function(e) {
          function t() {
            var e, n;
            Object(a.a)(this, t);
            for (var r = arguments.length, c = new Array(r), s = 0; s < r; s++) c[s] = arguments[s];
            return (
              ((n = Object(o.a)(this, (e = Object(i.a)(t)).call.apply(e, [this].concat(c)))).keycloak = Fe()),
              (n.onCreate = N(D.create)),
              (n.onUpdate = N(D.update)),
              (n.onErrorCreate = N(D.errorCreate)),
              (n.onErrorUpdate = N(D.errorUpdate)),
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
                      if (!Object.values(xe).includes(e)) throw new Error('Untracked changed attribute: '.concat(e));
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
                      (this.jss = Object(y.b)(ze({}, Object(b.a)(), { insertionPoint: this.mountPoint }))),
                      (this.muiTheme = Object(O.a)({
                        props: { MuiDialog: { container: this.mountPoint }, MuiPopover: { container: this.mountPoint } }
                      })),
                      (this.keycloak = ze({}, Fe(), { initialized: !0 })),
                      (this.unsubscribeFromKeycloakEvent =
                        ((t = 'keycloak'),
                        (n = function() {
                          (e.keycloak = ze({}, Fe(), { initialized: !0 })), e.render();
                        }),
                        window.addEventListener(t, n),
                        function() {
                          window.removeEventListener(t, n);
                        })),
                      this.render(),
                      h()(a);
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
                      var n = T.tableAdd,
                        a = T.tableSelect,
                        r = xe.id;
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
                    if ('true' === this.getAttribute(xe.hidden)) m.a.render(d.a.createElement(d.a.Fragment, null));
                    else {
                      var e,
                        t,
                        n = this.getAttribute(xe.locale);
                      if ((x(n), 'true' === this.getAttribute(xe.disableDefaultEventHandler)))
                        this.unsubscribeFromWidgetEvents && this.unsubscribeFromWidgetEvents(),
                          this.unsubscribeFromKeycloakEvent && this.unsubscribeFromKeycloakEvent();
                      else {
                        var a = this.defaultWidgetEventHandler();
                        this.unsubscribeFromWidgetEvents =
                          ((e = Object.values(T)),
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
                      var r = this.getAttribute(xe.id),
                        o = r
                          ? d.a.createElement(we, { id: r, onUpdate: this.onUpdate, onError: this.onErrorUpdate }, null)
                          : d.a.createElement(Ce, { onCreate: this.onCreate, onError: this.onErrorCreate }, null);
                      m.a.render(
                        d.a.createElement(
                          k.Provider,
                          { value: this.keycloak },
                          d.a.createElement(v.b, { jss: this.jss }, d.a.createElement(g.a, { theme: this.muiTheme }, o))
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
                    return Object.values(xe);
                  }
                }
              ]
            ),
            t
          );
        })(Object(s.a)(HTMLElement));
      customElements.define('persona-form', Ne);
    }
  },
  [[187, 1, 2]]
]);
//# sourceMappingURL=main.e9633848.chunk.js.map
