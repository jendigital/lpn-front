import React from 'react';
import { Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { BrowserRouter, Link } from 'react-router-dom';
import { ModalContainer, ModalRoute } from 'react-router-modal';
import './identification.css';

import Login from '../login/connection/connection';
import Signup from '../signin/signup/signup';

const Identification = React.createClass({
    getInitialState() {
      return { loginShow: false, signinShow: false };
    },
    render() {
        let loginClose = () => this.setState({ loginShow: false });
        let signinClose = () => this.setState({ signinShow: false });
        return (
            <div id="identification">
                <div id="connection">
                    <img src='https://storage.googleapis.com/life-personal-network/commun/logo.png' alt="logo" />
                    <div>
                        <Button onClick={()=>this.setState({ loginShow: true })}>
                            <FormattedMessage id="identification.login" />
                        </Button>
                        <Button onClick={()=>this.setState({ signinShow: true })}>
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
                <Login show={this.state.loginShow} onHide={loginClose} />
                <Signup show={this.state.signinShow} onHide={signinClose} />
            </div>
        );
    }
});

export default Identification;
