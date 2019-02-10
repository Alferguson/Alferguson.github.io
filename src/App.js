import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
      </Router>
    );
  }
}

export default App;