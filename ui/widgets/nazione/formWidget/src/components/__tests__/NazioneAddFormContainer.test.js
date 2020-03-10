import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { apiNazionePost } from 'api/naziones';
import NazioneAddFormContainer from 'components/NazioneAddFormContainer';
import 'i18n/__mocks__/i18nMock';
import nazioneMock from 'components/__mocks__/nazioneMocks';

jest.mock('api/naziones');
jest.mock('@material-ui/pickers', () => ({
  ...jest.requireActual('@material-ui/pickers'),
  // eslint-disable-next-line react/prop-types
  DateTimePicker: ({ id, value, name, label, onChange }) => {
    const handleChange = event => onChange(event.currentTarget.value);
    return (
      <span>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={name} value={value || ''} onChange={handleChange} />
      </span>
    );
  },
}));

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

describe('NazioneAddFormContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const errorMessageKey = 'error.dataLoading';
  const successMessageKey = 'common.dataSaved';

  const onErrorMock = jest.fn();
  const onCreateMock = jest.fn();

  it('saves data', async () => {
    apiNazionePost.mockImplementation(data => Promise.resolve(data));

    const { findByTestId, findByLabelText, queryByText, rerender } = render(
      <NazioneAddFormContainer onError={onErrorMock} onUpdate={onCreateMock} />
    );

    const nameField = await findByLabelText('entities.nazione.name');
    fireEvent.change(nameField, { target: { value: nazioneMock.name } });

    const descrizioneField = await findByLabelText('entities.nazione.descrizione');
    fireEvent.change(descrizioneField, { target: { value: nazioneMock.descrizione } });

    rerender(<NazioneAddFormContainer onError={onErrorMock} onUpdate={onCreateMock} />);

    const saveButton = await findByTestId('submit-btn');

    fireEvent.click(saveButton);

    await wait(() => {
      expect(apiNazionePost).toHaveBeenCalledTimes(1);
      expect(apiNazionePost).toHaveBeenCalledWith(nazioneMock);

      expect(queryByText(successMessageKey)).toBeInTheDocument();

      expect(onErrorMock).toHaveBeenCalledTimes(0);
      expect(queryByText(errorMessageKey)).not.toBeInTheDocument();
    });
  }, 7000);

  it('shows an error if data is not successfully saved', async () => {
    apiNazionePost.mockImplementation(() => Promise.reject());

    const { findByTestId, findByLabelText, queryByText, rerender } = render(
      <NazioneAddFormContainer onError={onErrorMock} onUpdate={onCreateMock} />
    );

    const nameField = await findByLabelText('entities.nazione.name');
    fireEvent.change(nameField, { target: { value: nazioneMock.name } });

    const descrizioneField = await findByLabelText('entities.nazione.descrizione');
    fireEvent.change(descrizioneField, { target: { value: nazioneMock.descrizione } });

    rerender(<NazioneAddFormContainer onError={onErrorMock} onUpdate={onCreateMock} />);

    const saveButton = await findByTestId('submit-btn');

    fireEvent.click(saveButton);

    await wait(() => {
      expect(apiNazionePost).toHaveBeenCalledTimes(1);
      expect(apiNazionePost).toHaveBeenCalledWith(nazioneMock);

      expect(queryByText(successMessageKey)).not.toBeInTheDocument();

      expect(onErrorMock).toHaveBeenCalledTimes(1);
      expect(queryByText(errorMessageKey)).toBeInTheDocument();
    });
  }, 7000);
});
