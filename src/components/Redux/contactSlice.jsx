import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    },
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, filterContacts } = contactsSlice.actions;

export default contactsSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit";

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: [],
//   },
//   reducers: {
//     addContact(state, action) {
//       state.contacts.push(action.payload);
//     },
//   },
// });

// export const { addContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: [],
//   },
//   reducers: {
//     addContact: (state, action) => {
//       state.contacts.push(action.payload);
//     },
//     removeContact: (state, action) => {
//       const contactIndex = state.contacts.findIndex(contact => contact.id === action.payload);
//       if (contactIndex !== -1) {
//         state.contacts.splice(contactIndex, 1);
//       }
//     },
//   },
// });

// export const { addContact, removeContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;


