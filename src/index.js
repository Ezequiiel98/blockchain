import { BrowserRouter } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import App from './components/App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
