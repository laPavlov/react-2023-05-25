import { userReducer } from "@/redux/features/user";
import { reviewReducer } from "@/redux/features/review";
import { dishReducer } from "@/redux/features/dish";
import { cartReducer } from "@/redux/features/cart";
import { restaurantReducer } from "@/redux/features/restaurant";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: restaurantReducer,
    dish: dishReducer,
    review: reviewReducer,
    user: userReducer,
  },
});
