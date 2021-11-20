import React from "react";
import { Link } from "react-router-dom";

import styles from "./MovieCard.module.scss";

const MovieCard = (props) => {
  const { movieData } = props;
  console.log(movieData);
  return (
    <>
      {movieData &&
        movieData.map((movie) => {
          return (
            <Link
              to={`${movie.id}`}
              className={styles.container}
              key={movie.id}>
              {movie.id}
            </Link>
          );
        })}
    </>
  );
};

export default MovieCard;
