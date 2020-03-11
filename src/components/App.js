import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../views/HomePage";
import MoviesPage from "../views/MoviesPage";
import MovieDetailsPage from "../views/MovieDetailsPage";
import Navigations from "./Navigations";
import NotFoundMovie from "../views/NotFoundMovie";
import routes from "../routes";

const App = () => (
  <>
    <Navigations />
    <Switch>
      <Route path={routes.home} exact component={HomePage} />
      <Route path={routes.movies} exact component={MoviesPage} />
      <Route path={routes.movieDetails} component={MovieDetailsPage} />
      {/*<Redirect to="/" />*/}
      <Route component={NotFoundMovie} />
    </Switch>
  </>
);

export default App;
