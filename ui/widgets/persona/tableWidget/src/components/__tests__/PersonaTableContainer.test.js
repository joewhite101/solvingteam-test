import React from 'react';
import { render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import personaMocks from 'components/__mocks__/personaMocks';
import { apiPersonasGet } from 'api/personas';
import 'i18n/__mocks__/i18nMock';
import PersonaTableContainer from 'components/PersonaTableContainer';

jest.mock('api/personas');

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

describe('PersonaTableContainer', () => {
  const errorMessageKey = 'error.dataLoading';

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls API', async () => {
    apiPersonasGet.mockImplementation(() => Promise.resolve({ personas: personaMocks, count: 2 }));
    const { queryByText } = render(<PersonaTableContainer />);

    await wait(() => {
      expect(apiPersonasGet).toHaveBeenCalledTimes(1);
      expect(queryByText(errorMessageKey)).not.toBeInTheDocument();
    });
  });

  it('shows an error if the API call is not successful', async () => {
    apiPersonasGet.mockImplementation(() => {
      throw new Error();
    });
    const { getByText } = render(<PersonaTableContainer />);

    wait(() => {
      expect(apiPersonasGet).toHaveBeenCalledTimes(1);
      expect(getByText(errorMessageKey)).toBeInTheDocument();
    });
  });
});
