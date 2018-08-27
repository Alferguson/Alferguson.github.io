import React from "react";
import Pic from "../Pic";
import TextBody from "../TextBody";
import RoundBox from "../RoundBox";
import "./AboutMe.css";

export const AboutMe = props =>
	<div className="two-grid">
    <Pic className="pic pic-smaller" src="./alfergusonPic.jpg" alt="Me" />
    <TextBody className="aboutMeText" />
    <RoundBox />
  </div>;
