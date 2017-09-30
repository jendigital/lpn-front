import React, { Component } from 'react'

import MainLayout from '../../layouts/default'
import Pics from './components/pics'

class MyPics extends Component {
    render() {
        return (
            <MainLayout identification={this.props}>
                <Pics />
            </MainLayout>
        )
    }
}

export default MyPics
