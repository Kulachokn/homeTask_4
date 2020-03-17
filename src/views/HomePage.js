import React, {Component} from "react";
import MoviesList from "./MoviesList";
import movieAPI from "../services/movie-api";
import Notification from "../components/Notification";
import Loader from "../components/Loader";

export default class HomePage extends Component {
    state = {
        movies: [],
        loader: false,
        error: ''
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
        const {movies, error, loading} = this.state;

        return (
            <>
                {error && (
                    <Notification
                        message={`Whoops, something went wrong: ${error.message}`}
                    />
                )}
                {loading && <Loader />}
                <h2>Trends movies</h2>
                <MoviesList movies={movies}/>
            </>
        );
    }
}


