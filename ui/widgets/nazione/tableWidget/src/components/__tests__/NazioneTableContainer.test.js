import React from 'react';
import { render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import nazioneMocks from 'components/__mocks__/nazioneMocks';
import { apiNazionesGet } from 'api/naziones';
import 'i18n/__mocks__/i18nMock';
import NazioneTableContainer from 'components/NazioneTableContainer';

jest.mock('api/naziones');

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

describe('NazioneTableContainer', () => {
  const errorMessageKey = 'error.dataLoading';

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls API', async () => {
    apiNazionesGet.mockImplementation(() => Promise.resolve({ naziones: nazioneMocks, count: 2 }));
    const { queryByText } = render(<NazioneTableContainer />);

    await wait(() => {
      expect(apiNazionesGet).toHaveBeenCalledTimes(1);
      expect(queryByText(errorMessageKey)).not.toBeInTheDocument();
    });
  });

  it('shows an error if the API call is not successful', async () => {
    apiNazionesGet.mockImplementation(() => {
      throw new Error();
    });
    const { getByText } = render(<NazioneTableContainer />);

    wait(() => {
      expect(apiNazionesGet).toHaveBeenCalledTimes(1);
      expect(getByText(errorMessageKey)).toBeInTheDocument();
    });
  });
});
