import axios from "axios";

const getPopularMovie = () =>
  axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  });
const getMovieInfo = (movieID) =>
  axios.create({
    baseURL: `
  https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  });

export { getPopularMovie, getMovieInfo };
