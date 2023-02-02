import React, {MouseEvent} from 'react';
import axios from "axios";
import {User, UserTable} from './components/UserTable/UserTable';

type Props = {};

type State = {
    users: Array<User> | [],
    totalRequests: number,
    alert: boolean
};

const userApiUrl = 'https://jsonplaceholder.typicode.com/users';

class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            users: [],
            totalRequests: 0,
            alert: false
        };

        this.getUsersData = this.getUsersData.bind(this);
        this.getUsers = this.getUsers.bind(this);
    }

    getUsersData(e: MouseEvent<HTMLElement> | null) {
        if (e !== null) e.preventDefault();
        axios.get(userApiUrl)
            .then(response => {
                const usersData: Array<User> = response.data;
                // console.log('Get users data: ', usersData);
                this.setState(
                    {
                        ...this.state,
                        totalRequests: this.state.totalRequests + 1,
                        users: usersData
                    }
                );
            }).catch((error) => {
            console.error(error);
        })
    }

    componentDidUpdate(prevProps: Props) {
        if (this.state.totalRequests >= 20 && !this.state.alert) {
            this.setState({...this.state, alert: true});
        }
    }

    handler(e: any) {
        console.log(e)
        console.log('click');
    }

    componentDidMount() {
        this.getUsersData(null);
        window.addEventListener('click', this.handler)
    }

    componentWillUnmout() {
        window.removeEventListener('click', this.handler);
    }

    getUsers() {
        return this.state.users;
    }

    render() {
        const users = this.getUsers();
        return (
            <div>
                <UserTable users={users}/>

                <button onClick={this.getUsersData} type={'button'}>
                    Update Users Data
                </button>
                {
                    this.state.alert &&
                        <h2>
                            Осторожно, не превысьте количество запросов на
                            сегодня!
                        </h2>
                }
            </div>
        );
    }
}

export default App;
