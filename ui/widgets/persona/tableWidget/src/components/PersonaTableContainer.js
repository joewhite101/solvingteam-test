import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

import keycloakType from 'components/__types__/keycloak';
import { withKeycloak } from 'auth/KeycloakContext';
import { AuthenticatedView, UnauthenticatedView } from 'auth/KeycloakViews';
import PaginationWrapper from 'components/pagination/PaginationWrapper';
import { withPaginationContext } from 'components/pagination/PaginationContext';
import FiltersContainer from 'components/filters/FiltersContainer';
import PersonaTable from 'components/PersonaTable';
import Notification from 'components/common/Notification';
import { apiPersonasGet } from 'api/personas';
import { reducer, initialState } from 'state/persona.reducer';
import { ADD_FILTER, UPDATE_FILTER, DELETE_FILTER, CLEAR_FILTERS } from 'state/filter.types';
import { ERROR_FETCH, CLEAR_ERRORS, READ_ALL, CLEAR_ITEMS } from 'state/persona.types';

const styles = {
  fab: {
    float: 'right',
  },
  tableWrapper: {
    width: '100%',
    overflowX: 'auto',
    overflowY: 'hidden',
  },
};

class PersonaTableContainer extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.handleError = this.handleError.bind(this);
    this.closeNotification = this.closeNotification.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
    this.addFilter = this.addFilter.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
    this.applyFilters = this.applyFilters.bind(this);
  }

  componentDidMount() {
    const { keycloak } = this.props;
    const authenticated = keycloak.initialized && keycloak.authenticated;

    if (authenticated) {
      this.fetchData();
    }
  }

  componentDidUpdate(prevProps) {
    const { keycloak, paginationMode, pagination } = this.props;
    const authenticated = keycloak.initialized && keycloak.authenticated;

    const changedAuth = prevProps.keycloak.authenticated !== authenticated;
    const changedPagination =
      ['pagination', 'infinite-scroll'].includes(paginationMode) &&
      (prevProps.pagination.currentPage !== pagination.currentPage ||
        prevProps.pagination.itemsPerPage !== pagination.itemsPerPage);

    if (authenticated && (changedAuth || changedPagination)) {
      this.fetchData();
    }
  }

  dispatch(action, afterSetState = () => {}) {
    this.setState(prevState => reducer(prevState, action), afterSetState);
  }

  async fetchData() {
    const { filters, items } = this.state;
    const { keycloak, paginationMode, pagination } = this.props;
    const authenticated = keycloak.initialized && keycloak.authenticated;

    if (authenticated) {
      try {
        const requestParameters = {
          filters,
          ...(paginationMode === ''
            ? {}
            : {
                pagination: {
                  page: pagination.currentPage,
                  rowsPerPage: pagination.itemsPerPage,
                },
              }),
        };

        const { personas, headers } = await apiPersonasGet(requestParameters);
        const personaCount = (headers && headers['X-Total-Count']) || null;

        this.dispatch({
          type: READ_ALL,
          payload: {
            items: paginationMode === 'infinite-scroll' ? [...items, ...personas] : personas,
            count: personaCount,
          },
        });
      } catch (err) {
        this.handleError(err);
      }
    }
  }

  updateFilter(filterId, values) {
    this.dispatch({ type: UPDATE_FILTER, payload: { values, filterId } });
  }

  addFilter() {
    this.dispatch({ type: ADD_FILTER });
  }

  removeFilter(filterId) {
    this.dispatch({ type: DELETE_FILTER, payload: { filterId } }, this.fetchData);
  }

  clearFilters() {
    this.dispatch({ type: CLEAR_FILTERS }, this.fetchData);
  }

  applyFilters() {
    this.dispatch({ type: CLEAR_ITEMS }, this.fetchData);
  }

  closeNotification() {
    this.dispatch({ type: CLEAR_ERRORS });
  }

  handleError(err) {
    const { onError, t } = this.props;
    onError(err);
    this.dispatch({
      type: ERROR_FETCH,
      payload: {
        message: t('error.dataLoading'),
        status: Notification.ERROR,
      },
    });
  }

  render() {
    const { items, itemCount, errorMessage, errorStatus, filters } = this.state;
    const { classes, onSelect, onAdd, t, keycloak, paginationMode = '' } = this.props;

    return (
      <>
        <UnauthenticatedView keycloak={keycloak}>
          {t('common.notAuthenticated')}
        </UnauthenticatedView>
        <AuthenticatedView keycloak={keycloak}>
          <Fab color="primary" aria-label="add" className={classes.fab} onClick={onAdd}>
            <AddIcon />
          </Fab>
          <FiltersContainer
            applyFilter={this.applyFilters}
            add={this.addFilter}
            update={this.updateFilter}
            remove={this.removeFilter}
            clear={this.clearFilters}
            filters={filters}
          />
          <PaginationWrapper items={items} paginationMode={paginationMode} itemCount={itemCount}>
            <div className={classes.tableWrapper}>
              <PersonaTable items={items} onSelect={onSelect} />
            </div>
          </PaginationWrapper>
        </AuthenticatedView>
        <Notification
          status={errorStatus}
          message={errorMessage}
          onClose={this.closeNotification}
        />
      </>
    );
  }
}

PersonaTableContainer.propTypes = {
  classes: PropTypes.shape({
    fab: PropTypes.string,
    tableWrapper: PropTypes.string,
  }).isRequired,
  onAdd: PropTypes.func,
  onError: PropTypes.func,
  onSelect: PropTypes.func,
  t: PropTypes.func.isRequired,
  keycloak: keycloakType.isRequired,
  paginationMode: PropTypes.string,
  pagination: PropTypes.shape({
    currentPage: PropTypes.number,
    itemsPerPage: PropTypes.number,
  }),
};

PersonaTableContainer.defaultProps = {
  onAdd: () => {},
  onError: () => {},
  onSelect: () => {},
  paginationMode: '',
  pagination: null,
};

export default withKeycloak(
  withStyles(styles)(
    withTranslation(undefined, { withRef: true })(withPaginationContext(PersonaTableContainer))
  )
);
