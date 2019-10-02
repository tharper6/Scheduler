import * as React from 'react';

class LoginForm extends React.Component<LoginProps, LoginState> {

    constructor(props: LoginProps) {
        super(props);
        this.state = {
            email: '',
            password: '',
            role: '',
        }
    }

    async handleRoleSelect(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        this.setState({ role: e.target.value })
    }

    render() {
        return(
            <form className="form-group border border-dark p-2">
                <label>Email:</label>
                <input value={this.state.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })} className="form-control" type="text"/>
                <label>Password:</label>
                <input value={this.state.password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ password: e.target.value })} className="form-control" type="password"/>
                <div className="mt-2">
                    <label>
                        <input type="radio" name="role" value='trainer' checked={this.state.role === 'trainer'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleRoleSelect(e)} className="mx-1"/>
                        Trainer
                    </label>
                    <label className="mx-3">
                        <input type="radio" name="role" value='trainee' checked={this.state.role === 'trainee'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleRoleSelect(e)} className="mx-1"/>
                        Trainee
                    </label>
                </div>
                <button className=" btn btn-dark text-white form-control my-2" >Login!</button>
            </form>
        )
    }
}

export interface LoginProps {}
export interface LoginState {
    email: string,
    password: string,
    role: string,
} 

export default LoginForm;

// might not need the role select radio buttons on page