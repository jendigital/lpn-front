import React, { Component } from 'react'

import MainLayout from '../../layouts/default'
import Welcome from './components/welcome'

class Home extends Component {
    render() {
        return (
            <MainLayout>
                <Welcome test={true} />
            </MainLayout>
        )
    }
}

export default Home
