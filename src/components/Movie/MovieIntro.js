import React from "react";
import T from "prop-types";
import { withRouter } from "react-router-dom";
import styles from "../MovieIntro.module.css";

const MovieIntro = ({ movie }) => {
  const baseImageUrl = "https://image.tmdb.org/t/p/original/";
  const {
    release_date,
    overview,
    genres,
    original_title,
    poster_path,
    vote_average
  } = movie;
  return (
    <div className={styles.MovieIntro}>
      <img
        src={`${baseImageUrl}${poster_path}`}
        alt={original_title}
        width="240"
        height="360"
        className={styles.Image}
      />
      <div className={styles.Intro}>
        <h2>
          {original_title}({release_date})
        </h2>
        <p>User Score: {vote_average}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul className={styles.GenresList}>
          {genres.map(({ id, name }) => (
            <li className={styles.GenresListItem} key={id}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

MovieIntro.defaultProps = {
  poster_path: "https://via.placeholder.com/350x150"
};

MovieIntro.propTypes = {
  movie: T.shape({
    poster_path: T.string,
    title: T.string.isRequired,
    release_date: T.string.isRequired,
    vote_average: T.number.isRequired,
    overview: T.string.isRequired,
    genres: T.arrayOf(
      T.shape({
        id: T.number.isRequired,
        name: T.string.isRequired
      })
    ).isRequired
  }).isRequired
};

export default withRouter(MovieIntro);
