import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./slice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
});
