import * as React from 'react';
import { IUser, ISport } from '../Utils/interfaces';
import {json} from '../Utils/api'
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { userInfo } from 'os';

class UserCard extends React.Component<IUserCardProps, IUserCardState> {

    constructor(props: IUserCardProps) {
        super(props);
        this.state = {
            sports: [],
            selectedRole: '',
            selectedSport: "0",
            hideTool: false
        };
    }

    async componentDidMount() {
        let sports = await json('/api/sports');
        this.setState({ sports })
    }

    async handleAdd(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        let addInfo = {
            sportid: this.state.selectedSport,
            trainingrole: this.state.selectedRole
        }
        try {
            let add = await json(`/api/users/${this.props.match.params.userid}`, 'PUT', addInfo)
        } catch (error) {
            console.log(error)
        }
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
            {/* <section className="row justify-content-center shadow mt-2">
                <div className="col-md-8 my-2">
                <form className="form-group">
                    <label>Role:</label>
                    <select className="form-control" value={this.state.selectedRole} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => this.setState({ selectedRole: e.target.value })}>
                        <option value="default">Please Select a Role...</option>
                        <option value="trainer">Trainer</option>
                        <option value="trainee">Trainee</option>
                    </select>
                    <label>Sport:</label>
                    <select className="form-control" value={this.state.selectedSport} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => this.setState({ selectedSport: e.target.value })}>
                        <option>Please Select a Sport...</option>
                        {this.state.sports.map(sport => {
                            return(
                                <option value={sport.sportname}>{sport.sportname}</option>
                            )
                        })}
                    </select>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleAdd(e)}>Add!</button>
                </form>
                </div>
            </section> */}
            </>
        )
    }
    
}

export interface IUserCardProps extends RouteComponentProps<{userid: string}> {
    user: IUser[]
 }

export interface IUserCardState {
    sports: ISport[],
    selectedRole: string,
    selectedSport: string,
    hideTool: boolean
}

export default withRouter(UserCard);

// import * as React from 'react';
// import { User } from '../Utils/api';
// import { IUser } from '../Utils/interfaces';

// const UserCard: React.SFC<IUserCardProps> = (props) => {

//     let [user] = props.user

//     return(
//         <>
//         <section className="row justify-content-center">
//             <div>
//                 <h1 className="text-secondary">Profile Page</h1>
//                 <br/>
//                 <h3 className="text-center">{user.name}</h3>
//                 <h5> {user.email}</h5>
//             </div>
//         </section>
//         <hr className="text-dark"/>
//         <section className="row justify-content-center shadow">
//             <div className="card">
//                 <div className="card-body">

//                 </div>
//             </div>
//         </section>
//         </>
//     )
// }

// export interface IUserCardProps { 
//     user: IUser []
// };

// export default UserCard;