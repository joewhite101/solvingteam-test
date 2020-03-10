import React from 'react';
import { render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import 'components/__mocks__/i18n';
import getNazione from 'api/nazione';
import nazioneApiGetResponseMock from 'components/__mocks__/nazioneMocks';
import NazioneDetailsContainer from 'components/NazioneDetailsContainer';

jest.mock('api/nazione');

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
  getNazione.mockClear();
});

describe('NazioneDetailsContainer component', () => {
  test('requests data when component is mounted', async () => {
    getNazione.mockImplementation(() => Promise.resolve(nazioneApiGetResponseMock));

    render(<NazioneDetailsContainer id="1" />);

    await wait(() => {
      expect(getNazione).toHaveBeenCalledTimes(1);
    });
  });

  test('data is shown after mount API call', async () => {
    getNazione.mockImplementation(() => Promise.resolve(nazioneApiGetResponseMock));

    const { getByText } = render(<NazioneDetailsContainer id="1" />);

    await wait(() => {
      expect(getNazione).toHaveBeenCalledTimes(1);
      expect(getByText('entities.nazione.name')).toBeInTheDocument();
      expect(getByText('entities.nazione.descrizione')).toBeInTheDocument();
    });
  });

  test('error is shown after failed API call', async () => {
    const onErrorMock = jest.fn();
    getNazione.mockImplementation(() => Promise.reject());

    const { getByText } = render(<NazioneDetailsContainer id="1" onError={onErrorMock} />);

    await wait(() => {
      expect(getNazione).toHaveBeenCalledTimes(1);
      expect(onErrorMock).toHaveBeenCalledTimes(1);
      expect(getByText('common.couldNotFetchData')).toBeInTheDocument();
    });
  });
});
