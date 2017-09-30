import React, { Component } from 'react'

import MainLayout from '../../layouts/default'
import Story from './components/story'

class MyStory extends Component {
    render() {
        return (
            <MainLayout identification={this.props}>
                <Story />
            </MainLayout>
        )
    }
}

export default MyStory
