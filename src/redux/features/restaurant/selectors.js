export const selectRestaurantModule = (state) => state.restaurant;
export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;
export const selectRestaurant = (state, restaurantId) =>
  selectRestaurantModule(state).entities[restaurantId];

// export const selectMenuInRestaurant = (state, restaurantId) =>
//   selectRestaurantModule(state).entities[restaurantId].menu;

// export const selectReviewsInRestaurant = (state, restaurantId) =>
//   selectRestaurantModule(state).entities[restaurantId].menu;
