import React from "react";
import styles from "./layout.module.css";

// Wraps every page with header, navbar, and footer
// Main contains actual page components
const Layout = props => {
  const { children, location, title } = props;

  return (
    <div className={styles.pageTemp}>
      <header>
        <h1>John Alexander Ferguson</h1>
        <hr></hr>
        {/* <Navbar location={location} title={title} /> */}
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
