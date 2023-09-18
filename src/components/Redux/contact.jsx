import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  onAddContact,
  removeContact,
  onFilterContacts,
} from '../Redux/contactSlice'; 

import ContactList from '../ContactList/ContactList';
import Filter from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';

export const Сontact = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        onAddContact={newContact => dispatch(onAddContact(newContact))}
      />
      <h2>Contacts</h2>
      <Filter
        value={filter}
        onChangeFilter={value => dispatch(onFilterContacts(value))}
      />
      <ContactList contacts={contacts} onRemoveContact={contactId => dispatch(removeContact(contactId))} />

    </div>
  );
};

export default Сontact;
