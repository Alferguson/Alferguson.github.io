import React from "react";
import Navbar from "../NavBar";
import styles from "./PageTemplate.module.css";
import "typeface-slabo-27px";
import "typeface-staatliches";

// Wraps every page with header, navbar, and footer
// Main contains actual page components
const PageTemplate = props => {
  const { children } = props;
  return (
    <div className={styles.pageTemp}>
      <header>
        <h1>John Alexander Ferguson</h1>
        <hr></hr>
      </header>
      <Navbar />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default PageTemplate;
