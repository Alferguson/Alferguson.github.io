import React from 'react';
import { Switch, Route } from "react-router";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import PropTypes from 'prop-types';

const BodyRoutes = props => {
  return (
    <Switch>
      <Route exact path="/" component={AboutMe}/>
      <Route exact path="/aboutMe" component={AboutMe}/>
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/contact" component={Contact}/>
    </Switch>
  )
}

BodyRoutes.propTypes = {

}

export default BodyRoutes
