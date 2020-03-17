import React from "react";

export default function MovieIntro({movie}) {
    const baseImageUrl = 'https://image.tmdb.org/t/p/original/';
    const {release_date, overview, genres, original_title, poster_path, vote_average} = movie;
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
                    console.log(genres);
                    {/*{genres.map(genre => (*/}
                    {/*    <li key={genre.id}>{genre.name}</li>*/}
                    {/*))}*/}
                    {/*{genres.map(({id, name}) => (<li key={id}>{name}</li>))}*/}
                </ul>
            </>
        </>
    )
}