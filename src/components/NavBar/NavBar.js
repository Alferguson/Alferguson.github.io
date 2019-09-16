import React from "react";
import { Link } from "gatsby";
import styles from "./NavBar.module.css";

const NavBar = ({ location }) => {
  const { pathname } = location;

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to="/contact/">
            <p>Contact</p>
          </Link>
        </li>
        <li>
          <Link to="/blog/">
            <p>Blog!</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
