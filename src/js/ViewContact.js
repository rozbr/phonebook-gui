
import React, { Component } from 'react';

import ContactsManager from './ContactsManager';


class ViewContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: null
    }
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

    let phones = contact ? ( contact.phones || [] ) : [];
    phones = phones.map(phone => {
      return (
        <div className="row form-group col-sm-12">
          <label className="col-form-label text-right font-weight-bold col-sm-6">{phone.label}:</label>
          <label className="col-form-label col-sm-6">{phone.phone}</label>
        </div>
      );
    });

    let emails = contact ? ( contact.emails || [] ) : [];
    emails = emails.map(email => {
      return (
        <div className="row form-group col-sm-12">
          <label className="col-form-label text-right font-weight-bold col-sm-6">{email.label}:</label>
          <label className="col-form-label col-sm-6">{email.email}</label>
        </div>
      );
    })

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
            { phones }
          </div>

          <div className="row form-group">
            &nbsp;

            <h4 className="text-center col-sm-12">Emails</h4>
            { emails }
          </div>
        </div>
      </div>
    );
  }
}


export default ViewContact;
