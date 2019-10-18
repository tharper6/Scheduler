import * as React from 'react';
import {json, AccessToken} from '../Utils/api'
import { RouteComponentProps, withRouter } from 'react-router';
import { IUser, ISession } from '../Utils/interfaces';
import UserCard from '../Components/UserCard';

class Profile extends React.Component<IProfileProps, IProfileState> {

    constructor(props: IProfileProps) {
        super(props);
        this.state = {
            user: {
                id: 0,
                username: '',
                email: '',
                password: '',
                sportid: '',
                role: '',
                trainingrole: '',
                sportname: '',
                avatar: ''
            },
            sessions: []
        };
    }

    isLogin = () => {
        if(!AccessToken) {
             this.props.history.push('/login')
        }
    }

    async componentDidMount() {
        let result = await json(`/api/users/${this.props.match.params.userid}`);
        if (result.trainingrole === 'trainee') {
            let sessions = await json(`/api/sessions/trainee/${this.props.match.params.userid}`);
            this.setState({ sessions })
        } else {
            let sessions = await json(`/api/sessions/trainer/${this.props.match.params.userid}`);
            this.setState({ sessions })
        }
        this.setState({ user: result });
    }

    render() {
        this.isLogin();
        // const user = this.state.user[0]
        return (
            <main className="container my-5">
                <UserCard user={this.state.user} sessions={this.state.sessions}/>
            </main>
        )
    }
}

export interface IProfileProps extends RouteComponentProps<{userid: string}> { }

export interface IProfileState {
    user: IUser,
    sessions: ISession []
}

export default withRouter(Profile);