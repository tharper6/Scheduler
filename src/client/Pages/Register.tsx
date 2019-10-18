import * as React from 'react';
import {json, SetAccessToken} from '../Utils/api'
import { RouteComponentProps, withRouter } from 'react-router';
import { ISport } from '../Utils/interfaces';

class Register extends React.Component<IRegisterProps, IRegisterState> {

    constructor(props: IRegisterProps) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            trainingRole: '',
            sports: [],
            sport: ''
        };
    }

    async componentDidMount() {
        let sports = await json('/api/sports');
        this.setState({ sports })
    }

    async handleRegister(e: any) {
        e.preventDefault();
        let newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            trainingrole: this.state.trainingRole,
            sportid: this.state.sport
        }
        try {
            let result = await fetch('/auth/register', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(newUser)
            }).then((res) => res.json()).then((data) => data);
            if(result) {
                this.props.history.push(`/profile/${result.userid}`);
            }
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <main className="container my-5">
                <h1 className="row justify-content-center">Registration</h1>
                <form className=" bg-white form-group border border-dark rounded p-2">
                    <label>Name:</label>
                    <input value={this.state.username} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ username: e.target.value })} className="form-control" type="text" />
                    <label>Email:</label>
                    <input value={this.state.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })} className="form-control" type="text" />
                    <label>Password:</label>
                    <input value={this.state.password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ password: e.target.value })} className="form-control" type="password" />
                    <label>Role:</label>
                    <select className="form-control" value={this.state.trainingRole} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => this.setState({ trainingRole: e.target.value })}>
                        <option value="default">Please Select a Role...</option>
                        <option value="trainer">Trainer</option>
                        <option value="trainee">Trainee</option>
                    </select>
                    <label>Sport:</label>
                    <select className="form-control" value={this.state.sport} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => this.setState({ sport: e.target.value })}>
                        <option>Please Select a Sport...</option>
                        {this.state.sports.map(sport => {
                            return(
                                <option value={sport.id}>{sport.sportname}</option>
                            )
                        })}
                    </select>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleRegister(e)} className="btn btn-dark rounded my-2 form-control text-bolder">Register!</button>
                </form>
            </main>
        )
    }
}

export interface IRegisterProps extends RouteComponentProps<{userid: string}> { }

export interface IRegisterState {
    username: string,
    email: string,
    password: string,
    trainingRole: string,
    sports: ISport[],
    sport: string
}

export default withRouter(Register);