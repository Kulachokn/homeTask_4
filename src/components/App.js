import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../views/HomePage";
import MoviesPage from "../views/MoviesPage";
import MovieDetailsPage from "../views/MovieDetailsPage";
import NotFoundMovie from "../views/NotFoundMovie";
import routes from "../routes";
import CastPage from "../views/CastPage";
import ReviewsPage from "../views/ReviewsPage";

const App = () => (
  <Layout>
    <Switch>
      <Route path={routes.home} exact component={HomePage} />
      <Route path={routes.movies} exact component={MoviesPage} />
      <Route path={routes.movieDetails} component={MovieDetailsPage} />
      {/*<Route path={routes.cast} component={CastPage} />*/}
      {/*<Route path={routes.reviews} component={ReviewsPage} />*/}
      <Route component={NotFoundMovie} />
    </Switch>
  </Layout>
);

export default App;
