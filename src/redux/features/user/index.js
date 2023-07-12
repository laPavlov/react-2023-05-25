import { normalizedUsers } from "@/mocks/normalized-fixtures";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: normalizedUsers.reduce((acc, user) => {
    acc[user.id] = user;

    return acc;
  }, {}),
  ids: normalizedUsers.map(({ id }) => id),
};

const userSlice = createSlice({
  name: "user",
  initialState,
});

export const userReducer = userSlice.reducer;
