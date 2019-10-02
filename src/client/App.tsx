import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Login from './Pages/Login';
import Register from './Pages/Register';
import TrainersHome from './Pages/TrainersHome';
import TraineesHome from './Pages/TraineesHome';


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
                    <Route exact path='/trainers/home' component={TrainersHome} />
                    <Route exact path='/trainees/home' component={TraineesHome} />
                </Switch>
            </Router>
            </>
        )
    }
}

export interface IAppProps { }


export default App;