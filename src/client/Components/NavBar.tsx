import * as React from 'react';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import {User} from '../Utils/api'

const NavBar: React.SFC<NavBarProps> = (props) => {

    const logoutbutton = () => {
        localStorage.clear();
        props.history.push('/login')
        window.location.reload()
    }

    return (
        <nav className="bg-dark navbar shadow text-white rounded row justify-content-around fixed-top">
            <Link className="text-white rounded" to={`/profile/${User.userid}`}>Profile</Link>
            <Link className="text-white rounded" to='/'>Home</Link>
            <Link className="text-white rounded" to='/login'>Login</Link>
            <button onClick={logoutbutton} className="text-white" style={button} >Logout</button>
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