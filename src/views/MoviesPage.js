import React, { Component } from "react";
import { Link } from "react-router-dom";
import movieAPI from "../services/movie-api";

export default class MoviesPage extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    movieAPI
      .fetchMovieWithQuery("Frozen")
      .then(movies => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
    const { match } = this.props;

    return (
      <>
        {movies.length > 0 && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={`${match.url}/${movie.id}`}>{movie.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
