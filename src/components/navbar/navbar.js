import React from "react";
import { Link } from "gatsby";
import styles from "./navbar.module.css";

const NavBarLabel = ({ upperText, lowerText, isSplash = false }) => {
  return (
    <span className={styles.navBarLabel}>
      <h3>{upperText}</h3>
      <h6>{lowerText.toUpperCase()}</h6>
    </span>
  );
};

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <Link to="/about/">
            <NavBarLabel upperText="about" lowerText="me" />
          </Link>
        </li>
        <li>
          <Link to="/blog/">
            <NavBarLabel upperText="blog" lowerText="posts" />
          </Link>
        </li>
        <li>
          <Link to="/contact/">
            <NavBarLabel upperText="contact" lowerText="me" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
