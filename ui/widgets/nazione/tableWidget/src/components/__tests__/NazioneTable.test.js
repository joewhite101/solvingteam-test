import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import 'i18n/__mocks__/i18nMock';
import nazioneMocks from 'components/__mocks__/nazioneMocks';
import NazioneTable from 'components/NazioneTable';

describe('NazioneTable', () => {
  it('shows naziones', () => {
    const { getByText } = render(<NazioneTable items={nazioneMocks} />);
    expect(
      getByText(
        'Quod in ut vel numquam sed qui ut eius ad. Iste laudantium eos suscipit ut distinctio blanditiis velit. Dolores voluptatem voluptatibus ut incidunt qui molestiae. Recusandae est ratione quis nostrum.'
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        'Modi ducimus ducimus accusamus dignissimos dolor consectetur nostrum animi. Quia ut voluptatibus repudiandae. Consequuntur doloremque sed asperiores quia. Sapiente odio sunt unde. Necessitatibus tenetur aut dolorum ratione ipsa est. Eaque in tempora est nisi.'
      )
    ).toBeInTheDocument();
  });

  it('shows no naziones message', () => {
    const { queryByText } = render(<NazioneTable items={[]} />);
    expect(
      queryByText(
        'Quod in ut vel numquam sed qui ut eius ad. Iste laudantium eos suscipit ut distinctio blanditiis velit. Dolores voluptatem voluptatibus ut incidunt qui molestiae. Recusandae est ratione quis nostrum.'
      )
    ).not.toBeInTheDocument();
    expect(
      queryByText(
        'Modi ducimus ducimus accusamus dignissimos dolor consectetur nostrum animi. Quia ut voluptatibus repudiandae. Consequuntur doloremque sed asperiores quia. Sapiente odio sunt unde. Necessitatibus tenetur aut dolorum ratione ipsa est. Eaque in tempora est nisi.'
      )
    ).not.toBeInTheDocument();

    expect(queryByText('entities.nazione.noItems')).toBeInTheDocument();
  });

  it('calls onSelect when the user clicks a table row', () => {
    const onSelectMock = jest.fn();
    const { getByText } = render(<NazioneTable items={nazioneMocks} onSelect={onSelectMock} />);
    fireEvent.click(
      getByText(
        'Quod in ut vel numquam sed qui ut eius ad. Iste laudantium eos suscipit ut distinctio blanditiis velit. Dolores voluptatem voluptatibus ut incidunt qui molestiae. Recusandae est ratione quis nostrum.'
      )
    );
    expect(onSelectMock).toHaveBeenCalledTimes(1);
  });
});
