import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';

import App from './App';
import './locales/i18n';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
