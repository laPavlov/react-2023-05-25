import React from "react";

export const Dish = ({ dish }) => {
  if (!dish) {
    return null;
  }

  const { name, price } = dish;
  return (
    <div class="dish-item">
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};
