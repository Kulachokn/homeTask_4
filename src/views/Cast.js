import React, {Component} from "react";
import movieAPI from "../services/movie-api";
import Spinner from "../components/Loader";
import Notification from "../components/Notification";
import CastList from "./CastList";

export default class Cast extends Component {
    state = {
        cast: [],
        error: '',
        loading: false
    };

    componentDidMount() {
        this.fetchMovies(this.props.match.params.movieId);
    };

    fetchMovies = () => {
        movieAPI
            .fetchMovieDetails(this.props.match.params.movieId)
            .then(cast => this.setState({cast}))
            .catch(({message}) => this.setState({error: message}))
            .finally(() => this.setState({loading: false}));
    };

    render() {
        const {cast, error, loading} = this.state;
        return (
            <>
                {error && <Notification message={error} />}
                {loading && <Spinner />}
                {cast.length > 0
                    ? <CastList cast={cast} />
                    : <p>No cast</p>}
            </>
        );
    }

}
