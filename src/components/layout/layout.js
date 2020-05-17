import React from "react";
import styles from "./layout.module.css";
import NavBar from "../navbar";

// Wraps every page with header, navbar, and footer
// Main contains actual page components
const Layout = ({ children, location, title }) => {
  return (
    <div className={styles.layout}>
      <header>
        <h1>John Alexander Ferguson</h1>
        <h3>full stack web developer</h3>
      </header>
      <div className={styles.navAndMain}>
        <NavBar />
        <main>{children}</main>
      </div>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
