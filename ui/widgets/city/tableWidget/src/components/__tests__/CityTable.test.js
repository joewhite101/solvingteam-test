import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import 'i18n/__mocks__/i18nMock';
import cityMocks from 'components/__mocks__/cityMocks';
import CityTable from 'components/CityTable';

describe('CityTable', () => {
  it('shows cities', () => {
    const { getByText } = render(<CityTable items={cityMocks} />);
    expect(
      getByText(
        'Praesentium in vel suscipit cumque eaque enim sint. Quaerat molestiae vel rerum. Eos officia amet reprehenderit occaecati maiores aut. Nesciunt eos repellendus qui ut facere soluta. Quia iure voluptas ipsa autem ut.'
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        'Eum consequuntur quibusdam enim ullam impedit. Nihil et dignissimos neque sunt sit cum beatae aut. Nihil impedit est quia qui. Deleniti nobis sed cum est. Sint eos perferendis impedit commodi quis.'
      )
    ).toBeInTheDocument();
  });

  it('shows no cities message', () => {
    const { queryByText } = render(<CityTable items={[]} />);
    expect(
      queryByText(
        'Praesentium in vel suscipit cumque eaque enim sint. Quaerat molestiae vel rerum. Eos officia amet reprehenderit occaecati maiores aut. Nesciunt eos repellendus qui ut facere soluta. Quia iure voluptas ipsa autem ut.'
      )
    ).not.toBeInTheDocument();
    expect(
      queryByText(
        'Eum consequuntur quibusdam enim ullam impedit. Nihil et dignissimos neque sunt sit cum beatae aut. Nihil impedit est quia qui. Deleniti nobis sed cum est. Sint eos perferendis impedit commodi quis.'
      )
    ).not.toBeInTheDocument();

    expect(queryByText('entities.city.noItems')).toBeInTheDocument();
  });

  it('calls onSelect when the user clicks a table row', () => {
    const onSelectMock = jest.fn();
    const { getByText } = render(<CityTable items={cityMocks} onSelect={onSelectMock} />);
    fireEvent.click(
      getByText(
        'Praesentium in vel suscipit cumque eaque enim sint. Quaerat molestiae vel rerum. Eos officia amet reprehenderit occaecati maiores aut. Nesciunt eos repellendus qui ut facere soluta. Quia iure voluptas ipsa autem ut.'
      )
    );
    expect(onSelectMock).toHaveBeenCalledTimes(1);
  });
});
