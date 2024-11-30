export const selectCampers = (state) => state.campers.items || [];
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.isError;
export const selectFavorites = (state) => state.campers.favorites;
export const selectFilteredCampers = (state) =>
  state.campers.filteredItems || [];
// export const selectFilteredCampers = (state) => {
//   const searchQuery = state.filters.search.toLowerCase();
//   return state.campers.items.filter((camper) =>
//     camper.name.toLowerCase().includes(searchQuery)
//   );
// };
