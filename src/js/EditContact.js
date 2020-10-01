
import React, { Component } from 'react';

import ContactsManager from './ContactsManager';


class ViewContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: null
    };
  }

  handleChange = (event) => {
    let contact = this.state.contact;

    let keys = event.target.name.split('.');
    let key = keys.pop();

    let object = contact;
    keys.forEach(key => {
      object = object[key]
    });

    object[key] = event.target.value;

    this.setState({ contact });
  }

  addInput = (field) => {
    return () => {
      let contact = this.state.contact || {};
      let fields = contact[field] || [];

      fields.push({});

      this.setState({ contact });
    }
  }

  removeInput = (field, index) => {
    let contact = this.state.contact || {};
    let fields = contact[field] || [];

    fields.splice(index, 1);

    this.setState({ contact });
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
              name={`${field}.${index}.label`}
              placeholder="Label"
              className="form-control col-sm-6"
              value={currentField.label || ''}
              onChange={this.handleChange} />

            <input
              name={`${field}.${index}.${aux}`}
              placeholder={fieldName}
              className="form-control col-sm-6"
              value={currentField[aux] || ''}
              onChange={this.handleChange} />

            <span className="input-group-button">
              <button
                className="btn btn-danger"
                onClick={() => this.removeInput(field, index)}>
                <i className="fa fa-trash"></i>
              </button>
            </span>
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
    let contact

    ContactsManager
      .getContact(this.props.match.params.id)
      .then(returnedContact => {
        contact = returnedContact;
      }).catch(() => {
        contact = {};
      }).finally(() => {
        contact.phones = contact.phones || []
        contact.emails = contact.emails || []
        contact.address = contact.address || {}

        this.setState({ contact });
      });
  }

  saveContact = () => {
    let contact = this.state.contact

    if (contact.id)
      ContactsManager
        .updateContact(contact.id, contact)
        .then(() => { window.location = '/' })
        .catch(() => {});
    else
      ContactsManager
        .createContact(this.state.contact)
        .then(() => { window.location.reload() })
        .catch(() => {});
  }

  render() {
    let contact = this.state.contact || {};
    let address = contact.address || {};

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

            <label
              name="name"
              className="col-form-label text-right col-sm-2">Nome:</label>
            <input
              name="name"
              className="form-control col-sm-8"
              value={contact ? (contact.name || '') : ''}
              onChange={this.handleChange} />
          </div>

          <div className="row form-group">
            &nbsp;

            <h4 className="text-center col-sm-12">Endereço</h4>

            <label className="col-form-label text-right col-sm-2">CEP:</label>
            <input
              name="address.zipcode"
              className="form-control col-sm-8"
              value={address.zipcode || ''}
              onChange={this.handleChange} />
          </div>

          <div className="row from-group">
            <label className="col-form-label text-right col-sm-2">Rua:</label>
            <input
              name="address.street"
              className="form-control col-sm-8"
              value={address.street || ''}
              onChange={this.handleChange} />
          </div>

          <div className="row form-group">
            <label className="col-form-label text-right col-sm-2">Número:</label>
            <input
              name="address.number"
              type="number"
              className="form-control col-sm-8"
              value={address.number || ''}
              onChange={this.handleChange} />
          </div>

          <div className="row form-group">
            <label className="col-form-label text-right col-sm-2">Bairro:</label>
            <input
              name="address.neighborhood"
              className="form-control col-sm-8"
              value={address.neighborhood || ''}
              onChange={this.handleChange} />
          </div>

          <div className="row form-group">
            <label className="col-form-label text-right col-sm-2">Cidade:</label>
            <input
              name="address.city"
              className="form-control col-sm-8"
              value={address.city || ''}
              onChange={this.handleChange} />
          </div>

          <div className="row form-group">
            <label className="col-form-label text-right col-sm-2">Estado:</label>
            <input
              name="address.state"
              className="form-control col-sm-8"
              value={address.state || ''}
              onChange={this.handleChange} />
          </div>

          <div className="row form-group">
            &nbsp;

            <h4 className="text-center col-sm-12">
              Telefones

              &nbsp;

              <button
                className="btn btn-success"
                data-toggle="tooltip"
                title="Adicionar novo telefone"
                onClick={this.addInput('phones')}>
                <i className="fa fa-plus"></i>
              </button>
            </h4>

            {this.renderInputs('phones', 'Telefone')}
          </div>

          <div className="row form-group">
            &nbsp;

            <h4 className="text-center col-sm-12">
              Emails

              &nbsp;

              <button
                className="btn btn-success"
                data-toggle="tooltip"
                title="Adicionar novo email"
                onClick={this.addInput('emails')}>
                <i className="fa fa-plus"></i>
              </button>
            </h4>

            {this.renderInputs('emails', 'Email')}
          </div>
        </div>

        &nbsp;

        <div className="row form-group">
          <div className="offset-sm-1 col-sm-10">
            <input
              type="button"
              className="btn btn-primary form-control"
              value="Salvar"
              onClick={ this.saveContact }/>
        </div>
        </div>
      </div>
    );
  }
}


export default ViewContact;
