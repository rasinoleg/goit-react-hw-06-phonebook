import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: '' },
  reducers: {
    onAddContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    onRemoveContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    onFilterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { onAddContact, removeContact, onFilterContacts } = contactSlice.actions;
export default contactSlice.reducer;




// Фаил №1
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   contacts: [],
//   filter: '',
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact: (state, action) => {
//       state.contacts.push(action.payload);
//     },
//     removeContact: (state, action) => {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//     filterContacts: (state, action) => {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { addContact, removeContact, filterContacts } =
//   contactsSlice.actions;

// export default contactsSlice.reducer;
