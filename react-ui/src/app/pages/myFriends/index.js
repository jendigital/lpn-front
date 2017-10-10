import React, { Component } from 'react'

import MainLayout from '../../layouts/default'
import ListOfFriends from './components/list-of-friends'
import ListOfFriendsMobile from './components/list-of-friends-mobile'
import Profile from '../components/commun/profile'
import Cookie from '../components/commun/cookie'

class MyFriends extends Component {
    render() {
        return (
            <MainLayout identification={this.props}>
                <div className='responsive-vue'>
                    <ListOfFriendsMobile />
                </div>
                <div className='web-vue'>
                    <ListOfFriends />
                    <Profile />
                </div>
                <Cookie />
            </MainLayout>
        )
    }
}

export default MyFriends
