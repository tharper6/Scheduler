import * as React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark rounded row justify-content-around">
            {/* <Link className="text-white rounded" to='/login'>Login</Link> */}
            <Link className="text-white rounded" to='/'>Home</Link>
        </nav>
    )
}

export default NavBar;