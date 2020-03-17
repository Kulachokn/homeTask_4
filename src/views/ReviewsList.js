import React from "react";
import ReviewsListItem from "./ReviewsListItem";

export default function ReviewsList({reviews}) {
    return (
        <ul>
            {reviews.map(({id, author, content}) => (
                <ReviewsListItem
                    key={id}
                    author={author}
                    content={content}
                />
            ))}
        </ul>
    )
}