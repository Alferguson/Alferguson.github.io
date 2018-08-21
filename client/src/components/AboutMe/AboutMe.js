import React from "react";
import Pic from "../Pic";
import TextBody from "../TextBody";
import "./AboutMe.css";

const AboutMe = props =>
	<div className="four-grid">
    <Pic className="pic" />
    <TextBody className="aboutMeText" />
  </div>;
export default AboutMe;