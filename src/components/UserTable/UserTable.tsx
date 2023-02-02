import React, {FC} from 'react';

type Geo = {
    lat: string,
    lng: string
};

type Company = {
    name: string,
    catchPhrase: string,
    bs: string
};

type Address = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo
};

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
};

type TableProps = {
    users: Array<User> | [];
};

type TableState = {
    users: Array<User> | [];
};

type RowProps = {
    user: User
}

const TableRow: FC<RowProps> = ({user}) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.company.name}</td>
        </tr>
    );
};


class UserTable extends React.Component<TableProps, TableState> {
    constructor(props: TableProps) {
        super(props);
        this.state = {
            users: props.users
        };
    }

    shouldComponentUpdate(nextProps: TableProps, nextState: TableState){
        if (JSON.stringify(this.state.users) !== JSON.stringify(nextProps.users)){
            this.setState({users: nextProps.users});
            return true;
        }
        return false;
    }


    render() {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Company name</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(
                            (user,i) =>
                                <TableRow key={i} user={user}/>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export {
    UserTable,
    User
};
