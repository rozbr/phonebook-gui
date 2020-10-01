import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Phonesbook from './js/Phonesbook';
import ViewContact from './js/ViewContact';
import EditContact from './js/EditContact';
import NotFoundPage from './js/NotFoundPage';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
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

      <Route
        component={NotFoundPage}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
