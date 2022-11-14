import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  key: "",
  name: "",
  isAuthenticated: false,
  location: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state, action) => {
      state.key = action.payload.key;
      state.isAuthenticated = true;
    },
    register: (state, action) => {
      state.key = action.payload.key;
      state.name = action.payload.name;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.key = "";
      state.isAuthenticated = false;
    },
    setLocation: (state, action) => {
      state.location.lat = action.payload.lat;
      state.location.lng = action.payload.lng;
    },
  },
});

export const { authenticate, register, logout, setLocation } =
  authSlice.actions;

export default authSlice.reducer;
