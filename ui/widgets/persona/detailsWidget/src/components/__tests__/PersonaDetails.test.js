import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import 'components/__mocks__/i18n';
import PersonaDetails from 'components/PersonaDetails';
import personaMock from 'components/__mocks__/personaMocks';

describe('PersonaDetails component', () => {
  test('renders data in details widget', () => {
    const { getByText } = render(<PersonaDetails persona={personaMock} />);

    expect(getByText('entities.persona.nome')).toBeInTheDocument();
  });
});
