import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import keycloakType from 'components/__types__/keycloak';
import { withKeycloak } from 'auth/KeycloakContext';
import { AuthenticatedView, UnauthenticatedView } from 'auth/KeycloakViews';
import { apiNazionePost } from 'api/naziones';
import Notification from 'components/common/Notification';
import NazioneForm from 'components/NazioneForm';

class NazioneAddFormContainer extends PureComponent {
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

  async handleSubmit(nazione) {
    const { t, onCreate, keycloak } = this.props;
    const authenticated = keycloak.initialized && keycloak.authenticated;

    if (authenticated) {
      try {
        const createdNazione = await apiNazionePost(nazione);
        onCreate(createdNazione);
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
          <NazioneForm onSubmit={this.handleSubmit} />
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

NazioneAddFormContainer.propTypes = {
  onError: PropTypes.func,
  onCreate: PropTypes.func,
  t: PropTypes.func.isRequired,
  keycloak: keycloakType.isRequired,
};

NazioneAddFormContainer.defaultProps = {
  onError: () => {},
  onCreate: () => {},
};

export default withKeycloak(withTranslation()(NazioneAddFormContainer));
