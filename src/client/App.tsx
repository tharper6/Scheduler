import * as React from 'react';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';


class App extends React.Component<IAppProps> {

    render() {
        return (
            <>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/profile/:userid' component={Profile} />
                </Switch>
            </Router>
            </>
        )
    }
}

export interface IAppProps { }


export default App;