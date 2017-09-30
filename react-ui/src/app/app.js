import React, { Component } from 'react'
import { Route } from 'react-router'

import Identification from './pages/authentification/identification/index'
//import MainLayout from './layouts/default/layout'
import Home from './pages/homepage'
import MyStory from './pages/myFriends'
import MyTrip from './pages/myTrip'
import MyFriends from './pages/myFriends'
import MyPics from './pages/myPics'
import MyLife from './pages/myLife'
import MyPage from './pages/myPage'
import MyProfile from './pages/myProfile'

class App extends Component {
    render() {
        return (
            <div id="container">
                <Route exact path='/' render={() => <Identification store={this.props.store} history={this.props.history} login="false" signin="false" />} />
                <Route path='/login' render={() => <Identification store={this.props.store} history={this.props.history} login="true" signin="false" />} />
                <Route path='/signin' render={() => <Identification store={this.props.store} history={this.props.history} login="false" signin="true" />} />
                <Route path='/home' render={() => <Home store={this.props.store} history={this.props.history} />} />
                <Route path='/myStory' render={() => <MyStory store={this.props.store} history={this.props.history} />} />
                <Route path='/myTrip' render={() => <MyTrip store={this.props.store} history={this.props.history} />} />
                <Route path='/myFriends' render={() => <MyFriends store={this.props.store} history={this.props.history} />} />
                <Route path='/myPics' render={() => <MyPics store={this.props.store} history={this.props.history} />} />
                <Route path='/myLife' render={() => <MyLife store={this.props.store} history={this.props.history} />} />
                <Route path='/myPage' render={() => <MyPage store={this.props.store} history={this.props.history} />} />
                <Route path='/myProfile' render={() => <MyProfile store={this.props.store} history={this.props.history} />} />
            </div>
        )
    }
}

export default App
