import React from "react";
import { Link } from "react-router-dom";
import routes from "../../routes";
import T from "prop-types";

const MoviesListItem = ({ id, name, title, location }) => {
  return (
    <li>
      <Link
        to={{
          pathname: `${routes.movies}/${id}`,
          state: { from: location }
        }}
      >
        {title ? title : name}
      </Link>
    </li>
  );
};

export default MoviesListItem;

MoviesListItem.propTypes = {
  id: T.number.isRequired,
  title: T.string,
  name: T.string,
  location: T.object.isRequired
};
