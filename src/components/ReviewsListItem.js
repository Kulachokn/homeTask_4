import React from "react";

const ReviewsListItem = ({ author, content, id }) => (
    <li id={id}>
        <h2>Author: {author}</h2>
        <p>{content}</p>
    </li>
);

export default ReviewsListItem;