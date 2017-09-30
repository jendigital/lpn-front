import React, { Component } from 'react'
import './index.css'
import { FormattedMessage } from 'react-intl'
import $ from 'jquery'
import Cookie from '../../../components/commun/cookie'

class Page extends Component {
    render() {
        return (
            <div id="page">
                <Cookie />
            </div>
        )
    }
}

export default Page
