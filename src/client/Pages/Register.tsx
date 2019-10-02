import * as React from 'react';
import {json, SetAccessToken} from '../Utils/api'
import { RouteComponentProps } from 'react-router';

class Register extends React.Component<IRegisterProps, IRegisterState> {

    constructor(props: IRegisterProps) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            role: ''
        };
    }

    async handleRoleSelect(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        this.setState({ role: e.target.value })
    }

    async handleRegister(e: any) {
        e.preventDefault();
        let newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            role: this.state.role
        }
        try {
            let result = await json('/auth/register', 'POST', newUser);
            // trying to figure out setaccesstokens
            SetAccessToken(result.token, {userid: result.token, role: result.role});
            if(this.state.role === 'trainer') {
                this.props.history.push('/trainees/home')
            } else {
                this.props.history.push('/trainers/home')
            }
            

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <main className="container my-5">
                <form className="form-group border border-dark rounded p-2">
                    <label>Name:</label>
                    <input value={this.state.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: e.target.value })} className="form-control" type="text" />
                    <label>Email:</label>
                    <input value={this.state.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })} className="form-control" type="text" />
                    <label>Password:</label>
                    <input value={this.state.password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ password: e.target.value })} className="form-control" type="text" />
                    <label>Role:</label>
                    <div>
                        <label>Trainer</label>
                        <input className="mx-2" name="role" checked={this.state.role === 'trainer'} value="trainer" onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleRoleSelect(e)}  type="radio" />
                        <label className="mx-2" >Trainee</label>
                        <input type="radio" name="role" checked={this.state.role === 'trainee'} value="trainee" onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleRoleSelect(e)} />
                    </div>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleRegister(e)} className="btn btn-dark rounded my-2 form-control">Register!</button>
                </form>
            </main>
        )
    }
}

export interface IRegisterProps extends RouteComponentProps { }

export interface IRegisterState {
    name: string,
    email: string,
    password: string,
    role: string
}

export default Register;