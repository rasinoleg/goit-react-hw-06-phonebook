import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul>
    {contacts.map(contact => ( 
      <li key={contact.id}>
        {contact.name}: {contact.number}
        <button onClick={() => onRemoveContact(contact.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;


