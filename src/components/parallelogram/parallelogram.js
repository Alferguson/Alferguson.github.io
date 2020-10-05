import React from "react";
import styles from "./parallelogram.module.css";

const Parallelogram = ({ children, style = {} }) => {
  return (
    <div className={styles.parallelogram} style={style}>
      {children}
    </div>
  );
};

export default Parallelogram;
