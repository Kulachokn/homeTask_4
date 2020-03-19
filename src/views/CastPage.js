import React, {Component} from "react";
import movieAPI from "../services/movie-api";
import Spinner from "../components/Loader";
import Navigation from "../components/Navigation";
import CastList from "../components/CastList";

export default class CastPage extends Component {
    state = {
        cast: [],
        error: '',
        loading: false
    };

    componentDidMount() {
        this.fetchMovies(this.props.match.params.movieId);
    };

    fetchMovies = movieId => {
        this.setState({ loading: true });
        movieAPI
            .fetchMovieCast(this.props.match.params.movieId)
            .then(cast => {
                console.log(cast);
                this.setState({cast})
            })
            .catch(({message}) => this.setState({error: message}))
            .finally(() => this.setState({loading: false}));
    };

    render() {
        const {cast, error, loading} = this.state;
        return (
            <>
                {/*{error && <Navigation message={error} />}*/}
                {loading && <Spinner />}
                {cast.length > 0
                    ? <CastList cast={cast} />
                    : <p>No cast</p>}
            </>
        );
    }

}
