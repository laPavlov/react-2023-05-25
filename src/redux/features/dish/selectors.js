export const selectDishes = (state) => state.dish;
export const selectDishIds = (state) => selectDishes(state).ids;
export const selectDish = (state, dishId) =>
  selectDishes(state).entities[dishId];
