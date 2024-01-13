import { Dish } from "@/components/Dish/Dish";
import { Loading } from "@/components/Loading/Loading";
import { cartActions } from "@/redux/features/cart";
import { selectDishAmount } from "@/redux/features/cart/selectors";
import { selectDish } from "@/redux/features/dish/selectors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const DishContainer = ({ dishId, ...props }) => {
  const dish = useSelector((state) => selectDish(state, dishId));
  const amount = useSelector((state) => selectDishAmount(state, dishId));
  const dispatch = useDispatch();

  const decrement = () => dispatch(cartActions.decrement(dishId));
  const increment = () => dispatch(cartActions.increment(dishId));

  if (!dish) {
    return <Loading />;
  }

  return (
    <Dish
      {...props}
      dish={dish}
      amount={amount}
      increment={increment}
      decrement={decrement}
    />
  );
};
