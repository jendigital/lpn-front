import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './app/app';
import NotFoundPage from './app/pages/not-found/not-found';

import Identification from './app/pages/authentification/identification/identification';

import RequireAuth from './app/layouts/require-auth/require-auth';

import Register from './app/pages/authentification/signin/register/register';
import SignUp from './app/pages/authentification/signin/signup/signup';
import Subscription from './app/pages/authentification/signin/subscription/subscription';

import Login from './app/pages/authentification/login/connection/connection';

import ForgotPwd from './app/pages/authentification/log-error/forgot-pwd/forgot-pwd';
import Reset from './app/pages/authentification/log-error/reset/reset';

import AppWrapper from './app/layouts/require-auth/require-auth';
import HomePage from './app/pages/homepage/home';

export default (
  <BrowserRouter path="/" component={ App }>
      <div>
          <Route exact component={ Identification } />

          <Switch>
              <Route exact path="create-account" />
              <Route path="register" component={ RequireAuth(Register) } />
              <Route path="signup" component={ RequireAuth(SignUp) } />
              <Route path="subscription" component={RequireAuth(Subscription)} />
          </Switch>

          <Switch>
              <Route exact path="auth" />
              <Route path="login" component={ RequireAuth(Login) } />
              <Route path="reset/:resetToken" component={ RequireAuth(Reset) } />
              <Route path="forgot-pwd" component={ RequireAuth(ForgotPwd) } />
          </Switch>

          <Route path="home" component={ AppWrapper(HomePage) } />

          <Route path="*" component={ NotFoundPage } />
      </div>
  </BrowserRouter>
);
