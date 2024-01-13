import { selectById, selectIds } from "@/redux/features/dish";

export const selectDishModule = (state) => state.dish;

export const selectDishIds = (state) =>
  selectIds(selectDishModule(state));

export const selectDish = (state, dishId) =>
  selectById(selectDishModule(state), dishId);