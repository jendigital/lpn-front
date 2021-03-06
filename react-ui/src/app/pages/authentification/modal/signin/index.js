import React, { Component } from 'react'
import { Modal, Button, Glyphicon, Form,
  FormGroup, FormControl } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'
import $ from 'jquery'

import './index.css'
import '../modal.css'
import SigninError from '../subscription_error'

class Signin extends Component {

    constructor(props) {
        super(props);

        this.step           = 1;
        this.prevStep       = this.prevStep.bind(this);
        this.nextStep       = this.nextStep.bind(this);
        this.submit         = this.submit.bind(this);
        this.offAlerts      = this.offAlerts.bind(this);
    }

    prevStep() {
        $('.toaster').hide();

        if(this.step === 3) {
            $('.progress').removeClass('lastStep');
            $('.progress').addClass('nextStep');
            $('.modal-header').removeClass('lastStep');
            $('.modal-header').addClass('nextStep');
            $('.modal-body').removeClass('lastStep');
            $('.modal-body').addClass('nextStep');
            $('.modal-footer').removeClass('lastStep');
            this.step --;
        } else if (this.step === 2) {
            $('.progress').removeClass('nextStep');
            $('.progress').addClass('firstStep');
            $('.modal-header').removeClass('nextStep');
            $('.modal-header').addClass('firstStep');
            $('.modal-body').removeClass('nextStep');
            $('.modal-body').addClass('firstStep');
            $('.modal-footer').removeClass('nextStep');
            this.step --;
        }
    }

    nextStep() {
        $('.toaster').hide();

        if(this.step === 1) {
            let email_regex = /^[\w-_.]+@([\w-_.]+\.)+[\w-]{2,}$/;
            let pwd_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
            let email_match = email_regex.test($('#Email').val());
            let pwd_match = pwd_regex.test($('#Password').val());
            let pwd_confirm = $('#Password').val() === $('#Confirm').val();

            if( email_match && pwd_match && pwd_confirm ) {
                $('.progress').addClass('nextStep');
                $('.progress').removeClass('firstStep');
                $('.modal-header').addClass('nextStep');
                $('.modal-header').removeClass('firstStep');
                $('.modal-body').addClass('nextStep');
                $('.modal-body').removeClass('firstStep');
                $('.modal-footer').addClass('nextStep');
                this.step ++;
            } else {
                if(!email_match){
                    $('#email_match').show();
                    return;
                }

                if(!pwd_match) {
                    $('#pwd_match').show();
                    return;
                }

                if(!pwd_confirm) {
                    $('#pwd_confirm').show();
                    return;
                }
            }
        } else if(this.step === 2) {
            let name_regex = /[A-Za-z]{2,}/;
            let lastname_match = name_regex.test($('#Name').val());
            let firstname_match = name_regex.test($('#Firstname').val());
            let gender_select = $('#Gender').val() === 'male' || $('#Gender').val() === 'female';

            if(lastname_match && firstname_match && gender_select) {
                $('.progress').addClass('lastStep');
                $('.progress').removeClass('nextStep');
                $('.modal-header').addClass('lastStep');
                $('.modal-header').removeClass('nextStep');
                $('.modal-body').addClass('lastStep');
                $('.modal-body').removeClass('nextStep');
                $('.modal-footer').addClass('lastStep');
                this.step ++;
            } else {
                if(!lastname_match) {
                    $('#lastname_match').show();
                    return;
                }
                if(!firstname_match) {
                    $('#firstname_match').show();
                    return;
                }
                if(!gender_select) {
                    $('#gender_select').show();
                    return;
                }
            }
        }
    }

    submit() {
        let date_regex = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/;
        let date_select = date_regex.test($('#Birthdate').val());
        let date = $('#Birthdate').val().split("-");
        let age = new Date().getFullYear() - date[0];
        let legal_date = age >= 14 && age <= 120 ;
        let country_select = $('#Country').val() !== 'Veuillez sélectionnez votre Pays';
        let city_regex = /[A-Za-z]{2,}/;
        let city_match = city_regex.test($('#City').val());
        $('.toaster').removeClass('show');

        if (date_select && legal_date && country_select && city_match) {
            this.props.subscription.history.push('/home');
        } else {
            if(!date_select) {
                $('#date_select').show();
                return;
            }

            if(!legal_date){
                $('#legal_date').show();
                return;
            }

            if(!country_select) {
                $('#country_select').show();
                return;
            }

            if(!city_match) {
                $('#city_match').show();
                return;
            }
        }
    }

    offAlerts() {
        $('.toaster').hide();
    }

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
                          <div>
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
                          </div>
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
                      <Button onClick={this.prevStep} type="button" className="left"><Glyphicon glyph="chevron-left" /></Button>
                      <Button onClick={this.nextStep} type="button" className="right"><Glyphicon glyph="chevron-right" /></Button>
                      <Button onClick={this.submit} type="button" className="ok"><Glyphicon glyph="ok" /></Button>
                  </Modal.Footer>
              </div>
              <SigninError />
          </Modal>
        )
    }
}

export default Signin
