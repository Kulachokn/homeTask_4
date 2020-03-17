import React from "react";

const ReviewsListItem = ({ author, content }) => (
    <li>
        <h2>Author: {author}</h2>
        <p>{content}</p>
    </li>
);

export default ReviewsListItem;