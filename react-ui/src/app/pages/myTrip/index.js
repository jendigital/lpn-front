import React, { Component } from 'react'

import MainLayout from '../../layouts/default'
import Trip from './components/trip'

class MyTrip extends Component {
    render() {
        return (
            <MainLayout identification={this.props}>
                <Trip />
            </MainLayout>
        )
    }
}

export default MyTrip
