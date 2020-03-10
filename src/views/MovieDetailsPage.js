import React, { Component } from "react";
import movieAPI from "../services/movie-api";

export default class MovieDetailsPage extends Component {
  state = {
    movie: null
  };

  componentDidMount() {
    movieAPI
      .fetchMovieDetails(this.props.match.params.movieId)
      .then(movie => this.setState({ movie }));
  }

  render() {
    // const {} = this.props;
    return (
      <>
        {this.state.movie > 0 && (
          <>
            <img
              src={this.state.movie.image.medium}
              alt={this.state.movie.name}
            />
            <h1>{this.state.movie.name}</h1>
          </>
        )}
      </>
    );
  }
}
