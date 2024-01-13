import { Restaurants } from "@/components/Restaurants/Restaurants";
import { selectRestaurantIds } from "@/redux/features/restaurant/selectors";
import { fetchRestaurantsIfNotExist } from "@/redux/features/restaurant/thunks/fetchRestaurantsIfNotExist";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const RestaurantsContainer = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurantsIfNotExist());
  }, []);

  return <Restaurants restaurantIds={restaurantIds} />;
};
