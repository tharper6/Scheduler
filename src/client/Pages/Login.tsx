import * as React from 'react';
import LoginForm from '../Components/LoginForm'

class Login extends React.Component<ILoginProps, ILoginState> {

    constructor(props: ILoginProps) {
        super(props);
        this.state = {
            name: null
        };
    }

    render() {
        return (
            <main className="container my-5">
                <LoginForm  />
            </main>
        )
    }
}

export interface ILoginProps { }

export interface ILoginState {
    name: string;
}

export default Login;