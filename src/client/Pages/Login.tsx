import * as React from 'react'; 
import {json, SetAccessToken} from '../Utils/api'
import { RouteComponentProps } from 'react-router';

class Login extends React.Component<ILoginProps, ILoginState> {

    constructor(props: ILoginProps) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    async handleLogin(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        try {
            let result = await json('/auth/login', 'POST', this.state);
            SetAccessToken(result.token, { userid: result.token, role: result.role })
            if(result.role === 'admin') {
                this.props.history.push(`/profile/${result.userid}`)
            } else {
                this.props.history.push('/register')
            }
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <main className="container my-5">
                <form className="form-group border border-dark bg-white p-2 rounded">
                    <label>Email:</label>
                    <input value={this.state.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })} className="form-control" type="text"/>
                    <label>Password:</label>
                    <input value={this.state.password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ password: e.target.value })} className="form-control" type="text"/>
                    <button className="btn btn-dark form-control mt-2" onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleLogin(e)} >Login!</button>
                </form>
            </main>
        )
    }
}

export interface ILoginProps extends RouteComponentProps<{userid: string}> { }

export interface ILoginState {
    email: string,
    password: string
}

export default Login;