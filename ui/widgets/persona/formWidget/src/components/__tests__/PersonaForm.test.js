import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, wait } from '@testing-library/react';
import 'i18n/__mocks__/i18nMock';
import personaMock from 'components/__mocks__/personaMocks';
import PersonaForm from 'components/PersonaForm';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme();

describe('Persona Form', () => {
  it('shows form', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <PersonaForm persona={personaMock} />
      </ThemeProvider>
    );
    expect(getByLabelText('entities.persona.nome').value).toBe(
      'At cupiditate qui architecto ratione. Accusantium perferendis sapiente est. Enim perspiciatis sed. Eveniet porro qui officiis qui vel ullam enim. Voluptatem porro nesciunt praesentium eius. In aut architecto non sit culpa pariatur voluptatem.'
    );
  });

  it('submits form', async () => {
    const handleSubmit = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <PersonaForm persona={personaMock} onSubmit={handleSubmit} />
      </ThemeProvider>
    );

    const form = getByTestId('persona-form');
    fireEvent.submit(form);

    await wait(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
