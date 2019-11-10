import * as React from 'react';
import { IUser, ISport, ISession } from '../Utils/interfaces';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import * as moment from 'moment'
import { User, json } from '../Utils/api';
import Swal from 'sweetalert2';

class UserCard extends React.Component<IUserCardProps> {

    fileInput: any;

    constructor(props: IUserCardProps) {
        super(props);
        this.fileInput = React.createRef();
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

    contactbutton(traineeid?: any, trainerid?: any) {
        if (this.props.user.trainingrole === 'trainer') {
            return (
                <Link className="btn btn-warning mr-3 border border-dark" to={`/contact/${traineeid}`}>Contact Trainee</Link>
            )
        } else {
            return <Link className="btn btn-warning mr-3 border border-dark" to={`/contact/${trainerid}`}>Contact Trainer</Link>
        }
    }

    sessionCount() {
        if (this.props.user.trainingrole === 'trainer') {
            return <i>{this.props.trainerCount}</i>
        } else {
            return <i>{this.props.traineeCount}</i>
        }
    }

    cancelSession(sessionid: number) {
        Swal.fire({
            title: 'Are you sure you want to cancel this session?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel session!'
          }).then((result: any) => {
            if (result.value) {
              Swal.fire(
                'Cancelled!',
                'Your session has been cancelled.',
              )
              let result = json(`/api/sessions/${sessionid}`, 'DELETE');
              window.location.reload();
            }
          })  
    }

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

    pictureInput() {
        if (this.props.hidePicture === false) {
            return(
                <form>
                    <input type="file" className="form-control-file mt-2" ref={this.fileInput} />
                    <button className="btn btn-primary mt-1" onClick={this.handleSavePicture}>Save!</button>
                </form>
            ) 
        }
    };

    handleSavePicture = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const data = new FormData();
        data.append('title', 'Test Title');
        data.append('content', 'blah blah');
        data.append('avatar', this.fileInput.current.files[0]);
        await fetch(`/api/users/${this.props.match.params.userid}`, {
            method: 'POST',
            body: data
        });
        window.location.reload();
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
                            <button onClick={this.props.pictureHandleInputChange} className="btn btn-dark mt-1">Change Profile Picture</button>
                            {this.pictureInput()}
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
                </div>
                <hr className="text-dark" />
                <section>
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-header text-center">Upcoming Sessions: {this.sessionCount()} </h1>
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
                                                <div className="row justify-content-center">
                                                    {this.contactbutton( session.traineeid, session.trainerid )}
                                                    <button className="btn btn-danger" onClick={(e: React.MouseEvent<HTMLButtonElement>)=> this.cancelSession(session.id)}>Cancel Session</button>
                                                </div>
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
    sessions: ISession [],
    trainerCount: any,
    traineeCount: any,
    hidePicture: boolean,
    pictureHandleInputChange: any,
    // fileInput: any
 }

export default withRouter(UserCard);
