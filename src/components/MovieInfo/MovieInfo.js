import { useState, useEffect } from "react";
import { useParams } from "react-router";

import styles from "./MovieInfo.module.scss";
import { getMovieInfo } from "../../api/appAxios";

const MovieInfo = () => {
  const { slug } = useParams();
  const [movieInfoData, setMovieInfoData] = useState([]);

  const movieInfoImage = "https://image.tmdb.org/t/p/w300";

  useEffect(() => {
    getMovieInfo(slug)
      .get()
      .then((res) => {
        setMovieInfoData(res.data);
      });
  }, [slug]);
  return (
    <div className={styles.container}>
      <div className={styles.infoHead}>
        <div className={styles.image}>
          <img
            src={`${movieInfoImage}${movieInfoData.backdrop_path}`}
            alt={movieInfoData.title}
          />
        </div>
        <div className={styles.detail}>
          <div className={styles.companies}>
            Companies:
            {movieInfoData.production_companies &&
              movieInfoData.production_companies.map((company) => {
                return <p key={company.id}>{company.name}</p>;
              })}
          </div>
          <div className={styles.genres}>
            Categories:
            {movieInfoData.genres &&
              movieInfoData.genres.map((genre) => {
                return <p key={genre.id}>{genre.name}</p>;
              })}
          </div>
          <div className={styles.voteAndCount}>
            IMDb Rating:
            <p className={styles.vote}>{movieInfoData.vote_average}/10</p>
            <p className={styles.count}>{movieInfoData.vote_count}</p>
          </div>
        </div>
      </div>
      <div className={styles.headAndSummary}>
        <div className={styles.head}>
          <p>{movieInfoData.title}</p>
          <p>{movieInfoData.release_date}</p>
        </div>
        <div className={styles.summary}>
          Summary
          <p>{movieInfoData.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
