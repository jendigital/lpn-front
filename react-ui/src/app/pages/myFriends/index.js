import React, { Component } from 'react'

import MainLayout from '../../layouts/default'
import ListOfFriends from './components/list-of-friends'

class MyFriends extends Component {
    render() {
        return (
            <MainLayout identification={this.props}>
                <ListOfFriends />
            </MainLayout>
        )
    }
}

export default MyFriends
