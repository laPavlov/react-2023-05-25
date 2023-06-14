import React from "react";

export const Ingredient = ({ ingredient }) => {
  if (!ingredient) {
    return null;
  }

  return <div>{ingredient}</div>;
};
