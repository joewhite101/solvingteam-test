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

const getDefaultOptions = () => ({
  headers: new Headers({
    Authorization: `Bearer ${getKeycloakToken()}`,
    'Content-Type': 'application/json',
  }),
});

const resource = 'personas';

const request = async (url, options) => {
  const response = await fetch(url, options);

  return response.status >= 200 && response.status < 300
    ? response.json()
    : Promise.reject(new Error(response.statusText || response.status));
};

export const apiPersonaGet = async id => {
  const url = `${DOMAIN}/${resource}/${id}`;
  const options = {
    ...getDefaultOptions(),
    method: 'GET',
  };
  return request(url, options);
};

export const apiPersonaPost = async persona => {
  const url = `${DOMAIN}/${resource}`;
  const options = {
    ...getDefaultOptions(),
    method: 'POST',
    body: persona ? JSON.stringify(persona) : null,
  };
  return request(url, options);
};

export const apiPersonaPut = async persona => {
  const url = `${DOMAIN}/${resource}`;
  const options = {
    ...getDefaultOptions(),
    method: 'PUT',
    body: persona ? JSON.stringify(persona) : null,
  };
  return request(url, options);
};
