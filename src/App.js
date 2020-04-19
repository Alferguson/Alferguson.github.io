import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AboutMe, CoolProjects, ContactMe, Dunno } from "./components/Pages";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__body">
            <div className="App__center">
              <AboutMe />
              
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
