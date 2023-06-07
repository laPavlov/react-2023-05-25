import React from "react";
import { ReviewUser } from "../ReviewUser/ReviewUser";

export const Reviews = ({ reviews }) => {
    if (!reviews?.length) {
        return (
            <div class="reviews-container">
                <h3>Reviews is empty</h3>
            </div>);
    }

    return (
        <div class="reviews-container">
            <h3>Reviews</h3>
            <ul>
                {reviews.map((review) => (
                    <li>
                        <ReviewUser review={review} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
