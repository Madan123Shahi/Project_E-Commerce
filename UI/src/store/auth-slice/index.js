import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {}, // state-current state, action-> update state
  },
});

export const { setUser } = authSlice.actions;
// using destructuring to extract setUser from authSlice.actions
export default authSlice.reducer;
