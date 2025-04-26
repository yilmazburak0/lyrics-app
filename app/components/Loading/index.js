import React from "react";
import styles from "./Loading.module.css";

function Loading({ dark = false }) {
  return (
    <div className={styles.loadingWrapper}>
      <div className={`${styles.loading} ${dark ? styles.dark : ''}`}></div>
    </div>
  );
}

export { Loading };