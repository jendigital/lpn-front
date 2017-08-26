import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import reducers from './reducers'; // Or wherever you keep your reducers

import { IntlProvider, addLocaleData } from 'react-intl';
import fr from 'react-intl/locale-data/fr';
import messages from './app/translations/locales/fr';
const locale = 'fr';
addLocaleData(fr);

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
);

ReactDOM.render(
    <IntlProvider locale={ locale } messages={ messages } key={ locale }>
        <Provider store={ store }>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>
    </IntlProvider>,
    document.getElementById('app')
);
