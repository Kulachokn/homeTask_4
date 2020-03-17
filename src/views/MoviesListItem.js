import React from "react";
import {Link} from "react-router-dom";
import routes from "../routes";

const MoviesListItem = ({id, name, title, location}) => {
    return (
        <li>
            <Link to={{
                pathname: `${routes.movies}/${id}`,
                state: {form: location}
            }}>{title ? title : name}</Link>
        </li>
    )
};

export default MoviesListItem;