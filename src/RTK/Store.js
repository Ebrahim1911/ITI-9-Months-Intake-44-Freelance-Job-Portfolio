import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "./slices/navSlice";
export const Store = configureStore({
  reducer: {
    nav: NavSlice,
  },
});
