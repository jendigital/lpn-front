import React, { Component } from 'react'
import MainLayout from '../../layouts/default'
import Life from './components/life'

class MyLife extends Component {
    render() {
        return (
            <MainLayout identification={this.props}>
                <Life />
            </MainLayout>
        )
    }
}

export default MyLife
