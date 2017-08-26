import React from 'react';
import { Modal, Button, Glyphicon, Form,
  FormGroup, FormControl } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import $ from 'jquery';
import './signup.css';
import '../../styles/modal.css';

let step = 1;

const SignUp =  React.createClass({
    prevStep: function() {
        if(step === 3) {
            $('.progress').removeClass('lastStep');
            $('.progress').addClass('nextStep');
            $('.modal-header').removeClass('lastStep');
            $('.modal-header').addClass('nextStep');
            $('.modal-body').removeClass('lastStep');
            $('.modal-body').addClass('nextStep');
            $('.modal-footer').removeClass('lastStep');
            step --;
        } else if (step === 2) {
            $('.progress').removeClass('nextStep');
            $('.progress').addClass('firstStep');
            $('.modal-header').removeClass('nextStep');
            $('.modal-header').addClass('firstStep');
            $('.modal-body').removeClass('nextStep');
            $('.modal-body').addClass('firstStep');
            $('.modal-footer').removeClass('nextStep');
            step --;
        }
    },

    nextStep: function() {
        if(step === 1) {
            $('.progress').addClass('nextStep');
            $('.progress').removeClass('firstStep');
            $('.modal-header').addClass('nextStep');
            $('.modal-header').removeClass('firstStep');
            $('.modal-body').addClass('nextStep');
            $('.modal-body').removeClass('firstStep');
            $('.modal-footer').addClass('nextStep');
            step ++;
        } else if(step === 2) {
            $('.progress').addClass('lastStep');
            $('.progress').removeClass('nextStep');
            $('.modal-header').addClass('lastStep');
            $('.modal-header').removeClass('nextStep');
            $('.modal-body').addClass('lastStep');
            $('.modal-body').removeClass('nextStep');
            $('.modal-footer').addClass('lastStep');
            step ++;
        }
    },

    submit: function() {

    },

    render() {
        return (
          <Modal {...this.props} aria-labelledby="subscription">
              <div className="progress firstStep">
                  <div className="circle">
                      1
                  </div>
                  <div className="bar next">
                  </div>
                  <div className="circle">
                      2
                  </div>
                  <div className="bar last">
                  </div>
                  <div className="circle">
                      3
                  </div>
              </div>
              <div id="subscription" className="authentification">
                  <Modal.Header closeButton className="firstStep">
                      <Modal.Title id="subscription_title">
                          <h4>
                              <FormattedMessage id="subscription.create" />
                          </h4>
                          <span className="registration">
                              <FormattedMessage id="subscription.registration" />
                          </span>
                          <span className="signin">
                              <FormattedMessage id="subscription.identification" />
                          </span>
                          <span className="details">
                              <FormattedMessage id="subscription.details" />
                          </span>
                      </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="firstStep">
                      <Form horizontal>
                          <div className="registration">
                              <FormGroup controlId="Email">
                                  <FormControl type="email" placeholder="Email" />
                              </FormGroup>
                              <FormGroup controlId="Password">
                                  <FormControl type="password" placeholder="Mot de passe" />
                              </FormGroup>
                              <FormGroup controlId="Confirm">
                                  <FormControl type="password" placeholder="Confirmez votre mot de passe" />
                              </FormGroup>
                          </div>
                          <div className="signin">
                              <FormGroup controlId="Name">
                                  <FormControl type="text" placeholder="Nom" />
                              </FormGroup>
                              <FormGroup controlId="Firstname">
                                  <FormControl type="text" placeholder="Prénom" />
                              </FormGroup>
                              <FormGroup controlId="Gender">
                                  <FormControl componentClass="select" placeholder="Sexe">
                                      <option>Sexe</option>
                                      <option value="female">Féminin</option>
                                      <option value="male">Masculin</option>
                                  </FormControl>
                              </FormGroup>
                          </div>
                          <div className="details">
                              <FormGroup controlId="Birthdate">
                                  <div id="birth">
                                      Date de naissance
                                  </div>
                                  <div id="date">
                                      <FormControl type="Date" />
                                  </div>
                              </FormGroup>
                              <FormGroup controlId="Country">
                                  <FormControl componentClass="select" placeholder="Country">
                                      <option>Veuillez sélectionnez votre Pays</option>
                                      <option value="France">France</option>
                                      <option value="Suisse">Suisse</option>
                                      <option value="Belgique">Belgique</option>
                                      <option value="Canada">Canada</option>
                                  </FormControl>
                              </FormGroup>
                              <FormGroup controlId="City">
                                  <FormControl type="text" placeholder="Ville" />
                              </FormGroup>
                          </div>
                      </Form>
                  </Modal.Body>
                  <Modal.Footer className="firstStep">
                      <Button onClick={this.prevStep} className="left"><Glyphicon glyph="chevron-left" /></Button>
                      <Button onClick={this.nextStep} className="right"><Glyphicon glyph="chevron-right" /></Button>
                      <Button onClick={this.submit} className="ok"><Glyphicon glyph="ok" /></Button>
                  </Modal.Footer>
              </div>
          </Modal>
        );
    }
});

export default SignUp;
