import { Menu } from "@/components/Menu/Menu";
import { fetchDishesIfNotExist } from "@/redux/features/dish/thunks/fetchDishesIfNotExist";
import { selectRestaurantDishIds } from "@/redux/features/restaurant/selectors";
import { selectDishIds, selectDishModule } from "@/redux/features/dish/selectors";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "@/components/Loading/Loading";

export const MenuContainer = ({ restaurantId, className }) => {
  const dishIds = useSelector((state) =>
    selectRestaurantDishIds(state, restaurantId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDishesIfNotExist({restaurantId: restaurantId}));
  }, [restaurantId]);

  if (!dishIds?.length) {
    return <Loading />;
  }

  return <Menu dishIds={dishIds} className={className} />;
};
