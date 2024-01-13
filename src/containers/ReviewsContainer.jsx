import { Reviews } from "@/components/Reviews/Reviews";
import { fetchReviews } from "@/redux/features/review/thunks/fetchReviews";
import { selectRestaurantReviewIds } from "@/redux/features/restaurant/selectors";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ReviewsContainer = ({ restaurantId, className }) => {
  const reviewIds = useSelector((state) =>
  selectRestaurantReviewIds(state, restaurantId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews({ restaurantId: restaurantId }));
  }, [restaurantId]);

  if (!reviewIds?.length) {
    return null;
  }

  return <Reviews reviewIds={reviewIds} className={className} />;
};
