import React from 'react';
import { render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import cityMocks from 'components/__mocks__/cityMocks';
import { apiCitiesGet } from 'api/cities';
import 'i18n/__mocks__/i18nMock';
import CityTableContainer from 'components/CityTableContainer';

jest.mock('api/cities');

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

describe('CityTableContainer', () => {
  const errorMessageKey = 'error.dataLoading';

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls API', async () => {
    apiCitiesGet.mockImplementation(() => Promise.resolve({ cities: cityMocks, count: 2 }));
    const { queryByText } = render(<CityTableContainer />);

    await wait(() => {
      expect(apiCitiesGet).toHaveBeenCalledTimes(1);
      expect(queryByText(errorMessageKey)).not.toBeInTheDocument();
    });
  });

  it('shows an error if the API call is not successful', async () => {
    apiCitiesGet.mockImplementation(() => {
      throw new Error();
    });
    const { getByText } = render(<CityTableContainer />);

    wait(() => {
      expect(apiCitiesGet).toHaveBeenCalledTimes(1);
      expect(getByText(errorMessageKey)).toBeInTheDocument();
    });
  });
});
