import React from "react";
import { Link } from "gatsby";
import styles from "./squareLink.module.css";

const SquareLink = ({ children, link, style }) => (
  <Link className={styles.squareLink} style={style} to={link}>
    {children}
  </Link>
);

export default SquareLink;
