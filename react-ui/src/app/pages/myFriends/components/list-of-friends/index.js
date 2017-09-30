import React, { Component } from 'react'
import './index.css'
import { FormattedMessage } from 'react-intl'
import $ from 'jquery'
import Cookie from '../../../components/commun/cookie'

class ListOfFriends extends Component {
    render() {
        return (
            <div id="list-of-friends">
                <Cookie />
            </div>
        )
    }
}

export default ListOfFriends
