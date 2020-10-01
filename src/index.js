import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Phonesbook from './js/Phonesbook';
import ViewContact from './js/ViewContact';
import EditContact from './js/EditContact';


ReactDOM.render(
  <BrowserRouter>
    <Route
      exact
      path="/"
      component={Phonesbook} />

    <Route
      path="/contacts/view/:id"
      component={ViewContact} />

    <Route
      path="/contacts/create"
      component={EditContact} />

    <Route
      path="/contacts/edit/:id"
      component={EditContact} />
  </BrowserRouter>,
  document.getElementById('root')
)
