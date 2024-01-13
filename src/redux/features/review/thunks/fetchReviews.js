import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReviews = createAsyncThunk(
    "review/fetchReviews",
    async ({ restaurantId }) => {
        const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
        
        const reviews = await response.json();

        return { restaurantId: restaurantId, reviews: reviews };
    }
);