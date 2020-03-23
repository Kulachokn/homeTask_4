import React, { Component } from "react";
import MoviesList from "../components/Movie/MoviesList";
import movieAPI from "../services/movie-api";
import Loader from "../components/Loader";
import Notification from "../components/Notification";
import styles from "../components/HomePage.module.css";

export default class HomePage extends Component {
  state = {
    movies: [],
    loader: false,
    error: ""
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    this.setState({ loading: true });
    movieAPI
      .fetchMovies()
      .then(movies => this.setState({ movies }))
      .catch(({ message }) => this.setState({ error: message }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { movies, error, loading } = this.state;
    const { location } = this.props;
    return (
      <>
        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}
        {loading && <Loader />}
        <h2 className={styles.Title}>Trending movies</h2>
        <MoviesList movies={movies} location={location} />
      </>
    );
  }
}
