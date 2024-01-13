import { STATUSES } from "@/constants/statuses";
import { fetchReviews } from "@/redux/features/review/thunks/fetchReviews";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const reviewEntityAdapter = createEntityAdapter();

const reviewSlice = createSlice({
  name: "review",
  initialState: reviewEntityAdapter.getInitialState({
    status: STATUSES.idle,
  }),
  extraReducers: (builder) => {
    builder.addCase(fetchReviews.pending, (state) => {
      state.status = STATUSES.pending;
    });
    builder.addCase(
      fetchReviews.fulfilled,
      (state, { payload }) => {
        reviewEntityAdapter.addMany(state, payload.reviews);
        state.status = STATUSES.finished;
      }
    );
    builder.addCase(
      fetchReviews.rejected,
      (state, { payload }) => {
        state.status =
          payload === STATUSES.alreadyLoaded
            ? STATUSES.finished
            : STATUSES.failed;
      }
    );
  },
});

export const { selectById, selectIds } = reviewEntityAdapter.getSelectors();
export const reviewReducer = reviewSlice.reducer;
