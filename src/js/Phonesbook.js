
import React, { Component } from 'react';

import ContactsTable from './ContactsTable';

class PhonesBook extends Component {
  render() {
    return (
      <div className="container" id="container">
        &nbsp;

        <div className="form-horizontal offset-md-1 col-md-10">
          <div className="row">
            <div className="form-group col-md-12">
              <h1 className="text-center">Contatos</h1>
            </div>
          </div>

          &nbsp;

          <div className="row">
            <button
              className="btn btn-primary form-control"
              onClick={() => window.location = '/contacts/create'}>
              <i className="fa fa-user-plus"></i>

              &nbsp;

              Adicionar Contato
            </button>
          </div>

          &nbsp;

          <div className="row">
            <ContactsTable />
          </div>
        </div>
      </div>
    );
  }
}


export default PhonesBook;
