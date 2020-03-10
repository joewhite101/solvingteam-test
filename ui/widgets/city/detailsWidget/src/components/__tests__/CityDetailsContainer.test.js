import React from 'react';
import { render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import 'components/__mocks__/i18n';
import getCity from 'api/city';
import cityApiGetResponseMock from 'components/__mocks__/cityMocks';
import CityDetailsContainer from 'components/CityDetailsContainer';

jest.mock('api/city');

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
  getCity.mockClear();
});

describe('CityDetailsContainer component', () => {
  test('requests data when component is mounted', async () => {
    getCity.mockImplementation(() => Promise.resolve(cityApiGetResponseMock));

    render(<CityDetailsContainer id="1" />);

    await wait(() => {
      expect(getCity).toHaveBeenCalledTimes(1);
    });
  });

  test('data is shown after mount API call', async () => {
    getCity.mockImplementation(() => Promise.resolve(cityApiGetResponseMock));

    const { getByText } = render(<CityDetailsContainer id="1" />);

    await wait(() => {
      expect(getCity).toHaveBeenCalledTimes(1);
      expect(getByText('entities.city.name')).toBeInTheDocument();
      expect(getByText('entities.city.descrizione')).toBeInTheDocument();
    });
  });

  test('error is shown after failed API call', async () => {
    const onErrorMock = jest.fn();
    getCity.mockImplementation(() => Promise.reject());

    const { getByText } = render(<CityDetailsContainer id="1" onError={onErrorMock} />);

    await wait(() => {
      expect(getCity).toHaveBeenCalledTimes(1);
      expect(onErrorMock).toHaveBeenCalledTimes(1);
      expect(getByText('common.couldNotFetchData')).toBeInTheDocument();
    });
  });
});
