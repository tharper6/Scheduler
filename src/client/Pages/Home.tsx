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
            <div className="jumbotron jumbotron-fluid body m-0">
                <div className="container-fluid">
                    <h1 className="display-4 text-center">Pro Trainers</h1>
                    <p className="lead text-center">Baseball, Football, Basketball and Hockey Training.</p>
                    <div className="row justify-content-around">
                    <Link className="btn btn-dark text-white rounded shadow" to='/login'>Login</Link>
                    <Link className="btn btn-dark text-white rounded shadow" to='/register'>Register</Link>
                    </div>
                </div>
            </div>
            <section className="p-5">
                <p>Welcome to Pro Trainers, where the hassle to find professional trainers is now gone! Pro Trainers is here to help you get in the best shape of your life! Whether you are a noobie to the gym, a casual gym-goer or if you train intensely 5 times a week, we are here to get you in the shape of your life! Follow the simple steps below to get started with Pro Trainers today!</p>
            </section>
            <hr/>
            <section className="">
            <div className="row justify-content-center">
                <a href="/register"><h4 className="text-dark">Step 1: Register!</h4></a>
            </div>
            <div className="row justify-content-center">
            <p><i className="text-center" style={down}></i></p>
            </div>
            <div className="row justify-content-center">
            <p><i className="text-center" style={down}></i></p>
            </div>
            <div className="row justify-content-center">
            <p><i className="text-center" style={down}></i></p>
            </div>
            <div className="row justify-content-center">
            <a href="/trainers"><h4 className="text-dark">Step 2: Check Out Our Trainers!</h4></a>
            </div>
            <div className="row justify-content-center">
            <p><i className="text-center" style={down}></i></p>
            </div>
            <div className="row justify-content-center">
            <p><i className="text-center" style={down}></i></p>
            </div>
            <div className="row justify-content-center">
            <p><i className="text-center" style={down}></i></p>
            </div>
            <div className="row justify-content-center">
            <a href="/schedule"><h4 className="text-dark">Step 3: Schedule A Session!</h4></a>
            </div>
            </section>

                        {/* <section className="row justify-content-center text-center">
                            <div className="card col-md-8 my-2 p-2 mt-3">
                                <div className="card-body">
                                    <h1>Step 1: Register</h1>
                                    <Link className="btn btn-dark rounded col-md-4 text-dark" to="/register">Register</Link>
                                </div>
                            </div>
                            <div className="card col-md-8 my-2 p-2">
                                <div className="card-body">
                                    <h1>Step 2: Check Out Our Trainers</h1>
                                    <Link className="btn btn-dark rounded col-md-4 text-dark" to="/trainers">Trainers!</Link>
                                </div>
                            </div>
                            <div className="card col-md-8 my-2 p-2">
                                <div className="card-body">
                                    <h1>Step 3: Schedule Session</h1>
                                    <Link className="btn btn-dark rounded col-md-4 text-dark" to="/sessions">Schedule Session!</Link>
                                </div>
                            </div>
                        </section> */}
            </>
        )
    }
}

const down = {
    border: 'solid black',
    borderWidth: 3,
    display: 'block',
    padding: '3px',
    // transform: 'rotate(45deg)',
    // WebkitTransform: 'rotate (45deg)'
}

export interface IHomeProps { }

export interface IHomeState {
    name: string;
}

export default Home;