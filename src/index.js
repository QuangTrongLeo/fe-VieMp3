import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'tippy.js/dist/tippy.css';

import App from '~/App';
import GlobalStyles from './components/GlobalStyles';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './components/Components/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Router>
    <AuthProvider>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </AuthProvider>
  </Router>

  // </React.StrictMode>
);
reportWebVitals();
