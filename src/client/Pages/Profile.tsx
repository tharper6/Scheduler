import * as React from 'react';
import {useRef} from 'react';
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
            sessions: [],
            trainerCount: {
                NumberOfSessions: '0'
            },
            traineeCount: {
                NumberOfSessions: '0'
            },
            hidePictureInput: true
        };
    }

    

    pictureInputChange = () => {
        this.setState({ hidePictureInput: !this.state.hidePictureInput })
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
            let traineeCount = await json(`/api/sessions/traineeCount/${this.props.match.params.userid}`);
            this.setState({ sessions })
            this.setState({ traineeCount })
        } else {
            let sessions = await json(`/api/sessions/trainer/${this.props.match.params.userid}`);
            let trainerCount = await json(`/api/sessions/trainerCount/${this.props.match.params.userid}`);
            this.setState({ sessions })
            this.setState({ trainerCount })
        }
        this.setState({ user: result });
    }

    render() {
        this.isLogin();
        return (
          <main className="container my-5">
            <UserCard
              user={this.state.user}
              sessions={this.state.sessions}
              traineeCount={this.state.traineeCount.NumberOfSessions}
              trainerCount={this.state.trainerCount.NumberOfSessions}
              hidePicture={this.state.hidePictureInput}
              pictureHandleInputChange={this.pictureInputChange}
            //   fileInput={this.fileInput}
            />
          </main>
        );
    }
}

export interface IProfileProps extends RouteComponentProps<{userid: string}> { }

export interface IProfileState {
    user: IUser,
    sessions: ISession [],
    trainerCount: any,
    traineeCount: any,
    hidePictureInput: boolean
}

export default withRouter(Profile);