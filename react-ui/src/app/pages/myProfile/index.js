import React, { Component } from 'react'

import MainLayout from '../../layouts/default'
import Profile from './components/profile'

class MyProfile extends Component {
    render() {
        return (
            <MainLayout identification={this.props}>
                <Profile />
            </MainLayout>
        )
    }
}

export default MyProfile
