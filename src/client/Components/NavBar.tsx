import * as React from 'react';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import {User} from '../Utils/api';
import { IoIosPerson } from "react-icons/io";

const NavBar: React.SFC<NavBarProps> = (props) => {

    const logoutbutton = () => {
        localStorage.clear();
        props.history.push('/login')
        window.location.reload()
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <IoIosPerson style={{ width: '50', height: '25' }} />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/login">Login</a>
                            <a className="dropdown-item" href={`/profile/${User.userid}`}>Profile</a>
                            <a className="dropdown-item" href="/trainers">Check Out All Trainers</a>
                            <a className="dropdown-item" href="/contact">Contact Us</a>
                            <button onClick={logoutbutton} className="text-dark ml-4" style={button} >Logout</button>
                        </div>
                    </li>
                </ul>
                <Link className="text-dark rounded" to='/'>Home</Link>
            </div>
        </nav>
    )
}

const button = {
    background: 0,
    border: 0,
    padding: 0
}

export interface NavBarProps extends RouteComponentProps {}

export default withRouter(NavBar);