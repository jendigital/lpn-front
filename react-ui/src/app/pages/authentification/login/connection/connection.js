import React from 'react';
import { Modal, Button, Glyphicon, Form,
  FormGroup, FormControl, Checkbox } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import './connection.css';
import '../../modal/modal.css';

const Login =  React.createClass({

    submit() {
        this.context.router.push('/home');
    },

    render() {
        return (
          <Modal {...this.props} aria-labelledby="connection">
              <div id="connection" className="authentification">
                  <Modal.Header closeButton>
                      <Modal.Title id="connection_title">
                          <h4>
                              <FormattedMessage id="login.title" />
                          </h4>
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
                          <Button id="connect" onClick={this.submit}><FormattedMessage id="login.connection" /></Button>
                          <FormGroup controlId="Remember">
                              <Checkbox>Souvenez-vous de moi</Checkbox>
                          </FormGroup>
                      </Form>
                  </Modal.Body>
                  <Modal.Footer>
                      <Button id="cancel"><FormattedMessage id="login.cancel" /></Button>
                      <a><FormattedMessage id="login.forgot" /></a>
                  </Modal.Footer>
              </div>
          </Modal>
        );
    }
});

export default Login;
