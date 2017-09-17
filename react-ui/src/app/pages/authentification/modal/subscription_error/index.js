import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import $ from 'jquery'

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
                    <FormattedMessage id="signin_err.email" />
                    <span className="glyphicon glyphicon-remove" />
                </div>
                <div className="toaster error" id="pwd_match" onClick={this.offAlerts} >
                    <FormattedMessage id="signin_err.pwd" />
                    <span className="glyphicon glyphicon-remove" />
                </div>
                <div className="toaster warning" id="pwd_confirm" onClick={this.offAlerts} >
                    <FormattedMessage id="signin_err.confirm" />
                    <span className="glyphicon glyphicon-remove" />
                </div>
                <div className="toaster info" id="lastname_match" onClick={this.offAlerts} >
                    <FormattedMessage id="signin_err.lastname" />
                    <span className="glyphicon glyphicon-remove" />
                </div>
                <div className="toaster info" id="firstname_match" onClick={this.offAlerts} >
                    <FormattedMessage id="signin_err.firstname" />
                    <span className="glyphicon glyphicon-remove" />
                </div>
                <div className="toaster info" id="gender_select" onClick={this.offAlerts} >
                    <FormattedMessage id="signin_err.gender" />
                    <span className="glyphicon glyphicon-remove" />
                </div>
                <div className="toaster warning" id="date_select" onClick={this.offAlerts} >
                    <FormattedMessage id="signin_err.date" />
                    <span className="glyphicon glyphicon-remove" />
                </div>
                <div className="toaster warning" id="legal_date" onClick={this.offAlerts} >
                    <FormattedMessage id="signin_err.legaldate" />
                    <span className="glyphicon glyphicon-remove" />
                </div>
                <div className="toaster info" id="country_select" onClick={this.offAlerts} >
                    <FormattedMessage id="signin_err.country" />
                    <span className="glyphicon glyphicon-remove" />
                </div>
                <div className="toaster info" id="city_match" onClick={this.offAlerts} >
                    <FormattedMessage id="signin_err.city" />
                    <span className="glyphicon glyphicon-remove" />
                </div>
                <div className="toaster error" id="fill_field" onClick={this.offAlerts} >
                    <FormattedMessage id="signin_err.form" />
                    <span className="glyphicon glyphicon-remove" />
                </div>
            </div>
        )
    }
}

export default SigninError
