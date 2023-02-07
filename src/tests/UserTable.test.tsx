import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'

import { UserTable } from './../components/UserTable/UserTable';
import users from './../stories/defaultUsersData.json';

test('From element: exist in the DOM', () => {
    render(<UserTable users={users}/>)
    for(const user of users){
        expect(screen.getByText<HTMLElement>(`${user.id}`)).toBeInTheDocument();
        expect(screen.getByText<HTMLElement>(`${user.name}`)).toBeInTheDocument();
        expect(screen.getByText<HTMLElement>(`${user.username}`)).toBeInTheDocument();
        expect(screen.getByText<HTMLElement>(`${user.email}`)).toBeInTheDocument();
        expect(screen.getByText<HTMLElement>(`${user.company.name}`)).toBeInTheDocument();
    }
});