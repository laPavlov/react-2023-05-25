import { Reviews } from "@/components/Reviews/Reviews";
import { selectMenuInRestaurant } from "@/redux/features/restaurant/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const ReviewsContainer = ({ reviews }) => {
//     const menu = useSelector((state) =>
//         selectMenuInRestaurant(state, restaurantId)
//     );
// console.log(menu);
    return <Reviews reviews={reviews} />;
};
