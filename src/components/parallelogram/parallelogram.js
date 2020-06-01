import React from "react";
import styles from "./parallelogram.module.css";

const Parallelogram = ({ children }) => {
  return <div className={styles.parallelogram}>{children}</div>;
};

export default Parallelogram;
