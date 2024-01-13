import { STATUSES } from "@/constants/statuses";
import { selectUserModule } from "@/redux/features/user/selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    "user/fetchUsers",
    async (_, { getState }) => {
        const state = getState();

        if (selectUserModule(state).ids.length) {
            return rejectWithValue(STATUSES.alreadyLoaded);
        }
        
        const response = await fetch(`http://localhost:3001/api/users`);

        const users = await response.json();

        return { users: users };
    }
);