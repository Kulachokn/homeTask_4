import React, { Component } from "react";
import movieAPI from "../services/movie-api";
import Spinner from "../components/Loader";
import ReviewsList from "../components/Review/ReviewsList";
import Notification from "../components/Notification";

export default class ReviewsPage extends Component {
  state = {
    reviews: [],
    error: "",
    loading: false
  };

  componentDidMount() {
    this.fetchMovies(this.props.match.params.movieId);
  }

  fetchMovies = movieId => {
    movieAPI
      .fetchMovieReviews(this.props.match.params.movieId)
      .then(reviews => this.setState({ reviews: [...reviews] }))
      .catch(({ message }) => this.setState({ error: message }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { reviews, error, loading } = this.state;
    return (
      <>
        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}
        {loading && <Spinner />}
        {reviews.length > 0 ? (
          <ReviewsList reviews={reviews} />
        ) : (
          <p>No reviews</p>
        )}
      </>
    );
  }
}
