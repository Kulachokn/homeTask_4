import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../views/HomePage";
import MoviesPage from "../views/MoviesPage";
import MovieDetailsPage from "../views/MovieDetailsPage";
import Navigations from "./Navigations";
import routes from "../routes";

const App = () => (
  <>
    <Navigations />
    <Switch>
      <Route path={routes.home} exact component={HomePage} />
      <Route path={routes.movies} exact component={MoviesPage} />
      <Route path={routes.movieDetails} component={MovieDetailsPage} />
    </Switch>
  </>
);

export default App;
