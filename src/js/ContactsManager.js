
import axios from 'axios';

import config from './config';


class ContactsManager {
  static BASE_URL = `${config.server.host}:${config.server.port}`

  static updateContact = (contactId, contact) => new Promise((resolve, reject) => {
    axios
      .put(`${this.BASE_URL}/api/contacts/${contactId}`, contact)
      .then(resolve)
      .catch(reject);
  })

  static getContact = (contactId) => new Promise((resolve, reject) => {
    axios
      .get(`${this.BASE_URL}/api/contacts/${contactId}`)
      .then(response => resolve(response.data))
      .catch(reject);
  })

  static getContacts = () => new Promise((resolve, reject) => {
    axios
      .get(`${this.BASE_URL}/api/contacts`)
      .then(response => resolve(response.data))
      .catch(reject);
  })

  static createContact = (contact) => new Promise((resolve, reject) => {
    axios
      .post(`${this.BASE_URL}/api/contacts`, contact)
      .then(resolve)
      .catch(reject);
  })
}


export default ContactsManager;
