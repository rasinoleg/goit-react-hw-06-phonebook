import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, removeContact, filterContacts } from './Redux/contactSlice';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

export const App = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const addContactHandler = (contact) => {
    dispatch(addContact(contact));
  };

  const removeContactHandler = (contactId) => {
    dispatch(removeContact(contactId));
  };

  const changeFilterHandler = (value) => {
    dispatch(filterContacts(value));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContactHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChangeFilter={changeFilterHandler} />
      {filteredContacts.length > 0 ? (
        <ContactList contacts={filteredContacts} onRemoveContact={removeContactHandler} />
      ) : (
        <p>Contacts not found</p>
      )}
    </div>
  );
};

export default App;





