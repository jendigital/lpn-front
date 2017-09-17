import React, { Component } from 'react';
import { Modal, Button, Form,
  FormGroup, FormControl } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import $ from 'jquery'

import './index.css';
import '../modal.css';

class Reset extends Component {

    constructor(props) {
        super(props);

        this.gobacktologin  = this.gobacktologin.bind(this);
        this.reset          = this.reset.bind(this);
        this.retry          = this.retry.bind(this);
        this.close          = this.close.bind(this);
        this.offAlerts      = this.offAlerts.bind(this);
    }

    gobacktologin() {
        $('#reset').hide();
        $('#sendemail').hide();
        $('#nonexistent').hide();
        $('#reset_instructions').hide();
        $('#forgot').show();
        $('#login').show();
    }

    reset() {
        let reset=false;
        let email_regex = /^[\w-_.]+@([\w-_.]+\.)+[\w-]{2,}$/;
        let email_match = email_regex.test($('#Reset_Email').val());

        if(!email_match){
            $('#reset_instructions').show();
            return;
        }

        if(reset) {
            $('#reset_instructions').hide();
            $('#forgot').hide();
            $('#sendemail').show();
        } else {
            $('#reset_instructions').hide();
            $('#forgot').hide();
            $('#nonexistent').show();
        }
    }

    retry() {
        $('#forgot').show();
        $('#nonexistent').hide();
    }

    close() {
        this.props.identification.history.push('/');
    }

    offAlerts() {
        $('.toaster').hide();
    }

    render() {
        return (
            <div id="reset_wrapper">
                <div id="reset" className="authentification">
                    <Modal.Header closeButton>
                        <Modal.Title id="connection_title">
                            <div>
                                <h4>
                                    <FormattedMessage id="reset.title" />
                                </h4>
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div id="forgot">
                            <Form horizontal>
                                <FormGroup controlId="Reset_Email">
                                    <FormControl type="email" placeholder="Email" />
                                </FormGroup>
                                <Button type="button" className="submit" onClick={this.reset}><FormattedMessage id="reset.validate" /></Button>
                            </Form>
                        </div>
                        <div id="nonexistent">
                            <p><FormattedMessage id="reset.nonexistent" /></p>
                            <button onClick={this.retry} className="submit"><FormattedMessage id="reset.retry" /></button>
                        </div>
                        <div id="sendemail">
                            <p><FormattedMessage id="reset.email" /></p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button id="reset_cancel" onClick={this.gobacktologin} className="cancel"><FormattedMessage id="login.cancel" /></Button>
                    </Modal.Footer>
                </div>
                <div className="toaster error" id="reset_instructions" onClick={this.offAlerts} >
                    <FormattedMessage id="reset.instructions" />
                    <span className="glyphicon glyphicon-remove" />
                </div>
            </div>
        )
    }
}

export default Reset
