import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { apiCityGet, apiCityPut } from 'api/cities';
import CityEditFormContainer from 'components/CityEditFormContainer';
import 'i18n/__mocks__/i18nMock';
import cityMock from 'components/__mocks__/cityMocks';

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

describe('CityEditFormContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const errorMessageKey = 'error.dataLoading';
  const successMessageKey = 'common.dataSaved';

  const onErrorMock = jest.fn();
  const onUpdateMock = jest.fn();

  it('loads data', async () => {
    apiCityGet.mockImplementation(() => Promise.resolve(cityMock));
    const { queryByText } = render(
      <CityEditFormContainer id="1" onError={onErrorMock} onUpdate={onUpdateMock} />
    );

    await wait(() => {
      expect(apiCityGet).toHaveBeenCalledTimes(1);
      expect(apiCityGet).toHaveBeenCalledWith('1');
      expect(queryByText(errorMessageKey)).not.toBeInTheDocument();
      expect(onErrorMock).toHaveBeenCalledTimes(0);
    });
  });

  it('saves data', async () => {
    apiCityGet.mockImplementation(() => Promise.resolve(cityMock));
    apiCityPut.mockImplementation(() => Promise.resolve(cityMock));

    const { findByTestId, queryByText } = render(
      <CityEditFormContainer id="1" onError={onErrorMock} onUpdate={onUpdateMock} />
    );

    const saveButton = await findByTestId('submit-btn');

    fireEvent.click(saveButton);

    await wait(() => {
      expect(apiCityPut).toHaveBeenCalledTimes(1);
      expect(apiCityPut).toHaveBeenCalledWith(cityMock);
      expect(queryByText(successMessageKey)).toBeInTheDocument();
      expect(onErrorMock).toHaveBeenCalledTimes(0);
      expect(queryByText(errorMessageKey)).not.toBeInTheDocument();
    });
  });

  it('shows an error if data is not successfully loaded', async () => {
    apiCityGet.mockImplementation(() => Promise.reject());
    const { queryByText } = render(
      <CityEditFormContainer id="1" onError={onErrorMock} onUpdate={onUpdateMock} />
    );

    await wait(() => {
      expect(apiCityGet).toHaveBeenCalledTimes(1);
      expect(apiCityGet).toHaveBeenCalledWith('1');
      expect(onErrorMock).toHaveBeenCalledTimes(1);
      expect(queryByText(errorMessageKey)).toBeInTheDocument();
      expect(queryByText(successMessageKey)).not.toBeInTheDocument();
    });
  });

  it('shows an error if data is not successfully saved', async () => {
    apiCityGet.mockImplementation(() => Promise.resolve(cityMock));
    apiCityPut.mockImplementation(() => Promise.reject());
    const { findByTestId, getByText } = render(
      <CityEditFormContainer id="1" onError={onErrorMock} />
    );

    const saveButton = await findByTestId('submit-btn');

    fireEvent.click(saveButton);

    await wait(() => {
      expect(apiCityGet).toHaveBeenCalledTimes(1);
      expect(apiCityGet).toHaveBeenCalledWith('1');

      expect(apiCityPut).toHaveBeenCalledTimes(1);
      expect(apiCityPut).toHaveBeenCalledWith(cityMock);

      expect(onErrorMock).toHaveBeenCalledTimes(1);
      expect(getByText(errorMessageKey)).toBeInTheDocument();
    });
  });
});
