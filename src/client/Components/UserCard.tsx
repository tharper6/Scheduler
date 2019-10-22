import * as React from 'react';
import { IUser, ISport, ISession } from '../Utils/interfaces';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import * as moment from 'moment'
import { User } from '../Utils/api';
import { IoIosContact } from "react-icons/io";

class UserCard extends React.Component<IUserCardProps> {

    constructor(props: IUserCardProps) {
        super(props);
    }

    trainerbutton() {
        if (this.props.user.trainingrole === 'trainer') {
            return (
                <>
                <Link className="btn btn-dark mr-3" to="/trainees">Go to Trainees</Link>
                <Link className="btn btn-dark ml-3" to={`/profile/bio/${User.userid}`}>Add/Update Bio</Link>
                </> 
            )
            
        } else {
            return <Link className="btn btn-dark" to="/trainers">Go To Trainers</Link>
        }
    }

    // logoutbutton() {
    //     localStorage.clear();
    //     this.props.history.push('/')
    //     window.location.reload();
    // }

    cards (label: string, data: any) {
        return (
            <p className="text-center">
                <i>{label}: </i>
                <i>{data}</i>
            </p>
        )
    }

    combineDateTime(date: any, time: any) {
        let modifiedDate = date.split('T');
        modifiedDate.pop();
        let modifiedTime = time + ':00';
        modifiedDate.push(modifiedTime);
        let desiredFormat = modifiedDate.join('T');
        return desiredFormat;
    }

    render() {
        return (
            <>
                <h1 className="text-center">Profile Page</h1>
                <div className="container">
                    <div className="row flex-center text-center mr-5">
                        <br />
                        <div className="col-md-3 h-50 text-center ml-5 mt-3">
                            <img style={{ maxWidth: '100%', height: 'auto' }} className="border rounded-circle pt-3" src={this.props.user.avatar} alt="" />
                        </div>
                        <div className="col-md-6 mt-5 text-center ml-5">
                            <h2 className="" >{this.props.user.username}</h2>
                            <h5 className="" >{this.props.user.email}</h5>
                            <h5 className="" >{this.props.user.trainingrole}</h5>
                            <h5 className="" >{this.props.user.sportname}</h5>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-4">
                    {this.trainerbutton()}
                    {/* <button className="btn btn-dark ml-4" onClick={() => this.logoutbutton()} >Logout</button> */}
                </div>
                <hr className="text-dark" />
                <section>
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-header text-center">Upcoming Sessions</h1>
                            <div>{this.props.sessions.map(session => {
                                this.combineDateTime(session.date, session.time)
                                return (
                                    <div key={session.id}>
                                        <div className="card mt-2">
                                            <h5 className="card-header text-center">{session.name}</h5>
                                            <div className="card-body">
                                                <p className="text-center">
                                                    <i>Date: </i>
                                                    <i>{moment(session.date).format('MMMM Do YYYY')}</i>
                                                </p>
                                                <p className="text-center">
                                                    <i>Time: </i>
                                                    <i>{moment(this.combineDateTime(session.date, session.time)).format('h:mm:ss a')}</i>
                                                </p>
                                                {this.cards('Details', session.summary)}
                                                {this.cards('Trainer', session.trainer_name)}
                                                {this.cards('Trainee', session.trainee_name)}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}</div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
    
}

export interface IUserCardProps extends RouteComponentProps<{userid: string}> {
    user: IUser,
    sessions: ISession []
 }

//  const imgstyle = {
//      width: '50%',
//      height: '50%',
//  }

export default withRouter(UserCard);
