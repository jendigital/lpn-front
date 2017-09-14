import React, { Component } from 'react'
import { Route } from 'react-router'

import Identification from './pages/authentification/identification/index'
import MainLayout from './layouts/default/layout'
import Home from './pages/homepage/home'

class App extends Component {
    render() {
        return (
            <div id="container">
                <Route exact path='/' render={() => <Identification store={this.props.store} history={this.props.history} login="false" signin="false" />} />
                <Route exact path='/login' render={() => <Identification store={this.props.store} history={this.props.history} login="true" signin="false" />} />
                <Route exact path='/signin' render={() => <Identification store={this.props.store} history={this.props.history} login="false" signin="true" />} />
                <Route exact path='/home' render={() => <MainLayout store={this.props.store} history={this.props.history} ><Home  /></MainLayout>} />
            </div>
        )
    }
}

export default App
