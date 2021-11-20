import { useState, useEffect } from "react";

import styles from "./PopularMovie.module.scss";
import { getPopularMovie } from "../../api/appAxios";

import MovieCard from "../MovieCard/MovieCard";

const PopularMovie = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getPopularMovie()
      .get()
      .then((res) => {
        setMovieData(res.data.results);
      });
  }, []);

  return (
    <div className={styles.container}>
      <MovieCard movieData={movieData} />
    </div>
  );
};

export default PopularMovie;
