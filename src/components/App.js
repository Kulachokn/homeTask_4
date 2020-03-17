import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../views/HomePage";
import MoviesPage from "../views/MoviesPage";
import MovieDetailsPage from "../views/MovieDetailsPage";
import NotFoundMovie from "../views/NotFoundMovie";
import routes from "../routes";

const App = () => (
  <Layout>
    <Switch>
      <Route path={routes.home} exact component={HomePage} />
      <Route path={routes.movies} exact component={MoviesPage} />
      <Route path={routes.movieDetails} component={MovieDetailsPage} />
      {/*<Route path={routes.movieCast} component={Cast} />*/}
      {/*<Route path={routes.movieReviews} component={Reviews} />*/}
      <Route component={NotFoundMovie} />
    </Switch>
  </Layout>
);

export default App;
