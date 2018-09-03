import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Welcome, AboutMe, CoolProjects, ContactMe, Dunno } from "./components/Pages";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__navbar">
            <Navbar />
          </div>
          <div className="App__body">
            <div className="App__center">
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/about-me" component={AboutMe} />
                <Route exact path="/cool-projects" component={CoolProjects} />
                <Route exact path="/contact-me" component={ContactMe} />
                <Route exact path="/i-dunno" component={Dunno} />
              </Switch>
            </div>
          </div>
			  </div>
      </Router>
    );
  }
}

export default App;
