import {render, screen} from '@testing-library/react';
import { UserTable } from './../components/UserTable/UserTable';
import users from './../stories/defaultUsersData.json';

test('From element: exist in the DOM', () => {
    render(<UserTable users={users}/>)
    for(const user of users){
        console.log(user.name);
        expect(screen.getByText<HTMLElement>(`${user.name}`)).toBeInTheDocument();
    }
});