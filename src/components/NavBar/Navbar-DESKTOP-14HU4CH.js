import React from "react";
import { Link } from "gatsby";
import styles from "./NavBar.module.css";

const NavBar = ({ location }) => {
  const { pathname } = location;

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact/">Contact</Link>
        </li>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
