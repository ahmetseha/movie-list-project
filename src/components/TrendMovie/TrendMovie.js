import { useState, useEffect } from "react";

import styles from "./TrendMovie.module.scss";
import { getTrendMovie } from "../../api/appAxios";

import MovieCard from "../MovieCard/MovieCard";

const TrendMovie = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getTrendMovie()
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

export default TrendMovie;
