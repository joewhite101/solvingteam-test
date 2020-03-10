import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import 'i18n/__mocks__/i18nMock';
import personaMocks from 'components/__mocks__/personaMocks';
import PersonaTable from 'components/PersonaTable';

describe('PersonaTable', () => {
  it('shows personas', () => {
    const { getByText } = render(<PersonaTable items={personaMocks} />);
    expect(
      getByText(
        'At cupiditate qui architecto ratione. Accusantium perferendis sapiente est. Enim perspiciatis sed. Eveniet porro qui officiis qui vel ullam enim. Voluptatem porro nesciunt praesentium eius. In aut architecto non sit culpa pariatur voluptatem.'
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        'Eum quos eligendi aut magni quae. Qui amet quasi numquam quis aperiam quidem deleniti est nobis. Aperiam id excepturi doloribus nostrum enim veritatis. Molestiae et laboriosam ut.'
      )
    ).toBeInTheDocument();
  });

  it('shows no personas message', () => {
    const { queryByText } = render(<PersonaTable items={[]} />);
    expect(
      queryByText(
        'At cupiditate qui architecto ratione. Accusantium perferendis sapiente est. Enim perspiciatis sed. Eveniet porro qui officiis qui vel ullam enim. Voluptatem porro nesciunt praesentium eius. In aut architecto non sit culpa pariatur voluptatem.'
      )
    ).not.toBeInTheDocument();
    expect(
      queryByText(
        'Eum quos eligendi aut magni quae. Qui amet quasi numquam quis aperiam quidem deleniti est nobis. Aperiam id excepturi doloribus nostrum enim veritatis. Molestiae et laboriosam ut.'
      )
    ).not.toBeInTheDocument();

    expect(queryByText('entities.persona.noItems')).toBeInTheDocument();
  });

  it('calls onSelect when the user clicks a table row', () => {
    const onSelectMock = jest.fn();
    const { getByText } = render(<PersonaTable items={personaMocks} onSelect={onSelectMock} />);
    fireEvent.click(
      getByText(
        'At cupiditate qui architecto ratione. Accusantium perferendis sapiente est. Enim perspiciatis sed. Eveniet porro qui officiis qui vel ullam enim. Voluptatem porro nesciunt praesentium eius. In aut architecto non sit culpa pariatur voluptatem.'
      )
    );
    expect(onSelectMock).toHaveBeenCalledTimes(1);
  });
});
