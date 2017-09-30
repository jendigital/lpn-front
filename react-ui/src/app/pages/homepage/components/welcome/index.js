import React, { Component } from 'react'
import './index.css'
import { FormattedMessage } from 'react-intl'
import Cookie from '../../../components/commun/cookie'

class Welcome extends Component {
    render() {
        return (
            <div id="welcome">
                <h3><FormattedMessage id="home.hello" /> <span className='firstname'>Jen,</span></h3>
                <h4><FormattedMessage id="home.welcome" /></h4>
                <Cookie />
            </div>
        )
    }
}

export default Welcome
