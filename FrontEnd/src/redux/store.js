// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "./heroSlice";
import testimonialsReducer from './testimonialsSlice';
import tourReducer from './tourSlice';

const store = configureStore({
  reducer: {
    hero: heroReducer,
    tours: tourReducer,
    testimonials: testimonialsReducer
  },
});

export default store;
