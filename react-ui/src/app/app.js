import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Menu from './pages/components/commun/menu/menu';
import MobileMenu from './pages/components/commun/mobile_menu/mobile_menu';

import Identification from './pages/authentification/identification/identification';
import Login from './pages/authentification/login/connection/connection';

class App extends Component {
    render () {
        return (
            <div id='content'>
                <Switch>
                    <Route exact path='/' component={Identification} />
                </Switch>
            </div>
        );
    }
}

export default App;
