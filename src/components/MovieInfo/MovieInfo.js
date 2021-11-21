import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { AiFillStar } from "react-icons/ai";

import styles from "./MovieInfo.module.scss";
import { getMovieInfo } from "../../api/appAxios";

const MovieInfo = () => {
  const { slug } = useParams();
  const [movieInfoData, setMovieInfoData] = useState([]);
  const [loading, setLoading] = useState(true);

  const movieInfoImage = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    getMovieInfo(slug)
      .get()
      .then((res) => {
        setMovieInfoData(res.data);
        setLoading(false);
      });
  }, [slug]);

  return (
    <>
      {loading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <div className={styles.container}>
          <div className={styles.infoHead}>
            <div className={styles.image}>
              <img
                className={styles.movieInfoImage}
                src={`${movieInfoImage}${movieInfoData?.backdrop_path}`}
                alt={movieInfoData.title}
              />
            </div>
            <div className={styles.detail}>
              <div className={styles.firstDetail}>
                <div className={styles.head}>
                  <p>{movieInfoData.title}</p>
                  <p>{movieInfoData.release_date}</p>
                </div>
                <div className={styles.companies}>
                  <h3 className={styles.componiesHead}> Companies:</h3>
                  {movieInfoData.production_companies &&
                    movieInfoData.production_companies.map((company) => {
                      return <p key={company.id}>{company.name}</p>;
                    })}
                </div>
                <div className={styles.genres}>
                  <h3>Categories:</h3>
                  {movieInfoData.genres &&
                    movieInfoData.genres.map((genre) => {
                      return <p key={genre.id}>{genre.name}</p>;
                    })}
                </div>
              </div>
              <div className={styles.voteAndCount}>
                <h3>IMDb Rating:</h3>
                <div className={styles.rating}>
                  <AiFillStar />
                  <p className={styles.vote}>{movieInfoData.vote_average}/10</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.summary}>
            <h3 className={styles.summaryHead}>Summary</h3>
            <p>{movieInfoData.overview}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieInfo;
