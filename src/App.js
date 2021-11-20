// import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import MovieInfo from "./components/MovieInfo/MovieInfo";
// import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className={styles.content}>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path=":slug" element={<MovieInfo />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
