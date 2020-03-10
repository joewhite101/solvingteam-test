import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, wait } from '@testing-library/react';
import 'i18n/__mocks__/i18nMock';
import cityMock from 'components/__mocks__/cityMocks';
import CityForm from 'components/CityForm';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme();

describe('City Form', () => {
  it('shows form', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <CityForm city={cityMock} />
      </ThemeProvider>
    );
    expect(getByLabelText('entities.city.name').value).toBe(
      'Praesentium in vel suscipit cumque eaque enim sint. Quaerat molestiae vel rerum. Eos officia amet reprehenderit occaecati maiores aut. Nesciunt eos repellendus qui ut facere soluta. Quia iure voluptas ipsa autem ut.'
    );
  });

  it('submits form', async () => {
    const handleSubmit = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CityForm city={cityMock} onSubmit={handleSubmit} />
      </ThemeProvider>
    );

    const form = getByTestId('city-form');
    fireEvent.submit(form);

    await wait(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
