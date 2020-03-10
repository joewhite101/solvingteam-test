import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { apiCityPost } from 'api/cities';
import CityAddFormContainer from 'components/CityAddFormContainer';
import 'i18n/__mocks__/i18nMock';
import cityMock from 'components/__mocks__/cityMocks';

jest.mock('api/cities');
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

describe('CityAddFormContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const errorMessageKey = 'error.dataLoading';
  const successMessageKey = 'common.dataSaved';

  const onErrorMock = jest.fn();
  const onCreateMock = jest.fn();

  it('saves data', async () => {
    apiCityPost.mockImplementation(data => Promise.resolve(data));

    const { findByTestId, findByLabelText, queryByText, rerender } = render(
      <CityAddFormContainer onError={onErrorMock} onUpdate={onCreateMock} />
    );

    const nameField = await findByLabelText('entities.city.name');
    fireEvent.change(nameField, { target: { value: cityMock.name } });

    const descrizioneField = await findByLabelText('entities.city.descrizione');
    fireEvent.change(descrizioneField, { target: { value: cityMock.descrizione } });

    rerender(<CityAddFormContainer onError={onErrorMock} onUpdate={onCreateMock} />);

    const saveButton = await findByTestId('submit-btn');

    fireEvent.click(saveButton);

    await wait(() => {
      expect(apiCityPost).toHaveBeenCalledTimes(1);
      expect(apiCityPost).toHaveBeenCalledWith(cityMock);

      expect(queryByText(successMessageKey)).toBeInTheDocument();

      expect(onErrorMock).toHaveBeenCalledTimes(0);
      expect(queryByText(errorMessageKey)).not.toBeInTheDocument();
    });
  }, 7000);

  it('shows an error if data is not successfully saved', async () => {
    apiCityPost.mockImplementation(() => Promise.reject());

    const { findByTestId, findByLabelText, queryByText, rerender } = render(
      <CityAddFormContainer onError={onErrorMock} onUpdate={onCreateMock} />
    );

    const nameField = await findByLabelText('entities.city.name');
    fireEvent.change(nameField, { target: { value: cityMock.name } });

    const descrizioneField = await findByLabelText('entities.city.descrizione');
    fireEvent.change(descrizioneField, { target: { value: cityMock.descrizione } });

    rerender(<CityAddFormContainer onError={onErrorMock} onUpdate={onCreateMock} />);

    const saveButton = await findByTestId('submit-btn');

    fireEvent.click(saveButton);

    await wait(() => {
      expect(apiCityPost).toHaveBeenCalledTimes(1);
      expect(apiCityPost).toHaveBeenCalledWith(cityMock);

      expect(queryByText(successMessageKey)).not.toBeInTheDocument();

      expect(onErrorMock).toHaveBeenCalledTimes(1);
      expect(queryByText(errorMessageKey)).toBeInTheDocument();
    });
  }, 7000);
});
