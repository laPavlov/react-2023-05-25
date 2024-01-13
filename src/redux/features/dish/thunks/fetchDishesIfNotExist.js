import { STATUSES } from "@/constants/statuses";
import { selectDishModule } from "@/redux/features/dish/selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDishesIfNotExist = createAsyncThunk(
    "dish/fetchDishIfNotExist",
    async ({ restaurantId }, { rejectWithValue, getState }) => {
        const state = getState();

        if (selectDishModule(state).restaurantIds.includes(restaurantId)) {
            return rejectWithValue(STATUSES.alreadyLoaded);
        }

        const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);

        const dishes = await response.json();
        return { restaurantId: restaurantId, dishes: dishes };
    }
);