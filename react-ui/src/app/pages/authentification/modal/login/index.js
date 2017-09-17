import React, { Component } from 'react';
import { Modal, Button, Form,
  FormGroup, FormControl, Checkbox } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import $ from 'jquery'

import './index.css';
import '../modal.css';
import Reset from '../reset';

class Login extends Component {

    constructor(props) {
        super(props);

        this.submit         = this.submit.bind(this);
        this.forgot         = this.forgot.bind(this);
        this.close          = this.close.bind(this);
        this.offAlerts      = this.offAlerts.bind(this);
    }

    submit() {
        let connect = false;

        this.offAlerts();
        if(connect) {
            this.props.identification.history.push('/home');
            $('#login_error').hide();
            if($('#remember_me').checked) {
                console.log('stock the username/pwd');
            }
        } else {
            $('#login_error').show();
        }
    }

    forgot() {
        $('#reset').show();
        $('#login').hide();
    }

    close() {
        this.props.identification.history.push('/');
    }

    offAlerts() {
        $('.toaster').hide();
    }

    render() {
        return (
          <Modal {...this.props} aria-labelledby="connection">
              <div id="login" className="authentification">
                  <Modal.Header closeButton>
                      <Modal.Title id="connection_title">
                          <div>
                              <h4>
                                  <FormattedMessage id="login.title" />
                              </h4>
                          </div>
                      </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <Form horizontal>
                          <FormGroup controlId="Email">
                              <FormControl type="email" placeholder="Email" />
                          </FormGroup>
                          <FormGroup controlId="Password">
                              <FormControl type="password" placeholder="Mot de passe" />
                          </FormGroup>
                          <Button type="button" className="submit" onClick={this.submit}><FormattedMessage id="login.connection" /></Button>
                          <FormGroup controlId="Remember">
                              <Checkbox id="remember_me">Souvenez-vous de moi</Checkbox>
                          </FormGroup>
                      </Form>
                  </Modal.Body>
                  <Modal.Footer>
                      <Button onClick={this.close} className="cancel"><FormattedMessage id="login.cancel" /></Button>
                      <a onClick={this.forgot}><FormattedMessage id="login.forgot" /></a>
                  </Modal.Footer>
              </div>
              <div className="toaster error" id="login_error" onClick={this.offAlerts} >
                  <FormattedMessage id="login.error" />
                  <span className="glyphicon glyphicon-remove" />
              </div>
              <Reset />
          </Modal>
        )
    }
}

export default Login
