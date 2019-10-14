import * as React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="bg-dark navbar shadow text-white rounded row justify-content-around fixed-top">
            {/* <Link className="text-white rounded" to='/login'>Login</Link> */}
            <Link className="text-white rounded" to='/'>Home</Link>
            <Link className="text-white rounded" to='/profile/:userid'>Profile</Link>
        </nav>
    )
}

export default NavBar;