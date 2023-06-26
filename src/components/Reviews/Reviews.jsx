import { Review } from "@/components/Review/Review";
import React from "react";
import style from "./styles.module.scss";

/* eslint-disable react/jsx-key */
export const Reviews = ({ reviews }) => {
  if (!reviews?.length) {
    return <span>Empty reviews</span>;
  }

  return (
    <div>
      <h3 className="title">Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};
