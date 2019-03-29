import React from 'react';
import { useEventListener } from "./hooks/useEventListener";
import NavBar from "./components/NavBar";
import BodyRoutes from "./routes";
import { BrowserRouter as Router } from 'react-router-dom';
import styles from "./App.module.css";

const App = () => {
  useEventListener("scroll", e => {
    const scrolled = window.pageYOffset;
    const background = document.querySelector("#background");
    background.style.top = - (scrolled * 0.2) + "px";
  })

  return (
    <Router>
      <div id="background" className={styles.mainContent}>
        <NavBar />
        <BodyRoutes />
      </div>
    </Router>
  );
}

export default App;