import React from "react";

import styles from "./Container.module.scss";

import Banner from "../Banner/Banner";
import PopularMovie from "../PopularMovie/PopularMovie";
import MovieInfo from "../MovieInfo/MovieInfo";
import { Route, Routes } from "react-router";
// import TrendMovie from "../TrendMovie/TrendMovie";

const Container = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <h2>Popular Movie</h2>
      <PopularMovie />
      {/* <h3>Trend Movie</h3>
      <TrendMovie /> */}
      <Routes>
        <Route path=":slug" element={<MovieInfo />}></Route>
      </Routes>
    </div>
  );
};

export default Container;
