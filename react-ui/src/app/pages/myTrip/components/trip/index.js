import React, { Component } from 'react'
import './index.css'
import { FormattedMessage } from 'react-intl'
import $ from 'jquery'
import Cookie from '../../../components/commun/cookie'

class Trip extends Component {
    render() {
        return (
            <div id="trip">
                <Cookie />
            </div>
        )
    }
}

export default Trip
