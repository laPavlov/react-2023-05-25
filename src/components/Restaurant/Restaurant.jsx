import React from "react";
import { Menu } from "@/components/Menu/Menu";
import { Reviews } from "@/components/Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant.id || !restaurant.name) {
    return null;
  }

  const { id, name, menu, reviews } = restaurant;

  return (
    <div data-id={id} class="restaurant-container">
      <h2>{name}</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
};
