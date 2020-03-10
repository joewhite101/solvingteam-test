import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { apiPersonaPost } from 'api/personas';
import PersonaAddFormContainer from 'components/PersonaAddFormContainer';
import 'i18n/__mocks__/i18nMock';
import personaMock from 'components/__mocks__/personaMocks';

jest.mock('api/personas');
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

describe('PersonaAddFormContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const errorMessageKey = 'error.dataLoading';
  const successMessageKey = 'common.dataSaved';

  const onErrorMock = jest.fn();
  const onCreateMock = jest.fn();

  it('saves data', async () => {
    apiPersonaPost.mockImplementation(data => Promise.resolve(data));

    const { findByTestId, findByLabelText, queryByText, rerender } = render(
      <PersonaAddFormContainer onError={onErrorMock} onUpdate={onCreateMock} />
    );

    const nomeField = await findByLabelText('entities.persona.nome');
    fireEvent.change(nomeField, { target: { value: personaMock.nome } });

    const cognomeField = await findByLabelText('entities.persona.cognome');
    fireEvent.change(cognomeField, { target: { value: personaMock.cognome } });

    const codiceFiscaleField = await findByLabelText('entities.persona.codiceFiscale');
    fireEvent.change(codiceFiscaleField, { target: { value: personaMock.codiceFiscale } });

    const indirizzoField = await findByLabelText('entities.persona.indirizzo');
    fireEvent.change(indirizzoField, { target: { value: personaMock.indirizzo } });

    const numeroConsolatoField = await findByLabelText('entities.persona.numeroConsolato');
    fireEvent.change(numeroConsolatoField, { target: { value: personaMock.numeroConsolato } });

    rerender(<PersonaAddFormContainer onError={onErrorMock} onUpdate={onCreateMock} />);

    const saveButton = await findByTestId('submit-btn');

    fireEvent.click(saveButton);

    await wait(() => {
      expect(apiPersonaPost).toHaveBeenCalledTimes(1);
      expect(apiPersonaPost).toHaveBeenCalledWith(personaMock);

      expect(queryByText(successMessageKey)).toBeInTheDocument();

      expect(onErrorMock).toHaveBeenCalledTimes(0);
      expect(queryByText(errorMessageKey)).not.toBeInTheDocument();
    });
  }, 7000);

  it('shows an error if data is not successfully saved', async () => {
    apiPersonaPost.mockImplementation(() => Promise.reject());

    const { findByTestId, findByLabelText, queryByText, rerender } = render(
      <PersonaAddFormContainer onError={onErrorMock} onUpdate={onCreateMock} />
    );

    const nomeField = await findByLabelText('entities.persona.nome');
    fireEvent.change(nomeField, { target: { value: personaMock.nome } });

    const cognomeField = await findByLabelText('entities.persona.cognome');
    fireEvent.change(cognomeField, { target: { value: personaMock.cognome } });

    const codiceFiscaleField = await findByLabelText('entities.persona.codiceFiscale');
    fireEvent.change(codiceFiscaleField, { target: { value: personaMock.codiceFiscale } });

    const indirizzoField = await findByLabelText('entities.persona.indirizzo');
    fireEvent.change(indirizzoField, { target: { value: personaMock.indirizzo } });

    const numeroConsolatoField = await findByLabelText('entities.persona.numeroConsolato');
    fireEvent.change(numeroConsolatoField, { target: { value: personaMock.numeroConsolato } });

    rerender(<PersonaAddFormContainer onError={onErrorMock} onUpdate={onCreateMock} />);

    const saveButton = await findByTestId('submit-btn');

    fireEvent.click(saveButton);

    await wait(() => {
      expect(apiPersonaPost).toHaveBeenCalledTimes(1);
      expect(apiPersonaPost).toHaveBeenCalledWith(personaMock);

      expect(queryByText(successMessageKey)).not.toBeInTheDocument();

      expect(onErrorMock).toHaveBeenCalledTimes(1);
      expect(queryByText(errorMessageKey)).toBeInTheDocument();
    });
  }, 7000);
});
