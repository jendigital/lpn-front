import React, { Component } from 'react'
import './index.css'
import { FormattedMessage } from 'react-intl'
import $ from 'jquery'

class Cookie extends Component {
    constructor(props) {
        super(props);
        this.cookieDisplay = true;

        this.cookieInfo    = this.cookieInfo.bind(this);
    }

    cookieInfo() {
        if(this.cookieDisplay) {
            $('.toaster').hide();
            this.cookieDisplay = false;
        }
    }

    render() {
        return (
            <div className="toaster info" id="cookie_info" onClick={this.cookieInfo} >
                <span className="glyphicon glyphicon-remove" />
                <FormattedMessage id="cookie.info" />
            </div>
        )
    }
}

export default Cookie
