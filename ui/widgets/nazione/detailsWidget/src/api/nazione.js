import { DOMAIN } from 'api/constants';

const getKeycloakToken = () => {
  if (
    window &&
    window.entando &&
    window.entando.keycloak &&
    window.entando.keycloak.authenticated
  ) {
    return window.entando.keycloak.token;
  }
  return '';
};

export default (params = {}) => {
  const { id, options } = params;

  const token = getKeycloakToken();

  const url = `${DOMAIN}${DOMAIN.endsWith('/') ? '' : '/'}naziones/${id}`;
  const defaultOptions = {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    }),
  };

  return fetch(url, {
    method: 'GET',
    ...defaultOptions,
    ...options,
  })
    .then(response =>
      response.status >= 200 && response.status < 300
        ? Promise.resolve(response)
        : Promise.reject(new Error(response.statusText || response.status))
    )
    .then(response => response.json());
};
