import React from "react";
import { Ingredient } from "@/components/Ingredient/Ingredient";

/* eslint-disable react/jsx-key */
export const Ingredients = ({ ingredients }) => {
  if (!ingredients?.length) {
    return <span>Empty ingredients</span>;
  }

  

  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            <Ingredient ingredient={ingredient} />
          </li>
        ))}
      </ul>
    </div>
  );
};
