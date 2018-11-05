import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        phone: '555-555-555'
      },
      {
        id: 2,
        name: 'Jessica Doe',
        email: 'jessica.doe@gmail.com',
        phone: '444-444-444'
      }
    ]
  }

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact  key={contact.id}
                    contact={contact}
          />
        ))}
      </div>
    )
  }
}

export default  Contacts;
