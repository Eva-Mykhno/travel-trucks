import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getCampers, getFilteredCampers, getCamperById } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  isError: null,
  favorites: [],
  filteredItems: [],
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
    setFilteredCampers(state, action) {
      state.filteredItems = action.payload;
    },
    resetFilteredCampers(state) {
      state.filteredItems = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCampers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getFilteredCampers.fulfilled, (state, action) => {
        state.filteredItems = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.selectedCamper = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addMatcher(
        isAnyOf(
          getCampers.pending,
          getFilteredCampers.pending,
          getCamperById.pending
        ),
        (state) => {
          state.isLoading = true;
          state.isError = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getCampers.rejected,
          getFilteredCampers.rejected,
          getCamperById.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        }
      );
  },
});

export const { toggleFavorite, setFilteredCampers, resetFilteredCampers } =
  slice.actions;
export const campersReducer = slice.reducer;
