import * as React from 'react';
import {json} from '../Utils/api'
import { RouteComponentProps, withRouter } from 'react-router';
import { IUser } from '../Utils/interfaces';
import UserCard from '../Components/UserCard';

class Profile extends React.Component<IProfileProps, IProfileState> {

    constructor(props: IProfileProps) {
        super(props);
        this.state = {
            user: []
        };
    }

    async componentDidMount() {
        let result = await json(`/api/users/${this.props.match.params.userid}`);
        // console.log(result)
        this.setState({ user: result })
    }

    render() {
        if (!this.state.user.length) return null;
        const user = this.state.user[0]
        return (
            <main className="container my-5">
                <UserCard user={this.state.user} />
            </main>
        )
    }
}

export interface IProfileProps extends RouteComponentProps<{userid: string}> { }

export interface IProfileState {
    user: IUser []
}

export default withRouter(Profile);