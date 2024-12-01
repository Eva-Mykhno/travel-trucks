export const selectCampers = (state) => state.campers.items || [];
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.isError;
export const selectFavorites = (state) => state.campers.favorites;
export const selectFilteredCampers = (state) =>
  state.campers.filteredItems || [];
export const selectCamperById = (state, camperId) =>
  state.campers.items.find((camper) => camper.id === camperId);
