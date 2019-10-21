import * as React from 'react';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Trainers from './Pages/Trainers';
import Trainees from './Pages/Trainees';
import Schedule from './Pages/Schedule';
import TrainerBio from './Pages/TrainerBio';



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
                    <Route exact path='/trainers' component={Trainers} />      
                    <Route exact path='/trainees' component={Trainees} />
                    <Route exact path='/schedule/:userid' component={Schedule} /> 
                    <Route exact path='/profile/bio/:userid' component={TrainerBio} /> 
                </Switch>
            </Router>
            </>
        )
    }
}

export interface IAppProps { }


export default App;