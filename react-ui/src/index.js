import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import './index.css';

import { IntlProvider, addLocaleData } from 'react-intl';
import fr from 'react-intl/locale-data/fr';
import messages from './app/translations/locales/fr';
const locale = 'fr';
addLocaleData(fr);

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages} key={locale}>
      <App />
  </IntlProvider>,
  document.getElementById('root')
);
