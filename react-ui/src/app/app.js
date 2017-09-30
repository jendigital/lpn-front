import React, { Component } from 'react'
import { Route } from 'react-router'

import Identification from './pages/authentification/identification/index'
//import MainLayout from './layouts/default/layout'
import Home from './pages/homepage'

class App extends Component {
    render() {
        return (
            <div id="container">
                <Route exact path='/' render={() => <Identification store={this.props.store} history={this.props.history} login="false" signin="false" />} />
                <Route path='/login' render={() => <Identification store={this.props.store} history={this.props.history} login="true" signin="false" />} />
                <Route path='/signin' render={() => <Identification store={this.props.store} history={this.props.history} login="false" signin="true" />} />
                <Route path='/home' render={() => <Home store={this.props.store} history={this.props.history} />} />
            </div>
        )
    }
}

export default App
