import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Login from './Pages/Login'

class App extends React.Component<IAppProps> {

    render() {
        return (
            <>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                </Switch>
            </Router>
            </>
        )
    }
}

export interface IAppProps { }


export default App;