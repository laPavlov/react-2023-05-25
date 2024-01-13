import { Loading } from "@/components/Loading/Loading";
import { Review } from "@/components/Review/Review";
import { selectReview, selectReviewModule } from "@/redux/features/review/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const ReviewContainer = ({ reviewId, ...props }) => {
  const review = useSelector((state) =>
    selectReview(state, reviewId)
  );

  if (!review) {
    return <Loading />;
  }

  return <Review {...props} review={review} />;
};
