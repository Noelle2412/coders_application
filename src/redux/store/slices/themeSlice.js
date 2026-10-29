import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  if (window === "undefined") {
    return false; // Default to light mode (SSR fallback)
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const initialState = {
  isDark: getInitialTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
