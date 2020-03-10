import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';

import keycloakType from 'components/__types__/keycloak';
import { withKeycloak } from 'auth/KeycloakContext';
import { AuthenticatedView, UnauthenticatedView } from 'auth/KeycloakViews';
import NazioneDetails from 'components/NazioneDetails';
import Notification from 'components/common/Notification';
import getNazione from 'api/nazione';

class NazioneDetailsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      nazione: {},
      notificationStatus: null,
      notificationMessage: null,
    };

    this.theme = createMuiTheme();
    this.closeNotification = this.closeNotification.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    const { keycloak } = this.props;
    const authenticated = keycloak.initialized && keycloak.authenticated;

    if (authenticated) {
      this.fetchData();
    }
  }

  componentDidUpdate(prevProps) {
    const { keycloak } = this.props;
    const authenticated = keycloak.initialized && keycloak.authenticated;

    const changedAuth = prevProps.keycloak.authenticated !== authenticated;

    if (authenticated && changedAuth) {
      this.fetchData();
    }
  }

  fetchData() {
    const { id, onError, t, keycloak } = this.props;
    const authenticated = keycloak.initialized && keycloak.authenticated;

    if (authenticated) {
      if (id) {
        getNazione({ id })
          .then(nazione =>
            this.setState({
              notificationStatus: null,
              notificationMessage: null,
              nazione,
            })
          )
          .catch(e => {
            onError(e);
            this.setState({
              notificationStatus: Notification.ERROR,
              notificationMessage: t('common.couldNotFetchData'),
            });
          })
          .finally(() => this.setState({ loading: false }));
      } else {
        this.setState({
          loading: false,
          notificationStatus: Notification.ERROR,
          notificationMessage: t('common.missingId'),
        });
      }
    }
  }

  closeNotification() {
    this.setState({
      notificationStatus: null,
      notificationMessage: null,
    });
  }

  render() {
    const { nazione, notificationStatus, notificationMessage, loading } = this.state;
    const { t, keycloak } = this.props;

    return (
      <ThemeProvider theme={this.theme}>
        <UnauthenticatedView keycloak={keycloak}>
          {t('common.notAuthenticated')}
        </UnauthenticatedView>
        <AuthenticatedView keycloak={keycloak}>
          {loading && t('common.loading')}
          {!loading && <NazioneDetails nazione={nazione} />}
        </AuthenticatedView>
        <Notification
          status={notificationStatus}
          message={notificationMessage}
          onClose={this.closeNotification}
        />
      </ThemeProvider>
    );
  }
}

NazioneDetailsContainer.propTypes = {
  id: PropTypes.string.isRequired,
  onError: PropTypes.func,
  t: PropTypes.func.isRequired,
  keycloak: keycloakType.isRequired,
};

NazioneDetailsContainer.defaultProps = {
  onError: () => {},
};

export default withKeycloak(withTranslation()(NazioneDetailsContainer));
