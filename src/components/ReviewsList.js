import React from "react";
import ReviewsListItem from "./ReviewsListItem";

export default function ReviewsList({reviews}) {
    return (
        <ul>
            {reviews.map(({id, author, content}) => (
                <ReviewsListItem
                    id={id}
                    key={id}
                    author={author}
                    content={content}
                />
            ))}
        </ul>
    )
}