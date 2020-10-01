
import React, { Component } from 'react';

import ContactsManager from './ContactsManager';


class ViewContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: null
    }
  }

  renderInputs = (field, fieldName) => {
    let contact = this.state.contact || {};
    let fields = contact ? (contact[field] || []) : [];

    if (fields.length) {
      // phones -> phone
      // emails -> email
      let aux = field.slice(0, -1)

      return fields.map((currentField, index) => {
        return (
          <div key={`${field}_${index}`} className="input-group offset-sm-2 col-sm-8">
            <input
              readOnly
              name={`${field}.${index}.label`}
              placeholder="Label"
              className="form-control col-sm-6 text-right font-weight-bold"
              value={(currentField.label || 'SEM LABEL') + ':'}
              onChange={this.handleChange} />

            <input
              readOnly
              name={`${field}.${index}.phone`}
              placeholder={fieldName}
              className="form-control col-sm-6"
              value={currentField[aux] || ''}
              onChange={this.handleChange} />
          </div>
        );
      })
    }

    return (
      <div className="col-sm-12">
        <h5 className="text-center">Nenhum {fieldName} encontrado!</h5>
      </div>
    );
  }

  componentDidMount() {
    ContactsManager
      .getContact(this.props.match.params.id)
      .then(contact => this.setState({ contact }))
      .catch(() => {});
  }

  render() {
    let contact = this.state.contact;
    let address = contact ? contact.address : {};

    return (
      <div className="container">
        <div className="form-horizontal">
          &nbsp;

          <div className="row form-group">
            <div className="offset-sm-1 col-sm-2">
              <button
                className="btn btn-primary form-control"
                onClick={() => { window.location = '/' }}>
                <i className="fa fa-arrow-left"></i>

                &nbsp;

                Voltar
              </button>
            </div>
          </div>

          &nbsp;

          <div className="row form-group">
            &nbsp;

            <h4 className="text-center col-sm-12">Informações Básicas</h4>

            <label className="col-form-label text-right col-sm-2">Nome:</label>
            <input
              readOnly
              className="form-control col-sm-8"
              value={ contact ? contact.name : '' } />
          </div>

          <div className="row form-group">
            &nbsp;

            <h4 className="text-center col-sm-12">Endereço</h4>

            <label className="col-form-label text-right col-sm-2">CEP:</label>
            <input
              readOnly
              className="form-control col-sm-8"
              value={ address.zipcode || '' } />
          </div>

          <div className="row from-group">
            <label className="col-form-label text-right col-sm-2">Rua:</label>
            <input
              readOnly
              className="form-control col-sm-8"
              value={ address.street || '' }/>
          </div>

          <div className="row form-group">
            <label className="col-form-label text-right col-sm-2">Número:</label>
            <input
              readOnly
              type="number"
              className="form-control col-sm-8"
              value={ address.number || '' } />
          </div>

          <div className="row form-group">
            <label className="col-form-label text-right col-sm-2">Bairro:</label>
            <input
              readOnly
              className="form-control col-sm-8"
              value={ address.neighborhood || '' } />
          </div>

          <div className="row form-group">
            <label className="col-form-label text-right col-sm-2">Cidade:</label>
            <input
              readOnly
              className="form-control col-sm-8"
              value={ address.city || '' } />
          </div>

          <div className="row form-group">
            <label className="col-form-label text-right col-sm-2">Estado:</label>
            <input
              readOnly
              className="form-control col-sm-8"
              value={ address.state || '' }/>
          </div>

          <div className="row form-group">
            &nbsp;

            <h4 className="text-center col-sm-12">Telefones</h4>
            {this.renderInputs('phones', 'Telefone')}
          </div>

          <div className="row form-group">
            &nbsp;

            <h4 className="text-center col-sm-12">Emails</h4>
            {this.renderInputs('emails', 'Email')}
          </div>
        </div>
      </div>
    );
  }
}


export default ViewContact;
