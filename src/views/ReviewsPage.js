import React, {Component} from "react";
import movieAPI from "../services/movie-api";
import Spinner from "../components/Loader";
import Navigation from "../components/Navigation";
import ReviewsList from "../components/ReviewsList";

export default class ReviewsPage extends Component {
    state = {
        reviews: [],
        error: '',
        loading: false
    };

    componentDidMount() {
        this.fetchMovies(this.props.match.params.movieId);
    };

    fetchMovies = movieId => {
        movieAPI
            .fetchMovieReviews(this.props.match.params.movieId)
            .then(reviews => this.setState({ reviews: [...reviews] }))
            .catch(({message}) => this.setState({error: message}))
            .finally(() => this.setState({loading: false}));
    };

    render() {
        const {reviews, error, loading} = this.state;
        return (
            <>
                {error && <Navigation message={error} />}
                {loading && <Spinner />}
                {reviews.length > 0
                    ? <ReviewsList reviews={reviews} />
                    : <p>No reviews</p>}
                </>
        );
    }
}
