import React from "react";
import {fireEvent, render, screen} from '@testing-library/react';

import App from '../App';

test('From element: exist in the DOM', () => {
    render(<App/>)
    const elem = screen.getByText<HTMLElement>('Update Users Data');
    expect(elem).toBeInTheDocument();
    for (let i = 0; i++; i<30)  {
        fireEvent.click(elem);
    }
    expect(
        screen.getByText<HTMLElement>(
            'Осторожно, не превысьте количество запросов на сегодня!'
        )
    ).toBeInTheDocument();
});