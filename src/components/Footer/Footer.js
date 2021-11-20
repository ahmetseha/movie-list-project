/* eslint-disable react/jsx-no-target-blank */
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <a href="https://github.com/ahmetseha" target="_blank">
          Github
        </a>
      </div>
    </div>
  );
};

export default Footer;
