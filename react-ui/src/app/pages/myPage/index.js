import React, { Component } from 'react'

import MainLayout from '../../layouts/default'
import Page from './components/page'

class MyPage extends Component {
    render() {
        return (
            <MainLayout identification={this.props}>
                <Page />
            </MainLayout>
        )
    }
}

export default MyPage
