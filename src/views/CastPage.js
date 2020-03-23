import React, { Component } from "react";
import movieAPI from "../services/movie-api";
import Spinner from "../components/Loader";
import CastList from "../components/Cast/CastList";
import Notification from "../components/Notification";

export default class CastPage extends Component {
  state = {
    cast: [],
    error: "",
    loading: false
  };

  componentDidMount() {
    this.fetchMovies(this.props.match.params.movieId);
  }

  fetchMovies = movieId => {
    this.setState({ loading: true });
    movieAPI
      .fetchMovieCast(this.props.match.params.movieId)
      .then(cast => {
        this.setState({ cast });
      })
      .catch(({ message }) => this.setState({ error: message }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { cast, error, loading } = this.state;
    return (
      <>
        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}
        {loading && <Spinner />}
        {cast.length > 0 ? <CastList cast={cast} /> : <p>No cast</p>}
      </>
    );
  }
}
