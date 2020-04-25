import React from "react";
import styles from "./layout.module.css";
import NavBar from "../navbar";

// Wraps every page with header, navbar, and footer
// Main contains actual page components
const Layout = (props) => {
  const { children, location, title } = props;

  return (
    <div className={styles.layout}>
      <header>
        <h1>John Alexander Ferguson</h1>
        <hr></hr>
        {/* <Navbar location={location} title={title} /> */}
      </header>
      <div>
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
