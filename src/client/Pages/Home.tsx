import * as React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component<IHomeProps, IHomeState> {

    constructor(props: IHomeProps) {
        super(props);
        this.state = {
            name: null
        };
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid body">
                <div className="container-fluid">
                    <h1 className="display-4 text-center">Pro Trainers</h1>
                    <p className="lead text-center">Baseball, Football, Basketball and Hockey Training.</p>
                    <div className="row justify-content-around">
                    <Link className="btn btn-dark text-white rounded shadow" to='/login'>Login</Link>
                    <Link className="btn btn-dark text-white rounded shadow" to='/register'>Register</Link>
                    </div>
                </div>
            </div>
            
        )
    }
}

export interface IHomeProps { }

export interface IHomeState {
    name: string;
}

export default Home;