import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

import styles from "./MovieCard.module.scss";

const MovieCard = (props) => {
  const { movieData } = props;

  // get movie database api images
  const movieImage = "https://image.tmdb.org/t/p/w300";

  return (
    <>
      {movieData &&
        movieData.map((movie) => {
          return (
            <Link
              to={`${movie.id}`}
              className={styles.container}
              key={movie.id}>
              <div className={styles.content}>
                <div className={styles.image}>
                  <img
                    src={`${movieImage}${movie.poster_path}`}
                    alt={movie.original_title}
                  />
                </div>
                <div className={styles.movieName}>{movie.original_title}</div>
                <div className={styles.release}>{movie.release_date}</div>
                <div className={styles.imdb}>
                  <AiFillStar />
                  {movie.vote_average}
                </div>
              </div>
            </Link>
          );
        })}
    </>
  );
};

export default MovieCard;
