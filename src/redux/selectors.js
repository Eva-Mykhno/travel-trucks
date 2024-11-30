export const selectCampers = (state) => state.campers.items || [];
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.isError;
export const selectFavorites = (state) => state.campers.favorites;
