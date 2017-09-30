import React, { Component } from 'react'
import './index.css'
import { FormattedMessage } from 'react-intl'
import $ from 'jquery'
import Cookie from '../../../components/commun/cookie'

class Profile extends Component {
    render() {
        return (
            <div id="profile">
                <Cookie />
            </div>
        )
    }
}

export default Profile
