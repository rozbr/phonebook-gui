import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Phonesbook from './js/Phonesbook';


ReactDOM.render(
  <BrowserRouter>
    <Route
      exact
      path="/"
      component={Phonesbook} />
  </BrowserRouter>,
  document.getElementById('root')
)
