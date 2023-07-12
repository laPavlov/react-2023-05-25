import { Review } from "@/components/Review/Review";
import { selectReview } from "@/redux/features/review/selectors";
import { selectUser } from "@/redux/features/user/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const ReviewContainer = ({ reviewId }) => {
    const review = useSelector((state) =>
        selectReview(state, reviewId)
    );


    const user = useSelector((state) =>
        selectUser(state, review.userId)
    );

    return <Review review={review} user={user}/>;
};
