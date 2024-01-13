import { STATUSES } from "@/constants/statuses";
import { fetchDishesIfNotExist } from "@/redux/features/dish/thunks/fetchDishesIfNotExist";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   entities: normalizedDishes.reduce((acc, dish) => {
//     acc[dish.id] = dish;

//     return acc;
//   }, {}),
//   ids: normalizedDishes.map(({ id }) => id),
// };

export const dishEntityAdapter = createEntityAdapter();

const dishSlice = createSlice({
  name: "dish",
  initialState: dishEntityAdapter.getInitialState({
    status: STATUSES.idle,
    restaurantIds: []
  }),
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchDishesIfNotExist.pending, (state) => {
          state.status = STATUSES.pending;
        })
      .addCase(
        fetchDishesIfNotExist.fulfilled,
        (state, { payload }) => {
          dishEntityAdapter.addMany(state, payload.dishes);
          state.status = STATUSES.finished;
          state.restaurantIds.push(payload.restaurantId);
        }
      )
      .addCase(
        fetchDishesIfNotExist.rejected,
        (state, { payload }) => {
          state.status =
            payload === STATUSES.alreadyLoaded
              ? STATUSES.finished
              : STATUSES.failed;
        }
      );
  },
});

export const { selectById, selectIds } = dishEntityAdapter.getSelectors();
export const dishReducer = dishSlice.reducer;