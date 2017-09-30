import React, { Component } from 'react'
import './index.css'
import { FormattedMessage } from 'react-intl'
import $ from 'jquery'
import Cookie from '../../../components/commun/cookie'

class Story extends Component {
    render() {
        return (
            <div id="story">
                <Cookie />
            </div>
        )
    }
}

export default Story
