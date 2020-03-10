import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { apiNazioneGet, apiNazionePut } from 'api/naziones';
import NazioneEditFormContainer from 'components/NazioneEditFormContainer';
import 'i18n/__mocks__/i18nMock';
import nazioneMock from 'components/__mocks__/nazioneMocks';

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

describe('NazioneEditFormContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const errorMessageKey = 'error.dataLoading';
  const successMessageKey = 'common.dataSaved';

  const onErrorMock = jest.fn();
  const onUpdateMock = jest.fn();

  it('loads data', async () => {
    apiNazioneGet.mockImplementation(() => Promise.resolve(nazioneMock));
    const { queryByText } = render(
      <NazioneEditFormContainer id="1" onError={onErrorMock} onUpdate={onUpdateMock} />
    );

    await wait(() => {
      expect(apiNazioneGet).toHaveBeenCalledTimes(1);
      expect(apiNazioneGet).toHaveBeenCalledWith('1');
      expect(queryByText(errorMessageKey)).not.toBeInTheDocument();
      expect(onErrorMock).toHaveBeenCalledTimes(0);
    });
  });

  it('saves data', async () => {
    apiNazioneGet.mockImplementation(() => Promise.resolve(nazioneMock));
    apiNazionePut.mockImplementation(() => Promise.resolve(nazioneMock));

    const { findByTestId, queryByText } = render(
      <NazioneEditFormContainer id="1" onError={onErrorMock} onUpdate={onUpdateMock} />
    );

    const saveButton = await findByTestId('submit-btn');

    fireEvent.click(saveButton);

    await wait(() => {
      expect(apiNazionePut).toHaveBeenCalledTimes(1);
      expect(apiNazionePut).toHaveBeenCalledWith(nazioneMock);
      expect(queryByText(successMessageKey)).toBeInTheDocument();
      expect(onErrorMock).toHaveBeenCalledTimes(0);
      expect(queryByText(errorMessageKey)).not.toBeInTheDocument();
    });
  });

  it('shows an error if data is not successfully loaded', async () => {
    apiNazioneGet.mockImplementation(() => Promise.reject());
    const { queryByText } = render(
      <NazioneEditFormContainer id="1" onError={onErrorMock} onUpdate={onUpdateMock} />
    );

    await wait(() => {
      expect(apiNazioneGet).toHaveBeenCalledTimes(1);
      expect(apiNazioneGet).toHaveBeenCalledWith('1');
      expect(onErrorMock).toHaveBeenCalledTimes(1);
      expect(queryByText(errorMessageKey)).toBeInTheDocument();
      expect(queryByText(successMessageKey)).not.toBeInTheDocument();
    });
  });

  it('shows an error if data is not successfully saved', async () => {
    apiNazioneGet.mockImplementation(() => Promise.resolve(nazioneMock));
    apiNazionePut.mockImplementation(() => Promise.reject());
    const { findByTestId, getByText } = render(
      <NazioneEditFormContainer id="1" onError={onErrorMock} />
    );

    const saveButton = await findByTestId('submit-btn');

    fireEvent.click(saveButton);

    await wait(() => {
      expect(apiNazioneGet).toHaveBeenCalledTimes(1);
      expect(apiNazioneGet).toHaveBeenCalledWith('1');

      expect(apiNazionePut).toHaveBeenCalledTimes(1);
      expect(apiNazionePut).toHaveBeenCalledWith(nazioneMock);

      expect(onErrorMock).toHaveBeenCalledTimes(1);
      expect(getByText(errorMessageKey)).toBeInTheDocument();
    });
  });
});
