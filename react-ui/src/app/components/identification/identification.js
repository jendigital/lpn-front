import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'react-bootstrap';
import './identification.css';

const Identification = ({ t }) => {
    return (
        <div id="identification">
            <div id="connection">
                <img src='https://storage.googleapis.com/life-personal-network/logo.png' alt="logo" />
                <div>
                    <Button>
                        <FormattedMessage id="identification.signup" />
                    </Button>
                    <Button>
                        <FormattedMessage id="identification.signin" />
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
        </div>
    );
};

export default Identification;
