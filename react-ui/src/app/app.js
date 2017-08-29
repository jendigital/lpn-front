import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Identification from './pages/authentification/identification/identification';
import RequireAuth from './pages/authentification/require-auth/require-auth';

import MainLayout from './layouts/default/layout';
import Home from './pages/homepage/home';

class App extends Component {
    render () {
        return (
            <div id='container'>
                <Switch>
                    <Route exact path='/' component={Identification} />
                    <Route exact path='/login' component={Identification} />
                    <Route exact path='/signin' component={Identification} />
                    <Route exact path='/home' render={() => RequireAuth(<MainLayout><Home /></MainLayout>)} />
                </Switch>
            </div>
        );
    }
}

export default App;
