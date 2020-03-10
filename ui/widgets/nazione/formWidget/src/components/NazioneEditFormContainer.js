import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import keycloakType from 'components/__types__/keycloak';
import { withKeycloak } from 'auth/KeycloakContext';
import { AuthenticatedView, UnauthenticatedView } from 'auth/KeycloakViews';
import { apiNazioneGet, apiNazionePut } from 'api/naziones';
import Notification from 'components/common/Notification';
import NazioneForm from 'components/NazioneForm';

class NazioneEditFormContainer extends PureComponent {
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
        const nazione = await apiNazioneGet(id);
        this.setState(() => ({
          nazione,
        }));
      } catch (err) {
        this.handleError(err);
      }
    }
  }

  closeNotification() {
    this.setState(() => ({ notificationMessage: null }));
  }

  async handleSubmit(nazione) {
    const { t, onUpdate, keycloak } = this.props;
    const authenticated = keycloak.initialized && keycloak.authenticated;

    if (authenticated) {
      try {
        const updatedNazione = await apiNazionePut(nazione);
        onUpdate(updatedNazione);

        this.setState({
          nazione: updatedNazione,
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
    const { notificationMessage, notificationStatus, nazione } = this.state;

    return (
      <>
        <UnauthenticatedView keycloak={keycloak}>
          {t('common.notAuthenticated')}
        </UnauthenticatedView>
        <AuthenticatedView keycloak={keycloak}>
          <NazioneForm nazione={nazione} onSubmit={this.handleSubmit} />
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

NazioneEditFormContainer.propTypes = {
  id: PropTypes.string.isRequired,
  onError: PropTypes.func,
  onUpdate: PropTypes.func,
  t: PropTypes.func.isRequired,
  keycloak: keycloakType.isRequired,
};

NazioneEditFormContainer.defaultProps = {
  onUpdate: () => {},
  onError: () => {},
};

export default withKeycloak(withTranslation()(NazioneEditFormContainer));
