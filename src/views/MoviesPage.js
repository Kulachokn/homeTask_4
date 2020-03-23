import React, { Component } from "react";
import SearchBox from "../components/SearchBox";
import getQueryParams from "../utils/getQueryParams";
import movieAPI from "../services/movie-api";
import MoviesList from "../components/Movie/MoviesList";
import Spinner from "../components/Loader";
import Notification from "../components/Notification";

export default class MoviesPage extends Component {
  state = {
    movies: [],
    error: "",
    loading: false
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);

    if (query) {
      this.fetchMovies(query);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }

  fetchMovies = query => {
    movieAPI
      .fetchMovieWithQuery(query)
      .then(movies => this.setState({ movies }))
      .catch(({ message }) => this.setState({ error: message }))
      .finally(() => this.setState({ loading: false }));
  };

  handleChangeQuery = query => {
    this.props.history.push({
      ...this.props.location,
      // pathname: this.props.location.pathname,
      search: `query=${query}`
    });
  };

  render() {
    const { movies, error, loading } = this.state;

    return (
      <>
        <SearchBox onSubmit={this.handleChangeQuery} />
        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}
        {loading && <Spinner />}
        {movies.length > 0 && <MoviesList movies={movies} />}
      </>
    );
  }
}
