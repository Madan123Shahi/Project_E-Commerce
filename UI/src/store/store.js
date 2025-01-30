import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";

const store = configureStore({
  reducer: {
    // This will make a global reducer
    auth: authReducer,
  },
});

export default store;

// to connect with the react application we need it to decalre it in main file
