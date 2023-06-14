import React from "react";
import { OrderCounter } from "@/components/OrderCounter/OrderCounter";

export const Dish = ({ dish }) => {
  if (!dish) {
    return null;
  }

  const { id, name, price, ingredients} = dish;
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <OrderCounter id={id} ingredients={ingredients}/>
    </div>
  );
};
