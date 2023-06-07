import React from "react";
import { Dish } from "@/components/Dish/Dish";

export const Menu = ({ menu }) => {
  if (!menu?.length) {
    return (
      <div class="menu-item">
        <h3>Empty Menu</h3>
      </div>);
  }

  return (
    <div class="menu-item">
      <h3>Menu</h3>
      <ul>
        {menu.map((dish) => (
          <li>
            <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
