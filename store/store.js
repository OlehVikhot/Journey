import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import savedSlice from "./savedSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    saved: savedSlice,
  },
});
