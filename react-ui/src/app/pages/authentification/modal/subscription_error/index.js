import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import $ from 'jquery'

import './index.css'
import '../modal.css'

class SigninError extends Component {

    constructor(props) {
        super(props);

        this.offAlerts      = this.offAlerts.bind(this);
    }

    offAlerts() {
        $('.toaster').hide();
    }

    render() {
        return (
            <div id="signin_error">
                <div className="toaster info" id="email_match" onClick={this.offAlerts} >
                    <span className="glyphicon glyphicon-remove" />
                    <FormattedMessage id="signin_err.email" />
                </div>
                <div className="toaster error" id="pwd_match" onClick={this.offAlerts} >
                    <span className="glyphicon glyphicon-remove" />
                    <FormattedMessage id="signin_err.pwd" />
                </div>
                <div className="toaster warning" id="pwd_confirm" onClick={this.offAlerts} >
                    <span className="glyphicon glyphicon-remove" />
                    <FormattedMessage id="signin_err.confirm" />
                </div>
                <div className="toaster info" id="lastname_match" onClick={this.offAlerts} >
                    <span className="glyphicon glyphicon-remove" />
                    <FormattedMessage id="signin_err.lastname" />
                </div>
                <div className="toaster info" id="firstname_match" onClick={this.offAlerts} >
                    <span className="glyphicon glyphicon-remove" />
                    <FormattedMessage id="signin_err.firstname" />
                </div>
                <div className="toaster info" id="gender_select" onClick={this.offAlerts} >
                    <span className="glyphicon glyphicon-remove" />
                    <FormattedMessage id="signin_err.gender" />
                </div>
                <div className="toaster warning" id="date_select" onClick={this.offAlerts} >
                    <span className="glyphicon glyphicon-remove" />
                    <FormattedMessage id="signin_err.date" />
                </div>
                <div className="toaster warning" id="legal_date" onClick={this.offAlerts} >
                    <span className="glyphicon glyphicon-remove" />
                    <FormattedMessage id="signin_err.legaldate" />
                </div>
                <div className="toaster info" id="country_select" onClick={this.offAlerts} >
                    <span className="glyphicon glyphicon-remove" />
                    <FormattedMessage id="signin_err.country" />
                </div>
                <div className="toaster info" id="city_match" onClick={this.offAlerts} >
                    <span className="glyphicon glyphicon-remove" />
                    <FormattedMessage id="signin_err.city" />
                </div>
                <div className="toaster error" id="fill_field" onClick={this.offAlerts} >
                    <span className="glyphicon glyphicon-remove" />
                    <FormattedMessage id="signin_err.form" />
                </div>
            </div>
        )
    }
}

export default SigninError
