import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getCampers } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  isError: null,
  favorites: [],
};

const slice = createSlice({
  name: "campers",
  initialState,

  reducers: {
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      const isFavorite = state.favorites.includes(camperId);

      if (isFavorite) {
        state.favorites = state.favorites.filter((id) => id !== camperId);
      } else {
        state.favorites.push(camperId);
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCampers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addMatcher(isAnyOf(getCampers.pending), (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addMatcher(isAnyOf(getCampers.rejected), (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { toggleFavorite } = slice.actions;
export const campersReducer = slice.reducer;
