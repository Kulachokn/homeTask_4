import React from "react";
import MovieListItem from "./MoviesListItem";

export default function MoviesList ({movies}) {
    return (
        <ul>
            {movies.map(({id, title, name}) => (
                <MovieListItem key={id} title={title} name={name} />
                )
            )}
        </ul>
    );
}
