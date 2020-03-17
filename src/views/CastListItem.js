import React from "react";
// import movieAPI from "../services/movie-api";


const baseImageUrl = 'https://image.tmdb.org/t/p/original';
const noimage = 'https://pixabay.com/';
const CastListItem = ({name, profile_path, character}) => {
    return (
        <li>
            <img
                src={
                    profile_path ? `${baseImageUrl}${profile_path}` : `${noimage}`
                }
            />
            <p>{name}</p>
            <p>Character: {character}</p>
        </li>
    )
};

export default CastListItem;

// https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-US
// const baseImageUrl = 'https://image.tmdb.org/t/p/original';
// https://image.tmdb.org/t/p/w500${imgUrl}
// https://pixabay.com/