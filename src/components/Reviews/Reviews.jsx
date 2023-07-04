import { Review } from "@/components/Review/Review";
import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";

/* eslint-disable react/jsx-key */
export const Reviews = ({ reviews, className }) => {
  if (!reviews?.length) {
    return <span>Empty reviews</span>;
  }

  return (
    <div className={classNames(styles.root, className)}>
      <h3>Reviews</h3>
      <div className={styles.reviews}>
        {reviews.map((review) => (
          <Review review={review} className={styles.review} />
        ))}
      </div>
    </div>
  );
};
