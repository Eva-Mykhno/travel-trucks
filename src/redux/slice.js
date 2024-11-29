import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getCampers } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  isError: null,
};

const slice = createSlice({
  name: "campers",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getCampers.fulfilled, (state, action) => {
        console.log("Fulfilled data:", action.payload);
        state.items = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addMatcher(isAnyOf(getCampers.pending), (state) => {
        console.log("Fetching campers...");
        state.isLoading = true;
        state.isError = false;
      })
      .addMatcher(isAnyOf(getCampers.rejected), (state) => {
        console.error("Error fetching campers:", action.error);
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const campersReducer = slice.reducer;
