import { cartReducer } from "@/redux/features/cart";
import { dishReducer } from "@/redux/features/dish";
import { restaurantReducer } from "@/redux/features/restaurant";
import { reviewReducer } from "@/redux/features/review";
import { userReducer } from "@/redux/features/user";
import { logger } from "@/redux/middlewares/logger";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: restaurantReducer,
    dish: dishReducer,
    user: userReducer,
    review: reviewReducer,
  },
 // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
