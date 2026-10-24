import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    signin: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    signout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { signup, signin, signout } = authSlice.actions;

export default authSlice.reducer;
