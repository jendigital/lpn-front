import React from 'react';
import { Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { Route } from 'react-router-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import { ModalContainer, ModalRoute } from 'react-router-modal';
import $ from 'jquery';
import './identification.css';

import Login from '../login/connection/connection';
import Signup from '../signin/signup/signup';

const Identification = React.createClass({
    getInitialState() {
        if(this.props.location.pathname === "/login")
            return { loginShow: true, signinShow: false };
        if(this.props.location.pathname === "/signin")
            return { loginShow: false, signinShow: true };
        return { loginShow: false, signinShow: false };
    },

    loginShow() {
        this.setState({ loginShow: true });
        this.props.history.push("/login");
    },

    signinShow() {
        this.setState({ signinShow: true });
        this.props.history.push("/signin");
    },

    loginClose() {
        this.setState({ loginShow: false });
        this.props.history.push("/");
    },

    signinClose() {
        $('.toaster').removeClass('show');
        this.setState({ signinShow: false });
        this.props.history.push("/");
    },

    render: function() {
        return (
            <div id="identification">
                <div id="connection">
                    <img src='https://storage.googleapis.com/life-personal-network/commun/logo.png' alt="logo" />
                    <div>
                        <Button onClick={this.loginShow}>
                            <FormattedMessage id="identification.login" />
                        </Button>
                        <Button onClick={this.signinShow}>
                            <FormattedMessage id="identification.signup" />
                        </Button>
                    </div>
                </div>
                <p id="notices">
                    <a><FormattedMessage id="policy.terms" /></a>
                    <a><FormattedMessage id="policy.legal" /></a>
                    <a><FormattedMessage id="policy.cookies" /></a>
                    <FormattedMessage id="policy.languages" />
                    <span className="languages"><FormattedMessage id="policy.french" /></span>
                    <FormattedMessage id="policy.register" />
                    <FormattedMessage id="policy.brand" />
                </p>
                <Login show={this.state.loginShow} onHide={this.loginClose} />
                <Signup show={this.state.signinShow} onHide={this.signinClose} />
            </div>
        );
    }
});

export default Identification;
