export const selectReviews = (state) => state.review;
export const selectReviewIds = (state) => selectReviews(state).ids;
export const selectReview = (state, reviewId) =>
  selectReviews(state).entities[reviewId];
