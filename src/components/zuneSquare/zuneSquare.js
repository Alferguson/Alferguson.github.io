import React from "react";
import { Link } from "gatsby";
import styles from "./zuneSquare.module.css";

const ZuneSquare = ({ children, style }) => (
  <div className={styles.zuneSquare} style={style}>
    {children}
  </div>
);

export default ZuneSquare;
