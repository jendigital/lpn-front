import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import $ from 'jquery';
import './index.css';

import Login from '../modal/login/index';
import Signin from '../modal/signin/index';

class Identification extends Component {
    constructor(props) {
        super(props);

        this.loginShow    = this.loginShow.bind(this);
        this.signinShow   = this.signinShow.bind(this);
        this.loginClose   = this.loginClose.bind(this);
        this.signinClose  = this.signinClose.bind(this);

        if(props.history.location.pathname === '/login') {
            this.state = ({login:true, signin:false});
            return;
        }

        if(props.history.location.pathname === '/signin') {
            this.state = ({login:false, signin:true});
            return;
        }

        this.state = ({login:false, signin:false});
    }

    loginShow() {
        this.props.history.push('/login');
    }

    signinShow() {
        this.props.history.push('/signin');
    }

    loginClose() {
        this.props.history.push('/');
    }

    signinClose() {
        $('.toaster').show();
        this.props.history.push('/');
    }

    render() {
        return (
            <div id="identification">
                <div id="connection">
                    <img src='https://storage.googleapis.com/life-personal-network/commun/logo.png' alt="logo" />
                    <div>
                        <Button onClick={this.signinShow}>
                            <FormattedMessage id="identification.signup" />
                        </Button>
                        <Button onClick={this.loginShow}>
                            <FormattedMessage id="identification.login" />
                        </Button>
                    </div>
                </div>
                <p id="notices">
                    <a><FormattedMessage id="policy.terms" /></a>
                    <a><FormattedMessage id="policy.legal" /></a>
                    <a><FormattedMessage id="policy.cookies" /></a>
                    <FormattedMessage id="policy.languages" />
                    <FormattedMessage id="policy.register" />
                    <img src='https://storage.googleapis.com/life-personal-network/identification/switzerland.png' />
                    <FormattedMessage id="policy.brand" />
                </p>
                <Login identification={this.props} show={this.state.login} onHide={this.loginClose} />
                <Signin subscription={this.props} show={this.state.signin} onHide={this.signinClose} />
            </div>
        )
    }
}

export default Identification;
