import {fireEvent, render, screen} from '@testing-library/react';
import Cell from '../../components/Cell/Cell';

test('From element: exist in the DOM', () => {
    const id = 3;
    render(<Cell id={id}/>)
    const elem = screen.getByText<HTMLElement>(`${id}`);
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveClass('hidden');
    fireEvent.click(elem);
    expect(elem).toHaveClass('visible');
});
