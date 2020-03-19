import React from "react";
import { Link } from "react-router-dom";

const NotFoundMovie = () => (
  <div>
    <h1>404</h1>
    <p>
      Not found movie. Go to <Link to="/">home page</Link>
    </p>
  </div>
);

export default NotFoundMovie;
