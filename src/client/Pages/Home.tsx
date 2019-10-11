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
            <>
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
                        <section className="row justify-content-center text-center">
                            <div className="card col-md-8 my-2 p-2">
                                <div className="card-body">
                                    <h1>Step 1: Register</h1>
                                    <Link className="btn btn-dark rounded col-md-4" to="/register">Register</Link>
                                </div>
                            </div>
                            <div className="card col-md-8 my-2 p-2">
                                <div className="card-body">
                                    <h1>Step 2: Check Out Our Trainers</h1>
                                    <Link className="btn btn-dark rounded col-md-4" to="/trainers">Trainers!</Link>
                                </div>
                            </div>
                            <div className="card col-md-8 my-2 p-2">
                                <div className="card-body">
                                    <h1>Step 3: Schedule Session</h1>
                                    <Link className="btn btn-dark rounded col-md-4" to="/sessions">Schedule Session!</Link>
                                </div>
                            </div>
                        </section>
            </>
        )
    }
}

export interface IHomeProps { }

export interface IHomeState {
    name: string;
}

export default Home;