import React, { Component } from 'react'
import './index.css'
import { FormattedMessage } from 'react-intl'
import $ from 'jquery'
import Cookie from '../../../components/commun/cookie'

class Life extends Component {
    render() {
        return (
            <div id="life">
                <Cookie />
            </div>
        )
    }
}

export default Life
