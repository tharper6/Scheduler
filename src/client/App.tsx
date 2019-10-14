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
// import Sessions from './Pages/Sessions';
// import AddSession from './Pages/AddSession';
// import Calendar from './Pages/Calendar';


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
                    <Route path='/profile/:userid' component={Profile} />
                    <Route path='/trainers' component={Trainers} />      
                    <Route path='/trainees' component={Trainees} />
                    <Route path='/schedule/:id' component={Schedule} /> 
                    {/* <Route path='/sessions' component={Sessions} />  */}
                    {/* <Route path='/addsession' component={AddSession} />    */}
                    {/* <Route exact path='/calendar' component={Calendar} /> */}
                </Switch>
            </Router>
            </>
        )
    }
}

export interface IAppProps { }


export default App;