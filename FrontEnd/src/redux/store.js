// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "./heroSlice";

const store = configureStore({
  reducer: {
    hero: heroReducer,
  },
});

export default store;
