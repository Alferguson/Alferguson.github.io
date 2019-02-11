import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import BodyRoutes from "./routes";
import { BrowserRouter as Router } from 'react-router-dom';
import styles from "./App.module.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.mainContent}>
          <NavBar />
          <BodyRoutes />
        </div>
      </Router>
    );
  }
}

export default App;