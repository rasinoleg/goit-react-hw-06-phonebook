import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactSlice'; 

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export default store;



// Фаил №1
// import { configureStore } from '@reduxjs/toolkit';
// import contactsReducer from './contactSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
// });

// export default store;


