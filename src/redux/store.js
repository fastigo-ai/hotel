import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"; // ✅ your auth logic

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
