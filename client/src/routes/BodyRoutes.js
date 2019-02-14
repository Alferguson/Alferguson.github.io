import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from "react-router";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Transistion from "../components/Transistion";

const BodyRoutes = props => {
  return (
    <Switch>
      <Route exact path="/" render={ () => <Transistion><AboutMe /></Transistion>}/>
      <Route exact path="/aboutMe" render={ () => <Transistion><AboutMe /></Transistion>}/>
      <Route exact path="/skills" render={ () => <Transistion><Skills /></Transistion>}/>
      <Route exact path="/contact" render={ () => <Transistion><Contact /></Transistion>}/>
    </Switch>
  )
}

BodyRoutes.propTypes = {

}

export default BodyRoutes
