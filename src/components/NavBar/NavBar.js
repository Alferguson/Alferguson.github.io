import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styles from "./NavBar.module.css";

const NavBar = props => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        <li>
          <Link to="blog">Blog!</Link>
        </li>
      </ul>
    </nav>
  );
};

NavBar.propTypes = {};

export default NavBar;
