import * as React from 'react';
import { IUser, ISport } from '../Utils/interfaces';
import {json} from '../Utils/api'
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { userInfo } from 'os';

class UserCard extends React.Component<IUserCardProps> {

    constructor(props: IUserCardProps) {
        super(props);
    }

    trainerbutton () {
        let [user] = this.props.user
        if (user.trainingrole === 'trainer') {
            return <Link to="/trainees">Go to Trainees</Link>
        } else {
            return <Link to="/trainers">Go To Trainers</Link>
        }
    }

    render() {
        let [user] = this.props.user
        return(
            <>
            <section className="row justify-content-center">
                <div>
                    <h1 className="text-secondary">Profile Page</h1>
                    <br/>
                    <h3 className="text-center">{user.name}</h3>
                    <h5 className="text-center"> {user.email}</h5>
                    <p>{user.trainingrole}</p>
                    <p>{user.sportid}</p>
                    {this.trainerbutton()}
                </div>
            </section>
            <hr className="text-dark"/>
            </>
        )
    }
    
}

export interface IUserCardProps extends RouteComponentProps<{userid: string}> {
    user: IUser[]
 }

export default withRouter(UserCard);
