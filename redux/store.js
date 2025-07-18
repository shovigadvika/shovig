// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';

export const store = configureStore({
  reducer: {
    contact: contactReducer
  }
});