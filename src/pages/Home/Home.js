import { Routes, Route } from "react-router-dom";

import styles from "./Home.module.scss";

import Container from "../../components/Container/Container";
import MovieInfo from "../../components/MovieInfo/MovieInfo";

const Home = () => {
  return (
    <div className={styles.container}>
      <Container />
      <Routes>
        <Route path=":slug" element={<MovieInfo />} />
      </Routes>
    </div>
  );
};

export default Home;
