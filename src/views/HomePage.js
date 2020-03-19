import React, {Component} from "react";
import MoviesList from "../components/MoviesList";
import movieAPI from "../services/movie-api";
import Navigation from "../components/Navigation";
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
        const {location} = this.props;
        // console.log(this.props.location);
        return (
            <>
                {error && (
                    <Navigation
                        message={`Whoops, something went wrong: ${error.message}`}
                    />
                )}
                {loading && <Loader />}
                <h2>Trends movies</h2>
                <MoviesList movies={movies} location={location}/>
            </>
        );
    }
}


