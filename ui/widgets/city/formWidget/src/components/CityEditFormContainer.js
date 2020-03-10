import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import keycloakType from 'components/__types__/keycloak';
import { withKeycloak } from 'auth/KeycloakContext';
import { AuthenticatedView, UnauthenticatedView } from 'auth/KeycloakViews';
import { apiCityGet, apiCityPut } from 'api/cities';
import Notification from 'components/common/Notification';
import CityForm from 'components/CityForm';

class CityEditFormContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      notificationMessage: null,
      notificationStatus: null,
    };

    this.closeNotification = this.closeNotification.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { keycloak } = this.props;
    const authenticated = keycloak.initialized && keycloak.authenticated;

    if (authenticated) {
      this.fetchData();
    }
  }

  componentDidUpdate(prevProps) {
    const { keycloak, id } = this.props;
    const authenticated = keycloak.initialized && keycloak.authenticated;

    const changedAuth = prevProps.keycloak.authenticated !== authenticated;
    const changedId = id && id !== prevProps.id;

    if (authenticated && (changedId || changedAuth)) {
      this.fetchData();
    }
  }

  async fetchData() {
    const { keycloak, id } = this.props;
    const authenticated = keycloak.initialized && keycloak.authenticated;

    if (authenticated && id) {
      try {
        const city = await apiCityGet(id);
        this.setState(() => ({
          city,
        }));
      } catch (err) {
        this.handleError(err);
      }
    }
  }

  closeNotification() {
    this.setState(() => ({ notificationMessage: null }));
  }

  async handleSubmit(city) {
    const { t, onUpdate, keycloak } = this.props;
    const authenticated = keycloak.initialized && keycloak.authenticated;

    if (authenticated) {
      try {
        const updatedCity = await apiCityPut(city);
        onUpdate(updatedCity);

        this.setState({
          city: updatedCity,
          notificationMessage: t('common.dataSaved'),
          notificationStatus: Notification.SUCCESS,
        });
      } catch (err) {
        this.handleError(err);
      }
    }
  }

  handleError(err) {
    const { t, onError } = this.props;
    onError(err);
    this.setState(() => ({
      notificationMessage: t('error.dataLoading'),
      notificationStatus: Notification.ERROR,
    }));
  }

  render() {
    const { keycloak, t } = this.props;
    const { notificationMessage, notificationStatus, city } = this.state;

    return (
      <>
        <UnauthenticatedView keycloak={keycloak}>
          {t('common.notAuthenticated')}
        </UnauthenticatedView>
        <AuthenticatedView keycloak={keycloak}>
          <CityForm city={city} onSubmit={this.handleSubmit} />
        </AuthenticatedView>
        <Notification
          status={notificationStatus}
          message={notificationMessage}
          onClose={this.closeNotification}
        />
      </>
    );
  }
}

CityEditFormContainer.propTypes = {
  id: PropTypes.string.isRequired,
  onError: PropTypes.func,
  onUpdate: PropTypes.func,
  t: PropTypes.func.isRequired,
  keycloak: keycloakType.isRequired,
};

CityEditFormContainer.defaultProps = {
  onUpdate: () => {},
  onError: () => {},
};

export default withKeycloak(withTranslation()(CityEditFormContainer));
