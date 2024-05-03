import React from "react";
import styles from "./page_laoding.module.scss";

const LoadingEffect = (): React.JSX.Element => {
  return (
    <section className={styles.loading_container}>
      <div className={styles.dots}>
        <div className={styles.dot}>L</div>
        <div className={styles.dot}>O</div>
        <div className={styles.dot}>A</div>
        <div className={styles.dot}>D</div>
        <div className={styles.dot}>I</div>
        <div className={styles.dot}>N</div>
        <div className={styles.dot}>G</div>
        <div className={styles.dot}>.</div>
        <div className={styles.dot}>.</div>
        <div className={styles.dot}>.</div>
      </div>
    </section>
  );
};

export default LoadingEffect;
