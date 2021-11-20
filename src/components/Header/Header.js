import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">Movie List</Link>
      </div>
      <div className={styles.menu}>
        <ul className={styles.items}>
          <Link className={styles.item} to="/">
            Home
          </Link>
          <Link className={styles.item} to="about">
            About
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
