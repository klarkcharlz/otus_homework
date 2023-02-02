import React, {MouseEvent} from 'react';
import axios from "axios";
import {User, UserTable} from './components/UserTable/UserTable';

type Props = {};

type State = {
    users: Array<User> | [];
};


class App extends React.Component<Props, State> {
    userApiUrl = 'https://jsonplaceholder.typicode.com/users';

    constructor(props: any) {
        super(props);

        this.state = {
            users: []
        };

        this.getUsersData = this.getUsersData.bind(this);
        this.getUsers = this.getUsers.bind(this);
    }

    getUsersData(e: MouseEvent<HTMLElement> | null) {
        if (e !== null) e.preventDefault();
        axios.get(this.userApiUrl)
            .then(response => {
                const usersData: Array<User> = response.data;
                // console.log(usersData);
                // console.log(this.state);
                this.setState({...this.state, users: usersData});
            }).catch((error) => {
            console.error(error);
        })
    }

    getUsers() {
        return this.state.users;
    }

    componentDidMount() {
        this.getUsersData(null);
    }

    render() {
        return (
            <div>
                <UserTable users={this.getUsers()}/>
                <button onClick={this.getUsersData} type={'button'}>
                    Update User Data
                </button>
            </div>
        );
    }
}

export default App;
