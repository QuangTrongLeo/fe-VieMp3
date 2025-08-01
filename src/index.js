import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'tippy.js/dist/tippy.css';

import App from '~/App';
import GlobalStyles from './components/GlobalStyles';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <GlobalStyles>
    <App />
  </GlobalStyles>
  // </React.StrictMode>
);
reportWebVitals();
