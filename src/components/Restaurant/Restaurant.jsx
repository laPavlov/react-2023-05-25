/* eslint-disable react/jsx-key */
import { Menu } from "@/components/Menu/Menu";
import { Reviews } from "@/components/Reviews/Reviews";
import React from "react";

import styles from "./styles.module.scss";
import { MenuContainer } from "@/containers/MenuContainer";
import { ReviewsContainer } from "@/containers/ReviewsContainer";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  const { id, name, menu, reviews } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <MenuContainer menu={menu} className={styles.menu}/>
      <ReviewsContainer reviews={reviews} className={styles.reviews}/>
      {/* <Menu menu={menu} className={styles.menu} />
      <Reviews reviews={reviews} className={styles.reviews} /> */}
    </div>
  );
};
