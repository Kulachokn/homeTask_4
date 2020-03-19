import React from "react";
import MovieListItem from "./MoviesListItem";

export default function MoviesList ({movies, location}) {
    return (
        <ul>
            {movies.map(({id, title, name}) => (
                <MovieListItem key={id} id={id} title={title} name={name} location={location}/>
                )
            )}
        </ul>
    );
}
