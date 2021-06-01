import React from 'react';
import {HashRouter , Route} from 'react-router-dom';
import Header from './header';
import Login from './login';
import Signup from './signup';
import Home from './home';
import Viewprofile from './viewprofile';



function MyApp() {
  
  return <HashRouter>
    <Header />
    <Route exact path="/" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/viewprofile" component={Viewprofile} />
    </HashRouter>
}

export default MyApp;
