import { createSlice } from "@reduxjs/toolkit";

const getInitialUser = () => {
  try {
    const storedUser = localStorage.getItem("current_user");
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (e) {
    console.error("Failed to parse stored user from localStorage:", e);
    return null;
  }
};

const initialUser = getInitialUser();

const initialState = {
  user: initialUser,
  isAuthenticated: !!initialUser,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      try {
        localStorage.setItem("current_user", JSON.stringify(action.payload));
      } catch (e) {
        console.error("Failed to save user to localStorage:", e);
      }
    },
    signin: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      try {
        localStorage.setItem("current_user", JSON.stringify(action.payload));
      } catch (e) {
        console.error("Failed to save user to localStorage:", e);
      }
    },
    signout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      try {
        localStorage.removeItem("current_user");
      } catch (e) {
        console.error("Failed to remove user from localStorage:", e);
      }
    },
  },
});

export const { signup, signin, signout } = authSlice.actions;

export default authSlice.reducer;
