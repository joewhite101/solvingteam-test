import React from 'react';
import { render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import 'components/__mocks__/i18n';
import getPersona from 'api/persona';
import personaApiGetResponseMock from 'components/__mocks__/personaMocks';
import PersonaDetailsContainer from 'components/PersonaDetailsContainer';

jest.mock('api/persona');

jest.mock('auth/KeycloakContext', () => {
  const withKeycloak = Component => {
    return props => (
      <Component
        {...props} // eslint-disable-line react/jsx-props-no-spreading
        keycloak={{
          initialized: true,
          authenticated: true,
        }}
      />
    );
  };

  return { withKeycloak };
});

beforeEach(() => {
  getPersona.mockClear();
});

describe('PersonaDetailsContainer component', () => {
  test('requests data when component is mounted', async () => {
    getPersona.mockImplementation(() => Promise.resolve(personaApiGetResponseMock));

    render(<PersonaDetailsContainer id="1" />);

    await wait(() => {
      expect(getPersona).toHaveBeenCalledTimes(1);
    });
  });

  test('data is shown after mount API call', async () => {
    getPersona.mockImplementation(() => Promise.resolve(personaApiGetResponseMock));

    const { getByText } = render(<PersonaDetailsContainer id="1" />);

    await wait(() => {
      expect(getPersona).toHaveBeenCalledTimes(1);
      expect(getByText('entities.persona.nome')).toBeInTheDocument();
      expect(getByText('entities.persona.cognome')).toBeInTheDocument();
      expect(getByText('entities.persona.codiceFiscale')).toBeInTheDocument();
      expect(getByText('entities.persona.indirizzo')).toBeInTheDocument();
      expect(getByText('entities.persona.numeroConsolato')).toBeInTheDocument();
    });
  });

  test('error is shown after failed API call', async () => {
    const onErrorMock = jest.fn();
    getPersona.mockImplementation(() => Promise.reject());

    const { getByText } = render(<PersonaDetailsContainer id="1" onError={onErrorMock} />);

    await wait(() => {
      expect(getPersona).toHaveBeenCalledTimes(1);
      expect(onErrorMock).toHaveBeenCalledTimes(1);
      expect(getByText('common.couldNotFetchData')).toBeInTheDocument();
    });
  });
});
