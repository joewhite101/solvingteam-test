import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, wait } from '@testing-library/react';
import 'i18n/__mocks__/i18nMock';
import nazioneMock from 'components/__mocks__/nazioneMocks';
import NazioneForm from 'components/NazioneForm';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme();

describe('Nazione Form', () => {
  it('shows form', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <NazioneForm nazione={nazioneMock} />
      </ThemeProvider>
    );
    expect(getByLabelText('entities.nazione.name').value).toBe(
      'Quod in ut vel numquam sed qui ut eius ad. Iste laudantium eos suscipit ut distinctio blanditiis velit. Dolores voluptatem voluptatibus ut incidunt qui molestiae. Recusandae est ratione quis nostrum.'
    );
  });

  it('submits form', async () => {
    const handleSubmit = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <NazioneForm nazione={nazioneMock} onSubmit={handleSubmit} />
      </ThemeProvider>
    );

    const form = getByTestId('nazione-form');
    fireEvent.submit(form);

    await wait(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
