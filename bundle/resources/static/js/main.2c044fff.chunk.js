(window['webpackJsonppersona-table-widget'] = window['webpackJsonppersona-table-widget'] || []).push([
  [0],
  {
    108: function(e, t, a) {
      e.exports = a(125);
    },
    125: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(44),
        r = a(45),
        i = a(50),
        o = a(30),
        c = a(46),
        l = a(97),
        s = a(7),
        u = a(0),
        d = a.n(u),
        p = a(9),
        m = a.n(p),
        f = a(77),
        h = a.n(f),
        g = a(178),
        b = a(181),
        v = a(13),
        E = d.a.createContext(null);
      var k = a(19),
        O = [5, 10, 25],
        y = { currentPage: 0, totalItemCount: 0, itemsPerPage: O[O.length - 1] },
        j = d.a.createContext({ pagination: y }),
        C = (function(e) {
          function t(e) {
            var a;
            Object(n.a)(this, t), (a = Object(i.a)(this, Object(o.a)(t).call(this, e)));
            var r = 'pagination' === e.paginationMode ? O[0] : O[O.length - 1];
            return (
              (a.state = { pagination: Object(s.a)({}, y, { itemsPerPage: r }) }),
              (a.onChangeItemsPerPage = a.onChangeItemsPerPage.bind(Object(k.a)(a))),
              (a.onChangeCurrentPage = a.onChangeCurrentPage.bind(Object(k.a)(a))),
              a
            );
          }
          return (
            Object(c.a)(t, e),
            Object(r.a)(t, [
              {
                key: 'onChangeItemsPerPage',
                value: function(e) {
                  var t = e.target.value;
                  this.setState(function(e) {
                    return Object(s.a)({}, e, {
                      pagination: Object(s.a)({}, e.pagination, { itemsPerPage: parseInt(t, 10), currentPage: 0 })
                    });
                  });
                }
              },
              {
                key: 'onChangeCurrentPage',
                value: function(e) {
                  this.setState(function(t) {
                    return Object(s.a)({}, t, { pagination: Object(s.a)({}, t.pagination, { currentPage: parseInt(e, 10) }) });
                  });
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.state.pagination,
                    t = this.props.children;
                  return d.a.createElement(
                    j.Provider,
                    {
                      value: Object(s.a)({}, e, {
                        onChangeCurrentPage: this.onChangeCurrentPage,
                        onChangeItemsPerPage: this.onChangeItemsPerPage
                      })
                    },
                    t
                  );
                }
              }
            ]),
            t
          );
        })(d.a.Component);
      function P(e) {
        return function(t) {
          return d.a.createElement(j.Consumer, null, function(a) {
            return d.a.createElement(e, Object.assign({}, t, { pagination: a }));
          });
        };
      }
      C.defaultProps = { paginationMode: '' };
      var w = a(36),
        F = a.n(w),
        x = a(20),
        I = a(53),
        N = a(18),
        z = a(176),
        R = a(4),
        S = a(95),
        M = a.n(S),
        A = a(5),
        D = a.n(A),
        L =
          (D.a.shape({ initialized: D.a.bool, authenticated: D.a.bool }),
          function(e) {
            var t = e.children,
              a = e.keycloak;
            return a.initialized && a.authenticated ? t : null;
          }),
        T = function(e) {
          var t = e.children,
            a = e.keycloak;
          return a.initialized && a.authenticated ? null : t;
        },
        U = a(81),
        W = a(179),
        H = a(161),
        q = a(84),
        K = a.n(q),
        X = a(85),
        _ = a.n(X),
        J = a(86),
        V = a.n(J),
        B = a(87),
        G = a.n(B),
        Y = Object(N.b)()(
          Object(R.a)({ root: { flexShrink: 0, marginLeft: '5px' } })(function(e) {
            var t = e.classes,
              a = e.count,
              n = e.page,
              r = e.rowsPerPage,
              i = e.onChangePage,
              o = e.t;
            return d.a.createElement(
              'div',
              { className: t.root },
              d.a.createElement(
                H.a,
                {
                  onClick: function() {
                    i(0);
                  },
                  disabled: 0 === n,
                  'aria-label': o('pagination.ariaLabels.firstPage')
                },
                d.a.createElement(K.a, null)
              ),
              d.a.createElement(
                H.a,
                {
                  onClick: function() {
                    i(n - 1);
                  },
                  disabled: 0 === n,
                  'aria-label': o('pagination.ariaLabels.previousPage')
                },
                d.a.createElement(_.a, null)
              ),
              d.a.createElement(
                H.a,
                {
                  onClick: function() {
                    i(n + 1);
                  },
                  disabled: n >= Math.ceil(a / r) - 1,
                  'aria-label': o('pagination.ariaLabels.nextPage')
                },
                d.a.createElement(V.a, null)
              ),
              d.a.createElement(
                H.a,
                {
                  onClick: function() {
                    i(Math.max(0, Math.ceil(a / r) - 1));
                  },
                  disabled: n >= Math.ceil(a / r) - 1,
                  'aria-label': o('pagination.ariaLabels.lastPage')
                },
                d.a.createElement(G.a, null)
              )
            );
          })
        ),
        Q =
          (D.a.shape({
            id: D.a.number,
            nome: D.a.string,
            cognome: D.a.string,
            codiceFiscale: D.a.string,
            indirizzo: D.a.string,
            numeroConsolato: D.a.string
          }),
          Object(N.b)()(
            P(function(e) {
              var t = e.children,
                a = e.pagination,
                n = e.paginationMode,
                r = e.items,
                i = e.itemCount,
                o = e.t;
              return 'infinite-scroll' === n
                ? d.a.createElement(
                    U.a,
                    {
                      dataLength: r.length,
                      next: function() {
                        return a.onChangeCurrentPage(a.currentPage + 1);
                      },
                      hasMore: r.length < i,
                      loader: d.a.createElement('div', null, o('common.loadingMore'))
                    },
                    t
                  )
                : 'pagination' === n
                ? d.a.createElement(
                    d.a.Fragment,
                    null,
                    t,
                    i > 0 &&
                      d.a.createElement(W.a, {
                        component: 'div',
                        rowsPerPageOptions: O,
                        count: i,
                        rowsPerPage: a.itemsPerPage,
                        page: a.currentPage,
                        SelectProps: { native: !0 },
                        onChangePage: a.onChangeCurrentPage,
                        onChangeRowsPerPage: a.onChangeItemsPerPage,
                        ActionsComponent: Y
                      })
                  )
                : t;
            })
          )),
        Z = a(126),
        $ = a(170),
        ee = a(37),
        te = a(177),
        ae = a(168),
        ne = a(183),
        re = a(169),
        ie = a(182),
        oe = a(90),
        ce = a.n(oe),
        le = (D.a.shape({ field: D.a.string, operator: D.a.string, value: D.a.string }), ['equals', 'in', 'specified', 'unspecified']),
        se = ['contains'],
        ue = [
          { value: 'greaterThan', title: '>' },
          { value: 'lessThan', title: '<' },
          { value: 'greaterOrEqualThan', title: '>=' },
          { value: 'lessOrEqualThan', title: '<=' }
        ],
        de = ['nome', 'cognome', 'codiceFiscale', 'indirizzo', 'numeroConsolato'],
        pe = [],
        me = [],
        fe = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return e.length
            ? e
                .filter(function(e) {
                  return e.field && e.operator;
                })
                .reduce(function(e, t) {
                  switch (t.operator) {
                    case 'specified':
                      return [].concat(Object(x.a)(e), [''.concat(encodeURIComponent(''.concat(t.field, '.specified')), '=true')]);
                    case 'unspecified':
                      return [].concat(Object(x.a)(e), [''.concat(encodeURIComponent(''.concat(t.field, '.specified')), '=false')]);
                  }
                  return [].concat(Object(x.a)(e), [
                    ''.concat(encodeURIComponent(''.concat(t.field, '.').concat(t.operator)), '=').concat(encodeURIComponent(t.value))
                  ]);
                }, [])
                .join('&')
            : '';
        },
        he = Object(R.a)(
          function() {
            return { formControl: { minWidth: 120, width: '90%' }, icon: { color: 'rgba(0, 0, 0, 0.54)' } };
          },
          { withTheme: !0 }
        )(
          Object(N.b)()(function(e) {
            var t,
              a = e.filter,
              n = e.t,
              r = e.update,
              i = e.remove,
              o = e.filterId,
              c = e.classes,
              l =
                ((t = a.field),
                [].concat(
                  le,
                  Object(x.a)(de.includes(t) ? se : []),
                  Object(x.a)(pe.includes(t) ? ue : []),
                  Object(x.a)(me.includes(t) ? ue : [])
                )),
              s = function(e) {
                r(o, Object(ee.a)({}, e.target.name, e.target.value));
              };
            return d.a.createElement(
              ae.a,
              { container: !0 },
              d.a.createElement(
                ae.a,
                { item: !0, xs: 5 },
                d.a.createElement(
                  re.a,
                  { className: c.formControl },
                  d.a.createElement(ie.a, { id: ''.concat(o, '-field-label') }, n('filters.field')),
                  d.a.createElement(
                    te.a,
                    {
                      native: !0,
                      labelId: ''.concat(o, '-field-label'),
                      id: ''.concat(o, '-field'),
                      name: 'field',
                      value: a.field,
                      onChange: s
                    },
                    d.a.createElement('option', { value: '' }),
                    d.a.createElement('option', { value: 'nome' }, n('entities.persona.nome')),
                    d.a.createElement('option', { value: 'cognome' }, n('entities.persona.cognome')),
                    d.a.createElement('option', { value: 'codiceFiscale' }, n('entities.persona.codiceFiscale')),
                    d.a.createElement('option', { value: 'indirizzo' }, n('entities.persona.indirizzo')),
                    d.a.createElement('option', { value: 'numeroConsolato' }, n('entities.persona.numeroConsolato'))
                  )
                )
              ),
              d.a.createElement(
                ae.a,
                { item: !0, xs: 3 },
                !!a.field &&
                  d.a.createElement(
                    re.a,
                    { className: c.formControl },
                    d.a.createElement(ie.a, { id: ''.concat(o, '-operator-label') }, n('filters.operator')),
                    d.a.createElement(
                      te.a,
                      {
                        native: !0,
                        labelId: ''.concat(o, '-operator-label'),
                        id: ''.concat(o, '-operator'),
                        name: 'operator',
                        value: a.operator,
                        onChange: s
                      },
                      d.a.createElement('option', { value: '' }),
                      l.map(function(e) {
                        return 'string' !== typeof e
                          ? d.a.createElement('option', { key: e.value, value: e.value }, e.title)
                          : d.a.createElement('option', { key: e, value: e }, n('filters.operators.'.concat(e)));
                      })
                    )
                  )
              ),
              d.a.createElement(
                ae.a,
                { item: !0, xs: 3 },
                !!a.operator &&
                  !['specified', 'unspecified'].includes(a.operator) &&
                  d.a.createElement(
                    re.a,
                    { className: c.formControl },
                    d.a.createElement(ne.a, {
                      disabled: !a.field,
                      id: 'standard-required',
                      name: 'value',
                      value: a.value,
                      onChange: s,
                      margin: 'normal'
                    })
                  )
              ),
              d.a.createElement(
                ae.a,
                { item: !0, xs: 1 },
                d.a.createElement(
                  H.a,
                  {
                    'aria-label': 'Remove filter',
                    className: c.icon,
                    onClick: function() {
                      i(o);
                    }
                  },
                  d.a.createElement(ce.a, null)
                )
              )
            );
          })
        ),
        ge = function(e) {
          var t = e.classes,
            a = e.filters,
            n = e.applyFilter,
            r = e.update,
            i = e.remove,
            o = e.clear,
            c = e.add,
            l = e.t,
            s = a.length > 0;
          return d.a.createElement(
            Z.a,
            { className: t.root },
            d.a.createElement($.a, { variant: 'contained', className: t.button, onClick: c }, l('filters.addFilter')),
            s && d.a.createElement($.a, { className: t.button, onClick: o }, l('filters.clearFilters')),
            a.map(function(e, t) {
              var a = ''
                .concat(e.field)
                .concat(e.operator)
                .concat(t);
              return d.a.createElement(he, { key: a, update: r, remove: i, filterId: t, filter: e });
            }),
            s && d.a.createElement($.a, { variant: 'contained', color: 'primary', className: t.button, onClick: n }, l('filters.filter'))
          );
        };
      ge.defaultProps = {
        applyFilter: function() {},
        add: function() {},
        update: function() {},
        remove: function() {},
        clear: function() {}
      };
      var be = Object(R.a)({
          root: { flexGrow: 1, padding: '5px', marginRight: '65px' },
          paper: { padding: '5px', textAlign: 'center', height: '30px' },
          icon: { padding: '5px', color: '#555555', '&:hover': { color: '#000000' } },
          button: { margin: '5px' }
        })(Object(N.b)()(ge)),
        ve = a(172),
        Ee = a(173),
        ke = a(174),
        Oe = a(165),
        ye = a(171),
        je = function(e) {
          var t = e.items,
            a = e.onSelect,
            n = e.classes,
            r = e.t,
            i =
              (e.i18n,
              t.map(function(e) {
                return d.a.createElement(
                  ye.a,
                  {
                    hover: !0,
                    className: n.rowRoot,
                    key: e.id,
                    onClick: function() {
                      return a(e);
                    }
                  },
                  d.a.createElement(Oe.a, null, d.a.createElement('span', null, e.nome)),
                  d.a.createElement(Oe.a, null, d.a.createElement('span', null, e.cognome)),
                  d.a.createElement(Oe.a, null, d.a.createElement('span', null, e.codiceFiscale)),
                  d.a.createElement(Oe.a, null, d.a.createElement('span', null, e.indirizzo)),
                  d.a.createElement(Oe.a, null, d.a.createElement('span', null, e.numeroConsolato))
                );
              }));
          return t.length
            ? d.a.createElement(
                ve.a,
                { className: n.tableRoot, stickyHeader: !0 },
                d.a.createElement(
                  Ee.a,
                  null,
                  d.a.createElement(
                    ye.a,
                    null,
                    d.a.createElement(Oe.a, null, d.a.createElement('span', null, r('entities.persona.nome'))),
                    d.a.createElement(Oe.a, null, d.a.createElement('span', null, r('entities.persona.cognome'))),
                    d.a.createElement(Oe.a, null, d.a.createElement('span', null, r('entities.persona.codiceFiscale'))),
                    d.a.createElement(Oe.a, null, d.a.createElement('span', null, r('entities.persona.indirizzo'))),
                    d.a.createElement(Oe.a, null, d.a.createElement('span', null, r('entities.persona.numeroConsolato')))
                  )
                ),
                d.a.createElement(ke.a, null, i)
              )
            : d.a.createElement('div', { className: n.noItems }, r('entities.persona.noItems'));
        };
      je.defaultProps = { onSelect: function() {} };
      var Ce = Object(R.a)({
          tableRoot: { marginTop: '10px' },
          rowRoot: { cursor: 'pointer', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
          noItems: { margin: '15px' }
        })(Object(N.b)()(je)),
        Pe = a(3),
        we = a(184),
        Fe = a(175),
        xe = a(64),
        Ie = a(92),
        Ne = a.n(Ie),
        ze = a(93),
        Re = a.n(ze),
        Se = a(91),
        Me = a.n(Se),
        Ae = a(94),
        De = a.n(Ae),
        Le = { success: Me.a, error: Ne.a, info: Re.a },
        Te = { success: 3e3, error: null, info: 5e3 },
        Ue = function e(t) {
          var a = t.className,
            n = t.classes,
            r = t.status,
            i = t.message,
            o = t.onClose,
            c = !!i,
            l = r || e.INFO,
            s = Le[l],
            u = Te[l],
            p = d.a.createElement(
              'span',
              { className: n.message },
              d.a.createElement(s, { className: Object(Pe.a)(n.icon, n.iconStatus) }),
              i
            );
          return d.a.createElement(
            we.a,
            { open: c, onClose: o, autoHideDuration: u },
            d.a.createElement(Fe.a, {
              className: Object(Pe.a)(n[l], a),
              message: p,
              action: [
                d.a.createElement(
                  H.a,
                  { key: 'close', 'aria-label': 'close', color: 'inherit', onClick: o },
                  d.a.createElement(De.a, { className: n.icon })
                )
              ]
            })
          );
        };
      (Ue.SUCCESS = 'success'),
        (Ue.ERROR = 'error'),
        (Ue.INFO = 'info'),
        (Ue.defaultProps = { message: null, status: null, className: '', onClose: function() {} });
      var We = Object(R.a)(
          function(e) {
            return {
              message: { display: 'flex', alignItems: 'center' },
              icon: { fontSize: 20 },
              iconStatus: { opacity: 0.9, marginRight: e.spacing(1) },
              success: { backgroundColor: xe.a[600] },
              error: { backgroundColor: e.palette.error.dark },
              info: { backgroundColor: e.palette.primary.main }
            };
          },
          { withTheme: !0 }
        )(Ue),
        He = Object({ NODE_ENV: 'production', PUBLIC_URL: '' }).REACT_APP_DOMAIN,
        qe = (function() {
          var e = Object(I.a)(
            F.a.mark(function e(t, a) {
              var n, r;
              return F.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), fetch(t, a);
                    case 2:
                      if (
                        ((n = e.sent),
                        (r = Object(s.a)(
                          {},
                          n.headers.has('X-Total-Count') ? { 'X-Total-Count': parseInt(n.headers.get('X-Total-Count'), 10) } : {}
                        )),
                        !(n.status >= 200 && n.status < 300))
                      ) {
                        e.next = 12;
                        break;
                      }
                      return (e.next = 7), n.json();
                    case 7:
                      (e.t1 = e.sent), (e.t2 = r), (e.t0 = { personas: e.t1, headers: e.t2 }), (e.next = 13);
                      break;
                    case 12:
                      e.t0 = Promise.reject(new Error(n.statusText || n.status));
                    case 13:
                      return e.abrupt('return', e.t0);
                    case 14:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t, a) {
            return e.apply(this, arguments);
          };
        })(),
        Ke = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
            n = !(!t && !a),
            r = ''
              .concat(t)
              .concat(t ? '&' : '')
              .concat(a);
          return ''.concat(e).concat(n ? '?'.concat(r) : '');
        },
        Xe = (function() {
          var e = Object(I.a)(
            F.a.mark(function e(t) {
              var a, n, r, i, o, c, l, u, d, p;
              return F.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = t.filters),
                        (n = void 0 === a ? [] : a),
                        (r = t.pagination),
                        (i = t.mode),
                        (o = fe(n)),
                        (c = r ? 'page='.concat(r.page, '&size=').concat(r.rowsPerPage) : ''),
                        (l = Ke(''.concat(He, '/personas').concat('count' === i ? '/count' : ''), o, c)),
                        (u =
                          window && window.entando && window.entando.keycloak && window.entando.keycloak.authenticated
                            ? window.entando.keycloak.token
                            : ''),
                        (d = { headers: new Headers({ Authorization: 'Bearer '.concat(u), 'Content-Type': 'application/json' }) }),
                        (p = Object(s.a)({}, d, { method: 'GET' })),
                        e.abrupt('return', qe(l, p))
                      );
                    case 8:
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
        _e = { formUpdate: 'persona.form.update', formCreate: 'persona.form.create', formDelete: 'persona.form.delete' },
        Je = 'persona.table.select',
        Ve = 'persona.table.add',
        Be = 'persona.table.error',
        Ge = 'persona-filter/addFilter',
        Ye = 'persona-filter/updateFilter',
        Qe = 'persona-filter/deleteFilter',
        Ze = 'persona-filter/clearFilters',
        $e = 'persona-table/readAll',
        et = 'persona-table/clearErrors',
        tt = 'persona-table/clearItems',
        at = 'persona-table/create',
        nt = 'persona-table/update',
        rt = 'persona-table/delete',
        it = { filters: [], items: [], itemCount: 0, errorMessage: null, errorStatus: null, loading: !1 },
        ot = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : it,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case Ge:
              return Object(s.a)({}, e, { filters: [].concat(Object(x.a)(e.filters), [{ field: '', operator: '', value: '' }]) });
            case Ye:
              return Object(s.a)({}, e, {
                filters: e.filters.map(function(e, a) {
                  return a === t.payload.filterId ? Object(s.a)({}, e, {}, t.payload.values) : e;
                })
              });
            case Qe:
              return Object(s.a)({}, e, {
                items: it.items,
                itemCount: it.itemCount,
                filters: e.filters.filter(function(e, a) {
                  return a !== t.payload.filterId;
                })
              });
            case Ze:
              return Object(s.a)({}, e, { items: it.items, itemCount: it.itemCount, filters: it.filters });
            case tt:
              return Object(s.a)({}, e, { items: it.items, itemCount: it.itemCount });
            case $e:
              return Object(s.a)({}, e, { items: t.payload.items, itemCount: t.payload.count });
            case 'persona-table/error':
              return Object(s.a)({}, e, { errorMessage: t.payload.message, errorStatus: t.payload.status });
            case et:
              return Object(s.a)({}, e, { errorMessage: null, errorStatus: null });
            case at:
            case _e.formCreate:
              return Object(s.a)({}, e, { items: [].concat(Object(x.a)(e.items), [t.payload]) });
            case nt:
            case _e.formUpdate:
              var a = e.items.findIndex(function(e) {
                  return e.id === t.payload.id;
                }),
                n = Object(x.a)(e.items);
              return (n[a] = t.payload), Object(s.a)({}, e, { items: n });
            case rt:
            case _e.formDelete:
              return Object(s.a)({}, e, {
                items: e.items.filter(function(e) {
                  return e.id !== t.payload.id;
                })
              });
            default:
              return e;
          }
        },
        ct = (function(e) {
          function t(e) {
            var a;
            return (
              Object(n.a)(this, t),
              ((a = Object(i.a)(this, Object(o.a)(t).call(this, e))).state = it),
              (a.handleError = a.handleError.bind(Object(k.a)(a))),
              (a.closeNotification = a.closeNotification.bind(Object(k.a)(a))),
              (a.fetchData = a.fetchData.bind(Object(k.a)(a))),
              (a.updateFilter = a.updateFilter.bind(Object(k.a)(a))),
              (a.addFilter = a.addFilter.bind(Object(k.a)(a))),
              (a.removeFilter = a.removeFilter.bind(Object(k.a)(a))),
              (a.clearFilters = a.clearFilters.bind(Object(k.a)(a))),
              (a.applyFilters = a.applyFilters.bind(Object(k.a)(a))),
              a
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
                    a = t.keycloak,
                    n = t.paginationMode,
                    r = t.pagination,
                    i = a.initialized && a.authenticated,
                    o = e.keycloak.authenticated !== i,
                    c =
                      ['pagination', 'infinite-scroll'].includes(n) &&
                      (e.pagination.currentPage !== r.currentPage || e.pagination.itemsPerPage !== r.itemsPerPage);
                  i && (o || c) && this.fetchData();
                }
              },
              {
                key: 'dispatch',
                value: function(e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
                  this.setState(function(t) {
                    return ot(t, e);
                  }, t);
                }
              },
              {
                key: 'fetchData',
                value: (function() {
                  var e = Object(I.a)(
                    F.a.mark(function e() {
                      var t, a, n, r, i, o, c, l, u, d, p, m;
                      return F.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t = this.state),
                                  (a = t.filters),
                                  (n = t.items),
                                  (r = this.props),
                                  (i = r.keycloak),
                                  (o = r.paginationMode),
                                  (c = r.pagination),
                                  !(i.initialized && i.authenticated))
                                ) {
                                  e.next = 18;
                                  break;
                                }
                                return (
                                  (e.prev = 4),
                                  (l = Object(s.a)(
                                    { filters: a },
                                    '' === o ? {} : { pagination: { page: c.currentPage, rowsPerPage: c.itemsPerPage } }
                                  )),
                                  (e.next = 8),
                                  Xe(l)
                                );
                              case 8:
                                (u = e.sent),
                                  (d = u.personas),
                                  (p = u.headers),
                                  (m = (p && p['X-Total-Count']) || null),
                                  this.dispatch({
                                    type: $e,
                                    payload: { items: 'infinite-scroll' === o ? [].concat(Object(x.a)(n), Object(x.a)(d)) : d, count: m }
                                  }),
                                  (e.next = 18);
                                break;
                              case 15:
                                (e.prev = 15), (e.t0 = e.catch(4)), this.handleError(e.t0);
                              case 18:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[4, 15]]
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: 'updateFilter',
                value: function(e, t) {
                  this.dispatch({ type: Ye, payload: { values: t, filterId: e } });
                }
              },
              {
                key: 'addFilter',
                value: function() {
                  this.dispatch({ type: Ge });
                }
              },
              {
                key: 'removeFilter',
                value: function(e) {
                  this.dispatch({ type: Qe, payload: { filterId: e } }, this.fetchData);
                }
              },
              {
                key: 'clearFilters',
                value: function() {
                  this.dispatch({ type: Ze }, this.fetchData);
                }
              },
              {
                key: 'applyFilters',
                value: function() {
                  this.dispatch({ type: tt }, this.fetchData);
                }
              },
              {
                key: 'closeNotification',
                value: function() {
                  this.dispatch({ type: et });
                }
              },
              {
                key: 'handleError',
                value: function(e) {
                  var t = this.props,
                    a = t.onError,
                    n = t.t;
                  a(e), this.dispatch({ type: 'persona-table/error', payload: { message: n('error.dataLoading'), status: We.ERROR } });
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.state,
                    t = e.items,
                    a = e.itemCount,
                    n = e.errorMessage,
                    r = e.errorStatus,
                    i = e.filters,
                    o = this.props,
                    c = o.classes,
                    l = o.onSelect,
                    s = o.onAdd,
                    u = o.t,
                    p = o.keycloak,
                    m = o.paginationMode,
                    f = void 0 === m ? '' : m;
                  return d.a.createElement(
                    d.a.Fragment,
                    null,
                    d.a.createElement(T, { keycloak: p }, u('common.notAuthenticated')),
                    d.a.createElement(
                      L,
                      { keycloak: p },
                      d.a.createElement(
                        z.a,
                        { color: 'primary', 'aria-label': 'add', className: c.fab, onClick: s },
                        d.a.createElement(M.a, null)
                      ),
                      d.a.createElement(be, {
                        applyFilter: this.applyFilters,
                        add: this.addFilter,
                        update: this.updateFilter,
                        remove: this.removeFilter,
                        clear: this.clearFilters,
                        filters: i
                      }),
                      d.a.createElement(
                        Q,
                        { items: t, paginationMode: f, itemCount: a },
                        d.a.createElement('div', { className: c.tableWrapper }, d.a.createElement(Ce, { items: t, onSelect: l }))
                      )
                    ),
                    d.a.createElement(We, { status: r, message: n, onClose: this.closeNotification })
                  );
                }
              }
            ]),
            t
          );
        })(u.Component);
      ct.defaultProps = { onAdd: function() {}, onError: function() {}, onSelect: function() {}, paginationMode: '', pagination: null };
      var lt,
        st =
          ((lt = Object(R.a)({ fab: { float: 'right' }, tableWrapper: { width: '100%', overflowX: 'auto', overflowY: 'hidden' } })(
            Object(N.b)(void 0, { withRef: !0 })(P(ct))
          )),
          function(e) {
            return d.a.createElement(E.Consumer, null, function(t) {
              return d.a.createElement(lt, Object.assign({}, e, { keycloak: t }));
            });
          }),
        ut = a(70),
        dt = { en: a(96) },
        pt = Object.keys(dt).reduce(function(e, t) {
          return Object(s.a)({}, e, Object(ee.a)({}, t, Object(ee.a)({}, 'translation', dt[t])));
        }, {}),
        mt =
          (ut.a.t,
          function(e) {
            !(function(e, t) {
              ut.a
                .use(N.a)
                .init({
                  defaultNs: 'translation',
                  interpolation: { escapeValue: !1 },
                  resources: pt,
                  lng: e || t,
                  fallbackLng: t,
                  react: { useSuspense: !1 }
                });
            })(e, 'en');
          }),
        ft = function(e) {
          return function(t) {
            return (function(e, t) {
              var a = new CustomEvent(e, { detail: { payload: t } });
              window.dispatchEvent(a);
            })(e, t);
          };
        },
        ht = function() {
          return (
            (window && window.entando && window.entando.keycloak && Object(s.a)({}, window.entando.keycloak, { initialized: !0 })) || {
              initialized: !1
            }
          );
        },
        gt = {
          hidden: 'hidden',
          locale: 'locale',
          paginationMode: 'pagination-mode',
          disableDefaultEventHandler: 'disable-default-event-handler'
        },
        bt = (function(e) {
          function t() {
            var e, a;
            Object(n.a)(this, t);
            for (var r = arguments.length, c = new Array(r), l = 0; l < r; l++) c[l] = arguments[l];
            return (
              ((a = Object(i.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(c)))).keycloak = ht()),
              (a.onAdd = ft(Ve)),
              (a.onError = ft(Be)),
              (a.onSelect = ft(Je)),
              (a.reactRootRef = d.a.createRef()),
              a
            );
          }
          return (
            Object(c.a)(t, e),
            Object(r.a)(
              t,
              [
                {
                  key: 'attributeChangedCallback',
                  value: function(e, t, a) {
                    if (this.mountPoint && t !== a) {
                      if (!Object.values(gt).includes(e)) throw new Error('Untracked changed attribute: '.concat(e));
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
                      a,
                      n = this.attachShadow({ mode: 'open' });
                    n.appendChild(this.mountPoint),
                      (this.jss = Object(v.b)(Object(s.a)({}, Object(g.a)(), { insertionPoint: this.mountPoint }))),
                      (this.keycloak = Object(s.a)({}, ht(), { initialized: !0 })),
                      (this.unsubscribeFromKeycloakEvent =
                        ((t = 'keycloak'),
                        (a = function() {
                          (e.keycloak = Object(s.a)({}, ht(), { initialized: !0 })), e.render();
                        }),
                        window.addEventListener(t, a),
                        function() {
                          window.removeEventListener(t, a);
                        })),
                      this.render(),
                      h()(n);
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
                      var a = (function(e) {
                        var t = e.type,
                          a = e.detail;
                        return { type: t, payload: a.payload, error: a.error, meta: a.meta };
                      })(t);
                      e.reactRootRef.current.dispatch(a);
                    };
                  }
                },
                {
                  key: 'render',
                  value: function() {
                    if (!('true' === this.getAttribute(gt.hidden))) {
                      var e = this.getAttribute(gt.locale);
                      mt(e);
                      var t,
                        a,
                        n = this.getAttribute(gt.paginationMode) || '';
                      if ('true' === this.getAttribute(gt.disableDefaultEventHandler))
                        this.unsubscribeFromWidgetEvents && this.unsubscribeFromWidgetEvents(),
                          this.unsubscribeFromKeycloakEvent && this.unsubscribeFromKeycloakEvent();
                      else {
                        var r = this.defaultWidgetEventHandler();
                        this.unsubscribeFromWidgetEvents =
                          ((t = Object.values(_e)),
                          (a = r),
                          t.forEach(function(e) {
                            return window.addEventListener(e, a);
                          }),
                          function() {
                            t.forEach(function(e) {
                              return window.removeEventListener(e, a);
                            });
                          });
                      }
                      m.a.render(
                        d.a.createElement(
                          E.Provider,
                          { value: this.keycloak },
                          d.a.createElement(
                            b.b,
                            { jss: this.jss },
                            d.a.createElement(
                              C,
                              { paginationMode: n },
                              d.a.createElement(st, {
                                ref: this.reactRootRef,
                                onAdd: this.onAdd,
                                onSelect: this.onSelect,
                                onError: this.onError,
                                paginationMode: n
                              })
                            )
                          )
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
                    return Object.values(gt);
                  }
                }
              ]
            ),
            t
          );
        })(Object(l.a)(HTMLElement));
      customElements.define('persona-table', bt);
    },
    96: function(e) {
      e.exports = JSON.parse(
        '{"error":{"dataLoading":"Error during server connection"},"common":{"couldNotFetchData":"Unfortunately we could not fetch entity data","notAuthenticated":"User is not authenticated.","loadingMore":"Loading more...","download":"Download file"},"pagination":{"ariaLabels":{"firstPage":"first page","previousPage":"previous page","nextPage":"next page","lastPage":"last page"}},"filters":{"field":"Field","value":"Value","addFilter":"Add filter","clearFilters":"Clear filters","filter":"Filter","operator":"Operator","operators":{"equals":"equals","in":"in","specified":"specified","unspecified":"unspecified","contains":"contains"}},"entities":{"persona":{"noItems":"No personas available","id":"ID","nome":"entities.persona.nome","cognome":"entities.persona.cognome","codiceFiscale":"entities.persona.codiceFiscale","indirizzo":"entities.persona.indirizzo","numeroConsolato":"entities.persona.numeroConsolato"}}}'
      );
    }
  },
  [[108, 1, 2]]
]);
//# sourceMappingURL=main.2c044fff.chunk.js.map
