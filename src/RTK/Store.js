import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "./slices/navSlice";
export const store = configureStore({
  reducer: {
    nav: NavSlice,
  },
});
