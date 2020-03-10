import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import 'components/__mocks__/i18n';
import CityDetails from 'components/CityDetails';
import cityMock from 'components/__mocks__/cityMocks';

describe('CityDetails component', () => {
  test('renders data in details widget', () => {
    const { getByText } = render(<CityDetails city={cityMock} />);

    expect(getByText('entities.city.name')).toBeInTheDocument();
  });
});
