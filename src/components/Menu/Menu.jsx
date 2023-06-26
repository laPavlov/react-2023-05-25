import { Dish } from "@/components/Dish/Dish";
import React from "react";
import style from "./styles.module.scss"

/* eslint-disable react/jsx-key */
export const Menu = ({ menu }) => {
  if (!menu?.length) {
    return <span>Empty Menu</span>;
  }

  return (
    <div>
      <h3>Menu</h3>
      <ul className={style.content + ' list-without-marker'}>
        {menu.map((dish) => (
          <li className={style.item}>
            <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
