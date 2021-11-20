import React from "react";

import styles from "./Container.module.scss";

import Banner from "../Banner/Banner";
import PopularMovie from "../PopularMovie/PopularMovie";
import MovieInfo from "../MovieInfo/MovieInfo";
import { Route, Routes } from "react-router";

const Container = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <PopularMovie />
      <Routes>
        <Route path=":slug" element={<MovieInfo />}></Route>
      </Routes>
    </div>
  );
};

export default Container;
