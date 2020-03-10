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

const resource = 'cities';

const request = async (url, options) => {
  const response = await fetch(url, options);

  return response.status >= 200 && response.status < 300
    ? response.json()
    : Promise.reject(new Error(response.statusText || response.status));
};

export const apiCityGet = async id => {
  const url = `${DOMAIN}/${resource}/${id}`;
  const options = {
    ...getDefaultOptions(),
    method: 'GET',
  };
  return request(url, options);
};

export const apiCityPost = async city => {
  const url = `${DOMAIN}/${resource}`;
  const options = {
    ...getDefaultOptions(),
    method: 'POST',
    body: city ? JSON.stringify(city) : null,
  };
  return request(url, options);
};

export const apiCityPut = async city => {
  const url = `${DOMAIN}/${resource}`;
  const options = {
    ...getDefaultOptions(),
    method: 'PUT',
    body: city ? JSON.stringify(city) : null,
  };
  return request(url, options);
};
