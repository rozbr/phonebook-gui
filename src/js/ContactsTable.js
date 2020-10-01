
import React, { Component } from 'react';

import ContactsManager from './ContactsManager';


class ContactsTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: []
    }
  }

  componentDidMount() {
    ContactsManager
      .getContacts()
      .then(contacts => {
        this.setState({ contacts })
      }).catch(() => {})
  }

  deleteContact(id) {
    ContactsManager
      .deleteContact(id)
      .then(() => { window.location.reload() })
      .catch(() => {});
  }

  render() {
    let contacts = this.state.contacts.map((contact, index) => {
      return (
        <tr key={contact.id}>
          <td>{`${index + 1}`.padStart(3, 0)}</td>
          <td>{contact.name}</td>
          <td>
            <button
              className="btn btn-success"
              onClick={ () => { window.location = `/contacts/view/${contact.id}` } }>
              <i className="fa fa-eye"></i>
            </button>
            
            &nbsp;
            
            <button
              className="btn btn-warning"
              onClick={() => { window.location = `/contacts/edit/${contact.id}` }}>
              <i className="fa fa-edit"></i>
            </button>
            
            &nbsp;

            <button
              className="btn btn-danger"
              onClick={() => { this.deleteContact(contact.id) }}>
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      )
    });

    return (
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <td>#</td>
              <td>Nome</td>
              <td>Ações</td>
            </tr>
          </thead>

          <tbody>
            {contacts}
          </tbody>

          <tfoot>
            <tr>
              <td>#</td>
              <td>Nome</td>
              <td>Ações</td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }
}


export default ContactsTable;
