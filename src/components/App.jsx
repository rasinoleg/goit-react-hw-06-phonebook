import React from 'react';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import Contact from './Redux/contact';


export const App = () => {
  // const contacts = useSelector(state => state.contacts.contacts);
  // const filter = useSelector(state => state.contacts.filter);
  // const dispatch = useDispatch();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <Contact />
    </div>
  );
};

export default App;

// Фаил №1
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addContact, removeContact, filterContacts } from './Redux/contactSlice';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import ContactForm from './ContactForm/ContactForm';

// export const App = () => {
//   const contacts = useSelector(state => state.contacts.contacts);
//   const filter = useSelector(state => state.contacts.filter);
//   const dispatch = useDispatch();

//   const addContactHandler = (newContact) => {
//     dispatch(addContact(newContact));
//   };

//   const removeContactHandler = (contactId) => {
//     dispatch(removeContact(contactId));
//   };

//   const filterContactsHandler = (value) => {
//     dispatch(filterContacts(value));
//   };

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm onAddContact={addContactHandler} />
//       <h2>Contacts</h2>
//       <Filter
//         value={filter}
//         onChangeFilter={filterContactsHandler}
//       />
//       <ContactList
//         contacts={contacts.filter(contact =>
//           contact.name.toLowerCase().includes(filter.toLowerCase())
//         )}
//         onRemoveContact={removeContactHandler}
//       />
//     </div>
//   );
// };

// export default App;
