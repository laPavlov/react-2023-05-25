import React from "react";

export const ReviewUser = ({ review }) => {
  if (!review) {
    return null;
  }

  const { id, user, text, rating } = review;
  return (
    <div data-id={id} class="review-item">
      <p>{user}</p>
      <p>{text}</p>
      <p>{rating}</p>
    </div>
  );
};
