import {fireEvent, render, screen} from '@testing-library/react';
import Cell from '../../components/Cell/Cell';

test('From element: exist in the DOM', () => {
    const id = 3;
    const { container } = render(<Cell id={id}/>)
    const elem = container.querySelector<HTMLElement>('h2');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveTextContent(`${id}`);
    expect(elem).toHaveClass('hidden');
    fireEvent.click(elem);
    expect(elem).toHaveClass('visible');
});
