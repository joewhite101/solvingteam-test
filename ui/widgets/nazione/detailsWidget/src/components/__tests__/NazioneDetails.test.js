import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import 'components/__mocks__/i18n';
import NazioneDetails from 'components/NazioneDetails';
import nazioneMock from 'components/__mocks__/nazioneMocks';

describe('NazioneDetails component', () => {
  test('renders data in details widget', () => {
    const { getByText } = render(<NazioneDetails nazione={nazioneMock} />);

    expect(getByText('entities.nazione.name')).toBeInTheDocument();
  });
});
