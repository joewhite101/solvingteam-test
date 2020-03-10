import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import keycloakType from 'components/__types__/keycloak';
import { withKeycloak } from 'auth/KeycloakContext';
import { AuthenticatedView, UnauthenticatedView } from 'auth/KeycloakViews';
import { apiCityPost } from 'api/cities';
import Notification from 'components/common/Notification';
import CityForm from 'components/CityForm';

class CityAddFormContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      notificationMessage: null,
      notificationStatus: null,
    };

    this.closeNotification = this.closeNotification.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  closeNotification() {
    this.setState({ notificationMessage: null, notificationStatus: null });
  }

  async handleSubmit(city) {
    const { t, onCreate, keycloak } = this.props;
    const authenticated = keycloak.initialized && keycloak.authenticated;

    if (authenticated) {
      try {
        const createdCity = await apiCityPost(city);
        onCreate(createdCity);
        this.setState({
          notificationMessage: t('common.dataSaved'),
          notificationStatus: Notification.SUCCESS,
        });
      } catch (err) {
        this.handleError(err);
      }
    }
  }

  handleError(err) {
    const { onError, t } = this.props;
    onError(err);
    this.setState({
      notificationMessage: t('error.dataLoading'),
      notificationStatus: Notification.ERROR,
    });
  }

  render() {
    const { keycloak, t } = this.props;
    const { notificationMessage, notificationStatus } = this.state;

    return (
      <>
        <UnauthenticatedView keycloak={keycloak}>
          {t('common.notAuthenticated')}
        </UnauthenticatedView>
        <AuthenticatedView keycloak={keycloak}>
          <CityForm onSubmit={this.handleSubmit} />
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

CityAddFormContainer.propTypes = {
  onError: PropTypes.func,
  onCreate: PropTypes.func,
  t: PropTypes.func.isRequired,
  keycloak: keycloakType.isRequired,
};

CityAddFormContainer.defaultProps = {
  onError: () => {},
  onCreate: () => {},
};

export default withKeycloak(withTranslation()(CityAddFormContainer));
