import React from "react";
import { Menu } from "@/components/Menu/Menu";
import { Reviews } from "@/components/Reviews/Reviews";

export const Restauran = ({ restauran }) => {
  if (!restauran.id || !restauran.name) {
    return null;
  }

  const { id, name, menu, reviews } = restauran;

  return (
    <div data-id={id} class="restauran-container">
      <h2>{name}</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
};
