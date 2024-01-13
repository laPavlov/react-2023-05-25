import { STATUSES } from "@/constants/statuses";
import { fetchUsers } from "@/redux/features/user/thunks/fetchUsers";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const userEntityAdapter = createEntityAdapter();

const userSlice = createSlice({
  name: "user",
  initialState: userEntityAdapter.getInitialState({
    status: STATUSES.idle,
  }),
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = STATUSES.pending;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, { payload }) => {
        userEntityAdapter.addMany(state, payload.users);
        state.status = STATUSES.finished;
      }
    );
    builder.addCase(
      fetchUsers.rejected,
      (state, { payload }) => {
        state.status =
          payload === STATUSES.alreadyLoaded
            ? STATUSES.finished
            : STATUSES.failed;
      }
    );
  },
});

export const { selectById, selectIds } = userEntityAdapter.getSelectors();
export const userReducer = userSlice.reducer;
