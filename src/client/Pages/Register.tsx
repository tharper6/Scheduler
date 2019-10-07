import * as React from 'react';
import {json, SetAccessToken} from '../Utils/api'
import { RouteComponentProps, withRouter } from 'react-router';

class Register extends React.Component<IRegisterProps, IRegisterState> {

    constructor(props: IRegisterProps) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        };
    }

    async handleRegister(e: any) {
        e.preventDefault();
        let newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
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
            // let result = await json('/auth/register', 'POST', newUser);
            // trying to figure out setaccesstokens
            // SetAccessToken(result.token, {userid: result.userid, role: result.role});
            // this.props.history.push(`/profile/${result.userid}`)
            // if(this.state.role === 'trainer') {
            //     this.props.history.push('/trainees/home')
            // } else {
            //     this.props.history.push('/trainers/home')
            // }
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <main className="container my-5">
                <form className=" bg-white form-group border border-dark rounded p-2">
                    <label>Name:</label>
                    <input value={this.state.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: e.target.value })} className="form-control" type="text" />
                    <label>Email:</label>
                    <input value={this.state.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })} className="form-control" type="text" />
                    <label>Password:</label>
                    <input value={this.state.password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ password: e.target.value })} className="form-control" type="text" /> 
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleRegister(e)} className="btn btn-dark rounded my-2 form-control">Register!</button>
                </form>
            </main>
        )
    }
}

export interface IRegisterProps extends RouteComponentProps<{userid: string}> { }

export interface IRegisterState {
    name: string,
    email: string,
    password: string
}

export default withRouter(Register);