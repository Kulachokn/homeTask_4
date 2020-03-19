import React, { Component } from "react";
import movieAPI from "../services/movie-api";
import routes from "../routes";
import Spinner from "../components/Loader";
import Navigation from "../components/Navigation";
import MovieIntro from "../components/MovieIntro";
import AdditionalInformation from "../components/AdditionalInformation";

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
    error: "",
    loading: false
  };

  componentDidMount() {
    this.fetchMovies(this.props.match.params.movieId);
  }

  fetchMovies = () => {
    movieAPI
      .fetchMovieDetails(this.props.match.params.movieId)
      .then(movie => this.setState({ movie }))
      .catch(({ message }) => this.setState({ error: message }))
      .finally(() => this.setState({ loading: false }));
  };

  handleGoBack = () => {
    const { state } = this.props.location;

    if (state && state.from) {
      return this.props.history.push(state.from);
    }

    this.props.history.push(routes.movies);
  };

  render() {
    const { movie, error, loading } = this.state;
    return (
      <main>
        <button type="button" onSubmit={this.handleGoBack}>
          Back to movies
        </button>
        {/*<Navigation />*/}
        {loading && <Spinner />}
        {movie && (
          <>
            <MovieIntro movie={movie} />
            <AdditionalInformation />
          </>
        )}

        {/*<Route path={`${match.path}${routes.cast}`} component={CastPage} />*/}
        {/*<Route path={`${match.path}${routes.reviews}`} component={ReviewsPage} />*/}
      </main>
    );
  }
}
