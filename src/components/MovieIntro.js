import React from "react";
import T from "prop-types";
import { withRouter } from "react-router-dom"

const MovieIntro = ({movie}) => {
    const baseImageUrl = 'https://image.tmdb.org/t/p/original/';
    const {release_date, overview, genres, original_title, poster_path, vote_average } = movie;
    return (
        <>
            <img
                src={`${baseImageUrl}${poster_path}`}
                alt={original_title}
                width="240"
                height="360"
            />
            <>
                <h2>{original_title}({release_date})</h2>
                <p>User Score: {vote_average}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <ul>
                    {genres.map(({id, name}) => (<li key={id}>{name}</li>))}
                </ul>
            </>
        </>
    )
};

MovieIntro.propTypes = {
    poster_path: T.string.isRequired,
    title: T.string.isRequired,
    release_date: T.string.isRequired,
    vote_average: T.number.isRequired,
    overview: T.string.isRequired,
    // genres: T.arrayOf()
    id: T.number.isRequired,
    name: T.string.isRequired,
};

export default withRouter(MovieIntro);