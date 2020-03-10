import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { apiPersonaGet, apiPersonaPut } from 'api/personas';
import PersonaEditFormContainer from 'components/PersonaEditFormContainer';
import 'i18n/__mocks__/i18nMock';
import personaMock from 'components/__mocks__/personaMocks';

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

describe('PersonaEditFormContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const errorMessageKey = 'error.dataLoading';
  const successMessageKey = 'common.dataSaved';

  const onErrorMock = jest.fn();
  const onUpdateMock = jest.fn();

  it('loads data', async () => {
    apiPersonaGet.mockImplementation(() => Promise.resolve(personaMock));
    const { queryByText } = render(
      <PersonaEditFormContainer id="1" onError={onErrorMock} onUpdate={onUpdateMock} />
    );

    await wait(() => {
      expect(apiPersonaGet).toHaveBeenCalledTimes(1);
      expect(apiPersonaGet).toHaveBeenCalledWith('1');
      expect(queryByText(errorMessageKey)).not.toBeInTheDocument();
      expect(onErrorMock).toHaveBeenCalledTimes(0);
    });
  });

  it('saves data', async () => {
    apiPersonaGet.mockImplementation(() => Promise.resolve(personaMock));
    apiPersonaPut.mockImplementation(() => Promise.resolve(personaMock));

    const { findByTestId, queryByText } = render(
      <PersonaEditFormContainer id="1" onError={onErrorMock} onUpdate={onUpdateMock} />
    );

    const saveButton = await findByTestId('submit-btn');

    fireEvent.click(saveButton);

    await wait(() => {
      expect(apiPersonaPut).toHaveBeenCalledTimes(1);
      expect(apiPersonaPut).toHaveBeenCalledWith(personaMock);
      expect(queryByText(successMessageKey)).toBeInTheDocument();
      expect(onErrorMock).toHaveBeenCalledTimes(0);
      expect(queryByText(errorMessageKey)).not.toBeInTheDocument();
    });
  });

  it('shows an error if data is not successfully loaded', async () => {
    apiPersonaGet.mockImplementation(() => Promise.reject());
    const { queryByText } = render(
      <PersonaEditFormContainer id="1" onError={onErrorMock} onUpdate={onUpdateMock} />
    );

    await wait(() => {
      expect(apiPersonaGet).toHaveBeenCalledTimes(1);
      expect(apiPersonaGet).toHaveBeenCalledWith('1');
      expect(onErrorMock).toHaveBeenCalledTimes(1);
      expect(queryByText(errorMessageKey)).toBeInTheDocument();
      expect(queryByText(successMessageKey)).not.toBeInTheDocument();
    });
  });

  it('shows an error if data is not successfully saved', async () => {
    apiPersonaGet.mockImplementation(() => Promise.resolve(personaMock));
    apiPersonaPut.mockImplementation(() => Promise.reject());
    const { findByTestId, getByText } = render(
      <PersonaEditFormContainer id="1" onError={onErrorMock} />
    );

    const saveButton = await findByTestId('submit-btn');

    fireEvent.click(saveButton);

    await wait(() => {
      expect(apiPersonaGet).toHaveBeenCalledTimes(1);
      expect(apiPersonaGet).toHaveBeenCalledWith('1');

      expect(apiPersonaPut).toHaveBeenCalledTimes(1);
      expect(apiPersonaPut).toHaveBeenCalledWith(personaMock);

      expect(onErrorMock).toHaveBeenCalledTimes(1);
      expect(getByText(errorMessageKey)).toBeInTheDocument();
    });
  });
});
