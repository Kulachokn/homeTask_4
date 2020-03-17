import React, {Component} from "react";
import movieAPI from "../services/movie-api";
import Spinner from "../components/Loader";
import Notification from "../components/Notification";
import ReviewsList from "./ReviewsList";

export default class Reviews extends Component {
    state = {
        reviews: [],
        error: '',
        loading: false
    };

    componentDidMount() {
        this.fetchMovies(this.props.match.params.movieId);
    };

    fetchMovies = () => {
        movieAPI
            .fetchMovieDetails(this.props.match.params.movieId)
            .then(reviews => this.setState({ reviews: [...reviews] }))
            .catch(({message}) => this.setState({error: message}))
            .finally(() => this.setState({loading: false}));
    };

    render() {
        const {reviews, error, loading} = this.state;
        return (
            <>
                {error && <Notification message={error} />}
                {loading && <Spinner />}
                {reviews.length > 0
                    ? <ReviewsList reviews={reviews} />
                    : <p>No reviews</p>}
                </>
        );
    }
}
