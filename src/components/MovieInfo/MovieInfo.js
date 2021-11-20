import React, { useEffect } from "react";
import { useParams } from "react-router";

import { getMovieInfo } from "../../api/appAxios";

const MovieInfo = () => {
  const { slug } = useParams();

  useEffect(() => {
    getMovieInfo(slug)
      .get()
      .then((res) => {
        console.log(res);
      });
  });
  return <div>{slug}</div>;
};

export default MovieInfo;
